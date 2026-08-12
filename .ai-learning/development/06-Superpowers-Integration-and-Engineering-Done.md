# Superpowers Integration and Engineering Definition of Done

Status: Accepted
Version: 1.0

Parent Documents

- 02-Development-Rigor-and-Planning.md
- 03-Engineering-Quality-and-Verification.md
- 04-Engineering-Artifacts-and-Traceability.md
- 05-Development-Learning-Integration.md
- 10-Superpowers-Integration.md

Related Documents

- 00-Development-Methodology.md
- 01-Development-Lifecycle.md
- 00-Vision.md
- 02-Core-Principles.md
- 07-Definition-of-Done.md
- 04-Agent-Pipeline.md
- ADR-001-Separation-of-Application-and-Learning-Infrastructure.md

---

# 1. Purpose

This document completes the Stage 3 Development Methodology of AI Learning Harness (ALH).

It defines:

- the integration boundary between Stage 3 development methodology and verified Superpowers capabilities;
- how Superpowers capabilities MAY support the learner's real software-development lifecycle;
- how conflicts between ALH methodology and Superpowers workflow assumptions MUST be handled;
- the Engineering Definition of Done;
- the relationship between Engineering Done and Educational Done;
- the completion conditions for Stage 3 itself.

Superpowers is an immutable external dependency.

Stage 3 consumes applicable Superpowers capabilities.

It MUST NOT redefine, fork, or modify Superpowers.

---

# 2. Integration Objective

The integration model is:

```text
ALH Stage 3 Development Methodology
        ↓
Defines Engineering Need
        ↓
Applicable Development Activity
        ↓
Applicable Verified Capability
        ↓
Superpowers, where appropriate
```

Superpowers provides reusable software-development capabilities.

ALH remains responsible for determining how those capabilities fit within:

- the accepted ALH architecture;
- the Stage 3 lifecycle;
- proportional engineering rigor;
- learner participation;
- Stage 2 educational methodology.

Superpowers MUST NOT become authoritative for:

- learner state;
- competency evaluation;
- educational progression;
- Automation Level;
- Learning Debt;
- Educational Definition of Done;
- ALH architectural boundaries.

---

# 3. Verified Capability Baseline

At the time of Stage 3 design, the upstream Superpowers project documents capabilities supporting software-development activities including:

- collaborative design and specification through `brainstorming`;
- isolated development workspaces through `using-git-worktrees`;
- implementation planning through `writing-plans`;
- plan execution through `executing-plans`;
- delegated plan execution through `subagent-driven-development`;
- test-first implementation through `test-driven-development`;
- root-cause-oriented debugging through `systematic-debugging`;
- code-review request and response workflows;
- evidence-oriented verification through `verification-before-completion`;
- branch completion through `finishing-a-development-branch`.

This capability baseline MUST be treated as externally versioned behavior.

Later Stage 4 or Stage 5 work MUST verify current Superpowers behavior again when exact invocation or integration mechanics matter.

Stage 3 MUST NOT assume capabilities that have not been verified.

---

# 4. Capability Semantics vs ALH Semantics

A Superpowers capability defines how Superpowers performs or structures an applicable workflow.

It does not automatically define ALH methodology.

Conceptually:

```text
Superpowers Capability
        =
External Workflow Semantics
```

while:

```text
Stage 3 Rule
        =
ALH Development Methodology Semantics
```

The two MAY align.

They MUST NOT be treated as identical by default.

Where a Superpowers capability is more restrictive than Stage 3, its restrictions MAY apply when that capability is selected for use.

They MUST NOT silently become universal Stage 3 requirements.

---

# 5. Integration Precedence

The following precedence applies conceptually:

```text
Accepted ALH Architecture
        ↓
Accepted Educational Methodology
        ↓
Stage 3 Development Methodology
        ↓
Applicable Superpowers Capability
```

Superpowers MUST be used within accepted upstream ALH boundaries.

If a Superpowers workflow assumption conflicts with an accepted ALH architectural or educational responsibility, ALH MUST preserve the accepted ALH boundary.

Because Superpowers is immutable, ALH SHOULD adapt whether and where the capability is used rather than modify the capability itself.

