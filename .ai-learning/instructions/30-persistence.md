# ALH Persistence Control

## 1. Purpose

This instruction controls all durable ALH state mutation.

Only the Persistence Manager may mutate durable ALH state.

The Persistence Manager is an execution responsibility, not an independent
decision authority. It executes only authorized persistence operations
selected by the ALH control loop.

## 2. Canonical Storage

The canonical durable-state root is:

`.ai-learning/state/`

The canonical layout is:

```text
.ai-learning/state/
├── manifest.json
├── learning-state.json
├── engineering-continuation.json
├── project-context.json
├── project-graph.json
├── evidence/
│   └── <evidence_id>.json
├── proposals/
│   └── <proposal_id>.json
└── journal.jsonl
```

No durable ALH state may be stored outside this directory unless an
explicit external-storage contract is added to the ALH configuration.

All JSON state records use:

```text
schema_version
record_type
record_id
version
created_at
updated_at
```

`record_id` is immutable.

`version` is a monotonically increasing integer starting at `1`.

A record replacement must increment its version by exactly `1`.

## 3. State Records

### 3.1 State Manifest

File:

`.ai-learning/state/manifest.json`

Schema:

```json
{
  "schema_version": "2.1.0",
  "record_type": "alh_state_manifest",
  "record_id": "state-manifest",
  "version": 1,
  "created_at": "<ISO-8601>",
  "updated_at": "<ISO-8601>",
  "initialized": true,
  "state_schema_version": "2.3.0",
  "runtime_dependencies": {
    "superpowers": {
      "repository": "<resolved-from-config-superpowers.source>",
      "revision": "<detected-revision>",
      "version": "<detected-version-or-null>"
    }
  }
}
```

`initialized` is `true` only after successful bootstrap.

### 3.2 Learning State

File:

`.ai-learning/state/learning-state.json`

Schema:

```json
{
  "schema_version": "2.1.0",
  "record_type": "alh_learning_state",
  "record_id": "learning-state",
  "version": 1,
  "created_at": "<ISO-8601>",
  "updated_at": "<ISO-8601>",
  "competencies": [
    {
      "competency_id": "<stable-id>",
      "scope": {
        "type": "project",
        "id": "<stable-scope-id>"
      },
      "state": "unknown",
      "self_assessments": [],
      "active_objective_ids": [],
      "active_learning_unit_ids": [],
      "learning_debt_ids": [],
      "misconception_ids": [],
      "practice_obligation_ids": [],
      "learner_preference_ids": [],
      "evidence_ids": []
    }
  ],
  "active_objectives": [],
  "learning_units": [],
  "learning_debt": [],
  "misconceptions": [],
  "practice_obligations": [],
  "learner_preferences": []
}
```

`competency_id` identifies the competency.

`scope` identifies the context in which the competency state applies.

A competency state applies only to the exact `(competency_id, scope)` pair.

Valid competency states are:

```text
unknown
introduced
learning
practicing
mastered
```

### 3.3 Engineering Continuation

File:

`.ai-learning/state/engineering-continuation.json`

Schema:

```json
{
  "schema_version": "2.1.0",
  "record_type": "alh_engineering_continuation",
  "record_id": "engineering-continuation",
  "version": 1,
  "created_at": "<ISO-8601>",
  "updated_at": "<ISO-8601>",
  "active_activity_id": null,
  "unfinished_work": [],
  "blockers": [],
  "required_context": [],
  "next_relevant_project_activity": null
}
```

### 3.4 Project Context

File:

`.ai-learning/state/project-context.json`

Schema:

```json
{
  "schema_version": "2.1.0",
  "record_type": "alh_project_context",
  "record_id": "project-context",
  "version": 1,
  "created_at": "<ISO-8601>",
  "updated_at": "<ISO-8601>",
  "project_purpose": null,
  "stable_constraints": [],
  "accepted_decisions": [],
  "rationale_references": [],
  "educational_scope": null,
  "stable_assumptions": [],
  "important_context": []
}
```

### 3.5 Evidence

Each evidence record is stored separately:

`.ai-learning/state/evidence/<evidence_id>.json`

Schema:

```json
{
  "schema_version": "2.1.0",
  "record_type": "alh_evidence",
  "record_id": "<evidence_id>",
  "version": 1,
  "created_at": "<ISO-8601>",
  "updated_at": "<ISO-8601>",
  "learner_activity": {
    "actor": "learner",
    "description": "<what the learner actually did>"
  },
  "agent_activity": {
    "actor": "agent",
    "description": "<what the agent did>"
  },
  "engineering_activity": {
    "activity_id": "<activity-id>",
    "description": "<activity>"
  },
  "target_competencies": [
    {
      "competency_id": "<stable-id>",
      "scope": {
        "type": "project",
        "id": "<stable-scope-id>"
      }
    }
  ],
  "assessment_context": {
    "purpose": "<assessment context>",
    "criteria": []
  },
  "artifact_locators": [
    {
      "type": "file",
      "value": "<path>"
    }
  ],
  "timestamp": "<ISO-8601>",
  "provenance": {
    "source": "learner_activity",
    "references": []
  }
}
```

Evidence must preserve the distinction between learner activity,
agent activity, engineering activity, target competency, and assessment
context.

AI-produced work is never converted into learner evidence merely because
it contributed to the engineering result.

### 3.6 Project Graph

File:

`.ai-learning/state/project-graph.json`

Schema:

```json
{
  "schema_version": "2.1.0",
  "record_type": "alh_project_graph",
  "record_id": "project-graph",
  "version": 1,
  "created_at": "<ISO-8601>",
  "updated_at": "<ISO-8601>",
  "entities": [],
  "relationships": []
}
```

Supported relationship types:

```text
REQUIRES
DEPENDS_ON
PRODUCES
APPLIES
PRACTICES
ASSESSES
EVIDENCED_BY
```

### 3.7 Journal

File:

`.ai-learning/state/journal.jsonl`

Each line is one immutable journal entry.

Commit:

```json
{
  "schema_version": "2.1.0",
  "record_type": "alh_journal_entry",
  "record_id": "<journal-entry-id>",
  "version": 1,
  "timestamp": "<ISO-8601>",
  "event": "commit",
  "proposal_id": "<proposal-id>",
  "proposal_type": "<proposal-type>",
  "target_record_ids": [],
  "resulting_versions": [],
  "mutation_summary": [
    {
      "record_id": "<record-id>",
      "field": "<field>",
      "from": "<previous-value-or-null>",
      "to": "<new-value>"
    }
  ],
  "evidence_refs": [],
  "rationale": "<reason for the committed mutation>"
}
```

The `mutation_summary`, `evidence_refs` and `rationale` fields preserve
the committed mutation content and its justification after the staged
proposal is removed by the atomic commit.

Rejection:

```json
{
  "schema_version": "2.1.0",
  "record_type": "alh_journal_entry",
  "record_id": "<journal-entry-id>",
  "version": 1,
  "timestamp": "<ISO-8601>",
  "event": "rejection",
  "proposal_id": "<proposal-id>",
  "proposal_type": "<proposal-type>",
  "reason": "<exact rejection reason>"
}
```

Every commit and every rejection must produce one journal entry.

## 4. Typed Proposals

Roles must not mutate durable state directly.

Every proposal is staged before validation:

`.ai-learning/state/proposals/<proposal_id>.json`

A proposal uses:

```json
{
  "schema_version": "2.1.0",
  "record_type": "alh_proposal",
  "record_id": "<proposal-id>",
  "version": 1,
  "created_at": "<ISO-8601>",
  "producer": "<authorized-role>",
  "proposal_type": "<proposal-type>",
  "target_record_ids": [],
  "expected_versions": {},
  "mutation": {},
  "evidence_refs": [],
  "rationale": "<reason>",
  "status": "staged"
}
```

Supported proposal types are:

```text
Evidence Proposal
Learning Assessment Proposal
Learning State Proposal
Graph Mutation Proposal
Engineering Continuation Proposal
Project Context Proposal
```

`expected_versions` contains the versions observed when the proposal was
created.

A proposal may be committed only if all expected versions still match the
authoritative records.

## 5. Proposal Type Matrix

| Proposal type | Durable target | Authorized producer |
|---|---|---|
| Evidence Proposal | Evidence Ledger | evidence-producing role |
| Learning Assessment Proposal | competency state + assessment-linked evidence references | Assessor |
| Learning State Proposal | self-assessments, objectives, Learning Units, Learning Debt, misconceptions, practice obligations, learner preferences, evidence references | authorized learning-state role |
| Graph Mutation Proposal | Project Graph | project/engineering role |
| Engineering Continuation Proposal | Engineering Continuation | engineering role |
| Project Context Proposal | Project Context | appropriate project role |

