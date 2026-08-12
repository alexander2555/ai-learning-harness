# Document Governance

Status: Accepted
Version: 1.0

---

# 1. Purpose

This document defines repository-wide governance for the lifecycle, status, versioning, acceptance, supersession, and authority representation of AI Learning Harness (ALH) project documents.

It answers:

> How should ALH repository documents represent their lifecycle and version without allowing document metadata itself to create semantic or normative authority?

The governing distinction is:

```text
Document Status
        ≠
Document Version
        ≠
Document Authority
```

Document metadata represents governance state.

It does not independently create governance state.

---

# 2. Scope

This document applies to project documentation maintained under `.ai-learning/`, including:

- Architecture Specification documents;
- Educational Methodology documents;
- Development Methodology documents;
- Prompt Architecture documents;
- Harness Implementation documents;
- future normative ALH document sets;
- Architecture Decision Records where explicitly specified by this document.

This document governs document lifecycle metadata.

It MUST NOT redefine the architectural, educational, engineering, prompt, implementation, or ADR authority assigned by accepted project documents.

---

# 3. Core Governance Principle

The repository MUST preserve:

```text
Metadata Reflects Governance State
        ≠
Metadata Creates Governance State
```

Writing:

```text
Status: Accepted
```

into a file MUST NOT by itself make the file accepted or authoritative.

Likewise, removing or changing a status field MUST NOT silently invalidate a governance decision already established through the accepted project process.

Normative authority arises from accepted project governance together with the responsibility boundary of the applicable document.

---

# 4. Document Status

Ordinary ALH project documents MUST use one of the following lifecycle statuses:

```text
Draft
Accepted
Superseded
Historical
```

No additional status SHOULD be introduced unless a concrete governance need requires it.

---

# 5. Draft

`Draft` means the document is under development, review, or correction and has not yet entered the accepted normative baseline.

A Draft:

- MAY change during review;
- MAY be stored in its future canonical repository location;
- MUST NOT be treated as accepted normative authority merely because it exists in the repository;
- SHOULD use a `0.x` version.

Example:

```text
Status: Draft
Version: 0.2
```

---

# 6. Accepted

`Accepted` means the project owner has explicitly accepted the document and the accepted artifact has been integrated into the authoritative repository baseline.

An Accepted document:

- is normative within its accepted responsibility boundary;
- MUST be treated as part of the current project baseline unless superseded;
- MUST NOT gain authority outside its accepted responsibility boundary;
- SHOULD begin at version `1.0`.

Example:

```text
Status: Accepted
Version: 1.0
```

---

# 7. Superseded

`Superseded` means the document was previously accepted but has been replaced by a later accepted normative artifact or decision.

A Superseded document:

- MUST NOT be used as current normative authority;
- MAY remain in the repository for traceability;
- SHOULD identify its replacement where the replacement is known;
- MUST retain its historical content rather than being rewritten to match the replacement.

Example:

```text
Status: Superseded
Version: 1.3
Superseded By: 00-Replacement-Document.md
```

`Superseded By` is OPTIONAL and SHOULD be used only where the replacement is unambiguous.

---

# 8. Historical

`Historical` means the document is retained for context or project history but is not part of the current normative baseline.

Historical documents:

- MUST NOT be used as current normative authority;
- MUST NOT override Accepted documents;
- MAY describe previous designs, experiments, drafts, or abandoned directions.

Historical status does not imply that the document was previously accepted.

Therefore:

```text
Superseded
        ≠
Historical
```

---

# 9. Version

Version represents the revision of a document's content.

Version does not represent authority.

The default ordinary-document versioning model is:

```text
0.x
=
Draft development before first acceptance

1.0
=
First Accepted revision

1.x
=
Accepted compatible refinement

2.0+
=
Major accepted semantic revision
```

A Draft revision of an already Accepted document SHOULD use the intended next version with a draft prerelease suffix.

Examples:

Status: Draft
Version: 1.1-draft.1
Status: Draft
Version: 2.0-draft.1

Version changes MUST NOT be used to bypass ADR governance or accepted architectural boundaries.

---

# 10. Draft Versioning

A document that has never been Accepted SHOULD use a version below 1.0 while in Draft status.

Examples:

```text
Status: Draft
Version: 0.1

Status: Draft
Version: 0.3
```

A Draft revision of an already Accepted document SHOULD retain the intended next Accepted version and add a draft prerelease suffix.

Examples:

```text
Accepted 1.0
        ↓
Draft 1.1-draft.1
        ↓
Accepted 1.1
Accepted 1.4
        ↓
Draft 2.0-draft.1
        ↓
Accepted 2.0
```

Draft iteration MAY increment the draft suffix:

1.1-draft.1
1.1-draft.2
1.1-draft.3

Draft version changes SHOULD represent meaningful review iterations.

They SHOULD NOT be incremented for every trivial edit unless such tracking provides concrete project value.

---

# 11. First Acceptance

When a Draft receives its first owner acceptance, its ordinary document metadata SHOULD become:

```text
Status: Accepted
Version: 1.0
```

The transition:

```text
Draft 0.x
        ↓
Accepted 1.0
```

represents first normative acceptance.

The metadata update records the acceptance.

It does not create it.

---

# 12. Accepted Refinement

An accepted document MAY later receive compatible normative refinements that remain within its accepted responsibility and architectural boundaries.

Such a revision SHOULD normally increment the minor version:

```text
1.0
        ↓
1.1
```

A compatible refinement MAY include:

- clarification;
- correction;
- added implementation detail within an accepted boundary;
- improved wording;
- additional examples;
- removal of ambiguity.

The project MUST still review and accept the changed document before the new revision becomes the current accepted baseline.

---

# 13. Major Revision

A major revision MAY increment the major version when the document undergoes substantial semantic redesign.

For example:

```text
1.4
        ↓
2.0
```

A major version change MUST NOT itself authorize an architectural change.

Where the proposed revision alters an accepted:

- architectural responsibility;
- ownership rule;
- authority boundary;
- trust boundary;
- application / learning-infrastructure boundary;
- comparable architectural decision;

the applicable ADR governance MUST be satisfied first.

---

# 14. Authority

Document authority is bounded by accepted project responsibility.

Therefore:

```text
Accepted
        ≠
Authoritative for Every Domain
```

For example:

- an accepted Architecture document is authoritative within its architectural responsibility;
- an accepted Educational Methodology document is authoritative within its educational methodology responsibility;
- an accepted Development Methodology document is authoritative within its engineering methodology responsibility;
- an accepted Prompt Architecture document is authoritative within its instruction-responsibility boundary;
- an accepted Harness Implementation document is authoritative within its Stage 5 implementation responsibility.

Later physical execution order, retrieval order, filename order, or version number MUST NOT broaden a document's authority.

---

# 15. Governance Authority

The ordinary ALH document acceptance flow is:

```text
Draft
        ↓
Review
        ↓
Explicit Project-Owner Acceptance
        ↓
Integration into Authoritative Repository Baseline
        ↓
Accepted
```

Repository merge is evidence of integration.

Merge alone MUST NOT be assumed to establish acceptance where explicit owner acceptance has not occurred.

Likewise, explicit owner acceptance of a draft that has not yet been integrated into the authoritative repository does not make an older repository representation current.

Current normative baseline requires both:

```text
Explicit Acceptance
        +
Authoritative Repository Integration
```

---

## 16. Acceptance Integration Transition

After explicit project-owner acceptance, the artifact intended for repository integration MAY be prepared with Accepted metadata before merge:

```text
Status: Accepted
Version: <accepted version>
```

This metadata identifies the artifact that has been approved for integration.

It does not make the artifact part of the current normative repository baseline before integration occurs.

The transition is:

```text
Draft
        ↓
Owner Review
        ↓
Explicit Project-Owner Acceptance
        ↓
Accepted Metadata Prepared
        ↓
Integration into Authoritative Repository Baseline
        ↓
Current Normative Accepted Artifact
```

Therefore:

```text
Owner Acceptance
        ≠
Repository Integration
```

and:

```text
Accepted Metadata Prepared
        ≠
Current Normative Authority
```

Current normative authority becomes effective only when the owner-accepted artifact is integrated into the authoritative repository baseline.

This rule allows normal pull-request and merge workflows without making document metadata itself the source of authority.

---

# 17. Canonical Ordinary-Document Header

Ordinary ALH normative documents SHOULD use the following minimal metadata header immediately after the document title:

```text
Status: <Draft | Accepted | Superseded | Historical>
Version: <version>
```

Example:

```text
# Harness Implementation Architecture

Status: Accepted
Version: 1.0

Parent Documents

...
```

Additional metadata SHOULD NOT be added unless it serves a concrete governance requirement.

In particular, ordinary documents SHOULD NOT duplicate repository history through fields such as:

- acceptance commit;
- merge commit;
- acceptance date;
- author;
- reviewer;

unless a future governance requirement independently justifies them.

Repository history remains the appropriate source for such information.

---

# 18. Parent and Related Documents

`Parent Documents` and `Related Documents` describe normative and adjacent document relationships.

They MUST NOT determine lifecycle status.

A Draft MAY reference an Accepted parent.

An Accepted document MUST NOT make a Draft authoritative merely by referencing it.

Document relationship metadata and document lifecycle metadata remain separate concerns.

---

# 19. Repository Location

A Draft MAY live at its intended canonical path.

The repository SHOULD NOT require separate `draft/` and `accepted/` directory trees merely to represent lifecycle state.

The preferred model is:

```text
Stable Canonical Path
        +
Explicit Status Metadata
        +
Repository Governance
```

This avoids unnecessary path churn and broken normative references during acceptance.

---

# 20. Architecture Decision Records

Architecture Decision Records use a distinct lifecycle model because an ADR records an architectural decision rather than an ordinary evolving normative specification.

ADR status SHOULD use:

```text
Proposed
Accepted
Superseded
Rejected
```

An ADR SHOULD NOT require ordinary document versioning.

The canonical ADR header SHOULD include:

```text
Status: <Proposed | Accepted | Superseded | Rejected>
```

An Accepted ADR SHOULD normally remain immutable in its decision substance.

Material architectural change SHOULD be recorded through a new ADR rather than silently revising the accepted decision.

---

# 21. ADR Supersession

When an ADR is replaced, the previous ADR SHOULD use:

```text
Status: Superseded
Superseded By: ADR-00X-....md
```

and the replacing ADR SHOULD identify the previous decision where useful.

Superseding an ADR MUST NOT erase the historical fact that the earlier ADR was once accepted.

---

# 22. Metadata and Runtime Interpretation

Future Harness implementation MAY inspect document lifecycle metadata.

Such inspection MUST preserve:

```text
Metadata
        ≠
Independent Authority
```

The Harness MUST NOT treat arbitrary repository text containing:

```text
Status: Accepted
```

as sufficient proof of normative authority.

Runtime authority resolution MUST also consider:

- canonical repository location;
- accepted project governance;
- document responsibility;
- current repository baseline;
- supersession state where applicable.

The exact runtime implementation is governed by Stage 5.

---

# 23. Missing or Invalid Metadata

Once repository-wide normalization is complete, an ordinary normative document missing required lifecycle metadata SHOULD be treated as governance-invalid or status-unknown rather than silently assumed Accepted.

The Harness and project tooling MUST preserve:

```text
Unknown Status
        ≠
Draft
        ≠
Accepted
```

Where required, the document SHOULD be corrected through project governance.

---

# 24. Metadata Validation

Repository tooling MAY validate:

- recognized status values;
- version syntax;
- required metadata presence;
- ADR-specific status values;
- invalid combinations.

Examples of invalid ordinary-document combinations include:

```text
Status: Draft
Version: 1.1
```

valid draft revision format:

```text
Status: Draft
Version: 1.1-draft.1
```

unless explicitly justified by a migration or exceptional governance case.

Examples of invalid semantics include an ordinary document claiming:

```text
Status: Accepted
```

without corresponding accepted project governance.

Automated validation MAY detect structural metadata correctness.

It MUST NOT independently decide owner acceptance.

---

# 25. Normalization of Existing Accepted Documents

At introduction of this governance model, already accepted Stage 1–5 normative documents SHOULD be normalized from legacy metadata such as:

```text
Version: 0.1 Draft
```

to:

```text
Status: Accepted
Version: 1.0
```

provided their Accepted status has already been established through project governance.

This normalization is metadata-only.

It MUST NOT alter document semantics.

---

# 26. ADR-001 Normalization

ADR-001 — Separation of Application and Learning Infrastructure — is already an accepted architectural decision.

Its metadata SHOULD be normalized to:

```text
Status: Accepted
```

No ordinary document `Version` field is required.

This metadata normalization MUST NOT modify the ADR decision.

---

# 27. Normalization Safety Rule

Repository-wide normalization MUST NOT perform blind lifecycle promotion.

Before changing a document to:

```text
Status: Accepted
```

the normalization process MUST establish that the document belongs to an already accepted project baseline.

Historical, superseded, experimental, or unaccepted artifacts MUST retain or receive the status appropriate to their actual governance state.

---

# 28. Semantic-Change Prohibition

The initial Document Governance Normalization pass MUST be metadata-only except for:

- creation of this governance document;
- correction of objectively invalid governance metadata;
- addition of required lifecycle metadata.

It MUST NOT use normalization as an opportunity to:

- rewrite accepted semantics;
- restructure Stage documents;
- change Parent Documents;
- change Related Documents;
- redesign authority;
- alter accepted ADR decisions.

Any unrelated correction SHOULD be handled separately.

---

# 29. Conformance

After normalization, ordinary current normative ALH documents SHOULD expose:

```text
Status: Accepted
Version: 1.0
```

where they represent their first accepted revision.

Current accepted ADRs SHOULD expose:

```text
Status: Accepted
```

Draft documents SHOULD expose:

```text
Status: Draft
Version: 0.x
```

Superseded and historical documents MUST remain distinguishable from the current normative baseline.

---

# 30. Observations

## O-1 — Lifecycle and Authority Must Remain Separate

Status metadata makes repository state inspectable but MUST NOT become an authority escalation mechanism.

## O-2 — Stable Paths Reduce Governance Churn

Keeping Draft and Accepted revisions at the same canonical path prevents lifecycle transitions from breaking document references.

## O-3 — ADR Versioning Is Unnecessary

ADR lifecycle status and supersession better represent architectural-decision evolution than ordinary semantic version numbers.

## O-4 — Governance Metadata Enables Safer Stage 5 Context Handling

Explicit lifecycle metadata reduces ambiguity when the Harness later distinguishes accepted normative repository context from drafts, historical artifacts, and derived content.

---

# 31. Candidate ADRs

No Candidate ADR is introduced by this document.

This document formalizes repository document governance and metadata representation.

It does not change accepted ALH architectural responsibility or authority boundaries.

---

# 32. Completion Criteria

Document Governance Normalization is complete when:

- this governance document is owner-reviewed and accepted;
- current accepted Stage 1–5 normative documents expose `Status: Accepted` and `Version: 1.0`;
- accepted ADRs expose their ADR lifecycle status;
- no metadata update introduces semantic document changes;
- repository diff is reviewed as governance / metadata-only;
- current normative document authority remains consistent with pre-normalization accepted governance.

After acceptance, future project documents MUST follow this governance model.
