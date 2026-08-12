# Context, Authority, and Truth Implementation

Status: Accepted
Version: 1.0

Parent Documents

- 00-Harness-Implementation-Architecture.md
- 01-Runtime-Responsibility-and-Instruction-Materialization.md
- 03-Context-and-Truth-Contracts.md
- 06-Instruction-Outputs-Claims-and-Stage-5-Contracts.md

Related Documents

- 03-System-Architecture.md
- 08-Memory-Model.md
- 09-Decision-Engine.md
- 04-Engineering-Artifacts-and-Traceability.md
- ADR-001-Separation-of-Application-and-Learning-Infrastructure.md

---

# 1. Purpose

This document defines how ALH physically represents, acquires, transforms, transports, validates, and exposes context while preserving accepted authority and truth semantics.

It answers:

> How should the Harness obtain and use project, learner, runtime, and external context without allowing retrieval, caching, transformation, composition, or model interpretation to change the authority or factual status of that context?

The governing relationship is:

```text
Source
        ↓
Acquisition
        ↓
Context Representation
        ↓
Authority / Freshness / Applicability Evaluation
        ↓
Runtime Use
        ↓
Derived Output
```

At every stage:

```text
Transformation
        ≠
Authority Promotion
```

and:

```text
Availability
        ≠
Truth
```

The Harness MUST preserve materially relevant distinctions between source authority, instruction authority, factual status, relevance, applicability, freshness, uncertainty, and derivation.

---

# 2. Responsibility Boundary

This document owns Stage 5 implementation design for:

- context acquisition;
- context representation;
- context provenance;
- source identity;
- source authority;
- freshness;
- relevance;
- applicability;
- derivation;
- uncertainty;
- conflict handling;
- context transformation;
- summarization;
- caching;
- project-truth integration;
- context invalidation;
- runtime context assembly;
- context exposure to Execution Units.

It MUST NOT redefine:

- what Stage 1 considers authoritative project or learner state;
- educational authority;
- engineering authority;
- learner-memory semantics;
- competency semantics;
- Instruction Responsibility authority;
- evidence semantics;
- completion semantics.

Learner-state persistence and learner-state mutation authority are defined primarily in:

`03-Learner-State-Persistence-and-Educational-Authority.md`

This document defines how learner context participates in context architecture without redefining learner-state ownership.

---

# 3. Core Context Distinctions

The implementation MUST preserve:

```text
Available Context
        ≠
Relevant Context
        ≠
Authoritative Context
```

and:

```text
Source Authority
        ≠
Instruction Authority
```

and:

```text
Source
        ≠
Representation
        ≠
Derived Representation
```

and:

```text
Fresh
        ≠
Authoritative
```

and:

```text
Authoritative
        ≠
Applicable
```

and:

```text
Unknown
        ≠
False
```

A context item may be:

- available but irrelevant;
- relevant but non-authoritative;
- authoritative but stale;
- authoritative but not applicable;
- derived but useful;
- conflicting with another source;
- incomplete;
- uncertain.

The Harness MUST NOT collapse these states into a single undifferentiated text context.

---

# 4. Context Item

A Context Item is a physical representation of information made available to the Harness for a specific interaction or runtime decision.

A Context Item MAY originate from:

- project repository;
- project files;
- version-control metadata;
- learner-state infrastructure;
- accepted ALH documents;
- external capability output;
- tool execution;
- coding environment;
- learner input;
- model output;
- generated summaries;
- runtime state.

A Context Item is an implementation representation.

It MUST NOT gain semantic authority merely because the Harness stores it.

---

# 5. Minimum Context Metadata

Where semantic interpretation materially depends on metadata, a Context Item SHOULD be capable of representing:

```text
content / value
source identity
source type
source authority
provenance
freshness or observation time
applicability
derivation status
uncertainty status
conflict status
project revision or state identity where relevant
```

Additional metadata MAY include:

- relevance;
- scope;
- trust level;
- confidentiality classification;
- acquisition method;
- transformation lineage;
- expiration or invalidation condition;
- evidence references.

The implementation MUST remain proportional.

