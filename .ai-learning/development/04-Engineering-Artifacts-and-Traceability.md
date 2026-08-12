# Engineering Artifacts and Traceability

Status: Accepted
Version: 1.0

Parent Documents

- 02-Development-Rigor-and-Planning.md
- 03-Engineering-Quality-and-Verification.md

Related Documents

- 00-Development-Methodology.md
- 01-Development-Lifecycle.md
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

This document defines how engineering artifacts and traceability SHOULD support the learner's real software-development work within the AI Learning Harness (ALH) learning environment.

It establishes:

- what qualifies as an engineering artifact;
- when engineering information SHOULD be persisted;
- how artifact depth scales with development rigor;
- how engineering intent SHOULD remain traceable to implementation and verification;
- how significant engineering decisions SHOULD be preserved;
- how duplication and documentation ceremony SHOULD be avoided;
- how project context SHOULD remain usable for later engineering work;
- how engineering artifacts remain distinct from authoritative educational state.

The purpose of engineering artifacts is to preserve information that has continuing engineering value.

Artifacts MUST NOT exist merely to prove that a process step occurred.

---

# 2. Artifact Objective

Engineering work continuously produces information.

Some of that information is transient.

Some of it becomes important project knowledge.

The artifact model exists to distinguish between the two.

Conceptually:

```text
Engineering Activity
        ↓
Information Produced
        ↓
Continuing Engineering Value?
        ├── No  → May remain transient
        └── Yes → Preserve as an Engineering Artifact
```

Persistence SHOULD be justified by future engineering utility.

Useful artifacts MAY support:

- implementation;
- review;
- verification;
- coordination;
- maintenance;
- deployment;
- incident response;
- future design reasoning;
- recovery of engineering context.

The methodology MUST NOT require preservation of every intermediate thought, conversation, command, or tool output.

---

# 3. Engineering Artifact

An engineering artifact is a persistent representation of engineering information that has continuing value for the software project.

Artifacts MAY include:

- requirements;
- acceptance criteria;
- task descriptions;
- development plans;
- architecture or design decisions;
- interface definitions;
- source code;
- tests;
- configuration;
- schemas;
- migration definitions;
- verification results;
- review findings;
- security findings;
- operational documentation;
- deployment instructions;
- release information.

An artifact MAY be structured or informal.

Its form SHOULD match its engineering purpose.

Stage 3 MUST NOT require one universal artifact format.

---

# 4. Artifact Principles

Engineering artifacts SHOULD follow these principles:

## Purposeful

Every persisted artifact SHOULD serve an identifiable engineering purpose.

## Authoritative Where Necessary

Where an artifact represents project truth, its authority SHOULD be clear.

## Minimal

Artifacts SHOULD contain enough information to preserve value without unnecessary duplication.

## Maintainable

Artifacts expected to remain authoritative SHOULD be practical to update.

## Traceable

Important engineering relationships SHOULD remain understandable where doing so provides value.

## Proportional

Artifact depth SHOULD scale with engineering rigor and consequence.

## Local to Existing Project Practice

Existing project conventions SHOULD be reused when they already represent the necessary engineering information adequately.

ALH SHOULD NOT introduce parallel artifacts merely because an equivalent artifact already exists in the learner's project.

---

# 5. Artifact Authority

Not every artifact has equal authority.

Artifacts MAY serve different roles such as:

- authoritative specification;
- accepted engineering decision;
- implementation source of truth;
- supporting evidence;
- transient planning aid;
- historical record.

Where multiple artifacts describe the same engineering concern, the authoritative source SHOULD be identifiable.

The methodology SHOULD avoid situations where two artifacts independently claim authority over the same semantic truth.

For example:

```text
Public Interface Definition
        =
Authoritative Contract
```

while:

```text
Review Comment About Interface
        =
Supporting Discussion
```

A supporting artifact MUST NOT silently become authoritative merely because it is more recent.

---

# 6. Avoiding Semantic Duplication

Engineering information SHOULD NOT be duplicated across multiple persistent artifacts without a clear reason.

Duplication creates risk of:

- inconsistency;
- stale documentation;
- ambiguous authority;
- increased maintenance cost;
- misleading project context.

