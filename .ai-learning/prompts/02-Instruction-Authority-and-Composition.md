# Instruction Authority and Composition

Status: Accepted
Version: 1.0

Parent Documents

- 00-Prompt-Architecture.md
- 01-Instruction-Responsibility-Model.md

Related Documents

- 03-Context-and-Truth-Contracts.md
- 04-Engineering-and-Educational-Instruction-Boundaries.md
- 05-Superpowers-and-External-Capability-Boundaries.md
- 06-Instruction-Outputs-Claims-and-Stage-5-Contracts.md
- ADR-001-Separation-of-Application-and-Learning-Infrastructure.md

---

# 1. Purpose

This document defines the authority and composition model for AI Learning Harness (ALH) Instruction Responsibilities.

It specifies:

- how semantic authority is assigned to Instruction Responsibilities;
- how authority is bounded;
- how excluded authority is represented;
- how multiple Instruction Responsibilities may apply simultaneously;
- when responsibilities MAY compose;
- what composition MUST preserve;
- how instruction conflicts are identified;
- how precedence resolves conflicts without creating new authority;
- how semantic independence is preserved;
- how unresolved conflicts are handled.

This document defines semantic instruction architecture.

It does not define:

- vendor-specific instruction hierarchy;
- system / developer / user message ordering;
- prompt concatenation;
- runtime routing;
- orchestration;
- agent topology;
- model topology;
- context retrieval;
- persistence;
- physical prompt artifacts.

Those concerns belong to Stage 5 except where later Stage 4 documents define additional semantic contracts.

---

# 2. Core Principle

Instruction authority originates in accepted ALH architecture and methodology.

It does not originate in:

- prompt placement;
- model capability;
- runtime position;
- access to information;
- tool access;
- execution order;
- physical separation;
- external capability behavior.

The normative relationship is:

```text id="ac1"
Accepted ALH Responsibility
        ↓
Required AI Behavior
        ↓
Instruction Responsibility
        ↓
Bounded Semantic Authority
```

Therefore:

```text id="ac2"
Capability
        ≠
Authority
```

```text id="ac3"
Context Access
        ≠
Authority
```

```text id="ac4"
Physical Privilege
        ≠
Semantic Authority
```

An implementation MAY provide mechanisms that enforce authority.

It MUST NOT be treated as the source of that authority.

---

# 3. Semantic Authority

**Semantic Authority** is the permission assigned to an Instruction Responsibility to make a decision, interpretation, recommendation, evaluation, claim, or state change within a defined semantic domain.

Authority MUST be traceable to accepted upstream responsibility.

Authority SHOULD be expressed narrowly enough that:

- permitted behavior is identifiable;
- prohibited behavior is identifiable;
- neighboring authority remains distinguishable;
- downstream implementation can preserve the boundary.

Authority MUST NOT be inferred merely from the ability to perform an action.

The governing distinction is:

```text id="ac5"
Ability to Perform
        ≠
Authority to Perform
```

---

# 4. Authority Domains

Authority is domain-specific.

A responsibility MAY possess authority in one semantic domain while having no authority in another.

Relevant ALH domains MAY include:

- engineering reasoning;
- engineering implementation;
- engineering verification;
- engineering review;
- educational guidance;
- educational assessment;
- competency evaluation;
- learner-state management;
- memory management;
- educational decision-making;
- application-state modification;
- completion evaluation;
- external-capability use.

This list is descriptive rather than a new Stage 1 subsystem taxonomy.

Stage 4 MUST NOT create architectural components merely by identifying authority domains.

Authority domains are identified only to bound semantic authority.

This list is non-exhaustive and MUST NOT be treated as a canonical responsibility catalog, Pipeline decomposition, instruction topology, or Stage 5 implementation taxonomy.

---

# 5. Authority Contract

Every material Instruction Responsibility MUST have an Authority Contract.

The Authority Contract MUST identify:

