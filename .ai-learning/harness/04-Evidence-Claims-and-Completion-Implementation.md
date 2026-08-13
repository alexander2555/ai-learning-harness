# Evidence, Claims, and Completion Implementation

Status: Accepted
Version: 2.0

Parent Documents

- 00-Harness-Implementation-Architecture.md
- 01-Runtime-Responsibility-and-Instruction-Materialization.md
- 02-Context-Authority-and-Truth-Implementation.md
- 03-Learner-State-Persistence-and-Educational-Authority.md
- 03-Engineering-Quality-and-Verification.md
- 05-Development-Learning-Integration.md
- 06-Instruction-Outputs-Claims-and-Stage-5-Contracts.md

Related Documents

- 02-Assessment.md
- 03-Competency-Evaluation.md
- 04-Engineering-Artifacts-and-Traceability.md
- 06-Superpowers-Integration-and-Engineering-Done.md
- 04-Engineering-and-Educational-Instruction-Boundaries.md
- 05-Superpowers-and-External-Capability-Boundaries.md

---

# 1. Purpose

This document defines how AI Learning Harness physically captures, represents, evaluates, preserves, and exposes evidence and claims.

It also defines how the Harness physically preserves the distinction between:

- execution and claimed execution;
- verification and claimed verification;
- engineering evidence and educational evidence;
- Candidate Educational Evidence and accepted educational evidence;
- generated and accepted artifacts;
- Engineering Done and Educational Done.

It answers:

> How should the Harness ensure that factual, execution, verification, educational, and completion claims never become stronger than the evidence and authority that actually support them?

The governing relationship is:

```text
Evidence
        ↓
Evidence Evaluation
        ↓
Permitted Claim
```

The implementation MUST NOT reverse this relationship.

A desired claim MUST NOT cause the Harness to invent, upgrade, or reinterpret evidence.

---

# 2. Responsibility Boundary

This document owns Stage 5 implementation design for:

- execution evidence;
- verification evidence;
- evidence provenance;
- evidence freshness;
- evidence applicability;
- evidence status;
- claim classification;
- claim support;
- claim strength;
- uncertainty;
- execution-result claims;
- engineering verification claims;
- capability execution claims;
- Candidate Educational Evidence handling;
- accepted educational evidence references;
- generated / accepted artifact status;
- Engineering Done implementation;
- Educational Done implementation;
- completion-state separation;
- stale completion handling;
- evidence-to-claim traceability;
- failure handling related to evidence and claims.

It MUST NOT redefine:

- Stage 2 Assessment;
- Stage 2 Competency Evaluation;
- Stage 2 educational evidence categories;
- Stage 3 engineering verification requirements;
- Stage 3 Engineering Done semantics;
- Stage 2 Educational Done semantics;
- Stage 4 claim authority;
- external-capability ownership.

---

# 3. Core Distinctions

The implementation MUST preserve:

```text
Instruction to Execute
        ≠
Execution
```

```text
Execution
        ≠
Successful Execution
```

```text
Successful Execution
        ≠
Verified Interpretation
```

```text
Capability Applicability
        ≠
Capability Invocation
        ≠
Capability Success
```

```text
Tests Requested
        ≠
Tests Executed
        ≠
Tests Passed
```

```text
Verification Evidence
        ≠
Educational Evidence
```

```text
Candidate Educational Evidence
        ≠
Accepted Educational Evidence
```

```text
Generated Artifact
        ≠
Accepted Artifact
```

```text
Engineering Done
        ≠
Educational Done
```

```text
Evidence Present
        ≠
Claim Authorized
```

The physical representation MUST preserve these distinctions wherever conflation could change behavior, state, or user-facing truth.

---

# 4. Evidence Record

An Evidence Record is a physical representation of an observed fact, result, artifact, or event that may support one or more claims.

An Evidence Record MAY originate from:

- tool execution;
- test execution;
- build execution;
- static analysis;
- manual verification;
- repository observation;
- external capability execution;
- learner interaction;
- assessment;
- review;
- project artifact inspection.

An Evidence Record is not automatically authoritative for every claim.

Its evidential scope MUST remain bounded.

---

# 5. Evidence Record Direction

Where materially relevant, an Evidence Record SHOULD be capable of representing:

```text
evidence identity
evidence type
source
provenance
observation or execution time
project / workspace identity
execution identity
result status
applicability
freshness
uncertainty
supported claim domain
```

Additional fields MAY include:

- tool identity;
- capability identity;
- exit status;
- structured result;
- artifact references;
- reviewer identity or mechanism;
- learner participation;
- assistance attribution;
- assessment reference.

