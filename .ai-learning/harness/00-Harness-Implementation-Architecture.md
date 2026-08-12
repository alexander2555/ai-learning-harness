# Harness Implementation Architecture

Status: Accepted
Version: 1.0

Parent Documents

- 03-System-Architecture.md
- 04-Agent-Pipeline.md
- 00-Learning-Model.md
- 00-Development-Methodology.md
- 00-Prompt-Architecture.md
- 06-Instruction-Outputs-Claims-and-Stage-5-Contracts.md
- ADR-001-Separation-of-Application-and-Learning-Infrastructure.md

Related Documents

- 11-Repository-Structure.md
- 06-Superpowers-Integration-and-Engineering-Done.md

---

# 1. Purpose

This document defines the foundational Harness Implementation Architecture of AI Learning Harness (ALH).

Stage 5 defines how accepted Stage 1–4 contracts are physically materialized into a working Harness.

It answers:

> How should accepted ALH architectural, educational, development, and instruction contracts be physically materialized into a proportional, secure, maintainable Harness while preserving their responsibility, authority, truth, educational, engineering, evidence, completion, trust, and external-capability boundaries?

The Harness Implementation Architecture MUST preserve accepted upstream semantics.

It MUST NOT redefine those semantics for implementation convenience.

The governing relationship is:

```text
Accepted Semantic Contract
        ↓ constrains

Implementation Decision
        ↓ realizes

Physical Harness
```

An implementation decision selects a physical mechanism for satisfying an accepted contract.

It does not acquire authority to change that contract.

Where a physical implementation cannot preserve an accepted responsibility, ownership rule, authority boundary, trust boundary, or comparable architectural decision, the conflict MUST be surfaced as a Candidate ADR rather than silently resolved through implementation.

---

# 2. Stage Responsibility

The accepted stage relationship is:

```text
Stage 1
Architecture
    =
What ALH is

        ↓

Stage 2
Educational Methodology
    =
How learning works

        ↓

Stage 3
Development Methodology
    =
How the learner's real software development proceeds
within the ALH learning environment

        ↓

Stage 4
Prompt Architecture
    =
How accepted responsibilities are expressed
through bounded AI instruction responsibilities

        ↓

Stage 5
Harness Implementation
    =
How accepted ALH contracts are physically materialized
into a working Harness

        ↓

Stage 6
Validation
    =
How the resulting system is validated
```

Stage 5 consumes accepted Stage 1–4 semantics and accepted ADRs as normative constraints.

Stage 5 owns physical materialization.

It MUST NOT become an alternative source of:

- ALH architectural responsibility;
- educational methodology;
- development methodology;
- Instruction Responsibility semantics;
- educational evidence semantics;
- competency semantics;
- learner-state authority;
- engineering completion semantics;
- educational completion semantics;
- external-capability ownership;
- Stage 6 validation criteria.

---

# 3. Scope

Harness Implementation Architecture defines the physical architecture within which accepted ALH contracts are implemented.

Its scope includes:

- Harness runtime boundaries;
- physical responsibility materialization;
- instruction materialization;
- runtime composition;
- model and AI integration boundaries;
- context assembly and retrieval;
- project-context integration;
- learner-state persistence;
- authority enforcement;
- evidence capture;
- claim enforcement;
- external-capability integration;
- tool integration;
- execution-result handling;
- provenance;
- uncertainty handling;
- security and trust enforcement;
- configuration;
- observability;
- failure handling;
- integration with supported AI coding environments;
- implementation-level conformance to accepted Stage 1–4 contracts.

Detailed mechanisms are defined by downstream Stage 5 documents.

This document establishes the common implementation architecture within which those mechanisms MUST operate.

---

# 4. Non-Goals

Stage 5 MUST NOT:

