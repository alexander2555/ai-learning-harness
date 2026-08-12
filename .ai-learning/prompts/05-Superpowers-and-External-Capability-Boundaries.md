# Superpowers and External Capability Boundaries

Status: Accepted
Version: 1.0

Parent Documents

- 00-Prompt-Architecture.md
- 01-Instruction-Responsibility-Model.md
- 02-Instruction-Authority-and-Composition.md
- 03-Context-and-Truth-Contracts.md
- 04-Engineering-and-Educational-Instruction-Boundaries.md
- 00-Development-Methodology.md
- 06-Superpowers-Integration-and-Engineering-Done.md

Related Documents

- 01-Development-Lifecycle.md
- 02-Development-Rigor-and-Planning.md
- 03-Engineering-Quality-and-Verification.md
- 05-Development-Learning-Integration.md
- 06-Instruction-Outputs-Claims-and-Stage-5-Contracts.md

---

# 1. Purpose

This document defines the Prompt Architecture boundary between AI Learning Harness (ALH) Instruction Responsibilities and Superpowers or other external engineering capabilities.

It specifies:

- how ALH responsibilities relate to external capabilities;
- how capability mapping differs from methodology inheritance;
- how external capability contracts are respected;
- how external capabilities affect instruction authority;
- how external execution topology remains distinct from ALH responsibility topology;
- how capability applicability is interpreted;
- how capability truth is established;
- how unavailable capabilities are handled;
- how external capability results are interpreted;
- how engineering and educational semantics remain owned by ALH;
- what external-capability semantics Stage 5 MUST preserve.

This document does not define:

- how Superpowers is installed;
- how skills are discovered physically;
- how skills are invoked at runtime;
- which model executes a capability;
- how many model calls occur;
- how subagents are instantiated;
- how runtime routing works;
- how external capability state is persisted;
- how tool permissions are implemented;
- how ALH itself implements Superpowers workflows.

Those concerns belong to the external capability itself or to downstream implementation.

---

# 2. Architectural Status of Superpowers

Superpowers is an immutable external workflow and capability dependency of ALH.

ALH MUST NOT:

- modify Superpowers;
- redefine Superpowers-owned workflow semantics;
- duplicate Superpowers-owned workflows as ALH methodology;
- infer ALH architecture from Superpowers execution structure.

The accepted relationship is:

```text
ALH
        =
Required Architectural,
Educational,
and Development Semantics

Superpowers
        =
Applicable External Workflow /
Capability Execution
```

Superpowers helps execute engineering work.

It does not define ALH architecture or educational methodology.

---

# 3. Core Principle

The governing principle is:

```text
Accepted ALH Obligation
        ↓
Required Semantic Outcome
        ↓
Applicable Capability Need
        ↓
Verified External Capability,
where appropriate
        ↓
Capability-Owned Execution
        ↓
Result / Evidence
        ↓
ALH-Bounded Interpretation
```

This relationship MUST NOT be inverted.

In particular:

```text
External Capability
        ≠
Source of ALH Responsibility
```

and:

```text
External Workflow
        ≠
ALH Methodology
```

and:

```text
External Execution Topology
        ≠
ALH Instruction Topology
```

---

# 4. External Capability

An **External Capability** is a reusable capability whose operational behavior is owned outside the ALH Prompt Architecture responsibility being defined.

An external capability MAY provide:

- workflow support;
- engineering analysis;
- planning;
- implementation support;
- verification;
- review;
- debugging;
- repository operations;
- other reusable engineering behavior.

Superpowers is the primary accepted external workflow/capability dependency relevant to this document.

Other capabilities MAY exist in the surrounding IDE, coding-agent, project, or verified external environment.

The existence of an external capability does not automatically make it applicable.

---

# 5. Capability Contract Ownership

The external capability provider or upstream capability definition owns the verified execution contract of that capability.

ALH owns:

- the ALH obligation for which the capability may be relevant;
- the Instruction Responsibility authority surrounding its use;
- the interpretation of capability results within ALH;
- educational and engineering semantics established by accepted Stage 1–3 documents.

Therefore:

```text
Capability Contract Ownership
        ≠
ALH Semantic Authority
```

and:

```text
External Capability Execution Contract
        ≠
Authority Over the ALH Obligation
```

Where a specific external capability is relied upon, ALH MUST NOT represent behavior that contradicts the capability's verified execution contract as valid use of that capability.

ALH MUST either:

- respect the verified capability contract when relying on that capability; or
- not represent the incompatible behavior as use of that capability.

