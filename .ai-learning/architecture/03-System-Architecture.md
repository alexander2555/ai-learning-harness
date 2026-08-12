# System Architecture

Status: Accepted
Version: 1.0

Parent Documents:

- 00-Vision.md
- 01-Goals.md
- 02-Core-Principles.md

---

# 1. Purpose

This document describes the high-level architecture of AI Learning Harness (ALH).

It defines the major architectural building blocks, their responsibilities, interactions, and system boundaries.

Detailed behavior of each subsystem is specified in dedicated architecture documents.

---

# 2. Architectural Overview

AI Learning Harness (ALH) is a modular Educational Operating System that augments AI-powered development environments with adaptive learning, competency management, educational decision-making, and persistent memory.

ALH does **not** replace:

- IDEs;
- AI coding agents;
- Superpowers.

Instead, it provides an educational intelligence layer that guides how an AI agent teaches, evaluates, and adapts to the developer.

---

# 3. System Context

The following diagram illustrates the relationship between the major external systems.

```text
+------------------------------------------------------+
|                    Developer                         |
+------------------------------------------------------+
                         │
                         ▼
+------------------------------------------------------+
|                  IDE Environment                     |
|          (Windsurf, Devin, Future Agents)            |
+------------------------------------------------------+
                         │
                         ▼
+------------------------------------------------------+
|                 AI Coding Agent                      |
+------------------------------------------------------+
                         │
        ┌────────────────┴────────────────┐
        ▼                                 ▼
+----------------------+      +--------------------------+
|   Superpowers        |      |   AI Learning Harness    |
|                      |      |                          |
| Workflow Engine      |      | Educational Intelligence |
+----------------------+      +--------------------------+
```

---

# 4. Architectural Responsibilities

The responsibilities of each major system are clearly separated.

## Developer

Responsible for:

- making engineering decisions;
- implementing software;
- learning and improving competencies.

---

## IDE Agent

Responsible for:

- interacting with the developer;
- generating code;
- executing development workflows.

---

## Superpowers

Responsible for:

- workflow execution;
- commands;
- templates;
- development processes.

Superpowers is treated as an immutable external dependency.

---

## AI Learning Harness

Responsible for:

- educational strategy;
- competency management;
- adaptive mentoring;
- learning memory;
- engineering assessment;
- educational decision support.

---

# 5. Internal Architecture

ALH consists of several cooperating subsystems.

```text
AI Learning Harness

├── Agent Pipeline
│
├── Decision Engine
│
├── Knowledge Graph
│
├── Competency Model
│
├── Memory System
│
├── Educational Methodology
│
├── Project Context
│
├── Configuration
│
└── Integration Layer
```

Each subsystem has a single primary responsibility.

---

# 6. Core Components

## 6.1 Agent Pipeline

Coordinates the educational behavior of the AI agent.

Responsibilities include:

- selecting active roles;
- coordinating execution flow;
- orchestrating educational activities.

Detailed specification:

`04-Agent-Pipeline.md`

---

## 6.2 Decision Engine

Determines how ALH should respond to the current learning situation.

Responsible for:

- selecting Learning Units;
- determining teaching strategy;
- choosing autonomy level;
- prioritizing competencies.

Detailed specification:

`09-Decision-Engine.md`

---

## 6.3 Knowledge Graph

Represents developer knowledge as an interconnected graph of competencies.

Stores:

- Learning Units;
- relationships;
- technologies;
- architecture concepts;
- project artifacts.

Detailed specification:

`06-Knowledge-Graph.md`

---

## 6.4 Competency Model

Defines how competencies evolve over time.

Tracks:

- status;
- automation level;
- Learning Debt;
- evidence;
- historical progression.

Detailed specification:

`07-Competency-Model.md`

---

## 6.5 Memory System

Maintains persistent educational context.

Includes:

- project memory;
- learning history;
- current session;
- architectural decisions;
- developer progress.

Detailed specification:

`08-Memory-Model.md`

---

## 6.6 Educational Methodology

Defines how teaching occurs.

Includes:

- Socratic method;
- assessment;
- competency evaluation;
- review process;
- adaptive mentoring.

Detailed specification:

`.ai-learning/methodology/`

---

## 6.7 Project Context

Represents the software project currently being developed.

Includes:

- requirements;
- roadmap;
- architecture;
- risks;
- project decisions.

Project context connects educational decisions to real engineering work.

---

## 6.8 Integration Layer

Provides communication between:

- IDE agent;
- Superpowers;
- ALH components.

The Integration Layer is responsible for exchanging information, not for implementing educational logic.

---

# 7. High-Level Workflow

The following sequence illustrates the typical execution flow.

```text
Developer Request
        │
        ▼
Intent Analysis
        │
        ▼
Project Context Analysis
        │
        ▼
Competency Analysis
        │
        ▼
Decision Engine
        │
        ▼
Agent Pipeline
        │
        ▼
Teaching Strategy
        │
        ▼
Development Activity
        │
        ▼
Review & Assessment
        │
        ▼
Memory Update
        │
        ▼
Knowledge Graph Update
```

Each completed activity contributes to both project progress and competency development.

---

# 8. Data Ownership

Each subsystem owns a distinct area of responsibility.

| Component        | Primary Data                     |
| ---------------- | -------------------------------- |
| Knowledge Graph  | Learning Units and relationships |
| Competency Model | Competency state                 |
| Memory System    | Persistent learning context      |
| Project Context  | Project information              |
| Decision Engine  | Educational decisions            |
| Agent Pipeline   | Runtime orchestration            |

Subsystems may consume data owned by other components but should not duplicate ownership.

---

# 9. Extension Points

ALH is designed to support future expansion.

Potential extension areas include:

- additional IDE agents;
- new educational strategies;
- alternative assessment models;
- additional competency layers;
- new memory backends;
- specialized teaching agents.

Extensions should preserve existing architectural boundaries.

---

# 10. Design Constraints

The following constraints apply to the entire architecture.

## Modular Design

Each subsystem should have a clearly defined responsibility.

---

## Loose Coupling

Subsystems should communicate through well-defined interfaces.

---

## Explainability

Educational decisions should remain explainable.

---

## Persistent Learning

Developer progress should survive individual sessions.

---

## Superpowers Compatibility

ALH must remain compatible with an unmodified Superpowers installation.

---

## Project-Driven Learning

Educational activities should be derived from project needs whenever possible.

---

# 11. Relationship to Repository Structure

The logical architecture maps to the repository as follows:

```text
.ai-learning/

├── architecture/
├── system/
├── methodology/
├── development/
├── knowledge/
├── memory/
├── project/
├── prompts/
├── templates/
├── logs/
├── config/
└── validation/
```

The repository organization reflects architectural responsibilities rather than implementation details.

---

# 12. Summary

AI Learning Harness is organized as a collection of modular subsystems that cooperate to provide adaptive engineering education.

The architecture emphasizes:

- separation of responsibilities;
- modularity;
- explainability;
- competency-driven learning;
- persistent educational memory;
- compatibility with Superpowers.

Subsequent architecture documents specify each subsystem in greater detail.