The exact schema remains an implementation decision.

---

# 6. Evidence Provenance

Evidence SHOULD retain sufficient provenance to establish:

- where it came from;
- what operation produced it;
- which project state it applies to;
- whether it is direct or derived;
- whether it was transformed;
- which authority domain may interpret it.

Transformation MUST NOT silently increase evidential strength.

Therefore:

```text
Raw Tool Result
        ↓ summarized as
Derived Evidence Summary
```

MUST NOT imply:

```text
Derived Summary
        >
Raw Result in Authority
```

The source remains the stronger provenance reference where direct evidence matters.

---

# 7. Direct and Derived Evidence

Direct Evidence is produced by direct observation or execution relevant to the claim.

Derived Evidence is created by interpreting, aggregating, summarizing, or transforming other evidence.

Examples:

```text
Direct:
test runner exited successfully
```

```text
Derived:
summary stating all required tests passed
```

Derived Evidence MAY be useful for decision support.

It MUST retain references to supporting direct evidence where claim strength depends on it.

---

# 8. Evidence Scope

Evidence MUST be interpreted only within the scope it directly supports.

For example:

```text
Unit tests passed
```

does not automatically establish:

```text
integration behavior verified
```

or:

```text
security requirements satisfied
```

or:

```text
engineering task complete
```

or:

```text
learner competency mastered
```

The Harness MUST prevent evidence from being generalized beyond its supported domain without additional justification.

---

# 9. Evidence Freshness

Evidence may become stale when the state to which it applies changes.

The implementation SHOULD determine freshness relative to the claim.

For mutable project claims, freshness MAY depend on:

- repository revision;
- workspace content;
- configuration;
- environment;
- dependency state;
- relevant generated artifacts.

The Harness MUST NOT treat historical execution evidence as current merely because it remains stored.

---

# 10. Evidence Applicability

Evidence MAY remain historically valid while no longer being applicable to the current decision.

For example:

```text
Tests passed at revision A
```

remains valid historical evidence.

After material code changes:

```text
Tests passed at revision A
```

MAY no longer support:

```text
Tests currently pass at revision B
```

The implementation MUST preserve this distinction.

---

# 11. Execution Evidence

Execution Evidence establishes that a physical operation actually occurred.

Where materially relevant, it SHOULD capture:

- requested operation;
- invocation identity;
- executing mechanism;
- start / completion state;
- result;
- failure;
- output reference;
- project state identity.

A natural-language model statement that an operation occurred MUST NOT substitute for direct execution evidence when the Harness controls or can observe the execution.

---

# 12. Execution State Model

The Harness SHOULD preserve states equivalent to:

```text
requested
invoked
running
completed
failed
unavailable
result_received
result_verified
```

The exact enum or state-machine implementation is intentionally left open.

The semantic distinctions are mandatory where claims depend on them.

In particular:

```text
invoked
        ≠
completed
```

and:

```text
completed
        ≠
successful
```

---

# 13. Tool Execution Claims

A tool result claim MUST be supported by actual tool execution evidence.

The Harness MUST NOT present:

> The command ran successfully.

when it has only:

- generated a command;
- recommended a command;
- requested execution;
- attempted invocation without result.

Where execution evidence is missing, the claim SHOULD be weakened appropriately.

---

# 14. Test Claims

The Harness MUST distinguish:

```text
Tests Identified
        ≠
Tests Requested
        ≠
Tests Executed
        ≠
Tests Passed
```

A claim that tests passed requires applicable execution evidence showing successful results.

A test result SHOULD remain associated with the project state to which it applies.

A later material project change SHOULD invalidate the result for current-completion purposes where appropriate.

---

# 15. Build Claims

The same rules apply to build execution:

```text
Build Command Known
        ≠
Build Executed
        ≠
Build Succeeded
```

A generated build plan or model prediction MUST NOT be presented as execution evidence.

---

# 16. Static Analysis Claims

Static-analysis claims MUST identify whether analysis:

- was applicable;
- was executed;
- completed;
- produced findings;
- passed applicable thresholds.

The absence of findings from an unexecuted analyzer MUST NOT be presented as successful analysis.

---

# 17. Manual Verification Evidence

Stage 3 MAY require manual verification where automated evidence is insufficient or inappropriate.

The Harness MAY represent Manual Verification Evidence when a human or authorized mechanism records an applicable verification result.

The record SHOULD preserve:

- what was verified;
- by whom or through which authorized interaction;
- against what criteria;
- when;
- against which project state where relevant.

