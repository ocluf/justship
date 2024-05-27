import type { RefsStore, UnionNode } from '@vinejs/compiler/types';
import { OTYPE, COTYPE, PARSE } from '../../symbols.js';
import type { SchemaTypes, ParserOptions, ConstructableSchema, UnionNoMatchCallback } from '../../types.js';
/**
 * Vine union represents a union data type. A union is a collection
 * of conditionals and each condition has an associated schema
 */
export declare class VineUnionOfTypes<Schema extends SchemaTypes> implements ConstructableSchema<Schema[typeof OTYPE], Schema[typeof COTYPE]> {
    #private;
    [OTYPE]: Schema[typeof OTYPE];
    [COTYPE]: Schema[typeof COTYPE];
    constructor(schemas: Schema[]);
    /**
     * Define a fallback method to invoke when all of the union conditions
     * fail. You may use this method to report an error.
     */
    otherwise(callback: UnionNoMatchCallback<Record<string, unknown>>): this;
    /**
     * Clones the VineUnionOfTypes schema type.
     */
    clone(): this;
    /**
     * Compiles to a union
     */
    [PARSE](propertyName: string, refs: RefsStore, options: ParserOptions): UnionNode;
}
