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
material_discrepancies:
result: PASS | FAIL | UNVERIFIED
```

Do not report `PASS` for an observation that was not actually performed.
