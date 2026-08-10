# Instruction Composition

Version: 0.1 Draft

Parent Documents

- 00-Prompt-Architecture.md
- 01-Instruction-Responsibility-Model.md

Related Documents

- 04-Agent-Pipeline.md
- 03-System-Architecture.md
- 00-Learning-Model.md
- 00-Development-Methodology.md

---

# 1. Purpose

This document defines how compatible AI Learning Harness (ALH) instruction responsibilities may be composed into coherent instruction structures.

Instruction composition allows multiple bounded responsibilities to participate in the same AI-assisted interaction without collapsing their ownership, authority, or semantic boundaries.

This document defines semantic composition.

It does not define:

- runtime prompt assembly;
- model invocation structure;
- filesystem organization;
- prompt loading;
- token allocation;
- context retrieval implementation;
- vendor-specific message roles;
- conflict-resolution policy.

Conflict and precedence are defined separately in `03-Instruction-Precedence-and-Conflict-Resolution.md`.

---

# 2. Composition Principle

ALH interactions may require multiple instruction responsibilities simultaneously.

Composition provides a controlled way to combine those responsibilities.

Conceptually:

```text
Instruction Responsibility A
            +
Instruction Responsibility B
            +
Instruction Responsibility C
            │
            ▼
Compatible Instruction Structure
            │
            ▼
AI-Agent Behavior
```

Composition MUST preserve the identity and authority boundaries of participating responsibilities.

Composition MUST NOT create new semantic authority merely through combination.

Therefore:

```text
A + B
  ≠
New Unbounded Authority
```

The composed structure remains constrained by the authority of its constituent responsibilities and their upstream normative sources.

---

# 3. Composition Unit

The unit of composition is an instruction responsibility or an instruction component representing a bounded responsibility.

A composition unit SHOULD have:

- an identifiable responsibility;
- an identifiable normative basis;
- a bounded authority;
- defined context needs where applicable;
- known relationships to neighboring responsibilities;
- sufficient independence to be composed without redefining unrelated semantics.

A composition unit is not necessarily:

- a file;
- a complete prompt;
- a Pipeline role;
- a model message;
- a model invocation;
- a runtime module.

The physical representation of a composition unit belongs to later design or implementation decisions.

---

# 4. Composition Objectives

Instruction composition SHOULD support:

- responsibility reuse;
- semantic consistency;
- reduced duplication;
- clear authority;
- contextual adaptation;
- educational integrity;
- engineering quality;
- explainability;
- maintainability;
- traceability.

Composition SHOULD allow ALH to apply the smallest coherent set of responsibilities necessary for an interaction.

Composition SHOULD NOT require unrelated responsibilities merely because they are available.

---

# 5. Composition Eligibility

Instruction responsibilities MAY be composed when they are relevant to the same interaction and can operate without violating each other's authority boundaries.

Composition eligibility SHOULD consider:

- task relevance;
- Pipeline responsibility relevance;
- required educational behavior;
- required engineering behavior;
- applicable cross-cutting constraints;
- required context;
- known responsibility dependencies.

A responsibility MUST NOT participate in a composition solely because its corresponding Pipeline role exists.

Not every ALH interaction requires every Pipeline responsibility.

This preserves the architectural principle that the Agent Pipeline is adaptive rather than a mandatory fixed execution sequence.

---

# 6. Responsibility Preservation

Composition MUST preserve each participating responsibility as conceptually distinguishable.

For a composed structure:

```text
Responsibility A
        +
Responsibility B
        +
Responsibility C
```

it SHOULD remain possible to determine:

- why A applies;
- why B applies;
- why C applies;
- what each responsibility is allowed to do;
- which result or constraint belongs to which responsibility where materially relevant.

Physical consolidation MUST NOT erase conceptual responsibility boundaries.

A single prompt artifact MAY express several responsibilities.

A single model invocation MAY execute several responsibilities.

Neither condition changes the underlying responsibility model.

---

# 7. Composition Layers

Instruction composition MAY involve responsibilities with different scopes.

A useful conceptual distinction is:

```text
Foundational Constraints
        ↓
Shared ALH Responsibilities
        ↓
Role-Related Responsibilities
        ↓
Interaction-Specific Responsibilities
        ↓
Task-Specific Instructions
```

