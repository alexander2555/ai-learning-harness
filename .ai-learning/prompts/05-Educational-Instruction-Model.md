# Educational Instruction Model

Version: 0.1 Draft

Parent Documents

- 00-Prompt-Architecture.md
- 01-Instruction-Responsibility-Model.md
- 04-Context-Model.md
- 00-Learning-Model.md
- 01-Socratic-Method.md
- 02-Assessment.md
- 03-Competency-Evaluation.md
- 04-Learning-Debt.md
- 05-Automation-Level.md
- 06-Quiz-Strategy.md
- 07-Definition-of-Done.md

Related Documents

- 04-Agent-Pipeline.md
- 00-Development-Methodology.md

---

# 1. Purpose

This document defines how AI Learning Harness (ALH) instruction responsibilities express and support the approved Educational Methodology.

It establishes the instruction-layer rules required to preserve:

- competency-oriented learning;
- project-driven learning;
- Socratic teaching;
- adaptive assistance;
- progressive independence;
- educational assessment;
- competency evaluation boundaries;
- Learning Debt;
- Automation Level;
- quiz boundaries;
- Learning Unit completion semantics.

This document is downstream from Stage 2.

It MUST NOT redefine the Educational Methodology.

Where this document conflicts with an approved Stage 2 document, the Stage 2 document remains authoritative.

---

# 2. Educational Expression Principle

Educational instruction responsibilities translate approved methodology into bounded AI-agent behavior.

The relationship is:

```text id="cwyqs5"
Stage 2
Educational Methodology
        ↓
Educational Instruction Rules
        ↓
Instruction Responsibilities
        ↓
Future Prompt Artifacts
        ↓
AI-Agent Educational Behavior
```

Instruction rules MAY operationalize approved methodology.

They MUST NOT become an alternative educational methodology.

Therefore:

```text id="33iu5a"
Express
    ≠ Redefine

Apply
    ≠ Own

Guide
    ≠ Reinterpret Without Authority
```

---

# 3. Educational Responsibility Boundary

Educational behavior may involve several distinct responsibilities.

These MAY include:

- teaching;
- learner guidance;
- assessment;
- evidence production;
- competency evaluation support;
- independence adaptation;
- quiz interaction;
- learning-progress communication;
- memory-relevant observation.

These responsibilities MUST preserve the ownership and distinctions established by Stage 2.

A single AI model MAY participate in several responsibilities.

A single prompt artifact MAY express several compatible educational responsibilities.

Neither condition permits those responsibilities to collapse semantically.

---

# 4. Competency-Oriented Learning

ALH learning is competency-oriented.

Educational instruction responsibilities MUST support learning toward demonstrable capability rather than mere content exposure.

The accepted competency progression remains:

```text id="kq1d0g"
unknown
   ↓
introduced
   ↓
learning
   ↓
practicing
   ↓
mastered
```

Instruction responsibilities MUST NOT:

- introduce competing competency states;
- rename states in a way that changes their semantics;
- infer unapproved transitions;
- collapse competency progression into a generic confidence score.

Where competency state affects educational behavior, the instruction layer MUST consume the applicable state from the approved competency context or evaluation process.

---

# 5. Project-Driven Learning

ALH learning occurs through real engineering work.

Educational instructions SHOULD connect learning objectives to meaningful project activity where appropriate.

They SHOULD support:

- reasoning about real project constraints;
- practical application;
- reflection on engineering decisions;
- transfer from explanation to implementation;
- evidence from authentic work.

Project-driven learning MUST NOT be interpreted as:

- unrestricted automation;
- replacing learning objectives with project delivery alone;
- treating successful project output as automatic competency mastery.

Engineering output MAY provide educational evidence.

It does not by itself determine competency state.

---

# 6. Learning Units

A Learning Unit is a bounded educational objective defined by Stage 2 methodology.

Instruction responsibilities MAY consume Learning Unit information to guide interaction.

They MAY use it to determine:

- current educational focus;
- relevant evidence;
- applicable Definition of Done;
- appropriate teaching behavior.

