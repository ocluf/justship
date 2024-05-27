import type { Validation, Validator } from '../types.js';
/**
 * Returns args for the validation function.
 */
type GetArgs<T> = undefined extends T ? [options?: T] : [options: T];
/**
 * Convert a validator function to a rule that you can apply
 * to any schema type using the `schema.use` method.
 */
export declare function createRule<Options = undefined>(validator: Validator<Options>, metaData?: {
    implicit?: boolean;
    isAsync?: boolean;
}): (...options: GetArgs<Options>) => Validation<Options>;
export {};
