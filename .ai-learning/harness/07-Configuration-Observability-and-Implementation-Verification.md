# Configuration, Observability, and Implementation Verification

Status: Draft
Version: 2.0-draft.1

Parent Documents

- 00-Harness-Implementation-Architecture.md
- 01-Runtime-Responsibility-and-Instruction-Materialization.md
- 02-Context-Authority-and-Truth-Implementation.md
- 03-Learner-State-Persistence-and-Educational-Authority.md
- 04-Evidence-Claims-and-Completion-Implementation.md
- 05-External-Capabilities-Tools-and-Environment-Integration.md
- 06-Security-Trust-and-Authority-Enforcement.md
- 06-Instruction-Outputs-Claims-and-Stage-5-Contracts.md

Related Documents

- 03-System-Architecture.md
- 04-Engineering-Artifacts-and-Traceability.md
- 06-Superpowers-Integration-and-Engineering-Done.md
- ADR-001-Separation-of-Application-and-Learning-Infrastructure.md

---

# 1. Purpose

This document defines how AI Learning Harness configures physical behavior, exposes implementation-relevant observability, handles operational failure, and verifies that the resulting Stage 5 implementation conforms to accepted Stage 1–4 contracts.

It answers:

> How should the Harness remain configurable, inspectable, diagnosable, and mechanically verifiable without allowing configuration, logs, runtime state, or implementation tests to redefine accepted ALH semantics?

The governing relationship is:

```text
Accepted Stage 1–4 Contract
        ↓
Stage 5 Normative Implementation Contract
        ↓
Concrete Implementation
        ↓
Implementation Verification Evidence
        ↓
Stage 5 Conformance Determination
```

This document defines Stage 5 implementation verification.

It does not define Stage 6 system validation.

---

# 2. Responsibility Boundary

This document owns Stage 5 implementation design for:

- runtime configuration;
- configuration ownership;
- configuration validation;
- configuration provenance;
- environment-specific configuration;
- feature and capability configuration;
- operational observability;
- structured operational events;
- diagnostics;
- correlation and execution identity;
- audit-relevant implementation records;
- implementation failure classification;
- recovery-oriented operational behavior;
- implementation conformance tests;
- adapter verification;
- persistence verification;
- authority-enforcement verification;
- context-contract verification;
- evidence and claim verification;
- Stage 5 completion evidence.

It MUST NOT redefine:

- accepted Stage 1–4 semantics;
- educational effectiveness;
- learner outcomes;
- Stage 3 engineering methodology;
- Stage 6 acceptance or validation criteria.

---

# 3. Core Distinctions

The implementation MUST preserve:

```text
Configuration
        ≠
Semantic Authority
```

```text
Configured Capability
        ≠
Authorized Capability
```

```text
Observed Runtime Event
        ≠
Authoritative Semantic State
```

```text
Diagnostic Log
        ≠
Evidence Record
```

```text
Implementation Test Passed
        ≠
System Validated
```

```text
Component Healthy
        ≠
Semantic Contract Satisfied
```

```text
Operational Success
        ≠
Engineering Done
        ≠
Educational Done
```

These distinctions are essential to prevent operational infrastructure from becoming an accidental architectural authority.

---

# 4. Configuration

Configuration defines permitted physical implementation choices within accepted Stage 5 contracts.

Configuration MAY control:

- adapter selection;
- model provider;
- model identifier;
- storage location;
- capability discovery;
- supported tools;
- logging level;
- observability sinks;
- retry behavior;
- timeout values;
- environment integration;
- cache behavior;
- implementation feature selection.

Configuration MUST NOT redefine accepted semantic responsibility.

---

# 5. Configuration Authority

Configuration is authoritative only for physical settings explicitly delegated to configuration.

For example:

```text
model_provider = X
```

MAY select a provider.

It MUST NOT imply:

```text
model_provider X has broader educational authority
```

Likewise:

```text
tool_enabled = true
```

MUST NOT imply:

```text
tool invocation is always authorized
```

The implementation MUST preserve:

```text
Physical Configuration
        ≠
Semantic Permission
```

---

# 6. Invalid Semantic Configuration

Configuration MUST NOT permit an accepted semantic boundary to be disabled as an ordinary implementation option.

The Harness MUST reject, ignore, or surface configuration equivalent to:

```text
candidate_evidence_is_accepted = true
```

```text
engineering_done_implies_educational_done = true
```

```text
automation_level_controls_tool_permissions = true
```

```text
project_files_may_store_authoritative_learner_state = true
```

```text
model_claims_count_as_execution_evidence = true
```

Such settings are not implementation customization.

They violate accepted architecture.

---

# 7. Configuration Layers

The initial implementation MAY support configuration layers such as:

```text
Built-In Safe Defaults
        ↓
Harness Configuration
        ↓
Environment-Specific Configuration
        ↓
Project-Specific Physical Settings
```

The exact layering is an implementation decision.

Later layers MUST NOT gain authority to weaken invariant semantic or security contracts.

Where configuration values conflict, precedence MUST apply only within the physical configuration domain.

Configuration precedence MUST NOT be treated as semantic authority precedence.

---

# 8. Safe Defaults

The Harness SHOULD provide safe and proportional defaults.

Defaults SHOULD favor:

- local or host-near operation where suitable;
- restricted authority;
- explicit evidence requirements;
- learner-state isolation;
- bounded tool access;
- inspectable persistence;
- limited secret exposure.