Where an existing artifact already contains authoritative information, another artifact SHOULD reference it rather than restate it.

For example:

```text
Requirement
        ↓
Referenced by
Development Plan
```

is preferable to copying the full requirement into the plan when that duplication provides no engineering value.

---

# 7. Artifact Persistence Decision

Information SHOULD be persisted when at least one of the following applies:

- it defines an engineering obligation;
- it records a significant decision;
- it is needed for future implementation;
- it is needed for verification;
- it is needed for independent review;
- it is difficult or costly to reconstruct;
- it affects deployment or operation;
- it affects security;
- it preserves a significant assumption or constraint;
- it supports future maintenance or debugging.

Information MAY remain transient when:

- it is obvious from authoritative project artifacts;
- it has no continuing value;
- it represents exploratory reasoning superseded by a final decision;
- it is trivial to reconstruct;
- persistence would create more maintenance cost than value.

---

# 8. Artifact Lifecycle

Persistent artifacts SHOULD evolve with engineering reality.

Conceptually:

```text
Create
    ↓
Use
    ↓
Review
    ↓
Update when reality changes
    ↓
Retire or supersede when no longer authoritative
```

Artifacts MUST NOT remain silently authoritative after their engineering assumptions are invalidated.

When an artifact is superseded, the relationship SHOULD be clear where future readers could otherwise be misled.

---

# 9. Requirements Artifacts

Requirements MAY be represented through:

- issue descriptions;
- feature specifications;
- acceptance criteria;
- user stories;
- technical requirements;
- constraint lists;
- project documentation.

A dedicated requirements document is not universally required.

Requirements SHOULD be persisted when they provide continuing value for:

- implementation;
- verification;
- review;
- future project reasoning.

For R1 work, requirements MAY remain concise.

For R3 or R4 work, important requirements SHOULD normally be explicit and inspectable.

---

# 10. Discovery Artifacts

Discovery MAY produce artifacts such as:

- problem statements;
- investigation notes;
- root-cause findings;
- feasibility conclusions;
- uncertainty lists;
- identified constraints;
- experiment results.

Discovery artifacts SHOULD be retained when their findings influence subsequent engineering decisions or are difficult to reconstruct.

Exploratory notes that no longer have continuing value MAY remain transient.

---

# 11. Planning Artifacts

Planning MAY be represented by:

- task decomposition;
- issue checklist;
- implementation plan;
- milestone plan;
- engineering note;
- equivalent project artifact.

Planning artifacts SHOULD preserve current engineering intent.

They SHOULD NOT preserve obsolete detail merely for historical completeness when that detail would mislead active development.

For elevated or critical work, plan revisions SHOULD remain understandable where the reasons for change materially affect engineering decisions.

---

# 12. Architecture and Design Artifacts

Architecture or design artifacts SHOULD be created when decisions have sufficient significance to warrant preservation.

Examples MAY include:

- architecture descriptions;
- component diagrams;
- interface contracts;
- data-flow descriptions;
- design notes;
- architecture decision records;
- migration design;
- threat-oriented design notes.

A formal architecture artifact SHOULD be considered when the decision:

- affects multiple components;
- changes important boundaries;
- is difficult to reverse;
- creates a significant dependency;
- affects security;
- affects operations;
- contains non-obvious trade-offs.

Localized implementation decisions MAY remain in code when the code itself is the clearest authoritative representation.

---

# 13. Architecture Decision Records

An ADR MAY be appropriate within the learner's project when a significant project architecture decision requires durable rationale.

This Stage 3 methodology does not mandate ADRs for every design choice.

A project-level ADR SHOULD generally capture:

- decision context;
- important constraints;
- considered alternatives;
- selected decision;
- rationale;
- significant consequences.

Project-level ADRs for the learner's software product MUST NOT be confused with ALH architecture ADR governance.

Changes to accepted ALH Stage 1 architecture remain governed separately.

---

# 14. Source Code as an Artifact

Source code is a primary engineering artifact.

Code SHOULD remain the authoritative representation of implementation behavior where appropriate.

