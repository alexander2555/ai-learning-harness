# Context Model

Version: 0.1 Draft

Parent Documents

- 00-Prompt-Architecture.md
- 01-Instruction-Responsibility-Model.md
- 03-Instruction-Precedence-and-Conflict-Resolution.md

Related Documents

- 03-System-Architecture.md
- 04-Agent-Pipeline.md
- 00-Learning-Model.md
- 00-Development-Methodology.md

---

# 1. Purpose

This document defines the Context Model for AI Learning Harness (ALH) instruction responsibilities.

It establishes how AI-agent instructions may consume relevant information without confusing context access with semantic ownership.

The Context Model defines:

- context categories;
- context authority;
- context provenance;
- context relevance;
- context freshness;
- missing and uncertain context handling;
- context-consumption boundaries;
- relationships between context and instruction responsibilities.

This document defines semantic context handling.

It does not define:

- persistence implementation;
- retrieval implementation;
- filesystem loading;
- databases;
- vector stores;
- embedding strategies;
- retrieval-augmented generation mechanisms;
- runtime context assembly;
- token budgeting.

Those concerns belong to Stage 5 unless explicitly established as architectural constraints elsewhere.

---

# 2. Context Principle

Instruction responsibilities require information in order to act consistently with ALH architecture, methodology, learner state, project state, and current interaction.

Context provides that information.

Context MUST remain distinct from the authority that owns its semantics.

Therefore:

```text
Context Access
    ≠
Semantic Ownership

Context Copy
    ≠
Authoritative State

Prompt Inclusion
    ≠
Source of Truth
```

An instruction responsibility MAY consume context.

It MUST NOT become the owner of that context merely because the information is available to it.

---

# 3. Context as a Bounded Input

Context is a bounded input to an instruction responsibility.

A responsibility SHOULD consume only the information necessary to perform its approved purpose.

Conceptually:

```text
Authoritative / Relevant Sources
        ↓
Bounded Context
        ↓
Instruction Responsibility
        ↓
Bounded Behavior or Result
```

Context SHOULD be selected according to semantic relevance rather than maximum availability.

The presence of information in ALH does not automatically justify exposing it to every instruction responsibility.

---

# 4. Context Categories

The Context Model distinguishes several conceptual context categories.

These categories describe semantic responsibility.

They do not require distinct physical storage mechanisms.

## 4.1 Normative Project Context

Normative Project Context contains accepted project rules and decisions relevant to the current responsibility.

It MAY include:

- accepted architecture;
- accepted ADRs;
- educational methodology;
- development methodology;
- approved Prompt Architecture.

This context constrains behavior.

It MUST NOT be treated as transient conversational information.

---

## 4.2 Learner Context

Learner Context contains learner-specific educational information relevant to the current interaction.

It MAY include:

- competency state;
- competency progression history;
- relevant learning evidence;
- learner-specific educational observations;
- current Automation Level;
- Learning Debt where applicable;
- prior learning continuity.

Learner Context MUST remain compatible with the Memory Model and other approved educational ownership boundaries.

Prompt Architecture does not redefine those semantics.

---

## 4.3 Project Context

Project Context contains information about the application or engineering project relevant to the current task.

It MAY include:

- project structure;
- technology choices;
- current architectural decisions;
- project requirements;
- development status;
- relevant code or documentation state;
- current constraints.

Project Context MUST remain distinct from ALH architecture.

Application architecture and ALH architecture MUST NOT be conflated.

---

## 4.4 Task Context

Task Context contains information specific to the current requested work.

It MAY include:

- current user goal;
- immediate task scope;
- requested output;
- applicable constraints;
- current engineering problem;
- current educational objective.

Task Context is bounded and transient unless explicitly promoted through an approved ownership process.

---

## 4.5 Interaction Context

Interaction Context contains information produced or observed during the current conversational or execution interaction.

It MAY include:

- recent clarification;
- current intermediate results;
- temporary assumptions;
- unresolved questions;
- current feedback;
- bounded outputs from other instruction responsibilities.

Interaction Context is generally transient.

It MUST NOT automatically become persistent learner or project state.

---

## 4.6 Evidence Context

Evidence Context contains evidence relevant to engineering or educational decisions.

It MAY include:

- test results;
- review findings;
- learner explanations;
- learner implementation results;
- assessment observations;
- security findings;
- validation-relevant observations.

Evidence Context MUST preserve the distinction between:

```text
Engineering Evidence
        ≠
Educational Evidence
```

and between:

```text
Evidence
        ≠
Interpretation
```

Where another responsibility owns interpretation, context consumers MUST preserve that boundary.

