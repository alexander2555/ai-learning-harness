# Integration Methodology

Version: 0.1 Draft

Parent Documents

- 00-Vision.md
- 02-Core-Principles.md
- 07-Competency-Model.md
- 08-Memory-Model.md
- 09-Decision-Engine.md
- 00-Learning-Model.md
- 01-Socratic-Method.md
- 02-Assessment.md
- 03-Competency-Evaluation.md
- 04-Learning-Debt.md
- 05-Automation-Level.md
- 06-Quiz-Strategy.md
- 07-Definition-of-Done.md
- 00-Development-Methodology.md
- 01-Development-Workflow.md
- 02-Change-Management.md
- 03-Documentation-Methodology.md
- 04-Testing-Methodology.md
- 05-Review-Methodology.md

Related Documents

- 07-Compliance-and-Traceability.md
- 08-Development-Definition-of-Done.md
- 09-Development-Validation-Preparation.md
- ADR-001

---

## 1. Purpose

This document defines the methodology for integrating ALH components, capabilities, and external dependencies during development.

Integration methodology establishes how changes crossing responsibility boundaries should be developed, verified, reviewed, and maintained.

It focuses on development discipline at integration boundaries.

It MUST NOT redefine:

- system architecture;
- component responsibilities;
- educational methodology;
- external dependency ownership;
- prompt architecture;
- Harness implementation details;
- Stage 6 Validation.

---

## 2. Integration Objectives

Integration SHOULD provide evidence that connected parts of the system:

- interact according to defined contracts;
- preserve responsibility boundaries;
- handle expected failures;
- maintain required data and state semantics;
- remain compatible with relevant dependencies;
- preserve approved architectural constraints.

Integration SHOULD reduce uncertainty at system boundaries.

---

## 3. Integration Principles

ALH integration SHOULD follow these principles:

- explicit boundaries;
- explicit contracts;
- minimal coupling;
- controlled dependencies;
- observable failures;
- reproducibility;
- backward compatibility where required;
- proportional verification;
- clear ownership.

Integration MUST NOT be used as a reason to blur responsibility boundaries.

---

## 4. Integration Boundaries

An integration boundary exists where independently defined responsibilities interact.

Examples MAY include:

- ALH components;
- persistence boundaries;
- external services;
- Superpowers;
- configuration;
- repository-level interfaces;
- future AI-agent interfaces.

The existence of an integration boundary does not imply a particular technical mechanism.

---

## 5. Responsibility Ownership

Each integration SHOULD have clear ownership.

The owning component SHOULD define:

- what it provides;
- what it requires;
- which assumptions it makes;
- how failures are represented;
- which behavior is under its responsibility.

An integration MUST NOT silently transfer responsibility from one architectural component to another.

---

## 6. Integration Contracts

Where practical, integrations SHOULD have explicit contracts.

A contract MAY define:

- inputs;
- outputs;
- valid states;
- error conditions;
- required invariants;
- compatibility expectations;
- ownership boundaries.

Contracts SHOULD describe externally meaningful behavior.

Implementation details SHOULD NOT become contractual requirements unless intentionally required.

---

## 7. Contract Stability

Integration contracts SHOULD change deliberately.

Changes to a contract SHOULD consider:

- existing consumers;
- dependent components;
- stored data;
- external dependencies;
- tests;
- documentation.

Breaking changes SHOULD be identified explicitly.

The applicable change-management process MUST be followed for material contract changes.

---

## 8. Integration Change Analysis

Before implementing a material integration change, the developer SHOULD identify:

- affected boundaries;
- consumers;
- dependencies;
- failure modes;
- compatibility implications;
- required tests;
- required documentation.

The analysis SHOULD be proportional to the change.

A local implementation change that does not affect an integration boundary does not require heavyweight integration analysis.

---

## 9. Internal Integration

Internal ALH integrations SHOULD preserve the architectural responsibility model.

For example:

```text id="2v9s6h"
Knowledge
    ↓
Knowledge Graph

Competency
    ↓
Competency Model

Learner State
    ↓
Memory Model

Educational Decision
    ↓
Decision Engine

Educational Coordination
    ↓
Agent Pipeline
```

These conceptual responsibilities MUST remain distinct even when implementation components interact directly.

An integration MUST NOT create an implicit alternative source of responsibility.

---

## 10. Knowledge and Competency Integration

Where the Knowledge Graph interacts with the Competency Model, the integration SHOULD preserve the distinction between:

- educational knowledge;
- learner capabilities.

Knowledge SHOULD NOT become equivalent to competency state.

Competency state SHOULD NOT be stored or inferred merely because knowledge exists.

The implementation MAY connect these concepts, but the established conceptual responsibility boundaries remain authoritative.

---

## 11. Competency and Memory Integration

Where competency information interacts with learner memory, the integration SHOULD preserve the distinction between:

- competency definitions;
- learner-specific educational state.

Memory MAY contain observations about competency progression.

Memory MUST NOT redefine the Competency Model.

A learner-specific state MUST NOT silently modify the definition of the competency itself.

---

## 12. Memory and Decision Engine Integration

