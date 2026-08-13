# Runtime Responsibility and Instruction Materialization

Status: Draft
Version: 2.0-draft.1

Parent Documents

- 00-Harness-Implementation-Architecture.md
- 01-Instruction-Responsibility-Model.md
- 02-Instruction-Authority-and-Composition.md
- 06-Instruction-Outputs-Claims-and-Stage-5-Contracts.md

Related Documents

- 04-Agent-Pipeline.md
- 09-Decision-Engine.md
- 01-Development-Lifecycle.md
- 04-Engineering-and-Educational-Instruction-Boundaries.md
- 05-Superpowers-and-External-Capability-Boundaries.md

---

# 1. Purpose

This document defines how accepted ALH Instruction Responsibilities and related runtime responsibilities are physically materialized within the Harness.

It establishes implementation rules for:

- responsibility applicability;
- instruction materialization;
- instruction composition;
- runtime execution units;
- model invocation;
- physical agent use;
- deterministic enforcement;
- semantic independence;
- execution ordering;
- runtime routing;
- responsibility provenance;
- responsibility completion.

This document answers:

> How should the Harness physically execute accepted instruction responsibilities without deriving runtime topology from semantic decomposition or allowing physical execution mechanics to redefine authority?

The governing relationship is:

```text
Accepted Instruction Responsibility
        ↓
Determine Applicable Behavior
        ↓
Materialize Required Constraints
        ↓
Choose Proportional Physical Mechanism
        ↓
Execute
        ↓
Preserve Semantic Contract
```

Instruction Responsibilities remain semantic contracts.

Their physical realization is an implementation concern.

---

# 2. Responsibility Boundary

This document owns physical runtime materialization of accepted responsibilities.

It MAY define:

- how applicable responsibilities are identified;
- how instructions are assembled;
- which responsibility constraints are represented as model instructions;
- which responsibility constraints are enforced deterministically;
- how responsibilities share physical execution;
- when separate model invocations are required;
- when physical agents are justified;
- how semantic independence is preserved;
- how execution order is determined;
- how runtime responsibility provenance is recorded.

It MUST NOT redefine:

- Stage 1 logical responsibilities;
- Stage 2 educational authority;
- Stage 3 development methodology;
- Stage 4 Instruction Responsibilities;
- instruction authority;
- accepted evidence requirements;
- accepted output semantics;
- educational state semantics;
- development lifecycle semantics;
- external-capability ownership.

---

# 3. Core Distinction

The implementation MUST preserve:

```text
Logical Responsibility
        ≠
Instruction Responsibility
        ≠
Runtime Responsibility Materialization
        ≠
Physical Agent
        ≠
Prompt Artifact
        ≠
Model Invocation
        ≠
Runtime Process
```

A runtime mechanism MAY satisfy more than one compatible responsibility.

A single responsibility MAY require more than one physical mechanism.

Neither case changes semantic ownership.

The Harness MUST NOT infer physical topology solely from semantic labels.

---

# 4. Runtime Responsibility Materialization

A Runtime Responsibility Materialization is the concrete physical realization of one or more applicable accepted responsibilities for a specific runtime interaction.

It is not itself a new semantic responsibility.

A materialization MAY include:

- model instructions;
- structured context;
- deterministic policy checks;
- tool restrictions;
- state access restrictions;
- output validation;
- evidence requirements;
- separate execution phases;
- model invocation;
- host-agent invocation;
- external-capability invocation.

The materialization exists only to satisfy accepted contracts.

It MUST NOT expand authority beyond those contracts.

---

# 5. Responsibility Applicability

The Harness MUST determine which accepted responsibilities are materially applicable to the current interaction before constructing runtime behavior.

Applicability SHOULD depend on relevant semantic conditions rather than the existence of a document, prompt file, agent, or lifecycle label.

Inputs to applicability MAY include:

- learner intent;
- current learning objective;
- project task;
- development activity;
- learner state;
- applicable educational strategy;
- engineering rigor;
- project context;
- required evidence;
- requested operation;
- external-capability applicability;
- security constraints.

The presence of context alone MUST NOT create responsibility applicability.

The presence of a capability alone MUST NOT create responsibility applicability.

Execution convenience MUST NOT determine semantic applicability.

