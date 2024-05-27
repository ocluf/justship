import type { TSchema } from '../schema/index';
import type { Assert, Ensure } from '../helpers/index';
import type { TMappedResult } from '../mapped/index';
import type { SchemaOptions } from '../schema/index';
import { type TLiteral, type TLiteralValue } from '../literal/index';
import { type TNumber } from '../number/index';
import { type TKeyOfPropertyKeys } from './keyof-property-keys';
import { type TUnionEvaluated } from '../union/index';
import { type TKeyOfFromMappedResult } from './keyof-from-mapped-result';
export type TKeyOfPropertyKeysToRest<T extends PropertyKey[], Acc extends TSchema[] = []> = (T extends [infer L extends PropertyKey, ...infer R extends PropertyKey[]] ? L extends '[number]' ? TKeyOfPropertyKeysToRest<R, [...Acc, TNumber]> : TKeyOfPropertyKeysToRest<R, [...Acc, TLiteral<Assert<L, TLiteralValue>>]> : Acc);
export declare function KeyOfPropertyKeysToRest<T extends PropertyKey[]>(T: [...T]): TKeyOfPropertyKeysToRest<T>;
export type TKeyOf<T extends TSchema, K extends PropertyKey[] = TKeyOfPropertyKeys<T>, S extends TSchema[] = TKeyOfPropertyKeysToRest<K>, U = TUnionEvaluated<S>> = (Ensure<U>);
/** `[Json]` Creates a KeyOf type */
export declare function KeyOf<T extends TMappedResult>(T: T, options?: SchemaOptions): TKeyOfFromMappedResult<T>;
/** `[Json]` Creates a KeyOf type */
export declare function KeyOf<T extends TSchema>(T: T, options?: SchemaOptions): TKeyOf<T>;
