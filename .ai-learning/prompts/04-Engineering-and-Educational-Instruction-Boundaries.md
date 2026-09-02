# Engineering and Educational Instruction Boundaries

Status: Accepted
Version: 1.0

Parent Documents

- 00-Prompt-Architecture.md
- 01-Instruction-Responsibility-Model.md
- 02-Instruction-Authority-and-Composition.md
- 03-Context-and-Truth-Contracts.md
- 00-Learning-Model.md
- 00-Development-Methodology.md
- 05-Development-Learning-Integration.md

Related Documents

- 02-Assessment.md
- 03-Competency-Evaluation.md
- 04-Learning-Debt.md
- 05-Automation-Level.md
- 07-Definition-of-Done.md
- 02-Development-Rigor-and-Planning.md
- 03-Engineering-Quality-and-Verification.md
- 06-Superpowers-Integration-and-Engineering-Done.md
- 05-Superpowers-and-External-Capability-Boundaries.md
- 06-Instruction-Outputs-Claims-and-Stage-5-Contracts.md

---

# 1. Purpose

This document defines the Prompt Architecture boundary between engineering and educational Instruction Responsibilities in AI Learning Harness (ALH).

It specifies how accepted Stage 2 Educational Methodology and Stage 3 Development Methodology interact at the instruction layer without collapsing their distinct responsibilities, authority, evidence, state, or completion semantics.

It defines instruction-level constraints for:

- engineering behavior;
- educational behavior;
- learner participation;
- assistance;
- assistance attribution;
- Automation Level;
- Engineering Rigor;
- engineering review;
- educational assessment;
- Candidate Educational Evidence;
- competency evaluation;
- learner-state authority;
- Decision Engine interaction;
- Engineering Done;
- Educational Done.

This document does not redefine:

- how learning works;
- how competency is evaluated;
- how Learning Debt works;
- how Automation Level is determined;
- how real software development proceeds;
- engineering lifecycle semantics;
- Engineering Rigor;
- verification methodology;
- Engineering Done;
- physical AI execution.

Those semantics remain owned by their accepted upstream documents.

---

# 2. Core Principle

Development activity within ALH simultaneously creates engineering and educational concerns.

These concerns interact.

They do not merge.

The accepted model is:

```text id="ee1"
Development Activity
        ↓
Engineering Outcome
```

and, independently:

```text id="ee2"
Development Activity
        ↓
Learning Opportunity
        ↓
Educational Interaction
        ↓
Candidate Educational Evidence
        ↓
Stage 2 Assessment
```

Prompt Architecture MUST preserve both paths.

Therefore:

```text id="ee3"
Engineering Responsibility
        ≠
Educational Responsibility
```

and:

```text id="ee4"
Engineering Success
        ≠
Educational Success
```

and:

```text id="ee5"
Educational Success
        ≠
Engineering Success
```

---

# 3. Parallel Responsibility Model

Engineering and educational responsibilities are parallel semantic concerns.

They MAY apply to the same learner activity.

They MUST retain separate ownership.

Conceptually:

```text id="ee6"
                ┌──────────────────────┐
                │ Development Activity │
                └──────────┬───────────┘
                           │
              ┌────────────┴────────────┐
              ↓                         ↓
    Engineering Concern        Educational Concern
              ↓                         ↓
    Engineering Outcome        Learning Interaction
                                        ↓
                              Candidate Educational
                                    Evidence
```

The existence of two concerns does not imply:

- two agents;
- two model calls;
- two prompt files;
- two runtime branches.

The distinction is semantic.

---

# 4. Engineering Instruction Responsibility

An **Engineering Instruction Responsibility** is an Instruction Responsibility whose primary semantic purpose is to support an accepted Stage 3 engineering obligation or outcome.

Engineering instruction behavior MAY support:

- Discovery;
- Requirements;
- Architecture / Design;
- Implementation;
- Testing / Verification;
- Review;
- Delivery / Deployment;
- security;
- documentation;
- planning;
- traceability;
- engineering completion evaluation.

Such behavior MUST remain governed by applicable Stage 3 semantics.

Engineering instruction responsibilities MUST NOT acquire educational authority merely because their activity creates learning opportunities or educationally relevant observations.

---

# 5. Educational Instruction Responsibility

An **Educational Instruction Responsibility** is an Instruction Responsibility whose primary semantic purpose is to support accepted Stage 2 learning semantics.

Educational instruction behavior MAY support:

- adaptive teaching;
- Socratic interaction;
- learning-objective support;
- assessment;
- competency evaluation;
- learner-independence development;
- Learning Debt handling;
- Automation Level application;
- Educational Done evaluation.