- redefine Stage 1 Architecture;
- redefine Stage 2 Educational Methodology;
- redefine Stage 3 Development Methodology;
- redefine Stage 4 Prompt Architecture;
- silently modify an accepted ADR;
- treat historical or superseded Stage 4 or Stage 5 artifacts as normative authority;
- derive physical agent topology directly from Stage 1 logical responsibilities;
- derive physical agents, prompt files, model invocations, or runtime processes directly from Stage 4 Instruction Responsibilities;
- convert Stage 1 educational states into runtime execution topology without independent implementation justification;
- convert Stage 3 lifecycle activities into runtime routing topology merely because they form a lifecycle;
- collapse engineering and educational authority;
- collapse Engineering Done and Educational Done;
- collapse Automation Level, Engineering Rigor, and AI autonomy;
- convert engineering observations directly into authoritative learner state;
- duplicate Superpowers-owned workflows;
- invent undocumented external-capability behavior;
- treat capability applicability as capability invocation;
- treat capability invocation as capability success;
- claim execution or completion without sufficient evidence;
- promote generated or derived artifacts into authoritative truth merely through storage, transformation, aggregation, or presentation;
- perform Stage 6 validation as a substitute for Stage 5 implementation verification.

---

# 5. Upstream Authority

Stage 5 is downstream from:

- accepted Stage 1 Architecture Specification;
- accepted Stage 2 Educational Methodology;
- accepted Stage 3 Development Methodology;
- accepted Stage 4 Prompt Architecture;
- accepted ADRs.

The normative relationship is:

```text
Accepted Stage 1–3 Semantics
        ↓
Accepted Stage 4 Instruction Contracts
        ↓
Stage 5 Physical Materialization
```

Stage 5 MAY choose physical mechanisms where upstream documents intentionally leave implementation open.

It MUST NOT infer that implementation freedom creates semantic authority.

Historical or superseded implementation artifacts MUST NOT determine current Stage 5 design merely because they already contain code, schemas, prompts, runtime topology, or persistence mechanisms.

Reuse MAY occur only where a concrete implementation need exists and the reused mechanism independently conforms to the accepted baseline.

---

# 6. Core Implementation Principle

The foundational Stage 5 principle is:

```text
Preserve Contract
        ↓
Select Mechanism
        ↓
Materialize
        ↓
Enforce Where Material
        ↓
Observe Evidence
```

Implementation topology MUST follow justified physical needs rather than semantic naming.

Therefore:

```text
Logical Responsibility
        ≠
Physical Component
```

```text
Instruction Responsibility
        ≠
Prompt File
        ≠
Physical Agent
        ≠
Model Invocation
        ≠
Runtime Process
```

```text
Authority Domain
        ≠
Physical Process
```

A physical component MAY implement multiple compatible semantic responsibilities.

A semantic responsibility MAY be implemented through multiple physical mechanisms.

Either choice MUST preserve the accepted semantic contract.

---

# 7. Harness Kernel and Ports / Adapters

The default Stage 5 implementation architecture is a contract-preserving Harness Kernel surrounded by explicit integration ports and concrete adapters.

Conceptually:

```text
Learner / Coding Environment
            │
            ▼
┌──────────────────────────────┐
│      Harness Interface       │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────────────────┐
│              Harness Kernel              │
│                                          │
│  responsibility materialization         │
│  instruction composition                │
│  authority enforcement                  │
│  context coordination                   │
│  decision coordination                  │
│  evidence / claim enforcement           │
│  semantic output handling               │
└──────┬──────────┬──────────┬────────────┘
       │          │          │
       ▼          ▼          ▼
 Project Port  Learner     Model / AI Port
               State Port
       │          │          │
       ▼          ▼          ▼
 Project /    ALH-owned    Model provider /
 Repository   persistence  coding agent

               │
               ▼
         Capability / Tool Ports
               │
               ▼
       External capabilities,
       including Superpowers
```

This diagram is architectural, not a mandatory deployment topology.

The Harness Kernel MAY be physically implemented as one process or multiple processes.

A port MAY be implemented by one or more adapters.

An adapter MAY internally use multiple external mechanisms.

These physical choices MUST NOT alter the semantic responsibilities represented by the architecture.

---

