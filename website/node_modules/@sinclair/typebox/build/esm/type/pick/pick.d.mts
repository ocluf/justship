import type { TSchema, SchemaOptions } from '../schema/index.mjs';
import type { TupleToUnion, Evaluate } from '../helpers/index.mjs';
import { type TRecursive } from '../recursive/index.mjs';
import { type TIntersect } from '../intersect/index.mjs';
import { type TUnion } from '../union/index.mjs';
import { type TObject, type TProperties } from '../object/index.mjs';
import type { TMappedKey, TMappedResult } from '../mapped/index.mjs';
import { type TIndexPropertyKeys } from '../indexed/index.mjs';
import { type TPickFromMappedKey } from './pick-from-mapped-key.mjs';
import { type TPickFromMappedResult } from './pick-from-mapped-result.mjs';
type FromIntersect<T extends TSchema[], K extends PropertyKey[], Acc extends TSchema[] = []> = T extends [infer L extends TSchema, ...infer R extends TSchema[]] ? FromIntersect<R, K, [...Acc, TPick<L, K>]> : Acc;
declare function FromIntersect<T extends TSchema[], K extends PropertyKey[]>(T: T, K: K): FromIntersect<T, K, []>;
type FromUnion<T extends TSchema[], K extends PropertyKey[], Acc extends TSchema[] = []> = T extends [infer L extends TSchema, ...infer R extends TSchema[]] ? FromUnion<R, K, [...Acc, TPick<L, K>]> : Acc;
declare function FromUnion<T extends TSchema[], K extends PropertyKey[]>(T: T, K: K): FromUnion<T, K, []>;
type FromProperties<T extends TProperties, K extends PropertyKey[], I extends PropertyKey = TupleToUnion<K>> = Evaluate<Pick<T, I & keyof T>>;
declare function FromProperties<T extends TProperties, K extends PropertyKey[]>(T: T, K: K): never;
export type TPick<T extends TProperties, K extends PropertyKey[]> = T extends TRecursive<infer S> ? TRecursive<TPick<S, K>> : T extends TIntersect<infer S> ? TIntersect<FromIntersect<S, K>> : T extends TUnion<infer S> ? TUnion<FromUnion<S, K>> : T extends TObject<infer S> ? TObject<FromProperties<S, K>> : TObject<{}>;
/** `[Json]` Constructs a type whose keys are picked from the given type */
export declare function Pick<T extends TMappedResult, K extends PropertyKey[]>(T: T, K: [...K], options?: SchemaOptions): TPickFromMappedResult<T, K>;
/** `[Json]` Constructs a type whose keys are picked from the given type */
export declare function Pick<T extends TSchema, K extends TMappedKey>(T: T, K: K, options?: SchemaOptions): TPickFromMappedKey<T, K>;
/** `[Json]` Constructs a type whose keys are picked from the given type */
export declare function Pick<T extends TSchema, K extends TSchema, I extends PropertyKey[] = TIndexPropertyKeys<K>>(T: T, K: K, options?: SchemaOptions): TPick<T, I>;
/** `[Json]` Constructs a type whose keys are picked from the given type */
export declare function Pick<T extends TSchema, K extends PropertyKey[]>(T: T, K: readonly [...K], options?: SchemaOptions): TPick<T, K>;
export {};
