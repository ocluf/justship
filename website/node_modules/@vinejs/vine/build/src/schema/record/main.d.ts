import { RefsStore, RecordNode } from '@vinejs/compiler/types';
import { BaseType } from '../base/main.js';
import { OTYPE, COTYPE, PARSE, UNIQUE_NAME, IS_OF_TYPE } from '../../symbols.js';
import type { FieldOptions, ParserOptions, SchemaTypes, Validation } from '../../types.js';
import { validateKeysRule } from './rules.js';
/**
 * VineRecord represents an object of key-value pair in which
 * keys are unknown
 */
export declare class VineRecord<Schema extends SchemaTypes> extends BaseType<{
    [K: string]: Schema[typeof OTYPE];
}, {
    [K: string]: Schema[typeof COTYPE];
}> {
    #private;
    /**
     * Default collection of record rules
     */
    static rules: {
        maxLength: (options: {
            max: number;
        }) => Validation<{
            max: number;
        }>;
        minLength: (options: {
            min: number;
        }) => Validation<{
            min: number;
        }>;
        fixedLength: (options: {
            size: number;
        }) => Validation<{
            size: number;
        }>;
        validateKeys: (options: (keys: string[], field: import("@vinejs/compiler/types").FieldContext) => void) => Validation<(keys: string[], field: import("@vinejs/compiler/types").FieldContext) => void>;
    };
    /**
     * The property must be implemented for "unionOfTypes"
     */
    [UNIQUE_NAME]: string;
    /**
     * Checks if the value is of object type. The method must be
     * implemented for "unionOfTypes"
     */
    [IS_OF_TYPE]: (value: unknown) => boolean;
    constructor(schema: Schema, options?: FieldOptions, validations?: Validation<any>[]);
    /**
     * Enforce a minimum length on an object field
     */
    minLength(expectedLength: number): this;
    /**
     * Enforce a maximum length on an object field
     */
    maxLength(expectedLength: number): this;
    /**
     * Enforce a fixed length on an object field
     */
    fixedLength(expectedLength: number): this;
    /**
     * Register a callback to validate the object keys
     */
    validateKeys(...args: Parameters<typeof validateKeysRule>): this;
    /**
     * Clones the VineRecord schema type. The applied options
     * and validations are copied to the new instance
     */
    clone(): this;
    /**
     * Compiles to record data type
     */
    [PARSE](propertyName: string, refs: RefsStore, options: ParserOptions): RecordNode;
}
