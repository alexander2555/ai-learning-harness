# Instruction Outputs, Claims, and Stage 5 Contracts

Version: 0.1 Draft

Parent Documents

- 00-Prompt-Architecture.md
- 01-Instruction-Responsibility-Model.md
- 02-Instruction-Authority-and-Composition.md
- 03-Context-and-Truth-Contracts.md
- 04-Engineering-and-Educational-Instruction-Boundaries.md
- 05-Superpowers-and-External-Capability-Boundaries.md

Related Documents

- 03-Engineering-Quality-and-Verification.md
- 04-Engineering-Artifacts-and-Traceability.md
- 05-Development-Learning-Integration.md
- 06-Superpowers-Integration-and-Engineering-Done.md
- 02-Assessment.md
- 03-Competency-Evaluation.md
- 07-Definition-of-Done.md
- ADR-001-Separation-of-Application-and-Learning-Infrastructure.md

---

# 1. Purpose

This document defines the semantic contracts governing outputs produced by ALH Instruction Responsibilities.

It specifies:

- what an Instruction Output represents;
- how output authority is bounded;
- how factual claims are supported;
- how verification and execution claims are handled;
- how engineering and educational claims remain distinct;
- how completion claims are constrained;
- how uncertainty and missing evidence are represented;
- how derived and advisory outputs are identified;
- how Candidate Educational Evidence is surfaced;
- how explainability is provided without requiring hidden reasoning;
- how output composition preserves authority;
- what Stage 5 MUST implement from the accepted Stage 4 Prompt Architecture.

This document completes the Stage 4 semantic contract.

It does not define:

- concrete prompt text;
- prompt files;
- response schemas;
- serialization formats;
- runtime routing;
- model selection;
- agent topology;
- persistence;
- databases;
- context retrieval implementation;
- orchestration;
- physical capability invocation;
- UI presentation;
- Harness implementation technology.

Those concerns belong downstream.

---

# 2. Core Principle

An Instruction Responsibility MUST only produce claims supported by:

- its accepted authority;
- applicable authoritative context;
- sufficient current evidence;
- the semantic status of the information available.

The governing relationship is:

```text id="oc1"
Instruction Responsibility
        ↓
Authority Contract
        +
Context Contract
        +
Applicable Evidence
        ↓
Instruction Output
        ↓
Bounded Claim
```

Therefore:

```text id="oc2"
Ability to Generate a Statement
        ≠
Authority to Assert It
```

and:

```text id="oc3"
Plausibility
        ≠
Evidence
```

---

# 3. Instruction Output

An **Instruction Output** is the semantically meaningful result produced by an Instruction Responsibility.

An Instruction Output MAY contain:

- factual statements;
- recommendations;
- decisions;
- engineering artifacts;
- educational guidance;
- review findings;
- assessment results;
- Candidate Educational Evidence;
- uncertainty;
- requests for missing information;
- completion claims;
- explanations of decisions.

An output MAY contain multiple semantic components.

Those components MUST retain their respective authority and evidence status.

---

# 4. Output Authority

An Instruction Output inherits no authority beyond the Instruction Responsibility that produced the relevant semantic component.

Therefore:

```text id="oc4"
Output Generation
        ≠
Authority Creation
```

and:

```text id="oc5"
More Detailed Output
        ≠
More Authority
```

A composed or formatted output MUST NOT make a responsibility appear authoritative outside its accepted domain.

Output authority remains governed by `02-Instruction-Authority-and-Composition.md`.

---

# 5. Claim

A **Claim** is an output statement that represents something as true, established, decided, completed, verified, or otherwise semantically supported.

Claims MAY concern:

- project state;
- learner state;
- engineering correctness;
- verification;
- execution;
- review;
- external capabilities;
- educational evidence;
- competency;
- completion.

A claim MUST be interpreted according to its domain and semantic strength.

Stage 4 MUST NOT treat all generated statements as equivalent claims.

---

# 6. Claim Strength

Different claims require different evidence.

For example:

```text id="oc6"
"This may solve the defect."
```

is weaker than:

```text id="oc7"
"This solves the defect."
```

which is weaker in evidentiary commitment than:

```text id="oc8"
"This fix has been verified to solve the defect."
```

Prompt Architecture MUST preserve the distinction between:

- possibility;
- inference;
- recommendation;
- observed fact;
- verified fact;
- authoritative decision;
- completion claim.

Stronger claims MUST NOT be made from evidence sufficient only for weaker claims.

---

# 7. Evidence Before Claim

The normative Stage 4 principle is:

```text id="oc9"
Evidence
        ↓
Claim
```

not:

```text id="oc10"
Desired Claim
        ↓
Assumed Evidence
```

An Instruction Responsibility MUST NOT assert a material factual or completion outcome without sufficient applicable evidence.

Where sufficient evidence is unavailable, the output MUST instead:

