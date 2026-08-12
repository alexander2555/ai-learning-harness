# External Capabilities, Tools, and Environment Integration

Version: 0.1 Draft

Parent Documents

- 00-Harness-Implementation-Architecture.md
- 01-Runtime-Responsibility-and-Instruction-Materialization.md
- 02-Context-Authority-and-Truth-Implementation.md
- 04-Evidence-Claims-and-Completion-Implementation.md
- 05-Superpowers-and-External-Capability-Boundaries.md
- 06-Superpowers-Integration-and-Engineering-Done.md

Related Documents

- 03-System-Architecture.md
- 04-Agent-Pipeline.md
- 01-Development-Lifecycle.md
- 03-Engineering-Quality-and-Verification.md
- 04-Engineering-Artifacts-and-Traceability.md
- 06-Instruction-Outputs-Claims-and-Stage-5-Contracts.md

---

# 1. Purpose

This document defines how AI Learning Harness physically integrates external capabilities, development tools, AI coding environments, and host-provided execution mechanisms.

It answers:

> How should ALH discover, select, invoke, observe, and interpret external capabilities and tools without transferring ALH semantic authority to those mechanisms or duplicating workflows they already own?

The governing relationship is:

```text
ALH Obligation
        ↓
Capability Applicability
        ↓
Physical Capability Selection
        ↓
Authorized Invocation
        ↓
External Execution
        ↓
Execution Evidence
        ↓
ALH Interpretation
```

The implementation MUST preserve:

```text
Capability Contract Ownership
        ≠
ALH Semantic Authority
```

External execution mechanisms MAY satisfy ALH obligations.

They MUST NOT redefine those obligations.

---

# 2. Responsibility Boundary

This document owns Stage 5 implementation design for:

- external-capability integration;
- Superpowers integration;
- capability discovery;
- capability contract verification;
- capability applicability materialization;
- physical capability selection;
- capability invocation;
- capability result handling;
- capability unavailability;
- development-tool integration;
- tool invocation;
- coding-environment integration;
- host-agent integration;
- environment capability discovery;
- environment-specific adapters;
- execution evidence intake;
- integration failure handling;
- portability boundaries.

It MUST NOT redefine:

- ALH educational authority;
- Stage 3 engineering methodology;
- Superpowers-owned workflow semantics;
- Stage 4 capability applicability semantics;
- Engineering Done;
- Educational Done;
- tool authority;
- learner-state authority.

---

# 3. Core Distinctions

The implementation MUST preserve:

```text
Capability Applicability
        ≠
Capability Selection
        ≠
Capability Invocation
        ≠
Capability Completion
        ≠
Capability Success
        ≠
Capability Result Establishes Claim
```

and:

```text
Tool Availability
        ≠
Tool Applicability
        ≠
Tool Authority
        ≠
Tool Invocation
        ≠
Tool Success
```

and:

```text
Host Agent Capability
        ≠
ALH Authority
```

and:

```text
External Workflow Topology
        ≠
ALH Runtime Topology
```

Physical integration MUST NOT collapse these states.

---

# 4. External Capability

An External Capability is a mechanism outside ALH semantic ownership that can perform work relevant to an ALH obligation.

Examples MAY include:

- Superpowers capabilities;
- host coding-agent capabilities;
- repository operations;
- testing tools;
- build tools;
- static-analysis tools;
- review mechanisms;
- deployment tools;
- external APIs.

An External Capability MAY be highly prescriptive internally.

Its internal workflow does not automatically become ALH methodology.

---

# 5. Capability Port

The Harness SHOULD expose external capabilities through an explicit Capability Port.

Conceptually:

```text
Harness Kernel
        ↓
Capability Port
        ↓
Capability Adapter
        ↓
External Capability
```

The Capability Port SHOULD provide a stable ALH-owned integration boundary.

It MAY support operations such as:

```text
discoverCapabilities()
describeCapability()
invokeCapability()
getCapabilityStatus()
getCapabilityResult()
```

These names are illustrative only.

The exact API remains an implementation decision.

---

# 6. Capability Adapter

A Capability Adapter translates between Harness requirements and a specific external capability contract.

The adapter MAY be responsible for:

- capability discovery;
- invocation formatting;
- parameter translation;
- environment-specific setup;
- result normalization;
- execution-status capture;
- provenance;
- error translation.

