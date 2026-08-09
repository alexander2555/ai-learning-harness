# Development Workflow

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

Related Documents

- 02-Change-Management.md
- 03-Documentation-Methodology.md
- 04-Testing-Methodology.md
- 05-Review-Methodology.md
- 06-Integration-Methodology.md
- 07-Compliance-and-Traceability.md
- 08-Development-Definition-of-Done.md
- 09-Development-Validation-Preparation.md
- ADR-001

---

## 1. Purpose

This document defines the standard development workflow for AI Learning Harness (ALH).

The workflow translates the principles established by the Development Methodology into a repeatable sequence for performing development work.

It defines how a development change moves from an identified need to a verified and completed change.

This document MUST NOT redefine:

- ALH architecture;
- educational methodology;
- prompt architecture;
- Harness implementation details;
- final system validation.

---

## 2. Workflow Objective

The development workflow SHOULD provide a consistent path from:

```text
Development Need
        ↓
Scope
        ↓
Impact Analysis
        ↓
Change Planning
        ↓
Implementation
        ↓
Verification
        ↓
Review
        ↓
Documentation / Traceability
        ↓
Completion
```

The workflow MUST remain proportional to the significance and risk of the change.

Not every change requires the same depth of analysis or verification.

---

## 3. Workflow Principles

The workflow MUST preserve the following properties:

- explicit scope;
- traceable intent;
- architectural awareness;
- educational-methodology awareness;
- controlled implementation;
- evidence-based verification;
- appropriate review;
- documented durable decisions;
- controlled completion.

The workflow MUST NOT become a mandatory sequence of identical activities for every development task.

---

## 4. Development Change Initiation

A development change begins when a concrete need is identified.

A development need MAY originate from:

- a project requirement;
- an implementation task;
- a defect;
- a test failure;
- a review finding;
- a documentation discrepancy;
- an integration requirement;
- an architectural decision;
- an educational-methodology requirement;
- a maintenance need.

The initiating need SHOULD be stated clearly enough to determine the intended outcome.

A vague implementation request SHOULD be refined before substantial implementation begins when ambiguity could materially affect the result.

---

## 5. Scope Definition

Before implementation, the change SHOULD have an explicit scope.

The scope SHOULD identify:

- intended outcome;
- affected area;
- known constraints;
- expected artifacts;
- required evidence;
- relevant dependencies.

The scope SHOULD distinguish between:

```text
Required Change
        ↓
Necessary Supporting Work
        ↓
Unrelated Findings
```

Unrelated findings SHOULD NOT automatically become part of the current change.

They SHOULD be classified and deferred or handled separately.

---

## 6. Initial Impact Analysis

Before implementation, the developer SHOULD determine whether the change affects established project boundaries.

The analysis SHOULD consider:

- architecture;
- educational methodology;
- existing development conventions;
- documentation;
- tests;
- integrations;
- security;
- persistent state;
- external dependencies.

The purpose of this analysis is not to redesign the system.

It is to determine which existing constraints apply to the change.

---

## 7. Architectural Impact Check

Every non-trivial change SHOULD include an architectural impact check.

The developer SHOULD determine whether the change affects:

- system boundaries;
- component responsibilities;
- architectural principles;
- major dependencies;
- integration boundaries;
- decisions governed by ADRs.

If the change does not affect an architectural decision, development MAY continue under the existing architecture.

If the change appears to require an architectural change:

```text
Implementation
      ↓
   MUST NOT
      ↓
Silently change architecture
```

The potential change MUST instead enter the applicable change-management and ADR process.

---

## 8. Educational Methodology Impact Check

Development work that affects educational behavior SHOULD be checked against the approved Stage 2 methodology.

The developer SHOULD determine whether the change affects:

- Learning Units;
- competency representation;
- evidence;
- assessment;
- Competency Evaluation;
- Learning Debt;
- Automation Level;
- Socratic interaction;
- Definition of Done;
- educational progression.

The purpose is to ensure that implementation remains consistent with the established methodology.

An implementation difficulty MUST NOT automatically be treated as permission to change educational methodology.

---

## 9. Change Classification

After initial analysis, findings SHOULD be classified.

The established classifications are:

### Observation

A factual finding that does not itself change an approved decision.

### Candidate ADR

