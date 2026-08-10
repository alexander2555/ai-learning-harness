# Development Lifecycle

Version: 0.1 Draft

Parent Documents

- 00-Development-Methodology.md

Related Documents

- 00-Vision.md
- 02-Core-Principles.md
- 00-Learning-Model.md
- 10-Superpowers-Integration.md
- ADR-001-Separation-of-Application-and-Learning-Infrastructure.md

---

# 1. Purpose

This document defines the software-development lifecycle used for the learner's real software project within the AI Learning Harness (ALH) learning environment.

The lifecycle provides a disciplined structure for transforming an engineering need into a verified engineering outcome.

It defines:

- lifecycle activities;
- the purpose of each activity;
- relationships between activities;
- expected engineering inputs and outputs;
- iteration and feedback loops;
- conditional activity applicability;
- lifecycle completion principles;
- boundaries between lifecycle structure and educational behavior.

The lifecycle MUST support professional software-development practice while remaining adaptable to project context and proportional engineering needs.

This document MUST NOT define:

- a runtime state machine;
- physical agent execution;
- prompt sequencing;
- educational progression;
- competency evaluation;
- detailed rigor levels;
- detailed testing or quality policies;
- Harness implementation.

---

# 2. Lifecycle Objective

The lifecycle exists to ensure that software-development work proceeds from sufficient understanding toward an appropriately verified engineering outcome.

Conceptually:

```text
Engineering Need
        ↓
Understand
        ↓
Define
        ↓
Design where necessary
        ↓
Implement
        ↓
Verify
        ↓
Review
        ↓
Deliver where applicable
        ↓
Engineering Outcome
```

The lifecycle SHOULD reduce engineering failure caused by:

- premature implementation;
- misunderstood requirements;
- unexamined assumptions;
- inappropriate design;
- insufficient verification;
- missing review;
- ignored security concerns;
- undocumented significant decisions;
- unsafe delivery.

The lifecycle MUST NOT introduce process ceremony without corresponding engineering value.

---

# 3. Lifecycle Model

The canonical Stage 3 lifecycle consists of the following engineering activities:

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

Security and documentation are cross-cutting responsibilities.

They MAY apply within multiple lifecycle activities rather than existing solely as terminal phases.

The canonical sequence expresses the primary direction of engineering refinement.

It MUST NOT be interpreted as requiring:

- strict linear execution;
- exactly one execution of each activity;
- equal depth for every activity;
- a dedicated artifact for every activity;
- a physical workflow transition;
- a separate AI agent for every activity.

A development task MAY revisit earlier activities when justified by engineering evidence.

---

# 4. Lifecycle Activity Model

Each lifecycle activity is characterized by:

- **Purpose** — why the activity exists;
- **Typical Inputs** — information commonly needed to perform it;
- **Expected Outcomes** — engineering understanding or results it SHOULD establish;
- **Iteration Triggers** — findings that MAY require another activity to be revisited.

These characteristics describe engineering semantics.

They MUST NOT be interpreted as mandatory runtime schemas or storage structures.

The exact inputs, artifacts, and rigor required for a task are proportional and are refined by subsequent Stage 3 documents.

---

# 5. Discovery

## 5.1 Purpose

Discovery establishes sufficient understanding of the engineering problem before detailed solution work begins.

It answers, proportionally:

> What problem are we trying to solve, why does it matter, and what is currently uncertain?

Discovery SHOULD identify ambiguity early enough to prevent implementation based on unsupported assumptions.

Discovery MUST NOT become open-ended analysis when the engineering problem is already sufficiently understood.

---

## 5.2 Typical Inputs

Discovery MAY use:

- project goals;
- feature requests;
- defect reports;
- user needs;
- observed system behavior;
- existing source code;
- existing architecture;
- operational information;
- technical constraints;
- stakeholder information;
- prior engineering decisions.

Inputs MAY be incomplete.

Identifying important missing information is itself a valid Discovery outcome.

---

## 5.3 Expected Outcomes

Discovery SHOULD establish, where applicable:

- the problem being addressed;
- relevant project context;
- affected system areas;
- known constraints;
- important unknowns;
- significant assumptions;
- initial risk indicators;
- whether further requirements clarification is necessary;
- whether architecture or design work is likely to be significant.

Discovery does not require every uncertainty to be eliminated.

