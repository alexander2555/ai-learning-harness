# Prompt Artifact Model

Version: 0.1 Draft

Parent Documents

- 00-Prompt-Architecture.md
- 01-Instruction-Responsibility-Model.md
- 02-Instruction-Composition.md
- 03-Instruction-Precedence-and-Conflict-Resolution.md
- 04-Context-Model.md
- 05-Educational-Instruction-Model.md

Related Documents

- 03-System-Architecture.md
- 04-Agent-Pipeline.md
- 00-Development-Methodology.md

---

# 1. Purpose

This document defines the Prompt Artifact Model of AI Learning Harness (ALH).

It establishes the architectural contract that future concrete prompt artifacts MUST satisfy when Stage 5 materializes the Prompt Architecture.

A prompt artifact is a concrete representation of one or more approved instruction responsibilities.

This document defines:

- prompt artifact identity;
- responsibility binding;
- authority boundaries;
- dependency declaration;
- composition relationships;
- context dependencies;
- precedence compatibility;
- educational-methodology compatibility;
- traceability expectations;
- implementation boundaries.

This document does not define production-ready prompt wording.

It does not define runtime loading, orchestration, storage, or model invocation.

---

# 2. Prompt Artifact Principle

A prompt artifact is downstream from Prompt Architecture.

Conceptually:

```text id="ndj6jp"
Approved Instruction Responsibilities
        ↓
Prompt Artifact Contract
        ↓
Concrete Prompt Artifact
        ↓
Stage 5 Runtime Use
```

A prompt artifact MUST express approved responsibilities.

It MUST NOT invent new semantic authority merely because it is concrete or executable.

Therefore:

```text id="c2vhq2"
Prompt Artifact
    ≠
Source of Architectural Authority
```

The artifact remains constrained by the responsibilities and normative dependencies it represents.

---

# 3. Prompt Artifact Identity

Each material prompt artifact SHOULD have a clear identity.

Its identity SHOULD make it possible to determine:

- what responsibility it represents;
- which responsibilities it composes, if more than one;
- what upstream authority constrains it;
- what context it requires;
- what outputs or behavior it is intended to support;
- which neighboring artifacts or responsibilities materially interact with it.

Artifact identity SHOULD remain understandable independently of implementation details.

A filename MAY support identity.

A filename MUST NOT define authority.

---

# 4. Artifact Responsibility Binding

Each prompt artifact MUST bind to one or more approved instruction responsibilities.

The relationship MAY be:

```text id="37jl0k"
One Responsibility
        ↓
One Prompt Artifact
```

or:

```text id="j6beq7"
Several Compatible Responsibilities
        ↓
One Prompt Artifact
```

or:

```text id="19s8gt"
One Responsibility
        ↓
Several Prompt Artifacts
```

where decomposition is justified.

The chosen mapping MUST preserve:

- responsibility coverage;
- responsibility boundaries;
- semantic ownership;
- traceability.

A prompt artifact MUST NOT exist without an identifiable responsibility.

---

# 5. Prompt Artifacts and Pipeline Roles

Prompt artifacts MAY correspond to logical Agent Pipeline roles.

Examples MAY include artifacts such as:

```text id="aclh9u"
intent-analyzer.md
project-manager.md
architect.md
teacher.md
developer.md
reviewer.md
security-auditor.md
assessor.md
memory-manager.md
response-generator.md
```

These names are compatible with the established Pipeline role model.

However, this document does not require a one-to-one mapping between Pipeline roles and prompt artifacts.

The existence of a logical Pipeline role MUST be preserved through responsibility coverage.

It MAY be represented by:

- a dedicated role artifact;
- a composed artifact;
- shared and role-specific components;
- another architecture-compliant prompt structure.

Therefore:

```text id="s55q30"
Pipeline Role
    ≠
Mandatory Dedicated File
```

---

# 6. Role Artifact Boundary

Where a dedicated role artifact is used, it MUST remain within the approved responsibility of that role.

For example:

