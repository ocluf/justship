import type { JSONSchema } from './index.js';
/**
 * A tree structure where the existence of a node means that the field is an array or an object.
 * Used in error mapping to determine whether to add errors to an _error field
 * (as in arrays and objects), or directly on the field itself.
 */
export type SchemaShape = {
    [K in string]: SchemaShape;
};
export declare function schemaShape(schema: JSONSchema, path?: string[]): SchemaShape;
export declare function shapeFromObject(obj: object): SchemaShape;
