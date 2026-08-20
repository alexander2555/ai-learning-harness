import fs from 'node:fs'

import {
  currentStateArtifact,
  discoverDecisionArtifacts,
  discoverEvidenceArtifacts,
  discoverMemoryArtifacts,
  initialStateArtifact,
  requiredStaticArtifacts,
} from './artifacts.js'
import type { SchemaValidArtifact } from './cross-record-types.js'
import { validateRecordIntegrity } from './cross-record-validation.js'
import { sortFindings } from './findings.js'
import { artifactPath } from './paths.js'
import { type SchemaKey, type SchemaRegistry } from './schemas.js'
import type { Finding, ValidationResult } from './types.js'
import { validateJsonArtifact, type ValidatedJson } from './validate-file.js'
import { validateStateIntegrity } from './state-integrity.js'
import { validateStaticIdentity } from './static-identity.js'
import { validateEvidenceArtifact } from './evidence-validation.js'
import { validateReplayIntegrity } from './replay-integrity.js'

interface ValidationAccumulator {
  findings: Finding[]
  validArtifacts: SchemaValidArtifact[]
}

function retainIfValid(
  accumulator: ValidationAccumulator,
  artifact: string,
  result: ValidatedJson,
): boolean {
  accumulator.findings.push(...result.findings)

  if (result.findings.length > 0 || result.value === undefined) {
    return false
  }

  accumulator.validArtifacts.push({
    artifact,
    value: result.value,
  })

  return true
}

function validateIfPresent(
  root: string,
  artifact: string,
  schemaKey: SchemaKey,
  registry: SchemaRegistry,
  accumulator: ValidationAccumulator,
): boolean {
  if (!fs.existsSync(artifactPath(root, artifact))) {
    return false
  }

  return retainIfValid(
    accumulator,
    artifact,
    validateJsonArtifact(root, artifact, schemaKey, registry),
  )
}

export function validateFullProject(
  root: string,
  registry: SchemaRegistry,
): ValidationResult {
  const accumulator: ValidationAccumulator = {
    findings: [],
    validArtifacts: [],
  }

  for (const artifact of requiredStaticArtifacts) {
    if (!fs.existsSync(artifactPath(root, artifact))) {
      accumulator.findings.push({
        code: 'CANONICAL_ARTIFACT_MISSING',
        artifact,
        message: 'Required canonical ALH artifact is missing.',
      })
    }
  }

  if (!fs.existsSync(artifactPath(root, initialStateArtifact))) {
    accumulator.findings.push({
      code: 'STATE_INITIAL_MISSING',
      artifact: initialStateArtifact,
      message: 'Initial Learner State is missing.',
    })
  }

  if (!fs.existsSync(artifactPath(root, currentStateArtifact))) {
    accumulator.findings.push({
      code: 'STATE_CURRENT_MISSING',
      artifact: currentStateArtifact,
      message: 'Current Learner State is missing.',
    })
  }

  validateIfPresent(
    root,
    '.ai-learning/config/alh.json',
    'alhConfig',
    registry,
    accumulator,
  )

  validateIfPresent(
    root,
    '.ai-learning/instructions/instruction-set.json',
    'instructionSet',
    registry,
    accumulator,
  )

  const initialStateValid = validateIfPresent(
    root,
    initialStateArtifact,
    'initialLearnerState',
    registry,
    accumulator,
  )

  const currentStateValid = validateIfPresent(
    root,
    currentStateArtifact,
    'currentLearnerState',
    registry,
    accumulator,
  )

  let decisionHistoryValid = true

  for (const artifact of discoverDecisionArtifacts(root)) {
    const valid = retainIfValid(
      accumulator,
      artifact,
      validateJsonArtifact(root, artifact, 'educationalDecision', registry),
    )

    if (!valid) {
      decisionHistoryValid = false
    }
  }

  for (const artifact of discoverEvidenceArtifacts(root)) {
    retainIfValid(
      accumulator,
      artifact,
      validateEvidenceArtifact(root, artifact, registry),
    )
  }

  for (const artifact of discoverMemoryArtifacts(root)) {
    retainIfValid(
      accumulator,
      artifact,
      validateJsonArtifact(root, artifact, 'learnerMemory', registry),
    )
  }

  accumulator.findings.push(
    ...validateRecordIntegrity(accumulator.validArtifacts),
    ...validateStateIntegrity(accumulator.validArtifacts),
    ...validateStaticIdentity(root, accumulator.validArtifacts),
  )

  if (initialStateValid && currentStateValid && decisionHistoryValid) {
    accumulator.findings.push(
      ...validateReplayIntegrity(accumulator.validArtifacts),
    )
  }

  return {
    findings: sortFindings(accumulator.findings),
  }
}
