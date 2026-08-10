# Instruction Precedence and Conflict Resolution

Version: 0.1 Draft

Parent Documents

- 00-Prompt-Architecture.md
- 01-Instruction-Responsibility-Model.md
- 02-Instruction-Composition.md

Related Documents

- 03-System-Architecture.md
- 04-Agent-Pipeline.md
- 00-Learning-Model.md
- 00-Development-Methodology.md

---

# 1. Purpose

This document defines the semantic precedence and conflict-resolution model for AI Learning Harness (ALH) instructions.

It establishes how ALH determines which instruction authority governs when applicable instructions, responsibilities, constraints, context, or task requirements cannot all be satisfied consistently.

Its purpose is to prevent:

- silent override of authoritative semantics;
- implementation-specific precedence from becoming project semantics;
- prompt-local wording from acquiring unintended authority;
- task convenience from overriding architectural or educational constraints;
- conflict suppression through omission or reinterpretation.

This document defines project-semantic precedence.

It does not define:

- vendor-specific system, developer, user, or tool message precedence;
- runtime prompt ordering;
- message serialization;
- model-specific conflict behavior;
- prompt-loader implementation;
- orchestration algorithms.

Stage 5 MUST implement the approved semantic model without redefining it.

---

# 2. Precedence Principle

Instruction precedence follows authority, not textual position.

Conceptually:

```text
Authority
    ↓
Applicability
    ↓
Specific Constraint
    ↓
Instruction Expression
```

An instruction MUST NOT gain greater project authority merely because it is:

- newer;
- longer;
- more detailed;
- closer to the current task;
- placed later in a prompt;
- expressed by a stronger imperative;
- generated dynamically;
- easier to execute.

Textual specificity MAY refine an applicable higher-level requirement.

It MUST NOT contradict or silently replace that requirement.

---

# 3. Semantic Authority

Semantic authority is the right to define, constrain, interpret, or apply a project responsibility within an approved ownership boundary.

Authority originates from approved project sources and responsibilities.

Examples include:

- Stage 1 architectural authority;
- Stage 2 educational-methodology authority;
- Stage 3 development-methodology authority;
- approved ADR authority;
- subsystem-specific responsibility ownership;
- approved Stage 4 Prompt Architecture authority;
- bounded task authority supplied by the current interaction.

Semantic authority MUST remain distinct from execution capability.

Therefore:

```text
Can Execute
    ≠
May Decide

Can Generate
    ≠
May Define

Can Override Technically
    ≠
May Override Semantically
```

---

# 4. Authority Sources

Applicable instruction authority MAY derive from:

- accepted architecture;
- accepted ADRs;
- accepted educational methodology;
- accepted development methodology;
- approved Prompt Architecture;
- authoritative project state;
- bounded learner state;
- current interaction requirements;
- current task instructions.

These sources do not all possess the same kind of authority.

Precedence MUST therefore consider both:

- authority level;
- responsibility ownership.

A source with broad project authority MUST NOT automatically decide matters owned by a distinct subsystem.

Likewise, a responsibility owner MUST remain constrained by applicable higher-level architecture and methodology.

---

# 5. Authority Is Responsibility-Scoped

ALH MUST NOT use a simplistic universal rule such as:

```text
Architecture
    >
Methodology
    >
Context
    >
Task
```

for every semantic question.

Different sources own different responsibilities.

For example:

- Architecture owns architectural responsibilities and boundaries.
- Educational Methodology owns educational semantics.
- Development Methodology owns development discipline.
- Memory owns learner-specific persistent educational state assigned to it.
- Decision Engine owns educational decision-making assigned to it.
- Task instructions define bounded immediate work.

Therefore, precedence MUST first ask:

> Who owns this semantic question?

Only then SHOULD it determine how applicable constraints interact.

This prevents a broad but irrelevant source from displacing the correct responsibility owner.

---

# 6. Constraint Hierarchy

Although authority is responsibility-scoped, ALH has established cross-cutting architectural priorities.

The principle hierarchy remains:

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

Prompt Architecture MUST remain compatible with this hierarchy.

Where two otherwise valid choices conflict, lower-priority concerns MUST NOT override higher-priority concerns.

For example:

- automation MUST NOT override educational integrity;
- faster completion MUST NOT override engineering quality;
- adaptability MUST NOT require unexplained semantic changes;
- implementation convenience MUST NOT override architectural ownership.

This hierarchy constrains decisions.

It does not replace responsibility ownership.

---

# 7. Precedence Categories

Instruction conflicts SHOULD be analyzed using the following semantic categories.

## 7.1 Normative Conflict

Two applicable normative requirements cannot both be satisfied.

