import type { TSchema } from '../schema/index.mjs';
import type { Assert, Ensure } from '../helpers/index.mjs';
import type { TMappedResult } from '../mapped/index.mjs';
import type { SchemaOptions } from '../schema/index.mjs';
import { type TLiteral, type TLiteralValue } from '../literal/index.mjs';
import { type TNumber } from '../number/index.mjs';
import { type TKeyOfPropertyKeys } from './keyof-property-keys.mjs';
import { type TUnionEvaluated } from '../union/index.mjs';
import { type TKeyOfFromMappedResult } from './keyof-from-mapped-result.mjs';
export type TKeyOfPropertyKeysToRest<T extends PropertyKey[], Acc extends TSchema[] = []> = (T extends [infer L extends PropertyKey, ...infer R extends PropertyKey[]] ? L extends '[number]' ? TKeyOfPropertyKeysToRest<R, [...Acc, TNumber]> : TKeyOfPropertyKeysToRest<R, [...Acc, TLiteral<Assert<L, TLiteralValue>>]> : Acc);
export declare function KeyOfPropertyKeysToRest<T extends PropertyKey[]>(T: [...T]): TKeyOfPropertyKeysToRest<T>;
export type TKeyOf<T extends TSchema, K extends PropertyKey[] = TKeyOfPropertyKeys<T>, S extends TSchema[] = TKeyOfPropertyKeysToRest<K>, U = TUnionEvaluated<S>> = (Ensure<U>);
/** `[Json]` Creates a KeyOf type */
export declare function KeyOf<T extends TMappedResult>(T: T, options?: SchemaOptions): TKeyOfFromMappedResult<T>;
/** `[Json]` Creates a KeyOf type */
export declare function KeyOf<T extends TSchema>(T: T, options?: SchemaOptions): TKeyOf<T>;
