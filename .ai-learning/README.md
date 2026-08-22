# AI Learning Harness

AI Learning Harness (ALH) is an educational and governance layer for IDE-based AI coding agents.

It lets a developer learn through real software development while the coding agent adapts its assistance, preserves meaningful learner participation, and tracks what the developer has actually demonstrated.

```text id="wp1p3a"
Developer
    ↕
IDE Coding Agent
    ↕
AI Learning Harness
    ↕
Real Project
```

The developer works with the coding agent in normal project language. ALH governs how that agent combines engineering assistance with learning, assessment, and continuity.

**Using ALH as a developer?** Start with [`../USER-GUIDE.md`](../USER-GUIDE.md). You do not need to understand ALH's internal evidence or learner-state mechanisms before using an initialized project.

## What ALH Is For

ALH is designed to make real project development the primary learning environment.

Instead of separating development from a fixed training curriculum, ALH lets real engineering needs create learning opportunities. The agent can adapt how much help it gives, ask the developer to reason or implement when appropriate, and gradually transfer responsibility as demonstrated capability develops.

The goal is not simply to produce working code. It is to help develop the ability to understand, evaluate, and independently create engineering solutions.

See [`architecture/00-Vision.md`](architecture/00-Vision.md).

## How the Developer Experiences ALH

For normal use, the developer does not operate ALH's internal learning machinery directly.

The typical interaction is:

```text id="y7yjsc"
Open an ALH-enabled project
        ↓
Give the IDE agent a real engineering goal
        ↓
Work on the project together
        ↓
Agent adapts explanation, guidance, and learner participation
        ↓
Complete and verify the engineering work
        ↓
Ask about learning progress when useful
        ↓
Continue with real project work
```

The agent may explain, question, hint, review, request an implementation attempt, or provide more direct assistance depending on the situation and the learning context.

For the practical workflow, see [`../USER-GUIDE.md`](../USER-GUIDE.md).

## Core Boundaries

ALH deliberately keeps several conclusions separate:

```text id="v0fjzs"
Engineering Done
!=
Educational Done

Engineering Result
!=
Learner Competency

Candidate Educational Evidence
!=
Accepted Educational Evidence

Validator Success
!=
Educational Correctness
```

These are primarily constraints on **ALH and the governed coding agent**, not procedures that a developer must manually administer.

A working implementation, passing test suite, green CI run, or correct AI-generated answer can establish engineering facts. None automatically establishes what the developer understands or can do independently.

Likewise, ALH does not invent learner facts when information is missing:

```text id="1a4b75"
Unknown learner truth
remains unknown
```

For the governing semantics, see:

- [`methodology/02-Assessment.md`](methodology/02-Assessment.md)
- [`methodology/03-Competency-Evaluation.md`](methodology/03-Competency-Evaluation.md)
- [`methodology/07-Definition-of-Done.md`](methodology/07-Definition-of-Done.md)
- [`architecture/08-Memory-Model.md`](architecture/08-Memory-Model.md)
- [`architecture/09-Decision-Engine.md`](architecture/09-Decision-Engine.md)

## Learning and Assessment Under the Hood

The governed agent uses observable developer behavior and output to support educational assessment.

Depending on the competency and objective, relevant demonstrations can involve understanding, reasoning, practical application, independence, and consistency.

Internally, ALH distinguishes observations, educational evidence, educational decisions, and authoritative learner-state changes. Those distinctions prevent convenient engineering signals from silently becoming claims about the learner.

A developer normally does **not** need to collect evidence records, accept evidence, edit competency state, or operate this machinery manually.

When asked about learning progress, the agent can present the supported learning context in human-readable form. If the available information does not support a reliable conclusion, uncertainty should remain visible rather than being replaced with a guess.

See:

- [`architecture/04-Agent-Pipeline.md`](architecture/04-Agent-Pipeline.md)
- [`architecture/07-Competency-Model.md`](architecture/07-Competency-Model.md)
- [`methodology/02-Assessment.md`](methodology/02-Assessment.md)
- [`instructions/10-learning.md`](instructions/10-learning.md)

## Engineering and Learning Completion

ALH treats engineering completion and educational completion as separate concerns.

A project task can be correctly implemented without demonstrating that the developer has mastered the corresponding skill. Conversely, educational conclusions depend on evidence appropriate to the competency and learning objective rather than task completion alone.

This distinction allows the coding agent to preserve normal engineering rigor without treating every successful implementation as proof of learning.

See [`methodology/07-Definition-of-Done.md`](methodology/07-Definition-of-Done.md).

## Project Setup and Initialization

Initialization is required before normal use, but ALH v1 does not assign a single required actor to perform it. It is not part of the
trainee developer's normal learning workflow unless that developer is also handling project setup.

A prepared ALH project should already be initialized and technically valid before normal use.
Depending on the project workflow, initialization may be
performed manually or through a capable coding agent.
ALH v1 does not require automatic initialization by the agent.

A fresh template intentionally has no authoritative learner state. Initialization establishes the learner identity and required project state without inventing competency or other educational facts.

If you are responsible for setup, build the verification tooling from the repository root:

```bash id="rmnp68"
cd .ai-learning/verification
npm ci
npm run build
cd ../..
```

Then initialize:

```bash id="zzj8eg"
node .ai-learning/verification/dist/cli.js initialize
```

An existing learner identity can be supplied when appropriate:

```bash id="0o2uvs"
node .ai-learning/verification/dist/cli.js initialize \
  --learner-id learner-11111111-1111-4111-8111-111111111111
```

