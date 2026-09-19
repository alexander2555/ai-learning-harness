# AI Learning Harness — User Guide

AI Learning Harness (ALH) lets you work on a real software project with an AI coding agent while the agent adapts its assistance to your demonstrated capability.

You do not need to manage ALH's internal learning state, evidence, or assessment yourself.

For detailed architecture and methodology, see [.ai-learning/README.md](.ai-learning/README.md).

## 1. Start with an ALH-Enabled Project

Open your project with the configured AI coding-agent Host.

On first use, ALH performs its required state initialization automatically,
creating the canonical durable state under `.ai-learning/state/`
(JSON records plus an append-only journal).

You never maintain that state by hand: it changes only through typed
proposals committed by the Persistence Manager.

If you are responsible for setup, verify the ALH instruction set and the
configured Superpowers version before starting normal development.

### Installing the Superpowers Submodule

Superpowers is the external engineering workflow foundation that ALH
builds on. It is an immutable submodule checked out under
`.superpowers/`: you never edit it, and ALH never modifies it.

If the project already tracks it, initialize the checkout:

```bash
git submodule update --init .superpowers
```

When setting up a new ALH-enabled project, add the repository recorded
as `superpowers.source` in `.ai-learning/config/alh.json`
(currently `obra/superpowers`) once:

```bash
git submodule add https://github.com/obra/superpowers.git .superpowers
```

After checking out the sub-repository, check out the version matching `superpowers.tested_identity`
from the same configuration file and confirm it before starting normal development.

If `.superpowers/` is missing, stale, or locally modified:

- restore the pinned version instead of editing the sub-repository;
- never commit local changes to `.superpowers/`;
- if the pinned version cannot be restored, stop and report it instead
  of substituting a different version.

## 2. Give the Agent a Real Engineering Goal

Describe what you actually want to accomplish.

For example:

```text
Implement password reset for this application.

Review this design with me before implementation.

Help me understand this failing test and fix it.

I need to add caching here, but I have not worked with Redis before.
```

You do not need to translate the task into learning objectives.

## 3. Participate When ALH Asks You To

Depending on the activity and your demonstrated capability, the agent may:

* explain a concept;
* ask you to reason about a decision;
* ask you to implement or revise something;
* provide a hint instead of the solution;
* review your work;
* discuss alternatives and trade-offs;
* provide more direct assistance when appropriate.

If the agent asks you to perform part of the work, treat it as part of the engineering task and learning process.

Do not ask the agent to silently bypass learner-owned work when you are expected to demonstrate the relevant competency.

## 4. What Happens Under the Hood (30 Seconds)

You always talk to a single agent. Inside it, the ALH control layer runs a
control loop: the Decision Engine chooses the next step, the Pipeline routes
that step to the responsible role, and the role performs its work. Before
substantive work, an Execution Contract defines who does what, which part is
learner-owned, how much AI assistance is allowed, and how the result is
verified. Afterward, the engineering result is verified, your learner-produced
evidence is assessed where applicable, and durable state is updated only
through the Persistence Manager.

That is why the agent may ask you to reason, implement, review, or explain
something yourself: learner-owned work is part of the engineering task, not
an optional extra.

## 5. You Can State Your Preferred Level of Help

Ordinary requests are enough:

```text
Let me try first.

Give me a hint, not the solution.

Explain what is wrong, but let me fix it.

I am stuck; give me a more direct explanation.

Please show me the solution now.
```

These requests communicate your preference. They do not disable ALH or override its engineering, learning, verification, or safety constraints.

## 6. Finish the Engineering Work Normally

Treat the project as real engineering work.

Use the applicable requirements for:

* implementation;
* testing;
* review;
* security;
* documentation;
* verification;
* other project-specific quality requirements.

A successful engineering result is not automatically evidence that you independently demonstrated the corresponding competency.

## 7. Ask About Your Progress

You can ask:

```text
How am I progressing with API design?

What can I currently do independently?

Where did I need the most help?

What should I practice next?
```

ALH should base answers on available evidence and state. If the available information is insufficient, uncertainty should remain explicit.

## 8. Continue With Real Project Work

Move to the next meaningful engineering activity.

You normally do not need to:

* create artificial exercises;
* edit competency state manually;
* maintain evidence records manually;
* schedule learning activities yourself.

When ALH identifies a relevant learning opportunity inside real project work, participate in the requested activity and continue with the engineering task.

## When Something Seems Wrong

Ask the agent to explain what it is doing and why.

If required project information is missing, provide it rather than expecting the agent to invent it.

If ALH appears to bypass its learning or engineering constraints, stop the affected activity and review the applicable project documentation before continuing.

For the authoritative runtime contract, see [.ai-learning/README.md](.ai-learning/README.md).

For the fundamental goals, purpose, and original architecture description,
see [.ai-learning/docs/ALH - fundamental goals, purpose, and architecture.md](<.ai-learning/docs/ALH - fundamental goals, purpose, and architecture.md>).
