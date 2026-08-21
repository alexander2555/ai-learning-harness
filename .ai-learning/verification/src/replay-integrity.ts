import { isDeepStrictEqual } from 'node:util'

import type {
  SchemaValidArtifact,
  SemanticChange,
  TransitionLearnerState,
} from './cross-record-types.js'
import {
  findTypedArtifact,
  findTypedArtifacts,
  type TypedArtifact,
} from './schema-valid-records.js'
import { applyResult } from './semantic-transition.js'
import type { Finding } from './types.js'

interface InitialLearnerState {
  record_type: 'initial_learner_state'
  learner_state: TransitionLearnerState
}

interface CurrentLearnerState {
  record_type: 'current_learner_state'
  learner_state: TransitionLearnerState
}

interface EducationalDecision {
  record_type: 'educational_decision'
  sequence: number
  changes: SemanticChange[]
}

/**
 * Reconstructs learner state from Initial Learner State plus persisted
 * Educational Decision history and compares the reconstructed state exactly
 * with Current Learner State.
 *
 * This is the WP5 replay boundary.
 *
 * The function deliberately does not revalidate:
 * - Decision sequence integrity;
 * - state-version integrity;
 * - declared `previous` values;
 * - learner identity;
 * - pedagogical correctness.
 *
 * Those objective representation contracts are already handled by WP4.
 */
export function validateReplayIntegrity(
  artifacts: readonly SchemaValidArtifact[],
): Finding[] {
  const initial = findTypedArtifact<InitialLearnerState>(
    artifacts,
    'initial_learner_state',
  )

  const current = findTypedArtifact<CurrentLearnerState>(
    artifacts,
    'current_learner_state',
  )

  if (initial === undefined || current === undefined) {
    // Missing or schema-invalid canonical state already has a local finding.
    // Replay has no safe authority endpoints in this case.
    return []
  }

  const decisions = findTypedArtifacts<EducationalDecision>(
    artifacts,
    'educational_decision',
  ).sort(compareDecision)

  const reconstructed = structuredClone(initial.value.learner_state)

  for (const decision of decisions) {
    for (const change of decision.value.changes) {
      applyResult(reconstructed, change)
    }
  }

  if (isDeepStrictEqual(reconstructed, current.value.learner_state)) {
    return []
  }

  return [
    {
      code: 'STATE_HISTORY_DIVERGENCE',
      artifact: current.artifact,
      message:
        'Current Learner State learner_state does not exactly match ' +
        'deterministic replay of Initial Learner State and persisted ' +
        'Educational Decision history.',
    },
  ]
}

function compareDecision(
  left: TypedArtifact<EducationalDecision>,
  right: TypedArtifact<EducationalDecision>,
): number {
  return (
    left.value.sequence - right.value.sequence ||
    compareText(left.artifact, right.artifact)
  )
}

function compareText(left: string, right: string): number {
  if (left < right) {
    return -1
  }

  if (left > right) {
    return 1
  }

  return 0
}
