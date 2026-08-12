# Instruction Responsibility Model

Status: Accepted
Version: 1.0

Parent Documents

- 00-Prompt-Architecture.md
- 04-Agent-Pipeline.md
- 00-Learning-Model.md
- 00-Development-Methodology.md

Related Documents

- 02-Instruction-Authority-and-Composition.md
- 03-Context-and-Truth-Contracts.md
- 04-Engineering-and-Educational-Instruction-Boundaries.md
- 05-Superpowers-and-External-Capability-Boundaries.md
- 06-Instruction-Outputs-Claims-and-Stage-5-Contracts.md

---

# 1. Purpose

This document defines the Instruction Responsibility Model for AI Learning Harness (ALH).

It specifies:

- what an Instruction Responsibility is;
- how Instruction Responsibilities are derived from accepted ALH responsibilities;
- how responsibility identity is determined;
- when instruction responsibilities MUST remain semantically distinct;
- when responsibilities MAY be composed;
- what minimum semantic contract each Instruction Responsibility MUST expose;
- how Stage 4 responsibility architecture remains independent of physical prompt, model, agent, and runtime topology.

This document does not define:

- detailed instruction authority precedence;
- detailed context authority;
- engineering / educational interaction semantics;
- external capability invocation semantics;
- output claim semantics;
- physical prompt artifacts;
- runtime implementation.

Those concerns are defined by later Stage 4 documents or Stage 5 as appropriate.

---

# 2. Core Principle

Stage 4 begins from accepted responsibility.

It does not begin from:

- prompt files;
- agents;
- models;
- tools;
- workflows;
- runtime calls;
- orchestration mechanisms.

The normative derivation is:

```text id="ir1"
Accepted ALH Responsibility
        ↓
Required AI Behavior
        ↓
Instruction Responsibility
        ↓
Responsibility Boundary
        ↓
Authority Contract
        ↓
Context Contract
        ↓
Output / Claim Contract
```

Instruction Responsibility exists to make required AI behavior semantically explicit before any physical realization is selected.

Therefore:

```text id="ir2"
Responsibility
        precedes
Implementation Packaging
```

---

# 3. Definition

An **Instruction Responsibility** is:

> A bounded semantic responsibility that specifies what AI behavior is required or permitted in support of an accepted ALH responsibility, what semantic domain that behavior belongs to, what behavior is prohibited, and what authority, context, and output boundaries must constrain it.

An Instruction Responsibility represents an instruction-layer obligation.

It is not a physical execution unit.

An Instruction Responsibility SHOULD be identifiable independently of:

- the model that may execute it;
- the number of model invocations;
- the prompt files that may contain it;
- the runtime mechanism that may compose it;
- the tool or capability that may support it;
- the persistence mechanism that may provide its context.

If a proposed responsibility cannot be described without relying on one of those physical choices, the proposal SHOULD be examined for premature Stage 5 coupling.

---

# 4. Instruction Responsibility Identity

Every Instruction Responsibility MUST have a sufficiently distinct semantic identity.

Responsibility identity is determined by what obligation the responsibility exists to satisfy.

A responsibility identity SHOULD be explainable through:

1. its upstream normative basis;
2. the required AI behavior;
3. the semantic domain of that behavior;
4. the authority required to perform it;
5. the authority explicitly outside its scope;
6. the information required for correct behavior;
7. the outputs or decisions expected from it;
8. the neighboring responsibilities with which it interacts.

A responsibility MUST NOT be identified solely by:

- a convenient role name;
- a desired prompt filename;
- a framework component;
- a model persona;
- an external workflow step;
- a runtime node;
- a tool name.

Names MAY be used for communication.

Names MUST NOT define architecture by themselves.

---

# 5. Normative Basis

Every Instruction Responsibility MUST have a normative basis in accepted ALH semantics.

Valid normative sources include:

- Stage 1 architectural responsibilities;
- Stage 2 educational methodology;
- Stage 3 development methodology;
- accepted ADRs;
- cross-cutting constraints already accepted by ALH.

A responsibility MAY integrate requirements from more than one upstream source.

For example, a responsibility supporting engineering activity MAY simultaneously be constrained by:

- Stage 3 engineering obligations;
- Stage 2 learner-participation expectations;
- Stage 1 memory or security boundaries.

Such interaction does not create a new architectural authority.

The Instruction Responsibility exists to express the combined instruction-level consequences of already accepted responsibilities.