Such behavior MUST remain governed by applicable Stage 2 semantics.

Educational instruction responsibilities MUST NOT acquire engineering authority merely because learning occurs through engineering activity.

---

# 6. Domain Ownership

Engineering and educational responsibilities own different semantic questions.

Engineering responsibilities answer questions such as:

- What engineering work is required?
- What engineering constraints apply?
- What engineering depth is appropriate?
- What verification is applicable?
- Is the engineering result acceptable?

Educational responsibilities answer questions such as:

- What should the learner understand or practice?
- How much assistance is appropriate?
- What learner participation is required?
- What observations are educationally meaningful?
- What evidence supports competency evaluation?
- Has the learning objective satisfied accepted Stage 2 semantics?

These questions MAY interact.

They MUST NOT be collapsed into one authority domain.

---

# 7. No Universal Cross-Domain Precedence

Neither educational nor engineering responsibility universally overrides the other.

Stage 4 MUST NOT define:

```text id="ee7"
Education
        >
Engineering
```

or:

```text id="ee8"
Engineering
        >
Education
```

Instead:

- engineering authority governs engineering correctness and engineering completion;
- educational authority governs learning strategy, assessment, competency, and learner progression.

Where both apply, instruction behavior SHOULD seek an outcome satisfying both domains.

If a material conflict remains, it MUST be handled according to `02-Instruction-Authority-and-Composition.md`.

Neither domain may erase the other's accepted authority.

---

# 8. Engineering Obligations Remain Binding

Educational strategy MUST NOT silently waive applicable Stage 3 engineering obligations.

For example, educational convenience MUST NOT by itself justify:

- skipping applicable verification;
- accepting known defects;
- lowering required security;
- omitting required documentation;
- declaring Engineering Done without sufficient evidence.

The educational strategy MAY affect how the learner participates in satisfying an engineering obligation.

It MUST NOT redefine whether the engineering obligation exists.

Therefore:

```text id="ee9"
Educational Assistance
        ≠
Engineering Waiver
```

---

# 9. Educational Obligations Remain Binding

Engineering convenience MUST NOT silently waive accepted educational constraints.

For example, implementation efficiency MUST NOT by itself justify:

- removing required learner reasoning;
- bypassing an intended Socratic interaction;
- converting a learning opportunity into fully opaque AI execution;
- treating AI-generated work as learner-independent evidence;
- declaring competency mastery from engineering completion alone.

Therefore:

```text id="ee10"
Engineering Convenience
        ≠
Educational Waiver
```

---

# 10. Learner Participation

Learner participation is meaningful involvement in engineering reasoning or execution according to accepted educational strategy.

Prompt Architecture MUST preserve two separate questions:

```text id="ee11"
What engineering work must be done?
```

and:

```text id="ee12"
How should the learner participate in that work?
```

The first belongs primarily to engineering semantics.

The second belongs primarily to educational semantics.

The answer to the second question MAY affect:

- whether the AI explains;
- whether it asks;
- whether it hints;
- whether it demonstrates;
- whether it provides a partial solution;
- whether it performs implementation;
- whether it asks the learner to verify or correct output.

It MUST NOT silently redefine the first question.

---

# 11. Meaningful Participation

Meaningful participation requires involvement relevant to the current learning objective.

Participation MUST NOT be inferred merely from superficial activity.

Examples of potentially meaningful participation MAY include:

- reasoning about requirements;
- selecting among design alternatives;
- predicting behavior;
- implementing code;
- debugging;
- explaining a defect;
- evaluating verification results;
- correcting AI-generated implementation;
- reviewing tradeoffs.

The relevant form depends on accepted Stage 2 methodology and current learning context.

Stage 4 MUST NOT create a universal participation checklist.

---

# 12. AI Assistance

AI assistance MAY take different forms.

Examples MAY include:

- explanation;
- question;
- hint;
- suggestion;
- partial solution;
- worked example;
- generated implementation;
- review;
- correction;
- verification guidance.

The form of assistance MUST be compatible with:

- learner state;
- current learning objective;
- accepted Automation Level semantics;
- applicable engineering obligations;
- current task context.

Assistance form MUST NOT be interpreted as runtime autonomy.

---

# 13. Assistance Attribution

Where learner independence matters to assessment, the semantic context SHOULD distinguish relevant assistance.

Examples MAY include:

- learner performed work independently;
- AI provided a hint;
- AI suggested an approach;
- AI provided part of the solution;
- AI generated the implementation;
- learner corrected AI-generated work;
- AI reviewed learner-produced work.

Assistance attribution supports educational interpretation.

It is not itself educational evidence.

Therefore:

```text id="ee32"
Assistance Attribution
        ≠
Competency Evidence
```

It MAY materially affect how evidence is interpreted by authorized educational responsibilities.

Stage 4 does not define how assistance attribution is persisted or instrumented.

---

# 14. Automation Level

Automation Level is an accepted Stage 2 educational concept representing the degree of automation applied to relevant learner activity by an external capability or AI.

The four accepted Automation Levels are:

```text id="ee14"
NONE | ASSISTED | SHARED | FULL
```

At the instruction layer, Automation Level describes how much of the relevant activity is delegated to external capability.

Automation Level MUST NOT describe:

- model permissions;
- tool permissions;
- file-system permissions;
- runtime orchestration;
- execution topology;
- number of model calls;
- access control;
- physical agent autonomy;
- specific learner participation forms;
- specific assistance strategies.

Therefore:

```text id="ee15"
Automation Level
        =
Degree of Activity Automation
```

and:

```text id="ee16"
Automation Level
        ≠
AI Runtime Autonomy
```

and:

```text id="ee17"
Automation Level
        ≠
Learner Participation Form
```

and:

```text id="ee18"
Automation Level
        ≠
Permitted Assistance Strategy
```

---

# 15. Automation Level vs Learner Participation vs Permitted Assistance

Automation Level, Learner Participation, and Permitted Assistance are distinct but related concepts.

```text id="ee19"
Automation Level
        ≠
Learner Participation
        ≠
Permitted Assistance
```

**Automation Level** answers:
- How much of the relevant activity is automated/delegated to external capability?
- Accepted values: NONE | ASSISTED | SHARED | FULL

**Learner Participation** answers:
- What substantive learner involvement is expected in this activity?
- Examples: reasoning, implementation, decision, review, verification, etc.

**Permitted Assistance** answers:
- What is the external capability allowed to do within this allocation?
- Examples: explanation, hint, partial solution, generated implementation, review, etc.

Automation Level constrains the degree of delegation but does not determine the specific form of learner participation or assistance.

For example, `SHARED` Automation Level may involve:
- Learner writes code, AI reviews and corrects
- Learner selects architecture, AI implements
- Learner defines requirements, AI generates, learner verifies

The specific allocation depends on educational authority from current context, not Automation Level alone.

Therefore:

```text id="ee20"
Automation Level
        ≠
Learner Participation
```

and:

```text id="ee21"
Automation Level
        ≠
Permitted Assistance
```

and:

```text id="ee22"
Learner Participation
        ≠
Learner Competency
```

and:

```text id="ee23"
AI Assistance
        ≠
Educational Authority
```

and:

```text id="ee24"
Engineering Responsibility
        ≠
Permission for AI to preempt pedagogically meaningful learner participation
```

and:

```text id="ee25"
Learner Preference
        ≠
Educational Strategy
```

---

# 16. Automation Level Does Not Change Engineering Quality

Automation Level MAY change how assistance is provided.

It MUST NOT lower applicable engineering quality requirements.

For example:

- a low-independence learner may receive more guidance;
- a high-independence learner may receive less guidance.

In both cases, applicable engineering requirements remain governed by Stage 3.

Therefore:

```text id="ee26"
Different Assistance
        ≠
Different Required Engineering Correctness
```

---

# 17. Engineering Rigor

Engineering Rigor is the Stage 3 concept governing expected engineering depth.

The accepted profiles are:

```text id="ee17"
R1 — Lightweight
R2 — Standard
R3 — Elevated
R4 — Critical
```

At the instruction layer, Engineering Rigor MAY affect:

- depth of engineering reasoning;
- planning detail;
- verification breadth;
- review expectations;
- security depth;
- documentation depth;
- traceability depth.

Engineering Rigor MUST NOT determine learner independence.

Therefore:

```text id="ee29"
Engineering Rigor
        ≠
Automation Level
```

---

# 18. Engineering Rigor Does Not Define AI Autonomy

Engineering Rigor also MUST NOT determine physical AI autonomy.

An R4 activity does not automatically authorize:

- more agents;
- more tool permissions;
- autonomous execution;
- broader file access;
- automatic external-capability invocation.

Likewise, an R1 activity does not imply a simpler execution topology.

Therefore:

```text id="ee30"
Engineering Rigor
        ≠
AI Autonomy
```

Stage 5 MAY use rigor as one semantic input where implementation requires it.

It MUST NOT reinterpret rigor as execution permission.

---

# 19. Three Independent Dimensions

Stage 4 MUST preserve:

```text id="ee31"
Automation Level
        ≠
Engineering Rigor
        ≠
AI Autonomy
```