Manual verification MUST NOT be fabricated by the model.

---

# 18. Review Evidence

Engineering Review MAY produce Review Evidence.

Review Evidence SHOULD preserve:

- review scope;
- inspected project state;
- findings;
- reviewer mechanism;
- review result;
- unresolved obligations.

Review Evidence MUST remain distinct from Educational Assessment.

Therefore:

```text
Engineering Review Result
        ≠
Educational Assessment Result
```

---

# 19. Review Completion

A review invocation MUST NOT be treated as completed review.

A completed review MUST NOT automatically imply that all findings are resolved.

The Harness SHOULD distinguish:

```text
Review Requested
        ≠
Review Performed
        ≠
Review Findings Resolved
```

where completion semantics depend on these states.

---

# 20. External Capability Evidence

Invocation of an external capability SHOULD produce evidence sufficient to establish:

- capability selected;
- invocation attempted;
- invocation completed or failed;
- result obtained;
- result status;
- relevant provenance.

The Harness MUST preserve:

```text
Capability Applicable
        ≠
Capability Invoked
        ≠
Capability Completed
        ≠
Capability Result Establishes Claim
```

External-capability output MUST be interpreted according to its verified execution contract.

---

# 21. Capability Success

Capability success is capability-contract-specific.

The Harness MUST NOT assume that:

- process completion;
- returned text;
- absence of transport error;

automatically establishes semantic success.

Where Stage 5 design depends on what successful capability execution means, the verified capability contract MUST define the interpretation.

---

# 22. Evidence Journal

The initial Stage 5 architecture SHOULD maintain an append-oriented Evidence Journal or equivalent execution-history mechanism.

Its purpose is to record materially significant execution and evidence events.

The Evidence Journal MAY record:

- tool invocations;
- capability invocations;
- verification results;
- review results;
- project-state identity;
- evidence derivation;
- claim-support links.

The Evidence Journal is an implementation mechanism.

It MUST NOT become a new source of semantic authority.

---

# 23. Evidence Journal Authority

The Journal records materially relevant evidence observed through the
ALH-governed workflow, including evidence produced by host-native execution,
external capabilities, tools, authorized human verification, or ALH-specific
mechanisms.

Recording evidence does not require the Harness itself to have mediated or
executed the underlying operation.

Therefore:

```text
Harness Did Not Mediate Operation
        ≠
Evidence Is Unusable
```

Evidence validity depends on its source, provenance, freshness, applicable
execution contract, and relationship to the supported claim.

Therefore:

```text
Recorded in Evidence Journal
        ≠
Automatically True in Every Domain
```

For example, the Journal may authoritatively record:

```text
tool invocation returned exit code 0
```

but it does not automatically establish:

```text
Engineering Done
```

or:

```text
Educational Done
```

Those conclusions require their own semantics and authority.

---

# 24. Evidence Journal Mutability

Evidence history SHOULD be append-oriented where practical.

Corrections SHOULD prefer:

```text
Original Record
        +
Correction / Supersession Record
```

over silent historical rewriting when provenance matters.

This does not mandate event sourcing for the entire Harness.

---

# 25. Claim

A Claim is a statement or structured assertion produced by the Harness about:

- project state;
- execution;
- verification;
- learner state;
- educational evidence;
- artifact status;
- completion;
- capability status;
- uncertainty.

Claims MAY be user-facing or internal.

A claim MUST NOT be stronger than its supporting evidence and authority.

---

# 26. Claim Classification

The Harness SHOULD distinguish materially different claim classes such as:

- observation;
- possibility;
- inference;
- recommendation;
- verified fact;
- authoritative decision;
- completion claim;
- uncertainty statement.

The exact representation is an implementation decision.

The important requirement is that runtime processing and presentation MUST NOT erase meaningful differences in claim status.

---

# 27. Claim Support

A materially significant claim SHOULD be linkable to:

- supporting evidence;
- authority;
- applicable project or learner state;
- relevant uncertainty.

Conceptually:

```text
Claim
        ↓ supported by
Evidence Record(s)
        ↓ interpreted under
Authority / Semantic Contract
```

A claim MAY have multiple supporting Evidence Records.

Evidence MAY support multiple bounded claims.

---

# 28. Claim Strength

The Harness SHOULD reduce claim strength when evidence is insufficient.

For example:

```text
Strong:
All applicable tests passed.
```

requires corresponding execution evidence.

Where evidence is absent:

```text
We have not verified the tests yet.
```

or:

```text
The implementation is expected to pass these tests, but execution is unverified.
```

may be appropriate.

