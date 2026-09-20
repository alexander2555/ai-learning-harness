# AI Learning Harness

AI Learning Harness (ALH) is a control layer over an AI coding-agent Host.

It combines real software development with adaptive learner participation,
engineering verification, and evidence-based learning.

```text
Developer
    ↕
AI Coding Agent (ALH control layer)
    ↕
Real Project
```

## Core Boundary

```text
Engineering Done != Educational Done
Engineering Result != Learner Competency
AI Work != Learner Evidence
```

A working implementation or a passing test does not by itself establish
what the developer can independently demonstrate.

## Setup / First Use

On first use, ALH performs one-time initialization: it provisions the
Superpowers submodule (`.superpowers/`) and creates the canonical
durable state under `.ai-learning/state/` (see USER-GUIDE.md §1).

## Documentation

- [USER-GUIDE.md](USER-GUIDE.md) — how to work with ALH (practical start)
- [.ai-learning/docs/](.ai-learning/docs/) — fundamental goals, purpose, and architecture (original technical description)
- [.ai-learning/README.md](.ai-learning/README.md) — internal v2 documentation: the runtime contract

## License

MIT