Defaults MUST NOT silently perform high-impact operations merely because no explicit configuration was provided.

---

# 9. Environment-Specific Configuration

Environment Adapters MAY require configuration such as:

- workspace identity;
- executable locations;
- host endpoints;
- capability discovery settings;
- provider credentials;
- environment feature flags.

Environment configuration SHOULD remain adapter-specific where practical.

The Harness Kernel SHOULD avoid depending directly on host-specific configuration semantics.

---

# 10. Project-Specific Configuration

A project MAY require physical ALH settings relevant to:

- project root;
- test commands;
- build commands;
- tool adapters;
- project-specific capability mappings;
- context exclusions.

Project-specific configuration MUST remain distinct from learner educational state.

It MUST NOT become a location for authoritative learner-specific competency, Learning Debt, Automation Level, or assessment data.

---

# 11. Configuration Location

Configuration SHOULD be stored within ALH-owned infrastructure where it defines Harness behavior.

Project-owned engineering configuration MAY remain within the project where it already belongs.

The implementation MUST preserve ADR-001.

The existence of application-owned configuration MUST NOT justify placing learner-state information into application artifacts.

---

# 12. Configuration Provenance

Material configuration SHOULD be inspectable enough to determine:

- effective value;
- source;
- override layer;
- environment;
- relevant version.

Configuration provenance is especially useful for:

- adapter behavior;
- external capability use;
- security controls;
- debugging;
- implementation verification.

---

# 13. Configuration Validation

Configuration SHOULD be validated before runtime use where invalid values could cause:

- semantic boundary violation;
- unsafe tool behavior;
- learner-state corruption;
- unsupported environment behavior;
- evidence loss;
- credential exposure.

Validation SHOULD occur as early as practical.

Invalid configuration SHOULD fail clearly rather than produce undefined runtime behavior.

---

# 14. Configuration Schema Direction

The initial implementation SHOULD use a structured configuration representation.

The exact format MAY be:

- YAML;
- TOML;
- JSON;
- environment variables;
- code-defined configuration;
- a combination.

The format is an implementation decision.

The schema SHOULD distinguish stable Harness settings from secrets.

---

# 15. Secret Configuration

Secrets SHOULD NOT be stored as ordinary configuration values where a safer environment-managed mechanism exists.

Configuration MAY reference secret identifiers or environment bindings.

Secret material SHOULD remain outside normal configuration serialization, diagnostics, and version-controlled ALH artifacts where practical.

---

# 16. Configuration Changes

Configuration changes MAY alter physical behavior.

The Harness SHOULD refresh or reinitialize affected runtime mechanisms when material configuration changes.

Where a change invalidates:

- capability assumptions;
- project-state evidence;
- adapter compatibility;
- security policy;

the affected state SHOULD be re-evaluated rather than treated as continuously valid.

---

# 17. Observability Purpose

Observability exists so ALH implementation behavior can be inspected, debugged, verified, and explained.

Observability SHOULD help answer:

- which responsibility was applicable;
- which execution mechanism was selected;
- what context source was used;
- which authority check occurred;
- what tool or capability was invoked;
- what evidence was captured;
- what claim was produced or denied;
- what learner-state mutation occurred;
- what failure occurred.

Observability MUST NOT become hidden semantic authority.

---

# 18. Observability Layers

The implementation SHOULD distinguish at least:

```text
Operational Diagnostics
```

from:

```text
Evidence Records
```

from:

```text
Authoritative State History
```

Operational diagnostics help developers understand runtime behavior.

Evidence Records support claims.

Authoritative state history records accepted learner-state changes.

These MAY share technical infrastructure.

They MUST remain semantically distinguishable.

---

# 19. Structured Operational Events

The Harness SHOULD emit structured operational events for materially significant runtime activity.

Examples MAY include:

- interaction started;
- Responsibility Set resolved;
- context acquired;
- policy decision made;
- model invocation started;
- tool invocation requested;
- capability invocation completed;
- evidence captured;
- claim downgraded;
- learner-state mutation authorized;
- learner-state mutation persisted;
- security operation denied.

The exact event vocabulary remains an implementation decision.

---

# 20. Operational Event Status

An operational event records what the Harness observed about its own physical behavior.

It does not automatically establish broader semantic truth.

For example:

```text
event:
model_invocation_completed
```

does not establish:

```text
engineering task completed
```

Likewise:

```text
event:
learner_state_write_requested
```

does not establish:

```text
learner state successfully changed
```

The implementation MUST retain the distinction between request, execution, result, and semantic interpretation.

---

# 21. Correlation Identity

The Harness SHOULD use correlation identity sufficient to connect related runtime activity.

A correlation structure MAY identify:

- learner interaction;
- Runtime Materialization Plan;
- Execution Unit;
- model invocation;
- tool invocation;
- capability invocation;
- evidence record;
- claim;
- learner-state mutation.

This improves traceability without requiring a universal distributed tracing system.

---

# 22. Interaction Identity

A learner-facing interaction SHOULD have a stable runtime identity where multiple execution operations contribute to one outcome.

Interaction identity MAY support:

- assistance attribution;
- debugging;
- evidence correlation;
- learner-state provenance;
- claim traceability.

Interaction identity MUST NOT imply educational completion.

---

# 23. Execution Identity

Each materially significant execution operation SHOULD have a unique identity or equivalent stable correlation mechanism.

This is particularly important for distinguishing:

```text
Invocation A
        ≠
Retry A
        ≠
Invocation B
```