---

# 5. Context Authority

Context authority describes how strongly a context item may be relied upon for a particular semantic question.

Authority depends on:

- source ownership;
- provenance;
- acceptance status;
- applicability;
- freshness;
- evidence quality.

Authority MUST be responsibility-scoped.

A context source authoritative for one question MAY be irrelevant or non-authoritative for another.

For example:

- an ADR may be authoritative for an architectural decision;
- learner memory may be authoritative for previously persisted learner state;
- a current test result may provide stronger evidence about present software behavior;
- transient user statements may define the current task but do not redefine accepted architecture.

Context authority MUST follow the ownership model defined by upstream documents.

---

# 6. Context Provenance

Material context SHOULD have identifiable provenance where practical.

Provenance answers:

> Where did this information come from?

Possible provenance includes:

- approved repository document;
- accepted ADR;
- learner memory;
- project artifact;
- source code;
- test result;
- user instruction;
- prior bounded Pipeline result;
- current observation.

Provenance SHOULD be preserved when it materially affects:

- authority;
- freshness;
- evidence quality;
- conflict resolution;
- traceability.

Unknown provenance reduces confidence.

Unknown provenance MUST NOT be silently treated as authoritative provenance.

---

# 7. Context Relevance

Instruction responsibilities SHOULD consume only context relevant to their bounded purpose.

Relevance depends on:

- responsibility;
- current task;
- educational objective;
- project scope;
- learner state;
- applicable constraints.

A context item SHOULD NOT be included merely because it is available.

Over-broad context can cause:

- responsibility leakage;
- irrelevant reasoning;
- accidental semantic override;
- stale information use;
- prompt coupling;
- unnecessary implementation cost.

The preferred principle is:

```text
Relevant Context
    >
Maximum Context
```

where `>` means preferable for bounded instruction design, not greater semantic authority.

---

# 8. Context Minimization

ALH SHOULD minimize context to what is sufficient for correct bounded behavior.

Context minimization supports:

- clarity;
- responsibility isolation;
- maintainability;
- privacy where applicable;
- reduced accidental coupling;
- lower risk of irrelevant instruction influence.

Context minimization MUST NOT omit information necessary to satisfy an applicable architectural, educational, engineering, or security constraint.

The objective is:

> sufficient context, not maximum context.

---

# 9. Context Freshness

Some context changes over time.

Freshness SHOULD be considered where stale information could materially affect behavior.

Examples include:

- current project state;
- learner state;
- active task requirements;
- test results;
- repository content;
- development status.

Freshness MUST NOT be inferred from presentation order alone.

A newer-looking prompt fragment is not necessarily fresher or more authoritative.

Where context freshness cannot be confirmed and freshness matters, the uncertainty SHOULD remain explicit.

---

# 10. Normative Stability and Freshness

Normative project documents differ from volatile project state.

Accepted architecture or methodology remains authoritative until changed through the applicable governance process.

Therefore:

```text
Newer Transient Context
    ≠
Newer Normative Authority
```

A recent conversation statement MUST NOT silently supersede an accepted ADR or approved methodology.

Normative change requires applicable approval or governance.

---

# 11. Missing Context

Required context may be unavailable.

When material context is missing, an instruction responsibility MUST NOT invent it.

Depending on the responsibility, valid handling MAY include:

- continuing with explicitly bounded assumptions;
- requesting clarification;
- restricting the result;
- preserving uncertainty;
- deferring a decision;
- escalating to another responsibility;
- identifying a verification need.

The response SHOULD remain proportional to the importance of the missing context.

Minor missing details SHOULD NOT unnecessarily block otherwise safe and valid work.

---

# 12. Uncertain Context

Context may be present but uncertain.

Examples include:

- ambiguous learner state;
- incomplete project status;
- unverified repository information;
- contradictory evidence;
- uncertain architectural interpretation.

Uncertain context MUST NOT be silently converted into certainty.

Instruction responsibilities SHOULD distinguish:

```text
Known
    ≠
Inferred
    ≠
Assumed
    ≠
Unknown
```

Material inference SHOULD remain identifiable where practical.

---

# 13. Conflicting Context

Two context sources may disagree.

Conflict MUST be handled according to:

- responsibility ownership;
- provenance;
- freshness;
- acceptance status;
- evidence strength;
- applicable precedence rules.

A context conflict MUST NOT be resolved solely by:

- textual order;
- prompt location;
- apparent confidence;
- convenience;
- verbosity.

Detailed semantic conflict handling is defined in:

`03-Instruction-Precedence-and-Conflict-Resolution.md`

---

# 14. Context and the Memory Model