They MUST NOT redefine the Learning Unit concept or its completion semantics.

The instruction layer SHOULD keep the current Learning Unit visible enough to prevent educational interaction from drifting into unrelated teaching.

---

# 7. Socratic Teaching

Educational instruction responsibilities supporting teaching MUST remain compatible with the approved Socratic Method.

The conceptual progression remains:

```text id="r1cmlf"
Question
   ↓
Clarification
   ↓
Hint
   ↓
Additional Hint
   ↓
Partial Solution
   ↓
Complete Explanation
```

This progression is methodological, not a mandatory fixed runtime sequence.

Instruction responsibilities SHOULD prefer the least-direct intervention that is educationally appropriate.

They MAY increase directness when justified by:

- learner state;
- repeated difficulty;
- task risk;
- time or interaction constraints where methodologically acceptable;
- engineering correctness;
- safety;
- explicit methodological conditions.

They MUST NOT default to complete solutions merely because the model can provide them.

---

# 8. Socratic Responsibility

A Socratic instruction responsibility SHOULD:

- encourage learner reasoning;
- reveal assumptions;
- detect misconceptions;
- support self-correction;
- ask bounded questions where useful;
- provide progressively stronger guidance;
- preserve learner ownership of reasoning where appropriate.

It SHOULD NOT:

- turn every interaction into interrogation;
- ask questions when sufficient context already exists and doing so would add no educational value;
- withhold necessary safety or correctness information;
- obscure a straightforward fact merely to appear Socratic.

Socratic behavior MUST remain proportional to the educational objective and learner needs.

---

# 9. Progressive Independence

Educational instructions MUST support progressive learner independence.

The instructional objective is to preserve and progressively strengthen the learner's ability to perform relevant reasoning, decision-making, and engineering activity with appropriate independence.

Instruction responsibilities SHOULD avoid unnecessary takeover of work that the learner should perform under the applicable educational strategy.

At the same time, progressive independence MUST NOT be implemented as arbitrary withholding of assistance.

The appropriate form and degree of AI assistance SHOULD remain compatible with:

- the applicable educational objective;
- learner context;
- competency context;
- Automation Level;
- observed difficulty;
- applicable Decision Engine direction;
- engineering quality;
- safety.

Automation Level MAY inform educational behavior.

It MUST NOT be interpreted as an AI automation capability or as a direct instruction specifying how much work the AI should perform.

---

# 10. Automation Level

Automation Level is an approved Stage 2 educational dimension concerning learner independence.

The accepted levels remain:

```text
NONE
   ↓
ASSISTED
   ↓
SHARED
   ↓
FULL
```

The authoritative meaning of these levels is defined by:

`05-Automation-Level.md`

Stage 4 MUST consume those semantics rather than redefine them.

Instruction responsibilities MAY use the applicable Automation Level as educational context when determining appropriate instructional behavior.

They MUST NOT reinterpret Automation Level as:

- AI automation capability;
- model autonomy;
- permission for the AI to perform more work;
- prompt execution authority;
- runtime orchestration mode;
- competency state.

Therefore:

```text
Automation Level
    ≠
AI Automation Capability

Automation Level
    ≠
Competency State
```

Where the precise operational implication of an Automation Level is not established by authoritative methodology or an applicable educational decision, the instruction layer MUST NOT invent one.

Any material uncertainty SHOULD remain explicit or be resolved through the applicable educational decision responsibility.

---

# 11. Automation-Level Expression

Prompt Architecture MAY express approved Automation Level semantics through bounded instructional constraints.

Such expression MUST remain downstream from the authoritative Stage 2 definition.

Instruction responsibilities MAY use Automation Level to:

- preserve learner-independence expectations;
- avoid inappropriate AI takeover;
- interpret the educational significance of assistance;
- preserve evidence integrity;
- support an applicable educational strategy.

They MUST NOT establish an independent mapping such as:

```text
Automation Level
        ↓
Amount of AI Work
```

unless that mapping is explicitly supported by authoritative educational methodology or an applicable approved educational decision.

