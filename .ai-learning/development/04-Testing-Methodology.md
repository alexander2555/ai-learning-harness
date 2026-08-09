# Testing Methodology

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

Related Documents

- 05-Review-Methodology.md
- 06-Integration-Methodology.md
- 07-Compliance-and-Traceability.md
- 08-Development-Definition-of-Done.md
- 09-Development-Validation-Preparation.md
- ADR-001

---

## 1. Purpose

This document defines the methodology for testing ALH during development.

Testing provides evidence that implemented behavior satisfies applicable requirements and remains consistent with approved project constraints.

The methodology establishes:

- testing principles;
- evidence expectations;
- test scope;
- test selection;
- defect handling;
- regression discipline;
- testing proportionality.

This document MUST NOT define:

- a specific testing framework;
- implementation-specific test architecture;
- the final Stage 6 Validation methodology;
- educational assessment methodology.

Educational assessment is defined by the Stage 2 methodology.

Software testing verifies system behavior.

These responsibilities MUST remain distinct.

---

## 2. Testing Objectives

Testing SHOULD provide evidence about:

- correctness;
- expected behavior;
- regression resistance;
- boundary conditions;
- error handling;
- relevant integration behavior;
- architectural constraints where behavior can provide evidence of them.

Testing SHOULD reduce uncertainty rather than merely increase test count.

A test SHOULD have a clear purpose.

Tests MUST NOT be treated as proof of correctness beyond the behavior and conditions they actually cover.

---

## 3. Testing Principles

ALH testing SHOULD follow these principles:

- evidence over assumption;
- proportionality;
- repeatability;
- isolation where practical;
- meaningful coverage;
- deterministic behavior where possible;
- regression awareness;
- failure visibility;
- maintainability.

Testing SHOULD be performed as close as practical to the development change that introduced or affected the behavior.

---

## 4. Testing as Evidence

Testing is one source of development evidence.

The relationship is:

```text id="z5l0gq"
Requirement
     ↓
Expected Behavior
     ↓
Test
     ↓
Observed Result
     ↓
Evidence
```

A passing test provides evidence for the behavior it evaluates.

It MUST NOT automatically establish:

- architectural correctness in all dimensions;
- educational correctness in all dimensions;
- security of untested paths;
- final system validity.

Testing evidence MUST be interpreted according to its scope.

---

## 5. Test Scope

Testing SHOULD be selected according to the change being made.

Relevant test scopes MAY include:

- unit behavior;
- component behavior;
- integration behavior;
- interface behavior;
- persistence behavior;
- error handling;
- configuration behavior;
- regression behavior.

The project SHOULD use the smallest sufficient test scope that provides credible evidence.

Broader testing SHOULD be added when the change has broader effects.

---

## 6. Test Levels

The project MAY use multiple levels of testing.

A conceptual model is:

```text id="6m1t4u"
Unit
  ↓
Component
  ↓
Integration
  ↓
System-Level
```

These levels describe testing scope rather than mandatory technology.

The exact test architecture MAY vary with implementation.

No particular framework or test runner is mandated by this methodology.

---

## 7. Unit Testing

Unit tests SHOULD verify isolated behavior where isolation provides meaningful evidence.

Unit tests are particularly useful for:

- deterministic logic;
- transformations;
- validation;
- calculations;
- local decision rules;
- error conditions.

Unit tests SHOULD remain focused enough that failures provide useful diagnostic information.

Unit tests SHOULD NOT be created merely to increase numerical coverage.

---

## 8. Component Testing

Component tests SHOULD verify behavior across a meaningful implementation boundary.

They MAY verify interactions among internal units that are intended to operate together.

Component testing is useful when isolated unit tests cannot provide sufficient confidence about the behavior of a logical component.

Component tests SHOULD preserve useful diagnostic clarity.

---

## 9. Integration Testing

Integration tests SHOULD verify interactions between components or external capabilities where those interactions are material to correctness.

Integration testing MAY cover:

- persistence;
- external services;
- interfaces;
- infrastructure boundaries;
- Superpowers integration;
- configuration-dependent behavior.

Integration tests SHOULD be used when isolated tests cannot provide sufficient evidence about the integration.

