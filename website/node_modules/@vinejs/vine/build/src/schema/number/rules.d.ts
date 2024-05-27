/**
 * Enforce the value to be a number or a string representation
 * of a number
 */
export declare const numberRule: (options: {
    strict?: boolean | undefined;
}) => import("../../types.js").Validation<{
    strict?: boolean | undefined;
}>;
/**
 * Enforce a minimum value on a number field
 */
export declare const minRule: (options: {
    min: number;
}) => import("../../types.js").Validation<{
    min: number;
}>;
/**
 * Enforce a maximum value on a number field
 */
export declare const maxRule: (options: {
    max: number;
}) => import("../../types.js").Validation<{
    max: number;
}>;
/**
 * Enforce a range of values on a number field.
 */
export declare const rangeRule: (options: {
    min: number;
    max: number;
}) => import("../../types.js").Validation<{
    min: number;
    max: number;
}>;
/**
 * Enforce the value is a positive number
 */
export declare const positiveRule: (options?: undefined) => import("../../types.js").Validation<undefined>;
/**
 * Enforce the value is a negative number
 */
export declare const negativeRule: (options?: undefined) => import("../../types.js").Validation<undefined>;
/**
 * Enforce the value to have a fixed or range of decimals
 */
export declare const decimalRule: (options: {
    range: [number, number?];
}) => import("../../types.js").Validation<{
    range: [number, number?];
}>;
/**
 * Enforce the value to not have decimal places
 */
export declare const withoutDecimalsRule: (options?: undefined) => import("../../types.js").Validation<undefined>;
