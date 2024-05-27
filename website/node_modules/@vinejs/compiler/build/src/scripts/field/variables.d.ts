import { RefIdentifier } from '../../types.js';
type FieldOptions = {
    parentExpression: string;
    variableName: string;
    valueExpression: string;
    fieldNameExpression: string;
    wildCardPath: string;
    parentValueExpression: string;
    isArrayMember: boolean;
    parseFnRefId?: RefIdentifier;
};
/**
 * Returns JS fragment for defining the field variables. It includes, the field
 * value variable, context variable, and a boolean to know if the field
 * exists.
 */
export declare function defineFieldVariables({ parseFnRefId, variableName, wildCardPath, isArrayMember, valueExpression, parentExpression, fieldNameExpression, parentValueExpression, }: FieldOptions): string;
export {};
