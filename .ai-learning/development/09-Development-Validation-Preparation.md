# Development Validation Preparation

Version: 0.1 Draft

Parent Documents

- 00-Development-Methodology.md
- 07-Compliance-and-Traceability.md
- 08-Development-Definition-of-Done.md

Related Documents

- 03-Documentation-Methodology.md
- 04-Testing-Methodology.md
- 05-Review-Methodology.md
- 06-Integration-Methodology.md
- 12-ADR.md
- ADR-001-Separation-of-Application-and-Learning-Infrastructure.md

---

## 1. Purpose

This document defines how development work is prepared for later system validation.

Development Validation Preparation establishes the conditions required for Stage 6 Validation without performing that validation itself.

It provides a preparation baseline that is established during Stage 3 and consumed later during Stage 6 Validation.

The planned project sequence remains:

```text
Stage 3 — Development Methodology
        ↓
Stage 4 — Prompt Architecture
        ↓
Stage 5 — Harness Implementation
        ↓
Stage 6 — Validation
```

Development Validation Preparation contributes to this sequence by defining how development work and evidence SHOULD be prepared for later validation.

It MUST NOT initiate Stage 6, bypass Stage 4 or Stage 5, or redefine validation criteria that belong to Stage 6.

---

## 2. Purpose of Preparation

Validation preparation SHOULD ensure that the project enters Stage 6 with:

- a coherent development baseline;
- identified applicable requirements;
- available verification evidence;
- known unresolved issues;
- traceable decisions;
- documented exceptions;
- a stable repository state.

Preparation reduces avoidable ambiguity during later validation.

---

## 3. Preparation Principles

Validation preparation SHOULD follow these principles:

- evidence before assertion;
- explicit scope;
- traceability;
- reproducibility;
- separation of development and validation;
- no premature acceptance claims;
- explicit uncertainty;
- proportionality.

Preparation MUST NOT be treated as proof that the system is already validated.

---

## 4. Development Baseline

Before final validation begins, the project SHOULD establish the development baseline being submitted for validation.

The baseline SHOULD identify:

- relevant repository state;
- applicable documentation;
- accepted ADRs;
- applicable methodology;
- implemented scope;
- known limitations.

The baseline MUST be identifiable enough that validation results can be associated with a specific project state.

---

## 5. Documentation Baseline

Relevant project documentation SHOULD be reviewed for consistency.

This MAY include:

- architecture documentation;
- educational methodology;
- development methodology;
- ADR records;
- implementation documentation;
- validation-related preparation records.

Documentation SHOULD reference authoritative sources rather than reproduce them.

Known documentation discrepancies SHOULD be recorded before validation when they may affect interpretation.

---

## 6. Requirement Inventory

Applicable requirements SHOULD be identifiable before validation.

The inventory MAY include:

```text
Architectural Requirements
Educational Requirements
Development Requirements
Functional Requirements
Non-Functional Requirements
Security Requirements
Integration Requirements
Documentation Requirements
```

The inventory SHOULD distinguish requirements that are:

- applicable;
- not applicable;
- deferred;
- unresolved.

Requirements MUST NOT be invented to fill gaps in the inventory.

---

## 7. Architectural Baseline

The Stage 1 architecture MUST remain the architectural baseline for validation preparation.

Preparation SHOULD confirm that relevant implementation work can be evaluated against:

- approved component responsibilities;
- repository boundaries;
- architectural principles;
- accepted ADRs;
- Superpowers integration constraints.

A discovered architectural conflict SHOULD be identified explicitly.

It MUST NOT be silently resolved by modifying the architecture during preparation.

---

## 8. Educational Methodology Baseline

Stage 2 remains the educational baseline.

Preparation SHOULD identify where implemented behavior depends on:

- Learning Units;
- competency states;
- evidence;
- assessment;
- Competency Evaluation;
- Learning Debt;
- Automation Level;
- Socratic interaction;
- Definition of Done.

Preparation MUST NOT redefine these concepts.

---

## 9. Development Methodology Baseline

Stage 3 establishes the development-process baseline.

Preparation SHOULD verify that applicable development work followed the relevant methodology concerning:

- workflow;
- change management;
- documentation;
- testing;
- review;
- integration;
- compliance;
- Development Definition of Done.

Not every document applies equally to every change.

Applicability SHOULD be determined by scope and risk.

---

## 10. Verification Evidence

Relevant development evidence SHOULD be collected before Stage 6.

