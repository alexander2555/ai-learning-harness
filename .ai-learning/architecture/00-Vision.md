# AI Learning Harness (ALH)

# Architecture Vision

Version: 0.1 Draft

Parent Documents:

- 06-Knowledge-Graph.md
- 07-Competency-Model.md
- 08-Memory-Model.md
- 04-Agent-Pipeline.md
- 05-State-Machine.md

---

# 1. Purpose

AI Learning Harness (ALH) is an Educational Operating System designed to extend IDE-based AI agents with adaptive learning, mentoring, competency management, and engineering decision support capabilities.

The purpose of ALH is to transform an AI coding agent from a task execution assistant into an adaptive technical mentor, architect, and development partner capable of guiding a developer from beginner level to Strong Middle engineering competence through real-world software development.

ALH exists to solve the gap between AI-assisted code generation and sustainable engineering education.

The system is designed not only to help produce software but also to develop the user's ability to understand, evaluate, and independently create production-quality solutions.

---

# 2. Problem Statement

Modern AI coding agents are increasingly capable of generating functional code, but they typically lack several capabilities required for effective long-term engineering education.

Current limitations include:

- absence of persistent learning context;
- lack of competency tracking;
- inability to distinguish between knowledge gaps and implementation tasks;
- limited understanding of the user's current skill level;
- tendency to provide direct solutions instead of teaching;
- lack of adaptive reduction of assistance;
- inability to connect architectural decisions with learning objectives;
- absence of long-term educational memory.

Traditional educational approaches also have limitations:

- courses are usually linear;
- exercises are often disconnected from real engineering work;
- knowledge acquisition is separated from practical application;
- progress is measured by completion rather than demonstrated competence.

ALH addresses these problems by combining:

- real project development;
- competency-based learning;
- adaptive mentoring;
- AI-assisted engineering workflows;
- persistent knowledge representation;
- continuous assessment.

---

# 3. Vision

ALH is a modular Educational Operating System that enables AI development agents to teach modern software engineering through the process of building real software systems.

The system provides an adaptive layer above existing AI development workflows.

ALH does not replace development agents or workflow engines.

Instead, it manages:

- learning;
- memory;
- competency development;
- engineering decision support;
- quality control;
- assessment;
- autonomy progression.

The final vision of ALH is an AI-powered engineering environment where:

- every development task can become a learning opportunity;
- every architectural decision has educational context;
- every mistake contributes to competency growth;
- every successful implementation increases developer independence.

---

# 4. Educational Philosophy

ALH is based on several core educational principles.

## 4.1 Learning Through Real Work

The primary learning method is project-driven development.

Learning happens through:

Project Need

↓

Engineering Decision

↓

Required Competency

↓

Learning

↓

Implementation

↓

Review

↓

Competency Update

Artificial exercises are avoided unless they serve a justified educational purpose.

---

## 4.2 Competency-Based Learning

ALH does not organize education as a linear course.

Knowledge is represented as a competency graph.

Progress is determined by demonstrated ability to apply knowledge in practical situations.

A competency is considered developed through:

- explanation;
- implementation;
- review;
- repeated successful application.

---

## 4.3 Adaptive Mentoring

The AI agent adjusts its behavior according to the user's current competency state.

For new competencies:

- agent acts primarily as teacher;
- explanations and guidance are prioritized.

For mastered competencies:

- agent gradually transfers responsibility;
- user receives less assistance;
- agent focuses on review and verification.

---

## 4.4 Socratic Method

ALH follows a guided discovery approach.

The default interaction pattern is:

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

The purpose is not only to solve problems but to develop engineering reasoning.

---

## 4.5 Explainable Engineering

Every significant action and decision must be understandable.

ALH avoids:

- unexplained recommendations;
- hidden architectural decisions;
- arbitrary technology choices;
- unsupported best practices.

Every recommendation should have:

- reason;
- trade-offs;
- consequences;
- relevant context.

---

# 5. System Scope

## 5.1 In Scope

ALH is responsible for:

## Learning Management

- competency representation;
- Learning Units;
- learning progress tracking;
- Learning Debt management;
- learning adaptation.

## Agent Intelligence Layer

- agent role selection;
- pipeline coordination;
- educational strategy selection;
- autonomy control.

## Knowledge Management

- competency graph;
- project knowledge;
- learning history;
- architectural context.

## Decision Support

- technology selection guidance;
- architecture decision support;
- learning priority determination.

## Quality Management