- authority possessed;
- authority explicitly excluded;
- material decisions the responsibility may make;
- material decisions the responsibility MUST NOT make;
- neighboring authority domains where ambiguity could arise;
- any required semantic independence.

Authority Contracts MAY reference later Stage 4 contracts for:

- context conditions;
- evidence requirements;
- output semantics;
- claim requirements.

Authority Contracts MUST NOT specify physical enforcement mechanisms.

---

# 6. Excluded Authority

Explicitly excluded authority is as important as granted authority.

A responsibility MUST identify excluded authority where its inputs, capabilities, or outputs could reasonably be mistaken for permission to act in another semantic domain.

Examples include:

- implementation responsibility MUST NOT declare competency mastery;
- engineering review MUST NOT update learner educational state merely because it observes learner work;
- educational assessment MUST NOT declare failed engineering verification successful;
- educational guidance MUST NOT waive applicable engineering obligations;
- an instruction using learner context MUST NOT thereby acquire memory-management authority;
- an instruction using project artifacts MUST NOT thereby acquire authority over learner state.

The governing principle is:

```text id="ac6"
Relevant Information
        ≠
Authority Over Its Domain
```

---

# 7. Authority Is Not Transitive

Authority MUST NOT propagate automatically through responsibility interaction.

If Responsibility A has authority over domain X and provides output to Responsibility B, Responsibility B does not thereby acquire authority over X.

Therefore:

```text id="ac7"
Authority(A)
        +
Consumption by B
        ≠
Authority(B)
```

Similarly:

```text id="ac8"
Delegated Information
        ≠
Delegated Authority
```

Authority delegation, if ever required, MUST have an explicit accepted normative basis.

It MUST NOT arise accidentally through composition, context sharing, output consumption, or runtime delegation.

---

# 8. Authority Is Not Additive

When multiple responsibilities compose, their authorities MUST NOT be treated as an undifferentiated combined authority.

For responsibilities A and B:

```text id="ac9"
Compose(A, B)
        ≠
New Authority(A + B)
```

Composition allows multiple accepted responsibilities to constrain or contribute to behavior.

It does not create a new semantic owner.

If a decision requires authority that neither responsibility possesses independently, composition MUST NOT manufacture that authority.

Such a requirement indicates one of:

- another accepted responsibility owns the decision;
- required authority is missing from the current instruction set;
- upstream architecture is ambiguous;
- an architectural change may be required.

The last case MUST be treated as a Candidate ADR rather than solved through prompt composition.

---

# 9. Authority and State Change

State-change authority MUST be explicit.

The ability to derive, recommend, or propose a state change does not imply authority to make that change authoritative.

Therefore:

```text id="ac10"
Observation
        ≠
State Change
```

```text id="ac11"
Recommendation
        ≠
State Change
```

```text id="ac12"
Evaluation
        ≠
State Change
```

unless accepted upstream semantics explicitly assign both responsibilities together.

This distinction is especially important for:

- learner memory;
- competency state;
- Learning Debt;
- Automation Level;
- assessment state;
- educational progression.

Engineering responsibilities MUST NOT acquire such authority merely because engineering activity produces educationally relevant observations.

---

# 10. Authority and Evidence

Access to evidence does not define authority to interpret that evidence.

Likewise, authority to interpret evidence does not necessarily include authority to update state.

The general relationship is:

```text id="ac13"
Evidence Access
        ≠
Evidence Interpretation Authority
        ≠
State-Change Authority
```

For example:

```text id="ac14"
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

Each transition MUST preserve the authority defined by accepted Stage 1/2 semantics.

Detailed evidence and claim requirements are defined in `06-Instruction-Outputs-Claims-and-Stage-5-Contracts.md`.

---

# 11. Authority and Completion

Completion authority is domain-specific.

ALH MUST preserve:

```text id="ac15"
Engineering Done
        ≠
