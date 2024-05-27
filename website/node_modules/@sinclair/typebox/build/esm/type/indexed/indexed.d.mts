import { type TSchema, SchemaOptions } from '../schema/index.mjs';
import { type TObject, type TProperties } from '../object/index.mjs';
import { type Assert } from '../helpers/index.mjs';
import { type TNever } from '../never/index.mjs';
import { type TRecursive } from '../recursive/index.mjs';
import { type TIntersect } from '../intersect/index.mjs';
import { TMappedResult, type TMappedKey } from '../mapped/index.mjs';
import { type TUnion } from '../union/index.mjs';
import { type TTuple } from '../tuple/index.mjs';
import { type TArray } from '../array/index.mjs';
import { type TIntersectEvaluated } from '../intersect/index.mjs';
import { type TUnionEvaluated } from '../union/index.mjs';
import { type TIndexPropertyKeys } from './indexed-property-keys.mjs';
import { type TIndexFromMappedKey } from './indexed-from-mapped-key.mjs';
import { type TIndexFromMappedResult } from './indexed-from-mapped-result.mjs';
type TFromRest<T extends TSchema[], K extends PropertyKey, Acc extends TSchema[] = []> = (T extends [infer L extends TSchema, ...infer R extends TSchema[]] ? TFromRest<R, K, [...Acc, Assert<TIndexFromPropertyKey<L, K>, TSchema>]> : Acc);
type TFromIntersectRest<T extends TSchema[], Acc extends TSchema[] = []> = (T extends [infer L extends TSchema, ...infer R extends TSchema[]] ? L extends TNever ? TFromIntersectRest<R, [...Acc]> : TFromIntersectRest<R, [...Acc, L]> : Acc);
type TFromIntersect<T extends TSchema[], K extends PropertyKey> = (TIntersectEvaluated<TFromIntersectRest<TFromRest<T, K>>>);
type TFromUnionRest<T extends TSchema[], Acc extends TSchema[] = []> = T extends [infer L extends TSchema, ...infer R extends TSchema[]] ? L extends TNever ? [] : TFromUnionRest<R, [L, ...Acc]> : Acc;
type TFromUnion<T extends TSchema[], K extends PropertyKey> = (TUnionEvaluated<TFromUnionRest<TFromRest<T, K>>>);
type TFromTuple<T extends TSchema[], K extends PropertyKey> = (K extends keyof T ? T[K] : K extends '[number]' ? TUnionEvaluated<T> : TNever);
type TFromArray<T extends TSchema, K extends PropertyKey> = (K extends '[number]' ? T : TNever);
type AssertPropertyKey<T> = Assert<T, string | number>;
type TFromProperty<T extends TProperties, K extends PropertyKey> = (K extends keyof T ? T[K] : `${AssertPropertyKey<K>}` extends `${AssertPropertyKey<keyof T>}` ? T[AssertPropertyKey<K>] : TNever);
export type TIndexFromPropertyKey<T extends TSchema, K extends PropertyKey> = (T extends TRecursive<infer S> ? TIndexFromPropertyKey<S, K> : T extends TIntersect<infer S> ? TFromIntersect<S, K> : T extends TUnion<infer S> ? TFromUnion<S, K> : T extends TTuple<infer S> ? TFromTuple<S, K> : T extends TArray<infer S> ? TFromArray<S, K> : T extends TObject<infer S> ? TFromProperty<S, K> : TNever);
export declare function IndexFromPropertyKey<T extends TSchema, K extends PropertyKey>(T: T, K: K): TIndexFromPropertyKey<T, K>;
export type TIndexFromPropertyKeys<T extends TSchema, K extends PropertyKey[], Acc extends TSchema[] = []> = (K extends [infer L extends PropertyKey, ...infer R extends PropertyKey[]] ? TIndexFromPropertyKeys<T, R, [...Acc, Assert<TIndexFromPropertyKey<T, L>, TSchema>]> : Acc);
export declare function IndexFromPropertyKeys<T extends TSchema, K extends PropertyKey[]>(T: T, K: [...K]): TIndexFromPropertyKeys<T, K>;
type FromSchema<T extends TSchema, K extends PropertyKey[]> = (TUnionEvaluated<TIndexFromPropertyKeys<T, K>>);
declare function FromSchema<T extends TSchema, K extends PropertyKey[]>(T: T, K: [...K]): FromSchema<T, K>;
export type TIndex<T extends TSchema, K extends PropertyKey[]> = (FromSchema<T, K>);
/** `[Json]` Returns an Indexed property type for the given keys */
export declare function Index<T extends TSchema, K extends TMappedResult>(T: T, K: K, options?: SchemaOptions): TIndexFromMappedResult<T, K>;
/** `[Json]` Returns an Indexed property type for the given keys */
export declare function Index<T extends TSchema, K extends TMappedKey>(T: T, K: K, options?: SchemaOptions): TIndexFromMappedKey<T, K>;
/** `[Json]` Returns an Indexed property type for the given keys */
export declare function Index<T extends TSchema, K extends TSchema, I extends PropertyKey[] = TIndexPropertyKeys<K>>(T: T, K: K, options?: SchemaOptions): TIndex<T, I>;
/** `[Json]` Returns an Indexed property type for the given keys */
export declare function Index<T extends TSchema, K extends PropertyKey[]>(T: T, K: readonly [...K], options?: SchemaOptions): TIndex<T, K>;
export {};