- an `architect` artifact MUST NOT treat architectural proposals as accepted architecture;
- a `teacher` artifact MUST NOT redefine educational methodology;
- a `developer` artifact MUST NOT override architectural or educational constraints;
- a `reviewer` artifact MUST NOT silently approve upstream change;
- an `assessor` artifact MUST NOT redefine competency semantics;
- a `memory-manager` artifact MUST NOT redefine the Memory Model;
- a `response-generator` artifact MUST NOT manufacture semantic consensus.

Role naming MUST NOT grant unlimited authority.

---

# 7. Shared Prompt Artifacts

Some responsibilities MAY be better represented through shared artifacts or shared instruction components.

Shared artifacts MAY express cross-cutting concerns such as:

- architectural safeguards;
- educational integrity;
- engineering quality;
- security constraints;
- explainability;
- uncertainty handling;
- traceability.

A shared artifact MUST:

- have a bounded responsibility;
- avoid becoming a miscellaneous global instruction dump;
- preserve upstream authority;
- remain reusable only where semantically applicable.

Shared prompt artifacts SHOULD reduce duplication without obscuring ownership.

---

# 8. Composite Prompt Artifacts

A prompt artifact MAY compose several compatible responsibilities.

Composite artifacts MUST conform to `02-Instruction-Composition.md`.

They MUST preserve:

- responsibility identity;
- authority boundaries;
- context boundaries;
- semantic dependencies;
- applicable shared constraints.

A composite artifact MUST NOT create new authority merely because several responsibilities are expressed together.

It SHOULD remain possible to determine which responsibilities participate.

---

# 9. Artifact Authority Boundary

Every prompt artifact MUST operate within bounded authority.

An artifact MAY:

- express approved constraints;
- guide AI behavior;
- apply relevant methodology;
- consume approved context;
- produce bounded results;
- coordinate with other responsibilities.

It MUST NOT:

- redefine architecture;
- redefine educational methodology;
- redefine development methodology;
- create competing persistent state;
- silently transfer decision authority;
- treat local wording as governance.

The strongest statement inside a prompt artifact remains subordinate to approved project authority.

---

# 10. Normative Dependencies

Material prompt artifacts SHOULD identify their direct normative dependencies.

Normative dependencies explain why the artifact has its responsibility and authority.

Dependencies MAY include:

- Stage 1 architectural documents;
- accepted ADRs;
- Stage 2 methodology documents;
- Stage 3 development constraints;
- Stage 4 Prompt Architecture documents.

Dependency declarations SHOULD remain concise.

They SHOULD represent direct normative relationships rather than a generic bibliography.

A prompt artifact SHOULD reference authoritative semantics rather than duplicate them where practical.

---

# 11. Related Artifacts and Responsibilities

A prompt artifact MAY identify significant neighboring artifacts or responsibilities.

Related relationships MAY include:

- upstream bounded outputs;
- downstream consumers;
- composition partners;
- review responsibilities;
- context providers.

Related relationships MUST NOT imply authority transfer.

A related artifact does not automatically become a dependency.

---

# 12. Artifact Context Dependencies

A prompt artifact SHOULD identify the context categories required for its responsibility.

Possible dependencies MAY include:

- normative project context;
- learner context;
- project context;
- task context;
- interaction context;
- evidence context.

The artifact SHOULD describe semantic context needs.

It SHOULD NOT prescribe runtime retrieval mechanisms.

For example:

```text id="s3jv6c"
Teacher Artifact
        ↓
Requires Relevant Learner Context
```

does not imply:

```text id="w8kfj8"
Teacher Artifact
        ↓
Must Query Specific Database
```

The first is Stage 4 architecture.

The second is Stage 5 implementation.

---

# 13. Context Minimization

Prompt artifacts SHOULD request or consume only context necessary for their responsibilities.

They SHOULD NOT assume unrestricted access to all ALH information.

Context dependencies SHOULD remain bounded by:

- relevance;
- authority;
- educational need;
- engineering need;
- security need.

Prompt artifacts MUST conform to `04-Context-Model.md`.

---

# 14. Context Status Preservation

Prompt artifacts MUST preserve the semantic status of consumed context.

They MUST distinguish where material between:

```text id="zjb04d"
Accepted Decision
Recommendation
Observation
Evidence
Inference
Assumption
Unknown
```

A prompt artifact MUST NOT promote a weaker category into a stronger category merely through wording.

For example:

