import type {
  SchemaValidArtifact,
  SemanticChange,
  TransitionLearnerState,
} from './cross-record-types.js'
import { actualSlot, applyResult, slotsEqual } from './semantic-transition.js'
import type { Finding } from './types.js'
import {
  findTypedArtifact,
  findTypedArtifacts,
  recordTypeOf,
  type TypedArtifact,
} from './schema-valid-records.js'

interface InitialLearnerState {
  record_type: 'initial_learner_state'
  learner_id: string
  state_version: 0
  learner_state: TransitionLearnerState
}

interface CurrentLearnerState {
  record_type: 'current_learner_state'
  learner_id: string
  state_version: number
  learner_state: TransitionLearnerState
}

interface EducationalDecision {
  record_type: 'educational_decision'
  learner_id: string
  sequence: number
  prior_version: number
  resulting_version: number
  changes: SemanticChange[]
}

interface CandidateEducationalEvidence {
  record_type: 'candidate_educational_evidence'
  learner_id: string
}

interface LearnerMemory {
  record_type: 'learner_memory'
  learner_id: string
}

/**
 * Validates the learner-identity and Decision-chain subset of WP4.
 *
 * Inputs have already passed their applicable JSON Schema. This module
 * therefore relies on schema-established record shapes instead of
 * reimplementing structural checks in TypeScript.
 *
 * The temporary learner state is used only to establish the prior semantic
 * context required for exact `previous` validation. It is not compared with
 * Current Learner State content; that comparison belongs to WP5 replay.
 */
export function validateStateIntegrity(
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

  const decisions = findTypedArtifacts<EducationalDecision>(
    artifacts,
    'educational_decision',
  )

  return [
    ...validateCanonicalLearnerIdentity(artifacts, initial),
    ...validateDecisionChain(initial, current, decisions),
  ]
}

function validateCanonicalLearnerIdentity(
  artifacts: readonly SchemaValidArtifact[],
  initial: TypedArtifact<InitialLearnerState> | undefined,
): Finding[] {
  if (initial === undefined) {
    // Missing/invalid Initial State already has a local finding.
    // Do not invent Current State as an alternative authority root.
    return []
  }

  const canonicalLearnerId = initial.value.learner_id
  const findings: Finding[] = []

  for (const artifact of artifacts) {
    const learnerId = learnerIdOf(artifact.value)

    if (learnerId === undefined || learnerId === canonicalLearnerId) {
      continue
    }

    findings.push({
      code: 'LEARNER_ID_MISMATCH',
      artifact: artifact.artifact,
      message:
        `Learner ID ${learnerId} does not match canonical learner ID ` +
        `${canonicalLearnerId}.`,
    })
  }

  return findings
}

function validateDecisionChain(
  initial: TypedArtifact<InitialLearnerState> | undefined,
  current: TypedArtifact<CurrentLearnerState> | undefined,
  decisions: readonly TypedArtifact<EducationalDecision>[],
): Finding[] {
  if (initial === undefined) {
    // Without schema-valid Initial State there is no authoritative starting
    // state/version from which to validate the persisted transition chain.
    return []
  }

  const ordered = [...decisions].sort(compareDecision)
  const findings: Finding[] = []

  validateDecisionSequence(ordered, findings)

  let chainVersion: number = initial.value.state_version
  const transitionState = cloneLearnerState(initial.value.learner_state)

  for (const decisionArtifact of ordered) {
    const decision = decisionArtifact.value

    if (decision.prior_version !== chainVersion) {
      findings.push({
        code: 'STATE_VERSION_CHAIN_MISMATCH',
        artifact: decisionArtifact.artifact,
        message:
          `Decision sequence ${decision.sequence} declares prior_version ` +
          `${decision.prior_version}; expected ${chainVersion}.`,
      })
    }

    const expectedResultingVersion =
      decision.prior_version + (decision.changes.length > 0 ? 1 : 0)

    if (decision.resulting_version !== expectedResultingVersion) {
      findings.push({
        code: 'STATE_VERSION_CHAIN_MISMATCH',
        artifact: decisionArtifact.artifact,
        message:
          `Decision sequence ${decision.sequence} declares ` +
          `resulting_version ${decision.resulting_version}; expected ` +
          `${expectedResultingVersion} from prior_version ` +
          `${decision.prior_version} and its semantic-change count.`,
      })
    }

    validatePreviousValues(decisionArtifact, transitionState, findings)

    for (const change of decision.changes) {
      applyResult(transitionState, change)
    }

    // Chain continuity follows the persisted declared resulting version.
    // The local N/N+1 rule above independently validates whether that
    // declared resulting version is legal for the Decision representation.
    chainVersion = decision.resulting_version
  }

  if (current !== undefined && current.value.state_version !== chainVersion) {
    findings.push({
      code: 'STATE_VERSION_CHAIN_MISMATCH',
      artifact: current.artifact,
      message:
        `Current Learner State declares state_version ` +
        `${current.value.state_version}; persisted Decision chain ends at ` +
        `${chainVersion}.`,
    })
  }

  return findings
}

function validateDecisionSequence(
  decisions: readonly TypedArtifact<EducationalDecision>[],
  findings: Finding[],
): void {
  for (let index = 0; index < decisions.length; index += 1) {
    const decision = decisions[index]!
    const expectedSequence = index + 1

    if (decision.value.sequence === expectedSequence) {
      continue
    }

    findings.push({
      code: 'DECISION_SEQUENCE_MISMATCH',
      artifact: decision.artifact,
      message:
        `Educational Decision sequence is ${decision.value.sequence}; ` +
        `expected ${expectedSequence}.`,
    })
  }
}

function validatePreviousValues(
  decision: TypedArtifact<EducationalDecision>,
  transitionState: TransitionLearnerState,
  findings: Finding[],
): void {
  for (const change of decision.value.changes) {
    const actual = actualSlot(transitionState, change)

    if (slotsEqual(actual, change.previous)) {
      continue
    }

    findings.push({
      code: 'DECISION_PREVIOUS_VALUE_MISMATCH',
      artifact: decision.artifact,
      message:
        `Decision sequence ${decision.value.sequence} semantic change ` +
        `${change.domain}:${change.subject} declares previous ` +
        `${formatSlot(change.previous)}; actual prior slot is ` +
        `${formatSlot(actual)}.`,
    })
  }
}

function learnerIdOf(value: unknown): string | undefined {
  const recordType = recordTypeOf(value)

  switch (recordType) {
    case 'current_learner_state':
    case 'educational_decision':
    case 'candidate_educational_evidence':
    case 'learner_memory':
      // Schema-valid gating establishes learner_id as a string.
      return (
        value as unknown as
          | CurrentLearnerState
          | EducationalDecision
          | CandidateEducationalEvidence
          | LearnerMemory
      ).learner_id

    default:
      return undefined
  }
}

function cloneLearnerState(
  state: TransitionLearnerState,
): TransitionLearnerState {
  const clone: TransitionLearnerState = {}

  if (state.competencies !== undefined) {
    clone.competencies = {
      ...state.competencies,
    }
  }

  if (state.learning_debt !== undefined) {
    clone.learning_debt = {
      ...state.learning_debt,
    }
  }

  if (state.automation_levels !== undefined) {
    clone.automation_levels = {
      ...state.automation_levels,
    }
  }

  if (state.educational_done !== undefined) {
    clone.educational_done = {
      ...state.educational_done,
    }
  }

  return clone
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

function compareText(left: string, right: string): number {
  if (left < right) {
    return -1
  }

  if (left > right) {
    return 1
  }

  return 0
}
