# Review Methodology

Version: 0.1 Draft

Parent Documents

- 00-Vision.md
- 02-Core-Principles.md
- 07-Competency-Model.md
- 08-Memory-Model.md
- 09-Decision-Engine.md
- 00-Learning-Model.md
- 01-Socratic-Method.md
- 02-Assessment.md
- 03-Competency-Evaluation.md
- 04-Learning-Debt.md
- 05-Automation-Level.md
- 06-Quiz-Strategy.md
- 07-Definition-of-Done.md
- 00-Development-Methodology.md
- 01-Development-Workflow.md
- 02-Change-Management.md
- 03-Documentation-Methodology.md
- 04-Testing-Methodology.md

Related Documents

- 06-Integration-Methodology.md
- 07-Compliance-and-Traceability.md
- 08-Development-Definition-of-Done.md
- 09-Development-Validation-Preparation.md
- ADR-001

---

## 1. Purpose

This document defines the methodology for reviewing ALH development changes.

Review provides an independent verification layer over development work and helps determine whether a change is:

- technically sound;
- consistent with approved project constraints;
- sufficiently tested;
- appropriately documented;
- within its intended scope.

Review is an engineering activity.

It MUST NOT redefine:

- ALH architecture;
- educational methodology;
- change-management authority;
- testing methodology;
- prompt architecture;
- final Stage 6 validation.

---

## 2. Review Objectives

Review SHOULD identify:

- defects;
- incorrect assumptions;
- unintended behavior;
- missing verification;
- incomplete documentation;
- architectural violations;
- methodology violations;
- unnecessary complexity;
- scope expansion.

Review SHOULD improve the reliability of changes before they become part of the project baseline.

Review is not intended to maximize the number of review comments.

The objective is meaningful risk reduction.

---

## 3. Review Principles

ALH reviews SHOULD follow these principles:

- evidence over assumption;
- correctness over preference;
- scope awareness;
- proportionality;
- architectural integrity;
- educational integrity;
- explicit reasoning;
- actionable feedback;
- respectful communication;
- independence where practical.

Reviewers SHOULD distinguish objective defects from stylistic preferences.

---

## 4. Review Scope

The review scope SHOULD correspond to the change.

Review MAY include:

- implementation;
- tests;
- documentation;
- configuration;
- interfaces;
- integration behavior;
- architectural compliance;
- educational-methodology compliance.

Not every review requires every category.

The review SHOULD focus on areas materially affected by the change.

---

## 5. Review Independence

Review SHOULD provide fresh evaluation rather than merely repeat the author's reasoning.

Where practical, the reviewer SHOULD evaluate the change independently before relying on the author's interpretation.

For higher-risk changes, review SHOULD involve an appropriately independent reviewer or review perspective.

The same person MAY perform both development and review for low-risk changes when project constraints require it, but the review should still be conducted as a distinct verification activity.

---

## 6. Risk-Based Review

Review depth SHOULD increase with change risk.

Relevant factors MAY include:

- architectural impact;
- security implications;
- data integrity;
- learner state;
- educational behavior;
- integration complexity;
- external dependencies;
- scope of affected functionality;
- reversibility;
- regression potential.

High-risk changes SHOULD receive stronger review.

Low-risk editorial or localized changes MAY receive lightweight review.

---

## 7. Review Preparation

Before reviewing a change, the reviewer SHOULD establish:

- what the change is intended to accomplish;
- which requirements apply;
- which files or components are affected;
- which architectural boundaries are relevant;
- which methodology documents apply;
- what testing evidence exists.

The reviewer SHOULD avoid evaluating the change against unstated requirements.

If the intended behavior is unclear, the ambiguity SHOULD be identified before conclusions are drawn.

---

## 8. Review Evidence

Review conclusions SHOULD be based on available evidence.

Evidence MAY include:

- implementation;
- tests;
- test results;
- documentation;
- requirements;
- approved architecture;
- accepted ADRs;
- methodology documents;
- repository state.

The reviewer MUST NOT invent missing evidence.

When evidence is insufficient, the review SHOULD state the uncertainty and request the appropriate evidence.

---

## 9. Review Categories

A review MAY consider the following categories:

```text
Correctness
Architecture
Educational Methodology
Testing
Documentation
Security
Integration
Maintainability
Scope
```

The categories are review dimensions, not mandatory checklist items for every change.

Review effort SHOULD remain proportional to the change.

---

## 10. Correctness Review

Correctness review SHOULD determine whether the implementation behaves as intended.

The reviewer SHOULD consider:

- expected behavior;
- error behavior;
- edge cases;
- state handling;
- data integrity;
- interaction effects.

