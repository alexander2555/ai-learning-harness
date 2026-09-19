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

The canonical competency state is one of:

- `unknown`
- `introduced`
- `learning`
- `practicing`
- `mastered`

The meanings and allowed transitions of these states are defined by the
canonical competency-state transition table in `30-persistence.md`.

A competency state is durable Learning State.

Competency-state changes MUST be represented by an authorized
`Learning Assessment Proposal` and committed through the Persistence Manager.

The Assessor determines the proposed competency-state change from learner
evidence. The Assessor MUST NOT directly mutate the persisted competency
state.

A competency state MUST NOT be changed solely because an engineering result
was successfully produced by the AI coding agent.

## 4. Learning Unit

A Learning Unit is an addressable learning unit that organizes
knowledge, concepts, examples, preparation, or exercises around one
or more competencies.

A Learning Unit is not itself a competency and does not establish
competence or mastery when completed.

## 5. Self-Assessment

A learner's self-assessment is a claim about their own competence.

Use it to inform:

- preparation;
- intervention;
- activity form;
- assessment strategy.

Do not use self-assessment alone to establish mastery.

## 6. Learner Participation Gate

For every learning-relevant engineering activity whose target competency
is not established as mastered for the relevant scope, the agent MUST NOT
begin the substantive target activity until one of the following has been
completed:

1. prerequisite preparation required for a meaningful learner attempt; or
2. an adequate learning-relevant learner-owned activity.

The selected preparation or learner-owned activity MUST be explicitly
identified in the Execution Contract.

The agent MUST execute the selected learner-participation stage before
performing the substantive target activity.

After the learner-participation stage, the agent MUST assess the resulting
learner activity and determine the permitted assistance and next transition.

The agent MUST NOT bypass this gate by performing the substantive target
activity automatically.

Safety, security, integrity, or other explicitly authorized emergency
conditions may override the normal sequence. Such an override MUST be
explicitly recorded and MUST produce the required follow-up learning action.

## 7. Learner-Owned Work

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

## 8. AI Work

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

## 9. Automation Level

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

When the current activity is the target learner activity for a learning-relevant competency:

- `FULL` MUST NOT be selected for `unknown` or `introduced` competency state;
- `NONE` MUST be selected when the learner is expected to perform the
  substantive target activity independently;
- `ASSISTED` MAY be selected when the learner retains substantive
  responsibility and the AI provides bounded support;
- `SHARED` MAY be selected only when the learner-owned and agent-owned
  substantive portions are explicitly separated in the Execution Contract.

`FULL` is permitted only when the current activity is not the target learner
activity, or when an explicitly authorized emergency override applies.

The Automation Level MUST NOT be selected in a way that bypasses the
required Learner Participation Gate.

The selected Automation Level MUST be consistent with:
- the current competency state;
- whether the activity is the target learner activity;
- the learner-owned activity;
- the required learner-participation stage;
- the Assistance Envelope.

There is no universal mapping:

`learning → ASSISTED`

or:

`mastered → FULL`

Such mappings are invalid.

A mastered competency may deliberately use NONE when the learner wants practice.

A non-mastered competency may permit `FULL` only for engineering work that is not the target learner activity.

`FULL` MUST NOT be used to perform a target learner activity for the learner.

For a learning-relevant target learner activity with competency state not `mastered`:

1. determine whether prerequisite preparation is required;
2. complete the required preparation;
3. establish the learner-owned target activity;
4. select `NONE`, `ASSISTED`, or `SHARED` according to the defined learner
   ownership;
5. prohibit `FULL` for the target learner activity.

The agent MUST NOT execute the target learner activity at `FULL`.

## 10. Assistance Envelope

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

## 11. Socratic Escalation

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

## 12. Prerequisite Preparation

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

## 13. Mastery

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

## 14. One-Successful-Attempt Rule

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

## 15. Failed Mastery Attempt

A competency in `mastered` state may be reassessed when a later activity produces relevant learner evidence.

If a mastery attempt fails:
`practicing`
→ appropriate lower learning state
→ later relevant activity
→ new learner attempt.

Reassessment MUST use the same evidence-based assessment process as any other competency-state change.
Do not immediately repeat the same activity merely to satisfy a numerical retry count.

If the reassessment provides sufficient evidence that the learner no longer
meets the competency-specific mastery criteria, the Assessor MUST propose
a lower competency state permitted by the canonical competency-state
transition table in `30-persistence.md`.

The transition MUST be represented by a `Learning Assessment Proposal`
and committed through the Persistence Manager.

The system MUST NOT use a universal retry count or arbitrary degradation
rule to determine the resulting state.

The resulting state MUST be justified by the relevant learner evidence and
the competency-specific criteria.

The downgrade must reflect the demonstrated state after the failed
attempt; do not introduce artificial numeric state transitions.

## 16. Mastered Reassessment

Mastery is scoped.

A concern about an existing mastered competency does not automatically
destroy mastery.

Relevant reassessment must first occur.

If relevant new evidence demonstrates insufficient independent
performance:

`mastered → practicing`

or another semantically appropriate lower state permitted by the
canonical competency-state transition table in `30-persistence.md`,
Section 7.

If reassessment confirms the competency:

`mastered → mastered`.

## 17. Learning Debt

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

Each Learning Debt record is persisted according to the Learning Debt
record schema in `30-persistence.md`, Section 6.

## 18. Evidence and Assessment Boundary

Evidence is maintained separately from Learning State.

Evidence and provenance semantics are defined by
`30-persistence.md`, Section 17 (Evidence); the evidence record
schema is defined in Section 3.5.

The Assessor interprets actual learner evidence.

The Assessor produces a Learning Assessment Proposal.

The Assessor does not mutate Learning State.

Persistence Manager commits authorized state changes.

Evidence semantics used by this instruction are consumed from the
authoritative persistence/evidence contract. This instruction does not
define evidence storage, provenance schema, or persistence semantics.

## 19. Educational Boundary

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

## 20. Engineering Boundary

This instruction does not determine:

- technically correct architecture;
- implementation correctness;
- security correctness;
- engineering Definition of Done.

Those are governed by Engineering Policy and applicable engineering
verification.