In particular, Stage 4 MUST NOT independently define `NONE`, `ASSISTED`, `SHARED`, or `FULL` in terms of how much implementation or reasoning the AI performs.

This avoids turning a learner-independence model into an AI-execution model.

Prompt artifacts SHOULD reference or consume the applicable Automation Level semantics rather than duplicate their definitions.

---

# 12. Learning Debt

Learning Debt represents successful applications still required for the applicable stability threshold.

Educational instruction responsibilities MAY consume Learning Debt to support continued practice.

They MUST preserve the rule:

```text id="i99623"
Learning Debt = 0
    ≠
Automatic Mastery
```

Learning Debt MUST NOT be:

- merged with competency state;
- merged with Automation Level;
- treated as a general score;
- reduced merely because a learner received an explanation.

Where successful application affects Learning Debt, the applicable Stage 2 methodology governs that interpretation.

---

# 13. Orthogonal Educational Dimensions

The following dimensions MUST remain distinct:

```text id="pe2118"
Competency State

Automation Level

Learning Debt
```

Instruction responsibilities MAY consider all three.

They MUST NOT collapse them into a single decision variable.

For example:

- high Automation Level MUST NOT imply mastery;
- Learning Debt of zero MUST NOT imply mastery;
- mastered competency MUST NOT automatically determine a particular Automation Level.

Educational adaptation SHOULD use each dimension only for the responsibility it actually represents.

---

# 14. Assessment

Assessment produces educational evidence.

Instruction responsibilities supporting Assessment MAY:

- create assessment opportunities;
- pose assessment tasks;
- observe learner responses or activity;
- analyze learner reasoning;
- identify applicable evidence;
- classify evidence according to approved categories;
- report assessment findings.

Assessment MUST NOT independently redefine competency states or mastery criteria.

Competency Evaluation interprets applicable evidence against the relevant competency.

The instruction layer MUST preserve:

```text
Assessment
        ↓
Produces Evidence
        ↓
Competency Evaluation
        ↓
Interprets Evidence
```

Assessment and Competency Evaluation MAY be performed by the same logical Agent Pipeline role.

They MAY also participate in the same prompt artifact, model invocation, or educational interaction.

Such co-location MUST NOT collapse their semantic responsibilities.

---

# 15. Evidence Model

Educational instruction responsibilities MUST preserve the accepted evidence vocabulary:

- Knowledge / Understanding;
- Reasoning;
- Application;
- Independence;
- Consistency.

Evidence SHOULD be identified according to what the learner actually demonstrated.

Instruction responsibilities MUST NOT substitute one evidence type for another where the competency requires a different form of evidence.

In particular:

```text id="10ja4g"
Correct Explanation
    ≠
Practical Application Evidence
```

where practical capability is required.

Likewise:

```text id="sxtbzz"
One Successful Application
    ≠
Automatic Consistency Evidence
```

unless the applicable methodology establishes otherwise.

---

# 16. Evidence Production

Teaching, development, review, quiz, assessment, and project interactions MAY produce educationally relevant evidence.

Instruction responsibilities SHOULD preserve the origin, type, and assistance context of material evidence where those properties affect educational interpretation.

Evidence MAY arise from:

- learner explanations;
- design reasoning;
- implementation;
- debugging;
- testing;
- review;
- repeated application;
- quiz answers;
- independent task execution.

The existence of evidence does not determine its final competency meaning.

Assessment identifies and evaluates applicable evidence according to its approved responsibility.

Competency Evaluation interprets that evidence against the relevant competency.

These responsibilities MAY be executed by the same logical role while remaining semantically distinct.

---

# 17. Competency Evaluation

Competency Evaluation interprets applicable educational evidence against the relevant competency.

Instruction responsibilities supporting Competency Evaluation MUST use approved Stage 2 semantics.

They MAY:

- interpret applicable evidence;
- evaluate whether evidence supports competency progression;
- identify remaining capability gaps;
- evaluate applicable Learning Debt implications;
- determine whether available evidence supports the relevant competency conclusion;
- preserve uncertainty where evidence is insufficient.

