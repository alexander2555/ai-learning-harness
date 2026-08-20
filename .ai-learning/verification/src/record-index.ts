/**
 * Minimal semantic record kinds that participate in durable identity and
 * cross-record references.
 *
 * This is intentionally not a registry of ALH domain behavior.
 */
export type IndexedRecordType =
  | 'educational_decision'
  | 'evidence'
  | 'candidate_educational_evidence'
  | 'engineering_completion'
  | 'learner_memory'

export interface RecordIdentity {
  id: string
  recordType: IndexedRecordType
  artifact: string
}

export interface RecordReference {
  targetId: string
  expectedType: IndexedRecordType
  sourceArtifact: string
}

export type ReferenceResolution =
  | {
      ok: true
      target: RecordIdentity
    }
  | {
      ok: false
      reason: 'missing' | 'wrong_type' | 'ambiguous'
      matches: readonly RecordIdentity[]
    }

/**
 * Generic durable-record identity index.
 *
 * Multiple records are retained for the same ID so duplicate identity does
 * not get hidden by Map overwrite behavior.
 */
export class RecordIndex {
  private readonly identitiesById = new Map<string, RecordIdentity[]>()

  add(identity: RecordIdentity): void {
    const existing = this.identitiesById.get(identity.id)

    if (existing === undefined) {
      this.identitiesById.set(identity.id, [identity])
      return
    }

    existing.push(identity)
  }

  duplicateGroups(): readonly (readonly RecordIdentity[])[] {
    return [...this.identitiesById.values()]
      .filter((identities) => identities.length > 1)
      .map((identities) => [...identities].sort(compareIdentity))
      .sort((left, right) => compareText(left[0]!.id, right[0]!.id))
  }

  resolve(reference: RecordReference): ReferenceResolution {
    const matches = this.identitiesById.get(reference.targetId) ?? []

    if (matches.length === 0) {
      return {
        ok: false,
        reason: 'missing',
        matches: [],
      }
    }

    if (matches.length > 1) {
      return {
        ok: false,
        reason: 'ambiguous',
        matches: [...matches].sort(compareIdentity),
      }
    }

    const [target] = matches

    if (target!.recordType !== reference.expectedType) {
      return {
        ok: false,
        reason: 'wrong_type',
        matches: [target!],
      }
    }

    return {
      ok: true,
      target: target!,
    }
  }
}

function compareIdentity(left: RecordIdentity, right: RecordIdentity): number {
  return (
    compareText(left.id, right.id) ||
    compareText(left.recordType, right.recordType) ||
    compareText(left.artifact, right.artifact)
  )
}

function compareText(left: string, right: string): number {
  if (left < right) {
    return -1
  }

  if (left > right) {
    return 1
  }

  return 0
}