Educational Done
```

Authority to evaluate Engineering Done MUST NOT imply authority to declare Educational Done.

Authority to evaluate Educational Done MUST NOT imply authority to declare Engineering Done.

Where both concerns apply to the same learner activity, their conclusions MAY coexist.

They MUST remain semantically independent.

Detailed completion-claim requirements are defined in `06-Instruction-Outputs-Claims-and-Stage-5-Contracts.md`.

---

# 12. Composition

**Instruction Composition** is the semantic application of multiple Instruction Responsibilities to the same interaction, task, decision context, or activity while preserving their individual contracts.

Composition exists because ALH behavior frequently crosses responsibility boundaries.

For example, a development activity MAY simultaneously involve:

- an engineering obligation;
- learner-participation constraints;
- educational guidance;
- security constraints;
- evidence handling.

Composition allows these concerns to interact without merging their ownership.

The governing principle is:

```text id="ac16"
Composition
        ≠
Responsibility Merger
```

---

# 13. Composition Eligibility

Responsibilities MAY compose when composition preserves:

- semantic identity;
- authority boundaries;
- excluded authority;
- required independence;
- context authority;
- evidence provenance;
- output status;
- prohibitions;
- security constraints.

Responsibilities MUST NOT be treated as safely composable merely because:

- they are frequently used together;
- the same model can perform both;
- a framework supports combining them;
- they share context;
- they appear in the same lifecycle activity;
- they are executed by the same physical agent.

Composition eligibility is a semantic decision.

---

# 14. Composition Contract

Where multiple responsibilities apply together, the composed behavior MUST preserve each participating responsibility's contract.

Conceptually:

```text id="ac17"
Responsibility A Contract
        +
Responsibility B Contract
        ↓
Composed Behavior
        ↓
A remains A
B remains B
```

Composition MUST preserve:

- what each responsibility may do;
- what each responsibility MUST NOT do;
- which context each responsibility may rely upon;
- what evidence each responsibility may interpret;
- what outputs each responsibility may produce;
- which claims each responsibility may make;
- required semantic independence.

If composition cannot preserve these properties, the responsibilities MUST remain semantically separated.

Physical separation MAY be one Stage 5 mechanism.

Stage 4 does not require that mechanism.

---

# 15. Composition and Cross-Cutting Constraints

Cross-cutting constraints MAY apply to many responsibilities without becoming independent owners of the underlying task.

Examples include:

- security;
- uncertainty handling;
- evidence-before-claim;
- explainability;
- application / learning-infrastructure separation;
- learner-participation preservation.

A cross-cutting constraint MAY:

- restrict behavior;
- require additional evidence;
- prohibit a proposed action;
- require uncertainty to be surfaced.

It MUST NOT automatically acquire authority over the underlying semantic domain.

For example, a security constraint may prohibit unsafe behavior without becoming the owner of educational assessment or engineering design.

---

# 16. Semantic Independence

Some responsibilities require **Semantic Independence**.

Semantic Independence means that one responsibility's evaluation or judgment MUST NOT be determined merely by the conclusion produced by the responsibility whose work is being evaluated.

This requirement is relevant where accepted methodology requires meaningful independent evaluation.

For example, applicable Engineering Review may require independent judgment relative to implementation responsibility.

Semantic Independence MAY require:

- independent evaluation of relevant evidence;
- preservation of distinct responsibility identity;
- avoidance of automatic acceptance of upstream conclusions.

It does not automatically require:

- a separate physical agent;
- a separate model;
- a separate prompt file;
- a separate process;
- a separate invocation.

Therefore:

```text id="ac18"
Semantic Independence
        ≠
