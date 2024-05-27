import { FieldContext } from '@vinejs/compiler/types';
/**
 * Enforce a minimum length on an object field
 */
export declare const minLengthRule: (options: {
    min: number;
}) => import("../../types.js").Validation<{
    min: number;
}>;
/**
 * Enforce a maximum length on an object field
 */
export declare const maxLengthRule: (options: {
    max: number;
}) => import("../../types.js").Validation<{
    max: number;
}>;
/**
 * Enforce a fixed length on an object field
 */
export declare const fixedLengthRule: (options: {
    size: number;
}) => import("../../types.js").Validation<{
    size: number;
}>;
/**
 * Register a callback to validate the object keys
 */
export declare const validateKeysRule: (options: (keys: string[], field: FieldContext) => void) => import("../../types.js").Validation<(keys: string[], field: FieldContext) => void>;
