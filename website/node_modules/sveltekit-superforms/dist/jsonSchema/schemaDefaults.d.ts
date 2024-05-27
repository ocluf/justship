import type { JSONSchema } from './index.js';
import type { SchemaType } from './schemaInfo.js';
export declare function defaultValues<T = Record<string, unknown>>(schema: JSONSchema, isOptional?: boolean, path?: string[]): T;
export declare function defaultValue(type: SchemaType, enumType: unknown[] | undefined): unknown;
export declare function defaultTypes(schema: JSONSchema, path?: string[]): SchemaTypeObject;
export type SchemaFieldType = {
    __types: (SchemaType | 'null' | 'undefined')[];
    __items?: SchemaTypeObject;
};
type SchemaTypeObject = {
    [Key in Exclude<string, '_types' | '_items'>]: SchemaTypeObject;
} & SchemaFieldType;
export {};