Not every Context Item requires every field.

A metadata field SHOULD be required only where losing that distinction could materially affect behavior, authority, trust, state, or claims.

---

# 6. Source Identity

The Harness SHOULD identify the material source of context sufficiently to support provenance and authority evaluation.

Source identity MAY include:

- canonical document path;
- repository-relative path;
- repository revision;
- learner-state record identity;
- tool invocation identity;
- external-capability identity;
- runtime operation identity;
- learner message identity;
- model invocation identity.

Source identity MUST distinguish authoritative source content from a copied or derived representation where that distinction matters.

For example:

```text
Source:
accepted architecture document

Derived representation:
runtime summary of architecture document
```

The summary MUST NOT inherit authority merely because its source was authoritative.

---

# 7. Source Authority

Source authority describes whether a source is authoritative for a particular kind of truth.

Authority is domain-specific.

A source MAY be authoritative for one claim and non-authoritative for another.

For example:

```text
Git repository
    may be authoritative for:
    current project file content

Git repository
    is not automatically authoritative for:
    learner competency mastery
```

Likewise:

```text
ALH learner-state store
    may be authoritative for:
    accepted learner educational state

ALH learner-state store
    is not automatically authoritative for:
    whether tests currently pass
```

The implementation SHOULD represent source authority in a way that allows downstream policy to reason about the applicable domain.

A global boolean such as:

```text
authoritative = true
```

MAY be insufficient where authority is domain-dependent.

---

# 8. Project Truth

Project truth MUST be obtained from authoritative project sources where current engineering state matters.

Authoritative project sources MAY include:

- repository files;
- version-control state;
- current workspace content;
- build/test outputs;
- configuration;
- project-native artifacts.

The authoritative source depends on the claim being evaluated.

For example:

```text
Current file content
        →
workspace / repository content
```

```text
Current commit identity
        →
version-control metadata
```

```text
Tests passed
        →
actual test execution evidence
```

A model-generated summary MUST NOT replace direct project truth where the direct source is materially required.

---

# 9. Workspace and Repository State

The Harness MUST account for the possibility that working state differs from committed repository state.

Therefore:

```text
Repository HEAD
        ≠
Current Workspace State
```

where uncommitted or generated changes exist.

When evidence or decisions depend on actual current content, the implementation MUST identify which state was observed.

Relevant state identity MAY include:

- commit SHA;
- working-tree dirty state;
- content hash;
- file version;
- workspace snapshot identity.

The exact mechanism is an implementation decision.

The Harness MUST NOT describe evidence tied to one project state as current evidence for another state without checking applicability.

---

# 10. Learner Truth

Authoritative learner truth belongs to ALH learner-state infrastructure.

Project context MAY inform learner assessment.

It MUST NOT become authoritative learner state merely through ingestion, storage, or correlation.

The context layer MAY retrieve authoritative learner state.

It MUST NOT independently create or mutate that state.

The implementation MUST preserve:

```text
Project Observation
        ≠
Learner Truth
```

and:

```text
Candidate Educational Evidence
        ≠
Accepted Learner State
```

Learner-state mutation rules are defined downstream.

---

# 11. Accepted Project Documents

Accepted ALH repository documents and accepted ADRs MAY serve as normative context for Harness operation.

Where implementation behavior materially depends on an accepted contract, the Harness SHOULD obtain that contract from its authoritative repository source or from a representation whose provenance and version are sufficiently controlled.

The implementation MUST NOT rely on:

- historical documents;
- superseded documents;
- cached draft summaries;
- undocumented assumptions;

as normative authority when an accepted source exists.

Document acceptance status MUST be established through project governance rather than inferred solely from filename, storage, or model interpretation.

---

# 12. Context Acquisition

Context acquisition is the physical act of obtaining information from a source.

Acquisition MAY involve:

- direct file read;
- repository query;
- learner-state lookup;
- tool invocation;
- API request;
- external-capability result;
- runtime observation;
- user input.

Acquisition MUST preserve provenance sufficient for downstream interpretation.

Acquisition success MUST NOT imply content validity.

Therefore:

```text
Successfully Retrieved
        ≠
Authoritative
        ≠
Current
        ≠
Applicable
```

---

# 13. Retrieval Strategy

The Harness SHOULD retrieve context proportionally according to semantic need.

It SHOULD avoid two extremes:

```text
Retrieve Everything
```

and:

```text
Retrieve Too Little to Decide Correctly
```

The target is:

```text
Sufficient Relevant Context
```

Retrieval MAY be:

- direct;
- indexed;
- filtered;
- query-based;
- cached;
- incremental.

Retrieval mechanism MUST NOT change source authority.

---

# 14. Direct Source Preference

Where a factual or authority-sensitive decision materially depends on current truth, direct authoritative sources SHOULD be preferred over derived summaries.

For example:

```text
Current test result
        →
current execution evidence
```

is preferable to:

```text
previous model summary saying tests passed
```

Likewise:

```text
current learner-state record
```

is preferable to:

```text
cached natural-language description of learner state
```

Derived representations MAY be used for efficiency where freshness and semantic safety remain sufficient.

---

# 15. Relevance

Relevance determines whether a Context Item materially contributes to the current responsibility or decision.

Relevance is not authority.

The implementation MAY calculate relevance using:

- deterministic filters;
- semantic retrieval;
- model-assisted ranking;
- responsibility-specific selectors.

A highly relevant source MAY still be non-authoritative.

A highly authoritative source MAY still be irrelevant to the current decision.

The Harness MUST NOT promote relevance into authority.

---

# 16. Applicability

Applicability determines whether a Context Item or rule applies to the current situation.

Applicability MAY depend on:

- task scope;
- project state;
- learner state;
- development activity;
- engineering rigor;
- educational strategy;
- environment;
- capability availability;
- temporal state.

Applicability MUST remain distinguishable from relevance.

A source may discuss a topic and therefore be relevant while not being applicable to the current situation.

---

# 17. Freshness

Freshness describes whether context is sufficiently current for the claim or decision being made.

Freshness is claim-relative.

For example:

```text
Architecture decision from accepted ADR
```

may remain fresh for a long period.

Whereas:

```text
Tests currently pass
```

may become stale after a code change.

The Harness SHOULD support freshness evaluation through mechanisms such as:

- timestamps;
- revision identity;
- content identity;
- invalidation events;
- explicit expiry;
- dependency tracking.

The implementation MUST NOT assume that authoritative means fresh.

---

# 18. Context Invalidation

Context SHOULD be invalidated when a material change makes its previous interpretation unsafe or no longer applicable.

Invalidation MAY be triggered by:

- project file change;
- revision change;
- learner-state update;
- configuration change;
- capability version change;
- external data refresh requirement;
- explicit user correction.

Invalidation MUST NOT necessarily delete the historical Context Item.

The Harness MAY retain stale context for provenance while preventing it from being treated as current truth.

---

# 19. Derived Context

Derived Context is information produced by transforming or combining source context.

Examples include:

- summaries;
- extracted facts;
- embeddings;
- normalized records;
- classifications;
- synthesized task context.

Derived Context MAY improve efficiency.

It MUST preserve a link to source provenance where downstream correctness materially depends on origin.

The implementation MUST preserve:

```text
Derived Context
        ≠
Source Authority
```

A derived representation MUST NOT silently inherit all authority properties of its source.

---

# 20. Summarization

Summarization MAY be used to reduce context size or improve usability.

Summarization MUST NOT:

- fabricate omitted certainty;
- remove material uncertainty;
- erase conflicting evidence;
- change source authority;
- convert recommendation into fact;
- convert candidate evidence into accepted evidence;
- hide material scope limitations.

Where a summary is used for an authority-sensitive decision, the Harness SHOULD retain references to the underlying source material.

Critical decisions SHOULD be able to fall back to direct source retrieval where summary fidelity is insufficient.

---

# 21. Context Compression

Context compression includes any transformation designed to reduce size or complexity.

Compression MAY include:

- summarization;
- extraction;
- normalization;
- deduplication;
- indexing;
- semantic retrieval.

Compression MUST preserve materially relevant semantic status.

