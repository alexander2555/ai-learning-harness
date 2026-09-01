# ALH Implementation Conformance

## Purpose

This document provides durable traceability between Accepted ALH contracts, their selected physical implementation mechanisms, and the executable verification mechanisms that protect those contracts.

It is a conformance reference, not an authority source.

Normative authority remains with the Accepted ALH architecture, governance documents, and Accepted ADRs.

This document does not establish learner truth, educational sufficiency, owner acceptance, or Stage 6 validation.

---

## Conformance Matrix

| Accepted Contract                                                                     | Selected Physical Mechanism                                                                                        | Verification Mechanism                            |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| Authoritative learner state remains ALH-owned and separate from application artifacts | Initial Learner State and Current Learner State use dedicated ALH-owned artifacts and schemas                      | Schema, integrity, replay, and conformance tests  |
| Initialization establishes no learner truth beyond explicitly supplied identity       | Project initializer creates sparse v0 Initial and Current State records without competency or educational defaults | Initializer and conformance tests                 |
| Candidate Educational Evidence is not authoritative learner state                     | Candidate Educational Evidence has a distinct record/schema surface and does not mutate learner state              | Schema, integrity, replay, and conformance tests  |
| Engineering Completion is distinct from Educational Evidence and learner competency   | Engineering Completion has an independent record/schema surface                                                    | Schema and conformance tests                      |
| Engineering Done and Educational Done are independently representable                 | Separate engineering-completion and educational-evidence mechanisms                                                | Conformance tests                                 |
| Engineering execution cannot directly establish learner competency                    | Learner-state mutation remains constrained to Accepted educational decision/state mechanisms                       | Integrity, replay, and conformance tests          |
| Learner-state transitions are deterministic and replayable                            | Shared semantic transition primitive applies ordered Educational Decisions from Initial Learner State              | Replay tests                                      |
| Durable identifiers and references preserve cross-record integrity                    | Generic durable-ID/reference index and directed-cycle validation                                                   | Integrity tests                                   |
| Canonical instruction identity is byte-stable across supported CI environments        | Canonical instruction artifacts use deterministic byte representation                                              | Manifest/hash verification and cross-platform CI  |
| Host/tool capability does not acquire educational authority                           | Host integration and external capabilities remain outside authoritative learner-state mutation paths               | Integration procedures and conformance boundaries |
Educational responsibility governs participation and assistance before learning-relevant engineering execution | Educational responsibility is materialized before agent action selection | Behavioral verification of prospective allocation |
| Validator success does not establish educational correctness                          | Validator scope is limited to deterministic objective technical integrity                                          | Validator tests and conformance tests             |

---

## Learner-State Conformance

Authoritative learner state is represented only through the ALH-owned learner-state mechanisms defined by the Accepted architecture.

Application artifacts, generated artifacts, engineering outputs, host execution results, external capability results, and Candidate Educational Evidence are not authoritative learner state.

The implementation preserves the following boundaries:

```text
Application Artifact
!=
Learner State

Engineering Result
!=
Learner Competency

Candidate Educational Evidence
!=
Accepted Educational Evidence

Capability Result
!=
Accepted Educational Evidence

Validator Success
!=
Educational Correctness
```

Initialization does not infer competency, mastery, educational history, or other learner truth.

The initial learner-state representation remains sparse unless additional learner truth is established through an Accepted mechanism.

Executable conformance tests protect these representation and mutation boundaries without extending the validator into pedagogical judgment.

---

## ADR-001 Conformance

The implementation preserves the authoritative learner-state boundary established by ADR-001.

Authoritative learner state remains physically distinct from ordinary application artifacts and engineering outputs.

The implementation provides dedicated ALH-owned mechanisms for:

```text
Initial Learner State
Current Learner State
Educational Decision
Educational Evidence
Candidate Educational Evidence
Learner Memory
```

Read access to learner-state information does not imply mutation authority.

Engineering activity, tool execution, generated artifacts, or repository changes cannot independently establish learner competency or mutate authoritative learner truth.

---

## Completion Conformance

Engineering completion and educational completion remain independent concepts and independently representable states.

The implementation preserves:

```text
Engineering Done
!=
Educational Done
```

Engineering Completion records engineering outcomes without establishing learner competency.

Educational Evidence represents educational evidence without becoming authoritative learner state merely by existing.

No common authoritative `done` state collapses engineering completion and educational completion into a single lifecycle condition.

Executable conformance tests protect this separation.

---

## External Capability Conformance

External capabilities and host-native workflows remain capability mechanisms rather than educational authorities.

The implementation preserves distinctions including:

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

and:

```text
Capability Success
!=
Educational Done

Generated Artifact
!=
Accepted Artifact

Engineering Result
!=
Learner Competency
```

Host execution and external capability results cannot directly mutate authoritative learner state.

Where an external capability is unavailable or fails, the implementation preserves the observed failure without inferring that the underlying ALH obligation is non-applicable and without silently recreating externally owned workflows.

Integration-specific compatibility procedures may verify discovery, invocation, result handling, failure behavior, and authority separation without transferring educational authority to the host or capability.

---

## Failure-Path Coverage

Implementation verification includes failure paths that materially protect Accepted ALH contracts.

Covered classes include:

- missing authoritative learner-state artifacts;
- malformed or schema-invalid ALH records;
- invalid durable identifiers or references;
- invalid Decision sequencing;
- inconsistent state versions or previous values;
- directed reference cycles where prohibited;
- replay divergence between Decision History and Current Learner State;
- partial or unknown initialization state;
- attempts to initialize an already initialized project;
- canonical instruction byte-identity mismatch;
- unavailable or unsuccessful external capability execution where applicable.

Failure-path verification remains limited to deterministic objective integrity.

A technical failure does not authorize the validator or integration layer to infer learner competency, educational sufficiency, or pedagogical correctness.

---

## Scope and Verification Boundaries

The conformance mechanisms described here verify physical representation and deterministic objective integrity required by the Accepted ALH contracts.

They do not establish:

```text
mastery
educational sufficiency
pedagogical correctness
learner competency
owner acceptance
Stage 6 validation
```

The validator must not expand its competence merely to make additional properties mechanically decidable.

In particular:

```text
Validator Success
!=
Educational Correctness

Engineering Success
!=
Learner Truth
```

Physical enforcement remains proportional to the Accepted contract.

An additional abstraction, validator capability, runtime component, registry, adapter, or infrastructure mechanism requires a concrete Accepted objective-integrity or implementation responsibility that cannot be sufficiently preserved by existing mechanisms.

Conformance documentation and tests describe and protect Accepted boundaries; they do not create new educational semantics or architectural authority.