Documentation SHOULD NOT duplicate implementation detail that is clearer and more reliably maintained in code.

However, source code MAY be insufficient to preserve:

- why a significant decision was made;
- external requirements;
- architectural constraints;
- operational procedure;
- intentionally unsupported behavior;
- non-obvious security reasoning.

Such information MAY require additional artifacts.

---

# 15. Tests as Artifacts

Automated tests are persistent engineering artifacts when they provide ongoing verification value.

Tests MAY preserve:

- expected behavior;
- regression protection;
- interface contracts;
- boundary expectations;
- defect reproduction.

Tests SHOULD NOT be treated as complete substitutes for requirements when requirements contain meaning not adequately represented by test behavior.

Likewise, requirements SHOULD NOT duplicate test implementation detail unnecessarily.

---

# 16. Verification Artifacts

Verification MAY produce persistent artifacts such as:

- automated test suites;
- CI results;
- test reports;
- performance measurements;
- migration verification;
- manual verification notes;
- operational validation results.

Not every successful test run requires permanent preservation.

Verification results SHOULD be persisted when they are needed to support:

- a significant completion claim;
- auditability within the project;
- release confidence;
- future comparison;
- high-risk deployment;
- difficult-to-repeat testing.

The underlying repeatable test MAY provide more continuing value than a historical test output.

---

# 17. Review Artifacts

Review MAY produce:

- code review comments;
- approval records;
- blocking findings;
- design review notes;
- security findings;
- follow-up tasks.

Material unresolved findings SHOULD remain visible until disposition.

Resolved low-value review discussion does not always require separate long-term preservation if the project review system already retains sufficient history.

Review artifacts MUST NOT become a second requirements specification unless explicitly intended.

---

# 18. Security Artifacts

Security-sensitive development MAY justify artifacts such as:

- security requirements;
- trust-boundary descriptions;
- threat considerations;
- security test cases;
- vulnerability findings;
- mitigation decisions;
- accepted residual risk.

Security artifacts SHOULD be proportional to risk.

A low-risk local change SHOULD NOT require a formal security document merely because security is a cross-cutting concern.

High-impact security decisions SHOULD preserve enough context to support future review and maintenance.

---

# 19. Operational and Deployment Artifacts

Where deployment and operation are part of the learner's project, applicable artifacts MAY include:

- deployment procedures;
- configuration documentation;
- migration instructions;
- rollback procedures;
- health-check definitions;
- observability configuration;
- runbooks;
- release notes.

Operational artifacts SHOULD exist when incorrect reconstruction could cause meaningful production risk.

They SHOULD remain consistent with the actual deployment environment and implementation.

---

# 20. Documentation as an Artifact Class

Documentation is not a separate objective from engineering work.

It is one artifact class used to preserve engineering knowledge.

Documentation SHOULD be created where information is not represented adequately by more authoritative project artifacts.

Useful documentation MAY explain:

- intent;
- boundaries;
- trade-offs;
- integration contracts;
- setup;
- operation;
- deployment;
- significant constraints.

Documentation SHOULD NOT paraphrase source code line by line.

The Stage 1 Documentation by Default principle remains the minimum architectural
constraint.

This artifact methodology refines how documentation remains proportional and
non-duplicative; it does not waive applicable documentation obligations.

---

# 21. Traceability Objective

Traceability exists to preserve meaningful relationships between engineering intent, implementation, evidence, and decisions.

A useful high-level model is:

```text
Engineering Need
        ↓
Requirement / Objective
        ↓
Design Decision where applicable
        ↓
Implementation
        ↓
Verification
        ↓
Review
        ↓
Engineering Completion
```

Traceability SHOULD make important engineering claims understandable.

It MUST NOT require a formal matrix for every task.

---

# 22. Traceability Depth

Traceability depth SHOULD scale with rigor and consequence.

For R1, traceability MAY be implicit and locally obvious.

For R2, important requirements SHOULD be reasonably connected to implementation and verification.

For R3, significant requirements, decisions, implementation, and verification SHOULD be explicitly traceable.

For R4, critical requirements and risks SHOULD have clear, inspectable relationships to:

- implementation;
- verification;
- review;
- security controls;
- delivery safeguards where applicable.

