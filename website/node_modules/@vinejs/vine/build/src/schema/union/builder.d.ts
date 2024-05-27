import { VineUnion } from './main.js';
import { UnionConditional } from './conditional.js';
import type { FieldContext, SchemaTypes } from '../../types.js';
/**
 * Create a new union schema type. A union is a collection of conditionals
 * and schema associated with it.
 */
export declare function union<Conditional extends UnionConditional<any>>(conditionals: Conditional[]): VineUnion<Conditional>;
export declare namespace union {
    var _a: <Schema extends SchemaTypes>(conditon: (value: Record<string, unknown>, field: FieldContext) => any, schema: Schema) => UnionConditional<Schema>;
    var _b: <Schema extends SchemaTypes>(schema: Schema) => UnionConditional<Schema>;
    export { _a as if, _b as else };
}
