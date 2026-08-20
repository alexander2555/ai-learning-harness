import assert from 'node:assert/strict'
import test from 'node:test'

import {
  validateProposedTransitionIntegrity,
  type ProposedEducationalDecision,
  type ProposedTransitionCurrentState,
} from '../proposed-transition-integrity.js'
import { RecordIndex } from '../record-index.js'

const learnerId = 'learner-11111111-1111-4111-8111-111111111111'

const proposedArtifact = 'proposed-decision.json'

const current: ProposedTransitionCurrentState = {
  learner_id: learnerId,
  state_version: 2,
  learner_state: {
    competencies: {
      typescript: 'learning',
    },
  },
}

function proposed(
  overrides: Partial<ProposedEducationalDecision> = {},
): ProposedEducationalDecision {
  return {
    learner_id: learnerId,
    sequence: 3,
    prior_version: 2,
    resulting_version: 2,
    changes: [],
    candidate_evaluations: [
      {
        candidate_id: 'candidate-11111111-1111-4111-8111-111111111111',
      },
    ],
    ...overrides,
  }
}

function candidateIndex(): RecordIndex {
  const index = new RecordIndex()

  index.add({
    id: 'candidate-11111111-1111-4111-8111-111111111111',
    recordType: 'candidate_educational_evidence',
    artifact: '.ai-learning/evidence/records/candidate.json',
  })

  return index
}

test('accepts the next candidate-only proposed Decision', () => {
  assert.deepEqual(
    validateProposedTransitionIntegrity({
      proposedArtifact,
      proposed: proposed(),
      current,
      persistedSequences: [1, 2],
      candidateIndex: candidateIndex(),
    }),
    [],
  )
})

test('expects sequence 1 when no persisted Decision exists', () => {
  assert.deepEqual(
    validateProposedTransitionIntegrity({
      proposedArtifact,
      proposed: proposed({
        sequence: 1,
        prior_version: 0,
        resulting_version: 0,
      }),
      current: {
        ...current,
        state_version: 0,
      },
      persistedSequences: [],
      candidateIndex: candidateIndex(),
    }).filter((finding) => finding.code === 'DECISION_SEQUENCE_MISMATCH'),
    [],
  )
})

test('detects proposed Decision sequence mismatch', () => {
  const findings = validateProposedTransitionIntegrity({
    proposedArtifact,
    proposed: proposed({
      sequence: 4,
    }),
    current,
    persistedSequences: [1, 2],
    candidateIndex: candidateIndex(),
  })

  assert.equal(
    findings.some((finding) => finding.code === 'DECISION_SEQUENCE_MISMATCH'),
    true,
  )
})

test('detects proposed learner identity mismatch', () => {
  const findings = validateProposedTransitionIntegrity({
    proposedArtifact,
    proposed: proposed({
      learner_id: 'learner-22222222-2222-4222-8222-222222222222',
    }),
    current,
    persistedSequences: [1, 2],
    candidateIndex: candidateIndex(),
  })

  assert.equal(
    findings.some((finding) => finding.code === 'LEARNER_ID_MISMATCH'),
    true,
  )
})

test('detects proposed prior-version mismatch', () => {
  const findings = validateProposedTransitionIntegrity({
    proposedArtifact,
    proposed: proposed({
      prior_version: 1,
    }),
    current,
    persistedSequences: [1, 2],
    candidateIndex: candidateIndex(),
  })

  assert.equal(
    findings.some((finding) => finding.code === 'STATE_VERSION_CHAIN_MISMATCH'),
    true,
  )
})

test('requires state-changing proposal to increment version once', () => {
  const findings = validateProposedTransitionIntegrity({
    proposedArtifact,
    proposed: proposed({
      resulting_version: 2,
      changes: [
        {
          domain: 'competency',
          subject: 'typescript',
          previous: {
            established: true,
            value: 'learning',
          },
          resulting: {
            established: true,
            value: 'practicing',
          },
        },
      ],
    }),
    current,
    persistedSequences: [1, 2],
    candidateIndex: candidateIndex(),
  })

  assert.equal(
    findings.some((finding) => finding.code === 'STATE_VERSION_CHAIN_MISMATCH'),
    true,
  )
})

test('checks previous against Current Learner State', () => {
  const findings = validateProposedTransitionIntegrity({
    proposedArtifact,
    proposed: proposed({
      resulting_version: 3,
      changes: [
        {
          domain: 'competency',
          subject: 'typescript',
          previous: {
            established: true,
            value: 'introduced',
          },
          resulting: {
            established: true,
            value: 'practicing',
          },
        },
      ],
    }),
    current,
    persistedSequences: [1, 2],
    candidateIndex: candidateIndex(),
  })

  assert.equal(
    findings.some(
      (finding) => finding.code === 'DECISION_PREVIOUS_VALUE_MISMATCH',
    ),
    true,
  )
})

test('preserves sparse truth in proposed previous comparison', () => {
  const findings = validateProposedTransitionIntegrity({
    proposedArtifact,
    proposed: proposed({
      resulting_version: 3,
      changes: [
        {
          domain: 'educational_done',
          subject: 'foundation',
          previous: {
            established: true,
            value: false,
          },
          resulting: {
            established: true,
            value: true,
          },
        },
      ],
    }),
    current,
    persistedSequences: [1, 2],
    candidateIndex: candidateIndex(),
  })

  assert.equal(
    findings.some(
      (finding) => finding.code === 'DECISION_PREVIOUS_VALUE_MISMATCH',
    ),
    true,
  )
})

test('detects missing proposed Candidate reference', () => {
  const findings = validateProposedTransitionIntegrity({
    proposedArtifact,
    proposed: proposed(),
    current,
    persistedSequences: [1, 2],
    candidateIndex: new RecordIndex(),
  })

  assert.equal(
    findings.some((finding) => finding.code === 'REFERENCE_TARGET_INVALID'),
    true,
  )
})