The adapter MUST NOT reinterpret ALH obligations.

It MUST NOT create semantic authority.

Therefore:

```text
Can Invoke Capability
        ≠
May Decide Capability Is Semantically Sufficient
```

---

# 7. Superpowers Boundary

Superpowers remains an immutable external workflow/capability dependency.

ALH owns:

- ALH obligation;
- capability applicability interpretation;
- educational meaning;
- engineering meaning;
- completion semantics;
- result interpretation.

Superpowers owns:

- its verified capability contract;
- its internal execution workflow;
- its internal execution topology.

Therefore:

```text
Superpowers Workflow
        ≠
ALH Development Methodology
```

and:

```text
Superpowers Subagent
        ≠
ALH Logical Responsibility
        ≠
Instruction Responsibility
```

---

# 8. No Workflow Duplication

The Harness MUST NOT reimplement a Superpowers-owned workflow merely to keep control inside ALH.

For example, if a verified Superpowers capability already owns a workflow for a specific engineering purpose, ALH SHOULD integrate that capability rather than duplicate the workflow internally.

ALH MAY still:

- determine whether the underlying engineering obligation applies;
- decide whether the capability is an appropriate physical mechanism;
- provide relevant input context;
- observe execution;
- interpret the result;
- determine whether remaining ALH obligations are satisfied.

Integration MUST preserve ownership boundaries.

---

# 9. Capability Discovery

The Harness SHOULD support discovery of capabilities available in the current execution environment.

Discovery MAY be:

- static;
- configuration-driven;
- environment-query-driven;
- adapter-driven;
- host-provided.

Discovery answers:

> What capabilities appear to be physically available?

It does not answer:

> Which capabilities are semantically applicable?

Therefore:

```text
Discovered
        ≠
Applicable
```

---

# 10. Capability Description

Where the Harness needs to reason about an external capability, the adapter SHOULD provide a normalized description sufficient to identify:

- capability identity;
- capability purpose;
- invocation requirements;
- observable result contract;
- relevant version or source identity;
- availability;
- known limitations.

The normalized description is derived integration metadata.

It MUST NOT replace the verified external capability definition where precise behavior materially affects design.

---

# 11. Capability Contract Verification

Stage 5 MUST NOT assume undocumented external-capability behavior.

When precise capability behavior materially affects:

- authority;
- execution semantics;
- result interpretation;
- completion;
- security;
- fallback behavior;
- implementation architecture;

the capability contract MUST be freshly verified from an authoritative upstream source.

Previously observed capability behavior MAY provide context.

It MUST NOT be treated as permanently stable.

---

# 12. Capability Versioning

Where external capabilities may evolve, the Harness SHOULD retain enough identity to know which capability definition or version was observed.

Capability identity MAY include:

- version;
- commit;
- release identifier;
- source revision;
- environment-reported capability identity.

The exact mechanism depends on the external system.

The Harness SHOULD avoid assuming that a capability name alone guarantees stable semantics.

---

# 13. Capability Applicability

Capability applicability is determined by accepted ALH and Stage 3 semantics.

It MUST NOT be determined solely by the adapter.

The runtime MAY materialize applicability using:

- current engineering obligation;
- development activity;
- rigor;
- project state;
- available capabilities;
- security constraints.

An adapter MAY report:

```text
Capability Available
```

but the Harness determines whether that capability is relevant and permitted for the current obligation.

---

# 14. Physical Capability Selection

When one or more mechanisms can satisfy an applicable obligation, the Harness MAY select among them.

Selection MAY consider:

- verified contract fit;
- current availability;
- execution environment;
- evidence quality;
- security;
- reliability;
- cost;
- latency;
- proportionality.

Selection is an implementation decision.

It MUST NOT weaken the underlying obligation.

---

# 15. Capability Selection Policy

The Harness SHOULD use a capability-selection policy rather than allowing arbitrary model choice for authority-sensitive operations.

A model MAY recommend a capability.

Final selection SHOULD remain constrained by:

- applicability;
- verified capability contract;
- authorization;
- environment support;
- security policy.

This preserves:

```text
Model Suggestion
        ≠
Authorized Capability Selection
```

---

# 16. Capability Invocation

Invocation is the physical act of requesting an external capability to execute.

Invocation SHOULD occur only after:

- applicability has been established where required;
- capability has been selected;
- required authority exists;
- necessary context is prepared;
- security checks have passed.

