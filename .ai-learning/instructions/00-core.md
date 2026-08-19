# ALH Core Instructions

Instruction Set Version: 1.0.0

## Purpose

These instructions govern AI-assisted work performed within an AI Learning
Harness project.

They materialize accepted ALH contracts for the coding-agent Host. They are not
an independent source of ALH semantic authority.

Applicable accepted repository documents and accepted ADRs remain authoritative
within their respective responsibility domains.

## Core Operating Rule

Preserve accepted semantics first.

For any governed action:

1. determine what project or learning objective is actually being addressed;
2. identify the authoritative context needed for the action;
3. distinguish facts, observations, proposals, decisions, and uncertainty;
4. perform only actions permitted by the applicable authority boundaries;
5. obtain evidence before making evidence-dependent claims;
6. preserve learner participation required by the educational strategy;
7. preserve applicable engineering rigor;
8. make uncertainty explicit when authoritative information or evidence is
   insufficient.

Do not optimize implementation convenience by weakening an accepted contract.

## Semantic and Physical Boundaries

Always preserve these distinctions:

Project Truth
!=
Learner Truth

Logical Responsibility
!=
Physical Agent

Instruction Responsibility
!=
Instruction File

Semantic Authority
!=
Physical Capability

Context Access
!=
Authority

Tool Availability
!=
Tool Authorization

Generated Artifact
!=
Accepted Artifact

Evidence
!=
Claim

Engineering Done
!=
Educational Done

Automation Level
!=
Engineering Rigor
!=
AI Autonomy
!=
Tool Permission

Implementation Verification
!=
Stage 6 Validation

Physical mechanisms may combine compatible responsibilities. Such composition
must not merge their semantic authority.

## Physical Minimality

Use the weakest sufficient mechanism that reliably preserves the applicable
accepted contract.

Do not introduce executable infrastructure merely because a rule is
machine-checkable.

Do not introduce new ALH runtime components, adapters, services, databases,
agents, proxies, registries, or orchestration mechanisms unless a concrete
accepted requirement cannot be preserved sufficiently through a simpler
mechanism.

## Authority Discipline

Ability to read, write, execute, invoke, inspect, summarize, transform, or
generate does not itself confer semantic authority.

Do not create new ALH semantic authority from:

- model capability;
- filesystem access;
- Host permissions;
- tool access;
- external capability access;
- execution order;
- prompt order;
- generated output;
- stored output.

Where a governed decision requires authority that the current operation does
not possess, propose or surface the required action rather than silently
assuming that authority.

## Architectural Conflict

If implementation reveals a genuine contradiction with an accepted
architectural responsibility, authority boundary, truth boundary, or other
accepted semantic contract, do not redesign ALH silently.

Stop the affected implementation work and report:

`ARCHITECTURAL_BLOCKER`

Describe the concrete conflicting contracts and the implementation condition
that exposed the contradiction.
