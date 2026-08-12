# Development-Learning Integration

Status: Accepted
Version: 1.0

Parent Documents

- 04-Engineering-Artifacts-and-Traceability.md
- 00-Learning-Model.md

Related Documents

- 00-Development-Methodology.md
- 01-Socratic-Method.md
- 02-Assessment.md
- 03-Competency-Evaluation.md
- 04-Learning-Debt.md
- 05-Automation-Level.md
- 06-Quiz-Strategy.md
- 07-Definition-of-Done.md
- 00-Vision.md
- 06-Knowledge-Graph.md
- 07-Competency-Model.md
- 08-Memory-Model.md
- 09-Decision-Engine.md
- 04-Agent-Pipeline.md
- 10-Superpowers-Integration.md
- ADR-001-Separation-of-Application-and-Learning-Infrastructure.md

---

# 1. Purpose

This document defines how real software-development activity within the AI Learning Harness (ALH) learning environment interfaces with the accepted Stage 2 Educational Methodology.

It establishes:

- where development activities MAY create learning opportunities;
- how learner participation relates to engineering work;
- how educational interventions MAY occur during development;
- how engineering activities MAY produce candidate educational evidence;
- how learner independence interacts with development activities;
- how educational decision authority remains separated from development workflow authority;
- how project artifacts MAY inform education without becoming authoritative learner state;
- how Stage 1 logical Pipeline responsibilities MAY intersect development and learning responsibilities.

The purpose of this integration is to allow disciplined software development and adaptive learning to operate simultaneously without collapsing their semantic boundaries.

This document MUST NOT redefine Stage 2 Educational Methodology.

---

# 2. Integration Objective

The Development-Learning Integration model connects two distinct concerns:

```text id="r8p2mc"
Software Development
        ↓
Engineering Activity
        ↓
Engineering Outcome
```

and:

```text id="x5a91q"
Engineering Activity
        ↓
Learning Opportunity
        ↓
Educational Interaction
        ↓
Candidate Educational Evidence
        ↓
Stage 2 Assessment / Evaluation
```

The engineering activity is real project work.

It MUST NOT be artificially transformed into an educational simulation when authentic engineering work already provides the necessary context.

The educational layer MAY adapt how the learner participates in that work.

It MUST NOT invalidate the engineering obligations defined by Stage 3.

---

# 3. Parallel Responsibility Model

Development and learning operate in parallel.

Conceptually:

```text id="n8ik9g"
                 Real Project Task
                        ↓
                Engineering Activity
                  ↙             ↘
         Engineering Path     Learning Path
               ↓                  ↓
        Software Outcome      Learning Opportunity
               ↓                  ↓
      Engineering Evidence   Educational Interaction
                                  ↓
                         Candidate Evidence
                                  ↓
                         Stage 2 Evaluation
```

The two paths MAY exchange relevant information.

They MUST NOT become a single authority domain.

In particular:

- Stage 3 determines engineering obligations;
- Stage 2 determines educational intervention and evaluation;
- Stage 1 architecture determines authoritative subsystem responsibilities.

---

# 4. Learning Opportunities in Development

A learning opportunity is a development situation in which meaningful engineering work can contribute to learner understanding, application, reasoning, independence, or consistency.

A learning opportunity MAY arise when the learner must:

- clarify a problem;
- identify requirements;
- reason about constraints;
- compare design alternatives;
- make an implementation decision;
- write or modify code;
- design tests;
- investigate a failure;
- review another solution;
- reason about security;
- prepare deployment;
- diagnose operational behavior.

A development activity MUST NOT automatically be treated as a learning opportunity for every learner.

Relevance depends on the learner's current educational context and Stage 2 decision-making.

---

# 5. Development Activity Does Not Imply Teaching

The presence of an engineering task does not imply that ALH must intervene educationally.

A development activity MAY proceed with:

- active educational guidance;
- limited intervention;
- observation;
- post-activity review;
- no educational intervention.

The appropriate educational response remains a Stage 2 concern.

Stage 3 MUST NOT require teaching activity merely because a lifecycle activity exists.

---

# 6. Educational Intervention Points

Educational intervention MAY occur before, during, or after an engineering activity.

Conceptually:

```text id="qf64wl"
Before Activity
    →
Preparation / Recall / Clarification

During Activity
    →
Guidance / Socratic Questioning / Feedback

After Activity
    →
Reflection / Assessment / Review
```

The timing SHOULD preserve the authenticity of the engineering task.

Intervention SHOULD NOT unnecessarily interrupt productive independent work.

Intervention SHOULD NOT provide so much solution detail that meaningful learner participation is eliminated when Stage 2 expects learner reasoning or application.

---

# 7. Pre-Activity Educational Support

Before an engineering activity, ALH MAY help the learner establish sufficient readiness.

Applicable support MAY include:

- recalling prerequisite concepts;
- clarifying terminology;
- identifying relevant constraints;
- prompting the learner to predict likely challenges;
- asking for an intended approach;
- identifying knowledge gaps.

Pre-activity support SHOULD remain proportional to learner need.

