## ADR-001

**Separation of Application and Learning Infrastructure**

Status: Accepted

---

Decision:

ALH resides entirely inside:

```text
.ai-learning/
```

Application code remains independent.

```text
src/
tests/
docs/
infra/
```

Responsibilities must never be mixed.

---