The Decision Engine MAY consume learner-specific context represented by the Memory Model.

The integration SHOULD preserve the distinction between:

- stored educational state;
- educational decision logic.

Memory SHOULD provide relevant context.

The Decision Engine SHOULD interpret that context according to approved decision responsibilities.

Memory MUST NOT become an implicit Decision Engine.

---

## 13. Decision Engine and Agent Pipeline Integration

The Agent Pipeline coordinates educational behavior.

The Decision Engine provides educational decision-making.

Their integration SHOULD preserve this distinction.

The Agent Pipeline MAY invoke or use Decision Engine capabilities.

It MUST NOT silently redefine the decision model.

Likewise, the Decision Engine MUST NOT become responsible for orchestration merely because the implementation connects the two.

---

## 14. State Machine Integration

Where the conceptual State Machine is implemented, integration SHOULD preserve its role as an educational interaction lifecycle model.

Implementation components MAY participate in multiple states.

A state transition MUST NOT be used to infer responsibilities that belong to another architectural component.

Testing SHOULD verify required transition behavior where state integration is material to correctness.

---

## 15. Superpowers Integration

Superpowers is an external reusable capability.

ALH integration with Superpowers MUST preserve the established architectural boundary.

ALH:

- owns educational behavior;
- may use Superpowers capabilities;
- MUST NOT modify Superpowers;
- MUST NOT treat Superpowers internals as ALH-owned architecture.

Integration changes SHOULD minimize coupling to implementation details of the external dependency.

---

## 16. External Dependencies

External dependencies SHOULD be integrated through explicit boundaries where practical.

The integration SHOULD define:

- dependency purpose;
- required capabilities;
- relevant version assumptions;
- failure behavior;
- compatibility expectations.

The project SHOULD avoid unnecessary dependence on undocumented behavior of external systems.

---

## 17. Dependency Versioning

Material dependency changes SHOULD be evaluated for compatibility.

The evaluation MAY consider:

- breaking changes;
- behavior changes;
- API changes;
- security implications;
- test compatibility;
- documentation impact.

A dependency upgrade MUST NOT be treated as automatically safe merely because existing tests pass.

---

## 18. Failure Handling

Integration failures SHOULD be anticipated where reasonably foreseeable.

Relevant failure categories MAY include:

- unavailable dependency;
- invalid response;
- timeout;
- incompatible version;
- malformed data;
- authentication failure;
- state inconsistency.

Failure behavior SHOULD be explicit enough to support diagnosis and safe recovery.

---

## 19. Partial Failure

Where an integration involves multiple operations, the development approach SHOULD consider partial failure.

The implementation SHOULD define appropriate behavior for cases where:

- one operation succeeds and another fails;
- an external dependency becomes unavailable;
- state is updated only partially;
- retries occur.

The required behavior depends on the integration.

This methodology does not prescribe a universal transaction or recovery mechanism.

---

## 20. Data Integrity Across Boundaries

Integration MUST preserve relevant data invariants.

When data crosses a boundary, the receiving side SHOULD verify assumptions appropriate to its responsibility.

Data SHOULD NOT be accepted solely because it originated from another ALH component.

Validation requirements SHOULD be proportional to the risk of invalid data.

---

## 21. State Consistency

Where multiple components rely on shared educational state, integration SHOULD preserve consistency.

Particular attention SHOULD be given to:

- learner state;
- competency-related observations;
- Learning Debt;
- Automation Level;
- educational decision context.

The three educational dimensions:

```text id="e9g4ny"
Competency State
Automation Level
Learning Debt
```

MUST remain conceptually distinct when integrated.

An integration MUST NOT collapse them into a single implementation value merely for convenience.

---

## 22. Interface Validation

Interfaces SHOULD validate inputs and outputs according to their defined contract.

Validation SHOULD consider:

- required fields;
- valid values;
- structural integrity;
- state constraints;
- compatibility.

The receiving component SHOULD NOT rely exclusively on assumptions about the calling component.

---

## 23. Integration Testing

Material integration boundaries SHOULD have integration tests or other appropriate verification evidence.

Testing MAY verify:

- contract compliance;
- data flow;
- failure behavior;
- dependency interaction;
- state consistency;
- compatibility.

Integration testing SHOULD be proportional to integration risk.

Testing details are governed by:

```text id="4xk1sz"
04-Testing-Methodology.md
```

---

## 24. Integration Test Environments

Integration tests SHOULD use a controlled environment where practical.

The environment SHOULD make relevant dependencies predictable.

External dependencies MAY be:

- isolated;
- simulated;
- stubbed;
- mocked;
- exercised directly.

The appropriate approach depends on what behavior must be verified.

A simulated dependency MUST NOT be treated as proof that the real dependency behaves identically.

---

## 25. Contract Testing

Where an interface is sufficiently important, contract testing MAY be used.

Contract testing is particularly useful when:

- multiple consumers exist;
- interfaces evolve independently;
- compatibility is important;
- external dependencies are involved.

Contract tests SHOULD verify externally meaningful behavior rather than internal implementation details.

---

## 26. Compatibility