It MUST NOT replace the engineering analysis the learner is expected to perform.

---

# 8. In-Activity Educational Support

During engineering work, educational support MAY include:

- Socratic questioning;
- targeted hints;
- conceptual explanations;
- prompts to inspect evidence;
- prompts to compare alternatives;
- prompts to verify assumptions;
- feedback on reasoning;
- reminders of relevant engineering principles.

The educational intervention SHOULD preserve the learner's opportunity to perform the engineering work.

Where Stage 2 expects independent application, unnecessary direct solution generation SHOULD be avoided.

Where stronger guidance is appropriate, ALH MAY provide more structured assistance.

The educational assistance level is governed by Stage 2.

---

# 9. Post-Activity Educational Support

After an engineering activity, ALH MAY support:

- explanation of decisions;
- reflection on trade-offs;
- discussion of errors;
- comparison with alternatives;
- identification of reusable concepts;
- assessment;
- competency evaluation where applicable.

Post-activity reflection MAY extract educational value from engineering work without changing the engineering outcome.

A completed engineering activity MAY therefore remain educationally useful after the software task itself is finished.

---

# 10. Learner Participation

Learner participation refers to meaningful learner involvement in the engineering reasoning or execution of a development activity.

Participation MAY include:

- identifying the problem;
- proposing requirements;
- selecting an approach;
- explaining trade-offs;
- implementing code;
- designing verification;
- diagnosing failures;
- reviewing results;
- making deployment decisions.

Participation SHOULD be meaningful rather than ceremonial.

Merely asking the learner to confirm an AI-generated solution MUST NOT be treated as equivalent to independent engineering participation.

---

# 11. Participation and Automation Level

Stage 2 Automation Level determines the educational degree of learner independence.

Stage 3 development activities MUST be compatible with different Automation Levels.

For the same engineering activity:

```text id="y2mxyc"
More Guided
    →
ALH provides stronger educational scaffolding
```

or:

```text id="i5toha"
More Independent
    →
Learner performs more reasoning and execution
before intervention
```

Automation Level MUST NOT change the underlying engineering quality obligations.

It MUST NOT be interpreted as:

- AI runtime autonomy;
- number of tool calls;
- permission for unrestricted AI coding;
- physical agent authority;
- development rigor.

---

# 12. Engineering Rigor and Learner Independence

Engineering rigor and learner independence are independent dimensions.

Conceptually:

```text id="pnfh8x"
                    Learner Independence
                 Low                  High

Engineering   Low  Guided R1/R2      Independent R1/R2
Rigor
              High Guided R3/R4      Independent R3/R4
```

The learner's educational needs MAY affect how the task is performed.

They MUST NOT reduce the engineering rigor required by the software task.

Likewise, high engineering rigor does not automatically imply more educational guidance.

---

# 13. Development Activity as Candidate Evidence

Development activities MAY produce observations relevant to Stage 2 evidence categories.

Examples MAY include:

```text id="v8txk0"
Requirements Reasoning
        →
Possible Reasoning Evidence
```

```text id="p6w4oi"
Architecture Decision
        →
Possible Reasoning + Application Evidence
```

```text id="93umtj"
Implementation
        →
Possible Application Evidence
```

```text id="qh03mr"
Test Design
        →
Possible Reasoning + Application Evidence
```

```text id="mohv1b"
Independent Debugging
        →
Possible Independence Evidence
```

```text id="20qdfh"
Repeated Successful Work
        →
Possible Consistency Evidence
```

These mappings are contextual.

They MUST NOT be treated as automatic competency updates.

---

# 14. Candidate Evidence

Stage 3 uses the term **candidate educational evidence** for engineering observations that MAY be relevant to Stage 2 evaluation.

Candidate educational evidence is not yet authoritative educational evidence.

Candidate educational evidence is an integration label only.

It is NOT:

- a new Stage 2 evidence category;
- a new competency state;
- an assessment result;
- authoritative learner state.

If Stage 2 Assessment accepts the observation as educational evidence, it MUST
be interpreted through the existing Stage 2 evidence vocabulary:

- Knowledge / Understanding;
- Reasoning;
- Application;
- Independence;
- Consistency.

Stage 3 MUST NOT introduce additional educational evidence semantics.

Conceptually:

```text id="pu3brb"
Engineering Observation
        ↓
Candidate Educational Evidence
        ↓
Stage 2 Assessment
        ↓
Accepted / Rejected / Weighted Evidence
        ↓
Competency Evaluation
```

Stage 3 MAY identify where candidate evidence can arise.

Stage 3 MUST NOT decide its educational validity.

---

# 15. Evidence Authenticity

Candidate evidence SHOULD reflect the learner's actual contribution.

Educational interpretation SHOULD distinguish between:

- learner reasoning;
- AI-provided reasoning;
- learner implementation;
- AI-generated implementation;
- shared work;
- learner correction of AI output;
- learner explanation after the fact.

Stage 3 does not define the scoring implications of these distinctions.

