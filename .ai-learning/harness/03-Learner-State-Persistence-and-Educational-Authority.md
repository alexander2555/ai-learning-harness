# Learner State Persistence and Educational Authority

Status: Draft
Version: 2.0-draft.1

Parent Documents

- 00-Harness-Implementation-Architecture.md
- 01-Runtime-Responsibility-and-Instruction-Materialization.md
- 02-Context-Authority-and-Truth-Implementation.md
- 08-Memory-Model.md
- 09-Decision-Engine.md
- 02-Assessment.md
- 03-Competency-Evaluation.md
- 04-Learning-Debt.md
- 05-Automation-Level.md
- ADR-001-Separation-of-Application-and-Learning-Infrastructure.md

Related Documents

- 04-Agent-Pipeline.md
- 06-Knowledge-Graph.md
- 07-Competency-Model.md
- 04-Engineering-and-Educational-Instruction-Boundaries.md
- 05-Development-Learning-Integration.md
- 06-Instruction-Outputs-Claims-and-Stage-5-Contracts.md

---

# 1. Purpose

This document defines how authoritative learner state is physically represented, persisted, accessed, mutated, attributed, and protected within AI Learning Harness.

It answers:

> How should ALH persist and update learner educational state so that Stage 1–2 authority, ADR-001, educational evidence boundaries, learner participation, and educational decision semantics remain intact during physical execution?

The governing relationship is:

```text
Educational Observation
        ↓
Candidate Educational Evidence
        ↓
Assessment
        ↓
Accepted Educational Evidence
        ↓
Competency / Learning-State Decision
        ↓
Authorized Learner-State Mutation
```

The implementation MUST NOT provide shortcuts around this authority path merely because project activity, model inference, or engineering evidence is technically available.

---

# 2. Responsibility Boundary

This document owns Stage 5 implementation design for:

- authoritative learner-state persistence;
- learner-state read access;
- learner-state write authority;
- persistence boundaries required by ADR-001;
- competency-state materialization;
- Learning Debt persistence;
- Automation Level persistence;
- assessment-state persistence;
- educational progression state;
- Decision Engine state access and decision materialization;
- Knowledge Graph and Competency Model integration where they affect learner state;
- learner participation capture;
- assistance attribution;
- Candidate Educational Evidence intake;
- accepted educational evidence persistence;
- educational-state mutation transactions;
- learner-state provenance;
- learner-state history;
- learner-state failure handling.

It MUST NOT redefine:

- Stage 2 learning semantics;
- Stage 2 competency semantics;
- Learning Debt semantics;
- Automation Level semantics;
- educational evidence categories;
- Educational Done semantics;
- Stage 1 Decision Engine responsibility;
- Stage 1 Memory Model responsibility;
- Stage 1 Knowledge Graph responsibility;
- Stage 1 Competency Model responsibility.

---

# 3. Core Distinctions

The implementation MUST preserve:

```text
Project Truth
        ≠
Learner Truth
```

```text
Learner-State Read Access
        ≠
Learner-State Write Authority
```

```text
Engineering Observation
        ≠
Candidate Educational Evidence
```

```text
Candidate Educational Evidence
        ≠
Accepted Educational Evidence
```

```text
Accepted Educational Evidence
        ≠
Competency State
```

```text
Competency State
        ≠
Automation Level
```

```text
Automation Level
        ≠
AI Autonomy
```

```text
Engineering Done
        ≠
Educational Done
```

Persistence MUST NOT collapse any of these concepts merely because a single storage mechanism could represent them more conveniently.

---

# 4. Authoritative Learner State

Authoritative Learner State is learner-related state whose semantic status has been established through accepted ALH educational authority.

It MAY include, where defined by upstream contracts:

- competency state;
- competency evidence references;
- Learning Debt;
- Automation Level;
- educational progression;
- assessment outcomes;
- accepted educational evidence;
- learning objectives;
- durable learner-memory state;
- educational completion state;
- relevant decision history.

The exact persisted structure is an implementation decision.

Persistence MUST preserve the semantic distinctions defined upstream.

---

# 5. Learner-State Store

The Harness SHOULD provide a dedicated Learner-State Store through an explicit Learner State Port.

Conceptually:

```text
Harness Kernel
        ↓
Learner State Port
        ↓
Learner-State Adapter
        ↓
ALH-Owned Persistence
```

The Learner-State Store is authoritative only for the educational state explicitly assigned to it by accepted ALH contracts.

The storage technology itself MUST NOT create authority.

Therefore:

```text
Persisted
        ≠
Authoritative
```

and:

```text
Stored in Learner-State Store
        ≠
Accepted Educational Fact
```

unless the applicable authority path has established that status.

---

# 6. ADR-001 Physical Enforcement

