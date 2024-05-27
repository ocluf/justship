import { ValidationNode } from '../../types.js';
/**
 * Options accepts by the validation script
 */
type ValidationOptions = {
    bail: boolean;
    variableName: string;
    validations: ValidationNode[];
    /**
     * Drop missing conditional check regardless of whether
     * rule is implicit or not
     */
    dropMissingCheck: boolean;
};
/**
 * Returns JS fragment for executing validations for a given field.
 */
export declare function defineFieldValidations({ bail, validations, variableName, dropMissingCheck, }: ValidationOptions): string;
export {};
