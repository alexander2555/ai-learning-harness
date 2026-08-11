# Prompt Architecture

Version: 0.1 Draft

Parent Documents

- 02-Core-Principles.md
- 03-System-Architecture.md
- 04-Agent-Pipeline.md
- 00-Learning-Model.md
- 00-Development-Methodology.md
- ADR-001-Separation-of-Application-and-Learning-Infrastructure.md

Related Documents

- 11-Repository-Structure.md
- 06-Superpowers-Integration-and-Engineering-Done.md

---

# 1. Purpose

This document defines the foundational Prompt Architecture of AI Learning Harness (ALH).

Prompt Architecture defines how accepted ALH architectural, educational, and development responsibilities are expressed through bounded AI instruction responsibilities.

Stage 4 answers:

> How should accepted ALH architectural, educational, and development responsibilities be expressed as bounded AI instruction responsibilities so that authority, context, learner participation, engineering quality, educational semantics, and external capability boundaries remain explicit without prematurely defining physical agents or Harness implementation?

Prompt Architecture is a responsibility architecture for AI instructions.

It defines semantic contracts that constrain AI behavior before those contracts are materialized by Stage 5.

It MUST preserve the semantics and ownership established by accepted upstream documents.

It MUST NOT become an alternative source of:

- system architecture;
- educational methodology;
- development methodology;
- learner-state semantics;
- engineering methodology;
- runtime architecture;
- Harness implementation;
- final system validation.

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
How accepted ALH contracts are materialized
into a working Harness

        ↓

Stage 6
Validation
    =
How the resulting system is validated
```

Stage 4 MUST consume accepted Stage 1–3 semantics as upstream constraints.

Stage 4 MUST NOT treat Stage 3 as a methodology for developing Stage 4 or ALH itself.

Stage 3 governs development of the learner's real software product.

Stage 4 MAY consume Stage 3 engineering semantics where those semantics must constrain AI behavior during learner-project development.

It MUST NOT reinterpret Stage 3 as a document-development or Harness-development process.

---

# 3. Scope

Prompt Architecture defines the semantic structure required for bounded AI instruction behavior.

Its scope includes:

- Instruction Responsibility;
- responsibility derivation;
- responsibility separation;
- responsibility composition;
- semantic authority;
- authority boundaries;
- instruction precedence;
- semantic independence;
- context requirements;
- context authority;
- context provenance and truth handling;
- engineering / educational instruction boundaries;
- learner-participation constraints;
- assistance attribution where educationally relevant;
- Automation Level interpretation;
- Engineering Rigor interpretation;
- engineering-review / educational-assessment separation;
- Candidate Educational Evidence boundaries;
- learner-memory and Decision Engine boundaries;
- Superpowers and external-capability boundaries;
- uncertainty handling;
- evidence-before-claim requirements;
- output semantic status;
- explainability;
- security and trust boundaries;
- abstract contracts that Stage 5 MUST preserve.

Stage 4 defines what these contracts mean.

It does not define how they are physically executed.

---

# 4. Non-Goals

Stage 4 MUST NOT define:

- physical AI agents;
- the number of physical AI agents;
- model selection;
- model-provider selection;
- the number of model invocations;
- runtime execution topology;
- runtime orchestration;
- runtime routing;
- prompt routing graphs;
- one prompt file per responsibility;
- prompt-file topology;
- persistence technology;
- database schemas;
- vector stores;
- concrete learner-memory storage;
- concrete context retrieval;
- context serialization;
- context transport;
- context injection mechanisms;
- tool wiring;
- prompt deployment;
- Superpowers implementation;
- replacement Superpowers workflows;
- Harness implementation technology;
- Stage 5 implementation;
- Stage 6 validation.

Stage 4 MUST NOT infer physical realization from logical responsibility.

In particular:

```text
Logical Responsibility
        ≠
Instruction Responsibility
        ≠
Physical Agent
        ≠
Prompt File
        ≠
Model Invocation
```

These concepts MAY later be mapped together by Stage 5.

They MUST NOT be treated as equivalent by Stage 4.

---

# 5. Upstream Authority

Stage 4 is downstream from accepted:

- Stage 1 Architecture Specification;
- Stage 2 Educational Methodology;
- Stage 3 Development Methodology;
- accepted ADRs.

The authoritative relationship is:

```text
Accepted Stage 1–3 Semantics
        ↓