Respecting a capability contract MUST NOT transfer ownership of the surrounding ALH responsibility, authority, methodology, or completion semantics to the external capability.

---

# 6. Capability Mapping

Stage 4 uses **Capability Mapping** to relate accepted ALH obligations to applicable external capabilities.

Conceptually:

```text
ALH Obligation
        ↓
Required Outcome
        ↓
Capability Requirement
        ↓
Candidate External Capability
        ↓
Verified Applicability
```

Capability Mapping answers:

> Can this external capability appropriately help satisfy the accepted ALH obligation?

It does not answer:

> Should ALH inherit the methodology of this capability universally?

Therefore:

```text
Capability Mapping
        ≠
Methodology Inheritance
```

---

# 7. No Methodology Inheritance

Superpowers MAY impose workflow rules that are more prescriptive than accepted ALH Stage 3 methodology.

Such rules MAY include capability-specific expectations concerning:

- design before implementation;
- plan structure;
- test-first development;
- debugging sequence;
- review procedure;
- verification before completion;
- worktree use;
- branch finishing;
- subagent execution.

These rules belong to the applicable Superpowers capability or workflow.

They MUST NOT automatically become:

- universal Stage 3 engineering rules;
- universal Stage 4 instruction rules;
- new ALH lifecycle stages;
- new ALH authority domains;
- new ALH Instruction Responsibilities.

ALH MUST preserve its accepted methodology independently.

---

# 8. Capability-Specific Prescriptiveness

The following two statements MAY both be true:

```text
ALH does not universally require behavior X.
```

and:

```text
An external capability that is mapped as applicable and subsequently
used requires behavior X according to its own valid execution contract.
```

There is no contradiction if the ownership boundary is explicit.

For example, Stage 3 planning is proportional and context-dependent.

A planning capability that is mapped as applicable and subsequently used MAY impose a particular plan format as part of its verified execution contract.

That format is then a condition of using that capability.

It does not become the canonical ALH planning format.

---

# 9. Applicability

External capability applicability MUST be determined relative to an accepted ALH obligation and current context.

Applicability MAY depend on:

- the engineering activity;
- the required outcome;
- Engineering Rigor;
- project constraints;
- capability availability;
- capability contract;
- current project state;
- security constraints;
- environmental constraints.

Stage 4 MUST NOT define a universal rule that every available capability must always be used.

Likewise, Stage 4 MUST NOT define a universal rule that a capability is irrelevant merely because ALH could theoretically express the underlying obligation without it.

---

# 10. Stage 3 Applicability vs Capability Applicability

Stage 3 defines engineering activity applicability using:

- Required;
- Conditional;
- Proportional;
- Not Applicable.

External capability applicability is a different semantic question.

Therefore:

```text
Engineering Activity Applicability
        ≠
Specific Capability Applicability
```

An engineering activity MAY be Required while a particular external capability is unavailable or unsuitable.

Likewise, a capability MAY be available without the corresponding engineering activity being required.

Stage 4 MUST NOT collapse these concepts.

---

# 11. Engineering Obligation Survives Capability Unavailability

If a specific external capability is unavailable, the accepted engineering obligation does not disappear.

Therefore:

```text
Capability Unavailable
        ≠
Engineering Obligation Removed
```

The underlying requirement MAY be satisfied through another appropriate mechanism available in:

- the project;
- the IDE;
- the coding agent;
- another verified external capability;
- other accepted execution support.

ALH MUST NOT silently waive the obligation merely because the preferred capability is unavailable.

---

# 12. No Hidden Replacement Workflow

Capability unavailability also MUST NOT cause Stage 4 to create an implicit ALH-owned replacement for a Superpowers workflow.

Therefore:

```text
Superpowers Capability Unavailable
        ≠
Permission to Reimplement Superpowers
```

ALH MAY express the underlying engineering outcome that still needs to be satisfied.

It MUST NOT duplicate the unavailable capability's proprietary or externally owned workflow merely to preserve the appearance of capability availability.

The distinction is:

```text
Preserve Obligation
        ≠
Clone Capability Workflow
```

---

# 13. Capability Truth

Material claims about an external capability MUST be grounded in sufficiently authoritative and current information.

Instruction behavior MUST NOT assume capability semantics from:

- historical ALH documents;
- deprecated prompt documents;
- remembered behavior;
- old summaries;
- capability names alone;
- execution topology inferred from another version.

Where exact capability behavior materially affects instruction behavior, it MUST be verified against appropriate current upstream information.