# 8. Harness Kernel Responsibility

The Harness Kernel is the implementation boundary responsible for coordinating physical ALH behavior while preserving accepted contracts.

The Kernel SHOULD provide the common mechanisms necessary to:

- determine applicable runtime behavior from accepted responsibilities;
- materialize applicable instruction contracts;
- compose compatible instruction responsibilities;
- preserve authority boundaries during composition;
- assemble context according to semantic context requirements;
- distinguish project truth from learner truth;
- coordinate access to authoritative learner state;
- apply authority-sensitive state mutation rules;
- coordinate model or coding-agent execution;
- coordinate external-capability and tool access;
- capture materially relevant execution evidence;
- constrain claims according to available evidence;
- preserve uncertainty;
- maintain materially relevant provenance;
- support concise external explainability;
- enforce cross-cutting security and trust boundaries.

The Kernel MUST NOT be treated as a new semantic authority.

It implements authority defined upstream.

The fact that the Kernel coordinates an operation MUST NOT itself authorize that operation.

---

# 9. Ports

A port defines a Harness-owned physical integration contract required to obtain information, request an operation, or persist state without coupling ALH semantics to a specific external implementation.

A port MAY expose capabilities such as:

- obtaining current project state;
- reading project artifacts;
- obtaining repository revision identity;
- accessing learner state;
- performing authorized learner-state mutation;
- invoking a model;
- invoking an external capability;
- invoking a development tool;
- obtaining execution results;
- recording implementation evidence.

A port defines what the Harness requires from an integration boundary.

It MUST NOT redefine the semantic authority of the integrated system.

In particular:

```text
Port Capability
        ≠
Semantic Authority
```

and:

```text
Port Access
        ≠
Mutation Authority
```

---

# 10. Adapters

An adapter implements a port for a concrete technology, environment, provider, repository mechanism, storage mechanism, tool, or external capability.

Examples MAY include:

```text
ProjectPort
        ↑
LocalGitAdapter
```

```text
ModelPort
        ↑
ModelProviderAdapter
```

```text
CapabilityPort
        ↑
SuperpowersAdapter
```

These examples illustrate implementation structure only.

They do not prescribe concrete providers, technologies, filenames, packages, processes, or deployment units.

Adapters MUST preserve the contracts of their ports.

An adapter MUST NOT gain ALH semantic authority merely because it:

- can perform an operation;
- has access to broader context;
- executes an external workflow;
- uses a more capable model;
- executes later in a runtime sequence;
- returns the final external result.

---

# 11. Topology Neutrality

Stage 5 MUST NOT begin from a predetermined physical agent topology.

The architecture MUST support implementation choices such as:

- one model invocation;
- multiple model invocations;
- one physical AI agent;
- multiple physical AI agents;
- host-provided agents;
- external capability subagents;
- non-agent deterministic mechanisms;

where those choices are independently justified.

The governing relationship is:

```text
Semantic Need
        ↓
Required Physical Property
        ↓
Implementation Mechanism
```

not:

```text
Semantic Role Name
        ↓
Agent
```

The existence of:

- a Stage 1 Pipeline responsibility;
- a Stage 4 Instruction Responsibility;
- an engineering lifecycle activity;
- an educational state;
- an authority domain;

MUST NOT by itself justify creation of a physical agent.

---

# 12. Semantic Independence

Some accepted responsibilities require semantic independence.

Semantic independence means that an evaluation or decision must not be improperly determined by another responsibility whose output is being evaluated.

It does not automatically require physical isolation.

Therefore:

```text
Semantic Independence
        ≠
Separate Agent
        ≠
Separate Model
        ≠
Separate Process
        ≠
Separate Prompt File
```

Stage 5 MUST choose an implementation mechanism sufficient to preserve the required independence.

Possible mechanisms MAY include:

- controlled context separation;
- exclusion of non-authoritative conclusions;
- fresh evaluation context;
- separate model invocation;
- separate physical execution;

depending on the strength of independence materially required.