Invocation MUST NOT imply success.

---

# 17. Capability Invocation Record

A materially significant capability invocation SHOULD produce a structured invocation record or equivalent evidence.

It SHOULD be capable of representing:

- capability identity;
- adapter identity;
- invocation identity;
- requested operation;
- start time;
- relevant project state;
- supplied context references;
- authorization result;
- execution status.

The exact schema remains open.

---

# 18. Capability Result

A Capability Result is the physical result returned by an external capability.

It MAY contain:

- structured data;
- generated artifacts;
- tool outputs;
- textual findings;
- execution status;
- errors;
- references.

A Capability Result MUST enter the Harness with provenance.

It MUST NOT automatically become authoritative ALH state.

---

# 19. Capability Result Interpretation

ALH MUST interpret capability results within the authority and semantic domain that applies.

For example:

```text
Capability Result:
review findings
```

MAY support:

```text
Engineering Review Evidence
```

but MUST NOT automatically establish:

```text
Educational Assessment
```

Similarly:

```text
Capability Result:
tests passed
```

MAY support engineering verification.

It MUST NOT establish learner competency.

---

# 20. Capability Result Verification

Where external output is not self-authenticating or directly observable, the Harness MAY need to verify the result before relying on it for strong claims.

Verification MAY include:

- checking execution status;
- inspecting produced artifacts;
- reading direct tool output;
- validating project state;
- querying the capability adapter.

The required strength SHOULD be proportional to the claim being made.

---

# 21. Capability Failure

The Harness SHOULD distinguish:

```text
Capability Not Available
```

```text
Capability Invocation Rejected
```

```text
Capability Invocation Failed
```

```text
Capability Executed but Returned Failure
```

```text
Capability Result Unavailable
```

```text
Capability Result Unverified
```

These states MUST NOT collapse into a generic "capability failed" status where downstream behavior differs.

---

# 22. Capability Unavailability

If an applicable external capability is unavailable, the underlying ALH or engineering obligation does not automatically disappear.

The Harness MUST preserve:

```text
Capability Unavailable
        ≠
Obligation Not Applicable
```

The system MAY:

- use another verified external mechanism;
- use a host-environment mechanism;
- request learner action;
- preserve the obligation as unresolved.

It MUST NOT silently clone a Superpowers workflow as fallback.

---

# 23. Fallback Mechanisms

Fallback is permitted only when the fallback mechanism can satisfy the underlying obligation without changing accepted semantics.

Fallback SHOULD preserve:

- why the preferred capability was unavailable;
- which fallback was selected;
- what verified contract the fallback provides;
- what uncertainty remains.

A fallback mechanism MUST NOT inherit the authority of the preferred mechanism merely because it is substituting for it.

---

# 24. Tool Port

The Harness SHOULD expose development tools through explicit Tool Ports or equivalent adapter boundaries.

Tools MAY include:

- shell execution;
- tests;
- builds;
- static analysis;
- version control;
- file access;
- deployment commands;
- project-specific utilities.

The exact number of Tool Ports is an implementation decision.

A single generic tool abstraction MAY be sufficient initially if semantic and security distinctions remain enforceable.

---

# 25. Tool Adapter

A Tool Adapter translates Harness requests into concrete tool operations.

The adapter SHOULD preserve:

- requested operation;
- parameters;
- execution identity;
- project state;
- output;
- errors;
- provenance.

A Tool Adapter has technical execution capability.

It does not have semantic authority.

---

# 26. Tool Authority

The implementation MUST preserve:

```text
Tool Exists
        ≠
Tool May Be Used
```

and:

```text
Tool May Be Used
        ≠
Tool May Perform Any Operation
```

Tool authorization SHOULD consider:

- applicable responsibility;
- requested operation;
- trust boundary;
- project scope;
- learner-state boundary;
- security policy.

The mere presence of a shell or file-write tool MUST NOT authorize arbitrary use.

---

# 27. Read and Write Tool Separation

Where practical, the Harness SHOULD distinguish read-oriented from mutation-oriented operations.

For example:

```text
Read Project File
        ≠
Modify Project File
```

```text
Read Learner State
        ≠
Modify Learner State
```

This distinction MAY be enforced through separate ports, operation-level policies, or equivalent mechanisms.

Separate physical tools are not mandatory.

Separate semantic authorization is.

---

