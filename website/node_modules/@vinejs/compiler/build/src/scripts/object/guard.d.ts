type ObjectGuardOptions = {
    variableName: string;
    guardedCodeSnippet: string;
};
/**
 * Returns JS fragment to wrap code inside an object conditional
 */
export declare function defineObjectGuard({ variableName, guardedCodeSnippet }: ObjectGuardOptions): string;
export {};
