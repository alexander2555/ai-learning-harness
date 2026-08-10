# Instruction Responsibility Model

Version: 0.1 Draft

Parent Documents

- 00-Prompt-Architecture.md
- 04-Agent-Pipeline.md
- 03-System-Architecture.md

Related Documents

- 00-Learning-Model.md
- 00-Development-Methodology.md

---

# 1. Purpose

This document defines the Instruction Responsibility Model of AI Learning Harness (ALH).

It establishes how responsibilities assigned to the AI instruction layer are identified, separated, bounded, delegated, and related to existing ALH architectural responsibilities.

The model exists to prevent prompt instructions from becoming an uncontrolled alternative architecture.

It defines responsibility ownership before instruction composition, context consumption, prompt artifact materialization, or runtime implementation are considered.

This document MUST NOT redefine the architectural responsibilities established by Stage 1.

---

# 2. Responsibility Principle

Every material instruction responsibility SHOULD have an identifiable purpose and authority boundary.

An instruction responsibility defines what a class of AI-agent instructions is responsible for causing, constraining, communicating, or preserving.

Conceptually:

```text
Architectural Responsibility
        │
        │ constrains
        ▼
Instruction Responsibility
        │
        │ may later be expressed by
        ▼
Prompt Artifact
        │
        │ may later be executed through
        ▼
Runtime Mechanism
```

These layers MUST remain distinct.

An instruction responsibility MUST NOT acquire additional authority merely because a future prompt artifact or runtime mechanism makes that authority technically possible.

---

# 3. Responsibility Sources

Instruction responsibilities MUST originate from identifiable project needs or authoritative upstream responsibilities.

A responsibility MAY originate from:

- an architectural responsibility;
- an educational-methodology requirement;
- a development constraint;
- an integration boundary;
- an explicit interaction responsibility;
- an approved cross-cutting project requirement.

An instruction responsibility MUST NOT be created solely because:

- a model is capable of performing an action;
- a convenient prompt structure suggests it;
- an implementation framework provides a corresponding feature;
- a Pipeline role name appears suitable;
- duplicating another responsibility would simplify prompt wording.

The existence of an implementation capability does not establish architectural authority.

---

# 4. Responsibility Identity

Each material instruction responsibility SHOULD be identifiable independently of its eventual implementation.

Its definition SHOULD make clear:

- its purpose;
- the upstream responsibility or requirement it supports;
- the authority it requires;
- the authority it does not possess;
- the information it may require;
- the outputs or effects it is expected to support;
- significant neighboring responsibilities.

Responsibility identity SHOULD remain stable even when implementation changes.

For example, changing from one model invocation to several model invocations MUST NOT by itself create new instruction responsibilities.

Likewise, combining several responsibilities into one runtime invocation MUST NOT erase their conceptual boundaries.

---

# 5. Responsibility Ownership

Prompt Architecture owns instruction-layer responsibility structure.

It does not own the underlying semantics consumed by those responsibilities.

The ownership relationship is:

```text
Upstream Owner
     │
     │ provides authoritative semantics
     ▼
Instruction Responsibility
     │
     │ applies or expresses those semantics
     ▼
AI-Agent Behavior
```

An instruction responsibility MAY:

- consume authoritative information;
- apply an approved constraint;
- request or produce information within its responsibility;
- coordinate with another instruction responsibility;
- express an approved methodology;
- constrain AI behavior.

An instruction responsibility MUST NOT:

- redefine upstream semantics;
- create competing authoritative state;
- silently assume another subsystem's authority;
- reinterpret an architectural boundary for implementation convenience.

---

# 6. Architectural Ownership Safeguards

The Instruction Responsibility Model MUST preserve the architectural ownership established by Stage 1.

In particular:

- Knowledge Graph responsibility MUST remain distinct from instruction responsibility;
- Competency Model responsibility MUST remain distinct from instruction responsibility;
- Memory Model responsibility MUST remain distinct from instruction responsibility;
- Decision Engine responsibility MUST remain distinct from instruction responsibility;
- Agent Pipeline responsibility MUST remain distinct from the responsibilities of the subsystems it coordinates;
- Project Context responsibility MUST remain distinct from instruction responsibility.

