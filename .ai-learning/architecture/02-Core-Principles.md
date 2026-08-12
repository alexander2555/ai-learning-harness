# Core Principles

Status: Accepted
Version: 1.0

Parent Document:
AI Learning Harness (ALH) Architecture Vision

---

# 1. Purpose

This document defines the fundamental principles governing the design, evolution, and operation of AI Learning Harness (ALH).

These principles represent architectural constraints and **MUST** guide future decisions.

Any deviation from these principles requires explicit architectural justification and, where applicable, an Architecture Decision Record (ADR).

---

# 2. Principle Hierarchy

The principles of ALH are organized according to the following priority:

```text
Educational Integrity
        ↓
Engineering Quality
        ↓
Explainability
        ↓
Adaptability
        ↓
Automation
```

Automation is valuable only when it supports learning and engineering quality.

---

# 3. Principle: Learning Through Real Engineering

## Statement

ALH **MUST** prioritize learning through real software development activities.

The primary educational flow is:

```text
Project Requirement
        ↓
Engineering Challenge
        ↓
Decision
        ↓
Implementation
        ↓
Review
        ↓
Reflection
        ↓
Competency Growth
```

## Rationale

Professional developers grow by solving real engineering problems rather than isolated educational exercises.

## Consequences

ALH **SHOULD**:

- Connect Learning Units to project tasks.
- Record practical evidence.
- Explain why knowledge is required.

ALH **SHOULD NOT**:

- Generate artificial lessons without project context.
- Optimize for lesson completion instead of competency growth.

---

# 4. Principle: Competency Over Content

## Statement

ALH models developer growth through competencies rather than consumed educational content.

Completing an explanation does **NOT** imply competency.

Competency requires:

- Understanding
- Practical application
- Repeated successful usage
- Independent execution

## Consequences

The system **MUST** track:

- Competency state
- Automation Level
- Learning Debt
- Evidence history

---

# 5. Principle: No Hidden Magic

## Statement

Every significant system behavior **MUST** be explainable.

ALH **MUST NOT** rely on:

- Unexplained recommendations
- Hidden evaluation criteria
- Arbitrary decisions

## Required Explanation Model

Every important recommendation should explain:

```text
Context
    ↓
Problem
    ↓
Available Options
    ↓
Chosen Solution
    ↓
Reasoning
    ↓
Trade-offs
    ↓
Consequences
```

## Rationale

The objective of ALH is to develop engineering judgment.

An unexplained correct answer provides limited educational value.

---

# 6. Principle: Superpowers Immutability

## Statement

Superpowers is an immutable external workflow engine.

ALH **MUST NOT**:

- Modify Superpowers source code.
- Replace Superpowers workflows.
- Duplicate Superpowers responsibilities.

## Responsibility Boundary

### Superpowers owns

- Workflow execution
- Commands
- Templates
- Development processes

### ALH owns

- Educational adaptation
- Competency awareness
- Learning memory
- Mentoring strategy

---

# 7. Principle: Separation of Concerns

## Statement

Application development and learning infrastructure **MUST** remain separated.

```text
Application
├── src/
├── tests/
├── docs/
└── infra/

Learning Infrastructure
└── .ai-learning/
```

## Rationale

This separation enables:

- Reusability
- Independent evolution
- Clean production repositories
- Clear ownership boundaries

## Related ADR

ADR-001 — Separation of Application and Learning Infrastructure

---

# 8. Principle: Adaptive Autonomy

## Statement

The AI agent **MUST** gradually transfer responsibility to the developer.

The objective is **maximum developer independence**, not maximum AI automation.

## Autonomy Progression

```text
Agent Leads
        ↓
Agent Guides
        ↓
Agent Collaborates
        ↓
Agent Reviews
        ↓
Developer Leads
```

## Consequences

The same engineering task may receive different guidance depending on competency state.

### Beginner

- Explain concepts
- Ask guiding questions
- Provide hints
- Review implementation

### Experienced Developer

- Review architecture
- Challenge assumptions
- Validate quality
- Focus on engineering trade-offs

---

# 9. Principle: Security by Design

## Statement

Security **MUST** be considered throughout the entire development lifecycle.

Security is **NOT** a final verification activity.

Security considerations **SHOULD** be included during:

- Architecture
- Design
- Implementation
- Review
- Deployment

Examples include:

### Architecture

- Threat modeling
- Trust boundaries

### Implementation

- Input validation
- Authentication
- Authorization

### Infrastructure

- Secrets management
- Least privilege
- Isolation

---

# 10. Principle: Documentation by Default

## Statement

Documentation is part of implementation.

Code without explanation is incomplete.

Documentation **SHOULD** include:

- Purpose
- Design decisions
- Constraints
- Usage
- Related concepts

Required documentation includes:

- TSDoc / JSDoc
- Architectural explanations
- Decision records
- Learning references

---

# 11. Principle: Testing as Evidence

## Statement

Testing is both a quality assurance mechanism and evidence of engineering understanding.

A feature is not complete without appropriate verification.

Testing **SHOULD** include, where appropriate:

- Unit tests
- Integration tests
- End-to-end tests

---

# 12. Principle: Proportional Architecture

## Statement

Architectural complexity **MUST** remain proportional to project needs.

ALH **MUST** discourage unnecessary architectural complexity.

### Appropriate

```text
Simple Problem
        ↓
Simple Solution
```

### Inappropriate

```text
Simple Problem
        ↓
Enterprise Architecture
```

Architecture decisions **MUST** consider:

- Project scale
- Complexity
- Team size
- Expected evolution

---

# 13. Principle: Continuous Reflection

## Statement

Every significant engineering activity **SHOULD** produce learning feedback.

After completing work, ALH updates:

- Review results
- Competency Graph
- Learning Debt
- Learning Memory

Development without reflection produces software but not sustained engineering growth.

---

# 14. Principle: Human Understanding Over Task Completion

## Statement

Completing a task successfully does **NOT** necessarily indicate successful learning.

```text
Task Completed
        ≠
Knowledge Acquired
```

Learning success requires:

- Understanding
- Ability to explain
- Ability to reproduce
- Ability to adapt knowledge to new situations

---

# 15. Principle: Engineering First

## Statement

ALH teaches professional software engineering rather than isolated programming syntax.

The educational scope includes:

- Software Architecture
- Algorithms
- Data Structures
- Databases
- Networking
- Security
- Testing
- Operations

---

# 16. Summary

The core principles of ALH are:

1. Learn through real engineering.
2. Track competencies instead of lessons.
3. Avoid hidden magic.
4. Keep Superpowers immutable.
5. Separate learning infrastructure from application code.
6. Adapt AI autonomy according to competency.
7. Apply security by design.
8. Treat documentation as part of implementation.
9. Use testing as evidence.
10. Keep architecture proportional.
11. Reflect after engineering work.
12. Optimize for developer capability rather than automation.
