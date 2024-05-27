import type { RefIdentifier } from '../../types.js';
type FieldOptions = {
    variableName: string;
    parseFnRefId?: RefIdentifier;
};
/**
 * Returns JS fragment to call the parse function on the union conditional
 * schema.
 */
export declare function callParseFunction({ parseFnRefId, variableName }: FieldOptions): string;
export {};