Instructions MAY operate on information supplied by these responsibilities.

Operation on information does not imply ownership of that information's semantics.

Therefore:

```text
Read
  ≠
Own

Apply
  ≠
Define

Coordinate
  ≠
Replace

Express
  ≠
Redefine
```

---

# 7. Decision Authority

Decision authority requires particular care because AI instructions can easily combine information retrieval, reasoning, recommendation, and action.

Where the architecture assigns educational decision-making to the Decision Engine, instruction responsibilities MUST preserve that authority.

An instruction responsibility MAY support decision-making by:

- gathering relevant information;
- presenting applicable constraints;
- producing evidence;
- evaluating information where explicitly authorized;
- communicating a decision;
- explaining an approved decision.

It MUST NOT silently turn supporting responsibility into authoritative educational decision ownership.

For example:

```text
Assessment Evidence
        ↓
Decision Support
        ↓
Decision Engine Authority
        ↓
Resulting Educational Direction
```

A prompt artifact that performs several of these operations in one model invocation MUST still preserve their conceptual responsibility boundaries.

Physical execution consolidation MUST NOT imply semantic ownership consolidation.

---

# 8. Agent Pipeline Responsibilities

The Agent Pipeline defines logical ALH responsibilities.

The architectural baseline includes:

- Intent Analyzer;
- Project Manager;
- Architect;
- Teacher;
- Developer;
- Reviewer;
- Security Auditor;
- Assessor;
- Memory Manager;
- Response Generator.

These roles provide an important input to the Instruction Responsibility Model.

However, a Pipeline role and an instruction responsibility are not necessarily identical concepts.

A Pipeline role represents a logical responsibility in coordinated ALH behavior.

An instruction responsibility represents a bounded responsibility assigned to AI-agent instructions.

The relationship MAY be:

```text
One Pipeline Role
        ↓
One Instruction Responsibility
```

but MAY also be:

```text
One Pipeline Role
        ↓
Several Instruction Responsibilities
```

or:

```text
Several Compatible Responsibilities
        ↓
One Composed Prompt Artifact
```

No one-to-one mapping MUST be assumed without explicit Prompt Architecture reasoning.

---

# 9. Pipeline Role Preservation

Although one-to-one prompt mapping is not required, Prompt Architecture MUST preserve the meaning of established Pipeline responsibilities.

A Prompt Architecture design MUST NOT make a Pipeline responsibility disappear merely by omitting a corresponding prompt file.

The responsibility MAY instead be represented through:

- a dedicated instruction responsibility;
- a composed instruction component;
- an applicable shared constraint;
- another explicitly defined architecture-compliant instruction structure.

The resulting design MUST make responsibility coverage traceable.

If an established Pipeline responsibility cannot be identified in the instruction architecture, that absence MUST be treated as a design gap unless explicitly justified by an approved upstream change.

---

# 10. Responsibility Decomposition

A Pipeline or architectural responsibility MAY be decomposed into smaller instruction responsibilities when decomposition improves clarity, composability, or boundary preservation.

Decomposition SHOULD be used when a responsibility contains materially different instruction concerns.

For example, a logical role might require distinct responsibilities for:

- interpreting relevant context;
- applying educational constraints;
- producing engineering output;
- producing evidence;
- communicating results.

Such decomposition MUST NOT create competing architectural ownership.

A decomposed instruction responsibility remains downstream from its authoritative upstream source.

Decomposition SHOULD be proportional.

Prompt Architecture SHOULD NOT create instruction responsibilities so granular that responsibility relationships become harder to understand than the original architectural model.

---

# 11. Shared Responsibilities

Some constraints apply across multiple Pipeline roles or prompt artifacts.

Examples may include:

- architectural compliance;
- educational integrity;
- engineering quality;
- uncertainty handling;
- explainability;
- security constraints;
- traceability requirements.

Such concerns MAY be represented as shared instruction responsibilities where doing so reduces duplication and preserves clear authority.

