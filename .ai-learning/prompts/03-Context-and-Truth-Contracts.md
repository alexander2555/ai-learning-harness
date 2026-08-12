# Context and Truth Contracts

Status: Accepted
Version: 1.0

Parent Documents

- 00-Prompt-Architecture.md
- 01-Instruction-Responsibility-Model.md
- 02-Instruction-Authority-and-Composition.md
- ADR-001-Separation-of-Application-and-Learning-Infrastructure.md

Related Documents

- 03-System-Architecture.md
- 05-Memory-Model.md
- 06-Decision-Engine.md
- 00-Learning-Model.md
- 00-Development-Methodology.md
- 04-Engineering-and-Educational-Instruction-Boundaries.md
- 05-Superpowers-and-External-Capability-Boundaries.md
- 06-Instruction-Outputs-Claims-and-Stage-5-Contracts.md

---

# 1. Purpose

This document defines the semantic Context and Truth Contracts for AI Learning Harness (ALH) Prompt Architecture.

It specifies:

- what context means at the instruction-responsibility layer;
- how context requirements are expressed;
- how relevant context differs from authoritative context;
- how context provenance affects interpretation;
- how current and stale context are distinguished;
- how derived, advisory, uncertain, and unverified information is handled;
- how project truth and learner truth remain separate;
- how conflicting information is handled;
- how missing context constrains behavior;
- how contextual content is prevented from acquiring instruction authority;
- what context semantics Stage 5 MUST preserve.

This document defines what information means to an Instruction Responsibility.

It does not define how that information is physically:

- stored;
- retrieved;
- serialized;
- transported;
- injected;
- cached;
- indexed;
- embedded;
- persisted.

Those mechanisms belong to Stage 5.

---

# 2. Core Principle

Correct AI behavior depends not only on available information, but on the semantic status of that information.

Prompt Architecture MUST therefore distinguish:

```text
Available Context
        ≠
Relevant Context
        ≠
Authoritative Context
```

Information being present does not make it relevant.

Information being relevant does not make it authoritative.

Information being authoritative in one semantic domain does not make it authoritative in another.

The governing relationship is:

```text
Instruction Responsibility
        ↓
Context Requirement
        ↓
Relevant Information
        ↓
Semantic Status
        ↓
Applicable Authority
        ↓
Bounded Use
```

Context MUST be interpreted according to its meaning and authority, not merely its availability.

---

# 3. Context

**Context** is information available or required for an Instruction Responsibility to perform its accepted semantic behavior.

Context MAY describe:

- learner state;
- competency state;
- learning objectives;
- educational strategy;
- project requirements;
- architecture;
- source code;
- development activity;
- Engineering Rigor;
- tests;
- verification results;
- review findings;
- security findings;
- operational conditions;
- external capability information;
- prior decisions;
- relevant user intent.

Context is not itself an authority domain.

Access to context MUST NOT expand the authority of the Instruction Responsibility consuming it.

Therefore:

```text
Context Access
        ≠
Semantic Authority
```

---

# 4. Context Contract

Every material Instruction Responsibility MUST have a Context Contract sufficient to identify the semantic information needed for correct behavior.

A Context Contract SHOULD identify, where applicable:

- required context;
- optional relevant context;
- authoritative sources or source classes;
- derived context;
- advisory context;
- provenance requirements;
- freshness requirements;
- acceptable uncertainty;
- behavior when required context is missing;
- behavior when material sources conflict;
- context that MUST NOT be treated as authoritative;
- trust constraints.

A Context Contract defines semantic requirements.

It MUST NOT prescribe Stage 5 retrieval or storage technology.

---

# 5. Required Context

**Required Context** is information without which an Instruction Responsibility cannot reliably perform a material part of its responsibility.

When Required Context is unavailable, the responsibility MUST NOT behave as though the missing information were known.

Depending on the responsibility, it MAY:

- request the missing information;
- obtain it through an available authorized mechanism;
- defer the affected decision;
- provide a bounded partial result;
- expose uncertainty;
- identify what cannot yet be established.

It MUST NOT fabricate the missing context.

Therefore:

```text
Missing Required Context
        ≠
Permission to Guess
```

---

# 6. Relevant Context

**Relevant Context** is information that may materially improve or constrain the behavior of an Instruction Responsibility.

Relevant Context need not be authoritative.

Examples MAY include:

- an advisory review comment;
- a generated summary;
- a prior hypothesis;
- historical project information;
- an external recommendation.

Relevant Context MAY influence reasoning.

It MUST NOT override authoritative context merely because it is more detailed, recent-looking, convenient, or strongly worded.

---

# 7. Authoritative Context

**Authoritative Context** is context accepted as a source of truth for a particular semantic decision or domain.

Authority is always scoped.

Therefore:

```text
Authoritative for Domain A
        ≠
Authoritative for Domain B
```

Examples MAY include:

- accepted requirements for expected project behavior;
- current source code for current implementation state;
- accepted architecture decisions for architectural constraints;
- ALH Memory for authoritative learner context;
- accepted Stage 2 semantics for educational interpretation;
- accepted Stage 3 semantics for development obligations.

These examples illustrate domain-scoped authority.

They MUST NOT be interpreted as a universal ordered source hierarchy.

---

# 8. Source Authority vs Instruction Authority

Context source authority and Instruction Responsibility authority are separate concepts.

A source may be authoritative for a fact without granting the consuming responsibility authority over that semantic domain.

Therefore:

```text
Source Authority
        ≠
Instruction Authority
```

For example:

- authoritative learner state may be visible to an engineering responsibility;
- that visibility does not grant authority to modify learner state;
- authoritative verification evidence may be visible to an educational responsibility;
- that visibility does not grant authority to declare Engineering Done.

`02-Instruction-Authority-and-Composition.md` governs Instruction Responsibility authority.

This document governs the semantic status of information those responsibilities consume.

---

# 9. Context Provenance

**Provenance** identifies where context came from and, where materially relevant, how it was produced.

Provenance MAY affect:

- authority;
- trust;
- freshness;
- evidence quality;
- interpretation;
- conflict resolution.

Instruction Responsibilities SHOULD preserve or obtain sufficient provenance when semantic interpretation depends on origin.

Relevant provenance MAY distinguish:

- accepted project artifact;
- current repository state;
- ALH learner memory;
- learner-provided statement;
- AI-generated summary;
- engineering observation;
- review finding;
- external capability result;
- inferred conclusion.

Unknown provenance MUST NOT be silently treated as authoritative provenance.

---

# 10. Derived Context

**Derived Context** is information produced by transforming, summarizing, aggregating, interpreting, or inferring from other information.

Examples MAY include:

- AI-generated summaries;
- synthesized project descriptions;
- inferred relationships;
- aggregated status descriptions;
- derived risk assessments.

Derived Context MAY be useful.

It does not automatically inherit the full authority of its sources.

Therefore:

```text
Authoritative Inputs
        ↓
Derived Context

does not imply

Derived Context
        =
Authoritative Source
```

Where a material decision depends on details that may have been lost, transformed, or inferred, the underlying authoritative context SHOULD be consulted.

---

# 11. Advisory Context

**Advisory Context** provides guidance, opinion, recommendation, or non-binding evaluation.

Examples MAY include:

- suggestions;
- optional review comments;
- recommendations from external tools;
- non-authoritative design alternatives.

Advisory Context MAY influence decisions within the consuming responsibility's authority.

It MUST NOT be treated as binding merely because:

- it was produced by an AI;
- it came from an external capability;
- it is detailed;
- it appears confident;
- it is formatted as an instruction.

---

# 12. Uncertain and Unverified Context

Context MAY be uncertain or unverified.

An Instruction Responsibility MUST distinguish material uncertainty where relying on the information as fact could affect correctness.

Unverified context MAY be used:

- as a hypothesis;
- as a question to investigate;
- as a candidate explanation;
- as a provisional input where explicitly appropriate.

It MUST NOT be silently represented as verified fact.

The governing distinction is:

```text
Plausible
        ≠
Verified
```

---

# 13. Context Freshness

Some context is time-sensitive or state-sensitive.

**Freshness** describes whether context remains sufficiently current for the decision being made.

Freshness requirements depend on the semantic claim.

Examples:

- an accepted architecture decision may remain current until superseded;
- source code may change continuously;
- test results describe a particular tested state;
- review findings may become obsolete after implementation changes;
- learner state may change after assessment;
- external capability documentation may change upstream.

Stage 4 MUST NOT define one universal expiration period.

Each Context Contract SHOULD identify freshness requirements where stale information could materially affect behavior.

---