```text id="62z0fg"
Recommendation
    ≠
Accepted Architecture
```

and:

```text id="h2ybvp"
Observation
    ≠
Persisted Learner State
```

---

# 15. Artifact Composition Declaration

Where prompt artifacts are intended to participate in composition, their composition relationships SHOULD be identifiable.

An artifact MAY declare:

- compatible shared responsibilities;
- role-related dependencies;
- required upstream bounded results;
- conditional applicability;
- known exclusions.

Such declarations SHOULD remain semantic.

They MUST NOT prescribe a specific runtime assembler unless required by an accepted architectural decision.

---

# 16. Artifact Precedence Compatibility

Prompt artifacts MUST conform to the semantic precedence model defined in `03-Instruction-Precedence-and-Conflict-Resolution.md`.

They MUST NOT rely on assumptions such as:

- last text wins;
- most specific text always wins;
- role ordering defines authority;
- provider message role defines ALH authority.

Where an artifact expresses a lower-authority instruction, it MUST remain compatible with applicable higher-authority constraints.

Prompt artifacts SHOULD make material authority boundaries explicit enough to support correct Stage 5 enforcement.

---

# 17. Conflict Visibility

A prompt artifact MUST NOT be designed to suppress material conflicts.

Where the artifact may encounter conflicting requirements, it SHOULD preserve enough semantic structure to support:

- conflict identification;
- authority evaluation;
- explicit uncertainty;
- escalation where necessary.

An artifact MUST NOT encode:

> resolve any conflict by always following this prompt

unless that statement is itself supported by approved project authority.

---

# 18. Educational Artifact Compatibility

Prompt artifacts participating in educational behavior MUST conform to `05-Educational-Instruction-Model.md`.

They MUST preserve:

- competency-state semantics;
- Automation Level semantics;
- Learning Debt semantics;
- assessment boundaries;
- competency-evaluation boundaries;
- evidence categories;
- quiz limitations;
- Learning Unit completion semantics;
- Socratic proportionality;
- progressive independence.

Educational prompt artifacts MUST NOT become independent educational-methodology documents.

---

# 19. Assistance Transparency

Prompt artifacts involved in learner-facing engineering work SHOULD preserve enough information for later educational interpretation of AI assistance.

Where relevant, the artifact SHOULD support distinction between:

- learner-produced work;
- guided work;
- shared work;
- AI-produced work.

This does not require a particular logging mechanism at Stage 4.

It establishes the semantic requirement that assistance level MUST remain interpretable where it affects educational evidence.

---

# 20. Assessment Artifact Boundary

An assessment-related prompt artifact MAY:

- create assessment tasks;
- observe learner responses;
- identify evidence;
- produce bounded assessment findings.

It MUST NOT independently redefine competency states or mastery criteria.

If competency evaluation participates in the same artifact, the semantic distinction MUST remain explicit.

A single artifact MUST NOT imply a single educational responsibility.

---

# 21. Memory Artifact Boundary

A memory-related prompt artifact MAY:

- identify memory-relevant observations;
- summarize bounded continuity information;
- propose memory updates;
- consume approved learner state.

It MUST NOT:

- redefine Memory Model semantics;
- automatically persist transient observations;
- reinterpret evidence beyond approved authority;
- create new competency semantics.

A proposed memory update MUST remain distinct from accepted durable state.

---

# 22. Review Artifact Boundary

A review-related prompt artifact MAY:

- identify defects;
- identify non-compliance;
- identify unsupported assumptions;
- identify responsibility leakage;
- request correction.

It MUST distinguish review findings from accepted upstream decisions.

Review artifacts MUST NOT silently approve architectural or methodological change.

---

# 23. Security Artifact Boundary

A security-related prompt artifact MAY provide dedicated security analysis or review.

It MUST remain within applicable security responsibility.

A security artifact MUST NOT be interpreted as the sole location of all security constraints.

Applicable shared security constraints MAY also participate in other artifacts.

---

# 24. Response Artifact Boundary

A response-generation artifact MAY synthesize bounded results from several responsibilities.

It SHOULD preserve:

- uncertainty;
- decision status;
- evidence status;
- unresolved conflicts;
- recommendation status;
- learner-assistance status where relevant.