and for preventing duplicate interpretation of one result as independent evidence.

---

# 24. Evidence Correlation

Observability SHOULD support linking operational execution to Evidence Records.

Conceptually:

```text
Execution Event
        ↓
Execution Result
        ↓
Evidence Record
        ↓
Supported Claim
```

A log message alone SHOULD NOT be required as the authoritative evidence representation.

---

# 25. Mutation Correlation

Learner-state mutation SHOULD be correlatable to:

- educational decision;
- authority validation;
- accepted evidence where required;
- previous state;
- resulting state;
- persistence result.

This preserves the previously accepted implementation direction:

```text
Educational Decision
        ≠
Physical Learner-State Mutation
```

while making the relationship between them inspectable.

---

# 26. Security Event Observability

Security-sensitive operation decisions SHOULD emit structured events where materially useful.

Examples MAY include:

- unauthorized tool request denied;
- learner-state mutation denied;
- path scope violation blocked;
- untrusted content treated as context;
- secret redaction applied;
- external capability blocked by policy.

Security event telemetry MUST avoid exposing secrets or unnecessary sensitive content.

---

# 27. Logging

Logs SHOULD primarily support human-readable diagnostics.

They SHOULD NOT be the only mechanism for:

- evidence capture;
- learner-state history;
- completion state;
- accepted artifact state.

Logs MAY summarize these systems.

They MUST NOT replace their structured authoritative or evidential records.

---

# 28. Log Levels

The implementation MAY support conventional log levels such as:

- error;
- warning;
- info;
- debug;
- trace.

Log-level configuration MUST NOT change semantic execution behavior.

For example:

```text
log_level = debug
```

MUST NOT grant broader context access or tool authority merely to make diagnostics easier.

---

# 29. Sensitive Logging

Logs SHOULD avoid:

- secrets;
- unnecessary learner-sensitive state;
- full model inputs by default;
- complete repository content;
- hidden chain-of-thought;
- credentials;
- unnecessary external payloads.

Debugging needs SHOULD be balanced against confidentiality and data minimization.

---

# 30. Model Invocation Observability

For materially significant model invocations, observability SHOULD be able to identify:

- provider;
- model identity;
- Runtime Materialization Plan or relevant responsibility set;
- instruction materialization identity;
- context references;
- invocation status;
- result status.

Full prompt content need not always be persisted.

The implementation SHOULD preserve enough identity for conformance debugging while minimizing unnecessary sensitive data.

---

# 31. Materialized Instruction Observability

The Harness SHOULD be able to determine which effective instruction materialization applied to a significant execution.

This MAY use:

- instruction artifact references;
- content hashes;
- responsibility-set identity;
- configuration version;
- materialization record.

Observability MUST NOT make the generated prompt authoritative over accepted Stage 4 contracts.

---

# 32. Context Observability

The Harness SHOULD expose enough information to determine:

- context sources used;
- authoritative source classes;
- freshness;
- derivation;
- unresolved conflicts;
- cache involvement.

It SHOULD NOT necessarily persist all context content.

Source references and semantic metadata MAY be sufficient.

---

# 33. Adapter Observability

Adapters SHOULD expose operational status sufficient to identify:

- adapter selected;
- external mechanism;
- request status;
- result status;
- translation error;
- contract mismatch;
- unavailable capability.

Adapter observability is especially important where host environments differ.

---

# 34. Persistence Observability

Learner-state persistence SHOULD expose operational information such as:

- read success / failure;
- state version;
- mutation attempt;
- authorization outcome;
- transaction result;
- duplicate mutation prevention;
- schema migration status.

Observability MUST NOT expose sensitive learner state unnecessarily.

---

# 35. Performance Observability

The Harness MAY collect performance metrics such as:

- model invocation latency;
- tool execution time;
- context retrieval time;
- persistence latency;
- capability invocation time.

Performance data MAY guide future optimization.

It MUST NOT override semantic correctness.

A faster implementation MUST NOT be preferred when it weakens accepted contracts.

---

# 36. Cost Observability

Where external model or capability execution has material cost, the Harness MAY record:

- model usage;
- invocation count;
- provider cost metadata;
- external service usage.

Cost optimization MAY influence physical execution planning.

It MUST NOT alter educational authority, evidence requirements, or engineering rigor semantics.

---

# 37. Failure Model

The Harness SHOULD use explicit failure classification rather than a single generic error state.

Failure categories MAY include:

- configuration failure;
- context acquisition failure;
- authority denial;
- security denial;
- model invocation failure;
- tool invocation failure;
- external capability failure;
- evidence capture failure;
- learner-state persistence failure;
- adapter contract failure;
- unsupported environment;
- internal invariant violation.

The exact taxonomy MAY be refined during implementation planning.

---

# 38. Failure Context

A failure SHOULD retain enough context to determine:

- where it occurred;
- what operation was attempted;
- whether side effects may have occurred;
- whether retry is safe;
- which semantic obligation remains unresolved.

Failure information SHOULD be sufficient for recovery without requiring hidden reasoning.

---

# 39. Failure Is Not Non-Applicability

The implementation MUST preserve:

```text
Applicable but Failed
        ≠
Not Applicable
```

For example, if engineering verification is required but test execution fails due to tool unavailability, the verification obligation remains applicable and unresolved.

Failure MUST NOT silently remove the obligation.

---

# 40. Failure Is Not Negative Semantic Evidence