If compression cannot preserve a required distinction, the original source MUST remain available for the affected decision.

The Harness SHOULD prefer losing non-material detail over losing authority, uncertainty, conflict, or provenance.

---

# 22. Caching

Caching MAY be used for performance and cost control.

A cache is not an authoritative source merely because it is maintained by the Harness.

Cached context MUST retain sufficient metadata to determine:

- original source;
- derivation;
- freshness;
- invalidation conditions;
- applicable scope.

The Harness SHOULD revalidate or bypass cache when:

- the claim is high impact;
- current truth is required;
- the underlying source may have materially changed;
- cached freshness cannot be established;
- conflicting context exists.

---

# 23. Conflict Detection

The Harness SHOULD detect material conflicts between context items where those conflicts could affect:

- authority-sensitive decisions;
- factual claims;
- learner-state interpretation;
- engineering completion;
- educational completion;
- security decisions.

Conflict MAY arise because:

- two sources disagree;
- one source is stale;
- source scope differs;
- derived context is incorrect;
- user input contradicts project state;
- project state contradicts cached context.

Conflict MUST NOT be silently resolved by arbitrary source ordering.

---

# 24. Conflict Resolution

Conflict resolution SHOULD consider:

- domain-specific source authority;
- freshness;
- applicability;
- source proximity to the underlying truth;
- accepted project governance;
- evidence quality.

Where the conflict cannot be resolved safely:

```text
Conflicting
        ≠
Resolved
```

The Harness MUST preserve the conflict or report uncertainty.

It MUST NOT fabricate a single authoritative answer.

Where necessary, the Harness SHOULD obtain fresh authoritative evidence.

---

# 25. Uncertainty

The context architecture MUST support uncertainty states such as:

- unknown;
- uncertain;
- unverified;
- stale;
- conflicting;
- unavailable;
- incomplete.

These states MUST remain distinguishable where downstream behavior depends on them.

The Harness MUST preserve:

```text
Unknown
        ≠
False
```

```text
Unverified
        ≠
Failed
```

```text
Unavailable
        ≠
Not Applicable
```

```text
Conflicting
        ≠
Resolved
```

Model confidence MUST NOT replace source-based uncertainty status.

---

# 26. Context Trust

Trust describes the degree to which context may safely influence instructions, tool behavior, or security-sensitive decisions.

Trust is not identical to factual authority.

For example:

```text
Repository source code
```

may be authoritative for current source content while still containing untrusted text from a prompt-injection perspective.

The Harness SHOULD distinguish:

```text
Factual Authority
        ≠
Instruction Trust
```

and:

```text
Content Is Authoritative
        ≠
Content May Issue Instructions
```

Detailed trust enforcement is defined in:

`06-Security-Trust-and-Authority-Enforcement.md`

---

# 27. Instruction / Context Separation

Context MUST NOT gain instruction authority merely because it appears in the same model input as Harness instructions.

The physical materialization SHOULD preserve a boundary between:

- Harness-owned instructions;
- authoritative project facts;
- learner input;
- untrusted repository content;
- external tool output;
- model-generated content.

Where the model API or host environment supports role separation or structured content boundaries, the implementation SHOULD use them.

Where it does not, the Harness SHOULD use the strongest proportional alternative available.

---

# 28. Runtime Context Assembly

Runtime Context Assembly constructs the context supplied to an Execution Unit.

Conceptually:

```text
Applicable Responsibility Set
        ↓
Context Requirements
        ↓
Source Selection
        ↓
Acquisition
        ↓
Authority / Freshness / Conflict Evaluation
        ↓
Transformation Where Safe
        ↓
Execution Context
```

The resulting Execution Context is derived runtime state.

It MUST NOT become authoritative over its source materials.

---

# 29. Execution Context

An Execution Context SHOULD contain only the information necessary for the applicable Execution Unit to act correctly and safely.

The Harness SHOULD avoid exposing unrelated authoritative or sensitive context merely because it is available.

Execution Context MAY include:

- responsibility instructions;
- relevant project context;
- learner context;
- evidence;
- capability state;
- runtime state;
- uncertainty information.

