import type { SchemaShape } from './jsonSchema/schemaShape.js';
import type { ValidationErrors } from './superValidate.js';
import type { JSONSchema } from './jsonSchema/index.js';
import type { ValidationIssue } from './adapters/adapters.js';
export declare class SuperFormError extends Error {
    constructor(message?: string);
}
export declare class SchemaError extends SuperFormError {
    readonly path: string | undefined;
    constructor(message: string, path?: string | (string | number | symbol)[]);
}
export declare function mapErrors(errors: ValidationIssue[], shape: SchemaShape): Record<string, unknown> & {
    _errors?: string[] | undefined;
};
/**
 * Filter errors based on validation method.
 * auto = Requires the existence of errors and tainted (field in store) to show
 * oninput = Set directly
 */
export declare function updateErrors<T extends Record<string, unknown>>(New: ValidationErrors<T>, Previous: ValidationErrors<T>, force?: boolean): ValidationErrors<T>;
export declare function flattenErrors<T extends Record<string, unknown>>(errors: ValidationErrors<T>): {
    path: string;
    messages: string[];
}[];
/**
 * Merge defaults with parsed data.
 */
export declare function mergeDefaults<T extends Record<string, unknown>>(parsedData: Record<string, unknown> | null | undefined, defaults: T): T;
/**
 * Merge defaults with (important!) *already validated and merged data*.
 * @DCI-context
 */
export declare function replaceInvalidDefaults<T extends Record<string, unknown>>(Data: Record<string, unknown>, Defaults: T, _schema: JSONSchema, Errors: ValidationIssue[], preprocessed: (keyof T)[] | undefined): T;
