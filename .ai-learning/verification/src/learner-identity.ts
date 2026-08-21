import { randomUUID } from 'node:crypto'

import type { SchemaRegistry } from './schemas.js'
import { validateAgainstSchema } from './schemas.js'

const identityValidationArtifact = '<project-initialization>'

export function resolveLearnerId(
  registry: SchemaRegistry,
  suppliedLearnerId?: string,
): string {
  const learnerId = suppliedLearnerId ?? `learner-${randomUUID()}`

  const candidateInitialState = {
    schema_version: '1.0.0',
    record_type: 'initial_learner_state',
    learner_id: learnerId,
    state_version: 0,
    learner_state: {},
  }

  const findings = validateAgainstSchema(
    registry,
    'initialLearnerState',
    candidateInitialState,
    identityValidationArtifact,
  )

  if (findings.length > 0) {
    throw new Error(
      `Invalid learner_id for project initialization: ${learnerId}`,
    )
  }

  return learnerId
}