This model describes semantic scope, not mandatory physical prompt layers.

## 7.1 Foundational Constraints

Foundational constraints preserve project-wide requirements such as:

- architectural boundaries;
- educational integrity;
- engineering quality;
- applicable security principles;
- uncertainty handling;
- prohibited authority transfer.

They SHOULD remain stable across applicable interactions.

## 7.2 Shared ALH Responsibilities

Shared responsibilities apply across multiple logical roles or interaction types.

They MAY include:

- explainability requirements;
- traceability expectations;
- educational safeguards;
- engineering safeguards;
- common interaction constraints.

## 7.3 Role-Related Responsibilities

Role-related responsibilities express bounded responsibilities associated with one or more logical Agent Pipeline roles.

They MUST remain constrained by the Instruction Responsibility Model.

## 7.4 Interaction-Specific Responsibilities

Interaction-specific responsibilities apply because of the current educational or engineering interaction.

They SHOULD be included only where relevant.

## 7.5 Task-Specific Instructions

Task-specific instructions describe the immediate requested work.

They operate within all applicable upstream constraints.

Task-specific instructions MUST NOT acquire authority to override architectural or methodological requirements merely because they are more specific.

Detailed conflict handling belongs to `03-Instruction-Precedence-and-Conflict-Resolution.md`.

---

# 8. Composition Is Not Precedence

Composition and precedence are separate concerns.

Composition asks:

> Which compatible instruction responsibilities should participate together?

Precedence asks:

> What happens when applicable instructions cannot all be satisfied consistently?

Therefore:

```text
Composition
    ≠
Conflict Resolution
```

This document assumes that participating responsibilities are compatible or can coexist without material contradiction.

Where a material contradiction exists, the composition process MUST defer to the conflict model defined in `03-Instruction-Precedence-and-Conflict-Resolution.md`.

Composition MUST NOT hide conflicts by silently dropping or rewriting instructions.

---

# 9. Composition Is Not Context Selection

Instruction composition determines which responsibilities participate.

Context selection determines which information those responsibilities may consume.

Therefore:

```text
Responsibility Selection
        ≠
Context Selection
```

A responsibility being part of a composition does not automatically authorize access to all available ALH context.

Context access MUST remain bounded by semantic relevance and applicable ownership rules.

Detailed context rules belong to `04-Context-Model.md`.

---

# 10. Composition Is Not Runtime Assembly

Semantic composition describes relationships among instruction responsibilities.

Runtime assembly describes how implementation artifacts are physically or programmatically combined for execution.

Therefore:

```text
Semantic Composition
        ≠
Runtime Prompt Assembly
```

Stage 4 MAY define requirements that runtime assembly MUST preserve.

Stage 4 MUST NOT prescribe the implementation mechanism merely to realize semantic composition.

Stage 5 MAY implement composition using:

- one prompt artifact;
- several prompt artifacts;
- generated instructions;
- model messages;
- configuration-driven assembly;
- another architecture-compliant mechanism.

The implementation MUST preserve the approved semantic composition model.

---

# 11. Minimal Composition

ALH SHOULD prefer the smallest composition that fully satisfies the applicable responsibilities.

Conceptually:

```text
Required Responsibilities
        ↓
Minimal Sufficient Composition
```

Minimal composition reduces:

- irrelevant instruction load;
- accidental authority overlap;
- semantic duplication;
- unnecessary coupling;
- maintenance burden;
- ambiguity about responsibility.

Minimal composition MUST NOT be interpreted as permission to omit an applicable safeguard or required responsibility.

The goal is:

> no unnecessary responsibility, and no required responsibility omitted.

---

# 12. Shared Constraints

Cross-cutting constraints SHOULD be represented in a way that avoids unnecessary repetition across role-specific instructions.

A shared constraint MAY participate in multiple compositions.

Examples include applicable requirements for:

- educational integrity;
- engineering quality;
- security;
- explainability;
- uncertainty handling;
- architectural compliance.

Shared constraints MUST remain bounded.

A shared instruction component MUST NOT become a miscellaneous container for unrelated project rules.

Where an authoritative definition already exists upstream, the shared responsibility SHOULD reference or operationalize that definition rather than redefine it.

