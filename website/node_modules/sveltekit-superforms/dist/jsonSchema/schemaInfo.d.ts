import type { JSONSchema7, JSONSchema7Definition, JSONSchema7TypeName } from 'json-schema';
export type SchemaType = JSONSchema7TypeName | 'Date' | 'date' | 'unix-time' | 'bigint' | 'any' | 'symbol' | 'set' | 'null' | 'undefined';
export type SchemaInfo = {
    types: Exclude<SchemaType, 'null'>[];
    isOptional: boolean;
    isNullable: boolean;
    schema: JSONSchema7;
    union?: JSONSchema7[];
    array?: JSONSchema7[];
    properties?: {
        [key: string]: JSONSchema7;
    };
    additionalProperties?: {
        [key: string]: JSONSchema7;
    };
    required?: string[];
};
/**
 * Normalizes the different kind of schema variations (anyOf, union, const null, etc)
 * to figure out the field type, optional, nullable, etc.
 */
export declare function schemaInfo(schema: JSONSchema7Definition, isOptional: boolean, path: (string | number | symbol)[]): SchemaInfo;