ADR-001 requires separation of application artifacts from learning infrastructure.

Accordingly, authoritative ALH learner state MUST NOT be stored in the learner's application artifacts.

Application artifacts MUST NOT become storage for:

- competency state;
- Learning Debt;
- Automation Level;
- assessment state;
- educational progression metadata;
- learner-memory state;
- ALH-specific educational evidence status.

The Harness MAY inspect application artifacts as project context.

It MUST NOT embed authoritative learner-state metadata into them for implementation convenience.

---

# 7. Learning Infrastructure Boundary

ALH learner-state persistence SHOULD remain within ALH-owned learning infrastructure.

The physical implementation MAY use:

- files;
- embedded database;
- local database;
- service-backed database;
- another suitable persistence mechanism.

The mechanism MUST preserve:

- application / learning-infrastructure separation;
- learner-state authority;
- provenance;
- integrity;
- security;
- inspectability where materially required.

The exact persistence technology is intentionally left open.

---

# 8. Learner-State Port

The Learner State Port defines the Harness-owned integration boundary for authoritative learner-state access.

It SHOULD distinguish operations such as:

```text
readLearnerState()
```

from:

```text
proposeEducationalEvidence()
```

from:

```text
recordAssessmentOutcome()
```

from:

```text
applyAuthorizedEducationalStateChange()
```

This illustration does not mandate exact APIs.

The important rule is:

```text
Read Capability
        ≠
Mutation Authority
```

A caller MUST NOT gain learner-state mutation rights merely because it can retrieve learner context.

---

# 9. Read Access

Learner-state read access MAY be granted to runtime responsibilities that require learner context.

Examples MAY include:

- educational guidance;
- adaptive assistance;
- Decision Engine evaluation;
- assessment;
- learner-facing explanation.

Read access SHOULD be scoped to the minimum learner context materially required.

Broad access SHOULD NOT be granted merely for convenience.

Read access MUST NOT create:

- assessment authority;
- competency mutation authority;
- Learning Debt mutation authority;
- Automation Level mutation authority.

---

# 10. Write Authority

Authoritative learner-state mutation MUST follow an explicit educational
authority boundary.

The implementation SHOULD preserve sufficient information to establish:

- the operation being requested or performed;
- the applicable educational authority;
- the accepted evidence supporting the change;
- the previous state;
- the proposed new state;
- relevant provenance.

The implementation MUST preserve:

```text
Physical Learner-State Write
        ≠
Authorized Educational State Transition
```

A model, coding agent, tool, adapter, or other mechanism MUST NOT establish
authoritative educational state merely because it can physically modify the
learner-state representation.

The authority boundary MAY be materialized through:

- structured transition records;
- deterministic validation;
- explicit provenance;
- an operation-specific validator;
- a transaction or policy gate;
- host-native protection;
- another proportional mechanism.

An exclusive technical write API is NOT required unless a weaker mechanism is
insufficient for the applicable contract.

The exact persistence and validation mechanism remains an Implementation
Decision.

---

# 11. Educational Mutation Boundary

The Harness SHOULD materialize an Educational Mutation Boundary for
authority-sensitive learner-state changes.

Conceptually:

```text
Proposed or Observed Learner-State Change
        ↓
Applicable Educational Authority
        ↓
Evidence Check
        ↓
Semantic Validation
        ↓
Authorized Transition
        ↓
Authoritative State
```

This flow is semantic.

Its physical implementation MAY perform validation before persistence, during
persistence, or through deterministic post-write validation and reconciliation,
provided that an invalid physical write does not thereby establish authoritative
educational truth.

A model recommendation alone MUST NOT establish an authorized transition.

The boundary MUST enforce accepted educational semantics rather than invent new
ones.

Where the host environment supports proportional hard write protection, that
protection MAY strengthen this boundary but is not a baseline requirement.

## Project-Owner Trust Scope

The baseline ALH threat model does not treat the project owner as an adversary
with respect to deliberate modification of project-resident learner state.

ALH MAY validate and report semantically invalid owner-created state.

It is not required to prevent the project owner technically from modifying
`.ai-learning/`.

This scope does not grant an IDE agent equivalent authority and does not weaken
the educational requirements for establishing authoritative state.

---

# 12. Candidate Educational Evidence Intake

Engineering execution MAY produce observations relevant to learning.

These observations MAY enter the learner subsystem as Candidate Educational Evidence.

Conceptually:

```text
Engineering Observation
        ↓
Candidate Educational Evidence Record
```

A Candidate Educational Evidence Record SHOULD preserve, where material:

- observed behavior;
- source;
- project context;
- assistance attribution;
- relevant competency;
- evidence type candidate;
- provenance;
- observation time;
- uncertainty.

The record MUST remain candidate until assessment authority evaluates it.

---

# 13. Candidate Evidence Authority

