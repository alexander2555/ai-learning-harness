import assert from 'node:assert/strict'
import test from 'node:test'

import type { TransitionLearnerState } from '../cross-record-types.js'
import { actualSlot, applyResult, slotsEqual } from '../semantic-transition.js'

test('actualSlot preserves sparse learner truth', () => {
  const state: TransitionLearnerState = {
    competencies: {
      typescript: 'unknown',
    },
    learning_debt: {
      architecture: 0,
    },
    automation_levels: {
      testing: 'NONE',
    },
    educational_done: {
      foundation: false,
    },
  }

  assert.deepEqual(
    actualSlot(state, {
      domain: 'competency',
      subject: 'missing',
    }),
    {
      established: false,
    },
  )

  assert.deepEqual(
    actualSlot(state, {
      domain: 'competency',
      subject: 'typescript',
    }),
    {
      established: true,
      value: 'unknown',
    },
  )

  assert.deepEqual(
    actualSlot(state, {
      domain: 'learning_debt',
      subject: 'architecture',
    }),
    {
      established: true,
      value: 0,
    },
  )

  assert.deepEqual(
    actualSlot(state, {
      domain: 'automation_level',
      subject: 'testing',
    }),
    {
      established: true,
      value: 'NONE',
    },
  )

  assert.deepEqual(
    actualSlot(state, {
      domain: 'educational_done',
      subject: 'foundation',
    }),
    {
      established: true,
      value: false,
    },
  )
})

test('slotsEqual distinguishes absence from established values', () => {
  assert.equal(slotsEqual({ established: false }, { established: false }), true)

  assert.equal(
    slotsEqual({ established: false }, { established: true, value: 'unknown' }),
    false,
  )

  assert.equal(
    slotsEqual({ established: false }, { established: true, value: 'NONE' }),
    false,
  )

  assert.equal(
    slotsEqual({ established: false }, { established: true, value: 0 }),
    false,
  )

  assert.equal(
    slotsEqual({ established: false }, { established: true, value: false }),
    false,
  )
})

test('applyResult establishes and removes semantic state', () => {
  const state: TransitionLearnerState = {}

  applyResult(state, {
    domain: 'competency',
    subject: 'typescript',
    resulting: {
      established: true,
      value: 'learning',
    },
  })

  assert.deepEqual(state, {
    competencies: {
      typescript: 'learning',
    },
  })

  applyResult(state, {
    domain: 'competency',
    subject: 'typescript',
    resulting: {
      established: false,
    },
  })

  assert.deepEqual(state, {})
})

test('applyResult preserves false and zero as established values', () => {
  const state: TransitionLearnerState = {}

  applyResult(state, {
    domain: 'learning_debt',
    subject: 'architecture',
    resulting: {
      established: true,
      value: 0,
    },
  })

  applyResult(state, {
    domain: 'educational_done',
    subject: 'foundation',
    resulting: {
      established: true,
      value: false,
    },
  })

  assert.deepEqual(state, {
    learning_debt: {
      architecture: 0,
    },
    educational_done: {
      foundation: false,
    },
  })
})