Physical isolation SHOULD be introduced only where a weaker proportional mechanism cannot reliably preserve the semantic contract.

---

# 13. Core Enforcement Direction

Critical accepted contracts MUST NOT rely exclusively on cooperative model behavior where violation could materially alter authoritative state, semantic authority, completion status, evidence status, truth interpretation, or security.

Stage 5 therefore distinguishes:

```text
Instruction-Level Constraint
        ≠
Runtime-Enforced Constraint
```

Not every semantic distinction requires a dedicated runtime schema or enforcement mechanism.

Runtime enforcement SHOULD be introduced where failure to preserve a distinction could materially:

- mutate authoritative state incorrectly;
- grant authority that does not exist;
- promote candidate information into accepted truth;
- create an unsupported execution or completion claim;
- collapse project truth and learner truth;
- collapse engineering and educational authority;
- erase material uncertainty;
- cross a security or trust boundary.

The implementation SHOULD remain proportional.

Enforcement mechanisms MUST NOT introduce new semantic authority.

---

# 14. Context, Authority, and Evidence Metadata

Where downstream behavior materially depends on semantic status, the Harness MUST preserve sufficient machine-inspectable information to distinguish that status.

Relevant information MAY include:

- source;
- provenance;
- authority;
- freshness;
- applicability;
- derivation;
- uncertainty;
- conflict status;
- evidence relationship;
- project revision or equivalent state identity.

The implementation MUST NOT require every piece of context to carry every possible metadata field.

Representation SHOULD be proportional to the semantic risk of losing the distinction.

The following remain mandatory semantic distinctions:

```text
Available Context
        ≠
Relevant Context
        ≠
Authoritative Context
```

```text
Source Authority
        ≠
Instruction Authority
```

```text
Derived Representation
        ≠
Authoritative Source
```

Context transformation, summarization, caching, serialization, or transport MUST NOT silently promote authority or erase material uncertainty.

Detailed context implementation is defined downstream.

---

# 15. Project Truth and Learner Truth

The Harness MUST physically preserve separate authority domains for project engineering state and learner educational state.

Conceptually:

```text
Project Sources
        =
Authoritative Engineering Project State
where applicable
```

and:

```text
ALH Learner-State Infrastructure
        =
Authoritative Learner Context
```

The Harness MAY correlate these domains.

It MUST NOT collapse them.

Project artifacts MAY produce engineering observations.

Engineering observations MAY become Candidate Educational Evidence.

They MUST NOT directly become authoritative learner state.

Learner-state persistence MUST preserve ADR-001.

ALH-specific learner state MUST NOT be stored in application artifacts merely because application storage is technically convenient.

---

# 16. Learner-State Mutation Authority

Access to learner state MUST NOT imply authority to mutate learner state.

The implementation MUST preserve:

```text
Learner-State Read Access
        ≠
Learner-State Write Authority
```

Engineering execution, engineering review, project observation, or model inference MUST NOT directly update authoritative educational state unless the accepted educational authority path permits the specific update.

In particular, implementation paths MUST NOT allow engineering execution alone to:

- declare competency mastery;
- update competency state;
- assign Learning Debt;
- change Automation Level;
- declare Educational Done.

Stage 5 MUST provide a physical mutation boundary sufficient to preserve accepted Stage 1 and Stage 2 authority.

The concrete persistence and mutation mechanism is defined downstream.

---

# 17. Evidence Before Claim Enforcement

The Harness MUST preserve:

```text
Evidence
        ↓
Claim
```

Physical execution mechanics MUST distinguish at least where materially relevant:

```text
Requested
        ≠
Invoked
        ≠
Executed
        ≠
Succeeded
        ≠
Verified Result
```

A requested or intended action MUST NOT be represented as executed.

An invocation MUST NOT be represented as successful merely because invocation occurred.

A model statement that an external action succeeded MUST NOT by itself establish successful execution.

Where a factual claim depends on execution, the Harness MUST obtain or preserve sufficient execution evidence before presenting the claim as verified.