---

# 6. Responsibility Resolution

The Harness SHOULD construct a runtime Responsibility Set representing the accepted responsibilities applicable to the current execution.

Conceptually:

```text
Interaction Context
        ↓
Applicability Evaluation
        ↓
Applicable Responsibility Set
        ↓
Compatibility / Boundary Evaluation
        ↓
Runtime Materialization Plan
```

The Responsibility Set MAY be represented through a structured runtime object.

The specific schema is an implementation decision.

The representation SHOULD be sufficient to preserve, where material:

- responsibility identity;
- authority;
- required context;
- prohibitions;
- evidence requirements;
- output constraints;
- composition constraints;
- semantic independence requirements.

The Responsibility Set MUST NOT become a new source of semantic authority.

---

# 7. Instruction Materialization

Instruction materialization converts applicable semantic instruction contracts into physical behavior constraints.

Materialization MAY use:

- static instruction text;
- generated instruction text;
- shared instruction fragments;
- structured model messages;
- deterministic runtime policies;
- schemas;
- validation rules;
- access controls;
- tool policies;
- post-execution checks.

The Harness SHOULD choose the least complex mechanism sufficient to preserve the contract reliably.

A semantic requirement MUST NOT automatically become natural-language prompt text.

Where deterministic enforcement is practical and materially safer, Stage 5 SHOULD prefer deterministic enforcement over relying solely on model compliance.

---

# 8. Prompt Artifacts

A Prompt Artifact is a physical instruction representation supplied to a model or coding agent.

Prompt Artifacts are implementation artifacts.

They are not themselves semantic authorities.

Therefore:

```text
Prompt Artifact
        ≠
Instruction Responsibility
```

and:

```text
Prompt Artifact Presence
        ≠
Responsibility Applicability
```

and:

```text
Prompt Artifact Order
        ≠
Semantic Authority Order
```

Prompt Artifacts MAY contain materialized fragments from multiple compatible Instruction Responsibilities.

One Instruction Responsibility MAY contribute to multiple Prompt Artifacts.

The implementation SHOULD avoid unnecessary duplication of normative semantic text across Prompt Artifacts.

Where possible, prompts SHOULD reference or derive from canonical responsibility definitions rather than independently restating them in divergent forms.

---

# 9. Static and Dynamic Instruction Assembly

The Harness MAY use:

- static prompts;
- dynamically assembled prompts;
- hybrid assembly.

Static material SHOULD be preferred for stable global constraints.

Dynamic material SHOULD be used where instructions materially depend on runtime applicability, authority, context, learner state, engineering state, or requested operation.

Dynamic assembly MUST NOT:

- create new authority;
- weaken accepted prohibitions;
- omit materially applicable constraints;
- promote contextual data into instructions;
- convert untrusted project content into instruction authority.

The materialized instruction set SHOULD remain inspectable at the level necessary for implementation debugging and conformance verification.

---

# 10. Instruction Composition

Compatible Instruction Responsibilities MAY share physical execution.

Before composition, the Harness MUST ensure that composition does not:

- merge authority domains;
- transfer authority;
- weaken evidence requirements;
- erase uncertainty;
- collapse engineering and educational semantics;
- convert advisory output into authoritative output;
- erase semantic independence where required.

Conceptually:

```text
Responsibility A
        +
Responsibility B
        ↓
Compatibility Check
        ↓
Composed Runtime Materialization
```

Composition MUST fail or separate execution where required constraints cannot be preserved together.

Physical composition is permitted.

Semantic merger is not.

---

# 11. Composition Compatibility

Responsibilities SHOULD be considered physically composable when:

- their authority boundaries are compatible;
- their required context can coexist safely;
- neither depends on semantic independence from the other;
- their output contracts can remain distinguishable;
- their evidence requirements remain satisfiable;
- their prohibitions do not conflict;
- their combination does not create authority escalation.

Responsibilities SHOULD NOT share the same execution unit where composition materially prevents preservation of an accepted semantic boundary.

A physical separation MAY therefore be justified by a contract conflict without implying separate architectural responsibility.

---

# 12. Authority Preservation During Composition

Composition MUST preserve:

```text
Composition
        ≠
Authority Transfer
```

