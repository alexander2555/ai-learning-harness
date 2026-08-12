# Development Rigor and Planning

Status: Accepted
Version: 1.0

Parent Documents

- 01-Development-Lifecycle.md

Related Documents

- 00-Development-Methodology.md
- 00-Vision.md
- 02-Core-Principles.md
- 00-Learning-Model.md
- 10-Superpowers-Integration.md
- ADR-001-Separation-of-Application-and-Learning-Infrastructure.md

---

# 1. Purpose

This document defines how engineering rigor and development planning scale with the context of the learner's real software-development work within the AI Learning Harness (ALH) learning environment.

It establishes a proportional model for determining:

- how much engineering analysis is appropriate;
- which lifecycle activities are required;
- which lifecycle activities are conditional;
- how deeply applicable activities SHOULD be performed;
- when explicit planning is necessary;
- when lightweight execution is sufficient;
- when additional verification, review, security, or delivery discipline is warranted;
- when new engineering findings require the plan to be revised.

The purpose of rigor is to reduce engineering risk and improve outcome quality.

Rigor MUST NOT be treated as ceremony.

Planning MUST NOT be treated as a fixed document-production requirement.

---

# 2. Rigor Objective

Development rigor exists to match engineering discipline to engineering need.

The guiding relationship is:

```text
Engineering Context
        ↓
Required Confidence
        ↓
Applicable Development Rigor
        ↓
Appropriate Engineering Activities
        ↓
Sufficient Engineering Evidence
```

The methodology SHOULD apply enough rigor to make engineering decisions and completion claims credible.

It SHOULD NOT impose process depth that provides no meaningful additional engineering value.

Too little rigor MAY lead to:

- misunderstood requirements;
- inappropriate design;
- defects;
- regressions;
- security failures;
- operational failures;
- unreviewed assumptions;
- unsupported completion claims.

Excessive rigor MAY lead to:

- unnecessary delay;
- duplicated artifacts;
- process overhead;
- reduced focus on the actual engineering problem;
- artificial complexity.

The methodology MUST avoid both extremes.

---

# 3. Proportionality Principle

Development rigor MUST be proportional to the engineering context.

Proportionality applies to:

- Discovery depth;
- requirements precision;
- design effort;
- implementation planning;
- verification breadth;
- review depth;
- security analysis;
- documentation;
- delivery preparation;
- retained engineering artifacts.

Proportionality MUST NOT mean optional quality.

It means that the form and depth of engineering work SHOULD reflect the actual risks, uncertainties, and consequences of the task.

A localized low-risk change MAY require little explicit planning.

A high-risk or structurally significant change MAY require extensive reasoning, explicit artifacts, multiple verification forms, and deeper review.

---

# 4. Rigor Drivers

Rigor SHOULD be selected using multiple engineering factors rather than change size alone.

The primary rigor drivers are:

- task complexity;
- uncertainty;
- architectural impact;
- security impact;
- operational impact;
- production risk;
- change scope;
- reversibility;
- dependency impact;
- project maturity.

Learner needs MAY influence educational support around the task.

Learner competency MUST NOT reduce engineering rigor required for software quality.

---

# 5. Task Complexity

Task complexity represents the amount and difficulty of engineering reasoning required to produce a correct solution.

Complexity MAY increase when a task involves:

- multiple interacting components;
- non-trivial algorithms;
- concurrency;
- distributed behavior;
- complex state transitions;
- data consistency;
- difficult integration;
- multiple interfaces;
- substantial error-handling requirements;
- domain-specific constraints.

A task that changes many lines of code is not necessarily complex.

A small code change MAY have high conceptual complexity.

Rigor SHOULD reflect the complexity of the engineering problem, not superficial implementation size.

---

# 6. Uncertainty

Uncertainty represents the degree to which important engineering facts are unknown, ambiguous, or based on assumptions.

Uncertainty MAY concern:

- user needs;
- expected behavior;
- existing system behavior;
- technical feasibility;
- external dependencies;
- performance;
- security;
- operational behavior;
- compatibility;
- implementation approach.

High uncertainty SHOULD increase emphasis on:

- Discovery;
- explicit assumptions;
- requirements clarification;
- exploratory investigation;
- design alternatives;
- early verification.

Uncertainty SHOULD be reduced before irreversible or expensive implementation decisions are made.

Not all uncertainty must be eliminated.

Material residual uncertainty MUST remain explicit.

---

# 7. Architectural Impact

Architectural impact represents the extent to which a change affects significant structural properties of the learner's software project.

Architectural impact MAY increase when a change:

- creates a new subsystem;
- changes component boundaries;
- changes responsibility ownership;
- introduces a new external dependency;
- modifies important interfaces;
- changes data ownership;
- changes persistence strategy;
- changes trust boundaries;
- changes communication patterns;
- introduces difficult-to-reverse structural decisions.

High architectural impact SHOULD increase rigor for:

- requirements;
- architecture and design;
- trade-off analysis;
- review;
- documentation;
- regression verification.

Architectural impact within the learner's project MUST NOT be confused with changes to accepted ALH Stage 1 architecture.

If Stage 3 itself requires changing accepted ALH architecture, that proposal MUST be classified separately as a Candidate ADR.

---

# 8. Security Impact

Security impact represents the degree to which a task can alter security properties or consequences.

Security impact MAY increase when a change affects:

- authentication;
- authorization;
- privilege;
- secrets;
- personal or sensitive data;
- trust boundaries;
- externally reachable interfaces;
- input validation;
- cryptography;
- dependency exposure;
- code execution;
- file access;
- network access;
- financial or high-consequence operations.

Higher security impact SHOULD increase rigor throughout the lifecycle.

This MAY include:

- explicit security requirements;
- threat-oriented design reasoning;
- defensive implementation;
- security-specific verification;
- deeper review;
- dedicated security review;
- secure deployment checks.

Security rigor MUST NOT be deferred solely to the end of development.

---

# 9. Operational Impact

Operational impact represents how strongly a change can affect the software in its intended runtime environment.

Operational impact MAY increase when a change affects:

- availability;
- reliability;
- performance;
- resource consumption;
- data migration;
- deployment;
- observability;
- configuration;
- rollback;
- failure recovery;
- production dependencies.

Higher operational impact SHOULD increase attention to:

- failure modes;
- migration safety;
- deployment planning;
- rollback;
- observability;
- post-deployment verification.

A change MAY have low code complexity but high operational impact.

---

# 10. Production Risk

Production risk represents the potential consequence of engineering failure.

Risk SHOULD consider both:

```text
Likelihood of Failure
        ×
Consequence of Failure
```

The methodology does not require a numeric risk calculation.

Qualitative reasoning is sufficient unless the project itself requires more formal analysis.

Higher production risk SHOULD increase confidence requirements before engineering completion.

Confidence MAY require stronger:

- requirements;
- verification;
- review;
- security analysis;
- deployment safeguards.

---

# 11. Change Scope

Change scope represents how broadly the task affects the project.

Scope MAY include:

- number of components affected;
- number of interfaces affected;
- number of users or workflows affected;
- data affected;
- integration surface;
- deployment surface.

Scope alone MUST NOT determine rigor.

It is one input among several.

A broad mechanical change MAY require lower conceptual rigor than a narrow security-sensitive change.

---

# 12. Reversibility

Reversibility represents how easily an engineering decision or change can be safely undone.

Low reversibility SHOULD increase rigor before implementation or deployment.

Examples MAY include:

- destructive data migrations;
- public API changes;
- persistent schema changes;
- externally published contracts;
- irreversible user actions;
- security-boundary changes.

Highly reversible experiments MAY justify lighter upfront design where failure can be detected quickly and corrected safely.

Reversibility MUST NOT justify bypassing essential safety requirements.

---

# 13. Dependency Impact

