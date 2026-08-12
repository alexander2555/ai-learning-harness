# Development Methodology

Status: Accepted
Version: 1.0

Parent Documents

- 00-Vision.md
- 02-Core-Principles.md
- 00-Learning-Model.md

Related Documents

- 10-Superpowers-Integration.md
- ADR-001-Separation-of-Application-and-Learning-Infrastructure.md

---

# 1. Purpose

This document defines the Development Methodology of AI Learning Harness (ALH).

The Development Methodology describes how the learner's real software-development work SHOULD be organized within the ALH learning environment.

Its purpose is to provide a disciplined engineering framework in which:

- the learner develops a real software product;
- engineering work follows appropriate professional practices;
- development activities create meaningful opportunities for learning and evidence;
- ALH provides adaptive educational intelligence without taking ownership of the development workflow;
- Superpowers MAY provide applicable workflow capabilities without becoming responsible for ALH educational semantics.

The Development Methodology defines development principles and responsibility boundaries.

It MUST NOT define:

- how ALH itself is developed or maintained;
- educational methodology already defined by Stage 2;
- prompt architecture;
- physical AI agents;
- model invocation topology;
- runtime orchestration;
- persistence mechanisms;
- Harness implementation.

---

# 2. Scope

The Development Methodology covers the development of the learner's real software product within the ALH learning environment.

It establishes methodological foundations for:

- development lifecycle organization;
- requirements and problem clarification;
- architecture and design reasoning;
- implementation;
- testing and verification;
- engineering review;
- security;
- documentation;
- deployment where applicable;
- lifecycle iteration;
- proportional engineering rigor;
- engineering artifacts;
- engineering completion;
- interaction between development activity and educational support;
- applicable use of Superpowers capabilities.

The Development Methodology does not redefine:

- ALH architecture;
- Educational Methodology;
- Knowledge Graph semantics;
- Competency Model semantics;
- Memory Model semantics;
- Decision Engine authority;
- Automation Level;
- Assessment;
- Competency Evaluation;
- Educational Definition of Done.

Detailed development rules are defined by subsequent Stage 3 documents.

---

# 3. Development Methodology Objective

The objective of the Development Methodology is to make real software development both professionally meaningful and educationally usable.

ALH MUST preserve two parallel outcomes:

```text
Development Activity
        ↓
Engineering Outcome
```

and:

```text
Development Activity
        ↓
Learning Opportunity
        ↓
Educational Interaction
        ↓
Potential Evidence
```

The development process MUST NOT be distorted into artificial exercises merely to satisfy educational structure.

At the same time, AI-assisted development MUST NOT reduce the learner to a passive observer of generated engineering work.

The methodology SHOULD create conditions in which the learner can progressively develop the ability to:

- understand engineering problems;
- reason about alternatives;
- make engineering decisions;
- implement solutions;
- verify correctness;
- evaluate quality;
- identify risks;
- explain trade-offs;
- independently complete increasingly complex engineering work.

---

# 4. Core Development Principles

## 4.1 Real-Project Development

The learner's real software project MUST be the primary development environment.

Development activities SHOULD originate from genuine project needs such as:

- new capabilities;
- defects;
- technical constraints;
- architectural needs;
- quality improvements;
- security requirements;
- operational requirements.

Artificial development work SHOULD NOT replace meaningful project work when the real project provides an appropriate learning opportunity.

Educational activities MAY supplement real development when justified by Stage 2 methodology.

---

## 4.2 Engineering and Learning as Parallel Concerns

Engineering responsibility and educational responsibility MUST remain distinct.

A development activity MAY simultaneously produce:

- a software result;
- engineering evidence;
- learning opportunities;
- observations relevant to educational assessment.

These outputs MUST NOT be treated as equivalent.

In particular:

```text
Engineering Success
        ≠
Competency Mastery
```

and:

```text
Learning Success
        ≠
Engineering Completion
```

Stage 3 governs engineering methodology.

Stage 2 governs learning, assessment, competency development, and educational completion.