This requirement follows `03-Context-and-Truth-Contracts.md`.

---

# 14. Capability Version Sensitivity

External capabilities MAY evolve independently of ALH.

A capability description that was previously accurate MAY become stale.

Therefore:

```text
Previously Verified Capability Behavior
        ≠
Automatically Current Capability Behavior
```

Stage 4 does not define capability version pinning or runtime version detection.

It defines only the semantic requirement that materially significant capability assumptions be sufficiently current for the decision being made.

---

# 15. Capability Names Are Not Contracts

A capability name MAY suggest its purpose.

It does not establish its exact semantics.

For example, a capability named:

```text
code review
```

does not by name alone establish:

- review independence;
- required inputs;
- blocking semantics;
- execution topology;
- completion criteria.

Likewise, a capability named:

```text
test-driven development
```

does not by name alone establish its exact exceptions or required sequence.

Exact semantics MUST NOT be invented from labels.

---

# 16. Verified Superpowers Capability Areas

At the time of this Stage 4 design, current upstream Superpowers provides verified capability areas including support for:

- brainstorming and design;
- writing plans;
- plan execution;
- test-driven development;
- systematic debugging;
- code review;
- verification before completion;
- git worktrees;
- branch finishing;
- subagent-driven development.

This inventory is contextual, not architectural.

It MUST NOT be interpreted as:

- the canonical ALH development lifecycle;
- the canonical ALH Instruction Responsibility set;
- a required one-to-one mapping;
- a prompt-file structure;
- a runtime routing graph;
- a physical agent topology.

Exact capability semantics MUST still be verified when materially relied upon.

The inventory is illustrative and non-exhaustive.

Presence in this section MUST NOT be treated as sufficient evidence that a capability remains available or retains the same semantics when a later ALH decision materially depends on it.

Material capability dependencies MUST be verified according to the freshness and authority requirements of `03-Context-and-Truth-Contracts.md`.

---

# 17. Capability Inventory Is Non-Normative for ALH Structure

The verified capability inventory exists to support mapping.

It does not define ALH decomposition.

Therefore:

```text
Superpowers Skill Set
        ≠
ALH Responsibility Catalog
```

and:

```text
One Skill
        ≠
One Instruction Responsibility
```

and:

```text
One Instruction Responsibility
        ≠
One Skill
```

One ALH responsibility MAY use multiple capabilities.

Multiple ALH responsibilities MAY interact with one capability where authority remains bounded.

A responsibility MAY also require no external capability.

---

# 18. Superpowers Brainstorming / Design

Current verified Superpowers behavior includes a brainstorming/design capability with its own design-before-implementation discipline.

ALH MAY map applicable design needs to this capability.

ALH MUST NOT infer from that capability that every Stage 3 task universally requires the same brainstorming sequence.

The distinction is:

```text
Stage 3
        =
Applicable Design Obligation

Superpowers Brainstorming
        =
One Verified Capability
for Satisfying Applicable Design Work
```

Where the capability is mapped as applicable and actually used, its verified contract MUST be respected.

---

# 19. Superpowers Planning

Current verified Superpowers behavior includes planning capability with its own planning structure and execution expectations.

ALH Stage 3 planning remains:

- proportional;
- context-dependent;
- revisable.

Therefore:

```text
ALH Planning Semantics
        ≠
Superpowers Plan Format
```

A Superpowers plan MAY be a valid engineering artifact where applicable.

Its format MUST NOT become a universal ALH Prompt Architecture requirement merely because Superpowers uses it.

---

# 20. Superpowers Test-Driven Development

Current verified Superpowers behavior includes a prescriptive test-driven-development capability.

ALH Stage 3 independently defines applicable engineering verification semantics.

Therefore:

```text
Stage 3 Verification Obligation
        ≠
Universal Superpowers TDD Requirement
```

Where the Superpowers TDD capability is mapped as applicable and actually used, its verified execution contract MUST be respected.

Where it is not applicable or is not used by the execution environment, Stage 4 MUST NOT falsely claim that ALH universally requires the capability's complete workflow.

Applicable engineering verification obligations remain binding regardless.

---

# 21. Superpowers Systematic Debugging

Current verified Superpowers behavior includes systematic debugging with its own root-cause-oriented workflow.

ALH MAY map an applicable debugging need to this capability.

It MUST NOT duplicate the capability's detailed debugging workflow into ALH Prompt Architecture.

Stage 4 owns the boundary:

```text
Engineering Need:
    Diagnose and resolve applicable defect
```

Superpowers MAY own:

```text
Capability Execution:
    Specific debugging workflow
```

The capability result returns to ALH as context or engineering evidence according to its semantic status.

---

# 22. Superpowers Verification Before Completion

Current verified Superpowers behavior includes verification-before-completion capability semantics requiring current verification evidence before success claims.

This aligns with the independently required ALH principle:

```text
Evidence Before Claim
```

The ownership remains distinct.

Therefore:

```text
ALH Evidence-Before-Claim
        =
Stage 4 Semantic Requirement
```

while:

```text
Superpowers Verification Before Completion
        =
External Capability That MAY Help
Satisfy the Requirement
```

ALH's evidence requirement MUST NOT depend on the existence of this capability.

If the capability is unavailable, evidence-before-claim still applies.

---

# 23. Superpowers Code Review

Current verified Superpowers behavior includes code-review workflows that MAY use a reviewer subagent.

ALH Stage 3 independently defines Engineering Review semantics.

Therefore:

```text
Superpowers Reviewer Subagent
        ≠
ALH Engineering Review Responsibility
```

Where Engineering Review requires Semantic Independence, that independence remains governed by `02-Instruction-Authority-and-Composition.md`.

A physical reviewer subagent MAY be one Stage 5 mechanism.

It is not the Stage 4 definition of independence.

---

# 24. Superpowers Subagent-Driven Development

Current verified Superpowers behavior includes subagent-driven development with execution semantics involving distinct subagent roles.

Those roles belong to Superpowers execution topology.

They MUST NOT be interpreted as:

- ALH logical Pipeline responsibilities;
- ALH Instruction Responsibilities;
- required ALH physical agents;
- required model calls;
- Stage 4 composition boundaries.

Therefore:

```text
Superpowers Subagent
        ≠
ALH Logical Responsibility
        ≠
ALH Instruction Responsibility
```

Stage 5 MAY integrate such execution mechanisms.

Stage 4 MUST remain topology-neutral.

---

# 25. External Execution Topology

External capabilities MAY internally use:

- subagents;
- multiple model calls;
- worktrees;
- branches;
- tool invocations;
- internal workflows;
- review loops;
- execution ledgers;
- isolated contexts.

These are capability-owned or runtime implementation details.

ALH MUST NOT infer its own architecture from them.

Therefore:

```text
External Execution Topology
        ≠
ALH Instruction Topology
```

and:

```text
External Physical Separation
        ≠
ALH Semantic Independence
```

Semantic independence remains defined by Stage 4 authority contracts.

---

# 26. Capability Applicability and Invocation Boundary

Stage 4 MAY determine that a verified external capability is semantically applicable, appropriate, or preferred for satisfying an accepted ALH obligation.

This determination is a capability-mapping decision.

It does not determine whether, when, or how the capability is physically invoked.

Therefore:

```text
Capability Applicability / Mapping
        ≠
Physical Capability Selection
        ≠
Physical Invocation
```

Stage 4 MUST NOT assume:

- a particular tool call;
- a command;
- a runtime dispatcher;
- a routing table;
- a model-selection rule;
- an invocation count;
- a physical execution sequence.

Where an eventual execution environment uses a mapped capability, that use MUST preserve the capability and ALH semantic boundaries defined by Stage 4.

Physical capability selection and invocation belong to Stage 5 or to the surrounding execution environment, as applicable.

---

# 27. Capability Selection Authority

An Instruction Responsibility MAY identify that a verified external capability is semantically appropriate within its accepted authority.

This does not grant authority to:

- modify the capability;
- change runtime permissions;
- expand tool access;
- override security controls;
- define execution topology.

Likewise, capability availability does not expand Instruction Responsibility authority.

Therefore:

```text
Capability Access
        ≠
Authority Expansion
```

---

# 28. Capability Context Contract

Where behavior materially depends on an external capability, the relevant Context Contract SHOULD identify:

- required capability outcome;
- verified capability identity;
- relevant capability contract;
- applicability conditions;
- material prerequisites;
- known limitations;
- freshness requirements for capability knowledge;
- expected result semantics;
- behavior when capability information is uncertain;
- behavior when capability is unavailable.

This is a semantic context contract.

It MUST NOT define runtime capability discovery or invocation infrastructure.

---

# 29. Capability Results

External capability output is context.

Its semantic status depends on what the capability actually establishes.

Therefore:

```text
Capability Output
        ≠
Automatic Authoritative Truth
```