A shared responsibility MUST have a bounded meaning.

It MUST NOT become an unrestricted global prompt containing unrelated project semantics.

Shared instruction responsibilities SHOULD reference authoritative sources rather than duplicate their definitions.

---

# 12. Role-Specific Responsibilities

Some instruction responsibilities naturally correspond to a particular logical Pipeline role.

A role-specific instruction responsibility SHOULD:

- remain within the role's architectural purpose;
- consume only context relevant to that responsibility;
- respect decisions owned elsewhere;
- produce outputs or effects appropriate to that role;
- preserve applicable shared constraints.

Role-specific instructions MUST NOT treat the role name as unlimited authority.

For example, an `Architect` responsibility does not authorize silent modification of accepted architecture.

A `Teacher` responsibility does not authorize redefinition of educational methodology.

An `Assessor` responsibility does not independently own competency progression.

A `Memory Manager` responsibility does not define educational knowledge.

A `Developer` responsibility does not bypass architectural or educational constraints.

Role names MUST therefore be interpreted through their approved architectural responsibilities, not through generic expectations associated with their names.

---

# 13. Cross-Responsibility Coordination

ALH interactions may require several instruction responsibilities to cooperate.

Coordination MUST preserve responsibility ownership.

A responsibility MAY:

- provide information to another responsibility;
- request information from another responsibility;
- depend on another responsibility's result;
- constrain downstream work;
- participate in a composed instruction structure.

Coordination MUST NOT create implicit authority transfer.

Conceptually:

```text
Responsibility A
      │
      │ produces bounded result
      ▼
Responsibility B
      │
      │ consumes result
      ▼
Responsibility C
```

The consumer of a result MUST NOT automatically acquire the producer's responsibility.

Likewise, the producer MUST NOT automatically acquire authority over downstream interpretation.

Detailed composition behavior belongs to `02-Instruction-Composition.md`.

---

# 14. Responsibility Delegation

An instruction responsibility MAY delegate bounded work where the architecture permits it.

Delegation MUST preserve:

- the original responsibility boundary;
- applicable constraints;
- required context;
- authority limitations;
- traceability.

Delegation MUST NOT be used to bypass an ownership restriction.

A responsibility that lacks authority to make a decision MUST NOT gain that authority by delegating the decision to another prompt component that also lacks it.

Delegation changes who performs bounded work.

It does not automatically change who owns the underlying semantics or decision.

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

# 22. Assessment Responsibility

The Assessor represents a logical Pipeline responsibility related to educational assessment.

Its instruction responsibilities MUST remain compatible with Stage 2 assessment methodology.

Assessment MAY produce or organize educational evidence.

Assessment MUST NOT independently redefine competency states or mastery rules.

Where competency evaluation is a distinct methodological responsibility, Prompt Architecture MUST preserve that distinction even if one AI model participates in both operations.

Therefore:

```text
Same Model Invocation
        ≠
Same Educational Responsibility
```

Detailed educational expression rules belong to `05-Educational-Instruction-Model.md`.

---

# 23. Responsibility and Prompt Artifacts

Instruction responsibilities are architectural concepts.

Prompt artifacts are their possible concrete expressions.

Therefore:

```text
Responsibility Design
        ↓
Composition Design
        ↓
Prompt Artifact Contract
        ↓
Stage 5 Materialization
```

A future artifact such as:

```text
teacher.md
```

MAY represent a Teacher-related instruction responsibility.

Its filename alone MUST NOT determine its architectural authority.

Likewise, the absence of a dedicated `teacher.md` file MUST NOT imply the absence of Teacher responsibility if that responsibility is represented elsewhere in an architecture-compliant and traceable form.

Detailed artifact requirements belong to `06-Prompt-Artifact-Model.md`.

---

# 24. Responsibility Traceability

Material instruction responsibilities SHOULD be traceable to their direct normative basis.

Traceability SHOULD make it possible to determine:

- why the responsibility exists;
- what upstream requirement it supports;
- what authority it has;
- what authority it lacks;
- which neighboring responsibilities materially interact with it.