Evidence MAY include:

- automated test results;
- integration test results;
- review records;
- documentation inspection;
- repository inspection;
- compliance evidence;
- manual verification;
- traceability records.

Evidence SHOULD be associated with the behavior or requirement it supports.

---

## 11. Evidence Quality

Evidence SHOULD be:

- relevant;
- understandable;
- reproducible where practical;
- sufficiently current;
- attributable to the validated baseline.

A passing test MUST NOT automatically be interpreted as evidence for requirements that the test does not actually cover.

Likewise, documentation MUST NOT be treated as proof of implementation behavior without appropriate verification.

---

## 12. Known Issues

Known issues SHOULD be identified before validation.

Each material issue SHOULD be classified appropriately.

Possible classifications include:

```text
Observation
Candidate ADR
Future Evolution
Defect
Documentation Gap
Validation Risk
```

The classification MUST reflect the actual nature of the issue.

A known defect MUST NOT be relabeled as Future Evolution merely to make the validation baseline appear complete.

---

## 13. Uncertainty

Uncertainty that could affect validation SHOULD be made explicit.

Examples include:

- unavailable repository artifacts;
- undocumented external behavior;
- incomplete evidence;
- ambiguous requirements;
- unresolved dependency assumptions.

The project MUST NOT claim verification where evidence is unavailable.

Where uncertainty materially affects validation, it SHOULD be resolved or explicitly carried into Stage 6.

---

## 14. Exceptions

Known deviations from established requirements or methodology SHOULD be documented.

An exception SHOULD identify:

- affected requirement or rule;
- reason;
- scope;
- known impact;
- responsible decision;
- expected follow-up, where applicable.

Architectural exceptions MUST follow the applicable ADR process.

---

## 15. Repository Preparation

The repository SHOULD be inspected before entering Stage 6.

Preparation MAY verify:

- expected directories;
- required project documents;
- methodology documents;
- ADR availability;
- relevant tests;
- configuration;
- accidental artifacts;
- stale references.

Repository inspection MUST distinguish between:

- confirmed repository state;
- inaccessible information;
- assumptions.

Missing information MUST NOT be fabricated.

---

## 16. Traceability Preparation

Material requirements SHOULD be traceable to appropriate evidence.

A useful preparation relationship is:

```text
Requirement
    ↓
Applicable Authority
    ↓
Implementation
    ↓
Verification Evidence
    ↓
Validation Target
```

The traceability chain SHOULD be sufficient to support validation without duplicating the authoritative documents.

---

## 17. Validation Scope Preparation

Before Stage 6, the project SHOULD identify what is intended to be validated.

The scope MAY include:

- architecture;
- educational behavior;
- development integrity;
- functional behavior;
- integration;
- security;
- documentation;
- operational behavior.

The exact validation scope belongs to Stage 6.

This document only prepares the information needed to define and execute it.

---

## 18. Validation Preparation Readiness

Development validation preparation MAY be considered ready when:

- the intended validation baseline can be identified;
- applicable requirements are known;
- relevant authoritative documents are available;
- required development evidence is collected;
- material issues are classified;
- known exceptions are documented;
- significant uncertainties are identified;
- repository state is sufficiently understood.

Preparation readiness means that the development methodology has established the information and evidence expected to support later Stage 6 Validation.

It MUST NOT be interpreted as:

- authorization to enter Stage 6 immediately;
- completion of Stage 4 or Stage 5;
- validation success;
- system acceptance.

Additional evidence produced during Stage 4 or Stage 5 MAY be required before Stage 6 begins.

---

## 19. Readiness Checklist

As part of preparing development evidence for later Stage 6 Validation, the following SHOULD be reviewed where applicable:

```text
[ ] Validation baseline is identifiable.
[ ] Applicable requirements are identified.
[ ] Authoritative architecture documents are available.
[ ] Accepted ADRs are identified and accessible.
[ ] Stage 2 methodology is available.
[ ] Stage 3 methodology is complete for the current development scope.
[ ] Relevant implementation evidence is available.
[ ] Applicable tests have been executed.
[ ] Relevant review evidence is available.
[ ] Integration evidence is available where applicable.
[ ] Material documentation is current.
[ ] Traceability is sufficient for material requirements.
[ ] Known issues are classified.
[ ] Known exceptions are documented.
[ ] Material uncertainties are identified.
[ ] Repository state has been inspected.
[ ] No unapproved architectural changes are hidden in implementation.
```