They MUST NOT:

- create new competency states;
- redefine competency progression;
- infer mastery from a single unsupported signal;
- treat quiz success as sufficient practical evidence;
- treat AI-generated work as learner application evidence;
- treat Automation Level as competency evidence by itself;
- override Competency Model ownership;
- override Decision Engine authority where the resulting educational decision belongs to the Decision Engine.

Competency Evaluation MAY be executed by the Assessor logical Pipeline role.

This does not make Assessment and Competency Evaluation the same responsibility.

Where evidence is insufficient, uncertainty SHOULD remain explicit.

The instruction layer MUST NOT manufacture progression merely to maintain conversational momentum.

---

# 18. Teaching and Assessment Separation

Teaching and Assessment MAY occur close together, but their responsibilities remain different.

Teaching aims to support learning.

Assessment aims to produce or evaluate educational evidence.

Competency Evaluation interprets applicable evidence against the relevant competency.

Conceptually:

```text
Teaching
    ≠
Assessment
    ≠
Competency Evaluation
```

An instruction responsibility MUST account for the fact that substantial teaching assistance during an assessment can affect the strength or interpretation of Independence and Application evidence.

Therefore, assessment-oriented composition SHOULD constrain teaching assistance where the methodology requires independent demonstration.

Likewise, an interaction intended primarily for teaching SHOULD NOT be represented as strong independent assessment evidence when substantial assistance was provided.

The same logical Pipeline role MAY participate in both Assessment and Competency Evaluation.

That co-location MUST NOT erase the semantic boundary between them.

---

# 19. Assistance and Evidence Integrity

AI assistance affects the interpretation of learner evidence.

Instruction responsibilities SHOULD preserve enough information to distinguish between:

- independent learner work;
- lightly guided work;
- substantially assisted work;
- AI-produced work.

This distinction supports valid assessment of Independence and Application evidence.

A correct artifact produced primarily by the AI MUST NOT automatically be attributed to the learner as independent capability.

Educational integrity takes precedence over convenient positive evaluation.

---

# 20. Quiz Strategy

Quizzes support:

- retrieval practice;
- knowledge verification;
- conceptual understanding;
- gap detection.

Instruction responsibilities MAY generate or conduct quizzes where relevant.

Quiz behavior SHOULD remain proportionate to the Learning Unit and current educational need.

Quiz results MAY provide Knowledge / Understanding or Reasoning evidence where applicable.

Quiz success MUST NOT independently establish practical competency or mastery.

Therefore:

```text id="2vxz7u"
Quiz Success
    ≠
Practical Mastery
```

---

# 21. Quiz Instruction Responsibility

A quiz-related instruction responsibility SHOULD:

- test relevant concepts;
- avoid unrelated trivia;
- distinguish recall from understanding where practical;
- surface misconceptions;
- provide feedback consistent with the educational objective;
- avoid overclaiming what the result proves.

Quiz difficulty SHOULD be appropriate to the educational objective and learner context.

The instruction layer MUST NOT use quiz frequency as a substitute for authentic project application.

---

# 22. Learning Unit Definition of Done

Stage 2 defines the educational Definition of Done for a Learning Unit.

Instruction responsibilities MAY use that Definition of Done to:

- identify required evidence;
- structure educational activity;
- communicate remaining requirements;
- avoid premature completion claims.

The accepted methodological relationship remains:

```text id="fdr98e"
Learning Objective
        ↓
Definition of Done
        ↓
Required Evidence
        ↓
Assessment
        ↓
Competency Evaluation
        ↓
Completion / Progression
```

Instruction responsibilities MUST preserve the distinction between Learning Unit completion and mastery.

---

# 23. Completion and Mastery

Learning Unit completion and competency mastery are distinct conclusions.

An instruction responsibility MUST NOT present completion as mastery unless the applicable competency-evaluation semantics establish mastery.

Likewise, lack of mastery does not necessarily mean a Learning Unit cannot be complete if its approved Definition of Done has been satisfied.

The instruction layer SHOULD communicate this distinction clearly where it affects learner expectations.

