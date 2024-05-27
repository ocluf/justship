/**
 * Options accepts by the output script
 */
type OutputOptions = {
    variableName: string;
    outputExpression: string;
    outputValueExpression: string;
};
/**
 * Returns JS fragment for writing the initial output for an object
 */
export declare function defineObjectInitialOutput({ variableName, outputExpression, outputValueExpression, }: OutputOptions): string;
export {};