It SHOULD reduce uncertainty sufficiently to support the next appropriate engineering activity.

---

## 5.4 Iteration Triggers

Discovery MAY be revisited when:

- implementation exposes previously unknown behavior;
- requirements prove incomplete;
- architecture analysis reveals missing context;
- verification contradicts assumptions;
- external constraints change;
- security analysis exposes previously unidentified risk.

---

# 6. Requirements

## 6.1 Purpose

Requirements translate the understood engineering need into sufficiently clear expectations for the software change.

Requirements answer, proportionally:

> What must the resulting software do, preserve, constrain, or demonstrate?

Requirements SHOULD establish enough clarity to guide design, implementation, and verification.

---

## 6.2 Typical Inputs

Requirements MAY use:

- Discovery outcomes;
- product expectations;
- existing behavior;
- project constraints;
- user needs;
- technical constraints;
- security requirements;
- operational requirements;
- compatibility requirements;
- applicable existing specifications.

---

## 6.3 Expected Outcomes

Requirements MAY include:

- functional requirements;
- non-functional requirements;
- acceptance criteria;
- constraints;
- assumptions;
- edge cases;
- compatibility expectations;
- security expectations;
- operational expectations;
- explicitly excluded behavior.

The required depth MUST be proportional to the development task.

A small change MAY require only concise acceptance conditions.

A complex or high-risk change MAY require substantially more explicit requirements.

---

## 6.4 Requirements Quality

Requirements SHOULD be sufficiently:

- understandable;
- relevant;
- testable or otherwise verifiable where appropriate;
- internally consistent;
- connected to the engineering need.

Requirements MUST NOT claim certainty where material uncertainty remains.

Important unresolved uncertainty SHOULD remain explicit.

---

## 6.5 Iteration Triggers

Requirements MAY be revisited when:

- architecture analysis identifies an inconsistency;
- implementation reveals ambiguity;
- verification cannot establish expected behavior;
- security analysis introduces necessary constraints;
- project context changes;
- an assumption is invalidated.

---

# 7. Architecture and Design

## 7.1 Purpose

Architecture and Design determine how the software should satisfy applicable requirements when implementation requires meaningful structural or technical decisions.

They answer, proportionally:

> What solution structure is appropriate, and why?

Architecture and Design MUST remain proportional.

Not every change requires formal architectural work.

---

## 7.2 Applicability

Explicit Architecture or Design activity SHOULD become more significant when a change:

- introduces or modifies system boundaries;
- introduces a subsystem or major component;
- changes important interfaces;
- changes persistent data structures;
- affects trust boundaries;
- introduces significant dependencies;
- has substantial operational impact;
- creates difficult-to-reverse decisions;
- presents meaningful technical alternatives;
- carries significant uncertainty or risk.

For a localized implementation with an established solution pattern, architecture activity MAY be minimal or unnecessary.

---

## 7.3 Typical Inputs

Architecture and Design MAY use:

- requirements;
- current architecture;
- existing source code;
- interfaces;
- data models;
- constraints;
- quality attributes;
- security considerations;
- operational considerations;
- existing architectural decisions.

---

## 7.4 Expected Outcomes

Architecture and Design SHOULD establish applicable decisions concerning:

- system boundaries;
- component responsibilities;
- interfaces;
- data flow;
- dependencies;
- state ownership;
- failure handling;
- security implications;
- operational implications;
- important trade-offs.

Significant decisions SHOULD preserve enough rationale to remain reviewable.

Architecture activity MUST NOT duplicate accepted Stage 1 ALH architecture when the subject is the learner's project.

---

## 7.5 Iteration Triggers

Architecture or Design MAY cause:

```text
Architecture / Design
        ↓
Requirements Refinement
```

when requirements are contradictory, incomplete, infeasible, or unnecessarily constraining.

Architecture or Design MAY itself be revisited when:

- implementation exposes an invalid assumption;
- testing reveals structural problems;
- security review identifies unacceptable risk;
- integration exposes interface problems;
- operational constraints invalidate the selected design.

---

# 8. Implementation

## 8.1 Purpose

Implementation realizes the applicable requirements and design decisions in the software product.

Implementation answers:

> What concrete software change satisfies the current engineering intent?

Implementation MUST remain connected to the engineering context established by applicable preceding activities.

