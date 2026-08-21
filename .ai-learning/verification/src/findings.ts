import type { Finding } from './types.js'

function compareText(left: string, right: string): number {
  if (left < right) {
    return -1
  }

  if (left > right) {
    return 1
  }

  return 0
}

export function sortFindings(findings: readonly Finding[]): Finding[] {
  return [...findings].sort((left, right) => {
    return (
      compareText(left.artifact, right.artifact) ||
      compareText(left.code, right.code) ||
      compareText(left.message, right.message)
    )
  })
}
