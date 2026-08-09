# Repository Structure

Version: 0.1 Draft

Parent Documents:

- 03-System-Architecture.md
- ADR-001-Separation-of-Application-and-Learning-Infrastructure.md
- 10-Superpowers-Integration.md

---

# Purpose

This document defines the conceptual repository structure of the AI Learning Harness (ALH).

Its purpose is to establish clear architectural boundaries between application code, learning infrastructure, external capabilities, and supporting project resources.

The repository structure represents architectural separation and ownership boundaries.

It does not define implementation workflows or development tooling.

---

# Objectives

The repository structure SHOULD:

- preserve separation of responsibilities;
- make architectural boundaries visible;
- support maintainability;
- support documentation by default;
- prevent mixing application and learning infrastructure concerns.

The repository structure MUST remain consistent with ADR-001.

---

# Scope

This document defines:

- top-level repository responsibilities;
- ALH directory boundaries;
- ownership principles;
- architectural organization.

It does not define:

- source code organization;
- programming language conventions;
- build systems;
- deployment structure;
- implementation workflows.

---

# Repository Architecture

The repository contains multiple architectural domains.

Conceptually:

```text
project-root/

├── .superpowers/
├── .ai-learning/
│
├── src/
├── tests/
├── docs/
├── infra/
├── scripts/
│
├── package.json
├── tsconfig.json
├── docker-compose.yml
└── README.md
```

Each area has a distinct architectural responsibility.

---

# Application Space

The application space contains the product implementation.

Primary locations include:

```text
src/
tests/
docs/
infra/
scripts/
```

These areas belong to the application domain.

Application code MUST remain independent from ALH educational infrastructure.

---

# Learning Infrastructure Space

The AI Learning Harness resides exclusively within:

```text
.ai-learning/
```

This directory represents the educational operating system layer.

It contains:

- architecture;
- methodology;
- development guidance;
- knowledge models;
- memory definitions;
- project learning context;
- templates;
- prompts;
- validation resources.

Application implementation MUST NOT be placed inside `.ai-learning/`.

---

# Superpowers Space

Superpowers exists separately:

```text
.superpowers/
```

It represents an external reusable capability source.

Its ownership and responsibility are independent from ALH.

The repository structure MUST preserve Superpowers immutability.

---

# ALH Internal Structure

The approved ALH structure is:

```text
.ai-learning/

├── system/
├── architecture/
├── methodology/
├── development/
├── knowledge/
├── memory/
├── project/
├── templates/
├── prompts/
├── logs/
├── config/
└── validation/
```

Each directory represents a conceptual responsibility boundary.

---

# Directory Responsibilities

## system/

Contains system-level ALH definitions.

Responsible for:

- foundational system descriptions;
- global educational infrastructure concepts.

---

## architecture/

Contains architectural specifications.

Responsible for:

- architecture guides;
- system models;
- conceptual architecture documents.

Architecture documents MUST describe the system independently from implementation.

---

## methodology/

Contains educational methodology.

Responsible for:

- learning approaches;
- educational processes;
- teaching principles.

This area is not part of Stage 1 architecture specification.

---

## development/

Contains development methodology and engineering practices related to ALH usage.

---

## knowledge/

Contains knowledge-related educational structures.

This area is associated with Knowledge Graph concepts.

---

## memory/

Contains learner memory concepts and related educational state definitions.

---

## project/

Contains project-specific learning context.

---

## templates/

Contains reusable educational and engineering templates.

---

## prompts/

Contains prompt-related assets.

Prompt architecture belongs to a later project stage and MUST NOT influence Stage 1 architecture.

---

## logs/

Contains operational records related to ALH activity.

---

## config/

Contains configuration-related resources.

---

## validation/

Reserved for validation-related resources.

---

# Separation of Responsibilities

The repository structure MUST preserve the following boundaries:

```text
Application
    |
    | independent from
    |
ALH Learning Infrastructure
    |
    | independent from
    |
Superpowers
```

No directory should become a shared ownership area between these domains.

---

# Documentation by Default

Architectural and educational decisions SHOULD be represented as explicit documentation artifacts.

Important decisions MUST NOT exist only as implicit knowledge.

The repository structure SHOULD make important concepts discoverable.

---

# Relationship to Architecture

The repository structure is an architectural representation of responsibility boundaries.

Changing repository organization SHOULD be considered an architectural change when it affects:

- ownership;
- system boundaries;
- responsibility separation.

Such changes SHOULD be evaluated through the ADR process.

---

# Constraints

The repository structure MUST NOT:

- mix application code with educational infrastructure;
- place learner state into application directories;
- place application implementation into `.ai-learning/`;
- modify immutable Superpowers content;
- encode runtime architecture through directory layout.

---

# Design Principles

The repository structure SHOULD be:

- explicit;
- discoverable;
- maintainable;
- responsibility-oriented;
- extensible.

Directory names SHOULD reflect architectural concepts rather than temporary implementation details.

---

# Cross References

This document is conceptually related to:

- ADR-001-Separation-of-Application-and-Learning-Infrastructure.md
- 03-System-Architecture.md
- 10-Superpowers-Integration.md
- 12-ADR.md

Together, these documents define how architectural ownership, repository organization, and decision governance are represented within ALH.