Learner-specific persistent educational state belongs to the Memory Model.

Prompt Architecture MAY define how instruction responsibilities consume learner context.

It MUST NOT redefine Memory Model ownership.

Therefore:

```text
Memory State
    ↓
Learner Context
    ↓
Instruction Responsibility
```

is valid.

But:

```text
Instruction Local State
    ↓
Automatically Becomes Memory
```

is not valid.

A memory-relevant observation MAY become a proposed memory update.

Persistence or acceptance of that update remains subject to the approved Memory responsibility and Stage 5 implementation.

---

# 15. Context and the Competency Model

Competency information MAY be included in Learner Context where relevant.

Instruction responsibilities MAY use that information to adapt behavior.

They MUST NOT:

- invent new competency states;
- redefine state transitions;
- collapse competency state into Automation Level;
- collapse competency state into Learning Debt;
- infer mastery merely from prompt-local evidence unless the approved evaluation process supports it.

Competency Context is consumed.

Competency semantics remain owned upstream.

---

# 16. Context and the Decision Engine

Instruction responsibilities MAY consume:

- educational direction;
- prioritization;
- selected learning strategy;
- other bounded decisions produced through Decision Engine responsibility.

They MUST NOT treat raw context access as equivalent to Decision Engine authority.

For example:

```text
Learner Context
        +
Task Context
        ≠
Automatic Authority
to Make Any Educational Decision
```

Where the architecture assigns a decision to the Decision Engine, context availability does not transfer that authority to a prompt component.

---

# 17. Context and the Agent Pipeline

Different Pipeline responsibilities may require different context.

For example:

- Intent Analyzer may require current user intent and interaction context.
- Architect may require relevant architecture and project context.
- Teacher may require learner context and educational methodology.
- Developer may require project and task context.
- Reviewer may require artifacts, requirements, and evidence.
- Assessor may require educational objective and assessment evidence.
- Memory Manager may require memory-relevant observations and existing learner state.

These examples illustrate context relevance.

They MUST NOT be interpreted as exhaustive runtime schemas.

Context SHOULD follow responsibility need.

Pipeline role existence alone does not authorize unrestricted context access.

---

# 18. Context Sharing Between Responsibilities

A responsibility MAY produce a bounded result that becomes context for another responsibility.

Conceptually:

```text
Responsibility A
        ↓
Bounded Result
        ↓
Context for Responsibility B
```

The receiving responsibility MUST preserve the semantic status of the result.

For example:

- a recommendation remains a recommendation;
- a review finding remains a review finding;
- an observation remains an observation;
- a proposed decision remains unapproved unless approval exists.

Context transfer MUST NOT promote the result into a stronger semantic category.

---

# 19. Derived Context

Instruction responsibilities MAY derive information from authoritative or relevant context.

Derived context SHOULD preserve its derivation status.

For example:

```text
Observed Facts
        ↓
Inference
```

The inference MUST NOT automatically be represented as an observed fact.

Where the inference materially affects a decision, its uncertainty and basis SHOULD remain available to the applicable responsibility.

Derived context MUST NOT become an independent source of truth.

---

# 20. Context Promotion

Some transient information may need to become durable project or learner state.

Prompt Architecture MUST treat this as an explicit ownership transition, not an automatic side effect.

Conceptually:

```text
Transient Observation
        ↓
Proposed State Update
        ↓
Applicable Owner / Validation
        ↓
Durable State
```

The exact implementation belongs to Stage 5.

The semantic boundary belongs to the approved architectural owner.

Examples include:

- learner-memory updates;
- accepted project decisions;
- accepted ADRs;
- durable project configuration.

Prompt-local presence MUST NOT bypass this transition.

---

# 21. Authoritative Project Documents

Approved project documents are authoritative within their responsibility boundaries.

Instruction responsibilities SHOULD reference relevant authoritative documents rather than rely on copied fragments where practical.

Copied context creates risks of:

- staleness;
- semantic drift;
- duplicated authority;
- inconsistent revisions.

Where copied material is necessary for execution, its status SHOULD remain downstream from the authoritative source.

The source remains authoritative.

---

# 22. Repository Context

Repository content MAY provide important project context.

Where repository state matters, the instruction responsibility SHOULD distinguish:

- verified current content;
- stale or cached content;
- historical content;
- unverified assumptions.

Repository observations MUST NOT be promoted into accepted project decisions merely because they appear in source files.

Likewise, repository structure MUST NOT automatically imply architectural semantics beyond approved documentation.

---

# 23. Context and Application Space

Application project context remains distinct from ALH learning-infrastructure context.