- expose uncertainty;
- qualify the statement;
- request or obtain evidence where authorized;
- defer the claim;
- state what remains unknown.

---

# 8. Evidence Sufficiency

Evidence sufficiency depends on the claim being made.

Relevant dimensions MAY include:

- authority;
- provenance;
- applicability;
- freshness;
- scope;
- verification method;
- known limitations.

There is no universal quantity of evidence sufficient for every claim.

The correct question is:

> What evidence is sufficient to support this specific claim within this responsibility's authority?

Evidence semantics remain governed by applicable Stage 2, Stage 3, and Stage 4 contracts.

---

# 9. Current Evidence

Claims about current state require sufficiently current evidence.

Therefore:

```text id="oc11"
Previously Verified
        ≠
Currently Verified
```

where intervening change may affect the claim.

Examples include:

- tests run before implementation changes;
- review performed before subsequent changes;
- deployment evidence from an earlier release;
- learner state preceding later assessment;
- external capability behavior verified against an outdated version.

Freshness semantics are defined in `03-Context-and-Truth-Contracts.md`.

---

# 10. Scope of Evidence

Evidence supports only the scope it actually establishes.

Therefore:

```text id="oc12"
Evidence for A
        ≠
Evidence for A + B + C
```

Examples:

- one passing test does not prove all applicable tests pass;
- successful build does not prove deployment success;
- review of one component does not establish whole-system correctness;
- one learner response does not automatically establish consistency;
- capability success does not prove unrelated engineering obligations are complete.

Instruction Outputs MUST NOT silently generalize evidence beyond its scope.

---

# 11. Factual Claims

A factual claim MUST be grounded in context whose semantic status is sufficient for that claim.

A responsibility MUST distinguish where material:

- verified fact;
- observed fact;
- inference;
- assumption;
- unresolved possibility.

It MUST NOT present an inference as direct observation or a hypothesis as verified fact.

Therefore:

```text id="oc13"
Inference
        ≠
Observation
        ≠
Verification
```

---

# 12. Project-State Claims

Claims about project state MUST use applicable project truth.

Examples MAY include claims about:

- requirements;
- implementation;
- configuration;
- tests;
- review status;
- deployment state.

The authoritative source depends on the semantic question.

An accepted requirement MAY establish intended behavior.

It does not establish that the behavior is implemented.

Current source code MAY contribute authority for implementation state.

It does not establish deployment success.

Project-state claims MUST preserve these distinctions.

---

# 13. Learner-State Claims

Claims about authoritative learner state MUST be produced only within accepted educational authority.

Engineering observations MUST NOT be represented directly as authoritative:

- competency state;
- Learning Debt;
- Automation Level;
- assessment state;
- educational progression.

Therefore:

```text id="oc14"
Engineering Observation
        ≠
Learner-State Claim
```

and:

```text id="oc15"
Candidate Educational Evidence
        ≠
Accepted Learner-State Update
```

---

# 14. Execution Claims

An **Execution Claim** states that an action actually occurred.

Examples include:

- a test was run;
- code was changed;
- a review was performed;
- a capability was invoked;
- a branch operation occurred;
- deployment was executed.

Execution claims require evidence of actual execution.

Therefore:

```text id="oc16"
Instruction to Execute
        ≠
Execution
```

and:

```text id="oc17"
Plan to Execute
        ≠
Execution
```

and:

```text id="oc18"
Capability Description
        ≠
Capability Invocation
```

An Instruction Responsibility MUST NOT report execution merely because it recommended or requested the action.

---

# 15. Execution Result Claims

A claim about an execution result requires evidence of both:

- applicable execution;
- the resulting outcome.

For example:

```text id="oc19"
Test Command Issued
        ≠
Tests Passed
```

```text id="oc20"
Deployment Started
        ≠
Deployment Succeeded
```

```text id="oc21"
Review Requested
        ≠
Review Completed
```

```text id="oc22"
Capability Invoked
        ≠
Capability Succeeded
```

Outputs MUST preserve the difference between action initiation and established result.

---

# 16. Verification Claims

A **Verification Claim** represents an engineering property as having been checked through an applicable verification mechanism.

Verification claims MUST identify or preserve enough semantic context to establish:

- what was verified;
- what project state was verified;
- what mechanism supplied the evidence where material;
- whether the evidence remains applicable;
- material limitations.

A verification claim MUST NOT exceed the verification evidence.

---

# 17. Passing Tests

A passing test result establishes only what the applicable test evidence supports.

Therefore:

```text id="oc23"
Tests Passed
        ≠
All Applicable Verification Complete
```

and:

```text id="oc24"
Tests Passed
        ≠
Engineering Done
```

and:

```text id="oc25"
Tests Passed
        ≠
Competency Mastery
```

Passing tests MAY contribute to engineering confidence.

Their educational interpretation requires separate educational authority.

---

# 18. Review Claims

Review output MAY establish:

- findings;
- unresolved concerns;
- approval or rejection where the review responsibility has such authority;
- recommendations.

Review claims MUST remain bounded by:

- review scope;
- evidence available;
- applicable Semantic Independence requirements.

A review claim MUST NOT automatically become:

- a verification claim outside review scope;
- an educational assessment result;
- a learner-state update.

---

# 19. External Capability Claims

Claims about external capability behavior MUST follow `05-Superpowers-and-External-Capability-Boundaries.md`.

Instruction Outputs MUST distinguish:

```text id="oc26"
Capability Is Applicable
```

from:

```text id="oc27"
Capability Was Invoked
```

from:

```text id="oc28"
Capability Completed
```

from:

```text id="oc29"
Capability Result Establishes X
```

Each statement requires different evidence.

Capability applicability or mapping MUST NOT be represented as physical execution.

---

# 20. Engineering Claims

Engineering claims concern engineering truth or engineering decisions.

Examples MAY include:

- requirement satisfied;
- defect exists;
- implementation matches design;
- verification passed;
- review concern remains;
- engineering task is complete.

Engineering claims MUST be produced within applicable engineering authority.

Educational authority MUST NOT manufacture engineering claims unsupported by engineering evidence.

---

# 21. Educational Claims

Educational claims concern accepted Stage 2 semantics.

Examples MAY include:

- an observation is relevant to a competency;
- evidence supports a particular assessment conclusion;
- competency progression is justified;
- Learning Debt applies;
- Automation Level should change;
- Educational Done has been reached.

Such claims MUST be produced only within applicable educational authority.

Engineering success alone MUST NOT establish them.

---

# 22. Candidate Educational Evidence Output

An Instruction Output MAY identify an engineering observation as Candidate Educational Evidence.

Such output SHOULD preserve, where materially relevant:

- the observation;
- the engineering context;
- learner participation;
- assistance attribution;
- relevant learning objective or competency context;
- uncertainty.

It MUST NOT represent candidate evidence as accepted educational evidence.

Therefore:

```text id="oc30"
Candidate Evidence Output
        ≠
Assessment Result
```

---

# 23. Assistance Attribution in Outputs

Where learner independence materially affects educational interpretation, outputs SHOULD preserve relevant assistance attribution.

For example:

```text id="oc31"
Learner solved independently
```

is semantically different from:

```text id="oc32"
Learner solved after a hint
```

and:

```text id="oc33"
Learner corrected AI-generated implementation
```

Assistance attribution MUST describe the interaction accurately.

It MUST NOT itself determine competency.

---

# 24. Derived Outputs

An output MAY be derived from authoritative context.

Examples include:

- summary;
- synthesis;
- risk assessment;
- recommendation;
- consolidated status.

Derived output does not automatically inherit full source authority.

Therefore:

```text id="oc34"
Authoritative Context
        ↓
Derived Output
```

does not imply:

```text id="oc35"
Derived Output
        =
Authoritative Source
```

Where later decisions depend on omitted or transformed detail, authoritative source context SHOULD remain consultable.

---

# 25. Advisory Outputs

An **Advisory Output** provides guidance without exercising authoritative decision power.

Examples MAY include:

- recommendation;
- design option;
- possible explanation;
- suggested next action.

Advisory output MUST NOT be formatted or phrased in a way that falsely implies authoritative status where that distinction is material.

A recommendation MAY be strong.

Strength of recommendation does not create authority.

---

# 26. Authoritative Decisions

Some Instruction Responsibilities MAY produce authoritative decisions within explicitly assigned domains.

Examples MAY include, where accepted upstream semantics assign such authority:

- assessment interpretation;
- competency progression;
- engineering review disposition;
- completion determination.

An authoritative decision MUST:

- remain within the responsibility's domain;
- use applicable authoritative context;
- satisfy required evidence;
- preserve material uncertainty;
- not expand authority through output composition.

Stage 4 MUST NOT create authoritative decisions that do not have accepted upstream ownership.

---

# 27. Output Semantic Status

Where ambiguity could materially affect downstream interpretation, an output SHOULD make its semantic status distinguishable.

Relevant status MAY include:

- verified fact;
- observed fact;
- inference;
- advisory recommendation;
- authoritative decision;
- Candidate Educational Evidence;
- unresolved uncertainty.

This is a semantic requirement.

Stage 4 does not require a particular label, schema, enum, field, markup format, or serialization.

Stage 5 MAY choose how the distinction is represented physically.

---

# 28. Uncertainty

Uncertainty MUST be exposed when it materially limits a claim.

An Instruction Responsibility SHOULD distinguish between:

- unknown;
- uncertain;
- conflicting;
- unverified;
- stale;
- unavailable.

It MUST NOT collapse these conditions into false certainty.

Therefore:

```text id="oc36"
Unknown
        ≠
False
```

and:

```text id="oc37"
Unverified
        ≠
Failed
```

and:

```text id="oc38"
Conflicting
        ≠
Resolved
```

---

# 29. Missing Evidence

Where evidence required for a material claim is missing, the Instruction Responsibility MUST NOT make the claim as established fact.

It MAY instead state:

- what is known;
- what is missing;
- what would establish the claim;
- what can safely proceed without the missing evidence.

Missing evidence MUST NOT be silently replaced by:

- expectation;
- prior success;
- plausibility;
- user pressure;
- AI confidence.

---

# 30. Conflicting Evidence

Where applicable evidence materially conflicts, output MUST NOT silently choose a convenient result.

The responsibility MUST follow the context-conflict semantics of `03-Context-and-Truth-Contracts.md`.

Where the conflict cannot be resolved within available authority and context, the output MUST expose it.

A completion claim MUST NOT conceal unresolved material conflict relevant to completion.

---

# 31. Claim Correction

An earlier output MAY later become invalid because:

- new evidence appears;
- project state changes;
- learner state changes;
- a source is corrected;
- an external capability changes;
- an earlier inference is disproven.

Instruction Responsibilities MUST permit correction of prior claims.

A prior AI statement MUST NOT be preserved merely for conversational consistency when authoritative current evidence contradicts it.

Therefore:

```text id="oc39"
Prior AI Statement
        ≠
Persistent Truth
```

---

# 32. Engineering Done Claim

An **Engineering Done Claim** states that the applicable engineering task has satisfied Stage 3 completion semantics.

It MUST require sufficient current evidence that applicable obligations have been satisfied.

Conceptually:

```text id="oc40"
Applicable Engineering Obligations
        +
Sufficient Current Evidence
        +
Applicable Engineering Authority
        ↓
Engineering Done Claim
```

Engineering Done MUST NOT be inferred solely from:

- implementation existence;
- passing tests;
- successful capability execution;
- absence of known defects;
- learner understanding;
- Educational Done.

---

# 33. Educational Done Claim

An **Educational Done Claim** states that the applicable learning objective satisfies accepted Stage 2 completion semantics.

It MUST be produced through applicable educational authority.

Educational Done MUST NOT be inferred solely from:

- Engineering Done;
- successful implementation;
- passing tests;
- AI-generated solution quality;
- task completion.

Therefore:

```text id="oc41"
Engineering Done Claim
        ≠
Educational Done Claim
```

---

# 34. Independent Completion Claims

Engineering Done and Educational Done MAY differ for the same development activity.

Valid states MAY include:

```text id="oc42"
Engineering Done
+
Educational Done
```

```text id="oc43"
Engineering Done
+
Educational Work Remaining
```

```text id="oc44"
Engineering Work Remaining
+
Educational Done
```

Stage 4 MUST NOT require a single combined completion flag.

Stage 5 MUST preserve independent completion semantics.

---

# 35. Partial Completion

An output MAY report partial engineering or educational progress.

Partial progress MUST NOT be represented as completion.

For example:

```text id="oc45"
Implementation Complete
        ≠
Engineering Done
```

where verification or review remains applicable.

Likewise:

```text id="oc46"
One Competency Observation Obtained
        ≠
Educational Done
```

Outputs SHOULD identify material remaining obligations where they affect interpretation of status.

---

# 36. Conditional Claims

Where a conclusion depends on an unresolved condition, output MAY express a conditional claim.

For example:

```text id="oc47"
If verification X passes against the current implementation,
the remaining known engineering completion condition would be satisfied.
```

A conditional claim MUST NOT be shortened downstream into:

```text id="oc48"
Engineering Done.
```

Stage 5 MUST preserve material conditions when outputs are transformed or composed.

---

# 37. Negative Claims

Negative claims also require appropriate evidence.

Absence of observed evidence does not always establish absence of the condition.

Therefore:

```text id="oc49"
Not Observed
        ≠
Does Not Exist
```

Examples include:

- no defect was noticed;
- no security issue was reported;
- no Learning Debt was identified.

Instruction Responsibilities SHOULD avoid universal negative claims where available evidence cannot support them.

---

# 38. Recommendations vs Decisions

A recommendation and an authoritative decision MUST remain distinguishable where authority matters.

Therefore:

```text id="oc50"
Recommended Action
        ≠
Authorized Decision
```

A review recommendation does not automatically modify learner state.

An educational recommendation does not automatically alter project requirements.

A design suggestion does not automatically become accepted architecture.

Stage 5 MUST preserve this distinction in representation.

---

# 39. Proposed vs Accepted Artifacts

Instruction Outputs MAY create proposed artifacts such as:

- requirements;
- plans;
- architecture decisions;
- design descriptions;
- documentation changes.

Generation does not establish acceptance.

Therefore:

```text id="oc51"
Generated Artifact
        ≠
Accepted Artifact
```

Acceptance requires an applicable authorized process.

Once accepted, an artifact's semantic status MAY change according to that process.

