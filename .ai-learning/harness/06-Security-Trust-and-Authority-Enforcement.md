# Security, Trust, and Authority Enforcement

Status: Draft
Version: 2.0-draft.1

Parent Documents

- 00-Harness-Implementation-Architecture.md
- 01-Runtime-Responsibility-and-Instruction-Materialization.md
- 02-Context-Authority-and-Truth-Implementation.md
- 03-Learner-State-Persistence-and-Educational-Authority.md
- 04-Evidence-Claims-and-Completion-Implementation.md
- 05-External-Capabilities-Tools-and-Environment-Integration.md
- 03-Context-and-Truth-Contracts.md
- 02-Instruction-Authority-and-Composition.md

Related Documents

- 03-System-Architecture.md
- 08-Memory-Model.md
- 04-Engineering-Artifacts-and-Traceability.md
- 05-Superpowers-and-External-Capability-Boundaries.md
- 06-Instruction-Outputs-Claims-and-Stage-5-Contracts.md
- ADR-001-Separation-of-Application-and-Learning-Infrastructure.md

---

# 1. Purpose

This document defines how AI Learning Harness physically enforces security, trust, and semantic authority boundaries during runtime execution.

It answers:

> How should the Harness protect trusted ALH instructions, project and learner state, tools, external capabilities, persistence, and authority-sensitive operations from accidental or adversarial boundary violations without treating technical access as semantic authority?

The governing principle is:

```text
Technical Capability
        ≠
Semantic Authority
```

and:

```text
Context Presence
        ≠
Instruction Authority
```

and:

```text
Trusted Source for Facts
        ≠
Trusted Source for Instructions
```

Security mechanisms MUST preserve accepted Stage 1–4 responsibility and authority boundaries.

They MUST NOT create new semantic authority merely through technical isolation, credentials, process ownership, or runtime privilege.

---

# 2. Responsibility Boundary

This document owns Stage 5 implementation design for:

- trust classification;
- trusted and untrusted context separation;
- instruction-authority protection;
- prompt-injection resistance;
- authority-sensitive operation enforcement;
- tool authorization;
- project-write authorization;
- learner-state mutation protection;
- external-capability trust boundaries;
- model-output trust handling;
- host-environment trust handling;
- secrets and credential handling;
- storage protection;
- path and scope restrictions;
- execution isolation where proportionally required;
- security-sensitive provenance;
- fail-safe behavior;
- auditability of sensitive operations.

It MUST NOT redefine:

- Stage 1 security responsibilities;
- Stage 2 educational authority;
- Stage 3 engineering obligations;
- Stage 4 instruction authority;
- learner-state ownership;
- project-state ownership;
- external-capability ownership;
- Engineering Done;
- Educational Done.

---

# 3. Core Security Distinctions

The implementation MUST preserve:

```text
Technical Access
        ≠
Semantic Authority
```

```text
Source Authority
        ≠
Instruction Authority
```

```text
Instruction Authority
        ≠
Tool Authority
```

```text
Tool Availability
        ≠
Tool Authorization
```

```text
Read Access
        ≠
Write Access
```

```text
Write Capability
        ≠
Write Authority
```

```text
Project Write Authority
        ≠
Learner-State Write Authority
```

```text
Authenticated
        ≠
Authorized for Every Operation
```

```text
Trusted Transport
        ≠
Trusted Content
```

Security architecture MUST NOT collapse these distinctions.

---

# 4. Trust Model

Trust in ALH is domain-specific.

A context item, actor, tool, or integration MAY be trusted for one purpose while untrusted for another.

For example:

```text
Repository Source File
```

may be authoritative for current project content while remaining untrusted as an instruction source.

Likewise:

```text
Model Output
```

may be useful as reasoning output while remaining non-authoritative for execution claims or learner-state mutation.

The implementation SHOULD avoid one universal boolean such as:

```text
trusted = true
```

for all security and semantic purposes.

---

# 5. Trust Dimensions

Where materially relevant, the Harness SHOULD distinguish dimensions such as:

- factual source authority;
- instruction trust;
- execution trust;
- mutation authority;
- confidentiality sensitivity;
- provenance quality;
- external-system trust.

These dimensions MAY share implementation metadata.

They MUST remain semantically distinguishable.

---

# 6. Trust Zones

The initial Harness architecture SHOULD recognize trust zones equivalent to:

```text
Harness-Controlled Instructions
```

```text
Authoritative ALH State
```

```text
Authoritative Project State
```

```text
Learner / User Input
```

```text
Project Content
```

```text
Model Output
```

```text
External Capability Output
```

```text
Tool Output
```

```text
Secrets / Credentials
```

These zones need not map one-to-one to processes or databases.

They define security interpretation boundaries.

---

# 7. Instruction Authority Boundary

Harness-owned instruction material MUST remain distinguishable from contextual content supplied to a model or coding agent.

Content originating from:

- learner input;
- repository files;
- generated documents;
- model output;
- external capability results;
- tool output;

MUST NOT automatically gain ALH instruction authority.

The Harness SHOULD use the strongest available structured role or message separation supported by the execution environment.

Where such separation is unavailable, the implementation SHOULD use explicit framing and deterministic operation controls to compensate.

---

# 8. Prompt Injection Boundary

Project and external content MUST be treated as potentially containing instructions that attempt to influence model behavior outside their semantic authority.

Examples MAY include repository text requesting the model to:

- ignore ALH constraints;
- disclose secrets;
- mutate learner state;
- bypass verification;
- perform unauthorized tool operations;
- reinterpret architectural rules.

Such text MAY remain valid project content.

It MUST NOT become Harness instruction authority.

---

# 9. Prompt Injection Defense Direction

Prompt-injection defense SHOULD use defense in depth.

The initial implementation SHOULD combine:

- instruction / context separation;
- provenance-aware context representation;
- least-privilege tool exposure;
- authority-sensitive operation gates;
- output / operation validation;
- secrets minimization;
- explicit untrusted-content treatment.

Prompt wording alone MUST NOT be the sole protection for high-impact operations.

---

# 10. Model Compliance Is Not Enforcement

The Harness MUST NOT assume that a model will always follow security instructions correctly.

For authority-sensitive operations:

```text
Model Says Operation Is Allowed
        ≠
Operation Is Authorized
```

For authority-sensitive operations, applicable authorization MUST remain
distinguishable from model judgment.

Authorization MAY be provided or enforced through:

- accepted ALH semantic rules;
- deterministic ALH validation;
- host-native authorization or confirmation;
- operation-specific ALH controls;
- combinations of these mechanisms.

ALH-controlled technical policy is required only where a concrete accepted ALH
boundary cannot otherwise be sufficiently preserved.

---

# 11. Authority Enforcement Boundary

The Harness MUST preserve an explicit semantic Authority Enforcement boundary for
authority-sensitive operations.

This boundary does not imply one universal physical policy engine or interception
layer.

Depending on the operation and environment, it MAY be materialized through:

- accepted instructions;
- structured authority metadata;
- host-native permissions or confirmation;
- policy functions;
- operation-specific validators;
- adapter-level guards;
- deterministic validation;
- combinations of these mechanisms.

A single general-purpose mechanism is not required.

---

# 12. Operation Identity

Authority-sensitive operations SHOULD have explicit operation identity.

Examples MAY include:

- read project file;
- write project file;
- execute command;
- invoke capability;
- write learner state;
- accept educational evidence;
- declare completion;
- access secret.

Operation identity allows the Harness to apply authority at the action level rather than granting broad undifferentiated access.

---

# 13. Least Privilege

The Harness SHOULD follow least privilege.

An Execution Unit SHOULD receive only:

- context it materially needs;
- tools it materially needs;
- operations it is authorized to perform;
- credentials required for those operations.

Broad access SHOULD NOT be granted solely to simplify orchestration.

Least privilege SHOULD be balanced against correctness and maintainability.

---

# 14. Read / Write Separation

Read and mutation authority SHOULD remain separate.

The Harness SHOULD distinguish at least:

```text
Read Project State
        ≠
Modify Project State
```

```text
Read Learner State
        ≠
Modify Learner State
```

```text
Read Configuration
        ≠
Modify Security Configuration
```

This MAY be enforced through operation-level policy even where one physical adapter provides both capabilities.

---

# 15. Project Write Authority

Project writes MUST be authorized within the applicable engineering and user interaction context.

A model or agent capable of generating code MUST NOT automatically receive unrestricted write authority.

Project mutation policy SHOULD consider:

- requested task;
- project scope;
- allowed workspace;
- applicable engineering operation;
- destructive impact;
- security policy.

