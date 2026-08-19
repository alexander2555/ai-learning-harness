import fs from 'node:fs'
import path from 'node:path'

import type { ErrorObject, ValidateFunction } from 'ajv'

import { Ajv2020 } from './ajv2020.js'
import { readJsonFile } from './json.js'
import type { Finding } from './types.js'

export const schemaFiles = {
  initialLearnerState: 'initial-learner-state.schema.json',
  currentLearnerState: 'current-learner-state.schema.json',
  educationalDecision: 'educational-decision.schema.json',
  evidenceRecord: 'evidence-record.schema.json',
  candidateEducationalEvidence: 'candidate-educational-evidence.schema.json',
  engineeringCompletion: 'engineering-completion.schema.json',
  learnerMemory: 'learner-memory.schema.json',
  alhConfig: 'alh-config.schema.json',
  instructionSet: 'instruction-set.schema.json',
} as const

export type SchemaKey = keyof typeof schemaFiles

export type SchemaRegistry = ReadonlyMap<SchemaKey, ValidateFunction>

function compareText(left: string, right: string): number {
  if (left < right) {
    return -1
  }

  if (left > right) {
    return 1
  }

  return 0
}

function sortSchemaErrors(errors: readonly ErrorObject[]): ErrorObject[] {
  return [...errors].sort((left, right) => {
    return (
      compareText(left.instancePath, right.instancePath) ||
      compareText(left.schemaPath, right.schemaPath) ||
      compareText(left.keyword, right.keyword) ||
      compareText(left.message ?? '', right.message ?? '')
    )
  })
}

export function loadSchemas(root: string): SchemaRegistry {
  const schemasDirectory = path.join(
    root,
    '.ai-learning',
    'verification',
    'schemas',
  )

  if (!fs.existsSync(schemasDirectory)) {
    throw new Error(
      `Validator schema directory is missing: ${schemasDirectory}`,
    )
  }

  const ajv = new Ajv2020({
    allErrors: true,
    strict: true,
    validateFormats: false,
  })

  const registry = new Map<SchemaKey, ValidateFunction>()

  for (const key of Object.keys(schemaFiles) as SchemaKey[]) {
    const schemaPath = path.join(schemasDirectory, schemaFiles[key])

    if (!fs.existsSync(schemaPath)) {
      throw new Error(`Required validator schema is missing: ${schemaPath}`)
    }

    const readResult = readJsonFile(schemaPath)

    if (!readResult.ok) {
      throw new Error(
        `Validator schema is not valid JSON: ${schemaPath}: ${readResult.error}`,
      )
    }

    try {
      registry.set(key, ajv.compile(readResult.value))
    } catch (error) {
      throw new Error(
        `Validator schema compilation failed: ${schemaPath}: ${
          error instanceof Error ? error.message : String(error)
        }`,
      )
    }
  }

  return registry
}

export function validateAgainstSchema(
  registry: SchemaRegistry,
  schemaKey: SchemaKey,
  value: unknown,
  artifact: string,
): Finding[] {
  const validate = registry.get(schemaKey)

  if (validate === undefined) {
    throw new Error(`Schema is not loaded: ${schemaKey}`)
  }

  if (validate(value)) {
    return []
  }

  const errors = sortSchemaErrors(validate.errors ?? [])

  if (errors.length === 0) {
    return [
      {
        code: 'SCHEMA_VALIDATION_FAILED',
        artifact,
        message: 'Schema validation failed without a reported schema error.',
      },
    ]
  }

  return errors.map((error) => ({
    code: 'SCHEMA_VALIDATION_FAILED',
    artifact,
    message: [
      error.instancePath || '/',
      error.keyword,
      error.message ?? 'validation failed',
    ].join(' | '),
  }))
}
