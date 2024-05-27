import type { TSchema } from '../schema/index.mjs';
import { type TNever } from '../never/index.mjs';
import { type TOptional } from '../optional/index.mjs';
import type { TReadonly } from '../readonly/index.mjs';
import { TIntersect, IntersectOptions } from './intersect-type.mjs';
type TIsIntersectOptional<T extends TSchema[]> = (T extends [infer L extends TSchema, ...infer R extends TSchema[]] ? L extends TOptional<TSchema> ? TIsIntersectOptional<R> : false : true);
type TRemoveOptionalFromType<T extends TSchema> = (T extends TReadonly<infer S extends TSchema> ? TReadonly<TRemoveOptionalFromType<S>> : T extends TOptional<infer S extends TSchema> ? TRemoveOptionalFromType<S> : T);
type TRemoveOptionalFromRest<T extends TSchema[], Acc extends TSchema[] = []> = (T extends [infer L extends TSchema, ...infer R extends TSchema[]] ? L extends TOptional<infer S extends TSchema> ? TRemoveOptionalFromRest<R, [...Acc, TRemoveOptionalFromType<S>]> : TRemoveOptionalFromRest<R, [...Acc, L]> : Acc);
type TResolveIntersect<T extends TSchema[]> = (TIsIntersectOptional<T> extends true ? TOptional<TIntersect<TRemoveOptionalFromRest<T>>> : TIntersect<TRemoveOptionalFromRest<T>>);
export type TIntersectEvaluated<T extends TSchema[]> = (T extends [] ? TNever : T extends [TSchema] ? T[0] : TResolveIntersect<T>);
/** `[Json]` Creates an evaluated Intersect type */
export declare function IntersectEvaluated<T extends TSchema[], R = TIntersectEvaluated<T>>(T: [...T], options?: IntersectOptions): R;
export {};
