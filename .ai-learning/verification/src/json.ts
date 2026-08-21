import fs from 'node:fs'

import type { JsonReadResult } from './types.js'

export function readJsonFile(filePath: string): JsonReadResult {
  let content: string

  try {
    content = fs.readFileSync(filePath, 'utf8')
  } catch (error) {
    throw new Error(
      `Unable to read ${filePath}: ${
        error instanceof Error ? error.message : String(error)
      }`,
    )
  }

  try {
    return {
      ok: true,
      value: JSON.parse(content) as unknown,
    }
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    }
  }
}