A capability result MAY be:

- authoritative evidence for a bounded engineering fact;
- derived context;
- advisory context;
- verification evidence;
- review findings;
- an implementation artifact;
- uncertain or incomplete output.

Its status MUST be determined using `03-Context-and-Truth-Contracts.md`.

---

# 30. Capability Success Does Not Equal ALH Completion

Successful execution of an external capability MUST NOT automatically imply:

- Engineering Done;
- Educational Done;
- competency mastery;
- learner-state progression;
- successful deployment;
- satisfaction of unrelated engineering obligations.

Therefore:

```text
Capability Success
        ≠
Automatic Engineering Done
```

and:

```text
Capability Success
        ≠
Educational Done
```

The capability establishes only what its verified result supports.

---

# 31. Verification Results from External Capabilities

Where an external capability performs verification, its result MAY contribute verification evidence.

The result MUST be interpreted according to:

- what was verified;
- against what project state;
- applicable freshness;
- scope;
- limitations;
- provenance.

An external verification result MUST NOT be generalized beyond its actual evidence.

This follows `03-Context-and-Truth-Contracts.md` and `04-Engineering-and-Educational-Instruction-Boundaries.md`.

---

# 32. Review Results from External Capabilities

External review capability output MAY constitute engineering review findings where the applicable review contract is satisfied.

The use of a capability named or implemented as "review" does not by itself prove Semantic Independence.

Independence MUST be established according to Stage 4 authority semantics.

External review findings MUST NOT automatically become:

- educational assessment;
- competency evaluation;
- learner-state updates.

They MAY create Engineering Observations or Candidate Educational Evidence where appropriate.

---

# 33. External Capability and Candidate Educational Evidence

Use of an external capability MAY create educationally relevant observations.

Examples MAY include:

- learner response to review findings;
- learner correction of generated implementation;
- learner interpretation of verification failure;
- learner critique of a generated plan;
- learner diagnosis of a debugging result.

Such observations MAY become Candidate Educational Evidence.

The capability itself MUST NOT declare accepted educational evidence unless accepted architecture explicitly assigns it that educational authority.

Therefore:

```text
External Capability Observation
        MAY
become Candidate Educational Evidence
```

but:

```text
External Capability Output
        ≠
Automatic Educational Evidence
```

---

# 34. Learner Participation and External Capabilities

External capabilities MUST be used consistently with applicable educational assistance constraints.

A capability that can perform an engineering task automatically does not imply that the learner should always be bypassed.

Prompt Architecture MUST preserve:

- learning objective;
- Automation Level;
- expected learner participation;
- assistance attribution.

At the same time, educational constraints MUST NOT cause the external capability to be represented as successfully used when its own contract was violated.

---

# 35. Automation Level and Capability Use

Automation Level MAY affect how the learner participates before, during, or after capability-supported engineering work.

It MUST NOT determine:

- runtime permission to invoke the capability;
- tool access;
- capability installation;
- external agent autonomy;
- execution topology.

Therefore:

```text
Automation Level
        ≠
External Capability Permission
```

The distinction established in `04-Engineering-and-Educational-Instruction-Boundaries.md` remains normative.

---

# 36. Engineering Rigor and Capability Use

Engineering Rigor MAY influence whether a capability is useful for satisfying an engineering obligation.

For example, higher rigor MAY make stronger verification or review support more relevant.

However:

```text
Engineering Rigor
        ≠
Mandatory External Capability
```

unless accepted methodology explicitly establishes that requirement.

Rigor governs engineering depth.

It does not prescribe a physical capability topology.

---

# 37. Security Boundary

External capability use MUST preserve accepted ALH and project security constraints.

Capability availability MUST NOT imply permission to:

- access unrelated sensitive context;
- expand tool permissions;
- expose learner state unnecessarily;
- modify security boundaries;
- bypass project controls.

Stage 4 defines the semantic constraint.

Stage 5 defines concrete capability access control and enforcement.

---

# 38. Context Minimization for External Capabilities

External capabilities SHOULD receive only context materially relevant to their accepted purpose.

Where learner context is not needed to satisfy an engineering capability, it SHOULD NOT be exposed merely because ALH possesses it.

Therefore:

```text
Capability Integration
        ≠
Universal Context Access
```

This preserves:

- ADR-001 separation;
- context minimization;
- learner privacy;
- clearer authority boundaries.

Concrete context transport belongs to Stage 5.

---

# 39. Application / Learning Infrastructure Separation

External engineering capabilities MAY operate on the learner's project.

