export function createInitializedLearnerStateRecords(learnerId: string) {
  return {
    initial: {
      schema_version: '1.0.0',
      record_type: 'initial_learner_state',
      learner_id: learnerId,
      state_version: 0,
      learner_state: {},
    },
    current: {
      schema_version: '1.0.0',
      record_type: 'current_learner_state',
      learner_id: learnerId,
      state_version: 0,
      learner_state: {},
    },
  } as const
}