# 28. Shell Execution

If shell execution is supported, the Harness MUST treat it as a high-capability integration surface.

Shell access MUST NOT create unrestricted semantic authority.

The implementation SHOULD apply controls for:

- working directory;
- command scope;
- destructive operations;
- environment access;
- secrets;
- project boundaries;
- execution evidence.

Detailed security enforcement belongs to `06-Security-Trust-and-Authority-Enforcement.md`.

---

# 29. File Operations

File access SHOULD preserve ownership and authority boundaries.

The Harness MAY read:

- application files;
- ALH documents;
- generated artifacts;
- configuration.

Write operations MUST distinguish:

- learner application mutation;
- ALH infrastructure mutation;
- learner-state mutation;
- generated temporary artifacts.

A file-system adapter MUST NOT treat all writable paths as semantically equivalent.

---

# 30. Version-Control Integration

Version-control integration MAY support:

- revision identity;
- working-tree state;
- diff inspection;
- branch operations;
- commit operations.

The Harness MUST distinguish:

```text
Can Create Commit
        ≠
May Declare Work Accepted
```

Repository mutation MUST follow applicable engineering and environment policy.

A commit is project evidence.

It is not educational evidence by itself.

---

# 31. Test and Build Integration

Test and build tools SHOULD integrate through observable execution paths.

The Harness SHOULD capture:

- command or operation identity;
- execution result;
- relevant project state;
- output references;
- failure state.

The resulting evidence feeds `04-Evidence-Claims-and-Completion-Implementation.md`.

Tool adapters MUST NOT declare Engineering Done directly.

---

# 32. Review Integration

Engineering Review MAY be provided through:

- host coding-agent review;
- external capability;
- model invocation;
- repository platform;
- another verified mechanism.

The physical mechanism MUST preserve required Semantic Independence.

Review integration MUST produce review evidence rather than directly mutating educational state.

---

# 33. Coding Environment

A Coding Environment is the host environment in which ALH participates in learner software development.

Examples MAY include AI IDEs, coding agents, or comparable execution environments.

The Coding Environment MAY provide:

- model access;
- project access;
- file mutation;
- shell execution;
- tool invocation;
- agent orchestration;
- capability discovery;
- user interaction.

ALH MUST NOT assume that every supported environment provides the same primitives.

---

# 34. Environment Port

The Harness SHOULD define a stable Environment Port or equivalent abstraction for host-specific capabilities.

The Environment Port MAY expose:

- project-context access;
- user interaction;
- model execution;
- tool execution;
- capability discovery;
- host-agent invocation;
- workspace identity.

The exact abstraction MAY be split across several ports.

The design goal is to prevent host-specific behavior from leaking into ALH semantic ownership.

---

# 35. Environment Adapter

An Environment Adapter implements ALH integration for a specific coding environment.

It MAY translate:

- host events;
- host context;
- tool operations;
- model calls;
- user messages;
- workspace operations.

Environment-specific implementation MAY differ significantly.

Accepted ALH semantics MUST remain stable across adapters.

---

# 36. Supported Environment Contract

An environment SHOULD be considered supported only if its adapter can provide enough physical capability to preserve required ALH contracts.

Support MUST NOT be claimed merely because ALH can send or receive text.

A supported environment MAY need to provide, directly or through adjacent mechanisms:

- project-state access;
- controlled project mutation;
- observable execution;
- relevant tool access;
- context separation;
- learner interaction;
- persistence connectivity.

The exact minimum contract is refined during implementation planning.

---

# 37. Partial Environment Support

The Harness MAY support environments with limited capability.

Where an environment cannot satisfy a required contract, the Harness MUST surface the limitation.

It MUST NOT silently weaken:

- authority enforcement;
- evidence requirements;
- learner-state separation;
- security boundaries.

Partial support SHOULD be explicitly identifiable.

---

# 38. Host Coding Agent

A host coding agent MAY serve as an execution mechanism.

It MUST NOT become the ALH semantic core.

The Harness SHOULD provide the host agent only with:

- applicable instructions;
- relevant context;
- authorized tools;
- required output constraints.

The host agent's internal memory, topology, or planning process MUST NOT be assumed to preserve ALH semantics unless verified.

---

# 39. Host-Agent Delegation

The Harness MAY delegate bounded work to a host agent.

Delegation MUST preserve:

```text
Delegation
        ≠
Authority Transfer
```

