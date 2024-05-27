/**
 * Options accepts by the loop script
 */
type RecordLoopOptions = {
    variableName: string;
    loopCodeSnippet: string;
};
/**
 * Returns JS fragment for wrapping code inside an record loop
 */
export declare function defineRecordLoop({ variableName, loopCodeSnippet }: RecordLoopOptions): string;
export {};
