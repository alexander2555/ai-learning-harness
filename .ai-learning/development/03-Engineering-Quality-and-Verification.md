# Engineering Quality and Verification

Status: Accepted
Version: 1.0

Parent Documents

- 01-Development-Lifecycle.md
- 02-Development-Rigor-and-Planning.md

Related Documents

- 00-Development-Methodology.md
- 00-Vision.md
- 02-Core-Principles.md
- 00-Learning-Model.md
- 02-Assessment.md
- 03-Competency-Evaluation.md
- 07-Definition-of-Done.md
- 10-Superpowers-Integration.md
- ADR-001-Separation-of-Application-and-Learning-Infrastructure.md

---

# 1. Purpose

This document defines engineering quality and verification expectations for the learner's real software-development work within the AI Learning Harness (ALH) learning environment.

It establishes how software changes SHOULD be evaluated for:

- correctness;
- requirements satisfaction;
- maintainability;
- architecture and design alignment;
- regression risk;
- security;
- reliability;
- operational fitness;
- review sufficiency;
- verification sufficiency.

The purpose is to ensure that engineering completion is supported by credible evidence rather than by implementation activity alone.

This document defines engineering quality.

It MUST NOT redefine:

- educational assessment;
- competency evaluation;
- learner mastery;
- Educational Definition of Done;
- Automation Level;
- educational evidence authority.

---

# 2. Engineering Quality Objective

Engineering quality exists to establish confidence that the software change is appropriate for its intended context.

The core relationship is:

```text
Engineering Intent
        ↓
Implementation
        ↓
Verification
        ↓
Independent Evaluation
        ↓
Engineering Evidence
        ↓
Quality Confidence
```

Quality confidence MUST be proportional to:

- task rigor;
- failure consequences;
- uncertainty;
- architectural significance;
- security impact;
- operational impact.

Engineering quality MUST NOT be reduced to:

- code compilation;
- successful AI generation;
- passing one test;
- absence of visible errors;
- completion of implementation steps.

---

# 3. Quality Dimensions

Applicable engineering quality MAY include:

- correctness;
- requirements coverage;
- maintainability;
- readability;
- simplicity;
- architecture alignment;
- interface consistency;
- error handling;
- reliability;
- performance;
- security;
- testability;
- compatibility;
- operability;
- documentation accuracy.

Not every dimension applies equally to every change.

Quality evaluation MUST remain proportional to the engineering context.

---

# 4. Correctness

Correctness is the degree to which the software behaves according to applicable requirements and engineering intent.

Correctness SHOULD be evaluated against:

- functional requirements;
- acceptance criteria;
- constraints;
- edge cases;
- failure conditions;
- compatibility expectations;
- security expectations;
- operational expectations where applicable.

Correctness MUST NOT be inferred solely from code appearance.

It SHOULD be demonstrated through appropriate verification evidence.

---

# 5. Requirements Coverage

Verification SHOULD establish whether applicable requirements have been addressed.

The preferred relationship is:

```text
Requirement
        ↓
Implementation
        ↓
Verification Evidence
```

For simple work, this traceability MAY remain implicit when it is obvious and easily reviewable.

For higher-rigor work, requirements coverage SHOULD become explicit enough to identify:

- what was required;
- how it was implemented;
- how it was verified;
- whether any requirement remains unresolved.

Verification activity SHOULD NOT focus only on implementation details while ignoring the actual engineering objective.

---

# 6. Verification Strategy

Verification strategy defines how confidence in a software change will be established.

Verification SHOULD be selected according to the properties being demonstrated.

Applicable techniques MAY include:

- unit testing;
- integration testing;
- system testing;
- regression testing;
- static analysis;
- type checking;
- linting;
- build verification;
- manual verification;
- interface testing;
- contract testing;
- migration testing;
- performance testing;
- security testing;
- operational checks.

A verification technique MUST NOT be used merely because it is available.

It SHOULD be used when it provides meaningful evidence for an applicable engineering claim.

---

# 7. Verification Sufficiency

Verification is sufficient when the available evidence reasonably supports the applicable completion claims for the task.

Sufficiency SHOULD consider:

- rigor profile;
- requirements;
- risk;
- changed behavior;
- affected interfaces;
- regression surface;
- security impact;
- operational impact;
- known failure modes.

Verification sufficiency MUST NOT be defined by a universal number of tests.

It MUST NOT be inferred from test quantity alone.

The relevant question is:

