import { RefsStore, ArrayNode } from '@vinejs/compiler/types';
import { BaseType } from '../base/main.js';
import { OTYPE, COTYPE, PARSE, UNIQUE_NAME, IS_OF_TYPE } from '../../symbols.js';
import type { FieldOptions, ParserOptions, SchemaTypes, Validation } from '../../types.js';
/**
 * VineArray represents an array schema type in the validation
 * pipeline
 */
export declare class VineArray<Schema extends SchemaTypes> extends BaseType<Schema[typeof OTYPE][], Schema[typeof COTYPE][]> {
    #private;
    /**
     * Default collection of array rules
     */
    static rules: {
        compact: (options?: undefined) => Validation<undefined>;
        notEmpty: (options?: undefined) => Validation<undefined>;
        distinct: (options: {
            fields?: string | string[] | undefined;
        }) => Validation<{
            fields?: string | string[] | undefined;
        }>;
        minLength: (options: {
            min: number;
        }) => Validation<{
            min: number;
        }>;
        maxLength: (options: {
            max: number;
        }) => Validation<{
            max: number;
        }>;
        fixedLength: (options: {
            size: number;
        }) => Validation<{
            size: number;
        }>;
    };
    /**
     * The property must be implemented for "unionOfTypes"
     */
    [UNIQUE_NAME]: string;
    /**
     * Checks if the value is of array type. The method must be
     * implemented for "unionOfTypes"
     */
    [IS_OF_TYPE]: (value: unknown) => boolean;
    constructor(schema: Schema, options?: FieldOptions, validations?: Validation<any>[]);
    /**
     * Enforce a minimum length on an array field
     */
    minLength(expectedLength: number): this;
    /**
     * Enforce a maximum length on an array field
     */
    maxLength(expectedLength: number): this;
    /**
     * Enforce a fixed length on an array field
     */
    fixedLength(expectedLength: number): this;
    /**
     * Ensure the array is not empty
     */
    notEmpty(): this;
    /**
     * Ensure array elements are distinct/unique
     */
    distinct(fields?: string | string[]): this;
    /**
     * Removes empty strings, null and undefined values from the array
     */
    compact(): this;
    /**
     * Clones the VineArray schema type. The applied options
     * and validations are copied to the new instance
     */
    clone(): this;
    /**
     * Compiles to array data type
     */
    [PARSE](propertyName: string, refs: RefsStore, options: ParserOptions): ArrayNode;
}
