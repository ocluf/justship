import { FieldContext } from '@vinejs/compiler/types';
/**
 * Enum rule is used to validate the field's value to be one
 * from the pre-defined choices.
 */
export declare const enumRule: (options: {
    choices: readonly any[] | ((field: FieldContext) => readonly any[]);
}) => import("../../types.js").Validation<{
    choices: readonly any[] | ((field: FieldContext) => readonly any[]);
}>;