> Does the available evidence adequately support the engineering claims being made?

---

# 8. Positive and Negative Verification

Verification SHOULD consider both expected behavior and relevant failure behavior.

Positive verification MAY establish that:

- intended workflows succeed;
- expected outputs are produced;
- valid inputs are handled correctly.

Negative verification MAY establish that:

- invalid inputs are rejected;
- failures are handled safely;
- permissions are enforced;
- invalid state transitions are prevented;
- error conditions do not corrupt data;
- unsafe behavior does not occur.

Negative verification becomes more important as:

- security impact increases;
- state complexity increases;
- failure consequence increases;
- input variability increases.

---

# 9. Boundary and Edge-Case Verification

Relevant boundary conditions SHOULD be considered when they can materially affect correctness.

Examples MAY include:

- empty input;
- maximum or minimum values;
- missing values;
- malformed data;
- concurrent actions;
- duplicate operations;
- repeated retries;
- partial failure;
- unavailable dependencies;
- unexpected ordering;
- state transitions.

Edge-case testing MUST remain relevant to the task.

The methodology MUST NOT require exhaustive enumeration of impossible or meaningless cases.

---

# 10. Regression Verification

A software change SHOULD provide confidence that previously valid behavior remains valid where the change could affect it.

Regression verification MAY include:

- existing automated tests;
- newly added regression tests;
- integration verification;
- targeted manual checks;
- broader system testing for high-impact changes.

A defect fix SHOULD normally include evidence capable of detecting recurrence of the defect when practical.

Higher-rigor changes SHOULD consider regression surface beyond the directly modified code.

---

# 11. Test Selection

Tests SHOULD be selected at the lowest level that can credibly demonstrate the intended property while also using higher-level verification where interaction risk requires it.

For example:

```text
Local Logic
    →
Unit Verification
```

```text
Component Interaction
    →
Integration Verification
```

```text
End-to-End User Behavior
    →
System Verification
```

The methodology MUST NOT enforce a fixed testing pyramid or percentage distribution for all projects.

Project context SHOULD determine the appropriate mix.

---

# 12. Automated and Manual Verification

Automated verification SHOULD be preferred when it provides:

- repeatability;
- regression protection;
- deterministic evidence;
- efficient future execution.

Manual verification MAY be appropriate when:

- automation cost is disproportionate;
- the behavior is difficult to automate;
- visual or experiential evaluation is required;
- exploratory verification provides additional value;
- the task is low-risk and localized.

Manual verification MUST NOT be used as an automatic substitute for valuable automation.

Automated tests MUST NOT be created when they provide little enduring engineering value.

---

# 13. Existing Test Suites

Existing tests are part of project context.

They SHOULD be used when relevant.

Passing existing tests MAY provide regression evidence.

However:

- existing tests MAY be incomplete;
- they MAY not cover new requirements;
- they MAY encode outdated assumptions;
- passing them MUST NOT be treated as proof of complete correctness.

New or modified behavior SHOULD receive additional verification when existing coverage is insufficient.

---

# 14. Failed Verification

Failed verification indicates that an engineering claim is unsupported or contradicted.

A failure MUST be investigated before engineering completion unless it is demonstrated to be irrelevant, invalid, or intentionally superseded.

A failure MAY indicate:

- implementation defect;
- incorrect requirement;
- outdated test;
- invalid assumption;
- design problem;
- environment problem;
- test infrastructure problem.

The cause SHOULD be determined rather than assumed.

Disabling or deleting a failing test merely to make verification pass MUST NOT be accepted unless the test itself is shown to be invalid and the change is justified.

---

# 15. Verification of Bug Fixes

A defect fix SHOULD establish:

1. the defect is understood sufficiently;
2. the corrective change addresses the actual cause or an explicitly justified containment strategy;
3. the original failure no longer occurs;
4. relevant surrounding behavior still works;
5. recurrence is detectable where practical.

A test reproducing the original defect before the fix is valuable when practical.

It is not universally mandatory when equivalent evidence is more appropriate.

---

# 16. Static Verification

Static analysis MAY provide evidence concerning:

- type correctness;
- unreachable code;
- API misuse;
- style violations;
- security weaknesses;
- common implementation defects;
- dependency issues.

Static tools SHOULD be used when they are established and meaningful within the project.

Static verification MUST NOT be interpreted as proof of runtime correctness.

---

# 17. Build Verification

Applicable changes SHOULD preserve a valid build or equivalent executable/project state.