The implementation MUST prefer explicit uncertainty over fabricated certainty.

---

# 29. Model-Generated Claims

Model output MAY propose a claim.

The model MUST NOT be treated as final factual authority merely because it generated the text.

Authority-sensitive model claims SHOULD pass through applicable claim-validation or evidence checks before being presented as verified.

This is especially important for:

- execution results;
- current project state;
- learner-state mutation;
- completion status;
- accepted artifact status.

---

# 30. Claim Enforcement

The Harness SHOULD implement a Claim Enforcement boundary for claim classes whose truth depends on observable evidence.

Conceptually:

```text
Proposed Claim
        ↓
Claim Classification
        ↓
Required Evidence / Authority
        ↓
Evidence Check
        ↓
Permitted Claim Strength
```

This MAY be implemented deterministically for structured claim types.

Natural-language generation MAY consume the validated claim state afterward.

---

# 31. Structured Claims

Where a claim affects state, completion, downstream decision-making, or external explainability, the Harness SHOULD prefer a structured internal representation over relying only on generated prose.

For example:

```text
claim_type: test_result
status: verified_pass
evidence_ref: ...
project_state: ...
```

This example is illustrative.

It does not mandate JSON or a fixed schema.

---

# 32. User-Facing Presentation

A user-facing response MAY combine:

- verified facts;
- recommendations;
- uncertainty;
- completion status;
- next obligations.

Presentation MAY simplify internal structures.

It MUST NOT alter their semantic status.

For example, a concise summary MUST NOT turn:

```text
tests unverified
```

into:

```text
tests passed
```

for readability.

---

# 33. Verification Evidence

Verification Evidence supports engineering-confidence claims.

It MAY include:

- tests;
- build results;
- static analysis;
- manual verification;
- integration verification;
- security verification;
- operational verification.

The applicable evidence depends on Stage 3 engineering obligations and rigor.

The Harness MUST NOT create one universal verification checklist independent of Stage 3 applicability.

---

# 34. Verification Sufficiency

Verification sufficiency MUST be evaluated against the applicable engineering obligations.

Therefore:

```text
Some Verification Evidence Exists
        ≠
Sufficient Verification
```

Passing unit tests MAY be insufficient where integration or operational verification is applicable.

The Harness SHOULD preserve outstanding verification obligations.

---

# 35. Verification and Engineering Done

Engineering Done MAY depend on verification evidence.

However:

```text
Tests Passed
        ≠
Engineering Done
```

Engineering Done MAY additionally require applicable:

- implementation completion;
- verification;
- review;
- artifact updates;
- documentation;
- security obligations;
- unresolved finding resolution;
- external-capability obligations.

The exact criteria remain governed by Stage 3.

---

# 36. Engineering Completion Record

The Harness SHOULD represent Engineering Done through an explicit Engineering Completion Record or equivalent structured state.

The record SHOULD be capable of identifying:

- applicable engineering obligations;
- satisfied obligations;
- outstanding obligations;
- verification evidence;
- review evidence;
- project state identity;
- completion decision authority;
- completion status.

This is an implementation direction, not a mandated schema.

---

# 37. Engineering Done Authority

Engineering Done MUST be established under Stage 3 engineering semantics.

A model generating a completion statement MUST NOT by itself establish Engineering Done.

The Harness SHOULD distinguish:

```text
Engineering Completion Proposed
```

from:

```text
Engineering Completion Established
```

where authority-sensitive behavior depends on the distinction.

---

# 38. Engineering Done Freshness

Engineering Done may become stale if the project materially changes after completion was established.

The Harness SHOULD associate Engineering Done with applicable project-state identity.

A material post-completion change SHOULD cause the Harness to reevaluate applicable completion obligations before presenting Engineering Done as current.

---

# 39. Reopening Engineering Done

The implementation MUST permit Engineering Done to become no longer current when new project changes invalidate prior evidence.

This is not historical falsification.

Conceptually:

```text
Engineering Done at State A
        ↓
Material Change
        ↓
Current Engineering Done Unknown / Not Established
```

The historical completion record MAY remain valid for State A.

---

# 40. Educational Evidence Boundary

Engineering evidence MAY produce Candidate Educational Evidence.

It MUST NOT directly become accepted educational evidence.

The accepted path remains:

```text
Engineering Observation
        ↓
Candidate Educational Evidence
        ↓
Educational Assessment
        ↓
Accepted Educational Evidence, if appropriate
```

The Evidence Journal MAY carry candidate observations into the educational subsystem.

It MUST NOT bypass Assessment.

---

# 41. Candidate Educational Evidence Record

