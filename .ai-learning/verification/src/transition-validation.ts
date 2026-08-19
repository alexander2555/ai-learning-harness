import path from 'node:path'

import { displayPath } from './paths.js'
import type { SchemaRegistry } from './schemas.js'
import type { ValidationResult } from './types.js'
import { validateJsonArtifact } from './validate-file.js'
import { sortFindings } from './findings.js'

export function validateProposedTransition(
  root: string,
  requestedPath: string,
  registry: SchemaRegistry,
): ValidationResult {
  const absolutePath = path.resolve(root, requestedPath)
  const artifact = displayPath(root, absolutePath)

  const result = validateJsonArtifact(
    root,
    artifact,
    'educationalDecision',
    registry,
  )

  return {
    findings: sortFindings(result.findings),
  }
}
