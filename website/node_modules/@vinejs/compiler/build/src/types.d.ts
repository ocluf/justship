/**
 * Represenation of a ref id
 */
export type RefIdentifier = `ref://${number}`;
/**
 * Allowed values for refs
 */
export type Refs = Record<RefIdentifier, ValidationRule | TransformFn<any, any> | ParseFn | ConditionalFn<any>>;
/**
 * Refs store to track runtime values as refs with
 * type safety
 */
export type RefsStore = {
    toJSON(): Refs;
    /**
     * Track a value inside refs
     */
    track(value: Refs[keyof Refs]): RefIdentifier;
    /**
     * Track a validation inside refs
     */
    trackValidation(validation: ValidationRule): RefIdentifier;
    /**
     * Track input value parser inside refs
     */
    trackParser(fn: ParseFn): RefIdentifier;
    /**
     * Track output value transformer inside refs
     */
    trackTransformer(fn: TransformFn<any, any>): RefIdentifier;
    /**
     * Track a conditional inside refs
     */
    trackConditional(fn: ConditionalFn<any>): RefIdentifier;
};
/**
 * The context shared with the entire validation pipeline.
 * Each field gets its own context object.
 */
export type FieldContext = {
    /**
     * Field value
     */
    value: unknown;
    /**
     * The data property is the top-level object under validation.
     */
    data: any;
    /**
     * Shared metadata across the entire validation lifecycle. It can be
     * used to pass data between validation rules
     */
    meta: Record<string, any>;
    /**
     * Mutate the value of field under validation.
     */
    mutate(newValue: any, field: FieldContext): void;
    /**
     * Report error to the error reporter
     */
    report: ErrorReporterContract['report'];
    /**
     * Is this field valid. Default: true
     */
    isValid: boolean;
    /**
     * Is this field has value defined.
     */
    isDefined: boolean;
    /**
     * Returns the nested path to the field. The parts
     * are joined by a dot notation.
     */
    getFieldPath(): string;
    /**
     * Wildcard path for the field. The value is a nested
     * pointer to the field under validation.
     *
     * In case of arrays, the `*` wildcard is used.
     */
    wildCardPath: string;
    /**
     * The parent property is the parent of the field. It could be an
     * array or an object.
     */
    parent: any;
    /**
     * Name of the field under validation. In case of an array, the field
     * name will be a number
     */
    name: string | number;
    /**
     * Is this field an array member
     */
    isArrayMember: boolean;
};
/**
 * The shape of validation rule picked from the
 * refs
 */
export type ValidationRule = {
    /**
     * Performs validation
     */
    validator(value: unknown, options: any, field: FieldContext): any;
    /**
     * Options to pass
     */
    options?: any;
};
/**
 * The shape of parse function picked from the refs
 */
export type ParseFn = (value: unknown, ctx: Pick<FieldContext, 'data' | 'parent' | 'meta'>) => any;
/**
 * The shape of transform function picked from the refs
 */
export type TransformFn<Input, Output> = (value: Input, field: FieldContext) => Output;
/**
 * The shape of conditional function used for narrowing down unions.
 */
export type ConditionalFn<Input> = (value: Input, field: FieldContext) => boolean;
/**
 * Shape of a validation rule accepted by the compiler
 */
export type ValidationNode = {
    /**
     * Rule implementation function id.
     */
    ruleFnId: RefIdentifier;
    /**
     * Is this an async rule. This flag helps creating an optimized output
     */
    isAsync: boolean;
    /**
     * The rules are skipped when the value of a field is "null" or "undefined".
     * Unless, the "implicit" flag is true
     */
    implicit: boolean;
};
/**
 * Shape of field inside a schema.
 */
export type FieldNode = {
    /**
     * Should the validation cycle stop after the first error.
     * Defaults to true
     */
    bail: boolean;
    /**
     * Field name refers to the name of the field under the data
     * object
     */
    fieldName: string;
    /**
     * Name of the output property. This allows validating a field with a different name, but
     * storing its output value with a different name.
     */
    propertyName: string;
    /**
     * Are we expecting this field to be undefined or null
     */
    isOptional: boolean;
    /**
     * Are we expecting this field to be null
     */
    allowNull: boolean;
    /**
     * The reference id for the parse method. Parse method is called to mutate the
     * initial value. The function is executed always even when value is undefined
     * or null.
     *
     * @see [[ParseFn]]
     */
    parseFnId?: RefIdentifier;
    /**
     * A set of validations to apply on the field
     */
    validations: ValidationNode[];
};
/**
 * Shape of a single field accepted by the compiler
 */
export type LiteralNode = FieldNode & {
    type: 'literal';
    /**
     * Transform the output value of a field. The output of this method is the
     * final source of truth. The function is executed at the time of writing the
     * value to the output.
     */
    transformFnId?: RefIdentifier;
};
/**
 * Shape of the object node accepted by the compiler
 */
