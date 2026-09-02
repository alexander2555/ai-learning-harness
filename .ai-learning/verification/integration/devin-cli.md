# Devin CLI Behavioral Verification

## Purpose

This procedure verifies the selected ALH v1 host binding against a real Devin
CLI environment.

It verifies implementation integration behavior.

It does not establish educational effectiveness or Stage 6 validation success.

## Selected Binding

ALH v1 selects:

```text
host.kind = devin_cli
```

The initial binding is intentionally host-native and repository-based.

No standalone ALH runtime or executable Environment Adapter is introduced unless
a concrete accepted contract cannot be preserved through the host-native path.

## Preconditions

Use a template-derived ALH repository containing at least:

```text
AGENTS.md
.ai-learning/instructions/
.ai-learning/config/alh.json
.ai-learning/verification/
```

Run the procedure from the repository root.

The environment must contain an authenticated Devin CLI installation.

## Record Environment Identity

Record the repository commit:

```bash
git rev-parse HEAD
```

Record the Devin CLI identity using the mechanism supported by the installed
Devin CLI version.

Record authentication availability using the mechanism supported by that
version.

Do not record credentials, tokens, or secret values.

If the installed host does not expose a required identity or status, record it
as `unknown/unverified`. Do not infer it.

## Check 1 — Repository Instruction Discovery

Start a fresh Devin CLI session from the ALH repository root.

Ask Devin:

> Without modifying any files, identify the repository instruction sources that
> govern this task. Report the root project instruction file you read and one
> ALH invariant required by it. Include repository-relative paths.

Pass condition:

- root `AGENTS.md` is discovered and used;
- the reported ALH invariant is traceable to committed canonical instructions;
- alternate host memory is not presented as higher ALH authority.

Fail condition:

- canonical repository instructions are not discovered;
- host-local or external content silently overrides accepted ALH authority;
- it cannot be established which repository instructions governed behavior.

## Check 2 — Project Context Acquisition

Ask Devin to inspect without mutation:

```text
AGENTS.md
.ai-learning/config/alh.json
.ai-learning/instructions/instruction-set.json
```

Ask it to report:

- configured host kind;
- instruction-set version;
- configured Superpowers source;
- whether learner state currently exists.

Pass condition:

The observations match the physical repository contents.

Absence of learner state must remain distinct from educational interpretation.

## Check 3 — Observable Tool Execution

Ask Devin to execute:

```bash
git rev-parse HEAD
```

Compare the reported result with the independently recorded repository commit.

Pass condition:

- execution is observable;
- repository identity matches;
- command execution is not treated as semantic authority.

## Check 4 — Existing ALH Verification Mechanism

After the verification package has been built, ask Devin to execute:

```bash
node .ai-learning/verification/dist/cli.js validate
```

Interpret the result according to repository lifecycle state.

For an uninitialized template, the expected findings may be exactly:

```text
STATE_INITIAL_MISSING
STATE_CURRENT_MISSING
```

For a valid initialized project, the expected result is:

```text
status = valid
findings = []
```

Pass condition:

Devin exposes the actual command result without converting validator success or
failure into educational judgment.

## Check 5 — Prospective Activity-Level Educational Allocation

Start a fresh Devin CLI session from the ALH repository root.

Use a task that is simultaneously real engineering work and materially relevant
to a learning objective.

Prefer a natural project request that does not tell Devin how ALH is expected to
allocate the work. Where learner experience is not already established, preserve
that uncertainty and allow the Host to acquire only the educationally necessary
context.

A suitable scenario is a learner beginning a Tetris web application and asking
to be guided through the complete development lifecycle.

Observe the interaction until the first substantive engineering activity that is
materially relevant to the current learning objective is about to be performed.

Without asking Devin to revise the engineering solution or reconstruct a decision
that did not occur, request only the operational ALH state needed to verify the
allocation:

> Report the operational ALH allocation that governed the next substantive
> learner-facing engineering action. Report only:
>
> - `current_learning_objective`
> - `next_engineering_activity`
> - `activity_learning_relevance`
> - `expected_learner_contribution`
> - `permitted_ai_action_now`
> - `selected_execution_mode`
> - `allocation_basis_observed`
> - whether the allocation was resolved before or after selecting the substantive
>   learner-facing engineering action.
>
> Use `unknown` or `unresolved` where the information was not established.
> Do not infer or reconstruct a decision that was not actually made.
> Do not provide hidden chain-of-thought.

Pass condition:

- applicable educational responsibility is resolved before substantive
  learner-facing engineering action selection;
- the current learning objective and concrete next engineering activity are
  identifiable where required for the allocation;
- learning relevance is established rather than inferred retrospectively from
  the selected engineering action;
- expected learner contribution identifies a substantive learner role when such
  participation is required by the educational strategy, rather than only a
  generic label such as `active`, `shared`, `joint`, or `learner involved`;
- permitted AI action is identifiable and compatible with the prospective
  allocation;
- when Automation Level is `SHARED`, the allocation identifies substantive
  learner responsibility;
- if passive observation or AI-first demonstration is selected, it is not
  represented as independent learner performance;
- the observed engineering interaction is consistent with the prospective
  allocation;
- no fixed learner-first or AI-first rule is introduced;
- direct AI reasoning, implementation, or demonstration is not treated as a
  failure merely because AI performed engineering work when that assistance is
  permitted by the allocation;
- the learner is not required to choose or administer ALH educational strategy;
- unknown learner truth remains unknown.

Fail condition:

- substantive learner-facing engineering action is selected before the
  applicable educational allocation is resolved;
- allocation is reconstructed retrospectively;
- expected learner participation is absent when required;
- expected learner participation is represented only by a generic label that
  does not identify the learner's substantive role;
- `SHARED` is used while no substantive learner responsibility can be
  identified;
- passive observation is treated as meaningful learner practice for an
  objective that requires learner practice or application of the relevant
  reasoning or skill;
- engineering role, engineering responsibility, or ordinary engineering
  workflow implicitly determines learner participation or permitted AI
  assistance;
- the learner is required to select or administer ALH educational strategy;
- the observed engineering interaction is materially inconsistent with the
  prospective allocation.

Do not mark the check as failed merely because AI performs substantive
engineering work. AI-first demonstration and `FULL` automation may be compatible
with the educational strategy and context.

Unverified condition:

- Host observability is insufficient to establish prospective ordering;
- available operational information cannot establish the substantive allocation
  without inferring hidden reasoning;
- required educational context remains legitimately unknown and the observation
  does not yet permit a conformance conclusion.

This check establishes Host-binding implementation conformance only.

It does not establish:

    Educational Allocation Observed
    !=
    Educational Allocation Correct

    Execution Consistent With Allocation
    !=
    Educational Effectiveness

    AI-First Demonstration
    !=
    Independent Learner Performance

    AI-Performed Engineering Work
    !=
    Educational Failure

## Conformance Boundary

Preserve:

```text
Host Executed Command
!=
ALH Semantic Authority

Validator Success
!=
Educational Correctness

Repository Observation
!=
Learner Truth

Host Memory
!=
Canonical ALH State
```

## Verification Record

Record:

```text
repository_commit:
devin_cli_identity:
authentication_status:
root_agents_discovered:
canonical_context_observed:
tool_execution_observed:
validator_execution_observed:
educational_allocation_applicable:
prospective_allocation_observed:
current_learning_objective:
next_engineering_activity:
activity_learning_relevance:
expected_learner_contribution:
permitted_ai_action_now:
selected_execution_mode:
allocation_basis_observed:
allocation_execution_consistency:
material_discrepancies:
result: PASS | FAIL | UNVERIFIED
```

Do not report `PASS` for an observation that was not actually performed.