Physical Isolation
```

Stage 5 MUST choose a realization capable of preserving required semantic independence.

---

# 17. Composition and Independence

Responsibilities requiring independent judgment MAY still participate in a larger composed interaction if their semantic independence is preserved.

Composition MUST NOT reduce independent evaluation to:

- repetition of another responsibility's conclusion;
- uncritical acceptance of another responsibility's summary;
- authority inheritance;
- ceremonial approval.

If a physical composition mechanism makes genuine independence impossible, Stage 5 MUST use a different realization.

The implementation constraint follows from semantic independence.

The semantic independence requirement does not follow from the implementation.

---

# 18. Instruction Conflict

An **Instruction Conflict** exists when simultaneously applicable instruction requirements cannot all be satisfied as stated.

A conflict MAY arise from:

- incompatible required actions;
- incompatible prohibitions;
- competing authority claims;
- incompatible interpretations of responsibility boundaries;
- conflict between task requests and accepted ALH constraints;
- conflict between lower-authority context and accepted project truth.

Not every difference is a conflict.

Multiple responsibilities MAY provide different but compatible constraints.

Conflict resolution applies only when simultaneous satisfaction is materially impossible or would violate an accepted boundary.

---

# 19. Conflict Classification

Before applying precedence, a conflict SHOULD be classified.

Relevant classes include:

## 19.1 Authority Conflict

Two instructions appear to claim authority over the same decision incompatibly.

## 19.2 Constraint Conflict

One instruction requires behavior another prohibits.

## 19.3 Source Conflict

Relevant information disagrees about a material fact or state.

Source conflicts are governed primarily by `03-Context-and-Truth-Contracts.md`.

## 19.4 Goal Conflict

Two desired outcomes cannot both be achieved.

## 19.5 Boundary Conflict

A requested behavior would require an Instruction Responsibility to operate outside its accepted authority.

## 19.6 Implementation Conflict

A proposed Stage 5 mechanism cannot preserve an accepted Stage 4 semantic contract.

Implementation conflicts MUST NOT be resolved by weakening Stage 4 silently.

---

# 20. Precedence

**Instruction Precedence** determines which applicable semantic constraint governs when a genuine instruction conflict cannot otherwise be resolved.

Precedence is a conflict-resolution mechanism.

It is not a source of authority.

Therefore:

```text id="ac19"
Precedence
        ≠
Authority Creation
```

and:

```text id="ac20"
Higher Precedence
        ≠
Broader Authority
```

A responsibility with higher precedence in a particular conflict remains bounded by its own semantic domain.

---

# 21. Precedence Principles

Conflict resolution MUST preserve the following principles.

The following principles are constraints on conflict resolution, not a universal ordered precedence ladder.

Their numbering MUST NOT be interpreted as relative semantic priority.

Resolution depends on the authority domains and accepted upstream ownership involved in the specific conflict.

## 21.1 Safety and Security Constraints Remain Binding

A lower-level request MUST NOT require behavior that violates accepted safety or security constraints.

## 21.2 Accepted Architecture Remains Binding

Stage 4 instructions MUST NOT override accepted Stage 1 architectural boundaries or accepted ADRs.

## 21.3 Accepted Methodology Remains Binding Within Its Domain

Stage 2 educational semantics and Stage 3 development semantics remain authoritative within their respective domains.

Neither methodology gains unrestricted authority over the other.

## 21.4 Authoritative Project Truth Constrains Claims

Instructions MUST NOT knowingly act as if authoritative project facts were different merely to satisfy a requested outcome.

Detailed truth-source resolution belongs to `03-Context-and-Truth-Contracts.md`.

## 21.5 Applicable Engineering Obligations Remain Binding

Educational convenience MUST NOT waive applicable engineering quality, verification, security, documentation, or completion obligations.

## 21.6 Educational Authority Remains Bounded

Engineering convenience MUST NOT waive accepted educational authority, learner-state semantics, or learner-participation constraints.

## 21.7 Explicit Task Intent Applies Within Higher Constraints

Task-specific intent SHOULD guide behavior where it does not conflict with accepted higher-order constraints.

---

# 22. No Universal Engineering-vs-Education Precedence

Stage 4 MUST NOT define a universal rule such as:

```text id="ac21"
Education
        >