These dimensions answer different questions:

```text id="ee21"
Automation Level
        →
How much of the relevant activity is automated?
```

```text id="ee22"
Engineering Rigor
        →
How deep must the engineering work be?
```

```text id="ee23"
AI Autonomy
        →
How is execution authority implemented?
```

The first two are accepted upstream semantics.

The third belongs primarily to Stage 5 implementation.

Stage 4 MUST NOT collapse them into one control axis.

---

# 20. Engineering Review

Engineering Review evaluates engineering quality according to applicable Stage 3 semantics.

At the instruction layer, Engineering Review MAY:

- examine requirements coverage;
- examine implementation;
- examine verification evidence;
- identify defects;
- identify engineering risk;
- request correction;
- determine whether engineering concerns remain unresolved within its authority.

Where independent review is applicable, the review responsibility MUST preserve Semantic Independence according to `02-Instruction-Authority-and-Composition.md`.

Engineering Review MUST NOT automatically:

- declare competency mastery;
- change learner state;
- assign Learning Debt;
- change Automation Level;
- declare Educational Done.

---

# 21. Educational Assessment

Educational Assessment interprets educational evidence according to accepted Stage 2 semantics.

At the instruction layer, assessment MAY consider:

- Knowledge / Understanding;
- Reasoning;
- Application;
- Independence;
- Consistency;
- applicable assistance context;
- Candidate Educational Evidence.

Assessment MUST NOT redefine engineering truth.

For example, assessment MUST NOT:

- convert a failed test into a passing test;
- reinterpret an unresolved defect as engineering completion;
- waive missing engineering verification.

Educational Assessment evaluates educational evidence.

It does not own engineering correctness.

---

# 22. Engineering Review vs Educational Assessment

The distinction is normative:

```text id="ee24"
Engineering Review
        ≠
Educational Assessment
```

Engineering Review asks:

> Is the engineering work acceptable according to applicable engineering criteria?

Educational Assessment asks:

> What does the available evidence demonstrate about learner capability according to accepted educational semantics?

The same development activity MAY contribute information to both.

The conclusions remain separate.

---

# 23. Engineering Observation

An **Engineering Observation** is a fact, finding, behavior, or outcome observed during engineering activity.

Examples MAY include:

- learner identified a requirement gap;
- learner selected a suitable design;
- learner introduced a defect;
- learner diagnosed a failure;
- learner corrected AI-generated code;
- learner required a hint;
- learner independently interpreted test failure.

An Engineering Observation is not automatically educational evidence.

It MAY become Candidate Educational Evidence when relevant to learning.

---

# 24. Candidate Educational Evidence

`Candidate Educational Evidence` is the accepted Stage 3 integration label for an engineering observation that MAY be educationally relevant.

It is not a new Stage 2 evidence category.

The flow is:

```text id="ee25"
Engineering Observation
        ↓
Candidate Educational Evidence
        ↓
Stage 2 Assessment
        ↓
Accepted Educational Evidence, if appropriate
        ↓
Competency Evaluation
```

Instruction responsibilities producing engineering observations MAY identify them as candidate evidence.

They MUST NOT promote them directly into accepted learner evidence.

---

# 25. Evidence Vocabulary

Stage 4 MUST preserve the accepted Stage 2 educational evidence vocabulary:

- Knowledge / Understanding;
- Reasoning;
- Application;
- Independence;
- Consistency.

Stage 4 MUST NOT introduce additional authoritative evidence categories.

`Candidate Educational Evidence` describes semantic status before educational interpretation.

It does not extend the evidence vocabulary.

---

# 26. Assistance and Evidence

Assistance materially affects some educational interpretations.

For example, successful implementation completed:

- independently;
- after a hint;
- after a partial solution;
- by correcting AI output;

may provide different evidence of Independence.

Prompt Architecture SHOULD preserve sufficient assistance context for authorized assessment to interpret that difference.

However:

```text id="ee33"
Assistance Level
        ≠
Evidence Result
```

The presence or absence of assistance does not by itself determine mastery.

Assessment remains responsible for interpretation.

---

# 27. Engineering Output Is Not Learner Performance

AI-generated engineering output MUST NOT automatically be attributed to the learner.

Therefore:

```text id="ee27"
AI-Generated Implementation
        ≠
Learner Application Evidence
```

The learner MAY subsequently create educational evidence through activities such as:

- explaining the generated code;
- reviewing it;
- identifying defects;
- correcting it;
- adapting it;
- verifying it;
- reasoning about its design.

The educational meaning depends on accepted Stage 2 assessment semantics.

---

# 28. Learner Correction of AI Output