This checklist is a development preparation mechanism.

It MUST NOT be interpreted as authorization to enter Stage 6 or as the Stage 6 validation specification.

---

## 20. Preparation Review

A preparation review SHOULD determine whether the development baseline, evidence, and supporting information are sufficiently prepared for later Stage 6 Validation.

The review SHOULD focus on:

- completeness of preparation;
- evidence availability;
- unresolved risks;
- requirement clarity;
- repository integrity;
- architectural consistency.

The preparation review MUST NOT:

- initiate Stage 6;
- substitute for Stage 6 Validation;
- pre-approve validation results;
- imply completion of Stage 4 or Stage 5.

Findings that require additional work SHOULD be handled through the applicable development process.

---

## 21. Deferred Validation Handoff

The outputs of Development Validation Preparation SHOULD be preserved for later use during Stage 6 Validation.

The handoff SHOULD preserve:

- the identified development baseline;
- available evidence;
- known issues;
- documented exceptions;
- traceability information;
- material uncertainties.

This handoff is conceptual and deferred.

Completion of Development Validation Preparation MUST NOT cause a direct lifecycle transition from Stage 3 to Stage 6.

The project sequence remains:

```text
Stage 3 — Development Methodology
        ↓
Stage 4 — Prompt Architecture
        ↓
Stage 5 — Harness Implementation
        ↓
Stage 6 — Validation
```

Stage 4 and Stage 5 MAY produce additional requirements, implementation artifacts, evidence, issues, and validation inputs.

Those artifacts SHOULD be incorporated into the eventual Stage 6 validation baseline through the applicable development and validation processes.

Stage 6 MAY identify additional preparation requirements.

Such findings SHOULD be handled explicitly rather than silently changing previously established evidence or decisions.

---

## 22. Stage Boundary

Development Validation Preparation is the final methodology document in Stage 3.

Its responsibility boundary is:

```text
Stage 3
Development Methodology
        ↓
Development Validation Preparation
        ↓
Prepared Development Baseline
        │
        │ preserved for later use
        ▼
Stage 6
Validation
```

This relationship represents responsibility and evidence flow.

It MUST NOT be interpreted as the project lifecycle sequence.

The lifecycle sequence remains:

Stage 3
↓
Stage 4
↓
Stage 5
↓
Stage 6

Stage 3 MUST NOT perform:

final system validation;
acceptance testing;
final architectural certification;
final educational effectiveness evaluation.

Those activities belong to Stage 6.

## 23. Relationship to Stage 4

Completion of Stage 3 transitions the project to the next planned stage:

```text
Stage 4 — Prompt Architecture
```

Completion of Stage 3 does not authorize Harness implementation or Stage 6 Validation.

Prompt Architecture MUST be developed as a separate stage.

Stage 3 preparation MAY establish development constraints relevant to later prompt work, but MUST NOT define the prompt architecture itself.

---

## 24. Relationship to Stage 5

Harness implementation remains outside Stage 3.

Stage 3 defines how implementation is developed and prepared for validation.

It does not implement the Harness.

Implementation belongs to Stage 5.

---

## 25. Final Development Baseline

At the end of Stage 3, the project SHOULD have:

- a defined development methodology;
- an ordered development workflow;
- change-management rules;
- documentation methodology;
- testing methodology;
- review methodology;
- integration methodology;
- compliance and traceability methodology;
- Development Definition of Done;
- validation-preparation methodology.

These documents collectively define how ALH development is governed.

---

## 26. Stage 3 Completion Criteria

Stage 3 MAY be considered methodologically complete when:

```text
Development Methodology
        +
Development Workflow
        +
Change Management
        +
Documentation Methodology
        +
Testing Methodology
        +
Review Methodology
        +
Integration Methodology
        +
Compliance and Traceability
        +
Development Definition of Done
        +
Development Validation Preparation
```

form a coherent development methodology without:

- redefining Stage 1 architecture;
- redefining Stage 2 educational methodology;
- introducing Prompt Architecture;
- implementing the Harness;
- performing Stage 6 Validation.

---

## 27. Summary

Development Validation Preparation establishes the final transition point between development methodology and later system validation.

The central principle is:

> Development preparation establishes evidence, scope, traceability, and known limitations; it does not establish validation success.

The project should enter Stage 6 with a known baseline, sufficient evidence, explicit uncertainty, and no hidden architectural or methodological changes.
