type ArrayGuardOptions = {
    variableName: string;
    guardedCodeSnippet: string;
};
/**
 * Returns JS fragment to wrap code inside an array conditional
 */
export declare function defineArrayGuard({ variableName, guardedCodeSnippet }: ArrayGuardOptions): string;
export {};