Learner correction of AI-generated output MAY create meaningful Candidate Educational Evidence.

The relevant observation MAY concern:

- defect recognition;
- reasoning;
- debugging;
- application;
- design judgment;
- independence.

The AI-generated origin of the work MUST remain semantically relevant where it affects interpretation.

A corrected AI solution MUST NOT be represented as though the learner independently authored the entire original implementation.

---

# 29. Verification Evidence vs Educational Evidence

Engineering verification evidence supports engineering claims.

Educational evidence supports learning claims.

Therefore:

```text id="ee28"
Verification Evidence
        ≠
Educational Evidence
```

A test result MAY contribute to an educational observation.

But the test result itself does not prove:

- learner understanding;
- learner reasoning;
- independence;
- consistency;
- competency mastery.

Likewise, strong educational evidence does not prove the software is correct.

---

# 30. Passing Tests

Passing tests are engineering evidence.

They MAY support an Engineering Done decision where applicable.

They MUST NOT automatically establish:

- complete engineering verification;
- Engineering Done;
- Educational Done;
- competency mastery.

Therefore:

```text id="ee29"
Passing Tests
        ≠
Automatic Engineering Done
        ≠
Automatic Educational Done
        ≠
Automatic Competency Mastery
```

The applicable claim depends on the relevant authority and evidence requirements.

---

# 31. Learner-State Authority

Authoritative learner state remains governed by accepted Stage 1 and Stage 2 responsibilities.

Engineering instruction responsibilities MUST NOT update authoritative:

- competency state;
- Learning Debt;
- Automation Level;
- assessment state;
- learner progression;
- learner-memory state;

unless that authority is explicitly assigned by accepted architecture.

Engineering work MAY produce input to such decisions.

It MUST NOT silently perform those decisions.

---

# 32. Competency Evaluation

Competency Evaluation remains an educational authority.

Engineering activity MAY supply Candidate Educational Evidence.

Assessment MAY interpret that evidence.

Competency Evaluation MAY then determine competency progression according to accepted Stage 2 semantics.

Prompt Architecture MUST preserve this authority chain.

It MUST NOT shortcut it merely because an engineering responsibility has access to learner context.

---

# 33. Learning Debt

Learning Debt remains a Stage 2 educational concept.

Engineering difficulties MAY produce observations that are relevant to Learning Debt.

They MUST NOT automatically create or modify authoritative Learning Debt.

The relevant educational responsibility MUST apply accepted Stage 2 semantics.

Stage 4 MUST NOT reinterpret engineering defects as Learning Debt directly.

---

# 34. Decision Engine

The Stage 1 Decision Engine remains responsible for accepted educational decision semantics.

Development context MAY be relevant to those decisions.

Relevant context MAY include:

- current development activity;
- Engineering Rigor;
- engineering complexity;
- learner-participation opportunity;
- Candidate Educational Evidence;
- engineering risk.

This relevance MUST NOT create:

- a new Decision Engine state domain;
- a development-lifecycle-driven Decision Engine;
- a runtime prompt router;
- a lifecycle-to-prompt state machine.

Therefore:

```text id="ee30"
Development Context
        ≠
Decision Engine Architecture
```

---

# 35. Planning

Planning is an engineering activity governed by Stage 3.

Educational strategy MAY affect how the learner participates in planning.

For example, the learner MAY be asked to:

- propose steps;
- justify sequencing;
- identify risks;
- critique an AI-generated plan.

However, educational participation MUST NOT turn an engineering plan into an immutable educational contract.

A development plan remains a revisable engineering hypothesis.

---

# 36. Development Lifecycle

Stage 3 defines the learner-product development lifecycle.

Instruction responsibilities MAY behave differently across lifecycle activities.

The lifecycle MUST NOT be converted into:

- instruction topology;
- agent topology;
- runtime routing states;
- educational states.

Therefore:

```text id="ee31"
Development Lifecycle
        ≠
Prompt Routing Graph
```

Stage 4 MAY use lifecycle activity as context.

It MUST NOT use lifecycle enumeration as physical execution design.

---

# 37. Activity Applicability

Stage 3 defines:

- Required;
- Conditional;
- Proportional;
- Not Applicable.

Instruction behavior MAY use applicability to determine whether a particular engineering obligation matters to the current task.

Stage 4 MUST NOT create a second applicability taxonomy.

Educational strategy MUST NOT reinterpret a Required engineering activity as Not Applicable merely to simplify learning.

Likewise, Stage 4 MUST NOT impose unnecessary engineering ceremony where Stage 3 makes an activity proportional or not applicable.

---

# 38. Documentation

Documentation obligations remain governed by Stage 1 and Stage 3.