Stage 4 Instruction Contracts
        ↓
Stage 5 Physical Realization
```

Stage 4 MAY express upstream responsibilities.

It MUST NOT redefine them.

Stage 4 MUST NOT create new architectural authority merely because an instruction design would be simpler if that authority existed.

Where a required Prompt Architecture behavior cannot be expressed without changing an accepted architectural responsibility or boundary, the finding MUST be classified as a Candidate ADR.

Until such an ADR is accepted, Stage 4 MUST preserve the existing architecture.

Historical Stage 4 and Stage 5 artifacts are not normative upstream sources.

They MUST NOT determine:

- Stage 4 responsibility;
- document decomposition;
- instruction roles;
- physical agent topology;
- prompt-file structure;
- context topology;
- orchestration;
- persistence;
- Stage 5 implementation.

---

# 6. Core Abstraction — Instruction Responsibility

The primary design unit of Stage 4 is the **Instruction Responsibility**.

An Instruction Responsibility is:

> A bounded semantic responsibility that specifies what AI behavior is required or permitted in support of an accepted ALH responsibility, what authority that behavior possesses, what context it requires, what outputs or claims it may produce, and what behavior remains outside its authority.

An Instruction Responsibility SHOULD identify:

- its purpose;
- its normative basis;
- its semantic domain;
- required behavior;
- prohibited behavior;
- authority it possesses;
- authority it does not possess;
- required context;
- relevant context;
- context authority requirements;
- expected output semantics;
- permitted claims;
- evidence requirements;
- significant neighboring responsibilities.

An Instruction Responsibility is an instruction-layer semantic abstraction.

It is not automatically:

- an architectural subsystem;
- a Pipeline component;
- an agent;
- a prompt artifact;
- a prompt file;
- a system prompt;
- a model invocation;
- a tool invocation;
- a runtime process;
- an orchestration node.

Physical consolidation MUST NOT erase semantic boundaries.

Physical separation MUST NOT create new semantic authority.

---

# 7. Responsibility Derivation

Instruction responsibilities MUST originate from accepted ALH needs and responsibilities.

Conceptually:

```text
Accepted Responsibility
        ↓
Required AI Behavior
        ↓
Instruction Responsibility
        ↓
Instruction Boundary
        ↓
Authority Contract
        ↓
Context Contract
        ↓
Output / Claim Contract
```

An Instruction Responsibility MAY be required by:

- an architectural responsibility;
- an educational-methodology requirement;
- a development-methodology requirement;
- an accepted integration boundary;
- a cross-cutting architectural constraint;
- an interaction responsibility required to express accepted semantics.

Instruction responsibilities MUST NOT be created merely because:

- a model can perform an action;
- a framework exposes a feature;
- a Pipeline role has a convenient name;
- a prompt file would be convenient;
- an external capability happens to exist;
- a desired runtime topology suggests a responsibility split.

Responsibility MUST precede implementation packaging.

---

# 8. Relationship to the Logical Agent Pipeline

Stage 1 defines the Agent Pipeline as a set of logical responsibilities.

The Pipeline is logical rather than physical.

Stage 4 MUST preserve that distinction.

Pipeline responsibilities are relevant upstream inputs to Prompt Architecture, but Prompt Architecture MUST NOT mechanically convert Pipeline roles into instruction units.

Therefore, Stage 4 MUST NOT assume:

```text
One Pipeline Role
        =
One Instruction Responsibility
```

or:

```text
One Pipeline Role
        =
One Prompt
        =
One Agent
        =