However, development context SHOULD preserve enough information where practical for Stage 2 to avoid attributing AI work to the learner incorrectly.

---

# 16. Engineering Success Is Not Educational Evidence by Itself

A successful software result MAY have been produced through:

- learner reasoning;
- heavy AI guidance;
- copied implementation;
- trial and error;
- direct instruction;
- independent engineering competence.

Therefore:

```text id="ccqln4"
Working Software
        ≠
Proven Learner Competency
```

The educational system MUST evaluate how the result was produced where competency interpretation matters.

Stage 3 MUST NOT infer mastery from software success alone.

---

# 17. Engineering Failure Is Not Educational Failure by Itself

A failed engineering attempt MAY still provide useful learning evidence.

For example, a learner MAY:

- correctly diagnose the failure;
- identify an invalid assumption;
- explain why an approach failed;
- revise a design appropriately;
- improve verification strategy.

Therefore:

```text id="43huwn"
Engineering Failure
        ≠
Educational Failure
```

Stage 2 determines whether and how such activity contributes to learning.

Stage 3 SHOULD preserve engineering failure evidence when it remains relevant to the development task.

---

# 18. Learning Success Is Not Engineering Completion

The learner MAY demonstrate strong understanding while the software task remains incomplete.

Examples include:

- identifying a correct design but not implementing it;
- explaining a defect without fixing it;
- designing valid tests before implementation;
- recognizing a security problem requiring further work.

Therefore:

```text id="19guhw"
Competency Evidence
        ≠
Engineering Done
```

Stage 3 completion obligations remain unchanged by educational success.

---

# 19. Development Feedback vs Educational Feedback

Engineering feedback and educational feedback have different purposes.

Engineering feedback asks:

> What must change for the software outcome to be acceptable?

Educational feedback asks:

> What should the learner understand, practice, or improve?

A single review event MAY contain both.

The two SHOULD remain distinguishable.

For example:

```text id="fyco7s"
Engineering Feedback
    →
Missing authorization check
```

and:

```text id="zf04zp"
Educational Feedback
    →
Learner needs stronger reasoning about trust boundaries
```

The first affects the software task.

The second affects the learner model.

---

# 20. Review as a Dual-Use Activity

Engineering Review MAY create substantial learning opportunities.

The learner MAY participate by:

- explaining implementation choices;
- responding to findings;
- evaluating alternative approaches;
- identifying defects;
- assessing verification sufficiency;
- reasoning about maintainability or security.

Review MAY therefore produce candidate educational evidence.

However, Engineering Review MUST remain capable of rejecting the software change for engineering reasons independent of educational progress.

---

# 21. Testing as a Dual-Use Activity

Testing and verification MAY support learning through:

- test design;
- hypothesis formation;
- failure analysis;
- boundary reasoning;
- regression reasoning;
- interpretation of results.

A passing test is engineering evidence.

The learner's reasoning about the test MAY be candidate educational evidence.

These MUST remain distinct.

Conceptually:

```text id="a83gkx"
Test Result
    →
Engineering Evidence
```

while:

```text id="20obz5"
Learner Test Reasoning
    →
Candidate Educational Evidence
```

---

# 22. Architecture as a Dual-Use Activity

Architecture and design work MAY reveal:

- conceptual understanding;
- systems reasoning;
- trade-off reasoning;
- boundary recognition;
- dependency reasoning;
- security reasoning.

The existence of a valid architecture artifact does not prove that the learner produced or understood it.

Educational interpretation SHOULD consider learner contribution and explanation.

Stage 2 owns that interpretation.

---

# 23. Requirements as a Dual-Use Activity

Requirements work MAY reveal the learner's ability to:

- clarify ambiguity;
- identify constraints;
- distinguish functional and non-functional concerns;
- identify edge cases;
- define acceptance criteria;
- reason about feasibility.

Requirements artifacts remain engineering artifacts.

Their educational significance MUST be determined separately.

---

# 24. Implementation as a Dual-Use Activity

Implementation MAY provide candidate evidence for:

- application;
- debugging;
- code reasoning;
- tool use;
- design application;
- independence.

The educational interpretation SHOULD account for the degree of assistance used.

AI-generated code that the learner merely accepts SHOULD NOT be assumed to demonstrate the same application evidence as independently produced implementation.

Stage 2 determines the actual educational conclusion.

---

# 25. Security Work as a Dual-Use Activity

Security-sensitive development MAY produce candidate evidence related to:

- trust boundaries;
- threat reasoning;
- authorization;
- data protection;
- secure design;
- failure analysis.

Security findings remain engineering findings.

Security competency remains an educational interpretation.

The Security Auditor logical responsibility MUST NOT become an educational authority merely because security work is educationally useful.

---

# 26. Deployment as a Dual-Use Activity

Delivery and deployment MAY create learning opportunities involving:

- configuration;
- release reasoning;
- migrations;
- rollback;
- observability;
- operational verification;
- incident response.

Deployment success remains an engineering result.

Operational reasoning MAY provide candidate educational evidence.

The distinction MUST be preserved.

---

# 27. Educational Decision Authority

