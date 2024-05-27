/**
 * Options accepts by the output script
 */
type MovePropertiesOptions = {
    variableName: string;
    allowUnknownProperties: boolean;
    fieldsToIgnore: string[];
};
/**
 * Returns JS fragment for moving properties from the source
 * to destination
 */
export declare function defineMoveProperties({ variableName, fieldsToIgnore, allowUnknownProperties, }: MovePropertiesOptions): string;
export {};
