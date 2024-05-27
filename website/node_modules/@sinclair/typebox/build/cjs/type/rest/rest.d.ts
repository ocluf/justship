import type { TSchema } from '../schema/index';
import type { TIntersect } from '../intersect/index';
import type { TUnion } from '../union/index';
import type { TTuple } from '../tuple/index';
type TRestResolve<T extends TSchema> = T extends TIntersect<infer S> ? [...S] : T extends TUnion<infer S> ? [...S] : T extends TTuple<infer S> ? [...S] : [
];
export type TRest<T extends TSchema> = TRestResolve<T>;
/** `[Json]` Extracts interior Rest elements from Tuple, Intersect and Union types */
export declare function Rest<T extends TSchema>(T: T): TRest<T>;
export {};