Traceability MUST remain useful rather than ceremonial.

---

# 23. R1 Artifact Expectations

R1 SHOULD minimize persistent artifacts.

Typical persistent artifacts MAY consist only of:

- the task or issue;
- source-code changes;
- applicable tests;
- a concise review history.

Additional artifacts SHOULD be created only when they provide continuing value.

R1 MUST NOT require dedicated architecture or planning documents by default.

---

# 24. R2 Artifact Expectations

R2 SHOULD normally preserve:

- clear task intent or requirements;
- implementation changes;
- verification;
- relevant review history;
- necessary documentation updates.

A lightweight implementation plan MAY be retained when it supports coordination or review.

Architecture artifacts remain conditional.

---

# 25. R3 Artifact Expectations

R3 SHOULD preserve, where applicable:

- explicit requirements;
- structured development plan;
- significant architecture or design decisions;
- important assumptions and risks;
- implementation;
- verification strategy and meaningful results;
- substantive review findings;
- security considerations;
- deployment implications;
- necessary operational documentation.

Artifacts SHOULD make the significant engineering reasoning inspectable.

---

# 26. R4 Artifact Expectations

R4 SHOULD preserve enough engineering context to support strong independent evaluation and safe operation.

Applicable artifacts MAY include:

- explicit requirements;
- critical constraints;
- risk analysis;
- architecture decisions;
- security decisions;
- detailed implementation plan;
- verification strategy;
- significant verification results;
- independent review;
- dedicated security findings;
- migration plan;
- rollback plan;
- delivery plan;
- post-deployment verification.

R4 MUST NOT require artifacts that are irrelevant to the actual critical risk.

---

# 27. Traceability Between Requirements and Implementation

Important requirements SHOULD be traceable to the software changes intended to satisfy them.

This relationship MAY be represented through:

- issue links;
- commit or change references;
- task identifiers;
- code review context;
- implementation plans;
- documentation references.

The methodology MUST NOT require embedding requirement identifiers into source code where doing so provides no engineering value.

---

# 28. Traceability Between Requirements and Verification

Verification SHOULD demonstrate relevant requirements or engineering objectives.

For higher-rigor tasks, it SHOULD be possible to answer:

- Which requirement is being verified?
- What evidence supports it?
- Are important requirements unverified?
- Are verification limitations known?

Traceability MAY be represented through tests, plans, checklists, review descriptions, or equivalent project mechanisms.

A separate requirements-to-tests matrix is OPTIONAL unless project needs justify it.

---

# 29. Traceability Between Design and Implementation

Significant design decisions SHOULD remain connected to implementation.

If implementation intentionally deviates from a preserved design decision, one of the following SHOULD occur:

- the design artifact is updated;
- the decision is superseded;
- the deviation is explicitly justified.

The project SHOULD NOT preserve a design artifact known to contradict the current implementation without indicating that it is historical or superseded.

---

# 30. Traceability Between Risk and Mitigation

Significant engineering risks SHOULD be traceable to how they were addressed.

Conceptually:

```text
Risk
    ↓
Mitigation Decision
    ↓
Implementation or Process Control
    ↓
Verification
```

This becomes more important for:

- R3 and R4 work;
- security-sensitive changes;
- irreversible migrations;
- high operational risk.

Low-impact risks MAY be handled without formal traceability when the relationship is obvious.

---

# 31. Traceability Between Review and Resolution

Blocking review findings SHOULD remain traceable to their resolution.

A finding SHOULD be identifiable as:

- corrected;
- invalidated;
- superseded;
- accepted as residual risk.

The methodology SHOULD avoid review histories where significant findings disappear without disposition.

---

# 32. Change History

Version-control history is an important engineering context source.

Where available, existing version-control mechanisms SHOULD be used rather than duplicating change history manually.

Commit history, pull-request history, issue history, and equivalent project mechanisms MAY provide sufficient traceability.

Stage 3 MUST NOT require duplicate change logs for information already represented adequately by authoritative development tooling.

---

# 33. Commit and Change Semantics

Changes SHOULD be understandable at an engineering level.