Where sufficient evidence is unavailable, the claim MUST remain appropriately uncertain or unverified.

Detailed evidence and claim representation is defined downstream.

---

# 18. Educational Evidence Boundary

Stage 5 MUST physically preserve the accepted educational evidence path:

```text
Engineering Observation
        ↓
Candidate Educational Evidence
        ↓
Educational Assessment
        ↓
Accepted Educational Evidence, if appropriate
        ↓
Competency Evaluation
```

Candidate Educational Evidence MUST remain distinguishable from accepted educational evidence wherever loss of that distinction could change learner state or educational decisions.

Engineering verification evidence MUST remain distinguishable from educational evidence.

Therefore:

```text
Verification Evidence
        ≠
Educational Evidence
```

Passing tests, successful implementation, successful review, or successful capability execution MUST NOT automatically establish learner mastery.

---

# 19. Engineering Done and Educational Done

The Harness MUST represent and process Engineering Done and Educational Done independently wherever conflation could alter system behavior or authoritative state.

```text
Engineering Done
        ≠
Educational Done
```

A single combined authoritative completion state MUST NOT replace these concepts.

A presentation layer MAY summarize multiple completion states for user convenience only if the underlying distinctions remain inspectable and no semantic authority is lost.

Each completion claim MUST be supported by:

- appropriate authority;
- applicable authoritative context;
- sufficient evidence.

---

# 20. Automation Level, Engineering Rigor, and AI Autonomy

The implementation MUST preserve three independent dimensions:

```text
Automation Level
        ≠
Engineering Rigor
        ≠
AI Autonomy
```

Automation Level MUST NOT be implemented as:

- tool permission;
- model permission;
- file-write permission;
- external-capability permission;
- number of model invocations;
- agent count;
- orchestration mode.

Engineering Rigor MUST NOT determine learner mastery or AI execution authority.

AI autonomy MAY be an implementation concern.

If represented, it MUST remain independent from accepted educational Automation Level and engineering rigor semantics.

---

# 21. Instruction Materialization

Stage 4 Instruction Responsibilities are semantic contracts.

Stage 5 MUST materialize applicable instruction behavior without assuming:

```text
One Instruction Responsibility
        =
One Prompt File
```

or:

```text
One Instruction Responsibility
        =
One Model Invocation
```

or:

```text
One Instruction Responsibility
        =
One Physical Agent
```

Instruction materialization MAY involve:

- static instruction artifacts;
- dynamically assembled instructions;
- shared instruction fragments;
- structured runtime policies;
- deterministic enforcement mechanisms;
- model-independent checks;
- model invocations;
- combinations of these mechanisms.

The chosen materialization MUST preserve responsibility identity, authority, context requirements, prohibitions, evidence requirements, uncertainty, and output constraints where materially relevant.

Detailed instruction materialization is defined downstream.

---

# 22. Decision Engine Materialization

The accepted Decision Engine responsibility MUST be physically materialized without redefining its Stage 1 authority.

The Decision Engine MUST NOT be inferred to require:

- a dedicated physical agent;
- a dedicated model;
- a dedicated process;
- a dedicated prompt file.

Development lifecycle state MAY be relevant context.

It MUST NOT become the Decision Engine.

Runtime orchestration state MAY support implementation.

It MUST NOT silently redefine the accepted educational state model.

Concrete Decision Engine materialization belongs to downstream Stage 5 design.

---

# 23. External Capabilities

External capabilities, including Superpowers, MUST be integrated through explicit physical boundaries.

The Harness owns:

- ALH obligation;
- ALH semantic interpretation;
- ALH authority;
- educational semantics;
- engineering semantics;
- completion semantics.

The external capability owns its verified execution contract.

Therefore:

```text
Capability Contract Ownership
        ≠
ALH Semantic Authority
```

and:

```text
Capability Applicability
        ≠
Capability Selection
        ≠
Capability Invocation
        ≠
Capability Success
```

Stage 5 MAY determine physical capability discovery, selection, invocation, and result handling.

