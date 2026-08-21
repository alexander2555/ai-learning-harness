import type { SchemaValidArtifact } from './cross-record-types.js'

/**
 * Typed view over an artifact that has already passed its applicable local
 * JSON Schema.
 *
 * The type assertion at this boundary exposes the external schema-validity
 * guarantee to TypeScript without duplicating schema checks.
 */
export interface TypedArtifact<T> {
  artifact: string
  value: T
}

export function recordTypeOf(value: unknown): string | undefined {
  if (typeof value !== 'object' || value === null) {
    return undefined
  }

  const recordType = (value as Record<string, unknown>).record_type

  return typeof recordType === 'string' ? recordType : undefined
}

export function findTypedArtifact<T>(
  artifacts: readonly SchemaValidArtifact[],
  recordType: string,
): TypedArtifact<T> | undefined {
  const artifact = artifacts.find(
    (candidate) => recordTypeOf(candidate.value) === recordType,
  )

  if (artifact === undefined) {
    return undefined
  }

  return {
    artifact: artifact.artifact,
    value: artifact.value as unknown as T,
  }
}

export function findTypedArtifacts<T>(
  artifacts: readonly SchemaValidArtifact[],
  recordType: string,
): TypedArtifact<T>[] {
  return artifacts
    .filter((artifact) => recordTypeOf(artifact.value) === recordType)
    .map((artifact) => ({
      artifact: artifact.artifact,
      value: artifact.value as unknown as T,
    }))
}
