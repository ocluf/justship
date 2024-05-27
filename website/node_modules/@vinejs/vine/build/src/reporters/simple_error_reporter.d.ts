import { ValidationError } from '../errors/validation_error.js';
import type { ErrorReporterContract, FieldContext } from '../types.js';
/**
 * Shape of the error message collected by the SimpleErrorReporter
 */
type SimpleError = {
    message: string;
    field: string;
    rule: string;
    index?: number;
    meta?: Record<string, any>;
};
/**
 * Simple error reporter collects error messages as an array of object.
 * Each object has following properties.
 *
 * - message: string
 * - field: string
 * - rule: string
 * - index?: number (in case of an array member)
 * - args?: Record<string, any>
 */
export declare class SimpleErrorReporter implements ErrorReporterContract {
    /**
     * Boolean to know one or more errors have been reported
     */
    hasErrors: boolean;
    /**
     * Collection of errors
     */
    errors: SimpleError[];
    /**
     * Report an error.
     */
    report(message: string, rule: string, field: FieldContext, meta?: Record<string, any> | undefined): void;
    /**
     * Returns an instance of the validation error
     */
    createError(): ValidationError;
}
export {};