The authority comes from the accepted process, not from AI generation.

---

# 40. Output Composition

Multiple semantic outputs MAY be presented together.

For example:

```text id="oc52"
Engineering Finding:
    Requirement X is not satisfied.

Educational Observation:
    Learner independently identified the mismatch.

Candidate Educational Evidence:
    Reasoning / Application.

Recommendation:
    Correct implementation before engineering completion.
```

Combined presentation MUST NOT merge semantic authority.

Therefore:

```text id="oc53"
Output Composition
        ≠
Authority Merger
```

---

# 41. Output Transformation

Stage 5 MAY:

- summarize;
- format;
- serialize;
- display;
- route;
- persist;
- aggregate;

Instruction Outputs.

Such transformation MUST preserve material semantic distinctions.

It MUST NOT silently convert:

- advisory into authoritative;
- candidate evidence into accepted evidence;
- inference into verified fact;
- conditional into unconditional;
- stale evidence into current evidence;
- partial completion into completion;
- capability applicability into capability execution.

Therefore:

```text id="oc54"
Output Transformation
        ≠
Semantic Promotion
```

---

# 42. Explainability

Significant outputs SHOULD provide sufficient explanation for the user or downstream responsibility to understand:

- what conclusion was reached;
- what authoritative context materially supported it;
- what constraints applied;
- what evidence supported the claim;
- what uncertainty remains;
- what material next obligation remains, where applicable.

Explainability MUST be proportional to the significance of the decision.

---

# 43. No Hidden Chain-of-Thought Requirement

Explainability does not require disclosure, storage, or transport of hidden chain-of-thought.

Stage 4 requires concise, inspectable rationale.

Conceptually:

```text id="oc55"
Decision
        +
Relevant Evidence
        +
Applicable Constraints
        +
Material Uncertainty
        =
Sufficient Explainability
```

Prompt Architecture MUST NOT require private reasoning traces as an authoritative artifact.

---

# 44. Evidence References

Where practical and materially useful, outputs SHOULD identify the evidence or authoritative context supporting significant claims.

This MAY include semantic references to:

- requirement;
- source artifact;
- verification result;
- review finding;
- learner observation;
- accepted educational evidence;
- capability result.

Stage 4 does not prescribe reference identifiers, hyperlinks, citation formats, or provenance schemas.

Those belong to Stage 5.

---

# 45. Output Minimization

Instruction Outputs SHOULD contain enough information to satisfy their responsibility without unnecessary disclosure or duplication.

Output minimization supports:

- clearer authority;
- reduced context leakage;
- reduced semantic ambiguity;
- security;
- proportional documentation.

Output minimization MUST NOT remove material:

- uncertainty;
- evidence limitations;
- authority boundaries;
- completion conditions.

---

# 46. Sensitive Outputs

Instruction Responsibilities MUST NOT expose sensitive learner or project information merely because it is available in context.

Outputs SHOULD include sensitive context only where materially relevant to the responsibility and permitted by accepted boundaries.

Concrete redaction, access control, and presentation mechanisms belong to Stage 5.

---

# 47. Prompt-Level Security

Contextual content MUST NOT acquire instruction authority merely by influencing an output.

Instruction Outputs MUST NOT propagate untrusted imperative content as authoritative ALH instruction without appropriate semantic authority.

This preserves the trust boundary defined in `03-Context-and-Truth-Contracts.md`.

Concrete prompt-injection enforcement belongs to Stage 5.

---

# 48. Failure Outputs

An Instruction Responsibility MAY be unable to satisfy its intended result because of:

- missing context;
- insufficient evidence;
- unresolved conflict;
- capability failure;
- lack of authority;
- security constraint.

A failure output SHOULD identify:

- what could not be established or completed;
- why, at an appropriate level;
- what remains valid;
- what next action may resolve the limitation.

Failure MUST NOT be represented as success.

---

# 49. No Fabricated Success

Instruction Responsibilities MUST NOT fabricate:

- implementation success;
- test success;
- review success;
- deployment success;
- capability execution;
- capability success;
- Engineering Done;
- Educational Done;
- competency mastery;
- learner-state changes.

The invariant is:

```text id="oc56"
No Evidence
        ≠
Success
```

---

# 50. Output Contract

Every material Instruction Responsibility SHOULD have an Output Contract.

An Output Contract SHOULD identify, where applicable:

- expected semantic output;
- authority of the output;
- permitted claim types;
- required evidence;
- prohibited claims;
- uncertainty behavior;
- Candidate Educational Evidence behavior;
- completion authority;
- explainability requirements;
- downstream semantic obligations.

The contract is semantic.

It MUST NOT prescribe a concrete response schema unless such structure is independently required at the semantic level.

---

# 51. Output Contract Example — Engineering Review