Neither methodology MUST silently absorb the authority of the other.

---

## 4.3 Disciplined but Adaptive Development

Software development within ALH MUST follow disciplined engineering practices.

Discipline MUST NOT imply a rigid universal sequence.

Development MAY require iteration when new information becomes available.

Examples include:

```text
Testing
    ↓
Implementation Correction
```

```text
Architecture Analysis
    ↓
Requirements Refinement
```

```text
Security Analysis
    ↓
Design Correction
```

The development lifecycle MUST therefore support feedback loops.

A lifecycle representation MUST NOT be interpreted as a runtime state machine or mandatory linear execution topology.

---

## 4.4 Proportionality

Engineering rigor MUST be proportional to the work being performed.

The methodology SHOULD consider factors including:

- change size;
- technical complexity;
- uncertainty;
- architectural impact;
- security impact;
- operational impact;
- production risk;
- project maturity.

A small, localized defect fix SHOULD NOT require the same process depth or artifact set as a new subsystem or security-sensitive architectural change.

Proportionality MUST NOT be used to bypass engineering practices necessary for correctness, safety, maintainability, or verification.

Detailed proportionality rules are defined by subsequent Stage 3 documents.

---

## 4.5 Evidence-Oriented Engineering

Engineering claims SHOULD be supported by appropriate evidence.

Depending on the activity, engineering evidence MAY include:

- clarified requirements;
- acceptance criteria;
- design rationale;
- implementation;
- automated tests;
- integration results;
- manual verification;
- review findings;
- security findings;
- operational verification;
- deployment results.

Engineering evidence demonstrates properties of the software or development decision.

It MUST NOT automatically be interpreted as competency evidence.

Stage 2 remains responsible for determining whether an engineering activity provides valid educational evidence.

---

## 4.6 Progressive Learner Participation

Development activities MUST remain compatible with progressive learner independence defined by Stage 2.

The same engineering activity MAY be performed with different levels of educational assistance.

For example, architecture work MAY involve:

```text
Guided Reasoning
        ↓
Shared Decision-Making
        ↓
Independent Design
        ↓
Review
```

Stage 3 defines what engineering work is required.

Stage 2 determines the appropriate educational assistance and learner-independence expectations.

Automation Level MUST NOT be reinterpreted as:

- AI execution authority;
- workflow automation level;
- runtime autonomy;
- permission for additional agent actions.

---

## 4.7 Explainable Engineering

Significant engineering decisions SHOULD be understandable and reviewable.

Where appropriate, decisions SHOULD preserve:

- relevant context;
- the engineering problem;
- important constraints;
- considered alternatives;
- selected approach;
- reasoning;
- trade-offs;
- consequences.

The required depth SHOULD be proportional to the significance and reversibility of the decision.

Explainability MUST NOT require unnecessary documentation for trivial or self-evident changes.

---

# 5. Development Lifecycle Model

The ALH Development Methodology uses the following high-level lifecycle as its starting model:

```text
Discovery
    ↓
Requirements
    ↓
Architecture / Design
    ↓
Implementation
    ↓
Testing / Verification
    ↓
Review
    ↓
Delivery / Deployment
```

Security and documentation are cross-cutting responsibilities and MAY apply throughout the lifecycle rather than only as final phases.

The lifecycle describes categories of engineering activity.

It does not require every development task to execute every activity with equal depth.

Activities MAY be:

- mandatory;
- conditional;
- proportional;
- not applicable.

The applicability and required rigor of lifecycle activities MUST be determined from engineering context rather than ceremony.

The detailed lifecycle model is defined in:

- 01-Development-Lifecycle.md

---

# 6. Lifecycle Adaptation and Iteration

Development SHOULD proceed from sufficient understanding rather than from an assumption that all information is known in advance.

New information MAY require earlier decisions to be revisited.

Iteration SHOULD occur when supported by engineering evidence such as:

- discovered requirements;
- failed verification;
- architectural constraints;
- security findings;
- integration problems;
- operational constraints;
- invalidated assumptions.

