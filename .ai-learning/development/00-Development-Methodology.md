# Development Methodology

Version: 0.1 Draft

Parent Documents

- 00-Vision.md
- 02-Core-Principles.md
- 00-Learning-Model.md

Related Documents

- 12-ADR.md
- ADR-001-Separation-of-Application-and-Learning-Infrastructure.md

---

## 1. Purpose

This document defines the foundational methodology for developing and maintaining the AI Learning Harness (ALH).

The Development Methodology establishes the principles and boundaries that govern development activities throughout the project.

It defines how development work MUST relate to:

- the approved architecture;
- the approved educational methodology;
- architectural decisions;
- development documentation;
- engineering quality;
- educational integrity;
- validation.

This document defines development methodology.

It MUST NOT define:

- system architecture;
- educational methodology;
- prompt architecture;
- Harness implementation;
- final system validation procedures.

Those responsibilities belong to their respective project stages and documents.

---

## 2. Scope

The Development Methodology applies to all development work performed within the ALH project.

This includes:

- development of ALH components;
- changes to ALH documentation;
- changes to development infrastructure;
- tests and validation artifacts created during development;
- integration work;
- maintenance;
- defect correction;
- controlled evolution of the system.

The methodology applies whether development work is performed manually, with AI assistance, or through a combination of human and AI-assisted development.

The methodology governs the development process without prescribing a specific IDE, AI coding agent, programming language, framework, or implementation technology.

---

## 3. Development Objective

The primary development objective is:

> Develop ALH as an educational system while preserving both engineering quality and educational integrity.

Development MUST therefore optimize for more than implementation correctness.

A development change SHOULD be evaluated according to the following principle hierarchy:

```text
Educational Integrity
        ↓
Engineering Quality
        ↓
Explainability
        ↓
Adaptability
        ↓
Automation
```

Development decisions MUST NOT improve automation at the expense of educational integrity or engineering quality.

Automation MAY be used to improve development efficiency when it remains consistent with the established architectural and educational constraints.

---

## 4. Development Methodology Principles

ALH development MUST follow the principles below.

### 4.1 Architecture Compliance

Development MUST remain consistent with the approved Stage 1 architecture.

Implementation details MAY evolve without changing the architecture.

Architectural responsibilities MUST NOT be silently reassigned through implementation.

A development change that affects an architectural decision MUST follow the established ADR governance.

---

### 4.2 Educational Methodology Compliance

Development MUST preserve the approved Stage 2 educational methodology.

Implementation MUST NOT silently change:

- competency semantics;
- Learning Unit semantics;
- evidence semantics;
- assessment responsibilities;
- Competency Evaluation responsibilities;
- Learning Debt semantics;
- Automation Level semantics;
- Socratic Method principles;
- Definition of Done semantics.

If implementation requirements expose a conflict with the educational methodology, the conflict MUST be identified explicitly rather than resolved implicitly in code.

---

### 4.3 Separation of Responsibilities

Development MUST preserve established responsibility boundaries.

In particular:

```text
Knowledge Graph
    = Educational knowledge

Competency Model
    = Expected learner capabilities

Memory Model
    = Learner-specific educational state

Decision Engine
    = Educational decision-making

Agent Pipeline
    = Educational behavior coordination

State Machine
    = Educational interaction lifecycle
```

Development MUST NOT merge these responsibilities merely for implementation convenience.

A shared implementation mechanism MAY exist where appropriate, but conceptual responsibility MUST remain explicit.

---

### 4.4 Implementation Independence of Conceptual Models

Conceptual architecture and methodology MUST NOT be treated as direct implementation specifications.

For example:

- a conceptual Knowledge Graph does not mandate a particular database;
- a conceptual State Machine does not mandate a particular runtime framework;
- the Agent Pipeline does not require physically separate agents;
- a Competency Model does not prescribe a particular data structure;
- a Memory Model does not prescribe a particular persistence technology.

Implementation decisions SHOULD satisfy the conceptual requirements while avoiding unnecessary coupling to conceptual representations.

---

### 4.5 Evidence-Oriented Development

Development SHOULD produce sufficient evidence that a change behaves as intended.

Evidence MAY include:

- tests;
- documentation;
- review findings;
- executable examples;
- validation results;
- traceability information;
- observed behavior.

The required evidence SHOULD be proportional to:

- the importance of the change;
- architectural impact;
- educational impact;
- implementation risk;
- consequences of incorrect behavior.

Development MUST NOT rely solely on an implementation appearing plausible.

---

### 4.6 Explainability

Important development decisions SHOULD remain explainable.

A developer or AI coding agent SHOULD be able to identify:

- what was changed;
- why it was changed;
- which requirement or decision motivated the change;
- which architectural or methodological constraints apply;
- how the resulting behavior was verified.

Implementation complexity SHOULD NOT obscure important educational or architectural decisions.

---

### 4.7 Documentation by Default

Development work that creates durable project knowledge SHOULD be reflected in the appropriate project documentation.

Documentation SHOULD be updated when a change affects:

- architecture;
- methodology;
- development conventions;
- public interfaces;
- important behavior;
- operational assumptions;
- accepted decisions.

Documentation MUST NOT be created merely to duplicate information already maintained authoritatively elsewhere.

---

### 4.8 Proportionality

Development discipline MUST be proportional to the significance of the change.

A small local implementation correction SHOULD NOT require the same process as a change affecting:

- architectural boundaries;
- educational behavior;
- persistent learner state;
- major integrations;
- security;
- long-term project conventions.

However, proportionality MUST NOT be used to bypass required architectural governance.

---

### 4.9 Explicit Change Boundaries

Development work SHOULD have an explicit scope.

A change SHOULD identify:

- the intended outcome;
- the affected area;
- relevant constraints;
- required evidence;
- completion criteria.

Unrelated improvements SHOULD NOT be silently included in the same change.

Scope expansion SHOULD be made explicit when discovered during development.

---

### 4.10 Reproducibility

Development SHOULD produce results that can be reproduced by another qualified contributor.

Where practical, development artifacts SHOULD make clear:

- required inputs;
- relevant configuration;
- expected behavior;
- verification procedure;
- environmental assumptions.

A development result that depends on undocumented local state SHOULD be treated as insufficiently reproducible.

---

## 5. Development Against Frozen Foundations

Stage 3 operates on top of two established foundations:

```text
Stage 1
Architecture
        +
Stage 2
Educational Methodology
        ↓
Stage 3
Development Methodology
```

Development MUST treat Stage 1 architecture as frozen unless an architectural change is introduced through an accepted ADR.

Development MUST treat Stage 2 methodology as the current educational baseline.

Stage 3 MAY define how these foundations are applied during development.

Stage 3 MUST NOT redefine them.

---

## 6. Architectural Change Discipline

Not every development change is an architectural change.

A change SHOULD be considered architectural when it affects established:

- system boundaries;
- responsibility ownership;
- architectural principles;
- major dependencies;
- persistent structural relationships;
- integration boundaries;
- other decisions governed by ADRs.

When such a change is identified:

1. the architectural impact MUST be explicitly recognized;
2. the relevant decision MUST be documented;
3. the established ADR process MUST be followed;
4. the proposed decision MUST NOT be treated as accepted architecture before approval.

Implementation MUST NOT be used as a mechanism for silently introducing architectural decisions.

---

## 7. Educational Change Discipline

Development MUST distinguish between:

- implementing the approved educational methodology;
- discovering an implementation problem;
- proposing a methodological improvement.

An implementation problem MUST NOT automatically justify changing the methodology.

A proposed methodological improvement that does not alter architecture MAY be handled through the appropriate methodology revision process.

A proposal that changes an architectural responsibility or boundary MUST be classified as a Candidate ADR and MUST follow architectural governance.

---

## 8. Human and AI-Assisted Development

ALH MAY be developed with AI coding agents.

AI assistance MUST NOT change the project's responsibility model.

AI-generated or AI-assisted development output MUST be treated as development work requiring appropriate verification.

AI assistance MUST NOT be considered evidence of correctness by itself.

The developer remains responsible for ensuring that the resulting change is consistent with:

- project requirements;
- approved architecture;
- approved methodology;
- relevant decisions;
- required verification.

AI-generated content MUST NOT be accepted solely because it is plausible, internally coherent, or syntactically valid.

---

## 9. Verification of AI-Assisted Changes

AI-assisted development SHOULD follow an evidence-oriented verification cycle:

```text
Requirement
    ↓
Implementation
    ↓
Verification
    ↓
Review
    ↓
Documentation / Traceability
```