```text id="oc57"
Instruction Responsibility:
    Engineering Review

Output:
    Engineering findings and review disposition.

Authority:
    Engineering review domain only.

Required Evidence:
    Applicable requirements,
    relevant implementation,
    applicable verification context.

Permitted Claims:
    Review findings,
    unresolved concerns,
    review disposition within authority.

Prohibited Claims:
    Competency mastery,
    learner-state update,
    Educational Done.

Candidate Educational Evidence:
    MAY identify relevant learner observations,
    but MUST NOT assess them as accepted evidence.

Uncertainty:
    MUST expose missing material review context.

Completion:
    Review completion
    ≠
Engineering Done.

Physical Format:
    Not defined by Stage 4.
```

---

# 52. Output Contract Example — Educational Assessment

```text id="oc58"
Instruction Responsibility:
    Educational Assessment

Output:
    Educational evidence interpretation.

Authority:
    Accepted Stage 2 assessment domain.

Relevant Inputs:
    Accepted educational evidence,
    Candidate Educational Evidence,
    assistance context,
    learner context.

Permitted Claims:
    Assessment conclusions within authority.

Prohibited Claims:
    Engineering verification success,
    deployment success,
    Engineering Done.

Engineering Truth:
    MUST NOT be altered by assessment.

Physical Format:
    Not defined by Stage 4.
```

---

# 53. Output Contract Example — Capability Mapping

```text id="oc59"
Instruction Responsibility:
    Engineering instruction responsibility
    with applicable external capability mapping.

Output:
    Capability applicability conclusion
    and bounded engineering guidance.

Permitted Claim:
    Verified capability X is applicable
    to obligation Y under current known context.

Not Established:
    Capability was invoked.
    Capability succeeded.
    Engineering Done.

Invocation:
    Stage 5 / execution environment concern.

Capability Result:
    If later available,
    interpret according to provenance,
    scope, freshness, and authority.
```

---

# 54. Stage 4 Contract Stack

The Stage 4 Prompt Architecture contract stack is:

```text id="oc60"
00 — Prompt Architecture
        ↓
Stage 4 purpose,
boundaries,
global invariants

01 — Instruction Responsibility Model
        ↓
Responsibility identity,
separation,
composition eligibility

02 — Instruction Authority and Composition
        ↓
Authority,
precedence,
semantic independence,
composition

03 — Context and Truth Contracts
        ↓
Context requirements,
truth,
provenance,
freshness,
conflict

04 — Engineering and Educational
     Instruction Boundaries
        ↓
Development-learning interaction,
participation,
evidence,
completion separation

05 — Superpowers and External
     Capability Boundaries
        ↓
Capability mapping,
external ownership,
topology boundary

06 — Instruction Outputs, Claims,
     and Stage 5 Contracts
        ↓
Outputs,
claims,
uncertainty,
explainability,
implementation handoff
```

This stack is normative at the semantic responsibility level.

It does not define physical execution topology.

---

# 55. Cross-Contract Invariants

Stage 5 MUST preserve the following Stage 4 invariants.

## 55.1 Responsibility

```text id="oc61"
Instruction Responsibility
        ≠
Physical Agent
        ≠
Prompt File
        ≠
Model Invocation
```

## 55.2 Authority

```text id="oc62"
Capability
        ≠
Authority
```

```text id="oc63"
Context Access
        ≠
Authority
```

```text id="oc64"
Composition
        ≠
Authority Transfer
```

## 55.3 Context

```text id="oc65"
Available Context
        ≠
Relevant Context
        ≠
Authoritative Context
```

```text id="oc66"
Project Truth
        ≠
Learner Truth
```

## 55.4 Development / Learning

```text id="oc67"
Engineering Responsibility
        ≠
Educational Responsibility
```

```text id="oc68"
Verification Evidence
        ≠
Educational Evidence
```

```text id="oc69"
Candidate Educational Evidence
        ≠
Accepted Educational Evidence
```

## 55.5 Control Dimensions

```text id="oc70"
Automation Level
        ≠
Engineering Rigor
        ≠
AI Autonomy
```

## 55.6 External Capabilities

```text id="oc71"
Capability Mapping
        ≠
Methodology Inheritance
```

```text id="oc72"
External Execution Topology
        ≠
ALH Instruction Topology
```

## 55.7 Completion

```text id="oc73"
Engineering Done
        ≠
Educational Done
```

## 55.8 Claims

```text id="oc74"
Plausibility
        ≠
Evidence
```

```text id="oc75"
Capability Applicability
        ≠
Capability Execution
```

```text id="oc76"
Generated Artifact
        ≠
Accepted Artifact
```

These invariants MUST survive physical implementation choices.

---

# 56. Stage 5 Implementation Boundary

Stage 5 is responsible for materializing the accepted ALH contracts into a working Harness.

Stage 5 MAY determine:

- physical prompt organization;
- concrete prompt text;
- runtime context assembly;
- context retrieval;
- persistence;
- memory representation;
- model selection;
- physical agent topology;
- number of model invocations;
- orchestration;
- external capability invocation;
- tool integration;
- response schemas;
- serialization;
- provenance representation;
- evidence capture;
- security enforcement;
- output presentation.

