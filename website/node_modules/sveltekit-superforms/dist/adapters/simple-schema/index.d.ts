import type { JSONSchema } from '../../jsonSchema/index.js';
/**
 * Simple JSON Schema generator for validation libraries without introspection.
 */
export declare function simpleSchema(value: unknown): JSONSchema;