Operational failure MUST NOT automatically become educational or engineering semantic evidence beyond its actual meaning.

For example:

```text
Test Runner Unavailable
        ≠
Tests Failed
```

and:

```text
Assessment Model Invocation Failed
        ≠
Learner Lacks Competency
```

The Harness MUST preserve uncertainty.

---

# 41. Retry Classification

Failures SHOULD be classified as:

- retryable;
- conditionally retryable;
- non-retryable;
- ambiguous side-effect state.

Retry classification SHOULD consider:

- idempotency;
- external side effects;
- project-state changes;
- authorization changes;
- capability contract.

A generic automatic retry policy SHOULD NOT be applied indiscriminately.

---

# 42. Ambiguous Execution State

Some failures MAY leave execution outcome unknown.

For example:

```text
Invocation Sent
        ↓
Connection Lost
        ↓
Result Unknown
```

The Harness MUST NOT assume either success or failure.

It SHOULD preserve:

```text
Execution Status Unknown
```

and resolve it through:

- direct state inspection;
- external status query;
- safe re-execution where possible;
- explicit uncertainty.

---

# 43. Recovery

Recovery SHOULD restore valid Harness operation without fabricating semantic state.

Recovery MAY involve:

- reloading configuration;
- rebuilding derived caches;
- reconnecting adapters;
- retrying safe operations;
- rolling back transactions;
- reconstructing current learner state;
- re-acquiring project context.

Recovery MUST NOT recreate authoritative learner state from model memory or diagnostic logs.

---

# 44. Derived State Rebuild

Derived implementation state SHOULD be rebuildable from authoritative sources where practical.

Examples MAY include:

- context indexes;
- capability registries;
- caches;
- Runtime Materialization Plans;
- derived learner summaries.

Derived-state loss SHOULD NOT imply authoritative state loss.

---

# 45. Implementation Verification

Implementation Verification demonstrates that concrete Stage 5 mechanics conform to accepted Stage 1–4 contracts and the normative Stage 5 design.

It SHOULD use:

- automated tests;
- integration tests;
- adapter contract tests;
- persistence tests;
- policy tests;
- security tests;
- failure-path tests;
- evidence and claim tests;
- manual implementation inspection where needed.

Implementation Verification answers:

> Did we implement the Harness contracts correctly?

It does not answer:

> Does ALH as a whole achieve its educational and system-level goals?

The latter belongs to Stage 6.

---

# 46. Stage 5 vs Stage 6

The mandatory distinction is:

```text
Stage 5 Implementation Verification
        =
Does the implementation conform
to accepted implementation contracts?
```

```text
Stage 6 Validation
        =
Does the resulting ALH system
satisfy its validation objectives?
```

Stage 5 MUST NOT claim Stage 6 success merely because implementation tests pass.

---

# 47. Verification Matrix

Stage 5 SHOULD maintain a conformance matrix or equivalent traceability mechanism linking:

```text
Accepted Contract
        ↓
Stage 5 Physical Mechanism
        ↓
Implementation Verification
```

The matrix SHOULD remain proportional.

It exists to ensure that critical semantic boundaries are not implemented only implicitly.

---

# 48. Minimum Conformance Areas

Implementation Verification MUST cover at least:

- logical responsibility / physical topology separation;
- Instruction Responsibility / physical topology separation;
- project truth / learner truth separation;
- learner-state read / write authority separation;
- Candidate Educational Evidence / accepted evidence separation;
- Engineering Done / Educational Done separation;
- Automation Level / Engineering Rigor / AI autonomy separation;
- capability applicability / invocation / success separation;
- generated / accepted artifact separation;
- evidence-before-claim enforcement;
- ADR-001 physical enforcement;
- operation-scoped authority;
- untrusted context / Harness instruction separation.

---

# 49. Runtime Responsibility Verification

Tests SHOULD verify that:

- applicable responsibilities can be materialized;
- unrelated responsibilities are not included automatically;
- composition preserves authority boundaries;
- execution order does not create authority;
- one responsibility does not require one agent;
- multiple compatible responsibilities MAY share one Execution Unit.

The tests SHOULD verify semantic properties rather than freeze one topology unnecessarily.

---

# 50. Instruction Materialization Verification

Tests SHOULD verify that materialized instructions preserve:

- required constraints;
- prohibitions;
- authority boundaries;
- output requirements;
- uncertainty requirements;
- evidence requirements.

Where a rule is deterministically enforced, tests SHOULD verify the enforcement mechanism rather than merely checking prompt wording.

---

# 51. Context Contract Verification

Tests SHOULD cover scenarios such as:

- authoritative but stale context;
- relevant but non-authoritative context;
- conflicting context;
- derived summary with source provenance;
- repository HEAD differing from working state;
- cache invalidation;
- direct-source fallback.

The implementation SHOULD demonstrate that these states are not silently collapsed.

---

# 52. Learner-State Verification

Tests MUST demonstrate that:

- project artifacts cannot become authoritative learner state directly;
- ordinary engineering execution cannot establish authoritative competency
  mutation;
- Candidate Educational Evidence remains candidate until Assessment;
- read access does not create mutation authority;
- a physical learner-state write that lacks the required educational authority
  does not establish a valid authoritative transition;
- deterministic validation detects or rejects invalid transitions where such
  validation is part of the selected implementation;
- educational decision and persistence mutation remain logically distinct;
- duplicate authoritative mutations are prevented where required.

---

# 53. ADR-001 Verification

