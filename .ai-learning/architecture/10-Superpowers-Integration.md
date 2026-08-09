# Superpowers Integration

Version: 0.1 Draft

Parent Documents:

- 03-System-Architecture.md
- ADR-001-Separation-of-Application-and-Learning-Infrastructure.md

---

# Purpose

This document defines the conceptual integration of the Superpowers repository within the AI Learning Harness (ALH) architecture.

Its purpose is to establish clear architectural boundaries between the immutable Superpowers repository and the ALH educational infrastructure while preserving separation of responsibilities and implementation independence.

This document does not define the contents of Superpowers.

---

# Objectives

The Superpowers integration SHOULD:

- preserve architectural separation;
- enable reuse of shared capabilities;
- prevent ownership ambiguity;
- maintain implementation independence;
- support long-term maintainability.

The integration MUST remain consistent with ADR-001.

---

# Scope

This document defines:

- the architectural role of Superpowers;
- responsibility boundaries;
- integration principles;
- ownership model.

It does not define:

- implementation details;
- runtime interaction;
- synchronization mechanisms;
- deployment strategy;
- versioning processes.

---

# Architectural Role

Superpowers is an external architectural dependency of ALH.

It provides reusable capabilities that MAY be consumed by the learning infrastructure without becoming part of the learning architecture itself.

Superpowers remains outside the educational domain.

ALH remains responsible for educational behavior.

---

# Responsibility Boundaries

Architectural responsibilities are separated as follows.

Superpowers is responsible for reusable technical capabilities.

Examples MAY include:

- reusable engineering assets;
- shared tooling;
- common development utilities;
- generic project support resources.

ALH is responsible for:

- educational architecture;
- educational reasoning;
- learner interaction;
- competency-driven learning;
- educational state;
- educational decision-making.

Responsibilities MUST NOT overlap.

---

# Ownership

Superpowers and ALH have independent ownership.

Changes to ALH MUST NOT require modification of Superpowers.

Likewise, changes within Superpowers SHOULD NOT require architectural changes within ALH.

The integration is intentionally loosely coupled.

---

# Immutability Principle

Superpowers is considered immutable from the perspective of ALH.

ALH MUST treat Superpowers as an external dependency.

ALH MUST NOT redefine, restructure, or directly modify Superpowers.

Architectural assumptions about Superpowers SHOULD remain minimal.

---

# Integration Principles

Integration SHOULD follow the following principles:

- clear responsibility boundaries;
- loose architectural coupling;
- educational independence;
- implementation independence;
- explicit ownership.

Educational concepts MUST remain defined exclusively within ALH.

Reusable technical capabilities SHOULD remain within Superpowers.

---

# Relationship to ALH

ALH consumes capabilities provided by Superpowers where appropriate.

This relationship is unidirectional from an architectural perspective.

Educational architecture remains entirely contained within:

```text
.ai-learning/
```

Superpowers does not become part of the educational model.

---

# Relationship to Repository Structure

The repository structure reflects architectural separation.

Conceptually:

```text
project-root/

├── .superpowers/
└── .ai-learning/
```

These directories represent distinct architectural concerns.

Their coexistence within a single repository does not imply shared ownership.

---

# Relationship to Agent Pipeline

The Agent Pipeline operates entirely within ALH.

Superpowers does not participate as an educational component of the pipeline.

Any reusable capabilities obtained from Superpowers remain external to educational decision-making.

---

# Relationship to Educational Models

The following educational models are fully owned by ALH:

- Knowledge Graph;
- Competency Model;
- Memory Model;
- Decision Engine.

Superpowers neither defines nor owns educational concepts.

---

# Design Principles

The integration SHOULD be:

- loosely coupled;
- explainable;
- maintainable;
- implementation-independent;
- educationally isolated.

Architectural dependencies SHOULD remain explicit.

---

# Constraints

Superpowers MUST NOT:

- contain learner-specific educational state;
- define competencies;
- define educational knowledge;
- participate in educational decision-making;
- redefine the ALH architecture.

ALH MUST NOT:

- modify Superpowers;
- assume ownership of Superpowers assets;
- embed educational concepts into Superpowers.

The architectural separation defined by ADR-001 MUST be preserved.

---

# Cross References

This document is conceptually related to:

- ADR-001-Separation-of-Application-and-Learning-Infrastructure.md
- 03-System-Architecture.md
- 04-Agent-Pipeline.md
- 11-Repository-Structure.md

Together, these documents define the architectural relationship between the application, the educational infrastructure, and external reusable capabilities.
