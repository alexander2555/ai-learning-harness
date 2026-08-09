# Competency Model

Version: 0.1 Draft

Parent Documents:

- 06-Knowledge-Graph.md

---

# Purpose

The Competency Model defines the conceptual representation of educational competencies within the AI Learning Harness (ALH).

Its purpose is to establish a consistent framework for describing learner capabilities, guiding educational progression, and supporting assessment while remaining independent of implementation details.

The Competency Model describes _what learners are expected to be capable of_, rather than _how those capabilities are achieved_.

---

# Objectives

The Competency Model SHOULD:

- support competency-first learning;
- define educational capabilities independently of specific learning activities;
- enable measurable educational progression;
- support adaptive learning;
- provide a common language for assessment and planning;
- remain implementation-independent.

The Competency Model MUST NOT prescribe teaching strategies, assessment methods, or implementation mechanisms.

---

# Scope

The Competency Model defines:

- educational competencies;
- competency relationships;
- competency progression;
- competency mapping to knowledge;
- conceptual competency states.

It does not define:

- learning content;
- learner memory;
- educational workflows;
- runtime decision-making;
- implementation details.

---

# Architectural Role

The Competency Model represents the educational capabilities that learners are expected to develop.

It acts as the bridge between educational knowledge and learner progress by providing stable learning objectives independent of individual Learning Units or projects.

Competencies serve as long-lived educational targets across the system.

---

# Competency Definition

A competency represents a demonstrable capability within a defined educational domain.

A competency SHOULD be:

- observable;
- assessable;
- explainable;
- reusable across multiple learning contexts;
- independent of any specific project or exercise.

Competencies SHOULD remain stable even as educational materials evolve.

---

# Relationship to Knowledge

Competencies are supported by knowledge but are not equivalent to knowledge.

Knowledge represents information, concepts, and relationships.

Competencies represent the ability to apply that knowledge.

A competency MAY depend on multiple knowledge entities.

Likewise, a knowledge entity MAY contribute to multiple competencies.

This separation preserves conceptual clarity between knowing and doing.

---

# Relationship to Learning Units

Learning Units provide opportunities to develop competencies.

A Learning Unit MAY contribute to one or more competencies.

A competency MAY be addressed by multiple Learning Units.

Learning Units therefore represent educational activities rather than competency definitions.

---

# Competency Progression

Competencies MAY develop incrementally over time.

Educational progression SHOULD reflect increasing capability rather than completion of isolated tasks.

Progression is conceptual and does not prescribe specific educational sequences.

Adaptive learning components MAY use competency progression to guide educational planning.

---

# Competency Dependencies

Competencies MAY depend on other competencies.

Dependencies SHOULD be represented explicitly whenever educational progression requires foundational capabilities.

Dependency relationships SHOULD remain educational rather than procedural.

The Competency Model MUST NOT assume hidden prerequisite knowledge.

---

# Competency Evidence

Competencies are demonstrated through educational evidence.

Evidence MAY originate from:

- completed Learning Units;
- project work;
- practical exercises;
- assessments;
- documented reasoning;
- other educational artifacts.

The Competency Model identifies the need for evidence but does not define how evidence is evaluated.

Evaluation responsibilities belong to the Assessment process.

---

# Competency States

The Competency Model recognizes that learner capability changes over time.

Conceptually, a competency MAY exist in different states relative to a learner.

Examples include:

- not yet introduced;
- currently developing;
- demonstrated;
- requires reinforcement.

These states describe educational interpretation rather than implementation.

The representation of learner-specific competency state belongs to the Memory Model.

---

# Explainability

Educational recommendations SHOULD be explainable in terms of competencies.

Whenever educational guidance references learner progress, it SHOULD identify the relevant competencies rather than relying on opaque reasoning.

Competency explanations SHOULD remain understandable to learners.

---

# Relationship to Assessment

Assessment determines the degree to which competencies have been demonstrated.

The Competency Model defines educational targets.

Assessment evaluates learner evidence against those targets.

The Competency Model itself performs no evaluation.

---

# Relationship to Memory

The Competency Model defines educational expectations.

Memory records learner-specific observations.

Conceptually:

- Competency Model answers:

  > "What capabilities exist?"

- Memory answers:
  > "What capabilities has this learner demonstrated?"

These responsibilities MUST remain separated.

---

# Relationship to Adaptive Learning

Adaptive learning MAY use competencies to:

- identify educational gaps;
- recommend Learning Units;
- prioritize reinforcement;
- support personalized progression.

Adaptive behavior belongs to the Decision Engine.

The Competency Model provides only the conceptual educational structure.

---

# Design Principles

The Competency Model SHOULD be:

- competency-first;
- measurable;
- explainable;
- reusable;
- implementation-independent;
- educationally meaningful.

Competencies SHOULD remain stable across educational sessions and learning resources.

---

# Constraints

The Competency Model MUST NOT:

- define implementation;
- prescribe assessment algorithms;
- encode educational workflows;
- replace learner memory;
- define prompt behavior;
- contain agent-specific logic.

Its responsibility is limited to representing educational capabilities and their conceptual relationships.

---

# Cross References

This document is conceptually related to:

- 06-Knowledge-Graph.md
- 08-Memory-Model.md
- 09-Decision-Engine.md
- 04-Agent-Pipeline.md
- 05-State-Machine.md

Together, these documents define the relationship between educational knowledge, learner capabilities, learner state, and adaptive educational decision-making while preserving clear separation of responsibilities.