Candidate Educational Evidence is not authoritative learner state.

It MAY be persisted for later assessment.

Persistence MUST NOT promote it.

Therefore:

```text
Candidate Evidence Persisted
        ≠
Accepted Evidence
```

and:

```text
Candidate Evidence Accumulated
        ≠
Competency Mastery
```

A large quantity of unassessed observations MUST NOT silently become accepted educational evidence through aggregation.

---

# 14. Assessment Boundary

Stage 2 Assessment determines whether Candidate Educational Evidence supports accepted educational conclusions.

The Harness MUST provide an implementation boundary through which assessment can:

- inspect candidate evidence;
- inspect learner reasoning;
- consider assistance attribution;
- evaluate accepted evidence categories;
- accept, reject, or retain uncertainty;
- produce an assessment outcome.

Assessment MUST remain distinct from engineering execution.

---

# 15. Accepted Educational Evidence

Accepted Educational Evidence is evidence whose status has been established through the Stage 2 assessment path.

The Learner-State Store MAY persist accepted educational evidence.

Accepted evidence SHOULD retain references to:

- source observation;
- assessment outcome;
- competency or learning objective;
- assistance context;
- provenance;
- acceptance time;
- relevant uncertainty where applicable.

Accepted evidence MUST remain distinguishable from competency conclusions derived from it.

---

# 16. Evidence Vocabulary

The implementation MUST preserve the accepted Stage 2 educational evidence vocabulary:

- Knowledge / Understanding;
- Reasoning;
- Application;
- Independence;
- Consistency.

`Candidate Educational Evidence` is a status in the integration flow.

It MUST NOT be implemented as an additional Stage 2 evidence category.

The data model SHOULD therefore distinguish:

```text
evidence status
```

from:

```text
evidence category
```

---

# 17. Competency State

Competency State MUST be derived and updated according to accepted Competency Evaluation semantics.

A successful software task MUST NOT directly set competency mastery.

The implementation SHOULD preserve the relationship:

```text
Accepted Educational Evidence
        ↓
Competency Evaluation
        ↓
Competency-State Decision
        ↓
Authorized Mutation
```

The concrete representation of competency state remains an implementation decision.

---

# 18. Competency State Provenance

A competency-state mutation SHOULD retain enough provenance to explain:

- what changed;
- which accepted evidence materially supported the change;
- which evaluation produced the decision;
- when the change occurred;
- what prior state existed.

The Harness SHOULD avoid opaque competency mutations that cannot be traced to accepted educational authority.

This does not require preserving hidden chain-of-thought.

---

# 19. Learning Debt

Learning Debt MUST be persisted and mutated according to accepted Stage 2 semantics.

Engineering difficulty alone MUST NOT automatically create Learning Debt.

Likewise:

```text
Failed Test
        ≠
Learning Debt
```

```text
Code Review Finding
        ≠
Learning Debt
```

```text
AI Assistance
        ≠
Learning Debt
```

These observations MAY contribute educational context.

Learning Debt mutation requires the accepted educational decision path.

---

# 20. Automation Level

Automation Level is authoritative learner educational state concerning expected learner independence.

The implementation MUST NOT use Automation Level as:

- tool permission;
- model permission;
- file-write permission;
- execution-authority level;
- runtime orchestration mode;
- number of model invocations;
- engineering rigor.

The implementation MUST preserve:

```text
Automation Level
        ≠
AI Autonomy
        ≠
Engineering Rigor
```

Any runtime policy regarding AI autonomy MUST be represented separately.

---

# 21. Automation-Level Mutation

Automation Level changes MUST pass through educational authority.

Engineering success alone MUST NOT automatically increase Automation Level.

Engineering failure alone MUST NOT automatically decrease Automation Level.

Relevant assessment evidence MAY inform such a decision.

The mutation SHOULD preserve provenance and rationale suitable for concise external explanation.

---

# 22. Educational Progression

Educational progression state MAY represent accepted learner advancement through objectives, competencies, or related Stage 2 structures.

Progression MUST NOT be inferred solely from:

- completed engineering tasks;
- merged commits;
- passing tests;
- generated artifacts;
- elapsed time;
- AI-produced output.

Progression decisions MUST follow accepted educational semantics.

---

# 23. Decision Engine Materialization

The Stage 1 Decision Engine responsibility MUST be physically materialized without creating new educational authority.

The Decision Engine MAY consume:

- authoritative learner state;
- current learning objectives;
- competency state;
- Learning Debt;
- Automation Level;
- project context;
- development activity;
- assistance context;
- accepted educational evidence;
- relevant uncertainty.

It MAY produce educational decisions within its accepted authority.

It MUST NOT gain authority merely because it has broad context access.

---

# 24. Decision Engine Is Not Necessarily an Agent

