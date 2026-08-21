import assert from 'node:assert/strict'
import path from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

import { sortFindings } from '../findings.js'
import { artifactPath } from '../paths.js'
import { loadSchemas } from '../schemas.js'
import { validateJsonArtifact } from '../validate-file.js'

const testDirectory = path.dirname(fileURLToPath(import.meta.url))

const repositoryRoot = path.resolve(testDirectory, '../../../..')

test('all materialized schemas compile', () => {
  const registry = loadSchemas(repositoryRoot)

  assert.equal(registry.size, 9)
})

test('materialized ALH config satisfies its schema', () => {
  const registry = loadSchemas(repositoryRoot)

  const result = validateJsonArtifact(
    repositoryRoot,
    '.ai-learning/config/alh.json',
    'alhConfig',
    registry,
  )

  assert.deepEqual(result.findings, [])
})

test('materialized instruction manifest satisfies its schema', () => {
  const registry = loadSchemas(repositoryRoot)

  const result = validateJsonArtifact(
    repositoryRoot,
    '.ai-learning/instructions/instruction-set.json',
    'instructionSet',
    registry,
  )

  assert.deepEqual(result.findings, [])
})

test('finding order is deterministic', () => {
  const sorted = sortFindings([
    {
      code: 'Z_CODE',
      artifact: 'b.json',
      message: 'second',
    },
    {
      code: 'B_CODE',
      artifact: 'a.json',
      message: 'second',
    },
    {
      code: 'A_CODE',
      artifact: 'a.json',
      message: 'third',
    },
    {
      code: 'A_CODE',
      artifact: 'a.json',
      message: 'first',
    },
  ])

  assert.deepEqual(
    sorted.map((finding) => [finding.artifact, finding.code, finding.message]),
    [
      ['a.json', 'A_CODE', 'first'],
      ['a.json', 'A_CODE', 'third'],
      ['a.json', 'B_CODE', 'second'],
      ['b.json', 'Z_CODE', 'second'],
    ],
  )
})

test('artifact paths resolve below the repository root', () => {
  const resolved = artifactPath(repositoryRoot, '.ai-learning/config/alh.json')

  assert.equal(
    resolved,
    path.join(repositoryRoot, '.ai-learning', 'config', 'alh.json'),
  )
})