The composition MUST preserve material source and authority distinctions.

---

# 30. Context Access and Authority

The Harness MUST preserve:

```text
Context Access
        ≠
Semantic Authority
```

A model, adapter, or Execution Unit that can read authoritative learner state does not automatically gain permission to modify it.

A component that can read project configuration does not automatically gain permission to change it.

A component that receives accepted ADRs does not become architectural authority.

Access control and authority control MAY use overlapping mechanisms.

They remain distinct concepts.

---

# 31. Project Context Adapter

The Harness SHOULD expose project context through a Project Port rather than coupling the Kernel directly to one repository or coding environment.

The Project Port SHOULD be capable of obtaining, where applicable:

- project files;
- workspace state;
- revision identity;
- relevant configuration;
- engineering artifacts;
- execution results.

Concrete adapters MAY differ by coding environment.

The adapter MUST preserve the distinction between observed project state and derived Harness interpretation.

---

# 32. Repository Authority

The repository is authoritative for project artifacts according to the accepted project ownership model.

However, repository presence alone MUST NOT make every file normative.

The implementation SHOULD distinguish where applicable:

- accepted normative documents;
- ordinary project artifacts;
- generated artifacts;
- historical artifacts;
- drafts;
- application content;
- ALH infrastructure content.

Authority classification SHOULD follow project governance and accepted document structure.

It MUST NOT be inferred solely from extension or directory depth unless that structure is itself normative.

---

# 33. ADR-001 Context Boundary

ADR-001 requires application artifacts and learning infrastructure to remain separated.

The context architecture MAY read application artifacts.

It MUST NOT turn application artifacts into storage for authoritative learner state.

Likewise, contextual extraction from application files MUST NOT write ALH-specific educational metadata back into application artifacts.

Project-context integration is read-oriented unless an accepted engineering operation explicitly authorizes project mutation.

Educational persistence remains ALH-owned.

---

# 34. Learner Context Access

The context layer MAY expose learner state necessary for:

- educational strategy;
- task adaptation;
- assessment;
- assistance calibration;
- Decision Engine behavior.

Learner Context SHOULD expose only the subset materially required for the current responsibility.

Broad learner-state access SHOULD NOT be default if narrower access preserves correctness.

The implementation SHOULD be able to distinguish:

```text
Authoritative Learner State
```

from:

```text
Derived Learner Summary
```

---

# 35. Assistance Attribution Context

Where educational interpretation depends on learner independence, relevant assistance context SHOULD be represented.

Examples MAY include:

- independent learner work;
- hint provided;
- partial solution provided;
- AI-generated implementation;
- learner modification of AI output;
- AI review of learner work.

Assistance attribution is contextual evidence.

It MUST NOT automatically establish competency state.

The physical capture mechanism is refined in:

`03-Learner-State-Persistence-and-Educational-Authority.md`

---

# 36. External Capability Context

External-capability output MUST enter the Harness as context with explicit provenance.

The Harness SHOULD distinguish:

```text
Capability Applicable
```

from:

```text
Capability Invoked
```

from:

```text
Capability Returned Result
```

from:

```text
Result Verified or Interpreted
```

External capability output MUST NOT automatically gain broader authority than its verified contract establishes.

---

# 37. Tool Result Context

Tool outputs SHOULD be captured with sufficient provenance to support claims based on them.

Relevant metadata MAY include:

- tool identity;
- invocation identity;
- arguments or safe argument summary;
- execution status;
- result;
- timestamp;
- project revision;
- environment;
- error state.

A tool result SHOULD be treated as evidence for the claim it directly supports.

It MUST NOT be generalized beyond its evidential scope without justification.

---

# 38. Model Output Context

Model output is derived context.

It MAY contain:

- recommendations;
- observations;
- classifications;
- proposed decisions;
- extracted facts;
- summaries.

Model output MUST NOT become authoritative solely because it is persisted or reused.

Where a model extracts a fact from an authoritative source, the authoritative source remains the primary truth reference unless accepted semantics establish otherwise.

---

# 39. User-Provided Context

