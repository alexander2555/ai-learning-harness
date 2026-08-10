# Prompt Architecture

Version: 0.1 Draft

Parent Documents

- 02-Core-Principles.md
- 03-System-Architecture.md
- 04-Agent-Pipeline.md
- 00-Learning-Model.md
- 00-Development-Methodology.md

Related Documents

- ADR-001-Separation-of-Application-and-Learning-Infrastructure.md

---

# 1. Purpose

This document defines the foundational Prompt Architecture of AI Learning Harness (ALH).

Prompt Architecture defines how approved ALH architectural responsibilities, educational methodology, development constraints, and relevant context are expressed through coherent AI-agent instruction responsibilities.

Its purpose is to provide an architecture for AI-agent instructions before those instructions are materialized as concrete Harness artifacts.

Prompt Architecture MUST preserve the semantics and ownership established by upstream project documents.

It MUST NOT become an alternative source of:

- system architecture;
- educational methodology;
- development methodology;
- runtime architecture;
- Harness implementation;
- final system validation.

Detailed Prompt Architecture responsibilities are defined in dedicated Stage 4 documents.

---

# 2. Scope

Prompt Architecture covers the structural model for:

- instruction responsibilities;
- separation of instruction responsibilities;
- composition of compatible instructions;
- instruction precedence;
- conflict handling;
- context consumption;
- expression of educational methodology through instructions;
- architectural requirements for prompt artifacts;
- prompt-specific compliance and traceability.

Prompt Architecture defines how AI-agent instructions are structured and constrained.

It does not define how the resulting instruction system is loaded, executed, persisted, or integrated at runtime.

---

# 3. Stage Responsibility

Stage 4 answers the following question:

> How should ALH AI-agent instructions and prompt responsibilities be structured so that the approved architecture, educational methodology, and development methodology can be expressed consistently to AI agents?

The relationship between project stages is:

```text
Stage 1
Architecture
    │
    │ defines system responsibilities
    ▼
Stage 2
Educational Methodology
    │
    │ defines educational semantics
    ▼
Stage 3
Development Methodology
    │
    │ defines development discipline
    ▼
Stage 4
Prompt Architecture
    │
    │ defines instruction architecture
    ▼
Stage 5
Harness Implementation
    │
    │ materializes and executes the design
    ▼
Stage 6
Validation
```

Stage 4 MUST consume the accepted outputs of Stages 1, 2, and 3 as upstream constraints.

It MUST NOT change an upstream decision merely because a different prompt design would be easier to implement.

Where a Prompt Architecture proposal requires an architectural change, that change MUST be handled through the applicable ADR governance process.

---

# 4. Prompt Architecture Model

Prompt Architecture forms an instruction layer between approved ALH semantics and their future implementation.

Conceptually:

```text
Approved Architecture
        +
Educational Methodology
        +
Development Constraints
        +
Relevant Context
        │
        ▼
Instruction Responsibilities
        │
        ▼
Instruction Composition
        │
        ▼
Prompt Artifact Contracts
        │
        ▼
Stage 5 Implementation
```

This model establishes a directional dependency.

Downstream instruction artifacts MAY express upstream semantics.

They MUST NOT redefine those semantics.

Prompt-local wording MUST NOT become authoritative merely because it appears in an instruction artifact.

---

# 5. Instruction Responsibility

An instruction responsibility is a bounded responsibility assigned to the AI instruction layer.

It describes what a class of instructions is responsible for causing, constraining, communicating, or preserving.

Instruction responsibilities SHOULD:

- have a clear purpose;
- have explicit authority boundaries;
- identify applicable upstream semantics;
- remain separable from unrelated responsibilities;
- support composition without unnecessary semantic duplication;
- remain traceable to their normative dependencies.

An instruction responsibility is not automatically:

- an architectural subsystem;
- an AI agent;
- a model invocation;
- a Pipeline execution step;
- a file;
- a system prompt.

These concepts MUST remain distinct unless a later approved design explicitly maps them together.

---

# 6. Relationship to the Agent Pipeline

The Agent Pipeline defines logical ALH responsibilities.

The current architectural baseline includes:

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

Prompt Architecture MUST preserve these logical responsibility boundaries.

However:

```text
Pipeline Role
      ≠
Physical Agent

Pipeline Role
      ≠
Model Invocation

Pipeline Role
      ≠
Prompt Artifact
```

A Pipeline role MAY correspond to a distinct prompt artifact where that mapping is justified.