Where project practices support it, commits or equivalent change units SHOULD preserve useful intent.

However, Stage 3 does not prescribe:

- commit-message format;
- branch strategy;
- merge strategy;
- pull-request platform;
- release branching.

Such mechanisms are project-specific implementation choices unless defined elsewhere by the learner's project.

---

# 34. Artifact Freshness

An authoritative artifact SHOULD reflect current project truth.

Artifacts MAY become stale when:

- implementation changes;
- requirements change;
- architecture evolves;
- deployment procedures change;
- dependencies change;
- assumptions are invalidated.

When stale information can materially mislead future engineering work, it SHOULD be updated, superseded, or removed.

Retention of historical artifacts MAY still be useful when their historical status is clear.

---

# 35. Artifact Review

Important artifacts SHOULD receive review appropriate to their significance.

Examples include:

- architecture decisions;
- high-risk requirements;
- migration plans;
- security decisions;
- critical deployment procedures.

Artifact review MAY occur as part of normal engineering review.

A separate review ceremony is not required when existing review mechanisms provide sufficient evaluation.

---

# 36. Artifact Ownership

Artifact ownership means responsibility for keeping authoritative engineering information coherent.

Stage 3 does not prescribe organizational owners or job titles.

Ownership MAY be exercised through:

- the responsible engineer;
- project maintainers;
- a review process;
- an applicable logical Pipeline responsibility.

The artifact model MUST NOT imply a dedicated physical agent for every artifact class.

---

# 37. Development Context Assembly

Later Stage 4 and Stage 5 work MAY need access to project context for AI-assisted development.

Stage 3 defines which types of engineering context MAY be relevant.

Relevant context MAY include:

- current task;
- applicable requirements;
- architecture;
- source code;
- tests;
- significant decisions;
- known risks;
- verification status;
- review findings;
- operational constraints.

Only context relevant to the current activity SHOULD be assembled.

Stage 3 MUST NOT define:

- prompt context windows;
- retrieval algorithms;
- vector stores;
- prompt composition;
- runtime context injection.

Those mechanisms belong to later stages.

---

# 38. Context Relevance

More context is not automatically better context.

Context SHOULD be selected based on relevance to the engineering activity.

Excessive context MAY:

- obscure authoritative information;
- introduce stale assumptions;
- duplicate semantics;
- increase cognitive load;
- increase AI instruction ambiguity.

Relevant current artifacts SHOULD be preferred over broad indiscriminate context accumulation.

---

# 39. Context Authority

When project context contains conflicting information, authoritative current artifacts SHOULD take precedence over:

- outdated plans;
- historical review comments;
- superseded designs;
- exploratory notes.

Stage 3 SHOULD make authority and supersession relationships clear enough that later systems do not need to guess.

Unresolved conflicts SHOULD remain explicit.

They MUST NOT be silently resolved through assumption.

---

# 40. Engineering History

Historical context MAY provide value for:

- understanding why a design exists;
- debugging regressions;
- interpreting constraints;
- avoiding repeated failed approaches.

Historical information SHOULD be retained when its value exceeds maintenance and discovery cost.

Historical artifacts MUST be distinguishable from current normative project truth.

---

# 41. Educational Boundary

Engineering artifacts MAY contain information relevant to learning.

For example:

- a learner-authored design MAY provide reasoning evidence;
- learner-authored tests MAY provide application evidence;
- a review response MAY provide understanding evidence;
- independent implementation MAY provide independence evidence.

However:

```text
Engineering Artifact
        ≠
Authoritative Educational Evidence
```

An engineering artifact MAY become a source for educational evaluation only through Stage 2 semantics.

Stage 3 MUST NOT assign competency meaning to artifacts automatically.

---

# 42. Learner State Boundary

Project artifacts MUST NOT be used as an implicit replacement for the Stage 1 Memory Model.

The learner's project repository and the learner's educational memory have different semantic responsibilities.

Conceptually:

```text
Project Repository
        =
Engineering Project State
```

while:

```text
ALH Educational Memory
        =
Authoritative Learner Context
```

Some engineering information MAY be referenced by educational systems.

That relationship MUST NOT collapse the two state domains.