Learner or user input MAY be authoritative for:

- stated intent;
- preferences;
- explanations of personal reasoning;
- explicit confirmations;
- decisions within the user's authority.

User input is not automatically authoritative for:

- current repository state;
- execution result;
- test result;
- accepted project document content;
- educational competency status.

The Harness SHOULD preserve these distinctions rather than treating all user statements as factual project truth.

---

# 40. Context Derivation Lineage

Where derived context influences an authority-sensitive decision, the Harness SHOULD retain enough derivation lineage to identify the source materials used.

Lineage MAY be represented as:

```text
Derived Context
        ↓ derived from
Source A
Source B
Source C
```

The implementation does not need to preserve hidden reasoning.

It SHOULD preserve externally inspectable source relationships.

Lineage is especially useful for:

- summaries;
- assessment inputs;
- completion decisions;
- capability interpretation;
- conflict resolution.

---

# 41. Authority-Sensitive Decisions

A decision is authority-sensitive when an incorrect context interpretation could materially:

- mutate learner state;
- mutate project state;
- create accepted evidence;
- declare Engineering Done;
- declare Educational Done;
- grant tool access;
- make a security-sensitive decision;
- present an authoritative factual claim.

For these decisions, the Harness SHOULD require stronger guarantees around:

- direct source use;
- freshness;
- provenance;
- conflict handling;
- uncertainty.

Low-impact advisory responses MAY use weaker context guarantees where proportional.

---

# 42. Context Quality Degradation

The Harness SHOULD detect or preserve signs of degraded context quality, including:

- stale source;
- partial retrieval;
- unavailable source;
- transformation loss;
- unresolved conflict;
- uncertain provenance;
- unsupported inference.

Degradation MUST NOT silently become certainty.

Where quality is insufficient for an authority-sensitive decision, the Harness SHOULD:

- retrieve fresh context;
- request missing evidence;
- reduce claim strength;
- preserve uncertainty;
- refuse the specific authoritative operation where necessary.

---

# 43. Context Serialization

Context MAY be serialized for transport between Harness components.

Serialization MUST preserve materially relevant semantic metadata.

A transport format MUST NOT force the Harness to drop authority, freshness, uncertainty, provenance, or conflict status where downstream behavior depends on them.

Concrete serialization technology remains an implementation decision.

---

# 44. Context Persistence

Not all runtime context SHOULD be persisted.

Persistence SHOULD be limited according to:

- continuing value;
- provenance needs;
- learner-state semantics;
- auditability;
- security;
- privacy;
- cost.

Persisted context MUST retain its original semantic status.

Persistence MUST NOT promote:

```text
temporary observation
```

into:

```text
authoritative state
```

The Harness MAY persist historical observations without making them current truth.

---

# 45. Context Lifetime

Context MAY have different lifetimes:

- execution-local;
- interaction-local;
- session-local;
- project-persistent;
- learner-persistent.

Lifetime is an implementation property.

It MUST NOT imply authority.

For example:

```text
Learner-persistent
        ≠
Authoritative Educational State
```

unless the accepted learner-state model explicitly establishes that status.

---

# 46. Context Normalization

The Harness MAY normalize heterogeneous sources into common internal representations.

Normalization SHOULD simplify:

- retrieval;
- provenance;
- authority evaluation;
- conflict detection;
- execution context assembly.

Normalization MUST NOT erase source-specific meaning necessary for correct interpretation.

The original source or sufficient source reference SHOULD remain available where normalization is lossy.

---

# 47. Context Indexing

Indexes MAY be used to improve retrieval.

An index is a derived structure.

It MUST NOT become authoritative merely because it is faster to query.

Where an index result materially affects an authority-sensitive decision, the Harness SHOULD retrieve or verify against the authoritative source where required.

---

# 48. Search and Semantic Retrieval

Semantic retrieval MAY identify relevant context.

Retrieval ranking MUST NOT be interpreted as authority ranking.

Therefore:

```text
Top Search Result
        ≠
Most Authoritative Source
```

and:

```text
Highest Similarity
        ≠
Applicable Truth
```

