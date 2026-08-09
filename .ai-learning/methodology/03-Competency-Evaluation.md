# Competency Evaluation

Version: 0.1 Draft

Parent Documents

- 00-Learning-Model.md
- 02-Assessment.md
- 07-Competency-Model.md

Related Documents

- 04-Learning-Debt.md
- 05-Automation-Level.md
- 07-Definition-of-Done.md

---

# 1. Purpose

This document defines the competency evaluation methodology of AI Learning Harness (ALH).

The purpose of competency evaluation is to determine whether a learner has developed the ability to apply knowledge and skills in practical situations.

Competency evaluation provides a structured approach for:

- measuring competency progression;
- validating learner capabilities;
- identifying remaining gaps;
- supporting learning progression decisions.

This document defines educational evaluation methodology.

It MUST NOT define:

- Competency Model structure;
- runtime evaluation algorithms;
- automated scoring implementation;
- prompt architecture.

---

# 2. Scope

The Competency Evaluation methodology covers:

- competency evidence;
- evaluation criteria;
- competency progression;
- evaluation consistency;
- relationship between assessment and competency state.

The Competency Evaluation methodology does not redefine:

- competency taxonomy;
- knowledge representation;
- system decision mechanisms.

---

# 3. Competency Evaluation Principles

## 3.1 Evaluation Through Demonstrated Ability

ALH MUST evaluate competencies through demonstrated ability.

A learner SHOULD be considered competent when the learner can:

- understand relevant concepts;
- apply knowledge in practice;
- explain decisions;
- achieve expected outcomes.

Knowledge possession alone MUST NOT be considered sufficient evidence of competency.

---

## 3.2 Evidence Over Completion

Completion of a learning activity does not automatically indicate competency achievement.

Evaluation SHOULD consider:

- quality of result;
- independence of execution;
- reasoning process;
- consistency of performance.

---

## 3.3 Progressive Competency Development

Competencies develop progressively.

Evaluation SHOULD recognize intermediate states rather than only:

- not learned;
- learned.

Competency progression is represented through learning states:

unknown

↓

introduced

↓

learning

↓

practicing

↓

mastered

---

# 4. Competency Evidence Model

Evidence for competency evaluation MAY include:

## 4.1 Knowledge Evidence

Demonstrates conceptual understanding.

Examples:

- explanation of principles;
- description of relationships;
- identification of concepts.

---

## 4.2 Reasoning Evidence

Demonstrates the ability to analyze and justify decisions.

Examples:

- explaining trade-offs;
- selecting appropriate approaches;
- identifying limitations.

---

## 4.3 Application Evidence

Demonstrates practical capability.

Examples:

- solving practical tasks;
- implementing solutions;
- completing project activities.

Application evidence SHOULD have higher evaluation value for practical competencies.

---

## 4.4 Consistency Evidence

Demonstrates stability of competency.

Examples:

- repeated successful applications;
- independent execution;
- transfer of knowledge to new situations.

---

Competency Evaluation MUST be based on relevant evidence.

Evidence MAY include:

- Knowledge / Understanding;
- Reasoning;
- Application;
- Independence;
- Consistency.

The evaluator SHOULD consider the evidence type and its relevance to the competency.

Practical competencies SHOULD require practical application evidence.

A correct explanation MUST NOT automatically be treated as evidence of successful practical application.

---

# 5. Competency Evaluation Criteria

Evaluation SHOULD consider:

## 5.1 Understanding

The learner can explain relevant concepts and relationships.

---

## 5.2 Application

The learner can apply knowledge to achieve a practical outcome.

---

## 5.3 Independence

The learner can perform tasks with decreasing external assistance.

This criterion is related to:

- Automation Level;
- learner progression.

---

## 5.4 Reliability

The learner can reproduce successful outcomes consistently.

---

# Independent Competency Dimensions

Competency Evaluation MUST keep the following dimensions conceptually distinct:

1. Competency State
2. Automation Level
3. Learning Debt

They describe different aspects of learner development.

### Competency State

Competency State describes the current stage of competency development:

```
unknown
   ↓
introduced
   ↓
learning
   ↓
practicing
   ↓
mastered
```

### Automation Level

Automation Level describes the degree of learner independence during application:

```
NONE
   ↓
ASSISTED
   ↓
SHARED
   ↓
FULL
```

### Learning Debt

Learning Debt describes the number of successful applications still required for the competency to reach the defined stability threshold.

These dimensions MUST NOT be collapsed into a single score or inferred solely from one another.

Learning Debt MUST NOT independently determine:

- Competency State;
- mastery;
- progression.

Learning Debt reaching zero indicates that the defined number of successful applications has been achieved.

The determination of competency state or mastery MUST remain an evidence-based Competency Evaluation.

---

# 6. Competency State Progression

A competency progresses through states:

unknown

↓

introduced

↓

learning

↓

practicing

↓

mastered

Each transition SHOULD require supporting evidence.

Examples:

### introduced → learning

Requires:

- basic understanding;
- ability to describe the purpose of the competency.

---

### learning → practicing

Requires:

- ability to apply concepts with guidance;
- successful completion of structured tasks.

---

### practicing → mastered

Requires:

- independent application;
- consistent successful outcomes;
- ability to explain decisions.

---

# 7. Relationship With Automation Level

Competency evaluation SHOULD consider learner independence.

Automation Level represents:

NONE

↓

ASSISTED

↓

SHARED

↓

FULL

A learner may demonstrate knowledge while still requiring assistance.

Therefore:

- competency level and automation level MUST be evaluated separately;
- successful completion with assistance MUST NOT automatically indicate mastery.

---

# 8. Relationship With Learning Debt

Competency evaluation identifies incomplete stabilization.

Examples:

- inconsistent application;
- dependency on assistance;
- inability to transfer knowledge.

Such situations MAY indicate Learning Debt.

Detailed methodology is defined in:

- 04-Learning-Debt.md

---

# 9. Relationship With Assessment

Assessment provides evidence used for competency evaluation.

Relationship:

Assessment

    |

Evidence

    |

Competency Evaluation

    |

Competency State

Assessment collects evidence.

Competency Evaluation interprets evidence against competency criteria.

---

# 10. Relationship With ALH Architecture

Competency Evaluation uses architectural concepts defined by ALH.

Relationships:

Competency Model

    |

Competency Evaluation

    |

Memory Model

    |

Decision Engine

Competency Evaluation:

- uses competencies defined by Competency Model;
- contributes to learner state representation;
- provides information for educational decisions.

It does not replace:

- Competency Model;
- Memory Model;
- Decision Engine.

---

# 11. Constraints

Competency Evaluation MUST:

- remain evidence-based;
- preserve explainability;
- evaluate practical ability;
- support progressive development.

Competency Evaluation MUST NOT:

- reduce competency to numerical scoring only;
- replace learning activities;
- define implementation mechanisms.

---