Candidate Educational Evidence SHOULD remain distinguishable from ordinary engineering evidence.

It MAY reference:

- underlying engineering observation;
- learner participation;
- assistance attribution;
- relevant competency;
- project state;
- uncertainty.

Candidate status MUST remain explicit until assessment changes it.

---

# 42. Accepted Educational Evidence Reference

Once accepted through educational authority, the Harness MAY link the accepted educational evidence to its original candidate and engineering provenance.

Conceptually:

```text
Engineering Evidence
        ↓
Candidate Educational Evidence
        ↓
Assessment
        ↓
Accepted Educational Evidence
```

The original engineering evidence does not change category merely because educational interpretation later occurs.

---

# 43. Evidence Promotion

Evidence status changes MUST be explicit.

The implementation MUST NOT use silent promotion such as:

```text
candidate = true
```

becoming:

```text
accepted = true
```

merely because a record was consumed by an assessment process.

Acceptance requires an applicable educational decision.

---

# 44. Educational Completion Record

Educational Done SHOULD be represented independently through an Educational Completion Record or equivalent structured state.

The record SHOULD be capable of identifying:

- applicable learning objective;
- accepted educational evidence;
- competency implications;
- Stage 2 completion criteria;
- educational decision authority;
- remaining learning obligations;
- completion status.

The exact schema remains open.

---

# 45. Educational Done Authority

Educational Done MUST be established through accepted educational semantics.

Engineering systems MUST NOT directly set Educational Done.

A model MAY recommend an educational-completion interpretation.

That recommendation MUST NOT bypass the educational decision and mutation path defined in `03-Learner-State-Persistence-and-Educational-Authority.md`.

---

# 46. Educational Decision and Mutation Separation

This document preserves the accepted Stage 5 implementation direction:

```text
Educational Decision
        ≠
Physical Learner-State Mutation
```

A decision that Educational Done has been satisfied MAY be produced by the appropriate educational authority.

Persisting that state change MUST still pass through the learner-state mutation boundary.

Even where both occur in one process:

```text
Decision Production
        ↓
Mutation Authorization
        ↓
Persistence
```

MUST remain logically distinguishable.

Model output MUST NOT directly become authoritative learner-state mutation.

---

# 47. Independent Completion States

The Harness MUST NOT maintain one authoritative state such as:

```text
done = true
```

to represent both engineering and education.

At minimum, it MUST preserve independent semantics equivalent to:

```text
engineering_completion
educational_completion
```

These MAY share one storage mechanism.

They MUST remain independently evaluable.

---

# 48. Combined Presentation

A UI or response MAY present a summarized status such as:

```text
Task complete
```

only when the meaning is clear or expanded state remains available.

Where engineering and educational completion differ, the Harness SHOULD expose that distinction.

For example:

```text
Engineering work is complete.
The learning objective still requires assessment.
```

Presentation convenience MUST NOT collapse authoritative states.

---

# 49. Completion Applicability

Engineering Done and Educational Done MAY each be:

- applicable;
- not applicable;
- not established;
- established;
- stale or requiring reevaluation where relevant.

Not every engineering interaction requires an Educational Done determination.

Not every educational interaction creates a new Engineering Done state.

The implementation SHOULD avoid forcing both concepts into every runtime event.

---

# 50. Generated Artifact

A Generated Artifact is an artifact created or transformed by the Harness, model, coding agent, tool, or external capability.

Generation alone MUST NOT establish acceptance.

Examples MAY include:

- generated code;
- generated plan;
- generated architecture document;
- generated assessment suggestion;
- generated review;
- generated configuration.

The artifact's authority depends on its applicable acceptance path.

---

# 51. Artifact Status

The Harness SHOULD be capable of distinguishing statuses such as:

```text
generated
proposed
reviewed
accepted
rejected
superseded
```

where materially relevant.

The exact vocabulary MAY differ by artifact domain.

Persistence or repository presence MUST NOT silently establish acceptance.

---

# 52. Accepted Artifact

An Accepted Artifact is an artifact whose acceptance status has been established by the authority applicable to that artifact.

Different artifact types MAY have different acceptance mechanisms.

The Harness MUST NOT invent one universal acceptance authority.

For example:

- owner acceptance may establish a normative project document;
- an engineering workflow may establish acceptance of implementation changes;
- educational assessment authority establishes educational evidence, not repository-document acceptance.

---

# 53. Artifact Transformation

Transforming an accepted artifact MAY create a derived artifact.

The derived artifact MUST NOT automatically inherit accepted status.

For example:

```text
Accepted Normative Document
        ↓ summarized
Runtime Summary
```

does not imply:

```text
Runtime Summary = Accepted Normative Document
```

The original source remains authoritative unless governance establishes otherwise.

---

# 54. Acceptance Evidence

Where artifact acceptance materially affects runtime behavior, the Harness SHOULD preserve evidence of acceptance.

Acceptance evidence MAY include:

- explicit owner decision;
- repository merge or governance state where authoritative;
- accepted review outcome;
- another domain-specific acceptance mechanism.

The implementation MUST avoid guessing acceptance from mere artifact existence.

---

# 55. Uncertainty States

Evidence and claim handling MUST support uncertainty such as:

- unknown;
- uncertain;
- conflicting;
- unverified;
- stale;
- unavailable;
- insufficient evidence.

The implementation MUST preserve:

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
Insufficient Evidence
        ≠
Negative Evidence
```

```text
Stale Evidence
        ≠
No Historical Evidence
```

---

# 56. Negative Evidence

The Harness SHOULD distinguish absence of positive evidence from actual negative evidence.

For example:

```text
No test result available
```

does not mean:

```text
Tests failed
```

Likewise:

```text
No accepted competency evidence
```

does not necessarily mean:

```text
Learner lacks competency
```

The relevant upstream educational semantics determine interpretation.

---

# 57. Conflicting Evidence

Evidence may conflict.

The Harness SHOULD retain conflicting records rather than overwrite them prematurely.

Conflict resolution SHOULD consider:

- provenance;
- freshness;
- applicability;
- authority;
- directness;
- project state.

Where conflict cannot be resolved safely, claims MUST preserve uncertainty.

---

# 58. Evidence Aggregation

Multiple Evidence Records MAY be aggregated for a decision.

Aggregation MUST NOT create authority that no input possessed.

Aggregation MUST NOT erase contradictory or uncertain inputs.

A derived aggregate SHOULD retain references to contributing evidence where material.

---

# 59. Claim Provenance

Significant claims SHOULD retain enough provenance for the Harness to explain:

- what evidence supported the claim;
- which authority permitted the interpretation;
- which project or learner state applied;
- what uncertainty remained.

This supports explainability without requiring hidden chain-of-thought.

---

# 60. Claim Lifetimes

Claims MAY have different lifetimes.

Examples:

```text
Historical:
Tests passed at revision A.
```

```text
Current:
Tests pass for the current workspace.
```

The implementation SHOULD distinguish historical claims from current-state claims.

Persistence MUST NOT silently convert historical truth into current truth.

---

# 61. Completion and Evidence Invalidation

When evidence supporting a current completion state becomes invalid or stale, the corresponding current completion claim SHOULD be reevaluated.

Conceptually:

```text
Completion State
        ↓ supported by
Evidence Set
        ↓ invalidated by
Material State Change
        ↓
Completion Requires Reevaluation
```

This SHOULD occur without deleting historical evidence.

---

# 62. Evidence Dependency Direction

The Harness SHOULD be capable of tracing important completion decisions to supporting evidence.

A full general-purpose dependency graph is not required initially.

A proportional implementation MAY use explicit references from:

- completion record;
- accepted evidence;
- assessment outcome;
- review result;

to relevant evidence records.

---

# 63. Completion Obligation Model

The Harness SHOULD represent outstanding obligations separately from evidence already obtained.

Conceptually:

```text
Applicable Obligations
        ↓
Evidence / Result per Obligation
        ↓
Satisfied / Outstanding
        ↓
Completion Decision
```

This prevents a successful result in one area from obscuring an unmet obligation elsewhere.

---

# 64. Applicability and Completion

Stage 3 applicability categories remain upstream semantics:

- Required;
- Conditional;
- Proportional;
- Not Applicable.

The Harness MAY materialize these as implementation data where necessary for engineering-completion evaluation.

It MUST NOT reinterpret them.

An activity marked Not Applicable MUST NOT be treated as failed merely because no evidence exists for it.

---

# 65. Engineering Rigor

Engineering Rigor MAY influence how much evidence is required for Engineering Done.

It MUST NOT influence:

- educational competency authority;
- Automation Level;
- AI autonomy.

The implementation MUST preserve these independent dimensions.

---

# 66. Completion Claims and AI Autonomy

AI autonomy MUST NOT determine completion status.

More autonomous AI execution does not reduce engineering evidence requirements.

Likewise, low AI autonomy does not establish educational mastery.

The Harness MUST preserve:

```text
AI Performed Work
        ≠
Engineering Done
        ≠