Example:

- one instruction requires preserving an accepted architectural boundary;
- another requires violating it.

Normative conflicts MUST NOT be hidden.

## 7.2 Authority Conflict

Two responsibilities appear to claim authority over the same decision.

Example:

- an Assessor instruction attempts to set competency state directly;
- competency interpretation belongs elsewhere.

Authority conflicts MUST be resolved by restoring approved ownership.

## 7.3 Context Conflict

Two context sources provide materially inconsistent information.

Example:

- persisted learner state differs from transient conversational claims.

Context conflicts MUST be handled according to context authority and freshness rules.

Detailed context semantics belong to `04-Context-Model.md`.

## 7.4 Task Conflict

A current task instruction conflicts with an applicable project constraint.

The project constraint MUST remain effective within its authority boundary.

## 7.5 Responsibility Conflict

Two otherwise valid instruction responsibilities cannot both operate as currently specified.

The conflict MUST be resolved without collapsing their ownership.

## 7.6 Methodology Conflict

An instruction interpretation would violate accepted educational methodology.

The accepted methodology MUST prevail unless it is explicitly changed through the applicable governance process.

## 7.7 Implementation Conflict

A Stage 5 mechanism cannot satisfy the approved Prompt Architecture as currently designed.

Implementation MUST NOT silently redefine Prompt Architecture.

The issue MUST instead be handled through change management.

---

# 8. Precedence Evaluation

When a material conflict is detected, ALH SHOULD conceptually evaluate it in the following order:

```text
Identify Conflict
        ↓
Identify Semantic Question
        ↓
Identify Applicable Owners
        ↓
Identify Normative Constraints
        ↓
Determine Whether Requirements
Can Be Reconciled
        ↓
Apply Valid Precedence
        ↓
Preserve Unresolved Conflict
or Escalate if Necessary
```

The evaluation MUST avoid guessing about authority.

Where ownership cannot be determined from authoritative project sources, the uncertainty MUST remain explicit.

---

# 9. Reconciliation Before Override

Conflict resolution SHOULD prefer reconciliation where all applicable requirements can remain satisfied.

Valid reconciliation MAY include:

- narrowing the interpretation of a lower-authority instruction;
- applying a task requirement only within allowed boundaries;
- separating two responsibilities that were incorrectly combined;
- requesting or using more authoritative context;
- preserving uncertainty;
- deferring an operation that lacks sufficient authority.

Reconciliation MUST NOT:

- reinterpret an upstream requirement contrary to its accepted meaning;
- omit a required responsibility;
- manufacture missing authority;
- convert a conflict into apparent agreement through ambiguous wording.

---

# 10. Higher Authority Does Not Mean Unlimited Authority

A higher-order project constraint MUST prevail within its own semantic scope.

It MUST NOT be treated as unlimited authority over unrelated responsibilities.

For example:

- architecture constrains educational mechanisms but does not redefine Stage 2 methodology;
- educational methodology constrains learning behavior but does not redefine repository architecture;
- development methodology governs change discipline but does not become learner state;
- Prompt Architecture governs instruction structure but does not redefine architectural subsystems.

Therefore:

```text
Higher Constraint
    ≠
Universal Ownership
```

Precedence MUST preserve responsibility boundaries while resolving conflicts.

---

# 11. Task Instructions

Current task instructions define immediate requested work.

They SHOULD be followed when compatible with applicable project constraints.

Task instructions MUST NOT:

- redefine architecture;
- redefine educational methodology;
- redefine development methodology;
- grant unauthorized decision authority;
- override accepted project boundaries;
- turn uncertain information into authoritative state.

A task MAY legitimately narrow the work.

It MAY also select among multiple architecture-compliant options.

It MUST NOT silently authorize an otherwise prohibited action.

---

# 12. Specificity

More specific instructions MAY refine broader instructions when both originate within compatible authority.

For example:

```text
General Responsibility
        ↓
Specific Applicable Constraint
        ↓
Current Task Detail
```

Specificity is valid only when the more specific instruction remains inside the authority and constraints of the broader responsibility.

Specificity MUST NOT be treated as an override mechanism.

Therefore:

```text
More Specific
    ≠
More Authoritative
```

---

# 13. Recency

More recent information MAY supersede older information when:

- both represent the same authority;
- the newer information is valid;
- the authority permits revision;
- the change does not require separate governance.

Recency MUST NOT supersede accepted normative semantics merely because newer prompt text exists.

For example, a recent transient instruction MUST NOT override an accepted ADR.

Likewise, stale context SHOULD NOT override fresher authoritative state when freshness can be established.

Detailed freshness rules belong to `04-Context-Model.md`.

