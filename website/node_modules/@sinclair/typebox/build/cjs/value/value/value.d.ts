import { type Mutable } from '../mutate/index';
import { Edit } from '../delta/index';
import { ValueErrorIterator } from '../../errors/index';
import type { TSchema } from '../../type/schema/index';
import type { Static, StaticDecode, StaticEncode } from '../../type/static/index';
/** Casts a value into a given type. The return value will retain as much information of the original value as possible. */
export declare function Cast<T extends TSchema>(schema: T, references: TSchema[], value: unknown): Static<T>;
/** Casts a value into a given type. The return value will retain as much information of the original value as possible. */
export declare function Cast<T extends TSchema>(schema: T, value: unknown): Static<T>;
/** Creates a value from the given type and references */
export declare function Create<T extends TSchema>(schema: T, references: TSchema[]): Static<T>;
/** Creates a value from the given type */
export declare function Create<T extends TSchema>(schema: T): Static<T>;
/** Returns true if the value matches the given type and references */
export declare function Check<T extends TSchema>(schema: T, references: TSchema[], value: unknown): value is Static<T>;
/** Returns true if the value matches the given type */
export declare function Check<T extends TSchema>(schema: T, value: unknown): value is Static<T>;
/** `[Mutable]` Removes excess properties from a value and returns the result. This function does not check the value and returns an unknown type. You should Check the result before use. Clean is a mutable operation. To avoid mutation, Clone the value first. */
export declare function Clean(schema: TSchema, references: TSchema[], value: unknown): unknown;
/** `[Mutable]` Removes excess properties from a value and returns the result. This function does not check the value and returns an unknown type. You should Check the result before use. Clean is a mutable operation. To avoid mutation, Clone the value first. */
export declare function Clean(schema: TSchema, value: unknown): unknown;
/** Converts any type mismatched values to their target type if a reasonable conversion is possible. */
export declare function Convert(schema: TSchema, references: TSchema[], value: unknown): unknown;
/** Converts any type mismatched values to their target type if a reasonable conversion is possible. */
export declare function Convert(schema: TSchema, value: unknown): unknown;
/** Returns a structural clone of the given value */
export declare function Clone<T>(value: T): T;
/** Decodes a value or throws if error */
export declare function Decode<T extends TSchema, R = StaticDecode<T>>(schema: T, references: TSchema[], value: unknown): R;
/** Decodes a value or throws if error */
export declare function Decode<T extends TSchema, R = StaticDecode<T>>(schema: T, value: unknown): R;
/** `[Mutable]` Generates missing properties on a value using default schema annotations if available. This function does not check the value and returns an unknown type. You should Check the result before use. Default is a mutable operation. To avoid mutation, Clone the value first. */
export declare function Default(schema: TSchema, references: TSchema[], value: unknown): unknown;
/** `[Mutable]` Generates missing properties on a value using default schema annotations if available. This function does not check the value and returns an unknown type. You should Check the result before use. Default is a mutable operation. To avoid mutation, Clone the value first. */
export declare function Default(schema: TSchema, value: unknown): unknown;
/** Encodes a value or throws if error */
export declare function Encode<T extends TSchema, R = StaticEncode<T>>(schema: T, references: TSchema[], value: unknown): R;
/** Encodes a value or throws if error */
export declare function Encode<T extends TSchema, R = StaticEncode<T>>(schema: T, value: unknown): R;
/** Returns an iterator for each error in this value. */
export declare function Errors<T extends TSchema>(schema: T, references: TSchema[], value: unknown): ValueErrorIterator;
/** Returns an iterator for each error in this value. */
export declare function Errors<T extends TSchema>(schema: T, value: unknown): ValueErrorIterator;
/** Returns true if left and right values are structurally equal */
export declare function Equal<T>(left: T, right: unknown): right is T;
/** Returns edits to transform the current value into the next value */
export declare function Diff(current: unknown, next: unknown): Edit[];
/** Returns a FNV1A-64 non cryptographic hash of the given value */
export declare function Hash(value: unknown): bigint;
/** Returns a new value with edits applied to the given value */
export declare function Patch<T = any>(current: unknown, edits: Edit[]): T;
/** `[Mutable]` Performs a deep mutable value assignment while retaining internal references. */
export declare function Mutate(current: Mutable, next: Mutable): void;
