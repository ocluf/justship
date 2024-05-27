import type { FieldContext, Validation } from '../src/types.js';
import { SimpleErrorReporter } from '../src/reporters/simple_error_reporter.js';
/**
 * Exposes APIs for writing validation assertions
 */
declare class ValidationResult {
    #private;
    constructor(outputValue: any, reporter: SimpleErrorReporter);
    /**
     * Returns the validation result output
     */
    getOutput(): any;
    /**
     * Returns an array of errors reported to the
     * error reporter
     */
    getErrors(): {
        message: string;
        field: string;
        rule: string;
        index?: number | undefined;
        meta?: Record<string, any> | undefined;
    }[];
    /**
     * Assert one or more validation errors have occurred
     */
    assertSucceeded(): void;
    /**
     * Assert the output value of validation. The output value is
     * same as the input value, unless "mutate" method is called
     */
    assertOutput(expectedOutput: any): void;
    /**
     * Assert one or more validation errors have occurred
     */
    assertFailed(): void;
    /**
     * Assert the number of errors have occurred
     */
    assertErrorsCount(count: number): void;
    /**
     * Assert error messages to include a given error message
     */
    assertError(message: string): void;
}
/**
 * Validator factory exposes the API to execute validations
 * during tests
 */
export declare class ValidatorFactory {
    #private;
    constructor(field?: Partial<FieldContext>, bail?: boolean);
    /**
     * Define field context for the validation
     */
    withContext(field: Partial<FieldContext>): ValidatorFactory;
    /**
     * Toggle bail mode for the validation
     */
    bail(state: boolean): ValidatorFactory;
    /**
     * Executes a validation against the provided value
     */
    execute(validation: Validation<any> | Validation<any>[], value: any): ValidationResult;
    /**
     * Executes an async validation against the provided
     * value
     */
    executeAsync(validation: Validation<any> | Validation<any>[], value: any): Promise<ValidationResult>;
}
export {};