---

# 6. Derivation Rules

An Instruction Responsibility SHOULD be created when a distinct required AI behavior cannot be represented safely without an explicit semantic boundary.

A candidate responsibility SHOULD be justified through the following derivation questions:

1. What accepted responsibility creates the need?
2. What AI behavior is required?
3. What semantic domain does the behavior belong to?
4. What decisions or interpretations must remain bounded?
5. What authority is necessary?
6. What authority must remain outside the responsibility?
7. What context is necessary for correct behavior?
8. What output or claim semantics are required?
9. Would combining this behavior with another responsibility create ambiguity or authority leakage?

If these questions cannot be answered, the candidate responsibility SHOULD NOT yet be treated as architecturally established.

---

# 7. Invalid Derivation Sources

Instruction Responsibilities MUST NOT be created merely because:

- an LLM can perform a capability;
- a framework exposes a primitive;
- a prompt file already exists;
- an old Stage 4 document used a role;
- an external workflow contains a step;
- Superpowers exposes a subagent;
- a tool invocation is convenient;
- a runtime implementation would be simpler;
- a vendor recommends a particular agent topology.

The governing distinction is:

```text id="ir3"
Capability Availability
        ≠
Architectural Responsibility
```

and:

```text id="ir4"
Implementation Convenience
        ≠
Normative Responsibility
```

---

# 8. Relationship to Stage 1 Logical Responsibilities

Stage 1 defines logical ALH responsibilities, including those represented through the Agent Pipeline.

These logical responsibilities are important upstream inputs.

They are not automatically Instruction Responsibilities.

Stage 4 MUST NOT assume:

```text id="ir5"
One Logical Responsibility
        =
One Instruction Responsibility
```

A Stage 1 logical responsibility MAY:

- require one Instruction Responsibility;
- require multiple Instruction Responsibilities;
- contribute constraints to another Instruction Responsibility;
- remain cross-cutting rather than independently represented;
- require semantic coordination among several responsibilities.

Conversely, an Instruction Responsibility MAY express instruction-level consequences from multiple compatible upstream responsibilities.

The mapping MUST be justified by semantic boundaries.

It MUST NOT be derived mechanically from Pipeline role names.

---

# 9. Logical Responsibility vs Instruction Responsibility

Logical responsibility and Instruction Responsibility exist at different architectural layers.

A logical responsibility defines ownership within ALH architecture.

An Instruction Responsibility defines bounded AI behavior required to express accepted responsibilities.

Therefore:

```text id="ir6"
Logical Responsibility
        ≠
Instruction Responsibility
```

This distinction prevents Stage 4 from turning architecture diagrams into prompt or agent diagrams.

A logical responsibility may remain conceptually broader than the instructions required to express it.

An Instruction Responsibility may also be narrower than a logical responsibility when a particular behavior requires a distinct authority or context boundary.

---

# 10. Instruction Responsibility vs Physical Realization

Instruction Responsibilities MUST remain independent from their future physical realization.

Therefore:

```text id="ir7"
Instruction Responsibility
        ≠
Prompt File
```

```text id="ir8"
Instruction Responsibility
        ≠
System Prompt
```

```text id="ir9"
Instruction Responsibility
        ≠
Physical Agent
```

```text id="ir10"
Instruction Responsibility
        ≠
Model Invocation
```

```text id="ir11"
Instruction Responsibility
        ≠
Runtime Process
```

```text id="ir12"
Instruction Responsibility
        ≠
Orchestration Node
```

A future implementation MAY materialize multiple responsibilities together.

It MAY also materialize one responsibility across multiple runtime mechanisms.

Neither choice changes the semantic identity of the responsibility.

---

# 11. Responsibility Boundary

Every Instruction Responsibility MUST have a bounded semantic domain.

The boundary SHOULD identify:

- the purpose of the responsibility;
- required behavior;
- prohibited behavior;
- the decisions it may participate in;
- the decisions it MUST NOT make;
- relevant neighboring responsibilities;
- conditions under which another responsibility owns the decision.

A responsibility boundary exists to prevent:

- semantic ownership leakage;
- accidental authority escalation;
- evidence reinterpretation outside accepted authority;
- project / learner state collapse;
- engineering / educational responsibility collapse;
- implementation-driven architecture.

A responsibility SHOULD be narrow enough that its authority can be stated clearly.

It SHOULD NOT be fragmented so aggressively that semantic cohesion is lost.