`Learning Assessment Proposal` is the only proposal type allowed to change
a competency `state`.

`Learning State Proposal` must not change competency `state`.

## 6. Learning Debt Records

Learning Debt is represented inside the Learning State record.

Each debt entry has:

```json
{
  "debt_id": "<stable-id>",
  "competency_id": "<stable-id>",
  "scope": {
    "type": "project",
    "id": "<stable-scope-id>"
  },
  "type": "<debt-type>",
  "status": "open",
  "description": "<educational obligation>",
  "evidence_refs": [],
  "resolution_criteria": [],
  "created_at": "<ISO-8601>",
  "resolved_at": null
}
```

Allowed status values:

```text
open
resolved
```

Debt is resolved only through an authorized `Learning State Proposal`
containing the required evidence or assessment references.

## 7. Competency State Transitions

The following transitions are the complete canonical state transition
matrix.

| From | To | Allowed condition |
|---|---|---|
| unknown | introduced | competency becomes explicitly known/relevant |
| introduced | learning | learner requires active learning/preparation |
| learning | practicing | learner is ready for substantive practice |
| practicing | mastered | applicable mastery criteria are satisfied |
| practicing | learning | failed/insufficient attempt demonstrates need for further learning |
| practicing | introduced | only when the demonstrated state no longer supports active practice |
| mastered | mastered | relevant reassessment confirms mastery |
| mastered | practicing | relevant reassessment demonstrates insufficient independent performance |
| mastered | learning | relevant reassessment demonstrates a broader learning gap |
| mastered | introduced | only when authoritative evidence establishes that the prior state/scope is no longer applicable |

No other competency-state transition is allowed.

A transition is valid only for the exact `(competency_id, scope)` pair.

The Persistence Manager validates the transition using this table.

## 8. Validation

Persistence Manager must validate, in order:

1. proposal schema;
2. proposal type;
3. producer authority;
4. target record existence;
5. target record type;
6. expected record version;
7. required evidence references;
8. required provenance;
9. allowed mutation;
10. competency-state transition, when applicable;
11. semantic validity.

Invalid proposals are rejected without modifying authoritative state.

## 9. Atomic Commit

A proposal is committed as one logical transaction.

For a proposal affecting multiple records:

1. validate the complete proposal;
2. validate all expected versions;
3. prepare all resulting records;
4. write the prepared records to a transaction staging area;
5. write a commit marker;
6. replace the affected authoritative records;
7. append the journal commit entry;
8. remove the staged proposal.

A proposal is never partially committed.

If commit execution fails before completion, the Persistence Manager must recover
from the transaction staging area and commit marker before accepting another
persistence operation.

## 10. Conflict Handling

If any target record has a version different from the proposal's
`expected_versions`:

```text
proposal → reject
```

The Persistence Manager must not merge, overwrite, or guess the intended
mutation.

The rejection reason must identify the conflicting record and versions.

The Decision Engine then determines the next transition.

The canonical state store is tracked by the repository version control.
Before executing a persistence operation, the Persistence Manager must
synchronize the current worktree with the shared branch so that
`expected_versions` are observed against the most recent committed state.

If a version mismatch originates from another worktree that committed
state first, the proposal is rejected by this section. The affected
proposals are then re-derived against the synchronized authoritative
state. No worktree-local copy of the state store is authoritative.

## 11. Bootstrap and Initialization

ALH initialization is a distinct control-loop stage.

Before normal `Restore`, the Decision Engine determines whether the canonical
state root exists.

If `.ai-learning/state/` does not exist:

```text
INITIALIZE
→ create canonical state layout
→ provision `.superpowers` Git submodule:
   • if repository already tracks the submodule: `git submodule update --init .superpowers`
   • otherwise: add from `superpowers.source` in `config/alh.json` (currently `obra/superpowers`)
     via `git submodule add <source-url> .superpowers`; the resulting checkout
     revision becomes the recorded revision
→ determine current Superpowers revision automatically from the initialized submodule
→ detect Superpowers version from the submodule (tag/version file) if available
→ verify `.superpowers` is available
→ create manifest with `runtime_dependencies.superpowers` populated
→ create empty authoritative state records
→ validate records
→ mark manifest initialized
→ RESTORE
```

