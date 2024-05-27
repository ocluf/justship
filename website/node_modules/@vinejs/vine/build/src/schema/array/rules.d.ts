/**
 * Enforce a minimum length on an array field
 */
export declare const minLengthRule: (options: {
    min: number;
}) => import("../../types.js").Validation<{
    min: number;
}>;
/**
 * Enforce a maximum length on an array field
 */
export declare const maxLengthRule: (options: {
    max: number;
}) => import("../../types.js").Validation<{
    max: number;
}>;
/**
 * Enforce a fixed length on an array field
 */
export declare const fixedLengthRule: (options: {
    size: number;
}) => import("../../types.js").Validation<{
    size: number;
}>;
/**
 * Ensure the array is not empty
 */
export declare const notEmptyRule: (options?: undefined) => import("../../types.js").Validation<undefined>;
/**
 * Ensure array elements are distinct/unique
 */
export declare const distinctRule: (options: {
    fields?: string | string[] | undefined;
}) => import("../../types.js").Validation<{
    fields?: string | string[] | undefined;
}>;
/**
 * Removes empty strings, null and undefined values from the array
 */
export declare const compactRule: (options?: undefined) => import("../../types.js").Validation<undefined>;