The exact learner-confirmation policy is an implementation decision unless upstream semantics require one.

---

# 16. Learner-State Write Authority

Learner-state writes MUST remain subject to the Educational Mutation Boundary
defined in:

`03-Learner-State-Persistence-and-Educational-Authority.md`

Security and authority design MUST preserve:

```text
Technical Storage Access
        ≠
Educational Mutation Authority
```

Alternative technical write paths MUST NOT acquire or establish educational
authority merely through physical storage access.

A model, tool, adapter, or host environment with technical storage access MUST
NOT establish an authoritative learner-state transition unless the accepted
educational authority and evidence path supports that transition.

Where proportional, deterministic validation SHOULD detect, reject, invalidate,
or support reconciliation of semantically unauthorized transitions.

Hard prevention of alternative physical write paths MAY be used where supported
by the host environment and justified by the applicable risk.

It is not a baseline ALH requirement.

## Project-Owner Trust Boundary

ALH v1 does not treat the project owner as an adversary with respect to deliberate
modification of project-resident `.ai-learning/` state.

The security objective is primarily to prevent incorrect or unauthorized
automated behavior from acquiring semantic authority.

The Harness MAY detect invalid owner-created state but MUST NOT require a security
architecture whose purpose is to prevent the owner from deliberately editing
their own ALH files.

This exception is narrow.

It MUST NOT be generalized to:

- untrusted repository content;
- external actors;
- secrets;
- destructive host operations;
- credential misuse;
- external capability trust;
- instruction-authority boundaries.

---

# 17. Educational Decision / Mutation Separation

The Stage 5 implementation direction remains:

```text
Educational Decision
        ≠
Physical Learner-State Mutation
```

Security design MUST preserve this separation.

Even when both operations execute in one process:

```text
Decision
        ↓
Authority Validation
        ↓
Mutation Authorization
        ↓
Persistence
```

MUST remain inspectable as separate semantic steps.

---

# 18. Project / Learner Storage Separation

ADR-001 MUST be physically enforceable.

The Harness SHOULD prevent authoritative learner-state persistence into application-owned paths.

The implementation SHOULD establish storage boundaries sufficient to distinguish:

```text
Application Workspace
```

from:

```text
ALH Learning Infrastructure
```

A filesystem path, database namespace, storage adapter, or equivalent mechanism MAY provide the physical separation.

---

# 19. Path Scope Enforcement

File operations SHOULD operate inside explicit allowed path scopes.

The implementation SHOULD distinguish:

- application project root;
- ALH infrastructure root;
- temporary working area;
- protected configuration or credential locations.

Path traversal or equivalent scope escape SHOULD be prevented where the adapter can enforce it.

---

# 20. Destructive Operations

Destructive operations SHOULD receive stronger controls than ordinary reads or reversible writes.

Examples MAY include:

- deleting project files;
- destructive version-control operations;
- overwriting learner state;
- removing evidence history;
- modifying security configuration;
- destructive deployment operations.

Controls MAY include:

- explicit policy denial;
- additional confirmation;
- narrower execution context;
- backup or rollback mechanism.

The exact policy remains proportional to supported environments.

---

# 21. Tool Authorization

Tool authorization MUST occur independently from tool availability.

Conceptually:

```text
Tool Request
        ↓
Operation Classification
        ↓
Authority Check
        ↓
Security Check
        ↓
Tool Invocation
```

Native model-provider tool calling MUST NOT bypass this path.

---

# 22. Shell Security

Shell execution is a high-risk capability.

The Harness SHOULD constrain shell operations through mechanisms such as:

- project-root working directory;
- controlled environment variables;
- command classification;
- path restrictions;
- credential minimization;
- execution timeout;
- output capture.

Unrestricted shell access SHOULD NOT be treated as the default integration mechanism where narrower tools can satisfy the requirement safely.

---

# 23. Command Construction

Where commands are constructed from untrusted content, the Harness SHOULD avoid unsafe direct interpolation.

The implementation SHOULD use:

- structured arguments;
- validated parameters;
- safe invocation APIs;

where available.

Model-generated shell text SHOULD be treated as a proposed operation, not as automatically executable authority.

---

# 24. External Capability Security

External capability invocation MUST pass through the same applicable authority and trust boundaries as other operations.

A capability adapter SHOULD expose enough information for the Harness to evaluate:

- capability identity;
- requested operation;
- context being sent;
- required credentials;
- expected side effects.

The fact that a capability is external MUST NOT exempt it from ALH security policy.

---

# 25. Superpowers Security Boundary

Superpowers remains an external capability dependency.

Its verified execution contract determines its capability behavior.

ALH remains responsible for:

- deciding whether invocation is permitted;
- selecting context supplied to it;
- protecting learner state;
- interpreting results;
- preserving evidence and completion semantics.

Superpowers internal execution authority MUST NOT be assumed to extend into ALH educational authority.

---

# 26. Host Environment Trust

A host coding environment may have extensive technical access.

Such access MUST NOT be equated with ALH semantic authority.

The Harness SHOULD treat host-provided:

- agent output;
- tool results;
- environment metadata;
- workspace operations;

according to explicit integration contracts.

Host capability does not waive Harness authority or evidence checks.

---

# 27. Model Output Trust

Model output SHOULD be treated as derived content.

It MAY propose:

- actions;
- interpretations;
- tool calls;
- educational decisions;
- engineering conclusions.

It MUST NOT directly establish:

- execution success;
- accepted educational evidence;
- authoritative learner-state mutation;
- Engineering Done;
- Educational Done;
- security authorization.

unless the relevant accepted authority and evidence paths independently establish those states.

---

# 28. Secrets

Secrets MAY include:

- API keys;
- access tokens;
- repository credentials;
- service credentials;
- private environment configuration.

The Harness SHOULD minimize secret exposure to:

- models;
- prompts;
- logs;
- evidence records;
- user-facing output;
- external capabilities.

Secrets SHOULD be supplied only to the specific adapter or operation requiring them.

---

# 29. Secret Storage

Secret storage SHOULD use an environment-appropriate secure mechanism.

Secrets MUST NOT be persisted in:

- learner application artifacts;
- prompt artifacts;
- learner educational state;
- Evidence Journal;
- ordinary diagnostic logs;

unless the storage mechanism is explicitly designed for secret handling.

The exact secret-management technology remains an implementation decision.

---

# 30. Secret Redaction

The Harness SHOULD redact known secrets from:

- logs;
- diagnostics;
- model context;
- execution evidence;
- error messages;
- user-facing output;

where exposure is not required.

Redaction MUST preserve enough operational information for debugging without reproducing the secret.

---

# 31. Credential Authority

Possession of credentials provides technical capability.

It MUST NOT create semantic authority.

For example:

```text
Repository Token Available
        ≠
Authorized to Push Arbitrary Changes
```

and:

```text
Learner-State Database Credential Available
        ≠
Authorized to Change Competency State
```

Operational authorization remains separate.

---

# 32. Network Access

Where the Harness or tools support network access, the implementation SHOULD consider:

- allowed destinations;
- credential exposure;
- external data trust;
- data exfiltration risk;
- necessity for the current operation.

Unrestricted network access SHOULD NOT be assumed necessary for every Execution Unit.

---

# 33. External Data

External data MAY be factually useful while remaining untrusted for instructions.

The Harness SHOULD preserve provenance and trust classification for external data.

External content MUST NOT silently:

- override accepted ALH documents;
- change security policy;
- grant tool access;
- authorize learner-state mutation.

---

# 34. Context Minimization

Security-sensitive Execution Units SHOULD receive only the context required for their task.

Context minimization SHOULD reduce unnecessary exposure of:

- learner state;
- project secrets;
- credentials;
- unrelated repository content;
- sensitive historical records.

Context minimization MUST NOT remove authoritative context required for correct decisions.

---

# 35. Data Classification

The initial implementation SHOULD support a lightweight data classification sufficient to distinguish at least:

- ordinary project context;
- learner-state data;
- sensitive configuration;
- secrets;
- untrusted external content.

The exact classification scheme remains open.

A complex enterprise data-governance model is not required for the initial proportional Harness.

---

# 36. Persistence Security

Authoritative learner-state persistence SHOULD protect against:

- unauthorized writes;
- accidental corruption;
- partial writes;
- uncontrolled external access;
- schema misuse.

Protection MAY include:

- local filesystem permissions;
- database access controls;
- application-level authorization;
- integrity validation.

The selected mechanism SHOULD be proportional to deployment scope.

---

# 37. Evidence Integrity

