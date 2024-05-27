import type { TSchema } from '../schema/index';
import type { Static } from '../static/index';
import type { Evaluate, Ensure, Assert } from '../helpers/index';
import { type TObject, type TProperties, type TAdditionalProperties, type ObjectOptions } from '../object/index';
import { type TLiteral, type TLiteralValue } from '../literal/index';
import { type TNever } from '../never/index';
import { type TUnion } from '../union/index';
import { type TRegExp } from '../regexp/index';
import { type TString } from '../string/index';
import { type TInteger } from '../integer/index';
import { type TNumber } from '../number/index';
import { type TEnum } from '../enum/index';
import { TIsTemplateLiteralFinite, type TTemplateLiteral } from '../template-literal/index';
import { Kind } from '../symbols/index';
type TFromTemplateLiteralKeyInfinite<K extends TTemplateLiteral, T extends TSchema> = Ensure<TRecord<K, T>>;
type TFromTemplateLiteralKeyFinite<K extends TTemplateLiteral, T extends TSchema, I extends string = Static<K>> = (Ensure<TObject<Evaluate<{
    [_ in I]: T;
}>>>);
type TFromTemplateLiteralKey<K extends TTemplateLiteral, T extends TSchema> = TIsTemplateLiteralFinite<K> extends false ? TFromTemplateLiteralKeyInfinite<K, T> : TFromTemplateLiteralKeyFinite<K, T>;
type TFromEnumKey<K extends Record<string, string | number>, T extends TSchema> = Ensure<TObject<{
    [_ in K[keyof K]]: T;
}>>;
type TFromUnionKeyLiteralString<K extends TLiteral<string>, T extends TSchema> = {
    [_ in K['const']]: T;
};
type TFromUnionKeyLiteralNumber<K extends TLiteral<number>, T extends TSchema> = {
    [_ in K['const']]: T;
};
type TFromUnionKeyRest<K extends TSchema[], T extends TSchema> = K extends [infer L extends TSchema, ...infer R extends TSchema[]] ? (L extends TUnion<infer S> ? TFromUnionKeyRest<S, T> & TFromUnionKeyRest<R, T> : L extends TLiteral<string> ? TFromUnionKeyLiteralString<L, T> & TFromUnionKeyRest<R, T> : L extends TLiteral<number> ? TFromUnionKeyLiteralNumber<L, T> & TFromUnionKeyRest<R, T> : {}) : {};
type TFromUnionKey<K extends TSchema[], T extends TSchema, P extends TProperties = TFromUnionKeyRest<K, T>> = (Ensure<TObject<Evaluate<P>>>);
type TFromLiteralKey<K extends TLiteralValue, T extends TSchema> = (Ensure<TObject<{
    [_ in Assert<K, PropertyKey>]: T;
}>>);
type TFromRegExpKey<_ extends TRegExp, T extends TSchema> = (Ensure<TRecord<TRegExp, T>>);
type TFromStringKey<_ extends TString, T extends TSchema> = (Ensure<TRecord<TString, T>>);
type TFromIntegerKey<_ extends TSchema, T extends TSchema> = (Ensure<TRecord<TNumber, T>>);
type TFromNumberKey<_ extends TSchema, T extends TSchema> = (Ensure<TRecord<TNumber, T>>);
type RecordStatic<K extends TSchema, T extends TSchema, P extends unknown[]> = (Evaluate<{
    [_ in Assert<Static<K>, PropertyKey>]: Static<T, P>;
}>);
export interface TRecord<K extends TSchema = TSchema, T extends TSchema = TSchema> extends TSchema {
    [Kind]: 'Record';
    static: RecordStatic<K, T, this['params']>;
    type: 'object';
    patternProperties: {
        [pattern: string]: T;
    };
    additionalProperties: TAdditionalProperties;
}
export type TRecordOrObject<K extends TSchema, T extends TSchema> = K extends TTemplateLiteral ? TFromTemplateLiteralKey<K, T> : K extends TEnum<infer S> ? TFromEnumKey<S, T> : K extends TUnion<infer S> ? TFromUnionKey<S, T> : K extends TLiteral<infer S> ? TFromLiteralKey<S, T> : K extends TInteger ? TFromIntegerKey<K, T> : K extends TNumber ? TFromNumberKey<K, T> : K extends TRegExp ? TFromRegExpKey<K, T> : K extends TString ? TFromStringKey<K, T> : TNever;
/** `[Json]` Creates a Record type */
export declare function Record<K extends TSchema, T extends TSchema>(K: K, T: T, options?: ObjectOptions): TRecordOrObject<K, T>;
export {};