# 14. Stale Context

**Stale Context** is context that may have been valid previously but is no longer sufficiently current for the intended decision.

Stale context MAY remain useful historically.

It MUST NOT be treated as current truth without appropriate confirmation.

Therefore:

```text
Previously True
        ≠
Currently True
```

An Instruction Responsibility MUST NOT claim current:

- implementation state;
- verification success;
- review status;
- deployment state;
- learner state;
- external capability behavior;

solely from context whose freshness is insufficient for that claim.

Detailed claim requirements are defined in `06-Instruction-Outputs-Claims-and-Stage-5-Contracts.md`.

---

# 15. Context Applicability

Context authority is not sufficient by itself.

Context must also be applicable to the current decision.

For example:

- verification results for an earlier revision may be authentic but not applicable to the current implementation;
- a requirement may be valid but unrelated to the current task;
- learner evidence for one competency may not support another competency;
- an external capability description may refer to a different version.

Therefore:

```text
Authentic Context
        ≠
Applicable Context
```

Instruction Responsibilities MUST interpret context within the scope to which it applies.

---

# 16. Truth Domains

ALH operates across multiple semantic truth domains.

For Prompt Architecture purposes, important distinctions include:

- project truth;
- learner truth;
- methodology truth;
- external capability truth.

These are semantic distinctions.

They MUST NOT be treated as new Stage 1 architectural subsystems.

Truth domains identify where particular information obtains its authority.

They do not define runtime stores or context channels.

Truth domains are identified only to distinguish the semantic authority and interpretation of information.

This classification is non-exhaustive and MUST NOT be treated as a canonical context taxonomy, storage decomposition, retrieval topology, context channel model, or Stage 5 implementation structure.

---

# 17. Project Truth

**Project Truth** concerns the actual state, requirements, constraints, decisions, and evidence of the learner's software project.

Relevant authoritative project context MAY include, depending on the decision:

- accepted requirements;
- accepted architecture decisions;
- current source code;
- current configuration;
- tests;
- current verification results;
- applicable review findings;
- operational evidence.

No single project artifact is universally authoritative for every project question.

Authority depends on the semantic question.

For example:

```text
Requirement
        =
Authority for Expected Behavior
```

does not imply:

```text
Requirement
        =
Authority for Current Implementation
```

Likewise:

```text
Current applicable project artifacts and state
        =
Authority for the implementation state they directly establish
```

does not imply:

```text
Current applicable project artifacts and state
        =
Authority for Intended Behavior
```

Source code is often a primary authority for implementation state, but it MUST NOT be treated as universally sufficient where configuration, generated artifacts, build state, deployed state, or other applicable project evidence materially affects the semantic question.

---

# 18. Learner Truth

**Learner Truth** concerns authoritative ALH learner context.

This MAY include accepted learner-state information such as:

- competency state;
- accepted educational evidence;
- Learning Debt;
- Automation Level;
- educational progression state;
- other learner-memory information established by accepted architecture and methodology.

Learner truth MUST remain governed by ALH learning infrastructure.

Project artifacts MUST NOT become authoritative learner-state storage.

Therefore:

```text
Project Repository
        ≠
Authoritative Learner Memory
```

Engineering observations MAY contribute Candidate Educational Evidence.

They MUST NOT directly become authoritative learner truth without the accepted educational interpretation path.

---

# 19. Project / Learner Separation

ADR-001 requires separation between application responsibilities and learning infrastructure.

Prompt Architecture MUST preserve this distinction semantically.

Context composition MAY make project and learner information simultaneously relevant.

Such composition MUST NOT collapse their authority.

Conceptually:

```text
Project Context
        +
Learner Context
        ↓
Instruction Behavior
```

does not imply:

```text
Project Context
        =
Learner Context
```

or:

```text
Application Artifact
        =
Learner-State Store
```

An Instruction Responsibility MAY reason across both domains where its authority permits.

It MUST preserve the provenance and semantic status of each.

---

# 20. Methodology Truth

Accepted Stage 2 and Stage 3 documents define normative methodology within their respective domains.

Prompt Architecture MUST treat those accepted semantics as authoritative constraints.

Stage 2 governs educational methodology.

Stage 3 governs development methodology for the learner's real software product.

Stage 3 MUST NOT be treated as methodology for developing ALH itself.

Generated summaries or historical downstream documents MUST NOT override accepted methodology.

