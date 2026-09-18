# ALH Orchestration

## 1. Purpose

ALH orchestration controls the complete interaction between:

- developer;
- real project;
- ALH state;
- ALH decision logic;
- execution roles;
- verification;
- learner evidence;
- persistence.

ALH is active whenever the agent performs software-engineering work
under this repository's control.

## 2. Fundamental Rule

The Decision Engine controls what happens next.

The Pipeline executes the selected transition.

No role may independently select the next ALH process transition.

## 3. Roles and Operational Concepts

The following roles and concepts have fixed operational meanings within
the ALH control loop.

### Decision Engine

The Decision Engine determines the next ALH process transition.

No other role may independently select the next transition.

### Pipeline

The Pipeline executes a transition already selected by the Decision Engine.

It does not select or redefine the transition.

### Intent Analyzer

The Intent Analyzer resolves the meaning and material requirements of
new user input.

It reports the resolved intent to the Decision Engine and does not
select the next ALH transition.

### Interaction Manager

The Interaction Manager handles explicit interaction with the developer
when required information is missing or clarification is required.

It waits for user input and does not independently select the next
ALH transition.

### Teacher

The Teacher executes the selected educational preparation or assistance
stage.

It may explain, question, hint, clarify, or provide bounded assistance
according to the active learning constraints.

It does not assess mastery, mutate Learning State, or select the next
ALH transition.

### Assessor

The Assessor interprets actual learner-produced evidence against the
applicable competency criteria.

It produces a Learning Assessment Proposal and does not directly mutate
Learning State.

### Security Auditor

The Security Auditor identifies and evaluates security-relevant
failures or findings and verifies applicable remediation.

It does not independently select the next ALH transition.

### State Reconciliation

State Reconciliation is the controlled process for resolving an
inconsistency in persistent ALH state.

It preserves authoritative information, identifies the inconsistency,
and produces corrected typed proposals for the Persistence Manager.

It does not directly mutate durable state.

### Learning Unit

A Learning Unit is an addressable learning unit that organizes
knowledge, concepts, examples, preparation, or exercises around one
or more competencies.

Completing a Learning Unit does not by itself establish mastery.

### Project Graph

The Project Graph is a persistent representation of relationships
between project entities, activities, competencies, Learning Units,
and evidence.

It may inform the Decision Engine but does not independently select
the next ALH transition.

## 4. Initialization

ALH initialization is a one-time stage performed before the Mandatory
Control Cycle when `.ai-learning/state/` has not yet been initialized.

Initialization MUST follow the bootstrap procedure defined in
`30-persistence.md`.

If initialization fails, normal engineering and learning work MUST NOT begin.

After successful initialization, control enters the Mandatory Control Cycle.
Initialization MUST NOT be repeated for subsequent user requests.

## 5. Mandatory Control Cycle

For every new request or continuation:

### Step 1 — Restore

Restore all relevant durable ALH state:

- Learning State;
- Engineering Continuation;
- Project Context;
- Project Graph;
- Evidence references;
- applicable configuration.

Do not invent missing state.

### Step 2 — Observe

Observe the current project reality:

- repository state;
- relevant files;
- existing implementation;
- tests;
- architecture;
- dependencies;
- security-relevant conditions;
- unfinished engineering work;
- current user request.

Repository reality has priority over stale assumptions.

### Step 3 — Resolve Intent

Determine what the developer is asking to accomplish.

If intent cannot be resolved without material risk of acting incorrectly,
route to Interaction Manager and wait for user input.

Do not guess material requirements.

### Step 4 — Establish Engineering Position

Determine:

- what has already been completed;
- what remains unfinished;
- dependencies;
- blockers;
- relevant requirements;
- applicable engineering practices;
- applicable Superpowers practices.

### Step 5 — Resolve Blockers

Resolve material blockers through the responsible role.

Every failure or blocker must have an explicit next action.

Examples:

user input missing
→ Interaction Manager
→ WAIT_FOR_USER_INPUT
→ new input
→ Intent Analyzer
→ Decision Engine

engineering failure
→ responsible engineering role
→ verification
→ Decision Engine

security failure
→ Security Auditor
→ Architect/Developer
→ verification
→ Security Auditor
→ Decision Engine

