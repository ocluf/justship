/**
 * Validation error is a superset of Error class with validation
 * error messages
 */
export declare class ValidationError extends Error {
    messages: any;
    /**
     * Http status code for the validation error
     */
    status: number;
    /**
     * Internal code for handling the validation error
     * exception
     */
    code: string;
    constructor(messages: any, options?: ErrorOptions);
    get [Symbol.toStringTag](): string;
    toString(): string;
}
