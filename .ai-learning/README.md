# AI Learning Harness — Internal Documentation

AI Learning Harness (ALH) is a control layer over an AI coding-agent Host.

The Host is the external execution environment used by ALH.
The current default configured Host kind is `devin_cli`.

ALH combines real software engineering with adaptive learner participation, verification, assessment, and durable state management.

ALH durable state is stored under `.ai-learning/state/` and is mutated only through the Persistence Manager.

For normal developer use, start with [`../USER-GUIDE.md`](../USER-GUIDE.md).

## Current v2 Structure

The current ALH v2 runtime contract is intentionally compact:

```text
.ai-learning/
├── config/
│   └── alh.json
├── state/
│   ├── manifest.json
│   ├── learning-state.json
│   ├── engineering-continuation.json
│   ├── project-context.json
│   ├── project-graph.json
│   ├── evidence/
│   │   └── *.json
│   ├── proposals/
│   │   └── *.json
│   └── journal.jsonl
└── instructions/
    ├── instruction-set.json
    ├── 00-orchestration.md
    ├── 10-learning.md
    ├── 20-engineering.md
    ├── 30-persistence.md
    └── 40-verification.md
```

### `state/`

`.ai-learning/state/` is the only canonical durable-state storage location.

All durable ALH records are JSON except `journal.jsonl`, which is a JSON Lines append-only journal.

Its record schemas, proposal format, bootstrap procedure, validation rules,
atomic commit rules, conflict handling, and journal semantics are defined
by `instructions/30-persistence.md`.

The Persistence Manager is the only authority allowed to create, replace, or delete durable state records.

The absence of `state/` means that ALH has not been initialized.
The absence of an individual optional record does not authorize the agent to invent its contents;
the record must be created only by the bootstrap procedure or an authorized persistence proposal.

### `config/alh.json`

Runtime configuration for the ALH installation.

It identifies the host environment, instruction-set version, and external engineering workflow foundation.

### `instructions/instruction-set.json`

Defines the active ALH instruction set and the instruction files that constitute it.

The current instruction set is v2.

### `instructions/00-orchestration.md`

Defines the ALH control loop and process authority.

It establishes:

- the Decision Engine as the authority for the next ALH process transition;
- the Pipeline as the executor of the selected transition;
- the mandatory control cycle;
- execution contracts;
- engineering and learning outcomes;
- verification, assessment, persistence, and re-entry into the decision loop.

### `instructions/10-learning.md`

Defines learning participation during real engineering work.

It governs:

- competencies and competency state;
- learner evidence;
- self-assessment;
- learner-owned work;
- Automation Level;
- Assistance Envelope;
- Socratic assistance;
- mastery;
- Learning Debt;
- educational boundaries.

It does not define engineering correctness or process routing.

### `instructions/20-engineering.md`

Defines engineering quality requirements.

It governs:

- real-project-first engineering;
- planning;
- architecture;
- implementation;
- testing;
- security;
- documentation;
- review;
- Definition of Done;
- applicable Superpowers practices;
- engineering failure handling.

Engineering quality is independent of learner state.

### `instructions/30-persistence.md`

Defines the durable ALH state contract: storage, schemas, proposals,
bootstrap, validation and atomic persistence.

It establishes:

- Persistence Manager as the only durable-state mutation authority;
- the canonical storage layout under `state/` and the durable state record schemas;
- typed proposals, proposal producers and the proposal type/target/authority matrix;
- the canonical competency-state transition matrix;
- ordered validation and rejection with exact journalized reasons;
- the atomic commit transaction and conflict handling;
- bootstrap/initialization, load-time validation and state reconciliation;
- the persistence execution mechanism and the persistence completion gate.

Other roles propose state changes; they do not mutate durable ALH state directly.

### `instructions/40-verification.md`

Defines engineering verification, learner-evidence assessment routing, persistence after verification, completion conditions, and mandatory return to the Decision Engine.

Verification does not become educational authority.

## Authority Boundaries

The instruction set preserves the following boundaries:

```text
Decision Engine
    → determines what happens next

Pipeline
    → executes the selected transition

Engineering Policy
    → determines engineering correctness

Learning Policy
    → determines learner participation

Verification
    → verifies engineering results

Assessor
    → interprets learner evidence

Persistence Manager
    → commits authorized durable-state mutations
```

No role may silently assume another role's authority.

In particular:

```text
Engineering Result != Learner Competency
Engineering Done != Educational Done
AI Work != Learner Evidence
Evidence != Learning State
```

## Repository-Level Operating Contract

Root [`../AGENTS.md`](../AGENTS.md) defines how the ALH instruction set is loaded and applied to governed project work.

The instruction files under `instructions/` provide the active runtime behavior.

This directory does not contain a second, competing architecture description.

## Working With the Documentation

For practical developer use:

- read [`../USER-GUIDE.md`](../USER-GUIDE.md).

For the repository-level operating contract:

- read [`../AGENTS.md`](../AGENTS.md).

For the active runtime instructions:

- read [`instructions/instruction-set.json`](instructions/instruction-set.json);
- then the five instruction files listed by that instruction set.

For security reporting:

- read [`../SECURITY.md`](../SECURITY.md).

For contribution requirements:

- read [`../CONTRIBUTING.md`](../CONTRIBUTING.md).