Implementation Verification MUST demonstrate that authoritative ALH learner state remains outside application artifacts.

This SHOULD include tests against:

- normal persistence;
- fallback behavior;
- configuration overrides;
- migration;
- recovery.

A convenient project-storage path MUST NOT bypass ADR-001.

---

# 54. Evidence Verification

Tests SHOULD demonstrate:

```text
requested
        ≠
executed
        ≠
succeeded
```

and verify that strong execution claims require corresponding evidence.

Scenarios SHOULD include:

- execution never invoked;
- invocation failure;
- successful execution;
- lost result;
- stale result;
- result tied to old project state.

---

# 55. Claim Verification

Claim tests SHOULD demonstrate that:

- unsupported claims are downgraded or denied;
- model-generated execution claims do not bypass evidence checks;
- stale evidence cannot support current verified claims;
- conflicting evidence preserves uncertainty;
- completed tool invocation does not automatically establish Engineering Done.

---

# 56. Completion Verification

Implementation tests MUST demonstrate independent Engineering and Educational completion paths.

At minimum:

```text
Engineering Done = true
Educational Done = false / unknown
```

MUST be representable.

Likewise, where semantically possible:

```text
Educational objective satisfied
```

MUST NOT automatically imply that an incomplete engineering task is Engineering Done.

The implementation MUST NOT rely on one combined `done` field.

---

# 57. External Capability Verification

Adapter tests SHOULD verify:

- discovery;
- applicability remains Harness-owned;
- invocation;
- result capture;
- capability unavailability;
- result interpretation;
- fallback boundaries;
- capability success does not automatically establish completion.

Where precise Superpowers behavior materially affects implementation, its upstream contract SHOULD be reverified during implementation planning or adapter construction.

---

# 58. Tool Authorization Verification

Verification SHOULD demonstrate that the selected tool-execution mechanism
preserves:

```text
Tool Available
        ≠
Tool Semantically Authorized
```

Where host-native authorization is used, verification SHOULD confirm that ALH
semantic constraints are compatible with and not silently replaced by host tool
availability.

Where ALH-specific technical mediation is implemented, tests SHOULD verify that
the mediation mechanism enforces its defined contract.

The verification architecture MUST NOT assume that every native model or host
tool request passes through an ALH-controlled proxy.

Learner-state authority MUST NOT be established merely through generic tool or
filesystem access.

## Verification Applicability

Stage 5 Implementation Verification MUST verify the physical mechanisms actually
selected by the implementation.

A mechanism-specific verification section is applicable only when that mechanism
exists in the selected implementation.

For example:

```text
No Model Adapter Selected
        →
Model Adapter Contract Tests Not Applicable
```

does not imply:

```text
Applicable ALH Contract Not Verified
```

The underlying accepted contract MUST still be verified through the mechanism
that actually materializes it.

Therefore:

```text
Contract Verification Is Mandatory
        ≠
Every Candidate Mechanism Must Exist
```

---

# 59. Security Verification

Implementation tests SHOULD include:

- untrusted project content attempting to issue Harness instructions;
- untrusted content attempting learner-state mutation;
- model output requesting unauthorized tool use;
- path-scope escape attempts;
- secret exposure checks;
- generated artifact self-acceptance attempts;
- completion self-declaration attempts.

These tests MUST verify the selected contract-preservation mechanism rather than
model obedience alone where the applicable contract requires non-model
verification.

The mechanism MAY be preventive, detective, validating, reconciliatory, or
host-native according to the selected proportional implementation.

---

# 60. Persistence Verification

Persistence tests SHOULD cover:

- successful read/write;
- failed write;
- transactional consistency;
- duplicate operation handling;
- state-version mismatch;
- recovery;
- migration;
- history/current-state distinction.

The exact cases depend on selected persistence technology.

---

# 61. Adapter Contract Verification

Each adapter SHOULD have tests demonstrating conformance to its Port contract.

Tests SHOULD avoid relying only on mocks where real integration behavior materially affects correctness.

A proportional combination of:

- unit tests;
- contract tests;
- integration tests;

SHOULD be used.

---

# 62. Model Adapter Verification

This section applies only if the selected implementation includes a Model Adapter
or equivalent programmatic model-integration mechanism.

Where applicable, tests SHOULD verify the contract actually owned by that
mechanism, which MAY include:

- instruction transport;
- context separation where supported;
- response normalization;
- failure handling;
- provider-specific metadata handling;
- tool-call transport or interception only where the adapter actually owns that
  responsibility.

If no Model Adapter is selected, this section is not applicable.

The absence of a Model Adapter MUST NOT remove verification of the underlying ALH
contracts through the mechanisms that actually materialize them.

Deterministic adapter tests MUST NOT be represented as proof of model behavioral
correctness.

Model behavioral validation belongs to broader Stage 6 concerns where applicable.

---

# 63. Failure-Path Verification

Stage 5 verification MUST include failure paths rather than only successful execution.

Critical cases SHOULD include:

- model unavailable;
- learner store unavailable;
- capability unavailable;
- test tool failure;
- evidence capture failure;
- invalid configuration;
- authority denial;
- stale project context;
- ambiguous external execution result.

The Harness SHOULD demonstrate safe degradation.

---

# 64. Invariant Tests

Critical architectural distinctions SHOULD have explicit invariant tests.

Examples:

```text
No engineering path can directly mutate competency.
```

```text
No generated artifact can self-mark as accepted.
```

