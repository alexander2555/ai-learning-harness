# Definition of Done

Status: Accepted
Version: 1.0

Parent Documents

- 00-Learning-Model.md
- 02-Assessment.md
- 03-Competency-Evaluation.md
- 04-Learning-Debt.md
- 05-Automation-Level.md
- 06-Quiz-Strategy.md

Related Documents

- 07-Competency-Model.md
- 08-Memory-Model.md
- 09-Decision-Engine.md

---

# 1. Purpose

This document defines the educational Definition of Done (DoD) for Learning Units and competency progression in AI Learning Harness (ALH).

The purpose of the Definition of Done is to establish the minimum evidence required to consider a learning objective sufficiently completed for the current educational context.

The Definition of Done provides a common completion criterion across:

- Learning Units;
- competency development;
- practical application;
- assessment;
- learner progression.

Completion MUST be based on evidence rather than activity completion alone.

---

# 2. Scope

The Definition of Done covers:

- completion criteria for Learning Units;
- competency evidence;
- practical application;
- learner independence;
- Learning Debt;
- progression readiness.

The Definition of Done does not define:

- runtime implementation;
- decision engine algorithms;
- prompt architecture;
- storage mechanisms.

---

# 3. Definition of Completion

A Learning Unit SHOULD be considered complete when the learner has demonstrated the evidence required by its Definition of Done.

The required evidence MUST correspond to the learning objective and relevant competency.

Depending on the Learning Unit, required evidence MAY include:

- Knowledge / Understanding;
- Reasoning;
- Application;
- Independence;
- Consistency.

Not every Learning Unit requires every evidence type.

The required evidence SHOULD be proportional to:

- competency complexity;
- learning objective;
- expected independence;
- stability requirements;
- educational risk.

---

# 4. Minimum Completion Criteria

A Learning Unit MUST have:

- a defined learning objective;
- a relevant competency;
- identifiable completion criteria;
- evidence of learner progress.

Where the Learning Unit develops a practical competency, completion SHOULD additionally include:

- successful practical application;
- appropriate learner participation;
- verification of the result.

---

# 5. Understanding

The learner SHOULD demonstrate sufficient understanding of the relevant concepts.

Evidence MAY include:

- accurate explanation;
- correct reasoning;
- appropriate answers to conceptual questions;
- ability to describe relevant relationships.

Understanding alone MUST NOT be sufficient to complete a Learning Unit that requires practical competency.

---

# 6. Application

Where practical application is part of the learning objective, the learner MUST demonstrate the ability to apply the relevant competency.

Evidence MAY include:

- successful task completion;
- project work;
- practical problem solving;
- creation of a working artifact.

The application SHOULD be relevant to the intended competency and learning objective.

---

# 7. Independence

Completion SHOULD consider the learner's Automation Level.

For competencies requiring independent application, the learner SHOULD demonstrate an appropriate level of independence.

Automation Level is represented by:

    NONE
       ↓
    ASSISTED
       ↓
    SHARED
       ↓
    FULL

FULL Automation Level is not universally required for every Learning Unit.

The required level SHOULD depend on:

- competency maturity;
- learning objective;
- task complexity;
- intended learner capability.

---

# 8. Consistency

Completion SHOULD consider whether the learner can reproduce successful results.

Where competency stability is important, evidence SHOULD include repeated successful application.

A single successful attempt MAY be insufficient when:

- the task is highly variable;
- the competency requires reliable repetition;
- the learner's previous performance has been inconsistent.

Consistency evidence SHOULD contribute to the reduction of Learning Debt.

---

# 9. Learning Debt

Learning Debt SHOULD be considered when determining whether a competency is sufficiently stabilized.

Learning Debt represents the remaining successful applications required for the defined stability threshold.

A Learning Unit SHOULD NOT automatically be considered complete solely because a learner has:

- understood the material;
- passed a quiz;
- completed one successful task.

Where stabilization is part of the learning objective, relevant Learning Debt SHOULD be sufficiently reduced.

Learning Debt reaching zero MUST NOT by itself establish mastery.

---

# 10. Assessment Evidence

Completion decisions SHOULD use multiple forms of evidence where appropriate.

