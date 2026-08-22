# ALH Bounded System Validation Scenario

## Status

Accepted

## Purpose

This document defines the minimum bounded execution protocol for validating ALH against the Accepted System Validation contract.

It does not define new educational semantics, learner-state semantics, evidence semantics, competency transitions, or authority mechanisms.

The Accepted ALH architecture and System Validation contract remain authoritative.

This protocol defines how one bounded validation run is instantiated and observed.
The protocol does not require a validation run to be artificially instantiated when suitable real learner and project conditions do not exist.

---

## 1. Validation Objective

The validation run evaluates whether ALH can operate consistently with its Accepted educational objectives during meaningful real-project engineering work while:

- preserving evidence integrity;
- preserving learner-state and educational authority boundaries;
- adapting behavior to relevant learner state;
- distinguishing learner capability from AI/system capability;
- supporting evidence-backed competency progression where sufficient evidence exists.

The run does not require learner progression to occur.

```text
No Progression Observed
!=
Validation Failure

Insufficient Evidence
!=
Learner Incompetence
```

Where progression is claimed, the claim must satisfy the Accepted assessment and learner-state requirements.

---

## 2. Bounded Run Scope

One run uses:

```text
one learner
+
one real project
+
one bounded engineering task
+
one target developing competency
+
one competency with a materially different authoritative learner state
for adaptive comparison
+
one bounded work interval
```

Where naturally available, `learning` and `mastered` provide the preferred minimal contrast, but the validation protocol must not alter learner truth to obtain that pairing.

This scope is procedural only.

It does not introduce a new ALH domain entity.

---

## 3. Scenario Preconditions

Before execution, confirm all applicable preconditions.

### 3.0 Instantiation Decision

Before validation execution begins, determine whether the bounded scenario can be instantiated from real authoritative project conditions.

The pre-execution outcome must be one of:

```text
READY
NOT_INSTANTIABLE
```

READY means that the current project context provides sufficient real inputs to begin the bounded validation run.

NOT_INSTANTIABLE means that the required real validation context is not currently available.

Reasons may include:

no initialized authoritative learner state;
no suitable target competency;
no suitable competency with a materially different authoritative learner state for adaptive comparison;
no suitable real project task;
insufficient opportunity for bounded observation.

Preserve:

```text
NOT_INSTANTIABLE
!=
NOT_VALIDATED
```

NOT_INSTANTIABLE is a pre-execution condition, not a system-validation outcome.

When the scenario is NOT_INSTANTIABLE, do not fabricate learner state, competency state, project work, evidence, or observations in order to begin validation.

No VALIDATED or NOT_VALIDATED conclusion is produced because validation execution has not begun.

### 3.1 Accepted Validation Contract

The current ALH System Validation contract is available and governs this run.

### 3.2 Valid ALH Project State

The project has valid authoritative learner-state artifacts under the Accepted ALH mechanisms.

The validation run must not invent learner state merely to satisfy scenario prerequisites.

### 3.3 Target Competency

Select one existing competency for which the authoritative learner state supports a developing state appropriate for observation.

Preferred minimal scenario:

```text
initial target state:
learning
```

The scenario may observe whether evidence supports:

```text
learning → practicing
```

but must not require this transition to occur.

The target competency must be selected from actual authoritative learner state.

Do not create, assign, promote, downgrade, or otherwise alter a competency or competency state merely to make the validation scenario executable.

If no suitable target competency exists in the current learner state, the scenario is:

```text
NOT_INSTANTIABLE
```

### 3.4 Comparator Competency

Select one existing competency for which authoritative learner state supports a state materially different from the target competency and sufficient to permit meaningful observation of adaptive behavior.

Where naturally available, the preferred minimal comparison is:

```text
target:
learning

comparator:
mastered
```

mastered is preferred for a strong behavioral contrast but is not an artificial prerequisite for validation.

The comparator must be selected from actual authoritative learner state.

Do not assign, promote, downgrade, or otherwise alter competency state merely to create a validation comparator.

