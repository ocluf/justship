import type { SchemaOptions, TSchema } from '../schema/index.mjs';
import { type TNever } from '../never/index.mjs';
import { type TOptional } from '../optional/index.mjs';
import type { TReadonly } from '../readonly/index.mjs';
import type { TUnion } from './union-type.mjs';
type TIsUnionOptional<T extends TSchema[]> = (T extends [infer L extends TSchema, ...infer R extends TSchema[]] ? L extends TOptional<TSchema> ? true : TIsUnionOptional<R> : false);
type TRemoveOptionalFromRest<T extends TSchema[], Acc extends TSchema[] = []> = (T extends [infer L extends TSchema, ...infer R extends TSchema[]] ? L extends TOptional<infer S extends TSchema> ? TRemoveOptionalFromRest<R, [...Acc, TRemoveOptionalFromType<S>]> : TRemoveOptionalFromRest<R, [...Acc, L]> : Acc);
type TRemoveOptionalFromType<T extends TSchema> = (T extends TReadonly<infer S extends TSchema> ? TReadonly<TRemoveOptionalFromType<S>> : T extends TOptional<infer S extends TSchema> ? TRemoveOptionalFromType<S> : T);
type TResolveUnion<T extends TSchema[], R extends TSchema[] = TRemoveOptionalFromRest<T>> = (TIsUnionOptional<T> extends true ? TOptional<TUnion<R>> : TUnion<R>);
export type TUnionEvaluated<T extends TSchema[]> = (T extends [] ? TNever : T extends [TSchema] ? T[0] : TResolveUnion<T>);
/** `[Json]` Creates an evaluated Union type */
export declare function UnionEvaluated<T extends TSchema[], R = TUnionEvaluated<T>>(T: [...T], options?: SchemaOptions): R;
export {};