Integration methodology is further defined by:

```text id="f5h3p1"
06-Integration-Methodology.md
```

---

## 10. System-Level Testing

System-level testing MAY verify behavior across multiple ALH components.

It SHOULD be used when correctness depends on interactions that cannot be adequately established at lower test levels.

System-level testing SHOULD remain focused on development evidence.

It MUST NOT be confused with the complete Stage 6 Validation process.

---

## 11. Test Selection

The required tests SHOULD be determined by:

- affected behavior;
- change scope;
- risk;
- dependencies;
- architectural relevance;
- security relevance;
- regression potential.

A change that modifies a narrow deterministic function MAY require focused tests.

A change affecting a central interface MAY require broader integration or system-level testing.

Test selection MUST be based on risk and behavior rather than arbitrary test-count targets.

---

## 12. Risk-Based Testing

Testing effort SHOULD increase with the consequences of failure.

Relevant risk factors MAY include:

- architectural importance;
- data integrity;
- security;
- learner state;
- educational behavior;
- external integrations;
- persistence;
- irreversibility;
- frequency of use.

High-risk changes SHOULD receive stronger and broader verification.

Low-risk changes MAY use a lighter testing strategy when the resulting evidence remains sufficient.

---

## 13. Requirement-to-Test Relationship

Where practical, important requirements SHOULD have identifiable verification evidence.

The relationship MAY be:

```text id="w4y9xq"
Requirement
    ↓
Expected Behavior
    ↓
Test / Verification
    ↓
Result
```

Not every requirement requires a dedicated test.

Some requirements MAY be better verified through:

- review;
- documentation inspection;
- architectural analysis;
- integration checks;
- manual verification.

The chosen evidence SHOULD match the nature of the requirement.

---

## 14. Positive and Negative Testing

Tests SHOULD consider both expected and invalid behavior where applicable.

Positive tests verify valid expected behavior.

Negative tests verify appropriate behavior when:

- inputs are invalid;
- dependencies fail;
- constraints are violated;
- expected resources are unavailable;
- unexpected conditions occur.

Negative testing SHOULD be proportional to the consequences of failure.

---

## 15. Boundary and Edge Cases

Tests SHOULD consider meaningful boundaries and edge cases.

Examples MAY include:

- empty input;
- minimum and maximum values;
- missing data;
- duplicate data;
- invalid state transitions;
- dependency failure;
- unexpected ordering;
- malformed input.

The purpose is not exhaustive enumeration of every theoretical case.

The purpose is to test conditions where incorrect behavior is reasonably likely or consequential.

---

## 16. Determinism and Repeatability

Development tests SHOULD be repeatable.

Where deterministic behavior is possible, tests SHOULD avoid unnecessary dependence on:

- time;
- randomness;
- external availability;
- local environment;
- mutable external state.

When nondeterministic behavior is intrinsic to the system, the test strategy SHOULD make the resulting uncertainty explicit.

A test that intermittently passes and fails without a known reason MUST be treated as a development problem rather than silently ignored.

---

## 17. Test Isolation

Tests SHOULD avoid unnecessary coupling to unrelated tests.

Where practical:

- tests SHOULD control their inputs;
- shared state SHOULD be minimized;
- test order SHOULD NOT determine correctness;
- external state SHOULD be isolated or controlled.

Tests MAY share stable infrastructure when doing so improves maintainability without compromising reliability.

---

## 18. Test Data

Test data SHOULD be:

- relevant;
- understandable;
- reproducible;
- appropriately scoped;
- safe to maintain.

Test data MUST NOT contain unnecessary real sensitive information.

Synthetic or representative data SHOULD be preferred when real data provides no additional verification value.

---

## 19. Security Testing

Security-sensitive behavior SHOULD receive appropriate testing.

Testing MAY include:

- input validation;
- authorization behavior;
- access boundaries;
- unsafe execution paths;
- malformed input handling;
- sensitive-data handling;
- dependency interaction.

Security testing SHOULD be proportional to the risk.

A general functional test suite MUST NOT be assumed to provide sufficient security evidence.

---