Integration changes SHOULD consider compatibility requirements.

Compatibility MAY concern:

- current consumers;
- existing data;
- configuration;
- external services;
- repository conventions.

Where backward compatibility is not required, the change SHOULD make the compatibility break explicit.

---

## 27. Migration and Transition

When an integration requires migration, the development process SHOULD identify:

- existing state;
- target state;
- transition mechanism;
- compatibility period, if any;
- rollback or recovery considerations;
- verification requirements.

Migration MUST NOT assume that existing data or state can be discarded unless that is an explicit and acceptable project decision.

---

## 28. Integration Documentation

Material integration boundaries SHOULD be documented.

Documentation MAY include:

- purpose;
- ownership;
- contract;
- dependencies;
- failure behavior;
- compatibility assumptions.

Documentation SHOULD remain at the appropriate abstraction level.

Implementation-specific details SHOULD be documented only when they are necessary for maintenance.

---

## 29. Integration Review

Integration changes SHOULD receive review appropriate to their risk.

Review SHOULD consider:

- boundary ownership;
- contract correctness;
- dependency assumptions;
- failure handling;
- compatibility;
- tests;
- documentation.

Review methodology is defined by:

```text id="8k2n5p"
05-Review-Methodology.md
```

---

## 30. Integration and Change Management

Material integration changes SHOULD be identified during change analysis.

Changes affecting:

- architectural boundaries;
- external dependencies;
- shared interfaces;
- persistent data;
- educational state

MAY require broader review and verification.

Integration work MUST NOT bypass the applicable change-management process.

---

## 31. Integration and Architectural Decisions

An integration implementation MUST follow accepted architectural decisions.

If implementation reveals that an architectural boundary cannot satisfy a required integration, the issue SHOULD be classified as:

- Observation;
- Candidate ADR;
- Future Evolution.

A developer MUST NOT silently modify the architecture to make an integration easier.

Architectural changes require the applicable ADR process.

---

## 32. Integration and Educational Methodology

Integrations affecting educational behavior MUST preserve the approved Stage 2 methodology.

For example, an integration MUST NOT cause:

```text id="4d2b8q"
Quiz Score
     ↓
Automatic Mastery
```

or:

```text id="s8n1wf"
Learning Debt = 0
     ↓
Automatic Mastery
```

unless such behavior is explicitly established by an approved methodology decision.

Stage 2 remains authoritative for educational semantics.

---

## 33. Integration Observability

Material integrations SHOULD provide sufficient observability for diagnosis.

Relevant information MAY include:

- operation outcome;
- failure category;
- dependency state;
- affected boundary;
- correlation information.

Observability SHOULD avoid exposing unnecessary sensitive information.

---

## 34. Retry Behavior

Retries MAY be used when appropriate.

Retry behavior SHOULD consider:

- whether the operation is safe to repeat;
- failure type;
- retry limits;
- delay strategy;
- duplicate effects.

Retries MUST NOT be introduced merely to conceal integration instability.

When retrying can produce duplicate or inconsistent effects, the behavior MUST be explicitly considered.

---

## 35. Integration Security

Integration boundaries SHOULD be treated as security-relevant surfaces where appropriate.

The development process SHOULD consider:

- authentication;
- authorization;
- trust boundaries;
- input validation;
- sensitive data;
- dependency security;
- failure leakage.

Integration convenience MUST NOT override established security requirements.

---

## 36. Integration with AI-Assisted Development

AI MAY assist with:

- identifying integration dependencies;
- proposing contract tests;
- generating integration test cases;
- analyzing interface changes;
- detecting inconsistent assumptions.

AI-generated integration code and tests MUST be reviewed.

AI MUST NOT invent external contracts or undocumented dependency behavior.

When external behavior cannot be verified, the uncertainty SHOULD be made explicit.

---

## 37. Integration Completion

Integration work MAY be considered development-complete when:

- affected boundaries are identified;
- ownership is clear;
- required contracts are understood;
- compatibility implications are considered;
- relevant integration behavior is tested or otherwise verified;
- failures are appropriately handled;
- required documentation is updated;
- review findings are resolved.

Integration completion does not imply final system validation.

---

## 38. Integration Workflow

The general integration workflow is:

```text id="6g8q2m"
Identify Integration Boundary
        ↓
Identify Owners and Dependencies
        ↓
Define / Confirm Contract
        ↓
Assess Impact and Risk
        ↓
Implement Integration
        ↓
Verify Success and Failure Behavior
        ↓
Run Relevant Integration Tests
        ↓
Review
        ↓
Update Documentation
        ↓
Complete Integration
```

The workflow MAY iterate when new compatibility or failure information is discovered.

---

## 39. Integration Summary

The Integration Methodology establishes integration as a controlled development activity at responsibility boundaries.

The central principle is:

> Integrations MUST preserve explicit ownership, contracts, compatibility expectations, and architectural boundaries.

Integration SHOULD be:

- explicit;
- proportional;
- testable;
- observable;
- failure-aware;
- maintainable.

Integration methodology supports development consistency without redefining ALH architecture or educational methodology.