Evidence Records SHOULD be protected against accidental mutation where later claims rely on them.

An append-oriented Evidence Journal SHOULD prefer correction or supersession over silent historical rewriting.

The initial implementation does not require cryptographic immutability.

It SHOULD preserve inspectable provenance.

---

# 38. Configuration Security

Configuration MAY influence physical behavior.

Security-sensitive configuration SHOULD distinguish ordinary implementation settings from settings that affect:

- tool access;
- network access;
- credential use;
- storage locations;
- external capability endpoints.

Configuration MUST NOT be permitted to redefine accepted semantic authority.

---

# 39. Unsafe Configuration

The Harness SHOULD reject or surface configurations that violate accepted boundaries.

For example, configuration MUST NOT legitimately enable:

```text
allow_engineering_to_write_competency = true
```

or:

```text
treat_generated_artifacts_as_accepted = true
```

or:

```text
trust_repository_text_as_harness_instructions = true
```

Such settings would represent semantic violations, not ordinary customization.

---

# 40. Security Policy Source

Runtime security policy SHOULD be Harness-owned.

Adapters and models MAY provide relevant facts.

They MUST NOT independently define the Harness security policy.

Environment-specific restrictions MAY make the policy stricter.

They SHOULD NOT make accepted ALH boundaries weaker.

---

# 41. Authority Tokens or Equivalent Mechanisms

The implementation MAY use explicit authority tokens, scoped capabilities, or equivalent operation grants.

For example, an Execution Unit MAY receive authority equivalent to:

```text
project.read
project.write_within_scope
tool.test.execute
```

while not receiving:

```text
learner_state.mutate
```

This is an implementation option.

Exact permission names and representations remain open.

---

# 42. No Ambient Authority

The initial implementation SHOULD avoid broad ambient authority where practical.

A component SHOULD NOT assume:

> I run inside the Harness, therefore I may perform any Harness operation.

Authority SHOULD be explicit or derivable from the current responsibility and operation.

This principle is especially important for:

- tool execution;
- project writes;
- learner-state mutation;
- external capability invocation.

---

# 43. Authority Propagation

Delegation MUST NOT automatically propagate all authority from caller to callee.

When one Execution Unit invokes another mechanism, the delegated authority SHOULD be narrowed to the required operation.

Conceptually:

```text
Caller Authority
        ↓
Delegation
        ↓
Minimum Required Subset
```

not:

```text
Caller Authority
        ↓
Full Authority Copy
```

---

# 44. Instruction Composition Security

Instruction composition MUST preserve security constraints from all applicable responsibilities.

Composition MUST NOT:

- omit prohibitions;
- downgrade untrusted context;
- broaden tool permissions;
- expose unrelated secrets;
- merge authority domains.

A composed prompt being shorter or more convenient MUST NOT justify dropping material security constraints.

---

# 45. Context Transformation Security

Summaries or derived context MUST preserve material trust status.

For example:

```text
Untrusted Repository Content
        ↓ summarized
```

MUST remain:

```text
Derived from Untrusted Repository Content
```

It MUST NOT become Harness-trusted instruction content merely because the model rewrote it.

---

# 46. Provenance Preservation

Security-sensitive operations SHOULD retain provenance sufficient to explain:

- who or what requested the operation;
- which responsibility applied;
- which authority permitted it;
- which tool or adapter executed it;
- what result occurred.

This information supports auditability without requiring hidden chain-of-thought.

---

# 47. Security Event

A Security Event is an observed security-relevant condition or decision.

Examples MAY include:

- denied unauthorized mutation;
- blocked out-of-scope file access;
- detected untrusted instruction attempt;
- secret redaction;
- denied tool invocation;
- adapter security failure.

Security Events SHOULD be observable through Stage 5 observability mechanisms.

They MUST NOT automatically become educational evidence.

---

# 48. Security and Educational Evidence

Security-related learner behavior MAY in some cases create Candidate Educational Evidence.

For example, a learner may demonstrate secure engineering reasoning.

However:

```text
Security Event
        ≠
Educational Evidence
```

automatically.

Any educational interpretation MUST follow the accepted evidence path.

---

# 49. Fail-Safe Defaults

When authority or security status cannot be established for a high-impact operation, the Harness SHOULD fail safely.

For example:

```text
Authority Unknown
        ↓
Do Not Perform Sensitive Mutation
```

