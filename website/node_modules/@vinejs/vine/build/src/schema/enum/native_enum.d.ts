import { BaseLiteralType } from '../base/literal.js';
import type { EnumLike, FieldOptions, Validation } from '../../types.js';
/**
 * VineNativeEnum represents a enum data type that performs validation
 * against a pre-defined choices list.
 *
 * The choices list is derived from TypeScript enum data type or an
 * object
 */
export declare class VineNativeEnum<Values extends EnumLike> extends BaseLiteralType<Values[keyof Values], Values[keyof Values]> {
    #private;
    /**
     * Default collection of enum rules
     */
    static rules: {
        enum: (options: {
            choices: readonly any[] | ((field: import("@vinejs/compiler/types").FieldContext) => readonly any[]);
        }) => Validation<{
            choices: readonly any[] | ((field: import("@vinejs/compiler/types").FieldContext) => readonly any[]);
        }>;
    };
    constructor(values: Values, options?: FieldOptions, validations?: Validation<any>[]);
    /**
     * Clones the VineNativeEnum schema type. The applied options
     * and validations are copied to the new instance
     */
    clone(): this;
}
