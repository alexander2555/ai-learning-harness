import type {
  SemanticChange,
  TransitionLearnerState,
} from './cross-record-types.js'
import { RecordIndex } from './record-index.js'
import { actualSlot, slotsEqual } from './semantic-transition.js'
import type { Finding } from './types.js'

export interface ProposedEducationalDecision {
  learner_id: string
  sequence: number
  prior_version: number
  resulting_version: number
  changes: SemanticChange[]
  candidate_evaluations?: Array<{
    candidate_id: string
  }>
}

export interface ProposedTransitionCurrentState {
  learner_id: string
  state_version: number
  learner_state: TransitionLearnerState
}

export interface ProposedTransitionContext {
  proposedArtifact: string
  proposed: ProposedEducationalDecision
  current: ProposedTransitionCurrentState

  /**
   * Sequences of schema-valid persisted Educational Decisions.
   *
   * Full Decision-history integrity belongs to full validation. Proposed
   * transition validation uses this collection only to establish the next
   * expected sequence.
   */
  persistedSequences: readonly number[]

  /**
   * Undefined means Candidate reference validation is conservatively gated
   * because its local repository context was not schema-valid.
   */
  candidateIndex?: RecordIndex
}

/**
 * Validates objective consistency of an already-formed proposed Educational
 * Decision against Current Learner State and persisted repository context.
 *
 * This function does not authorize the Decision, replay history, judge
 * educational correctness, or mutate canonical state.
 */
export function validateProposedTransitionIntegrity(
  context: ProposedTransitionContext,
): Finding[] {
  const {
    proposedArtifact,
    proposed,
    current,
    persistedSequences,
    candidateIndex,
  } = context

  const findings: Finding[] = []

  if (proposed.learner_id !== current.learner_id) {
    findings.push({
      code: 'LEARNER_ID_MISMATCH',
      artifact: proposedArtifact,
      message:
        `Proposed Educational Decision learner ID ` +
        `${proposed.learner_id} does not match Current Learner State ` +
        `learner ID ${current.learner_id}.`,
    })
  }

  const expectedSequence = nextDecisionSequence(persistedSequences)

  if (proposed.sequence !== expectedSequence) {
    findings.push({
      code: 'DECISION_SEQUENCE_MISMATCH',
      artifact: proposedArtifact,
      message:
        `Proposed Educational Decision sequence is ` +
        `${proposed.sequence}; expected ${expectedSequence}.`,
    })
  }

  if (proposed.prior_version !== current.state_version) {
    findings.push({
      code: 'STATE_VERSION_CHAIN_MISMATCH',
      artifact: proposedArtifact,
      message:
        `Proposed Educational Decision prior_version is ` +
        `${proposed.prior_version}; Current Learner State version is ` +
        `${current.state_version}.`,
    })
  }

  const expectedResultingVersion =
    current.state_version + (proposed.changes.length > 0 ? 1 : 0)

  if (proposed.resulting_version !== expectedResultingVersion) {
    findings.push({
      code: 'STATE_VERSION_CHAIN_MISMATCH',
      artifact: proposedArtifact,
      message:
        `Proposed Educational Decision resulting_version is ` +
        `${proposed.resulting_version}; expected ` +
        `${expectedResultingVersion}.`,
    })
  }

  for (const change of proposed.changes) {
    const actual = actualSlot(current.learner_state, change)

    if (slotsEqual(actual, change.previous)) {
      continue
    }

    findings.push({
      code: 'DECISION_PREVIOUS_VALUE_MISMATCH',
      artifact: proposedArtifact,
      message:
        `Proposed semantic change ` +
        `${change.domain}:${change.subject} declares previous ` +
        `${formatSlot(change.previous)}; Current Learner State slot is ` +
        `${formatSlot(actual)}.`,
    })
  }

  if (candidateIndex !== undefined) {
    findings.push(
      ...validateCandidateReferences(
        proposedArtifact,
        proposed,
        candidateIndex,
      ),
    )
  }

  return findings
}

function nextDecisionSequence(persistedSequences: readonly number[]): number {
  let lastSequence = 0

  for (const sequence of persistedSequences) {
    if (sequence > lastSequence) {
      lastSequence = sequence
    }
  }

  return lastSequence + 1
}

function validateCandidateReferences(
  proposedArtifact: string,
  proposed: ProposedEducationalDecision,
  index: RecordIndex,
): Finding[] {
  const findings: Finding[] = []

  for (const evaluation of proposed.candidate_evaluations ?? []) {
    const resolution = index.resolve({
      targetId: evaluation.candidate_id,
      expectedType: 'candidate_educational_evidence',
      sourceArtifact: proposedArtifact,
    })

    if (resolution.ok) {
      continue
    }

    switch (resolution.reason) {
      case 'missing':
        findings.push({
          code: 'REFERENCE_TARGET_INVALID',
          artifact: proposedArtifact,
          message:
            `Reference target ${evaluation.candidate_id} does not exist; ` +
            `expected candidate_educational_evidence.`,
        })
        break

      case 'wrong_type':
        findings.push({
          code: 'REFERENCE_TARGET_INVALID',
          artifact: proposedArtifact,
          message:
            `Reference target ${evaluation.candidate_id} has semantic ` +
            `type ${resolution.matches[0]!.recordType}; expected ` +
            `candidate_educational_evidence.`,
        })
        break

      case 'ambiguous':
        findings.push({
          code: 'REFERENCE_TARGET_INVALID',
          artifact: proposedArtifact,
          message:
            `Reference target ${evaluation.candidate_id} is ambiguous ` +
            `because the durable ID is duplicated; expected ` +
            `candidate_educational_evidence.`,
        })
        break
    }
  }

  return findings
}

function formatSlot(slot: {
  established: boolean
  value?: string | number | boolean
}): string {
  if (!slot.established) {
    return '{"established":false}'
  }

  return JSON.stringify({
    established: true,
    value: slot.value,
  })
}
