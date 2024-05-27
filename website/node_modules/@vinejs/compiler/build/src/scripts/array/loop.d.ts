/**
 * Options accepts by the loop script
 */
type ArrayLoopOptions = {
    variableName: string;
    loopCodeSnippet: string;
    startingIndex?: number;
};
/**
 * Returns JS fragment for wrapping code inside an array loop
 */
export declare function defineArrayLoop({ variableName, loopCodeSnippet, startingIndex, }: ArrayLoopOptions): string;
export {};