It MUST NOT duplicate Superpowers-owned workflows merely to make integration easier.

Where implementation materially depends on specific Superpowers behavior, that behavior MUST be verified against current upstream capability definitions rather than assumed.

---

# 24. Capability Unavailability

Capability unavailability MUST NOT silently remove an accepted engineering obligation.

Where an applicable external capability is unavailable, the Harness MUST preserve the underlying obligation unless accepted upstream semantics establish otherwise.

The Harness MUST NOT silently implement a replacement Superpowers workflow.

Another available project, coding-environment, agent, tool, or verified external mechanism MAY satisfy the underlying obligation where accepted semantics permit it.

Capability unavailability, fallback selection, obligation status, and execution success MUST remain distinguishable where materially relevant.

---

# 25. Generated and Accepted Artifacts

Physical generation, storage, or presentation MUST NOT establish artifact authority.

The Harness MUST preserve:

```text
Generated Artifact
        ≠
Accepted Artifact
```

and:

```text
Derived Artifact
        ≠
Authoritative Source
```

An artifact MAY become accepted only through the authority path applicable to that artifact.

Persistence MUST NOT itself constitute acceptance.

Transformation MUST NOT itself constitute semantic promotion.

---

# 26. Provenance and Revision Identity

The Harness SHOULD preserve materially relevant provenance sufficient to explain significant decisions and claims.

Where engineering evidence depends on a mutable project state, the implementation SHOULD associate that evidence with the project revision, workspace state, content identity, or equivalent reference necessary to interpret its freshness.

Evidence obtained for an earlier project state MUST NOT silently be treated as current evidence after a material change invalidates its applicability.

The concrete identity and invalidation mechanisms are defined downstream.

---

# 27. Explainability

Significant Harness decisions SHOULD remain externally explainable through concise rationale and evidence references.

Where appropriate, the Harness SHOULD be able to expose:

- the decision or conclusion;
- materially relevant authoritative context;
- applicable constraints;
- supporting evidence;
- material uncertainty;
- remaining obligations.

Explainability MUST NOT require disclosure or persistence of hidden chain-of-thought.

Implementation observability MAY preserve structured decision inputs, policy results, evidence references, and externally suitable rationale.

It SHOULD NOT depend on hidden reasoning traces as an architectural requirement.

---

# 28. Security and Trust

Security-by-design remains an architectural requirement.

Stage 5 MUST physically consider trust and security boundaries involving:

- learner input;
- project content;
- repository instructions;
- generated content;
- external capability output;
- model output;
- tools;
- tool arguments;
- project writes;
- learner-state writes;
- persistence;
- secrets;
- provenance;
- instruction authority;
- external integrations.

Technical access MUST NOT create semantic authority.

Untrusted project or external content MUST NOT silently gain instruction authority merely because it is included in model context.

Authority-sensitive mutations SHOULD pass through explicit enforcement boundaries rather than depend solely on model compliance.

Detailed trust and security mechanisms are defined downstream.

---

# 29. Proportional Implementation

ALH MUST use proportional architecture.

Stage 5 MUST NOT introduce implementation complexity solely to mirror conceptual distinctions physically.

A separate:

- service;
- process;
- agent;
- model invocation;
- database;
- queue;
- schema;
- prompt file;

MUST NOT be introduced merely because an accepted semantic concept has a distinct name.

Physical separation SHOULD be introduced where it materially improves or is necessary for:

- authority enforcement;
- trust isolation;
- semantic independence;
- persistence integrity;
- reliability;
- security;
- evidence integrity;
- maintainability;
- portability.

The minimum implementation sufficient to preserve accepted contracts SHOULD be preferred over ceremonial topology.

---

# 30. Implementation Decision Classification

Every material Stage 5 design choice SHOULD be evaluated as one of:

## Accepted Semantic Contract

A constraint already established by accepted Stage 1–4 documents or an accepted ADR.

Example:

```text
Candidate Educational Evidence
        ≠
Accepted Educational Evidence
```