The Stage 1 Decision Engine owns educational decision-making within its accepted architectural responsibility.

Development workflow MAY provide inputs such as:

- current lifecycle activity;
- task rigor;
- engineering complexity;
- uncertainty;
- relevant concepts;
- learner participation opportunity;
- available candidate evidence.

These inputs MAY inform educational decisions.

They MUST NOT become educational decisions themselves.

Conceptually:

```text id="j7d1x9"
Development Context
        ↓
Decision Engine Input
        ↓
Educational Decision
```

Stage 3 MUST NOT bypass the Decision Engine by embedding educational policy into lifecycle rules.

Development context does not constitute a new authoritative Decision Engine
state domain or a new architectural input channel.

Where development information informs educational decisions, it MUST be exposed
through the accepted ALH context and responsibility boundaries.

Stage 3 identifies semantically relevant observations only.

It MUST NOT:

- expand Decision Engine authority;
- redefine Decision Engine inputs as persistent state;
- make the development lifecycle an educational decision engine;
- prescribe how development context is transported at runtime.

---

# 28. Knowledge Graph Relationship

A development activity MAY require engineering concepts represented in the Knowledge Graph.

Conceptually:

```text id="plwkv9"
Development Task
        ↓
Engineering Concepts Needed
        ↓
Knowledge Graph Context
        ↓
Educational Strategy
```

The Knowledge Graph MAY help identify prerequisites or relevant learning concepts.

It MUST NOT determine the software-development workflow.

The engineering task MUST remain driven by the real project need.

---

# 29. Competency Model Relationship

Development activity MAY create opportunities to exercise competencies defined by the Competency Model.

Stage 3 MAY identify applicable engineering responsibilities.

The Competency Model determines how learner capability is represented educationally.

A task MUST NOT be artificially expanded or modified merely to produce competency coverage when doing so harms the software project.

Additional educational exercises MAY be introduced separately when Stage 2 requires them.

---

# 30. Memory Model Relationship

Development activity MAY generate observations relevant to learner memory.

Examples MAY include:

- demonstrated strengths;
- recurring misunderstandings;
- independence patterns;
- candidate evidence;
- unresolved learning needs.

Stage 3 MAY expose these observations to the educational layer.

Stage 3 MUST NOT decide what becomes authoritative persistent learner state.

That decision remains governed by the Memory Model and Stage 2 semantics.

---

# 31. Project Context and Educational Context

Engineering project context and educational context are different state domains.

Engineering project context MAY include:

- requirements;
- source code;
- tests;
- architecture;
- tasks;
- review findings;
- deployment state.

Educational context MAY include:

- learner competencies;
- learning debt;
- evidence history;
- independence;
- prerequisite state;
- learning objectives.

The two domains MAY reference each other.

They MUST NOT be conflated.

---

# 32. Artifact-to-Education Boundary

Engineering artifacts MAY be used as evidence sources.

For example:

```text id="r4t8d3"
Code Change
        ↓
Observed Learner Contribution
        ↓
Candidate Application Evidence
```

or:

```text id="32r4hz"
Design Artifact
        ↓
Learner Explanation
        ↓
Candidate Reasoning Evidence
```

The artifact itself does not carry authoritative competency meaning.

Educational meaning arises only through Stage 2 assessment and evaluation.

---

# 33. Educational Observability

Development activity SHOULD expose enough observable learner participation for Stage 2 to evaluate learning where such evaluation is intended.

Relevant observations MAY include:

- learner explanations;
- selected alternatives;
- questions asked;
- decisions made;
- implementation contributions;
- test design;
- debugging process;
- corrections after feedback.

Stage 3 MUST NOT require archival of complete private reasoning or exhaustive interaction logs.

Only information necessary for applicable educational semantics SHOULD be retained.

---

# 34. Assistance Attribution

Where candidate evidence depends materially on learner independence, the educational layer SHOULD be able to distinguish relevant assistance.

Examples MAY include:

- direct answer provided before learner attempt;
- hint provided;
- partial solution provided;
- AI-generated implementation adopted;
- learner-generated implementation corrected by AI;
- independent learner solution reviewed afterward.

Stage 3 defines the need for observable participation boundaries where appropriate.

Stage 4 and Stage 5 will later determine how such context is represented and conveyed.

---

# 35. Educational Intervention Must Preserve Engineering Truth

Educational support MUST NOT knowingly misrepresent engineering facts merely to create a teaching moment.

For example, ALH SHOULD NOT:

- invent defects;
- invent requirements;
- pretend a correct implementation is wrong;
- conceal known critical security issues solely for assessment;
- provide false project constraints;
- fabricate tool results.

Teaching strategy MAY control the timing or amount of explanation.

It MUST NOT falsify authoritative engineering reality.

---

# 36. Educational Intervention Must Preserve Project Integrity

Learning goals MUST NOT justify unsafe or unnecessarily damaging project changes.

Educational activities SHOULD avoid:

- intentionally corrupting production data;
- introducing known vulnerabilities into deployed systems;
- deliberately breaking critical production behavior;
- destructive experiments without containment.

