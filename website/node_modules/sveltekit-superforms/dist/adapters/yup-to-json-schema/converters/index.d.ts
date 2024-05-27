import type { AnySchema } from 'yup';
import type { JSONSchema7 } from 'json-schema';
import type { ResolveOptions } from '../types.js';
export declare function convertSchema(yupSchema: AnySchema, options?: ResolveOptions): JSONSchema7;
