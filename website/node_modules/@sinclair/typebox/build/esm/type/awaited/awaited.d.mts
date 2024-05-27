import type { TSchema, SchemaOptions } from '../schema/index.mjs';
import { type TIntersect } from '../intersect/index.mjs';
import { type TUnion } from '../union/index.mjs';
import { type TPromise } from '../promise/index.mjs';
type TFromRest<T extends TSchema[], Acc extends TSchema[] = []> = T extends [infer L extends TSchema, ...infer R extends TSchema[]] ? TFromRest<R, [...Acc, TAwaited<L>]> : Acc;
export type TAwaited<T extends TSchema> = T extends TIntersect<infer S> ? TIntersect<TFromRest<S>> : T extends TUnion<infer S> ? TUnion<TFromRest<S>> : T extends TPromise<infer S> ? TAwaited<S> : T;
/** `[JavaScript]` Constructs a type by recursively unwrapping Promise types */
export declare function Awaited<T extends TSchema>(T: T, options?: SchemaOptions): TAwaited<T>;
export {};