When experimentation is educationally useful, it SHOULD occur in an appropriately bounded context.

Stage 3 does not define sandbox technology.

---

# 37. Educational Friction

Educational intervention MAY intentionally slow immediate task completion when doing so is justified by learning goals.

For example, ALH MAY ask the learner to reason before receiving a solution.

However, educational friction SHOULD remain purposeful.

It SHOULD NOT:

- create arbitrary ceremony;
- duplicate already demonstrated knowledge unnecessarily;
- obstruct urgent engineering correction;
- repeatedly test concepts without educational justification.

Stage 2 determines whether the learning value justifies the intervention.

---

# 38. Urgent Engineering Conditions

Certain engineering conditions MAY require immediate corrective action that takes precedence over normal educational pacing.

Examples MAY include:

- active security exposure;
- production outage;
- risk of data loss;
- destructive migration in progress;
- severe operational failure.

In such cases, educational interaction MAY become more directive if necessary to preserve the software project.

This does not redefine learner competency.

Stage 2 MAY later use the event for reflection or assessment.

---

# 39. Educational Scaffolding and Engineering Ownership

Scaffolding MAY help the learner complete difficult engineering work.

Scaffolding SHOULD progressively expose more responsibility to the learner as educational conditions permit.

However, the development methodology MUST preserve clarity regarding who or what produced important engineering decisions.

Educational scaffolding SHOULD NOT create the false impression that the learner independently produced work that was substantially supplied by AI.

---

# 40. Independent Work

When Stage 2 requires independent application, the learner SHOULD have a meaningful opportunity to perform the applicable engineering reasoning or implementation before receiving solution-level assistance.

Independent work MAY still use normal engineering tools permitted by the learning context.

The exact boundary of acceptable assistance is governed by Stage 2.

Stage 3 only requires that independence remain observable enough for educational interpretation where relevant.

---

# 41. Guided Work

Guided engineering work MAY include:

- decomposing a problem together;
- prompting for next steps;
- explaining a concept;
- reviewing intermediate decisions;
- providing partial examples;
- identifying an area to inspect.

Guidance SHOULD maintain connection to the real project task.

It SHOULD avoid replacing genuine engineering work with unrelated exercises unless Stage 2 requires remediation.

---

# 42. Remediation and Real Project Work

When the learner lacks prerequisites necessary for safe or productive project work, Stage 2 MAY introduce remediation.

Remediation MAY occur:

- before continuing the task;
- alongside the task;
- through a bounded supplemental exercise.

The real project SHOULD remain the primary context where practical.

However, the engineering task MUST NOT be forced to serve as a remediation exercise if that would compromise project quality or safety.

---

# 43. Learning Debt Relationship

Development activity MAY expose learning debt.

Examples MAY include:

- repeated reliance on hints;
- inability to explain a recurring design pattern;
- repeated verification mistakes;
- recurring security misconceptions.

Stage 3 MAY provide the relevant observations.

Learning Debt semantics, recording, prioritization, and resolution remain governed by Stage 2.

Development planning MUST NOT silently become a Learning Debt management mechanism.

---

# 44. Quiz Relationship

Stage 2 MAY use quizzes or targeted knowledge checks in relation to development activity.

A quiz MAY be useful when:

- understanding cannot be inferred reliably from engineering work;
- conceptual clarification is needed;
- independent knowledge needs confirmation.

Stage 3 does not define quiz timing, format, or scoring.

Quizzes MUST NOT replace real engineering evidence when practical application is the competency dimension being evaluated.

---

# 45. Educational Definition of Done Boundary

Stage 2 Educational Definition of Done determines educational completion.

Stage 3 Engineering Definition of Done determines engineering completion.

Conceptually:

```text id="vrtrpn"
Engineering DoD
    →
Is the software task acceptably complete?
```

```text id="87vtp7"
Educational DoD
    →
Has the applicable learning objective been completed?
```

A development task MAY satisfy one without satisfying the other.

No single combined completion state SHOULD replace these two meanings.

---

# 46. Engineering Task Completion Before Learning Completion

A software task MAY become Engineering Done while educational work remains.

For example:

```text id="hjn81x"
Software Change Complete
        ↓
Engineering Done
        ↓
Reflection / Assessment
        ↓
Educational Progression
```

The project MUST NOT remain artificially engineering-incomplete merely because educational assessment has not finished, unless the project explicitly requires such a gate for another reason.

---

# 47. Learning Completion Before Engineering Completion

A learner MAY demonstrate the targeted competency before the current software task is finished.

For example:

```text id="avq5cg"
Target Competency Demonstrated
        ↓
Educational Objective Satisfied
        ↓
Additional Engineering Work Still Required
```

Engineering completion MUST continue to follow Stage 3 obligations.

Educational completion MUST NOT waive unfinished engineering work.

---

# 48. Development Task Selection Boundary

Real project needs SHOULD determine development tasks.

Educational considerations MAY influence:

- which available task is assigned next;
- how much support is provided;
- which aspects receive learner emphasis;
- when supplementary practice is introduced.

