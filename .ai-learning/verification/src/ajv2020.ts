import Ajv2020Import from 'ajv/dist/2020.js'
import type { Options, ValidateFunction } from 'ajv'

export interface Ajv2020Instance {
  compile(schema: unknown): ValidateFunction
}

type Ajv2020Constructor = new (options?: Options) => Ajv2020Instance

export const Ajv2020 = Ajv2020Import as unknown as Ajv2020Constructor