Multiple Pipeline roles MAY also be represented through a composed instruction structure or executed by the same AI model.

Prompt Architecture MUST determine instruction responsibilities without assuming a one-to-one relationship between logical Pipeline roles and implementation artifacts.

The Agent Pipeline coordinates ALH behavior but does not replace the responsibilities of other architectural subsystems.

Prompt instructions representing Pipeline responsibilities MUST preserve the same boundary.

---

# 7. Architectural Ownership

Prompt Architecture is downstream from the ALH architecture.

It MUST respect existing ownership boundaries.

In particular:

- the Knowledge Graph owns educational knowledge relationships assigned to it by the architecture;
- the Competency Model owns competency semantics assigned to it by the architecture;
- the Memory Model owns learner-specific persistent educational state assigned to it by the architecture;
- the Decision Engine owns educational decision-making assigned to it by the architecture;
- the Agent Pipeline owns logical coordination responsibilities assigned to it by the architecture;
- Project Context owns applicable project information assigned to it by the architecture.

Instructions MAY consume information owned by these components.

Instructions MUST NOT silently acquire competing ownership.

The following principle applies:

```text
Context Consumption
        ≠
Semantic Ownership
```

An instruction that receives competency state, for example, MUST NOT redefine the competency-state model.

An instruction that receives educational decisions MUST NOT independently replace the Decision Engine unless such authority is explicitly assigned by the architecture.

---

# 8. Educational Methodology Boundary

Stage 2 defines how learning works in ALH.

Prompt Architecture defines how AI-agent instructions support that methodology.

The relationship is:

```text
Educational Methodology
        │
        ▼
Prompt Architecture Rules
        │
        ▼
Instruction Responsibilities
        │
        ▼
Future Prompt Artifacts
```

Stage 4 MUST NOT bypass this architecture layer by treating educational methodology as ready-made prompt text.

Prompt Architecture MUST preserve established educational semantics, including where applicable:

- competency-oriented learning;
- progressive independence;
- Socratic teaching;
- evidence-based assessment;
- competency evaluation;
- Learning Debt;
- Automation Level;
- quiz boundaries;
- Learning Unit completion.

The authoritative definitions remain in Stage 2 documents.

Stage 4 documents SHOULD reference those definitions rather than reproduce them.

Instruction responsibilities MAY constrain AI behavior in order to support the methodology.

They MUST NOT introduce competing educational states, evaluation criteria, progression rules, or definitions of mastery.

---

# 9. Development Methodology Boundary

Stage 4 is development work and is governed by the approved Development Methodology.

Prompt Architecture artifacts MUST therefore support:

- identifiable scope;
- responsibility clarity;
- reviewability;
- maintainability;
- verification;
- traceability;
- controlled change;
- proportional documentation.

Prompt Architecture SHOULD minimize duplicated semantics.

Existing authoritative definitions SHOULD be referenced rather than copied into multiple prompt-architecture documents.

Material changes MUST follow the applicable change-management and review requirements.

AI-generated Prompt Architecture documentation MUST be verified against authoritative project sources.

---

# 10. Instruction Composition

ALH instructions may require multiple responsibilities to participate in a single interaction.

Prompt Architecture MUST therefore support composition of instruction responsibilities without collapsing their ownership boundaries.

Composition SHOULD preserve:

- responsibility identity;
- normative authority;
- relevant context;
- educational constraints;
- engineering constraints;
- explainability.

Composition MUST NOT be treated as permission to merge unrelated semantic ownership.

Detailed composition rules are defined in:

`02-Instruction-Composition.md`

---

# 11. Instruction Precedence and Conflict

Applicable instructions may originate from different responsibilities or contexts.

Prompt Architecture MUST define deterministic principles for handling conflicts that materially affect ALH behavior.

Conflict handling MUST preserve upstream normative authority.

A lower-authority contextual or task instruction MUST NOT silently override an applicable architectural or methodological constraint.

Conflicts that reveal incompatible approved requirements MUST NOT be resolved by inventing new semantics.

They MUST instead be surfaced through the applicable development or architectural governance process.

Prompt Architecture precedence is a project-semantic concern.

It MUST NOT automatically be equated with vendor-specific message roles, API message ordering, or model-specific prompt behavior.

Detailed precedence and conflict rules are defined in:

`03-Instruction-Precedence-and-Conflict-Resolution.md`

---

# 12. Context Consumption