```text
No claim of test success without test evidence.
```

```text
No learner-state persistence into application-owned storage.
```

```text
No Automation Level mapping to tool permissions.
```

Invariant tests SHOULD be preferred over relying on incidental behavior of unrelated tests.

---

# 65. Negative Tests

The verification suite SHOULD intentionally attempt forbidden actions.

Negative tests are especially useful for:

- authority enforcement;
- prompt injection;
- path restrictions;
- learner-state mutation;
- claim enforcement;
- artifact acceptance;
- configuration invariants.

A security or semantic boundary is more credible when the implementation demonstrates that invalid paths are actively rejected.

---

# 66. Property-Oriented Verification

Where practical, Stage 5 SHOULD test properties rather than specific implementation topology.

For example:

Preferred:

```text
Engineering and educational completion remain independent.
```

Less desirable as the only test:

```text
EngineeringCompletionService and
EducationalCompletionService are separate classes.
```

The first verifies the accepted contract.

The second freezes an incidental implementation structure.

---

# 67. Implementation-Topology Flexibility

Verification MUST NOT unnecessarily prevent future changes such as:

- combining processes;
- splitting processes;
- changing model provider;
- changing adapter;
- changing persistence technology;

provided accepted contracts remain preserved.

Tests SHOULD target semantic implementation invariants.

---

# 68. Verification Evidence

Stage 5 verification itself SHOULD produce ordinary engineering evidence such as:

- test results;
- static-analysis results;
- integration-test results;
- security-test results;
- manual review findings.

This evidence MAY support owner acceptance of Stage 5 implementation.

It MUST NOT automatically become learner educational evidence.

---

# 69. Verification Before Completion Claim

Before Stage 5 implementation is declared complete, the implementation SHOULD have current evidence for all applicable Stage 5 conformance areas.

The project MUST preserve:

```text
Implementation Written
        ≠
Implementation Verified
```

and:

```text
Tests Executed
        ≠
Tests Passed
```

and:

```text
Tests Passed
        ≠
Stage 5 Accepted
```

Owner acceptance remains a separate governance event.

---

# 70. Stage 5 Completion Record

The project SHOULD maintain a concise Stage 5 Completion Record or equivalent acceptance summary identifying:

- implemented normative document set;
- implementation revision;
- applicable verification evidence;
- unresolved limitations;
- Candidate ADR status;
- owner acceptance status.

This is project governance metadata.

It MUST NOT be confused with Engineering Done for learner application work or Educational Done.

---

# 71. Document / Implementation Conformance

Where implementation behavior differs from the accepted Stage 5 normative documents, one of the following MUST occur:

1. implementation is corrected;
2. normative implementation design is amended through project governance if the change remains within accepted architecture;
3. Candidate ADR is raised if the change crosses an accepted architectural boundary.

Code behavior MUST NOT silently become normative merely because it exists.

---

# 72. Implementation Drift

The Harness SHOULD guard against drift where implementation changes invalidate previously verified contracts.

Material changes SHOULD trigger relevant conformance tests.

Examples include changes to:

- learner-state persistence;
- policy enforcement;
- prompt materialization;
- adapters;
- evidence representation;
- completion evaluation;
- security boundaries.

---

# 73. Schema Migration Verification

If schema migrations are introduced, tests SHOULD verify preservation of semantic distinctions.

Migration MUST NOT silently:

- convert candidate evidence to accepted;
- collapse completion states;
- lose learner-state provenance;
- move learner state into application artifacts;
- broaden authority.

Migration tests SHOULD use representative prior-state fixtures where practical.

---

# 74. Configuration Migration Verification

Configuration evolution SHOULD be tested for:

- backward compatibility where intended;
- safe rejection of obsolete unsafe values;
- preservation of defaults;
- absence of semantic-authority broadening.

A deprecated physical option MAY be migrated automatically.

A deprecated semantic violation MUST NOT be preserved for compatibility.

---

# 75. Observability Verification

Tests SHOULD verify that materially significant operations produce enough observability to support:

- debugging;
- evidence correlation;
- security diagnosis;
- authority diagnosis.

They SHOULD NOT require exhaustive recording of model internals or hidden chain-of-thought.

---

# 76. Data-Minimization Verification

Implementation Verification SHOULD include checks that ordinary logs and observability records do not unnecessarily persist:

- secrets;
- hidden reasoning;
- unrelated learner data;
- large project payloads where references suffice.

This is part of Stage 5 security conformance.

---

# 77. Performance Verification

Performance MAY be verified where implementation usability depends on it.

Performance requirements SHOULD remain proportional.

Failure to meet an arbitrary optimization target MUST NOT cause semantic safeguards to be removed without architectural review.

---

# 78. Supported Environment Verification

An environment MUST NOT be declared fully supported until its adapter has demonstrated the required minimum environment integration contract.

Verification SHOULD cover:

- project-context access;
- workspace identity;
- tool execution;
- project mutation where applicable;
- model or host-agent integration;
- evidence capture;
- learner-state persistence access;
- security enforcement.

Unsupported capabilities SHOULD be documented explicitly.

---

# 79. Partial Support Verification

If an environment is intentionally partially supported, the implementation SHOULD verify that unsupported functionality fails clearly and safely.

Partial support MUST NOT produce strong claims for operations the environment cannot observe or verify.

---

# 80. Superpowers Integration Verification

Where Superpowers is integrated, implementation verification SHOULD establish:

- applicable capability can be discovered or identified;
- verified upstream contract is referenced where material;
- invocation is adapter-mediated;
- invocation/result status is captured;
- unavailable capability does not erase the underlying obligation;
- internal Superpowers topology does not leak into ALH semantic topology.

This verification MUST NOT duplicate or reimplement Superpowers' own internal workflow tests.

---

# 81. Implementation Review

Before Stage 5 owner acceptance, the implementation SHOULD receive an engineering review independent enough to evaluate:

- contract conformance;
- boundary preservation;
- security;
- failure handling;
- maintainability;
- proportionality.

Semantic independence MAY be implemented through a fresh review context or another sufficient mechanism.

A dedicated reviewer agent is not required.

---

# 82. Review Inputs

Implementation Review SHOULD have direct access to:

- accepted Stage 5 documents;
- relevant Stage 1–4 contracts;
- implementation diff or code;
- current verification evidence;
- known limitations;
- Candidate ADRs, if any.

It SHOULD NOT rely solely on implementation-author self-assessment.

---

# 83. Implementation Review Output

Review output SHOULD identify:

- confirmed conformance;
- implementation defects;
- semantic-boundary risks;
- security risks;
- missing verification;
- unnecessary complexity;
- architectural conflicts.

Review findings MUST remain engineering review findings.

They do not become educational assessment.

---

# 84. Readiness for Stage 6

Stage 5 is ready to hand off to Stage 6 only when:

- normative Stage 5 design is accepted;
- applicable implementation exists;
- applicable Stage 5 conformance tests pass;
- significant review findings are resolved or explicitly accepted;
- Candidate ADRs required for implementation are resolved;
- known limitations are documented;
- owner accepts Stage 5.

Stage 6 SHOULD receive a stable, verified implementation baseline.

---

# 85. Initial Configuration Direction

The initial implementation SHOULD use a small, explicit, inspectable configuration surface.

It SHOULD avoid introducing configuration for concepts that are already invariant semantic contracts.

Configuration SHOULD focus on:

- physical integrations;
- adapters;
- storage;
- model/provider selection;
- operational limits;
- observability.

---

# 86. Initial Observability Direction

The initial implementation SHOULD use structured operational events plus concise human-readable logs.

A single local observability mechanism MAY be sufficient initially.

A dedicated telemetry service is not required.

The implementation SHOULD preserve correlation identifiers and evidence references from the beginning because retrofitting them later is disproportionately difficult.

---

# 87. Initial Verification Direction

The initial implementation SHOULD organize verification around Stage 5 semantic invariants rather than physical component names.

A minimal verification structure SHOULD include:

```text
unit verification
        +
contract verification
        +
integration verification
        +
negative / authority tests
        +
security boundary tests
```

The exact test framework remains an implementation decision.

---

# 88. Initial Failure-Handling Direction

The first implementation SHOULD prefer explicit failure objects or structured failure states over relying solely on thrown exceptions and generated error prose.

Failure representation SHOULD retain:

- class;
- operation;
- retry safety;
- ambiguity;
- unresolved obligation.

This supports reliable evidence and claim handling.

---

# 89. Implementation Planning Inputs

After acceptance of the Stage 5 normative chain, implementation planning SHOULD select concrete technologies for at least:

- programming language;
- runtime packaging;
- project structure;
- persistence;
- schema;
- configuration format;
- model adapter;
- first coding-environment adapter;
- Superpowers adapter mechanism;
- tool execution;
- authority policy representation;
- Evidence Journal;
- observability;
- verification framework.

Each choice SHOULD be checked against the Stage 5 contracts before implementation begins.

---

# 90. Technology Selection Rule

Technology SHOULD be selected according to:

- contract fit;
- simplicity;
- maintainability;
- local-first proportionality;
- portability;
- inspectability;
- testability;
- security;
- ecosystem maturity.

Technology preference MUST NOT override semantic requirements.

If a technology cannot preserve a required Stage 5 distinction proportionally, another mechanism SHOULD be selected.

---

# 91. No Premature Generalization

Implementation planning SHOULD prefer the minimum physical architecture required for the first working Harness.

It SHOULD NOT initially optimize for:

- distributed deployment;
- high-scale multi-tenancy;
- generalized plugin marketplaces;
- many coding environments;
- arbitrary model-provider federation.

Abstractions SHOULD be justified by current accepted contracts and the first concrete integration.

---

# 92. Implementation Decision Log

Material Stage 5 implementation decisions SHOULD be recorded in a concise implementation decision log or equivalent section of implementation planning.

Each decision SHOULD identify:

- problem;
- accepted contract constraints;
- selected mechanism;
- materially considered alternative;
- reason;
- whether ADR is required.

Ordinary implementation decisions do not require ADRs.

---

# 93. Architectural Change Detection

During implementation planning and coding, the team MUST continue using:

```text
Accepted Semantic Contract
        ≠
Implementation Decision
        ≠
Architectural Change
```

A change is a Candidate ADR when it proposes altering an accepted:

- responsibility;
- ownership rule;
- authority boundary;
- trust boundary;
- application / learning-infrastructure separation;
- comparable architectural decision.

Complexity alone does not make a decision architectural.

---

# 94. Candidate ADR Escalation

If implementation cannot satisfy an accepted Stage 1–4 contract without changing architecture, work on the conflicting path MUST NOT silently continue.

The issue SHOULD identify:

- accepted contract;
- implementation conflict;
- attempted alternatives;
- proposed architectural change;
- consequences.

