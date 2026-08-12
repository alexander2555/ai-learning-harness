# Automation Level

Status: Accepted
Version: 1.0

Parent Documents

- 00-Learning-Model.md
- 03-Competency-Evaluation.md
- 07-Competency-Model.md

Related Documents

- 04-Learning-Debt.md
- 06-Quiz-Strategy.md
- 07-Definition-of-Done.md

---

# 1. Purpose

This document defines the Automation Level methodology of AI Learning Harness (ALH).

Automation Level represents the degree of learner independence demonstrated while applying a competency.

The purpose of Automation Level is to distinguish between:

- work performed by the learner;
- work performed with assistance;
- work performed collaboratively;
- work performed independently.

Automation Level supports progressive independence and competency evaluation.

This document defines educational meaning and evaluation principles.

It MUST NOT define:

- system automation capabilities;
- agent implementation;
- runtime orchestration;
- prompt architecture.

---

# Normative Definition

Automation Level describes the degree of learner independence demonstrated during competency application.

Automation Level refers to the learner's participation and independence.

It does NOT describe:

- the automation capability of the ALH system;
- the automation capability of an AI agent;
- the degree of system automation.

The four Automation Levels are:

```
NONE
   ↓
ASSISTED
   ↓
SHARED
   ↓
FULL
```

These levels represent increasing learner independence.

---

# 2. Scope

The Automation Level methodology covers:

- definition of Automation Level;
- levels of learner independence;
- progression between levels;
- relationship between independence and competency;
- relationship between Automation Level and Learning Debt.

The Automation Level methodology does not define:

- technical automation mechanisms;
- agent capabilities;
- implementation details.

---

# 3. Automation Level Model

Automation Level is represented by four levels:

    NONE

        ↓

    ASSISTED

        ↓

    SHARED

        ↓

    FULL

The levels describe the degree of learner participation and independence in competency application.

---

# 4. Automation Level Definitions

## 4.1 NONE

The learner performs the relevant activity without delegation to an external agent or automated capability.

The learner is responsible for:

- reasoning;
- execution;
- verification;
- final result.

This level provides the strongest direct evidence of independent application.

---

## 4.2 ASSISTED

The learner performs the activity with external assistance.

Assistance MAY include:

- explanations;
- hints;
- examples;
- targeted guidance;
- corrective feedback.

The learner remains responsible for understanding and applying the competency.

Assistance SHOULD decrease as the learner progresses.

---

## 4.3 SHARED

The learner and an external capability share responsibility for completing the activity.

The learner SHOULD:

- define or clarify the objective;
- make relevant decisions;
- review generated or assisted work;
- verify the result;
- remain accountable for the final outcome.

Shared execution MUST NOT be treated as equivalent to fully independent execution.

---

## 4.4 FULL

The learner independently performs the relevant activity and remains responsible for the result.

The learner SHOULD be able to:

- select an appropriate approach;
- execute the task;
- verify the result;
- explain relevant decisions.

FULL represents the highest level of learner independence in the Automation Level model.

---

# 5. Automation Level and Competency

Automation Level and competency state represent different dimensions of learner development.

Competency state describes the stage of competency development:

    unknown
       ↓
    introduced
       ↓
    learning
       ↓
    practicing
       ↓
    mastered

Automation Level describes the degree of learner independence during application.

Therefore:

- Automation Level MUST NOT replace competency state;
- competency state MUST NOT be inferred from Automation Level alone;
- high Automation Level MUST NOT automatically indicate mastery.

A learner MAY perform a task independently while still developing the underlying competency.

Automation Level is an independent dimension of competency development.

A higher Automation Level does not automatically indicate a higher Competency State.

A lower Automation Level does not automatically indicate lack of competency.

Automation Level MUST be interpreted together with relevant evidence and competency context.

Therefore:

```
Automation Level
    ≠
Competency State
```

and:

```
Automation Level
    ≠
Learning Debt
```

---

# 6. Progressive Independence

Learning SHOULD generally progress toward greater learner independence.

A typical progression is:

    NONE
       ↓
    ASSISTED
       ↓
    SHARED
       ↓
    FULL

However, progression MUST be context-sensitive.

A learner MAY temporarily use a lower Automation Level when:

- encountering a new competency;
- working in an unfamiliar context;
- attempting a more complex task;
- receiving targeted educational support.

Temporary assistance MUST NOT automatically indicate regression in competency.

---

# 7. Automation Level and Assessment

Assessment SHOULD consider the degree of learner independence when evaluating practical competency.

Evidence MAY include:

- work completed independently;
- work completed with guidance;
- decisions made by the learner;
- verification performed by the learner;
- ability to explain and defend the result.

The same successful outcome MAY have different educational significance depending on the level of assistance required.

Therefore, assessment SHOULD consider both:

- outcome quality;
- degree of learner independence.

---

# 8. Automation Level and Learning Debt

Automation Level and Learning Debt measure different properties.

Learning Debt represents the remaining successful applications required for competency stabilization.

Automation Level represents learner independence during application.

Therefore:

- Automation Level MUST NOT be derived solely from Learning Debt;
- Learning Debt MUST NOT be derived solely from Automation Level;
- both SHOULD be considered when evaluating competency stability.

For example, a learner MAY:

- have low Learning Debt while requiring assistance in unfamiliar contexts;
- achieve FULL Automation Level for a familiar task while retaining Learning Debt for broader competency stabilization.

---

# 9. Automation Level and Evidence

Automation Level SHOULD be based on observable evidence of learner participation.

Evidence MAY include:

- who performed the substantive work;
- who made key decisions;
- who verified the result;
- who identified and corrected errors;
- whether the learner can reproduce the result independently.

Claims of independence SHOULD NOT be accepted without supporting evidence where evidence is available.

---

# 10. Automation Level and Mastery

FULL Automation Level MAY support evidence for mastery but MUST NOT be sufficient by itself.

Mastery SHOULD require evidence of:

- sufficient competency understanding;
- successful practical application;
- reliable outcomes;
- appropriate independence;
- ability to explain relevant decisions.

Therefore:

    Automation Level = FULL

does not by itself imply:

    Competency State = mastered

---

# 11. Context Sensitivity

Automation Level SHOULD be evaluated relative to the competency and task context.

The same learner MAY demonstrate different Automation Levels for different competencies or tasks.

Automation Level SHOULD therefore be associated with the relevant competency and application context rather than treated as a universal learner attribute.

---

# 12. Relationship With ALH Architecture

Automation Level is an established ALH concept.

The methodology defines its educational interpretation and relationship to competency development.

Relationship:

    Competency
        ↓
    Practical Application
        ↓
    Learner Independence
        ↓
    Automation Level
        ↓
    Competency Evidence

Automation Level MAY be represented as part of learner state according to the Memory Model.

The Automation Level methodology does not define how this state is stored or implemented.

---

# 13. Constraints

Automation Level MUST:

- describe learner independence;
- remain distinct from competency state;
- remain distinct from Learning Debt;
- be supported by observable evidence where possible.

Automation Level MUST NOT:

- describe system automation capability;
- serve as a standalone competency score;
- imply mastery without additional evidence;
- define implementation mechanisms;
- define prompt behavior;

* be interpreted as system automation capability;
* independently determine competency state;
* independently determine mastery;
* independently determine progression;
* replace competency evaluation.

---