---

# 43. Learning Infrastructure Separation

Engineering artifacts of the learner's software product belong to application /
project context.

ALH-specific educational state MUST remain within the learning-infrastructure
responsibility defined by ADR-001.

Application artifacts MUST NOT be used to persist ALH-specific:

- competency state;
- Learning Debt;
- Automation Level;
- assessment state;
- learner-memory state;
- educational progression metadata.

ALH MAY reference application artifacts from learning infrastructure when they
provide relevant project context or evidence sources.

Such a reference does not transfer ownership:

```text
Application Artifact
        ← referenced by →
Learning Infrastructure

        ≠

Mixed Responsibility
```

Educational metadata MUST NOT be injected into application source code, tests,
documentation, or infrastructure merely to simplify ALH implementation.

---

# 44. Artifact Generation by AI

AI MAY assist in creating:

- requirements drafts;
- plans;
- design notes;
- tests;
- review summaries;
- documentation;
- other engineering artifacts.

AI-generated artifacts MUST be evaluated under the same applicable engineering quality expectations as other artifacts.

AI generation MUST NOT establish authority automatically.

An artifact becomes authoritative because the project accepts and uses it as such, not because it was generated confidently.

---

# 45. Artifact Summaries

Summaries MAY improve accessibility to complex project context.

A summary MUST NOT silently replace the authoritative artifact when important detail has been omitted.

Where accuracy matters, the authoritative underlying source SHOULD remain identifiable.

AI-generated summaries SHOULD be treated as derived context unless explicitly reviewed and adopted as authoritative project documentation.

---

# 46. Transient Reasoning

Intermediate reasoning MAY be useful during development without deserving permanent storage.

Examples include:

- brainstorming;
- discarded implementation options;
- temporary debugging hypotheses;
- ad hoc command output;
- exploratory AI conversations.

Transient reasoning SHOULD be preserved only when it contains information with continuing engineering value.

Stage 3 MUST NOT require archival of full reasoning histories.

---

# 47. Experiments and Spike Artifacts

Experiments SHOULD preserve their conclusions when those conclusions influence engineering decisions.

Useful persistent outputs MAY include:

- the question investigated;
- the result;
- limitations;
- relevant measurements;
- implications for the production approach.

Experimental implementation MAY be discarded.

If retained as production code, it MUST satisfy normal production engineering obligations.

---

# 48. Artifact Security

Artifacts MAY themselves contain sensitive information.

Engineering documentation MUST NOT unnecessarily persist:

- secrets;
- credentials;
- private keys;
- tokens;
- sensitive production data;
- security-sensitive operational detail beyond justified need.

Sensitive project information SHOULD be handled according to applicable project security practices.

Stage 3 MUST NOT invent storage or access-control mechanisms.

---

# 49. Artifact Granularity

Artifact granularity SHOULD match the engineering decision or information being preserved.

Overly broad artifacts MAY become difficult to maintain.

Overly fragmented artifacts MAY make context difficult to reconstruct.

The appropriate granularity SHOULD optimize:

- clarity;
- maintainability;
- authority;
- discoverability;
- traceability.

There is no universal one-file-per-concern rule.

---

# 50. Artifact Discoverability

Important engineering artifacts SHOULD be discoverable by engineers working on the project.

Discoverability MAY be supported by:

- established repository structure;
- links from task systems;
- indexes;
- references from architecture documents;
- conventional filenames;
- project documentation.

Stage 3 does not prescribe a universal repository layout for the learner's project.

---

# 51. Artifact Portability

Where practical, important engineering knowledge SHOULD avoid unnecessary dependence on a proprietary interaction history.

Core project truth SHOULD remain accessible through project artifacts appropriate to the software repository or project environment.

This principle supports continuity of engineering work.

It MUST NOT be interpreted as a prohibition on using external development tools.

---

# 52. Traceability and Superpowers

Verified Superpowers capabilities MAY support artifact creation, workflow execution, or traceability.

However:

- artifact authority MUST remain defined by the project;
- Stage 3 MUST NOT assume undocumented Superpowers persistence;
- Stage 3 MUST NOT require a specific Superpowers artifact form without verification;
- educational semantics MUST remain outside Superpowers authority.