---

# 21. External Capability Truth

Claims about external capabilities MUST be grounded in sufficiently authoritative and current information when those claims materially affect ALH behavior.

This is especially important for Superpowers.

Prompt Architecture MUST NOT assume:

- undocumented capability behavior;
- historical capability behavior remains current;
- a capability exists because an old ALH document references it;
- external execution topology defines ALH responsibility topology.

External capability truth MAY require verification against current authoritative upstream information.

Detailed capability boundaries are defined in `05-Superpowers-and-External-Capability-Boundaries.md`.

---

# 22. Context Conflict

A **Context Conflict** exists when relevant sources provide materially incompatible information about the same semantic question.

Examples MAY include:

- documentation disagreeing with current source code about implementation state;
- a stale verification result conflicting with current code changes;
- generated summary conflicting with an accepted requirement;
- historical learner information conflicting with authoritative current learner state;
- old capability documentation conflicting with current upstream documentation.

A difference between sources is not necessarily a conflict.

Sources may describe:

- different domains;
- different revisions;
- different time periods;
- different levels of abstraction.

Conflict handling MUST first determine whether the sources actually make incompatible claims about the same question.

---

# 23. Context Conflict Resolution

Context conflicts MUST be resolved according to semantic authority, applicability, provenance, and freshness.

They MUST NOT be resolved merely by:

- choosing the newest-looking text;
- choosing the longest source;
- choosing the most confident source;
- choosing the source appearing latest in a prompt;
- choosing AI-generated synthesis over source material;
- choosing the source most convenient for task completion.

The semantic procedure SHOULD be:

```text
Detect Apparent Conflict
        ↓
Identify Semantic Question
        ↓
Identify Source Domains
        ↓
Check Provenance
        ↓
Check Applicability
        ↓
Check Freshness
        ↓
Determine Applicable Authority
        ↓
Resolve or Expose Conflict
```

If applicable authority clearly resolves the conflict, the Instruction Responsibility SHOULD follow it within its own authority.

If the conflict remains material and unresolved, it MUST be exposed.

---

# 24. No Universal Source Precedence Ladder

Stage 4 MUST NOT define a universal rule such as:

```text
Repository
    >
Documentation
    >
Memory
    >
User Statement
    >
External Source
```

Different sources are authoritative for different semantic questions.

For example:

- current code may answer what is implemented;
- accepted requirements may answer what should be implemented;
- ALH Memory may answer authoritative learner state;
- accepted methodology may answer how educational evidence is interpreted.

Source precedence is therefore domain-specific.

The correct question is:

> Which source is authoritative and applicable for this semantic decision?

not:

> Which source type always wins?

---

# 25. User-Provided Context

User-provided information MAY be authoritative for matters the user legitimately defines.

Examples MAY include:

- task intent;
- desired product behavior where the user owns that requirement;
- project constraints;
- clarifications;
- learner responses.

User-provided information MUST NOT automatically override independently authoritative facts or accepted ALH semantics.

A user statement that a test passed does not necessarily constitute current verification evidence.

A learner assertion of mastery does not itself establish competency mastery.

A request to ignore an accepted architectural boundary does not silently modify that boundary.

User context MUST therefore be interpreted according to the semantic domain and authority involved.

---

# 26. AI-Generated Context

AI-generated content MUST be treated according to its provenance and semantic status.

It MUST NOT become authoritative merely because it was produced earlier by ALH.

Examples include:

- summaries;
- plans;
- interpretations;
- generated requirements;
- generated review notes;
- generated state descriptions.

Where an AI-generated artifact has been explicitly accepted through an established project process, that acceptance MAY change its semantic status according to the authority of that process.

The AI generation itself does not provide that authority.

Therefore:

```text
AI Generated
        ≠
Authoritative
```

and:

```text
Accepted Through Authorized Process
        MAY
change semantic status
```

The authority comes from the accepted process, not from the model.

---

# 27. Summaries and Compression

Context MAY be summarized or compressed for practical use.

Such transformation MUST preserve the distinction between source truth and derived representation.

A summary SHOULD NOT be used as the sole basis for a material decision when:

- omitted detail may change the decision;
- source conflict exists;
- provenance is unclear;
- exact evidence matters;
- freshness cannot be established.

Stage 4 does not define token-management or summarization implementation.

It defines only the semantic constraint:

```text
Context Compression
        ≠
Authority Promotion
```

and:

```text
Context Compression
        MUST NOT
erase material uncertainty or provenance
```

---

# 28. Candidate Educational Evidence as Context

Candidate Educational Evidence is context with a specific bounded semantic status.

It represents an engineering observation that MAY later be interpreted educationally.

It is not authoritative competency evidence.

Therefore:

```text
Candidate Educational Evidence
        ≠
Accepted Educational Evidence
```

An educational assessment responsibility MAY consume Candidate Educational Evidence according to Stage 2 semantics.

An engineering responsibility producing Candidate Educational Evidence MUST NOT represent it as accepted learner truth.

Detailed engineering / educational boundaries are defined in `04-Engineering-and-Educational-Instruction-Boundaries.md`.

---

# 29. Verification Context

Verification results are evidence about a particular engineering state under particular verification conditions.

Their semantic interpretation SHOULD preserve:

- what was verified;
- against which state or revision where relevant;
- what verification mechanism was used;
- whether the result remains applicable;
- material limitations.

A verification result MUST NOT be generalized beyond what it establishes.

For example:

```text
One Test Passed
        ≠
All Applicable Verification Passed
```

and:

```text
Verification Passed
        ≠
Automatic Engineering Done
```

Detailed completion-claim semantics belong to `06-Instruction-Outputs-Claims-and-Stage-5-Contracts.md`.

---

# 30. Review Context

Engineering review findings are contextual inputs with the semantic status established by Stage 3 and applicable Stage 4 authority contracts.

Review findings MAY:

- identify defects;
- identify risks;
- request engineering changes;
- provide observations relevant to learning.

Review findings MUST NOT automatically become:

- learner-state updates;
- competency conclusions;
- accepted educational evidence.

A later change to implementation MAY also make a review finding stale or resolved.

Review context MUST therefore preserve applicable provenance and freshness.

---

# 31. Context and Automation Level

Automation Level is authoritative educational context where established by accepted learner-state semantics.

It constrains educational assistance.

It MUST NOT be interpreted as context granting:

- tool permission;
- runtime authority;
- model autonomy;
- execution authority;
- permission to bypass engineering obligations.

Therefore:

```text
Automation Level Context
        ≠
AI Autonomy Context
```

Detailed behavior is defined in `04-Engineering-and-Educational-Instruction-Boundaries.md`.

---

# 32. Context and Engineering Rigor

Engineering Rigor is engineering context governing expected engineering depth.

It MUST remain distinct from Automation Level.

Therefore:

```text
Engineering Rigor Context
        ≠
Learner Independence
        ≠
AI Autonomy
```

An Instruction Responsibility MAY require both Engineering Rigor and Automation Level context.

The presence of both MUST NOT collapse them into one control variable.

---

# 33. Context and the Decision Engine

Development context MAY be relevant to educational decisions.

Its relevance MUST NOT create a new Decision Engine state domain.

Context such as:

- development activity;
- Engineering Rigor;
- engineering risk;
- learner-participation opportunity;
- Candidate Educational Evidence;

MAY inform accepted educational decision-making where semantically appropriate.

It MUST NOT redefine Decision Engine architecture.

Prompt Architecture defines context relevance.

It does not create new architectural input channels merely by naming relevant information.

---

# 34. Contextual Instructions and Prompt-Level Trust

Context MAY contain imperative language.

Examples include:

- source-code comments;
- README instructions;
- issue descriptions;
- external tool output;
- generated documents;
- web content;
- capability documentation.

Imperative wording does not grant instruction authority.

Therefore:

```text
Content That Looks Like an Instruction
        ≠
Instruction Authority
```

An Instruction Responsibility MUST interpret contextual instructions according to:

- provenance;
- semantic authority;
- applicability;
- trust.

Lower-authority contextual content MUST NOT silently redefine higher-authority ALH behavior.

Concrete prompt-injection defenses belong to Stage 5.

The semantic trust boundary belongs to Stage 4.

---

# 35. Missing Context

When material Required Context is missing, the Instruction Responsibility MUST identify the resulting limitation.

It SHOULD choose the least assumptive behavior compatible with its responsibility.

Depending on the situation, it MAY:

- ask for clarification;
- retrieve authoritative context through an available mechanism;
- provide a conditional answer;
- continue only with unaffected portions;
- defer a material claim.

