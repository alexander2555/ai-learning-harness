# Learning Debt

Status: Accepted
Version: 1.0

Parent Documents

- 00-Learning-Model.md
- 03-Competency-Evaluation.md
- 07-Competency-Model.md

Related Documents

- 02-Assessment.md
- 05-Automation-Level.md
- 07-Definition-of-Done.md

---

# 1. Purpose

This document defines the Learning Debt methodology of AI Learning Harness (ALH).

Learning Debt represents the amount of successful application still required to consider a competency sufficiently stable for the current learning context.

Learning Debt provides a mechanism for distinguishing between:

- initial understanding;
- demonstrated capability;
- sufficiently stable competency.

Learning Debt supports competency development by identifying competencies that require additional successful practice.

---

# 2. Scope

The Learning Debt methodology covers:

- definition of Learning Debt;
- interpretation of Learning Debt values;
- accumulation and reduction of Learning Debt;
- relationship between practice and competency stability;
- relationship between Learning Debt and competency evaluation.

The Learning Debt methodology does not define:

- data storage;
- runtime implementation;
- decision engine algorithms;
- prompt architecture.

---

# 3. Learning Debt Definition

Learning Debt is an integer value associated with a learning competency.

It represents the number of successful applications still required before the competency can be considered sufficiently stable.

Conceptually:

    Learning Debt = required successful applications
                    remaining for competency stabilization

A lower value represents greater competency stability.

A value of zero represents that no additional successful applications are currently required for the defined stability threshold.

---

# 4. Learning Debt Principles

## 4.1 Application-Based Stabilization

Competency stability MUST be demonstrated through successful application.

Understanding a concept MUST NOT by itself eliminate Learning Debt.

---

## 4.2 Repeated Success

Repeated successful application SHOULD reduce Learning Debt.

The purpose of repetition is not mechanical repetition of identical tasks, but development of reliable competency.

---

## 4.3 Evidence-Based Reduction

Learning Debt SHOULD decrease only when sufficient evidence of successful application exists.

A successful application SHOULD:

- satisfy the relevant competency criteria;
- produce an acceptable outcome;
- provide evidence that the learner performed the required competency.

---

## 4.4 No Automatic Mastery From Knowledge Acquisition

Acquiring knowledge MUST NOT automatically reduce Learning Debt to zero.

A learner MAY understand a competency while still having significant Learning Debt.

---

# 5. Learning Debt Lifecycle

Learning Debt MAY be introduced when:

- a competency requires further practice;
- successful application is insufficient;
- performance is inconsistent;
- knowledge has not yet become reliable practical capability.

Learning Debt is reduced through successful application.

Conceptually:

    Knowledge / Understanding
            ↓
    Initial Application
            ↓
    Successful Practice
            ↓
    Repeated Successful Application
            ↓
    Learning Debt → 0

---

# 6. Learning Debt and Competency States

Learning Debt is related to, but distinct from, competency state.

The competency state describes the learner's current stage of development:

    unknown
       ↓
    introduced
       ↓
    learning
       ↓
    practicing
       ↓
    mastered

Learning Debt describes the remaining stabilization requirement.

Therefore:

- competency state MUST NOT be inferred from Learning Debt alone;
- Learning Debt MUST NOT replace competency evaluation;
- competency state and Learning Debt SHOULD be considered together.

---

# 7. Learning Debt and Assessment

Assessment provides evidence that may justify Learning Debt reduction.

Relationship:

    Assessment
        ↓
    Evidence of Successful Application
        ↓
    Competency Evaluation
        ↓
    Learning Debt Reduction

Assessment evidence SHOULD be sufficiently relevant to the competency being stabilized.

Knowledge-only assessment SHOULD NOT be sufficient to eliminate application-based Learning Debt.

---

# 8. Learning Debt and Automation Level

Learning Debt and Automation Level represent different dimensions of competency development.

Automation Level represents learner independence:

    NONE
       ↓
    ASSISTED
       ↓
    SHARED
       ↓
    FULL

Learning Debt represents remaining stabilization requirements.

Therefore:

- Automation Level MUST NOT be derived solely from Learning Debt;
- Learning Debt MUST NOT be derived solely from Automation Level;
- both SHOULD be considered when evaluating competency stability.

A learner MAY have:

- low Learning Debt but still require assistance in unfamiliar situations;
- high Learning Debt while already performing some tasks independently.

---

# 9. Learning Debt and Project-Based Learning

Project work provides an important source of successful application evidence.

Project tasks SHOULD be used to:

- apply competencies in realistic contexts;
- generate evidence;
- reduce Learning Debt;
- validate transfer of knowledge.

Successful completion of a project task SHOULD reduce Learning Debt only when the task provides meaningful evidence of the relevant competency.

---

# 10. Learning Debt and Mastery

Learning Debt reaching zero indicates that the currently defined number of successful applications required for stabilization has been achieved.

It does not independently establish:

- competency mastery;
- competency state;
- progression.

Mastery MUST be determined through Competency Evaluation using the relevant evidence.

Therefore:

```
Learning Debt = 0
```

MUST NOT be interpreted as:

```
Competency State = mastered
```

Learning Debt is a stabilization indicator, not a standalone mastery criterion.

---

# 11. Learning Debt Management Principles

ALH SHOULD prioritize Learning Debt according to educational relevance.

Higher-priority Learning Debt SHOULD generally be associated with:

- competencies required by current learning objectives;
- competencies blocking progress;
- competencies repeatedly demonstrated inconsistently;
- competencies required by active project work.

Learning Debt SHOULD NOT be treated as a generic numerical score for the learner.

It is associated with specific competencies and their stabilization requirements.

---

# 12. Relationship With ALH Architecture

Learning Debt is an established ALH architectural concept.

The methodology defines its educational meaning and use.

Relationship:

    Competency Model
            ↓
    Competency Development
            ↓
    Learning Debt
            ↓
    Successful Application
            ↓
    Competency Stabilization

Learning Debt MAY be represented as part of learner state according to the Memory Model.

The Learning Debt methodology does not define how this state is stored or implemented.

---

# 13. Constraints

Learning Debt MUST:

- remain competency-specific;
- be represented as an integer;
- represent remaining successful applications required for the defined stability threshold;
- be supported by relevant application evidence.

Learning Debt MUST NOT:

- replace Competency Evaluation;
- independently determine competency state;
- independently determine mastery;
- independently determine progression;
- serve as a generic learner score;
- be reduced solely through passive knowledge acquisition;
- define runtime decision algorithms;
- define prompt behavior.

---
