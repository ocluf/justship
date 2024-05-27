import Macroable from '@poppinss/macroable';
import type { LiteralNode, RefsStore } from '@vinejs/compiler/types';
import { OTYPE, COTYPE, PARSE } from '../../symbols.js';
import type { Parser, Validation, RuleBuilder, Transformer, FieldContext, FieldOptions, ParserOptions, ConstructableSchema, ComparisonOperators, ArrayComparisonOperators, NumericComparisonOperators } from '../../types.js';
/**
 * Base schema type with only modifiers applicable on all the schema types.
 */
declare abstract class BaseModifiersType<Output, CamelCaseOutput> extends Macroable implements ConstructableSchema<Output, CamelCaseOutput> {
    /**
     * Each subtype should implement the compile method that returns
     * one of the known compiler nodes
     */
    abstract [PARSE](propertyName: string, refs: RefsStore, options: ParserOptions): LiteralNode;
    /**
     * The child class must implement the clone method
     */
    abstract clone(): this;
    /**
     * The output value of the field. The property points to a type only
     * and not the real value.
     */
    [OTYPE]: Output;
    [COTYPE]: CamelCaseOutput;
    /**
     * Mark the field under validation as optional. An optional
     * field allows both null and undefined values.
     */
    optional(validations?: Validation<any>[]): OptionalModifier<this>;
    /**
     * Mark the field under validation to be null. The null value will
     * be written to the output as well.
     *
     * If `optional` and `nullable` are used together, then both undefined
     * and null values will be allowed.
     */
    nullable(): NullableModifier<this>;
    /**
     * Apply transform on the final validated value. The transform method may
     * convert the value to any new datatype.
     */
    transform<TransformedOutput>(transformer: Transformer<this, TransformedOutput>): TransformModifier<this, TransformedOutput>;
}
/**
 * Modifies the schema type to allow null values
 */
declare class NullableModifier<Schema extends BaseModifiersType<any, any>> extends BaseModifiersType<Schema[typeof OTYPE] | null, Schema[typeof COTYPE] | null> {
    #private;
    constructor(parent: Schema);
    /**
     * Creates a fresh instance of the underlying schema type
     * and wraps it inside the nullable modifier
     */
    clone(): this;
    /**
     * Compiles to compiler node
     */
    [PARSE](propertyName: string, refs: RefsStore, options: ParserOptions): LiteralNode;
}
/**
 * Modifies the schema type to allow undefined values
 */
declare class OptionalModifier<Schema extends BaseModifiersType<any, any>> extends BaseModifiersType<Schema[typeof OTYPE] | undefined, Schema[typeof COTYPE] | undefined> {
    #private;
    /**
     * Optional modifier validations list
     */
    validations: Validation<any>[];
    constructor(parent: Schema, validations?: Validation<any>[]);
    /**
     * Shallow clones the validations. Since, there are no API's to mutate
     * the validation options, we can safely copy them by reference.
     */
    protected cloneValidations(): Validation<any>[];
    /**
     * Compiles validations
     */
    protected compileValidations(refs: RefsStore): {
        ruleFnId: `ref://${number}`;
        implicit: boolean;
        isAsync: boolean;
    }[];
    /**
     * Push a validation to the validations chain.
     */
    use(validation: Validation<any> | RuleBuilder): this;
    /**
     * Define a callback to conditionally require a field at
     * runtime.
     *
     * The callback method should return "true" to mark the
     * field as required, or "false" to skip the required
     * validation
     */
    requiredWhen<Operator extends ComparisonOperators>(otherField: string, operator: Operator, expectedValue: Operator extends ArrayComparisonOperators ? (string | number | boolean)[] : Operator extends NumericComparisonOperators ? number : string | number | boolean): this;
    requiredWhen(callback: (field: FieldContext) => boolean): this;
    /**
     * Mark the field under validation as required when all
     * the other fields are present with value other
     * than `undefined` or `null`.
     */
    requiredIfExists(fields: string | string[]): this;
    /**
     * Mark the field under validation as required when any
     * one of the other fields are present with non-nullable
     * value.
     */
    requiredIfAnyExists(fields: string[]): this;
    /**
     * Mark the field under validation as required when all
     * the other fields are missing or their value is
     * `undefined` or `null`.
     */
    requiredIfMissing(fields: string | string[]): this;
    /**
     * Mark the field under validation as required when any
     * one of the other fields are missing.
     */
    requiredIfAnyMissing(fields: string[]): this;
    /**
     * Creates a fresh instance of the underlying schema type
     * and wraps it inside the optional modifier
     */
    clone(): this;
    /**
     * Compiles to compiler node
     */
    [PARSE](propertyName: string, refs: RefsStore, options: ParserOptions): LiteralNode;
}
/**
 * Modifies the schema type to allow custom transformed values
 */
declare class TransformModifier<Schema extends BaseModifiersType<any, any>, Output> extends BaseModifiersType<Output, Output> {
    #private;
    /**
     * The output value of the field. The property points to a type only
     * and not the real value.
     */
    [OTYPE]: Output;
    [COTYPE]: Output;
    constructor(transform: Transformer<Schema, Output>, parent: Schema);
    /**
     * Creates a fresh instance of the underlying schema type
     * and wraps it inside the transform modifier.
     */
    clone(): this;
    /**
     * Compiles to compiler node
     */
    [PARSE](propertyName: string, refs: RefsStore, options: ParserOptions): LiteralNode;
}
/**
 * The base type for creating a custom literal type. Literal type
 * is a schema type that has no children elements.
 */
export declare abstract class BaseLiteralType<Output, CamelCaseOutput> extends BaseModifiersType<Output, CamelCaseOutput> {
    /**
     * The child class must implement the clone method
     */
    abstract clone(): this;
    /**
     * Field options
     */
    protected options: FieldOptions;
    /**
     * Set of validations to run
     */
    protected validations: Validation<any>[];
    constructor(options?: Partial<FieldOptions>, validations?: Validation<any>[]);
    /**
     * Shallow clones the validations. Since, there are no API's to mutate
     * the validation options, we can safely copy them by reference.
     */
    protected cloneValidations(): Validation<any>[];
    /**
     * Shallow clones the options
     */
    protected cloneOptions(): FieldOptions;
    /**
     * Compiles validations
     */
    protected compileValidations(refs: RefsStore): {
        ruleFnId: `ref://${number}`;
        implicit: boolean;
        isAsync: boolean;
    }[];
    /**
     * Define a method to parse the input value. The method
     * is invoked before any validation and hence you must
     * perform type-checking to know the value you are
     * working it.
     */
    parse(callback: Parser): this;
    /**
     * Push a validation to the validations chain.
     */
    use(validation: Validation<any> | RuleBuilder): this;
    /**
     * Enable/disable the bail mode. In bail mode, the field validations
     * are stopped after the first error.
     */
    bail(state: boolean): this;
    /**
     * Compiles the schema type to a compiler node
     */
    [PARSE](propertyName: string, refs: RefsStore, options: ParserOptions): LiteralNode;
}
export {};