It MUST NOT manufacture stronger conclusions merely to improve fluency.

---

# 25. Prompt Artifact Structure

Stage 4 does not require a single mandatory serialization format.

However, a prompt artifact SHOULD be structurally capable of expressing:

- identity;
- responsibility;
- authority boundary;
- normative dependencies;
- context dependencies;
- applicable constraints;
- expected bounded outputs;
- composition relationships;
- uncertainty behavior;
- traceability information where needed.

These properties MAY be represented through:

- headings;
- metadata;
- structured sections;
- external descriptors;
- configuration;
- another Stage 5 mechanism.

The semantic properties are required.

The physical representation remains an implementation choice.

---

# 26. Metadata Boundary

Prompt artifact metadata MAY support:

- responsibility identification;
- dependency declaration;
- context requirements;
- composition;
- traceability;
- versioning;
- lifecycle status.

Stage 4 MAY define semantic metadata requirements.

It MUST NOT prematurely require a specific implementation syntax unless that syntax is justified as an architectural constraint.

For example:

```text id="7lv8fq"
Artifact MUST expose responsibility identity
```

is an architectural requirement.

But:

```text id="jjd4dx"
Artifact MUST use YAML front matter
```

is an implementation choice unless separately justified.

---

# 27. Artifact Modularity

Prompt artifacts SHOULD be modular where modularity improves:

- responsibility clarity;
- reuse;
- reviewability;
- maintainability;
- traceability;
- controlled change.

Modularity SHOULD NOT be maximized blindly.

Too many fragments MAY create:

- unclear responsibility boundaries;
- excessive composition complexity;
- hidden dependencies;
- maintenance overhead.

Prompt artifact decomposition SHOULD remain proportional.

---

# 28. Artifact Stability

Prompt artifacts SHOULD distinguish stable instruction semantics from volatile context.

Stable artifacts SHOULD primarily contain durable responsibility and constraint definitions.

Volatile information SHOULD generally be supplied through context mechanisms.

This reduces the risk that:

- learner state becomes stale prompt text;
- project status becomes duplicated;
- temporary assumptions become permanent;
- authoritative semantics drift across artifacts.

---

# 29. Artifact Reuse

Prompt artifacts or components MAY be reusable across multiple interactions or roles where the represented responsibility is genuinely shared.

Reuse MUST preserve semantic fit.

An artifact SHOULD NOT be reused merely because its wording appears generic.

Reuse SHOULD NOT cause:

- authority expansion;
- irrelevant context access;
- accidental responsibility coupling.

---

# 30. Artifact Dependency Direction

Prompt artifacts SHOULD depend on more authoritative or foundational semantics, not the reverse.

Conceptually:

```text id="rgy92k"
Architecture / Methodology
        ↓
Prompt Architecture
        ↓
Prompt Artifact
        ↓
Stage 5 Runtime
```

A runtime implementation MUST NOT become the source that defines prompt semantics.

Likewise, a prompt artifact MUST NOT redefine the Stage 4 document that constrains it.

---

# 31. Artifact Evolution

Prompt artifacts MAY evolve during Stage 5 and later maintenance.

Artifact evolution MUST remain compatible with approved Prompt Architecture.

A change that:

- changes wording without changing semantics;
- improves clarity;
- improves implementation compatibility;
- removes duplication;

MAY be handled as a normal artifact change where development methodology permits.

A change that alters:

- responsibility ownership;
- architectural authority;
- educational semantics;
- Prompt Architecture contracts;

requires the applicable upstream change process.

---

# 32. Artifact Versioning

Prompt artifacts SHOULD support identifiable lifecycle state and version evolution where useful.

Versioning MAY help with:

- review;
- rollback;
- traceability;
- validation;
- controlled experimentation.

This document does not prescribe a specific versioning mechanism.

Artifact version labels MUST NOT be confused with project-stage acceptance status.

---

# 33. Artifact Reviewability

Prompt artifacts SHOULD be reviewable as development artifacts.

Review SHOULD be able to determine:

- intended responsibility;
- normative basis;
- authority boundaries;
- context needs;
- composition behavior;
- educational compatibility;
- implementation leakage;
- semantic duplication.

Prompt wording quality alone is insufficient for architectural review.

