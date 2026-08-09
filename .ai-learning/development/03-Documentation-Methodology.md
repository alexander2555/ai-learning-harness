# Documentation Methodology

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

Related Documents

- 04-Testing-Methodology.md
- 05-Review-Methodology.md
- 06-Integration-Methodology.md
- 07-Compliance-and-Traceability.md
- 08-Development-Definition-of-Done.md
- 09-Development-Validation-Preparation.md
- ADR-001

---

## 1. Purpose

This document defines the methodology for creating, maintaining, reviewing, and evolving ALH project documentation.

Documentation is treated as part of the project's engineering and educational infrastructure.

The methodology establishes how documentation remains:

- accurate;
- authoritative;
- consistent;
- traceable;
- maintainable;
- aligned with approved project decisions.

This document MUST NOT redefine:

- ALH architecture;
- educational methodology;
- ADR governance;
- development workflow;
- testing methodology;
- review methodology;
- prompt architecture;
- Harness implementation.

---

## 2. Documentation Objectives

ALH documentation SHOULD provide sufficient information for qualified contributors and AI-assisted development tools to understand:

- what the project defines;
- why important decisions were made;
- which rules are authoritative;
- how development practices are applied;
- which constraints apply;
- where additional authoritative information can be found.

Documentation SHOULD support development without becoming an unnecessary duplication of project knowledge.

The primary objective is not maximum documentation volume.

The objective is reliable project knowledge.

---

## 3. Documentation Principles

Documentation SHOULD follow these principles:

- authority;
- clarity;
- consistency;
- traceability;
- minimal duplication;
- explicit scope;
- proportionality;
- maintainability;
- verifiability.

Documentation MUST distinguish between:

- established decisions;
- observations;
- proposals;
- examples;
- implementation details;
- future evolution.

Unverified information MUST NOT be presented as established project fact.

---

## 4. Documentation as a Source of Project Knowledge

Documentation represents durable project knowledge.

Information that is necessary for future development SHOULD NOT depend exclusively on:

- conversational context;
- individual memory;
- undocumented conventions;
- temporary implementation state.

Important project knowledge SHOULD be recorded in the appropriate authoritative artifact.

Documentation SHOULD therefore be treated as part of the project's continuity mechanism.

---

## 5. Authoritative Sources

Each important rule or decision SHOULD have one authoritative source.

Examples include:

```text id="w3m7ta"
Architecture
    → Architecture Specification

Architectural Decisions
    → ADRs

Educational Methodology
    → Methodology Documents

Development Methodology
    → Development Documents

Implementation Behavior
    → Appropriate Technical Documentation / Code / Tests
```

A document SHOULD reference an authoritative source rather than reproduce its complete contents.

When duplication is unavoidable for usability, the authoritative source MUST remain identifiable.

---

## 6. Document Scope

Each project document SHOULD have a clearly defined responsibility.

A document SHOULD answer a specific class of questions without silently absorbing responsibilities belonging to another document.

For example:

```text id="f4m9se"
Architecture
    = What the system is

Educational Methodology
    = How learning works

Development Methodology
    = How ALH is developed

Prompt Architecture
    = How AI-agent instructions are structured

Implementation
    = How the designed system is built

Validation
    = How the resulting system is verified
```

Documentation SHOULD preserve these boundaries.

---

## 7. Document Types

ALH documentation MAY include:

- architecture documents;
- methodology documents;
- ADRs;
- technical documentation;
- development guides;
- integration documentation;
- validation documentation;
- templates;
- project-specific documentation.

Each document type SHOULD have an appropriate structure and lifecycle.

A document SHOULD NOT combine unrelated responsibilities merely to reduce the number of files.

---

## 8. Document Creation

A new document SHOULD be created when existing authoritative documentation cannot reasonably contain the required information without violating document boundaries or maintainability.

Before creating a document, the author SHOULD determine:

- whether an existing document already owns the topic;
- whether the new information belongs there instead;
- whether the proposed document duplicates existing content;
- which documents depend on it;
- whether it belongs to the current project stage.

A new document MUST NOT be created merely to duplicate existing project knowledge.

---

## 9. Document Structure

Project documents SHOULD follow the established project formatting conventions.

Stage methodology documents SHOULD begin with:

```text id="5c4x0n"
# Document Name

Version: 0.1 Draft

Parent Documents

- ...

Related Documents

- ...

---
```

Stage 3 documents SHOULD use numbered sections.

Document naming MUST remain consistent with the established project convention.

Where the project has already established a filename, that filename SHOULD NOT be changed merely for stylistic reasons.

---

## 10. Parent Documents

`Parent Documents` identify documents that provide foundational context or requirements for the current document.

A Parent Document SHOULD be listed when the current document directly depends on its content.

Parent Documents SHOULD NOT be used as a general bibliography.

The list SHOULD remain concise and meaningful.

A document SHOULD NOT list every document that happens to be related to its topic as a Parent Document.

