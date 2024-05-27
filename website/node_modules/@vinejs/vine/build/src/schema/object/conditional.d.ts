import type { ConditionalFn, ObjectGroupNode, RefsStore } from '@vinejs/compiler/types';
import { OTYPE, COTYPE, PARSE } from '../../symbols.js';
import type { ParserOptions, SchemaTypes } from '../../types.js';
/**
 * Group conditional represents a sub-set of object wrapped
 * inside a conditional
 */
export declare class GroupConditional<Properties extends Record<string, SchemaTypes>, Output, CamelCaseOutput> {
    #private;
    [OTYPE]: Output;
    [COTYPE]: CamelCaseOutput;
    constructor(conditional: ConditionalFn<Record<string, unknown>>, properties: Properties);
    /**
     * Compiles to a union conditional
     */
    [PARSE](refs: RefsStore, options: ParserOptions): ObjectGroupNode['conditions'][number];
}
