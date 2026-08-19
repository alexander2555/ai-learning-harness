import fs from 'node:fs'
import path from 'node:path'

export function resolveRepositoryRoot(requestedRoot?: string): string {
  const root = path.resolve(requestedRoot ?? process.cwd())
  const alhDirectory = path.join(root, '.ai-learning')

  if (!fs.existsSync(alhDirectory)) {
    throw new Error(
      `ALH repository root not found: ${root} does not contain .ai-learning`,
    )
  }

  return root
}

export function artifactPath(root: string, relativePath: string): string {
  return path.join(root, ...relativePath.split('/'))
}

export function displayPath(root: string, absolutePath: string): string {
  return path.relative(root, absolutePath).split(path.sep).join('/')
}