---

# 13. Role Composition

A logical Pipeline role MAY require several instruction responsibilities.

For example:

```text
Teacher
  │
  ├── Educational Interaction Responsibility
  ├── Socratic Guidance Responsibility
  ├── Independence Preservation Responsibility
  └── Applicable Shared Constraints
```

This is a conceptual illustration.

It does not establish new educational semantics or require four separate prompt artifacts.

Likewise, several logical roles MAY participate in one interaction:

```text
Architect Responsibility
        +
Teacher Responsibility
        +
Reviewer Responsibility
        +
Shared Constraints
```

where the interaction legitimately requires architectural guidance, educational support, and review.

Composition MUST preserve the distinct authority of each role-related responsibility.

---

# 14. Educational Composition

Educational interactions may require several Stage 2 concerns to be expressed simultaneously.

For example, an interaction may require:

- Socratic guidance;
- Automation Level constraints;
- assessment boundaries;
- competency-relevant evidence handling.

These concerns MAY participate in one instruction composition.

Their composition MUST preserve their methodological independence.

In particular:

```text
Competency State
        ≠
Automation Level
        ≠
Learning Debt
```

Composition MUST NOT collapse these concepts into a single convenience score, instruction, or decision criterion.

Detailed educational instruction rules belong to `05-Educational-Instruction-Model.md`.

---

# 15. Engineering Composition

Engineering interactions may require multiple responsibilities such as:

- development;
- architecture guidance;
- review;
- security review;
- educational support.

These responsibilities MAY be composed where relevant.

Engineering composition MUST preserve:

- architectural constraints;
- engineering quality;
- applicable testing expectations;
- applicable review responsibilities;
- educational integrity.

A Developer-related responsibility MUST NOT absorb Reviewer responsibility merely because the same model can review its own output.

Where independent review is methodologically required, semantic composition MUST preserve that distinction even if Stage 5 later chooses a consolidated execution mechanism.

---

# 16. Security Composition

Security may appear both as:

- a cross-cutting constraint;
- a dedicated Security Auditor responsibility.

These forms MAY coexist.

For example:

```text
Developer Responsibility
        +
Shared Security Constraints
        +
Security Auditor Responsibility
```

does not imply duplication if the responsibilities differ.

Shared security constraints preserve applicable security behavior during work.

Security Auditor responsibility provides dedicated security-oriented analysis or review.

Composition MUST preserve that distinction.

The presence of a Security Auditor MUST NOT cause other responsibilities to ignore applicable security constraints.

---

# 17. Assessment Composition

Educational assessment may require cooperation among several responsibilities.

For example:

```text
Teacher
    ↓
Learning Interaction

Assessor
    ↓
Evidence Production / Assessment

Decision Authority
    ↓
Competency Interpretation
```

These responsibilities MAY be executed within one broader interaction.

Composition MUST preserve their methodological separation.

A composed artifact MUST NOT treat evidence production, assessment, and competency evaluation as interchangeable merely because they appear together.

---

# 18. Memory Composition

Memory-related responsibilities may participate in interactions requiring learner continuity.

For example:

```text
Relevant Learner Context
        ↓
Teaching / Assessment Interaction
        ↓
Memory-Relevant Observation
        ↓
Memory Responsibility
```

Composition MAY allow memory-related responsibilities to consume bounded results from other responsibilities.

It MUST NOT allow memory handling to redefine the semantics of those results.

A proposed memory update remains distinct from persisted authoritative learner state.

Runtime persistence belongs to Stage 5.

---

# 19. Response Composition

Response generation may consume outputs from several participating responsibilities.

Conceptually:

```text
Intent Result
        +
Educational Result
        +
Engineering Result
        +
Review Result
        +
Applicable Constraints
        ↓
Response Responsibility
        ↓
Coherent User-Facing Response
```

The Response Generator MAY synthesize these bounded results.

It MUST NOT erase material distinctions between them.

Composition for response generation MUST preserve:

- uncertainty;
- decision status;
- evidence status;
- architectural status;
- educational status;
- unresolved conflicts.

Presentation synthesis MUST NOT become semantic rewriting.

---

# 20. Dependency-Aware Composition

Some responsibilities depend on results produced by others.