---

# 24. Adaptive Educational Behavior

Educational instructions SHOULD adapt behavior using approved learner and task context.

Adaptation MAY consider:

- competency state;
- Automation Level;
- Learning Debt;
- current Learning Unit;
- prior evidence;
- current difficulty;
- repeated misconceptions;
- engineering task complexity.

Adaptation MUST NOT create new educational semantics.

The adaptation question is:

> How should approved methodology be applied here?

not:

> What new methodology should be invented for this learner?

---

# 25. Educational Decision Authority

Adaptive educational behavior may require decisions about:

- degree of assistance;
- practice priority;
- progression;
- evidence sufficiency;
- learning direction.

Where these decisions belong to the Decision Engine or another approved owner, instruction responsibilities MUST preserve that authority.

Instruction responsibilities MAY execute or communicate an approved educational direction.

They MUST NOT acquire decision ownership merely because they possess relevant learner context.

---

# 26. Teacher Responsibility

Teacher-related instruction responsibilities SHOULD support:

- guided discovery;
- explanation;
- misconception detection;
- learner reasoning;
- practice;
- progressive independence;
- educational reflection.

Teacher responsibility MUST remain bounded.

The Teacher MUST NOT:

- redefine competency semantics;
- independently declare mastery outside the approved evaluation process;
- modify Learning Debt semantics;
- redefine Automation Level;
- replace engineering correctness with pedagogical convenience.

Teacher behavior MUST remain compatible with both educational integrity and engineering quality.

---

# 27. Developer Responsibility in Learning

Developer-related instruction responsibilities MAY participate directly in educational interactions.

Where they do, they MUST distinguish:

- producing engineering work;
- demonstrating engineering reasoning;
- providing learner assistance;
- generating learner evidence.

The Developer MUST NOT treat AI-generated implementation as learner evidence by default.

The applicable educational strategy MAY constrain how the Developer assists the learner.

Automation Level MAY provide relevant learner-independence context, but it MUST NOT be interpreted as direct permission for the Developer or AI to perform progressively more work.

Where assistance materially affects educational evidence, the degree and nature of that assistance SHOULD remain interpretable.

Developer behavior MUST preserve both engineering quality and educational integrity.

---

# 28. Architect Responsibility in Learning

Architect-related instructions MAY support educational reasoning about:

- design tradeoffs;
- architectural constraints;
- proportional architecture;
- accepted decisions;
- candidate alternatives.

Architectural teaching SHOULD distinguish accepted project architecture from exploratory design discussion.

A learner's ability to discuss an architectural alternative MAY provide reasoning evidence.

It MUST NOT silently change accepted architecture.

---

# 29. Reviewer Responsibility in Learning

Review may produce both engineering and educational value.

Reviewer-related instruction responsibilities MAY:

- identify defects;
- explain engineering concerns;
- ask the learner to reason about findings;
- produce review evidence;
- reveal misconceptions.

Review findings MAY contribute educational evidence.

They MUST remain distinguishable from final competency evaluation.

The Reviewer SHOULD preserve opportunities for learner self-correction where educationally appropriate.

---

# 30. Security Auditor Responsibility in Learning

Security review MAY serve both engineering and educational purposes.

Security-related instruction responsibilities SHOULD:

- preserve applicable security constraints;
- identify relevant risks;
- support learner understanding of security implications;
- produce evidence where the learner demonstrates security reasoning or application.

Educational adaptation MUST NOT weaken required security behavior.

Unsafe output MUST NOT be permitted merely to preserve Socratic discovery.

---

# 31. Assessor Responsibility

The Assessor is a logical Agent Pipeline role that MAY execute both Assessment and Competency Evaluation responsibilities.

These responsibilities MUST remain semantically distinct.

Assessment Responsibility MAY:

- create assessment opportunities;
- observe learner responses and activity;
- identify evidence;
- classify evidence according to approved categories;
- report assessment findings.

Competency Evaluation Responsibility MAY:

- interpret applicable evidence against the relevant competency;
- evaluate whether evidence supports competency progression;
- identify capability gaps;
- evaluate applicable Learning Debt implications;
- determine whether evidence supports the relevant competency conclusion.

The relationship remains:

```text
Assessor
   │
   ├── Assessment
   │       ↓
   │    Evidence
   │
   └── Competency Evaluation
           ↓
      Evidence Interpretation
```

The Assessor MUST NOT:

- redefine competency states;
- redefine mastery criteria;
- redefine evidence categories;
- redefine Learning Debt;
- redefine Automation Level;
- treat quiz success as sufficient practical competency evidence;
- treat assisted work as independent evidence without qualification;
- treat AI-produced work as learner application evidence;
- override Competency Model ownership;
- override Decision Engine authority where an educational decision belongs to the Decision Engine.

One logical role MAY execute multiple educational responsibilities.

One logical role MUST NOT collapse those responsibilities into a competing educational methodology.

---

# 32. Memory Manager Responsibility in Learning

Memory Manager-related instructions MAY identify educationally relevant information for continuity.

They MAY preserve or propose updates concerning:

- learner observations;
- competency progression history;
- relevant evidence;
- recurring misconceptions;
- learning context.

They MUST NOT independently reinterpret educational evidence beyond their approved authority.

A memory update MUST preserve the semantic distinction between:

- observed evidence;
- assessment result;
- competency evaluation;
- learner state.

---

# 33. Response Generator Responsibility in Learning

Response generation SHOULD preserve educational meaning when communicating results to the learner.

A response MAY combine:

- guidance;
- explanation;
- engineering output;
- assessment feedback;
- progression information;
- uncertainty.

The Response Generator MUST NOT:

- present assisted performance as independent achievement;
- convert tentative evidence into mastery;
- hide remaining Learning Debt;
- collapse Automation Level and competency state;
- conceal unresolved educational uncertainty.

Communication clarity MUST NOT come at the expense of educational accuracy.

---

# 34. Educational Context Use

Educational instruction responsibilities SHOULD consume only context relevant to the current educational purpose.

Applicable context MAY include:

- current Learning Unit;
- relevant competency state;
- Automation Level;
- Learning Debt;
- prior evidence;
- recent learner performance;
- task context;
- applicable Stage 2 constraints.

The Context Model defined in `04-Context-Model.md` governs provenance, relevance, freshness, and context ownership.

Educational instructions MUST NOT treat context access as authority to rewrite learner state.

---

# 35. Educational Composition

Educational responsibilities MAY participate in composed instruction structures.

A valid educational composition MAY include, for example:

```text id="gixfhs"
Teacher Responsibility
        +
Automation-Level Constraint
        +
Relevant Competency Context
        +
Project Task
        +
Shared Engineering Constraints
```

or:

```text id="s16hjr"
Assessment Responsibility
        +
Evidence Rules
        +
Limited Teaching Assistance
        +
Current Learning Unit
```

Composition MUST preserve the distinct meaning of each educational component.

Detailed general composition rules are defined in `02-Instruction-Composition.md`.

---

# 36. Educational Precedence and Conflict

Educational instructions remain subject to `03-Instruction-Precedence-and-Conflict-Resolution.md`.

Where educational concerns conflict with automation convenience, educational integrity prevails.

Where pedagogical behavior would compromise engineering correctness or safety, engineering quality and applicable security constraints MUST remain preserved.

Where a task request conflicts with approved educational methodology, the task SHOULD be satisfied only within the valid methodology boundary unless an upstream change is explicitly approved.

Educational conflict MUST NOT be hidden through prompt wording.

---

# 37. Direct Answers and Complete Solutions

Complete solutions are not prohibited by the Educational Methodology.

They are one possible point in the approved Socratic progression and MAY be appropriate.

Instruction responsibilities SHOULD consider complete solutions when:

- prior guidance has been insufficient;
- the educational objective requires explanation after attempted reasoning;
- the learner requests a complete explanation and methodology permits it;
- engineering correctness or safety requires directness;
- the applicable educational strategy permits direct execution or explanation;
- the task is not intended to establish independent learner capability.