AI-agent instructions require context to act consistently with the current learner, project, task, and project baseline.

Prompt Architecture MUST therefore define how instruction responsibilities consume relevant context.

Context MAY include, where applicable:

- authoritative project information;
- architectural information;
- educational methodology;
- development constraints;
- learner-specific educational state;
- current project state;
- current task information;
- transient interaction information.

Prompt Architecture MUST distinguish:

```text
Authoritative Semantics
        ≠
Persisted State
        ≠
Project Context
        ≠
Transient Interaction Context
```

Instructions MUST NOT promote transient or uncertain information into authoritative project semantics.

Missing, stale, conflicting, or uncertain context MUST NOT be silently replaced with invented facts.

Detailed context responsibilities are defined in:

`04-Context-Model.md`

---

# 13. Educational Instruction Expression

Educational behavior requires an explicit bridge between Stage 2 methodology and AI-agent instructions.

Prompt Architecture MUST define that bridge without reimplementing the methodology itself.

Educational instruction responsibilities SHOULD make it possible for future prompt artifacts to:

- apply the required educational approach;
- respect learner independence;
- use appropriate educational evidence;
- preserve assessment boundaries;
- distinguish assessment from competency evaluation;
- preserve the meaning of Learning Debt;
- preserve the meaning of Automation Level;
- support explainable educational behavior.

The instruction layer MUST NOT interpret convenience as authority to simplify established educational semantics.

Detailed rules are defined in:

`05-Educational-Instruction-Model.md`

---

# 14. Prompt Artifacts

A prompt artifact is a concrete artifact that expresses one or more approved instruction responsibilities.

Prompt Architecture defines the contract that such artifacts MUST satisfy.

It does not assume that every responsibility requires a separate artifact.

Therefore:

```text
Instruction Responsibility
        │
        ├── MAY map to one artifact
        │
        ├── MAY participate in a composed artifact
        │
        └── MAY be represented through another
            architecture-compliant instruction structure
```

Prompt artifacts SHOULD have identifiable:

- responsibility;
- normative dependencies;
- context dependencies;
- composition relationships;
- authority boundaries;
- traceability.

Stage 4 MAY use abstract examples or structural illustrations where necessary to explain the architecture.

Stage 4 MUST NOT require production-ready wording merely to demonstrate an architectural concept.

The concrete materialization of production prompt artifacts belongs to Stage 5 unless explicitly established otherwise by an approved Stage 4 specification.

Detailed artifact requirements are defined in:

`06-Prompt-Artifact-Model.md`

---

# 15. Prompt Architecture and Runtime Implementation

Prompt Architecture MUST remain implementation-independent unless an implementation constraint is genuinely architectural.

Stage 4 MUST NOT prescribe, by default:

- programming language;
- model provider;
- AI API;
- prompt loader implementation;
- prompt registry implementation;
- runtime composition algorithm;
- storage mechanism;
- persistence backend;
- token budgeting algorithm;
- caching mechanism;
- orchestration framework;
- deployment mechanism.

Likewise, the following relationships MUST NOT be inferred automatically:

```text
Instruction Component
        ≠
Runtime Process

Pipeline Stage
        ≠
Model Call

Prompt Artifact
        ≠
Filesystem File

Context Source
        ≠
Retrieval Mechanism
```

Stage 5 is responsible for implementing the approved Prompt Architecture.

Implementation choices MUST satisfy Stage 4 contracts rather than redefine them.

---

# 16. Superpowers Boundary

Superpowers remains an immutable external dependency.

Prompt Architecture MAY define how ALH instruction responsibilities interact with capabilities exposed by Superpowers.

It MUST NOT:

- require modification of Superpowers;
- duplicate Superpowers-owned workflow responsibilities;
- transfer ALH educational responsibility into Superpowers;
- redefine Superpowers as part of the Prompt Architecture.

Integration SHOULD remain loosely coupled and preserve the architectural ownership boundary.

---

# 17. Application and Learning Infrastructure Boundary

Prompt Architecture belongs to ALH learning infrastructure.

ALH prompt-related artifacts MUST remain within the learning-infrastructure responsibility boundary established by the architecture and ADR-001.

Prompt Architecture MUST NOT move ALH educational instruction responsibilities into application implementation space.

Likewise, application-specific implementation artifacts MUST NOT become hidden owners of ALH educational semantics.

---

# 18. Explainability

Prompt Architecture SHOULD support explainable AI-agent behavior.

