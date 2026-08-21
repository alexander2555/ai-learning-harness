# ALH Implementation Verification

This directory contains the deterministic ALH validator, Project Initializer,
schemas, implementation tests, and Stage 5 integration verification procedures.

## Requirements

- Node.js 24
- npm
- a template-derived ALH repository

Commands that operate on an ALH project should be invoked from the repository
root unless an explicit `--root` is supplied.

## Install

From `.ai-learning/verification`:

```bash
npm ci
```

## Build and Test

From `.ai-learning/verification`:

```bash
npm run build
npm test
```

`npm test` performs a build before running the compiled test suite.

## Template State Before Initialization

A template checkout intentionally contains no authoritative learner state.

Validation before Project Initialization may therefore report exactly:

- `STATE_INITIAL_MISSING`
- `STATE_CURRENT_MISSING`

These findings do not require placeholder learner state to be added to the
template.

## Initialize a Project

Build the verification package first:

```bash
cd .ai-learning/verification
npm run build
```

Then run the initializer from the repository root:

```bash
node .ai-learning/verification/dist/cli.js initialize
```

To supply an existing learner identity:

```bash
node .ai-learning/verification/dist/cli.js initialize \
  --learner-id learner-11111111-1111-4111-8111-111111111111
```

If no learner identity is supplied, the initializer creates a new local opaque
identifier in canonical `learner-<UUIDv4>` form.

Creating the identifier establishes no educational facts about the learner.

The initializer is non-destructive. ALH v1 provides no force, repair, reset,
upgrade, or migration mode.

## Validate an Initialized Project

From the repository root:

```bash
node .ai-learning/verification/dist/cli.js validate
```

A technically valid initialized project returns:

```json
{
  "status": "valid",
  "findings": []
}
```

Validator success establishes deterministic technical integrity only.

It does not establish educational correctness or Stage 6 system success.

## Canonical Instruction Identity

Canonical instruction files are byte-identified with SHA-256 values declared in:

```text
.ai-learning/instructions/instruction-set.json
```

Their repository representation is fixed to LF by `.gitattributes`.

Do not regenerate instruction hashes from a checkout whose line-ending
representation differs from the canonical repository representation.

## Integration Verification

The initial supported host is `devin_cli`.

Use:

- `integration/devin-cli.md` for host behavioral verification;
- `integration/superpowers.md` for Superpowers compatibility verification.

External integration verification remains separate from deterministic CI because
host and external-capability behavior can change independently of the committed
ALH implementation.
