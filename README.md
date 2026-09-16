# AI Learning Harness

AI Learning Harness (ALH) is a control layer over IDE-based AI coding agents.

It enables a developer to learn through real software development while the coding agent adapts its assistance, preserves meaningful developer participation, and keeps demonstrated learning separate from engineering success.

```text
Developer
    ↕
IDE Coding Agent
    ↕
AI Learning Harness
    ↕
Real Project
```

ALH governs how the coding agent combines real engineering work with learning, assessment, verification, and continuity. Its goal is both a working engineering result and progressively increasing developer independence.

## Using ALH

If you are a developer working in an ALH-enabled project, start with:

[USER-GUIDE.md](USER-GUIDE.md)

The guide covers the normal developer workflow without requiring knowledge of ALH's internal state or architecture.

For the detailed ALH documentation, see:

[.ai-learning/README.md](.ai-learning/README.md)

## Core Boundary

ALH deliberately keeps engineering success and demonstrated learning separate.

```text
Engineering Done
!=
Educational Done

Engineering Result
!=
Learner Competency

AI Work
!=
Learner Evidence
```

A working implementation, passing tests, or successful AI-generated solution does not by itself establish what the developer understands or can do independently.

Engineering quality is not reduced for learning purposes, and learning state does not determine the technically correct engineering solution.

## Project Status

ALH v2 is the current architectural and operational model.

The v2 control layer defines explicit separation between orchestration, learning participation, engineering policy, verification, and durable-state persistence.

System validation remains dependent on suitable real project and learner conditions. ALH does not fabricate learner state, project work, evidence, or educational conditions merely to produce a validation result.

## Documentation

Start with the document appropriate to your task:

* [User Guide](USER-GUIDE.md) — practical use of ALH in a project.

* [SECURITY.md](SECURITY.md) — security reporting.
* [CONTRIBUTING.md](CONTRIBUTING.md) — contribution requirements.

The detailed documentation remains authoritative for architecture and methodology; this README intentionally provides only the overview and navigation.

## License

This project is licensed under the MIT License.