---

# 12. Responsibility Cohesion

An Instruction Responsibility SHOULD contain behavior that belongs to one coherent semantic purpose.

High cohesion exists when the included behavior:

- serves the same accepted responsibility;
- requires compatible authority;
- relies on compatible context;
- produces compatible semantic outputs;
- shares the same major prohibitions.

Low cohesion exists when one responsibility combines behavior that:

- belongs to different authority domains;
- requires different evidence interpretation;
- creates conflicting decision rights;
- mixes engineering completion with educational completion;
- mixes project truth with learner-state authority;
- requires semantic independence.

Low-cohesion responsibilities SHOULD be decomposed.

---

# 13. Separation Criteria

Instruction Responsibilities MUST remain semantically distinct when combining them would create material risk of boundary loss.

Separation is required where one or more of the following apply.

## 13.1 Different Authority Domains

Responsibilities that possess materially different decision authority SHOULD remain distinguishable.

Examples include:

- engineering implementation;
- engineering review;
- educational assessment;
- competency evaluation;
- learner-state mutation.

## 13.2 Independent Evaluation

Where accepted methodology requires independent evaluation, the evaluating responsibility MUST remain semantically distinguishable from the responsibility whose work is being evaluated.

Semantic independence does not require physical separation.

## 13.3 Different Authoritative Context

Responsibilities SHOULD remain distinct when they rely on materially different authoritative domains and combining them would blur source authority.

## 13.4 Different Evidence Interpretation

Responsibilities SHOULD remain distinct when one produces observations and another has authority to interpret those observations into a stronger semantic claim.

For example:

```text id="ir13"
Engineering Observation
        ↓
Candidate Educational Evidence
        ↓
Stage 2 Assessment
```

The responsibility producing the observation MUST NOT automatically acquire assessment authority.

## 13.5 State-Change Authority

Responsibilities that may update authoritative learner state MUST remain distinguishable from responsibilities that merely observe, recommend, or produce candidate evidence.

## 13.6 Conflicting Interests

Responsibilities SHOULD remain distinct where their purposes create a meaningful need for independent judgment.

## 13.7 Security or Trust Boundary

Responsibilities MUST remain distinguishable where combining them would allow lower-authority context to redefine higher-authority behavior.

---

# 14. Separation Does Not Require Physical Isolation

Semantic separation MUST NOT be interpreted automatically as execution isolation.

The following are separate decisions:

```text id="ir14"
Semantic Separation
        ≠
Physical Separation
```

A single physical model invocation MAY potentially execute multiple semantically distinct responsibilities if Stage 5 can preserve their:

- authority boundaries;
- context boundaries;
- provenance;
- output semantics;
- independence requirements.

Likewise, separate model invocations do not automatically establish semantic independence.

Physical topology alone cannot prove correct responsibility separation.

---

# 15. Composition Eligibility

Instruction Responsibilities MAY be composed semantically when their simultaneous application does not compromise accepted boundaries.

Composition eligibility SHOULD be evaluated using:

- compatible purposes;
- compatible authority;
- compatible context use;
- compatible output semantics;
- preserved provenance;
- preserved prohibitions;
- absence of required semantic independence;
- absence of unauthorized state-change escalation.

Composition MUST NOT be accepted merely because two responsibilities are commonly executed together.

---

# 16. Composition Constraints

Where responsibilities are composition-eligible, composition MUST preserve the individual semantic contracts.

The governing principle is:

```text id="ir15"
Composition
        ≠
Responsibility Merger
```

and:

```text id="ir16"
Composition
        ≠
Authority Transfer
```

Composition MUST NOT:

- grant one responsibility another responsibility's authority;
- erase the origin of evidence;
- convert advisory output into authoritative output;
- convert Candidate Educational Evidence into accepted educational evidence;
- collapse Engineering Done and Educational Done;
- erase required semantic independence;
- change context authority;
- create new architectural ownership.

Detailed precedence and conflict behavior are defined in `02-Instruction-Authority-and-Composition.md`.

---

# 17. Responsibility Interaction

Instruction Responsibilities MAY depend on outputs or observations from other responsibilities.

Such dependency MUST preserve semantic status.

Conceptually:

```text id="ir17"
Responsibility A
        ↓
Bounded Output
        ↓
Responsibility B
```

The receiving responsibility MUST interpret the input according to:

- its source;
- its semantic status;
- its authority;
- its evidence quality;
- its freshness where relevant.

