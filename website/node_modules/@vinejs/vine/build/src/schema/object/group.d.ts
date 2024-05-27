import { ObjectGroupNode, RefsStore } from '@vinejs/compiler/types';
import { GroupConditional } from './conditional.js';
import { OTYPE, COTYPE, PARSE } from '../../symbols.js';
import type { ParserOptions, UnionNoMatchCallback } from '../../types.js';
/**
 * Object group represents a group with multiple conditionals, where each
 * condition returns a set of object properties to merge into the
 * existing object.
 */
export declare class ObjectGroup<Conditional extends GroupConditional<any, any, any>> {
    #private;
    [OTYPE]: Conditional[typeof OTYPE];
    [COTYPE]: Conditional[typeof COTYPE];
    constructor(conditionals: Conditional[]);
    /**
     * Clones the ObjectGroup schema type.
     */
    clone(): this;
    /**
     * Define a fallback method to invoke when all of the group conditions
     * fail. You may use this method to report an error.
     */
    otherwise(callback: UnionNoMatchCallback<Record<string, unknown>>): this;
    /**
     * Compiles the group
     */
    [PARSE](refs: RefsStore, options: ParserOptions): ObjectGroupNode;
}