Educational selection MUST NOT fabricate project requirements or distort the software backlog.

Where no suitable real task exists, Stage 2 MAY use supplemental educational work rather than modifying the project artificially.

---

# 49. Task Complexity as Educational Input

Task complexity MAY be relevant to educational decision-making.

For example, a task MAY be:

- technically appropriate;
- too advanced without scaffolding;
- too trivial to provide useful evidence;
- suitable for independent work;
- suitable for guided application.

Stage 3 supplies engineering complexity context.

Stage 2 determines educational suitability.

Rigor profile MUST NOT be reinterpreted as learner difficulty level.

---

# 50. Development Risk as Educational Constraint

High-risk engineering work MAY constrain how educational experimentation is performed.

For example:

- production security changes MAY require stronger review;
- destructive migrations MAY require supervised execution;
- high-impact releases MAY require additional safeguards.

These constraints arise from engineering risk.

They MUST NOT be interpreted as evidence that the learner lacks competency.

Educational independence and engineering risk remain separate dimensions.

---

# 51. Logical Pipeline Responsibilities

Stage 1 logical Pipeline responsibilities MAY participate in both engineering and educational aspects of the same development activity.

Illustratively:

```text id="3h6u0w"
Requirements Activity
    →
Project Management Responsibility
    +
Teacher / Assessor Responsibilities where applicable
```

```text id="7mc151"
Architecture Activity
    →
Architect Responsibility
    +
Teacher / Assessor Responsibilities where applicable
```

```text id="c3m17r"
Implementation Activity
    →
Developer Responsibility
    +
Teacher / Assessor Responsibilities where applicable
```

```text id="31mutv"
Review Activity
    →
Reviewer Responsibility
    +
Assessor Responsibility where applicable
```

These mappings express logical responsibilities.

They MUST NOT imply:

- one physical agent per responsibility;
- one prompt per responsibility;
- fixed model invocation order;
- runtime process boundaries.

---

# 52. Separation of Engineering and Educational Authority

A logical engineering responsibility MAY identify an engineering problem.

It MUST NOT automatically:

- update competency state;
- assign Learning Debt;
- select Automation Level;
- declare mastery.

Likewise, an educational responsibility MAY identify a learning need.

It MUST NOT automatically:

- approve defective code;
- waive testing;
- override security requirements;
- declare Engineering Done.

Authority boundaries MUST remain explicit.

---

# 53. Decision Conflicts

When engineering and educational concerns create competing preferences, safety and engineering correctness MUST remain preserved.

For example:

```text id="ukqvs5"
Educational Preference
    =
Allow learner more independent exploration
```

but:

```text id="934p27"
Engineering Constraint
    =
Immediate correction required to prevent data loss
```

The engineering safety constraint takes precedence for the project action.

Educational strategy MAY adapt around that constraint.

This does not give Stage 3 authority over competency evaluation.

---

# 54. Superpowers Boundary

Superpowers MAY support applicable engineering activities.

Its capabilities MAY indirectly create learning opportunities because the learner interacts with real development workflows.

However, Superpowers:

- does not own educational strategy;
- does not own learner state;
- does not evaluate competency unless explicitly mediated through accepted ALH semantics;
- does not define Automation Level;
- does not define Educational Definition of Done.

Stage 3 MUST NOT infer educational authority from Superpowers workflow capabilities.

---

# 55. Superpowers-Assisted Work and Evidence

Use of Superpowers MAY affect how learner contribution is interpreted educationally.

For example, a capability MAY:

- scaffold a workflow;
- generate a development artifact;
- automate a mechanical step;
- provide engineering guidance.

Stage 3 MAY expose that assistance context.

Stage 2 determines whether and how it affects candidate educational evidence.

No specific Superpowers behavior SHOULD be assumed without verification.

---

# 56. AI-Assisted Work Attribution

AI assistance is part of the development environment.

Educational interpretation SHOULD distinguish, where material:

```text id="ss5bq2"
AI Produces
        ↓
Learner Accepts
```

from:

```text id="cngb2u"
Learner Produces
        ↓
AI Reviews
```

and:

```text id="4yw191"
Learner Reasons
        +
AI Scaffolds
        ↓
Shared Engineering Work
```

These patterns MAY produce different educational implications.

Stage 2 determines those implications.

Stage 3 only requires that engineering work remains valid regardless of who produced it.

---

# 57. Candidate Evidence Quality

Candidate educational evidence derived from development SHOULD be:

- attributable enough to understand learner contribution;
- relevant to the competency under consideration;
- grounded in real observed activity;
- distinguishable from AI-generated reasoning where practical;
- connected to sufficient project context.

Stage 3 does not define final educational validity thresholds.

Weak attribution SHOULD lead to uncertainty rather than invented confidence.

---

# 58. Consistency Evidence

Repeated real-project application MAY provide candidate evidence of consistency.

Repeated success SHOULD involve meaningfully separate applications rather than artificial repetition of the same trivial action.

Stage 3 MAY expose repeated engineering activity.