Instruction responsibilities SHOULD be structured so that material ALH behavior can be traced to applicable:

- architectural responsibilities;
- educational methodology;
- development constraints;
- relevant context;
- explicit task requirements.

Prompt composition MUST NOT intentionally create hidden authority or unexplained semantic overrides.

Explainability does not require disclosure of private model reasoning.

It requires that significant externally relevant decisions remain attributable to understandable project rules, evidence, context, and responsibilities.

---

# 19. Compliance and Traceability

Material Prompt Architecture responsibilities SHOULD remain traceable to their applicable authoritative sources.

Traceability MUST NOT become an independent source of truth.

Prompt Architecture compliance includes, where applicable:

- preservation of architectural ownership;
- preservation of educational semantics;
- preservation of development constraints;
- responsibility isolation;
- context-boundary compliance;
- composition compliance;
- conflict-handling compliance;
- prompt-artifact contract compliance.

Stage 4 MAY define properties and evidence that later verification can inspect.

Stage 4 MUST NOT declare final Harness validation successful.

Detailed Prompt Architecture compliance and traceability requirements are defined in:

`07-Prompt-Architecture-Compliance-and-Traceability.md`

---

# 20. Change Governance

Prompt Architecture may expose ambiguities or limitations in upstream architecture or methodology.

Such findings MUST be classified appropriately.

## Observation

A factual or analytical finding that does not itself change approved architecture.

## Candidate ADR

A proposed change to an accepted architectural responsibility, boundary, dependency, principle, or long-term structural decision.

A Candidate ADR MUST NOT be treated as accepted until explicitly approved.

## Future Evolution

A potentially useful extension or refinement that is intentionally deferred beyond the current scope.

Prompt Architecture MUST NOT be used to introduce upstream changes silently through prompt wording or instruction structure.

---

# 21. Stage 4 Document Structure

The Prompt Architecture is further specified by the following documents:

```text
00-Prompt-Architecture.md
        │
        ▼
01-Instruction-Responsibility-Model.md
        │
        ├──────────────────────┐
        ▼                      ▼
02-Instruction-Composition.md  04-Context-Model.md
        │                      │
        ▼                      │
03-Instruction-Precedence-     │
and-Conflict-Resolution.md     │
        │                      │
        └──────────┬───────────┘
                   ▼
05-Educational-Instruction-Model.md
                   │
                   ▼
06-Prompt-Artifact-Model.md
                   │
                   ▼
07-Prompt-Architecture-Compliance-and-Traceability.md
```

Each document MUST preserve a distinct primary responsibility.

Downstream documents SHOULD reference upstream Stage 4 definitions rather than reproduce them.

---

# 22. Non-Goals

Prompt Architecture does not:

- redesign ALH architecture;
- redefine the Agent Pipeline;
- redefine educational methodology;
- redefine development methodology;
- implement the Harness;
- implement persistence;
- implement runtime orchestration;
- select a model provider;
- select an AI API;
- require one physical agent per Pipeline role;
- require one prompt artifact per Pipeline role;
- create application implementation;
- modify Superpowers;
- perform Stage 6 validation.

Prompt Architecture MUST remain focused on the architecture of AI-agent instructions and their responsibilities.

---

# 23. Architectural Constraints

Prompt Architecture MUST:

- preserve educational integrity;
- preserve engineering quality;
- preserve explainability;
- preserve architectural ownership;
- preserve Stage 2 educational semantics;
- comply with Stage 3 development discipline;
- maintain application and learning-infrastructure separation;
- remain compatible with unmodified Superpowers;
- distinguish logical responsibilities from physical implementation;
- avoid unsupported assumptions;
- minimize semantic duplication;
- support controlled evolution.

Prompt Architecture MUST NOT optimize automation at the expense of educational integrity or engineering quality.

---

# 24. Summary

ALH Prompt Architecture defines the structural layer through which approved project semantics are expressed to AI agents.

Its central relationship is:

```text
Approved Project Semantics
        ↓
Instruction Responsibilities
        ↓
Composition and Context
        ↓
Prompt Artifact Contracts
        ↓
Harness Implementation
```

Prompt Architecture does not own the architecture, methodology, state, or runtime mechanisms it references.

Its responsibility is to make those upstream responsibilities expressible through coherent, bounded, traceable, and implementation-independent AI-agent instructions.

The next document defines the ownership and separation of those instruction responsibilities:

`01-Instruction-Responsibility-Model.md`
