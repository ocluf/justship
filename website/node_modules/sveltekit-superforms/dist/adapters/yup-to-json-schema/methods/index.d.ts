import type { JsonSchemaCallback } from '../types.js';
type YupParams = {
    addMethod: any;
    Schema: any;
};
declare module 'yup' {
    interface ArraySchema<TIn, TContext, TDefault, TFlags> {
        example(example: any): this;
        examples(examples: any[]): this;
        description(description: string): this;
        jsonSchema(callback: JsonSchemaCallback): this;
    }
    interface BooleanSchema<TType, TContext, TDefault, TFlags> {
        example(example: any): this;
        examples(examples: any[]): this;
        description(description: string): this;
        jsonSchema(callback: JsonSchemaCallback): this;
    }
    interface DateSchema<TType, TContext, TDefault, TFlags> {
        example(example: any): this;
        examples(examples: any[]): this;
        description(description: string): this;
        jsonSchema(callback: JsonSchemaCallback): this;
    }
    interface LazySchema<TType, TContext, TDefault, TFlags> {
        example(example: any): this;
        examples(examples: any[]): this;
        description(description: string): this;
        jsonSchema(callback: JsonSchemaCallback): this;
    }
    interface MixedSchema<TType, TContext, TDefault, TFlags> {
        example(example: any): this;
        examples(examples: any[]): this;
        description(description: string): this;
        jsonSchema(callback: JsonSchemaCallback): this;
    }
    interface NumberSchema<TType, TContext, TDefault, TFlags> {
        example(example: any): this;
        examples(examples: any[]): this;
        description(description: string): this;
        jsonSchema(callback: JsonSchemaCallback): this;
    }
    interface ObjectSchema<TIn, TContext, TDefault, TFlags> {
        example(example: any): this;
        examples(examples: any[]): this;
        description(description: string): this;
        jsonSchema(callback: JsonSchemaCallback): this;
    }
    interface StringSchema<TType, TContext, TDefault, TFlags> {
        example(example: any): this;
        examples(examples: any[]): this;
        description(description: string): this;
        jsonSchema(callback: JsonSchemaCallback): this;
    }
    interface TupleSchema<TType, TContext, TDefault, TFlags> {
        example(example: any): this;
        examples(examples: any[]): this;
        description(description: string): this;
        jsonSchema(callback: JsonSchemaCallback): this;
    }
}
export declare function extendSchema(yup: YupParams): void;
export {};
