import crypto from 'node:crypto'
import fs from 'node:fs'

import type { SchemaValidArtifact } from './cross-record-types.js'
import { artifactPath } from './paths.js'
import type { Finding } from './types.js'

interface InstructionSetManifest {
  record_type: 'instruction_set'
  instruction_set_version: string
  instructions: Array<{
    path: string
    sha256: string
  }>
}

interface AlhConfig {
  record_type: 'alh_config'
  instruction_set: {
    version: string
  }
}

/**
 * Validates only repository-identity properties not already guaranteed by
 * local JSON Schema:
 *
 * - actual canonical instruction bytes match declared SHA-256 values;
 * - config instruction-set version matches manifest instruction-set version.
 *
 * Manifest membership, order, paths and hash shape remain exclusively schema
 * responsibilities.
 */
export function validateStaticIdentity(
  root: string,
  artifacts: readonly SchemaValidArtifact[],
): Finding[] {
  const manifest = findRecord<InstructionSetManifest>(
    artifacts,
    'instruction_set',
  )

  const config = findRecord<AlhConfig>(artifacts, 'alh_config')

  return [
    ...validateInstructionHashes(root, manifest),
    ...validateConfigInstructionVersion(config, manifest),
  ]
}

function validateInstructionHashes(
  root: string,
  manifest: TypedArtifact<InstructionSetManifest> | undefined,
): Finding[] {
  if (manifest === undefined) {
    return []
  }

  const findings: Finding[] = []

  for (const instruction of manifest.value.instructions) {
    const absolutePath = artifactPath(root, instruction.path)

    if (!fs.existsSync(absolutePath)) {
      // Required static-artifact validation already reports absence.
      continue
    }

    const actualHash = crypto
      .createHash('sha256')
      .update(fs.readFileSync(absolutePath))
      .digest('hex')

    if (actualHash === instruction.sha256) {
      continue
    }

    findings.push({
      code: 'INSTRUCTION_HASH_MISMATCH',
      artifact: instruction.path,
      message:
        `Canonical instruction SHA-256 is ${actualHash}; manifest declares ` +
        `${instruction.sha256}.`,
    })
  }

  return findings
}

function validateConfigInstructionVersion(
  config: TypedArtifact<AlhConfig> | undefined,
  manifest: TypedArtifact<InstructionSetManifest> | undefined,
): Finding[] {
  if (config === undefined || manifest === undefined) {
    return []
  }

  if (
    config.value.instruction_set.version ===
    manifest.value.instruction_set_version
  ) {
    return []
  }

  return [
    {
      code: 'CONFIG_INSTRUCTION_VERSION_MISMATCH',
      artifact: config.artifact,
      message:
        `Config instruction-set version ` +
        `${config.value.instruction_set.version} does not match manifest ` +
        `instruction-set version ${manifest.value.instruction_set_version}.`,
    },
  ]
}

interface TypedArtifact<T> {
  artifact: string
  value: T
}

function findRecord<T>(
  artifacts: readonly SchemaValidArtifact[],
  recordType: string,
): TypedArtifact<T> | undefined {
  const artifact = artifacts.find((candidate) => {
    if (typeof candidate.value !== 'object' || candidate.value === null) {
      return false
    }

    return (
      (candidate.value as Record<string, unknown>).record_type === recordType
    )
  })

  if (artifact === undefined) {
    return undefined
  }

  return {
    artifact: artifact.artifact,
    value: artifact.value as unknown as T,
  }
}