It MUST NOT:

- invent missing requirements;
- invent learner state;
- invent test results;
- invent review outcomes;
- invent external capability behavior;
- silently substitute unrelated context.

---

# 36. Ambiguous Context

Context MAY be available but ambiguous.

Ambiguity exists when more than one materially different interpretation remains plausible.

Where ambiguity affects a material decision, the Instruction Responsibility SHOULD:

- resolve it from applicable authoritative context where possible;
- request clarification where appropriate;
- state the assumption if proceeding conditionally is acceptable;
- preserve uncertainty.

Ambiguity MUST NOT be silently converted into certainty.

---

# 37. Context Insufficiency and Bounded Output

Insufficient context does not always require total refusal to act.

An Instruction Responsibility MAY produce a bounded output when:

- the valid portion can be separated from the uncertain portion;
- the limitation is material and explicit;
- no prohibited claim is required.

For example, an instruction MAY:

- explain applicable methodology without claiming project-specific success;
- identify likely verification needs without claiming verification occurred;
- describe a candidate design without asserting it is accepted architecture.

The output MUST remain within the responsibility's authority and available evidence.

---

# 38. Context Minimization

Instruction Responsibilities SHOULD require only context that has meaningful semantic relevance to their behavior.

Prompt Architecture SHOULD avoid requiring unrelated learner or project context merely because it is available.

Context minimization supports:

- clearer authority boundaries;
- reduced accidental leakage;
- reduced irrelevant influence;
- stronger security;
- easier Stage 5 implementation.

Context minimization is a semantic principle.

Stage 4 does not define token limits or retrieval algorithms.

---

# 39. Sensitive Context

Some context MAY be sensitive due to its project, learner, security, or operational nature.

Instruction Responsibilities SHOULD consume sensitive context only where it is relevant to accepted responsibility.

Access to sensitive context MUST NOT grant broader authority.

Stage 4 defines this semantic minimization requirement.

Concrete access control, storage protection, redaction, and transport security belong to Stage 5 and applicable security architecture.

---

# 40. Context Contract Example

The following illustrates an abstract Context Contract.

```text
Instruction Responsibility:
    Engineering Review

Required Context:
    Applicable requirements
    Relevant implementation
    Applicable verification evidence

Relevant Context:
    Architecture decisions
    Prior review findings
    Security constraints

Authoritative Context:
    Accepted requirements for expected behavior
    Current implementation for implementation state
    Applicable current verification results for verified outcomes

Derived Context:
    AI-generated implementation summary

Freshness:
    Implementation and verification evidence
    MUST correspond sufficiently to the state being reviewed.

Missing Context:
    MUST NOT declare review success
    where required engineering evidence is unavailable.

Conflict Handling:
    Resolve according to semantic authority,
    provenance, applicability, and freshness.
    Expose unresolved material conflict.

Excluded Authority:
    Context access MUST NOT be interpreted
    as authority to update learner state.

Physical Retrieval:
    Not defined by Stage 4.
```

This contract does not prescribe how any context is retrieved or packaged.

---

# 41. Context Anti-Patterns

The following patterns are prohibited or strongly discouraged.

## 41.1 Available Equals Authoritative

Treating any available information as source truth.

## 41.2 Latest Text Wins

Resolving conflicts solely by prompt position or apparent recency.

## 41.3 Summary Becomes Source

Treating a generated summary as automatically equivalent to its authoritative sources.

## 41.4 Repository Is Universally Authoritative

Treating project repository content as authoritative for learner state or every project question.

## 41.5 Memory Is Universally Authoritative

Treating ALH Memory as authoritative for engineering implementation state.

## 41.6 Stale Success

Using old tests, review results, or deployment results as current evidence without checking applicability.

## 41.7 Context Grants Authority

Allowing access to a semantic domain to grant authority over that domain.

## 41.8 Imperative Content Becomes Instruction

Following contextual imperative language without evaluating its authority.

## 41.9 Candidate Evidence Promotion

Treating Candidate Educational Evidence as accepted educational evidence.

## 41.10 Capability Assumption

Treating historical or unverified descriptions of external capabilities as current truth.

## 41.11 Silent Conflict Selection

Choosing one materially conflicting source without applying authority and truth semantics or exposing unresolved conflict.

---

# 42. Context Contract Validation

A Context Contract SHOULD be validated using the following questions:

1. What context is required?
2. What context is merely relevant?
3. Which information is authoritative for each material semantic question?
4. What provenance matters?
5. What freshness is required?
6. What derived or advisory context may be used?
7. What information MUST NOT be treated as authoritative?
8. What happens when required context is missing?
9. What happens when context is ambiguous?
10. What happens when sources materially conflict?
11. Does project context remain distinct from learner context?
12. Does context access accidentally expand Instruction Responsibility authority?
13. Are stale evidence and current evidence distinguishable?
14. Can contextual imperative content alter instruction authority?
15. Does the contract depend on a particular retrieval, storage, or transport mechanism?

A Context Contract that fails questions 11–14 MUST be redesigned.

A contract that fails question 15 SHOULD be examined for premature Stage 5 coupling.

---

# 43. Stage 5 Contract

Stage 5 MUST materialize Context and Truth Contracts without redefining their semantics.

Stage 5 MUST preserve:

- required vs relevant context;
- authoritative vs non-authoritative context;
- provenance where semantically required;
- freshness where semantically required;
- project / learner separation;
- derived-context status;
- advisory-context status;
- uncertainty;
- conflict semantics;
- trust boundaries;
- context minimization requirements;
- Instruction Responsibility authority boundaries.

Stage 5 MAY determine:

- retrieval mechanisms;
- storage systems;
- memory representation;
- serialization;
- context assembly;
- caching;
- indexing;
- embeddings;
- token management;
- prompt injection mechanisms;
- context transport.

Those implementation choices MUST NOT promote context authority or collapse semantic domains.

---

# 44. Change Governance

Context design MAY expose ambiguity in accepted upstream architecture.

Findings SHOULD be classified as:

## Observation

A clarification of context authority or information semantics that does not change accepted architecture.

## Candidate ADR

A proposed change to an accepted source of authority, state ownership, trust boundary, or architectural information domain.

## Future Evolution

A useful context capability intentionally deferred beyond current Stage 4 scope.

Stage 4 MUST NOT use Context Contracts to create new architectural state domains or authority channels silently.

---

# 45. Acceptance Criteria

This document is satisfied when Stage 4 can consistently answer:

1. What context does an Instruction Responsibility require?
2. What context is merely relevant?
3. What context is authoritative for a particular semantic decision?
4. How is source authority distinguished from Instruction Responsibility authority?
5. How is provenance preserved where materially relevant?
6. How is derived context distinguished from source truth?
7. How is advisory context interpreted?
8. How is uncertainty represented?
9. How is freshness determined semantically?
10. How is stale context prevented from supporting current claims improperly?
11. How is applicability distinguished from authenticity?
12. How are project truth and learner truth separated?
13. How are accepted methodology and external capability truth handled?
14. How are context conflicts resolved?
15. Why is there no universal source-precedence ladder?
16. How is user-provided context bounded by semantic authority?
17. How is AI-generated context prevented from becoming automatically authoritative?
18. How are summaries prevented from erasing provenance or uncertainty?
19. How is Candidate Educational Evidence prevented from becoming learner truth automatically?
20. How are contextual instructions prevented from acquiring instruction authority?
21. What happens when required context is missing or ambiguous?
22. What context semantics MUST Stage 5 preserve?

---

# 46. Summary

Context in ALH Prompt Architecture is semantically typed by relevance, authority, provenance, applicability, freshness, and trust.

The central relationship is:

```text
Instruction Responsibility
        ↓
Context Contract
        ↓
Required / Relevant Context
        ↓
Authority + Provenance + Freshness + Applicability
        ↓
Bounded Interpretation
        ↓
Evidence-Constrained Behavior
```

The critical distinctions are:

```text
Available Context
        ≠
Relevant Context
        ≠
Authoritative Context
```

```text
Source Authority
        ≠
Instruction Authority
```

```text
Project Truth
        ≠
Learner Truth
```

```text
Derived Context
        ≠
Authoritative Source
```

```text
Previously True
        ≠
Currently True
```

```text
Authentic Context
        ≠
Applicable Context
```

```text
Imperative Content
        ≠
Instruction Authority
```

Stage 4 defines these semantic contracts without prescribing context infrastructure.

The next document applies the responsibility, authority, composition, and context models to the boundary between real software development and learning:

`04-Engineering-and-Educational-Instruction-Boundaries.md`