Automation Level MAY contribute relevant learner-independence context.

It MUST NOT be treated as an automatic permission rule for complete AI execution.

Complete solutions MUST NOT automatically be treated as learner evidence.

Where a complete solution materially reduces learner independence in the interaction, that assistance SHOULD remain visible to later educational interpretation.

---

# 38. Educational Uncertainty

The instruction layer MUST preserve uncertainty about learner capability where evidence is insufficient.

It SHOULD distinguish:

```text id="eew35o"
No Evidence
    ≠
Negative Evidence

Partial Evidence
    ≠
Complete Evidence

Assisted Success
    ≠
Independent Success
```

Uncertainty SHOULD lead to appropriate further learning or assessment rather than invented competency conclusions.

---

# 39. Misconceptions

Educational instruction responsibilities SHOULD support misconception detection and correction.

Where a misconception is observed, behavior MAY include:

- asking for reasoning;
- highlighting contradictory evidence;
- providing a hint;
- comparing alternatives;
- explaining the correct model;
- requesting practical application.

Misconception handling SHOULD support self-correction where appropriate.

It MUST NOT preserve an incorrect engineering or security conclusion merely to prolong discovery.

---

# 40. Failure and Error as Educational Evidence

Engineering errors MAY provide useful educational evidence.

Instruction responsibilities SHOULD distinguish between:

- execution failure;
- conceptual misunderstanding;
- implementation mistake;
- environmental issue;
- insufficient evidence.

Failure MUST NOT automatically imply low competency.

Likewise, eventual success after substantial AI correction MUST NOT automatically imply independent capability.

Educational interpretation remains evidence-based.

---

# 41. Repeated Practice

Repeated successful application MAY contribute to:

- consistency evidence;
- Learning Debt reduction;
- competency progression where methodologically appropriate.

Instruction responsibilities SHOULD preserve enough information to distinguish repeated independent application from repeated AI-generated success.

Repeated exposure alone MUST NOT be treated as repeated successful application.

---

# 42. Educational Explainability

Material educational behavior SHOULD be explainable at the project level.

Where appropriate, it SHOULD be possible to determine:

- why a certain assistance level was used;
- what Learning Unit was active;
- what evidence was produced;
- what assessment conclusion was reached;
- what remained uncertain;
- why progression did or did not occur.

Explainability MUST NOT require disclosure of private model reasoning.

It requires understandable educational justification based on approved methodology and evidence.

---

# 43. Educational Traceability

Material educational instruction responsibilities SHOULD remain traceable to applicable Stage 2 methodology.

Traceability SHOULD avoid copying the methodology into prompts or Stage 4 documents.

Instead, it SHOULD make clear which educational rule a responsibility operationalizes.

Detailed Stage 4 traceability requirements belong to:

`07-Prompt-Architecture-Compliance-and-Traceability.md`

---

# 44. Prompt Artifact Boundary

Future prompt artifacts MAY express educational responsibilities defined by this model.

For example, a future Teacher-related artifact MAY contain instructions supporting:

- Socratic behavior;
- progressive independence;
- applicable Automation Level;
- educational evidence integrity.

However, the artifact MUST NOT become the authoritative definition of those concepts.

Its role is to express approved Prompt Architecture.

Detailed artifact contracts belong to:

`06-Prompt-Artifact-Model.md`

Concrete production wording belongs to Stage 5 unless explicitly established otherwise by an approved Stage 4 specification.

---

# 45. Educational Anti-Patterns

Prompt Architecture MUST avoid the following educational anti-patterns.

## 45.1 Methodology Copy Prompt

Copying Stage 2 documents directly into prompt text instead of defining bounded instruction responsibilities.

## 45.2 Mastery by Correct Answer

Treating one correct explanation or answer as sufficient for mastery.

## 45.3 Mastery by Automation

Treating high Automation Level as evidence of mastery.

## 45.4 Mastery by Learning Debt

Treating `Learning Debt = 0` as automatic mastery.

## 45.5 Quiz as Competency Proof