The delegated agent MAY perform an authorized operation.

It MUST NOT gain authority to redefine:

- educational state;
- engineering completion;
- accepted evidence;
- architecture;
- external capability ownership.

---

# 40. Host-Agent Results

Host-agent output enters ALH as external or derived runtime context.

It SHOULD be treated similarly to model or capability output:

- provenance preserved;
- claims bounded;
- execution status separated from prose;
- tool evidence captured directly where possible.

Host-agent claims about actions it performed SHOULD be verified through available host evidence when materially important.

---

# 41. Model Provider Integration

Model-provider integration SHOULD occur through a Model / AI Port.

The adapter MAY handle:

- provider authentication;
- model selection;
- structured messages;
- invocation;
- streaming;
- tool-call transport;
- result normalization;
- usage metadata.

Model-provider details MUST NOT determine ALH semantic authority.

---

# 42. Model Selection

Model selection MAY consider:

- capability requirements;
- context size;
- reliability;
- cost;
- latency;
- environment constraints.

A more capable model MUST NOT gain broader authority.

A weaker model MUST NOT justify weakening accepted contracts.

Where the chosen model cannot reliably satisfy a responsibility, the Harness SHOULD use another mechanism or report the limitation.

---

# 43. Model Tool Calling

Where a model can propose tool calls, the proposal SHOULD be treated as a requested operation.

Conceptually:

```text
Model Tool Request
        ↓
Harness Authorization
        ↓
Tool Adapter Invocation
        ↓
Execution Evidence
        ↓
Result Returned to Model / Harness
```

The model MUST NOT bypass Harness authorization simply because the provider supports native tool calling.

---

# 44. Provider-Native Agents

A provider MAY expose agent or orchestration primitives.

ALH MAY use them where useful.

Their existence MUST NOT cause ALH to map:

```text
Instruction Responsibility
        →
Provider Agent
```

or:

```text
ALH Logical Responsibility
        →
Provider Workflow Node
```

Provider-native topology remains an implementation mechanism.

---

# 45. Capability and Tool Context

External capability and tool invocation SHOULD receive only context necessary for the operation.

The Harness SHOULD avoid sending:

- unrelated learner state;
- unnecessary secrets;
- broad repository content;
- unrelated accepted instructions;

when narrower context is sufficient.

Context minimization MUST NOT remove information required for safe and correct execution.

---

# 46. Integration Provenance

Significant external operations SHOULD preserve provenance sufficient to answer:

- what mechanism was used;
- what capability or tool was invoked;
- which adapter mediated it;
- which project state applied;
- what authorization occurred;
- what result was observed.

Integration provenance supports:

- evidence;
- explainability;
- debugging;
- conformance;
- security review.

It MUST NOT require hidden chain-of-thought.

---

# 47. External Artifact Production

External capabilities or tools MAY produce artifacts.

Such artifacts MUST enter ALH with status consistent with `04-Evidence-Claims-and-Completion-Implementation.md`.

Therefore:

```text
Externally Generated Artifact
        ≠
Accepted Artifact
```

The adapter MUST NOT mark an artifact accepted merely because the external capability completed successfully.

---

# 48. External Context Trust

External capability, tool, host-agent, and model outputs MAY contain untrusted content.

Their output MUST NOT gain Harness instruction authority merely because it comes from a technically privileged system.

The implementation MUST preserve:

```text
Execution Trust
        ≠
Instruction Authority
```

Detailed prompt-injection and trust handling is defined downstream.

---

# 49. Environment Configuration

Environment-specific configuration MAY define:

- adapter selection;
- capability endpoints;
- executable paths;
- model providers;
- tool availability;
- workspace roots.

Configuration MAY expose physical capability.

It MUST NOT create semantic authority.

A configuration option MUST NOT legitimately override accepted architectural boundaries.

---

# 50. Capability Registry Direction

The initial implementation SHOULD maintain a lightweight Capability Registry or equivalent derived runtime representation.

It MAY record:

```text
capability identity
provider / adapter
availability
verified contract reference
version / source identity
supported operations
known limitations
```

The Registry exists to support discovery and selection.

It MUST NOT become the authoritative definition of capability semantics if the verified upstream source differs.

---

# 51. Tool Registry Direction

A similar lightweight Tool Registry MAY be used for physical tools.

It MAY describe:

- tool identity;
- adapter;
- operation types;
- current availability;
- authorization class;
- environment scope.

The Registry MUST NOT imply that listed tools are automatically applicable or authorized.

---

# 52. Integration Contract Normalization

The Harness MAY normalize heterogeneous external mechanisms into common internal contracts.

Normalization SHOULD improve:

- portability;
- policy enforcement;
- evidence capture;
- observability;
- failure handling.

Normalization MUST NOT erase external differences that materially affect semantics.

Where two capabilities have different success contracts, a common adapter layer MUST preserve that distinction.

---

# 53. Invocation Idempotency

Where an external operation may mutate project state or create artifacts, the Harness SHOULD consider duplicate invocation risk.

Retries MUST NOT silently:

- duplicate project mutations;
- duplicate external side effects;
- duplicate accepted artifacts;
- duplicate learner-state changes.

The appropriate idempotency mechanism depends on the external capability.

---

# 54. Retry Policy

Retry MAY be appropriate for transient failures.

Retry MUST NOT be used when:

- the operation may have succeeded but result status is unknown and repeating could be destructive;
- repeated execution would violate an external contract;
- authorization has changed;
- project state has materially changed.

The Harness SHOULD distinguish safe retries from ambiguous execution states.

---

# 55. Cancellation

Where the host environment supports cancellation, the Harness MAY cancel long-running external operations.

Cancellation MUST NOT be treated automatically as clean rollback.

The implementation SHOULD determine whether:

- no side effects occurred;
- partial side effects occurred;
- result state is unknown.

Evidence and claims MUST reflect the observed result.

---

# 56. Timeouts

Timeout is an integration state.

It MUST NOT automatically mean:

```text
Execution Failed
```

if the external operation may still be running or may have completed without observable result.

The Harness SHOULD preserve:

```text
Timed Out
        ≠
Known Failure
```

where necessary.

---

# 57. External State Changes

External capabilities MAY change project state outside direct Harness control.

After such operations, the Harness SHOULD refresh relevant project context before making current-state claims.

For example:

```text
Capability Invocation
        ↓
Project Mutation
        ↓
Project Context Refresh
        ↓
Current-State Evaluation
```

Cached pre-invocation context MUST NOT be assumed current.

---

# 58. Capability-Produced Evidence

Some capabilities MAY directly produce engineering evidence.

The Harness SHOULD capture that evidence through the adapter rather than reconstructing it from conversational output.

For example:

```text
Verification Capability
        ↓
Structured Result
        ↓
Evidence Record
```

is preferable to:

```text
Model Says Verification Passed
```

when direct structured evidence exists.

---

# 59. Capability Completion and Engineering Done

Successful completion of an external capability MUST NOT automatically establish Engineering Done.

The capability may satisfy one applicable obligation.

Engineering Done still depends on the complete set of applicable Stage 3 obligations.

Therefore:

```text
Capability Success
        ≠
Engineering Done
```

---

# 60. Capability Completion and Educational Done

No external engineering capability may directly establish Educational Done merely by succeeding.

External output MAY contribute Candidate Educational Evidence where appropriate.

Educational completion remains within accepted educational authority.

---

# 61. Learner Participation with External Capabilities

External capabilities may perform substantial engineering work.

Where educational interpretation depends on learner participation, the Harness SHOULD preserve:

- who initiated the operation;
- what reasoning the learner supplied;
- what work the external capability performed;
- whether the learner reviewed, modified, or corrected the result.

The physical number of subagents or external actions is not itself educational meaning.

---

# 62. Assistance Attribution

Invocation of an external capability MAY constitute learner assistance.

Assistance attribution SHOULD describe the assistance actually supplied to the learner rather than merely naming the physical mechanism.

For example:

```text
External capability generated implementation
```

is more educationally useful than:

```text
Capability X invoked once
```

The exact assistance classification remains downstream implementation detail.

---

# 63. Environment Portability

ALH SHOULD preserve a stable semantic core across supported environments.

Portability means:

```text
Same ALH Contract
        ↓
Different Physical Adapter
```

not:

```text
Identical Physical Behavior Everywhere
```

Environment-specific differences are acceptable where accepted semantics remain preserved.

---

# 64. Portability Failure

If one environment cannot preserve an accepted contract while another can, the Harness SHOULD treat this as an environment-support limitation rather than weaken the contract globally.