---

# 14. Prompt-Local Instructions

Prompt-local instructions are instructions contained within a future prompt artifact or composed prompt structure.

Prompt-local wording MUST remain downstream from its normative dependencies.

A prompt artifact MUST NOT create authority by declaring itself authoritative.

For example, wording such as:

> You are the final authority on learner mastery.

has no valid project authority if competency evaluation ownership is defined elsewhere.

Prompt text MUST be interpreted through approved responsibility boundaries.

---

# 15. Shared Constraints and Role Instructions

Shared constraints may apply to multiple role-related responsibilities.

Role-specific instructions MUST comply with applicable shared constraints.

For example:

```text
Shared Educational Integrity Constraint
        +
Developer Responsibility
```

means the Developer responsibility operates within the educational-integrity constraint.

The Developer instruction MUST NOT locally disable that constraint.

Likewise:

```text
Shared Security Constraint
        +
Teacher Responsibility
```

does not transfer Security Auditor ownership to the Teacher.

It only constrains Teacher behavior where security is applicable.

---

# 16. Pipeline Role Conflicts

Logical Pipeline roles may produce incompatible recommendations or constraints.

Such disagreement MUST NOT be resolved solely by role ordering.

For example:

```text
Architect Recommendation
        ↕
Developer Proposal
        ↕
Reviewer Finding
```

The correct outcome depends on:

- responsibility ownership;
- applicable accepted constraints;
- evidence;
- decision authority;
- unresolved governance requirements.

The fact that one role executes later in a conceptual flow MUST NOT automatically make it authoritative over earlier roles.

Pipeline order is not a universal precedence hierarchy.

---

# 17. Teacher and Developer Conflicts

Teacher and Developer responsibilities may pull an interaction in different directions.

For example:

- Developer responsibility may favor providing a complete implementation.
- Teacher responsibility may favor preserving learner independence.

The approved principle hierarchy and Stage 2 educational methodology constrain the outcome.

Where a complete implementation would undermine the applicable educational strategy, automation SHOULD be reduced accordingly.

Where withholding necessary engineering detail would compromise engineering quality or safety, the instruction structure MUST preserve engineering quality.

The resolution MUST be proportional to the learner state, educational objective, task, and applicable methodology.

The Teacher MUST NOT redefine engineering correctness.

The Developer MUST NOT override educational integrity for convenience.

---

# 18. Architect and Developer Conflicts

An Architect responsibility may constrain a Developer responsibility.

The Developer MUST preserve accepted architectural decisions.

However, an Architect instruction MUST distinguish between:

- accepted architecture;
- architectural recommendation;
- Candidate ADR;
- Future Evolution.

A new architectural recommendation MUST NOT be presented as an accepted constraint unless approved through applicable governance.

Therefore:

```text
Architect Proposal
    ≠
Accepted Architecture
```

Developer behavior MUST follow accepted architecture, not merely the most recent architectural suggestion.

---

# 19. Reviewer Conflicts

Review findings may conflict with implementation output or another responsibility's conclusion.

A Reviewer responsibility MAY identify:

- defects;
- non-compliance;
- unsupported assumptions;
- responsibility leakage;
- evidence gaps.

A review finding does not automatically rewrite the artifact under review.

Where applicable, the finding SHOULD cause:

- correction;
- re-evaluation;
- explicit acceptance of a non-blocking issue;
- governance escalation.

Review MUST NOT silently approve an upstream change.

Likewise, implementation MUST NOT silently ignore a material review finding.

---

# 20. Security Conflicts

Applicable security constraints MUST NOT be overridden for convenience, speed, educational simplicity, or automation.

A Security Auditor finding MAY impose remediation or prevent unsafe progression where supported by applicable security responsibility.

However, dedicated security review MUST remain distinct from broad authority over unrelated architectural or educational questions.

Security precedence applies to security-relevant risks within its responsibility boundary.

---

# 21. Assessment Conflicts

Assessment instructions MUST preserve Stage 2 methodology.

Where assessment evidence conflicts with prior learner assumptions, evidence SHOULD be considered through the approved competency-evaluation process.

The Assessor MUST NOT directly resolve such conflict by inventing a new competency state.

Likewise:

```text
Correct Answer
    ≠
Automatic Mastery

Failed Answer
    ≠
Automatic Competency Reset
```

Conflicting evidence MUST remain subject to the accepted evaluation semantics.

---

# 22. Memory Conflicts

Memory-related information may conflict with:

- current evidence;
- current interaction claims;
- project context;
- competency evaluation.

Memory MUST NOT be silently overwritten merely because a current prompt contains different information.

