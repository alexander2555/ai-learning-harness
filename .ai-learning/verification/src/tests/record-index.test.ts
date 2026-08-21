import assert from 'node:assert/strict'
import test from 'node:test'

import { RecordIndex, type RecordIdentity } from '../record-index.js'

const candidate: RecordIdentity = {
  id: 'candidate-a',
  recordType: 'candidate_educational_evidence',
  artifact: 'candidate.json',
}

test('RecordIndex resolves one target of expected semantic type', () => {
  const index = new RecordIndex()
  index.add(candidate)

  assert.deepEqual(
    index.resolve({
      targetId: 'candidate-a',
      expectedType: 'candidate_educational_evidence',
      sourceArtifact: 'decision.json',
    }),
    {
      ok: true,
      target: candidate,
    },
  )
})

test('RecordIndex distinguishes missing and wrong-type targets', () => {
  const index = new RecordIndex()
  index.add(candidate)

  assert.deepEqual(
    index.resolve({
      targetId: 'missing',
      expectedType: 'evidence',
      sourceArtifact: 'candidate.json',
    }),
    {
      ok: false,
      reason: 'missing',
      matches: [],
    },
  )

  const wrongType = index.resolve({
    targetId: 'candidate-a',
    expectedType: 'evidence',
    sourceArtifact: 'candidate.json',
  })

  assert.equal(wrongType.ok, false)

  if (!wrongType.ok) {
    assert.equal(wrongType.reason, 'wrong_type')
  }
})

test('RecordIndex preserves duplicate identities as ambiguous', () => {
  const index = new RecordIndex()

  index.add({
    id: 'evidence-a',
    recordType: 'evidence',
    artifact: 'a.json',
  })

  index.add({
    id: 'evidence-a',
    recordType: 'evidence',
    artifact: 'b.json',
  })

  const resolution = index.resolve({
    targetId: 'evidence-a',
    expectedType: 'evidence',
    sourceArtifact: 'candidate.json',
  })

  assert.equal(resolution.ok, false)

  if (!resolution.ok) {
    assert.equal(resolution.reason, 'ambiguous')
    assert.equal(resolution.matches.length, 2)
  }

  assert.equal(index.duplicateGroups().length, 1)
})
