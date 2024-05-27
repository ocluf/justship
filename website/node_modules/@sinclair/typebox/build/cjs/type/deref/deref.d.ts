import type { TSchema } from '../schema/index';
import type { Evaluate } from '../helpers/index';
import type { TTuple } from '../tuple/index';
import type { TIntersect } from '../intersect/index';
import type { TUnion } from '../union/index';
import type { TPromise } from '../promise/index';
import type { TAsyncIterator } from '../async-iterator/index';
import type { TIterator } from '../iterator/index';
import type { TArray } from '../array/index';
import type { TConstructor } from '../constructor/index';
import type { TFunction } from '../function/index';
import type { TRef } from '../ref/index';
import type { TObject, TProperties } from '../object/index';
export type TFromRest<T extends TSchema[], Acc extends TSchema[] = []> = (T extends [infer L extends TSchema, ...infer R extends TSchema[]] ? TFromRest<R, [...Acc, TDeref<L>]> : Acc);
type FromProperties<T extends TProperties> = Evaluate<{
    [K in keyof T]: TDeref<T[K]>;
}>;
declare function FromProperties(properties: TProperties, references: TSchema[]): never;
export type TDeref<T extends TSchema> = T extends TConstructor<infer S extends TSchema[], infer R extends TSchema> ? TConstructor<TFromRest<S>, TDeref<R>> : T extends TFunction<infer S extends TSchema[], infer R extends TSchema> ? TFunction<TFromRest<S>, TDeref<R>> : T extends TIntersect<infer S extends TSchema[]> ? TIntersect<TFromRest<S>> : T extends TUnion<infer S extends TSchema[]> ? TUnion<TFromRest<S>> : T extends TTuple<infer S extends TSchema[]> ? TTuple<TFromRest<S>> : T extends TObject<infer S extends TProperties> ? TObject<FromProperties<S>> : T extends TArray<infer S extends TSchema> ? TArray<TDeref<S>> : T extends TPromise<infer S extends TSchema> ? TPromise<TDeref<S>> : T extends TAsyncIterator<infer S extends TSchema> ? TAsyncIterator<TDeref<S>> : T extends TIterator<infer S extends TSchema> ? TIterator<TDeref<S>> : T extends TRef<infer S extends TSchema> ? TDeref<S> : T;
/** `[Json]` Creates a dereferenced type */
export declare function Deref<T extends TSchema>(schema: T, references: TSchema[]): TDeref<T>;
export {};