Dependency impact represents the degree to which the task introduces, removes, upgrades, or materially changes reliance on another component or external system.

Dependency-related rigor SHOULD consider:

- compatibility;
- stability;
- maintenance;
- security;
- licensing where applicable;
- operational behavior;
- failure modes;
- upgrade path;
- replacement cost.

A dependency change MAY justify Architecture / Design activity even when implementation is small.

---

# 14. Project Maturity

Project maturity MAY influence appropriate development rigor.

An early prototype and a mature production system MAY require different engineering treatment for similar changes.

Relevant maturity factors MAY include:

- stability expectations;
- existing test coverage;
- number of users;
- deployment frequency;
- operational criticality;
- established architecture;
- compatibility commitments;
- accumulated technical debt.

Project maturity MAY increase or decrease the formality of engineering work.

It MUST NOT eliminate necessary quality controls.

---

# 15. Rigor Profiles

To support consistent planning without requiring a rigid scoring system, Stage 3 defines four conceptual rigor profiles:

```text
R1 — Lightweight
R2 — Standard
R3 — Elevated
R4 — Critical
```

These profiles describe expected engineering depth.

They MUST NOT be treated as runtime states, learner levels, Automation Levels, or competency levels.

A project MAY use equivalent terminology if the semantic distinctions are preserved.

The profiles SHOULD guide planning.

They MUST NOT replace engineering judgment.

---

# 16. R1 — Lightweight

R1 applies to work with low complexity, low uncertainty, limited impact, and low engineering risk.

Typical examples MAY include:

- a localized low-risk defect;
- a small text or presentation change;
- a straightforward internal refactor with established tests;
- a minor configuration change with limited consequences.

R1 typically emphasizes:

- sufficient local understanding;
- concise requirements or acceptance conditions;
- minimal design activity;
- focused implementation;
- targeted verification;
- lightweight review where appropriate.

Explicit architecture artifacts are normally unnecessary.

A formal development plan MAY be unnecessary.

R1 MUST still preserve correctness and applicable verification.

---

# 17. R2 — Standard

R2 is the default profile for ordinary feature and maintenance work that has meaningful engineering impact but does not present exceptional risk.

Typical examples MAY include:

- a normal feature;
- a moderate defect;
- a non-trivial refactor;
- an established integration change;
- a routine API extension.

R2 typically includes:

- explicit understanding of the task;
- clear requirements or acceptance criteria;
- design reasoning where applicable;
- implementation planning;
- appropriate automated or manual verification;
- engineering review;
- documentation updates where necessary.

R2 SHOULD be treated as the default when available information does not justify either lighter or stronger rigor.

---

# 18. R3 — Elevated

R3 applies when the task has significant complexity, uncertainty, architectural impact, security impact, operational impact, or production risk.

Typical examples MAY include:

- a new subsystem;
- a major integration;
- a significant architecture change within the learner's project;
- authentication or authorization work;
- complex persistence changes;
- significant migration;
- critical performance work;
- substantial deployment changes.

R3 SHOULD include, where applicable:

- explicit Discovery where uncertainty exists;
- explicit requirements;
- meaningful architecture or design reasoning;
- identified risks and assumptions;
- a written implementation plan or equivalent explicit decomposition;
- broader verification;
- independent review;
- security analysis where applicable;
- documentation of significant decisions;
- explicit delivery considerations.

R3 work SHOULD NOT proceed directly to implementation while material engineering uncertainty remains unexamined.

---

# 19. R4 — Critical

R4 applies where engineering failure can produce severe consequences or where the task combines multiple high-impact risk dimensions.

Examples MAY include changes involving:

- high-value or highly sensitive data;
- critical security boundaries;
- destructive or difficult-to-reverse migrations;
- high-availability infrastructure;
- safety-critical behavior;
- severe financial consequence;
- broad externally consumed contracts;
- high-consequence production access.

R4 requires the strongest proportional rigor available to the project.

R4 SHOULD include the strongest applicable treatment of:

