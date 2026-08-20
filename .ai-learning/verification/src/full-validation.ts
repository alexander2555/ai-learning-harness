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

interface ValidationAccumulator {
  findings: Finding[]
  validArtifacts: SchemaValidArtifact[]
}

function retainIfValid(
  accumulator: ValidationAccumulator,
  artifact: string,
  result: ValidatedJson,
): void {
  accumulator.findings.push(...result.findings)

  if (result.findings.length === 0 && result.value !== undefined) {
    accumulator.validArtifacts.push({
      artifact,
      value: result.value,
    })
  }
}

function validateIfPresent(
  root: string,
  artifact: string,
  schemaKey: SchemaKey,
  registry: SchemaRegistry,
  accumulator: ValidationAccumulator,
): void {
  if (!fs.existsSync(artifactPath(root, artifact))) {
    return
  }

  retainIfValid(
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

  validateIfPresent(
    root,
    initialStateArtifact,
    'initialLearnerState',
    registry,
    accumulator,
  )

  validateIfPresent(
    root,
    currentStateArtifact,
    'currentLearnerState',
    registry,
    accumulator,
  )

  for (const artifact of discoverDecisionArtifacts(root)) {
    retainIfValid(
      accumulator,
      artifact,
      validateJsonArtifact(root, artifact, 'educationalDecision', registry),
    )
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

  return {
    findings: sortFindings(accumulator.findings),
  }
}