A fluent prompt MAY still be non-compliant if it violates responsibility ownership.

---

# 34. Artifact Testability

Prompt artifacts SHOULD expose sufficiently clear contracts to support later technical verification.

Testable properties MAY include:

- required responsibility presence;
- prohibited authority claims;
- expected context dependency;
- preserved educational distinctions;
- correct conflict behavior;
- composition compatibility.

This document does not define Stage 5 test implementations or Stage 6 validation procedures.

It defines properties that SHOULD be possible to verify.

---

# 35. Artifact Traceability

Material prompt artifacts SHOULD remain traceable to:

- their instruction responsibilities;
- direct normative dependencies;
- relevant composition rules;
- relevant educational rules;
- relevant context requirements.

Traceability SHOULD help answer:

> Why does this artifact contain this instruction responsibility?

Traceability MUST NOT become a second source of semantic truth.

Detailed Stage 4 compliance rules belong to:

`07-Prompt-Architecture-Compliance-and-Traceability.md`

---

# 36. Artifact and Repository Location

Stage 1 establishes `.ai-learning/prompts/` as an architectural responsibility area.

Stage 5 MAY materialize prompt artifacts within that area.

Stage 4 does not require that every prompt-related semantic component correspond to one physical Markdown file.

The existence of `.ai-learning/prompts/` MUST NOT be interpreted as requiring:

```text id="duyfvm"
One Responsibility
    =
One File
```

Repository layout MUST preserve the application / learning-infrastructure boundary.

---

# 37. Production Prompt Boundary

Stage 4 defines the architecture and contract of prompt artifacts.

Production-ready prompt wording is a Stage 5 materialization concern unless an approved Stage 4 specification explicitly requires a normative prompt artifact.

Therefore, Stage 4 MAY include:

- abstract prompt structures;
- short illustrative fragments;
- responsibility examples;
- artifact templates at the semantic level.

Stage 4 SHOULD NOT produce final runtime prompts merely to prove the architecture.

The Stage 5 implementation MUST instantiate the approved model.

---

# 38. Runtime Boundary

Prompt artifacts MAY later be:

- loaded;
- composed;
- rendered;
- parameterized;
- selected;
- injected;
- cached;
- versioned;
- executed.

These are implementation operations.

Stage 4 defines what semantic properties those operations MUST preserve.

It does not define how those operations occur.

---

# 39. Vendor Independence

Prompt artifacts SHOULD remain conceptually independent of a specific AI provider.

A Stage 5 implementation MAY adapt artifacts to:

- vendor message roles;
- model capabilities;
- token limits;
- structured output features;
- tool-call interfaces.

Such adaptation MUST preserve ALH semantics.

Provider-specific mechanics MUST NOT silently redefine:

- authority;
- responsibility;
- context status;
- educational semantics.

---

# 40. Artifact Failure Conditions

A prompt artifact SHOULD be considered architecturally invalid if it materially:

- lacks identifiable responsibility;
- exceeds its authority;
- duplicates or redefines upstream semantics;
- collapses distinct educational concepts;
- assumes unrestricted context access;
- suppresses material conflicts;
- relies on vendor precedence as ALH authority;
- embeds implementation choices as architecture without justification;
- makes responsibility coverage untraceable.

Later verification SHOULD be able to detect these classes of failure.

---

# 41. Artifact Anti-Patterns

Prompt Architecture MUST avoid the following artifact anti-patterns.

## 41.1 File Equals Responsibility

Assuming filesystem boundaries define semantic responsibility.

## 41.2 Role Name Equals Authority

Granting broad authority based on artifact filename or role label.

## 41.3 Prompt as Source of Truth

Treating prompt-local definitions as authoritative replacements for upstream documents.

## 41.4 Monolithic Prompt Artifact

Combining unrelated responsibilities until ownership becomes unclear.

## 41.5 Fragment Explosion

Splitting responsibilities into excessive fragments without semantic benefit.

## 41.6 Embedded Volatile State

Copying learner or project state into durable prompt artifacts.

## 41.7 Vendor-Coupled Semantics

Defining ALH authority around provider-specific message mechanics.

## 41.8 Hidden Implementation Contract