Iteration MUST NOT be treated as process failure.

Uncontrolled repetition without a new engineering reason SHOULD NOT be treated as productive iteration.

The methodology SHOULD preserve traceability between the reason for iteration and the engineering activity being reconsidered.

---

# 7. Engineering Responsibility Boundary

Stage 3 owns the methodology for producing an appropriate engineering outcome.

This includes defining expectations for:

- understanding the engineering problem;
- selecting appropriate development activities;
- applying proportional rigor;
- producing and reviewing implementation;
- verifying applicable requirements;
- addressing relevant quality concerns;
- identifying engineering completion conditions.

Stage 3 MAY identify development activities that can generate educational opportunities or observations.

Stage 3 MUST NOT:

- evaluate learner competency;
- select educational progression;
- determine mastery;
- assign authoritative learner state;
- redefine Learning Debt;
- redefine Automation Level;
- determine educational completion.

These responsibilities remain governed by Stage 1 architecture and Stage 2 methodology.

---

# 8. Educational Responsibility Boundary

ALH MAY intervene educationally within any applicable development activity.

Examples include:

```text
Requirements
    +
Educational Support
    →
Requirements Reasoning
```

```text
Architecture
    +
Educational Support
    →
Trade-off Analysis
```

```text
Implementation
    +
Educational Support
    →
Guided or Independent Application
```

```text
Testing
    +
Educational Support
    →
Verification Reasoning
```

```text
Review
    +
Educational Support
    →
Reflection and Understanding Checks
```

Stage 3 defines where meaningful engineering activity exists.

It does not prescribe the teaching technique used at those points.

Socratic guidance, assessment, competency evaluation, learning debt management, and educational progression remain governed by Stage 2.

---

# 9. Engineering Outcome and Learning Outcome

Every development activity MUST distinguish between engineering completion and educational progression.

An engineering outcome concerns the software project.

Examples include:

- a requirement has been clarified;
- a design decision has been made;
- an implementation satisfies applicable requirements;
- verification has passed;
- a defect has been corrected;
- a release has been successfully deployed.

A learning outcome concerns the learner.

Examples include:

- improved understanding;
- demonstrated reasoning;
- demonstrated application;
- increased independence;
- repeated successful application.

A valid engineering outcome MAY exist without sufficient evidence for competency progression.

A valid learning outcome MAY exist even when additional engineering work remains necessary.

The two outcomes MAY inform each other but MUST NOT be collapsed into a single completion state.

---

# 10. Development Context

Development methodology operates on the current context of the learner's real project.

Relevant context MAY include:

- project requirements;
- acceptance criteria;
- architecture;
- source code;
- tests;
- documentation;
- interfaces;
- dependencies;
- known constraints;
- engineering decisions;
- task history;
- deployment environment;
- operational requirements.

Only context relevant to the current engineering activity SHOULD be required.

Stage 3 defines the methodological need for development context.

It MUST NOT define the physical mechanism by which prompts, agents, tools, or runtime components obtain that context.

Those mechanisms belong to later stages.

---

# 11. Superpowers Boundary

Superpowers is an immutable external workflow and capability dependency.

Stage 3 defines methodological engineering requirements, lifecycle semantics,
quality expectations, and completion conditions for the learner's real software
development.

It does NOT assume ownership of concrete workflow execution, reusable development
processes, commands, templates, or technical workflow capabilities owned by
Superpowers under Stage 1 architecture.

The distinction is:

```text
Stage 3
    =
Required Engineering Semantics and Outcomes

Superpowers
    =
Applicable Reusable Workflow / Capability Execution
```

Stage 3 MUST NOT become a workflow alternative to Superpowers.

Stage 3 MAY rely on verified Superpowers capabilities where they appropriately support development activities.

The relationship is:

```text
Development Methodology
        ↓
Required Engineering Activity
        ↓
Applicable Capability
        ↓
Superpowers, where appropriate
```

Stage 3 MUST NOT:

