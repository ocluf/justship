import type { ObjectNode, RefsStore } from '@vinejs/compiler/types';
import { ObjectGroup } from './group.js';
import { GroupConditional } from './conditional.js';
import { BaseModifiersType, BaseType } from '../base/main.js';
import { OTYPE, COTYPE, PARSE, UNIQUE_NAME, IS_OF_TYPE } from '../../symbols.js';
import type { Validation, SchemaTypes, FieldOptions, ParserOptions } from '../../types.js';
/**
 * Converts schema properties to camelCase
 */
export declare class VineCamelCaseObject<Schema extends VineObject<any, any, any>> extends BaseModifiersType<Schema[typeof COTYPE], Schema[typeof COTYPE]> {
    #private;
    /**
     * The property must be implemented for "unionOfTypes"
     */
    [UNIQUE_NAME]: string;
    /**
     * Checks if the value is of object type. The method must be
     * implemented for "unionOfTypes"
     */
    [IS_OF_TYPE]: (value: unknown) => boolean;
    constructor(schema: Schema);
    /**
     * Clone object
     */
    clone(): this;
    /**
     * Compiles the schema type to a compiler node
     */
    [PARSE](propertyName: string, refs: RefsStore, options: ParserOptions): ObjectNode;
}
/**
 * VineObject represents an object value in the validation
 * schema.
 */
export declare class VineObject<Properties extends Record<string, SchemaTypes>, Output, CamelCaseOutput> extends BaseType<Output, CamelCaseOutput> {
    #private;
    /**
     * The property must be implemented for "unionOfTypes"
     */
    [UNIQUE_NAME]: string;
    /**
     * Checks if the value is of object type. The method must be
     * implemented for "unionOfTypes"
     */
    [IS_OF_TYPE]: (value: unknown) => boolean;
    constructor(properties: Properties, options?: FieldOptions, validations?: Validation<any>[]);
    /**
     * Returns a clone copy of the object properties. The object groups
     * are not copied to keep the implementations simple and easy to
     * reason about.
     */
    getProperties(): Properties;
    /**
     * Copy unknown properties to the final output.
     */
    allowUnknownProperties<Value>(): VineObject<Properties, Output & {
        [K: string]: Value;
    }, CamelCaseOutput & {
        [K: string]: Value;
    }>;
    /**
     * Merge a union to the object groups. The union can be a "vine.union"
     * with objects, or a "vine.object.union" with properties.
     */
    merge<Group extends ObjectGroup<GroupConditional<any, any, any>>>(group: Group): VineObject<Properties, Output & Group[typeof OTYPE], CamelCaseOutput & Group[typeof COTYPE]>;
    /**
     * Clone object
     */
    clone(): this;
    /**
     * Applies camelcase transform
     */
    toCamelCase(): VineCamelCaseObject<this>;
    /**
     * Compiles the schema type to a compiler node
     */
    [PARSE](propertyName: string, refs: RefsStore, options: ParserOptions): ObjectNode;
}
