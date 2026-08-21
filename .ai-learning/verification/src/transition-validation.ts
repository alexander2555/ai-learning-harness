import fs from 'node:fs'
import path from 'node:path'

import {
  currentStateArtifact,
  discoverDecisionArtifacts,
  discoverEvidenceArtifacts,
} from './artifacts.js'
import { validateEvidenceArtifact } from './evidence-validation.js'
import { sortFindings } from './findings.js'
import { artifactPath, displayPath } from './paths.js'
import {
  validateProposedTransitionIntegrity,
  type ProposedEducationalDecision,
  type ProposedTransitionCurrentState,
} from './proposed-transition-integrity.js'
import { RecordIndex } from './record-index.js'
import type { SchemaRegistry } from './schemas.js'
import type { Finding, ValidationResult } from './types.js'
import { validateJsonArtifact } from './validate-file.js'

interface PersistedEducationalDecision {
  sequence: number
}

interface CandidateEducationalEvidence {
  candidate_id: string
}

/**
 * Validates an already-formed proposed Educational Decision against the
 * immediate canonical repository context.
 *
 * Full history validity remains the responsibility of full validation.
 */
export function validateProposedTransition(
  root: string,
  requestedPath: string,
  registry: SchemaRegistry,
): ValidationResult {
  const absolutePath = path.resolve(root, requestedPath)

  const artifact = displayPath(root, absolutePath)

  const proposedResult = validateJsonArtifact(
    root,
    artifact,
    'educationalDecision',
    registry,
  )

  if (
    proposedResult.findings.length > 0 ||
    proposedResult.value === undefined
  ) {
    return {
      findings: sortFindings(proposedResult.findings),
    }
  }

  const findings: Finding[] = []

  const currentResult = loadCurrentState(root, registry)

  findings.push(...currentResult.findings)

  if (currentResult.value === undefined) {
    return {
      findings: sortFindings(findings),
    }
  }

  const persistedResult = loadPersistedDecisionSequences(root, registry)

  findings.push(...persistedResult.findings)

  if (!persistedResult.complete) {
    // The expected next sequence cannot be established safely from malformed
    // persisted Decision context. Full history validity belongs to full
    // validation; do not invent a sequence fallback here.
    return {
      findings: sortFindings(findings),
    }
  }

  const candidateResult = loadCandidateIndex(root, registry)

  findings.push(...candidateResult.findings)

  findings.push(
    ...validateProposedTransitionIntegrity({
      proposedArtifact: artifact,
      proposed: proposedResult.value as unknown as ProposedEducationalDecision,
      current: currentResult.value,
      persistedSequences: persistedResult.sequences,
      ...(candidateResult.complete
        ? {
            candidateIndex: candidateResult.index,
          }
        : {}),
    }),
  )

  return {
    findings: sortFindings(findings),
  }
}

interface CurrentStateLoadResult {
  value?: ProposedTransitionCurrentState
  findings: Finding[]
}

function loadCurrentState(
  root: string,
  registry: SchemaRegistry,
): CurrentStateLoadResult {
  if (!fs.existsSync(artifactPath(root, currentStateArtifact))) {
    return {
      findings: [
        {
          code: 'STATE_CURRENT_MISSING',
          artifact: currentStateArtifact,
          message: 'Current Learner State is missing.',
        },
      ],
    }
  }

  const result = validateJsonArtifact(
    root,
    currentStateArtifact,
    'currentLearnerState',
    registry,
  )

  if (result.findings.length > 0 || result.value === undefined) {
    return {
      findings: result.findings,
    }
  }

  return {
    value: result.value as unknown as ProposedTransitionCurrentState,
    findings: [],
  }
}

interface PersistedDecisionLoadResult {
  sequences: number[]
  findings: Finding[]
  complete: boolean
}

function loadPersistedDecisionSequences(
  root: string,
  registry: SchemaRegistry,
): PersistedDecisionLoadResult {
  const sequences: number[] = []
  const findings: Finding[] = []

  for (const artifact of discoverDecisionArtifacts(root)) {
    const result = validateJsonArtifact(
      root,
      artifact,
      'educationalDecision',
      registry,
    )

    findings.push(...result.findings)

    if (result.findings.length > 0 || result.value === undefined) {
      continue
    }

    const decision = result.value as unknown as PersistedEducationalDecision

    sequences.push(decision.sequence)
  }

  return {
    sequences,
    findings,
    complete: findings.length === 0,
  }
}

interface CandidateIndexLoadResult {
  index: RecordIndex
  findings: Finding[]
  complete: boolean
}

function loadCandidateIndex(
  root: string,
  registry: SchemaRegistry,
): CandidateIndexLoadResult {
  const index = new RecordIndex()
  const findings: Finding[] = []
  let complete = true

  for (const artifact of discoverEvidenceArtifacts(root)) {
    const result = validateEvidenceArtifact(root, artifact, registry)

    const recordType = recordTypeOf(result.value)

    if (recordType !== 'candidate_educational_evidence') {
      // Proposed-transition validation does not need unrelated Evidence
      // records. Full repository validation remains responsible for them.
      continue
    }

    if (result.findings.length > 0 || result.value === undefined) {
      findings.push(...result.findings)
      complete = false
      continue
    }

    const candidate = result.value as unknown as CandidateEducationalEvidence

    index.add({
      id: candidate.candidate_id,
      recordType: 'candidate_educational_evidence',
      artifact,
    })
  }

  return {
    index,
    findings,
    complete,
  }
}

function recordTypeOf(value: unknown): string | undefined {
  if (typeof value !== 'object' || value === null) {
    return undefined
  }

  const recordType = (value as Record<string, unknown>).record_type

  return typeof recordType === 'string' ? recordType : undefined
}