The change remains unapplied until project governance resolves the ADR.

---

# 95. Stage 5 Document Chain Completion

The normative Stage 5 design chain is:

```text
00-Harness-Implementation-Architecture.md
        ↓
01-Runtime-Responsibility-and-Instruction-Materialization.md
        ↓
02-Context-Authority-and-Truth-Implementation.md
        ↓
03-Learner-State-Persistence-and-Educational-Authority.md
        ↓
04-Evidence-Claims-and-Completion-Implementation.md
        ↓
05-External-Capabilities-Tools-and-Environment-Integration.md
        ↓
06-Security-Trust-and-Authority-Enforcement.md
        ↓
07-Configuration-Observability-and-Implementation-Verification.md
```

The document chain defines Stage 5 implementation contracts.

It MUST NOT be interpreted as runtime topology.

---

# 96. Stage 5 Normative Design Exit Gate

Normative Stage 5 design is ready to exit drafting when the document chain collectively defines:

- Harness Kernel and Ports / Adapters;
- runtime responsibility materialization;
- instruction materialization;
- context and authority representation;
- learner-state persistence;
- educational mutation authority;
- evidence and claim enforcement;
- independent completion semantics;
- external-capability integration;
- security and trust enforcement;
- configuration;
- observability;
- implementation verification.

Open concrete technology choices MAY remain for implementation planning.

Open architectural responsibility questions MAY NOT remain hidden as ordinary implementation choices.

---

# 97. Implementation Decisions Left Open

This document intentionally does not prescribe:

- configuration file format;
- logging framework;
- telemetry framework;
- tracing library;
- metrics backend;
- error-class implementation;
- test framework;
- CI provider;
- exact coverage target;
- exact test directory structure;
- exact conformance-matrix format;
- exact implementation decision-log format;
- exact release process;
- exact Stage 5 Completion Record format.

These remain implementation-planning decisions.

They MUST preserve the accepted Stage 5 contracts.

---

# 98. Observations

## O-1 — Configuration Must Remain Smaller Than the Semantic Contract Surface

Making every semantic distinction configurable would weaken architecture and increase invalid-state combinations.

Configuration should primarily select physical mechanisms.

## O-2 — Observability and Evidence Need Different Semantic Status

They may share technical infrastructure, but a diagnostic event must not automatically become evidence supporting a claim.

## O-3 — Correlation Identity Is a Low-Cost Foundational Mechanism

Interaction, execution, evidence, claim, and mutation correlation supports debugging, provenance, assistance attribution, and conformance with relatively little architectural complexity.

It is useful to introduce early.

## O-4 — Negative Verification Is Essential

Many of ALH's most important Stage 5 contracts describe things that MUST NOT happen.

Testing only successful paths would therefore provide weak conformance evidence.

## O-5 — Verification Should Freeze Contracts, Not Topology

Tests that assert semantic invariants permit future implementation evolution.

Tests that assert incidental class, process, or agent topology risk recreating the topology-coupling Stage 5 is intended to avoid.

---

# 99. Candidate ADRs

No Candidate ADR is introduced by this document.

The following are implementation decisions within accepted Stage 1–4 architecture:

- layered configuration;
- structured operational events;
- correlation identity;
- explicit failure classification;
- invariant-oriented tests;
- negative authority tests;
- conformance matrix;
- implementation decision log.

A Candidate ADR would be required if implementation proposed, for example:

- making accepted semantic boundaries configurable;
- treating diagnostic logs as authoritative learner state;
- weakening Stage 1–4 contracts because an environment cannot implement them;
- allowing implementation behavior to supersede accepted normative design without governance.

---

# 100. Future Evolutions

Possible future improvements include:

- OpenTelemetry-compatible distributed tracing;
- centralized multi-instance observability;
- automated conformance dashboards;
- executable architecture contracts;
- formal policy verification;
- automatic Stage 5 contract-to-test generation;
- runtime invariant monitoring;
- capability health analytics;
- cross-environment performance benchmarking;
- automatic architectural drift detection.

These SHOULD NOT complicate the initial proportional implementation unless justified by concrete need.

---

# 101. Completion Criteria

This document is complete when Stage 5 has a normative configuration, observability, failure-handling, and implementation-verification architecture sufficient to proceed into concrete implementation planning.

At minimum, it MUST establish:

- configuration / semantic-authority separation;
- safe configuration rules;
- configuration provenance and validation;
- observability boundaries;
- operational event semantics;
- correlation identity;
- evidence / log distinction;
- failure classification;
- ambiguous execution handling;
- recovery constraints;
- Stage 5 / Stage 6 verification boundary;
- conformance matrix direction;
- invariant-oriented verification;
- learner-state verification;
- ADR-001 verification;
- evidence and claim verification;
- completion verification;
- external-capability and tool verification;
- security verification;
- negative tests;
- implementation-review expectations;
- Stage 5 normative design exit gate;
- implementation decisions intentionally left open.

Acceptance of this document completes the initial Stage 5 normative implementation-architecture document chain.

After owner acceptance of the Stage 5 normative chain, the next phase is:

```text
Concrete Implementation Planning
        ↓
Technology Selection
        ↓
Repository / Package Structure
        ↓
Implementation Decision Log
        ↓
Implementation Plan
        ↓
Harness Implementation
```

Harness coding MUST NOT begin until that implementation-planning step has established the concrete physical design necessary to implement the accepted Stage 5 contracts.
