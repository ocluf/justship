import { JSONSchema7 } from "json-schema";
import { SchemaDescription } from "yup";
export declare type YupType = "array" | "boolean" | "date" | "lazy" | "mixed" | "number" | "object" | "string" | "tuple";
export declare type Converters = Record<YupType, Converter>;
export declare type Converter = (description: SchemaDescription, converters: Converters) => JSONSchema7;
export declare type Meta = {
    jsonSchema?: JSONSchema7;
    [key: string]: any;
};
export declare type ResolveOptions = {
    value?: unknown;
    parent?: unknown;
    context?: unknown;
    converters?: Converters;
};
export declare type JsonSchemaCallback = (jsonSchema: JSONSchema7) => JSONSchema7;