Stage 2 determines whether it satisfies Consistency evidence semantics.

---

# 59. Independence Evidence

Development work MAY provide candidate independence evidence when the learner:

- initiates appropriate reasoning;
- selects an approach;
- executes work;
- detects problems;
- verifies outcomes;
- corrects mistakes;

with limited applicable assistance.

The presence of AI tools does not inherently eliminate independence.

The amount and type of assistance matter.

Stage 2 defines the educational interpretation.

---

# 60. Reasoning Evidence

Engineering reasoning MAY become visible through:

- requirement clarification;
- design explanation;
- trade-off analysis;
- debugging;
- test selection;
- review response;
- security analysis.

A correct final answer without observable reasoning MAY provide weaker reasoning evidence than an explainable engineering decision.

Stage 3 does not require chain-of-thought storage.

Concise explanations, decisions, and observable actions MAY be sufficient.

---

# 61. Application Evidence

Application evidence MAY arise when the learner uses knowledge to perform real engineering work.

Examples MAY include:

- implementing a feature;
- correcting a defect;
- designing tests;
- modifying an interface;
- configuring deployment;
- resolving a security issue.

The work SHOULD be sufficiently attributable to the learner for educational interpretation.

The software result itself remains engineering evidence.

---

# 62. Knowledge and Understanding Evidence

Real development MAY reveal understanding through:

- explanations;
- correct concept use;
- prediction of behavior;
- identification of constraints;
- interpretation of failures;
- review discussion.

Stage 2 MAY supplement development observations with direct knowledge checks when necessary.

Stage 3 does not determine when such supplementation is required.

---

# 63. Educational Evidence from Artifacts

Persistent engineering artifacts MAY provide useful evidence sources because they preserve authentic project work.

Examples MAY include:

- learner-authored requirements;
- design decisions;
- implementation;
- tests;
- review responses;
- deployment plans.

However, artifact authorship alone MAY be insufficient to establish learner understanding.

Stage 2 MAY require explanation or independent application.

---

# 64. Memory Persistence Boundary

Stage 3 MAY identify an observation such as:

```text id="m5bwhw"
Learner independently diagnosed
an authorization defect
```

but it MUST NOT itself convert that observation into:

```text id="exndju"
Security Competency = Mastered
```

The transition from observation to persistent educational state is governed by accepted Stage 1 and Stage 2 semantics.

---

# 65. Development Context for Later Stages

Later Stage 4 and Stage 5 work MAY require access to integration context including:

- current lifecycle activity;
- task objective;
- rigor profile;
- applicable engineering requirements;
- current project artifacts;
- learner participation opportunity;
- educational strategy;
- applicable Automation Level;
- candidate evidence context;
- unresolved engineering findings.

Stage 3 defines these as semantic information needs.

It MUST NOT define:

- prompt fields;
- context injection formats;
- agent memory payloads;
- runtime routing;
- persistence schemas.

---

# 66. Minimal Integration Contract

For any development activity where ALH educational intelligence participates, the system SHOULD be able to distinguish, conceptually:

```text id="f5e5we"
Engineering Task
Educational Context
Learner Participation Expectation
Applicable Assistance
Engineering Outcome
Candidate Educational Observations
```

These are semantic categories.

They MUST NOT be interpreted as a mandatory runtime object schema.

---

# 67. Intervention Proportionality

Educational intervention SHOULD be proportional to educational need.

Engineering rigor SHOULD be proportional to engineering need.

These adaptation mechanisms SHOULD operate independently.

Therefore, ALH SHOULD avoid assumptions such as:

```text id="w0zlkf"
R4 Task
    =
Maximum Teaching Intervention
```

or:

```text id="xxk57u"
R1 Task
    =
Minimal Educational Value
```

Neither conclusion necessarily follows.

---

# 68. Avoiding Learning Opportunity Distortion

ALH SHOULD use authentic development opportunities when they naturally arise.

It SHOULD NOT intentionally:

- overcomplicate implementation;
- choose inferior architecture;
- omit useful tools;
- introduce avoidable defects;
- expand scope without project justification;

solely to generate learning evidence.

Learning design MAY influence learner participation.

It MUST NOT degrade engineering integrity.

---

# 69. Educational Opportunity Selection

When multiple valid engineering approaches exist, educational value MAY be considered when selecting among them, provided that:

- all considered approaches satisfy engineering requirements;
- quality is not reduced;
- project constraints are respected;
- unnecessary complexity is not introduced.

Educational value MAY act as a secondary decision factor.

It MUST NOT override materially superior engineering outcomes without explicit project justification.

---

# 70. Intervention Failure

An educational intervention MAY be ineffective or may expose a larger knowledge gap than expected.

In that case, Stage 2 MAY:

- increase scaffolding;
- introduce prerequisite review;
- create remediation;
- postpone educational assessment;
- adjust Automation Level.

The engineering lifecycle MAY continue, pause, or use more direct support depending on project needs.

Stage 3 MUST NOT prescribe the educational adjustment.

---

# 71. Development Failure and Learning Adaptation