Educational strategy MAY create additional explanation or reflection where justified by learning goals.

Such educational material MUST NOT be confused automatically with engineering documentation.

Therefore:

```text id="ee32"
Educational Explanation
        ≠
Engineering Documentation
```

Either MAY satisfy both purposes only where it genuinely meets both applicable contracts.

Duplicated documentation SHOULD be avoided.

---

# 39. Security

Security remains an engineering and architectural constraint.

Educational assistance MUST NOT waive applicable security requirements.

Security-sensitive engineering activity MAY also create learning opportunities.

Such educational value MUST NOT reduce applicable security rigor.

Likewise, security context MUST NOT automatically become educational evidence.

Educational interpretation remains bounded by accepted assessment authority.

---

# 40. Engineering Done

Engineering Done is an evidence-supported engineering completion claim governed by Stage 3.

At the instruction layer, Engineering Done MUST require satisfaction of applicable engineering obligations.

Conceptually:

```text id="ee33"
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
Applicable Security
        ↓
Applicable Documentation
        ↓
Applicable Delivery
        ↓
Engineering Done
```

Only applicable obligations are required.

Maximum ceremony is not.

Educational state MUST NOT substitute for missing engineering evidence.

---

# 41. Educational Done

Educational Done remains governed by accepted Stage 2 completion semantics.

At the instruction layer, Educational Done MUST be evaluated through authorized educational responsibilities.

Engineering completion MUST NOT automatically establish Educational Done.

Similarly, incomplete engineering work does not necessarily mean no educational objective has been achieved.

The claims remain independent.

---

# 42. Completion Separation

The normative invariant is:

```text id="ee34"
Engineering Done
        ≠
Educational Done
```

Possible combinations include:

```text id="ee35"
Engineering Done
+
Educational Done
```

```text id="ee36"
Engineering Done
+
Educational Work Remaining
```

```text id="ee37"
Engineering Work Remaining
+
Educational Objective Satisfied
```

The existence of these combinations demonstrates that completion domains MUST remain independent.

Stage 4 MUST NOT force them into one global completion state.

---

# 43. Engineering Completion Cannot Waive Learning Authority

Engineering Done MAY provide educationally relevant observations.

It MUST NOT:

- declare mastery;
- clear Learning Debt automatically;
- raise Automation Level automatically;
- declare Educational Done automatically.

Such conclusions require accepted educational authority.

---

# 44. Educational Completion Cannot Waive Engineering Authority

Educational Done MUST NOT:

- mark defective software as correct;
- waive unresolved engineering review findings;
- replace required verification;
- establish deployment success;
- declare Engineering Done automatically.

Such conclusions require applicable engineering evidence and authority.

---

# 45. Mixed Outputs

One interaction MAY need to communicate both engineering and educational information.

For example:

```text id="ee38"
Engineering:
    Verification failed because requirement X
    is not satisfied.

Educational:
    The learner independently identified
    the failure cause.

Candidate Educational Evidence:
    Reasoning / Application observation.
```

Such output MAY be physically combined.

Its semantic components MUST remain distinguishable.

Therefore:

```text id="ee39"
Combined Presentation
        ≠
Merged Authority
```

Detailed output semantics belong to `06-Instruction-Outputs-Claims-and-Stage-5-Contracts.md`.

---

# 46. Mixed Context

An instruction MAY need both project and learner context.

For example, guidance during implementation MAY depend on:

- current project task;
- applicable Engineering Rigor;
- learning objective;
- Automation Level.

The context MAY be consumed together.

Its domains MUST remain distinct.

Therefore:

```text id="ee40"
Engineering Context
        +
Educational Context
        ≠
Collapsed State Domain
```

Context authority remains governed by `03-Context-and-Truth-Contracts.md`.

---

# 47. Bounded Adaptation

Educational adaptation MAY change how engineering assistance is delivered.

It MAY affect:

- question depth;
- explanation depth;
- hinting;
- learner-first attempts;
- amount of direct solution content;
- reflection prompts.

It MUST NOT alter:

- engineering truth;
- applicable engineering quality;
- authoritative project requirements;
- required verification merely because the learner needs more help.

Adaptation applies to assistance behavior.

It does not redefine engineering correctness.

---

# 48. Educational Friction

Educational strategy MAY intentionally avoid giving an immediate full solution where productive learner reasoning is required.

Such friction MUST remain proportional and educationally justified.

It MUST NOT:

- block necessary safety action;
- conceal material engineering risk;
- prevent required verification;
- create artificial project defects;
- misrepresent project truth.

Educational friction is a teaching constraint, not permission to degrade engineering integrity.

---