The exact verification activities depend on the type and risk of the change.

AI assistance MAY be used for:

- implementation;
- test generation;
- documentation drafting;
- analysis;
- refactoring;
- review assistance.

AI assistance MUST NOT remove required human or automated verification.

---

## 10. Development Knowledge and Project Memory

Development work MAY generate durable project knowledge.

Durable knowledge SHOULD be placed in the appropriate authoritative artifact rather than retained only in conversational context.

Examples include:

- architectural decisions → ADRs;
- approved methodology → methodology documents;
- development conventions → development documentation;
- implementation behavior → appropriate technical documentation;
- verification evidence → relevant tests or validation artifacts.

The project MUST avoid creating multiple competing sources of truth.

---

## 11. Source of Truth

Each important project decision or rule SHOULD have one authoritative location.

When information is duplicated for convenience, the duplicated representation MUST NOT silently become authoritative.

Development documentation SHOULD reference existing authoritative documents rather than reproduce their complete contents.

When two project documents appear to conflict:

1. the authoritative source MUST be identified;
2. the discrepancy MUST be reported;
3. the conflict MUST NOT be resolved through assumption;
4. the affected implementation SHOULD remain unchanged until the applicable decision is clear, when the conflict materially affects the work.

---

## 12. Development Classification of Findings

Development findings and proposals MUST be classified using the established project terminology.

### Observation

An Observation records a factual condition, discrepancy, limitation, or finding that does not itself change an approved decision.

An Observation MAY result in follow-up work.

### Candidate ADR

A Candidate ADR is a proposal that would change an architectural decision.

A Candidate ADR MUST NOT be treated as accepted architecture.

Implementation depending on the proposed architectural change MUST NOT proceed as though the decision were already accepted.

### Future Evolution

Future Evolution identifies a potentially useful improvement that is intentionally outside the current scope.

Future Evolution MUST NOT be allowed to expand the current development scope without explicit approval.

---

## 13. Development Scope Control

Development SHOULD distinguish between:

```text
Required Now
        ↓
Required for the Current Change
        ↓
Useful but Deferred
        ↓
Future Evolution
```

Developers SHOULD avoid solving unrelated problems merely because they become visible during implementation.

New findings SHOULD be recorded using the appropriate classification.

Scope control is particularly important when AI-assisted development is used, because generated solutions MAY introduce unrelated refactoring or speculative abstractions.

---

## 14. Repository Responsibility

The repository structure represents an architectural responsibility boundary.

ALH learning infrastructure MUST remain within:

```text
.ai-learning/
```

Application implementation MUST remain outside `.ai-learning/`.

Development MUST preserve this separation.

The existence of a development task inside the learning infrastructure does not authorize moving application implementation into `.ai-learning/`.

Likewise, an application implementation task MUST NOT silently create ALH infrastructure outside its defined boundary.

---

## 15. Superpowers Boundary

Superpowers is an external reusable capability.

Development MAY integrate with Superpowers where required by the approved architecture.

Development MUST NOT modify Superpowers as part of ALH implementation.

ALH-specific educational behavior MUST remain owned by ALH.

Changes required to Superpowers itself MUST be treated as external to ALH's ownership boundary.

---

## 16. Development Quality

Development quality is not limited to successful execution.

A development change SHOULD be considered technically sound when it demonstrates appropriate evidence for:

- correctness;
- maintainability;
- consistency;
- appropriate test coverage;
- architectural compliance;
- educational-methodology compliance;
- explainability.

The required level of evidence depends on the change.

Development MUST NOT introduce unnecessary complexity solely to satisfy a formal process.

Likewise, simplicity MUST NOT be used to justify insufficient verification.

---

## 17. Security and Safety

Security MUST remain part of normal development responsibility.

Development SHOULD consider security implications when changes affect:

- inputs;
- outputs;
- persistence;
- authentication;
- authorization;
- external integrations;
- execution of generated content;
- sensitive learner information;
- infrastructure.

Security-sensitive changes SHOULD receive proportionally stronger verification and review.

Development convenience MUST NOT override established security requirements.

---

## 18. Development Documentation Lifecycle

Development documentation SHOULD evolve with the project.

A document MAY move through states such as:

```text
Draft
   ↓
Reviewed
   ↓
Accepted
   ↓
Superseded
```

