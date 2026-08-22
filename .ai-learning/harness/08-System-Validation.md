# ALH System Validation

## Status

Accepted

## Purpose

System validation validates whether the implemented AI Learning Harness operates in real project use in a manner consistent with its Accepted system-level and educational objectives.

ALH system validation evaluates system effectiveness.

It does not redefine Accepted educational semantics, learner-state semantics, evidence semantics, authority boundaries, or implementation-conformance requirements.

System validation begins from an implementation that has completed Implementation Verification and Owner Acceptance.

```text
Implementation Verified
!=
System Validated
```

---

## 1. Validation Question

System validation answers:

> Does ALH operate in real project use in a manner consistent with its Accepted educational objectives, while producing sufficient observable evidence to evaluate evidence-backed learner competency development and preserving the Accepted educational and authority boundaries?

A successful engineering outcome alone cannot answer this question.

```text
Project Success
!=
Learner Competency

Engineering Done
!=
Educational Done

AI Success
!=
Learner Success

Task Completion
!=
Competency Mastery
```

System validation demonstrates observable system behavior and evidence sufficiency within the selected validation scope.

It does not, by itself, establish population-level or experimentally controlled causal educational efficacy.

---

## 2. Validation Scope

System validation validates the following system-level properties:

1. evidence-backed competency progression where progression is claimed;
2. valid educational evidence;
3. adaptive behavior based on learner state;
4. learning mechanisms operating through real project engineering work;
5. learner independence where the applicable competency claim requires it;
6. preservation of Accepted educational and authority boundaries during actual use.

System validation does not repeat Implementation conformance testing except where an existing implementation mechanism is used as an integrity precondition or observation mechanism.

---

## 3. Bounded Validation Scope

For system validation purposes, the minimum bounded validation scope consists of:

```text
one learner
+
one real project context
+
one or more selected competencies
+
one bounded learning/engineering interval
```

This is a validation procedure boundary, not a new ALH domain entity or learner-state concept.

The scope must provide enough observations to evaluate the System validation criteria applicable to the selected competency claims.

A single successful task is not sufficient evidence of competency progression.

The bounded scope does not guarantee that sufficient evidence for every possible competency transition will arise during the validation interval.

---

## 4. Required Initial Observation

Before evaluating progression for a selected competency, the validation process must establish an observable initial learner condition using Accepted ALH mechanisms.

The initial observation must not invent learner truth where evidence is unavailable.

Unknown information remains unknown.

The initial observation should contain only the learner information necessary to evaluate relevant subsequent observations and claims.

---

## 5. Required Validation Dimensions

Where competency progression is claimed, evidence must be evaluated across the Accepted dimensions applicable to that competency and transition.

### Understanding

Can the learner explain the relevant concepts, constraints, and decisions?

### Practical Application

Can the learner apply the competency in real project work?

### Reasoning

Can the learner explain why a solution is appropriate, including relevant tradeoffs?

### Independence

Can the learner perform the relevant work with the degree of independence required by the claimed competency state or transition?

### Consistency

Can the learner demonstrate the capability sufficiently consistently for the claimed competency state or transition?

Not every observation must independently demonstrate every dimension.

The total evidence supporting a progression claim must be sufficient under the Accepted assessment methodology for the specific competency transition being asserted.

The validation process does not introduce numeric thresholds, fixed repetition counts, or additional mastery criteria unless they already exist in Accepted ALH semantics.

---

## 6. Evidence Requirements

The validation process must preserve the Accepted distinctions among:

```text
Observation

Candidate Educational Evidence

Accepted Educational Evidence

Educational Decision

Learner-State Transition
```

This list does not define a new mandatory linear lifecycle among those concepts.

Observations need not automatically become Candidate Educational Evidence.

Candidate Educational Evidence need not automatically become Accepted Educational Evidence.

Accepted Educational Evidence does not automatically require a learner-state transition.

Any Educational Decision or learner-state transition must follow the authority and evidence semantics already defined by the Accepted ALH architecture.

Generated artifacts, Engineering Completion, tool success, host execution, or external capability results do not become Accepted Educational Evidence merely because they exist.

Evidence supporting learner-state change must remain attributable to observable learner behavior or output sufficient under the Accepted assessment methodology.

The validation process must not create an alternative evidence or learner-state authority path.

---

## 7. Competency Progression Criterion

Where system validation evaluates a competency progression claim, that claim passes only when:

1. the initial learner condition is represented without invented learner truth;
2. relevant subsequent evidence is attributable to the learner;
3. the evidence is sufficient under the Accepted assessment methodology for the claimed transition;
4. any resulting Educational Decision is consistent with that evidence;
5. any resulting learner-state transition is consistent with the Educational Decision and Accepted authority model; and
6. the progression is not inferred merely from engineering completion, AI output, validator success, or task completion.

For transitions requiring independence or consistency, evidence must demonstrate those properties to the degree required by the Accepted methodology.

If the bounded validation scope does not produce sufficient evidence for a particular claim, the criterion result is:

```text
INSUFFICIENT_EVIDENCE
```

This does not by itself establish that the learner lacks the competency or that ALH has failed educationally.

---

## 8. Adaptive Behavior Criterion

ALH passes the adaptive-behavior criterion when observable system behavior materially reflects relevant learner state.

For competencies that are still developing, ALH should favor behavior consistent with Accepted mechanisms such as:

```text
explain
guide
question
review
```

For competencies sufficiently established under the Accepted methodology, ALH should be capable of behavior such as:

```text
delegate
verify
review
challenge
```

Validation does not require deterministic wording or a fixed interaction script.

It requires observable evidence that relevant learner state can materially affect educational behavior.

Absence of a particular wording, prompt pattern, or interaction sequence is not itself a failure.

---

## 9. Real-Project Criterion

Validation must occur through meaningful engineering work in a real project context.

The validation scope must provide opportunities for genuine engineering reasoning or application relevant to the selected competency claims.

A synthetic interaction that tests only whether ALH can emit expected educational vocabulary is insufficient.

Production deployment is not required merely to satisfy system validation.

Engineering quality remains relevant, but successful engineering output does not substitute for educational evidence.

---

## 10. Independence Criterion

Where a competency claim requires learner independence, the validation process must include evidence capable of distinguishing learner capability from AI or system capability.

Relevant evidence may include:

- successful work with reduced assistance;
- independent explanation of decisions;
- independent application of the competency;
- recognition and correction of relevant mistakes;
- successful application in a changed context;
- repeated successful application where consistency is required.

The appropriate evidence depends on the selected competency and Accepted assessment requirements.

A single unassisted success does not automatically establish stable independence or mastery.

---

## 11. False-Positive Controls

The validation process must not treat any of the following, when observed alone, as sufficient evidence of learner competency progression:

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

These observations may contribute contextual or engineering evidence where appropriate, but they do not independently establish learner competency.

The validation process must also preserve:

```text
Observed Change
!=
Proven ALH-Caused Change
```

A bounded system validation may establish that ALH operates consistently with its Accepted educational objectives and that evidence-backed learner development can be observed and evaluated through ALH.

It must not convert such observation into a stronger causal claim than the validation design supports.

Missing learner evidence remains missing.

Missing evidence must not be converted into positive or negative competency conclusions.

---

## 12. Authority Preservation

ALH system validation does not grant educational authority to:

```text
validator
CI
host environment
external capability
engineering completion mechanism
generated artifact
validation procedure itself
```

The Accepted ALH educational authority model remains authoritative throughout validation.

If successful validation would require a new educational authority path, the validation process must stop rather than introduce that path implicitly.

---

## 13. Validation Evidence Record

The minimum system validation record must identify, where applicable:

```text
validation context
selected competency or competencies
initial observable learner condition
relevant interactions or observations
Candidate Educational Evidence
Accepted Educational Evidence
Educational Decisions
resulting learner-state changes
evidence of adaptive behavior
evidence of independence or consistency
contradictory or negative observations
criterion results
validation conclusion
known limitations
```

The record must distinguish observed facts from interpretation.

Missing evidence must not be silently reconstructed.

The validation record is evidence for a system validation decision. It does not itself create educational truth outside Accepted ALH authority mechanisms.

---

## 14. Criterion Outcomes

Each applicable system validation criterion must be evaluated as one of:

```text
PASS
FAIL
INSUFFICIENT_EVIDENCE
```

### PASS

Available evidence is sufficient to establish the criterion within the bounded validation scope.

### FAIL

Available evidence materially contradicts or fails a mandatory requirement of the criterion.

### INSUFFICIENT_EVIDENCE

The validation scope did not produce enough evidence to establish either PASS or a substantive FAIL for the criterion.

```text
INSUFFICIENT_EVIDENCE
!=
FAIL

INSUFFICIENT_EVIDENCE
!=
PASS
```

For a mandatory system validation criterion, `INSUFFICIENT_EVIDENCE` prevents an overall `VALIDATED` outcome.

---

