import type { CompilerNodes, RefsStore } from '@vinejs/compiler/types';
import { OTYPE, COTYPE, PARSE } from '../../symbols.js';
import type { Parser, Validation, RuleBuilder, FieldOptions, ParserOptions, ConstructableSchema } from '../../types.js';
import Macroable from '@poppinss/macroable';
/**
 * Base schema type with only modifiers applicable on all the schema types.
 */
export declare abstract class BaseModifiersType<Output, CamelCaseOutput> extends Macroable implements ConstructableSchema<Output, CamelCaseOutput> {
    /**
     * Each subtype should implement the compile method that returns
     * one of the known compiler nodes
     */
    abstract [PARSE](propertyName: string, refs: RefsStore, options: ParserOptions): CompilerNodes;
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
    optional(): OptionalModifier<this>;
    /**
     * Mark the field under validation to be null. The null value will
     * be written to the output as well.
     *
     * If `optional` and `nullable` are used together, then both undefined
     * and null values will be allowed.
     */
    nullable(): NullableModifier<this>;
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
    [PARSE](propertyName: string, refs: RefsStore, options: ParserOptions): CompilerNodes;
}
/**
 * Modifies the schema type to allow undefined values
 */
declare class OptionalModifier<Schema extends BaseModifiersType<any, any>> extends BaseModifiersType<Schema[typeof OTYPE] | undefined, Schema[typeof COTYPE] | undefined> {
    #private;
    constructor(parent: Schema);
    /**
     * Creates a fresh instance of the underlying schema type
     * and wraps it inside the optional modifier
     */
    clone(): this;
    /**
     * Compiles to compiler node
     */
    [PARSE](propertyName: string, refs: RefsStore, options: ParserOptions): CompilerNodes;
}
/**
 * The BaseSchema class abstracts the repetitive parts of creating
 * a custom schema type.
 */
export declare abstract class BaseType<Output, CamelCaseOutput> extends BaseModifiersType<Output, CamelCaseOutput> {
    /**
     * Field options
     */
    protected options: FieldOptions;
    /**
     * Set of validations to run
     */
    protected validations: Validation<any>[];
    constructor(options?: FieldOptions, validations?: Validation<any>[]);
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
}
export {};
