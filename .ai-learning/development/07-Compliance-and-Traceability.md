# Compliance and Traceability

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

Related Documents

- 08-Development-Definition-of-Done.md
- 09-Development-Validation-Preparation.md
- ADR-001

---

## 1. Purpose

This document defines the methodology for maintaining compliance with approved ALH requirements, architectural decisions, educational methodology, and development conventions.

Traceability provides a way to connect:

- requirements;
- decisions;
- changes;
- implementation;
- verification evidence;
- review outcomes.

Compliance means that development work remains consistent with applicable approved constraints.

This document MUST NOT define:

- a new architectural component;
- a runtime traceability subsystem;
- a replacement for ADR governance;
- educational assessment;
- final Stage 6 Validation.

---

## 2. Compliance Objectives

Development compliance SHOULD provide confidence that:

- approved requirements are respected;
- architectural decisions remain intact;
- educational methodology remains intact;
- changes remain within authorized scope;
- relevant verification evidence exists;
- important decisions can be reconstructed when necessary.

Compliance SHOULD reduce ambiguity rather than create unnecessary administrative work.

---

## 3. Traceability Principles

Traceability SHOULD follow these principles:

- meaningful relationships over exhaustive bureaucracy;
- evidence over assertion;
- explicit ownership;
- proportionality;
- current information;
- identifiable sources;
- minimal duplication.

Traceability MUST NOT become an independent source of truth.

The authoritative document, requirement, or ADR remains authoritative.

---

## 4. Sources of Authority

Depending on the subject, authoritative sources MAY include:

- approved architecture documents;
- accepted ADRs;
- approved educational methodology documents;
- approved development methodology documents;
- explicitly approved project requirements.

A traceability record MAY reference these sources.

It MUST NOT silently replace them.

---

## 5. Traceability Chain

Where useful, a change SHOULD be traceable through a chain such as:

```text
Requirement
    ↓
Applicable Decision / Methodology
    ↓
Development Change
    ↓
Implementation
    ↓
Verification Evidence
    ↓
Review
```

Not every change requires every link to be explicitly recorded.

The required level of traceability SHOULD be proportional to risk and significance.

---

## 6. Requirement Traceability

Material requirements SHOULD be identifiable.

A requirement MAY originate from:

- project goals;
- approved architecture;
- educational methodology;
- explicit development decisions;
- accepted ADRs.

Requirements SHOULD be stated clearly enough that appropriate verification can be selected.

Ambiguous requirements SHOULD be clarified before they are treated as objective compliance criteria.

---

## 7. Architecture Traceability

Changes affecting architecture SHOULD be traceable to the applicable architectural source.

Examples include:

- component responsibilities;
- repository boundaries;
- major dependencies;
- Superpowers integration;
- architectural principles.

Where a change conflicts with an accepted architectural decision, the conflict MUST be made explicit.

The implementation MUST NOT silently override the architecture.

---

## 8. ADR Traceability

Architectural changes SHOULD reference the relevant ADR.

A new architectural decision SHOULD follow the established ADR lifecycle.

The relationship is:

```text
Architectural Question
        ↓
Candidate ADR
        ↓
Accepted ADR
        ↓
Affected Documentation / Implementation
        ↓
Verification
```

A proposed ADR MUST NOT be treated as an accepted architectural constraint.

---

## 9. Educational Methodology Traceability

Development changes affecting educational behavior SHOULD be traceable to the applicable Stage 2 methodology.

Examples MAY include behavior involving:

- Learning Units;
- competency states;
- evidence;
- assessment;
- Learning Debt;
- Automation Level;
- Definition of Done.

The purpose is to prevent implementation from silently redefining methodology.

Stage 2 documents remain authoritative for educational semantics.

---

## 10. Development Methodology Traceability

Changes should follow the applicable Development Methodology documents.

Relevant relationships MAY include:

```text
Change
  ↓
Workflow
  ↓
Change Management
  ↓
Testing
  ↓
Review
  ↓
Integration
```

Not every change requires all stages.

The applicable process SHOULD be selected according to change scope and risk.

---

## 11. Implementation Traceability

Implementation SHOULD be traceable to the behavior it exists to provide.

Traceability MAY be established through:

- change descriptions;
- issue references;
- commit messages;
- pull requests;
- tests;
- documentation.

Implementation comments SHOULD NOT be treated as the primary project-level source of requirements.

---

## 12. Verification Traceability

Important requirements SHOULD have identifiable verification evidence.

Verification MAY consist of:

- automated tests;
- integration tests;
- review findings;
- documentation inspection;
- manual verification;
- other appropriate evidence.

The verification method SHOULD match the requirement.

A requirement concerning implementation behavior SHOULD normally have behavioral evidence.

A documentation requirement MAY be verified through document inspection.

---

## 13. Review Traceability

Material review findings SHOULD remain traceable to the reviewed change.

Where appropriate, the review record SHOULD allow identification of:

- the finding;
- the affected behavior;
- the resolution;
- relevant verification.

Review methodology remains authoritative for review practices.

---

## 14. Change Traceability

A material change SHOULD identify:

- its purpose;
- affected scope;
- relevant requirements or decisions;
- verification;
- review status.

Change Management remains responsible for determining the required process.

Traceability supports that process; it does not replace it.

---

## 15. Compliance Categories

Development compliance MAY be considered across several dimensions:

```text
Requirement Compliance
Architectural Compliance
Educational-Methodology Compliance
Development-Methodology Compliance
Testing Compliance
Documentation Compliance
Integration Compliance
Security Compliance
```

These categories are analytical dimensions.

They do not imply separate compliance systems.

---

## 16. Compliance Evidence

Compliance SHOULD be demonstrated through evidence where practical.

Evidence MAY include:

- source documents;
- accepted ADRs;
- implementation;
- tests;
- review records;
- change records;
- repository state.

Statements such as:

```text
"This is compliant."
```

SHOULD NOT be treated as sufficient evidence by themselves when the underlying evidence can be inspected.

---

## 17. Compliance Gaps

A compliance gap exists when required behavior or process cannot be demonstrated to be consistent with the applicable authority.

A gap MAY result from:

- missing implementation;
- incorrect implementation;
- missing documentation;
- stale documentation;
- missing verification;
- unresolved architectural conflict;
- process deviation.

A suspected gap SHOULD be investigated before being classified as a confirmed violation.

---

## 18. Documentation and Traceability Gaps

Documentation inconsistencies SHOULD be distinguished from implementation defects.

Examples include:

- stale filenames;
- incorrect references;
- outdated dependency lists;
- missing links;
- inconsistent status labels.

Such issues SHOULD be corrected through the applicable documentation process.

A documentation discrepancy MUST NOT automatically be interpreted as an architectural change.

---

## 19. Repository Traceability

Repository structure MAY provide useful evidence of compliance.

Relevant examples include:

- `.ai-learning/` containing ALH infrastructure;
- application implementation remaining outside `.ai-learning/`;
- expected methodology documents being present;
- ADR records being available where required.

Repository observations SHOULD be verified against the actual repository state.

Missing or inaccessible artifacts MUST NOT be invented or assumed to exist.

---

## 20. Traceability and ADR-001

ADR-001 establishes the separation between:

```text
.ai-learning/
```

and application implementation areas.

Development changes SHOULD preserve this boundary.

A change that intentionally crosses or changes the established boundary SHOULD be identified as a potential architectural change.

It MUST NOT be normalized through implementation convention alone.

---

## 21. Traceability of External Dependencies

Material external dependencies SHOULD be identifiable.

Traceability MAY include:

- dependency name;
- purpose;
- applicable version or compatibility assumption;
- integration boundary;
- relevant verification evidence.

For Superpowers, traceability MUST preserve its status as an external reusable capability.

ALH MUST NOT represent modifications to Superpowers as ordinary ALH implementation.

---

## 22. Traceability of Educational State

Where implementation modifies learner-specific educational state, the change SHOULD be traceable to the applicable Memory Model and educational methodology.

Particular care SHOULD be taken when modifying:

- competency-related observations;
- competency progression;
- Learning Debt;
- Automation Level.

The implementation MUST preserve the conceptual distinction among these dimensions.

---

## 23. Traceability of Decisions

Important development decisions SHOULD be recorded at the appropriate level.

Possible decision records include:

- change description;
- review decision;
- accepted ADR;
- methodology decision;
- documented rationale.

The project SHOULD avoid creating permanent records for trivial implementation choices when no future value is expected.

---

## 24. Classification of New Findings

New findings SHOULD be classified as:

### Observation

A factual condition that does not require a new decision.

### Candidate ADR

A proposal that would change an architectural decision.

### Future Evolution

A useful improvement intentionally deferred beyond the current scope.

This classification prevents observations and future ideas from being mistaken for accepted architecture.

---

## 25. Handling Uncertainty

When compliance cannot be established from available evidence, the project SHOULD state the uncertainty.

The developer or reviewer SHOULD NOT:

- infer missing documents;
- invent requirements;
- assume an ADR exists;
- assume undocumented external behavior;
- treat an unverified interpretation as fact.

Uncertainty SHOULD result in:

- additional verification;
- clarification;
- explicit documentation of the gap;
- or appropriate deferral.

---

## 26. Traceability Maintenance

Traceability information SHOULD be maintained when material project information changes.

Maintenance MAY include:

- updating references;
- removing stale links;
- correcting document names;
- updating affected requirement mappings;
- recording superseded decisions.

Traceability SHOULD NOT be allowed to become stale while the authoritative source remains current.

---

## 27. Avoiding Duplication

Traceability SHOULD reference existing authoritative documents instead of copying their content.

For example, a development document SHOULD reference:

```text
02-Core-Principles.md
```

rather than reproduce the complete architectural principles.

Likewise, development methodology SHOULD reference Stage 2 methodology rather than redefine it.

This preserves a single authoritative source for each decision or rule.

---

## 28. Compliance Review

Material changes SHOULD be reviewed for applicable compliance.

The reviewer MAY ask:

- Which requirements apply?
- Which architectural decisions apply?
- Which methodology rules apply?
- What evidence demonstrates compliance?
- Are there unresolved gaps?

The review SHOULD remain proportional to the change.

---

## 29. Compliance and Testing

Testing provides one type of compliance evidence.

A passing test MAY demonstrate that a specific behavioral requirement is satisfied.

It does not automatically establish compliance with:

- architecture;
- documentation;
- process;
- educational methodology;
- security requirements outside its scope.

Compliance SHOULD consider the complete relevant evidence set.

---

## 30. Compliance and Documentation

Documentation provides important traceability evidence.

Documentation SHOULD identify authoritative sources where useful.

However, documentation MUST NOT be treated as proof that implementation follows the documented behavior.

Implementation and documentation SHOULD remain mutually consistent.

---

## 31. Compliance and Final Validation

Development compliance supports later validation but does not replace it.

Stage 6 Validation evaluates the resulting system against the applicable validation criteria.

Development traceability MAY provide useful evidence for Stage 6.

This document MUST NOT define the Stage 6 validation process.

---

## 32. Compliance Completion

Compliance review for a development change MAY be considered complete when:

- applicable authorities are identified;
- material requirements are understood;
- relevant architectural and methodology constraints are considered;
- required evidence is available;
- known gaps are resolved or explicitly recorded;
- traceability is sufficient for the change risk.

Compliance completion does not imply complete system validation.

---

## 33. Traceability Workflow

The general workflow is:

```text
Identify Change
      ↓
Identify Applicable Authorities
      ↓
Identify Relevant Requirements / Decisions
      ↓
Implement Change
      ↓
Collect Verification Evidence
      ↓
Review Compliance
      ↓
Resolve Gaps
      ↓
Record Material Decisions
      ↓
Complete Traceability
```

The workflow MAY iterate when new requirements, conflicts, or evidence are discovered.

---

## 34. Compliance and Traceability Summary

Compliance and Traceability establishes a lightweight mechanism for connecting development work with the project's authoritative requirements and decisions.

The central principle is:

> Traceability SHOULD connect development evidence to authoritative sources without becoming a duplicate source of truth.

Compliance SHOULD be:

- evidence-based;
- proportional;
- explicit where material;
- maintainable;
- resistant to assumption;
- compatible with existing ADR governance.

Traceability supports architectural integrity, educational-methodology integrity, and development consistency while remaining separate from final Stage 6 Validation.