Build verification MAY include:

- compilation;
- dependency resolution;
- packaging;
- generated artifacts;
- configuration validation.

Successful build verification demonstrates build integrity.

It does not demonstrate full behavioral correctness.

---

# 18. Architecture and Design Alignment

Engineering review SHOULD evaluate whether implementation remains consistent with applicable architecture and design decisions.

Relevant questions MAY include:

- Are component boundaries preserved?
- Are responsibilities located appropriately?
- Are interfaces used consistently?
- Has unnecessary coupling been introduced?
- Does the implementation violate an accepted design decision?
- Has the implementation exposed a reason to revise the design?

Implementation MUST NOT preserve an invalid design solely for the sake of plan compliance.

If engineering evidence shows the design is wrong, the lifecycle SHOULD iterate.

---

# 19. Simplicity and Necessary Complexity

Engineering quality SHOULD prefer the simplest solution that adequately satisfies applicable requirements and constraints.

Unnecessary complexity MAY include:

- abstractions without demonstrated need;
- premature extensibility;
- duplicate indirection;
- speculative frameworks;
- generalized solutions for a single concrete requirement;
- unnecessary dependencies.

Simplicity MUST NOT mean ignoring real complexity.

When complexity is inherent to the problem, it SHOULD be represented clearly and deliberately.

---

# 20. Maintainability

Maintainability SHOULD be considered when the software is expected to evolve.

Relevant concerns MAY include:

- comprehensible structure;
- clear responsibility boundaries;
- localized change;
- appropriate abstraction;
- meaningful naming;
- manageable dependencies;
- testability;
- predictable failure handling.

Maintainability expectations SHOULD scale with:

- project lifetime;
- change frequency;
- team size;
- production criticality.

Temporary experimental code MAY have different maintainability expectations than production code.

---

# 21. Readability

Code SHOULD be understandable by an engineer familiar with the relevant project and technology.

Readability MAY be supported by:

- clear naming;
- coherent structure;
- appropriate abstraction;
- limited unnecessary indirection;
- comments where intent cannot be expressed clearly in code;
- consistency with established project conventions.

Comments SHOULD explain meaningful intent, constraints, or non-obvious reasoning.

They SHOULD NOT duplicate obvious code behavior.

---

# 22. Error Handling

Applicable failure conditions SHOULD be handled deliberately.

Error-handling quality MAY include:

- correct failure propagation;
- safe defaults;
- useful diagnostics;
- state preservation;
- cleanup;
- retry behavior;
- user-facing error behavior;
- security-safe failure.

Silent failure SHOULD NOT be introduced unless explicitly appropriate.

Error handling SHOULD be verified where failure consequences are meaningful.

---

# 23. Reliability

Reliability concerns SHOULD increase when the project depends on continued correct operation under:

- retries;
- concurrency;
- partial failure;
- dependency failure;
- network instability;
- repeated execution;
- long-running operation;
- degraded conditions.

Higher reliability requirements SHOULD produce stronger verification of relevant failure modes.

---

# 24. Performance

Performance MUST be treated as an engineering requirement when it materially affects correctness, usability, cost, or operational viability.

Performance work SHOULD define an observable target or problem where practical.

Performance verification MAY include:

- latency;
- throughput;
- resource consumption;
- scalability;
- memory use;
- startup time;
- query behavior.

Optimization SHOULD NOT be performed without an engineering reason.

Performance claims SHOULD be supported by measurement when material.

---

# 25. Security Quality

Security is part of engineering quality.

Applicable security expectations MAY include:

- authentication correctness;
- authorization enforcement;
- least privilege;
- input validation;
- output encoding;
- secret handling;
- secure defaults;
- dependency safety;
- data protection;
- trust-boundary enforcement;
- safe error behavior.

Security expectations MUST scale with security impact as defined by `02-Development-Rigor-and-Planning.md`.

---

# 26. Security Verification

Security-sensitive changes SHOULD receive security-specific verification.

This MAY include:

- permission tests;
- invalid-input tests;
- trust-boundary tests;
- dependency checks;
- static analysis;
- configuration checks;
- manual security review;
- dedicated security testing.

Security verification MUST test applicable security properties rather than merely confirm that normal behavior works.

---

# 27. Dedicated Security Review

A dedicated Security Review SHOULD be required when risk justifies independent security-focused evaluation.

Conditions MAY include:

- authentication changes;
- authorization changes;
- privilege changes;
- sensitive data handling;
- externally exposed attack surface;
- cryptographic behavior;
- major trust-boundary changes;
- severe consequences of compromise.

Dedicated Security Review is a conditional engineering activity.

It MUST NOT be interpreted as a mandatory final phase for every task.

---

# 28. Dependency Quality

Changes to dependencies SHOULD consider applicable risks such as:

- compatibility;
- security;
- maintenance status;
- operational impact;
- transitive behavior;
- version constraints.

Dependency changes SHOULD receive verification appropriate to the affected integration surface.

A dependency MUST NOT be adopted solely because an AI system suggests it.

Its engineering relevance SHOULD be justified.

---

# 29. Interface Quality

Changes to significant interfaces SHOULD consider:

- compatibility;
- clarity;
- error semantics;
- versioning;
- consumer impact;
- security;
- documentation.

Public or difficult-to-change interfaces SHOULD receive stronger review and verification than purely local internal interfaces.

---

# 30. Data and Migration Quality

Changes affecting persistent data SHOULD consider:

- correctness;
- compatibility;
- migration;
- rollback or recovery;
- partial failure;
- data loss;
- repeatability;
- operational impact.

Higher-risk migrations SHOULD be verified before production use through an appropriate representative process.

Irreversible data changes SHOULD receive elevated rigor.

---

# 31. Review Objective

Engineering Review provides independent evaluation of whether the change satisfies applicable quality expectations.

Review SHOULD answer:

> Is there sufficient reason to believe this change is correct, appropriate, maintainable, and adequately verified?

Review MUST evaluate evidence rather than implementation appearance alone.

---

# 32. Review Independence

Review SHOULD provide a perspective sufficiently independent from initial implementation reasoning.

Independence MAY be provided by:

- another engineer;
- a distinct review responsibility;
- a fresh analytical pass;
- an appropriately separated AI review responsibility.

Stage 3 defines the need for independent evaluation.

It MUST NOT define the physical mechanism by which that independence is implemented.

---

# 33. Review Scope

Review SHOULD consider applicable dimensions including:

- requirements satisfaction;
- correctness;
- architecture alignment;
- maintainability;
- readability;
- simplicity;
- test sufficiency;
- regression risk;
- error handling;
- security;
- performance;
- operational impact;
- documentation.

Review scope MUST scale with rigor.

A lightweight change MAY require a narrow review.

A critical change SHOULD receive deeper, multi-dimensional review.

---

# 34. Review Findings

Review findings SHOULD be classified by engineering significance.

A useful conceptual distinction is:

## Blocking

The issue invalidates engineering completion unless resolved or explicitly dispositioned with justified authority.

Examples MAY include:

- correctness defects;
- unmet requirements;
- significant security flaws;
- missing critical verification;
- unsafe deployment behavior.

## Non-Blocking

The issue represents an improvement that does not invalidate the current engineering completion claim.

Examples MAY include:

- optional readability improvements;
- minor cleanup;
- future refactoring opportunities.

Review findings SHOULD NOT be inflated artificially into blockers.

Material defects MUST NOT be downgraded merely to accelerate completion.

---

# 35. Review Disposition

Every blocking review finding MUST be:

- corrected;
- invalidated with evidence;
- superseded by an approved engineering decision;
- or explicitly accepted as known risk by the appropriate project authority.

Stage 3 does not define organizational approval authority for every project.

Where authority is not available in project context, unresolved blocking risk MUST remain explicit.

---

# 36. Re-Verification After Changes

Corrections made after verification or review MAY invalidate prior evidence.

Relevant verification SHOULD be repeated when the correction can affect previously verified behavior.

The amount of re-verification SHOULD depend on:

- change scope;
- affected code;
- affected interfaces;
- regression risk;
- prior evidence invalidated.

The methodology MUST NOT assume that a prior successful test remains sufficient after materially related code changes.

---

# 37. Rigor Profile Expectations

The rigor profiles from `02-Development-Rigor-and-Planning.md` influence quality expectations.

A representative model is:

```text
R1 — Lightweight
    Focused correctness
    Targeted verification
    Proportional review

R2 — Standard
    Requirements coverage
    Appropriate automated/manual verification
    Engineering review
    Regression consideration

R3 — Elevated
    Explicit verification strategy
    Broader regression coverage
    Independent substantive review
    Security/operational verification where applicable

R4 — Critical
    Strong multi-layer verification
    Explicit failure-mode consideration
    Deep independent review
    Dedicated security review where applicable
    Delivery and post-deployment verification where applicable
```