One Model Invocation
```

An accepted logical responsibility MAY require:

- one Instruction Responsibility;
- multiple Instruction Responsibilities;
- participation in a safely composed responsibility;
- cross-cutting constraints;
- no independently deployed physical unit.

Likewise, multiple compatible Instruction Responsibilities MAY later be realized through one physical execution mechanism.

The mapping MUST be justified by semantic responsibility boundaries rather than role names.

Pipeline sequencing MUST NOT be interpreted as mandatory runtime sequencing.

---

# 9. Responsibility Separation

Instruction responsibilities SHOULD remain distinct where combining them would materially obscure or weaken:

- authority boundaries;
- semantic ownership;
- evidence provenance;
- context authority;
- learner-participation expectations;
- independent engineering evaluation;
- educational-assessment authority;
- learner-state authority;
- completion-claim authority;
- security or trust boundaries.

Semantic distinction does not require physical separation.

For example, independent engineering review MAY require semantic independence from implementation responsibility.

That requirement does not by itself require:

- a second agent;
- a second model;
- a separate prompt file;
- a separate process;
- a separate model invocation.

The detailed separation criteria are defined in `01-Instruction-Responsibility-Model.md`.

---

# 10. Responsibility Composition

Multiple Instruction Responsibilities MAY apply to the same interaction or engineering activity.

Stage 4 therefore defines composition as a semantic concern.

Composition MUST preserve:

- responsibility identity;
- normative authority;
- prohibitions;
- context authority;
- evidence provenance;
- educational constraints;
- engineering constraints;
- security constraints;
- uncertainty;
- explainability.

The governing principle is:

```text
Composition
        ≠
Authority Transfer
```

A responsibility MUST NOT acquire another responsibility's authority merely because both are composed.

Composition also MUST NOT imply physical execution topology.

Stage 5 MAY choose different physical realization strategies provided that all Stage 4 semantic boundaries remain intact.

---

# 11. Authority

Every material Instruction Responsibility MUST operate within an explicit semantic authority boundary.

Authority concerns what an instruction responsibility may:

- decide;
- evaluate;
- interpret;
- recommend;
- communicate;
- propose;
- change;
- claim.

Context access MUST NOT imply authority.

Therefore:

```text
Context Access
        ≠
Semantic Authority
```

Likewise:

```text
Ability to Perform
        ≠
Authority to Perform
```

Examples include:

- engineering implementation MUST NOT declare competency mastery;
- engineering review MUST NOT update authoritative learner state;
- educational guidance MUST NOT waive applicable engineering obligations;
- Candidate Educational Evidence MUST NOT become accepted educational evidence without appropriate Stage 2 authority;
- response generation MUST NOT convert uncertainty into certainty;
- memory-related instruction behavior MUST NOT redefine competency or assessment semantics.

Detailed authority and composition rules are defined in `02-Instruction-Authority-and-Composition.md`.

---

# 12. Instruction Precedence

Multiple applicable instructions MAY impose simultaneous constraints.

Stage 4 MUST define how such constraints interact.

Precedence exists to resolve instruction conflicts.

It MUST NOT create new semantic authority.

Precedence MUST preserve:

- safety and security;
- accepted architectural boundaries;
- accepted ADRs;
- authoritative project truth;
- applicable engineering obligations;
- educational authority boundaries;
- explicit user and task requirements where they do not conflict with higher authoritative constraints.

Prompt Architecture precedence is a project-semantic concept.

It MUST NOT automatically be equated with:

- vendor message roles;
- API message ordering;
- prompt concatenation order;
- model-specific instruction hierarchy;
- runtime orchestration order.

Concrete realization belongs to Stage 5.

---

# 13. Context Contracts

AI behavior depends on context.

Stage 4 defines semantic Context Contracts describing what information an Instruction Responsibility requires or may use.

Stage 4 MUST distinguish at least:

- required context;
- relevant context;
- authoritative context;
- derived context;
- advisory context;
- uncertain or unverified context.

The governing distinction is:

```text
Relevant Context
        ≠
Authoritative Context
```

Information MAY be relevant without having authority to determine a decision.

A Context Contract MAY identify information such as:

- learner state;
- competency context;
- learning objectives;
- educational assistance expectations;
- project requirements;
- architecture;
- lifecycle activity;
- Engineering Rigor;
- source code;
- tests;
- verification results;
- review findings;
- security findings;
- operational context;
- applicable external capabilities.

Stage 4 defines semantic need and authority.

It MUST NOT define:

- retrieval algorithms;
- context databases;
- serialization;
- transport;
- caching;
- injection;
- token-budget algorithms.

Detailed context semantics are defined in `03-Context-and-Truth-Contracts.md`.

---

# 14. Context Authority and Truth

Context MUST be interpreted according to its authority for the relevant semantic domain.

An instruction MUST NOT promote information into authoritative truth merely because that information is available.

For example:

- accepted requirements may be authoritative for expected behavior;
- current source code may be authoritative for current implementation;
- current verification results may provide evidence for engineering claims;
- generated summaries are derived context;
- review findings have the authority established by applicable engineering semantics;
- engineering artifacts do not automatically define learner state.

When context materially conflicts, instructions MUST use established authority rather than guess.

When a material conflict cannot be resolved, it MUST be exposed.

When authoritative context required for a reliable claim is unavailable, the instruction MUST constrain its claim accordingly.

---

# 15. Project Context and Learner Context

ALH operates across distinct project and learner information domains.

Conceptually:

```text
Project Repository
        =
