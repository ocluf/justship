import type { TSchema, SchemaOptions } from '../schema/index';
import type { Evaluate } from '../helpers/index';
import type { TMappedResult } from '../mapped/index';
import { type TReadonlyOptional } from '../readonly-optional/index';
import { type TOptional } from '../optional/index';
import { type TReadonly } from '../readonly/index';
import { type TRecursive } from '../recursive/index';
import { type TObject, type TProperties } from '../object/index';
import { type TIntersect } from '../intersect/index';
import { type TUnion } from '../union/index';
import { type TPartialFromMappedResult } from './partial-from-mapped-result';
type TFromRest<T extends TSchema[], Acc extends TSchema[] = []> = (T extends [infer L extends TSchema, ...infer R extends TSchema[]] ? TFromRest<R, [...Acc, TPartial<L>]> : Acc);
type TFromProperties<T extends TProperties> = Evaluate<{
    [K in keyof T]: T[K] extends (TReadonlyOptional<infer S>) ? TReadonlyOptional<S> : T[K] extends (TReadonly<infer S>) ? TReadonlyOptional<S> : T[K] extends (TOptional<infer S>) ? TOptional<S> : TOptional<T[K]>;
}>;
export type TPartial<T extends TSchema> = (T extends TRecursive<infer S> ? TRecursive<TPartial<S>> : T extends TIntersect<infer S> ? TIntersect<TFromRest<S>> : T extends TUnion<infer S> ? TUnion<TFromRest<S>> : T extends TObject<infer S> ? TObject<TFromProperties<S>> : TObject<{}>);
/** `[Json]` Constructs a type where all properties are optional */
export declare function Partial<T extends TMappedResult>(T: T, options?: SchemaOptions): TPartialFromMappedResult<T>;
/** `[Json]` Constructs a type where all properties are optional */
export declare function Partial<T extends TSchema>(T: T, options?: SchemaOptions): TPartial<T>;
export {};