Detailed integration belongs to:

- 06-Superpowers-Integration-and-Engineering-Done.md

---

# 53. Traceability and Logical Pipeline Responsibilities

Stage 1 logical responsibilities MAY interact with different artifact classes.

Illustratively:

```text
Project Management Responsibilities
        →
Requirements / Planning Context

Architecture Responsibilities
        →
Architecture / Design Decisions

Development Responsibilities
        →
Implementation / Tests

Review Responsibilities
        →
Review Findings / Quality Evidence

Security Audit Responsibilities
        →
Security Findings
```

These mappings describe responsibility relevance only.

They MUST NOT prescribe physical agents or artifact-generating processes.

---

# 54. Anti-Patterns

The following patterns are inconsistent with this methodology.

## Artifact for Every Activity

Creating a persistent document for every lifecycle activity regardless of value.

## Duplicate Authority

Maintaining multiple independently authoritative descriptions of the same requirement or decision.

## Documentation Drift

Leaving documentation authoritative after implementation has materially diverged.

## Traceability Theater

Building matrices or references that provide no practical engineering value.

## Tool-History Dependency

Making critical engineering truth discoverable only through ephemeral chat or tool history.

## AI Authority Assumption

Treating AI-generated artifacts as authoritative without engineering review or adoption.

## Test-as-Specification Absolutism

Assuming tests always contain the complete semantic requirements.

## Repository-as-Learner-Memory

Using project artifacts as an implicit replacement for authoritative educational state.

## Historical Context Confusion

Treating superseded plans or designs as current project truth.

## Artifact Accumulation

Persisting information indefinitely without regard to relevance, authority, or maintenance cost.

---

# 55. Minimum Traceability Model

Every engineering task SHOULD preserve enough context to answer, proportionally:

1. What engineering need was addressed?
2. What changed?
3. What evidence supports correctness?
4. Were significant review findings resolved?
5. What important constraints or risks remain?

For higher-rigor tasks, the project SHOULD additionally be able to answer:

6. Which requirements were applicable?
7. Which significant design decisions were made?
8. How were important risks mitigated?
9. What delivery or operational obligations applied?
10. What known residual risk remains?

The answers MAY be distributed across existing authoritative project artifacts.

A dedicated traceability document is not required.

---

# 56. Relationship to Development-Learning Integration

This document identifies engineering activities and artifacts that MAY become relevant to educational observation.

It does not define how ALH interprets them educationally.

That responsibility belongs to:

- 05-Development-Learning-Integration.md

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
        ↓
05-Development-Learning-Integration.md
```

`05-Development-Learning-Integration.md` MUST consume engineering artifacts as project context without redefining their engineering authority.

---

# 57. Explicit Non-Goals

This document does not define:

- a universal repository layout;
- mandatory artifact filenames for learner projects;
- a mandatory issue tracker;
- a mandatory version-control strategy;
- a mandatory ADR process for all learner-project decisions;
- artifact storage technology;
- database schemas;
- vector storage;
- retrieval implementation;
- prompt context construction;
- full conversation archival;
- learner memory persistence;
- educational assessment rules;
- competency evaluation;
- specific Superpowers artifact mechanisms;
- development governance for ALH itself.

---

# 58. Compliance

Engineering artifacts and traceability are compliant with this document only if they:

1. preserve information with continuing engineering value;
2. avoid unnecessary persistence of transient information;
3. scale artifact depth with engineering rigor;
4. avoid duplicate authoritative semantics;
5. identify authoritative project truth where necessary;
6. preserve significant engineering decisions when useful;
7. support meaningful requirement, implementation, verification, and risk traceability;
8. keep stale or superseded artifacts distinguishable from current truth;
9. reuse existing project mechanisms where adequate;
10. avoid mandatory documentation ceremony;
11. preserve project context needed for future engineering work;
12. distinguish engineering artifacts from authoritative educational state;
13. preserve application and learning-infrastructure separation;
14. apply normal quality expectations to AI-generated artifacts;
15. avoid dependence on undocumented Superpowers behavior.

---