Engineering Project State
```

and:

```text
ALH Memory
        =
Authoritative Learner Context
```

These domains MAY interact through accepted responsibilities.

They MUST NOT be collapsed.

Prompt Architecture MUST preserve ADR-001.

In particular:

- application artifacts MUST NOT become storage for ALH learner state;
- project context MUST NOT silently become learner-memory authority;
- learner educational state MUST NOT be embedded into application artifacts for prompt convenience;
- engineering observations MAY inform educational assessment;
- engineering observations MUST NOT directly become authoritative competency state.

Stage 4 defines these semantic boundaries.

Stage 5 defines their physical implementation.

---

# 16. Engineering and Educational Responsibilities

Development within ALH has parallel engineering and educational concerns.

Stage 4 MUST preserve both without merging their authority.

Conceptually:

```text
Development Activity
        ↓
Engineering Outcome
```

and:

```text
Development Activity
        ↓
Learning Opportunity
        ↓
Educational Interaction
        ↓
Candidate Educational Evidence
        ↓
Stage 2 Assessment
```

Engineering instruction responsibilities MAY support:

- understanding engineering needs;
- requirements reasoning;
- design reasoning;
- planning;
- implementation;
- verification;
- review;
- security reasoning;
- documentation;
- delivery;
- identification of observations relevant to learning.

They MUST NOT acquire educational assessment or learner-state authority merely by performing engineering work.

Educational instruction responsibilities MAY support:

- teaching;
- adaptive assistance;
- Socratic interaction;
- assessment;
- competency evaluation;
- learner-independence development;
- learning-debt handling;
- educational completion according to accepted Stage 2 semantics.

They MUST NOT waive applicable engineering obligations.

Detailed integration rules are defined in `04-Engineering-and-Educational-Instruction-Boundaries.md`.

---

# 17. Learner Participation

AI assistance MUST remain compatible with meaningful learner participation.

The system MUST preserve two separate questions:

```text
What engineering work is required?
```

and:

```text
How should the learner participate in that work?
```

The first is governed by applicable engineering semantics.

The second is governed by educational strategy.

Educational assistance MAY change how the learner participates.

It MUST NOT silently remove applicable engineering quality requirements.

Likewise, engineering automation MUST NOT silently eliminate learner participation expected by the educational strategy.

Where educational interpretation depends on independence, instruction behavior SHOULD preserve relevant assistance attribution.

Relevant distinctions MAY include:

- learner performed work independently;
- a hint was provided;
- a partial solution was provided;
- AI generated implementation;
- learner corrected AI output;
- AI reviewed learner work.

Stage 4 defines the semantic requirement for such distinctions.

It MUST NOT define instrumentation or persistence mechanisms.

---

# 18. Automation Level, Engineering Rigor, and AI Autonomy

Stage 4 MUST preserve three independent dimensions:

```text
Automation Level
        ≠
Engineering Rigor
        ≠
AI Autonomy
```

Automation Level is an educational concept concerning learner independence.

Engineering Rigor defines expected engineering depth.

AI autonomy concerns physical execution authority or runtime behavior.

Stage 4 does not define AI autonomy.

Automation Level MUST NOT mean:

- model execution authority;
- tool permission;
- number of model calls;
- runtime autonomy;
- orchestration mode;
- permission to modify files;
- permission to invoke external capabilities.

Engineering Rigor MUST NOT mean:

- learner independence;
- educational mastery;
- AI execution authority.

Educational assistance MUST NOT lower applicable engineering rigor.

Higher engineering rigor MUST NOT automatically imply lower learner independence.

---

# 19. Engineering Review and Educational Assessment

Engineering Review and educational Assessment have different semantic responsibilities.

Engineering Review evaluates applicable engineering quality.

Educational Assessment interprets learner evidence according to Stage 2 methodology.

Therefore:

```text
Engineering Review
        ≠