- explicit Discovery;
- explicit requirements;
- documented architecture or design;
- risk analysis;
- explicit assumptions;
- implementation decomposition;
- comprehensive verification strategy;
- independent engineering review;
- dedicated security review;
- deployment and rollback planning;
- post-deployment verification;
- preservation of significant engineering evidence.

R4 MUST NOT imply that ALH itself defines domain-specific regulatory compliance.

Where external standards or regulatory obligations apply, those obligations MUST be obtained from authoritative project context rather than invented by Stage 3.

---

# 20. Rigor Profile Selection

Profile selection SHOULD occur before substantial implementation when enough information exists to make a reasonable judgment.

Selection SHOULD consider all relevant rigor drivers.

A simple conceptual model is:

```text
Low Impact + Low Uncertainty
        →
R1

Ordinary Engineering Work
        →
R2

Significant Impact or Uncertainty
        →
R3

Severe Consequence or Combined High Risk
        →
R4
```

This mapping is intentionally qualitative.

The highest relevant risk dimension MAY justify a higher profile even when other dimensions are low.

For example:

```text
Small Code Change
    +
High Security Impact
        →
Elevated or Critical Rigor
```

Rigor MUST NOT be selected solely from implementation effort.

---

# 21. Rigor Escalation

The selected rigor profile MAY change during development.

Rigor SHOULD be escalated when new information reveals:

- greater uncertainty;
- larger architectural impact;
- security concerns;
- unexpected integration complexity;
- operational risk;
- difficult reversibility;
- broader change scope;
- failed assumptions.

Conceptually:

```text
Initial Rigor
        ↓
New Engineering Evidence
        ↓
Risk or Complexity Increased
        ↓
Rigor Escalation
```

Escalation SHOULD cause applicable lifecycle activities to be reconsidered.

For example, a task beginning as R1 MAY require Architecture / Design activity after implementation exposes a broader system boundary problem.

---

# 22. Rigor Reduction

Rigor MAY be reduced when investigation demonstrates that the task is materially simpler or safer than originally believed.

Reduction SHOULD be based on evidence.

For example:

```text
Expected Complex Change
        ↓
Discovery
        ↓
Existing Supported Mechanism Found
        ↓
Reduced Scope and Risk
        ↓
Lower Required Rigor
```

Rigor reduction MUST NOT be used to bypass already identified engineering obligations.

---

# 23. Lifecycle Applicability and Rigor Depth

Lifecycle applicability and rigor depth are separate decisions.

Activity applicability MUST use the categories defined by
`01-Development-Lifecycle.md`:

- Required;
- Conditional;
- Proportional;
- Not Applicable.

After applicability has been determined, the selected Rigor Profile determines
the expected depth of the applicable activity.

Conceptually:

```text
Engineering Context
        ↓
Activity Applicable?
        ↓
Required / Conditional / Proportional / Not Applicable
        ↓
If Applicable
        ↓
R1 / R2 / R3 / R4
        ↓
Required Depth
```

A higher Rigor Profile increases the expected depth of applicable engineering
work and MAY make conditional triggers more likely.

It MUST NOT make an otherwise irrelevant lifecycle activity automatically
mandatory.

For example, R4 does not automatically require a new Architecture artifact when
the task has no meaningful architecture decision, and R1 does not eliminate
verification merely because the task is lightweight.

---

# 24. Mandatory Engineering Outcomes

Regardless of rigor profile, every task MUST establish enough engineering outcome to justify completion.

At minimum:

- the engineering need MUST be understood sufficiently;
- implementation MUST address the intended change;
- applicable correctness MUST be verified;
- known blocking defects MUST NOT be ignored;
- applicable security obligations MUST be satisfied;
- completion MUST be supportable by engineering evidence.

The way these outcomes are established MAY vary significantly by profile.

---

# 25. Conditional Activities

A lifecycle activity MAY become required because of task characteristics rather than profile alone.

Examples:

Architecture / Design SHOULD become explicit when:

- system boundaries change;
- interfaces change materially;
- meaningful technical alternatives exist;
- the decision is difficult to reverse.

Security Review SHOULD become explicit when:

- security impact is significant;
- trust boundaries change;
- sensitive data or privilege is affected;
- project policy requires dedicated security review.

Delivery planning SHOULD become explicit when:

- deployment carries meaningful operational risk;
- migration is required;
- rollback is non-trivial;
- release coordination is necessary.

Conditional activity selection MUST be based on engineering need.

---

# 26. Planning Objective

Planning defines how the current engineering task is expected to proceed.

A plan SHOULD answer, proportionally:

- what problem is being solved;
- what outcomes are required;
- which lifecycle activities apply;
- what significant risks or uncertainties exist;
- what implementation work is expected;
- how correctness will be verified;
- what review is required;
- what delivery obligations exist.

Planning MUST support engineering work.

Engineering work MUST NOT exist merely to satisfy a plan.

---

# 27. Planning Depth

Planning depth SHOULD scale with rigor.

Conceptually:

```text
R1
    →
Mental or concise task plan

R2
    →
Explicit task decomposition where useful

R3
    →
Structured development plan

R4
    →
Detailed plan with risks, verification,
delivery, and recovery considerations
```

A plan MAY be represented in different forms depending on project context.

Stage 3 does not require one universal planning artifact.

---

# 28. Lightweight Planning

For R1 work, planning MAY consist of a concise understanding such as:

- change objective;
- affected area;
- intended implementation;
- verification approach.

A separate persisted plan SHOULD NOT be required when this information is obvious, low-risk, and easily reconstructed.

Lightweight planning MUST NOT mean implementation without understanding.

---

# 29. Standard Planning

For R2 work, planning SHOULD normally identify:

- scope;
- relevant requirements;
- implementation steps;
- affected components;
- verification;
- review expectations.

This MAY be represented in:

- a task description;
- issue;
- checklist;
- development note;
- equivalent project artifact.

The representation SHOULD fit existing project conventions.

---

# 30. Elevated Planning

For R3 work, the plan SHOULD explicitly preserve:

- engineering objective;
- scope;
- important requirements;
- relevant design decisions;
- implementation decomposition;
- assumptions;
- significant risks;
- verification strategy;
- review expectations;
- security considerations where applicable;
- deployment implications where applicable.

The plan SHOULD be reviewable before substantial irreversible implementation begins.

---

# 31. Critical Planning

For R4 work, planning SHOULD additionally address, where applicable:

- failure scenarios;
- migration safety;
- rollback;
- staged delivery;
- observability;
- recovery;
- post-deployment verification;
- contingency conditions;
- explicit unresolved risks.

R4 planning SHOULD provide enough information for independent engineering evaluation.

---

# 32. Planning and Iteration

A development plan is a current engineering hypothesis.

It MUST NOT become immutable when evidence changes.

The relationship is:

```text
Plan
    ↓
Engineering Activity
    ↓
New Evidence
    ↓
Plan Revision, where necessary
```

Plan revision SHOULD occur when:

- scope changes;
- assumptions are invalidated;
- requirements change materially;
- architecture changes;
- implementation reveals new work;
- verification exposes missing coverage;
- security findings require corrective work;
- deployment constraints change.

A revised plan SHOULD preserve current truth rather than historical fiction.

---

# 33. Planning and Discovery

For uncertain work, Discovery MAY precede full planning.

Conceptually:

```text
Initial Engineering Need
        ↓
Discovery
        ↓
Reduced Uncertainty
        ↓
Rigor Selection
        ↓
Development Planning
```

The methodology MUST NOT require detailed implementation planning before the problem is sufficiently understood.

For highly uncertain tasks, an initial plan MAY cover only investigation.

---

# 34. Investigation Tasks

An investigation MAY itself be a valid development activity.

Its engineering outcome MAY be:

- clarified system behavior;
- identified root cause;
- feasibility result;
- reduced uncertainty;
- identified options;
- validated or invalidated assumptions.