This MUST NOT turn application artifacts into storage for ALH learner state.

External capability output placed in the project MUST NOT silently become authoritative storage for:

- competency state;
- Learning Debt;
- Automation Level;
- educational progression;
- learner-memory state.

ADR-001 remains normative.

---

# 40. Capability Failure

An external capability MAY:

- fail to execute;
- return incomplete output;
- produce uncertain output;
- encounter unavailable prerequisites;
- produce evidence of engineering failure.

Capability failure MUST NOT be represented as capability success.

The Instruction Responsibility SHOULD determine, within its authority:

- whether the underlying obligation remains unsatisfied;
- whether another appropriate mechanism may be used;
- whether user action is required;
- whether uncertainty must be exposed.

It MUST NOT fabricate a successful capability result.

---

# 41. Capability Conflict

An external capability contract MAY appear to conflict with an ALH obligation.

The conflict MUST first be classified.

Possible cases include:

1. the capability is simply not applicable;
2. ALH is attempting to use the capability contrary to its verified contract;
3. the capability workflow is more prescriptive than ALH methodology but valid when the capability is applicable and actually used;
4. an actual architectural or methodological conflict exists.

Stage 4 MUST NOT resolve these cases by silently rewriting either ALH semantics or external capability semantics.

---

# 42. Incompatible Capability

If a capability cannot be used without violating an accepted ALH architectural, educational, security, or development boundary, the capability MUST NOT be treated as applicable in that context.

Therefore:

```text
Available Capability
        ≠
Applicable Capability
```

ALH MUST preserve its accepted responsibilities.

If preserving them requires changing an accepted architectural boundary, that proposal MUST be classified as a Candidate ADR rather than hidden inside capability integration.

---

# 43. Capability-Owned Internal Sequence

An external capability that is mapped as applicable and actually used MAY require an internal sequence.

Stage 4 MAY recognize that the sequence belongs to the capability contract.

It MUST NOT copy the internal sequence into ALH as a new lifecycle or routing graph.

Therefore:

```text
Capability Internal Workflow
        ≠
ALH Development Lifecycle
```

and:

```text
Capability Internal Workflow
        ≠
ALH Prompt Routing
```

This remains true even when the capability sequence is mandatory for correct capability use.

---

# 44. No Capability Simulation

ALH MUST NOT claim that a capability was used when it was not actually available or executed through an applicable mechanism.

It MAY describe:

- what the capability would normally provide;
- what engineering obligation remains;
- what alternative verified mechanism may satisfy that obligation.

It MUST distinguish these from actual capability execution.

Therefore:

```text
Describing Capability Behavior
        ≠
Executing Capability
```

---

# 45. No Capability Result Fabrication

Instruction Responsibilities MUST NOT invent:

- capability invocation;
- capability success;
- capability failure;
- test output;
- review output;
- debugging results;
- plan execution results;
- branch operations.

Where current evidence is unavailable, uncertainty MUST be exposed.

This is a direct application of:

```text
Evidence Before Claim
```

Detailed semantics for factual claims, execution claims, completion claims, uncertainty, and output status are defined in `06-Instruction-Outputs-Claims-and-Stage-5-Contracts.md`.

---

# 46. External Capability Explainability

Where external capability use materially affects an engineering or educational decision, output SHOULD make sufficiently clear:

- what capability was relevant;
- what obligation it served;
- what result was obtained where known;
- what limitations remain;
- what semantic authority the result has.

Explainability MUST NOT require disclosure of internal chain-of-thought or external capability internals beyond what is needed to justify the decision.

---

# 47. Capability Composition

Multiple external capabilities MAY contribute to one accepted ALH obligation.

One capability MAY also contribute to multiple obligations.

This does not merge their authority.

Conceptually:

```text
ALH Obligation
        ↓
Capability A
+
Capability B
        ↓
Combined Engineering Evidence
```

The evidence MUST still be interpreted according to its provenance, scope, freshness, and applicable authority.

Capability composition MUST NOT create new ALH authority implicitly.

---

# 48. Instruction Composition with External Capabilities

An Instruction Responsibility MAY be composed with capability-related instructions.

Such composition MUST preserve:

- responsibility identity;
- authority boundaries;
- capability ownership;
- context contracts;
- educational constraints;
- engineering obligations.

Therefore:

```text
Instruction Composition
+
Capability Integration
        ≠
Responsibility Merger
```

and:

```text
Capability Integration
        ≠
Authority Transfer
```

