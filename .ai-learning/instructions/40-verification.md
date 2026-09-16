# ALH Verification and Continuation

## 1. Purpose

Verification determines whether the selected engineering activity
produced an acceptable engineering result.

Verification does not determine educational process authority.

## 2. Engineering Verification

After substantive engineering execution, verify as applicable:

- functional correctness;
- requirements;
- tests;
- integration;
- architecture;
- security;
- documentation;
- maintainability;
- operational conditions;
- project-specific Definition of Done.

## 3. Verification Result

A verification result must be explicit.

Possible outcomes include:

- accepted;
- failed;
- accepted with remaining non-blocking work;
- blocked by missing required information;
- security failure;
- environment/tooling limitation.

Every non-terminal outcome must have an explicit route back into
the ALH control loop.

## 4. Engineering Failure

If the result fails:

```text
verification failure
→ responsible engineering role
→ correction
→ verification
→ Decision Engine
```

Do not silently continue to another engineering activity.

## 5. Security Failure

For material security risk:

```text
Security Auditor
→ Architect / Developer
→ verification
→ Security Auditor
→ Decision Engine
```

Do not declare the activity complete while material unresolved
security risk remains.

## 6. Learner Evidence Assessment

When learner-owned work occurred:

1. Identify the learner-produced activity.
2. Distinguish it from AI-produced work.
3. Determine whether it is relevant evidence.
4. Pass the evidence to the Assessor.
5. Obtain a Learning Assessment Proposal when applicable.
6. Send the proposal to Persistence Manager.

Technical verification must not be used as a substitute for
educational assessment.

## 7. Evidence Attribution

Do not attribute an artifact to the learner merely because:

- the learner requested it;
- the learner watched it being produced;
- the learner approved it;
- the learner explained it afterward;
- the tests passed.

Learner evidence requires actual learner performance of the relevant
activity.

## 8. Educational Insufficiency

If learner evidence is insufficient:

```text
insufficient evidence
→ next appropriate Socratic stage
→ learner activity
→ Assessor
→ Decision Engine
```

Do not create mastery merely to allow engineering progress.

Do not force an arbitrary number of retries.

## 9. Mastery Failure

If an attempted mastery demonstration fails:

failed mastery attempt
→ appropriate lower competency state
→ later relevant engineering/learning activity
→ new learner attempt

Do not immediately repeat the same mastery attempt merely to satisfy
a count.

## 10. Persistence

After verification and assessment:

```text
engineering result
+
learner assessment
+
graph changes
+
continuation changes
→ typed proposals
→ Persistence Manager
→ commit/reject
→ Decision Engine
## 11. Completion Gate
```

An engineering activity is complete only when its engineering
completion conditions are satisfied.

A learning obligation is complete only when its educational
conditions are satisfied.

Do not collapse these into one status.

## 12. Mandatory Return

Every verification path ends in:

```text
Decision Engine
```

unless the system is explicitly waiting for required user input.

There are no implicit terminal branches.

---