Engineering
```

or:

```text id="ac22"
Engineering
        >
Education
```

Engineering and educational responsibilities operate in distinct but interacting semantic domains.

Where both apply:

- engineering responsibilities govern engineering correctness and completion;
- educational responsibilities govern learning strategy, assistance, assessment, and learner progression according to accepted semantics.

Neither responsibility may use its authority to redefine the other's domain.

A genuine cross-domain conflict SHOULD first be resolved by finding behavior that satisfies both domains.

If no such behavior exists, the conflict MUST be surfaced rather than silently erasing one responsibility.

---

# 23. Precedence Does Not Mean Runtime Ordering

Prompt Architecture precedence is semantic.

It MUST NOT be interpreted automatically as:

- message order;
- prompt concatenation order;
- execution order;
- model-call order;
- agent priority;
- routing priority;
- workflow sequencing.

Therefore:

```text id="ac23"
Semantic Precedence
        ≠
Runtime Ordering
```

Stage 5 MUST materialize precedence reliably.

Stage 4 does not prescribe the mechanism.

---

# 24. Conflict Resolution Procedure

When a material instruction conflict occurs, behavior SHOULD follow this semantic procedure:

```text id="ac24"
Detect Conflict
        ↓
Identify Participating Responsibilities
        ↓
Identify Normative Basis
        ↓
Identify Authority Domains
        ↓
Identify Applicable Prohibitions
        ↓
Determine Whether Both Can Be Satisfied
        ↓
Apply Precedence if Necessary
        ↓
Preserve Remaining Authority Boundaries
        ↓
Expose Material Unresolved Conflict
```

Conflict resolution MUST NOT:

- invent missing authority;
- fabricate context;
- reinterpret advisory context as authoritative;
- erase uncertainty;
- silently modify accepted architecture.

---

# 25. Boundary Conflict Handling

If a requested action falls outside the authority of the currently applicable responsibility, that responsibility MUST NOT perform the action merely to complete the task.

It MAY:

- provide an output within its authority;
- identify the required neighboring responsibility;
- request or depend on appropriate authority;
- surface the boundary.

Stage 4 does not define the runtime handoff mechanism.

The semantic rule is:

```text id="ac25"
Need for Another Authority
        ≠
Permission to Assume That Authority
```

---

# 26. Missing Authority

A design may reveal that required behavior has no identifiable accepted authority owner.

This condition MUST NOT be solved by arbitrary assignment.

The finding SHOULD be analyzed as one of:

## Observation

The authority exists upstream but Stage 4 mapping is incomplete or unclear.

## Stage 4 Design Gap

The accepted responsibility exists, but the required Instruction Responsibility has not yet been defined correctly.

## Candidate ADR

The required authority does not exist without changing an accepted architectural responsibility or boundary.

Stage 4 MUST distinguish these cases before proceeding.

---

# 27. Conflicting Authority Claims

If two Instruction Responsibilities appear to claim incompatible authority over the same semantic decision, the architecture MUST inspect their normative basis.

The conflict MUST NOT be resolved merely by:

- choosing the more specific prompt;
- choosing the later instruction;
- choosing the more capable model;
- choosing the physically privileged component.

The correct resolution is determined by accepted upstream semantics.

If upstream semantics clearly assign ownership, Stage 4 MUST follow that ownership.

If upstream semantics are genuinely ambiguous and the ambiguity affects architectural responsibility, the issue SHOULD be classified as a Candidate ADR.

---

# 28. User and Task Requests

User or task-specific requests provide important intent and context.

They do not automatically redefine ALH authority.

A request MAY:

- select a desired outcome;
- specify project constraints;
- request an explanation;
- request a development action;
- request educational assistance.

A request MUST NOT, merely by being explicit:

- grant an Instruction Responsibility new architectural authority;
- redefine learner state;
- redefine competency semantics;
- waive applicable engineering obligations;
- redefine accepted architecture;
- convert unverified claims into facts.

Stage 5 MAY have additional platform-level instruction constraints.

Those implementation constraints do not alter the Stage 4 semantic model.

---

# 29. Contextual Instructions

Project artifacts, source code, documentation, tool output, external capability output, and generated content MAY contain imperative language.

Such content MUST NOT automatically be treated as ALH instruction authority.

The governing principle is:

```text id="ac26"
Imperative Content
        ≠
