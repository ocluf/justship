type ConditionalGuardOptions = {
    variableName: string;
    conditionalFnRefId: string;
    guardedCodeSnippet: string;
    conditional: 'if' | 'else if';
};
/**
 * Returns JS fragment to wrap code inside a conditional guard
 */
export declare function defineConditionalGuard({ conditional, variableName, conditionalFnRefId, guardedCodeSnippet, }: ConditionalGuardOptions): string;
export {};