Review SHOULD consider actual behavior rather than inferred behavior based only on names or comments.

---

## 11. Architecture Review

Where relevant, the reviewer SHOULD verify that the change remains consistent with approved architecture.

Review MAY consider:

- responsibility boundaries;
- repository boundaries;
- component responsibilities;
- architectural dependencies;
- Superpowers immutability;
- `.ai-learning/` ownership boundaries.

A reviewer MUST NOT approve an architectural change merely because the implementation appears technically reasonable.

If a change requires a new architectural decision, it SHOULD be identified as such.

---

## 12. Educational Methodology Review

Changes affecting educational behavior SHOULD be checked against the approved Stage 2 methodology.

Review MAY consider whether implementation preserves:

- competency-oriented learning;
- Learning Unit semantics;
- evidence-based assessment;
- Competency Evaluation responsibilities;
- Learning Debt semantics;
- Automation Level semantics;
- distinction between educational dimensions.

Development implementation MUST NOT silently redefine educational methodology.

Potential methodology changes SHOULD be identified separately from implementation defects.

---

## 13. Testing Review

The reviewer SHOULD assess whether testing provides sufficient evidence for the change.

Review MAY consider:

- test relevance;
- coverage of important behavior;
- negative cases;
- edge cases;
- regression evidence;
- test stability;
- meaningful assertions.

The reviewer SHOULD NOT treat numerical coverage alone as proof of adequate testing.

Testing methodology remains authoritative for testing practices.

---

## 14. Documentation Review

Where documentation is affected, the reviewer SHOULD verify:

- factual accuracy;
- correct document ownership;
- terminology;
- cross-references;
- architectural consistency;
- methodology consistency;
- absence of unnecessary duplication.

Documentation SHOULD reflect accepted behavior.

A documentation change MUST NOT silently introduce a new architectural decision.

---

## 15. Security Review

Changes with security relevance SHOULD receive appropriate security review.

Review MAY consider:

- trust boundaries;
- input handling;
- authorization;
- sensitive information;
- unsafe operations;
- dependency exposure;
- error handling.

Security review SHOULD be proportional to risk.

A general review MUST NOT be assumed to provide comprehensive security assurance.

---

## 16. Integration Review

Changes affecting system boundaries or external capabilities SHOULD be reviewed for integration correctness.

Review MAY consider:

- interface contracts;
- dependency assumptions;
- failure behavior;
- configuration;
- compatibility;
- boundary ownership.

Integration-specific review SHOULD remain consistent with:

```text
06-Integration-Methodology.md
```

---

## 17. Scope Review

The reviewer SHOULD determine whether the change remains within its intended scope.

Scope review SHOULD identify:

- unrelated modifications;
- unnecessary refactoring;
- accidental feature additions;
- hidden architectural changes;
- premature future work.

Unrelated improvements SHOULD normally be separated from the current change unless there is a clear reason to include them.

---

## 18. Complexity Review

The reviewer SHOULD evaluate whether implementation complexity is proportional to the problem.

Review MAY identify:

- unnecessary abstraction;
- premature generalization;
- duplicated logic;
- excessive coupling;
- avoidable configuration;
- unnecessary infrastructure.

The objective is not minimum code size.

The objective is appropriate complexity for the current requirements.

Architectural proportionality remains an established project principle.

---

## 19. Maintainability Review

Review SHOULD consider whether the change can reasonably be maintained by future contributors.

Relevant factors MAY include:

- clarity;
- naming;
- separation of responsibilities;
- testability;
- documentation;
- error handling;
- consistency with existing conventions.

Maintainability concerns SHOULD be actionable.

---

## 20. Review Findings

Review findings SHOULD be classified according to their significance.

A practical classification is:

```text
Blocking
Important
Non-blocking
Informational
```

### Blocking

A problem that MUST be resolved before the change can be accepted.

Examples MAY include:

- correctness defects;
- serious security issues;
- architectural violations;
- broken required behavior.

### Important

A problem that SHOULD normally be resolved before acceptance because it materially affects quality or maintainability.

### Non-blocking

A valid improvement that does not prevent acceptance.

### Informational

An observation or clarification that does not require a change.

The exact labels MAY vary by review tooling.

---

## 21. Actionable Review Feedback

Review feedback SHOULD:

- identify the problem;
- explain why it matters;
- provide sufficient context;
- distinguish facts from preferences;
- indicate the expected resolution when appropriate.

Feedback SHOULD focus on the change rather than the person.

A reviewer SHOULD avoid vague comments such as:

```text
"This seems wrong."
```

without explaining the relevant issue.

---

## 22. Architectural Findings