## Implementation Decision

A physical choice for satisfying accepted contracts without changing their semantic responsibility or boundary.

Example:

```text
Candidate Educational Evidence
        ↓
Stored in an assessment input structure
```

## Architectural Change

A proposed change to an accepted architectural responsibility, ownership rule, authority boundary, trust boundary, or comparable accepted decision.

Example:

```text
Engineering execution
        ↓
Direct competency-state mutation
```

Architectural Change MUST NOT be introduced silently.

Where required, it MUST be surfaced as a Candidate ADR and remain unapplied until accepted through project governance.

---

# 31. Implementation Conformance Gate

A Stage 5 implementation decision MUST be checked against accepted upstream contracts before it becomes normative implementation design.

At minimum, the design MUST preserve:

```text
Logical Responsibility
        ≠
Physical Topology
```

```text
Instruction Responsibility
        ≠
Physical Topology
```

```text
Capability
        ≠
Authority
```

```text
Context Access
        ≠
Authority
```

```text
Project Truth
        ≠
Learner Truth
```

```text
Engineering Responsibility
        ≠
Educational Responsibility
```

```text
Verification Evidence
        ≠
Educational Evidence
```

```text
Candidate Educational Evidence
        ≠
Accepted Educational Evidence
```

```text
Engineering Done
        ≠
Educational Done
```

```text
Automation Level
        ≠
Engineering Rigor
        ≠
AI Autonomy
```

```text
Capability Applicability
        ≠
Capability Invocation
        ≠
Capability Success
```

```text
Generated Artifact
        ≠
Accepted Artifact
```

```text
Evidence
        ↓
Claim
```

A design that cannot preserve an accepted architectural boundary MUST NOT proceed as an ordinary implementation decision.

---

# 32. Stage 5 Document Decomposition

The normative Stage 5 document chain is:

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

`00-Harness-Implementation-Architecture.md` establishes the common physical architecture and implementation boundaries.

Downstream documents define detailed implementation contracts within that architecture.

Document decomposition MUST NOT be interpreted as runtime component topology.

Therefore:

```text
Stage 5 Document
        ≠
Runtime Component
        ≠
Service
        ≠
Agent
        ≠
Model Invocation
```

---

# 33. Downstream Responsibility

`01-Runtime-Responsibility-and-Instruction-Materialization.md` defines:

- runtime responsibility materialization;
- instruction packaging and assembly;
- composition mechanisms;
- physical invocation choices;
- semantic independence mechanisms;
- model and agent execution boundaries.

`02-Context-Authority-and-Truth-Implementation.md` defines:

- context representation;
- context retrieval and assembly;
- provenance;
- freshness;
- derivation;
- conflict handling;
- project truth integration;
- context transformation and caching constraints.

`03-Learner-State-Persistence-and-Educational-Authority.md` defines:

- learner-state persistence;
- ADR-001 physical enforcement;
- learner-state read/write authority;
- competency and educational-state integration;
- Decision Engine materialization;
- learner participation;
- assistance attribution.

`04-Evidence-Claims-and-Completion-Implementation.md` defines:

- execution evidence;
- claim status;
- evidence provenance;
- Candidate Educational Evidence handling;
- accepted educational evidence boundaries;
- Engineering Done;
- Educational Done;
- generated / accepted artifact status;
- uncertainty related to claims.

`05-External-Capabilities-Tools-and-Environment-Integration.md` defines:

- external-capability discovery;
- Superpowers integration;
- capability mapping;
- physical invocation;
- capability result handling;
- capability unavailability;
- development-tool integration;
- coding-environment integration.

`06-Security-Trust-and-Authority-Enforcement.md` defines:

- trust boundaries;
- untrusted context handling;
- prompt-injection defenses;
- authority-sensitive operation enforcement;
- tool security;
- persistence security;
- secrets handling;
- cross-boundary protections.

`07-Configuration-Observability-and-Implementation-Verification.md` defines:

- configuration;
- diagnostics;
- observability;
- implementation failure handling;
- implementation-level conformance verification.

