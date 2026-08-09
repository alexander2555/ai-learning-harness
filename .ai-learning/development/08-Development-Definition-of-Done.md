# Development Definition of Done

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
- 05-Review-Methodology.md
- 06-Integration-Methodology.md
- 07-Compliance-and-Traceability.md

Related Documents

- 09-Development-Validation-Preparation.md
- ADR-001

---

## 1. Purpose

This document defines the Development Definition of Done for ALH development changes.

It establishes when a development change can be considered complete within the Development Methodology.

This Definition of Done applies to engineering work.

It MUST remain distinct from:

- the Stage 2 Learning Unit Definition of Done;
- Competency Evaluation;
- final Stage 6 Validation.

---

## 2. Purpose of Development Completion

A development change is complete when it has reached an acceptable state for integration into the project baseline according to its intended scope and applicable development requirements.

Completion requires sufficient evidence that:

- the intended change is implemented;
- applicable tests and verification are complete;
- relevant review has been completed;
- documentation is appropriately maintained;
- applicable architectural and methodological constraints are respected;
- known material issues are resolved or explicitly handled.

---

## 3. Development Definition of Done Principles

The Development Definition of Done SHOULD follow these principles:

- evidence over assumption;
- completeness relative to scope;
- proportionality;
- architectural integrity;
- educational integrity;
- verification before completion;
- explicit handling of unresolved issues;
- no hidden scope expansion.

A change MUST NOT be considered complete merely because its implementation code exists.

---

## 4. Applicability

The Development Definition of Done applies to development changes such as:

- feature implementation;
- bug fixes;
- refactoring;
- integration changes;
- configuration changes;
- material documentation changes;
- infrastructure changes.

The required evidence MAY differ according to the type and risk of the change.

---

## 5. Scope Completion

The intended scope of the change MUST be clear.

The completed change SHOULD:

- address the stated purpose;
- avoid unrelated modifications;
- avoid accidental feature additions;
- avoid unapproved architectural changes.

If the scope changes materially during development, the change SHOULD be reassessed under the applicable Change Management process.

---

## 6. Requirement Completion

Applicable requirements MUST be addressed.

The developer SHOULD be able to identify:

- what behavior is required;
- what behavior was implemented;
- how the behavior was verified.

Ambiguous or conflicting requirements SHOULD be resolved before completion where they materially affect correctness.

The developer MUST NOT invent requirements to justify completion.

---

## 7. Implementation Completion

The implementation SHOULD:

- provide the intended behavior;
- preserve relevant responsibility boundaries;
- handle applicable error conditions;
- avoid known material defects;
- follow established project conventions.

Implementation completion does not require eliminating every theoretical future improvement.

Known Future Evolution MAY remain outside the current change when explicitly deferred.

---

## 8. Architectural Compliance

The change MUST remain consistent with approved architecture.

The developer SHOULD verify, where applicable:

- component responsibilities;
- repository boundaries;
- architectural dependencies;
- Superpowers immutability;
- `.ai-learning/` ownership;
- relevant accepted ADRs.

An architectural conflict MUST NOT be silently accepted as an implementation detail.

If an architectural change is required, the appropriate ADR process MUST be followed.

---

## 9. Educational Methodology Compliance

Changes affecting educational behavior MUST remain consistent with the approved Stage 2 methodology.

The implementation MUST preserve the distinctions among:

```text
Competency State
Automation Level
Learning Debt
```

The implementation MUST NOT silently redefine:

- Learning Units;
- evidence requirements;
- assessment responsibilities;
- Competency Evaluation;
- educational progression.

A development change is not complete if it achieves technical behavior by violating an accepted educational-methodology constraint.

---

## 10. Testing Completion

Applicable testing MUST be completed.

The testing level SHOULD be proportional to the change.

Relevant tests SHOULD:

- verify intended behavior;
- cover important failure conditions;
- provide meaningful assertions;
- include appropriate regression evidence.

Known failing tests MUST be understood and appropriately resolved before completion unless an explicit decision allows otherwise.

Testing completion does not imply complete system validation.

---

## 11. Review Completion

Required review MUST be complete.

Material review findings MUST be:

- resolved;
- explicitly accepted;
- deferred through an appropriate process;
- or otherwise accounted for.

Blocking findings MUST NOT remain unresolved when the change is declared complete.

Review completion does not require agreement on every stylistic preference.

---

## 12. Integration Completion

Where the change affects an integration boundary, applicable integration work MUST be complete.

This SHOULD include:

- identified boundary;
- clear ownership;
- relevant contract understanding;
- compatibility consideration;
- integration verification;
- appropriate failure handling.

Integration completion is governed by:

```text id="2h0l3a"
06-Integration-Methodology.md
```

---

## 13. Documentation Completion

Documentation affected by the change MUST be appropriately updated.

This MAY include:

- project documentation;
- methodology references;
- interface documentation;
- configuration documentation;
- relevant comments.

Documentation SHOULD remain consistent with the implemented behavior.

Unnecessary duplication SHOULD NOT be introduced.

---

## 14. Traceability Completion

Where traceability is material, the change SHOULD have sufficient linkage to:

- applicable requirements;
- accepted decisions;
- relevant methodology;
- verification evidence;
- review outcomes.

Traceability MUST remain proportional to the significance of the change.

The project SHOULD reference authoritative documents rather than reproduce their contents.

---

## 15. Security Completion

Changes with security implications SHOULD receive appropriate verification and review.

Relevant concerns MAY include:

- access control;
- input validation;
- sensitive data;
- dependency security;
- unsafe operations;
- failure behavior.

A security-sensitive change MUST NOT be declared complete while a known material security defect remains unresolved unless the issue has been explicitly accepted through the applicable process.