The implementation MUST preserve:

```text
Decision Engine Responsibility
        ≠
Decision Agent
```

The Decision Engine MAY be implemented through:

- deterministic policy;
- model-assisted decision logic;
- structured rules;
- multiple mechanisms;
- a dedicated model invocation where justified.

Physical topology MUST follow implementation need.

It MUST NOT be derived from the Stage 1 responsibility label.

---

# 25. Decision Inputs

Decision Engine inputs SHOULD preserve source and authority distinctions.

For example:

```text
competency state
        =
authoritative learner state
```

while:

```text
current project difficulty
        =
project-context interpretation
```

and:

```text
possible learner misconception
        =
inference or candidate evidence
```

These MUST NOT be flattened into equivalent facts.

---

# 26. Decision Outputs

Decision Engine output SHOULD preserve, where applicable:

- decision type;
- authority;
- affected learner-state domain;
- supporting learner context;
- supporting accepted evidence;
- uncertainty;
- resulting obligations.

Decision Engine output is not automatically a persistence mutation.

Authority-sensitive state changes SHOULD still pass through the applicable Educational Mutation Gate.

---

# 27. Knowledge Graph Integration

The Knowledge Graph remains a Stage 1 architectural responsibility.

Stage 5 MAY choose its physical representation.

The implementation SHOULD distinguish:

```text
Knowledge Graph Structure
```

from:

```text
Learner Mastery of Knowledge Graph Node
```

The former describes educational knowledge relationships.

The latter is learner-specific educational state.

They MAY be stored through related mechanisms.

They MUST NOT be semantically collapsed.

---

# 28. Competency Model Integration

The Competency Model defines competency structure.

Learner competency state represents the learner's current evaluated relationship to that structure.

Therefore:

```text
Competency Definition
        ≠
Learner Competency State
```

Stage 5 MAY store competency definitions and learner competency state differently.

The physical representation MUST preserve their ownership distinction.

---

# 29. Static Educational Definitions

Knowledge Graph and Competency Model definitions that are project-wide and relatively stable SHOULD be treated separately from mutable learner-specific state.

The implementation MAY load definitions from canonical ALH artifacts.

It MAY cache or normalize them.

Derived representations MUST NOT silently become authoritative replacements for accepted definitions.

---

# 30. Learner Memory

The accepted Memory Model governs authoritative learner context.

Stage 5 MUST distinguish durable learner memory from temporary runtime context.

Conceptually:

```text
Runtime Context
        ≠
Persistent Learner Memory
```

A runtime observation SHOULD NOT enter durable learner memory merely because it was useful during one interaction.

Persistence SHOULD reflect continuing educational value.

---

# 31. Memory Admission

The Harness SHOULD apply an explicit admission rule before persisting new durable learner-memory information.

Admission SHOULD consider:

- continuing educational value;
- authority status;
- provenance;
- redundancy;
- uncertainty;
- sensitivity;
- whether the information belongs to project state instead.

The admission mechanism MUST NOT promote candidate educational evidence into accepted learner state.

---

# 32. Memory Update and Replacement

Learner memory MAY evolve.

The persistence layer SHOULD support:

- addition;
- correction;
- supersession;
- invalidation;
- historical trace where materially useful.

A corrected learner-state fact SHOULD NOT require destructive loss of all prior provenance.

The exact history mechanism remains an implementation decision.

---

# 33. Learner Participation

Learner participation is meaningful involvement in engineering reasoning or execution.

The Harness SHOULD capture learner participation where Stage 2 educational interpretation depends on it.

Participation information MAY describe:

- learner reasoning supplied;
- learner implementation performed;
- learner decision made;
- learner correction of AI work;
- learner explanation;
- learner verification activity.

Participation capture MUST remain proportional.

It SHOULD NOT become surveillance-like exhaustive logging where educational interpretation does not require it.

---

# 34. Assistance Attribution

Assistance Attribution describes materially relevant AI or external assistance provided during learner work.

The Harness SHOULD be capable of representing forms such as:

- no material assistance;
- hint;
- conceptual explanation;
- partial solution;
- generated implementation;
- generated test;
- debugging guidance;
- AI correction;
- AI review;
- learner correction of AI output.

This list is illustrative.

The exact vocabulary MAY be refined during implementation planning.

---

# 35. Assistance Attribution Semantics

Assistance attribution is context for educational interpretation.

It is not itself accepted educational evidence.

Therefore:

```text
AI Generated Implementation
        ≠
Learner Application Evidence
```

unless Stage 2 assessment independently determines that learner behavior around the generated implementation provides applicable evidence.

Likewise:

```text
No AI Assistance
        ≠
Competency Mastery
```

Independence is one evidence dimension, not the entire competency model.

---

# 36. Assistance Capture Boundary