Repeated engineering difficulty MAY signal an educational issue.

However, causes MAY also include:

- poor requirements;
- difficult architecture;
- inadequate tooling;
- environment failure;
- unrealistic task complexity;
- incorrect AI guidance.

The system MUST NOT automatically attribute engineering failure to learner weakness.

Educational interpretation SHOULD use sufficient context.

---

# 72. Learning Progress and Engineering Task Assignment

Learner progress MAY influence which available real-project task is pedagogically suitable next.

This SHOULD occur within the actual project backlog or available engineering work where practical.

The educational layer MAY prefer a task that:

- exercises a target competency;
- provides an independence opportunity;
- revisits learning debt;
- increases complexity progressively.

Project priority and engineering constraints remain relevant.

ALH MUST NOT silently substitute educational priorities for authoritative project priorities.

---

# 73. Stage 2 Educational Definition of Done

This document consumes the Stage 2 Educational Definition of Done as an upstream educational contract.

It MUST NOT redefine:

- what evidence is sufficient educationally;
- when assessment is complete;
- when a competency progresses;
- when learning debt is resolved;
- when educational progression is allowed.

Development activity only supplies applicable context and candidate evidence.

---

# 74. Stage 3 Engineering Definition of Done

The final Stage 3 document will define Engineering Done using:

- lifecycle;
- rigor;
- verification;
- review;
- artifacts;
- applicable security and delivery obligations.

Development-Learning Integration contributes one essential boundary:

> Engineering Done MUST NOT require educational mastery unless a separate project requirement explicitly makes that educational result part of the software task.

Likewise:

> Educational Done MUST NOT waive unresolved engineering obligations.

---

# 75. Integration Anti-Patterns

The following patterns are inconsistent with this methodology.

## Working-Code Mastery

Assuming a successful software result proves learner competency.

## Failed-Code Failure

Assuming an engineering failure proves educational failure.

## AI Work Attribution

Treating AI-generated reasoning or code as learner evidence without sufficient attribution.

## Educational Workflow Ownership

Embedding competency decisions directly into development lifecycle transitions.

## Engineering Quality Reduction

Reducing software quality requirements to create easier learner tasks.

## Artificial Difficulty

Making engineering work unnecessarily complex for educational purposes.

## Repository-as-Memory

Treating project artifacts as authoritative learner memory.

## Reviewer-as-Assessor Conflation

Assuming an Engineering Reviewer automatically owns educational assessment.

## Automation-Level Conflation

Treating learner independence as AI runtime autonomy.

## Rigor-Level Conflation

Treating engineering rigor as learner competency difficulty.

## Test-as-Competency

Treating passing tests as direct competency proof.

## Safety-for-Learning Trade

Allowing an educational exercise to create unjustified security, data, or operational risk.

---

# 76. Relationship to Final Stage 3 Integration

This document completes the methodology boundary between real development and educational intelligence.

The remaining Stage 3 document is:

- 06-Superpowers-Integration-and-Engineering-Done.md

The dependency is:

```text id="wca77y"
00-Development-Methodology.md
        ↓
01-Development-Lifecycle.md
        ↓
02-Development-Rigor-and-Planning.md
        ↓
03-Engineering-Quality-and-Verification.md
        ↓
04-Engineering-Artifacts-and-Traceability.md
        ↓
05-Development-Learning-Integration.md
        ↓
06-Superpowers-Integration-and-Engineering-Done.md
```

The final document MUST integrate:

- verified Superpowers capability boundaries;
- the complete Engineering Definition of Done;
- final Stage 3 completion conditions;

without redefining the educational contracts established here.

---

# 77. Explicit Non-Goals

This document does not define:

- teaching algorithms;
- Socratic question templates;
- competency scoring;
- assessment thresholds;
- learning-debt algorithms;
- Automation Level transitions;
- quiz generation;
- Memory persistence technology;
- Decision Engine implementation;
- prompt architecture;
- physical AI agents;
- context-window construction;
- model invocation topology;
- runtime orchestration;
- Superpowers internals;
- Harness implementation.

---

# 78. Compliance

Development-Learning Integration is compliant with this document only if it:

1. preserves real software development as authentic project work;
2. keeps engineering and educational responsibilities distinct;
3. allows educational intervention across applicable lifecycle activities;
4. preserves meaningful learner participation;
5. distinguishes learner independence from engineering rigor;
6. distinguishes learner independence from AI runtime autonomy;
7. treats engineering observations only as candidate educational evidence until Stage 2 evaluates them;
8. preserves assistance attribution where educational interpretation depends on it;
9. avoids treating working software as automatic proof of competency;
10. avoids treating engineering failure as automatic educational failure;
11. preserves Engineering Done separately from Educational Done;
12. keeps project artifacts distinct from authoritative learner memory;
13. preserves Decision Engine, Memory Model, Competency Model, and Stage 2 authority;
14. avoids degrading project quality for educational purposes;
15. does not infer physical agents from logical Pipeline responsibilities;
16. does not assume undocumented Superpowers behavior.

---