---

# 6. Capability Selection

A Superpowers capability SHOULD be used when:

- it is verified to exist;
- it applies to the current engineering activity;
- its workflow provides engineering value;
- its use is compatible with Stage 3 rigor;
- its use preserves applicable learner participation;
- its assumptions do not violate accepted ALH boundaries.

A capability SHOULD NOT be invoked merely because it exists.

Capability selection MUST remain connected to the current engineering need.

---

# 7. Discovery and Design Support

The verified `brainstorming` capability MAY support:

- problem clarification;
- requirements exploration;
- consideration of alternatives;
- design development;
- specification refinement.

Within ALH, this capability MAY contribute to:

```text
Discovery
        ↓
Requirements
        ↓
Architecture / Design
```

Its use MUST NOT imply that every task requires a full formal design process.

Stage 3 proportionality remains authoritative for determining required process depth.

---

# 8. Planning Support

The verified `writing-plans` capability MAY support explicit implementation planning.

It is particularly applicable where Stage 3 requires or benefits from:

- task decomposition;
- explicit implementation sequencing;
- verification planning;
- higher-rigor development planning.

Superpowers may prescribe particular plan conventions within its own workflow.

Those conventions MUST NOT automatically become universal ALH artifact requirements.

Stage 3 remains authoritative for whether a persistent plan is required.

---

# 9. Execution Support

Verified Superpowers capabilities MAY support implementation-plan execution.

`executing-plans` and `subagent-driven-development` represent different Superpowers execution approaches.

Stage 3 MUST NOT treat either approach as the physical realization of the Stage 1 Agent Pipeline.

In particular:

```text
Superpowers Subagent
        ≠
ALH Logical Pipeline Responsibility
```

and:

```text
ALH Logical Pipeline Responsibility
        ≠
Required Physical Agent
```

Physical execution topology remains outside Stage 3 responsibility.

---

# 10. Worktree Support

The verified `using-git-worktrees` capability MAY provide isolated development workspace support.

Worktree isolation MAY provide engineering value for:

- parallel development;
- reduced interference with existing work;
- safer implementation-plan execution.

Stage 3 does not make Git worktrees universally mandatory.

A learner project MAY use another valid isolation strategy.

Superpowers-specific workflow prerequisites MAY still require worktrees when the selected Superpowers capability itself requires them.

---

# 11. Test-Driven Development Support

The verified `test-driven-development` capability implements a strict test-first development discipline.

When that Superpowers capability is deliberately selected, its workflow semantics SHOULD be respected.

However, Stage 3 defines verification more generally.

Therefore:

```text
Stage 3 Verification
        ≠
Universal Mandatory TDD
```

Stage 3 allows verification techniques to be selected according to engineering context.

Superpowers TDD MUST NOT silently redefine all Stage 3 implementation as mandatory strict test-first development.

---

# 12. TDD Applicability Boundary

Superpowers TDD MAY be especially valuable for:

- behavior changes;
- defect correction;
- refactoring;
- features with testable behavior.

Other work MAY require different or additional verification techniques.

Examples include:

- exploratory prototypes;
- configuration;
- visual behavior;
- deployment changes;
- operational validation;
- migrations;
- performance investigation.

Stage 3 Engineering Done requires sufficient verification.

It does not require one universal test-development sequence.

---

# 13. Debugging Support

The verified `systematic-debugging` capability MAY support defect investigation.

Its root-cause orientation aligns with Stage 3 requirements that engineering failure be investigated rather than guessed around.

It MAY support:

```text
Observed Failure
        ↓
Evidence Gathering
        ↓
Root Cause Analysis
        ↓
Corrective Change
        ↓
Verification
```

Stage 3 MAY use this capability where debugging is required.

It MUST NOT assume that every engineering problem is a debugging problem.

---

# 14. Review Support

Verified Superpowers review capabilities MAY support:

- evaluation against requirements;
- code-quality review;
- response to review findings;
- correction and re-verification.

These capabilities align with the independent-evaluation purpose defined by `03-Engineering-Quality-and-Verification.md`.