- modify Superpowers;
- duplicate Superpowers responsibilities without justification;
- assume undocumented Superpowers behavior;
- make ALH educational semantics dependent on Superpowers implementation details;
- transfer educational authority to Superpowers.

Where a Stage 3 rule depends materially on a specific Superpowers capability, that capability MUST be verified before the dependency is treated as normative.

Absence of a verified Superpowers capability MUST NOT be resolved by invention.

---

# 12. Relationship to Logical Pipeline Responsibilities

Stage 1 defines logical Pipeline responsibilities.

Development activities MAY involve applicable engineering-oriented responsibilities such as:

- Project Manager;
- Architect;
- Developer;
- Reviewer;
- Security Auditor.

Educational activities MAY involve applicable educational responsibilities defined by Stage 1.

Stage 3 MAY identify relationships between development activities and these logical responsibilities.

Such relationships describe responsibility relevance only.

They MUST NOT imply:

- physical agents;
- separate model invocations;
- prompt files;
- runtime processes;
- fixed execution sequences.

Physical realization belongs to later stages.

---

# 13. Engineering Evidence

Development activity SHOULD produce sufficient evidence to support engineering decisions and completion claims.

Applicable evidence depends on the activity.

For example:

```text
Requirements Work
    →
Clarified Constraints / Acceptance Criteria
```

```text
Architecture Work
    →
Design Rationale / Interface Decisions
```

```text
Implementation
    →
Working Software
```

```text
Testing
    →
Verification Results
```

```text
Review
    →
Quality Findings / Approval or Required Corrections
```

```text
Deployment
    →
Operational Verification
```

Engineering evidence SHOULD be retained when it has continuing value for development, verification, operation, or future reasoning.

Stage 3 MUST NOT require preservation of every transient development interaction.

Educational evidence semantics remain defined by Stage 2.

---

# 14. Engineering Completion Principle

A software change MUST NOT be considered engineering-complete merely because code has been generated or implementation has stopped.

Engineering completion requires satisfaction of the applicable engineering obligations for the change.

Conceptually:

```text
Engineering Need
        ↓
Sufficient Understanding
        ↓
Implementation
        ↓
Applicable Verification
        ↓
Applicable Review
        ↓
Applicable Security / Documentation / Delivery Obligations
        ↓
Engineering Done
```

The exact obligations MUST be proportional to the engineering context.

A detailed Engineering Definition of Done MUST be derived only after Stage 3 has defined:

- lifecycle requirements;
- proportionality;
- quality and verification expectations;
- engineering artifacts;
- integration boundaries.

Engineering Definition of Done MUST remain distinct from the Stage 2 Educational Definition of Done.

---

# 15. Security as a Cross-Cutting Responsibility

Security MUST be considered proportionally throughout development.

Security reasoning MAY be required during:

- requirements;
- architecture and design;
- implementation;
- testing;
- review;
- deployment.

Security MUST NOT be reduced to a ceremonial final checkpoint when earlier engineering decisions materially affect security.

Dedicated security review SHOULD be required where risk justifies it.

The depth of security activity SHOULD reflect:

- attack surface;
- data sensitivity;
- trust boundaries;
- privilege;
- external exposure;
- dependency risk;
- consequences of failure.

Detailed security expectations belong to subsequent Stage 3 methodology.

---

# 16. Documentation Principle

Documentation is part of implementation as required by the accepted Stage 1
Documentation by Default principle.

Proportionality governs the form, depth, and persistence of documentation.
It MUST NOT be interpreted as permission to omit documentation obligations
required by Stage 1 or by the learner's project context.

Documentation SHOULD preserve engineering knowledge that would otherwise be
difficult, costly, or unsafe to reconstruct.

Documentation SHOULD avoid duplicating authoritative information that is more
accurately represented elsewhere.

Applicable documentation MAY include:

- requirements;
- significant design decisions;
- interfaces;
- constraints;
- setup information;
- operational guidance;
- deployment procedures;
- significant trade-offs.

Documentation MUST NOT be created solely to satisfy process ceremony.

Documentation SHOULD NOT duplicate authoritative information already represented more effectively elsewhere.