For example, inability to observe execution evidence MAY prevent strong execution claims in that environment.

It MUST NOT cause ALH to remove evidence-before-claim requirements.

---

# 65. Minimum Environment Integration Contract

The initial Stage 5 implementation SHOULD define a minimum supported-environment contract sufficient for:

- learner interaction;
- project context acquisition;
- project-state identity;
- controlled project mutation where applicable;
- observable tool execution;
- model or host-agent execution;
- external-capability integration where applicable;
- ALH persistence access.

Exact API signatures remain open.

---

# 66. Local-First Direction

The initial Harness implementation SHOULD prefer local or host-near execution where it can satisfy accepted contracts proportionally.

This MAY reduce:

- integration complexity;
- latency;
- data exposure;
- deployment overhead.

This is an implementation direction, not a semantic requirement.

Remote services MAY be introduced where justified.

---

# 67. Adapter Isolation

Adapters SHOULD contain environment-specific and provider-specific behavior.

The Harness Kernel SHOULD avoid direct dependencies on:

- provider-specific message formats;
- Superpowers internal workflow details;
- environment-specific shell semantics;
- host-specific agent topology.

This reduces semantic leakage from integration mechanisms into the core architecture.

---

# 68. Adapter Validation

Adapters SHOULD be tested against their declared integration contract.

Validation SHOULD cover, where applicable:

- capability discovery;
- invocation;
- result capture;
- failure translation;
- provenance;
- project-state refresh;
- authorization boundaries.

Passing adapter tests does not establish that the external capability itself is always correct.

---

# 69. Unknown External Behavior

If an external mechanism behaves outside its verified contract, the Harness MUST NOT invent semantics to explain it.

The system SHOULD preserve:

- unexpected result;
- uncertainty;
- raw observable evidence;
- affected obligations.

Where necessary, capability use SHOULD be suspended or downgraded until behavior is understood.

---

# 70. External Contract Drift

The Harness SHOULD account for the possibility that external capability behavior changes over time.

Material drift MAY require:

- capability re-verification;
- adapter update;
- integration tests;
- changed selection policy.

External drift MUST NOT silently redefine ALH architecture.

---

# 71. Integration Observability

The Harness SHOULD expose enough integration telemetry to determine:

- selected adapter;
- capability availability;
- invocation status;
- tool execution;
- errors;
- retries;
- resulting evidence references.

Detailed observability design is defined in:

`07-Configuration-Observability-and-Implementation-Verification.md`

This document requires integration mechanisms to emit sufficient structured events.

---

# 72. Security Boundary

External integration is a major trust boundary.

The implementation MUST support downstream enforcement involving:

- credentials;
- secrets;
- untrusted output;
- command execution;
- network access;
- file writes;
- learner-state writes;
- project mutations;
- prompt injection.

Detailed controls belong to:

`06-Security-Trust-and-Authority-Enforcement.md`

External adapters MUST expose enough operation context for those controls to be enforced.

---

# 73. Initial External Integration Architecture Direction

The initial Stage 5 architecture SHOULD use:

```text
Harness Kernel
        ↓
Selection / Authorization
        ↓
Ports
        ↓
Adapters
        ↓
External Mechanisms
        ↓
Observed Result
        ↓
Evidence Capture
        ↓
ALH Interpretation
```

The physical mechanism may be:

- local tool;
- host API;
- coding agent;
- Superpowers capability;
- model provider;
- external service.

The integration pattern remains the same:

> external mechanisms execute; ALH interprets under accepted ALH authority.

---

# 74. Initial Superpowers Integration Direction

The initial Superpowers integration SHOULD be adapter-based and capability-oriented.

It SHOULD NOT hard-code a universal Superpowers workflow into the Harness.

The Harness SHOULD:

1. discover or otherwise identify available relevant capabilities;
2. verify material capability contracts when needed;
3. map applicable ALH obligations to verified capabilities;
4. invoke through an adapter;
5. capture execution evidence;
6. interpret results under ALH semantics.

This preserves:

```text
Capability Mapping
        ≠
Methodology Inheritance
```

---

# 75. Initial Tool Integration Direction

The initial implementation SHOULD prefer a small number of explicit tool adapters or a controlled generic tool boundary rather than unrestricted direct model access to host tools.

All authority-sensitive tool use SHOULD pass through Harness authorization.

Tool outputs SHOULD feed structured evidence capture.