Use of a Superpowers review workflow MUST NOT imply educational assessment.

Engineering Reviewer responsibility and Assessor responsibility remain distinct.

---

# 15. Verification-Before-Completion Support

The verified `verification-before-completion` capability requires current verification evidence before success claims are made.

This principle aligns strongly with Stage 3:

```text
Evidence
        ↓
Completion Claim
```

rather than:

```text
Assumption
        ↓
Completion Claim
```

Stage 3 SHOULD use applicable evidence-oriented Superpowers verification capabilities where available.

A successful capability run is evidence only for the properties actually verified.

It MUST NOT automatically establish Engineering Done.

---

# 16. Branch Completion Support

The verified `finishing-a-development-branch` capability MAY support completion of an isolated development branch.

It MAY assist with activities such as:

- final verification;
- branch disposition;
- merge or integration decisions;
- cleanup.

Branch completion MUST NOT be equated with Engineering Done automatically.

Engineering Done depends on the complete applicable Stage 3 obligations.

---

# 17. Superpowers Workflow Composition

Multiple Superpowers capabilities MAY participate in one development task.

For example:

```text
Discovery / Design
        ↓
brainstorming
        ↓
Planning
        ↓
writing-plans
        ↓
Implementation
        ↓
TDD and/or plan execution
        ↓
Review
        ↓
requesting-code-review
        ↓
Verification
        ↓
verification-before-completion
        ↓
Branch Completion
```

This is an example of capability composition.

It MUST NOT be interpreted as the universal ALH lifecycle.

The Stage 3 lifecycle remains defined by `01-Development-Lifecycle.md`.

---

# 18. Partial Capability Use

ALH MAY use only the Superpowers capabilities relevant to a task.

For example, a localized defect MAY primarily use:

```text
systematic-debugging
        ↓
applicable implementation
        ↓
verification-before-completion
```

A larger capability MAY use:

```text
brainstorming
        ↓
writing-plans
        ↓
implementation workflow
        ↓
review
        ↓
verification
```

Capability composition SHOULD remain proportional to engineering need.

---

# 19. Superpowers Does Not Determine Rigor

Superpowers workflow structure MUST NOT replace the Stage 3 rigor-selection model.

R1–R4 remain Stage 3 engineering profiles.

Conceptually:

```text
Stage 3 Rigor
        ↓
Determines Engineering Depth
        ↓
Applicable Activities
        ↓
Applicable Superpowers Capabilities
```

The inverse MUST NOT silently occur:

```text
Superpowers Capability Selected
        ↓
ALH Rigor Determined
```

---

# 20. Superpowers Does Not Determine Learner Independence

A Superpowers capability may automate or structure software-development activity.

That automation does not define Stage 2 Automation Level.

For example:

```text
Subagent Execution Available
        ≠
Learner Should Delegate
```

The educational layer determines how much meaningful learner participation is appropriate.

A capability MAY be technically available but educationally inappropriate for a particular activity.

---

# 21. Learner Participation Boundary

Superpowers-assisted work SHOULD preserve the learner participation required by Stage 2.

Depending on educational context, a learner MAY:

- perform the reasoning before a capability is used;
- collaborate with the capability;
- review capability output;
- perform implementation directly;
- diagnose failures;
- explain or correct generated work.

Stage 3 MUST NOT prescribe the educational mode.

It only requires that use of external capabilities not invalidate the learner-participation contract.

---

# 22. Capability Output Authority

Superpowers output MAY include:

- specifications;
- plans;
- implementation;
- tests;
- review findings;
- verification results.

These outputs are not automatically authoritative merely because Superpowers produced them.

Authority follows the artifact rules defined by `04-Engineering-Artifacts-and-Traceability.md`.

Applicable outputs MUST remain subject to:

- engineering review;
- verification;
- project authority;
- current project truth.

---

# 23. Capability Unavailability

The unavailability of a particular Superpowers capability does not remove the
underlying engineering obligation defined by Stage 3.

However, ALH MUST NOT respond by implementing, duplicating, or assuming ownership
of a replacement Superpowers workflow.

The engineering obligation MAY be satisfied through another already-available
project, IDE, coding-agent, or verified external mechanism, provided that:

- the required engineering outcome is preserved;
- ALH does not assume workflow-engine ownership;
- accepted Stage 1 responsibility boundaries remain intact.

If no valid mechanism is available, the limitation MUST remain explicit rather
than being resolved through an invented ALH capability.

---

# 24. Capability Evolution

Superpowers is externally versioned and MAY evolve independently of ALH.

Later changes MAY:

- add capabilities;
- remove capabilities;
- change workflow assumptions;
- change supported AI environments;
- change execution mechanics.

Stage 3 MUST NOT freeze undocumented implementation assumptions.

Later stages SHOULD depend on the narrowest verified capability contract necessary.

---

# 25. Integration Anti-Corruption Boundary

ALH SHOULD treat Superpowers through a conceptual anti-corruption boundary.

The purpose is to prevent external workflow semantics from silently becoming internal ALH semantics.

Conceptually:

```text
ALH Engineering Semantics
        ↓
Capability Need
        ↓
Superpowers Mapping
        ↓
Verified External Workflow
```

This boundary MUST preserve:

- ALH lifecycle semantics;
- proportional rigor;
- educational authority;
- learner-state authority;
- logical Pipeline semantics.

---

# 26. Engineering Definition of Done

Engineering Definition of Done determines whether the learner's real software-development task is sufficiently complete from an engineering perspective.

Engineering Done means:

> The applicable engineering intent has been satisfied with sufficient verified evidence, applicable review obligations have been resolved, and no known unresolved condition invalidates the completion claim.

Engineering Done MUST be evaluated against the actual task context.

It MUST NOT be reduced to a universal mechanical checklist.

---

# 27. Engineering Done Model

Conceptually:

```text
Engineering Need
        ↓
Sufficient Understanding
        ↓
Applicable Requirements
        ↓
Applicable Design
        ↓
Implementation
        ↓
Verification
        ↓
Review
        ↓
Applicable Security Obligations
        ↓
Applicable Documentation
        ↓
Applicable Delivery / Deployment
        ↓
Engineering Done
```

Some elements MAY be lightweight or not applicable.

The applicable obligations are determined through the lifecycle and rigor model.

---

# 28. Engineering Done — Intent

Before Engineering Done can be claimed:

- the engineering need MUST be sufficiently understood;
- applicable requirements or objectives MUST be identifiable;
- material unresolved ambiguity MUST NOT invalidate the implementation.

A task MUST NOT be considered done merely because implementation activity has ceased.

---

# 29. Engineering Done — Implementation

Applicable implementation MUST:

- address the intended engineering outcome;
- preserve relevant requirements and constraints;
- remain consistent with applicable project architecture or justified revisions;
- avoid known blocking defects.

Generated code, handwritten code, configuration, migrations, and other implementation forms are subject to the same completion principle.

---

# 30. Engineering Done — Verification

Applicable correctness claims MUST be supported by current engineering evidence.

Verification MUST:

- cover the intended changed behavior sufficiently;
- consider relevant regression risk;
- include applicable failure behavior;
- include security or operational verification where required;
- reflect the current implementation.

Stale verification invalidated by later changes MUST NOT support completion without appropriate re-verification.

---

# 31. Engineering Done — Review

Where review is required by rigor or task context:

- applicable review MUST be completed;
- blocking findings MUST be resolved or validly dispositioned;
- material review uncertainty MUST remain explicit.

Review approval MUST NOT substitute for missing verification.

Verification MUST NOT automatically substitute for independent review where review is required.

---

# 32. Engineering Done — Security

Applicable security obligations MUST be satisfied.

For security-relevant work this MAY require:

- security requirements;
- security-aware design;
- defensive implementation;
- security-specific verification;
- security review;
- secure configuration.

A known blocking security defect is incompatible with Engineering Done.

---

# 33. Engineering Done — Documentation

Required engineering knowledge MUST be preserved where failure to preserve it would materially harm:

- use;
- maintenance;
- integration;
- operation;
- deployment;
- future engineering reasoning.

Documentation MUST reflect current engineering reality where it is authoritative.

