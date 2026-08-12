# Socratic Method

Status: Accepted
Version: 1.0

Parent Documents

- 00-Learning-Model.md
- 02-Core-Principles.md

Related Documents

- 02-Assessment.md
- 03-Competency-Evaluation.md

---

# 1. Purpose

This document defines the Socratic learning methodology used in AI Learning Harness (ALH).

The purpose of the Socratic Method is to describe how educational interaction supports learner understanding, reasoning development, and progressive independence.

The Socratic Method provides principles for:

- guided discovery;
- conceptual understanding;
- reasoning development;
- identification of knowledge gaps;
- transition toward independent problem solving.

This document defines educational interaction principles.

It MUST NOT define:

- prompt architecture;
- system prompts;
- agent behavior implementation;
- runtime orchestration.

---

# 2. Scope

The Socratic Method covers:

- learner questioning principles;
- guided reasoning;
- explanation-based learning;
- progressive reduction of assistance;
- feedback through dialogue.

The Socratic Method does not define:

- technical implementation of educational agents;
- prompt templates;
- conversation protocols.

---

# 3. Educational Principles

## 3.1 Understanding Before Execution

ALH SHOULD prioritize learner understanding before providing solutions.

The educational process SHOULD encourage the learner to:

- explain concepts;
- identify assumptions;
- reason about alternatives;
- evaluate consequences.

Providing a correct answer without developing understanding SHOULD NOT be considered sufficient learning.

---

## 3.2 Questions as a Learning Instrument

Questions SHOULD be used to:

- reveal learner understanding;
- identify misconceptions;
- stimulate reasoning;
- encourage self-correction.

Questions MUST serve an educational purpose.

The objective is not to test the learner continuously, but to improve understanding.

---

## 3.3 Guided Discovery

The Socratic Method SHOULD guide learners toward solutions through structured reasoning.

The learning interaction SHOULD move through:

Observation

↓

Questioning

↓

Reasoning

↓

Explanation

↓

Application

The learner SHOULD remain an active participant in discovering solutions.

---

# 4. Questioning Model

Socratic questions SHOULD focus on:

## 4.1 Understanding

Questions help determine whether the learner understands fundamental concepts.

Examples of objectives:

- explain the concept;
- describe relationships;
- identify key principles.

---

## 4.2 Reasoning

Questions help develop analytical thinking.

Examples of objectives:

- compare alternatives;
- explain decisions;
- identify trade-offs.

---

## 4.3 Application

Questions connect knowledge to practical situations.

Examples of objectives:

- apply a concept;
- solve a problem;
- justify an implementation choice.

---

## 4.4 Reflection

Questions help learners evaluate their own understanding.

Examples of objectives:

- identify uncertainty;
- recognize mistakes;
- determine next learning steps.

---

# 5. Assistance Progression

Socratic interaction SHOULD support progressive independence.

The level of assistance SHOULD decrease as learner competency increases.

Relationship:

High Guidance

↓

Guided Reasoning

↓

Partial Assistance

↓

Independent Reasoning

↓

Independent Application

This progression is aligned with Automation Level:

NONE

↓

ASSISTED

↓

SHARED

↓

FULL

---

# 6. Handling Incorrect Understanding

Incorrect answers SHOULD be treated as learning opportunities.

The educational process SHOULD:

- identify the source of misunderstanding;
- guide the learner toward correction;
- reinforce correct reasoning.

The system SHOULD avoid immediately replacing learner reasoning with the correct answer when guided discovery can improve understanding.

---

# 7. Relationship With Assessment

Socratic interaction provides evidence for assessment.

It MAY reveal:

- conceptual understanding;
- reasoning ability;
- ability to explain decisions;
- ability to apply knowledge.

Assessment SHOULD consider both:

- final outcome;
- reasoning process.

Detailed assessment methodology is defined in:

- 02-Assessment.md
- 03-Competency-Evaluation.md

---

# 8. Relationship With Learning Model

The Socratic Method supports the Learning Model by enabling:

- knowledge understanding;
- competency development;
- practical reasoning;
- progressive independence.

Relationship:

Learning Model

    |

Socratic Method

    |

Learner Understanding

    |

Competency Development

---

# 9. Constraints

The Socratic Method MUST:

- support learner development;
- preserve explainability;
- encourage independent reasoning;
- align with competency-oriented learning.

The Socratic Method MUST NOT:

- define system prompts;
- prescribe agent implementation;
- replace assessment methodology;
- replace practical application.

---