If the available learner state does not contain a suitable competency contrast, the scenario is:

```text
NOT_INSTANTIABLE
```

The comparator exists to evaluate adaptive behavior.

It is not selected for progression.

### 3.5 Real Engineering Task

Select one current project task that:

- has genuine project value;
- produces an observable engineering outcome;
- materially exercises the target competency;
- materially exercises the comparator competency;
- requires non-trivial reasoning or application;
- is bounded enough for one validation interval.

Do not invent a synthetic task solely to produce expected educational vocabulary.

The engineering task must arise from a genuine current project need.

Do not create artificial project work solely to satisfy validation criteria or to force exercise of the selected competencies.

If no suitable real project task is currently available, the scenario is:

```text
NOT_INSTANTIABLE
```

Validation should wait for an appropriate real engineering context rather than modify project priorities for the purpose of producing a validation result.

### 3.6 Pre-Execution Check

Validation execution may begin only when all required scenario inputs arise from actual authoritative project conditions.

Confirm:

```text
authoritative initialized learner state
+
suitable target competency
+
suitable materially different comparator competency
+
genuine bounded engineering task
+
sufficient observation opportunity
```

Record:

```text
instantiation outcome:
READY / NOT_INSTANTIABLE

reason:
<TO_BE_RECORDED>
```

If the outcome is:

```text
NOT_INSTANTIABLE
```

stop before validation execution.

Waiting for a real validation context is an acceptable result of the pre-execution check.

---

## 4. Run Instantiation Record

Complete this section before execution.

### Repository

```text
Repository:
<TO_BE_RECORDED>

Validation revision:
<TO_BE_RECORDED>
```

The revision identifies the exact repository state used for this execution record.

It is execution provenance, not part of the durable System Validation contract.

### Learner

```text
learner_id:
<TO_BE_RECORDED>
```

### Target Competency

```text
competency:
<TO_BE_SELECTED>

initial state:
<TO_BE_CONFIRMED>

relevant existing evidence:
<TO_BE_REFERENCED>
```

### Comparator Competency

```text
competency:
<TO_BE_SELECTED>

initial state:
<TO_BE_CONFIRMED>

relevant existing evidence:
<TO_BE_REFERENCED>
```

### Engineering Task

```text
project need:
<TO_BE_RECORDED>

bounded task:
<TO_BE_RECORDED>

expected engineering verification:
<TO_BE_RECORDED>
```

---

## 5. Initial Observation

Before implementation assistance materially begins, obtain a bounded learner observation relevant to the target competency.

The observation should establish only what is actually observable.

Useful prompts may ask the learner to describe:

- the problem to be solved;
- the relevant concept or mechanism;
- the intended approach;
- important constraints;
- expected trade-offs;
- known uncertainties.

Do not convert absence of an answer into invented learner-state truth.

Record:

```text
observed understanding:
<TO_BE_RECORDED>

observed reasoning:
<TO_BE_RECORDED>

uncertainties:
<TO_BE_RECORDED>
```

This observation is not automatically Accepted Educational Evidence.

---

## 6. Target Competency Interaction

The learner performs the portion of the engineering task that materially exercises the target competency.

ALH behavior should remain consistent with the Accepted learner state.

For a developing competency, relevant behavior may include:

```text
explain
guide
question
review
```

The system must not merely take over the target work in a way that prevents observation of learner capability.

Record material interactions only.

```text
ALH educational behavior:
<TO_BE_RECORDED>

learner actions:
<TO_BE_RECORDED>

assistance provided:
<TO_BE_RECORDED>

observable application evidence:
<TO_BE_RECORDED>

observable reasoning evidence:
<TO_BE_RECORDED>
```

---

## 7. Comparator Competency Interaction

During the same real engineering task, observe work that materially exercises the established comparator competency.

ALH should be capable of reducing instructional involvement consistently with the Accepted learner state.

Relevant behavior may include:

```text
delegate
verify
review
challenge
```