The Harness SHOULD perform authority evaluation independently from relevance ranking.

---

# 49. Context Precedence

The context architecture MUST NOT implement a universal source precedence ladder that silently resolves all conflicts.

Authority is domain- and claim-specific.

Precedence MAY be applied within a defined semantic domain where accepted rules justify it.

Execution order, retrieval order, or storage priority MUST NOT create source authority.

---

# 50. Runtime Source-of-Truth Resolution

Where a claim requires authoritative truth, the Harness SHOULD resolve the applicable source-of-truth according to the claim domain.

Conceptually:

```text
Claim Type
        ↓
Authority Domain
        ↓
Applicable Source Class
        ↓
Current Source
        ↓
Evidence / Truth Evaluation
```

Examples:

```text
Claim:
current code content

Authority domain:
project state

Source:
current workspace / repository
```

```text
Claim:
learner competency state

Authority domain:
educational state

Source:
ALH learner-state store
```

```text
Claim:
tests passed

Authority domain:
execution evidence

Source:
actual applicable test execution result
```

The Harness SHOULD avoid generic "truth" abstractions that erase claim-specific authority.

---

# 51. Context and Explainability

Significant decisions SHOULD retain enough context references to support concise external explanation.

The Harness SHOULD be able to identify:

- which authoritative sources materially contributed;
- which evidence was used;
- which uncertainty remained;
- whether derived context was involved;
- whether conflicts were unresolved.

Explainability MUST NOT require persisting hidden chain-of-thought.

---

# 52. Security Interaction

Context architecture MUST support downstream security controls by distinguishing trusted Harness instructions from potentially untrusted content.

At minimum, the design SHOULD support identification of context originating from:

- learner input;
- project files;
- external systems;
- generated model output;
- Harness-owned normative instructions;
- accepted project governance sources.

The security document determines the exact enforcement mechanisms.

This document requires the context layer not to erase these origins.

---

# 53. Failure Semantics

Context acquisition and evaluation SHOULD distinguish:

```text
Source Unavailable
```

```text
Source Retrieved but Stale
```

```text
Source Retrieved but Conflicting
```

```text
Source Retrieved but Non-Authoritative
```

```text
Source Retrieved but Not Applicable
```

```text
Source Retrieved Successfully
```

These states MUST NOT collapse into a single generic failure or success flag where downstream behavior differs.

---

# 54. Fallback Behavior

A fallback source MAY be used when the preferred source is unavailable if accepted semantics permit it.

Fallback MUST NOT silently inherit the authority of the preferred source.

The Harness SHOULD record:

- preferred source unavailable;
- fallback source used;
- fallback authority;
- remaining uncertainty.

Where no sufficient source exists, the Harness MUST preserve uncertainty rather than fabricate certainty.

---

# 55. Initial Context Architecture Direction

The initial Stage 5 context architecture SHOULD use:

```text
Source Adapters
        ↓
Context Acquisition
        ↓
Structured Context Items
        ↓
Authority / Freshness / Conflict Evaluation
        ↓
Context Selection
        ↓
Safe Transformation
        ↓
Execution Context
```

The implementation SHOULD preserve source provenance through the entire path.

This architecture MAY be implemented in one process.

It does not require a separate context service.

---

# 56. Context Record Direction

A concrete context structure SHOULD be capable of expressing, where applicable:

```text
id
value / content reference
source
source authority
provenance
observation time
project / state identity
freshness
applicability
derivation
uncertainty
conflict status
trust classification
```

This is an implementation direction rather than a fixed schema.

Exact types, fields, enums, storage format, and serialization remain downstream implementation decisions.

---

# 57. Context Assembly Policy Direction

Context assembly SHOULD be responsibility-driven.

The Harness SHOULD first determine:

```text
What does this responsibility need?
```

before asking:

```text
What context is available?
```

This reduces accidental context leakage and semantic overreach.

Context assembly SHOULD therefore be driven by applicable Responsibility Sets and their context requirements.

---

# 58. Project-State Identity Direction

Evidence, claims, and context whose correctness depends on mutable project state SHOULD be associated with a proportional state identity.