Educational Assessment
```

Engineering Review MAY produce observations relevant to learning.

Such observations MUST remain Candidate Educational Evidence until interpreted through accepted educational authority.

Educational Assessment MUST NOT reinterpret failed engineering verification as engineering success.

Engineering Review MUST NOT declare learner mastery.

Semantic independence required for engineering review MUST NOT automatically be interpreted as a requirement for a separate physical reviewer agent.

---

# 20. Candidate Educational Evidence

Stage 4 MUST preserve the accepted educational evidence flow:

```text
Engineering Observation
        ↓
Candidate Educational Evidence
        ↓
Stage 2 Assessment
        ↓
Accepted Educational Evidence, if appropriate
        ↓
Competency Evaluation
```

`Candidate Educational Evidence` is an integration label.

It is not an additional Stage 2 evidence category.

Instruction responsibilities involved in engineering work MAY surface Candidate Educational Evidence.

They MUST NOT silently:

- declare competency mastery;
- update competency state;
- assign Learning Debt;
- change Automation Level;
- declare Educational Done.

Such authority remains governed by accepted Stage 1/2 semantics.

---

# 21. Decision Engine Boundary

Development context MAY be relevant to educational decisions.

Relevant information MAY include:

- current development activity;
- engineering complexity;
- Engineering Rigor;
- learner-participation opportunity;
- Candidate Educational Evidence;
- engineering risk.

This relevance MUST NOT create a new Decision Engine state domain or architectural input channel.

The development lifecycle MUST NOT become:

- the Decision Engine;
- an educational state machine;
- a prompt-routing graph;
- a runtime orchestration graph.

Instruction responsibilities MUST preserve the Decision Engine authority established by Stage 1.

---

# 22. Engineering Done and Educational Done

Stage 4 MUST preserve separate completion semantics.

```text
Engineering Done
        ≠
Educational Done
```

Engineering Done answers:

> Is the applicable software-development work acceptably complete?

Educational Done answers:

> Has the applicable learning objective satisfied Stage 2 completion semantics?

An engineering-completion instruction MUST NOT infer Educational Done.

An educational instruction MUST NOT infer Engineering Done merely from educational success.

Each claim requires:

- appropriate semantic authority;
- appropriate authoritative context;
- applicable evidence.

Passing tests alone MUST NOT automatically establish either learner mastery or full Engineering Done.

---

# 23. Evidence Before Claim

Stage 4 establishes the principle:

```text
Evidence Before Claim
```

An Instruction Responsibility MUST NOT assert a factual outcome merely because the outcome:

- was intended;
- was requested;
- is likely;
- was produced by another AI instruction;
- appears in stale context.

Claims such as the following require sufficient current evidence where applicable:

- implementation succeeded;
- tests passed;
- a build succeeded;
- a defect is fixed;
- a review passed;
- a security issue is resolved;
- deployment succeeded;
- Engineering Done has been reached;
- Educational Done has been reached;
- competency progression is justified.

Engineering verification evidence and educational evidence MUST remain distinct.

```text
Verification Evidence
        ≠
Educational Evidence
```

Where sufficient evidence is unavailable, uncertainty MUST be exposed.

---

# 24. Superpowers Boundary

Superpowers is an immutable external workflow/capability dependency.

ALH owns required architectural, educational, and development semantics.

The Superpowers upstream definition owns the verified execution contracts
of its capabilities and workflows.

This ownership MUST NOT be interpreted as authority over the surrounding
ALH responsibility, methodology, educational semantics, or completion semantics.

The intended relationship is:

```text
ALH Required Semantic Outcome
        ↓
Applicable Verified Capability
        ↓
External Capability Execution
```

This is **Capability Mapping**.

It is not **Methodology Inheritance**.

Stage 4 MUST NOT automatically adopt:

- external workflow sequencing;
- external prompt structure;
- external subagent topology;
- external plan formats;
- external execution topology;

as universal ALH Prompt Architecture semantics.

A Superpowers subagent is not an ALH Instruction Responsibility.

```text
Superpowers Subagent
        ≠