Evidence MAY include:

- quiz results;
- conceptual explanations;
- Socratic dialogue;
- practical tasks;
- project artifacts;
- repeated successful applications;
- learner verification of results.

Evidence SHOULD be relevant to the competency being evaluated.

Weak or indirect evidence SHOULD NOT be treated as equivalent to direct practical evidence.

---

# 11. Completion and Competency Evaluation

Competency Evaluation determines whether the available evidence demonstrates the relevant competency.

Definition of Done establishes the completion criteria against which that evidence is interpreted.

Therefore:

```
Definition of Done
      ↓
Required Evidence
      ↓
Competency Evaluation
      ↓
Completion Decision
```

Completion of a Learning Unit MUST NOT automatically imply:

```
Competency State = mastered
```

Mastery requires sufficient evidence of stable competency according to the Competency Evaluation methodology.

---

# 12. Completion and Assessment

Definition of Done establishes the evidence and completion criteria required for a Learning Unit.

The methodological relationship is:

```
Learning Objective
      ↓
Definition of Done
      ↓
Required Evidence
      ↓
Assessment
      ↓
Competency Evaluation
      ↓
Completion / Progression
```

Definition of Done therefore defines what sufficient completion means.

Assessment and Competency Evaluation determine whether the required evidence has been demonstrated.

Definition of Done MUST NOT be treated as an additional evaluation stage after Competency Evaluation.

---

# 13. Completion and Socratic Learning

Socratic interaction MAY provide evidence for completion.

It MAY demonstrate:

- conceptual understanding;
- reasoning;
- awareness of assumptions;
- ability to explain decisions.

Socratic dialogue SHOULD complement practical evidence where practical application is required.

Dialogue alone MUST NOT substitute for practical evidence when the learning objective requires demonstrated application.

---

# 14. Completion and Quizzes

Quiz results MAY contribute to Definition of Done.

Quizzes MAY demonstrate:

- knowledge retrieval;
- conceptual understanding;
- reasoning.

Quiz success MUST NOT be treated as sufficient evidence of practical competency when practical application is part of the learning objective.

---

# 15. Completion and Project Work

Project work SHOULD provide high-value evidence when the competency is intended for practical use.

Project evidence MAY demonstrate:

- application;
- integration of knowledge;
- decision-making;
- verification;
- independence;
- transfer to realistic contexts.

Project work SHOULD be preferred over artificial exercises when it can provide equivalent or stronger evidence without compromising the learning objective.

---

# 16. Proportionality

Definition of Done SHOULD be proportional to the learning objective.

A simple Learning Unit SHOULD NOT require excessive assessment.

A complex competency SHOULD NOT be considered complete based on minimal evidence.

The required evidence SHOULD reflect:

- competency complexity;
- consequence of errors;
- degree of independence expected;
- stability required;
- educational risk.

---

# 17. Explainability of Completion

A completion decision MUST be explainable.

The educational record SHOULD make it possible to identify:

- what was learned;
- what evidence was produced;
- which competency was demonstrated;
- what level of independence was demonstrated;
- whether additional stabilization is required.

Completion SHOULD therefore be traceable to observable evidence.

---

# 18. Relationship With ALH Architecture

Definition of Done provides educational completion criteria for concepts represented by the ALH architecture.

Relationship:

    Learning Model
          ↓
    Learning Unit
          ↓
    Assessment Evidence
          ↓
    Competency Evaluation
          ↓
    Definition of Done
          ↓
    Learner Progression

Definition of Done MAY contribute information to learner state and educational decisions according to the Memory Model and Decision Engine.

It does not define how those architectural components are implemented.

---

# 19. Constraints

Definition of Done MUST:

- be evidence-based;
- remain competency-oriented;
- be proportional to the learning objective;
- distinguish completion from mastery;
- provide explainable completion criteria.

Definition of Done MUST NOT:

- treat activity completion as evidence of learning by itself;
- equate quiz success with practical competency;
- equate Learning Debt = 0 with mastery;
- equate FULL Automation Level with mastery;
- replace Competency Evaluation;
- define runtime behavior;
- define prompt architecture.

---