Educational Done
```

---

# 67. Learner Participation and Evidence

Learner participation MAY affect educational interpretation.

It does not normally alter engineering truth.

For example:

```text
AI wrote implementation
```

may still allow Engineering Done if engineering obligations are satisfied.

The same fact may reduce or alter educational evidence concerning learner application or independence.

The Harness MUST permit these parallel interpretations without conflating them.

---

# 68. Evidence Capture Near Source

Evidence SHOULD be captured as close as practical to the operation that creates it.

For example:

```text
Tool Adapter
        ↓
Execution Result
        ↓
Evidence Record
```

is preferable to reconstructing execution status later from model-generated prose.

This improves provenance and reduces hallucination risk.

---

# 69. Evidence Capture Failure

If an operation executes but evidence capture fails, the Harness MUST NOT silently claim a verified result unless another reliable source establishes it.

The system SHOULD distinguish:

```text
Execution May Have Occurred
```

from:

```text
Execution Verified
```

Recovery MAY involve querying the external mechanism or re-executing where safe and applicable.

---

# 70. Duplicate Evidence

Repeated observation of the same event SHOULD NOT automatically count as independent supporting evidence.

The implementation SHOULD preserve identity or lineage sufficient to avoid accidental double-counting where aggregation matters.

This is particularly important for educational evidence and completion decisions.

---

# 71. Evidence Independence

Where multiple independent evidence sources materially strengthen a claim, the Harness SHOULD distinguish true independence from duplicated representations of one source.

For example:

```text
test output
+
model summary of same test output
```

does not constitute two independent verification sources.

The summary derives from the test output.

---

# 72. Manual Acceptance and Claims

Where a domain requires explicit human or owner acceptance, model inference MUST NOT replace that acceptance.

The Harness MAY record a proposed status.

It MUST wait for the applicable acceptance signal before establishing authoritative acceptance.

---

# 73. Failure Semantics

Evidence and claim handling SHOULD distinguish:

- operation not applicable;
- operation not attempted;
- invocation failed;
- execution failed;
- execution status unknown;
- evidence unavailable;
- evidence stale;
- evidence conflicting;
- evidence insufficient;
- claim denied;
- claim downgraded;
- completion not established.

These states MUST NOT collapse into a generic boolean where downstream behavior differs.

---

# 74. Claim Downgrade

When evidence no longer supports the requested claim strength, the Harness SHOULD downgrade the claim rather than either invent certainty or suppress useful information.

Conceptually:

```text
Requested:
verified fact
        ↓
Evidence insufficient
        ↓
Allowed:
inference / uncertainty statement
```

Claim downgrade SHOULD remain externally clear where material.

---

# 75. Claim Denial

Some claims SHOULD be denied entirely when a weaker formulation would still be misleading.

For example, an explicit declaration of Engineering Done SHOULD NOT be generated when applicable completion obligations are unknown.

The Harness MAY instead report:

- completion not yet established;
- missing evidence;
- outstanding obligations.

---

# 76. Completion Failure

Failure to establish completion is not always engineering failure.

For example:

```text
Verification Evidence Unavailable
```

may mean:

```text
Engineering Done Cannot Yet Be Established
```

rather than:

```text
Engineering Work Failed
```

The Harness MUST preserve this distinction.

---

# 77. Initial Evidence Architecture Direction

The initial Stage 5 implementation SHOULD use:

```text
Execution / Observation Sources
        ↓
Evidence Capture
        ↓
Structured Evidence Records
        ↓
Evidence Journal
        ↓
Claim / Completion Evaluation
        ↓
Structured Claim State
        ↓
User-Facing or Downstream Output
```

Educational evidence follows an additional authority path:

```text
Engineering / Interaction Evidence
        ↓
Candidate Educational Evidence
        ↓
Assessment
        ↓
Accepted Educational Evidence
        ↓
Educational Decision
        ↓
Learner-State Mutation Boundary
```

These flows MAY execute in one physical process.

They MUST remain semantically distinct.

---

# 78. Initial Claim Architecture Direction

The Harness SHOULD avoid allowing arbitrary generated prose to be the sole internal representation of authority-sensitive claims.

A proportional implementation SHOULD use structured internal claim state for at least:

- execution status;
- verification status;
- capability result status;
- Engineering Done;
- Educational Done;
- accepted artifact status;
- accepted educational evidence status.

Natural-language presentation SHOULD be generated from these states rather than replace them.

---

# 79. Initial Completion Architecture Direction

Engineering and educational completion SHOULD use distinct completion evaluators or logically distinct evaluation paths.

This does not require separate agents, services, or model invocations.

Conceptually:

```text
Engineering Evidence
        ↓
