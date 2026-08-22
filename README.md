# AI Learning Harness

AI Learning Harness (ALH) is an educational harness for IDE-based AI coding agents.

It enables a developer to learn through real software development while the coding agent adapts its assistance, preserves meaningful developer participation, and tracks demonstrated learning separately from engineering success.

```text
Developer
    ↕
IDE Coding Agent
    ↕
AI Learning Harness
    ↕
Real Project
```

ALH is designed for workflows in which an AI coding agent is not only expected to help complete engineering work, but also to help the developer become increasingly capable of understanding, evaluating, and independently creating solutions.

## Using ALH

If you are a developer working in an ALH-enabled project, start with:

**[USER-GUIDE.md](USER-GUIDE.md)**

The guide describes the normal developer workflow without requiring you to understand ALH's internal assessment or learner-state mechanisms.

For the conceptual model, project setup, repository structure, and links to authoritative architecture and methodology, see:

**[.ai-learning/README.md](.ai-learning/README.md)**

## Core Boundary

ALH deliberately keeps engineering success and demonstrated learning separate.

```text
Engineering Done
!=
Educational Done

Engineering Result
!=
Learner Competency
```

A working implementation, passing tests, or successful AI-generated solution does not by itself establish what the developer understands or can do independently.

## Project Status

ALH v1 implementation and implementation verification are complete.

The bounded System Validation contract and execution protocol are ready. Real System Validation is intentionally deferred until a naturally suitable real learner and project context exists.

ALH does not fabricate learner state, project work, or educational conditions merely to produce a validation result.

## Current Scope

ALH v1 is designed around IDE coding-agent workflows and currently provides verification tooling for the supported host configuration documented in [`.ai-learning/verification/README.md`](.ai-learning/verification/README.md).

This repository should currently be treated as an early public v1 system rather than evidence of population-level or experimentally established educational efficacy.

## Documentation

* **[User Guide](USER-GUIDE.md)** — use ALH as a developer.
* **[ALH Overview](.ai-learning/README.md)** — concepts, setup, structure, and authoritative navigation.
* **[Architecture](.ai-learning/architecture/)** — Accepted system architecture.
* **[Methodology](.ai-learning/methodology/)** — Accepted learning and assessment methodology.
* **[System Validation](.ai-learning/harness/08-System-Validation.md)** — bounded validation contract.

## License

This project is licensed under the [MIT License](LICENSE).
