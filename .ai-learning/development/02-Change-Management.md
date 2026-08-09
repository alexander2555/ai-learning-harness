# Change Management

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

Related Documents

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

This document defines how changes to the AI Learning Harness (ALH) are identified, classified, evaluated, approved, implemented, and recorded.

Change Management exists to ensure that development remains controlled when a change affects project scope, established decisions, documentation, methodology, architecture, or long-term project behavior.

This document operationalizes change control.

It MUST NOT redefine:

- ALH architecture;
- educational methodology;
- ADR governance itself;
- prompt architecture;
- Harness implementation;
- final validation.

---

## 2. Change Management Objectives

Change Management SHOULD ensure that:

- changes have an identifiable purpose;
- scope remains controlled;
- existing decisions are respected;
- architectural changes receive explicit approval;
- methodology changes are distinguished from implementation changes;
- deferred work remains visible;
- rejected proposals are not implemented implicitly;
- durable decisions are recorded in the appropriate authoritative location.

Change Management SHOULD minimize unnecessary process while preserving decision integrity.

---

## 3. Definition of a Change

A change is any modification to the project that can affect an existing artifact, behavior, decision, convention, dependency, or project constraint.

Changes MAY affect:

- source code;
- tests;
- documentation;
- configuration;
- infrastructure;
- development processes;
- educational methodology;
- architecture;
- integrations;
- project conventions.

Not every change requires the same management process.

The applicable process MUST be proportional to the impact of the change.

---

## 4. Change Categories

Changes SHOULD initially be categorized according to their primary nature.

### 4.1 Local Implementation Change

A change confined to implementation details that does not affect established architectural or methodological decisions.

Examples MAY include:

- local refactoring;
- bug fixes;
- implementation corrections;
- internal code improvements.

Such changes MAY follow the normal development workflow without an ADR.

---

### 4.2 Documentation Change

A change to project documentation that does not alter an accepted decision.

Examples MAY include:

- correcting terminology;
- fixing references;
- improving explanations;
- correcting filenames;
- updating factual repository information.

Documentation changes that alter the meaning of an accepted architectural decision MUST NOT be treated as purely editorial.

---

### 4.3 Methodology Change

A change to an established development or educational methodology that does not alter architectural responsibility or boundaries.

Methodology changes SHOULD be reviewed against dependent documents before acceptance.

A methodology change MUST NOT be used to bypass architectural governance.

---

### 4.4 Architectural Change

A change that affects an established architectural decision.

Examples MAY include changes to:

- system boundaries;
- responsibility ownership;
- architectural principles;
- major dependencies;
- integration boundaries;
- persistent structural decisions.

Architectural changes MUST follow ADR governance.

---

### 4.5 External Dependency Change

A change involving an external dependency MAY require additional analysis when it affects:

- ALH architectural boundaries;
- security;
- compatibility;
- integration behavior;
- long-term project assumptions.

The fact that a dependency is external does not remove the need for impact analysis.

---

## 5. Change Impact Levels

Change category and change impact are separate concepts.

A change MAY be categorized as implementation, documentation, methodology, architectural, or dependency-related while also having different levels of impact.

A practical impact classification is:

```text id="w6jq2m"
Low
 ↓
Moderate
 ↓
High
 ↓
Architectural
```

Impact SHOULD be evaluated using factors such as:

- affected scope;
- dependency count;
- architectural relevance;
- educational relevance;
- security relevance;
- persistence impact;
- integration risk;
- reversibility.

The classification exists to determine appropriate process depth.

It MUST NOT create a second architecture model.

---

## 6. Change Classification

Every significant change SHOULD be classified before implementation.

The established project proposal classifications are:

### Observation

A factual finding that does not require a decision.

An Observation MAY identify:

- discrepancy;
- limitation;
- defect;
- inconsistency;
- missing information.

An Observation MUST NOT be treated as an approved change merely because it has been recorded.

---

### Candidate ADR

A Candidate ADR is a proposed architectural decision or architectural change requiring explicit approval.

A Candidate ADR MUST NOT be treated as accepted architecture.

Implementation depending on a Candidate ADR SHOULD NOT proceed as though the decision were already approved.

---

### Future Evolution

Future Evolution represents a potentially useful improvement that is intentionally deferred.

Future Evolution SHOULD preserve the idea without expanding the current scope.

Future Evolution MAY later become:

- a development task;
- a methodology proposal;
- a Candidate ADR;
- an ordinary implementation change.

Its later classification MUST be determined at that time.

---

## 7. Change Assessment

Before significant implementation, the change SHOULD be assessed against existing project constraints.

The assessment SHOULD determine:

- what is changing;
- why it is changing;
- which artifacts are affected;
- which accepted decisions apply;
- whether architecture is affected;
- whether educational methodology is affected;
- whether documentation is affected;
- whether verification requirements change;
- whether external dependencies are involved.

The assessment SHOULD identify uncertainty explicitly.

Unknown information MUST NOT be silently converted into assumptions when it could materially affect the decision.

---

## 8. Scope Control

A change SHOULD have a defined scope.

Scope SHOULD include:

- intended outcome;
- affected artifacts;
- necessary supporting work;
- known exclusions.

During implementation, additional work MAY be discovered.

New work SHOULD be classified as:

```text id="y9d5t6"
Required for Current Change
        ↓
Independent Change
        ↓
Future Evolution
        ↓
Potential Architectural Change
```

Independent or deferred work SHOULD NOT be absorbed into the current change without explicit scope adjustment.

---

## 9. Change Dependencies

A change MAY depend on:

- another implementation change;
- an accepted ADR;
- a methodology document;
- a test;
- an external dependency;
- a repository condition.

Dependencies SHOULD be identified when they can affect implementation order or correctness.

A change MUST NOT depend on an unaccepted architectural proposal as though it were an approved decision.

---

## 10. Architectural Change Control

When a change affects an established architectural decision, the change MUST enter architectural decision governance.

The conceptual process is:

```text id="m8q1rd"
Architectural Need
        ↓
Impact Analysis
        ↓
Candidate ADR
        ↓
Review
        ↓
Accepted / Rejected
        ↓
Implementation if Accepted
```

The exact ADR lifecycle remains governed by the Stage 1 architecture and existing ADR conventions.

Change Management MUST NOT create a parallel architectural approval system.

---

## 11. Candidate ADR Handling

A Candidate ADR SHOULD contain sufficient information to evaluate the proposed architectural decision.

At minimum, the proposal SHOULD make clear:

- the problem or decision context;
- the proposed change;
- affected architectural boundaries;
- relevant alternatives where appropriate;
- expected consequences;
- relationship to existing decisions.

A Candidate ADR MUST clearly remain distinguishable from an accepted ADR.

The project MUST NOT derive architectural authority from a proposal merely because it has been documented.

---

## 12. Accepted Changes

A change may proceed as an accepted development change when:

- its scope is understood;
- applicable constraints are known;
- required approvals are complete;
- no unresolved architectural dependency blocks implementation;
- the change is consistent with accepted decisions.

Acceptance of a development change does not imply acceptance of an architectural change unless the relevant architectural decision has separately been accepted.

---

## 13. Rejected Changes

A rejected proposal MUST NOT be implemented as part of the original change.

The rejection MAY be documented when the decision is significant enough to prevent repeated reconsideration.

Rejected architectural proposals SHOULD remain distinguishable from accepted architectural decisions.

If new evidence materially changes the context, a future proposal MAY be created.

It MUST NOT silently revive the rejected change.

---

## 14. Deferred Changes

A deferred change is a valid proposal that is intentionally not implemented within the current scope.

A deferred change SHOULD identify:

- what is being deferred;
- why it is deferred;
- relevant dependencies or conditions;
- whether it belongs to Future Evolution.

Deferral MUST NOT be interpreted as approval.

A deferred architectural change remains unaccepted until the applicable ADR is accepted.

---

## 15. Methodology Changes

Changes to Development Methodology SHOULD be managed separately from architectural decisions unless they affect architecture.

A methodology change SHOULD identify:

- the problem with the current practice;
- the proposed improvement;
- affected development documents;
- compatibility with existing architecture;
- migration or transition considerations where relevant.

Educational methodology changes MUST be evaluated against the approved Stage 2 baseline.

A development inconvenience MUST NOT by itself justify changing educational methodology.

---

## 16. Documentation Changes

Documentation SHOULD be updated when an accepted change creates durable project knowledge.

The documentation change SHOULD be made in the appropriate authoritative document.

The project SHOULD avoid maintaining competing descriptions of the same decision.

If a documentation correction exposes a disagreement between documents, the discrepancy SHOULD be recorded and resolved against the authoritative source.

