import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

import {
  currentStateArtifact,
  initialStateArtifact,
  requiredStaticArtifacts,
} from '../artifacts.js'
import { artifactPath } from '../paths.js'
import { initializeProject } from '../project-initializer.js'
import { loadSchemas } from '../schemas.js'

const repositoryRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../../../..',
)

const registry = loadSchemas(repositoryRoot)

const learnerId = 'learner-11111111-1111-4111-8111-111111111111'

function createTemplateFixture(): string {
  const root = fs.mkdtempSync(
    path.join(os.tmpdir(), 'alh-project-initializer-'),
  )

  for (const artifact of requiredStaticArtifacts) {
    const source = artifactPath(repositoryRoot, artifact)
    const target = artifactPath(root, artifact)

    fs.mkdirSync(path.dirname(target), {
      recursive: true,
    })

    fs.copyFileSync(source, target)
  }

  return root
}

function removeFixture(root: string): void {
  fs.rmSync(root, {
    recursive: true,
    force: true,
  })
}

function readJson(root: string, artifact: string): unknown {
  return JSON.parse(
    fs.readFileSync(artifactPath(root, artifact), 'utf8'),
  ) as unknown
}

test('initializes a template-derived project with sparse v0 learner state', () => {
  const root = createTemplateFixture()

  try {
    const result = initializeProject(root, registry, {
      learnerId,
    })

    assert.deepEqual(result, {
      status: 'initialized',
      learnerId,
    })

    assert.deepEqual(readJson(root, initialStateArtifact), {
      schema_version: '1.0.0',
      record_type: 'initial_learner_state',
      learner_id: learnerId,
      state_version: 0,
      learner_state: {},
    })

    assert.deepEqual(readJson(root, currentStateArtifact), {
      schema_version: '1.0.0',
      record_type: 'current_learner_state',
      learner_id: learnerId,
      state_version: 0,
      learner_state: {},
    })
  } finally {
    removeFixture(root)
  }
})

test('reports an exact valid v0 project as already initialized without rewriting state', () => {
  const root = createTemplateFixture()

  try {
    initializeProject(root, registry, {
      learnerId,
    })

    const initialBefore = fs.readFileSync(
      artifactPath(root, initialStateArtifact),
      'utf8',
    )
    const currentBefore = fs.readFileSync(
      artifactPath(root, currentStateArtifact),
      'utf8',
    )

    const result = initializeProject(root, registry, {
      learnerId: 'learner-22222222-2222-4222-8222-222222222222',
    })

    assert.deepEqual(result, {
      status: 'already_initialized',
    })

    assert.equal(
      fs.readFileSync(artifactPath(root, initialStateArtifact), 'utf8'),
      initialBefore,
    )

    assert.equal(
      fs.readFileSync(artifactPath(root, currentStateArtifact), 'utf8'),
      currentBefore,
    )
  } finally {
    removeFixture(root)
  }
})

test('stops on partial learner initialization state', () => {
  const root = createTemplateFixture()

  try {
    initializeProject(root, registry, {
      learnerId,
    })

    fs.rmSync(artifactPath(root, currentStateArtifact))

    assert.throws(
      () =>
        initializeProject(root, registry, {
          learnerId,
        }),
      /partial learner initialization state/,
    )

    assert.equal(fs.existsSync(artifactPath(root, initialStateArtifact)), true)
    assert.equal(fs.existsSync(artifactPath(root, currentStateArtifact)), false)
  } finally {
    removeFixture(root)
  }
})

test('does not reset a project when persisted Decision History exists', () => {
  const root = createTemplateFixture()

  try {
    const decisionPath = artifactPath(
      root,
      '.ai-learning/state/history/000001-decision.json',
    )

    fs.mkdirSync(path.dirname(decisionPath), {
      recursive: true,
    })
    fs.writeFileSync(decisionPath, '{}\n', 'utf8')

    const result = initializeProject(root, registry, {
      learnerId,
    })

    assert.deepEqual(result, {
      status: 'already_initialized',
    })

    assert.equal(fs.existsSync(artifactPath(root, initialStateArtifact)), false)
    assert.equal(fs.existsSync(artifactPath(root, currentStateArtifact)), false)
  } finally {
    removeFixture(root)
  }
})

test('stops before state writes when a required template artifact is missing', () => {
  const root = createTemplateFixture()

  try {
    fs.rmSync(artifactPath(root, 'AGENTS.md'))

    assert.throws(
      () =>
        initializeProject(root, registry, {
          learnerId,
        }),
      /required canonical template artifacts are missing/,
    )

    assert.equal(fs.existsSync(artifactPath(root, initialStateArtifact)), false)
    assert.equal(fs.existsSync(artifactPath(root, currentStateArtifact)), false)
  } finally {
    removeFixture(root)
  }
})

test('stops before state writes when the uninitialized template has other integrity findings', () => {
  const root = createTemplateFixture()

  try {
    fs.writeFileSync(
      artifactPath(root, '.ai-learning/config/alh.json'),
      '{}\n',
      'utf8',
    )

    assert.throws(
      () =>
        initializeProject(root, registry, {
          learnerId,
        }),
      /integrity findings beyond absent learner state/,
    )

    assert.equal(fs.existsSync(artifactPath(root, initialStateArtifact)), false)
    assert.equal(fs.existsSync(artifactPath(root, currentStateArtifact)), false)
  } finally {
    removeFixture(root)
  }
})