---

## 8.2 Typical Inputs

Implementation MAY use:

- requirements;
- acceptance criteria;
- architecture or design decisions;
- existing source code;
- project conventions;
- interfaces;
- tests;
- relevant documentation;
- applicable security constraints.

---

## 8.3 Expected Outcomes

Implementation SHOULD produce:

- the required software behavior;
- appropriate code changes;
- applicable configuration changes;
- applicable data or schema changes;
- tests or verification support where appropriate;
- necessary documentation changes where applicable.

Implementation SHOULD minimize unrelated change.

Unnecessary complexity SHOULD NOT be introduced merely to demonstrate engineering sophistication.

---

## 8.4 Implementation Discipline

Implementation SHOULD preserve:

- correctness;
- readability;
- maintainability;
- consistency with applicable project conventions;
- architecture alignment where applicable;
- appropriate error handling;
- security expectations;
- testability.

Code generation or successful compilation alone MUST NOT establish engineering completion.

---

## 8.5 Iteration Triggers

Implementation MAY reveal the need to revisit:

```text
Implementation
    ↓
Requirements
```

when expected behavior is ambiguous;

```text
Implementation
    ↓
Architecture / Design
```

when the chosen structure proves unsuitable;

or:

```text
Implementation
    ↓
Discovery
```

when previously unknown system behavior materially changes the problem.

Such iteration SHOULD be driven by an engineering finding rather than by arbitrary workflow repetition.

---

# 9. Testing and Verification

## 9.1 Purpose

Testing and Verification establish evidence that the software change satisfies applicable engineering expectations and has not introduced unacceptable behavior.

They answer:

> What evidence supports the claim that this change works as intended?

Testing is one form of verification.

Verification MAY require multiple forms of evidence.

---

## 9.2 Typical Inputs

Testing and Verification MAY use:

- requirements;
- acceptance criteria;
- implementation;
- architecture or design decisions;
- existing test suites;
- expected system behavior;
- security expectations;
- integration expectations;
- operational expectations.

---

## 9.3 Verification Forms

Applicable verification MAY include:

- unit tests;
- integration tests;
- system tests;
- regression tests;
- static analysis;
- build verification;
- manual verification;
- interface verification;
- migration verification;
- security testing;
- operational checks.

The appropriate combination depends on the engineering context.

Detailed verification expectations are defined by later Stage 3 documents.

---

## 9.4 Expected Outcomes

Testing and Verification SHOULD establish:

- what was verified;
- how it was verified;
- the resulting evidence;
- any known limitations;
- unresolved failures or uncertainty.

A passing test suite MUST NOT automatically establish that all applicable requirements are satisfied.

Verification sufficiency depends on what the tests and other evidence actually demonstrate.

---

## 9.5 Failed Verification

Failed verification is engineering evidence.

It SHOULD normally produce one of the following:

```text
Failed Verification
        ↓
Implementation Correction
```

```text
Failed Verification
        ↓
Design Reconsideration
```

```text
Failed Verification
        ↓
Requirements Clarification
```

```text
Failed Verification
        ↓
Discovery of New Problem
```

A failed verification result MUST NOT be bypassed merely to preserve forward lifecycle movement.

---

# 10. Review

## 10.1 Purpose

Review evaluates the engineering change from a perspective distinct from its initial production.

It answers:

> Is the change appropriate, understandable, sufficiently verified, and ready for its next engineering step?

Review SHOULD provide fresh evaluation rather than merely restating implementation intent.

---

## 10.2 Review Scope

Review MAY consider:

- requirements coverage;
- correctness;
- architecture alignment;
- design quality;
- maintainability;
- readability;
- unnecessary complexity;
- test sufficiency;
- failure handling;
- security;
- compatibility;
- documentation;
- operational impact.

Review depth MUST be proportional to the change.

---

## 10.3 Expected Outcomes

Review SHOULD result in one or more of:

- confirmation that applicable engineering expectations are satisfied;
- required corrections;
- identified risks;
- questions requiring clarification;
- recommendations;
- identification of missing verification.

Review findings SHOULD distinguish blocking issues from non-blocking improvements where that distinction is meaningful.

---

## 10.4 Review Feedback Loops

Review MAY return work to any relevant earlier activity.

Examples include:

```text
Review Finding
    ↓
Implementation Correction
```

```text
Review Finding
    ↓
Additional Verification
```

```text
Review Finding
    ↓
Architecture Reconsideration
```

```text
Review Finding
    ↓
Requirements Clarification
```

Review MUST NOT be treated solely as a terminal approval ceremony.

---

# 11. Delivery and Deployment

## 11.1 Purpose

Delivery or Deployment makes an engineering outcome available in its intended environment when the project requires such a step.

It answers:

> How does the verified change safely become usable in its intended context?

Not every development task requires deployment.

For some projects, delivery MAY consist of a completed local artifact, package, build, or other appropriate result.

---

## 11.2 Typical Inputs

Delivery or Deployment MAY use:

- reviewed implementation;
- verification results;
- build artifacts;
- configuration;
- environment information;
- migration requirements;
- operational documentation;
- release requirements.

---

## 11.3 Applicable Concerns

Depending on project context, Delivery or Deployment MAY include:

- build;
- packaging;
- release preparation;
- configuration;
- environment validation;
- data migration;
- deployment;
- rollback planning;
- observability;
- health checks;
- post-deployment verification.

These concerns MUST be proportional to the project and deployment risk.

---

## 11.4 Expected Outcomes

Delivery or Deployment SHOULD establish, where applicable:

- successful artifact creation;
- successful release or deployment;
- correct configuration;
- successful migration;
- expected runtime behavior;
- post-deployment verification;
- known operational limitations.

A deployment action completing successfully MUST NOT by itself establish that the software behaves correctly in production.

Applicable post-deployment verification SHOULD be performed when operational risk justifies it.

---

## 11.5 Deployment Feedback

Deployment MAY reveal issues that require:

```text
Deployment
    ↓
Implementation Correction
```

```text
Deployment
    ↓
Configuration Correction
```

```text
Deployment
    ↓
Architecture Reconsideration
```

or, where necessary:

```text
Deployment Failure
    ↓
Rollback
```

Operational findings MAY therefore initiate a new lifecycle iteration.

---

# 12. Security Across the Lifecycle

Security is a cross-cutting engineering responsibility.

Security SHOULD be considered wherever an activity creates or changes security-relevant behavior.

Conceptually:

```text
Discovery
    ├── Security Context
Requirements
    ├── Security Requirements
Architecture / Design
    ├── Trust Boundaries / Threat Considerations
Implementation
    ├── Secure Implementation
Testing / Verification
    ├── Security Verification
Review
    ├── Security Review
Delivery / Deployment
    └── Secure Configuration / Operational Verification
```

The lifecycle MUST NOT assume that security can always be deferred to a final Security Review.

A dedicated security review MAY be required when justified by risk.

Detailed security rigor belongs to subsequent Stage 3 documents.

---

# 13. Documentation Across the Lifecycle

Documentation is also a cross-cutting responsibility.

Documentation SHOULD be created or updated when an engineering activity produces knowledge that has continuing value.

Examples MAY include:

- clarified requirements;
- significant architecture decisions;
- public interfaces;
- operational procedures;
- configuration requirements;
- deployment instructions;
- significant limitations.

Documentation SHOULD be produced close enough to the relevant engineering activity to preserve accurate context.

The lifecycle MUST NOT require a standalone documentation phase when documentation is better maintained as part of the activities that create the knowledge.

---

# 14. Lifecycle Feedback Model

The lifecycle permits backward and repeated movement when justified.

A representative model is:

```text
Discovery
    ↓
Requirements
    ↕
Architecture / Design
    ↕
Implementation
    ↕
Testing / Verification
    ↕
Review
    ↓
Delivery / Deployment
```

This diagram is illustrative rather than exhaustive.

Any activity MAY expose information requiring another applicable activity to be revisited.

Feedback SHOULD satisfy three conditions:

1. a relevant engineering finding exists;
2. the affected earlier assumption, decision, or result can be identified;
3. revisiting the activity can reasonably improve the engineering outcome.

Feedback loops SHOULD NOT exist merely because a process template requires another cycle.

---

# 15. Lifecycle Entry Points

Not all engineering work MUST begin with a formal Discovery activity.

A task MAY enter the lifecycle at the earliest activity for which sufficient upstream understanding already exists.

Direct entry into a later lifecycle activity does not mean that required upstream
engineering understanding may be absent.