Receiving an output MUST NOT promote that output into stronger authority.

Therefore:

```text id="ir18"
Consumption
        ≠
Authority Promotion
```

Detailed context and truth semantics are defined in `03-Context-and-Truth-Contracts.md`.

---

# 18. Cross-Cutting Constraints

Some accepted concerns constrain many Instruction Responsibilities without necessarily becoming independent responsibilities.

Examples MAY include:

- security;
- explainability;
- uncertainty handling;
- evidence-before-claim;
- application / learning-infrastructure separation;
- documentation obligations;
- learner-participation preservation.

A cross-cutting concern SHOULD become a distinct Instruction Responsibility only if it possesses an independently meaningful semantic purpose or authority boundary.

Otherwise, it SHOULD remain a normative constraint applied across relevant responsibilities.

This avoids unnecessary decomposition.

---

# 15. Responsibility Inputs

An instruction responsibility MAY require information from multiple sources.

Its required inputs SHOULD be defined by semantic need rather than implementation convenience.

Possible inputs include:

- architectural constraints;
- educational constraints;
- learner state;
- competency information;
- project context;
- task context;
- prior bounded results;
- engineering evidence;
- educational evidence.

The responsibility definition SHOULD identify the kind of information required without prescribing its runtime retrieval mechanism.

Detailed context-source authority and context-consumption rules belong to `04-Context-Model.md`.

---

# 16. Responsibility Outputs

An instruction responsibility SHOULD have bounded expected outputs or effects.

An output MAY include:

- interpreted intent;
- a recommendation;
- a learning interaction;
- an engineering artifact;
- review findings;
- assessment evidence;
- a proposed memory update;
- a user-facing response.

An output MUST NOT automatically be treated as authoritative state.

Where another architectural responsibility owns interpretation, persistence, approval, or progression, that downstream ownership MUST remain explicit.

For example:

```text
Observed Evidence
        ≠
Competency State Change

Proposed Memory Update
        ≠
Persisted Memory

Architectural Recommendation
        ≠
Accepted Architecture
```

---

# 17. Educational Responsibility Safeguards

Instruction responsibilities that participate in educational behavior MUST remain downstream from Stage 2 methodology.

They MUST preserve the distinction between:

- teaching and assessment;
- assessment and competency evaluation;
- evidence production and evidence interpretation;
- Learning Unit completion and mastery;
- Competency State and Automation Level;
- Competency State and Learning Debt;
- Automation Level and Learning Debt.

An instruction responsibility MUST NOT collapse these dimensions merely to simplify AI behavior.

Detailed educational instruction responsibilities belong to `05-Educational-Instruction-Model.md`.

---

# 18. Engineering Responsibility Safeguards

Instruction responsibilities involved in engineering work MUST preserve engineering quality and development discipline.

They MUST NOT treat educational goals as permission to produce technically unsound work.

Likewise, engineering automation MUST NOT override educational integrity.

Where educational and engineering concerns interact, the established principle hierarchy applies:

```text
Educational Integrity
        ↓
Engineering Quality
        ↓
Explainability
        ↓
Adaptability
        ↓
Automation
```

Instruction responsibility design MUST remain compatible with this hierarchy.

---

# 19. Security Responsibility

Security is an established architectural concern and also appears as a logical Pipeline responsibility through the Security Auditor.

Prompt Architecture MUST preserve security responsibility without assuming that all security behavior belongs exclusively to one role.

Security-related shared constraints MAY apply across multiple instruction responsibilities.

The Security Auditor responsibility MAY provide dedicated security analysis or review where appropriate.

Shared security constraints and dedicated security review MUST NOT be treated as mutually exclusive.

Prompt Architecture MUST NOT weaken applicable security constraints merely because a dedicated Security Auditor responsibility exists elsewhere in the Pipeline.

---

# 20. Response Responsibility

The Response Generator is responsible for constructing coherent user-facing output from relevant bounded results.

Response generation MUST NOT be treated as authority to redefine those results.

A response responsibility MAY:

- synthesize;
- structure;
- explain;
- prioritize presentation;
- adapt communication to the interaction.

It MUST preserve material distinctions established by upstream responsibilities.

For example, uncertainty MUST NOT be rewritten as certainty merely to improve fluency.

A recommendation MUST NOT be presented as an accepted architectural decision unless it has the required authority.

