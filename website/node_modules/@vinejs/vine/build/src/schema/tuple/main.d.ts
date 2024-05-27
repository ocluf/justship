import { RefsStore, TupleNode } from '@vinejs/compiler/types';
import { BaseType } from '../base/main.js';
import { IS_OF_TYPE, PARSE, UNIQUE_NAME } from '../../symbols.js';
import type { FieldOptions, ParserOptions, SchemaTypes, Validation } from '../../types.js';
/**
 * VineTuple is an array with known length and may have different
 * schema type for each array element.
 */
export declare class VineTuple<Schema extends SchemaTypes[], Output extends any[], CamelCaseOutput extends any[]> extends BaseType<Output, CamelCaseOutput> {
    #private;
    /**
     * The property must be implemented for "unionOfTypes"
     */
    [UNIQUE_NAME]: string;
    /**
     * Checks if the value is of array type. The method must be
     * implemented for "unionOfTypes"
     */
    [IS_OF_TYPE]: (value: unknown) => boolean;
    constructor(schemas: [...Schema], options?: FieldOptions, validations?: Validation<any>[]);
    /**
     * Copy unknown properties to the final output.
     */
    allowUnknownProperties<Value>(): VineTuple<Schema, [
        ...Output,
        ...Value[]
    ], [
        ...CamelCaseOutput,
        ...Value[]
    ]>;
    /**
     * Clone object
     */
    clone(): this;
    /**
     * Compiles to array data type
     */
    [PARSE](propertyName: string, refs: RefsStore, options: ParserOptions): TupleNode;
}
