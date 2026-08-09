# Assessment

Version: 0.1 Draft

Parent Documents

- 00-Learning-Model.md
- 01-Socratic-Method.md
- 07-Competency-Model.md

Related Documents

- 03-Competency-Evaluation.md
- 06-Quiz-Strategy.md
- 07-Definition-of-Done.md

---

# 1. Purpose

This document defines the assessment methodology of AI Learning Harness (ALH).

The purpose of assessment is to determine learner progress, provide evidence of competency development, and support educational decisions.

Assessment in ALH is designed as part of the learning process rather than only a final verification activity.

Assessment provides:

- evidence of understanding;
- evidence of practical application;
- identification of learning gaps;
- feedback for further progression.

This document defines educational assessment principles.

It MUST NOT define:

- runtime assessment implementation;
- decision engine algorithms;
- prompt architecture;
- automated evaluation implementation.

---

# 2. Scope

The Assessment methodology covers:

- assessment principles;
- evidence-based evaluation;
- assessment types;
- relationship between learning and evaluation;
- feedback integration.

The Assessment methodology does not define:

- competency model structure;
- memory representation;
- system implementation.

---

# 3. Assessment Principles

## 3.1 Evidence-Based Assessment

ALH MUST evaluate learning through evidence.

Evidence SHOULD demonstrate that the learner can:

- understand concepts;
- explain reasoning;
- apply knowledge;
- solve practical problems.

Completion of learning activities alone MUST NOT be considered sufficient evidence of competency.

---

## 3.2 Assessment as Part of Learning

Assessment SHOULD support learning progression.

Assessment SHOULD:

- reveal knowledge gaps;
- identify misconceptions;
- guide further practice;
- reinforce understanding.

Assessment MUST NOT be treated only as a final checkpoint.

---

## 3.3 Competency-Oriented Assessment

Assessment MUST be aligned with competencies.

Evaluation SHOULD focus on:

- ability to apply knowledge;
- ability to perform tasks;
- ability to make justified decisions;
- ability to demonstrate repeatable results.

Knowledge recall MAY be used, but SHOULD NOT be the primary assessment method for competencies requiring application.

---

# 4. Assessment Evidence Model

## Evidence Interpretation

Assessment collects and interprets evidence relevant to the learning objective and competency.

Evidence MAY include:

- Knowledge / Understanding;
- Reasoning;
- Application;
- Independence;
- Consistency.

Different forms of evidence provide different information.

Assessment MUST NOT treat all evidence types as interchangeable.

In particular:

- knowledge evidence demonstrates understanding;
- reasoning evidence demonstrates the ability to analyze and justify;
- application evidence demonstrates practical use of a competency;
- independence evidence demonstrates the degree of learner autonomy;
- consistency evidence demonstrates the reliability of successful application.

The required evidence SHOULD be proportional to the competency and learning objective.

Assessment MUST distinguish between evidence of understanding and evidence of practical capability.

---

# 5. Assessment Types

## 5.1 Knowledge Assessment

Knowledge assessment evaluates understanding of concepts, principles, and relationships.

Examples:

- explanations;
- quizzes;
- conceptual questions.

Knowledge assessment SHOULD support understanding verification.

It MUST NOT replace competency evaluation.

Assessment produces evidence.

Competency Evaluation interprets that evidence in relation to the relevant competency.

Therefore:

```
Assessment
    ↓
Evidence
    ↓
Competency Evaluation
```

Assessment MUST NOT independently redefine competency states.

---

## 5.2 Reasoning Assessment

Reasoning assessment evaluates the learner's ability to analyze and justify decisions.

Evidence MAY include:

- explanations of choices;
- comparison of alternatives;
- identification of trade-offs.

---

## 5.3 Application Assessment

Application assessment evaluates practical use of competencies.

Evidence MAY include:

- task completion;
- project work;
- real-world scenarios.

Application assessment SHOULD be the primary evidence for practical competencies.

---

# 6. Assessment and Learning States

Assessment supports transitions between learner states:

unknown

↓

introduced

↓

learning

↓

practicing

↓

mastered

Assessment evidence SHOULD help determine whether progression between states is justified.

Assessment MUST NOT define learning states independently from the Learning Model.

---

# 7. Assessment and Feedback

Assessment SHOULD produce actionable feedback.

Feedback SHOULD:

- explain current progress;
- identify gaps;
- suggest improvement directions;
- support next learning activities.

Feedback SHOULD preserve learner understanding rather than only provide correction.

---

# 8. Assessment and Socratic Method

Socratic interaction provides additional assessment evidence.

Through dialogue, ALH MAY evaluate:

- conceptual understanding;
- reasoning process;
- ability to explain decisions;
- awareness of limitations.

Assessment SHOULD consider both:

- what answer was reached;
- how the learner reached the answer.

---

# 9. Assessment and Learning Debt

Assessment SHOULD identify situations where knowledge exists without sufficient stabilization.

Examples:

- correct answer without reliable application;
- successful task completion with excessive assistance;
- inconsistent performance.

Such cases MAY contribute to Learning Debt.

Detailed methodology is defined in:

- 04-Learning-Debt.md

---

# 10. Assessment Constraints

Assessment MUST:

- support competency development;
- use explainable criteria;
- provide meaningful evidence;
- support learner progression.

Assessment MUST NOT:

- become a purely quantitative scoring mechanism;
- replace practical application;
- define implementation-specific evaluation logic.

---

# 11. Relationship With ALH Architecture

Assessment uses architectural concepts defined by ALH.

Relationships:

Competency Model

    |

Assessment

    |

Learner State

    |

Educational Decisions

Assessment:

- evaluates competency development;
- provides evidence for learner state progression;
- supports educational decisions.

Assessment does not replace:

- Competency Model;
- Memory Model;
- Decision Engine.

---