The Harness SHOULD capture assistance at the point where assistance is actually provided or observed.

Model self-report alone SHOULD NOT be treated as sufficient when the Harness directly knows what operation occurred.

For example, if the Harness invoked a model to generate implementation code, that invocation is stronger attribution evidence than a later natural-language statement that the learner wrote the code independently.

---

# 37. Assistance and Runtime Topology

Assistance attribution MUST describe educationally relevant assistance, not physical topology.

For example:

```text
three model invocations
```

does not itself imply:

```text
high assistance
```

Likewise:

```text
one model invocation
```

does not imply:

```text
low assistance
```

The educational meaning depends on what assistance was actually supplied to the learner.

---

# 38. Learner Authorship

Where learner authorship matters educationally, the Harness SHOULD preserve a distinction between:

- learner-authored content;
- AI-authored content;
- jointly developed content;
- learner-modified AI content;
- uncertain authorship.

Authorship MAY be inferred from observed interaction history.

Where uncertain, the Harness MUST preserve uncertainty rather than fabricate attribution.

---

# 39. Engineering Observation Intake

Engineering subsystems MAY submit observations to the educational subsystem.

Observation intake SHOULD use a constrained interface rather than direct learner-state mutation.

Conceptually:

```text
Engineering Runtime
        ↓
Educational Observation Port
        ↓
Candidate Evidence / Educational Context
```

This preserves:

```text
Engineering Authority
        ≠
Educational Authority
```

---

# 40. Observation Record

An Engineering Observation relevant to education SHOULD be capable of representing, where material:

- observed engineering behavior;
- project context;
- source;
- revision identity;
- learner participation;
- assistance attribution;
- applicable learning objective;
- uncertainty;
- evidence candidate status.

The exact schema remains an implementation decision.

---

# 41. Assessment Input Set

The assessment mechanism SHOULD construct an Assessment Input Set from relevant educational context.

It MAY include:

- Candidate Educational Evidence;
- learner explanations;
- learner participation;
- assistance attribution;
- relevant project artifacts;
- prior accepted evidence;
- current competency state;
- uncertainty.

The Assessment Input Set is derived context.

It MUST NOT itself become authoritative learner state.

---

# 42. Assessment Outcome

An Assessment Outcome SHOULD explicitly distinguish:

- accepted evidence;
- rejected candidate evidence;
- insufficient evidence;
- uncertain interpretation;
- recommended follow-up assessment;
- competency implications where permitted.

The outcome SHOULD preserve applicable provenance.

A completed assessment process MUST NOT automatically imply competency change unless Stage 2 semantics justify it.

---

# 43. Educational State Transaction

Authority-sensitive educational changes SHOULD be applied transactionally where partial application could create inconsistent learner state.

A transaction MAY include related updates such as:

- accepted evidence;
- competency state;
- Learning Debt;
- Automation Level;
- progression state;
- decision history.

The transaction MUST NOT imply that all these fields change together.

Only semantically justified mutations MAY be included.

---

# 44. Transaction Atomicity

Where multiple learner-state changes form one accepted educational decision, the implementation SHOULD avoid partially applying the decision.

For example, if an accepted assessment simultaneously:

- records accepted evidence;
- updates competency state;

the implementation SHOULD ensure that a failure does not persist one while silently losing the other where such inconsistency would alter meaning.

The exact transactional mechanism is an implementation decision.

---

# 45. Idempotency

Educational mutations SHOULD be idempotent or otherwise protected against accidental duplicate application.

Repeated processing of the same assessment result MUST NOT silently double-apply:

- evidence;
- Learning Debt;
- progression;
- competency changes;
- Automation Level changes.

The persistence design SHOULD support stable operation identity or equivalent duplicate-detection where necessary.

---

# 46. Concurrent Mutation

If the physical environment permits concurrent learner-state mutations, the implementation MUST prevent lost updates or semantically inconsistent state.

The initial implementation MAY avoid concurrency rather than introduce unnecessary complexity.

If concurrency is supported, appropriate version checks, transactions, or equivalent mechanisms SHOULD protect authoritative learner state.

---

# 47. Optimistic State Validation

Before applying a learner-state mutation, the Harness SHOULD verify that the state on which the educational decision was based has not materially changed where stale decisions could produce incorrect updates.

Conceptually:

```text
Decision Based on Learner State Version N
        ↓
Mutation Attempt
        ↓
Current Version Check
```

If the relevant state has changed, the decision MAY require reevaluation.

The exact versioning strategy remains open.

---

# 48. Learner-State History

The Harness SHOULD preserve enough mutation history to support:

- explainability;
- debugging;
- correction;
- educational review;
- provenance.

History MAY be implemented through:

- append-only events;
- versioned records;
- snapshots plus history;
- another proportional mechanism.

