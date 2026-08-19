import fs from 'node:fs'

import {
  currentStateArtifact,
  discoverDecisionArtifacts,
  discoverEvidenceArtifacts,
  discoverMemoryArtifacts,
  initialStateArtifact,
  requiredStaticArtifacts,
} from './artifacts.js'
import { sortFindings } from './findings.js'
import { readJsonFile } from './json.js'
import { artifactPath } from './paths.js'
import { type SchemaKey, type SchemaRegistry } from './schemas.js'
import type { Finding, ValidationResult } from './types.js'
import { validateJsonArtifact } from './validate-file.js'

function validateIfPresent(
  root: string,
  artifact: string,
  schemaKey: SchemaKey,
  registry: SchemaRegistry,
): Finding[] {
  if (!fs.existsSync(artifactPath(root, artifact))) {
    return []
  }

  return validateJsonArtifact(root, artifact, schemaKey, registry).findings
}

function evidenceSchemaKey(value: unknown): SchemaKey | undefined {
  if (
    typeof value !== 'object' ||
    value === null ||
    !('record_type' in value)
  ) {
    return undefined
  }

  const recordType = (value as Record<string, unknown>).record_type

  switch (recordType) {
    case 'evidence':
      return 'evidenceRecord'

    case 'candidate_educational_evidence':
      return 'candidateEducationalEvidence'

    case 'engineering_completion':
      return 'engineeringCompletion'

    default:
      return undefined
  }
}

function validateEvidenceArtifact(
  root: string,
  artifact: string,
  registry: SchemaRegistry,
): Finding[] {
  const readResult = readJsonFile(artifactPath(root, artifact))

  if (!readResult.ok) {
    return [
      {
        code: 'JSON_PARSE_FAILED',
        artifact,
        message: readResult.error,
      },
    ]
  }

  const schemaKey = evidenceSchemaKey(readResult.value)

  if (schemaKey === undefined) {
    return [
      {
        code: 'RECORD_TYPE_UNSUPPORTED',
        artifact,
        message: 'Evidence concern record_type is missing or unsupported.',
      },
    ]
  }

  return validateJsonArtifact(root, artifact, schemaKey, registry).findings
}

export function validateFullProject(
  root: string,
  registry: SchemaRegistry,
): ValidationResult {
  const findings: Finding[] = []

  for (const artifact of requiredStaticArtifacts) {
    if (!fs.existsSync(artifactPath(root, artifact))) {
      findings.push({
        code: 'CANONICAL_ARTIFACT_MISSING',
        artifact,
        message: 'Required canonical ALH artifact is missing.',
      })
    }
  }

  if (!fs.existsSync(artifactPath(root, initialStateArtifact))) {
    findings.push({
      code: 'STATE_INITIAL_MISSING',
      artifact: initialStateArtifact,
      message: 'Initial Learner State is missing.',
    })
  }

  if (!fs.existsSync(artifactPath(root, currentStateArtifact))) {
    findings.push({
      code: 'STATE_CURRENT_MISSING',
      artifact: currentStateArtifact,
      message: 'Current Learner State is missing.',
    })
  }

  findings.push(
    ...validateIfPresent(
      root,
      '.ai-learning/config/alh.json',
      'alhConfig',
      registry,
    ),
  )

  findings.push(
    ...validateIfPresent(
      root,
      '.ai-learning/instructions/instruction-set.json',
      'instructionSet',
      registry,
    ),
  )

  findings.push(
    ...validateIfPresent(
      root,
      initialStateArtifact,
      'initialLearnerState',
      registry,
    ),
  )

  findings.push(
    ...validateIfPresent(
      root,
      currentStateArtifact,
      'currentLearnerState',
      registry,
    ),
  )

  for (const artifact of discoverDecisionArtifacts(root)) {
    findings.push(
      ...validateJsonArtifact(root, artifact, 'educationalDecision', registry)
        .findings,
    )
  }

  for (const artifact of discoverEvidenceArtifacts(root)) {
    findings.push(...validateEvidenceArtifact(root, artifact, registry))
  }

  for (const artifact of discoverMemoryArtifacts(root)) {
    findings.push(
      ...validateJsonArtifact(root, artifact, 'learnerMemory', registry)
        .findings,
    )
  }

  return {
    findings: sortFindings(findings),
  }
}
