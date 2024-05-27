import { ConditionalFn, RefsStore, UnionNode } from '@vinejs/compiler/types';
import { OTYPE, COTYPE, PARSE } from '../../symbols.js';
import type { ParserOptions, SchemaTypes } from '../../types.js';
/**
 * Represents a union conditional type. A conditional is a predicate
 * with a schema
 */
export declare class UnionConditional<Schema extends SchemaTypes> {
    #private;
    [OTYPE]: Schema[typeof OTYPE];
    [COTYPE]: Schema[typeof COTYPE];
    constructor(conditional: ConditionalFn<Record<string, unknown>>, schema: Schema);
    /**
     * Compiles to a union conditional
     */
    [PARSE](propertyName: string, refs: RefsStore, options: ParserOptions): UnionNode['conditions'][number];
}