In particular, entry at Implementation means that sufficient applicable design
understanding already exists through the current project architecture, an
established implementation pattern, or prior engineering reasoning.

This preserves the Stage 1 Architecture First constraint while allowing
architecture and design work to remain proportional.

Therefore:

```text
No New Architecture Activity Required
        ≠
No Design Understanding Required
```

For example:

```text
Well-Understood Local Defect
        ↓
Implementation
        ↓
Verification
        ↓
Review
```

or:

```text
Clearly Specified Feature
        ↓
Requirements Confirmation
        ↓
Design
        ↓
Implementation
        ↓
Verification
```

or:

```text
New High-Uncertainty Capability
        ↓
Discovery
        ↓
Requirements
        ↓
Architecture / Design
        ↓
...
```

Skipping an explicit activity is acceptable only when its necessary engineering outcome already exists or is not applicable.

Activity omission MUST NOT mean omission of necessary engineering understanding.

---

# 16. Lifecycle Exit

A task exits active development when its applicable engineering obligations are satisfied.

Lifecycle exit SHOULD require that:

- the engineering need has been addressed;
- applicable requirements are satisfied;
- applicable verification is complete;
- blocking review findings are resolved;
- applicable security obligations are satisfied;
- required engineering knowledge has been preserved;
- delivery or deployment obligations are satisfied where applicable;
- no known unresolved issue invalidates the completion claim.

The exact completion criteria are refined by the Stage 3 Engineering Definition of Done.

Lifecycle exit MUST NOT depend on competency mastery or educational completion.

Educational activity MAY continue after engineering completion.

Likewise, engineering work MAY remain incomplete even when valuable learning has occurred.

---

# 17. Activity Applicability

Lifecycle activities MUST NOT be classified as universally mandatory at identical depth.

Instead, activity applicability depends on engineering context.

An activity MAY be:

## Required

The activity is necessary to establish an engineering outcome required for the task.

## Conditional

The activity becomes necessary when a defined engineering condition applies.

## Proportional

The activity applies, but its depth varies substantially with task context.

## Not Applicable

The activity does not provide meaningful engineering value for the task.

The detailed decision model for determining rigor and applicability is defined by:

- 02-Development-Rigor-and-Planning.md

This document defines lifecycle semantics, not the complete rigor-selection algorithm.

---

# 18. Lifecycle and Learner Participation

Every applicable lifecycle activity MAY create a learner participation opportunity.

Examples include:

```text
Discovery
    →
Problem Analysis
```

```text
Requirements
    →
Requirement Reasoning
```

```text
Architecture / Design
    →
Trade-off Reasoning
```

```text
Implementation
    →
Practical Application
```

```text
Testing / Verification
    →
Verification Reasoning
```

```text
Review
    →
Critical Evaluation
```

```text
Delivery / Deployment
    →
Operational Reasoning
```

Stage 3 identifies these as real engineering activities.

It MUST NOT prescribe the learner's Automation Level, teaching method, assessment method, or competency result.

Those remain governed by Stage 2.

---

# 19. Lifecycle and Engineering Evidence

Lifecycle activities SHOULD produce engineering evidence appropriate to their purpose.

The relationship is:

```text
Engineering Activity
        ↓
Engineering Outcome
        ↓
Applicable Evidence
```

Evidence MAY be transient or persistent.

Persistence SHOULD depend on continuing engineering value.

The lifecycle MUST NOT require every discussion, intermediate thought, or tool interaction to become a permanent artifact.

The engineering artifact and traceability model is defined in:

- 04-Engineering-Artifacts-and-Traceability.md

Educational evidence remains governed by Stage 2.

---

# 20. Lifecycle and Logical Pipeline Responsibilities

Stage 1 logical Pipeline responsibilities MAY be relevant to lifecycle activities.

Illustratively:

```text
Discovery / Requirements
        →
Project Management Responsibilities

Architecture / Design
        →
Architecture Responsibilities

Implementation
        →
Development Responsibilities

Testing / Review
        →
Development / Review Responsibilities

Security-Relevant Activities
        →
Security Audit Responsibilities
```

These mappings indicate responsibility relevance only.

They MUST NOT define:

- physical agents;
- execution order;
- model calls;
- prompt boundaries;
- runtime orchestration.