ALH Logical Responsibility
        ≠
ALH Instruction Responsibility
```

Specific Superpowers behavior MUST be verified when a Stage 4 contract materially depends on that behavior.

Undocumented capability semantics MUST NOT be invented.

Detailed external-capability rules are defined in `05-Superpowers-and-External-Capability-Boundaries.md`.

---

# 25. Capability Unavailability

The absence of a particular external capability does not automatically remove the underlying accepted engineering obligation.

Where a required capability is unavailable:

- the applicable semantic obligation remains unless upstream methodology says otherwise;
- ALH MUST NOT silently implement its own replacement Superpowers workflow;
- another available and appropriate project, IDE, coding-agent, or verified external mechanism MAY satisfy the obligation.

Stage 4 defines this semantic boundary.

Stage 5 determines how capability availability is discovered or acted upon at runtime.

---

# 26. Uncertainty and Anti-Hallucination

Instruction responsibilities MUST preserve uncertainty when required information cannot be established.

They MUST NOT invent:

- project requirements;
- learner state;
- competency state;
- educational evidence;
- Candidate Educational Evidence;
- test results;
- verification results;
- review outcomes;
- execution results;
- deployment results;
- external capability behavior;
- accepted architectural decisions.

Instructions MUST distinguish, where materially relevant:

- verified fact;
- authoritative state;
- derived conclusion;
- inference;
- assumption;
- advisory recommendation;
- unresolved uncertainty.

Missing or conflicting authoritative information MUST NOT be replaced with unsupported confidence.

---

# 27. Explainability

Significant AI decisions SHOULD be explainable.

Where appropriate, outputs SHOULD make clear:

- what decision or recommendation was made;
- what authoritative context materially informed it;
- what constraints applied;
- what evidence supports it;
- what material uncertainty remains.

Explainability MUST NOT require disclosure or persistence of hidden chain-of-thought.

Concise rationale and evidence references are sufficient.

Explainability SHOULD remain proportional.

It MUST NOT create unnecessary documentation ceremony.

---

# 28. Security and Instruction Trust

Security is a cross-cutting Stage 4 concern.

Prompt Architecture MUST preserve accepted Stage 1 security principles and ADR-001 separation.

Information appearing in context MUST NOT automatically acquire instruction authority.

Therefore:

```text
Content to Reason About
        ≠
Instruction Authority
```

Project content, generated artifacts, external capability output, and other contextual information MAY contain instructions or claims.

Those contents MUST be interpreted according to their semantic authority rather than their wording alone.

Lower-authority or untrusted context MUST NOT silently:

- redefine ALH architecture;
- redefine educational methodology;
- redefine development methodology;
- change learner state;
- weaken security requirements;
- grant execution authority;
- redefine completion semantics;
- override accepted project truth.

Stage 4 defines trust semantics.

Stage 5 owns concrete enforcement mechanisms.

---

# 29. Output Semantics

Instruction outputs MUST preserve their semantic status.

Relevant output classes MAY include:

- authoritative decision within an accepted authority domain;
- advisory recommendation;
- derived conclusion;
- engineering observation;
- review finding;
- Candidate Educational Evidence;
- verification reference;
- proposed state change;
- unresolved uncertainty.

The output taxonomy MUST NOT create authority not present upstream.

The governing principle is:

```text
Downstream Consumption
        ≠