---

## 11. Related Documents

`Related Documents` identify documents that interact with or provide useful complementary context to the current document.

Related Documents MAY include:

- downstream documents;
- supporting methodology documents;
- implementation documentation;
- ADRs;
- validation documents.

Related Documents SHOULD NOT duplicate the semantic purpose of Parent Documents.

A document MUST NOT intentionally list the same dependency in both sections.

---

## 12. Cross-References

Cross-references SHOULD use the canonical project filename.

References SHOULD be updated when an approved filename changes.

Documentation SHOULD NOT maintain multiple aliases for the same project document unless explicitly required.

When a referenced document cannot be confirmed to exist, the reference SHOULD be treated as unresolved rather than silently invented.

---

## 13. Documentation Consistency

Documentation MUST remain internally consistent.

Consistency checks SHOULD consider:

- terminology;
- filenames;
- document numbering;
- section references;
- architectural responsibilities;
- methodology terminology;
- lifecycle status;
- cross-references.

A documentation change SHOULD be checked for references that may have become stale.

Consistency does not require every document to repeat the same definitions.

It requires documents to agree about the meaning of shared concepts.

---

## 14. Terminology

Project terminology SHOULD remain stable.

Established terms SHOULD be used consistently, including:

- Knowledge Graph;
- Competency Model;
- Memory Model;
- Decision Engine;
- Agent Pipeline;
- State Machine;
- Learning Unit;
- Competency State;
- Learning Debt;
- Automation Level;
- Evidence;
- Assessment;
- Competency Evaluation.

A new term SHOULD NOT be introduced when an existing approved term already describes the concept.

If a new term is necessary, its relationship to existing terminology SHOULD be made explicit.

---

## 15. Documentation Accuracy

Documentation MUST distinguish between verified information and assumptions.

When information is unavailable:

- the uncertainty SHOULD be stated;
- the document SHOULD avoid invented details;
- the appropriate source SHOULD be consulted;
- unresolved discrepancies SHOULD be recorded when material.

Repository state SHOULD be verified before making repository-specific claims.

A documentation artifact MUST NOT claim that an implementation, directory, ADR, or capability exists without sufficient evidence.

---

## 16. Documentation Updates

Documentation SHOULD be updated when a development change creates or modifies durable project knowledge.

Examples include changes to:

- accepted behavior;
- development conventions;
- interfaces;
- dependencies;
- architectural decisions;
- methodology;
- integration assumptions.

The update SHOULD occur as part of the same change when practical.

Documentation MUST NOT be intentionally left inconsistent with an accepted project decision.

---

## 17. Documentation and Change Management

Documentation changes are subject to the Change Management methodology.

A documentation correction that does not alter an accepted decision MAY follow a lightweight process.

A documentation change that changes the meaning of an accepted architectural decision MUST follow the applicable architectural decision process.

Documentation MUST NOT be used to introduce an architectural change without the required approval.

---

## 18. Documentation and Architecture

Architecture documentation defines approved architectural decisions.

Development documentation MAY explain how approved architecture is applied.

Development documentation MUST NOT silently redefine architecture.

When implementation reveals a conflict with architecture documentation:

1. the discrepancy MUST be identified;
2. the authoritative source MUST be determined;
3. the conflict MUST NOT be resolved through undocumented assumption;
4. an ADR MUST be used when an architectural decision must change.

---

## 19. Documentation and Educational Methodology

Development documentation MAY describe how approved educational methodology is implemented.

It MUST NOT silently change educational semantics.

For example, implementation documentation MUST NOT redefine:

- Competency State;
- Learning Debt;
- Automation Level;
- evidence requirements;
- assessment responsibilities.

When an implementation issue suggests that the educational methodology itself should change, the issue SHOULD be classified and handled through the appropriate methodology process.

---

## 20. Documentation and Code

Code and documentation have complementary responsibilities.

Code SHOULD remain the authoritative representation of implementation behavior where the behavior is directly encoded there.

Documentation SHOULD explain information that cannot be adequately inferred from the implementation alone, such as:

- intent;
- constraints;
- architectural context;
- usage;
- important assumptions;
- development conventions.

Documentation SHOULD NOT duplicate large portions of implementation merely to describe what the code already expresses clearly.

---

## 21. Documentation and Tests

Tests MAY serve as executable evidence of intended behavior.

Documentation SHOULD describe important behavior that users or contributors need to understand.

Tests SHOULD verify behavior rather than become the sole documentation of project intent.

Where a behavior is critical, documentation and tests SHOULD remain mutually consistent.

A passing test MUST NOT automatically prove that documentation is correct.

---

## 22. Documentation Review

Documentation SHOULD receive review appropriate to its significance.

Review MAY consider:

- factual correctness;
- scope;
- terminology;
- consistency;
- cross-references;
- architectural compliance;
- methodology compliance;
- maintainability.

High-impact documentation SHOULD receive stronger review than minor editorial corrections.