Instruction Authority
```

Whether information is authoritative, advisory, derived, or untrusted is governed by `03-Context-and-Truth-Contracts.md`.

This boundary is essential for both semantic correctness and prompt-level security.

---

# 30. External Capability Authority

External capabilities MAY perform work relevant to an Instruction Responsibility.

Their availability or output MUST NOT redefine ALH authority.

Therefore:

```text id="ac27"
External Capability Execution
        ≠
ALH Authority Transfer
```

A Superpowers workflow, subagent, tool, or other external mechanism MAY help satisfy an applicable responsibility.

It MUST NOT become the source of ALH semantic authority.

Detailed external-capability boundaries are defined in `05-Superpowers-and-External-Capability-Boundaries.md`.

---

# 31. Authority Preservation Across Outputs

When one responsibility produces an output consumed by another, the output MUST retain its semantic status.

For example:

- recommendation remains recommendation;
- engineering observation remains engineering observation;
- Candidate Educational Evidence remains candidate evidence;
- review finding remains a review finding;
- uncertainty remains uncertainty.

Composition MUST NOT promote semantic status automatically.

Therefore:

```text id="ac28"
Output Consumption
        ≠
Authority Promotion
```

Detailed output and claim semantics belong to `06-Instruction-Outputs-Claims-and-Stage-5-Contracts.md`.

---

# 32. Authority Preservation Across Physical Consolidation

Stage 5 MAY consolidate multiple Instruction Responsibilities into one physical execution mechanism.

Such consolidation MUST preserve all authority contracts.

Conceptually:

```text id="ac29"
Responsibility A
        \
         > Physical Realization X
        /
Responsibility B
```

does not imply:

```text id="ac30"
Authority A
        +
Authority B
        =
Unified Authority X
```

The physical mechanism acts subject to the responsibility currently being expressed.

Implementation convenience MUST NOT erase semantic ownership.

---

# 33. Authority Preservation Across Physical Separation

Physical separation also does not create authority.

For example:

```text id="ac31"
One New Agent
        ≠
