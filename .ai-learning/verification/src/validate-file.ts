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

  return {
    value: readResult.value,
    findings: validateAgainstSchema(
      registry,
      schemaKey,
      readResult.value,
      artifact,
    ),
  }
}
