# Agent Pipeline

Status: Accepted
Version: 1.0

Parent Documents:

- 00-Vision.md
- 01-Goals.md
- 02-Core-Principles.md
- 03-System-Architecture.md

---

# 1. Purpose

This document defines the internal execution model of AI Learning Harness (ALH).

Rather than treating the AI assistant as a single monolithic agent, ALH models the assistant as a dynamic pipeline of specialized logical components.

Each component has a well-defined responsibility and participates only when required.

---

# 2. Architectural Principle

ALH does **not** assume that one agent performs every task.

Instead, the response generation process is decomposed into multiple logical stages.

```text
User Request

↓

Agent Pipeline

↓

Final Response
```

The pipeline is logical rather than physical.

It defines responsibilities, not implementation processes.

A single LLM may execute multiple pipeline stages internally.

Likewise, future implementations may distribute stages across multiple cooperating agents.

---

# 3. Goals

The Agent Pipeline exists to achieve several objectives.

- Separate responsibilities.
- Improve reasoning quality.
- Support adaptive educational behavior.
- Enable future extensibility.
- Simplify verification.
- Avoid monolithic prompts.

---

# 4. Pipeline Overview

The current baseline consists of the following logical components.

```text
Intent Analyzer

↓

Project Manager

↓

Architect

↓

Teacher

↓

Developer

↓

Reviewer

↓

Security Auditor

↓

Assessor

↓

Memory Manager

↓

Response Generator
```

The execution order is logical.

Actual execution is dynamic.

Some stages may be skipped.

Others may execute multiple times.

---

# 5. Dynamic Pipeline

Pipeline execution depends on the current situation.

Example:

Simple factual question

```text
Intent Analyzer

↓

Teacher

↓

Response Generator
```

Architecture discussion

```text
Intent Analyzer

↓

Architect

↓

Teacher

↓

Reviewer

↓

Response Generator
```

Implementation task

```text
Intent Analyzer

↓

Project Manager

↓

Architect

↓

Developer

↓

Reviewer

↓

Memory Manager

↓

Response Generator
```

Learning assessment

```text
Intent Analyzer

↓

Teacher

↓

Assessor

↓

Memory Manager

↓

Response Generator
```

The pipeline should execute only the stages necessary for the current task.

---

# 6. Pipeline Components

## 6.1 Intent Analyzer

### Purpose

Determines what the user is actually trying to accomplish.

### Responsibilities

- classify request;
- identify educational intent;
- determine project relevance;
- identify ambiguity.

### Outputs

- task type;
- educational context;
- confidence level.

---

## 6.2 Project Manager

### Purpose

Maintains alignment between user requests and project goals.

### Responsibilities

- understand current project state;
- identify project dependencies;
- evaluate task priority;
- connect work to roadmap.

### Outputs

- project context;
- affected artifacts;
- development priorities.

---

## 6.3 Architect

### Purpose

Provides engineering and architectural reasoning.

### Responsibilities

- evaluate design options;
- explain trade-offs;
- recommend architectural approaches;
- maintain consistency.

### Outputs

- architectural recommendations;
- engineering rationale.

---

## 6.4 Teacher

### Purpose

Implements the educational strategy.

### Responsibilities

- explain concepts;
- ask guiding questions;
- provide hints;
- adapt explanations;
- apply the Socratic method.

### Outputs

- learning guidance;
- educational explanations.

---

## 6.5 Developer

### Purpose

Assist with software implementation.

### Responsibilities

- implementation guidance;
- code generation;
- refactoring;
- debugging support.

### Outputs

- implementation artifacts.

---

## 6.6 Reviewer

### Purpose

Evaluate engineering quality.

### Responsibilities

- review code;
- identify issues;
- suggest improvements;
- validate best practices.

### Outputs

- review findings;
- improvement recommendations.

---

## 6.7 Security Auditor

### Purpose

Ensure security considerations are included.

### Responsibilities

- identify risks;
- review security implications;
- recommend mitigations.

### Outputs

- security findings.

---

## 6.8 Assessor

### Purpose

Evaluate developer competency.

### Responsibilities

- estimate competency level;
- identify knowledge gaps;
- evaluate Learning Debt;
- determine mastery evidence.

### Outputs

- competency updates;
- assessment results.

---

## 6.9 Memory Manager

### Purpose

Maintain educational continuity.

### Responsibilities

- update learning memory;
- update project memory;
- maintain competency history;
- synchronize context.

### Outputs

- updated memory state.

---

## 6.10 Response Generator

### Purpose

Construct the final response delivered to the developer.

### Responsibilities

- combine outputs from previous stages;
- preserve educational objectives;
- ensure consistency;
- generate the final response.

### Outputs

- user-visible response.

---

# 7. Pipeline Interaction

Pipeline components exchange structured information.

Typical information includes:

- user intent;
- project context;
- competency state;
- learning strategy;
- implementation results;
- review findings;
- assessment results.

Each component enriches the shared context before passing it forward.

---

# 8. Decision Boundaries

Each component owns a specific class of decisions.

| Component          | Primary Decision                             |
| ------------------ | -------------------------------------------- |
| Intent Analyzer    | What is the user asking?                     |
| Project Manager    | How does it affect the project?              |
| Architect          | What is the best engineering approach?       |
| Teacher            | How should learning occur?                   |
| Developer          | How should implementation proceed?           |
| Reviewer           | Does the solution meet quality expectations? |
| Security Auditor   | Are security risks addressed?                |
| Assessor           | What did the developer learn?                |
| Memory Manager     | What should be remembered?                   |
| Response Generator | How should everything be communicated?       |

No component should assume the responsibilities of another.

---

# 9. Pipeline Characteristics

The Agent Pipeline is designed to be:

## Modular

Each stage has a single primary responsibility.

---

## Adaptive

Execution depends on context.

---

## Explainable

Pipeline decisions should be understandable.

---

## Extensible

Additional stages may be introduced in future versions.

---

## Independent

Pipeline stages should remain logically independent.

---

# 10. Relationship with Other Subsystems

The Agent Pipeline coordinates but does not replace other architectural components.

```text
                 Agent Pipeline

                        │

        ┌───────────────┼───────────────┐

        ▼               ▼               ▼

Decision Engine   Knowledge Graph   Memory System
```

The pipeline consumes information produced by these systems and coordinates educational behavior.

It is not responsible for storing long-term knowledge or making competency decisions independently.

---

# 11. Future Evolution

Future versions may introduce additional pipeline stages.

Examples include:

- Research Assistant;
- Documentation Specialist;
- Testing Advisor;
- Performance Analyst;
- DevOps Advisor;
- Accessibility Reviewer.

The pipeline architecture is intentionally open for extension while preserving stable responsibilities.

---

# 12. Summary

The Agent Pipeline is the execution model of ALH.

It separates educational, engineering, and project responsibilities into independent logical components.

This modular approach improves:

- explainability;
- adaptability;
- maintainability;
- educational effectiveness;
- future extensibility.

Subsequent documents define the internal models used by the pipeline, including state management, knowledge representation, memory, and decision-making.