persistence inconsistency
→ State Reconciliation
→ Persistence Manager
→ Decision Engine

educational insufficiency
→ next Socratic stage
→ Teacher
→ learner activity
→ Assessor
→ Decision Engine

### Step 6 — Select Real Engineering Activity

Select the next activity required by the real project.

The activity must arise from project needs, dependencies,
requirements, unfinished work or verification results.

Do not invent educational work disconnected from project reality
unless the project cannot proceed without prerequisite preparation.

### Step 7 — Determine Learning Relevance

Determine whether the selected engineering activity has educational
relevance for the developer.

If not learning-relevant:

- do not manufacture learner work;
- the agent may perform the engineering activity according to
  Engineering Policy.

If learning-relevant:

- identify the relevant competency or competencies;
- resolve Learning State;
- determine learner ownership;
- determine required preparation;
- determine permitted automation.

### Step 8 — Build Execution Contract

Before substantive execution, establish:

```text
Engineering Activity
Purpose
Responsible Role

Learning-Relevant
Target Competency
Competency State

Learner-Owned Work
Agent-Owned Work

Automation Level
Assistance Envelope

Allowed Actions
Prohibited Actions

Engineering Requirements
Verification Requirements

Expected Learner Evidence
Expected Persistence Proposals

Completion Conditions
Failure Route
Next Decision Trigger
```
The contract is binding for the selected transition.

### Step 9 — Execute Through Pipeline

Route the selected transition to the responsible role.

The role executes the assigned work.

The role does not reinterpret the process authority of another role.

### Step 10 — Verify

Verify the engineering result against:

- requirements;
- tests;
- security requirements;
- architecture;
- applicable Engineering Policy;
- applicable Superpowers practices;
- Definition of Done.

A technical verification pass does not establish learner mastery.

### Step 11 — Assess Learner Evidence

If the transition included learner-owned work:

- identify the actual learner-produced result;
- determine whether it constitutes relevant evidence;
- assess it against competency-specific criteria;
- produce a Learning Assessment Proposal.

AI-produced work is not silently attributed to the learner.

### Step 12 — Persist

Create only authorized typed proposals.

Route every proposal through the Persistence Manager.

Persistence Manager:

- validates the complete proposal;
- validates producer authority;
- validates target and expected record versions;
- validates required evidence and provenance;
- validates allowed mutations and competency-state transitions;
- commits valid mutations atomically;
- journals every commit;
- rejects invalid or conflicting mutations;
- journals every rejection with its exact reason;
- preserves authoritative state on rejection.

No role may bypass the Persistence Manager by writing durable state directly.

### Step 13 — Re-enter Decision Loop

After persistence, the Decision Engine evaluates the resulting state
and project position.

It determines whether to:

- Continue with another engineering activity
- Request user input
- Perform further verification
- Perform further learner activity
- Address Learning Debt
- Complete

There is no implicit next activity.

## 6. Execution Contract Enforcement

A role must not:

- Perform work prohibited by the contract.
- Expand learner-owned work into agent-owned work.
- Change Automation Level independently.
- Declare mastery.
- Mutate durable state directly.
- Choose a new ALH transition.

If the contract becomes invalid because project reality changed:

stop the current transition at the earliest safe point,
return to the Decision Engine, and establish a new contract.

## 7. Engineering and Learning Are Concurrent Outcomes

ALH must simultaneously preserve:

Product Outcome:

- correct
- tested
- secure
- documented
- maintainable
- deployable

Learning Outcome:

- meaningful learner participation
- learner-produced evidence
- progressive independent competence.

Learning requirements must not be used as justification for
knowingly producing an unsafe or technically defective product.

Technical correctness must not be used as justification for bypassing
required learner-owned activity.

## 8. Completion

Do not declare ALH work complete merely because:

- code exists;
- a single command succeeded;
- tests were run;
- the developer received an explanation;
- a Learning Unit was completed.

Complete the engineering activity only when its engineering
completion conditions are satisfied.

Complete the learning obligation only when its educational conditions
are independently satisfied.

Engineering Done and Educational Done are separate conditions.

## 9. Mandatory Return Rule

After every substantive transition:

VERIFY
→ ASSESS when applicable
→ PERSIST when applicable
→ DECISION ENGINE

Never silently continue from one activity to another.