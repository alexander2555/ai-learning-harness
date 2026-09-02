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

Automation Level represents the degree of automation applied to relevant learner activity by an external capability or AI.

The purpose of Automation Level is to distinguish between:

- activity performed entirely by the learner;
- activity performed with bounded external assistance;
- activity performed collaboratively between learner and external capability;
- activity performed primarily or entirely by external capability.

Automation Level supports educational allocation and competency evaluation.

This document defines educational meaning and evaluation principles.

It MUST NOT define:

- system automation capabilities;
- agent implementation;
- runtime orchestration;
- prompt architecture.

---

# Normative Definition

Automation Level describes the degree of automation applied to relevant learner activity by an external capability or AI during competency application.

Automation Level refers to the extent of external capability delegation for the relevant activity.

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

These levels represent increasing automation of relevant learner activity by external capability.

Consequently, learner independence with respect to this activity generally moves in the opposite direction:

```
FULL
   ↓
SHARED
   ↓
ASSISTED
   ↓
NONE
```

---

# 2. Scope

The Automation Level methodology covers:

- definition of Automation Level;
- levels of automation of relevant learner activity;
- progression between levels;
- relationship between automation and learner independence;
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

The levels describe the degree of automation of relevant learner activity in competency application.

---

# 4. Automation Level Definitions

## 4.1 NONE

The relevant activity is not automated. The learner performs the substantive reasoning, execution, and verification necessary for the activity, with permissible educational support that does not itself perform the relevant activity for the learner.

The learner is responsible for:

- reasoning;
- execution;
- verification;
- final result.

Educational support at this level may include guidance, explanations, hints, or feedback that assist the learner's independent performance without delegating the substantive activity to an external capability.

This level provides the strongest direct evidence of independent application of the relevant activity.

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

The relevant activity is performed primarily or entirely by an external capability or AI. The learner may observe, specify requirements, review results, or receive explanations, but this observation or review alone does not constitute evidence of independent performance of the activity.

The learner may:

- observe the automated execution;
- specify requirements or constraints;
- review generated results;
- request explanations of decisions;
- provide approval or acceptance of the result.

FULL represents the highest level of automation of relevant learner activity by external capability.

FULL may be educationally appropriate depending on educational strategy, learner state, current learning objective, and task context, for example for demonstration, scaffolding, or activities that are not the current practice objective.

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

Automation Level describes the degree of automation of relevant learner activity by external capability during application.

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

and:

```
Automation Level
    ≠
Learner Competency
```

and:

```
Automation Level
    ≠
Educational Correctness
```

and:

```
AI-Performed Engineering Work
    ≠
Educational Failure
```

and:

```
Observation of Automated Work
    ≠
Independent Learner Performance
```

---

# 6. Progressive Independence

Learning SHOULD generally progress toward greater learner independence for relevant activities, which typically corresponds to decreasing Automation Level for those activities over time.

A typical progression toward greater independence is:

    FULL
       ↓
    SHARED
       ↓
    ASSISTED
       ↓
    NONE

However, progression MUST be context-sensitive.

A learner MAY temporarily use a higher Automation Level when:

- encountering a new competency;
- working in an unfamiliar context;
- attempting a more complex task;
- receiving targeted educational support;
- engaging in demonstration or scaffolding activities.

Temporary automation MUST NOT automatically indicate regression in competency.

Decreasing automation may create opportunities for more independent learner performance, but Automation Level itself does not prove competency. Transition to lower automation MUST NOT automatically be considered progression without Accepted Educational Evidence.

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

Automation Level represents the degree of automation of relevant learner activity by external capability during application.

Therefore:

- Automation Level MUST NOT be derived solely from Learning Debt;
- Learning Debt MUST NOT be derived solely from Automation Level;
- both SHOULD be considered when evaluating competency stability.

For example, a learner MAY:

- have low Learning Debt while requiring assistance in unfamiliar contexts;
- operate at FULL Automation Level for a familiar task while retaining Learning Debt for broader competency stabilization.

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

NONE Automation Level MAY support evidence for mastery but MUST NOT be sufficient by itself.

Mastery SHOULD require evidence of:

- sufficient competency understanding;
- successful practical application;
- reliable outcomes;
- appropriate independence for the relevant activity;
- ability to explain relevant decisions.

Therefore:

    Automation Level = NONE

does not by itself imply:

    Competency State = mastered

Conversely:

    Automation Level = FULL

does not by itself indicate lack of mastery or educational failure. FULL may be appropriate for demonstration, scaffolding, or activities that are not the current practice objective.

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

- describe the degree of automation of relevant learner activity by external capability;
- remain distinct from competency state;
- remain distinct from Learning Debt;
- remain distinct from learner competency;
- remain distinct from educational correctness;
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
* replace competency evaluation;
* serve as a learner-first rule;
* be inferred as educationally incorrect when set to FULL;
* require learner-first allocation regardless of learning relevance.

---

# 14. Educational Boundaries

This methodology preserves the following boundaries:

- Automation Level is a measure of external capability automation of relevant learner activity, not a direct measure of learner independence
- AI-performed engineering work is not automatically educational failure
- Observation of automated work is not equivalent to independent learner performance
- FULL Automation Level may be educationally appropriate depending on educational strategy, learner state, current learning objective, and task context
- Learning relevance does not automatically require Automation Level to be NONE or ASSISTED
- Decreasing automation may create opportunities for more independent learner performance, but Automation Level itself does not prove competency
- Transition to lower automation must not automatically be considered progression without Accepted Educational Evidence

---