One physical execution mechanism MAY fulfill multiple logical responsibilities.

One logical responsibility MAY participate in multiple lifecycle activities.

Physical realization remains outside Stage 3.

---

# 21. Lifecycle and Superpowers

Applicable lifecycle activities MAY use verified Superpowers capabilities.

The lifecycle MUST be defined independently of undocumented Superpowers implementation details.

Conceptually:

```text
Lifecycle Activity
        ↓
Engineering Need
        ↓
Applicable Verified Capability
        ↓
Superpowers, where appropriate
```

Stage 3 MUST NOT invent a Superpowers capability in order to complete the lifecycle model.

If a specific lifecycle rule materially depends on a Superpowers capability, that capability MUST be verified before the dependency becomes normative.

Detailed Superpowers mapping is defined later in Stage 3 after the relevant capabilities have been verified.

---

# 22. Lifecycle Is Not a State Machine

The Development Lifecycle MUST NOT be interpreted as the Stage 1 educational State Machine.

The two models have different responsibilities.

```text
Development Lifecycle
        =
Structure of Real Software-Development Activity
```

```text
Educational State Machine
        =
Conceptual Lifecycle of an Educational Interaction
```

A single development activity MAY contain multiple educational interactions.

An educational interaction MAY occur during any applicable development activity.

No one-to-one state mapping is required.

The Development Lifecycle also MUST NOT be treated as a runtime orchestration state machine for AI agents.

---

# 23. Lifecycle Anti-Patterns

The following patterns are inconsistent with this lifecycle.

## Implementation Before Understanding

Beginning substantial implementation while material problem ambiguity remains unresolved.

## Ceremony-Driven Development

Producing requirements, architecture, tests, review, or documentation only because a template requires them, without corresponding engineering value.

## Artificial Linearity

Refusing to revisit earlier decisions when new engineering evidence invalidates them.

## Verification as Formality

Running tests without determining whether they provide evidence for the applicable requirements and risks.

## Review as Approval Ceremony

Treating review as automatic sign-off rather than independent engineering evaluation.

## Security at the End

Ignoring security throughout development and attempting to compensate with a final ceremonial check.

## Documentation Afterthought

Deferring significant knowledge preservation until engineering context has been lost.

## AI Completion Substitution

Treating AI-generated implementation as equivalent to engineering completion.

## Educational Completion Substitution

Treating learner progress as proof that the software change is engineering-complete.

## Workflow-State Conflation

Interpreting lifecycle activities as mandatory runtime states or physical agent boundaries.

---

# 24. Relationship to Development Rigor

This lifecycle intentionally does not prescribe identical execution depth for all tasks.

The next Stage 3 document MUST define how lifecycle rigor scales with factors such as:

- task complexity;
- uncertainty;
- architectural impact;
- security impact;
- operational impact;
- production risk;
- project maturity.

That model MUST determine how the lifecycle is applied without redefining the lifecycle activities themselves.

The normative dependency is:

```text
00-Development-Methodology.md
        ↓
01-Development-Lifecycle.md
        ↓
02-Development-Rigor-and-Planning.md
```

---

# 25. Explicit Non-Goals

This document does not define:

- educational interaction sequencing;
- competency evaluation;
- Automation Level;
- Learning Debt;
- Educational Definition of Done;
- physical AI agents;
- prompts;
- model invocation topology;
- runtime state transitions;
- workflow-engine implementation;
- persistence mechanisms;
- specific Superpowers commands or workflows;
- ALH implementation technology;
- development methodology for ALH itself.

---

# 26. Compliance

A development lifecycle application is compliant with this document only if it:

1. begins from sufficient engineering understanding;
2. applies relevant lifecycle activities;
3. allows activity depth to remain proportional;
4. permits evidence-driven iteration;
5. preserves applicable requirements and constraints;
6. connects implementation to engineering intent;
7. produces appropriate verification evidence;
8. includes meaningful review where required;
9. treats security and documentation as cross-cutting concerns where applicable;
10. distinguishes engineering completion from educational completion;
11. does not interpret lifecycle activities as physical agent boundaries;
12. does not interpret the lifecycle as the educational State Machine;
13. does not assume undocumented Superpowers capabilities;
14. preserves the responsibility boundaries defined by 00-Development-Methodology.md.

---