## 20. Educational Behavior Testing

ALH includes educational behavior, but software testing and educational assessment remain distinct.

Software tests MAY verify implementation of educational rules, such as:

- state transitions;
- data transformations;
- persistence of educational state;
- decision inputs and outputs;
- enforcement of defined constraints.

Software tests MUST NOT independently determine learner competency.

They MUST NOT replace:

- educational assessment;
- Competency Evaluation;
- evidence interpretation.

The Stage 2 methodology remains authoritative for those responsibilities.

---

## 21. Testing Decision Engine Behavior

When implementation of the Decision Engine is tested, tests SHOULD verify defined behavior and constraints rather than assume a particular internal algorithm unless that algorithm is itself an approved requirement.

Tests MAY verify:

- valid inputs;
- required outputs;
- boundary conditions;
- decision constraints;
- explainability requirements where technically testable.

Tests SHOULD NOT silently turn an implementation detail into an architectural requirement.

---

## 22. Testing State Machine Behavior

Where the conceptual State Machine is implemented, tests MAY verify:

- valid transitions;
- prohibited transitions;
- required state persistence;
- appropriate handling of incomplete paths.

The conceptual model MUST remain distinct from its implementation.

Tests SHOULD verify approved behavioral requirements rather than impose an unnecessary implementation structure.

---

## 23. Regression Testing

A change SHOULD trigger regression testing proportional to its potential impact.

Regression testing SHOULD consider:

- directly affected behavior;
- dependent behavior;
- shared interfaces;
- previously corrected defects;
- high-risk functionality.

A defect fix SHOULD normally include regression evidence that the defect no longer occurs.

---

## 24. Test Failure Handling

A failed test MUST be treated as information requiring investigation.

The developer SHOULD determine whether the failure represents:

- an implementation defect;
- an incorrect test;
- an outdated expectation;
- an environmental problem;
- an unresolved requirement;
- an architectural conflict.

A failing test MUST NOT be disabled or weakened merely to make the development change pass.

If the expected behavior has legitimately changed, the test MAY be updated through the applicable change process.

---

## 25. Flaky Tests

A flaky test is a test whose result is unstable without a known intentional reason.

Flaky tests SHOULD be investigated.

They SHOULD NOT become an accepted source of ignored noise.

Possible responses MAY include:

- fixing test isolation;
- controlling nondeterministic inputs;
- correcting timing assumptions;
- stabilizing dependencies;
- replacing an unsuitable testing approach.

A flaky test MAY be temporarily quarantined when necessary, but the condition SHOULD remain visible and tracked.

---

## 26. Test Maintenance

Tests are project artifacts and SHOULD be maintained as implementation evolves.

Tests SHOULD be updated when:

- behavior intentionally changes;
- interfaces change;
- obsolete assumptions are discovered;
- test infrastructure changes.

Tests SHOULD NOT be preserved merely because they exist.

An obsolete test can be harmful when it encodes behavior that is no longer intended.

Removing or changing a test MUST remain consistent with the applicable change scope.

---

## 27. Test Quality

A high-quality test SHOULD be:

- purposeful;
- understandable;
- reliable;
- maintainable;
- appropriately isolated;
- diagnostically useful.

Test quality MUST NOT be measured solely by code coverage.

High coverage with weak assertions MAY provide little meaningful evidence.

Low coverage MAY be acceptable for a low-risk area when other evidence is sufficient.

---

## 28. Code Coverage

Code coverage MAY be used as a diagnostic metric.

Coverage SHOULD help identify potentially untested areas.

Coverage MUST NOT be treated as:

- a direct measure of correctness;
- a substitute for meaningful assertions;
- an automatic completion criterion for every change.

Coverage targets MAY be introduced later if justified by project experience.

This document does not establish a universal percentage target.

---

## 29. Test Naming and Organization

Test naming SHOULD make the intended behavior clear.

Test organization SHOULD support:

- discoverability;
- maintainability;
- logical grouping;
- useful failure diagnosis.

The exact file and directory structure MAY be determined by the implementation technology.

This methodology does not prescribe a specific test framework convention.

---

## 30. Tests and AI-Assisted Development