Instruction responsibilities MAY require both.

They MUST preserve the architectural separation established by ADR-001.

Application implementation artifacts MUST NOT silently become owners of ALH educational semantics.

ALH context MUST NOT be confused with application source-of-truth responsibilities.

---

# 24. Context and Superpowers

Superpowers MAY provide capabilities or outputs relevant to ALH interactions.

Such outputs MAY become bounded context where appropriate.

ALH MUST preserve Superpowers as an immutable external dependency.

Superpowers-provided context MUST NOT:

- redefine ALH architecture;
- redefine educational methodology;
- acquire learner-state ownership;
- acquire Decision Engine authority.

Capability output is context unless another approved responsibility assigns it stronger semantic status.

---

# 25. Educational Context

Educational instruction responsibilities MAY require context such as:

- current Learning Unit;
- learning objective;
- competency information;
- Automation Level;
- Learning Debt;
- prior evidence;
- relevant learner observations.

The Context Model does not redefine these concepts.

It defines only how they may be supplied as bounded inputs.

Educational context SHOULD be sufficient to support the applicable methodology without unnecessarily exposing unrelated learner information.

---

# 26. Engineering Context

Engineering responsibilities MAY require:

- relevant source code;
- tests;
- requirements;
- architecture decisions;
- current implementation state;
- review findings;
- security findings;
- development constraints.

Engineering context SHOULD be scoped to the task.

A technical artifact MUST NOT be assumed correct merely because it exists in the repository.

Where correctness matters, applicable engineering evidence SHOULD be considered.

---

# 27. Evidence Context

Evidence requires preservation of type and status.

For educational evidence, instruction responsibilities MUST preserve distinctions such as:

- Knowledge / Understanding;
- Reasoning;
- Application;
- Independence;
- Consistency.

For engineering evidence, context MAY include:

- test execution;
- static analysis;
- review findings;
- runtime observation;
- reproducible defect evidence.

Evidence context MUST NOT be converted into a conclusion outside the authority of the applicable evaluation responsibility.

---

# 28. Security-Relevant Context

Security-relevant instruction responsibilities MAY require sensitive or risk-related context.

Context access SHOULD remain proportional to responsibility.

Security relevance MAY justify broader access where necessary for valid analysis.

However, security context SHOULD NOT become unrestricted general access by default.

Sensitive context SHOULD NOT be unnecessarily propagated across unrelated responsibilities.

Detailed implementation controls belong to Stage 5.

---

# 29. Context Isolation

Where responsibilities do not require the same information, context SHOULD remain isolated.

Isolation supports:

- reduced responsibility leakage;
- reduced irrelevant influence;
- privacy;
- clearer reasoning boundaries;
- easier verification.

Context isolation is a semantic requirement.

It does not prescribe a particular technical isolation mechanism.

Stage 5 MAY implement isolation using architecture-compliant mechanisms.

---

# 30. Context Composition

A composed instruction structure MAY require context from several sources.

Context composition MUST preserve:

- source identity where material;
- semantic status;
- authority;
- freshness;
- uncertainty;
- responsibility relevance.

Context composition MUST NOT flatten all information into an undifferentiated text block where doing so would obscure material semantic differences.

For example:

```text
Accepted Architecture
        ≠
User Suggestion
        ≠
Current Observation
        ≠
Derived Inference
```

even if all four appear in the same execution context.

---

# 31. Context Selection and Instruction Composition

Instruction Composition determines which responsibilities participate.

The Context Model determines what relevant information those responsibilities may consume.

Conceptually:

```text
Selected Responsibilities
        ↓
Determine Context Needs
        ↓
Select Relevant Context
        ↓
Preserve Authority and Provenance
        ↓
Instruction Execution
```

Responsibility selection MUST NOT automatically imply access to all available context.

Context selection SHOULD follow the selected responsibility set.

---

# 32. Context and Precedence

Context may influence conflict resolution.

However, context MUST NOT redefine the precedence model.

For example:

- fresh evidence may challenge stale assumptions;
- an accepted ADR remains authoritative over an incompatible transient suggestion;
- stronger learner evidence may require re-evaluation but does not allow a prompt to invent competency semantics.

Context informs precedence.

It does not create unlimited authority.

---

# 33. Context Lifecycle

Context MAY conceptually move through several states:

```text
Source
    ↓
Selection
    ↓
Consumption
    ↓
Derived Result
    ↓
Optional Proposed Update
    ↓
Applicable Owner
```

Not every context item passes through every state.

The model is conceptual.

It MUST NOT be interpreted as a mandatory runtime workflow.

---

# 34. Context Explainability

