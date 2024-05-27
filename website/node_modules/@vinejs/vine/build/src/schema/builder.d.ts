import Macroable from '@poppinss/macroable';
import { VineAny } from './any/main.js';
import { VineEnum } from './enum/main.js';
import { union } from './union/builder.js';
import { VineTuple } from './tuple/main.js';
import { VineArray } from './array/main.js';
import { VineObject } from './object/main.js';
import { VineRecord } from './record/main.js';
import { VineString } from './string/main.js';
import { VineNumber } from './number/main.js';
import { VineBoolean } from './boolean/main.js';
import { VineLiteral } from './literal/main.js';
import { CamelCase } from './camelcase_types.js';
import { VineAccepted } from './accepted/main.js';
import { group } from './object/group_builder.js';
import { VineNativeEnum } from './enum/native_enum.js';
import { VineUnionOfTypes } from './union_of_types/main.js';
import { OTYPE, COTYPE } from '../symbols.js';
import type { DateFieldOptions, EnumLike, FieldContext, SchemaTypes } from '../types.js';
import { VineDate } from './date/main.js';
/**
 * Schema builder exposes methods to construct a Vine schema. You may
 * add custom methods to it using macros.
 */
export declare class SchemaBuilder extends Macroable {
    /**
     * Define a sub-object as a union
     */
    group: typeof group;
    /**
     * Define a union value
     */
    union: typeof union;
    /**
     * Define a string value
     */
    string(): VineString;
    /**
     * Define a boolean value
     */
    boolean(options?: {
        strict: boolean;
    }): VineBoolean;
    /**
     * Validate a checkbox to be checked
     */
    accepted(): VineAccepted;
    /**
     * Define a number value
     */
    number(options?: {
        strict: boolean;
    }): VineNumber;
    /**
     * Define a datetime value
     */
    date(options?: DateFieldOptions): VineDate;
    /**
     * Define a schema type in which the input value
     * matches the pre-defined value
     */
    literal<const Value>(value: Value): VineLiteral<Value>;
    /**
     * Define an object with known properties. You may call "allowUnknownProperties"
     * to merge unknown properties.
     */
    object<Properties extends Record<string, SchemaTypes>>(properties: Properties): VineObject<Properties, { [K in keyof Properties]: Properties[K][typeof OTYPE]; }, { [K_1 in keyof Properties as CamelCase<K_1 & string>]: Properties[K_1][typeof COTYPE]; }>;
    /**
     * Define an array field and validate its children elements.
     */
    array<Schema extends SchemaTypes>(schema: Schema): VineArray<Schema>;
    /**
     * Define an array field with known length and each children
     * element may have its own schema.
     */
    tuple<Schema extends SchemaTypes[]>(schemas: [...Schema]): VineTuple<Schema, { [K in keyof Schema]: Schema[K][typeof OTYPE]; }, { [K_1 in keyof Schema]: Schema[K_1][typeof COTYPE]; }>;
    /**
     * Define an object field with key-value pair. The keys in
     * a record are unknown and values can be of a specific
     * schema type.
     */
    record<Schema extends SchemaTypes>(schema: Schema): VineRecord<Schema>;
    /**
     * Define a field whose value matches the enum choices.
     */
    enum<const Values extends readonly unknown[]>(values: Values | ((field: FieldContext) => Values)): VineEnum<Values>;
    enum<Values extends EnumLike>(values: Values): VineNativeEnum<Values>;
    /**
     * Allow the field value to be anything
     */
    any(): VineAny;
    /**
     * Define a union of unique schema types.
     */
    unionOfTypes<Schema extends SchemaTypes>(schemas: Schema[]): VineUnionOfTypes<Schema>;
}