A composed execution unit MUST NOT acquire the union of all possible authority merely because it contains multiple responsibilities.

Where different responsibilities permit different actions, the runtime mechanism SHOULD preserve operation-specific authority.

For example:

```text
Engineering Guidance
        +
Learner-State Context
```

MUST NOT imply:

```text
Engineering Guidance
        →
Learner-State Write Authority
```

Likewise:

```text
Educational Assessment
        +
Project Context
```

MUST NOT imply:

```text
Educational Assessment
        →
Engineering Completion Authority
```

---

# 13. Execution Units

An Execution Unit is the physical runtime scope within which one or more compatible responsibilities are materialized and executed.

An Execution Unit MAY be:

- a deterministic Harness operation;
- a single model invocation;
- a sequence of model invocations;
- a host-agent action;
- an external-capability invocation;
- a hybrid operation.

Execution Unit is an implementation concept.

It MUST NOT be treated as an authority domain.

The Harness MAY optimize the number or shape of Execution Units as long as accepted semantic contracts remain preserved.

---

# 14. Model Invocations

A model invocation is one possible execution mechanism.

A model invocation MUST NOT be treated as equivalent to:

- an Instruction Responsibility;
- an authority domain;
- an educational state;
- a development lifecycle activity;
- a logical Agent Pipeline responsibility.

The Harness SHOULD minimize unnecessary model invocations where semantic independence, reliability, security, or quality do not justify separation.

Additional invocations MAY be justified by:

- semantic independence;
- incompatible context requirements;
- materially different authority boundaries;
- reliability;
- verification;
- context-size constraints;
- provider capability constraints.

Invocation count is an implementation decision.

It is not an educational metric and MUST NOT be derived from Automation Level.

---

# 15. Physical Agents

A Physical Agent is a concrete runtime actor capable of performing one or more operations, potentially including model reasoning, tool use, or delegated execution.

A Physical Agent MAY implement several responsibilities.

Several Physical Agents MAY contribute to one responsibility.

The existence of an accepted responsibility MUST NOT by itself justify a dedicated agent.

Agent creation SHOULD require an independent implementation reason such as:

- host-platform integration;
- semantic independence;
- isolated tool authority;
- context isolation;
- failure containment;
- concurrency;
- external-capability contract;
- provider-specific execution requirements.

Agent topology MUST remain subordinate to ALH semantic contracts.

---

# 16. Host Coding Agents

ALH MAY operate within a coding environment that already provides a coding agent.

Such a host agent is an external execution mechanism from the perspective of ALH runtime architecture.

The Harness MUST NOT assume that the host agent automatically understands or preserves ALH semantics.

ALH responsibilities supplied to the host agent MUST be materialized explicitly where necessary.

Host-agent capability MUST NOT create ALH authority.

Host-agent internal topology MUST NOT determine ALH topology.

---

# 17. Deterministic Mechanisms

Not all accepted responsibilities require AI execution.

The Harness SHOULD use deterministic mechanisms where they proportionally improve
preservation or verification of material contracts, including:

- schema validation;
- semantic state-transition validation;
- evidence presence;
- revision identity;
- provenance validation;
- completion prerequisites;
- capability result status;
- configuration constraints;
- security controls where applicable.

Deterministic support MAY operate:

- before an operation;
- during an operation;
- after a physical operation through validation or reconciliation.

Therefore:

```text
Deterministic Validation
        ≠
Mandatory Preventive Interception
```

AI reasoning MAY assist interpretation.

It SHOULD NOT replace straightforward deterministic validation where semantic
correctness materially depends on a machine-checkable property.

For authoritative learner state:

```text
Physical State Write
        ≠
Authorized Educational State Transition
```

The implementation MAY use stronger preventive enforcement where a concrete risk
or host-environment capability independently justifies it.

---

# 18. Authority and Policy Materialization

The Harness MUST preserve explicit authority semantics for authority-sensitive
operations.

Those semantics do not require one universal runtime policy gate.

Depending on the operation, the applicable authority boundary MAY be materialized
through:

- accepted instructions;
- structured authority or transition information;
- deterministic validation;
- host-native authorization;
- operation-specific controls;
- ALH-specific technical mediation where weaker mechanisms are insufficient.

Conceptually:

```text
Operation
        ↓
Applicable Semantic Authority
        ↓
Sufficient Proportional Mechanism
        ↓
Valid / Invalid / Requires Additional Evidence or Authority
```

For a technically mediated operation, a model recommendation MUST NOT override the
selected technical control.

For a semantically governed operation without mandatory physical mediation, a
model recommendation MUST NOT by itself establish semantic authority.

Therefore:

```text
Model Recommendation
        ≠
Authority
```

and:

```text
Semantic Authority Boundary
        ≠
Universal Runtime Policy Gate
```

Any selected policy mechanism MUST implement accepted authority rather than
invent new authority.

---

# 19. Semantic Independence

Where accepted semantics require independent evaluation, the Harness MUST select a physical mechanism sufficient to prevent improper dependency on the work being evaluated.

Semantic independence MAY be achieved through:

- controlled input selection;
- context filtering;
- exclusion of previous conclusions;
- fresh instruction assembly;
- fresh model invocation;
- separate agent;
- separate runtime process.

The weakest mechanism that reliably preserves the required independence SHOULD be preferred.

Physical separation alone MUST NOT be assumed to establish semantic independence.

A separate model invocation receiving biased or authoritative-looking prior conclusions may still fail the semantic independence requirement.

---

# 20. Engineering Review Independence

Engineering Review MUST remain distinct from the engineering execution being reviewed.

This distinction does not automatically require a dedicated reviewer agent.

The implementation MUST nevertheless ensure that the review mechanism can provide an independent engineering evaluation where Stage 3 requires one.

Where AI performs both implementation and review, the review materialization SHOULD avoid treating the implementation reasoning or implementation self-assessment as authoritative review evidence.

Applicable mechanisms MAY include:

- fresh review instructions;
- direct inspection of project artifacts;
- direct inspection of verification evidence;
- exclusion of self-approval claims;
- separate invocation where proportional.

---

# 21. Educational Assessment Independence

Educational Assessment MUST remain distinct from engineering execution.

The assessment mechanism MAY consume:

- learner interaction;
- learner reasoning;
- assistance attribution;
- engineering observations;
- Candidate Educational Evidence;
- relevant project artifacts.

It MUST NOT infer accepted educational evidence solely from successful engineering execution.

The execution mechanism that produced code MAY contribute candidate observations.

It MUST NOT thereby gain educational assessment authority.

---

# 22. Execution Ordering

Physical execution order MAY be determined by implementation needs.

Execution order MUST NOT be treated automatically as semantic precedence.

Therefore:

```text
Executed Later
        ≠
Higher Authority
```

and:

```text
Produces Final Output
        ≠
Owns Final Decision
```

A later execution step MUST preserve upstream authoritative decisions and constraints unless accepted semantics explicitly permit reconsideration.

Runtime ordering MAY support dependencies.

It MUST NOT manufacture authority.

---

# 23. Runtime Routing

Runtime routing determines which physical mechanism handles a specific operation.

Routing MAY depend on:

- applicable responsibilities;
- required tools;
- required model capabilities;
- context availability;
- semantic independence;
- security;
- environment support;
- external-capability availability.

Runtime routing MUST NOT be mechanically derived from:

- Stage 1 educational states;
- Stage 1 logical Agent Pipeline stages;
- Stage 3 development lifecycle activities;
- Stage 4 document order.

These concepts MAY provide relevant context.

They MUST NOT become runtime routing states without independent implementation justification.

---

# 24. Educational State Boundary

The accepted educational State Machine represents the conceptual educational interaction lifecycle.

Stage 5 MAY maintain runtime execution state necessary to implement interactions.

Runtime execution state MUST remain conceptually separate from educational state.

For example:

```text
Runtime:
waiting_for_tool_result
```

does not imply a new educational state.

Likewise:

```text
Educational:
Assess
```

does not imply a dedicated runtime agent or process.

If Stage 5 introduces a physical runtime state machine, its states MUST be derived from implementation needs and MUST NOT redefine educational lifecycle semantics.

---

# 25. Development Lifecycle Boundary

Stage 3 lifecycle activities MAY influence runtime applicability and context.

For example, Testing / Verification may make test execution responsibilities relevant.

However:

```text
Development Lifecycle Activity
        ≠
Runtime Router State
```

The Harness MUST NOT force project work through a physical execution graph solely because Stage 3 defines a conceptual development lifecycle.

Feedback loops and proportional activity applicability MUST remain possible.

---

# 26. Responsibility Provenance

The Harness SHOULD preserve sufficient provenance to determine which accepted responsibilities materially contributed to a significant runtime output or authority-sensitive operation.

Responsibility provenance MAY record:

- applicable responsibility identifiers;
- materialized instruction set identity;
- policy decisions;
- context dependencies;
- execution mechanism;
- evidence references.

Responsibility provenance is implementation metadata.

It MUST NOT be treated as hidden chain-of-thought.

Its purpose is conformance, explainability, debugging, and auditability.

---

# 27. Materialized Instruction Identity

Where materially useful, the Harness SHOULD be able to identify the effective instruction materialization used for a runtime execution.

Identity MAY be based on:

- canonical instruction fragments;
- content hash;
- configuration version;
- responsibility-set identity;
- generated materialization record.

The chosen mechanism SHOULD allow implementation verification to determine what constraints were actually supplied or enforced.

Materialized instruction identity MUST NOT convert a generated prompt into an authoritative semantic source.

Accepted Stage 4 contracts remain authoritative.

---

# 28. Runtime Context Exposure

Each Execution Unit SHOULD receive only the context materially necessary to satisfy its responsibilities.

Broad context access SHOULD NOT be the default where narrower access improves:

- semantic independence;
- authority clarity;
- privacy;
- security;
- context quality;
- model reliability.

However, context minimization MUST NOT remove authoritative information necessary for correct behavior.

The implementation therefore SHOULD optimize for:

```text
Sufficient Relevant Context
```

rather than:

```text
Maximum Available Context
```

or:

```text
Minimum Context Regardless of Correctness
```

Detailed context contracts are defined in `02-Context-Authority-and-Truth-Implementation.md`.

---

# 29. Tool Authority

Tool availability MUST remain separate from authority to use the tool.

The implementation MUST preserve:

```text
Tool Exists
        ≠
Tool Is Applicable
        ≠
Tool May Be Invoked
        ≠
Tool Invocation Is Authorized
        ≠
Tool Succeeded
```

A model that can name or request a tool MUST NOT automatically obtain permission to execute it.

Tool invocation SHOULD pass through the applicable Harness authority and security boundaries.

Detailed tool integration is defined downstream.

---

# 30. External Capability Execution

Superpowers or another external capability MAY internally use prompts, agents, subagents, workflows, or runtime stages.

Those mechanisms belong to the external capability.

The Harness MUST NOT infer ALH semantic topology from them.

When an applicable external capability is invoked, the Harness SHOULD treat it as an external execution contract through the applicable capability adapter.

ALH MUST preserve its own:

- obligation interpretation;
- authority;
- input context constraints;
- result interpretation;
- evidence requirements;
- completion semantics.

---

# 31. Failure Handling

Runtime failure MUST preserve semantic distinctions.

The Harness SHOULD distinguish where materially relevant:

- responsibility not applicable;
- responsibility applicable but not materialized;
- materialization failure;
- invocation failure;
- capability unavailable;
- execution failure;
- result unavailable;
- result unverified;
- policy denial;
- insufficient authority;
- insufficient evidence.

Failure MUST NOT be silently converted into success or non-applicability.

A retry MUST NOT create additional semantic authority.

Repeated execution MUST NOT duplicate authority-sensitive state mutations unless idempotency or transactional semantics explicitly permit it.

---

# 32. Responsibility Completion

Completion of an Execution Unit MUST NOT automatically establish completion of every semantic responsibility involved.

The Harness SHOULD distinguish:

```text
Execution Unit Completed
        ≠
Responsibility Satisfied
        ≠
Engineering Done
        ≠
Educational Done
```

Responsibility satisfaction depends on its accepted output and evidence contract.

Execution success is only one possible input to that determination.

---

# 33. Runtime Outputs

A runtime execution MAY produce:

- user-facing guidance;
- engineering recommendations;
- project mutations;
- Candidate Educational Evidence;
- assessment inputs;
- execution evidence;
- tool results;
- proposed artifacts;
- accepted artifacts where proper authority exists;
- completion-related evidence;
- uncertainty.