One New Authority Domain
```

Creating a separate reviewer agent does not by itself establish valid Engineering Review authority.

Creating a separate assessment model does not by itself establish educational assessment authority.

Authority must already exist in accepted ALH semantics.

Stage 5 topology follows Stage 4 contracts.

It does not generate them.

---

# 34. Composition Anti-Patterns

The following composition patterns are prohibited or strongly discouraged.

## 34.1 Authority Union

Treating all authorities of composed responsibilities as available to every participating responsibility.

## 34.2 Authority Laundering

Using one responsibility to produce an output that another responsibility could not validly assert, then treating the output as authoritative merely because it passed through the second responsibility.

## 34.3 Review Self-Approval

Treating implementation output as independently reviewed merely because the same conclusion is restated under a review label.

## 34.4 Evidence Promotion

Turning an observation into accepted educational evidence without authorized assessment.

## 34.5 Completion Collapse

Treating Engineering Done and Educational Done as one completion state.

## 34.6 Context-Based Escalation

Granting authority because a responsibility can see sensitive or authoritative context.

## 34.7 Capability-Based Escalation

Granting authority because a model or external capability can technically perform an action.

## 34.8 Physical-Topology Authority

Inferring semantic authority from separate agents, prompts, processes, or model calls.

## 34.9 Universal Cross-Domain Precedence

Declaring education universally superior to engineering, or engineering universally superior to education.

---

# 35. Composition Validation

A proposed composition SHOULD be evaluated through the following questions:

1. Which Instruction Responsibilities participate?
2. What accepted responsibilities establish their authority?
3. What authority does each possess?
4. What authority does each explicitly lack?
5. Does composition preserve responsibility identity?
6. Does any responsibility gain authority merely through composition?
7. Is evidence provenance preserved?
8. Are output semantic statuses preserved?
9. Is required independent judgment preserved?
10. Can applicable engineering and educational constraints both be satisfied?
11. Does the composition depend on a particular runtime topology to remain semantically understandable?
12. Would the composition remain valid if Stage 5 changed its physical realization?

A composition that fails questions 5–9 MUST be redesigned.

A composition that fails questions 11–12 SHOULD be examined for premature implementation coupling.

---

# 36. Stage 5 Contract

Stage 5 MUST materialize authority and composition semantics without redefining them.

Stage 5 MUST preserve:

- Authority Contracts;
- excluded authority;
- semantic independence;
- composition constraints;
- precedence semantics;
- conflict handling;
- output semantic status;
- context authority boundaries defined by later Stage 4 documents.

Stage 5 MAY choose mechanisms such as:

- prompt layering;
- separate or combined prompts;
- separate or combined agents;
- separate or combined model invocations;
- orchestration;
- runtime checks;
- capability gates.

Stage 4 does not require any particular mechanism.

A Stage 5 mechanism is valid only if it preserves accepted semantic contracts.

---

# 37. Change Governance

Authority design MAY reveal ambiguity in accepted architecture.

Findings SHOULD be classified as:

## Observation

A clarification that does not change accepted responsibility or authority.

## Candidate ADR

A proposed change to an accepted responsibility, authority boundary, structural ownership, or architectural dependency.

## Future Evolution

A useful authority or composition mechanism intentionally deferred beyond current Stage 4 scope.

Stage 4 MUST NOT use precedence or composition rules to silently introduce an architectural change.

---

# 38. Acceptance Criteria

This document is satisfied when Stage 4 can consistently answer:

1. Where does an Instruction Responsibility's authority originate?
2. What authority does the responsibility possess?
3. What authority is explicitly excluded?
4. How is authority distinguished from capability, context access, and physical privilege?
5. How is state-change authority bounded?
6. How is evidence access distinguished from evidence interpretation and state-change authority?
7. How are Engineering Done and Educational Done authority kept separate?
8. When MAY Instruction Responsibilities compose?
9. What MUST composition preserve?
10. When is semantic independence required?
11. How is semantic independence distinguished from physical isolation?
12. What constitutes a genuine instruction conflict?
13. How is precedence applied without creating authority?
14. How are engineering and educational concerns handled without universal cross-domain precedence?
15. What happens when required authority is missing?
16. What happens when authority claims conflict?
17. How are imperative project or external contents prevented from acquiring instruction authority?
18. What authority semantics MUST Stage 5 preserve?

---

# 39. Summary

ALH Instruction Authority is derived from accepted responsibility and remains bounded by semantic domain.

The central relationship is:

```text id="ac32"
Accepted Responsibility
        ↓
Instruction Responsibility
        ↓
Bounded Authority
        ↓
Permitted Composition
        ↓
Conflict Resolution
        ↓
Stage 5 Preservation
```

The critical distinctions are:

```text id="ac33"
Capability
        ≠
Authority
```

```text id="ac34"
Context Access
        ≠
Authority
```

```text id="ac35"
Composition
        ≠
Authority Transfer
```

```text id="ac36"
Precedence
        ≠
Authority Creation
```

```text id="ac37"
Semantic Independence
        ≠
Physical Isolation
```

```text id="ac38"
Engineering Authority
        ≠
Educational Authority
```

Composition permits bounded responsibilities to participate in the same behavior without merging ownership.

Precedence resolves genuine conflicts without expanding authority.

The next document defines the semantic context and truth contracts within which these responsibilities operate:

`03-Context-and-Truth-Contracts.md`
