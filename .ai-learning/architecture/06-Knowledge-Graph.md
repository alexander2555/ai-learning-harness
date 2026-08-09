# Knowledge Graph

Version: 0.1 Draft

Parent Documents:

- 00-Vision.md
- 01-Goals.md
- 02-Core-Principles.md
- 03-System-Architecture.md

---

# Purpose

The Knowledge Graph defines the conceptual representation of educational knowledge within the AI Learning Harness (ALH).

Its purpose is to organize competencies, concepts, learning artifacts, and their relationships into a coherent educational model that enables adaptive learning without prescribing implementation details.

The Knowledge Graph represents educational structure rather than storage technology.

---

# Objectives

The Knowledge Graph SHOULD:

- represent learning concepts as interconnected knowledge;
- support competency-driven education;
- enable adaptive learning paths;
- expose prerequisite relationships;
- support explainable educational decisions;
- remain independent from implementation or persistence mechanisms.

The Knowledge Graph MUST NOT define runtime behavior or database structures.

---

# Scope

The Knowledge Graph describes:

- educational concepts;
- competencies;
- relationships between knowledge elements;
- educational dependencies;
- learning progression.

It does not define:

- memory storage;
- agent execution;
- prompt generation;
- implementation technology.

Those concerns are addressed by separate architectural components.

---

# Architectural Role

Within the conceptual architecture, the Knowledge Graph serves as the educational model that describes what can be learned and how knowledge elements relate to one another.

It provides semantic structure that may be consumed by multiple architectural components, including educational planning, assessment, memory management, and adaptive decision-making.

The Knowledge Graph is a shared conceptual model rather than an executable workflow.

---

# Core Concepts

The Knowledge Graph consists of interconnected educational entities.

Examples include:

- Competencies
- Concepts
- Skills
- Learning Units
- Projects
- Evidence
- Learning Objectives

These entities are connected through explicit semantic relationships.

The graph SHOULD remain understandable to both human educators and AI agents.

---

# Knowledge Relationships

Knowledge entities MAY be connected through relationships such as:

- prerequisite
- depends on
- extends
- refines
- demonstrates
- applies
- reinforces
- relates to

Relationships SHOULD express educational meaning rather than implementation concerns.

The graph SHOULD avoid ambiguous or implicit dependencies whenever possible.

---

# Competency Integration

Competencies represent measurable educational capabilities.

Knowledge entities MAY contribute to one or more competencies.

Likewise, a competency MAY require multiple knowledge entities.

This many-to-many relationship enables flexible educational planning while maintaining competency-first learning.

The detailed competency model is defined separately in:

```
07-Competency-Model.md
```

---

# Learning Units

Learning Units represent coherent educational activities.

A Learning Unit MAY reference multiple knowledge entities.

Likewise, a single knowledge entity MAY appear in multiple Learning Units.

This separation allows educational content to evolve without changing the conceptual knowledge model.

---

# Prerequisite Structure

Knowledge dependencies SHOULD be represented explicitly.

Prerequisite relationships enable educational progression while avoiding hidden assumptions.

Examples include:

- foundational concepts;
- prerequisite skills;
- required competencies;
- supporting knowledge.

The Knowledge Graph SHOULD make dependency chains explainable.

---

# Educational Navigation

The Knowledge Graph supports navigation through educational knowledge.

Typical navigation paths MAY include:

- prerequisite exploration;
- competency progression;
- related concepts;
- reinforcement opportunities;
- project connections.

Navigation is conceptual and does not prescribe learning strategy.

---

# Explainability

Educational decisions SHOULD be traceable to elements within the Knowledge Graph.

Whenever possible, recommendations SHOULD reference identifiable concepts or competencies rather than opaque reasoning.

This supports transparency and learner understanding.

---

# Relationship to Memory

The Knowledge Graph describes educational knowledge.

Memory describes learner state.

The Knowledge Graph answers:

> "What knowledge exists?"

Memory answers:

> "What does this learner currently know?"

These responsibilities MUST remain separated.

---

# Relationship to Assessment

Assessment evaluates learner progress relative to the Knowledge Graph.

Assessment SHOULD determine which concepts, skills, or competencies have been demonstrated.

The Knowledge Graph itself does not perform assessment.

---

# Relationship to Adaptive Learning

Adaptive learning MAY use the Knowledge Graph to identify:

- prerequisite gaps;
- alternative learning paths;
- reinforcement opportunities;
- competency progression.

The graph provides educational context rather than adaptive logic.

Decision-making remains the responsibility of the Decision Engine.

---

# Design Principles

The Knowledge Graph SHOULD be:

- educational rather than technical;
- explainable;
- extensible;
- implementation-independent;
- competency-oriented;
- reusable across educational workflows.

The graph MUST remain stable independently of individual learning sessions.

---

# Constraints

The Knowledge Graph MUST NOT:

- define runtime execution;
- define storage implementation;
- replace learner memory;
- contain agent-specific logic;
- encode prompt behavior.

Its responsibility is limited to representing educational knowledge and relationships.

---

# Cross References

This document is conceptually related to:

- 04-Agent-Pipeline.md
- 05-State-Machine.md
- 07-Competency-Model.md
- 08-Memory-Model.md
- 09-Decision-Engine.md

Together, these documents define how educational knowledge, learner state, and educational decisions interact while preserving clear separation of responsibilities.