Documentation MUST NOT silently change an accepted architectural decision.

---

## 17. Change Traceability

Significant changes SHOULD be traceable to their originating need.

Traceability MAY connect:

```text id="f0a8v6"
Requirement / Finding
        ↓
Change
        ↓
Implementation
        ↓
Verification
        ↓
Review
        ↓
Documentation / Decision
```

The required level of traceability SHOULD be proportional to the change.

Traceability SHOULD support understanding and verification rather than create unnecessary administrative overhead.

---

## 18. Change Verification

A change MUST receive verification appropriate to its impact.

Verification MAY include:

- automated tests;
- static analysis;
- type checking;
- manual verification;
- integration checks;
- documentation consistency checks;
- architectural compliance checks.

The required verification method SHOULD be determined by the nature and risk of the change.

Detailed testing methodology is defined separately.

---

## 19. Change Review

Significant changes SHOULD be reviewed before completion.

Review SHOULD consider:

- intended outcome;
- scope;
- implementation correctness;
- architectural compliance;
- methodology compliance;
- verification evidence;
- documentation impact;
- unresolved findings.

Review MUST NOT grant architectural approval where ADR approval is required.

Detailed review methodology is defined separately.

---

## 20. Change Closure

A change SHOULD be closed only when:

- the intended outcome is achieved;
- required verification is complete;
- required review is complete;
- required documentation is updated;
- unresolved findings are classified;
- applicable architectural decisions are respected.

Closure MUST NOT be interpreted as final system validation.

---

## 21. Emergency Changes

An urgent defect or security issue MAY require an expedited development path.

Expedited handling SHOULD reduce unnecessary delay without removing essential decision integrity.

An emergency change MUST still:

- remain within known architectural boundaries where possible;
- receive appropriate verification;
- receive retrospective documentation when normal documentation could not be completed beforehand;
- identify any architectural or methodological impact.

An emergency condition MUST NOT be used as a general mechanism for bypassing ADR governance.

---

## 22. Change Reversal

A completed change MAY need to be reversed when it:

- introduces unacceptable behavior;
- violates an approved constraint;
- creates unacceptable risk;
- is superseded by an accepted decision.

Reversal SHOULD preserve traceability to the original change where practical.

Reversal of an implementation change does not automatically reverse an accepted architectural decision.

Architectural decisions have their own lifecycle.

---

## 23. Change and AI-Assisted Development

AI-assisted development does not create a separate change-management model.

AI MAY assist with:

- impact analysis;
- implementation;
- test generation;
- documentation;
- review preparation.

AI-generated recommendations MUST be treated as proposals until verified.

AI MUST NOT be considered an approval authority.

AI-generated content MUST NOT create an architectural decision implicitly.

When AI assistance identifies a potential architectural change, it SHOULD be classified as a Candidate ADR rather than directly implemented.

---

## 24. Change and Repository State

Repository state MAY affect the interpretation of a change.

When a required artifact, ADR, document, or directory cannot be confirmed:

- the absence MUST be recorded as an observation;
- assumptions MUST NOT be treated as repository facts;
- implementation SHOULD pause when the missing information materially affects the change.

Repository discrepancies MUST NOT be silently corrected when the correction could alter an accepted project decision.

---

## 25. Change Management and Stage Boundaries

Change Management MUST respect the project stage boundaries.

During Stage 3:

```text id="jv7yqa"
Development Methodology
        ↓
May be refined

Architecture
        ↓
Frozen unless changed through ADR

Educational Methodology
        ↓
Current accepted baseline

Prompt Architecture
        ↓
Out of Scope

Harness Implementation
        ↓
Out of Scope

Final Validation
        ↓
Out of Scope
```

A development need MUST NOT be used as a reason to bypass the stage boundaries.

---

## 26. Change Management Summary

The change-management model is:

```text id="j9w4sz"
Identify
   ↓
Classify
   ↓
Assess Impact
   ↓
Define Scope
   ↓
Determine Required Approval
   ↓
Approve / Defer / Reject
   ↓
Implement
   ↓
Verify
   ↓
Review
   ↓
Document
   ↓
Close
```

For architectural changes, the applicable ADR process governs the approval decision.

For ordinary development changes, the process remains proportional to scope and risk.

The central principle is:

> No significant change MUST silently alter an accepted project decision.

Change Management exists to preserve controlled project evolution while allowing normal development to remain efficient and proportional.