An assessment observation MUST NOT be presented as mastery unless competency evaluation establishes that conclusion.

---

# 21. Memory Responsibility

The Memory Manager represents a logical Pipeline responsibility related to learner continuity and memory handling.

Its instruction responsibilities MUST remain compatible with the architectural Memory Model.

A Memory Manager instruction responsibility MAY support:

- identification of memory-relevant observations;
- preparation of bounded memory updates;
- preservation of continuity;
- retrieval-oriented interpretation where authorized.

It MUST NOT redefine:

- competency semantics;
- educational knowledge;
- assessment methodology;
- Decision Engine authority.

The existence of a Memory Manager instruction responsibility MUST NOT imply a particular persistence mechanism.

Persistence implementation belongs to Stage 5.

---

# 22. Assessor Responsibility

The Assessor is a logical Agent Pipeline role responsible for bounded educational assessment and competency-evaluation activities.

The Assessor MAY participate in more than one educational instruction responsibility.

In particular, the Assessor MAY perform:

- Assessment Responsibility;
- Competency Evaluation Responsibility.

These responsibilities MUST remain semantically distinct even when they are executed by the same logical role, prompt artifact, model invocation, or interaction.

Conceptually:

```text
Assessor Pipeline Role
        │
        ├── Assessment Responsibility
        │       ↓
        │   Evidence Production
        │
        └── Competency Evaluation Responsibility
                ↓
            Evidence Interpretation
```

Assessment Responsibility MAY:

- create assessment opportunities;
- observe learner responses and activity;
- identify relevant evidence;
- classify evidence according to approved evidence categories;
- report assessment findings.

Competency Evaluation Responsibility MAY:

- interpret applicable evidence against the relevant competency;
- evaluate competency progression using approved methodology;
- identify knowledge or capability gaps;
- evaluate applicable Learning Debt implications;
- determine whether available evidence supports the relevant competency conclusion;
- produce bounded competency-evaluation results.

The Assessor MUST preserve the Stage 2 relationship:

```text
Evidence Production
        ↓
Assessment
        ↓
Competency Evaluation
```

Execution by one logical role MUST NOT collapse these responsibilities into one semantic operation.

The Assessor MUST NOT:

- authority;
- context;
- evidence;
- independence;
- trust;
- learner participation;
- completion semantics.

Stage 4 SHOULD NOT create responsibilities merely to make the architecture appear more modular.

Proportional architecture applies to instruction decomposition as it does elsewhere in ALH.

---

# 31. Anti-Patterns

The following patterns are prohibited or strongly discouraged.

## 31.1 Role Equals Prompt

```text id="ir29"
Logical Role
        =
Prompt File
```

This assumption is invalid unless later Stage 5 implementation independently justifies that packaging.

## 31.2 Prompt Equals Agent

```text id="ir30"
Prompt
        =
Physical Agent
```

Prompt packaging does not define runtime topology.

## 31.3 Prompt Equals Authority

A responsibility does not gain authority because instructions describing it appear in a privileged prompt location.

Semantic authority comes from accepted ALH architecture and methodology.

## 31.4 Capability Equals Responsibility

A tool or external capability does not become an ALH responsibility merely because it exists.

## 31.5 Lifecycle Equals Responsibility Topology

Stage 3 lifecycle activities MUST NOT be converted mechanically into instruction or agent topology.

## 31.6 Persona Equals Responsibility

A human-readable persona MUST NOT define architectural ownership.

## 31.7 Coordination Equals Ownership

A responsibility that coordinates information from several domains MUST NOT automatically acquire authority over those domains.

## 31.8 Observation Equals Assessment

Engineering observations MUST NOT automatically become educational assessment conclusions.

## 31.9 Implementation-Driven Responsibility

Stage 5 convenience MUST NOT be used to retroactively justify Stage 4 responsibility boundaries.

## 31.10 Historical Artifact Preservation

Historical Stage 4 roles or document structures MUST NOT be retained merely because they already exist.

Reuse requires independent semantic justification against the accepted Stage 1–3 baseline.

---

# 32. Responsibility Validation

A proposed Instruction Responsibility SHOULD be validated using the following questions.

1. What accepted responsibility requires it?
2. What distinct AI behavior does it own?
3. Is its semantic purpose coherent?
4. What authority does it require?
5. What authority must it not acquire?
6. What authoritative context does it depend on?
7. What outputs may it produce?
8. What evidence may it interpret?
9. Does it require semantic independence from another responsibility?
10. Could it be safely composed without authority leakage?
11. Is it being proposed only because of an implementation preference?
12. Would the responsibility still make sense if the runtime topology changed completely?