Bootstrap creates:

```text
manifest.json
learning-state.json
engineering-continuation.json
project-context.json
project-graph.json
evidence/
proposals/
journal.jsonl
```

The initial `learning-state.json` contains no competency records.

Absence of a competency record means that the competency has not yet been
established as relevant. It must not be silently converted into an invented
competency or state.

Once a competency is explicitly established as relevant, its initial
competency state is `unknown`.

Initialization is complete only after all bootstrap records pass load-time
validation.

The `.superpowers` dependency MUST be initialized as a Git submodule.

Initialization MUST use the submodule revision recorded by the current
repository checkout (the gitlink in the superproject).

ALH MUST NOT require or hard-code a specific Superpowers version or commit.

During initialization, the current Superpowers revision MUST be determined
automatically from the initialized submodule. The Superpowers version
MUST be detected automatically (from tags/version files in the submodule)
and recorded in the manifest.

Initialization MUST fail if `.superpowers` cannot be initialized or is not
available after initialization.

## 12. Load-Time Validation

Restore must validate:

- state root;
- manifest;
- every required state record;
- record type;
- schema version;
- record ID;
- record version;
- timestamp fields;
- internal references;
- competency-state values;
- proposal staging;
- journal consistency.

If validation fails:

```text
RESTORE
→ State Reconciliation
→ corrected typed proposals
→ Persistence Manager
→ RESTORE
```

The agent must not invent or silently repair corrupted state.

## 13. Reconciliation

State Reconciliation is the controlled procedure for resolving persistent
state inconsistency.

It must:

1. identify the authoritative record;
2. identify the inconsistent record or reference;
3. preserve authoritative information;
4. produce corrected typed proposals;
5. submit them to Persistence Manager;
6. validate and commit them;
7. return control to the Decision Engine.

State Reconciliation never directly mutates durable state.

## 14. Persistence Execution Mechanism

The Persistence Manager is the logical persistence role.

The physical I/O executor is the configured Host's filesystem mechanism.

The execution contract must route persistence operations to the Persistence
Manager, which performs filesystem I/O only according to this instruction.

The agent must not invent an alternative storage location, record format,
proposal format, or persistence mechanism.

All durable state records are tracked by the repository version control
and must never be excluded from it. Version control is the durability and
audit substrate for the canonical store; no checkout-scoped or local-only
copy of the state store is permitted.

If the configured Host cannot perform the required atomic persistence
operation, the Persistence Manager must return a persistence failure to the
Decision Engine rather than silently approximating the operation.

## 15. Rejection

On rejection:

- preserve authoritative state;
- write the exact rejection reason to `journal.jsonl`;
- preserve the rejected proposal until the rejection has been journaled;
- do not silently repair or invent the intended mutation;
- return control to the Decision Engine.

## 16. Learning State Authority

The Persistence Manager may commit a competency state change only from an
authorized Learning Assessment Proposal.

The Persistence Manager does not decide whether mastery exists.

The Assessor does not commit the resulting state.

Other Learning State fields are committed through authorized
`Learning State Proposal` operations.

## 17. Evidence

Evidence is separate from Learning State.

Evidence records must preserve sufficient provenance to distinguish:

- what the learner actually did;
- what the agent did;
- which engineering activity was involved;
- which competency was relevant;
- which assessment context applied.

Do not convert AI work into learner evidence.

## 18. Project Graph

The Project Graph is a persistent structural model.

Relevant relationships include:

- REQUIRES
- DEPENDS_ON
- PRODUCES
- APPLIES
- PRACTICES
- ASSESSES
- EVIDENCED_BY

The Graph may inform the Decision Engine.

The Graph does not independently select the next ALH transition.

## 19. No Direct State Mutation

No role may directly:

- rewrite Learning State;
- declare a competency mastered;
- close Learning Debt;
- modify evidence provenance;
- modify continuation state;
- modify project context;
- modify the Project Graph.

All such changes must use the applicable typed proposal path.

## 20. Persistence Completion

A persistence transition is complete only when:

```text
proposal validated
→ authoritative records committed
→ journal entry written
→ staged proposal finalized
→ Decision Engine
```

A successful filesystem write alone does not constitute a completed ALH
persistence transition.
