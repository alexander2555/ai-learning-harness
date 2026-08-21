import { readJsonFile } from './json.js'
import { artifactPath } from './paths.js'
import {
  type SchemaKey,
  type SchemaRegistry,
  validateAgainstSchema,
} from './schemas.js'
import type { Finding } from './types.js'

export interface ValidatedJson {
  value?: unknown
  findings: Finding[]
}

/**
 * Validates an already-parsed JSON value against an ALH schema.
 *
 * This is used when schema selection itself depends on record content, so the
 * artifact does not need to be read and parsed a second time.
 */
export function validateParsedJsonArtifact(
  value: unknown,
  artifact: string,
  schemaKey: SchemaKey,
  registry: SchemaRegistry,
): ValidatedJson {
  return {
    value,
    findings: validateAgainstSchema(registry, schemaKey, value, artifact),
  }
}

/**
 * Reads, parses, and locally validates one JSON artifact.
 */
export function validateJsonArtifact(
  root: string,
  artifact: string,
  schemaKey: SchemaKey,
  registry: SchemaRegistry,
): ValidatedJson {
  const absolutePath = artifactPath(root, artifact)
  const readResult = readJsonFile(absolutePath)

  if (!readResult.ok) {
    return {
      findings: [
        {
          code: 'JSON_PARSE_FAILED',
          artifact,
          message: readResult.error,
        },
      ],
    }
  }

  return validateParsedJsonArtifact(
    readResult.value,
    artifact,
    schemaKey,
    registry,
  )
}
