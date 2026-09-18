# AI Learning Harness — User Guide

AI Learning Harness (ALH) lets you work on a real software project with an AI coding agent while the agent adapts its assistance to your demonstrated capability.

You do not need to manage ALH's internal learning state, evidence, or assessment yourself.

For detailed architecture and methodology, see [.ai-learning/README.md](.ai-learning/README.md).

## 1. Start with an ALH-Enabled Project

Open your project with the supported AI coding agent after ALH has been initialized and verified.

If you are responsible for setup, verify the ALH instruction set and the
configured Superpowers version before starting normal development.

Do not manually invent learner state or competency records.

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

## 4. You Can State Your Preferred Level of Help

Ordinary requests are enough:

```text
Let me try first.

Give me a hint, not the solution.

Explain what is wrong, but let me fix it.

I am stuck; give me a more direct explanation.

Please show me the solution now.
```

These requests communicate your preference. They do not disable ALH or override its engineering, learning, verification, or safety constraints.

## 5. Finish the Engineering Work Normally

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

## 6. Ask About Your Progress

You can ask:

```text
How am I progressing with API design?

What can I currently do independently?

Where did I need the most help?

What should I practice next?
```

ALH should base answers on available evidence and state. If the available information is insufficient, uncertainty should remain explicit.

## 7. Continue With Real Project Work

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

For the authoritative architecture and methodology, see [.ai-learning/README.md](.ai-learning/README.md).
