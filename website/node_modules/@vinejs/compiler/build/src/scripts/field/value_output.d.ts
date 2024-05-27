import { RefIdentifier } from '../../types.js';
/**
 * Options accepts by the output script
 */
type OutputOptions = {
    outputExpression: string;
    variableName: string;
    transformFnRefId?: RefIdentifier;
};
/**
 * Returns JS fragment for writing the validated value to the output.
 */
export declare function defineFieldValueOutput({ variableName, outputExpression, transformFnRefId, }: OutputOptions): string;
export {};
