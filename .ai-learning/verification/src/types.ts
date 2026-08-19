export interface Finding {
  code: string
  artifact: string
  message: string
}

export interface ValidationResult {
  findings: Finding[]
}

export interface JsonReadSuccess {
  ok: true
  value: unknown
}

export interface JsonReadFailure {
  ok: false
  error: string
}

export type JsonReadResult = JsonReadSuccess | JsonReadFailure