Documentation depth MUST be proportional to the project and engineering change.

---

# 17. Methodology Constraints

The Development Methodology MUST:

- preserve accepted Stage 1 architecture;
- remain compatible with Stage 2 Educational Methodology;
- organize development around real software engineering;
- preserve engineering quality;
- support iterative development;
- support proportional rigor;
- preserve explainability;
- support progressive learner participation;
- distinguish engineering evidence from educational evidence;
- distinguish engineering completion from educational completion;
- preserve Superpowers immutability;
- preserve application and learning-infrastructure separation.

The Development Methodology MUST NOT:

- silently introduce new architectural authority;
- reinterpret logical responsibilities as physical agents;
- reinterpret the educational State Machine as a software-development lifecycle;
- reinterpret Automation Level as AI autonomy;
- treat successful tests as automatic proof of competency;
- require unnecessary process artifacts;
- assume undocumented external capabilities.

---

# 18. Explicit Non-Goals

Stage 3 does not define:

## ALH Development Governance

Stage 3 does not define how ALH itself is implemented, maintained, released, or governed.

## Prompt Architecture

Stage 3 does not define system prompts, role prompts, instruction files, prompt composition, or context-injection mechanisms.

## Physical Agent Architecture

Stage 3 does not determine how many agents, models, processes, or invocations exist.

## Runtime Orchestration

Stage 3 does not define execution topology, routing, tool invocation, or runtime state management.

## Educational Methodology

Stage 3 does not redefine teaching, assessment, competency evaluation, Learning Debt, Automation Level, or Educational Definition of Done.

## Persistence

Stage 3 does not define storage technologies or learner-memory persistence mechanisms.

## Superpowers Internals

Stage 3 does not modify, redesign, or invent behavior for Superpowers.

## Harness Implementation

Stage 3 does not materialize methodology as executable Harness behavior.

---

# 19. Relationship to Subsequent Stage 3 Documents

This document defines the root methodology and responsibility boundaries for Stage 3.

Subsequent documents refine it in dependency order:

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
        ↓
05-Development-Learning-Integration.md
        ↓
06-Superpowers-Integration-and-Engineering-Done.md
```

Subsequent Stage 3 documents MUST remain consistent with this document.

They SHOULD reference upstream definitions rather than duplicate them.

Where a subsequent methodology decision requires changing an accepted Stage 1 architectural responsibility or boundary, that proposal MUST be classified as a Candidate ADR rather than silently incorporated into Stage 3.

---

# 20. Proposal Classification

Stage 3 uses the following classification for findings that require explicit visibility.

## Observation

A factual or analytical finding that does not change accepted architecture.

An Observation MAY influence methodology without requiring an ADR.

## Candidate ADR

A proposed change to an accepted architectural responsibility, boundary, or architectural decision.

A Candidate ADR MUST NOT be treated as accepted architecture until the applicable ADR process is completed.

## Future Evolution

A potentially useful improvement that is intentionally outside the current Stage 3 scope.

Future Evolution items MUST NOT silently become current methodology requirements.

Ordinary development-methodology decisions that remain within accepted architecture do not require an ADR.

---

# 21. Stage 3 Compliance

A development-methodology rule is compliant with this document only if it:

1. concerns development of the learner's real software product;
2. preserves accepted Stage 1 architectural boundaries;
3. preserves Stage 2 educational authority;
4. supports disciplined engineering practice;
5. applies rigor proportionally;
6. permits justified lifecycle iteration;
7. preserves meaningful learner participation;
8. distinguishes engineering outcomes from learning outcomes;
9. distinguishes engineering evidence from educational evidence;
10. preserves Superpowers as an immutable external dependency;
11. does not assume undocumented Superpowers behavior;
12. does not prescribe Stage 4 prompt architecture;
13. does not prescribe Stage 5 Harness implementation.

Any proposed rule that violates an accepted architectural boundary MUST be surfaced as a Candidate ADR rather than incorporated as an ordinary Stage 3 methodology decision.

---
