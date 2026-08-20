import assert from 'node:assert/strict'
import test from 'node:test'

import { findDirectedCycle, type DirectedEdge } from '../directed-cycle.js'

test('findDirectedCycle accepts an acyclic graph', () => {
  const edges: DirectedEdge[] = [
    {
      from: 'a',
      to: 'b',
      artifact: 'a.json',
    },
    {
      from: 'b',
      to: 'c',
      artifact: 'b.json',
    },
  ]

  assert.equal(findDirectedCycle(edges), undefined)
})

test('findDirectedCycle returns a deterministic closed cycle', () => {
  const edges: DirectedEdge[] = [
    {
      from: 'c',
      to: 'a',
      artifact: 'c.json',
    },
    {
      from: 'a',
      to: 'b',
      artifact: 'a.json',
    },
    {
      from: 'b',
      to: 'c',
      artifact: 'b.json',
    },
  ]

  assert.deepEqual(findDirectedCycle(edges), {
    nodes: ['a', 'b', 'c', 'a'],
    artifact: 'c.json',
  })
})

test('findDirectedCycle detects a self-cycle', () => {
  assert.deepEqual(
    findDirectedCycle([
      {
        from: 'a',
        to: 'a',
        artifact: 'a.json',
      },
    ]),
    {
      nodes: ['a', 'a'],
      artifact: 'a.json',
    },
  )
})