---

# 76. Initial Environment Integration Direction

The initial Harness SHOULD support one concrete coding environment through a dedicated adapter before attempting broad multi-environment abstraction.

The Kernel and Port contracts SHOULD nevertheless avoid unnecessary coupling to that first environment.

This permits:

```text
First Working Adapter
        ↓
Validated Core Contract
        ↓
Additional Adapters Later
```

without prematurely building a generalized environment framework.

---

# 77. Implementation Decisions Left Open

This document intentionally does not prescribe:

- first supported coding environment;
- exact Capability Port API;
- exact Tool Port API;
- exact Environment Port API;
- Superpowers invocation transport;
- capability-registry storage;
- tool-registry storage;
- model provider;
- provider-native tool calling vs Harness-mediated transport;
- local shell implementation;
- remote execution;
- plugin architecture;
- adapter package boundaries;
- exact retry policy;
- exact timeout values;
- environment capability-negotiation protocol;
- exact capability version representation.

These remain implementation-planning decisions.

They MUST preserve this contract.

---

# 78. Observations

## O-1 — External Integration Should Be Capability-Oriented, Not Workflow-Cloning

The Harness only needs to know enough of an external contract to select, invoke, observe, and interpret the capability correctly.

Reimplementing the external workflow would increase coupling and risk semantic drift.

## O-2 — First-Environment Focus Is More Proportional Than Immediate Generalization

A stable Port boundary can be designed while implementing one concrete adapter first.

This avoids building abstractions based on hypothetical environments.

## O-3 — Result Interpretation Is an ALH Responsibility

Adapters can normalize external results, but deciding what those results mean for engineering or education remains inside ALH authority.

## O-4 — Tool Calling Requires a Harness Authorization Boundary

Provider-native tool calling is convenient but can bypass semantic and security controls if treated as direct execution authority.

## O-5 — External Contract Drift Is Operationally Important

Superpowers, coding environments, model providers, and tools may evolve independently of ALH.

Adapter boundaries reduce the impact, but current capability assumptions still need verification where material.

---

# 79. Candidate ADRs

No Candidate ADR is introduced by this document.

The following remain implementation decisions within accepted Stage 1–4 architecture:

- Capability Port / Adapter boundary;
- Tool Port / Adapter boundary;
- Environment Adapter boundary;
- Capability Registry direction;
- adapter-based Superpowers integration;
- Harness-mediated tool authorization;
- one-environment-first implementation strategy;
- local-first implementation direction.

A Candidate ADR would be required if implementation proposed, for example:

- moving ALH engineering or educational authority into Superpowers;
- making host-agent topology define ALH topology;
- duplicating Superpowers workflows as ALH-owned methodology;
- allowing external capability output to mutate authoritative learner state directly.

---

# 80. Future Evolutions

Possible future improvements include:

- multiple simultaneously supported coding environments;
- dynamic environment capability negotiation;
- declarative adapter manifests;
- pluggable external-capability providers;
- capability health scoring;
- automatic capability-contract drift detection;
- cross-environment execution brokerage;
- policy-driven provider selection;
- isolated remote execution sandboxes;
- capability provenance signing.

These SHOULD NOT complicate the initial proportional implementation unless current requirements justify them.

---

# 81. Completion Criteria

This document is complete when Stage 5 has a normative external-integration architecture sufficient to use external capabilities and tools without transferring ALH authority or duplicating external workflows.

At minimum, it MUST establish:

- External Capability semantics;
- Capability Port;
- Capability Adapter;
- Superpowers ownership boundary;
- no-workflow-duplication rule;
- capability discovery;
- capability contract verification;
- capability version identity;
- applicability / selection / invocation separation;
- capability result interpretation;
- capability unavailability and fallback;
- Tool Port / Adapter boundary;
- tool authority;
- read / write operation distinction;
- coding-environment integration;
- Environment Adapter;
- host-agent delegation boundary;
- model-provider boundary;
- model tool-call authorization;
- external evidence capture;
- environment portability;
- external contract drift handling;
- initial Superpowers integration direction;
- implementation decisions intentionally left open.

Acceptance of this document authorizes detailed security, trust, and authority-enforcement design in:

`06-Security-Trust-and-Authority-Enforcement.md`

It does not authorize Harness coding before the applicable Stage 5 normative design chain and implementation plan are complete.
