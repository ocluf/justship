import { type TAny } from '../any/index.mjs';
import { type TArray, type ArrayOptions } from '../array/index.mjs';
import { type TBoolean } from '../boolean/index.mjs';
import { type TComposite } from '../composite/index.mjs';
import { type TConst } from '../const/index.mjs';
import { type TDeref } from '../deref/index.mjs';
import { type TEnum, type TEnumKey, type TEnumValue } from '../enum/index.mjs';
import { type TExclude, type TExcludeFromMappedResult, type TExcludeFromTemplateLiteral } from '../exclude/index.mjs';
import { type TExtends, type TExtendsFromMappedKey, type TExtendsFromMappedResult } from '../extends/index.mjs';
import { type TExtract, type TExtractFromMappedResult, type TExtractFromTemplateLiteral } from '../extract/index.mjs';
import { TIndex, type TIndexPropertyKeys, type TIndexFromMappedKey, type TIndexFromMappedResult } from '../indexed/index.mjs';
import { type IntegerOptions, type TInteger } from '../integer/index.mjs';
import { Intersect, type IntersectOptions } from '../intersect/index.mjs';
import { type TCapitalize, type TUncapitalize, type TLowercase, type TUppercase } from '../intrinsic/index.mjs';
import { type TKeyOf, type TKeyOfFromMappedResult } from '../keyof/index.mjs';
import { type TLiteral, type TLiteralValue } from '../literal/index.mjs';
import { type TMappedFunction, type TMapped, type TMappedResult } from '../mapped/index.mjs';
import { type TNever } from '../never/index.mjs';
import { type TNot } from '../not/index.mjs';
import { type TNull } from '../null/index.mjs';
import { type TMappedKey } from '../mapped/index.mjs';
import { type TNumber, type NumberOptions } from '../number/index.mjs';
import { type TObject, type TProperties, type ObjectOptions } from '../object/index.mjs';
import { type TOmit, type TOmitFromMappedKey, type TOmitFromMappedResult } from '../omit/index.mjs';
import { type TOptionalWithFlag, type TOptionalFromMappedResult } from '../optional/index.mjs';
import { type TPartial, type TPartialFromMappedResult } from '../partial/index.mjs';
import { type TPick, type TPickFromMappedKey, type TPickFromMappedResult } from '../pick/index.mjs';
import { type TReadonlyWithFlag, type TReadonlyFromMappedResult } from '../readonly/index.mjs';
import { type TReadonlyOptional } from '../readonly-optional/index.mjs';
import { type TRecordOrObject } from '../record/index.mjs';
import { type TRecursive, type TThis } from '../recursive/index.mjs';
import { type TRef } from '../ref/index.mjs';
import { type TRequired, type TRequiredFromMappedResult } from '../required/index.mjs';
import { type TRest } from '../rest/index.mjs';
import { type TSchema, type SchemaOptions } from '../schema/index.mjs';
import { type TString, type StringOptions } from '../string/index.mjs';
import { type TTemplateLiteral, type TTemplateLiteralKind, type TTemplateLiteralSyntax } from '../template-literal/index.mjs';
import { TransformDecodeBuilder } from '../transform/index.mjs';
import { type TTuple } from '../tuple/index.mjs';
import { Union } from '../union/index.mjs';
import { type TUnknown } from '../unknown/index.mjs';
import { type TUnsafe, type UnsafeOptions } from '../unsafe/index.mjs';
/** Json Type Builder with Static Resolution for TypeScript */
export declare class JsonTypeBuilder {
    /** `[Json]` Omits compositing symbols from this schema */
    Strict<T extends TSchema>(schema: T): T;
    /** `[Json]` Creates a Readonly and Optional property */
    ReadonlyOptional<T extends TSchema>(schema: T): TReadonlyOptional<T>;
    /** `[Json]` Creates a Readonly property */
    Readonly<T extends TMappedResult, F extends boolean>(schema: T, enable: F): TReadonlyFromMappedResult<T, F>;
    /** `[Json]` Creates a Readonly property */
    Readonly<T extends TSchema, F extends boolean>(schema: T, enable: F): TReadonlyWithFlag<T, F>;
    /** `[Json]` Creates a Optional property */
    Readonly<T extends TMappedResult>(schema: T): TReadonlyFromMappedResult<T, true>;
    /** `[Json]` Creates a Readonly property */
    Readonly<T extends TSchema>(schema: T): TReadonlyWithFlag<T, true>;
    /** `[Json]` Creates a Optional property */
    Optional<T extends TMappedResult, F extends boolean>(schema: T, enable: F): TOptionalFromMappedResult<T, F>;
    /** `[Json]` Creates a Optional property */
    Optional<T extends TSchema, F extends boolean>(schema: T, enable: F): TOptionalWithFlag<T, F>;
    /** `[Json]` Creates a Optional property */
    Optional<T extends TMappedResult>(schema: T): TOptionalFromMappedResult<T, true>;
    /** `[Json]` Creates a Optional property */
    Optional<T extends TSchema>(schema: T): TOptionalWithFlag<T, true>;
    /** `[Json]` Creates an Any type */
    Any(options?: SchemaOptions): TAny;
    /** `[Json]` Creates an Array type */
    Array<T extends TSchema>(schema: T, options?: ArrayOptions): TArray<T>;
    /** `[Json]` Creates a Boolean type */
    Boolean(options?: SchemaOptions): TBoolean;
    /** `[Json]` Intrinsic function to Capitalize LiteralString types */
    Capitalize<T extends TSchema>(schema: T, options?: SchemaOptions): TCapitalize<T>;
    /** `[Json]` Creates a Composite object type */
    Composite<T extends TSchema[]>(schemas: [...T], options?: ObjectOptions): TComposite<T>;
    /** `[JavaScript]` Creates a readonly const type from the given value. */
    Const</* const (not supported in 4.0) */ T>(value: T, options?: SchemaOptions): TConst<T>;
    /** `[Json]` Creates a dereferenced type */
    Deref<T extends TSchema>(schema: T, references: TSchema[]): TDeref<T>;
    /** `[Json]` Creates a Enum type */
    Enum<V extends TEnumValue, T extends Record<TEnumKey, V>>(item: T, options?: SchemaOptions): TEnum<T>;
    /** `[Json]` Constructs a type by excluding from unionType all union members that are assignable to excludedMembers */
    Exclude<L extends TMappedResult, R extends TSchema>(unionType: L, excludedMembers: R, options?: SchemaOptions): TExcludeFromMappedResult<L, R>;
    /** `[Json]` Constructs a type by excluding from unionType all union members that are assignable to excludedMembers */
    Exclude<L extends TTemplateLiteral, R extends TSchema>(unionType: L, excludedMembers: R, options?: SchemaOptions): TExcludeFromTemplateLiteral<L, R>;
    /** `[Json]` Constructs a type by excluding from unionType all union members that are assignable to excludedMembers */
    Exclude<L extends TSchema, R extends TSchema>(unionType: L, excludedMembers: R, options?: SchemaOptions): TExclude<L, R>;
    /** `[Json]` Creates a Conditional type */
    Extends<L extends TMappedResult, R extends TSchema, T extends TSchema, F extends TSchema>(L: L, R: R, T: T, F: F, options?: SchemaOptions): TExtendsFromMappedResult<L, R, T, F>;
    /** `[Json]` Creates a Conditional type */
    Extends<L extends TMappedKey, R extends TSchema, T extends TSchema, F extends TSchema>(L: L, R: R, T: T, F: F, options?: SchemaOptions): TExtendsFromMappedKey<L, R, T, F>;
    /** `[Json]` Creates a Conditional type */
    Extends<L extends TSchema, R extends TSchema, T extends TSchema, F extends TSchema>(L: L, R: R, T: T, F: F, options?: SchemaOptions): TExtends<L, R, T, F>;
    /** `[Json]` Constructs a type by extracting from type all union members that are assignable to union */
    Extract<L extends TMappedResult, R extends TSchema>(type: L, union: R, options?: SchemaOptions): TExtractFromMappedResult<L, R>;
    /** `[Json]` Constructs a type by extracting from type all union members that are assignable to union */
    Extract<L extends TTemplateLiteral, R extends TSchema>(type: L, union: R, options?: SchemaOptions): TExtractFromTemplateLiteral<L, R>;
    /** `[Json]` Constructs a type by extracting from type all union members that are assignable to union */
    Extract<L extends TSchema, R extends TSchema>(type: L, union: R, options?: SchemaOptions): TExtract<L, R>;
    /** `[Json]` Returns an Indexed property type for the given keys */
    Index<T extends TSchema, K extends TMappedResult>(T: T, K: K, options?: SchemaOptions): TIndexFromMappedResult<T, K>;
    /** `[Json]` Returns an Indexed property type for the given keys */
    Index<T extends TSchema, K extends TMappedKey>(T: T, K: K, options?: SchemaOptions): TIndexFromMappedKey<T, K>;
    /** `[Json]` Returns an Indexed property type for the given keys */
    Index<T extends TSchema, K extends TSchema, I extends PropertyKey[] = TIndexPropertyKeys<K>>(T: T, K: K, options?: SchemaOptions): TIndex<T, I>;
    /** `[Json]` Returns an Indexed property type for the given keys */
    Index<T extends TSchema, K extends PropertyKey[]>(T: T, K: readonly [...K], options?: SchemaOptions): TIndex<T, K>;
    /** `[Json]` Creates an Integer type */
    Integer(options?: IntegerOptions): TInteger;
    /** `[Json]` Creates an Intersect type */
    Intersect<T extends TSchema[]>(T: [...T], options?: IntersectOptions): Intersect<T>;
    /** `[Json]` Creates a KeyOf type */
    KeyOf<T extends TMappedResult>(schema: T, options?: SchemaOptions): TKeyOfFromMappedResult<T>;
    /** `[Json]` Creates a KeyOf type */
    KeyOf<T extends TSchema>(schema: T, options?: SchemaOptions): TKeyOf<T>;
    /** `[Json]` Creates a Literal type */
    Literal<T extends TLiteralValue>(value: T, options?: SchemaOptions): TLiteral<T>;
    /** `[Json]` Intrinsic function to Lowercase LiteralString types */
    Lowercase<T extends TSchema>(schema: T, options?: SchemaOptions): TLowercase<T>;
    /** `[Json]` Creates a Mapped object type */
    Mapped<K extends TSchema, I extends PropertyKey[] = TIndexPropertyKeys<K>, F extends TMappedFunction<I> = TMappedFunction<I>, R extends TMapped<I, F> = TMapped<I, F>>(key: K, map: F, options?: ObjectOptions): R;
    /** `[Json]` Creates a Mapped object type */
    Mapped<K extends PropertyKey[], F extends TMappedFunction<K> = TMappedFunction<K>, R extends TMapped<K, F> = TMapped<K, F>>(key: [...K], map: F, options?: ObjectOptions): R;
    /** `[Json]` Creates a Never type */
    Never(options?: SchemaOptions): TNever;
    /** `[Json]` Creates a Not type */
    Not<T extends TSchema>(schema: T, options?: SchemaOptions): TNot<T>;
    /** `[Json]` Creates a Null type */
    Null(options?: SchemaOptions): TNull;
    /** `[Json]` Creates a Number type */
    Number(options?: NumberOptions): TNumber;
    /** `[Json]` Creates an Object type */
    Object<T extends TProperties>(properties: T, options?: ObjectOptions): TObject<T>;
    /** `[Json]` Constructs a type whose keys are omitted from the given type */
    Omit<T extends TMappedResult, K extends PropertyKey[]>(T: T, K: [...K], options?: SchemaOptions): TOmitFromMappedResult<T, K>;
    /** `[Json]` Constructs a type whose keys are omitted from the given type */
    Omit<T extends TSchema, K extends TMappedKey>(T: T, K: K): TOmitFromMappedKey<T, K>;
    /** `[Json]` Constructs a type whose keys are omitted from the given type */
    Omit<T extends TSchema, K extends TSchema, I extends PropertyKey[] = TIndexPropertyKeys<K>>(T: T, K: K, options?: SchemaOptions): TOmit<T, I>;
    /** `[Json]` Constructs a type whose keys are omitted from the given type */
    Omit<T extends TSchema, K extends PropertyKey[]>(T: T, K: readonly [...K], options?: SchemaOptions): TOmit<T, K>;
    /** `[Json]` Constructs a type where all properties are optional */
    Partial<T extends TMappedResult>(T: T, options?: ObjectOptions): TPartialFromMappedResult<T>;
    /** `[Json]` Constructs a type where all properties are optional */
    Partial<T extends TSchema>(schema: T, options?: ObjectOptions): TPartial<T>;
    /** `[Json]` Constructs a type whose keys are picked from the given type */
    Pick<T extends TMappedResult, K extends PropertyKey[]>(T: T, K: [...K]): TPickFromMappedResult<T, K>;
    /** `[Json]` Constructs a type whose keys are picked from the given type */
    Pick<T extends TSchema, K extends TMappedKey>(T: T, K: K): TPickFromMappedKey<T, K>;
    /** `[Json]` Constructs a type whose keys are picked from the given type */
    Pick<T extends TSchema, K extends TSchema, I extends PropertyKey[] = TIndexPropertyKeys<K>>(T: T, K: K, options?: SchemaOptions): TPick<T, I>;
    /** `[Json]` Constructs a type whose keys are picked from the given type */
    Pick<T extends TSchema, K extends PropertyKey[]>(T: T, K: readonly [...K], options?: SchemaOptions): TPick<T, K>;
    /** `[Json]` Creates a Record type */
    Record<K extends TSchema, T extends TSchema>(key: K, schema: T, options?: ObjectOptions): TRecordOrObject<K, T>;
    /** `[Json]` Creates a Recursive type */
    Recursive<T extends TSchema>(callback: (thisType: TThis) => T, options?: SchemaOptions): TRecursive<T>;
    /** `[Json]` Creates a Ref type. The referenced type must contain a $id */
    Ref<T extends TSchema>(schema: T, options?: SchemaOptions): TRef<T>;
    /** `[Json]` Creates a Ref type. */
    Ref<T extends TSchema>($ref: string, options?: SchemaOptions): TRef<T>;
    /** `[Json]` Constructs a type where all properties are required */
    Required<T extends TMappedResult>(T: T, options?: ObjectOptions): TRequiredFromMappedResult<T>;
    /** `[Json]` Constructs a type where all properties are required */
    Required<T extends TSchema>(schema: T, options?: ObjectOptions): TRequired<T>;
    /** `[Json]` Extracts interior Rest elements from Tuple, Intersect and Union types */
    Rest<T extends TSchema>(schema: T): TRest<T>;
    /** `[Json]` Creates a String type */
    String(options?: StringOptions): TString;
    /** `[Json]` Creates a TemplateLiteral type from template dsl string */
    TemplateLiteral<T extends string>(syntax: T, options?: SchemaOptions): TTemplateLiteralSyntax<T>;
    /** `[Json]` Creates a TemplateLiteral type */
    TemplateLiteral<T extends TTemplateLiteralKind[]>(kinds: [...T], options?: SchemaOptions): TTemplateLiteral<T>;
    /** `[Json]` Creates a Transform type */
    Transform<I extends TSchema>(schema: I): TransformDecodeBuilder<I>;
    /** `[Json]` Creates a Tuple type */
    Tuple<T extends TSchema[]>(items: [...T], options?: SchemaOptions): TTuple<T>;
    /** `[Json]` Intrinsic function to Uncapitalize LiteralString types */
    Uncapitalize<T extends TSchema>(schema: T, options?: SchemaOptions): TUncapitalize<T>;
    /** `[Json]` Creates a Union type */
    Union<T extends TSchema[]>(schemas: [...T], options?: SchemaOptions): Union<T>;
    /** `[Json]` Creates an Unknown type */
    Unknown(options?: SchemaOptions): TUnknown;
    /** `[Json]` Creates a Unsafe type that will infers as the generic argument T */
    Unsafe<T>(options?: UnsafeOptions): TUnsafe<T>;
    /** `[Json]` Intrinsic function to Uppercase LiteralString types */
    Uppercase<T extends TSchema>(schema: T, options?: SchemaOptions): TUppercase<T>;
}
