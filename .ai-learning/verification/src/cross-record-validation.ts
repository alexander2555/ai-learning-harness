import type { SchemaValidArtifact } from './cross-record-types.js'
import { findDirectedCycle, type DirectedEdge } from './directed-cycle.js'
import {
  RecordIndex,
  type IndexedRecordType,
  type RecordIdentity,
  type RecordReference,
  type ReferenceResolution,
} from './record-index.js'
import type { Finding } from './types.js'

interface RecordBase {
  record_type: string
}

interface EducationalDecisionRecord extends RecordBase {
  record_type: 'educational_decision'
  decision_id: string
  candidate_evaluations?: Array<{
    candidate_id: string
  }>
}

interface EvidenceRecord extends RecordBase {
  record_type: 'evidence'
  evidence_id: string
  source_evidence_ids?: string[]
  relations?: Array<{
    type: 'corrects' | 'supersedes' | 'invalidates'
    target_evidence_id: string
  }>
}

interface CandidateRecord extends RecordBase {
  record_type: 'candidate_educational_evidence'
  candidate_id: string
  evidence_ids: string[]
}

interface EngineeringCompletionRecord extends RecordBase {
  record_type: 'engineering_completion'
  completion_id: string
  supporting_evidence_ids: string[]
}

interface LearnerMemoryRecord extends RecordBase {
  record_type: 'learner_memory'
  memory_id: string
  source_evidence_ids?: string[]
  relations?: Array<{
    type: 'corrects' | 'supersedes' | 'invalidates'
    target_memory_id: string
  }>
}

type IndexedRecord =
  | EducationalDecisionRecord
  | EvidenceRecord
  | CandidateRecord
  | EngineeringCompletionRecord
  | LearnerMemoryRecord

interface IndexedArtifact {
  artifact: string
  record: IndexedRecord
}

/**
 * Validates only the identity/reference/graph subset of WP4.
 *
 * Input values have already passed their applicable local JSON Schema.
 * This module therefore does not repeat structural validation.
 */
export function validateRecordIntegrity(
  artifacts: readonly SchemaValidArtifact[],
): Finding[] {
  const records = indexedArtifacts(artifacts)
  const index = buildRecordIndex(records)

  return [
    ...duplicateIdFindings(index),
    ...referenceFindings(index, records),
    ...graphFindings(records),
  ]
}

function indexedArtifacts(
  artifacts: readonly SchemaValidArtifact[],
): IndexedArtifact[] {
  const records: IndexedArtifact[] = []

  for (const artifact of artifacts) {
    if (!isRecordObject(artifact.value)) {
      continue
    }

    switch (artifact.value.record_type) {
      case 'educational_decision':
      case 'evidence':
      case 'candidate_educational_evidence':
      case 'engineering_completion':
      case 'learner_memory':
        records.push({
          artifact: artifact.artifact,
          // Input artifacts reached this layer only after successful local JSON Schema
          // validation. The assertion exposes that external guarantee to TypeScript
          // without duplicating schema checks here.
          record: artifact.value as unknown as IndexedRecord,
        })
        break
    }
  }

  return records.sort((left, right) =>
    compareText(left.artifact, right.artifact),
  )
}

function buildRecordIndex(records: readonly IndexedArtifact[]): RecordIndex {
  const index = new RecordIndex()

  for (const { artifact, record } of records) {
    index.add(identityOf(record, artifact))
  }

  return index
}

function identityOf(record: IndexedRecord, artifact: string): RecordIdentity {
  switch (record.record_type) {
    case 'educational_decision':
      return {
        id: record.decision_id,
        recordType: record.record_type,
        artifact,
      }

    case 'evidence':
      return {
        id: record.evidence_id,
        recordType: record.record_type,
        artifact,
      }

    case 'candidate_educational_evidence':
      return {
        id: record.candidate_id,
        recordType: record.record_type,
        artifact,
      }

    case 'engineering_completion':
      return {
        id: record.completion_id,
        recordType: record.record_type,
        artifact,
      }

    case 'learner_memory':
      return {
        id: record.memory_id,
        recordType: record.record_type,
        artifact,
      }
  }
}

function duplicateIdFindings(index: RecordIndex): Finding[] {
  const findings: Finding[] = []

  for (const identities of index.duplicateGroups()) {
    const id = identities[0]!.id
    const artifacts = identities
      .map((identity) => identity.artifact)
      .sort(compareText)

    for (const artifact of artifacts) {
      findings.push({
        code: 'RECORD_ID_DUPLICATE',
        artifact,
        message:
          `Durable record ID ${id} is used by multiple canonical records: ` +
          artifacts.join(', '),
      })
    }
  }

  return findings
}

function referenceFindings(
  index: RecordIndex,
  records: readonly IndexedArtifact[],
): Finding[] {
  const findings: Finding[] = []

  for (const reference of referencesFrom(records)) {
    const resolution = index.resolve(reference)

    if (resolution.ok) {
      continue
    }

    findings.push(referenceFinding(reference, resolution))
  }

  return findings
}