Physical packaging remains Stage 5 responsibility.

---

# 49. Capability Boundary Example — Verification

```text
ALH Engineering Obligation:
    Obtain sufficient current verification evidence.

Applicable External Capability:
    Superpowers verification-before-completion,
    where available and appropriate.

Capability Contract:
    Respect verified upstream behavior.

Capability Result:
    Verification evidence within the scope
    actually established.

ALH Interpretation:
    Determine what claims the evidence supports.

Engineering Done:
    Not automatic.

Educational Done:
    Not affected automatically.

Physical Invocation:
    Not defined by Stage 4.
```

---

# 50. Capability Boundary Example — Code Review

```text
ALH Engineering Obligation:
    Perform applicable Engineering Review.

External Capability:
    Verified Superpowers code-review capability,
    where applicable.

Capability Execution:
    Capability-owned.

Review Independence:
    Must satisfy ALH Semantic Independence
    where independence is required.

Review Findings:
    Engineering context.

Candidate Educational Evidence:
    MAY arise from learner response.

Learner-State Update:
    Not authorized by review capability.

Physical Reviewer Topology:
    Not defined by Stage 4.
```

---

# 51. Capability Boundary Example — TDD

```text
ALH Engineering Obligation:
    Produce implementation with sufficient
    applicable verification.

External Capability:
    Superpowers test-driven-development,
    where mapped as applicable and actually used.

Capability Contract:
    Its verified test-first semantics apply
    to valid use of that capability.

ALH Methodology:
    Does not become universally identical
    to the capability workflow.

Capability Unavailable:
    Underlying engineering obligation remains.

Stage 5 Topology:
    Not defined.
```

---

# 52. Capability Boundary Example — Subagent Development

```text
ALH Instruction Responsibility:
    Implementation support.

External Capability:
    Superpowers subagent-driven development,
    where applicable.

External Topology:
    Capability-owned subagent execution.

ALH Responsibility Identity:
    Unchanged.

ALH Authority:
    Unchanged.

Educational Constraints:
    Learner participation and assistance
    remain governed by Stage 2 / Stage 4.

Physical Mapping:
    Not inferred from subagent roles.
```

---

# 53. External Capability Anti-Patterns

The following patterns are prohibited or strongly discouraged.

## 53.1 Methodology Inheritance

Copying an external capability workflow into ALH methodology merely because the capability exists.

## 53.2 Skill-to-Responsibility Mapping

Creating one ALH Instruction Responsibility per Superpowers skill.

## 53.3 Subagent-to-Agent Mapping

Treating Superpowers subagents as ALH physical or logical agents.

## 53.4 Capability Name Guessing

Inferring exact capability semantics from its name.

## 53.5 Capability Availability Waives Obligation

Treating an unavailable capability as removal of the engineering obligation.

## 53.6 Hidden Workflow Reimplementation

Recreating Superpowers-owned workflow inside ALH when the capability is unavailable.

## 53.7 Capability Success Equals Completion

Treating successful skill execution as automatic Engineering Done or Educational Done.

## 53.8 Capability Output Equals Authority

Treating all external capability output as authoritative truth.

## 53.9 Automation Level Equals Capability Permission

Using learner independence as runtime capability access control.

## 53.10 Rigor Equals Capability Topology

Mapping R1–R4 directly to agents, tools, or capability counts.

## 53.11 Universal Context Exposure

Providing learner or project context to external capabilities without semantic need.

## 53.12 Historical Capability Assumption

Using old capability behavior without current verification where exact semantics matter.

## 53.13 Capability Simulation

Claiming an external capability was used without evidence of actual applicable execution.

---

# 54. Capability Boundary Validation

A material external-capability integration SHOULD be validated using the following questions:

1. What accepted ALH obligation exists independently of the capability?
2. What outcome is required?
3. Why is the capability relevant?
4. Is its current behavior sufficiently verified?
5. Is the capability applicable in this context?
6. What parts of its behavior are capability-owned?
7. Are those semantics being respected?
8. Has any capability-specific workflow been incorrectly promoted into universal ALH methodology?
9. Has external topology been incorrectly mapped to ALH responsibilities?
10. Does capability access expand Instruction Responsibility authority?
11. What semantic status does the capability result have?
12. Does capability success establish only what the evidence supports?
13. What happens if the capability is unavailable?
14. Is ALH accidentally reimplementing the capability?
15. Are learner participation and assistance constraints preserved?
16. Is unnecessary learner context exposed?
17. Are Engineering Done and Educational Done still independent?
18. Does the design assume a physical invocation or routing mechanism?

