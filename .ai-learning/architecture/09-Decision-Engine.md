# Decision Engine

Status: Accepted
Version: 1.0

Parent Documents:

- 03-System-Architecture.md
- 04-Agent-Pipeline.md

---

# Purpose

The Decision Engine defines the conceptual responsibility for educational decision-making within the AI Learning Harness (ALH).

Its purpose is to interpret the current educational context and determine appropriate educational actions while remaining independent of implementation, execution strategy, and individual AI agents.

The Decision Engine describes _how educational context is interpreted_, rather than _how educational knowledge is represented_ or _how learning activities are executed_.

---

# Objectives

The Decision Engine SHOULD:

- support adaptive learning;
- interpret educational context consistently;
- produce explainable educational decisions;
- preserve separation of architectural responsibilities;
- remain implementation-independent.

The Decision Engine MUST NOT define educational knowledge, learner memory, or instructional content.

---

# Scope

The Decision Engine defines the conceptual responsibility for:

- interpreting learner context;
- selecting educational direction;
- supporting adaptive learning;
- prioritizing educational objectives;
- coordinating educational progression.

It does not define:

- educational knowledge;
- competencies;
- learner memory;
- prompt construction;
- runtime orchestration;
- implementation details.

---

# Architectural Role

The Decision Engine is responsible for interpreting the current educational situation using the conceptual models defined by the architecture.

It consumes educational context from multiple architectural sources and determines the most appropriate educational direction.

The Decision Engine provides educational intent rather than implementation behavior.

---

# Decision Inputs

The Decision Engine MAY consider information originating from:

- the Knowledge Graph;
- the Competency Model;
- the Memory Model;
- learner intent;
- current educational objectives;
- assessment outcomes.

These inputs remain owned by their respective architectural components.

The Decision Engine does not modify their definitions.

---

# Educational Decisions

Educational decisions MAY include determining:

- appropriate learning objectives;
- prerequisite reinforcement;
- competency prioritization;
- suitable Learning Units;
- review opportunities;
- progression readiness.

These decisions are conceptual educational recommendations.

They do not prescribe implementation.

---

# Adaptive Learning

Adaptive learning is achieved through interpretation of educational context rather than hard-coded educational sequences.

The Decision Engine SHOULD adapt recommendations according to:

- demonstrated competencies;
- educational gaps;
- prerequisite relationships;
- learner progress;
- educational continuity.

Adaptation MUST remain explainable.

---

# Explainability

Educational decisions SHOULD be traceable to observable educational context.

Whenever possible, recommendations SHOULD reference:

- relevant competencies;
- prerequisite relationships;
- learner observations;
- educational objectives.

The Decision Engine SHOULD avoid opaque reasoning.

---

# Relationship to Knowledge Graph

The Knowledge Graph defines educational knowledge.

The Decision Engine interprets that knowledge within the learner's educational context.

The Decision Engine MUST NOT modify the Knowledge Graph.

---

# Relationship to Competency Model

The Competency Model defines educational capabilities.

The Decision Engine uses competencies to determine educational priorities and progression.

Competency definitions remain independent of decision-making.

---

# Relationship to Memory

Memory provides learner-specific educational observations.

The Decision Engine interprets those observations to support adaptive educational decisions.

Memory remains the source of learner context.

The Decision Engine does not redefine learner state.

---

# Relationship to Assessment

Assessment produces educational evidence.

The Decision Engine MAY use assessment outcomes to guide subsequent educational decisions.

Assessment remains responsible for evaluation.

Decision-making remains responsible for educational interpretation.

---

# Relationship to Agent Pipeline

Within the conceptual Agent Pipeline, educational decisions influence the responsibilities performed by subsequent educational components.

The Decision Engine coordinates educational direction without assuming responsibility for execution.

Pipeline execution remains defined separately.

---

# Relationship to State Machine

The Decision Engine operates across multiple conceptual stages of the educational lifecycle.

Examples include:

- Context Analysis;
- Learning Strategy;
- Review;
- Assessment interpretation.

The State Machine defines educational progression.

The Decision Engine defines educational interpretation.

These responsibilities remain distinct.

---

# Decision Principles

Educational decisions SHOULD be:

- competency-oriented;
- evidence-informed;
- learner-centered;
- explainable;
- proportional to learner needs;
- consistent with educational objectives.

The Decision Engine SHOULD favor educational clarity over unnecessary complexity.

---

# Architectural Independence

The Decision Engine is a conceptual architectural responsibility.

It MUST remain independent of:

- AI model capabilities;
- prompt design;
- storage technology;
- execution environment;
- implementation language.

Multiple implementations MAY satisfy the same architectural responsibility.

---

# Constraints

The Decision Engine MUST NOT:

- redefine educational knowledge;
- redefine competencies;
- replace learner memory;
- perform educational assessment;
- prescribe implementation;
- contain prompt definitions;
- contain agent-specific implementation logic.

Its responsibility is limited to interpreting educational context and determining conceptual educational direction.

---

# Cross References

This document is conceptually related to:

- 04-Agent-Pipeline.md
- 05-State-Machine.md
- 06-Knowledge-Graph.md
- 07-Competency-Model.md
- 08-Memory-Model.md
- 10-Superpowers-Integration.md

Together, these documents define how educational knowledge, learner capabilities, learner state, and adaptive educational decision-making interact while preserving clear separation of architectural responsibilities.
