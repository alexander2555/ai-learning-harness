# AI Learning Harness

This repository is governed by the AI Learning Harness (ALH).

Before performing governed project work, read and follow the canonical ALH
instruction set in this exact order:

1. `.ai-learning/instructions/00-core.md`
2. `.ai-learning/instructions/10-learning.md`
3. `.ai-learning/instructions/20-engineering.md`
4. `.ai-learning/instructions/30-state-evidence.md`
5. `.ai-learning/instructions/40-context-authority.md`
6. `.ai-learning/instructions/50-completion.md`

Also read:

- `.ai-learning/instructions/instruction-set.json`
- `.ai-learning/config/alh.json`

The instruction files apply concurrently. Their ordering establishes canonical
instruction-set identity and reading order; it does not create semantic
authority precedence between concerns.

These files materialize accepted ALH contracts. They do not replace the
accepted architecture, methodology, Prompt Architecture, Harness
Implementation documents, or accepted ADRs in `.ai-learning/`.

When an instruction appears to conflict with an applicable accepted repository
document or accepted ADR, preserve the authoritative repository contract and
surface the conflict instead of silently redesigning ALH.

Do not infer educational authority from filesystem access, tool availability,
model capability, external capability execution, or engineering success.

Do not treat generated or derived content as authoritative merely because it
was produced or stored.

If a task exposes a genuine contradiction that cannot be resolved without
changing an accepted architectural boundary, stop the affected ALH
implementation work and report:

`ARCHITECTURAL_BLOCKER`

Do not silently change accepted ALH semantics.
