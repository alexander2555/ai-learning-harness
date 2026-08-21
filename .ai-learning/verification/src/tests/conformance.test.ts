import assert from 'node:assert/strict'
import path from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

import { currentStateArtifact, initialStateArtifact } from '../artifacts.js'
import { createInitializedLearnerStateRecords } from '../initialization-state.js'
import { loadSchemas, validateAgainstSchema } from '../schemas.js'

const testDirectory = path.dirname(fileURLToPath(import.meta.url))
const repositoryRoot = path.resolve(testDirectory, '../../../..')

const learnerId = 'learner-11111111-1111-4111-8111-111111111111'

test('authoritative learner state uses only the ALH-owned state surface', () => {
  assert.equal(
    initialStateArtifact,
    '.ai-learning/state/history/000000-initial-state.json',
  )
  assert.equal(
    currentStateArtifact,
    '.ai-learning/state/current/learner-state.json',
  )

  for (const artifact of [initialStateArtifact, currentStateArtifact]) {
    assert.ok(artifact.startsWith('.ai-learning/state/'))
  }
})

test('project initialization establishes no learner truth by default', () => {
  const records = createInitializedLearnerStateRecords(learnerId)

  assert.deepEqual(records.initial.learner_state, {})
  assert.deepEqual(records.current.learner_state, {})
})

test('candidate educational evidence is not an authoritative learner-state record', () => {
  const registry = loadSchemas(repositoryRoot)

  const candidate = {
    schema_version: '1.0.0',
    record_type: 'candidate_educational_evidence',
    candidate_id: 'candidate-11111111-1111-4111-8111-111111111111',
    learner_id: learnerId,
    evidence_ids: ['evidence-11111111-1111-4111-8111-111111111111'],
    interpretation: 'Candidate observation only.',
  }

  assert.deepEqual(
    validateAgainstSchema(
      registry,
      'candidateEducationalEvidence',
      candidate,
      'candidate.json',
    ),
    [],
  )

  assert.notDeepEqual(
    validateAgainstSchema(
      registry,
      'currentLearnerState',
      candidate,
      'candidate.json',
    ),
    [],
  )
})

test('engineering completion can be established while educational completion remains unknown', () => {
  const registry = loadSchemas(repositoryRoot)

  const engineeringCompletion = {
    schema_version: '1.0.0',
    record_type: 'engineering_completion',
    completion_id: 'completion-11111111-1111-4111-8111-111111111111',
    outcome: 'established',
    evaluation: 'Engineering obligations are satisfied.',
    supporting_evidence_ids: ['evidence-11111111-1111-4111-8111-111111111111'],
    outstanding_obligations: [],
  }

  const learnerState = {
    schema_version: '1.0.0',
    record_type: 'current_learner_state',
    learner_id: learnerId,
    state_version: 0,
    learner_state: {},
  }

  assert.deepEqual(
    validateAgainstSchema(
      registry,
      'engineeringCompletion',
      engineeringCompletion,
      'engineering-completion.json',
    ),
    [],
  )

  assert.deepEqual(
    validateAgainstSchema(
      registry,
      'currentLearnerState',
      learnerState,
      'learner-state.json',
    ),
    [],
  )

  assert.equal(
    Object.hasOwn(learnerState.learner_state, 'educational_done'),
    false,
  )
})

test('educational completion does not imply engineering completion', () => {
  const registry = loadSchemas(repositoryRoot)

  const learnerState = {
    schema_version: '1.0.0',
    record_type: 'current_learner_state',
    learner_id: learnerId,
    state_version: 1,
    learner_state: {
      educational_done: {
        objective: true,
      },
    },
  }

  assert.deepEqual(
    validateAgainstSchema(
      registry,
      'currentLearnerState',
      learnerState,
      'learner-state.json',
    ),
    [],
  )

  assert.notDeepEqual(
    validateAgainstSchema(
      registry,
      'engineeringCompletion',
      learnerState,
      'learner-state.json',
    ),
    [],
  )
})

test('engineering completion cannot be represented as a competency mutation', () => {
  const registry = loadSchemas(repositoryRoot)

  const engineeringCompletion = {
    schema_version: '1.0.0',
    record_type: 'engineering_completion',
    completion_id: 'completion-11111111-1111-4111-8111-111111111111',
    outcome: 'established',
    evaluation: 'Engineering obligations are satisfied.',
    supporting_evidence_ids: ['evidence-11111111-1111-4111-8111-111111111111'],
    outstanding_obligations: [],
  }

  assert.notDeepEqual(
    validateAgainstSchema(
      registry,
      'educationalDecision',
      engineeringCompletion,
      'engineering-completion.json',
    ),
    [],
  )
})
