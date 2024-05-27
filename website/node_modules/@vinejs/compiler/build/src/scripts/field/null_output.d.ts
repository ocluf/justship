import { RefIdentifier } from '../../types.js';
/**
 * Options accepts by the output script
 */
type OutputOptions = {
    outputExpression: string;
    variableName: string;
    allowNull: boolean;
    transformFnRefId?: RefIdentifier;
    conditional?: 'if' | 'else if';
};
/**
 * Returns JS fragment for writing the null value to the output.
 */
export declare function defineFieldNullOutput({ allowNull, conditional, variableName, outputExpression, transformFnRefId, }: OutputOptions): string;
export {};
