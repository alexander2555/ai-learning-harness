import fs from 'node:fs'
import path from 'node:path'

import { validateFullProject } from './full-validation.js'
import { writeValidationResult } from './output.js'
import { resolveRepositoryRoot } from './paths.js'
import { loadSchemas } from './schemas.js'
import { validateProposedTransition } from './transition-validation.js'
import { initializeProject } from './project-initializer.js'

interface ParsedArguments {
  command: 'validate' | 'validate-transition' | 'initialize'
  root?: string
  transitionPath?: string
  learnerId?: string
}

function usage(): string {
  return [
    'Usage:',
    '  node dist/cli.js validate [--root <repository-root>]',
    '  node dist/cli.js validate-transition <decision.json> [--root <repository-root>]',
    '  node dist/cli.js initialize [--learner-id <learner-id>] [--root <repository-root>]',
  ].join('\n')
}

function parseArguments(args: readonly string[]): ParsedArguments {
  const command = args[0]

  if (
    command !== 'validate' &&
    command !== 'validate-transition' &&
    command !== 'initialize'
  ) {
    throw new Error(usage())
  }

  let root: string | undefined
  let transitionPath: string | undefined
  let learnerId: string | undefined

  for (let index = 1; index < args.length; index += 1) {
    const argument = args[index]

    if (argument === '--root') {
      const value = args[index + 1]

      if (value === undefined) {
        throw new Error('--root requires a path.')
      }

      root = value
      index += 1
      continue
    }

    if (argument === '--learner-id') {
      if (command !== 'initialize') {
        throw new Error('--learner-id is only valid with initialize.')
      }

      const value = args[index + 1]

      if (value === undefined) {
        throw new Error('--learner-id requires a value.')
      }

      learnerId = value
      index += 1
      continue
    }

    if (command === 'validate-transition' && transitionPath === undefined) {
      transitionPath = argument
      continue
    }

    throw new Error(`Unexpected argument: ${argument}`)
  }

  if (command === 'validate-transition' && transitionPath === undefined) {
    throw new Error(
      'validate-transition requires an Educational Decision JSON path.',
    )
  }

  return {
    command,
    ...(root === undefined ? {} : { root }),
    ...(transitionPath === undefined ? {} : { transitionPath }),
    ...(learnerId === undefined ? {} : { learnerId }),
  }
}

function main(): number {
  const parsed = parseArguments(process.argv.slice(2))
  const root = resolveRepositoryRoot(parsed.root)
  const registry = loadSchemas(root)

  if (parsed.command === 'initialize') {
    const result = initializeProject(root, registry, {
      ...(parsed.learnerId === undefined
        ? {}
        : { learnerId: parsed.learnerId }),
    })

    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`)

    return 0
  }

  if (parsed.command === 'validate') {
    const result = validateFullProject(root, registry)

    writeValidationResult(result)

    return result.findings.length === 0 ? 0 : 1
  }

  const transitionPath = parsed.transitionPath

  if (transitionPath === undefined) {
    throw new Error(
      'Internal argument state error: transition path is missing.',
    )
  }

  const resolvedTransitionPath = path.resolve(root, transitionPath)

  if (!fs.existsSync(resolvedTransitionPath)) {
    throw new Error(
      `Proposed transition file does not exist: ${transitionPath}`,
    )
  }

  const result = validateProposedTransition(root, transitionPath, registry)

  writeValidationResult(result)

  return result.findings.length === 0 ? 0 : 1
}

try {
  process.exitCode = main()
} catch (error) {
  const message = error instanceof Error ? error.message : String(error)

  process.stderr.write(`ALH_VALIDATOR_FAILURE: ${message}\n`)
  process.exitCode = 2
}