Composition SHOULD preserve such semantic dependencies.

For example:

```text
Intent Interpretation
        ↓
Relevant Responsibility Selection
        ↓
Educational / Engineering Work
        ↓
Review or Assessment
        ↓
Response
```

This dependency structure does not require a fixed runtime pipeline.

A Stage 5 implementation MAY execute compatible responsibilities using different orchestration mechanisms.

However, it MUST NOT violate a semantic dependency merely because parallel or consolidated execution is technically possible.

---

# 21. Conditional Composition

Instruction responsibilities MAY be conditionally applicable.

Conditional applicability MAY depend on factors such as:

- user intent;
- current task;
- educational objective;
- learner state;
- required engineering activity;
- security relevance;
- assessment need;
- review need;
- memory relevance.

Prompt Architecture SHOULD support conditional responsibility inclusion.

It MUST NOT define the runtime mechanism used to evaluate those conditions unless that mechanism is itself an approved architectural responsibility.

The existence of conditional composition does not transfer Decision Engine authority into prompt assembly.

---

# 22. Composition and the Decision Engine

The Decision Engine owns educational decision-making assigned to it by the architecture.

Instruction composition MAY depend on decisions or direction supplied through that responsibility.

Composition MUST NOT silently become a competing Decision Engine.

For example, selecting an applicable educational instruction responsibility MAY require an educational decision.

Where such a decision belongs to the Decision Engine, Prompt Architecture MUST preserve that ownership.

A future runtime assembler MUST NOT acquire semantic decision authority merely because it technically selects prompt components.

This distinction is critical:

```text
Selecting a Component Mechanically
        ≠
Owning the Educational Decision
That Makes the Component Applicable
```

---

# 23. Composition and the Agent Pipeline

The Agent Pipeline provides logical coordination.

Instruction composition provides semantic combination of applicable instruction responsibilities.

These concepts are related but distinct.

```text
Agent Pipeline
        │
        │ identifies logical responsibilities
        ▼
Instruction Responsibility Model
        │
        │ defines bounded instruction responsibilities
        ▼
Instruction Composition
        │
        │ combines applicable responsibilities
        ▼
Future Prompt Artifacts / Runtime
```

Prompt composition MUST NOT redefine Pipeline responsibilities.

Likewise, the Pipeline MUST NOT be interpreted as requiring one composition component per role.

---

# 24. Composition Reuse

Instruction components SHOULD be reusable where the same bounded responsibility applies across multiple interactions.

Reuse SHOULD reduce semantic duplication.

Reuse MUST NOT create inappropriate coupling.

A reusable component SHOULD:

- have a stable responsibility;
- have bounded authority;
- avoid interaction-specific assumptions unless explicitly parameterized by context;
- remain independently understandable;
- remain traceable to authoritative requirements.

Reuse SHOULD NOT be pursued where it makes responsibility boundaries less clear.

---

# 25. Composition Coupling

Instruction responsibilities SHOULD remain loosely coupled where practical.

A responsibility SHOULD depend only on information or bounded results that it actually requires.

Composition SHOULD avoid unnecessary assumptions about:

- another responsibility's internal wording;
- physical prompt layout;
- runtime invocation count;
- model provider;
- persistence mechanism;
- file naming.

Semantic contracts SHOULD be preferred over implementation coupling.

This allows Stage 5 implementation to evolve without changing Stage 4 responsibility semantics.

---

# 26. Composition Stability

Prompt Architecture SHOULD distinguish stable instruction responsibilities from volatile interaction information.

Stable responsibilities include durable project rules and bounded role responsibilities.

Volatile information may include:

- current task details;
- transient interaction state;
- current project observations;
- temporary evidence;
- current learner-relevant context.

Volatile information SHOULD be supplied as context rather than copied into durable responsibility definitions where possible.

This separation improves:

- maintainability;
- traceability;
- consistency;
- context freshness;
- change control.

Detailed context classification belongs to `04-Context-Model.md`.

---

# 27. Composition Explainability

A material composition SHOULD be explainable at the project level.

Where relevant, it SHOULD be possible to determine:

- which responsibilities participated;
- why they were applicable;
- what authority each possessed;
- which upstream requirements constrained them;
- which significant dependencies existed.