Authority Promotion
```

An advisory output does not become authoritative merely because another responsibility consumes it.

A generated summary does not become source truth merely because it is reused.

Candidate Educational Evidence does not become accepted educational evidence merely because it is structured, communicated, or persisted.

Detailed output and claim semantics are defined in `06-Instruction-Outputs-Claims-and-Stage-5-Contracts.md`.

---

# 30. Relationship to Stage 5

Stage 4 defines semantic contracts.

Stage 5 materializes those contracts.

Stage 5 MUST preserve:

- Instruction Responsibility boundaries;
- authority boundaries;
- composition constraints;
- precedence semantics;
- context authority;
- project / learner separation;
- learner-participation constraints;
- Automation Level semantics;
- Engineering Rigor semantics;
- evidence boundaries;
- Engineering Done / Educational Done separation;
- Superpowers boundaries;
- uncertainty semantics;
- output semantics;
- security and trust boundaries.

Within those contracts, Stage 5 MAY choose:

- one or many prompt artifacts;
- one or many physical agents;
- one or many model invocations;
- static or dynamic instruction composition;
- context transport mechanisms;
- persistence mechanisms;
- orchestration mechanisms;
- external-capability integration mechanisms.

Stage 5 implementation freedom MUST NOT be used to redefine Stage 4 semantics.

If implementation exposes a genuine architectural conflict, that conflict MUST be handled through applicable architecture governance.

---

# 31. Stage 4 Document Structure

The normative Stage 4 dependency chain is:

```text
00-Prompt-Architecture.md
        ↓
01-Instruction-Responsibility-Model.md
        ↓
02-Instruction-Authority-and-Composition.md
        ↓
03-Context-and-Truth-Contracts.md
        ↓
04-Engineering-and-Educational-Instruction-Boundaries.md
        ↓
05-Superpowers-and-External-Capability-Boundaries.md
        ↓