- review processes;
- assessment;
- security consideration;
- testing expectations.

---

## 5.2 Out of Scope

ALH is not:

- an IDE;
- a replacement for coding agents;
- a workflow engine;
- a modification of Superpowers;
- a traditional Learning Management System;
- a simple prompt collection;
- an automatic code generation system without educational objectives.

---

# 6. Core Capabilities

ALH provides the following capabilities.

## 6.1 Competency Management

The system maintains a graph of developer competencies.

Each Learning Unit contains:

- competency status;
- automation level;
- Learning Debt;
- relationships;
- application history;
- project references.

---

## 6.2 Adaptive Learning

ALH determines:

- what should be learned;
- when learning should occur;
- how much assistance is required;
- when responsibility can be transferred.

---

## 6.3 Agent Pipeline Coordination

The agent is modeled as a dynamic pipeline rather than a single autonomous entity.

Pipeline components include:

- Intent Analyzer;
- Project Manager;
- Architect;
- Teacher;
- Developer;
- Reviewer;
- Security Auditor;
- Assessor;
- Memory Manager;
- Response Generator.

---

## 6.4 Engineering Memory

ALH maintains persistent memory about:

- developer competencies;
- project decisions;
- previous solutions;
- mistakes;
- learning progress;
- architectural context.

---

## 6.5 Quality Enforcement

ALH promotes industrial engineering practices:

- architecture design;
- testing;
- documentation;
- security;
- reviews;
- maintainability.

---

# 7. Architectural Positioning

ALH operates as an educational intelligence layer integrated with existing AI development workflows.

## The relationship between systems:

```
IDE Environment

↓

AI Coding Agent

↓

Superpowers Workflow Engine

↓

AI Learning Harness

↓

Educational Intelligence Layer
```

Superpowers remains the immutable workflow engine.

ALH does not modify Superpowers.

ALH uses Superpowers as the source of:

- workflows;
- commands;
- templates;
- development processes.

ALH adds:

- educational context;
- competency awareness;
- memory;
- adaptive behavior;
- assessment.

## Repository boundary

```
project-root/

├── .superpowers/
│ Workflow Engine
│
├── .ai-learning/
│ Educational Operating System
│
├── src/
│ Application
│
├── docs/
│ Application Documentation

```

---

# 8. High-Level Operating Model

ALH operates around a continuous learning-development loop.

User Intent

↓

Intent Analysis

↓

Project Context Analysis

↓

Competency Analysis

↓

Learning Strategy Selection

↓

Workflow Execution

↓

Implementation

↓

Review

↓

Assessment

↓

Memory Update

↓

Knowledge Graph Update

Every completed engineering activity may produce:

- new knowledge;
- competency progress;
- reduced Learning Debt;
- updated autonomy level.

---

# 9. Success Criteria

ALH is considered successful when it enables a developer to:

- independently design software solutions;
- understand architectural trade-offs;
- apply engineering best practices;
- work effectively with AI agents;
- maintain production-quality codebases.

System-level success indicators:

- competency graph accurately represents developer growth;
- learning adapts to project requirements;
- assistance decreases as competence increases;
- decisions remain explainable;
- development quality remains consistent.

The target outcome is:

Minimum:

Strong Middle developer capability.

Desired:

Senior-level engineering competence.

---

# 10. Non-Goals

ALH intentionally avoids becoming:

## A Course Platform

Learning is not organized into predefined lessons.

## A Code Generator

The objective is developer growth, not maximum automation.

## A Replacement Engineer

The system develops engineering judgment rather than removing human responsibility.

## A Workflow Alternative

Superpowers remains responsible for workflow execution.

---

# 11. Design Constraints

The following constraints are mandatory.

## Architecture First

System design precedes implementation.

## No Hidden Logic

All decisions must be explainable.

## Immutable Superpowers Integration

Superpowers must not be modified.

## Project-Driven Learning

Learning should emerge from engineering needs.

## Best Practices

Solutions must consider:

- maintainability;
- security;
- testing;
- documentation;
- scalability.

## Adaptive Autonomy

Agent responsibility changes according to competency level.

---

# 12. Future Evolution

ALH architecture should support future expansion.

Potential evolution directions:

- additional IDE integrations;
- additional programming languages;
- advanced competency models;
- improved memory architectures;
- additional assessment strategies;
- expanded decision engines.

Future evolution must preserve the core principles:

- explainability;
- adaptability;
- competency-based learning;
- engineering quality.
