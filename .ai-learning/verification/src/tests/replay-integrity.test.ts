import assert from 'node:assert/strict'
import test from 'node:test'

import type {
  SchemaValidArtifact,
  TransitionLearnerState,
} from '../cross-record-types.js'
import { validateReplayIntegrity } from '../replay-integrity.js'

const learnerId = 'learner-11111111-1111-4111-8111-111111111111'

function initial(
  learnerState: TransitionLearnerState = {},
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

function current(
  learnerState: TransitionLearnerState = {},
): SchemaValidArtifact {
  return {
    artifact: '.ai-learning/state/current/learner-state.json',
    value: {
      record_type: 'current_learner_state',
      learner_id: learnerId,
      state_version: 0,
      learner_state: learnerState,
    },
  }
}

function decision(
  sequence: number,
  changes: unknown[],
  artifact = `.ai-learning/state/history/decision-${sequence}.json`,
): SchemaValidArtifact {
  return {
    artifact,
    value: {
      record_type: 'educational_decision',
      learner_id: learnerId,
      sequence,
      prior_version: 0,
      resulting_version: 0,
      changes,
    },
  }
}

test('replay accepts empty initialized learner state', () => {
  assert.deepEqual(validateReplayIntegrity([initial(), current()]), [])
})

test('replay reconstructs one state-changing Decision', () => {
  assert.deepEqual(
    validateReplayIntegrity([
      initial(),
      decision(1, [
        {
          domain: 'competency',
          subject: 'typescript',
          previous: {
            established: false,
          },
          resulting: {
            established: true,
            value: 'learning',
          },
        },
      ]),
      current({
        competencies: {
          typescript: 'learning',
        },
      }),
    ]),
    [],
  )
})

test('candidate-only Decision does not change replayed learner state', () => {
  assert.deepEqual(
    validateReplayIntegrity([
      initial({
        competencies: {
          typescript: 'introduced',
        },
      }),
      decision(1, []),
      current({
        competencies: {
          typescript: 'introduced',
        },
      }),
    ]),
    [],
  )
})

test('replay applies Decisions by sequence rather than artifact path', () => {
  assert.deepEqual(
    validateReplayIntegrity([
      initial(),
      decision(
        2,
        [
          {
            domain: 'competency',
            subject: 'typescript',
            previous: {
              established: true,
              value: 'introduced',
            },
            resulting: {
              established: true,
              value: 'learning',
            },
          },
        ],
        '.ai-learning/state/history/a.json',
      ),
      decision(
        1,
        [
          {
            domain: 'competency',
            subject: 'typescript',
            previous: {
              established: false,
            },
            resulting: {
              established: true,
              value: 'introduced',
            },
          },
        ],
        '.ai-learning/state/history/z.json',
      ),
      current({
        competencies: {
          typescript: 'learning',
        },
      }),
    ]),
    [],
  )
})

test('replay removes a semantic slot when resulting is not established', () => {
  assert.deepEqual(
    validateReplayIntegrity([
      initial({
        competencies: {
          typescript: 'unknown',
        },
      }),
      decision(1, [
        {
          domain: 'competency',
          subject: 'typescript',
          previous: {
            established: true,
            value: 'unknown',
          },
          resulting: {
            established: false,
          },
        },
      ]),
      current({}),
    ]),
    [],
  )
})

test('replay detects Current Learner State divergence', () => {
  const findings = validateReplayIntegrity([
    initial(),
    decision(1, [
      {
        domain: 'competency',
        subject: 'typescript',
        previous: {
          established: false,
        },
        resulting: {
          established: true,
          value: 'learning',
        },
      },
    ]),
    current({
      competencies: {
        typescript: 'mastered',
      },
    }),
  ])

  assert.deepEqual(
    findings.map((finding) => finding.code),
    ['STATE_HISTORY_DIVERGENCE'],
  )
})

test('replay preserves sparse established false distinction', () => {
  const findings = validateReplayIntegrity([
    initial(),
    current({
      educational_done: {
        foundation: false,
      },
    }),
  ])

  assert.equal(
    findings.some((finding) => finding.code === 'STATE_HISTORY_DIVERGENCE'),
    true,
  )
})

test('replay exact comparison distinguishes absent and empty maps', () => {
  const findings = validateReplayIntegrity([
    initial(),
    current({
      competencies: {},
    }),
  ])

  assert.equal(
    findings.some((finding) => finding.code === 'STATE_HISTORY_DIVERGENCE'),
    true,
  )
})

test('replay does not produce a finding without both canonical endpoints', () => {
  assert.deepEqual(validateReplayIntegrity([initial()]), [])

  assert.deepEqual(validateReplayIntegrity([current()]), [])
})