This model establishes expected depth.

It MUST NOT be interpreted as a mandatory fixed checklist independent of task context.

---

# 38. R1 Quality Expectations

R1 work MUST still provide credible evidence of correctness.

Typical expectations include:

- targeted verification of the changed behavior;
- existing relevant tests;
- limited regression checks;
- lightweight review where useful.

R1 SHOULD avoid heavyweight artifact production.

R1 MUST NOT justify skipping verification entirely.

---

# 39. R2 Quality Expectations

R2 SHOULD include:

- verification against applicable acceptance criteria;
- appropriate test updates;
- regression consideration;
- review of implementation quality;
- review of test sufficiency;
- applicable documentation updates.

Known relevant failures SHOULD be resolved before completion.

---

# 40. R3 Quality Expectations

R3 SHOULD include:

- explicit verification strategy;
- multiple verification forms where interaction risk exists;
- regression coverage beyond the immediate implementation where necessary;
- substantive independent review;
- architecture alignment review;
- security verification where relevant;
- operational verification where relevant;
- explicit handling of known residual risk.

Verification limitations SHOULD remain visible.

---

# 41. R4 Quality Expectations

R4 SHOULD require the strongest credible evidence appropriate to the project.

Applicable expectations MAY include:

- layered automated verification;
- representative integration or system testing;
- failure-mode verification;
- security-focused testing;
- independent security review;
- migration verification;
- rollback validation;
- staged delivery;
- observability validation;
- post-deployment verification.

R4 MUST NOT imply exhaustive proof when such proof is infeasible.

Residual uncertainty MUST be stated rather than hidden.

---

# 42. Quality and Documentation

Documentation quality SHOULD be reviewed when documentation is necessary for correct:

- use;
- maintenance;
- integration;
- deployment;
- operation;
- future engineering reasoning.

Documentation MUST remain consistent with the implemented behavior.

A change MUST NOT be considered fully complete when required operational or interface documentation is materially incorrect.

Detailed artifact ownership is defined by `04-Engineering-Artifacts-and-Traceability.md`.

---

# 43. Quality and Delivery

Verification SHOULD continue through delivery when deployment can change the effective behavior of the system.

Applicable delivery verification MAY include:

- build artifact validation;
- configuration verification;
- migration results;
- service health;
- smoke tests;
- observability checks;
- production behavior.

Pre-deployment correctness does not automatically establish post-deployment correctness.

---

# 44. Engineering Evidence

Quality decisions SHOULD be supported by inspectable evidence.

Applicable evidence MAY include:

- test results;
- static-analysis results;
- build results;
- review findings;
- security findings;
- manual verification notes;
- performance measurements;
- deployment results.

Evidence SHOULD be retained when it has continuing value.

Not every tool output needs permanent preservation.

---

# 45. Evidence Quality

Engineering evidence SHOULD be evaluated for:

- relevance;
- validity;
- coverage;
- repeatability where applicable;
- recency;
- relationship to the current implementation.

Evidence MUST NOT be accepted merely because a tool reports success.

For example:

```text
Test Passed
        ≠
Requirement Proven
```

unless the test meaningfully demonstrates the relevant requirement.

---

# 46. AI-Generated Engineering Work

AI-generated code, tests, analysis, or review findings MUST be evaluated under the same applicable engineering quality expectations as human-produced work.

AI generation MUST NOT reduce required verification.

AI confidence statements MUST NOT be treated as engineering evidence.

AI-produced tests SHOULD themselves be reviewed for relevance and validity.

AI-generated review findings MAY inform engineering review but MUST NOT be accepted blindly.

---

# 47. Educational Boundary

Engineering verification MAY create educationally useful observations.

For example:

- learner-designed tests MAY provide application evidence;
- explanation of a failed test MAY provide reasoning evidence;
- independent debugging MAY provide independence evidence.

However:

```text
Engineering Evidence
        ↓
MAY become
        ↓
Candidate Educational Evidence
```

only through Stage 2 assessment and evaluation semantics.

Passing software tests MUST NOT automatically update learner competency.

Engineering Review MUST NOT silently become educational assessment.

---

# 48. Quality and Learner Independence

Engineering quality requirements remain stable regardless of learner independence.

The learner MAY receive different educational support while performing the same quality-critical task.

For example:

```text
Same R3 Engineering Task
        ↓
Guided Learner
or
Independent Learner
```

The educational mode MAY differ.

The required software quality MUST NOT.

---

# 49. Quality and Logical Pipeline Responsibilities

Stage 1 logical responsibilities MAY contribute to quality activities.

Examples include:

```text
Developer Responsibility
        →
Implementation Quality
        +
Verification
```

```text
Reviewer Responsibility
        →
Independent Engineering Evaluation
```

```text
Security Auditor Responsibility
        →
Security-Focused Evaluation
```

```text
Architect Responsibility
        →
Architecture Alignment
```

These are logical responsibility relationships only.

They MUST NOT prescribe physical agents or model invocations.

---

# 50. Quality and Superpowers

Verified Superpowers capabilities MAY support:

- implementation;
- test execution;
- debugging;
- review;
- verification;
- workflow discipline.

Stage 3 MUST NOT assume specific Superpowers capabilities without verification.

Superpowers outputs MUST remain subject to applicable engineering evaluation.

A successful Superpowers workflow MUST NOT automatically establish Engineering Done.

---

# 51. Known Failure and Residual Risk

Engineering completion SHOULD NOT imply that all possible risk has been eliminated.

Known residual risk MAY remain when it is:

- understood;
- bounded;
- non-blocking;
- explicitly documented where material;
- accepted by appropriate project authority where necessary.

Unknown risk MUST NOT be represented as known safety.

Where meaningful uncertainty remains, the completion claim SHOULD state its limitation.

---

# 52. Verification Anti-Patterns

The following patterns are inconsistent with this methodology.

## Test Count Substitution

Using the number of tests as a proxy for verification quality.

## Green-Build Fallacy

Treating a successful build or CI run as proof of full correctness.

## Happy-Path Only

Verifying normal success while ignoring relevant failure behavior.

## Review Without Evidence

Approving a change without examining whether applicable claims are verified.

## AI Trust Substitution

Treating AI confidence or generated explanations as verification.

## Security-by-Linting

Assuming generic static analysis is sufficient for security-sensitive behavior.

## Manual-Only by Convenience

Avoiding valuable automated regression protection solely because manual testing is easier initially.

## Automation-for-Its-Own-Sake

Creating brittle or low-value automated tests where simpler evidence would be more appropriate.

## Ignoring Regression Surface

Testing only modified code despite meaningful impact on surrounding behavior.

## Silent Failure Suppression

Disabling failing checks without establishing that they are invalid or irrelevant.

---

# 53. Relationship to Engineering Artifacts and Traceability

This document defines what kinds of engineering evidence and quality judgments MAY be needed.

It does not define:

- which evidence MUST be persisted;
- canonical artifact forms;
- artifact ownership;
- traceability depth;
- duplication rules.

Those responsibilities belong to:

- 04-Engineering-Artifacts-and-Traceability.md

The dependency is:

```text
00-Development-Methodology.md
        ↓
01-Development-Lifecycle.md
        ↓
02-Development-Rigor-and-Planning.md
        ↓
03-Engineering-Quality-and-Verification.md
        ↓
04-Engineering-Artifacts-and-Traceability.md
```

---

# 54. Explicit Non-Goals

This document does not define:

- educational assessment criteria;
- competency scoring;
- mastery thresholds;
- Educational Definition of Done;
- learner Automation Level;
- physical reviewer agents;
- runtime review orchestration;
- a universal test framework;
- mandatory code-coverage percentages;
- mandatory testing pyramids;
- organization-specific approval roles;
- regulatory compliance requirements;
- specific security standards unless supplied by project context;
- specific Superpowers commands;
- Harness implementation.

---

# 55. Compliance

Engineering quality and verification are compliant with this document only if they:

1. evaluate applicable requirements and engineering intent;
2. use evidence appropriate to the claims being made;
3. scale verification depth with rigor and risk;
4. consider regression where applicable;
5. treat failed verification as engineering evidence;
6. preserve meaningful independent review;
7. include security-specific verification when security impact warrants it;
8. reconsider prior evidence after materially related changes;
9. avoid equating build success with correctness;
10. avoid equating test success with competency;
11. apply the same engineering quality expectations to AI-generated work;
12. preserve known material residual risk explicitly;
13. avoid mandatory testing ceremony without engineering value;
14. preserve Stage 1 and Stage 2 responsibility boundaries;
15. avoid dependence on undocumented Superpowers capabilities.

---
