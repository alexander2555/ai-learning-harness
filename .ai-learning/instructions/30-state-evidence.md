# ALH State and Evidence Instructions

Instruction Set Version: 1.0.0

## Purpose

Preserve the integrity of canonical learner state, Educational Decision history,
Evidence, Candidate Educational Evidence, Engineering Completion records, and
Learner Memory.

Structured records provide inspectable representation.

Storage does not itself grant semantic authority.

## Learner-State Authority

The authoritative current learner snapshot resides in the canonical ALH
learner-state infrastructure.

Project engineering artifacts and learner educational state are separate
authority domains.

Project Truth
!=
Learner Truth

Learner-state read access
!=
Learner-state mutation authority

Do not directly mutate authoritative educational conclusions from engineering
execution, review, model inference, evidence capture, memory, or external
capability output.

## State Transition Discipline

For an authorized state-changing Educational Decision:

1. read the Current Learner State;
2. form the already-authorized Educational Decision and proposed semantic
   transition;
3. validate the proposed transition;
4. persist the Decision / Transition record;
5. update the Current Learner State;
6. run full validation.

Persist history before updating the current snapshot.

For a state-changing transition:

`prior_version = N`

and:

`resulting_version = N + 1`

Decision sequence and learner `state_version` are separate concepts.

The Initial Learner State is the deterministic history root and is not an
Educational Decision.

The first Educational Decision uses:

`sequence = 1`

## Semantic Changes

Represent educational transitions as semantic change sets.

Do not treat Educational Decisions as arbitrary JSON mutation.

A semantic change should identify the affected domain, subject, field, previous
value, and resulting value as required by the representation.

Do not use generic mutation semantics to bypass educational authority.

## Evidence Before Claim

Never make a factual claim stronger than the evidence and authority supporting
it.

Requested
!=
Executed
!=
Succeeded

Unknown
!=
Failure
!=
Success

For execution-bearing Evidence, preserve whether execution was requested
separately from execution status.

Use the canonical status vocabulary:

- `not_attempted`
- `invocation_failed`
- `completed_unsuccessfully`
- `completed_successfully`
- `outcome_unknown`

Do not convert missing execution evidence into success or failure.

## Evidence Records

An Evidence Record represents an observation, execution, result, or derived
evidential fact.

An Evidence Record does not itself establish:

- Engineering Done;
- learner mastery;
- competency;
- Educational Done.

Interpret evidence only within the scope it supports.

Do not generalize narrow evidence into broader claims without additional
justification.

## Derived Evidence

Derived Evidence must retain references to its source Evidence.

Transformation, aggregation, or summarization must not increase evidential
authority merely through transformation.

Relevant Evidence derivation graphs must remain acyclic.

## Evidence Correction

Where provenance matters, do not silently rewrite established Evidence.

Use explicit correction relationships such as:

- `corrects`
- `supersedes`
- `invalidates`

Referenced records must exist.

Relevant correction, supersession, and invalidation graphs must remain acyclic.

## Candidate Educational Evidence

Candidate Educational Evidence is a bounded educational interpretation proposal
that references Evidence.

A Candidate record cannot authorize its own acceptance.

Do not store global candidate acceptance such as:

`accepted = true`

Educational acceptance is derived from:

Candidate identity

- applicable purpose-aware Educational Decision
- purpose
- scope
- outcome

Acceptance for one purpose or scope does not imply acceptance for another.

## Engineering Completion Records

An Engineering Completion Record is a structured engineering evaluation
supported by Evidence.

It is not an Evidence Record.

It is not an Educational Decision.

Engineering Completion
!=
Educational Completion

## Learner Memory

Store Learner Memory separately from authoritative learner state.

A memory item may influence adaptive educational behavior, but it must not
establish authoritative educational conclusions.

Prefer append-oriented correction where memory provenance matters.
