type ObjectGuardOptions = {
    variableName: string;
    bail: boolean;
    guardedCodeSnippet: string;
};
/**
 * Returns JS fragment to wrap code inside a valid guard
 */
export declare function defineIsValidGuard({ variableName, bail, guardedCodeSnippet }: ObjectGuardOptions): string;
export {};