The physical output representation MUST preserve material semantic distinctions required by downstream consumers.

A single user-facing message MAY combine multiple compatible semantic outputs.

Presentation composition MUST NOT erase underlying authority or evidence distinctions.

---

# 34. Proportional Materialization Strategy

The default implementation strategy SHOULD follow this order:

```text
1. Can the contract be preserved
   through existing deterministic structure?

        ↓ if not sufficient

2. Can it be preserved through
   instruction composition?

        ↓ if not sufficient

3. Does it require a separate
   model invocation?

        ↓ if not sufficient

4. Does it require stronger
   context or authority isolation?

        ↓

5. Introduce separate physical
   agent/process only where justified.
```

This sequence is guidance, not a rigid execution algorithm.

Its purpose is to prevent semantic decomposition from creating unnecessary physical topology.

---

# 35. Initial Runtime Architecture Direction

The initial Harness runtime SHOULD operate around a contract-preserving Harness Kernel.

Conceptually:

```text
Interaction
        ↓
Context Acquisition
        ↓
Responsibility Applicability
        ↓
Responsibility Set
        ↓
Materialization Plan
        ↓
Authority / Policy Check
        ↓
Execution Unit(s)
        ↓
Evidence Capture
        ↓
Output / State Transition
```

This flow is an implementation architecture abstraction.

It MUST NOT be interpreted as:

- the Stage 1 educational State Machine;
- the Stage 1 Agent Pipeline;
- the Stage 3 development lifecycle;
- a requirement for one process per step;
- a requirement for one model call per step.

Multiple phases MAY collapse into one physical operation where semantic contracts remain preserved.

---

# 36. Minimum Runtime Responsibility Record

Where a structured runtime representation is used, the minimum responsibility record SHOULD be capable of representing, where applicable:

```text
responsibility identity
applicability status
authority domain
required context
prohibited actions
evidence requirements
output constraints
composition constraints
semantic independence requirements
```

This is a semantic implementation requirement.

It does not mandate a specific programming language type, JSON schema, database table, or serialized format.

Downstream implementation planning MAY refine the concrete structure.

---

# 37. Runtime Materialization Plan

For a materially significant execution, the Harness SHOULD be capable of constructing a Runtime Materialization Plan.

The plan MAY identify:

- applicable responsibilities;
- selected Execution Units;
- instruction fragments;
- deterministic policies;
- context requirements;
- authority requirements;
- tool/capability requirements;
- semantic independence boundaries;
- evidence expectations.

The Runtime Materialization Plan is an execution aid.

It MUST NOT become authoritative over accepted Stage 1–4 semantics.

If generated automatically, it remains a derived runtime artifact.

---

# 38. Model Provider Neutrality

The core runtime architecture SHOULD NOT depend semantically on one specific model provider.

Provider-specific capabilities MAY influence adapter behavior or physical execution choices.

They MUST NOT redefine:

- Instruction Responsibilities;
- authority;
- educational semantics;
- engineering methodology;
- completion semantics.

Where a provider lacks a capability necessary to preserve accepted contracts, the implementation MUST surface the limitation or choose another compliant mechanism.

It MUST NOT weaken the semantic contract silently.

---

# 39. Coding Environment Neutrality

The runtime architecture SHOULD preserve a stable ALH semantic boundary across supported coding environments.

Environment-specific adapters MAY differ materially in:

- context retrieval;
- project mutation;
- tool execution;
- agent invocation;
- capability discovery;
- interaction presentation.

These differences SHOULD remain outside the Harness semantic core where practical.

A supported environment MUST provide sufficient physical mechanisms to preserve required ALH contracts.

Environment support MUST NOT be claimed where those contracts cannot be preserved.

---

# 40. Implementation Conformance Rules

A runtime materialization is conformant only if it preserves the accepted semantic contract of every materially applicable responsibility.

At minimum:

```text
Responsibility Applicability
        ≠
Physical Invocation
```

```text
Instruction Responsibility
        ≠
Prompt Artifact
```

```text
Instruction Responsibility
        ≠
Physical Agent
```

```text
Execution Order
        ≠
Semantic Precedence
```

