import fs from 'node:fs'
import path from 'node:path'

import {
  currentStateArtifact,
  discoverDecisionArtifacts,
  initialStateArtifact,
  requiredStaticArtifacts,
} from './artifacts.js'
import { validateFullProject } from './full-validation.js'
import { createInitializedLearnerStateRecords } from './initialization-state.js'
import { resolveLearnerId } from './learner-identity.js'
import { artifactPath } from './paths.js'
import type { SchemaRegistry } from './schemas.js'
import type { Finding } from './types.js'

export interface InitializeProjectOptions {
  learnerId?: string
}

export type ProjectInitializationResult =
  | {
      status: 'initialized'
      learnerId: string
    }
  | {
      status: 'already_initialized'
    }

const expectedUninitializedFindingCodes = new Set([
  'STATE_INITIAL_MISSING',
  'STATE_CURRENT_MISSING',
])

export function initializeProject(
  root: string,
  registry: SchemaRegistry,
  options: InitializeProjectOptions = {},
): ProjectInitializationResult {
  assertTemplateArtifactsPresent(root)

  const decisionArtifacts = discoverDecisionArtifacts(root)
  const initialPath = artifactPath(root, initialStateArtifact)
  const currentPath = artifactPath(root, currentStateArtifact)
  const initialExists = fs.existsSync(initialPath)
  const currentExists = fs.existsSync(currentPath)

  // Persisted Educational Decision history means initialization has already
  // occurred. The initializer must never reset or reconstruct learner state.
  if (decisionArtifacts.length > 0) {
    return {
      status: 'already_initialized',
    }
  }

  if (initialExists !== currentExists) {
    throw new Error(
      'Project initialization stopped: partial learner initialization state ' +
        'exists; Initial and Current Learner State must either both be absent ' +
        'or both represent a valid initialized v0 project.',
    )
  }

  if (initialExists && currentExists) {
    const result = validateFullProject(root, registry)

    if (result.findings.length > 0) {
      throw new Error(
        'Project initialization stopped: existing learner initialization ' +
          `state is not valid: ${formatFindings(result.findings)}`,
      )
    }

    return {
      status: 'already_initialized',
    }
  }

  assertValidUninitializedProject(root, registry)

  const learnerId = resolveLearnerId(registry, options.learnerId)
  const records = createInitializedLearnerStateRecords(learnerId)

  materializeStateFile(initialPath, records.initial)
  materializeStateFile(currentPath, records.current)

  const validation = validateFullProject(root, registry)

  if (validation.findings.length > 0) {
    throw new Error(
      'Project initialization produced invalid ALH state: ' +
        formatFindings(validation.findings),
    )
  }

  return {
    status: 'initialized',
    learnerId,
  }
}

function assertTemplateArtifactsPresent(root: string): void {
  const missing = requiredStaticArtifacts.filter(
    (artifact) => !fs.existsSync(artifactPath(root, artifact)),
  )

  if (missing.length === 0) {
    return
  }

  throw new Error(
    'Project initialization precondition failed: required canonical template ' +
      `artifacts are missing: ${missing.join(', ')}`,
  )
}

function assertValidUninitializedProject(
  root: string,
  registry: SchemaRegistry,
): void {
  const validation = validateFullProject(root, registry)
  const unexpected = validation.findings.filter(
    (finding) => !expectedUninitializedFindingCodes.has(finding.code),
  )

  if (unexpected.length === 0) {
    return
  }

  throw new Error(
    'Project initialization precondition failed: repository has integrity ' +
      `findings beyond absent learner state: ${formatFindings(unexpected)}`,
  )
}

function materializeStateFile(filePath: string, value: unknown): void {
  fs.mkdirSync(path.dirname(filePath), {
    recursive: true,
  })

  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, {
    encoding: 'utf8',
    flag: 'wx',
  })
}

function formatFindings(findings: readonly Finding[]): string {
  return findings
    .map((finding) => `${finding.code} (${finding.artifact})`)
    .join(', ')
}