# 49. Time and Delivery Pressure

Project constraints MAY create pressure for faster engineering completion.

Such pressure MAY affect proportional planning or implementation decisions according to Stage 3.

It MUST NOT automatically:

- erase educational authority;
- convert AI work into learner-independent evidence;
- remove applicable engineering quality obligations;
- redefine Automation Level.

Where educational and delivery needs cannot both be fully satisfied, the tradeoff MUST be explicit rather than hidden through authority collapse.

---

# 50. Engineering-Educational Interaction Contract

Where an engineering and educational responsibility interact materially, the combined semantic contract SHOULD identify:

- engineering objective;
- educational objective;
- applicable Engineering Rigor;
- applicable Automation Level;
- expected learner participation;
- permitted assistance;
- relevant assistance attribution;
- engineering authority;
- educational authority;
- Candidate Educational Evidence pathway where applicable;
- completion boundaries.

This is a semantic interaction contract.

It MUST NOT prescribe a runtime schema.

---

# 51. Interaction Example — Learner Implementation

```text id="ee41"
Engineering Objective:
    Implement requirement X correctly.

Educational Objective:
    Practice application of concept Y.

Engineering Rigor:
    R2 — Standard.

Automation Level:
    ASSISTED

Learner Participation:
    Learner proposes and implements the initial solution.

Permitted Assistance:
    Clarification and hints before direct implementation assistance.

Engineering Verification:
    Required according to applicable Stage 3 semantics.

Candidate Educational Evidence:
    Learner reasoning,
    implementation behavior,
    debugging behavior.

Assessment Authority:
    Educational responsibility only.

Engineering Done Authority:
    Engineering responsibility only.

Physical Execution:
    Not defined by Stage 4.
```

The example defines semantic interaction.

It does not define a prompt sequence or agent topology.

---

# 52. Interaction Example — AI-Generated Implementation

```text id="ee42"
Engineering Objective:
    Produce an acceptable implementation.

Educational Context:
    Direct AI implementation is permitted
    under the current assistance strategy.

AI Contribution:
    AI generates implementation.

Learner Participation:
    Learner reviews, explains, verifies,
    corrects, or adapts the result as required
    by the educational strategy.

Engineering Evidence:
    Verification applies normally.

Educational Evidence:
    AI authorship MUST be preserved
    when interpreting learner independence.

Competency Claim:
    MUST NOT be inferred from successful
    AI-generated implementation alone.
```

This preserves engineering quality without falsely attributing authorship or independence to the learner.

---

# 53. Interaction Example — Engineering Review

```text id="ee43"
Engineering Responsibility:
    Independently evaluate applicable engineering quality.

Educational Opportunity:
    Observe how the learner responds to review findings.

Engineering Output:
    Review findings.

Candidate Educational Evidence:
    Learner explanation,
    correction quality,
    reasoning,
    independence.

Educational Interpretation:
    Stage 2 assessment responsibility.

Learner-State Change:
    Not authorized by Engineering Review.
```

The same activity contributes to both domains without merging their authority.

---

# 54. Interaction Anti-Patterns

The following patterns are prohibited or strongly discouraged.

## 53.1 Engineering Success Equals Mastery

Treating correct software as automatic proof of competency mastery.

## 53.2 Learning Success Equals Engineering Done

Treating demonstrated understanding as proof that the engineering task is complete.

## 53.3 Automation Level Equals AI Permission

Using learner-independence level as runtime execution authority.

## 53.4 Engineering Rigor Equals Automation Level

Treating more critical engineering work as requiring more or less learner independence automatically.

## 53.5 AI Authorship Equals Learner Evidence

Attributing AI-generated implementation directly to learner application competence.

## 53.6 Engineering Observation Equals Accepted Evidence

Promoting engineering observations directly into accepted learner evidence.

## 53.7 Review Equals Assessment

Treating engineering review as competency assessment.

## 53.8 Assessment Equals Review

Using educational assessment to override engineering review findings.

## 53.9 Lifecycle Equals Learning State

Treating development lifecycle activity as educational State Machine state.

## 53.10 Educational Friction Degrades Engineering Integrity

Withholding material engineering truth or required engineering action merely to create a learning challenge.

## 53.11 Delivery Pressure Erases Learning Semantics

Treating urgency as automatic permission to disregard educational authority or assistance attribution.

---

# 55. Interaction Validation

A material engineering / educational interaction SHOULD be validated using the following questions:

1. What engineering responsibility applies?
2. What educational responsibility applies?
3. What authority does each possess?
4. What authority does each explicitly lack?
5. What Engineering Rigor applies?
6. What Automation Level applies?
7. What learner participation is expected?
8. What permitted assistance applies?
9. Does assistance attribution matter?
10. What engineering evidence is required?
11. What Candidate Educational Evidence may arise?
12. Who may interpret that evidence?
13. Can engineering quality remain intact?
14. Can learner participation remain meaningful?
15. Are Engineering Done and Educational Done independent?
16. Does any responsibility silently update another domain's state?
17. Does the interaction assume a physical prompt or agent topology?

An interaction failing questions 12–16 MUST be redesigned.

A design failing question 17 SHOULD be examined for premature Stage 5 coupling.

---

# 56. Stage 5 Contract

Stage 5 MUST materialize engineering / educational interaction while preserving:

- engineering authority;
- educational authority;
- learner participation;
- assistance constraints;
- assistance attribution where materially relevant;
- Automation Level semantics;
- Engineering Rigor semantics;
- Candidate Educational Evidence status;
- review / assessment separation;
- learner-state authority;
- Decision Engine boundaries;
- Engineering Done / Educational Done separation.

Stage 5 MAY choose:

- one or multiple prompts;
- one or multiple model calls;
- one or multiple physical agents;
- assistance-delivery mechanisms;
- evidence-capture mechanisms;
- runtime coordination mechanisms.

Those mechanisms MUST NOT redefine the semantic boundaries established here.

---

# 57. Change Governance

Engineering / educational integration MAY reveal ambiguity in accepted upstream methodology or architecture.

Findings SHOULD be classified as:

## Observation

A clarification that does not change accepted architecture or methodology.

## Candidate ADR

A proposed change to an accepted architectural responsibility, authority boundary, or structural ownership.

## Future Evolution

A potentially useful integration capability intentionally deferred beyond current Stage 4 scope.

Stage 4 MUST NOT resolve cross-domain ambiguity by silently modifying either Stage 2 or Stage 3.

---

# 58. Acceptance Criteria

This document is satisfied when Stage 4 can consistently answer:

1. How do engineering and educational responsibilities coexist?
2. Which semantic questions belong to each domain?
3. Why does neither domain universally override the other?
4. How are engineering obligations preserved under educational assistance?
5. How are educational obligations preserved during engineering execution?
6. What constitutes meaningful learner participation?
7. How may AI assistance vary?
8. When does assistance attribution matter?
9. How does Automation Level affect assistance without becoming AI autonomy?
10. How does Engineering Rigor affect engineering depth without becoming learner independence?
11. How are Automation Level, Engineering Rigor, and AI autonomy kept independent?
12. How is Engineering Review distinguished from Educational Assessment?
13. What is an Engineering Observation?
14. What is Candidate Educational Evidence?
15. How is the accepted Stage 2 evidence vocabulary preserved?
16. Why is AI-generated work not automatically learner evidence?
17. How may learner correction of AI output contribute evidence?
18. How are verification evidence and educational evidence separated?
19. Who may update learner state?
20. How is Decision Engine authority preserved?
21. How is lifecycle context prevented from becoming prompt topology?
22. How is activity applicability preserved?
23. How are Engineering Done and Educational Done kept independent?
24. How may engineering and educational outputs be combined without merging authority?
25. What interaction semantics MUST Stage 5 preserve?

---

# 59. Summary

Engineering and educational responsibilities interact throughout ALH development activity.

They MUST remain semantically distinct.

The central relationship is:

```text id="ee44"
Development Activity
        ↓
┌─────────────────────────┐
│                         │
↓                         ↓
Engineering              Learning
Outcome                  Opportunity
│                         ↓
│                 Educational Interaction
│                         ↓
│                 Candidate Educational
│                       Evidence
↓                         ↓
Engineering Done    Stage 2 Assessment
when applicable            ↓
                    Educational Outcome
```

The critical distinctions are:

```text id="ee45"
Engineering Responsibility
        ≠
Educational Responsibility
```

```text id="ee46"
Engineering Review
        ≠
Educational Assessment
```

```text id="ee47"
Verification Evidence
        ≠
Educational Evidence
```

```text id="ee48"
Candidate Educational Evidence
        ≠
Accepted Educational Evidence
```

```text id="ee49"
Automation Level
        ≠
Engineering Rigor
        ≠
AI Autonomy
```

```text id="ee50"
Engineering Done
        ≠
Educational Done
```

Prompt Architecture preserves engineering integrity and educational integrity simultaneously by keeping authority, evidence, learner participation, assistance, and completion semantics explicit.

The next document defines how these responsibilities may rely on Superpowers and other external capabilities without inheriting their methodology or execution topology:

`05-Superpowers-and-External-Capability-Boundaries.md`
