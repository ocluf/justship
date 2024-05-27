import { RefsStore, UnionNode } from '@vinejs/compiler/types';
import { UnionConditional } from './conditional.js';
import { OTYPE, COTYPE, PARSE } from '../../symbols.js';
import type { ConstructableSchema, ParserOptions, SchemaTypes, UnionNoMatchCallback } from '../../types.js';
/**
 * Vine union represents a union data type. A union is a collection
 * of conditionals and each condition has an associated schema
 */
export declare class VineUnion<Conditional extends UnionConditional<SchemaTypes>> implements ConstructableSchema<Conditional[typeof OTYPE], Conditional[typeof COTYPE]> {
    #private;
    [OTYPE]: Conditional[typeof OTYPE];
    [COTYPE]: Conditional[typeof COTYPE];
    constructor(conditionals: Conditional[]);
    /**
     * Define a fallback method to invoke when all of the union conditions
     * fail. You may use this method to report an error.
     */
    otherwise(callback: UnionNoMatchCallback<Record<string, unknown>>): this;
    /**
     * Clones the VineUnion schema type.
     */
    clone(): this;
    /**
     * Compiles to a union
     */
    [PARSE](propertyName: string, refs: RefsStore, options: ParserOptions): UnionNode;
}
