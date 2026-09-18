# ALH Persistence Control

## 1. Purpose

This instruction controls all durable ALH state mutation.

Only the Persistence Manager may mutate durable ALH state.

## 2. Durable State

ALH may persist:

### Learning State

- competency states;
- provisional self-assessments;
- active educational objectives;
- active Learning Units;
- Learning Debt;
- misconceptions/gaps;
- practice/reassessment obligations;
- relevant learner preferences;
- evidence references.

### Engineering Continuation

- minimum unfinished engineering state;
- information required to continue work;
- information poorly recoverable from the repository.

### Project Context

- project purpose;
- stable constraints;
- accepted major decisions;
- rationale references;
- educational scope;
- stable assumptions;
- important context not safely reconstructible.

### Evidence Ledger

Persistent records of learner evidence and its provenance.

### Project Graph

Persistent structural relationships between project entities,
competencies, Learning Units and evidence.

## 3. Typed Proposals

Roles must not mutate durable state directly.

Supported proposal types:

- Evidence Proposal;
- Learning Assessment Proposal;
- Graph Mutation Proposal;
- Engineering Continuation Proposal;
- Project Context Proposal.

Flow:

```text
Role
→ typed proposal
→ Persistence Manager
→ validate
→ commit / reject
→ Decision Engine
```

## 4. Proposal Producers

### Assessor

Produces:
```text
Learning Assessment Proposal
```

based on interpreted learner evidence.

### Evidence-producing role

Produces:
```text
Evidence Proposal
```

only for actual relevant learner-produced evidence.

### Project/engineering roles

May produce:
```text
Graph Mutation Proposal
```
when project structure changes.

### Engineering roles

May produce:
```text
Engineering Continuation Proposal
```
when durable continuation information changes.

### Appropriate project role

May produce:
```text
Project Context Proposal
```
when stable project context changes.

## 5. Validation

Persistence Manager must validate:

- proposal type;
- authority of producer;
- target artifact;
- consistency with authoritative state;
- allowed mutation;
- required provenance;
- semantic validity.

Invalid proposals are rejected.

## 6. Rejection

On rejection:

- preserve authoritative state;
- record the exact rejection reason;
- do not silently repair or invent the intended mutation;
- return control to the Decision Engine.

## 7. Learning State

The Persistence Manager may commit a competency state change only from
an authorized Learning Assessment Proposal.

The Persistence Manager does not decide whether mastery exists.

The Assessor does not commit the resulting state.

## 8. Evidence

Evidence is separate from Learning State.

Evidence records must preserve sufficient provenance to distinguish:

- What the learner actually did (learner activity)
- What the agent did (engineering action)
- Which activity was involved (engineering activity)
- Which competency was relevant (target competency)
- Which assessment context applied (assessment context)

Do not convert AI work into learner evidence.

## 9. Project Graph

The Project Graph is a persistent structural model.

Relevant relationships include:

- REQUIRES
- DEPENDS_ON
- PRODUCES
- APPLIES
- PRACTICES
- ASSESSES
- EVIDENCED_BY

The Graph may inform the Decision Engine.

The Graph does not independently select the next ALH transition.

## 10. No Direct State Mutation

No role may directly:

- rewrite Learning State;
- declare a competency mastered;
- close Learning Debt;
- modify evidence provenance;
- modify continuation state;
- modify project context.

outside the applicable proposal path.

## 11. Reconciliation

If persistent state is inconsistent:

1. Preserve authoritative information;
2. Identify the inconsistency;
3. Route to State Reconciliation;
4. Produce corrected typed proposals;
5. Commit through Persistence Manager;
6. Return to Decision Engine.

Persistence inconsistency is not a terminal ALH state.