type ConditionalGuardOptions = {
    variableName: string;
    conditionalFnRefId: string;
};
/**
 * Returns JS fragment to invoke a function inside else block
 */
export declare function defineElseCondition({ variableName, conditionalFnRefId }: ConditionalGuardOptions): string;
export {};