Documentation review MUST NOT silently approve an architectural change that requires ADR approval.

---

## 23. Documentation Versioning

Document version and document lifecycle status are separate concepts.

A version such as:

```text id="s7l1du"
Version: 0.1 Draft
```

MUST NOT by itself determine whether the underlying project decision is accepted.

Likewise, acceptance MUST NOT automatically require a version-number change unless the project's document-versioning convention requires it.

Versioning SHOULD be changed deliberately and consistently across the relevant document set.

---

## 24. Documentation Lifecycle

A project document MAY progress through states such as:

```text id="j2pxe0"
Draft
   ↓
Reviewed
   ↓
Accepted
   ↓
Superseded
```

The exact lifecycle depends on document type.

A document SHOULD clearly indicate when it has been superseded or replaced.

Superseded documentation SHOULD remain available when historical traceability is important.

A superseded document MUST NOT be treated as the current source of truth.

---

## 25. Documentation Duplication

The project SHOULD minimize semantic duplication.

Before adding substantial content to a document, the author SHOULD determine whether the information already exists in:

- an authoritative document;
- an ADR;
- a methodology document;
- technical documentation.

If it does, the preferred approach is normally:

```text id="5a5y7d"
Reference
    rather than
Duplicate
```

Minor contextual repetition MAY be acceptable when necessary for readability.

Complete duplication of authoritative content SHOULD be avoided.

---

## 26. Documentation Refactoring

Documentation MAY be reorganized when doing so improves:

- clarity;
- maintainability;
- consistency;
- discoverability.

Documentation refactoring MUST preserve meaning unless a semantic change is explicitly intended.

A restructuring SHOULD NOT silently:

- change architectural decisions;
- change methodology;
- remove required constraints;
- alter the interpretation of an accepted ADR.

Semantic changes MUST be managed as changes rather than disguised as editorial refactoring.

---

## 27. AI-Assisted Documentation

AI MAY assist with:

- drafting;
- editing;
- consistency checks;
- cross-reference discovery;
- terminology checks;
- document restructuring.

AI-generated documentation MUST be verified against authoritative project sources.

The author SHOULD specifically check AI-generated content for:

- invented facts;
- invented files;
- invented decisions;
- incorrect references;
- duplicated concepts;
- altered terminology;
- accidental architectural changes.

AI assistance MUST NOT be treated as evidence of factual correctness.

---

## 28. Documentation and Repository Verification

Repository-specific documentation SHOULD be based on verified repository state.

When repository verification is unavailable or incomplete:

- claims about repository contents MUST be qualified;
- missing artifacts MUST NOT be invented;
- discrepancies SHOULD be recorded as Observations;
- implementation SHOULD NOT be based on unverified repository assumptions when they materially affect the change.

This principle applies especially to:

- ADR directories;
- filenames;
- configuration;
- implementation components;
- test suites;
- generated artifacts.

---

## 29. Documentation Maintenance

Documentation SHOULD be maintained continuously rather than accumulated as a final project activity.

Maintenance SHOULD include:

- stale reference detection;
- terminology consistency;
- obsolete-content removal;
- cross-reference verification;
- alignment with accepted decisions.

Documentation maintenance SHOULD remain proportional to project activity.

A document SHOULD NOT be changed merely to create the appearance of activity.

---

## 30. Documentation Completion

A documentation change MAY be considered complete when:

- the intended information is accurately represented;
- the correct document owns the information;
- terminology is consistent;
- required references are valid;
- relevant architectural and methodological constraints are preserved;
- appropriate review is complete;
- no unnecessary duplication has been introduced.

Documentation completion does not imply acceptance of an architectural decision unless the appropriate decision process has separately accepted it.

---

## 31. Documentation Workflow

The general documentation workflow is:

```text id="1ay5ca"
Documentation Need
        ↓
Identify Authoritative Source
        ↓
Determine Document Ownership
        ↓
Define Scope
        ↓
Draft / Modify
        ↓
Consistency Check
        ↓
Review
        ↓
Update References
        ↓
Complete
```

The workflow MAY be shortened for minor editorial corrections.

Material documentation changes SHOULD follow the full process.

---

## 32. Documentation Quality Model

High-quality project documentation SHOULD be:

```text id="5uec2m"
Accurate
   +
Authoritative
   +
Consistent
   +
Traceable
   +
Maintainable
   +
Proportionate
```

Documentation quality is not measured by document quantity.

The project SHOULD prefer a small number of clear authoritative documents over a large collection of overlapping descriptions.

---

## 33. Summary

The Documentation Methodology establishes documentation as a controlled part of ALH development.

The central principle is:

> Project documentation MUST preserve reliable, authoritative, and maintainable project knowledge without silently changing accepted decisions or duplicating existing sources of truth.

Documentation SHOULD evolve together with development while preserving:

- architectural boundaries;
- educational methodology;
- development responsibility boundaries;
- decision traceability;
- factual accuracy.