Embedding loader, orchestration, storage, or runtime assumptions without explicit architectural justification.

## 41.9 Assessment Authority Leakage

Allowing assessment artifacts to own competency progression improperly.

## 41.10 Response Authority Inflation

Allowing response-generation artifacts to rewrite bounded results into stronger conclusions.

---

# 42. Prompt Artifact Rules

Prompt artifacts MUST satisfy the following rules:

1. Every material artifact MUST have identifiable responsibility.
2. Artifact authority MUST remain bounded by approved upstream ownership.
3. Artifact wording MUST NOT redefine architecture or methodology.
4. One-to-one mapping between Pipeline roles and artifacts MUST NOT be assumed.
5. Pipeline responsibility coverage MUST remain traceable.
6. Composite artifacts MUST preserve responsibility identity.
7. Shared artifacts MUST remain bounded.
8. Context dependencies SHOULD be explicit and minimized.
9. Context status MUST remain semantically preserved.
10. Artifacts MUST conform to approved precedence and conflict rules.
11. Educational artifacts MUST preserve Stage 2 semantics.
12. Volatile state SHOULD NOT be embedded as durable prompt semantics.
13. Artifact structure SHOULD remain implementation-independent at Stage 4.
14. Metadata semantics MAY be required without prescribing implementation syntax.
15. Artifact evolution MUST follow applicable change governance.
16. Material artifacts SHOULD remain reviewable, testable, and traceable.
17. Provider-specific mechanics MUST NOT redefine ALH semantic authority.
18. Production prompt wording belongs to Stage 5 unless explicitly approved otherwise.

---

# 43. Stage 4 to Stage 5 Contract

This document establishes the handoff from Prompt Architecture to Harness Implementation.

Stage 4 provides:

```text id="ewzc3g"
Instruction Responsibilities
        +
Composition Rules
        +
Precedence Rules
        +
Context Rules
        +
Educational Instruction Rules
        +
Prompt Artifact Contract
```

Stage 5 must then determine:

```text id="o3j1ju"
Concrete Prompt Artifacts
        +
Artifact Representation
        +
Runtime Loading
        +
Runtime Composition
        +
Context Retrieval
        +
Model Invocation
        +
Persistence
        +
Integration
        +
Technical Verification
```

Stage 5 MAY choose implementation mechanisms.

It MUST preserve Stage 4 semantics.

---

# 44. Candidate Role Artifact Materialization

The established Agent Pipeline roles provide a valid candidate basis for Stage 5 artifact materialization.

A Stage 5 implementation MAY therefore produce artifacts such as:

```text id="b1kxu5"
.ai-learning/prompts/

├── intent-analyzer.md
├── project-manager.md
├── architect.md
├── teacher.md
├── developer.md
├── reviewer.md
├── security-auditor.md
├── assessor.md
├── memory-manager.md
└── response-generator.md
```

This structure is compatible with the Prompt Artifact Model if each artifact satisfies its approved responsibility contract.

However, Stage 4 does not require this exact physical mapping.

Stage 5 MAY use another architecture-compliant structure if responsibility coverage, composition, authority, context boundaries, and traceability remain preserved.

---

# 45. Summary

The Prompt Artifact Model defines how approved instruction responsibilities may become concrete prompt artifacts without allowing those artifacts to become an alternative architecture.

Its core relationship is:

```text id="q7mrts"
Approved Instruction Responsibility
        ↓
Prompt Artifact Contract
        ↓
Concrete Artifact
        ↓
Runtime Materialization
```

The model preserves the distinctions:

```text id="e270bw"
Pipeline Role
    ≠ Mandatory File

Prompt Artifact
    ≠ Semantic Owner

Filename
    ≠ Authority

Artifact Composition
    ≠ Authority Merge

Context Dependency
    ≠ Retrieval Mechanism

Prompt Structure
    ≠ Runtime Architecture

Production Prompt Text
    ≠ Prompt Architecture
```

This contract allows Stage 5 to materialize practical prompt artifacts while preserving the architectural, educational, and development responsibilities established by Stages 1 through 4.

The final Stage 4 document defines Prompt Architecture compliance and traceability:

`07-Prompt-Architecture-Compliance-and-Traceability.md`
