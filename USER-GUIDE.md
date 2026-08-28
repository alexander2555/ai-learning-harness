# AI Learning Harness — User Guide

AI Learning Harness (ALH) turns an IDE coding agent into an adaptive development and learning partner.

You work on real software. The agent helps you build it while adapting its guidance to what you currently demonstrate.

You do not need to manage ALH's internal learning state or assessment mechanisms yourself.

For an overview of ALH and its architecture, see [`.ai-learning/README.md`](.ai-learning/README.md).

## 1. Start with an ALH-Enabled Project

Open an initialized ALH project with a supported IDE coding agent.

If you are starting from a fresh, uninitialized ALH template, have the project initialized and verified using the ALH setup
procedure. If your coding agent is able to perform project setup, you may ask it to do this for you.
If project setup is your responsibility, follow the initialization instructions in [`.ai-learning/verification/README.md`](.ai-learning/verification/README.md).

Once the project is initialized and technically valid, normal ALH use happens through your coding agent.

> **Important:** Initialization creates the learner identity needed by ALH. It does not assume anything about what you already know.
>
> Authority: [`.ai-learning/verification/README.md`](.ai-learning/verification/README.md)

## 2. Start a Development Session

Tell the coding agent what real engineering goal you want to work on.

You do not need to activate ALH separately. In an ALH-enabled project, the agent is
expected to apply the repository's ALH instructions while working with you.

A good first message can be as simple as:

    Help me build the initial structure for this application.

    I want to implement authentication. Work with me through the design first.

    This is unfamiliar to me. Guide me, but let me attempt the implementation.

If you want to make your preferred form of participation explicit, you can use ordinary
language such as:

    Let me try first.

    Give me a hint, not the solution.

    Ask me questions before correcting this.

    Explain what is wrong, but let me fix it.

    I am stuck; give me a more direct explanation.

    Please show me the solution now.

These are interaction cues, not ALH commands. They do not turn ALH on or off and do not
change ALH's educational authority or engineering requirements.

### When your attempt is wrong

If your implementation or reasoning contains a useful learning mistake, the agent should
normally avoid replacing it immediately with the finished answer.

A typical interaction may be:

    You implement or propose something.
        ↓
    The agent identifies the problem or consequence.
        ↓
    The agent asks you to inspect or reason about it.
        ↓
    You revise the solution.
        ↓
    The agent increases assistance only if needed.

You can always ask for more direct help when you need it.

## 3. Work on the Real Project

Develop the solution with the agent.

Depending on the task and your demonstrated experience, the agent may:

- explain an unfamiliar concept;
- ask you to reason about a decision;
- give a hint instead of an immediate solution;
- ask you to implement or revise something;
- discuss alternatives and trade-offs;
- review your work;
- provide more direct help when appropriate.

This variation is intentional. As you demonstrate greater capability, the agent can reduce assistance and transfer more responsibility to you.

> **Important:** Stay involved in the engineering work. ALH is designed to develop your ability to understand, evaluate, and independently create solutions—not only to produce working code.
>
> Authority: [`.ai-learning/architecture/00-Vision.md`](.ai-learning/architecture/00-Vision.md)

## 4. Finish the Engineering Work Normally

Treat the project as real engineering work.

Use the project's normal expectations for implementation, testing, review, security, documentation, and other applicable quality checks. The learning process does not replace engineering rigor.

When the engineering task is complete, the agent may still distinguish that result from what you personally demonstrated during the work.

> **Important:** Completing an engineering task does not necessarily mean that you have demonstrated the corresponding skill.
>
> Authority: [`.ai-learning/methodology/07-Definition-of-Done.md`](.ai-learning/methodology/07-Definition-of-Done.md)

## 5. Ask About Your Progress

You can ask the agent about your learning progress in normal language.

For example:

```text
How am I progressing with API design?
```

```text
What am I currently able to do independently?
```

```text
Where did I need the most help on this task?
```

```text
What should I focus on next?
```

The agent's answer is limited to what your current learning record
and observed work support. It may identify uncertainty instead of
making a stronger claim.

> **Important:** A successful implementation alone is not proof that you have learned the underlying skill. ALH keeps engineering results and demonstrated learning separate.
>
> Authority: [`.ai-learning/methodology/02-Assessment.md`](.ai-learning/methodology/02-Assessment.md)

## 6. Continue with Real Work

Move on to the next meaningful project task.

ALH is designed around learning through real software development rather than a fixed sequence of lessons. New engineering needs can become learning opportunities, and the agent can adapt its level of guidance as your demonstrated capabilities develop.

You normally do not need to create artificial exercises, manually update competency records, or manage educational evidence.

If the agent asks you to explain a decision, attempt part of an implementation, review a solution, or solve something with less assistance, treat that as part of the learning process rather than an interruption to it.

## When Something Seems Wrong

Ask the agent to explain what it is doing and why.

ALH decisions are intended to remain explainable. If the agent lacks enough information about your learning state, it should preserve that uncertainty rather than invent an answer.

For conceptual details and links to the authoritative ALH documents, see [`.ai-learning/README.md`](.ai-learning/README.md).