The comparator does not require a scripted interaction or zero assistance.

The purpose is to determine whether materially different learner state can produce materially different educational behavior.

Record:

```text
ALH comparator behavior:
<TO_BE_RECORDED>

learner comparator actions:
<TO_BE_RECORDED>

material difference from target interaction:
<TO_BE_RECORDED>
```

---

## 8. Reduced-Assistance Application

After guided target work, provide one naturally related opportunity for the learner to apply the same target competency with reduced assistance.

The changed application should remain part of the real project task.

Possible forms include:

- handling a related edge case;
- applying the same principle in a neighboring component;
- correcting a related defect;
- extending the implementation consistently;
- adapting the solution to a changed constraint.

This step is not a mastery test.

Its purpose is to produce evidence capable of distinguishing learner application from AI-led completion.

Record:

```text
changed application:
<TO_BE_RECORDED>

assistance level:
<TO_BE_RECORDED>

learner result:
<TO_BE_RECORDED>

learner corrections or self-recovery:
<TO_BE_RECORDED>
```

---

## 9. Learner Explanation

Before final educational interpretation, obtain an explanation sufficient to observe relevant reasoning.

Where applicable, ask the learner to explain:

- why the implemented approach was chosen;
- relevant alternatives;
- important trade-offs;
- how the solution would change under a materially different constraint;
- remaining risks or limitations.

Record observations rather than expected answers.

```text
explanation evidence:
<TO_BE_RECORDED>

contradictions or uncertainty:
<TO_BE_RECORDED>
```

---

## 10. Engineering Verification

Verify the engineering result using normal project mechanisms.

Examples may include:

```text
tests
build
static checks
review
runtime verification
```

Record:

```text
engineering verification performed:
<TO_BE_RECORDED>

result:
<TO_BE_RECORDED>
```

Preserve:

```text
Engineering Verification Passed
!=
Learner Competency Established
```

Engineering results may provide context but do not independently establish educational progression.

---

## 11. Educational Evidence Handling

Interpret observations only through existing Accepted ALH mechanisms.

The run must preserve distinctions among:

```text
Observation

Candidate Educational Evidence

Accepted Educational Evidence

Educational Decision

Learner-State Transition
```

No observation automatically advances through these categories.

Record applicable evidence artifacts and decisions.

### Candidate Educational Evidence

```text
candidate evidence:
<TO_BE_RECORDED_OR_NONE>
```

### Accepted Educational Evidence

```text
accepted evidence:
<TO_BE_RECORDED_OR_NONE>
```

### Contradictory Evidence

```text
contradictory evidence:
<TO_BE_RECORDED_OR_NONE>
```

### Educational Decision

```text
decision:
<TO_BE_RECORDED_OR_NONE>
```

### Learner-State Transition

```text
transition:
<TO_BE_RECORDED_OR_NONE>
```

If evidence is insufficient for progression, no progression should be invented.

---

## 12. Criterion Evaluation

Evaluate each mandatory System Validation criterion independently.

Each result must be one of:

```text
PASS
FAIL
INSUFFICIENT_EVIDENCE
```

### A. Evidence Integrity

Question:

> Are educational conclusions supported by observable learner-attributable evidence consistent with the Accepted assessment methodology?

```text
result:
<TO_BE_RECORDED>

evidence:
<TO_BE_REFERENCED>

rationale:
<TO_BE_RECORDED>
```

### B. Progression Integrity

Question:

> Where progression is claimed, is it supported through Accepted evidence, decision, and learner-state authority mechanisms?

If no progression is claimed, evaluate whether the system correctly preserved the absence of sufficient evidence rather than inventing progression.

```text
result:
<TO_BE_RECORDED>

evidence:
<TO_BE_REFERENCED>

rationale:
<TO_BE_RECORDED>
```

### C. Adaptive Effectiveness

Question:

> Did materially different learner states produce materially appropriate differences in educational behavior?