An investigation task SHOULD define:

- the question being investigated;
- relevant constraints;
- evidence to gather;
- an appropriate stopping condition.

Investigation SHOULD NOT continue indefinitely without a defined engineering purpose.

---

# 35. Spikes and Experiments

A technical spike or experiment MAY be used when uncertainty cannot be reduced efficiently through analysis alone.

A spike SHOULD have:

- a specific engineering question;
- bounded scope;
- a defined learning objective about the software problem;
- explicit limitations;
- a stopping condition.

Experimental code MUST NOT automatically become production implementation.

If experimental code is retained, it MUST satisfy the applicable production engineering obligations before engineering completion.

---

# 36. Planning and Requirements

Planning MUST remain traceable to applicable requirements or engineering objectives.

Implementation steps SHOULD exist because they contribute to an intended engineering outcome.

The methodology SHOULD avoid plans consisting only of code-edit instructions without connection to the problem being solved.

For example:

```text
Requirement
        ↓
Engineering Change
        ↓
Verification
```

is preferable to:

```text
Edit File A
        ↓
Edit File B
        ↓
Done
```

when the latter provides no explanation of engineering intent.

---

# 37. Planning and Verification

Verification SHOULD be considered during planning rather than only after implementation.

For meaningful tasks, the plan SHOULD answer:

> How will we know this change is correct?

This MAY influence:

- requirements precision;
- design decisions;
- implementation structure;
- testability;
- observability;
- deployment approach.

High-rigor work SHOULD avoid leaving verification strategy undefined until implementation is complete.

---

# 38. Planning and Security

Security considerations SHOULD influence planning when security impact exists.

Planning MAY identify:

- affected trust boundaries;
- sensitive data;
- privilege changes;
- security assumptions;
- security verification;
- dedicated review needs.

Security planning MUST remain proportional.

A low-security-impact task SHOULD NOT require artificial threat modeling ceremony.

---

# 39. Planning and Delivery

Delivery considerations SHOULD enter planning early when deployment constraints can influence design or implementation.

Examples include:

- data migration;
- backwards compatibility;
- staged rollout;
- configuration;
- infrastructure requirements;
- rollback;
- observability.

For low-risk tasks without deployment concerns, delivery planning MAY be minimal or not applicable.

---

# 40. Planning and Engineering Artifacts

Planning MAY produce persistent engineering artifacts.

Persistence SHOULD depend on continuing value.

A plan SHOULD be retained when it materially supports:

- coordination;
- review;
- future reasoning;
- traceability;
- recovery;
- architectural understanding;
- operational safety.

Transient planning MAY be sufficient when the task is simple and low-risk.

Detailed artifact requirements are defined by:

- 04-Engineering-Artifacts-and-Traceability.md

---

# 41. Planning and Learner Participation

Planning is a real engineering activity and MAY provide meaningful learner participation opportunities.

Examples include:

- task decomposition;
- uncertainty identification;
- risk reasoning;
- verification design;
- dependency reasoning;
- implementation sequencing.

Stage 3 defines planning as engineering work.

Stage 2 determines:

- how much guidance the learner receives;
- whether Socratic methods apply;
- whether the activity produces educational evidence;
- how independence is evaluated.

A higher learner Automation Level MUST NOT reduce the engineering planning required by the task.

A lower learner Automation Level MUST NOT justify replacing learner participation with unrestricted AI planning.

---

# 42. Rigor and Educational Adaptation

Engineering rigor and educational adaptation are separate dimensions.

Conceptually:

```text
Engineering Dimension
    =
How much engineering discipline the task requires

Educational Dimension
    =
How much learning support the learner requires
```

Therefore:

```text
High Engineering Rigor
    +
High Learner Independence
```

is possible.

Likewise:

```text
Low Engineering Rigor
    +
High Educational Guidance
```

is also possible.

The two dimensions MUST NOT be collapsed.

---