Material context use SHOULD be explainable at the project level.

Where relevant, it SHOULD be possible to determine:

- what source informed the responsibility;
- why the context was relevant;
- whether it was authoritative;
- whether it was current;
- whether uncertainty remained;
- whether derived information was used.

Explainability does not require disclosure of private model reasoning.

It requires transparent project-level context provenance and status where material.

---

# 35. Context Traceability

Material context dependencies SHOULD remain traceable where they affect:

- architectural decisions;
- educational decisions;
- learner progression;
- security findings;
- engineering conclusions;
- compliance.

Traceability MUST remain proportional.

Not every transient conversational detail requires durable traceability.

Detailed Stage 4 compliance and traceability requirements belong to:

`07-Prompt-Architecture-Compliance-and-Traceability.md`

---

# 36. Context Anti-Patterns

Prompt Architecture MUST avoid the following context anti-patterns.

## 36.1 Everything Context

Providing every available project or learner artifact to every responsibility.

## 36.2 Prompt Copy as Authority

Treating copied normative text as the new authoritative source.

## 36.3 Context Equals Ownership

Assuming access to a semantic object grants authority over it.

## 36.4 Transient Equals Persistent

Treating conversational or temporary information as durable state without an approved transition.

## 36.5 Stale Context Preference

Using stale information where fresher authoritative context is available.

## 36.6 Freshest Always Wins

Treating recency as sufficient to override normative authority.

## 36.7 Unknown Provenance as Fact

Presenting context of uncertain origin as authoritative fact.

## 36.8 Inference as Observation

Presenting derived conclusions as directly observed information.

## 36.9 Context Flattening

Removing material distinctions between authoritative, transient, evidential, and inferred information.

## 36.10 Retrieval Mechanism Equals Context Architecture

Defining Context Model semantics around a specific database, RAG system, vector store, or loader.

---

# 37. Context Rules

Context handling MUST satisfy the following rules:

1. Context consumption MUST NOT imply semantic ownership.
2. Responsibilities SHOULD receive only relevant context.
3. Required context MUST NOT be omitted for minimization convenience.
4. Missing material context MUST NOT be invented.
5. Uncertain context MUST NOT be silently treated as certain.
6. Material provenance SHOULD remain identifiable.
7. Freshness SHOULD be considered where it affects correctness.
8. Recency MUST NOT replace normative governance.
9. Context conflict MUST follow approved precedence and ownership rules.
10. Derived context MUST remain distinguishable from observed or authoritative context.
11. Transient context MUST NOT automatically become durable state.
12. Responsibility outputs MUST preserve their semantic status when reused as context.
13. Learner context MUST preserve Memory Model and educational ownership boundaries.
14. Project context MUST remain distinct from ALH architectural authority.
15. Context selection MUST remain implementation-independent at Stage 4.
16. Repository information MUST be verified where freshness materially affects decisions.
17. Context SHOULD remain explainable and traceable where material.

---

# 38. Relationship to Educational Instruction

The Context Model defines what educational instruction responsibilities may consume.

It does not define how those responsibilities apply Stage 2 methodology.

That responsibility belongs to:

`05-Educational-Instruction-Model.md`

The educational instruction model MUST use context according to the boundaries defined here.

---

# 39. Relationship to Prompt Artifacts

Future prompt artifacts may declare or require context dependencies.

Such dependencies MUST conform to this Context Model.

Prompt artifacts SHOULD NOT embed volatile project or learner state as durable semantic definitions.

Detailed prompt artifact contracts belong to:

`06-Prompt-Artifact-Model.md`

Runtime context retrieval and assembly belong to Stage 5.

---

# 40. Summary

The ALH Context Model treats context as bounded, provenance-aware input to instruction responsibilities.

Its core relationship is:

```text
Authoritative / Relevant Sources
        ↓
Context Selection
        ↓
Bounded Context
        ↓
Instruction Responsibility
        ↓
Bounded Result
        ↓
Optional Explicit State Transition
```

The model preserves the distinctions:

```text
Context Access
    ≠ Semantic Ownership

Prompt Inclusion
    ≠ Source of Truth

Transient Context
    ≠ Persistent State

Evidence
    ≠ Interpretation

Inference
    ≠ Observation

Recency
    ≠ Normative Authority

Context Selection
    ≠ Runtime Retrieval Mechanism
```

This allows ALH instruction responsibilities to adapt to learner, project, task, evidence, and interaction information while preserving upstream authority, context integrity, and implementation independence.

The next document defines how approved educational methodology is expressed through instruction responsibilities:

`05-Educational-Instruction-Model.md`