A responsibility that fails question 12 is likely coupled too tightly to physical implementation.

---

# 33. Cross-Document Dependency

This document establishes the responsibility model required by later Stage 4 contracts.

The dependency is:

```text id="ir31"
01 — Instruction Responsibility Model
        ↓
02 — Authority and Composition
        ↓
03 — Context and Truth
        ↓
04 — Engineering / Educational Boundaries
        ↓
05 — External Capability Boundaries
        ↓
06 — Outputs / Claims / Stage 5 Contracts
```

`02-Instruction-Authority-and-Composition.md` MUST build on the responsibility identity and separation rules defined here.

`03-Context-and-Truth-Contracts.md` MUST define context semantics for responsibilities without changing their identity.

`04-Engineering-and-Educational-Instruction-Boundaries.md` MUST apply the model to the development / learning boundary.

`05-Superpowers-and-External-Capability-Boundaries.md` MUST map external capabilities to required semantics without converting capabilities into responsibilities.

`06-Instruction-Outputs-Claims-and-Stage-5-Contracts.md` MUST preserve responsibility identity and authority in downstream outputs.

---

# 34. Stage 5 Boundary

Stage 5 is responsible for physically materializing accepted Instruction Responsibilities.

Stage 5 MAY determine:

- prompt packaging;
- agent topology;
- model topology;
- invocation topology;
- routing;
- orchestration;
- context transport;
- persistence;
- capability wiring.

Stage 5 MUST NOT change responsibility semantics merely to match a preferred implementation.

The governing relationship is:

```text id="ir32"
Instruction Responsibility Contract
        ↓
Stage 5 Materialization
```

not:

```text id="ir33"
Stage 5 Mechanism
        ↓
Retroactive Responsibility Definition
```

If a proposed implementation cannot preserve an accepted Instruction Responsibility boundary, the conflict MUST be surfaced rather than silently resolved through implementation.

---

# 35. Change Governance

Instruction Responsibility design MAY expose ambiguity in accepted upstream architecture.

Such findings MUST be classified appropriately.

## Observation

A finding that clarifies or analyzes accepted architecture without changing it.

## Candidate ADR

A proposed change to an accepted architectural responsibility, authority boundary, structural separation, or dependency.

## Future Evolution

A potentially useful extension that is not required for the current Stage 4 baseline.

Instruction decomposition decisions that remain within accepted Stage 1–3 authority MAY be accepted as Stage 4 decisions without an ADR.

No responsibility definition may silently modify accepted architecture.

---

# 36. Acceptance Criteria

This document is satisfied when Stage 4 can consistently determine:

1. whether a proposed Instruction Responsibility has an accepted normative basis;
2. whether its semantic purpose is coherent;
3. whether it is distinct from logical architecture and physical implementation;
4. whether it requires semantic separation from neighboring responsibilities;
5. whether it may safely compose with other responsibilities;
6. whether its authority can be bounded explicitly;
7. whether its context needs can be specified independently of retrieval technology;
8. whether its output semantics can be bounded independently of serialization;
9. whether it preserves project / learner separation;
10. whether it preserves engineering / educational authority separation;
11. whether it avoids deriving topology from Pipeline roles, lifecycle activities, personas, tools, or external capabilities;
12. whether Stage 5 can materially implement it without redefining its semantics.

---

# 37. Summary

The Instruction Responsibility Model establishes bounded semantic responsibility as the primary unit of ALH Prompt Architecture.

Instruction Responsibilities are derived from accepted ALH responsibilities.

They are not derived from runtime topology.

The central relationship is:

```text id="ir34"
Accepted Responsibility
        ↓
Required AI Behavior
        ↓
Instruction Responsibility
        ↓
Semantic Boundary
        ↓
Separation / Composition Eligibility
        ↓
Authority, Context, and Output Contracts
```

The critical distinctions are:

```text id="ir35"
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

and:

```text id="ir36"
Composition
        ≠
Authority Transfer
```

and:

```text id="ir37"
Capability
        ≠
Responsibility
```

and:

```text id="ir38"
Lifecycle Activity
        ≠
Responsibility Topology
```

This model provides the semantic foundation for the next Stage 4 document:

`02-Instruction-Authority-and-Composition.md`