A proposed architectural change requiring explicit architectural approval.

### Future Evolution

A useful improvement intentionally deferred beyond the current scope.

Classification SHOULD happen before implementation when the finding could materially change the scope or direction of the work.

---

## 10. Change Planning

Once the scope and applicable constraints are understood, the developer SHOULD determine the implementation approach.

Planning SHOULD identify:

- affected artifacts;
- implementation dependencies;
- expected verification;
- documentation impact;
- review requirements;
- potential risks.

Planning SHOULD remain proportional.

Small local changes MAY require only lightweight planning.

Changes with architectural, educational, security, or integration impact SHOULD receive more explicit planning.

---

## 11. Implementation

Implementation begins after the scope and applicable constraints are sufficiently understood.

Implementation SHOULD:

- remain within the defined scope;
- preserve approved responsibilities;
- follow established project conventions;
- avoid unnecessary abstractions;
- maintain explainability;
- produce appropriate evidence.

Implementation SHOULD NOT introduce speculative architecture merely because a future requirement might eventually need it.

When new requirements or constraints are discovered during implementation, the workflow SHOULD return to impact analysis rather than silently continuing under outdated assumptions.

---

## 12. Development with AI Assistance

AI coding agents MAY be used during implementation.

When AI assistance is used, the same workflow remains applicable.

The developer SHOULD provide the AI coding agent with the relevant:

- requirements;
- project constraints;
- authoritative documentation;
- applicable decisions;
- expected verification criteria.

AI-generated implementation MUST be treated as unverified development output.

The workflow MUST NOT assume that generated code is correct because it:

- compiles;
- appears idiomatic;
- resembles an existing pattern;
- passes a superficial inspection.

Appropriate verification remains mandatory.

---

## 13. Incremental Verification

Verification SHOULD begin during implementation rather than being postponed entirely until the end.

Depending on the change, verification MAY include:

- focused tests;
- static checks;
- type checks;
- executable examples;
- manual behavior checks;
- documentation consistency checks;
- integration checks.

The verification approach SHOULD be proportional to the risk of the change.

Failures discovered during verification SHOULD feed back into implementation or scope analysis as appropriate.

---

## 14. Handling Discovered Problems

Development frequently exposes additional problems.

When a new problem is discovered, the developer SHOULD determine whether it is:

1. required to complete the current change;
2. necessary supporting work;
3. an independent defect;
4. an architectural concern;
5. a methodological concern;
6. future evolution.

The workflow SHOULD avoid uncontrolled scope expansion.

A problem that is not necessary for the current change SHOULD normally be recorded and handled separately.

---

## 15. Review Preparation

Before review, the developer SHOULD ensure that the change has:

- a clear intended outcome;
- an identifiable scope;
- appropriate verification evidence;
- relevant documentation updates;
- identified architectural or methodological implications.

The change SHOULD be presented in a form that allows a reviewer to understand:

- what changed;
- why it changed;
- what constraints apply;
- how it was verified.

Detailed review responsibilities are defined separately by the Review Methodology.

---

## 16. Review

A change SHOULD undergo an appropriate review before completion.

Review depth SHOULD be proportional to:

- change complexity;
- risk;
- architectural impact;
- educational impact;
- security impact;
- integration impact.

Review MAY identify:

- implementation defects;
- missing verification;
- documentation inconsistencies;
- architectural concerns;
- methodology violations;
- unnecessary scope.

Review findings SHOULD be resolved, explicitly deferred, or classified before the change is considered complete.

---

## 17. Documentation and Traceability

After implementation and review, durable project information SHOULD be recorded in the appropriate authoritative artifact.

Documentation MAY include:

- development documentation;
- methodology updates;
- ADRs;
- tests;
- traceability records;
- implementation documentation.

The developer SHOULD NOT duplicate an existing authoritative document merely to make the current change self-contained.

Where an existing document already defines the relevant rule, the change SHOULD reference it.

---

## 18. Final Verification

Before completion, the developer SHOULD perform final verification appropriate to the change.

Final verification SHOULD confirm:

- intended behavior;
- relevant tests;
- applicable project constraints;
- documentation consistency;
- absence of unintended scope expansion.

Final verification MUST distinguish between:

```text
Change Verification
        ≠
Final System Validation
```