Likewise, persisted memory MUST NOT automatically invalidate stronger current evidence.

Conflict handling SHOULD preserve:

- provenance;
- freshness;
- evidence quality;
- ownership;
- uncertainty.

Detailed context and state-source rules belong to `04-Context-Model.md`.

---

# 23. Response Generation Conflicts

The Response Generator may receive inconsistent bounded results from multiple responsibilities.

It MUST NOT resolve substantive conflict merely by choosing the wording that produces the smoothest answer.

The Response Generator MAY:

- surface the conflict;
- preserve uncertainty;
- distinguish recommendation from accepted decision;
- explain unresolved alternatives;
- communicate the applicable authoritative outcome where already established.

It MUST NOT manufacture consensus.

Therefore:

```text
Coherent Response
    ≠
Artificial Agreement
```

---

# 24. Conflict Severity

Prompt Architecture SHOULD distinguish conflicts proportionally.

A useful conceptual classification is:

## 24.1 Non-Material Conflict

Differences in wording, presentation, or equivalent implementation-neutral expression that do not change responsibility, authority, semantics, or outcome.

These MAY be reconciled locally.

## 24.2 Material Conflict

A disagreement affecting:

- authority;
- architecture;
- educational semantics;
- engineering quality;
- security;
- learner progression;
- required evidence;
- compliance.

These MUST be resolved according to this model.

## 24.3 Governance Conflict

A conflict that cannot be resolved without changing an accepted upstream decision.

This MUST NOT be resolved inside prompt wording.

It requires the applicable change-management or ADR process.

---

# 25. Unresolved Conflicts

Not every conflict can be resolved immediately.

An unresolved material conflict MUST remain visible.

ALH MUST NOT:

- invent a resolution;
- conceal the conflict;
- silently choose a lower-authority option;
- represent uncertainty as certainty.

Depending on responsibility and interaction, an unresolved conflict MAY lead to:

- bounded user clarification;
- explicit uncertainty;
- deferred action;
- review;
- change-management escalation;
- Candidate ADR identification.

The handling MUST remain proportional to the conflict.

---

# 26. Candidate ADR Boundary

A prompt conflict MAY reveal an architectural problem.

A Candidate ADR is appropriate where resolution would change an accepted architectural:

- responsibility;
- ownership boundary;
- major dependency;
- principle;
- long-term structural decision.

Prompt Architecture MUST NOT simulate ADR acceptance through instruction precedence.

Until an architectural change is accepted, existing architecture remains authoritative.

---

# 27. Educational-Methodology Change Boundary

A conflict MAY reveal that Stage 2 methodology appears unsuitable for a new situation.

Stage 4 MUST NOT resolve that problem by modifying educational semantics inside a prompt.

If the proposed resolution changes:

- competency states;
- assessment semantics;
- Learning Debt;
- Automation Level;
- Socratic Method;
- quiz authority;
- mastery interpretation;
- Learning Unit completion;

the issue belongs to upstream methodology governance rather than Prompt Architecture.

---

# 28. Development-Methodology Change Boundary

Prompt Architecture MUST comply with Stage 3 development discipline.

A local prompt instruction MUST NOT bypass:

- required review;
- traceability;
- change classification;
- applicable testing expectations;
- documentation requirements;
- architectural governance.

Where Stage 4 work reveals tension with Development Methodology, the tension MUST be addressed explicitly rather than hidden in prompt behavior.

---

# 29. Implementation Boundary

Stage 5 will require a concrete mechanism for enforcing or approximating semantic precedence.

That implementation MAY use:

- prompt ordering;
- structured instruction sections;
- runtime composition;
- orchestration;
- programmatic guards;
- validation logic;
- model-specific mechanisms;
- other architecture-compliant techniques.

Stage 4 does not select among them.

The implementation MUST preserve the semantic rules defined here.

A vendor's native message hierarchy MAY constrain implementation.

It MUST NOT automatically redefine ALH semantic authority.

Where vendor mechanics cannot represent approved ALH precedence faithfully, the discrepancy MUST be treated as an implementation constraint or design issue.

---

# 30. Conflict Detection

Prompt Architecture SHOULD support detection of material instruction conflicts.

Conflict detection MAY consider:

- incompatible requirements;
- competing authority claims;
- contradictory context;
- invalid responsibility transfer;
- missing required constraints;
- incompatible educational behavior;
- task instructions that violate project boundaries.

Stage 4 does not require a specific automated conflict-detection mechanism.

Stage 5 MAY implement automated or partially automated detection where appropriate.

---

# 31. Conflict Explainability

Material conflict resolution SHOULD be explainable at the project level.

Where relevant, it SHOULD be possible to identify:

- what instructions or responsibilities conflicted;
- which semantic question was affected;
- which source owned that question;
- which constraint governed the resolution;
- whether uncertainty remained;
- whether governance escalation was required.

Explainability MUST NOT require disclosure of private model reasoning.

It requires traceable project-level justification.

---

# 32. Conflict Traceability

Material precedence decisions SHOULD remain traceable to their normative basis.

Traceability MAY include:

- applicable upstream document;
- responsible subsystem;
- relevant Stage 4 rule;
- conflict classification;
- resulting bounded resolution.

Traceability MUST NOT create a parallel source of truth.

Detailed Prompt Architecture compliance and traceability requirements belong to:

`07-Prompt-Architecture-Compliance-and-Traceability.md`

---

# 33. Anti-Patterns

Prompt Architecture MUST avoid the following precedence and conflict anti-patterns.

## 33.1 Last Instruction Wins

Treating the most recently added instruction as automatically authoritative.

## 33.2 Most Specific Wins

Allowing specificity to override an incompatible higher-authority requirement.

## 33.3 Longest Prompt Wins

Treating instruction volume as authority.

## 33.4 Pipeline Order Equals Authority

Assuming later Pipeline roles automatically overrule earlier roles.

## 33.5 Model Capability Equals Authority

Allowing an AI model to make a decision merely because it is capable of doing so.

## 33.6 Silent Conflict Suppression

Dropping, rewriting, or ignoring an instruction without preserving the material conflict.

## 33.7 Prompt-Local Governance

Changing architecture or methodology through local prompt wording.

## 33.8 Artificial Consensus

Using response synthesis to conceal unresolved disagreement.

## 33.9 Vendor Precedence Equals ALH Precedence

Treating provider-specific message hierarchy as the authoritative ALH semantic model.

## 33.10 Convenience Override

Choosing the easiest implementation or most automated outcome despite higher-priority project constraints.

---

# 34. Precedence Rules

Instruction precedence and conflict resolution MUST satisfy the following rules:

1. Precedence MUST follow semantic authority, not textual position.
2. Authority MUST remain scoped to the responsibility it owns.
3. Accepted upstream semantics MUST NOT be silently overridden.
4. More specific instructions MAY refine but MUST NOT contradict applicable higher-authority constraints.
5. Recency MUST NOT replace governance.
6. Task instructions MUST remain bounded by project constraints.
7. Pipeline order MUST NOT be treated as universal authority order.
8. Composition MUST NOT suppress conflicts.
9. Conflict resolution SHOULD prefer valid reconciliation before exclusion.
10. Material unresolved conflicts MUST remain explicit.
11. Missing authority MUST NOT be invented.
12. Prompt-local wording MUST NOT create project authority.
13. Vendor-specific message mechanics MUST remain distinct from ALH semantic precedence.
14. Governance conflicts MUST be escalated through the applicable process.
15. Educational-methodology conflicts MUST NOT be solved by redefining Stage 2 semantics.
16. Implementation conflicts MUST NOT silently redefine Stage 4.
17. Conflict handling SHOULD remain explainable and traceable.
18. Automation MUST NOT override educational integrity or engineering quality.

---

# 35. Relationship to Context

Many instruction conflicts depend on the authority, provenance, relevance, or freshness of contextual information.

This document defines the precedence principles.

It does not define the full context model.

The next document defines:

- context categories;
- context ownership;
- source authority;
- relevance;
- provenance;
- freshness;
- missing context;
- uncertain context;
- context consumption boundaries.

That responsibility belongs to:

`04-Context-Model.md`

---

# 36. Summary

Instruction precedence in ALH is based on semantic authority and responsibility ownership.

Its core model is:

```text
Material Conflict
        ↓
Identify Semantic Question
        ↓
Identify Responsibility Owner
        ↓
Apply Normative Constraints
        ↓
Reconcile Where Valid
        ↓
Resolve Within Authority
        │
        └── or preserve / escalate
            unresolved conflict
```

The model preserves the distinctions:

```text
Textual Position
    ≠ Authority

Specificity
    ≠ Authority

Recency
    ≠ Governance

Pipeline Order
    ≠ Universal Precedence

Execution Capability
    ≠ Decision Authority

Prompt Wording
    ≠ Source of Truth

Coherent Response
    ≠ Artificial Consensus

Vendor Message Hierarchy
    ≠ ALH Semantic Precedence
```

This allows ALH to combine flexible AI-agent instructions while preserving architectural ownership, educational methodology, development discipline, and explicit handling of unresolved conflicts.

The next document defines the context model used by instruction responsibilities:

`04-Context-Model.md`