Stage 5 MUST treat these as implementation choices constrained by Stage 1–4 semantics.

It MUST NOT infer that Stage 4 semantic decomposition requires equivalent physical decomposition.

---

# 57. Stage 5 Required Semantic Preservation

Whatever physical architecture Stage 5 chooses, it MUST preserve:

1. Instruction Responsibility identity.
2. Authority-domain boundaries.
3. Instruction precedence semantics.
4. Semantic Independence where required.
5. Context authority.
6. Context provenance where materially required.
7. Context freshness and applicability.
8. Project / learner separation.
9. ADR-001.
10. Engineering / educational authority separation.
11. Learner participation constraints.
12. Assistance attribution where educationally material.
13. Automation Level semantics.
14. Engineering Rigor semantics.
15. Candidate Educational Evidence status.
16. Assessment / review separation.
17. Decision Engine boundaries.
18. Engineering Done / Educational Done separation.
19. Superpowers / ALH ownership boundary.
20. Capability mapping rather than methodology inheritance.
21. External-topology neutrality of Stage 4 responsibilities.
22. Evidence Before Claim.
23. Claim strength and evidence sufficiency.
24. Uncertainty.
25. Output semantic status.
26. Explainability without hidden chain-of-thought requirements.

Physical architecture is conformant only if these semantics remain enforceable.

---

# 58. Stage 5 Design Freedom

Stage 4 intentionally leaves Stage 5 freedom to choose an implementation that is:

- proportional;
- maintainable;
- secure;
- compatible with the target AI environment;
- capable of preserving accepted contracts.

For example, Stage 5 MAY discover that:

- several Instruction Responsibilities can safely share one physical prompt;
- one Instruction Responsibility requires multiple physical execution steps;
- Semantic Independence requires additional runtime isolation;
- some context contracts require specialized retrieval;
- some output contracts benefit from structured representation.

None of these outcomes are predetermined by Stage 4.

---

# 59. Stage 5 Conformance Questions

Before an implementation choice is accepted, Stage 5 SHOULD ask:

1. Which Stage 4 Instruction Responsibilities does this mechanism materialize?
2. Does it preserve their distinct authority?
3. Does physical composition accidentally merge responsibilities?
4. Does physical separation accidentally create new authority?
5. Is required Semantic Independence preserved?
6. Is authoritative context distinguishable from merely relevant context?
7. Are provenance and freshness preserved where material?
8. Are project and learner state kept separate?
9. Can educational assistance vary without changing engineering quality?
10. Are Automation Level and Engineering Rigor independent?
11. Is AI autonomy treated as implementation rather than educational state?
12. Can Candidate Educational Evidence remain candidate until assessment?
13. Can Engineering Review remain distinct from Educational Assessment?
14. Can Engineering Done remain distinct from Educational Done?
15. Are external capability contracts respected without importing their topology?
16. Can capability applicability remain distinct from invocation?
17. Can execution and verification claims be supported by actual evidence?
18. Can uncertainty survive context and output transformations?
19. Can generated artifacts remain proposed until authorized acceptance?
20. Can significant decisions provide concise evidence-based explainability?

A design that cannot preserve these properties is not conformant with Stage 4.

---

# 60. Stage 5 Must Not Reverse-Engineer Stage 4 into Topology

Stage 5 MUST NOT mechanically convert:

```text id="oc77"
Instruction Responsibility
        →
Prompt File
```

or:

```text id="oc78"
Instruction Responsibility
        →
Physical Agent
```

or:

```text id="oc79"
Authority Domain
        →
Runtime Process
```

or:

```text id="oc80"
Development Lifecycle Activity
        →
Prompt Router State
```

or:

```text id="oc81"
Educational State
        →
Physical Agent
```

Such mappings MAY emerge only where independently justified by implementation needs while preserving Stage 4 semantics.

---

# 61. Stage 5 Must Not Use Implementation to Redefine Semantics

Implementation convenience MUST NOT silently change accepted contracts.

Examples include:

- storing learner state in the project because it is easier;
- merging Engineering Done and Educational Done into one flag;
- treating one physical agent as one authority domain;
- using Automation Level as a tool-permission setting;
- treating generated summaries as authoritative because retrieval is expensive;
- treating capability invocation as capability success;
- skipping provenance because the runtime schema does not support it.

If implementation cannot preserve an accepted semantic boundary, the issue MUST be surfaced.

It MUST NOT be hidden through implementation.

---

# 62. Architecture Feedback from Stage 5

Stage 5 MAY discover that a Stage 4 contract cannot be implemented safely or proportionally.

Such a finding does not authorize Stage 5 to change Stage 4 silently.

The finding SHOULD be classified as:

## Observation

An implementation finding that does not change accepted architecture.