Explainability does not require exposure of private model reasoning.

It requires architectural traceability of responsibility participation.

---

# 28. Composition Failure

A valid composition may not always be possible.

Composition MUST NOT proceed as if successful when:

- required responsibilities materially conflict;
- required authoritative context is unavailable;
- responsibility authority is ambiguous;
- an applicable upstream requirement cannot be satisfied;
- a proposed composition would violate architectural ownership.

Such conditions SHOULD be surfaced to the appropriate conflict, context, development, or governance mechanism.

Composition failure MUST NOT be hidden through invented assumptions.

---

# 29. Composition Anti-Patterns

Prompt Architecture MUST avoid the following composition anti-patterns.

## 29.1 Monolithic Global Prompt

Combining unrelated project semantics into one unrestricted instruction block without responsibility boundaries.

## 29.2 Pipeline Dump

Including every Pipeline responsibility in every interaction regardless of relevance.

## 29.3 Role Concatenation

Treating composition as simple concatenation of role prompts without considering semantic compatibility or authority.

## 29.4 Hidden Responsibility Merge

Combining responsibilities in a way that makes their distinct ownership impossible to identify.

## 29.5 Context-as-Instruction Duplication

Copying volatile context into durable instruction definitions.

## 29.6 Composition-as-Decision-Engine

Using prompt-component selection to silently perform educational decisions owned elsewhere.

## 29.7 Implementation-Driven Composition

Defining semantic composition around a specific API, model-message format, loader, framework, or filesystem layout.

## 29.8 Conflict Suppression

Silently omitting an instruction because it conflicts with another instruction.

## 29.9 Maximum Composition

Including all available responsibilities merely to appear comprehensive.

---

# 30. Composition Rules

Instruction composition MUST satisfy the following rules:

1. Only relevant responsibilities SHOULD participate.
2. All required responsibilities MUST remain represented.
3. Composition MUST preserve responsibility identity.
4. Composition MUST preserve authority boundaries.
5. Composition MUST NOT create new semantic authority.
6. Shared constraints SHOULD reduce justified duplication.
7. Composition SHOULD remain minimal and sufficient.
8. Context access MUST remain bounded independently of composition.
9. Material conflicts MUST NOT be silently resolved through composition.
10. Semantic dependencies MUST be preserved.
11. Runtime consolidation MUST NOT collapse conceptual responsibilities.
12. Composition MUST remain implementation-independent unless an implementation constraint is explicitly architectural.
13. Educational decisions MUST remain with their approved owner.
14. Composition SHOULD remain traceable and explainable.
15. Missing information MUST NOT be replaced with invented semantics.

---

# 31. Relationship to Subsequent Documents

This document defines how compatible instruction responsibilities may be combined.

It intentionally does not define conflict resolution.

The next document defines:

- instruction authority relationships;
- precedence principles;
- conflict identification;
- conflict handling;
- unresolved conflict escalation.

That responsibility belongs to:

`03-Instruction-Precedence-and-Conflict-Resolution.md`

Context authority and context consumption remain the responsibility of:

`04-Context-Model.md`

Educational composition semantics remain constrained by:

`05-Educational-Instruction-Model.md`

Concrete prompt artifact contracts remain the responsibility of:

`06-Prompt-Artifact-Model.md`

---

# 32. Summary

Instruction Composition allows ALH to combine multiple bounded AI-agent instruction responsibilities without creating an uncontrolled monolithic prompt architecture.

Its core model is:

```text
Applicable Responsibilities
        ↓
Compatibility
        ↓
Minimal Sufficient Composition
        ↓
Preserved Responsibility Boundaries
        ↓
Coherent Instruction Structure
```

Composition preserves the distinctions:

```text
Composition
    ≠ Precedence

Composition
    ≠ Context Selection

Composition
    ≠ Runtime Assembly

Composition
    ≠ Decision Authority

Multiple Responsibilities
    ≠ New Unbounded Responsibility
```

This allows ALH to express adaptive combinations of Pipeline, educational, engineering, security, memory, assessment, and response responsibilities while preserving the architecture and methodologies that own their semantics.

The next document defines what happens when applicable instructions cannot be satisfied consistently:

`03-Instruction-Precedence-and-Conflict-Resolution.md`