# 43. Rigor and Logical Pipeline Responsibilities

Higher rigor MAY increase the relevance of additional Stage 1 logical engineering responsibilities.

For example:

```text
Lightweight Change
        →
Development + Applicable Review Responsibilities
```

```text
Architecturally Significant Change
        →
Architecture + Development + Review Responsibilities
```

```text
Security-Sensitive Change
        →
Architecture + Development + Review
        + Security Audit Responsibilities
```

These relationships express logical responsibility needs only.

They MUST NOT define physical agents or invocation topology.

---

# 44. Rigor and Superpowers

Verified Superpowers capabilities MAY support planning and lifecycle activities.

Stage 3 SHOULD use those capabilities where they provide appropriate engineering value.

However:

- rigor profiles MUST NOT depend on invented Superpowers functionality;
- planning semantics MUST remain valid without undocumented capabilities;
- Superpowers MUST NOT determine learner competency;
- Superpowers MUST NOT own Stage 3 methodology.

Detailed capability mapping belongs to:

- 06-Superpowers-Integration-and-Engineering-Done.md

after relevant capabilities have been verified.

---

# 45. Anti-Patterns

The following patterns are inconsistent with this methodology.

## One Process for Every Task

Applying the same development depth to a typo and a major subsystem.

## Size-Only Classification

Selecting rigor only from lines changed, estimated effort, or file count.

## Learner-Based Quality Reduction

Reducing engineering quality requirements because the learner is inexperienced.

## AI-Based Rigor Reduction

Reducing engineering rigor because an AI system can generate implementation quickly.

## Documentation-by-Default

Producing permanent artifacts for every minor task regardless of continuing value.

## Planning Theater

Creating a detailed plan that does not influence engineering decisions.

## Frozen Planning

Continuing to follow a plan after evidence shows it is wrong.

## Risk Blindness

Treating a small implementation as low-rigor despite high security, data, or operational consequences.

## Verification Deferral

Ignoring how correctness will be demonstrated until implementation is finished.

## Profile Mechanization

Treating R1–R4 as an inflexible scoring engine rather than proportional engineering guidance.

---

# 46. Relationship to Engineering Quality

This document defines how much rigor a task requires.

It does not fully define what constitutes sufficient engineering quality or verification.

The next Stage 3 document defines those obligations:

```text
00-Development-Methodology.md
        ↓
01-Development-Lifecycle.md
        ↓
02-Development-Rigor-and-Planning.md
        ↓
03-Engineering-Quality-and-Verification.md
```

`03-Engineering-Quality-and-Verification.md` MUST consume:

- the lifecycle model;
- rigor profiles;
- activity applicability;
- planning expectations;

without redefining them.

---

# 47. Explicit Non-Goals

This document does not define:

- educational competency levels;
- learner Automation Levels;
- assessment;
- Educational Definition of Done;
- physical AI autonomy levels;
- runtime workflow modes;
- model-selection policies;
- prompt architecture;
- physical agents;
- implementation technology;
- fixed project-management methodology;
- mandatory Scrum, Kanban, Waterfall, or other external framework;
- detailed testing policy;
- detailed review policy;
- detailed security policy;
- artifact storage mechanisms;
- undocumented Superpowers capabilities;
- development methodology for ALH itself.

---

# 48. Compliance

Development rigor and planning are compliant with this document only if they:

1. scale with engineering context;
2. consider more than change size;
3. preserve necessary engineering quality;
4. distinguish task rigor from learner competency;
5. distinguish task rigor from AI capability;
6. identify applicable lifecycle activities;
7. support evidence-driven escalation and reduction;
8. define planning depth proportionally;
9. account for uncertainty;
10. account for architecture, security, operational, and production impact where applicable;
11. consider verification before engineering completion;
12. allow plans to change when engineering evidence changes;
13. avoid mandatory artifacts without engineering value;
14. preserve Stage 1 and Stage 2 responsibility boundaries;
15. avoid dependence on undocumented Superpowers behavior.

---