History MUST NOT become a second conflicting source of current learner truth.

The current authoritative state SHOULD remain clearly identifiable.

---

# 49. Event History and Current State

If event-style persistence is used:

```text
Historical Educational Event
        ≠
Current Learner State
```

The implementation SHOULD make the projection from history to current state deterministic or inspectable.

If snapshot-style persistence is used, sufficient provenance SHOULD remain available for significant state changes.

This document does not mandate event sourcing.

---

# 50. Educational Decision Record

For significant educational decisions, the Harness SHOULD retain a concise Decision Record.

It MAY contain:

- decision type;
- previous state;
- resulting state;
- accepted evidence references;
- authority;
- timestamp;
- uncertainty;
- externally suitable rationale.

It MUST NOT require hidden chain-of-thought.

The Decision Record supports explainability and conformance.

---

# 51. Educational Done

Educational Done MUST be represented independently from Engineering Done.

Educational Done MAY depend on:

- applicable learning objective;
- accepted educational evidence;
- competency semantics;
- Stage 2 completion criteria.

The engineering subsystem MUST NOT directly declare Educational Done.

A completed software task MAY exist while Educational Done remains false, unknown, or not applicable.

---

# 52. Engineering Done Context

Educational systems MAY observe Engineering Done as contextual information.

Engineering Done MAY contribute to understanding whether the learner completed applicable application work.

It MUST NOT substitute for educational evidence.

Therefore:

```text
Engineering Done
        ≠
Educational Done
```

and:

```text
Engineering Done
        ≠
Competency Mastery
```

---

# 53. Educational State and Project Revision

Some educational evidence MAY depend on a specific project revision or workspace state.

Where materially relevant, accepted educational evidence SHOULD retain the project-state identity from which it was derived.

This supports later interpretation of what the learner actually did.

A later project change does not necessarily invalidate historical educational evidence.

Freshness semantics therefore differ between:

```text
current engineering claim
```

and:

```text
historical educational evidence
```

The implementation MUST preserve this distinction.

---

# 54. Educational Evidence Durability

Accepted educational evidence MAY remain valid after project code changes if it represents historical learner behavior.

It MUST NOT automatically become stale merely because the repository changes.

However, its applicability to current competency evaluation MAY change according to Stage 2 semantics.

The implementation SHOULD preserve evidence history rather than rewrite historical evidence to match current project state.

---

# 55. Correction of Learner State

The Harness MUST support correction where authoritative learner state is found to be wrong.

Correction SHOULD:

- preserve the fact that prior state existed where materially useful;
- identify the correcting authority;
- preserve correction provenance;
- establish the corrected current state.

Correction MUST NOT be implemented as silent historical falsification where provenance matters.

---

# 56. Learner Input and Educational Authority

Learner statements MAY provide important educational context.

A learner MAY authoritatively state:

- intent;
- confidence;
- reasoning;
- perceived difficulty;
- personal preferences.

A learner statement such as:

```text
"I fully understand dependency injection"
```

MUST NOT automatically establish competency mastery.

Self-report MAY be Candidate Educational Evidence or assessment context according to Stage 2 semantics.

---

# 57. Model Inference and Learner State

Model inference MAY propose interpretations such as:

- possible misconception;
- likely competency gap;
- possible Learning Debt;
- recommended assistance level.

Such inference MUST NOT directly mutate authoritative learner state.

The implementation SHOULD distinguish:

```text
Model Inference
        ↓
Educational Proposal / Candidate Context
```

from:

```text
Accepted Educational Decision
        ↓
Authorized Mutation
```

---

# 58. Persistence of Inferences

Model-generated learner inferences MAY be persisted where they have continuing educational value.

If persisted, they MUST retain non-authoritative or candidate status unless subsequently accepted through the applicable authority path.

Persistence MUST NOT erase uncertainty.

---

# 59. Decision Engine and Mutation Separation

The Decision Engine MAY recommend or establish educational decisions within its accepted responsibility.

Where physical separation improves safety and auditability, decision production SHOULD remain distinct from persistence mutation.

Conceptually:

```text
Decision Engine
        ↓
Educational Decision
        ↓
Mutation Gate
        ↓
Learner-State Store
```

This prevents:

```text
Model Output
        →
Direct Database Write
```

from becoming the default authority path.

---

# 60. Persistence Adapter Authority

A Learner-State Adapter has technical capability to persist state.

That capability MUST NOT be interpreted as educational authority.

Therefore:

```text
Can Write Database
        ≠
May Decide Educational State
```

The adapter SHOULD apply already-authorized mutations rather than make educational decisions independently.

---

# 61. Persistence Validation

Before committing authoritative learner-state mutation, the persistence boundary SHOULD validate structural and semantic invariants that can be checked deterministically.