If review identifies a possible architectural conflict, the reviewer SHOULD first determine whether the issue is:

- an implementation defect;
- a documentation inconsistency;
- an Observation;
- a Candidate ADR.

A reviewer MUST NOT silently convert an architectural concern into an implementation convention.

If an architectural decision must change, the appropriate ADR process MUST be followed.

---

## 23. Educational Findings

If review identifies a conflict with Stage 2 methodology, the reviewer SHOULD distinguish between:

- implementation defect;
- methodology ambiguity;
- documentation inconsistency;
- potential methodology evolution.

A development review MUST NOT silently rewrite educational methodology.

Potential changes SHOULD be explicitly classified and handled through the appropriate process.

---

## 24. Review and Testing Results

Reviewers SHOULD consider test results as evidence.

A passing test suite SHOULD increase confidence in the tested behavior.

It MUST NOT prevent the reviewer from identifying:

- missing tests;
- incorrect assertions;
- untested behavior;
- architectural violations;
- documentation inconsistencies.

Likewise, review SHOULD NOT replace appropriate testing.

---

## 25. Review and Change Management

Review is part of the development change lifecycle.

A change SHOULD NOT be considered complete when review has identified unresolved blocking issues.

Review MUST NOT bypass required approval for architectural changes.

A reviewer MAY request:

- additional tests;
- documentation updates;
- scope reduction;
- implementation changes;
- clarification;
- ADR creation or confirmation.

---

## 26. Review Resolution

Review findings SHOULD be resolved explicitly.

Possible outcomes include:

```text
Fixed
Accepted as-is
Deferred
Rejected with rationale
Superseded by another change
```

The resolution SHOULD be appropriate to the significance of the finding.

A material unresolved disagreement SHOULD NOT be hidden.

---

## 27. Review Re-check

When material changes are made in response to review, the affected areas SHOULD be re-reviewed.

The re-check SHOULD focus on:

- whether the finding was resolved;
- whether the change introduced a regression;
- whether new issues were introduced.

A complete re-review MAY be unnecessary for a narrowly scoped correction.

---

## 28. AI-Assisted Review

AI MAY assist with:

- identifying potential defects;
- checking consistency;
- discovering missing tests;
- finding stale references;
- comparing implementation with documented requirements.

AI review output MUST be treated as candidate evidence, not authoritative judgment.

AI-generated findings MUST be verified.

AI MUST NOT be assumed to understand:

- implicit project constraints;
- undocumented repository state;
- architectural intent;
- educational intent.

When evidence is unavailable, the review SHOULD state uncertainty rather than guess.

---

## 29. Fresh-Eyes Review

For important changes, the project SHOULD use a fresh-eyes review perspective.

The reviewer SHOULD receive sufficient context to independently assess the change.

When multiple review perspectives are used, reviewers SHOULD avoid merely repeating the same assumptions.

Independent review is especially valuable for:

- architectural changes;
- security-sensitive changes;
- complex integrations;
- changes affecting educational semantics;
- high-risk state or persistence behavior.

---

## 30. Review Records

Review records SHOULD preserve material findings and their resolution when traceability is important.

The record MAY include:

- reviewed change;
- reviewer;
- findings;
- decisions;
- resolution;
- relevant evidence.

The amount of persistent review information SHOULD be proportional to the significance of the change.

Minor editorial changes do not require heavyweight review records.

---

## 31. Review Completion

A development review MAY be considered complete when:

- the intended scope has been evaluated;
- relevant evidence has been considered;
- blocking findings are resolved;
- required follow-up actions are identified;
- material architectural or methodology concerns are classified appropriately;
- necessary re-checks are complete.

Review completion does not imply final system validation.

---

## 32. Review Workflow

The general review workflow is:

```text
Change Ready for Review
        ↓
Understand Intent and Scope
        ↓
Identify Applicable Requirements
        ↓
Inspect Change and Evidence
        ↓
Evaluate Risk
        ↓
Review Relevant Dimensions
        ↓
Record Findings
        ↓
Resolve Findings
        ↓
Re-check Material Changes
        ↓
Complete Review
```

The workflow MAY iterate when new findings or evidence appear.

---

## 33. Review Summary

The Review Methodology establishes review as an independent quality and risk-control activity.

The central principle is:

> Review MUST evaluate a development change against applicable evidence, approved constraints, and intended behavior without silently redefining project decisions.

Review SHOULD provide:

- fresh evaluation;
- actionable findings;
- proportional scrutiny;
- architectural protection;
- educational-methodology protection;
- verification of testing and documentation evidence.

Review is a development activity and MUST remain distinct from final Stage 6 Validation.
