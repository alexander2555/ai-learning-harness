/**
 * Narrow validator-facing types used after successful local JSON Schema
 * validation.
 *
 * These types intentionally model only the fields needed by objective
 * cross-record integrity checks. They are not a second complete ALH domain
 * model and must not duplicate the JSON Schemas.
 */

export type SemanticDomain =
  | 'competency'
  | 'learning_debt'
  | 'automation_level'
  | 'educational_done'

export type SemanticValue = string | number | boolean

export type SemanticSlot =
  | {
      established: false
    }
  | {
      established: true
      value: SemanticValue
    }

export interface SemanticChange {
  domain: SemanticDomain
  subject: string
  previous: SemanticSlot
  resulting: SemanticSlot
}

/**
 * Minimal in-memory learner-state shape required for exact semantic-slot
 * lookup and deterministic transition application.
 *
 * JSON Schema remains responsible for the concrete value vocabulary and
 * per-domain value types.
 */
export interface TransitionLearnerState {
  competencies?: Record<string, SemanticValue>
  learning_debt?: Record<string, SemanticValue>
  automation_levels?: Record<string, SemanticValue>
  educational_done?: Record<string, SemanticValue>
}

/**
 * A JSON artifact retained after it has successfully passed its applicable
 * local JSON Schema.
 *
 * Cross-record validation must consume only instances of this type.
 */
export interface SchemaValidArtifact {
  artifact: string
  value: unknown
}