Engineering Completion Evaluation
        ↓
Engineering Completion State
```

and:

```text
Accepted Educational Evidence
        ↓
Educational Completion Evaluation
        ↓
Educational Decision
        ↓
Mutation Boundary
        ↓
Educational Completion State
```

The two paths MAY exchange context.

They MUST NOT share authority.

---

# 80. Implementation Decisions Left Open

This document intentionally does not prescribe:

- exact Evidence Record schema;
- exact Evidence Journal storage mechanism;
- event sourcing;
- exact claim enum;
- exact completion-record schema;
- exact evidence-retention period;
- exact freshness algorithm;
- exact project-state fingerprint;
- exact completion-evaluation implementation;
- exact claim-validation API;
- exact generated / accepted artifact state machine;
- exact UI representation;
- exact retry policy;
- exact evidence aggregation algorithm;
- exact dependency graph representation.

These remain implementation-planning decisions.

They MUST preserve this contract.

---

# 81. Observations

## O-1 — Evidence Journal Is More Useful Than a Generic Activity Log

A generic log records events for diagnostics.

An Evidence Journal records execution and observation facts specifically so claims can be grounded.

The implementation MAY use shared infrastructure, but the semantic purposes differ.

## O-2 — Completion Is Better Represented as an Evaluated State Than a Model Statement

Engineering Done and Educational Done have multiple prerequisites and distinct authority.

Structured completion evaluation therefore reduces the risk that generated text silently becomes authoritative status.

## O-3 — Project-State Identity Is Required for Current Engineering Claims

Without tying mutable engineering evidence to project state, the Harness cannot reliably distinguish historical verification from current verification.

## O-4 — Historical Educational Evidence Has Different Freshness Semantics

A repository change can invalidate current test evidence without invalidating the historical fact that the learner previously demonstrated a behavior.

Engineering and educational evidence therefore MUST NOT share one generic staleness rule.

## O-5 — Decision / Mutation Separation Remains Important for Educational Completion

Educational Done may be decided through educational reasoning, but persistence of that conclusion remains a separate authority-sensitive operation.

---

# 82. Candidate ADRs

No Candidate ADR is introduced by this document.

The following remain implementation decisions within accepted Stage 1–4 architecture:

- structured Evidence Records;
- append-oriented Evidence Journal;
- structured internal claim states;
- claim enforcement;
- separate Engineering and Educational Completion Records;
- completion reevaluation after evidence invalidation;
- explicit generated / accepted artifact status;
- educational decision / mutation separation.

A Candidate ADR would be required if implementation proposed, for example:

- treating passing tests as automatic Engineering Done;
- treating engineering completion as Educational Done;
- automatically accepting Candidate Educational Evidence;
- allowing model statements to establish execution without evidence;
- making generated artifacts authoritative merely through persistence.

---

# 83. Future Evolutions

Possible future improvements include:

- cryptographically signed execution evidence;
- generalized provenance graphs;
- formal evidence dependency graphs;
- confidence-aware claim evaluation;
- automatic evidence invalidation based on code dependency analysis;
- richer evidence dashboards;
- evidence export for external audit;
- cross-environment evidence federation;
- policy-defined claim types;
- formal completion-rule evaluation.

These SHOULD NOT complicate the initial proportional implementation unless a current requirement justifies them.

---

# 84. Completion Criteria

This document is complete when Stage 5 has a normative evidence and claim architecture sufficient to prevent unsupported factual, execution, verification, educational, artifact-acceptance, and completion claims.

At minimum, it MUST establish:

- Evidence Record semantics;
- evidence provenance;
- evidence scope;
- freshness and applicability;
- execution evidence;
- test / build / verification claim boundaries;
- external-capability evidence;
- Evidence Journal direction;
- claim classification;
- claim enforcement;
- structured authority-sensitive claims;
- verification sufficiency;
- Engineering Completion Record;
- Engineering Done freshness and reopening;
- Candidate / accepted educational evidence separation;
- Educational Completion Record;
- educational decision / mutation separation;
- generated / accepted artifact separation;
- uncertainty and conflicting evidence;
- evidence aggregation limits;
- completion obligation representation;
- claim downgrade and denial;
- implementation decisions intentionally left open.

Acceptance of this document authorizes detailed external-capability, tool, and coding-environment integration design in:

`05-External-Capabilities-Tools-and-Environment-Integration.md`

It does not authorize Harness coding before the applicable Stage 5 normative design chain and implementation plan are complete.