is preferable to granting access by assumption.

Fail-safe behavior SHOULD remain proportional.

Low-impact advisory responses need not be blocked merely because a mutation is denied.

---

# 50. Denial Semantics

An authorization denial SHOULD remain distinguishable from:

- capability unavailable;
- execution failure;
- missing context;
- not applicable.

The Harness SHOULD preserve the reason at a level suitable for diagnostics and user-facing explanation.

Sensitive internal policy details need not always be exposed.

---

# 51. Confirmation

Some operations MAY require explicit user confirmation as an additional safety mechanism.

Confirmation MAY be appropriate for:

- destructive project operations;
- external publication;
- sensitive deployment;
- credential-sensitive actions.

User confirmation MUST NOT substitute for missing semantic authority.

A learner cannot confirm an operation that violates an accepted architectural boundary merely by saying yes.

---

# 52. Security and Semantic Independence

Physical isolation MAY support Semantic Independence where shared context or privileges would create contamination risk.

However:

```text
Separate Process
        ≠
Semantically Independent
```

if the separate process still receives biased or authority-confusing input.

Security isolation and semantic independence MAY overlap.

They remain distinct design concerns.

---

# 53. Process Isolation

Separate processes, containers, sandboxes, or restricted execution environments MAY be used where justified by:

- untrusted code execution;
- shell risk;
- external tool isolation;
- credential isolation;
- destructive-operation containment.

Such isolation SHOULD be introduced based on risk, not conceptual naming.

The initial Harness MUST NOT require microservice or container topology solely for architectural neatness.

---

# 54. Untrusted Code Execution

If ALH executes learner or generated code, that execution MAY be security-sensitive.

The implementation SHOULD consider isolation appropriate to:

- project type;
- supported environment;
- network access;
- filesystem access;
- credential exposure.

A universal sandbox implementation is not mandated by this document.

Where safe execution cannot be provided, environment support MAY need to limit execution capability.

---

# 55. External Capability Isolation

External capability execution MAY occur outside direct Harness isolation.

Where capability behavior can materially affect project or learner security, the adapter SHOULD expose enough contract and execution information to support risk evaluation.

Unknown external behavior SHOULD not be treated as safe by default.

---

# 56. Logging Security

Logs SHOULD avoid storing:

- raw secrets;
- unnecessary learner-sensitive information;
- full prompt context where not needed;
- hidden reasoning;
- unnecessary project content.

Logs SHOULD prefer structured operational metadata.

Detailed observability requirements are defined downstream.

---

# 57. Explainability and Security

Security-sensitive decisions SHOULD be externally explainable at an appropriate level.

For example:

```text
Operation denied because learner-state mutation
requires educational authority not present
```

is preferable to an opaque generic failure.

Explainability MUST NOT require exposing:

- secrets;
- hidden policy implementation details;
- hidden chain-of-thought.

---

# 58. Security Failure Semantics

The Harness SHOULD distinguish:

```text
Authentication Failure
```

```text
Authorization Failure
```

```text
Policy Denial
```

```text
Trust Classification Failure
```

```text
Secret Unavailable
```

```text
Execution Isolation Failure
```

```text
External Security Failure
```

These states MAY require different recovery behavior.

---

# 59. Security Failure and Claims

A blocked or failed operation MUST NOT produce a success claim.

For example:

```text
Write Denied
        ≠
File Updated
```

and:

```text
Tool Invocation Blocked
        ≠
Verification Performed
```

The Evidence and Claim architecture MUST receive the actual security outcome.

---

# 60. Retry After Security Denial

A security denial SHOULD NOT be automatically retried unchanged.

Retry MAY occur only when relevant conditions change, such as:

- authority obtained;
- user confirmation obtained where applicable;
- configuration corrected;
- safer operation selected.

Repeatedly attempting a denied operation SHOULD NOT be used to bypass policy.

---

# 61. Security Boundary Around Evidence Claims

The Claim Enforcement boundary SHOULD itself be protected from arbitrary model override.

A model MUST NOT be able to request:

```text
mark_verified = true
```

without corresponding evidence and authority.

Structured completion and claim states SHOULD be produced through Harness-controlled evaluation paths.

---

# 62. Security Boundary Around Artifact Acceptance

Artifact acceptance status MUST be protected as an authority-sensitive state.

