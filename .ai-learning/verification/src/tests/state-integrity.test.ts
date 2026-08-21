import assert from 'node:assert/strict'
import test from 'node:test'

import type { SchemaValidArtifact } from '../cross-record-types.js'
import { validateStateIntegrity } from '../state-integrity.js'

const learnerId = 'learner-11111111-1111-4111-8111-111111111111'

function initial(
  learnerState: Record<string, unknown> = {},
): SchemaValidArtifact {
  return {
    artifact: '.ai-learning/state/history/000000-initial-state.json',
    value: {
      record_type: 'initial_learner_state',
      learner_id: learnerId,
      state_version: 0,
      learner_state: learnerState,
    },
  }
}

function current(stateVersion: number): SchemaValidArtifact {
  return {
    artifact: '.ai-learning/state/current/learner-state.json',
    value: {
      record_type: 'current_learner_state',
      learner_id: learnerId,
      state_version: stateVersion,
      learner_state: {},
    },
  }
}

function decision(
  sequence: number,
  priorVersion: number,
  resultingVersion: number,
  changes: unknown[],
): SchemaValidArtifact {
  return {
    artifact: `.ai-learning/state/history/decision-${sequence}.json`,
    value: {
      record_type: 'educational_decision',
      learner_id: learnerId,
      sequence,
      prior_version: priorVersion,
      resulting_version: resultingVersion,
      changes,
    },
  }
}

test('accepts empty initialized v0 state', () => {
  assert.deepEqual(validateStateIntegrity([initial(), current(0)]), [])
})

test('accepts state-changing Decision N to N+1', () => {
  assert.deepEqual(
    validateStateIntegrity([
      initial(),
      current(1),
      decision(1, 0, 1, [
        {
          domain: 'competency',
          subject: 'typescript',
          field: 'state',
          previous: {
            established: false,
          },
          resulting: {
            established: true,
            value: 'learning',
          },
        },
      ]),
    ]),
    [],
  )
})

test('accepts candidate-only Decision N to N', () => {
  assert.deepEqual(
    validateStateIntegrity([initial(), current(0), decision(1, 0, 0, [])]),
    [],
  )
})

test('detects Decision sequence mismatch', () => {
  const findings = validateStateIntegrity([
    initial(),
    current(0),
    decision(2, 0, 0, []),
  ])

  assert.equal(
    findings.some((finding) => finding.code === 'DECISION_SEQUENCE_MISMATCH'),
    true,
  )
})

test('detects state-version mismatch', () => {
  const findings = validateStateIntegrity([
    initial(),
    current(2),
    decision(1, 0, 2, []),
  ])

  assert.equal(
    findings.some((finding) => finding.code === 'STATE_VERSION_CHAIN_MISMATCH'),
    true,
  )
})

test('detects semantic previous mismatch', () => {
  const findings = validateStateIntegrity([
    initial(),
    current(1),
    decision(1, 0, 1, [
      {
        domain: 'competency',
        subject: 'typescript',
        field: 'state',
        previous: {
          established: true,
          value: 'unknown',
        },
        resulting: {
          established: true,
          value: 'learning',
        },
      },
    ]),
  ])

  assert.equal(
    findings.some(
      (finding) => finding.code === 'DECISION_PREVIOUS_VALUE_MISMATCH',
    ),
    true,
  )
})

test('preserves sparse truth across persisted Decisions', () => {
  const findings = validateStateIntegrity([
    initial(),
    current(2),
    decision(1, 0, 1, [
      {
        domain: 'educational_done',
        subject: 'foundation',
        field: 'done',
        previous: {
          established: false,
        },
        resulting: {
          established: true,
          value: false,
        },
      },
    ]),
    decision(2, 1, 2, [
      {
        domain: 'educational_done',
        subject: 'foundation',
        field: 'done',
        previous: {
          established: false,
        },
        resulting: {
          established: true,
          value: true,
        },
      },
    ]),
  ])

  assert.equal(
    findings.some(
      (finding) => finding.code === 'DECISION_PREVIOUS_VALUE_MISMATCH',
    ),
    true,
  )
})

test('uses Initial State as canonical learner identity', () => {
  const findings = validateStateIntegrity([
    initial(),
    current(0),
    {
      artifact: '.ai-learning/memory/learner/a.json',
      value: {
        record_type: 'learner_memory',
        memory_id: 'memory-11111111-1111-4111-8111-111111111111',
        learner_id: 'learner-22222222-2222-4222-8222-222222222222',
      },
    },
  ])

  assert.equal(
    findings.some((finding) => finding.code === 'LEARNER_ID_MISMATCH'),
    true,
  )
})

test('does not invent canonical learner identity without valid Initial State', () => {
  const mismatchedCurrent: SchemaValidArtifact = {
    artifact: '.ai-learning/state/current/learner-state.json',
    value: {
      record_type: 'current_learner_state',
      learner_id: 'learner-22222222-2222-4222-8222-222222222222',
      state_version: 0,
      learner_state: {},
    },
  }

  assert.deepEqual(validateStateIntegrity([mismatchedCurrent]), [])
})