06-Instruction-Outputs-Claims-and-Stage-5-Contracts.md
```

## 31.1 Instruction Responsibility Model

`01-Instruction-Responsibility-Model.md` defines:

- Instruction Responsibility semantics;
- derivation;
- responsibility identity;
- separation criteria;
- composition eligibility;
- responsibility contracts.

## 31.2 Instruction Authority and Composition

`02-Instruction-Authority-and-Composition.md` defines:

- authority domains;
- authority limitations;
- semantic independence;
- precedence;
- conflict handling;
- composition constraints.

## 31.3 Context and Truth Contracts

`03-Context-and-Truth-Contracts.md` defines:

- semantic context requirements;
- context authority;
- provenance;
- freshness;
- missing context;
- conflicting context;
- project / learner truth boundaries.

## 31.4 Engineering and Educational Instruction Boundaries

`04-Engineering-and-Educational-Instruction-Boundaries.md` defines instruction-level interaction among:

- engineering responsibilities;
- educational responsibilities;
- learner participation;
- assistance attribution;
- Automation Level;
- Engineering Rigor;
- engineering review;
- educational assessment;
- Candidate Educational Evidence;
- learner-state authority;
- Engineering Done;
- Educational Done.

## 31.5 Superpowers and External Capability Boundaries

`05-Superpowers-and-External-Capability-Boundaries.md` defines:

- capability mapping;
- capability verification;
- methodology-inheritance prohibition;
- capability unavailability;
- external-result authority;
- Stage 5 integration boundary.

## 31.6 Instruction Outputs, Claims, and Stage 5 Contracts

`06-Instruction-Outputs-Claims-and-Stage-5-Contracts.md` defines:

- output semantic classes;
- factual claim requirements;
- completion claims;
- uncertainty representation;
- explainability requirements;
- downstream semantic preservation;
- Stage 5 implementation obligations.

---

# 32. Documentation Principle

Stage 4 SHOULD reference accepted upstream semantics rather than duplicate them.

Where Stage 1–3 already defines a concept, Stage 4 SHOULD define only the instruction-level consequence necessary for Prompt Architecture.

Stage 4 MUST NOT create competing definitions of:

- architectural subsystems;
- Agent Pipeline responsibilities;
- educational methodology;
- competency semantics;
- educational evidence categories;
- learner-memory semantics;
- Automation Level;
- Learning Debt;
- development lifecycle;
- Engineering Rigor;
- activity applicability;
- engineering verification;
- Engineering Done;
- Educational Done;
- Superpowers-owned workflows.

Documentation depth SHOULD remain proportional to the semantic importance of the contract.

---

# 33. Change Governance

Prompt Architecture MAY expose ambiguities or limitations in accepted upstream architecture or methodology.

Such findings SHOULD be classified as:

## Observation

A factual or analytical finding that does not change accepted architecture.

## Candidate ADR

A proposed change to an accepted architectural responsibility, boundary, dependency, principle, or structural decision.

A Candidate ADR MUST NOT be treated as accepted until explicitly approved.

## Future Evolution

A potentially useful extension intentionally deferred beyond the current Stage 4 scope.

Prompt Architecture decisions that remain within accepted Stage 1–3 boundaries MAY be accepted without an ADR.

Prompt wording or instruction decomposition MUST NOT be used to introduce an architectural change silently.

---

# 34. Core Design Principles

Stage 4 follows these principles.

## 34.1 Responsibility Before Packaging

Semantic responsibility MUST be defined before physical prompt or agent packaging.

## 34.2 Explicit Authority

Every material Instruction Responsibility MUST remain within identifiable authority.

## 34.3 No Implicit Authority Transfer

Composition, context access, delegation, output consumption, or physical co-location MUST NOT create new authority.

## 34.4 Context Authority Before Convenience

Context MUST be interpreted according to semantic authority rather than ease of availability.

## 34.5 Evidence Before Claim

Factual success and completion claims MUST be supported by sufficient applicable evidence.

## 34.6 Engineering and Education Remain Distinct

Engineering and educational concerns MAY interact but MUST retain separate semantics and authority.

## 34.7 Preserve Learner Participation

AI assistance MUST remain compatible with educationally required learner involvement.

## 34.8 Independent Dimensions Remain Independent

Automation Level, Engineering Rigor, and AI autonomy MUST NOT be collapsed.

## 34.9 Capability Mapping, Not Methodology Inheritance

External capabilities MAY satisfy applicable obligations without becoming ALH methodology.

## 34.10 Uncertainty Over Fabrication

Material uncertainty MUST be exposed rather than replaced with unsupported confidence.

## 34.11 Semantic Composition Without Topology Assumptions

Instruction responsibilities MAY compose semantically without implying physical execution topology.

## 34.12 Context Does Not Grant Instruction Authority

Information available to an instruction MUST NOT redefine the authority governing that instruction.

## 34.13 Downstream Freedom Within Contracts

Stage 5 MAY choose implementation mechanisms only within accepted Stage 4 semantic contracts.

---

# 35. Acceptance Criteria

Stage 4 MUST collectively define enough semantic structure to answer:

1. What is an Instruction Responsibility?
2. How is it derived from accepted ALH responsibility?
3. Which responsibilities MUST remain distinct?
4. Which responsibilities MAY compose safely?
5. What authority does each responsibility possess?
6. What authority remains outside it?
7. How are simultaneous or conflicting instructions resolved?
8. What context is semantically required?
9. Which context is authoritative for which decisions?
10. How are missing, stale, conflicting, or derived contexts handled?
11. How are project context and learner context kept distinct?
12. How does Automation Level constrain educational assistance without becoming AI autonomy?
13. How does Engineering Rigor constrain engineering depth without becoming learner independence?
14. How is meaningful learner participation preserved?
15. How is assistance context represented semantically where independence matters?
16. How is Candidate Educational Evidence surfaced without unauthorized learner-state change?
17. How are engineering review and educational assessment kept distinct?
18. How are Engineering Done and Educational Done kept distinct?
19. How may verified Superpowers capabilities be used without workflow duplication or methodology inheritance?
20. How does instruction behavior respond to capability unavailability?
21. Which claims require evidence before assertion?
22. What semantic status do instruction outputs possess?
23. What security and trust boundaries constrain instructions?
24. What contracts MUST Stage 5 preserve?

Stage 4 acceptance MUST NOT require choosing a physical execution topology.

---

# 36. Summary

ALH Prompt Architecture is the architecture of bounded AI instruction responsibilities.

Its central relationship is:

```text
Accepted Responsibility
        ↓
Required AI Behavior
        ↓
Instruction Responsibility
        ↓
Explicit Authority
        ↓
Semantic Context Contract
        ↓
Bounded Output / Claim Contract
        ↓
Stage 5 Materialization
```

Stage 4 defines responsibility, authority, context, interaction, and claim semantics.

Stage 5 defines physical realization.

The central boundary remains:

```text
Logical Responsibility
        ≠
Instruction Responsibility
        ≠
Physical Agent
        ≠
Prompt File
        ≠
Model Invocation
```

The next document defines how Instruction Responsibilities are derived, identified, separated, and bounded:

`01-Instruction-Responsibility-Model.md`
