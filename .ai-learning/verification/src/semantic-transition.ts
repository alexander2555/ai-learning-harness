import type {
  SemanticChange,
  SemanticDomain,
  SemanticSlot,
  TransitionLearnerState,
} from './cross-record-types.js'

type LearnerStateMapKey = keyof TransitionLearnerState

/**
 * Resolves an accepted semantic-change domain to its canonical learner-state
 * map.
 *
 * This mapping is shared by:
 * - WP4 persisted Decision `previous` consistency;
 * - WP4 proposed-transition consistency;
 * - WP5 deterministic replay.
 */
function stateMapKey(domain: SemanticDomain): LearnerStateMapKey {
  switch (domain) {
    case 'competency':
      return 'competencies'
    case 'learning_debt':
      return 'learning_debt'
    case 'automation_level':
      return 'automation_levels'
    case 'educational_done':
      return 'educational_done'
  }
}

/**
 * Returns the exact sparse semantic slot represented by learner state.
 *
 * Absence is represented only as `{ established: false }`.
 * It must never be converted to a domain value such as `unknown`, `NONE`,
 * `0`, or `false`.
 */
export function actualSlot(
  learnerState: TransitionLearnerState,
  change: Pick<SemanticChange, 'domain' | 'subject'>,
): SemanticSlot {
  const map = learnerState[stateMapKey(change.domain)]

  if (
    map === undefined ||
    !Object.prototype.hasOwnProperty.call(map, change.subject)
  ) {
    return {
      established: false,
    }
  }

  return {
    established: true,
    value: map[change.subject]!,
  }
}

/**
 * Compares two schema-valid semantic slots exactly.
 *
 * Schema validation guarantees that established slots contain primitive ALH
 * semantic values, so primitive equality is sufficient here.
 */
export function slotsEqual(left: SemanticSlot, right: SemanticSlot): boolean {
  if (left.established !== right.established) {
    return false
  }

  if (!left.established || !right.established) {
    return true
  }

  return left.value === right.value
}

/**
 * Applies only the declared resulting semantic slot.
 *
 * This function performs no pedagogical judgment and no transition-policy
 * validation. It is a deterministic representation primitive.
 */
export function applyResult(
  learnerState: TransitionLearnerState,
  change: Pick<SemanticChange, 'domain' | 'subject' | 'resulting'>,
): void {
  const key = stateMapKey(change.domain)

  if (!change.resulting.established) {
    const map = learnerState[key]

    if (map === undefined) {
      return
    }

    delete map[change.subject]

    if (Object.keys(map).length === 0) {
      delete learnerState[key]
    }

    return
  }

  const map = learnerState[key] ?? {}

  map[change.subject] = change.resulting.value
  learnerState[key] = map
}
