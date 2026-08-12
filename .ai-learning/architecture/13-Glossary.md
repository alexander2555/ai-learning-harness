# Glossary

Status: Accepted
Version: 1.0

Parent Documents:

- 00-Vision.md
- 02-Core-Principles.md
- 03-System-Architecture.md
- 06-Knowledge-Graph.md
- 07-Competency-Model.md
- 08-Memory-Model.md
- 09-Decision-Engine.md

---

# Purpose

This document defines the official terminology used within the AI Learning Harness (ALH) architecture.

Its purpose is to establish a shared vocabulary across architectural, educational, and engineering documentation.

Consistent terminology is required to preserve architectural clarity and prevent ambiguity.

---

# Usage Rules

Terms defined in this glossary SHOULD be used consistently across ALH documentation.

New architectural concepts SHOULD NOT be introduced without defining their terminology.

Existing approved terms MUST preserve their original meaning unless changed through an ADR.

---

# Glossary

---

## AI Learning Harness (ALH)

An Educational Operating System designed to support AI-assisted learning through structured educational processes, competency development, adaptive learning, and explainable interactions.

ALH represents the learning infrastructure layer and remains separate from application implementation.

---

## Educational Operating System

A conceptual system that organizes learning processes, knowledge structures, learner state, and educational decisions into a coherent architecture.

It is not an operating system in the traditional software sense.

---

## Learning Unit

A coherent educational activity designed to develop knowledge, skills, or competencies.

A Learning Unit MAY include:

- learning objectives;
- educational activities;
- practice;
- evidence of progress.

Learning Units are educational structures, not implementation workflows.

---

## Competency

A demonstrable capability that represents what a learner can apply or achieve.

A competency is:

- observable;
- assessable;
- explainable.

Competencies represent capabilities rather than isolated pieces of knowledge.

---

## Competency Model

The conceptual model describing educational capabilities, their relationships, and learner progression targets.

The Competency Model defines expected capabilities, not learner-specific state.

---

## Knowledge Graph

A conceptual representation of educational knowledge and relationships between knowledge entities.

The Knowledge Graph describes what knowledge exists and how concepts relate.

It does not describe learner state.

---

## Knowledge Entity

A conceptual element represented within the Knowledge Graph.

Examples MAY include:

- concepts;
- skills;
- principles;
- relationships;
- educational topics.

---

## Memory Model

The conceptual model representing learner-specific educational state.

The Memory Model describes what is known about a learner based on educational observations.

---

## Educational Observation

A learner-specific record or interpretation derived from educational evidence.

Examples MAY include:

- demonstrated competency;
- completed Learning Unit;
- identified learning gap.

---

## Decision Engine

A conceptual architectural responsibility responsible for interpreting educational context and determining appropriate educational direction.

The Decision Engine does not define knowledge, competencies, or memory.

---

## Agent Pipeline

A conceptual sequence of educational responsibilities performed during learner interaction.

The pipeline defines responsibilities rather than implementation components.

---

## State Machine

A conceptual model describing educational interaction lifecycle and progression between educational states.

The State Machine does not define implementation behavior.

---

## Adaptive Learning

An educational approach where learning direction may change according to learner context, progress, and demonstrated capability.

Adaptive Learning relies on explainable interpretation of educational context.

---

## Learning Debt

A representation of unresolved educational gaps, missing competencies, incomplete understanding, or areas requiring reinforcement.

Learning Debt represents educational imbalance that may influence future learning decisions.

---

## Automation Level

A conceptual measure describing the degree of automation applied within educational or engineering processes.

Automation Level does not replace human understanding or educational responsibility.

---

## Explainability

The ability to provide understandable reasons for educational decisions, recommendations, or system behavior.

Explainability is a core architectural requirement.

---

## Evidence

A demonstrable artifact or observation supporting evaluation of learner progress or competency development.

Evidence MAY include:

- completed work;
- explanations;
- assessments;
- project outcomes.

---

## Educational Context

The combined information required to understand the current learning situation.

Educational Context MAY include:

- learner state;
- competencies;
- knowledge relationships;
- objectives;
- previous observations.

---

## Superpowers

An external reusable capability source integrated with the repository.

Superpowers is immutable from the ALH perspective and remains separate from educational infrastructure.

---

## Architecture Decision Record (ADR)

A documented architectural decision that records context, decision rationale, and consequences.

ADRs govern architectural evolution.

---

## Architectural Baseline

The currently approved set of architectural decisions and specifications that define the accepted system structure.

Changes to the baseline require appropriate architectural review.

---

## Learning Infrastructure

The educational system layer contained within:

```text
.ai-learning/
```

It includes architecture, methodology, knowledge models, memory concepts, and related educational resources.

---

## Application Code

The product implementation layer outside ALH.

Application code MUST remain independent from learning infrastructure according to ADR-001.

---

# Term Relationships

The following relationships summarize the core ALH concepts:

```text
Knowledge Graph
        |
        | provides knowledge foundation
        ▼
Competency Model
        |
        | defines capabilities
        ▼
Assessment
        |
        | produces evidence
        ▼
Memory Model
        |
        | provides learner context
        ▼
Decision Engine
        |
        | guides educational direction
        ▼
Agent Pipeline
```

---

# Terminology Constraints

The following distinctions MUST be preserved:

Knowledge is not Competency.

Competency is not Memory.

Memory is not Knowledge.

Decision Engine is not Agent Pipeline.

Architecture is not Implementation.

Methodology is not Architecture.

Maintaining these distinctions is required for architectural integrity.

---

# Cross References

This document is conceptually related to:

- all Architecture Specification documents;
- Stage 2 Educational Methodology documents;
- future Development Methodology documents.

The glossary SHOULD be updated when approved architectural concepts introduce new terminology.
