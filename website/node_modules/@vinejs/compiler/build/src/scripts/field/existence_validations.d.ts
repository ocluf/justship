type FieldOptions = {
    variableName: string;
    isOptional: boolean;
    allowNull: boolean;
};
/**
 * Returns JS fragment to validate a field's value for existence.
 */
export declare function defineFieldExistenceValidations({ allowNull, isOptional, variableName, }: FieldOptions): string;
export {};
