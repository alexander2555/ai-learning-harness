import type { ValidationResult } from './types.js'

export function writeValidationResult(result: ValidationResult): void {
  const output = {
    status: result.findings.length === 0 ? 'valid' : 'invalid',
    findings: result.findings,
  }

  process.stdout.write(`${JSON.stringify(output, null, 2)}\n`)
}
