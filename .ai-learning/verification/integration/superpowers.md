# Superpowers Compatibility Verification

## Purpose

This procedure verifies that the configured external capability source:

```text
obra/superpowers
```

can be discovered and used through the selected `devin_cli` host without
changing ALH authority boundaries.

Superpowers remains an external capability and workflow dependency.

ALH does not reimplement Superpowers-owned workflows.

## Verification Principle

Preserve:

```text
Installed
!=
Discovered
!=
Invoked
!=
Succeeded
!=
Educationally Sufficient
```

Each applicable state must be established independently.

## Preconditions

Complete the Devin CLI behavioral verification first.

Record:

```text
repository commit
Devin CLI identity
authentication availability
```

Do not expose authentication secrets.

## Verify the Current Upstream Contract

Before relying on installation, discovery, update, or invocation behavior,
verify the current upstream `obra/superpowers` documentation.

External commands and host-plugin behavior may change independently of ALH.

Do not retain stale invocation assumptions merely because a previous
verification succeeded.

## Install or Identify

If Superpowers is not already available in the selected Devin environment,
install it only through the currently verified upstream and host-supported
mechanism.

Do not automatically update an existing installation merely to execute this
procedure.

An update changes the external capability under test and must be deliberate.

## Record Capability Identity

Record any version, release, commit, source revision, package identity, or other
capability identity exposed by the actual installed mechanism.

If the installed mechanism does not expose a verifiable identity, record:

```text
unknown/unverified
```

Do not substitute the current upstream repository HEAD unless it is proven to be
the identity of the installed capability.

## Check 1 — Discovery

Start a fresh Devin CLI session.

Ask Devin to identify the Superpowers capabilities available to the session
without invoking them.

Pass condition:

- Superpowers is positively discoverable or otherwise identified;
- the observed source is consistent with `obra/superpowers`;
- discovery alone is not reported as invocation or success.

## Check 2 — Invocation

Choose one currently discovered Superpowers capability applicable to a
non-destructive planning or engineering-verification exercise.

Invoke it through the currently supported host mechanism.

Do not require a hard-coded capability name when the current upstream contract
exposes different names.

Record:

```text
capability:
requested_operation:
invocation_observed:
result_status:
material_output_reference:
```

Pass condition:

- actual invocation is observable;
- the invoked capability can be identified;
- invocation result is distinguishable from discovery or installation.

## Check 3 — Result Boundary

Verify that:

```text
Capability Result
!=
Accepted Educational Evidence

Capability Success
!=
Educational Done

Engineering Result
!=
Learner Competency

Generated Artifact
!=
Accepted Artifact
```

A capability may support engineering work or produce evidence.

Successful execution does not grant educational authority.

## Check 4 — Unavailability Behavior

If Superpowers is unavailable, disabled, rejected, or cannot be invoked:

- preserve the actual observed state;
- preserve the underlying ALH obligation;
- do not reinterpret unavailability as non-applicability;
- do not silently recreate the missing Superpowers workflow inside ALH.

External-capability failure is not by itself an architectural failure.

## Configuration Update Rule

Only after a real compatibility verification establishes a concrete tested
capability identity may:

```text
.ai-learning/config/alh.json
superpowers.tested_identity
```

change from `null` to the observed identity.

Do not populate `tested_identity` from:

- capability name alone;
- an assumed version;
- current upstream HEAD without installed-identity evidence;
- installation success alone.

## Verification Record

Record:

```text
repository_commit:
devin_cli_identity:
superpowers_source:
superpowers_tested_identity:
discovery_status:
invocation_status:
result_status:
authority_boundary_preserved:
material_discrepancies:
result: PASS | FAIL | UNVERIFIED
```

Do not report `PASS` for a check that was not actually performed.