Unnecessary documentation is not a prerequisite for Engineering Done.

Applicable Stage 1 Documentation by Default obligations MUST be satisfied before
Engineering Done can be claimed.

Proportionality determines documentation depth and form, not whether an applicable
documentation obligation may be ignored.

---

# 34. Engineering Done — Delivery

Where delivery or deployment is part of the task, applicable delivery obligations MUST be satisfied.

These MAY include:

- successful build;
- packaging;
- configuration;
- migration;
- deployment;
- rollback readiness;
- post-deployment verification.

A task that explicitly includes production deployment cannot be Engineering Done solely because implementation is merge-ready.

---

# 35. Engineering Done — Residual Risk

Engineering Done does not require zero risk.

Known residual risk MAY remain when it is:

- understood;
- bounded;
- non-blocking;
- recorded where material;
- accepted by appropriate project authority where necessary.

Known risk MUST NOT be silently hidden behind a successful completion claim.

Material unresolved uncertainty SHOULD be disclosed.

---

# 36. Engineering Done by Rigor Profile

The strength of evidence required for Engineering Done scales with rigor.

## R1 — Lightweight

Engineering Done typically requires:

- sufficient local understanding;
- correct implementation;
- targeted verification;
- no known blocking issue;
- proportional review where applicable.

## R2 — Standard

Engineering Done SHOULD additionally establish:

- applicable requirements coverage;
- regression consideration;
- meaningful engineering review;
- necessary documentation updates.

## R3 — Elevated

Engineering Done SHOULD additionally establish:

- explicit handling of significant requirements and risks;
- substantive design alignment;
- broader verification;
- independent review;
- applicable security and operational confidence;
- meaningful retained engineering context.

## R4 — Critical

Engineering Done SHOULD require the strongest applicable evidence, including where relevant:

- layered verification;
- explicit risk treatment;
- dedicated security evaluation;
- migration and recovery safeguards;
- delivery controls;
- post-deployment verification;
- explicit residual-risk disposition.

---

# 37. Engineering Done Is Evidence-Based

The completion relationship is:

```text
Claim
        ↓
Required Supporting Evidence
        ↓
Evidence Examined
        ↓
Completion Decision
```

not:

```text
Implementation Finished
        ↓
Assume Done
```

Success claims MUST NOT be stronger than the evidence supporting them.

---

# 38. Engineering Done and AI Claims

AI confidence MUST NOT establish Engineering Done.

Statements such as:

- "this should work";
- "the tests probably pass";
- "the issue appears fixed";
- "the code looks correct";

are not sufficient engineering evidence.

Where verification is feasible, it SHOULD be performed.

Where it is not feasible, the limitation MUST remain explicit.

---

# 39. Engineering Done and Superpowers

Superpowers MAY support evidence collection and completion workflows.

In particular, verified capabilities such as review and verification-before-completion MAY help satisfy applicable Stage 3 obligations.

However:

```text
Superpowers Workflow Complete
        ≠
Automatically Engineering Done
```

Stage 3 Engineering Done remains the authoritative completion meaning.

---

# 40. Engineering Done and Educational Done

Engineering Done and Educational Done are independent completion dimensions.

Conceptually:

```text
Engineering Done
        =
Software task satisfies engineering obligations
```

while:

```text
Educational Done
        =
Applicable learning objective satisfies
Stage 2 educational obligations
```

Neither MUST automatically imply the other.

---

# 41. Engineering Done Before Educational Done

A task MAY reach Engineering Done while educational work remains.

For example:

```text
Engineering Done
        ↓
Reflection
        ↓
Assessment
        ↓
Competency Evaluation
```

The software task SHOULD NOT remain artificially engineering-incomplete solely because educational evaluation is unfinished.

---

# 42. Educational Done Before Engineering Done

A learner MAY demonstrate an educational objective while the engineering task still requires:

- implementation;
- verification;
- review;
- security correction;
- deployment.

Educational completion MUST NOT waive those obligations.

---

# 43. Combined Progress Representation

A system MAY represent both completion dimensions simultaneously.

For example:

```text
Engineering Status: Done
Educational Status: Assessment Pending
```

or:

```text
Engineering Status: Verification Required
Educational Status: Objective Demonstrated
```

Stage 3 defines the semantic distinction.

Stage 5 MAY later determine implementation representation.

---

# 44. Known Failure Blocks Engineering Done

A known unresolved failure MUST block Engineering Done when it invalidates an applicable completion claim.

Examples include:

- failing relevant test;
- unmet requirement;
- unresolved blocking review finding;
- known critical security defect;
- failed migration;
- failed deployment verification.

A failure MAY be non-blocking only when its irrelevance or acceptable residual-risk status is established.

---

# 45. Inapplicable Checks Do Not Block Engineering Done

A task MUST NOT remain incomplete because an irrelevant process activity was not performed.

For example:

- a local non-deployed tool change MAY require no deployment activity;
- a trivial UI text correction MAY require no architecture artifact;
- a change without meaningful security impact MAY require no dedicated security review.

Completion is based on applicable obligations, not maximum ceremony.

---

# 46. Engineering Done and Artifacts

Engineering Done requires enough persistent project context where continuing engineering value exists.

It MUST NOT require persistence of:

- every tool command;
- every AI message;
- every debugging hypothesis;
- every intermediate plan version;
- every passing test output.

Artifact retention follows `04-Engineering-Artifacts-and-Traceability.md`.

---

# 47. Engineering Done and Traceability

For applicable tasks, completion SHOULD remain traceable enough to understand:

1. what engineering need was addressed;
2. what changed;
3. what evidence supports correctness;
4. what blocking findings existed and how they were resolved;
5. what material residual risk remains.

Higher-rigor tasks SHOULD preserve deeper relationships to requirements, decisions, risks, and delivery evidence.

---

# 48. Engineering Completion Decision Boundary

Stage 3 defines the semantics of Engineering Done.

It does NOT introduce a new Agent Pipeline responsibility or modify the decision
boundaries defined by `04-Agent-Pipeline.md`.

Engineering Done MAY be determined from the applicable engineering outputs of
existing logical responsibilities, including review, security, implementation,
and project-context outputs.

No existing Pipeline responsibility gains new architectural authority merely
because its output contributes to an Engineering Done determination.

This document therefore defines:

```text
Completion Semantics
```

not:

```text
New Pipeline Role
or
New Physical Completion Agent
```

Stage 4 and Stage 5 MUST preserve this distinction.

---

# 49. Completion Reopening

Engineering Done MAY later be invalidated by new evidence.

Examples include:

- discovered regression;
- production incident;
- newly identified security flaw;
- invalidated assumption;
- incorrect requirement.

In such cases, a new development iteration SHOULD begin.

Historical completion need not be treated as dishonest if it was supported by sufficient evidence available at the time.

---

# 50. Development Methodology Completion Contract

The Stage 3 development methodology now defines:

- real-project development purpose;
- adaptive development lifecycle;
- proportional engineering rigor;
- development planning;
- engineering quality;
- verification;
- review;
- security integration;
- engineering artifacts;
- traceability;
- development-learning integration;
- Superpowers integration boundary;
- Engineering Definition of Done.

These responsibilities form the Stage 3 normative methodology set.

---

# 51. Stage 3 Document Dependency Model

The final Stage 3 dependency chain is:

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

Each downstream document refines upstream semantics.

No downstream Stage 3 document SHOULD redefine an upstream responsibility silently.

---

# 52. Stage 3 to Stage 4 Boundary

Stage 3 defines what development behavior and semantic boundaries are required.

Stage 4 may later determine how those responsibilities are expressed through bounded AI instructions.

Stage 4 MAY consume concepts such as:

- lifecycle activity;
- rigor;
- engineering context;
- learner participation expectation;
- applicable Superpowers capability;
- engineering evidence;
- candidate educational evidence;
- Engineering Done.

Stage 3 MUST NOT prescribe their prompt representation.

---

# 53. Stage 3 to Stage 5 Boundary

Stage 5 may later materialize approved Stage 1–4 contracts into a working Harness.

Stage 5 MAY determine:

- execution mechanisms;
- context access;
- integration implementation;
- physical agents;
- model calls;
- persistence;
- orchestration;
- Superpowers invocation mechanics.

Those implementation choices MUST preserve the semantic boundaries established by Stage 3.

---

# 54. Stage 3 Acceptance Conditions

Stage 3 SHOULD be considered ready for owner acceptance only if the complete document set is reviewed against:

- accepted Stage 1 architecture;
- accepted ADRs;
- accepted Stage 2 Educational Methodology;
- verified relevant Superpowers capabilities.

The review SHOULD confirm that Stage 3:

1. concerns the learner's real software product;
2. does not redefine ALH self-development methodology;
3. preserves application / learning-infrastructure separation;
4. preserves Stage 2 educational authority;
5. defines an adaptive software-development lifecycle;
6. defines proportional rigor;
7. defines engineering quality and verification;
8. defines purposeful engineering artifacts and traceability;
9. preserves meaningful learner participation;
10. distinguishes engineering evidence from educational evidence;
11. distinguishes Engineering Done from Educational Done;
12. integrates Superpowers without importing undocumented assumptions;
13. does not infer physical agents from logical responsibilities;
14. does not define Prompt Architecture;
15. does not define Harness Implementation.

---

# 55. Proposal Classification

## Observations

Stage 3 recognizes that verified Superpowers workflow semantics are generally compatible with disciplined software development but may be more prescriptive than ALH Stage 3 in specific areas.

Stage 3 therefore integrates Superpowers through capability mapping rather than methodology inheritance.

## Candidate ADRs

None identified.

No Stage 1 architectural boundary currently requires modification.

## Future Evolutions

Later work MAY evaluate more detailed Superpowers capability mappings after Stage 3 acceptance and before implementation.

Such mappings SHOULD remain version-aware because Superpowers evolves independently.

---

# 56. Integration Anti-Patterns

The following patterns are inconsistent with this document.

## Superpowers-as-Authority

Allowing Superpowers to determine ALH educational or architectural semantics.

## Methodology Import

Treating the entire Superpowers methodology as automatically normative for ALH.

## Capability Invention

Assuming a Superpowers capability that has not been verified.

## TDD Conflation

Treating Superpowers strict TDD semantics as the universal definition of Stage 3 verification.

## Subagent Conflation

Treating Superpowers subagents as physical implementations of Stage 1 logical Pipeline responsibilities.

## Workflow Completion Conflation

Treating completion of a Superpowers workflow as automatic Engineering Done.

## Educational Completion Conflation

Treating Engineering Done and Educational Done as one state.

## AI Confidence Completion

Accepting AI assertions instead of verification evidence.

## Maximum-Ceremony Done

Requiring every possible lifecycle activity regardless of applicability.

## Capability Lock-In

Defining ALH development semantics in terms of implementation details unique to a current Superpowers version.

---

# 57. Explicit Non-Goals

This document does not define:

- how to modify Superpowers;
- Superpowers internal architecture;
- specific prompt files;
- skill invocation syntax;
- runtime tool routing;
- physical agent topology;
- subagent infrastructure;
- model selection;
- context-window construction;
- persistence technology;
- learner-memory implementation;
- educational assessment algorithms;
- ALH Harness implementation;
- Stage 4 Prompt Architecture.

---

# 58. Compliance

Superpowers integration and engineering completion are compliant with this document only if they:

1. use only verified Superpowers capabilities as normative dependencies;
2. preserve Superpowers as an immutable external dependency;
3. keep ALH methodology authoritative for Stage 3 semantics;
4. select capabilities according to engineering need;
5. preserve proportional rigor;
6. preserve meaningful learner participation;
7. do not equate Superpowers workflow automation with learner Automation Level;
8. do not equate Superpowers subagents with logical Pipeline responsibilities;
9. require evidence before engineering completion claims;
10. apply relevant verification to the current implementation;
11. resolve applicable blocking findings;
12. satisfy applicable security, documentation, and delivery obligations;
13. distinguish Engineering Done from Educational Done;
14. preserve material residual risk explicitly;
15. remain valid when a particular Superpowers capability is unavailable;
16. avoid dependence on undocumented external behavior.

---
