# State Machine

Version: 0.1 Draft

Parent Documents:

- 03-System-Architecture.md
- 04-Agent-Pipeline.md

---

# 1. Purpose

This document defines the conceptual state model used by AI Learning Harness (ALH).

The State Machine provides a consistent way to describe how educational interactions progress during learning activities.

It does **not** describe implementation details.

It defines the logical states that may occur during educational workflows.

---

# 2. Scope

The State Machine governs:

- educational interactions;
- learning activities;
- competency progression;
- assessment cycles;
- memory updates.

It does **not** represent the internal implementation of the AI model.

---

# 3. Design Principles

The ALH State Machine follows the principles defined in the architecture:

- learning is project-driven;
- states are explainable;
- transitions are deterministic from the educational perspective;
- every completed activity contributes to competency development.

---

# 4. High-Level State Flow

A typical educational interaction follows the lifecycle below.

```text
Start

↓

Intent Analysis

↓

Context Analysis

↓

Learning Strategy

↓

Execution

↓

Review

↓

Assessment

↓

Memory Update

↓

Complete
```

Not every interaction requires every state.

The active path depends on the current task.

---

# 5. State Definitions

## 5.1 Start

Entry point for a new interaction.

Purpose:

- receive user input;
- initialize educational context.

---

## 5.2 Intent Analysis

Purpose:

Determine:

- user objective;
- engineering context;
- educational intent.

Primary output:

- classified request.

---

## 5.3 Context Analysis

Purpose:

Collect information required for educational decisions.

Context may include:

- project state;
- competency state;
- previous learning history;
- active Learning Units.

---

## 5.4 Learning Strategy

Purpose:

Determine how the interaction should proceed.

Examples include:

- explanation;
- guided learning;
- implementation;
- review;
- assessment.

The selected strategy depends on the current educational context.

---

## 5.5 Execution

Purpose:

Perform the primary activity.

Examples:

- explanation;
- implementation;
- architectural discussion;
- debugging;
- refactoring.

Execution represents the main educational activity.

---

## 5.6 Review

Purpose:

Evaluate the quality of the completed work.

Review may include:

- engineering quality;
- architecture;
- testing;
- documentation;
- security.

Review is independent of whether the implementation succeeded.

---

## 5.7 Assessment

Purpose:

Determine educational outcomes.

Assessment evaluates:

- demonstrated understanding;
- successful application;
- remaining Learning Debt;
- competency progression.

Assessment concerns learning rather than code correctness alone.

---

## 5.8 Memory Update

Purpose:

Persist the results of the interaction.

Possible updates include:

- competency history;
- Learning Debt;
- automation level;
- project memory;
- educational context.

---

## 5.9 Complete

Marks the end of the current educational interaction.

The updated state becomes available for future interactions.

---

# 6. State Transitions

The State Machine supports conditional transitions.

Example:

```text
Intent Analysis

↓

Context Analysis

↓

Learning Strategy

├── Explanation
├── Implementation
├── Review
└── Assessment
```

The chosen path depends on the educational needs of the interaction.

---

# 7. Relationship with the Agent Pipeline

The State Machine and the Agent Pipeline describe different aspects of ALH.

The Agent Pipeline defines **who** performs educational responsibilities.

The State Machine defines **when** educational activities occur during an interaction.

These models are complementary.

---

# 8. Relationship with the Competency Model

State transitions may influence competency development.

Examples include:

- introducing a new Learning Unit;
- reducing Learning Debt;
- increasing Automation Level;
- changing competency status.

The exact competency rules are defined in:

`07-Competency-Model.md`

---

# 9. Relationship with Memory

Memory is updated only after the educational activity has been evaluated.

Possible updates include:

- completed learning activities;
- assessment results;
- competency evidence;
- project context.

Memory persistence is specified in:

`08-Memory-Model.md`

---

# 10. Design Constraints

The following constraints apply.

## Explainability

Every state should have a clear educational purpose.

---

## Deterministic Progression

State transitions should follow educational logic.

---

## Educational Integrity

Learning outcomes take precedence over task completion.

---

## Separation of Responsibilities

The State Machine coordinates educational progression.

It does not replace:

- Agent Pipeline;
- Competency Model;
- Memory Model;
- Decision Engine.

---

# 11. Future Evolution

Future versions may introduce additional educational states if required.

New states should:

- preserve explainability;
- maintain architectural consistency;
- support competency-based learning.

Changes to the State Machine require architectural review.

---

# 12. Summary

The ALH State Machine provides a conceptual lifecycle for educational interactions.

It ensures that learning activities follow a consistent progression from intent analysis through execution, review, assessment, and memory update.

Together with the Agent Pipeline, the State Machine establishes the foundation for adaptive educational behavior while remaining independent of implementation details.