```text
result:
<TO_BE_RECORDED>

target behavior:
<TO_BE_REFERENCED>

comparator behavior:
<TO_BE_REFERENCED>

rationale:
<TO_BE_RECORDED>
```

### D. Real-Project Applicability

Question:

> Did the educational mechanisms operate during meaningful real-project engineering work?

```text
result:
<TO_BE_RECORDED>

evidence:
<TO_BE_REFERENCED>

rationale:
<TO_BE_RECORDED>
```

### E. Learner/AI Separation

Question:

> Is there sufficient evidence to distinguish learner capability from AI/system capability for the educational claims being evaluated?

```text
result:
<TO_BE_RECORDED>

evidence:
<TO_BE_REFERENCED>

rationale:
<TO_BE_RECORDED>
```

### F. Authority Preservation

Question:

> Did the validation run preserve all Accepted learner-state, evidence, completion, host, and educational-authority boundaries?

```text
result:
<TO_BE_RECORDED>

evidence:
<TO_BE_REFERENCED>

rationale:
<TO_BE_RECORDED>
```

---

## 13. False-Positive Check

Before determining the overall outcome, explicitly confirm that validation success is not based solely on any of the following:

```text
successful build
passing tests
green CI
validator success
AI-generated correct solution
Engineering Completion
task completion
tool invocation success
external capability success
```

Record:

```text
false-positive dependency identified:
YES / NO

details:
<TO_BE_RECORDED>
```

If `YES`, the affected criterion cannot pass on that basis alone.

Also preserve:

```text
Observed Change
!=
Proven ALH-Caused Change
```

The run must not claim stronger causal educational efficacy than the bounded design supports.

---

## 14. Overall Outcome

This section applies only after a scenario with pre-execution outcome `READY` has entered validation execution.

A scenario that remains `NOT_INSTANTIABLE` produces no system-validation outcome.

The overall system-validation result must be one of:

```text
VALIDATED
NOT_VALIDATED
ARCHITECTURAL_BLOCKER
```

### VALIDATED

Allowed only when every applicable mandatory criterion is `PASS`.

### NOT_VALIDATED

Used when one or more mandatory criteria are:

```text
FAIL
```

or:

```text
INSUFFICIENT_EVIDENCE
```

and no Accepted architectural contradiction has been established.

### ARCHITECTURAL_BLOCKER

Used when successful validation or achievement of an Accepted objective requires changing an Accepted architectural contract.

Record:

```text
overall outcome:
<TO_BE_RECORDED>

criterion summary:
A. Evidence Integrity: <RESULT>
B. Progression Integrity: <RESULT>
C. Adaptive Effectiveness: <RESULT>
D. Real-Project Applicability: <RESULT>
E. Learner/AI Separation: <RESULT>
F. Authority Preservation: <RESULT>
```

---

## 15. Known Limitations

Record only limitations material to interpretation of this validation run.

Examples may include:

- bounded observation interval;
- selected competency scope;
- insufficient opportunity to observe consistency;
- absence of a progression claim;
- project circumstances limiting adaptive comparison;
- evidence insufficient for a particular competency transition.

```text
known limitations:
<TO_BE_RECORDED>
```

Do not convert a bounded limitation into a stronger system-wide conclusion than the evidence supports.

---

## 16. Architectural Blocker Rule

If execution reveals that an Accepted objective cannot be validated or achieved without changing an Accepted Stage 1–5 contract:

```text
STOP
ARCHITECTURAL_BLOCKER
```

Record:

```text
affected Accepted contract:
<TO_BE_RECORDED>

observed contradiction:
<TO_BE_RECORDED>

why existing mechanisms are insufficient:
<TO_BE_RECORDED>
```

Do not modify Accepted architecture as part of scenario execution.

---

## 17. Run Completion Boundary

Completing this protocol produces validation evidence.

It does not itself create governance acceptance.

```text
Validation Run Completed
!=
Validation Outcome Accepted
```

The recorded outcome must be reviewed separately before any governance conclusion is established.
