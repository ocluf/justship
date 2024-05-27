import { BaseLiteralType } from '../base/literal.js';
import { FieldOptions, Validation } from '../../types.js';
import { IS_OF_TYPE, UNIQUE_NAME } from '../../symbols.js';
/**
 * VineNumber represents a numeric value in the validation schema.
 */
export declare class VineNumber extends BaseLiteralType<number, number> {
    protected options: FieldOptions & {
        strict?: boolean;
    };
    /**
     * Default collection of number rules
     */
    static rules: {
        max: (options: {
            max: number;
        }) => Validation<{
            max: number;
        }>;
        min: (options: {
            min: number;
        }) => Validation<{
            min: number;
        }>;
        range: (options: {
            min: number;
            max: number;
        }) => Validation<{
            min: number;
            max: number;
        }>;
        number: (options: {
            strict?: boolean | undefined;
        }) => Validation<{
            strict?: boolean | undefined;
        }>;
        decimal: (options: {
            range: [number, (number | undefined)?];
        }) => Validation<{
            range: [number, (number | undefined)?];
        }>;
        negative: (options?: undefined) => Validation<undefined>;
        positive: (options?: undefined) => Validation<undefined>;
        withoutDecimals: (options?: undefined) => Validation<undefined>;
    };
    /**
     * The property must be implemented for "unionOfTypes"
     */
    [UNIQUE_NAME]: string;
    /**
     * Checks if the value is of number type. The method must be
     * implemented for "unionOfTypes"
     */
    [IS_OF_TYPE]: (value: unknown) => boolean;
    constructor(options?: Partial<FieldOptions> & {
        strict?: boolean;
    }, validations?: Validation<any>[]);
    /**
     * Enforce a minimum value for the number input
     */
    min(value: number): this;
    /**
     * Enforce a maximum value for the number input
     */
    max(value: number): this;
    /**
     * Enforce value to be within the range of minimum and maximum output.
     */
    range(value: [min: number, max: number]): this;
    /**
     * Enforce the value be a positive number
     */
    positive(): this;
    /**
     * Enforce the value be a negative number
     */
    negative(): this;
    /**
     * Enforce the value to have fixed or range
     * of decimal places
     */
    decimal(range: number | [number, number]): this;
    /**
     * Enforce the value to be an integer (aka without decimals)
     */
    withoutDecimals(): this;
    /**
     * Clones the VineNumber schema type. The applied options
     * and validations are copied to the new instance
     */
    clone(): this;
}