## 15. System-Level Pass Conditions

System validation may conclude `VALIDATED` only when the validation evidence supports all applicable mandatory conclusions below.

### A. Evidence Integrity

Educational conclusions are supported by evidence consistent with the Accepted assessment methodology.

### B. Progression Integrity

Where learner-state progression is claimed, it is justified through Accepted Educational Evidence, Educational Decision, and learner-state authority semantics.

### C. Adaptive Effectiveness

ALH demonstrates educational behavior materially responsive to relevant learner state.

### D. Real-Project Applicability

The educational mechanisms operate during meaningful engineering work rather than only in an isolated vocabulary or mechanism demonstration.

### E. Learner/AI Separation

Where learner competency is evaluated, the evidence permits meaningful distinction between learner capability and AI/system capability.

### F. Authority Preservation

No validation result depends on violating Accepted learner-state, evidence, completion, host, or educational-authority boundaries.

No mandatory criterion may have the result:

```text
FAIL
```

or:

```text
INSUFFICIENT_EVIDENCE
```

for system validation to conclude `VALIDATED`.

---

## 16. Failure and Non-Validation Conditions

System validation cannot conclude `VALIDATED` when any mandatory validation property cannot be established with sufficient evidence.

Examples include:

- claimed competency progression without sufficient educational evidence;
- inability to distinguish AI success from learner capability where that distinction is required;
- learner-state mutation based only on Engineering Completion;
- Candidate Educational Evidence treated as automatically accepted;
- claimed mastery without evidence required for independence or consistency;
- system behavior materially ignoring learner state where adaptation is required;
- successful engineering work without sufficient evidence for the educational claim being evaluated;
- validation requiring violation of an Accepted architectural boundary.

A criterion with insufficient evidence is recorded as:

```text
INSUFFICIENT_EVIDENCE
```

rather than as an invented positive or negative conclusion.

If one or more mandatory criteria remain `FAIL` or `INSUFFICIENT_EVIDENCE`, and no architectural contradiction has been established, the overall system validation outcome is:

```text
NOT_VALIDATED
```

`NOT_VALIDATED` therefore does not necessarily mean that ALH has been demonstrated to be ineffective.

It means that the system validation evidence is insufficient to establish `VALIDATED`, or that one or more mandatory criteria failed.

The criterion results must preserve that distinction.

---

## 17. Architectural Blocker Rule

If system validation reveals that an Accepted objective cannot be validated or achieved without changing an Accepted Stage 1–5 architectural contract:

```text
STOP
ARCHITECTURAL_BLOCKER
```

The validation record must identify the contradiction and affected Accepted contract.

The validation process must not redesign the architecture implicitly during validation.

---

## 18. ALH System Validation Outcomes

The system validation outcomes are governance outcomes, not learner competency states.

System validation may conclude with:

```text
VALIDATED
NOT_VALIDATED
ARCHITECTURAL_BLOCKER
```

### VALIDATED

Sufficient evidence supports all applicable mandatory system validation criteria within the bounded validation scope.

### NOT_VALIDATED

Available evidence does not establish ALH system validation success, without demonstrating that an Accepted architectural contract prevents validation or achievement of the objective.

Criterion-level results distinguish substantive failure from insufficient evidence.

### ARCHITECTURAL_BLOCKER

Successful validation or achievement of an Accepted objective requires reconsideration of an Accepted architectural contract.

None of these outcomes mutates learner competency merely by being recorded.

---

## 19. Non-Goals

System validation does not require:

- proving universal educational effectiveness for every learner;
- claiming population-level causal educational efficacy from a bounded validation;
- validating every possible engineering competency;
- establishing statistical population-level educational efficacy;
- introducing a benchmark framework solely for possible future use;
- creating a second learner-state or evidence model;
- creating a second validator;
- adding new educational vocabulary solely for validation;
- defining arbitrary numeric competency thresholds;
- defining arbitrary fixed repetition counts;
- maximizing automation;
- replacing human educational judgment with deterministic technical validation.

The minimum system validation objective is to establish whether the implemented ALH can operate consistently with its Accepted educational and system-level objectives through bounded, evidence-backed real-project use.

---

## 20. Acceptance Boundary

ALH system validation contract acceptance, validation execution, validation outcome, and system validation acceptance remain distinct governance events.

```text
Validation Contract Defined
!=
Validation Contract Accepted

Validation Executed
!=
Validation Passed
!=
Validation Accepted
```

A validation record provides evidence for the system validation decision.

It does not create owner acceptance by itself.