## Candidate ADR

A proposed change to an accepted architectural responsibility or boundary.

## Future Evolution

A useful improvement intentionally deferred.

Where a Stage 4 semantic contract itself requires revision, the relevant Stage 4 document MUST be reconsidered explicitly.

---

# 63. Stage 4 Non-Implementation Boundary

The existence of the Stage 5 contract in this document MUST NOT be interpreted as Stage 5 implementation design.

Stage 4 specifies:

```text id="oc82"
What semantics must survive
```

Stage 5 determines:

```text id="oc83"
How those semantics are physically realized
```

Therefore:

```text id="oc84"
Stage 4 Contract
        ≠
Stage 5 Architecture
```

---

# 64. Stage 4 Acceptance Gate

Before Stage 4 becomes an accepted baseline, the complete `00–06` document set SHOULD be reviewed for:

- responsibility consistency;
- authority consistency;
- context consistency;
- engineering / educational separation;
- evidence semantics;
- completion semantics;
- external capability boundaries;
- output claim semantics;
- Stage 5 neutrality;
- ADR-001 preservation;
- absence of undocumented Superpowers assumptions;
- absence of historical Stage 4 semantic drift.

Material contradictions MUST be resolved before Stage 4 acceptance.

---

# 65. Change Governance

Output and implementation-contract design MAY expose ambiguity in accepted upstream architecture or methodology.

Findings SHOULD be classified as:

## Observation

A clarification that does not change accepted architecture.

## Candidate ADR

A proposed change to an accepted architectural responsibility, authority boundary, trust boundary, or ownership decision.

## Future Evolution

A useful capability intentionally deferred beyond current Stage 4 scope.

Stage 4 MUST NOT introduce architectural change through output formatting or Stage 5 handoff semantics.

---

# 66. Acceptance Criteria

This document is satisfied when Stage 4 can consistently answer:

1. What is an Instruction Output?
2. What authority can an output possess?
3. What is a Claim?
4. How does claim strength affect evidence requirements?
5. What does Evidence Before Claim require?
6. How are current and stale evidence distinguished?
7. How is evidence scope preserved?
8. How are factual claims bounded?
9. How are project-state and learner-state claims separated?
10. What evidence is required for execution claims?
11. How are execution and execution-result claims separated?
12. How are verification and review claims bounded?
13. How are external capability claims bounded?
14. How are engineering and educational claims separated?
15. How is Candidate Educational Evidence surfaced?
16. How is assistance attribution preserved?
17. How are derived and advisory outputs distinguished from authoritative decisions?
18. How is output semantic status preserved without prescribing a schema?
19. How is uncertainty handled?
20. What happens when evidence is missing or conflicting?
21. How may prior claims be corrected?
22. What is required for Engineering Done and Educational Done claims?
23. How are partial and conditional completion represented?
24. How are recommendations distinguished from decisions?
25. How are generated artifacts distinguished from accepted artifacts?
26. How may outputs compose without merging authority?
27. What semantics must survive output transformation?
28. What does explainability require?
29. Why is hidden chain-of-thought not required?
30. What is an Output Contract?
31. What complete Stage 4 contract stack constrains Stage 5?
32. What semantic invariants MUST Stage 5 preserve?
33. What implementation choices remain open to Stage 5?
34. How is Stage 5 prevented from reverse-engineering semantic responsibilities into physical topology?
35. How are implementation limitations fed back without silently changing Stage 4?

---

# 67. Summary

An Instruction Output is not merely generated text.

It is a bounded semantic result constrained by responsibility, authority, context, evidence, and accepted upstream methodology.

The central relationship is:

```text id="oc85"
Instruction Responsibility
        ↓
Authority Contract
        +
Context Contract
        +
Applicable Evidence
        ↓
Output Contract
        ↓
Bounded Claim
        ↓
Explainable Semantic Result
```

The critical claim invariant is:

```text id="oc86"
Evidence Before Claim
```

The critical output distinctions are:

```text id="oc87"
Output Generation
        ≠
Authority Creation
```

```text id="oc88"
Inference
        ≠
Observation
        ≠
Verification
```

```text id="oc89"
Instruction to Execute
        ≠
Execution
        ≠
Successful Execution
```

```text id="oc90"
Capability Applicability
        ≠
Capability Invocation
        ≠
Capability Success
```

```text id="oc91"
Candidate Educational Evidence
        ≠
Accepted Educational Evidence
```

```text id="oc92"
Engineering Done
        ≠
Educational Done
```

```text id="oc93"
Generated Artifact
        ≠
Accepted Artifact
```

```text id="oc94"
Output Transformation
        ≠
Semantic Promotion
```

Stage 4 therefore ends by specifying what semantic properties Stage 5 must preserve while deliberately leaving physical realization open.

Stage 5 may now design the Harness implementation only after the complete Stage 4 `00–06` set has passed cross-document review and owner acceptance.