```text
Context Access
        ≠
Authority
```

```text
Model Capability
        ≠
Authority
```

```text
Tool Availability
        ≠
Tool Authority
```

```text
Execution Unit Completion
        ≠
Responsibility Satisfaction
```

```text
Engineering Execution
        ≠
Educational Assessment
```

A runtime design that cannot preserve one of these distinctions MUST be revised or surfaced as an architectural conflict where the accepted boundary itself would need to change.

---

# 41. Implementation Decisions Left Open

This document intentionally does not yet prescribe:

- programming language;
- Harness process count;
- package boundaries;
- class/module structure;
- exact Responsibility Set schema;
- exact Runtime Materialization Plan schema;
- prompt template format;
- prompt storage location;
- model provider;
- number of model invocations;
- fixed agent count;
- deterministic routing algorithm;
- event-loop technology;
- concurrency model;
- queue technology;
- API protocol;
- concrete host integration;
- capability discovery mechanism;
- execution persistence format.

These remain downstream implementation decisions.

They MUST conform to this document and its parent contracts.

---

# 42. Observations

## O-1 — Runtime Responsibility Set Is Useful but Not Authoritative

A structured Responsibility Set is likely to simplify instruction assembly, policy enforcement, conformance checks, and observability.

It remains derived runtime state rather than semantic authority.

## O-2 — Deterministic Enforcement Reduces Prompt Fragility

Several critical boundaries can be preserved more reliably through code-level policy than through repeated natural-language instructions.

This is particularly relevant for:

- state mutation;
- evidence-required claims;
- tool authority;
- accepted/candidate status.

## O-3 — Semantic Independence Is Context-Sensitive

Separate invocation is neither always necessary nor always sufficient.

The relevant question is whether the chosen mechanism prevents improper dependency while preserving required evidence and context.

## O-4 — Runtime Topology May Vary by Environment

Windsurf, Devin, or another coding environment may expose different execution primitives.

ALH can remain semantically stable while physical topology differs across adapters.

## O-5 — Runtime Plans Should Remain Derived

A generated execution or materialization plan can improve observability and repeatability.

It MUST NOT become a hidden replacement for accepted semantic responsibilities.

---

# 43. Candidate ADRs

No Candidate ADR is introduced by this document.

The following are implementation decisions within accepted Stage 1–4 boundaries:

- using a Runtime Responsibility Set;
- using Execution Units;
- using a Runtime Materialization Plan;
- combining deterministic policies with model instructions;
- permitting multiple topology implementations;
- using proportional semantic-independence mechanisms.

If later implementation requires changing accepted authority, responsibility ownership, educational semantics, trust boundaries, or ADR-001, the issue MUST be surfaced as a Candidate ADR.

---

# 44. Future Evolutions

The following MAY be considered after the initial proportional implementation:

- automatic compilation of accepted responsibility contracts into runtime policies;
- formal responsibility compatibility analysis;
- model-provider-aware optimization of responsibility composition;
- dynamic cost-aware invocation planning;
- concurrency-aware responsibility scheduling;
- declarative execution graphs;
- formal verification of authority-preserving composition;
- adaptive runtime topology based on measured reliability.

These MUST NOT complicate the initial implementation unless required by accepted contracts.

---

# 45. Completion Criteria

This document is complete when Stage 5 has a normative runtime materialization model sufficient to proceed with context architecture without deriving physical topology from semantic decomposition.

At minimum, it MUST establish:

- responsibility applicability;
- Runtime Responsibility Materialization;
- Responsibility Set;
- instruction materialization;
- prompt-artifact boundary;
- composition rules;
- authority preservation;
- Execution Units;
- model-invocation boundary;
- physical-agent boundary;
- deterministic enforcement;
- semantic independence;
- runtime routing boundaries;
- educational-state boundary;
- development-lifecycle boundary;
- tool authority boundary;
- failure semantics;
- responsibility completion semantics;
- topology neutrality;
- implementation decisions intentionally left open.

Acceptance of this document authorizes detailed context, authority, truth, and provenance implementation design in:

`02-Context-Authority-and-Truth-Implementation.md`

It does not authorize Harness coding before the applicable Stage 5 normative design chain and implementation plan are complete.