The exact lifecycle MAY differ by document type.

Document lifecycle status MUST remain distinguishable from document version.

A document labelled with a version such as:

```text
Version: 0.1 Draft
```

MUST NOT automatically be interpreted as an unaccepted project decision if the project process separately records its acceptance.

Likewise, acceptance MUST NOT be inferred solely from a version number.

---

## 19. Relationship to Development Workflow

This document defines principles and boundaries.

It does not define the detailed sequence of development activities.

The detailed development sequence SHOULD be defined by:

```text
01-Development-Workflow.md
```

That document SHOULD operationalize the principles established here without redefining them.

---

## 20. Relationship to Change Management

Development changes require controlled scope and appropriate decision handling.

Detailed change classification, proposal handling, approval, and implementation rules SHOULD be defined by:

```text
02-Change-Management.md
```

Change Management MUST remain consistent with the ADR governance established by Stage 1.

---

## 21. Relationship to Testing

Testing is a primary source of development evidence.

This document establishes the principle that development SHOULD be evidence-oriented.

Detailed testing levels, strategies, and responsibilities SHOULD be defined by:

```text
04-Testing-Methodology.md
```

Testing methodology MUST remain consistent with the approved architecture and educational methodology.

---

## 22. Relationship to Review

Review provides an independent quality check of development work.

This document establishes the requirement for appropriate verification and explainability.

Detailed review responsibilities and procedures SHOULD be defined by:

```text
05-Review-Methodology.md
```

Review MUST NOT silently become a mechanism for redesigning approved architecture or methodology.

---

## 23. Relationship to Validation

Development and final validation are distinct activities.

Development verification determines whether a change is sufficiently supported by evidence for development purposes.

Stage 6 Validation determines whether the resulting ALH system satisfies the broader project requirements.

Development MUST NOT claim final system validation merely because a local change has passed its development verification.

Preparation for Stage 6 SHOULD be defined separately in:

```text
09-Development-Validation-Preparation.md
```

---

## 24. Methodology Compliance

A development activity SHOULD be considered methodology-compliant when it:

- respects the approved architecture;
- respects the approved educational methodology;
- follows applicable development processes;
- produces proportionate evidence;
- preserves responsibility boundaries;
- records relevant durable decisions;
- avoids undocumented architectural changes;
- maintains appropriate scope.

Methodology compliance does not require every development task to produce the same artifacts.

The required process SHOULD remain proportional to the significance of the change.

---

## 25. Development Completion Principle

Development work is complete only when the intended change has sufficient evidence of correctness and has satisfied the applicable project constraints.

Completion MUST be distinguished from:

- architectural acceptance;
- educational mastery;
- final system validation.

The detailed criteria for development completion SHOULD be defined in:

```text
08-Development-Definition-of-Done.md
```

---

## 26. Anti-Hallucination and Uncertainty Handling

Development decisions MUST NOT be based on invented project information.

When required information is unavailable or ambiguous:

- the missing information MUST be identified;
- assumptions MUST be made explicit;
- unverified claims MUST NOT be presented as facts;
- authoritative project sources SHOULD be consulted;
- clarification SHOULD be requested when the uncertainty materially affects the development decision.

AI-assisted development MUST follow the same rule.

A plausible generated implementation MUST NOT be treated as evidence that the underlying requirement or architectural assumption is correct.

---

## 27. Methodology Evolution

This Development Methodology MAY evolve as practical development experience reveals necessary improvements.

Methodology evolution MUST preserve the boundaries established by Stage 1 and Stage 2.

A proposed change SHOULD first be classified as:

- Observation;
- Candidate ADR;
- Future Evolution.

A change that affects architecture MUST follow ADR governance.

A change that only refines development practice MAY be incorporated through the appropriate methodology revision process.

---

## 28. Summary

The Development Methodology establishes the following development model:

```text
Approved Architecture
        +
Approved Educational Methodology
        ↓
Controlled Development
        ↓
Evidence
        ↓
Review
        ↓
Documented / Traceable Change
        ↓
Development Completion
        ↓
Future Validation
```

The central development principle is:

> ALH MUST be developed as an educational system without compromising engineering quality, architectural integrity, or explainability.

Development methodology defines how this principle is preserved during project evolution.

It does not redefine what ALH is, how learning works, how prompts are structured, how the Harness is implemented, or how final validation is performed.