AI MAY assist with:

- generating tests;
- identifying edge cases;
- proposing test scenarios;
- diagnosing failures;
- refactoring test code.

AI-generated tests MUST be reviewed for correctness.

A generated test MUST NOT be considered valid merely because it:

- executes successfully;
- passes;
- resembles existing tests;
- increases coverage.

The test must actually verify the intended behavior.

AI-generated tests SHOULD be checked for accidental testing of implementation details rather than externally meaningful behavior.

---

## 31. Test Environment

The test environment SHOULD be sufficiently controlled to make results meaningful.

Relevant environmental assumptions SHOULD be documented when they materially affect test behavior.

Tests SHOULD avoid depending on undocumented local configuration.

When an external service is required, the test strategy SHOULD define how availability and failure are handled.

---

## 32. Test Evidence

Test results SHOULD provide sufficient evidence to understand:

- what was tested;
- under which relevant conditions;
- whether it passed or failed;
- what failure occurred;
- which change or behavior is affected.

The amount of recorded evidence SHOULD be proportional to the significance of the test.

Transient local test execution MAY require less persistent documentation than a critical release or validation result.

---

## 33. Test Review

Tests SHOULD be reviewed as part of the development change when they are material to correctness.

Review SHOULD consider:

- whether the test verifies the intended behavior;
- whether important cases are missing;
- whether assertions are meaningful;
- whether the test is stable;
- whether it is overly coupled to implementation details.

Testing review is part of development review and does not require a separate approval authority.

---

## 34. Testing and Documentation

Testing SHOULD remain consistent with project documentation.

When documented behavior changes, relevant tests SHOULD be reviewed.

When tests reveal that documentation describes behavior incorrectly, the discrepancy SHOULD be resolved through the appropriate documentation or change process.

Neither documentation nor tests should silently become an alternative source of truth for an accepted architectural decision.

---

## 35. Testing and Change Management

Testing requirements SHOULD be determined during change impact analysis.

A change with broader impact SHOULD normally receive broader verification.

A change that affects an architectural boundary SHOULD receive verification appropriate to the affected boundary.

Testing MUST NOT be used to bypass required architectural approval.

A passing test suite does not authorize an unaccepted architectural change.

---

## 36. Testing and Review

Testing provides evidence for review.

Review SHOULD consider whether the testing evidence is appropriate for the change.

A reviewer MAY request additional testing when existing evidence is insufficient.

Detailed review responsibilities are defined by:

```text id="n8h4ds"
05-Review-Methodology.md
```

---

## 37. Testing and Final Validation

Development testing and Stage 6 Validation are separate.

Development testing asks:

> Does this change behave as intended under the tested conditions?

Final validation asks a broader question about the resulting ALH system and its requirements.

Passing development tests MUST NOT be described as completion of Stage 6 Validation.

Testing methodology MAY prepare evidence useful for later validation, but it does not define or perform final validation.

---

## 38. Testing Completion

Testing for a development change MAY be considered complete when:

- applicable test scope has been selected;
- required tests have been implemented or identified;
- relevant tests pass;
- known failures are understood and appropriately handled;
- regression impact has been considered;
- test evidence is sufficient for the change risk.

Testing completion does not imply that the entire system is validated.

---

## 39. Testing Workflow

The general testing workflow is:

```text id="q4v1se"
Change / Requirement
        ↓
Identify Expected Behavior
        ↓
Assess Risk
        ↓
Select Test Scope
        ↓
Design Test Evidence
        ↓
Implement / Execute Tests
        ↓
Analyze Results
        ↓
Fix / Update / Escalate
        ↓
Regression Check
        ↓
Record Evidence
```

The workflow MAY iterate when failures or new information are discovered.

---

## 40. Testing Summary

The Testing Methodology establishes testing as an evidence-generating development activity.

The central principle is:

> Tests MUST provide meaningful evidence about defined behavior without being treated as proof beyond their actual scope.

Testing SHOULD be:

- purposeful;
- proportional;
- repeatable;
- maintainable;
- risk-aware;
- independent enough to provide credible evidence.

Software testing MUST remain distinct from educational assessment and final system validation.