Treating quiz success as sufficient proof of practical competency.

## 45.6 AI Work as Learner Work

Treating AI-produced engineering output as learner application evidence without qualification.

## 45.7 Teaching Equals Assessment

Using heavily assisted teaching performance as independent assessment evidence.

## 45.8 Assessment Equals Competency Evaluation

Allowing assessment responsibility to redefine or directly own competency progression.

## 45.9 Socratic Ritual

Asking unnecessary questions merely to imitate Socratic teaching.

## 45.10 Assistance Withholding

Reducing help without methodological justification merely to force learner effort.

## 45.11 Pedagogy Over Correctness

Allowing educational technique to produce technically unsafe or incorrect engineering output.

## 45.12 Convenience Progression

Advancing learner state because progression makes the interaction simpler or more encouraging.

---

# 46. Educational Instruction Rules

Educational instruction design MUST satisfy the following rules:

1. Stage 2 remains authoritative for educational semantics.
2. Educational instructions MUST express methodology without redefining it.
3. Competency states MUST remain unchanged.
4. Competency State, Automation Level, and Learning Debt MUST remain distinct.
5. Learning Debt of zero MUST NOT automatically imply mastery.
6. Automation Level MUST remain a learner-independence dimension and MUST NOT be reinterpreted as AI automation capability, AI execution authority, or competency state.
7. Assessment MUST remain distinct from Competency Evaluation.
8. Assessment and Competency Evaluation MAY be executed by the same logical Pipeline role while remaining semantically distinct.
9. Evidence types MUST preserve their approved meaning.
10. Knowledge evidence MUST NOT substitute for required application evidence.
11. Quiz success MUST NOT independently establish practical mastery.
12. Assisted output MUST NOT automatically count as independent learner evidence.
13. Socratic behavior SHOULD remain proportional and progressive.
14. Complete solutions MAY be used where methodologically appropriate.
15. Educational adaptation MUST remain evidence-based.
16. Engineering correctness and applicable security MUST remain preserved.
17. Learning Unit completion MUST remain distinct from mastery.
18. Missing evidence MUST NOT be replaced with invented progression.
19. Educational behavior SHOULD remain explainable and traceable.
20. Prompt-local wording MUST NOT become a new educational source of truth.
21. Educational decisions MUST remain with their approved owner.

---

# 47. Relationship to Prompt Artifact Model

This document defines educational instruction semantics.

It does not define the concrete structure or required metadata of future prompt artifacts.

The next document defines:

- what qualifies as a prompt artifact;
- artifact responsibility boundaries;
- artifact dependency declarations;
- composition relationships;
- context dependencies;
- authority declarations;
- traceability expectations;
- Stage 4 to Stage 5 implementation contract.

That responsibility belongs to:

`06-Prompt-Artifact-Model.md`

---

# 48. Summary

The Educational Instruction Model provides the controlled bridge between Stage 2 methodology and future AI-agent prompt artifacts.

Its core model is:

```text id="2zxofq"
Approved Educational Methodology
        ↓
Bounded Educational Instruction Rules
        ↓
Instruction Responsibilities
        ↓
Architecture-Compliant Prompt Artifacts
        ↓
Adaptive Educational AI Behavior
```

The model preserves the distinctions:

```text id="rw65cz"
Methodology
    ≠ Prompt Text

Teaching
    ≠ Assessment

Assessment
    ≠ Competency Evaluation

Same Logical Role
    ≠ Same Semantic Responsibility

Evidence
    ≠ Competency State

Knowledge
    ≠ Application

Automation Level
    ≠ AI Automation Capability

Automation Level
    ≠ Competency State

Learning Debt
    ≠ Competency State

Learning Unit Completion
    ≠ Mastery

AI-Generated Success
    ≠ Learner Independence
```

This allows ALH to express competency-oriented, project-driven, Socratic, adaptive, evidence-based learning through AI-agent instructions without creating a competing educational methodology.

The next document defines the architectural contract for concrete prompt artifacts:

`06-Prompt-Artifact-Model.md`
