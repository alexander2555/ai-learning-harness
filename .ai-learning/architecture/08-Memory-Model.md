# Memory Model

Version: 0.1 Draft

Parent Documents:

- 06-Knowledge-Graph.md
- 07-Competency-Model.md
- 05-State-Machine.md

---

# Purpose

The Memory Model defines the conceptual representation of learner-specific educational state within the AI Learning Harness (ALH).

Its purpose is to enable continuity across learning interactions by recording educational observations about a learner while remaining independent of implementation, storage technology, and runtime behavior.

The Memory Model describes _what is known about a learner_, rather than _what knowledge exists_ or _how educational decisions are made_.

---

# Objectives

The Memory Model SHOULD:

- preserve continuity across learning sessions;
- maintain learner-specific educational context;
- support adaptive learning;
- provide explainable educational history;
- separate learner state from educational knowledge;
- remain implementation-independent.

The Memory Model MUST NOT define storage mechanisms, execution behavior, or educational decision logic.

---

# Scope

The Memory Model defines:

- learner-specific educational state;
- educational observations;
- competency progression history;
- learning context;
- educational continuity.

It does not define:

- educational knowledge;
- competencies;
- learning strategies;
- assessment algorithms;
- implementation details.

---

# Architectural Role

The Memory Model represents the evolving educational profile of an individual learner.

Unlike the Knowledge Graph, which describes educational content, or the Competency Model, which defines educational expectations, the Memory Model records observations about a learner's educational journey.

Memory therefore provides historical and contextual information that may be consumed by other architectural components.

---

# Conceptual Responsibility

The Memory Model answers the question:

> "What is currently known about this learner?"

Examples include:

- completed learning activities;
- demonstrated competencies;
- identified knowledge gaps;
- previous educational interactions;
- observed learning progress;
- educational preferences when explicitly established.

The Memory Model records observations rather than educational rules.

---

# Educational Observations

Memory consists of learner-specific observations accumulated over time.

Observations SHOULD represent educational facts derived from learner interactions.

Examples include:

- competencies demonstrated;
- concepts requiring reinforcement;
- completed Learning Units;
- assessment outcomes;
- recurring misconceptions;
- educational milestones.

Observations SHOULD be explainable and attributable to prior educational evidence.

---

# Learning Continuity

The Memory Model enables educational continuity across independent learning sessions.

Memory SHOULD allow the educational system to:

- avoid unnecessary repetition;
- recognize previous accomplishments;
- continue ongoing learning objectives;
- maintain long-term educational progression.

The model supports continuity without prescribing educational behavior.

---

# Relationship to Knowledge Graph

The Knowledge Graph defines educational knowledge.

The Memory Model records learner interaction with that knowledge.

Conceptually:

Knowledge Graph answers:

> "What knowledge exists?"

Memory answers:

> "What has this learner learned, demonstrated, or struggled with?"

The responsibilities MUST remain distinct.

Knowledge MUST NOT become learner-specific.

Memory MUST NOT redefine educational knowledge.

---

# Relationship to Competency Model

The Competency Model defines educational capabilities.

Memory records learner-specific competency observations.

For example:

- expected competencies belong to the Competency Model;
- demonstrated competencies belong to Memory.

This separation preserves a stable educational framework while allowing individualized learning progression.

---

# Relationship to Assessment

Assessment produces educational evidence.

Memory preserves educational observations derived from that evidence.

Assessment determines educational outcomes.

Memory records those outcomes for future educational continuity.

The Memory Model does not perform evaluation.

---

# Relationship to Decision Engine

The Decision Engine MAY consume Memory to support adaptive educational decisions.

Memory provides learner context such as:

- demonstrated competencies;
- learning gaps;
- completed educational activities;
- historical progress.

The Decision Engine interprets Memory.

The Memory Model itself performs no decision-making.

---

# Relationship to Agent Pipeline

Memory is conceptually updated during the educational lifecycle after assessment activities have completed.

This aligns with the conceptual state progression defined in:

- 05-State-Machine.md

The Memory Model does not define when or how updates occur during implementation.

---

# Explainability

Educational recommendations SHOULD be traceable to learner observations stored in Memory.

Whenever possible, educational guidance SHOULD identify the relevant observations that influenced a recommendation.

Memory SHOULD avoid opaque or unexplained learner representations.

---

# Memory Evolution

Learner memory evolves throughout the educational journey.

Educational observations MAY:

- be added;
- be refined;
- be superseded by more recent evidence.

Memory SHOULD represent the learner's current educational understanding while preserving meaningful historical continuity.

The conceptual evolution of Memory does not prescribe any persistence strategy.

---

# Design Principles

The Memory Model SHOULD be:

- learner-centered;
- explainable;
- cumulative;
- evidence-informed;
- implementation-independent;
- educationally meaningful.

Memory SHOULD represent educational observations rather than inferred implementation state.

---

# Constraints

The Memory Model MUST NOT:

- replace the Knowledge Graph;
- redefine competencies;
- contain educational decision logic;
- prescribe implementation technology;
- define storage mechanisms;
- contain agent-specific behavior;
- encode prompt logic.

Its responsibility is limited to representing learner-specific educational state.

---

# Cross References

This document is conceptually related to:

- 06-Knowledge-Graph.md
- 07-Competency-Model.md
- 09-Decision-Engine.md
- 04-Agent-Pipeline.md
- 05-State-Machine.md

Together, these documents establish a clear separation between educational knowledge, educational capabilities, learner-specific state, and adaptive educational decision-making.
