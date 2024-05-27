import type { TSchema, SchemaOptions } from '../schema/index.mjs';
import type { Evaluate } from '../helpers/index.mjs';
import type { TMappedResult } from '../mapped/index.mjs';
import { type TReadonlyOptional } from '../readonly-optional/index.mjs';
import { type TOptional } from '../optional/index.mjs';
import { type TReadonly } from '../readonly/index.mjs';
import { type TRecursive } from '../recursive/index.mjs';
import { type TIntersect } from '../intersect/index.mjs';
import { type TUnion } from '../union/index.mjs';
import { type TObject, type TProperties } from '../object/index.mjs';
import { type TRequiredFromMappedResult } from './required-from-mapped-result.mjs';
type TFromRest<T extends TSchema[], Acc extends TSchema[] = []> = (T extends [infer L extends TSchema, ...infer R extends TSchema[]] ? TFromRest<R, [...Acc, TRequired<L>]> : Acc);
type TFromProperties<T extends TProperties> = Evaluate<{
    [K in keyof T]: T[K] extends (TReadonlyOptional<infer S>) ? TReadonly<S> : T[K] extends (TReadonly<infer S>) ? TReadonly<S> : T[K] extends (TOptional<infer S>) ? S : T[K];
}>;
export type TRequired<T extends TSchema> = (T extends TRecursive<infer S> ? TRecursive<TRequired<S>> : T extends TIntersect<infer S> ? TIntersect<TFromRest<S>> : T extends TUnion<infer S> ? TUnion<TFromRest<S>> : T extends TObject<infer S> ? TObject<TFromProperties<S>> : TObject<{}>);
/** `[Json]` Constructs a type where all properties are required */
export declare function Required<T extends TMappedResult>(T: T, options?: SchemaOptions): TRequiredFromMappedResult<T>;
/** `[Json]` Constructs a type where all properties are required */
export declare function Required<T extends TSchema>(T: T, options?: SchemaOptions): TRequired<T>;
export {};
