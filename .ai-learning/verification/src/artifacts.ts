import fs from 'node:fs'
import path from 'node:path'

import { artifactPath, displayPath } from './paths.js'

export const requiredStaticArtifacts = [
  'AGENTS.md',
  '.ai-learning/instructions/00-core.md',
  '.ai-learning/instructions/10-learning.md',
  '.ai-learning/instructions/20-engineering.md',
  '.ai-learning/instructions/30-state-evidence.md',
  '.ai-learning/instructions/40-context-authority.md',
  '.ai-learning/instructions/50-completion.md',
  '.ai-learning/instructions/instruction-set.json',
  '.ai-learning/config/alh.json',
] as const

export const initialStateArtifact =
  '.ai-learning/state/history/000000-initial-state.json'

export const currentStateArtifact =
  '.ai-learning/state/current/learner-state.json'

function discoverJsonFiles(root: string, relativeDirectory: string): string[] {
  const absoluteDirectory = artifactPath(root, relativeDirectory)

  if (!fs.existsSync(absoluteDirectory)) {
    return []
  }

  const entries = fs.readdirSync(absoluteDirectory, {
    withFileTypes: true,
  })

  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.json'))
    .map((entry) => displayPath(root, path.join(absoluteDirectory, entry.name)))
    .sort()
}

export function discoverDecisionArtifacts(root: string): string[] {
  return discoverJsonFiles(root, '.ai-learning/state/history').filter(
    (artifact) => artifact !== initialStateArtifact,
  )
}

export function discoverEvidenceArtifacts(root: string): string[] {
  return discoverJsonFiles(root, '.ai-learning/evidence/records')
}

export function discoverMemoryArtifacts(root: string): string[] {
  return discoverJsonFiles(root, '.ai-learning/memory/learner')
}