Generated or model-authored content MUST NOT mark itself accepted.

Acceptance MUST come from the applicable governance or authority mechanism.

Repository write access alone MUST NOT establish normative acceptance.

---

# 63. Security Boundary Around Completion

Engineering Done and Educational Done are authority-sensitive claims.

The Harness MUST prevent arbitrary runtime components from setting these states directly.

Completion SHOULD be established only by the applicable completion evaluation path.

---

# 64. Adapter Trust Boundary

Adapters translate external systems into Harness contracts.

They SHOULD be considered trusted implementation code but not semantic authorities.

Adapter output SHOULD remain subject to:

- provenance;
- evidence interpretation;
- authority checks;
- security policy.

An adapter bug MUST NOT be treated as a legitimate change in ALH semantics.

---

# 65. Adapter Input Validation

Adapters SHOULD validate inputs appropriate to their external contract.

Validation MAY include:

- path scope;
- parameter type;
- operation class;
- required credentials;
- unsupported operation detection.

Validation SHOULD fail before external side effects where practical.

---

# 66. Adapter Output Validation

Adapters SHOULD normalize and validate outputs sufficiently to determine:

- execution status;
- malformed results;
- unavailable result;
- unexpected behavior.

Malformed external output MUST NOT silently become trusted evidence.

---

# 67. Security and External Contract Drift

External capability or environment changes MAY invalidate previous security assumptions.

Material contract drift SHOULD trigger:

- adapter review;
- capability re-verification;
- security reassessment where required.

External evolution MUST NOT silently broaden Harness authority.

---

# 68. Initial Security Architecture Direction

The initial Stage 5 implementation SHOULD use layered enforcement:

```text
Context Trust Classification
        ↓
Responsibility / Authority Resolution
        ↓
Operation-Level Authorization
        ↓
Adapter / Tool Guard
        ↓
Execution
        ↓
Evidence Capture
        ↓
Claim Enforcement
```

This flow MAY exist within one process.

It does not require a dedicated security service.

The key requirement is that authority-sensitive operations cross an explicit enforceable boundary.

---

# 69. Initial Trust Representation Direction

The initial implementation SHOULD represent enough trust metadata to distinguish:

```text
Harness Instruction
Project Context
Learner Input
Model Output
Tool Output
External Capability Output
Secret / Sensitive Data
```

and, separately where required:

```text
authoritative for claim domain
non-authoritative
untrusted for instructions
```

The exact type system or schema remains open.

---

# 70. Initial Authority Direction

The initial implementation SHOULD use operation-scoped authority rather than broad component-level authority.

For example:

```text
Engineering Execution Unit
    may:
        read project
        write project within task scope
        run tests

    may not:
        mutate learner competency
        accept educational evidence
```

This is an implementation pattern.

Exact permissions remain downstream planning decisions.

---

# 71. Initial Tool Security Direction

The initial implementation SHOULD prefer host-native execution and safety
mechanisms for ordinary development-tool operations where they sufficiently
preserve applicable ALH contracts.

The baseline flow MAY be:

```text
ALH Semantic Constraints
        ↓
IDE / Coding Agent
        ↓
Host-Native Authorization / Safety
        ↓
Host-Native Tool
        ↓
Execution Result / Evidence
```

ALH-specific technical mediation SHOULD be introduced only where a concrete
accepted ALH authority, trust, or evidence boundary cannot be sufficiently
preserved through:

- accepted instructions;
- host-native controls;
- structured evidence;
- deterministic validation;
- another weaker proportional mechanism.

Therefore:

```text
Semantic Tool Authority
        ≠
Mandatory Harness Tool Proxy
```

Provider-native or host-native execution mechanics MUST NOT create ALH semantic
authority merely because they can perform an operation.

---

# 72. Initial Secrets Direction

The initial implementation SHOULD prefer environment- or host-managed secret injection into adapters.

Secrets SHOULD NOT be placed directly into general model context unless the external contract absolutely requires it and no safer mechanism exists.

---

# 73. Initial Isolation Direction

The first proportional implementation SHOULD use logical and operation-level isolation before introducing heavy physical isolation.

Stronger process or sandbox isolation SHOULD be introduced where concrete execution risk requires it.

This preserves proportional architecture.

---

# 74. Security Verification Direction

Implementation verification SHOULD include tests demonstrating that:

- untrusted context cannot create learner-state write authority;
- read access does not imply mutation authority;
- unauthorized tool requests are denied;
- tool availability does not bypass policy;
- generated claims cannot mark execution successful without evidence;
- project paths cannot cross configured boundaries;
- learner state remains outside application artifacts;
- secrets are not emitted through ordinary logs;
- artifact acceptance cannot be self-declared by generated content.

These tests verify Stage 5 mechanics.

They do not replace Stage 6 validation.

---

# 75. Implementation Decisions Left Open

This document intentionally does not prescribe:

- exact permission model;
- capability-token implementation;
- policy-engine library;
- sandbox technology;
- containerization;
- OS-level isolation;
- secret-management provider;
- authentication protocol;
- encryption algorithm;
- network-policy technology;
- command allowlist format;
- path-policy implementation;
- user-confirmation UX;
- exact trust enum;
- exact data-classification enum;
- exact log-redaction technology;
- centralized vs distributed policy evaluation.

These remain implementation-planning decisions.

They MUST preserve this contract.

---

# 76. Observations

## O-1 — Prompt Injection Is Primarily an Authority Problem

Prompt injection becomes dangerous when untrusted content can influence authority-sensitive behavior.

Treating repository text as data while enforcing operations outside the model substantially reduces this risk.

## O-2 — Learner-State Mutation Is Both an Educational and Security Boundary

The Educational Mutation Gate is not only pedagogical architecture.

It is also a security boundary protecting authoritative learner truth from arbitrary technical writes.

## O-3 — Native Tool Calling Must Remain Mediated

Model-provider tool calling improves ergonomics but cannot be allowed to redefine tool authority.

Harness mediation preserves both security and evidence capture.

## O-4 — Security Does Not Require Immediate Heavy Isolation

Many accepted boundaries can initially be protected through structured context, operation-scoped authority, path restrictions, adapter validation, and mutation gates.

Physical sandboxing should follow concrete risk.

## O-5 — Factual Authority and Instruction Trust Must Remain Separate

Project files are the clearest example: they may be authoritative for what code exists while remaining untrusted as commands to the Harness.

---

# 77. Candidate ADRs

No Candidate ADR is introduced by this document.

The following remain implementation decisions within accepted architecture:

- trust-zone representation;
- operation-level authority enforcement;
- least-privilege execution;
- Harness-mediated tool authorization;
- path-scope enforcement;
- secret minimization;
- layered prompt-injection defense;
- logical-first isolation strategy.

A Candidate ADR would be required if implementation proposed, for example:

- allowing project repository instructions to override accepted Harness authority;
- giving host-agent technical privilege automatic ALH authority;
- allowing direct learner-state database writes outside educational mutation authority;
- weakening ADR-001 for storage convenience.

---

# 78. Future Evolutions

Possible future improvements include:

- capability-based security tokens;
- formally specified operation policies;
- sandboxed untrusted code execution;
- network egress policies;
- cryptographic evidence integrity;
- signed adapter manifests;
- formal trust labels;
- tenant isolation for multi-user deployments;
- hardware-backed credential storage;
- automated prompt-injection detection;
- policy simulation and audit tooling.

These SHOULD NOT complicate the initial proportional Harness unless current risk or deployment requirements justify them.

---

# 79. Completion Criteria

This document is complete when Stage 5 has a normative security and authority-enforcement architecture sufficient to prevent technical access, untrusted context, model output, or external execution mechanisms from silently gaining semantic authority.

At minimum, it MUST establish:

- trust-model distinctions;
- trust zones;
- instruction-authority separation;
- prompt-injection defense direction;
- Authority Enforcement boundary;
- least privilege;
- project-write protection;
- learner-state mutation protection;
- ADR-001 storage enforcement;
- tool authorization;
- shell and file-operation security;
- external-capability security;
- host-agent trust boundary;
- model-output trust boundary;
- secrets handling;
- path scope;
- configuration security;
- no ambient authority;
- delegation authority narrowing;
- security failure semantics;
- security protection of claims, acceptance, and completion;
- initial layered security architecture direction;
- implementation decisions intentionally left open.

Acceptance of this document authorizes configuration, observability, failure-handling, and implementation-verification design in:

`07-Configuration-Observability-and-Implementation-Verification.md`

It does not authorize Harness coding before the applicable Stage 5 normative design chain and implementation plan are complete.