export type ObjectNode = FieldNode & {
    type: 'object';
    /**
     * Whether or not to allow unknown properties. When disabled, the
     * output object will have only validated properties.
     *
     * Default: false
     */
    allowUnknownProperties: boolean;
    /**
     * Object known properties
     */
    properties: CompilerNodes[];
    /**
     * A collection of object groups to merge into the main object.
     * Each group is a collection of conditionals with a sub-object
     * inside them.
     */
    groups: ObjectGroupNode[];
};
/**
 * A compiler object group produces a single sub object based upon
 * the defined conditions.
 */
export type ObjectGroupNode = {
    type: 'group';
    /**
     * An optional function to call when all of the conditions
     * are false.
     */
    elseConditionalFnRefId?: RefIdentifier;
    /**
     * Conditions to evaluate
     */
    conditions: {
        /**
         * The conditional function reference id
         */
        conditionalFnRefId: RefIdentifier;
        /**
         * Schema to use when condition is true
         */
        schema: {
            type: 'sub_object';
            /**
             * Object known properties
             */
            properties: CompilerNodes[];
            /**
             * A collection of object groups to merge into the main object.
             * Each group is a collection of conditionals with a sub-object
             * inside them.
             */
            groups: ObjectGroupNode[];
        };
    }[];
};
/**
 * Shape of the tuple node accepted by the compiler
 */
export type TupleNode = FieldNode & {
    type: 'tuple';
    /**
     * Whether or not to allow unknown properties. When disabled, the
     * output array will have only validated properties.
     *
     * Default: false
     */
    allowUnknownProperties: boolean;
    /**
     * Tuple known properties
     */
    properties: CompilerNodes[];
};
/**
 * Shape of the record node accepted by the compiler
 */
export type RecordNode = FieldNode & {
    type: 'record';
    /**
     * Captures object elements
     */
    each: CompilerNodes;
};
/**
 * Shape of the array node accepted by the compiler
 */
export type ArrayNode = FieldNode & {
    type: 'array';
    /**
     * Captures array elements
     */
    each: CompilerNodes;
};
/**
 * Shape of the union node accepted by the compiler. A union is a combination
 * of conditionals.
 */
export type UnionNode = {
    type: 'union';
    /**
     * Field name refers to the name of the field under the data
     * object
     */
    fieldName: string;
    /**
     * Name of the output property. This allows validating a field with a different name, but
     * storing its value with a different name.
     */
    propertyName: string;
    /**
     * An optional function to call when all of the conditions
     * are false.
     */
    elseConditionalFnRefId?: RefIdentifier;
    /**
     * Conditions to evaluate
     */
    conditions: {
        /**
         * The conditional function reference id
         */
        conditionalFnRefId: RefIdentifier;
        /**
         * Schema to use when condition is true
         */
        schema: CompilerNodes;
    }[];
};
/**
 * The root of the schema
 */
export type RootNode = {
    type: 'root';
    /**
     * Schema at the root level
     */
    schema: CompilerNodes;
};
/**
 * Known tree nodes accepted by the compiler
 */
export type CompilerNodes = LiteralNode | ObjectNode | ArrayNode | UnionNode | RecordNode | TupleNode;
/**
 * Properties of a parent node as the compiler loops through the
 * rules tree and constructs JS code.
 */
export type CompilerParent = {
    type: 'array' | 'object' | 'tuple' | 'record' | 'root';
    /**
     * Wildcard path to the field
     */
    wildCardPath: string;
    /**
     * Name of the variable for the parent property. The variable name
     * is used to lookup values from the parent
     */
    variableName: string;
    /**
     * Nested path to the parent field. If the parent is nested inside
     * an object or array.
     */
    fieldPathExpression: string;
    /**
     * The expression for the output value.
     */
    outputExpression: string;
};
/**
 * Compiler field is used to compute the variable and property
 * names for the JS output.
 */
export type CompilerField = {
    parentExpression: string;
    parentValueExpression: string;
    fieldNameExpression: string;
    fieldPathExpression: string;
    variableName: string;
    wildCardPath: string;
    valueExpression: string;
    outputExpression: string;
    isArrayMember: boolean;
};
/**
 * The error reporter is used for reporting validation
 * errors.
 */
export interface ErrorReporterContract {
    /**
     * A boolean to known if there are one or more
     * errors.
     */
    hasErrors: boolean;
    /**
     * Creates an instance of an exception to throw
     */
    createError(): Error;
    /**
     * Report error for a field
     */
    report(message: string, rule: string, field: FieldContext, args?: Record<string, any>): any;
}
/**
 * Messages provider is used to resolve validation error messages
 * during validation.
 */
export interface MessagesProviderContact {
    /**
     * Returns a validation message for a given field + rule. The args
     * may get passed by a validation rule to share additional context.
     */
    getMessage(defaultMessage: string, rule: string, field: FieldContext, args?: Record<string, any>): string;
}
/**
 * Options accepted by the compiler
 */
export type CompilerOptions = {
    /**
     * Convert empty string values to null for sake of
     * normalization
     */
    convertEmptyStringsToNull: boolean;
    /**
     * Provide messages to use for required, object and
     * array validations.
     */
    messages?: Partial<{
        required: string;
        object: string;
        array: string;
    }>;
};
