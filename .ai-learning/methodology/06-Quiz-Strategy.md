# Quiz Strategy

Status: Accepted
Version: 1.0

Parent Documents

- 00-Learning-Model.md
- 02-Assessment.md
- 03-Competency-Evaluation.md

Related Documents

- 01-Socratic-Method.md
- 04-Learning-Debt.md
- 07-Definition-of-Done.md

---

# 1. Purpose

This document defines the quiz methodology of AI Learning Harness (ALH).

The purpose of quizzes is to provide lightweight evidence of learner understanding, strengthen retrieval, reveal knowledge gaps, and support competency development.

Quizzes are an educational instrument and MUST NOT be treated as the primary mechanism for evaluating practical competency.

This document defines quiz strategy and educational principles.

It MUST NOT define:

- quiz implementation;
- prompt architecture;
- runtime orchestration;
- automated scoring mechanisms.

---

# 2. Scope

The Quiz Strategy covers:

- purpose of quizzes;
- appropriate use of quizzes;
- question selection;
- retrieval practice;
- feedback;
- relationship between quizzes and competency development.

The Quiz Strategy does not define:

- the structure of the Competency Model;
- the implementation of quiz generation;
- runtime decision logic.

---

# 3. Quiz Principles

## 3.1 Retrieval Over Recognition

Quizzes SHOULD favor retrieval of knowledge over passive recognition.

Questions SHOULD require the learner to recall, explain, apply, or reason about relevant knowledge.

Simple recognition MAY be used when appropriate, but SHOULD NOT dominate assessment.

---

## 3.2 Learning-Oriented Assessment

Quizzes SHOULD support learning rather than merely measure it.

A quiz MAY be used to:

- reinforce recently introduced knowledge;
- identify misconceptions;
- reveal forgotten knowledge;
- prepare for practical application;
- verify prerequisite understanding.

---

## 3.3 Competency Alignment

Quiz questions SHOULD be connected to relevant competencies.

A quiz SHOULD NOT test unrelated knowledge merely because it is available.

Questions SHOULD contribute to understanding of the competency being developed.

---

# 4. Quiz Question Types

Quizzes MAY include different question types depending on the learning objective.

## 4.1 Recall Questions

Recall questions verify whether the learner can retrieve relevant facts, concepts, terminology, or principles.

They are appropriate for foundational knowledge.

---

## 4.2 Explanation Questions

Explanation questions require the learner to describe a concept in their own words.

They SHOULD be preferred when conceptual understanding is more important than memorization.

---

## 4.3 Reasoning Questions

Reasoning questions require the learner to analyze a situation and justify a conclusion.

They MAY evaluate:

- relationships between concepts;
- trade-offs;
- assumptions;
- consequences.

---

## 4.4 Application Questions

Application questions require the learner to use knowledge in a practical or contextualized situation.

They SHOULD be used when the competency includes practical decision-making.

Application questions MUST NOT be considered equivalent to actual practical application evidence.

---

# 5. Question Difficulty

Quiz difficulty SHOULD be aligned with the learner's current competency state.

Questions SHOULD generally progress from:

    recognition or recall
            ↓
    explanation
            ↓
    reasoning
            ↓
    contextual application

Difficulty SHOULD increase when the learner demonstrates sufficient understanding.

Questions SHOULD NOT become unnecessarily difficult merely to increase challenge.

---

# 6. Quiz Timing

Quizzes MAY be used at different points in the learning process.

## 6.1 Introduction

A short quiz MAY verify prerequisite knowledge.

---

## 6.2 During Learning

Quizzes SHOULD be used to identify misunderstandings and reinforce concepts.

---

## 6.3 During Practice

Quizzes MAY verify whether conceptual knowledge supports practical application.

---

## 6.4 Before Progression

A quiz MAY provide additional evidence before progression to a new Learning Unit or competency state.

A quiz MUST NOT be the sole evidence for practical competency progression.

---

# 7. Quiz Feedback

Quiz feedback SHOULD support learning.

Feedback SHOULD:

- identify incorrect or incomplete understanding;
- explain the relevant concept;
- encourage self-correction;
- provide an appropriate next step.

For conceptual questions, the learner SHOULD have an opportunity to reconsider an incorrect answer when appropriate.

---

# 8. Quiz and Socratic Method

Quizzes SHOULD be compatible with the Socratic Method.

When a learner provides an incorrect answer, the educational interaction MAY use questions to help the learner identify the underlying misunderstanding.

The quiz SHOULD therefore be treated as an opportunity for guided learning rather than only a pass/fail checkpoint.

---

# 9. Quiz and Assessment

Quiz results provide assessment evidence.

Relationship:

    Quiz
      ↓
    Knowledge / Reasoning Evidence
      ↓
    Assessment
      ↓
    Competency Evaluation

Quiz evidence SHOULD be interpreted in context.

A correct quiz answer demonstrates understanding of the tested content but does not necessarily demonstrate practical competency.

---

# 10. Quiz and Learning Debt

Quiz results MAY reveal knowledge gaps contributing to Learning Debt.

However, successful quiz performance MUST NOT automatically eliminate application-based Learning Debt.

Learning Debt SHOULD primarily decrease through successful application of the relevant competency.

---

# 11. Quiz and Automation Level

Quizzes SHOULD generally evaluate learner understanding independently of external assistance.

When a quiz is intended to measure independent knowledge retrieval or reasoning:

- assistance SHOULD be minimized;
- the learner SHOULD provide the answer directly;
- external generation SHOULD NOT substitute for learner reasoning.

If assistance is intentionally allowed, the resulting evidence SHOULD be interpreted accordingly.

---

# 12. Quiz Quality

Quiz questions SHOULD:

- have a clear educational purpose;
- correspond to the relevant competency;
- avoid unnecessary ambiguity;
- test meaningful knowledge or reasoning;
- provide interpretable evidence.

Questions SHOULD NOT depend on:

- arbitrary trivia;
- irrelevant details;
- ambiguous wording;
- knowledge outside the learner's current scope.

---

# 13. Quiz Strategy and Progression

Quiz results SHOULD inform educational progression but SHOULD NOT determine progression in isolation.

Progression SHOULD consider multiple forms of evidence, including:

- conceptual understanding;
- reasoning;
- practical application;
- independence;
- consistency.

Quizzes are therefore one component of the broader assessment methodology.

---

# 14. Relationship With ALH Architecture

Quiz Strategy is an educational methodology built on the ALH Learning Model and Assessment methodology.

Relationship:

    Learning Model
          ↓
    Quiz Strategy
          ↓
    Assessment Evidence
          ↓
    Competency Evaluation
          ↓
    Educational Progression

Quiz Strategy does not replace:

- Assessment;
- Competency Evaluation;
- Learning Model;
- Decision Engine.

---

# 15. Constraints

Quiz Strategy MUST:

- support retrieval and understanding;
- remain competency-oriented;
- provide interpretable evidence;
- complement practical assessment.

Quiz Strategy MUST NOT:

- become the primary measure of practical competency;
- replace practical application;
- equate quiz success with mastery;
- define runtime implementation;
- define prompt architecture.

---