Then verify technical integrity:

```bash id="o1mj4h"
node .ai-learning/verification/dist/cli.js validate
```

A successful validation establishes technical integrity of the supported ALH state. It does not establish educational correctness or System Validation success.

The initializer is non-destructive. ALH v1 does not provide force, repair, reset, upgrade, or migration modes.

For the exact supported setup contract and CLI behavior, use [`verification/README.md`](verification/README.md).

## How the Coding Agent Is Governed

Repository-level [`../AGENTS.md`](../AGENTS.md) defines the canonical ALH instruction-loading contract for governed project work.

The instruction set materializes Accepted architecture and methodology for the coding-agent Host. Among other things, it governs how the agent:

- interprets project and learning context;
- selects appropriate assistance;
- preserves learner participation;
- performs assessment;
- handles uncertainty;
- separates engineering execution from educational authority;
- reports completion and learning-related conclusions.

These instructions apply Accepted semantics; they do not replace the architecture, methodology, ADRs, or governance artifacts as semantic authority.

See [`instructions/`](instructions/).

## System Validation

System Validation is a bounded validation of ALH behavior during suitable real project use.

It is **not a required final exercise for every developer or project**, and it is not part of the trainee's normal operational workflow.

Before a validation run, the real available context is classified as:

```text id="jgcjv3"
READY
NOT_INSTANTIABLE
```

If the required learner/project conditions do not naturally exist, validation is `NOT_INSTANTIABLE`.

```text id="6kzqko"
NOT_INSTANTIABLE
!=
NOT_VALIDATED
```

Do not create artificial learner state, competency contrast, project work, evidence, or observations merely to make System Validation executable.

For an instantiated run, criterion-level results use:

```text id="thlt93"
PASS
FAIL
INSUFFICIENT_EVIDENCE
```

and the Accepted contract defines the system-level outcomes:

```text id="p3g52f"
VALIDATED
NOT_VALIDATED
ARCHITECTURAL_BLOCKER
```

System Validation is deliberately bounded. It can establish what the Accepted validation design supports for the observed run; it does not establish universal or population-level causal educational efficacy.

Authoritative sources:

- [`harness/08-System-Validation.md`](harness/08-System-Validation.md)
- [`verification/SYSTEM-VALIDATION-SCENARIO.md`](verification/SYSTEM-VALIDATION-SCENARIO.md)

## Repository Map

The `.ai-learning/` directory contains the governed ALH system.

| Path            | Purpose                                                                                    |
| --------------- | ------------------------------------------------------------------------------------------ |
| `architecture/` | Accepted system and conceptual architecture                                                |
| `methodology/`  | Accepted learning, assessment, competency, and completion methodology                      |
| `ADR/`          | Accepted architectural decisions                                                           |
| `instructions/` | Canonical instructions governing the coding-agent Host                                     |
| `harness/`      | Harness contracts, including System Validation                                             |
| `config/`       | ALH configuration                                                                          |
| `prompts/`      | Prompt architecture and related artifacts                                                  |
| `verification/` | Initialization, deterministic verification, schemas, tests, and System Validation protocol |
| `governance/`   | Governance and acceptance artifacts                                                        |
| `development/`  | Development-oriented supporting artifacts                                                  |

## Where to Look

If you want to **use ALH as a developer**, read [`../USER-GUIDE.md`](../USER-GUIDE.md).

If you are **setting up a project**, start with [`verification/README.md`](verification/README.md).

If you need to understand **why the agent behaves as it does**, start with:

- [`architecture/00-Vision.md`](architecture/00-Vision.md)
- [`architecture/03-System-Architecture.md`](architecture/03-System-Architecture.md)
- [`architecture/04-Agent-Pipeline.md`](architecture/04-Agent-Pipeline.md)

For **learning and assessment semantics**:

- [`methodology/00-Learning-Model.md`](methodology/00-Learning-Model.md)
- [`methodology/02-Assessment.md`](methodology/02-Assessment.md)
- [`methodology/03-Competency-Evaluation.md`](methodology/03-Competency-Evaluation.md)
- [`methodology/07-Definition-of-Done.md`](methodology/07-Definition-of-Done.md)

For **learner state and authority**:

- [`architecture/07-Competency-Model.md`](architecture/07-Competency-Model.md)
- [`architecture/08-Memory-Model.md`](architecture/08-Memory-Model.md)
- [`architecture/09-Decision-Engine.md`](architecture/09-Decision-Engine.md)

For **System Validation**:

- [`harness/08-System-Validation.md`](harness/08-System-Validation.md)
- [`verification/SYSTEM-VALIDATION-SCENARIO.md`](verification/SYSTEM-VALIDATION-SCENARIO.md)

The Accepted architecture, methodology, ADRs, harness contracts, and governance artifacts remain authoritative when a simplified explanation in this README is insufficient.

## Non-Goals

ALH is not intended to:

- replace the developer with an autonomous code generator;
- equate AI capability with learner capability;
- infer competency from a successful engineering task;
- turn tests, CI, or deterministic validation into educational judges;
- invent learner truth when evidence is unavailable;
- require developers to administer educational evidence or competency state manually;
- force artificial learning exercises when real project work can provide appropriate opportunities;
- force System Validation when suitable real conditions do not exist;
- claim universal educational efficacy from a bounded System Validation run.

For normal developer use, continue with [`../USER-GUIDE.md`](../USER-GUIDE.md).