Examples MAY include:

- required identifiers present;
- referenced competency exists;
- prior state version matches;
- mutation type permitted;
- accepted evidence reference exists where required;
- enum/domain values valid.

Deterministic validation MUST NOT replace educational judgment where Stage 2 requires judgment.

---

# 62. Data Integrity

Authoritative learner state SHOULD be protected against:

- accidental corruption;
- partial writes;
- duplicate writes;
- unauthorized writes;
- silent schema incompatibility;
- untraceable mutation.

The exact integrity mechanisms depend on the selected persistence technology.

Detailed security controls are defined in:

`06-Security-Trust-and-Authority-Enforcement.md`

---

# 63. Schema Evolution

Learner-state schema MAY evolve during implementation and future development.

Schema evolution MUST preserve accepted semantic distinctions.

A migration MUST NOT silently:

- merge candidate and accepted evidence;
- merge Engineering Done and Educational Done;
- merge Automation Level with AI autonomy;
- remove provenance required for authority-sensitive state;
- move learner state into application artifacts.

A schema migration that changes accepted architectural ownership or semantics requires architectural review and MAY require an ADR.

---

# 64. Privacy and Data Minimization

Learner-state persistence SHOULD store only information with legitimate continuing ALH value.

The implementation SHOULD avoid unnecessary persistence of:

- full model conversations;
- hidden reasoning;
- unrelated project content;
- secrets;
- personal information unrelated to educational purpose.

Educational explainability SHOULD rely on concise evidence, decisions, and provenance rather than exhaustive surveillance.

Detailed privacy and security policy belongs downstream.

---

# 65. Persistence Failure

Learner-state persistence failure MUST NOT be represented as successful state mutation.

The Harness SHOULD distinguish:

```text
Educational Decision Produced
        ≠
Mutation Attempted
        ≠
Mutation Persisted
```

If persistence fails, the current authoritative learner state remains unchanged unless the storage system establishes otherwise.

The user-facing system SHOULD avoid claims that the learner state was updated without persistence evidence.

---

# 66. Read Failure

Failure to retrieve authoritative learner state MUST NOT be interpreted as absence of learner state.

The implementation MUST preserve:

```text
Unavailable
        ≠
Empty
```

and:

```text
Unknown
        ≠
Default Learner
```

Where learner state cannot be loaded, the Harness SHOULD degrade safely and preserve uncertainty.

It MUST NOT silently recreate authoritative learner state from model memory or project artifacts.

---

# 67. Recovery

The persistence design SHOULD provide a proportional recovery mechanism appropriate to the chosen storage technology.

Recovery MAY include:

- transactional rollback;
- backup;
- version recovery;
- reconstruction from authoritative event history;
- integrity checks.

Recovery MUST preserve learner-state authority and provenance.

---

# 68. Initial Persistence Architecture Direction

The initial Stage 5 direction SHOULD use:

```text
Harness Kernel
        ↓
Educational Decision / Mutation Policy
        ↓
Learner State Port
        ↓
Learner-State Adapter
        ↓
Dedicated ALH Persistence
```

with a separate intake path:

```text
Engineering / Interaction Observation
        ↓
Candidate Evidence Intake
        ↓
Assessment
        ↓
Accepted Educational Decision
        ↓
Mutation Policy
```

This architecture MAY run in one physical process.

The separation is semantic and enforcement-oriented, not a requirement for microservices.

---

# 69. Initial Data Separation Direction

The initial implementation SHOULD distinguish at least four categories:

```text
Educational Definitions
```

Examples:

- competency definitions;
- Knowledge Graph structure.

```text
Authoritative Learner State
```

Examples:

- competency state;
- Learning Debt;
- Automation Level;
- progression.

```text
Educational Evidence
```

Examples:

- candidate evidence;
- accepted evidence;
- assessment outcomes.

```text
Educational Operational History
```

Examples:

- decisions;
- state mutations;
- assistance attribution where retained.

These categories MAY share one physical database.

They MUST remain semantically distinguishable.

---

# 70. Single-Store vs Multi-Store

This document does not require multiple databases.

A single physical store MAY contain:

- definitions;
- learner state;
- evidence;
- history;

if the implementation preserves their authority and lifecycle distinctions.

Multiple stores MAY be justified by:

- portability;
- integrity;
- scale;
- security;
- operational requirements.

Physical storage separation MUST NOT be introduced merely to mirror conceptual names.

---

# 71. Recommended Minimal Persistence

For an initial proportional Harness, the persistence design SHOULD prefer a simple ALH-owned local persistence mechanism unless supported-environment requirements materially justify a more complex service architecture.

The mechanism SHOULD support at least:

- structured learner state;
- durable evidence records;
- transactional or equivalently safe mutation;
- state versioning or duplicate protection;
- provenance;
- local inspection/debugging;
- migration.

