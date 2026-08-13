# ADR-002 — Semantic Authority and Proportional Technical Enforcement

Status: Accepted

## Context

AI Learning Harness (ALH) is a project-resident behavioral and educational
harness around an existing AI coding environment.

The accepted architecture distinguishes technical capability from semantic
authority.

In particular:

Technical Capability
≠
Semantic Authority

and:

Learner-State Read Access
≠
Learner-State Mutation Authority

Stage 5 originally strengthened these distinctions through physical enforcement
directions including an Educational Mutation Gate, Harness-mediated tool
authorization, and prevention of alternative technical learner-state write paths.

Physical Minimality Review identified that treating these mechanisms as mandatory
technical mediation would make ALH responsible for intercepting execution that is
already owned by the host coding environment.

That direction is disproportionate to the baseline role of ALH.

The host IDE coding agent is the primary execution runtime for ordinary software
development operations.

ALH primarily governs that agent through accepted instructions, structured
educational state, evidence requirements, semantic authority rules, and
proportional deterministic support.

At the same time, critical educational state MUST NOT become authoritative merely
because an agent has technical filesystem access or produces a state mutation.

The implementation therefore requires a distinction between physical capability
and authoritative semantic transition.

## Decision

### 1. Semantic Authority Is Mandatory

ALH MUST preserve accepted semantic authority boundaries.

Technical access to a resource or capability MUST NOT itself create semantic
authority over that resource.

In particular:

Physical Write Capability
≠
Authorized Educational Mutation

and:

Tool Availability
≠
Semantic Authorization

### 2. Technical Mediation Is Conditional

Preserving a semantic authority boundary MUST NOT be interpreted as requiring
universal ALH-controlled physical mediation.

ALH SHOULD use the least complex mechanism that sufficiently preserves the
applicable accepted contract.

A proportional mechanism MAY consist of:

1. accepted instructions;
2. structured and inspectable state;
3. deterministic validation;
4. host-native enforcement;
5. ALH-specific technical enforcement where weaker mechanisms are insufficient.

Hard technical mediation MUST NOT be introduced solely because technical access
exists.

### 3. Learner-State Authority

Authoritative learner-state mutation MUST follow the accepted educational
decision path.

A valid authoritative transition MUST be supported by the applicable educational
authority, evidence, prior state, proposed state, and sufficient provenance where
required by the accepted educational contract.

An IDE coding agent MAY technically have write access to `.ai-learning/`.

Such physical write access MUST NOT itself establish an authorized educational
state transition.

A physical learner-state write that does not satisfy the accepted educational
authority path MUST NOT be treated as establishing authoritative educational
truth merely because the persisted bytes changed.

### 4. Deterministic Validation

Deterministic validation SHOULD be used where proportional to detect or reject
semantically invalid authoritative-state transitions.

Validation is particularly relevant where an invalid transition could alter:

- accepted educational evidence;
- competency state;
- Learning Debt;
- Automation Level;
- educational progression;
- Educational Done;
- other authoritative learner state.

Deterministic validation does not by itself require exclusive filesystem write
control.

The exact validation, rejection, invalidation, or reconciliation mechanism is an
Implementation Decision.

### 5. Baseline Threat Model

ALH v1 is primarily responsible for constraining incorrect, unauthorized, or
semantically invalid behavior of the IDE coding agent and other automated
mechanisms participating in the ALH workflow.

The project owner is not treated as an adversary with respect to deliberate
modification of their own project-resident ALH state.

ALH MAY detect invalid owner-created state through ordinary validation, but the
baseline architecture MUST NOT require technical mechanisms whose purpose is to
prevent the project owner from deliberately modifying `.ai-learning/`.

This decision does not weaken ordinary security requirements concerning secrets,
external attackers, untrusted project content, destructive operations, or other
security boundaries outside this specific owner-state assumption.

### 6. Host-Native Tool Execution

Ordinary development-tool execution MAY remain under host-native execution and
authorization mechanisms.

The baseline interaction is:

ALH Rules
↓
IDE-Agent Decisions / Actions
↓
Host-Native Safety / Authorization
↓
Host-Native Tools

ALH MUST define the applicable semantic constraints on tool use.

ALH-specific physical interception of a tool operation is required only where a
specific accepted ALH contract cannot be sufficiently preserved through
instructions, structured state, validation, and available host-native controls.

Universal ALH tool-call proxying is not a baseline requirement.

### 7. Environment-Dependent Strengthening

A supported coding environment MAY provide stronger technical enforcement.

For example, an environment MAY allow authoritative learner-state files to be
read directly while mutations are performed only through an approved mechanism.

Such host-enforced protection MAY be used where available and useful.

Environment-dependent strengthening MUST NOT become an implicit prerequisite for
portable ALH semantics unless a future architectural decision explicitly changes
that requirement.

### 8. Harness Kernel Interpretation

The Harness Kernel is a contract-preserving implementation locus.

It MUST NOT be interpreted as requiring a standalone executable process,
universal execution proxy, or mandatory programmatic mediation layer.

For a proportional implementation, Kernel responsibilities MAY be materialized
through combinations of:

- canonical instructions;
- structured state;
- structured evidence;
- validation rules;
- host-native mechanisms;
- narrow executable helpers where justified.

Physical decomposition remains an Implementation Decision.

## Consequences

### Positive

- ALH remains aligned with its project-resident behavioral and educational role.
- The existing IDE coding agent remains the primary development runtime.
- File-first learner-state persistence remains practical.
- Universal model, tool, and filesystem proxy infrastructure is not required.
- Critical educational authority remains semantically explicit and inspectable.
- Deterministic validation can strengthen high-risk transitions without forcing
  a standalone Harness runtime.
- Stronger host-specific enforcement remains possible.

### Negative

- ALH v1 does not guarantee OS-level prevention of every semantically invalid
  learner-state write by an IDE agent.
- Some invalid physical state may need to be detected, rejected, invalidated, or
  reconciled after a write occurs.
- Correctness therefore depends on a combination of agent instructions,
  structured state, provenance, and proportional validation rather than universal
  preventive isolation.

### Neutral

- Educational authority is not weakened.
- Candidate Educational Evidence remains distinct from Accepted Educational
  Evidence.
- Engineering Done remains distinct from Educational Done.
- Evidence-before-claim remains unchanged.
- Project Truth remains distinct from Learner Truth.
- ADR-001 remains unchanged.
- Superpowers ownership remains unchanged.

## Rejected Alternatives

### Mandatory Technical Mediation

Require all authority-sensitive learner-state and tool operations to pass through
an ALH-controlled technical gate.

Rejected as the baseline because it is disproportionate to ALH's role and would
unnecessarily turn ALH into an execution intermediary.

### Instruction-Only Authority

Rely exclusively on model compliance with ALH instructions.

Rejected for critical authoritative educational state because important invalid
transitions should remain machine-inspectable and deterministically validatable
where proportional.

## Future Evolution

A future environment or ALH version MAY introduce stronger:

- protected learner-state storage;
- host-enforced write restrictions;
- operation-specific authorization;
- automatic evidence capture;
- tool mediation.

Such strengthening MUST be justified by a concrete requirement and MUST preserve
the semantic/physical distinction established by this ADR.
