import assert from 'node:assert/strict'
import test from 'node:test'

import { createInitializedLearnerStateRecords } from '../initialization-state.js'

const learnerId = 'learner-11111111-1111-4111-8111-111111111111'

test('creates sparse version-zero Initial and Current Learner State records', () => {
  const records = createInitializedLearnerStateRecords(learnerId)

  assert.deepEqual(records.initial, {
    schema_version: '1.0.0',
    record_type: 'initial_learner_state',
    learner_id: learnerId,
    state_version: 0,
    learner_state: {},
  })

  assert.deepEqual(records.current, {
    schema_version: '1.0.0',
    record_type: 'current_learner_state',
    learner_id: learnerId,
    state_version: 0,
    learner_state: {},
  })
})

test('uses the same supplied learner identity for both canonical state records', () => {
  const records = createInitializedLearnerStateRecords(learnerId)

  assert.equal(records.initial.learner_id, records.current.learner_id)
})

test('does not materialize unestablished educational facts', () => {
  const records = createInitializedLearnerStateRecords(learnerId)

  assert.deepEqual(records.initial.learner_state, {})
  assert.deepEqual(records.current.learner_state, {})
})