function referencesFrom(
  records: readonly IndexedArtifact[],
): RecordReference[] {
  const references: RecordReference[] = []

  for (const { artifact, record } of records) {
    switch (record.record_type) {
      case 'educational_decision':
        for (const evaluation of record.candidate_evaluations ?? []) {
          references.push(
            reference(
              evaluation.candidate_id,
              'candidate_educational_evidence',
              artifact,
            ),
          )
        }
        break

      case 'candidate_educational_evidence':
        for (const evidenceId of record.evidence_ids) {
          references.push(reference(evidenceId, 'evidence', artifact))
        }
        break

      case 'engineering_completion':
        for (const evidenceId of record.supporting_evidence_ids) {
          references.push(reference(evidenceId, 'evidence', artifact))
        }
        break

      case 'evidence':
        for (const evidenceId of record.source_evidence_ids ?? []) {
          references.push(reference(evidenceId, 'evidence', artifact))
        }

        for (const relation of record.relations ?? []) {
          references.push(
            reference(relation.target_evidence_id, 'evidence', artifact),
          )
        }
        break

      case 'learner_memory':
        for (const evidenceId of record.source_evidence_ids ?? []) {
          references.push(reference(evidenceId, 'evidence', artifact))
        }

        for (const relation of record.relations ?? []) {
          references.push(
            reference(relation.target_memory_id, 'learner_memory', artifact),
          )
        }
        break
    }
  }

  return references.sort(compareReference)
}

function reference(
  targetId: string,
  expectedType: IndexedRecordType,
  sourceArtifact: string,
): RecordReference {
  return {
    targetId,
    expectedType,
    sourceArtifact,
  }
}

function referenceFinding(
  reference: RecordReference,
  resolution: Exclude<ReferenceResolution, { ok: true }>,
): Finding {
  switch (resolution.reason) {
    case 'missing':
      return {
        code: 'REFERENCE_TARGET_INVALID',
        artifact: reference.sourceArtifact,
        message:
          `Reference target ${reference.targetId} does not exist; ` +
          `expected ${reference.expectedType}.`,
      }

    case 'wrong_type':
      return {
        code: 'REFERENCE_TARGET_INVALID',
        artifact: reference.sourceArtifact,
        message:
          `Reference target ${reference.targetId} has semantic type ` +
          `${resolution.matches[0]!.recordType}; expected ` +
          `${reference.expectedType}.`,
      }

    case 'ambiguous':
      return {
        code: 'REFERENCE_TARGET_INVALID',
        artifact: reference.sourceArtifact,
        message:
          `Reference target ${reference.targetId} is ambiguous because ` +
          `the durable ID is duplicated; expected ${reference.expectedType}.`,
      }
  }
}

function graphFindings(records: readonly IndexedArtifact[]): Finding[] {
  const evidenceDerivationEdges: DirectedEdge[] = []
  const evidenceRelationEdges: DirectedEdge[] = []
  const memoryRelationEdges: DirectedEdge[] = []

  for (const { artifact, record } of records) {
    if (record.record_type === 'evidence') {
      for (const sourceId of record.source_evidence_ids ?? []) {
        evidenceDerivationEdges.push({
          from: record.evidence_id,
          to: sourceId,
          artifact,
        })
      }

      for (const relation of record.relations ?? []) {
        evidenceRelationEdges.push({
          from: record.evidence_id,
          to: relation.target_evidence_id,
          artifact,
        })
      }

      continue
    }

    if (record.record_type === 'learner_memory') {
      for (const relation of record.relations ?? []) {
        memoryRelationEdges.push({
          from: record.memory_id,
          to: relation.target_memory_id,
          artifact,
        })
      }
    }
  }

  return [
    ...cycleFinding(
      evidenceDerivationEdges,
      'DERIVED_EVIDENCE_CYCLE',
      'Derived Evidence graph',
    ),
    ...cycleFinding(
      evidenceRelationEdges,
      'EVIDENCE_RELATION_CYCLE',
      'Evidence correction relation graph',
    ),
    ...cycleFinding(
      memoryRelationEdges,
      'MEMORY_RELATION_CYCLE',
      'Learner Memory correction relation graph',
    ),
  ]
}

function cycleFinding(
  edges: readonly DirectedEdge[],
  code:
    | 'DERIVED_EVIDENCE_CYCLE'
    | 'EVIDENCE_RELATION_CYCLE'
    | 'MEMORY_RELATION_CYCLE',
  graphName: string,
): Finding[] {
  const cycle = findDirectedCycle(edges)

  if (cycle === undefined) {
    return []
  }

  return [
    {
      code,
      artifact: cycle.artifact,
      message:
        `${graphName} contains a directed cycle: ` + cycle.nodes.join(' -> '),
    },
  ]
}

function isRecordObject(
  value: unknown,
): value is Record<string, unknown> & RecordBase {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof (value as Record<string, unknown>).record_type === 'string'
  )
}

function compareReference(
  left: RecordReference,
  right: RecordReference,
): number {
  return (
    compareText(left.sourceArtifact, right.sourceArtifact) ||
    compareText(left.targetId, right.targetId) ||
    compareText(left.expectedType, right.expectedType)
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