The exact technology is intentionally not selected by this document.

---

# 72. Configuration Boundary

Configuration MAY control physical learner-state persistence details such as:

- storage location;
- adapter selection;
- retention;
- backup behavior.

Configuration MUST NOT grant semantic authority that does not exist.

For example, a configuration flag MUST NOT legitimately enable:

```text
engineering_activity_updates_competency_directly = true
```

because that would violate accepted educational authority.

---

# 73. Testing Boundary

Stage 5 implementation tests SHOULD verify persistence mechanics such as:

- correct read/write behavior;
- policy enforcement;
- transaction safety;
- candidate/accepted separation;
- duplicate protection;
- ADR-001 physical separation.

Passing these tests does not establish Stage 6 validation or educational effectiveness.

Implementation verification remains distinct from final system validation.

---

# 74. Implementation Decisions Left Open

This document intentionally does not prescribe:

- persistence technology;
- relational vs document storage;
- file-based vs database storage;
- event sourcing;
- exact schema;
- exact competency-state representation;
- exact Learning Debt representation;
- exact Automation Level representation;
- exact educational evidence schema;
- exact Decision Record schema;
- exact learner-state versioning mechanism;
- exact transaction API;
- exact assistance-attribution vocabulary;
- retention periods;
- backup technology;
- encryption mechanism;
- multi-user persistence architecture.

These remain downstream implementation decisions or implementation-planning decisions.

They MUST preserve this contract.

---

# 75. Observations

## O-1 — Learner-State Mutation Is the Primary Educational Enforcement Surface

The most consequential Stage 2 authority violations would occur if engineering or model execution could directly mutate competency, Learning Debt, Automation Level, or Educational Done.

A dedicated mutation boundary therefore provides substantial protection with relatively low architectural complexity.

## O-2 — Candidate Evidence Benefits from Persistence

Persisting Candidate Educational Evidence can preserve observations for later assessment without requiring immediate educational judgment.

The implementation must ensure that persistence does not imply acceptance.

## O-3 — Educational History and Current State Serve Different Purposes

Historical evidence and decision records support explainability and correction.

Current learner state supports runtime adaptation.

They SHOULD remain distinguishable even if stored together.

## O-4 — Assistance Attribution Should Be Captured Near the Event

Reconstructing assistance from later summaries is less reliable than recording materially relevant assistance when it occurs.

## O-5 — Decision and Mutation Separation Improves Auditability

Separating educational decision production from persistence mutation makes authority and failure states more inspectable without requiring separate services or agents.

---

# 76. Candidate ADRs

No Candidate ADR is introduced by this document.

The following are implementation decisions within accepted Stage 1–4 architecture:

- dedicated Learner State Port;
- explicit Educational Mutation Gate;
- Candidate Educational Evidence persistence;
- separation of decision production and persistence mutation;
- learner-state provenance;
- state versioning or equivalent duplicate protection;
- assistance attribution capture;
- proportional learner-state history.

A Candidate ADR would be required if implementation proposed, for example:

- storing authoritative learner state inside application artifacts;
- allowing engineering execution to mutate competency directly;
- redefining Automation Level as AI execution authority;
- moving learner educational authority into an external coding agent.

---

# 77. Future Evolutions

Possible future improvements include:

- cross-project learner profiles;
- synchronized learner state across devices;
- organization-level learner analytics;
- richer competency-history visualization;
- temporal competency modeling;
- probabilistic competency models;
- automated contradiction detection across learner memory;
- privacy-preserving learner-state synchronization;
- signed educational evidence;
- learner-controlled export and portability.

These SHOULD NOT increase initial Stage 5 complexity unless required by accepted scope.

---

# 78. Completion Criteria

This document is complete when Stage 5 has a normative learner-state persistence architecture sufficient to preserve educational authority through physical storage and runtime mutation.

At minimum, it MUST establish:

- authoritative learner-state boundary;
- ADR-001 physical enforcement;
- Learner State Port;
- read / write authority separation;
- Educational Mutation Gate;
- Candidate Educational Evidence intake;
- assessment boundary;
- accepted educational evidence persistence;
- competency-state mutation path;
- Learning Debt boundary;
- Automation Level boundary;
- Decision Engine materialization constraints;
- Knowledge Graph / learner-state distinction;
- learner participation;
- assistance attribution;
- educational-state transactions;
- idempotency;
- learner-state history;
- failure semantics;
- persistence architecture direction;
- implementation decisions intentionally left open.

Acceptance of this document authorizes detailed evidence, claims, and completion implementation design in:

`04-Evidence-Claims-and-Completion-Implementation.md`

It does not authorize Harness coding before the applicable Stage 5 normative design chain and implementation plan are complete.
