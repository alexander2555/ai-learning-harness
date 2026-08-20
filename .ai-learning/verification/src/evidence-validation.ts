import { readJsonFile } from './json.js'
import { artifactPath } from './paths.js'
import { type SchemaKey, type SchemaRegistry } from './schemas.js'
import {
  validateParsedJsonArtifact,
  type ValidatedJson,
} from './validate-file.js'

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

/**
 * Reads and locally validates one artifact from the Evidence concern.
 *
 * Schema selection depends on record_type, so parsing happens exactly once.
 * The parsed value is retained for schema-valid cross-record processing.
 */
export function validateEvidenceArtifact(
  root: string,
  artifact: string,
  registry: SchemaRegistry,
): ValidatedJson {
  const readResult = readJsonFile(artifactPath(root, artifact))

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

  const schemaKey = evidenceSchemaKey(readResult.value)

  if (schemaKey === undefined) {
    return {
      value: readResult.value,
      findings: [
        {
          code: 'RECORD_TYPE_UNSUPPORTED',
          artifact,
          message: 'Evidence concern record_type is missing or unsupported.',
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
