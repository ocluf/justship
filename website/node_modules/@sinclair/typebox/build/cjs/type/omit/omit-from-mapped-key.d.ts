import type { TSchema, SchemaOptions } from '../schema/index';
import type { TProperties } from '../object/index';
import { type TMappedResult, type TMappedKey } from '../mapped/index';
import { type TOmit } from './omit';
type TFromPropertyKey<T extends TSchema, K extends PropertyKey> = {
    [_ in K]: TOmit<T, [K]>;
};
type TFromPropertyKeys<T extends TSchema, K extends PropertyKey[], Acc extends TProperties = {}> = (K extends [infer LK extends PropertyKey, ...infer RK extends PropertyKey[]] ? TFromPropertyKeys<T, RK, Acc & TFromPropertyKey<T, LK>> : Acc);
type TFromMappedKey<T extends TSchema, K extends TMappedKey> = (TFromPropertyKeys<T, K['keys']>);
export type TOmitFromMappedKey<T extends TSchema, K extends TMappedKey, P extends TProperties = TFromMappedKey<T, K>> = (TMappedResult<P>);
export declare function OmitFromMappedKey<T extends TSchema, K extends TMappedKey, P extends TProperties = TFromMappedKey<T, K>>(T: T, K: K, options: SchemaOptions): TMappedResult<P>;
export {};