An integration failing questions 7–17 MUST be redesigned.

A design failing question 18 SHOULD be examined for premature Stage 5 coupling.

---

# 55. Stage 5 Contract

Stage 5 MUST materialize external-capability integration while preserving:

- ALH obligation ownership;
- capability ownership;
- capability mapping rather than methodology inheritance;
- capability applicability;
- current capability-truth requirements;
- capability-contract compliance;
- responsibility authority boundaries;
- topology neutrality at the Stage 4 contract level;
- learner participation;
- assistance attribution where relevant;
- context minimization;
- ADR-001 separation;
- evidence-before-claim;
- Engineering Done / Educational Done separation.

Stage 5 MAY determine:

- capability discovery;
- capability invocation;
- runtime routing;
- model selection;
- tool permissions;
- physical subagents;
- invocation count;
- execution sequencing;
- context transport;
- capability-result capture.

Those choices MUST NOT redefine the semantic contracts established here.

---

# 56. Change Governance

External capability integration MAY expose tension with accepted ALH architecture or methodology.

Findings SHOULD be classified as:

## Observation

A capability fact or mapping clarification that does not change accepted ALH architecture.

## Candidate ADR

A proposed change to an accepted architectural responsibility, authority boundary, dependency relationship, or trust boundary.

## Future Evolution

A useful capability integration improvement intentionally deferred beyond current Stage 4 scope.

External capability behavior MUST NOT silently modify accepted ALH architecture.

---

# 57. Acceptance Criteria

This document is satisfied when Stage 4 can consistently answer:

1. What is the architectural status of Superpowers?
2. What is an External Capability?
3. Who owns capability behavior?
4. What is Capability Mapping?
5. Why is Capability Mapping different from Methodology Inheritance?
6. How can a capability be more prescriptive than ALH without redefining ALH methodology?
7. How is capability applicability determined?
8. How does capability applicability differ from Stage 3 activity applicability?
9. What happens when a capability is unavailable?
10. Why must ALH not create a hidden replacement workflow?
11. How is current capability truth established?
12. Why are capability names insufficient to establish semantics?
13. Why does the Superpowers skill inventory not define ALH structure?
14. How are brainstorming, planning, TDD, debugging, verification, review, and subagent capabilities bounded?
15. Why does external execution topology not define ALH topology?
16. What is the boundary between semantic capability selection and physical invocation?
17. Does capability access expand authority?
18. What semantic status may capability results have?
19. Why does capability success not imply Engineering Done?
20. How may capability activity create Candidate Educational Evidence?
21. How are learner participation and Automation Level preserved?
22. How are Engineering Rigor and capability use kept distinct?
23. How are security, context minimization, and ADR-001 preserved?
24. How are capability failure and capability conflict handled?
25. What external-capability semantics MUST Stage 5 preserve?

---

# 58. Summary

ALH owns its accepted architectural, educational, and development semantics.

External capabilities own their verified execution contracts.

The central relationship is:

```text
Accepted ALH Obligation
        ↓
Required Outcome
        ↓
Capability Mapping
        ↓
Applicable Verified Capability
        ↓
Capability-Owned Execution
        ↓
Bounded Result
        ↓
ALH Interpretation
```

The critical distinctions are:

```text
Capability Mapping
        ≠
Methodology Inheritance
```

```text
External Capability
        ≠
Source of ALH Responsibility
```

```text
Superpowers Skill
        ≠
ALH Instruction Responsibility
```

```text
Superpowers Subagent
        ≠
ALH Logical Responsibility
        ≠
ALH Instruction Responsibility
```

```text
External Execution Topology
        ≠
ALH Instruction Topology
```

```text
Capability Access
        ≠
Authority Expansion
```

```text
Capability Output
        ≠
Automatic Authoritative Truth
```

```text
Capability Success
        ≠
Automatic Engineering Done
        ≠
Educational Done
```

```text
Capability Unavailable
        ≠
Engineering Obligation Removed
```

```text
Preserve Obligation
        ≠
Clone Capability Workflow
```

Prompt Architecture integrates external capabilities by mapping accepted obligations to verified reusable capability behavior without importing external methodology, topology, or authority into ALH.

The next document defines the semantic contracts for Instruction Responsibility outputs, factual claims, completion claims, uncertainty, explainability, and the implementation obligations Stage 5 must later materialize:

`06-Instruction-Outputs-Claims-and-Stage-5-Contracts.md`