---

## 16. Error Handling

Applicable error conditions SHOULD be addressed.

The implementation SHOULD define appropriate behavior for foreseeable failures.

Errors SHOULD be:

- observable;
- diagnosable;
- handled at the appropriate responsibility boundary.

Error handling MUST NOT conceal known failures merely to satisfy completion criteria.

---

## 17. Regression Consideration

The developer SHOULD consider whether the change can affect existing behavior.

Relevant regression testing SHOULD be completed.

A previously fixed defect SHOULD receive regression evidence when the change can reintroduce it.

Regression consideration is proportional to change impact.

---

## 18. Code and Artifact Quality

The resulting artifacts SHOULD be maintainable.

Where relevant, the developer SHOULD verify:

- naming;
- structure;
- consistency;
- unnecessary duplication;
- dead code;
- unnecessary complexity;
- maintainability.

The Definition of Done does not require perfection.

It requires a state appropriate for the intended change and its risk.

---

## 19. Repository State

The repository SHOULD be left in a coherent state.

This includes, where applicable:

- expected files present;
- obsolete files removed;
- references updated;
- generated artifacts handled appropriately;
- no accidental changes included.

A change MUST NOT be considered complete if its repository state is known to be inconsistent with its intended result.

---

## 20. Unresolved Issues

Known issues MAY remain after a development change only when they are:

- outside the change scope;
- explicitly documented;
- appropriately classified;
- not blocking completion.

They MAY be classified as:

```text
Observation
Candidate ADR
Future Evolution
```

A material defect MUST NOT be relabeled as Future Evolution merely to satisfy completion.

---

## 21. Definition of Done Checklist

The following checklist provides a practical completion test.

A development change SHOULD satisfy all applicable items:

```text
[ ] Intended scope is clear.
[ ] Applicable requirements are understood.
[ ] Implementation is complete.
[ ] Architectural constraints are respected.
[ ] Educational-methodology constraints are respected where applicable.
[ ] Applicable tests are complete.
[ ] Relevant regression impact has been considered.
[ ] Required review is complete.
[ ] Material review findings are resolved or explicitly handled.
[ ] Integration work is complete where applicable.
[ ] Required documentation is updated.
[ ] Required traceability is established.
[ ] Security considerations are addressed where applicable.
[ ] Known material defects are resolved.
[ ] Repository state is coherent.
[ ] Unresolved non-blocking issues are explicitly classified.
```

Not every item applies to every change.

The checklist MUST NOT be interpreted mechanically where an item is genuinely irrelevant to the change.

---

## 22. Evidence for Completion

Completion SHOULD be supported by appropriate evidence.

Evidence MAY include:

- implementation;
- automated test results;
- integration test results;
- review results;
- documentation changes;
- traceability records;
- repository inspection;
- manual verification.

Evidence SHOULD be sufficient to support the completion decision.

A statement that the work is "done" MUST NOT substitute for required evidence.

---

## 23. Completion Decision

The completion decision SHOULD be based on:

```text
Scope
  +
Requirements
  +
Implementation
  +
Verification
  +
Review
  +
Compliance
  +
Documentation
  =
Development Complete
```

This is a methodological model, not a numerical scoring formula.

All dimensions are evaluated according to their relevance to the change.

---

## 24. Development Completion vs. Learning Completion

Development completion MUST remain distinct from educational completion.

A technically complete implementation does not automatically establish:

- learner mastery;
- competency progression;
- successful educational assessment;
- completion of a Learning Unit.

Likewise, completion of an educational Learning Unit does not automatically mean that the underlying software change satisfies the Development Definition of Done.

The two definitions serve different responsibilities.

---

## 25. Development Completion vs. Validation

Development completion MUST remain distinct from Stage 6 Validation.

The relationship is:

```text
Development
     ↓
Development Definition of Done
     ↓
Completed Development Work
     ↓
Stage 6 Validation
```

A change satisfying the Development Definition of Done is ready for the next applicable project activity.

It is not thereby proven that the complete ALH system satisfies all validation requirements.

---

## 26. Exceptions

Exceptions to the Development Definition of Done SHOULD be explicit.

An exception SHOULD identify:

- the unmet criterion;
- why it is not currently satisfied;
- risk;
- responsible decision;
- expected follow-up where applicable.

Exceptions MUST NOT be hidden.

An exception to an architectural decision requires the appropriate architectural decision process.

---

## 27. AI-Assisted Development

AI MAY assist with evaluating completion criteria.

AI-generated completion assessments MUST be treated as supporting evidence rather than authoritative judgment.

The developer and reviewer SHOULD verify:

- implementation status;
- test results;
- documentation;
- architectural compliance;
- unresolved issues.

AI MUST NOT declare a change complete based on assumptions about unavailable repository state or missing evidence.

---

## 28. Development Completion Workflow

The general workflow is:

```text
Complete Implementation
        ↓
Verify Requirements
        ↓
Run Applicable Tests
        ↓
Check Integration
        ↓
Review Change
        ↓
Check Documentation and Traceability
        ↓
Resolve Material Findings
        ↓
Inspect Repository State
        ↓
Evaluate Definition of Done
        ↓
Declare Development Complete
```

The workflow MAY iterate when a criterion is not satisfied.

---

## 29. Summary

The Development Definition of Done establishes a clear boundary for development completion.

The central principle is:

> A development change is complete only when its intended scope has been implemented and the applicable verification, review, compliance, integration, and documentation requirements have been satisfied or explicitly handled.

Development completion MUST remain distinct from:

- educational completion;
- competency mastery;
- architectural approval;
- Stage 6 Validation.

The Definition of Done is therefore a development governance mechanism rather than a universal quality score.
