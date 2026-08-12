# Learning Model

Status: Accepted
Version: 1.0

Parent Documents

- 00-Vision.md
- 02-Core-Principles.md
- 07-Competency-Model.md
- 08-Memory-Model.md
- 09-Decision-Engine.md

---

# 1. Purpose

This document defines the educational learning model of AI Learning Harness (ALH).

The purpose of the Learning Model is to describe how learners acquire, develop, apply, and stabilize competencies through a structured educational process.

The Learning Model provides the methodological foundation for:

- Learning Unit design;
- competency development;
- assessment;
- learner progression;
- educational feedback.

The Learning Model defines educational principles and processes.

It MUST NOT define:

- system implementation;
- runtime behavior;
- prompt architecture;
- agent orchestration.

---

# 2. Scope

The Learning Model covers:

- competency-oriented learning;
- Learning Unit concept;
- knowledge acquisition process;
- practical application;
- learner progression;
- relationship between learning state and competency development.

The Learning Model does not redefine:

- Knowledge Graph structure;
- Competency Model architecture;
- Memory Model representation;
- Decision Engine behavior.

---

# 3. Educational Model Principles

## 3.1 Competency-First Learning

ALH MUST organize learning around competencies rather than isolated topics.

A competency represents the ability to apply knowledge, skills, and experience to achieve a meaningful outcome.

Learning activities SHOULD contribute to measurable competency development.

---

## 3.2 Learning Through Application

Learning SHOULD include practical application.

Knowledge acquisition alone MUST NOT be considered sufficient evidence of competency development.

A learner progresses through:

- understanding;
- guided application;
- independent application;
- repeated successful application.

---

## 3.3 Progressive Independence

The learning process SHOULD gradually reduce external assistance.

The learner moves from supported execution toward independent competency application.

This progression is represented by Automation Level:

NONE

↓

ASSISTED

↓

SHARED

↓

FULL

Automation Level describes learner independence.

Automation Level MUST NOT be interpreted as system automation capability.

---

# 4. Learning Unit Concept

A Learning Unit is the fundamental educational element of ALH.

A Learning Unit represents a bounded learning objective connected to competency development.

Each Learning Unit SHOULD contain:

- learning objective;
- related competency;
- required knowledge;
- practice activities;
- assessment criteria;
- current learning state;
- automation level;
- learning debt.

A Learning Unit MUST provide a clear relationship between learning activity and competency development.

---

## Evidence Model

Learning progress MUST be evaluated through evidence appropriate to the learning objective.

Evidence MAY include:

- Knowledge / Understanding;
- Reasoning;
- Application;
- Independence;
- Consistency.

These evidence dimensions are complementary and MUST NOT be interpreted as a mandatory checklist for every Learning Unit.

The required evidence SHOULD be proportional to:

- the competency;
- the learning objective;
- the expected level of independence;
- the consequences of incorrect application.

Knowledge or understanding evidence MUST NOT be treated as equivalent to practical application evidence where practical application is part of the competency.

Evidence provides the basis for Assessment and Competency Evaluation.

# 5. Learning State Model

Learner progression for a competency is represented by the following states:

unknown

↓

introduced

↓

learning

↓

practicing

↓

mastered

## 5.1 unknown

The learner has no demonstrated awareness or understanding of the competency.

---

## 5.2 introduced

The learner has encountered the concept and understands its basic purpose and terminology.

---

## 5.3 learning

The learner is actively developing understanding and requires structured guidance.

---

## 5.4 practicing

The learner applies the competency through exercises, tasks, or project activities.

---

## 5.5 mastered

The learner demonstrates reliable and repeatable application of the competency.

---

# 6. Competency Development Flow

Competency development SHOULD follow:

Introduction

↓

Understanding

↓

Guided Practice

↓

Independent Practice

↓

Mastery

Transitions between states SHOULD be supported by evidence.

Evidence MAY include:

- successful task completion;
- explanation of concepts;
- practical application;
- project outcomes;
- repeated successful execution.

---

# 7. Knowledge and Competency Relationship

Knowledge and competency are related but distinct concepts.

Knowledge provides understanding of concepts, principles, and relationships.

Competency represents the ability to apply knowledge effectively in practical situations.

Therefore:

- acquiring knowledge SHOULD support competency development;
- competency MUST be demonstrated through application.

---

# 8. Practice Model

Practice is a required component of competency development.

Practice SHOULD:

- provide realistic application scenarios;
- expose misunderstanding;
- generate feedback;
- reduce Learning Debt.

Repeated successful application increases competency stability.

---

# 9. Assessment Relationship

Assessment is integrated into the learning process.

Assessment SHOULD:

- provide evidence of progress;
- identify competency gaps;
- support educational decisions.

Assessment MUST NOT be limited to knowledge recall.

Competency evaluation SHOULD include practical evidence.

Detailed assessment methodology is defined in:

- 02-Assessment.md
- 03-Competency-Evaluation.md

---

# 10. Learning Debt Relationship

Learning Debt represents incomplete stabilization of a competency.

Learning Debt MAY occur when:

- understanding exists without sufficient application;
- competency is demonstrated inconsistently;
- knowledge is not reinforced through practice.

Learning Debt decreases through successful repeated application.

Detailed Learning Debt methodology is defined in:

- 04-Learning-Debt.md

---

# 11. Relationship With ALH Architecture

The Learning Model uses concepts defined by the ALH architecture.

Relationships:

Knowledge Graph
|
|
Competency Model
|
|
Learning Model
|
|
Learner Progression

The Learning Model:

- uses knowledge relationships provided by the Knowledge Graph;
- develops capabilities defined by the Competency Model;
- describes educational states represented through learner memory;
- provides methodological foundations for educational decisions.

The Learning Model does not replace architectural components.

---

# 12. Constraints

The Learning Model MUST:

- remain competency-oriented;
- support adaptive learning;
- preserve explainability;
- support evidence-based progression.

The Learning Model MUST NOT:

- define prompts;
- define agents;
- define implementation architecture;
- modify approved ADRs.

---