Passing development verification does not constitute Stage 6 Validation.

---

## 19. Completion Decision

A development change MAY be considered complete when:

- the intended outcome has been achieved;
- required verification has been completed;
- applicable review has been completed;
- required documentation has been updated;
- unresolved findings have been appropriately classified;
- no unapproved architectural change has been introduced.

Detailed completion criteria are defined in:

```text
08-Development-Definition-of-Done.md
```

---

## 20. Workflow for Architectural Changes

When implementation reveals a possible architectural change, the workflow becomes:

```text
Development Need
        ↓
Impact Analysis
        ↓
Architectural Concern
        ↓
Candidate ADR
        ↓
Architectural Review
        ↓
Accepted Decision
        ↓
Implementation
        ↓
Verification
        ↓
Completion
```

A Candidate ADR MUST NOT be treated as an accepted architectural decision.

If the proposed architectural change is rejected, implementation MUST return to the approved architecture unless another accepted decision applies.

---

## 21. Workflow for Methodological Findings

When implementation reveals a potential educational or development-methodology issue, the workflow SHOULD be:

```text
Development Need
        ↓
Implementation
        ↓
Methodological Finding
        ↓
Classification
        ↓
Observation / Methodology Revision / Future Evolution
        ↓
Applicable Follow-up
```

The finding MUST NOT automatically change the approved methodology.

Where the finding would require architectural change, ADR governance takes precedence.

---

## 22. Workflow for Defects

A defect SHOULD follow the same fundamental workflow:

```text
Defect
  ↓
Scope
  ↓
Impact Analysis
  ↓
Reproduction / Evidence
  ↓
Correction
  ↓
Verification
  ↓
Review
  ↓
Documentation / Traceability
  ↓
Completion
```

A defect correction SHOULD remain focused on restoring intended behavior.

Refactoring unrelated areas SHOULD be deferred unless required for a safe or maintainable correction.

---

## 23. Workflow for Documentation Changes

Documentation-only changes MAY use a reduced workflow when they have no material architectural or methodological impact.

The minimum flow SHOULD be:

```text
Documentation Need
        ↓
Scope
        ↓
Source Verification
        ↓
Change
        ↓
Consistency Check
        ↓
Review
        ↓
Completion
```

Documentation changes that alter an accepted architectural decision MUST NOT be treated as ordinary editorial changes.

---

## 24. Workflow for AI-Generated Documentation

AI MAY assist in drafting project documentation.

AI-generated documentation MUST be checked against authoritative project sources before acceptance.

The workflow SHOULD explicitly verify:

- document references;
- terminology;
- architectural boundaries;
- methodological semantics;
- filenames;
- numbering;
- cross-references;
- decision status.

AI-generated documentation MUST NOT introduce invented project decisions or references.

---

## 25. Workflow Re-entry

The workflow is iterative.

A development change MAY return to an earlier stage when new information is discovered.

For example:

```text
Implementation
      ↓
New Constraint
      ↓
Impact Analysis
      ↓
Revised Scope
      ↓
Implementation
```

Re-entry MUST be explicit when the new information materially changes the change.

The workflow MUST NOT force implementation to continue under assumptions that are known to be invalid.

---

## 26. Workflow Completion State

A completed development change SHOULD result in:

```text
Implemented
    +
Verified
    +
Reviewed
    +
Documented where required
    +
Within Approved Boundaries
```

Completion MUST NOT imply that:

- the architecture has been redesigned;
- the educational methodology has been changed;
- the entire Harness is validated;
- Stage 6 Validation has been completed.

---

## 27. Development Workflow Summary

The standard workflow is:

```text
1. Development Need
          ↓
2. Scope Definition
          ↓
3. Impact Analysis
          ↓
4. Change Classification
          ↓
5. Change Planning
          ↓
6. Implementation
          ↓
7. Incremental Verification
          ↓
8. Review Preparation
          ↓
9. Review
          ↓
10. Documentation / Traceability
          ↓
11. Final Verification
          ↓
12. Completion
```

The workflow is iterative rather than strictly linear.

Where new information materially changes the change, the workflow SHOULD return to the appropriate earlier step.

The workflow exists to ensure that ALH development remains controlled, evidence-oriented, traceable, and consistent with the approved architecture and educational methodology.
