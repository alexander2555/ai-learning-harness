import assert from 'node:assert/strict'
import test from 'node:test'

import { resolveLearnerId } from '../learner-identity.js'
import { loadSchemas } from '../schemas.js'

import path from 'node:path'
import { fileURLToPath } from 'node:url'

// Tests execute from dist/tests after compilation.
// Resolve the repository root independently of process.cwd().
const root = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../../../..',
)

test('uses an explicitly supplied valid learner identity', () => {
  const registry = loadSchemas(root)
  const learnerId = 'learner-11111111-1111-4111-8111-111111111111'

  assert.equal(resolveLearnerId(registry, learnerId), learnerId)
})

test('generates a valid opaque learner identity when none is supplied', () => {
  const registry = loadSchemas(root)

  const learnerId = resolveLearnerId(registry)

  assert.match(
    learnerId,
    /^learner-[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,
  )
})

test('rejects an explicitly supplied invalid learner identity', () => {
  const registry = loadSchemas(root)

  assert.throws(
    () => resolveLearnerId(registry, 'learner-alex'),
    /Invalid learner_id for project initialization/,
  )
})