The initial implementation SHOULD support at least:

- repository revision where applicable;
- working-tree status or equivalent workspace-change indicator;
- execution-time identity for tool results.

More advanced snapshotting MAY be introduced later if required.

This is an implementation decision and does not alter Stage 1 project truth semantics.

---

# 59. Derived Cache Direction

Derived caches MAY be used for:

- document summaries;
- project summaries;
- learner-context summaries;
- retrieval indexes.

They SHOULD be treated as performance structures.

They MUST NOT become primary authority where accepted direct sources remain available.

Authority-sensitive operations SHOULD be able to bypass or verify derived caches.

---

# 60. Implementation Decisions Left Open

This document intentionally does not prescribe:

- exact Context Item programming-language type;
- JSON or other serialization schema;
- database technology;
- vector database;
- embedding model;
- indexing library;
- cache technology;
- cache TTL policy;
- exact invalidation algorithm;
- exact project adapter API;
- snapshot implementation;
- exact trust enum;
- exact authority enum;
- exact relevance-ranking algorithm;
- context-window budgeting algorithm;
- model-specific message format.

These remain downstream implementation decisions.

They MUST preserve this contract.

---

# 61. Observations

## O-1 — Authority Is Claim-Specific

A universal `authoritative: true/false` field is likely insufficient for all Stage 5 needs.

Authority frequently depends on the claim domain.

## O-2 — Workspace Identity Matters

Commit SHA alone is insufficient where learners and coding agents work with uncommitted changes.

The implementation likely requires a proportional working-state identity or dirty-state signal.

## O-3 — Derived Context Is a Major Drift Risk

Summaries, indexes, and model-generated project descriptions are useful but can silently become de facto truth if direct-source fallback is not preserved.

## O-4 — Relevance and Authority Need Separate Evaluation

Semantic search can identify useful context but is not capable by itself of establishing authority.

## O-5 — Context Trust and Factual Authority Are Orthogonal

Repository content may accurately represent project state while still being unsafe as instruction input.

Security enforcement therefore cannot rely solely on source authority.

---

# 62. Candidate ADRs

No Candidate ADR is introduced by this document.

The following are implementation decisions within accepted architecture:

- structured Context Items;
- source adapters;
- context provenance;
- freshness and invalidation metadata;
- responsibility-driven context assembly;
- derived caches;
- project-state identity;
- direct-source preference for authority-sensitive decisions.

If a future implementation requires changing authoritative ownership of project or learner truth, the issue MUST be surfaced as a Candidate ADR.

---

# 63. Future Evolutions

Possible future improvements include:

- content-addressed project snapshots;
- formal source-authority policy language;
- dependency-aware automatic context invalidation;
- provenance graphs;
- cross-session semantic context indexes;
- integrity hashes for derived context;
- advanced conflict-resolution engines;
- automatic direct-source escalation based on claim risk;
- policy-driven context minimization.

These SHOULD NOT complicate the initial proportional implementation unless evidence demonstrates a current need.

---

# 64. Completion Criteria

This document is complete when Stage 5 has a normative context architecture sufficient to preserve source identity, authority, freshness, provenance, uncertainty, conflict, and project / learner truth separation through runtime execution.

At minimum, it MUST establish:

- Context Item semantics;
- source identity;
- claim-specific source authority;
- project-truth acquisition;
- learner-truth boundary;
- workspace / repository distinction;
- freshness;
- invalidation;
- derived-context boundary;
- summarization rules;
- cache rules;
- relevance / authority separation;
- applicability;
- conflict detection and resolution;
- uncertainty;
- trust / authority separation;
- runtime context assembly;
- Project Port context boundary;
- external-capability context handling;
- tool-result provenance;
- model-output status;
- derivation lineage;
- authority-sensitive context rules;
- fallback semantics;
- implementation decisions intentionally left open.

Acceptance of this document authorizes detailed learner-state persistence and educational-authority implementation design in:

`03-Learner-State-Persistence-and-Educational-Authority.md`

It does not authorize Harness coding before the applicable Stage 5 normative design chain and implementation plan are complete.
