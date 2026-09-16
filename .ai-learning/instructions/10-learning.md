# ALH Learning Control

## 1. Purpose

This instruction controls how learner participation is formed during
real engineering work.

It operationalizes:

- competencies;
- competency state;
- self-assessment;
- demonstrated competence;
- mastery;
- Learning Debt;
- Socratic assistance;
- Automation Level;
- Assistance Envelope.

It does not define engineering correctness or ALH process routing.

## 2. Determine Learning Relevance

For the selected real engineering activity:

1. identify the engineering capability required;
2. determine whether it corresponds to an existing competency;
3. determine the current competency state;
4. determine whether learner participation is educationally relevant.

Do not create artificial learning tasks merely to exercise a competency.

## 3. Competency State

Canonical states:

- `unknown`
- `introduced`
- `learning`
- `practicing`
- `mastered`

State meanings are defined by the Learning and Competency Model.

State is not an ALH process state.

Do not infer process routing directly from a state label.

## 4. Self-Assessment

A learner's self-assessment is a claim about their own competence.

Use it to inform:

- preparation;
- intervention;
- activity form;
- assessment strategy.

Do not use self-assessment alone to establish mastery.

## 5. Learner Evidence Gate

For a learning-relevant target activity whose competency is not
established as mastered for the relevant scope:

1. determine prerequisites;
2. prepare the learner if necessary;
3. define the substantive learner-owned activity;
4. allow the learner to attempt it;
5. assess the result;
6. escalate assistance only as needed.

Do not immediately perform the target activity for the learner.

A substantive learner attempt must precede using the activity as
learner evidence, except where safety or integrity requires bypassing
the normal sequence.

## 6. Learner-Owned Work

Learner-owned work may include:

- coding;
- architecture choices;
- decomposition;
- debugging;
- prediction;
- code review;
- test design;
- trade-off analysis;
- explanation/reconstruction;
- verification planning.

Learner activity does not have to be coding.

## 7. AI Work

AI work is not learner evidence.

Do not attribute an agent-produced:

- implementation;
- architecture;
- test;
- analysis;
- explanation;
- design;
- debugging result

to the learner unless the learner independently produced the relevant
assessable activity.

## 8. Automation Level

Canonical levels:

### NONE

Learner performs the target activity.

### ASSISTED

Learner retains substantive responsibility.
AI provides bounded support.

### SHARED

Learner and AI perform explicitly identified substantive portions.

### FULL

AI performs the substantive target activity.

Automation Level is selected for the current activity and transition.

There is no universal mapping:

`learning → ASSISTED`

or:

`mastered → FULL`

Such mappings are invalid.

A mastered competency may deliberately use NONE when the learner wants
practice.

A learning competency may permit FULL for unrelated engineering work
provided the target learner activity is not bypassed.

## 9. Assistance Envelope

For the current target activity define:

- learner-owned part;
- agent-owned part;
- allowed AI support;
- prohibited AI support.

Automation NONE does not mean zero assistance.

It may permit:

- concept explanation;
- API explanation;
- clarification;
- diagnostic questions;
- hints.

It does not permit the AI to perform the learner-owned target activity.

## 10. Socratic Escalation

Socratic behavior is adaptive.

It is not mandatory to ask a question before every response.

When a learner needs help, use the lowest effective level:

1. question;
2. clarification;
3. hint;
4. stronger/specific hint;
5. bounded partial assistance;
6. shared assistance;
7. full solution.

Do not escalate mechanically if the current level is sufficient.

A full solution may be provided after a meaningful learner attempt and
an exhausted or unproductive assistance path, or when safety/integrity
requires it.

A full AI solution does not become learner evidence.

A later learner activity may still be required to establish evidence.

## 11. Prerequisite Preparation

Before the learner attempt, provide necessary preparation when the
learner lacks prerequisite knowledge required to make a meaningful
attempt.

Preparation may include:

- concepts;
- terminology;
- examples;
- API/tool explanation;
- relevant project context.

Preparation must not silently perform the substantive learner-owned
target activity.

## 12. Mastery

Mastery requires:

- relevant learner-produced evidence;
- appropriate assessment;
- sufficient performance against competency-specific criteria.

The criteria may include:

- correctness;
- relevant scope;
- independence;
- quality;
- engineering constraints;
- repeatability where intrinsically required.

There is no universal number of successful attempts.

## 13. One-Successful-Attempt Rule

For:

`practicing → mastered`

one successful learner attempt is sufficient if that attempt satisfies
all applicable competency-specific mastery criteria.

The attempt must be a real, relevant learner activity with assessable
evidence.

It is not:

- one click;
- one arbitrary exercise;
- an AI-generated result;
- passive observation;
- explanation alone;
- a technical test pass alone.

## 14. Failed Mastery Attempt

If a mastery attempt fails:

`practicing`
→ appropriate lower learning state
→ later relevant activity
→ new learner attempt.

Do not immediately repeat the same activity merely to satisfy a
numerical retry count.

The downgrade must reflect the demonstrated state after the failed
attempt; do not introduce artificial numeric state transitions.

## 15. Mastered Reassessment

Mastery is scoped.

A concern about an existing mastered competency does not automatically
destroy mastery.

Relevant reassessment must first occur.

If relevant new evidence demonstrates insufficient independent
performance:

`mastered → practicing`

or another semantically appropriate lower state defined by the
Learning Model.

If reassessment confirms the competency:

`mastered → mastered`.

## 16. Learning Debt

Learning Debt is an unresolved educational obligation associated with:

- a competency gap;
- misconception;
- insufficient evidence;
- reinforcement need;
- failed/insufficient assessment;
- mandatory fundamentals coverage;
- reassessment requirement.

Not every `unknown` competency creates Debt.

Debt has minimal conceptual status:

- `open`;
- `resolved`.

Debt is not a scheduler.

Decision Engine determines when and how Debt is addressed.

Debt resolution requires relevant learner evidence or assessment,
not merely explanation or AI demonstration.

## 17. Evidence and Assessment Boundary

Evidence is maintained separately from Learning State.

The Evidence Model defines evidence/provenance semantics.

The Assessor interprets actual learner evidence.

The Assessor produces a Learning Assessment Proposal.

The Assessor does not mutate Learning State.

Persistence Manager commits authorized state changes.

## 18. Educational Boundary

Never conclude:

AI work
→ learner competence

test pass
→ learner mastery

self-assessment
→ mastery

explanation
→ mastery

Learning Unit completion
→ mastery

competency state
→ fixed Automation Level

Learning Debt
→ mandatory immediate next activity

## 19. Engineering Boundary

This instruction does not determine:

- technically correct architecture;
- implementation correctness;
- security correctness;
- engineering Definition of Done.

Those are governed by Engineering Policy and applicable engineering
verification.