Traceability MUST NOT be used to create a second source of semantic truth.

The authoritative semantics remain in the applicable upstream documents.

Detailed Prompt Architecture traceability requirements belong to `07-Prompt-Architecture-Compliance-and-Traceability.md`.

---

# 25. Responsibility Anti-Patterns

Prompt Architecture MUST avoid the following anti-patterns.

## 25.1 Role Equals Prompt

Assuming every logical Pipeline role requires exactly one prompt artifact.

## 25.2 Prompt Equals Agent

Assuming every prompt artifact requires a separate physical AI agent.

## 25.3 Prompt Equals Authority

Assuming an instruction owns semantics merely because those semantics appear in its text.

## 25.4 Coordination Equals Ownership

Allowing a coordinating responsibility to absorb responsibilities owned by other subsystems.

## 25.5 Convenience-Based Authority

Giving an instruction additional authority because the model can conveniently perform the operation.

## 25.6 Duplicated Semantics

Copying architectural or methodological definitions into multiple instruction responsibilities until they become competing sources of truth.

## 25.7 Hidden Decision Transfer

Allowing teaching, assessment, response generation, or memory handling to silently acquire Decision Engine authority.

## 25.8 Implementation-Driven Responsibility

Defining architectural responsibilities primarily around files, APIs, model calls, framework components, or persistence mechanisms.

---

# 26. Responsibility Design Rules

Instruction Responsibility design MUST satisfy the following rules:

1. A material responsibility MUST have an identifiable purpose.
2. A responsibility MUST remain within applicable upstream authority.
3. A responsibility MUST NOT redefine authoritative upstream semantics.
4. A responsibility SHOULD be separable from unrelated responsibilities.
5. Shared responsibilities SHOULD be used to reduce justified cross-cutting duplication.
6. Decomposition SHOULD remain proportional.
7. Coordination MUST NOT imply authority transfer.
8. Delegation MUST NOT bypass ownership restrictions.
9. Logical responsibilities MUST remain distinguishable even when runtime execution is consolidated.
10. Responsibility coverage SHOULD remain traceable.
11. Missing authority MUST NOT be replaced with invented authority.
12. Implementation convenience MUST NOT determine semantic ownership.

---

# 27. Relationship to Subsequent Documents

This document defines responsibility ownership and separation.

It intentionally does not define:

- how responsibilities are composed;
- how conflicting instructions are resolved;
- how context is selected or supplied;
- how educational methodology is expressed in detail;
- how prompt artifacts are structured;
- how Prompt Architecture compliance is verified.

Those responsibilities belong respectively to:

- `02-Instruction-Composition.md`;
- `03-Instruction-Precedence-and-Conflict-Resolution.md`;
- `04-Context-Model.md`;
- `05-Educational-Instruction-Model.md`;
- `06-Prompt-Artifact-Model.md`;
- `07-Prompt-Architecture-Compliance-and-Traceability.md`.

This separation MUST be preserved to prevent Stage 4 documents from becoming competing definitions of the same semantics.

---

# 28. Summary

The Instruction Responsibility Model establishes responsibility before implementation.

Its core relationship is:

```text
Authoritative Upstream Responsibility
        ↓
Bounded Instruction Responsibility
        ↓
Composed Instruction Structure
        ↓
Prompt Artifact
        ↓
Runtime Implementation
```

Each layer depends on the previous layer but MUST NOT silently acquire its authority.

The model therefore preserves the following distinctions:

```text
Pipeline Role
    ≠ Prompt Artifact

Prompt Artifact
    ≠ Physical Agent

Model Invocation
    ≠ Responsibility Boundary

Context Access
    ≠ Semantic Ownership

Coordination
    ≠ Authority Transfer

Execution Capability
    ≠ Architectural Authority
```

These distinctions allow ALH to express its logical Agent Pipeline through AI-agent instructions while preserving the architecture, educational methodology, and development discipline established by the preceding project stages.

The next document defines how compatible instruction responsibilities may be composed:

`02-Instruction-Composition.md`
