import type { TSchema, SchemaOptions } from '../schema/index.mjs';
import type { TProperties } from '../object/index.mjs';
import { type TMappedResult, type TMappedKey } from '../mapped/index.mjs';
import { type TPick } from './pick.mjs';
type TFromPropertyKey<T extends TSchema, K extends PropertyKey> = {
    [_ in K]: TPick<T, [K]>;
};
type TFromPropertyKeys<T extends TSchema, K extends PropertyKey[], Acc extends TProperties = {}> = (K extends [infer LK extends PropertyKey, ...infer RK extends PropertyKey[]] ? TFromPropertyKeys<T, RK, Acc & TFromPropertyKey<T, LK>> : Acc);
type TFromMappedKey<T extends TSchema, K extends TMappedKey> = (TFromPropertyKeys<T, K['keys']>);
export type TPickFromMappedKey<T extends TSchema, K extends TMappedKey, P extends TProperties = TFromMappedKey<T, K>> = (TMappedResult<P>);
export declare function PickFromMappedKey<T extends TSchema, K extends TMappedKey, P extends TProperties = TFromMappedKey<T, K>>(T: T, K: K, options: SchemaOptions): TMappedResult<P>;
export {};