Stage 6 remains responsible for final system validation.

---

# 34. Implementation Sequencing

Stage 5 SHOULD proceed:

```text
Accepted Harness Implementation Architecture
        ↓
Detailed Stage 5 Implementation Contracts
        ↓
Implementation Planning
        ↓
Harness Implementation
        ↓
Implementation Verification
        ↓
Owner Acceptance
        ↓
Stage 6 Validation
```

Implementation code SHOULD NOT become the authority for unresolved Stage 5 design.

Where coding exposes a missing design decision, the decision SHOULD return to the appropriate Stage 5 normative document rather than being established only by code behavior.

---

# 35. Observations

## O-1 — Physical Enforcement Is Selective

Not every semantic distinction requires a dedicated runtime object, enum, process, or policy gate.

Physical enforcement is most important where loss of a distinction could alter:

- authoritative state;
- semantic authority;
- evidence status;
- completion status;
- trust;
- security;
- downstream decision behavior.

## O-2 — Provenance Is Cross-Cutting

Provenance is relevant to:

- project truth;
- execution evidence;
- external-capability results;
- educational interpretation;
- completion claims;
- explainability.

A shared implementation mechanism MAY support these concerns.

Such a mechanism MUST NOT become a new source of semantic authority.

## O-3 — Learner-State Mutation Is a Critical Enforcement Boundary

Learner-state mutation is one of the highest-risk physical boundaries because an implementation shortcut can bypass accepted educational authority and violate application / learning-infrastructure separation.

The downstream learner-state design SHOULD therefore make write authority explicit and inspectable.

## O-4 — Evidence Freshness Depends on State Identity

Engineering evidence can become stale when the project state materially changes.

Stage 5 SHOULD therefore provide a proportional mechanism for associating evidence with the project state to which it applies.

## O-5 — Agent Topology Is Downstream

The number and arrangement of physical agents cannot be determined from the accepted logical or instruction responsibility decomposition alone.

Agent topology remains a downstream implementation choice subject to semantic conformance.

---

# 36. Candidate ADRs

No Candidate ADR is introduced by this document.

The Harness Kernel + Ports / Adapters architecture, topology neutrality, proportional enforcement, learner-state mutation boundary, and evidence-before-claim enforcement are implementation decisions intended to preserve existing accepted Stage 1–4 contracts.

If downstream design demonstrates that an accepted architectural responsibility or boundary cannot be preserved, that conflict MUST be surfaced separately as a Candidate ADR.

---

# 37. Future Evolutions

The following concerns are intentionally outside the initial Stage 5 implementation baseline unless later evidence establishes a current requirement:

- distributed multi-user Harness deployment;
- remote synchronized learner profiles;
- generalized multi-provider optimization;
- semantic event streaming infrastructure;
- generalized external-capability marketplaces;
- automatic compilation of semantic contracts into runtime policies;
- cryptographically signed provenance;
- advanced cross-project learner analytics;
- organization-level educational state;
- automatic cross-project competency transfer.

These possibilities MUST NOT drive unnecessary complexity into the initial proportional implementation.

---

# 38. Completion Criteria

This foundational Stage 5 architecture is complete when downstream implementation design can proceed without requiring reinterpretation of accepted Stage 1–4 semantics.

At minimum, the architecture MUST establish:

- the physical-materialization responsibility of Stage 5;
- topology neutrality;
- Harness Kernel responsibility;
- ports / adapters boundaries;
- authority-preserving integration;
- proportional runtime enforcement;
- project / learner truth separation;
- learner-state mutation boundary;
- evidence-before-claim enforcement;
- educational evidence separation;
- independent Engineering Done and Educational Done;
- external-capability ownership boundaries;
- security and trust responsibility;
- implementation-decision classification;
- downstream Stage 5 document boundaries.

Acceptance of this document authorizes detailed Stage 5 implementation design.

It does not by itself authorize Harness coding before the applicable downstream implementation contracts and implementation plan are established.
