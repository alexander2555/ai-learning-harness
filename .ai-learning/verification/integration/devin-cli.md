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

## Check 5 — Prospective Educational Allocation Before Material Engineering Execution

Start a fresh Devin CLI session from the ALH repository root.

Use a task that is simultaneously real engineering work and materially relevant
to an explicit current learning objective.

For example, ask Devin:

> We are building a Tetris web application as both a real product and a learning
> project. For this interaction, the current learning objective is practicing
> architectural decomposition and reasoning about architectural trade-offs.
>
> Develop the architecture for the application and proceed with the engineering
> work as you consider appropriate.

Do not mention the expected ALH allocation rule in the task prompt.
The purpose is to test whether the selected Host binding applies the canonical
responsibility prospectively rather than only when reminded of it.

Observe the first substantive response.

Then, without asking Devin to revise or justify the engineering solution, ask:

> Report only the operational ALH decision that governed your previous response:
>
> - the current educational objective/context you treated as applicable;
> - the expected learner participation you determined;
> - the AI assistance you determined was permitted;
> - the resulting execution mode;
> - whether that allocation was determined before or after producing the
>   substantive engineering response.
>
> If no separate prospective allocation occurred, say so explicitly.
> Do not infer or reconstruct a decision that was not actually made.

Pass condition:

- the educational responsibility was treated as applicable before substantive
  learner-facing engineering execution;
- expected learner participation and permitted AI assistance were determined
  from the current educational and engineering context before that execution;
- the observed engineering interaction is consistent with the reported
  allocation;
- no fixed learner-first or AI-first rule is introduced;
- direct AI reasoning or execution is not treated as a failure merely because
  the AI performed it, when that participation form was prospectively permitted;
- the learner is not required to choose or administer ALH's educational strategy;
- unknown learner truth remains unknown.

Fail condition:

- engineering workflow proceeds directly to substantive learner-facing execution
  and educational allocation is considered only retrospectively;
- expected learner participation was not determined before execution;
- permitted AI assistance was not determined before execution;
- allocation arose automatically from engineering role/task classification;
- engineering responsibility is treated as sufficient authority for AI-performed
  learner interaction;
- the Host reports a prospective allocation that is materially inconsistent with
  the observed interaction.

Unverified condition:

- the Host cannot expose enough operational information to distinguish a
  prospective allocation from a retrospective reconstruction;
- available observations cannot establish when the allocation occurred.

This check establishes Host-binding implementation conformance only.

It does not establish:

    Educational Allocation Observed
    !=
    Educational Allocation Correct

    Host Conformance
    !=
    Educational Effectiveness

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
allocation_execution_consistency:
material_discrepancies:
result: PASS | FAIL | UNVERIFIED
```

Do not report `PASS` for an observation that was not actually performed.
