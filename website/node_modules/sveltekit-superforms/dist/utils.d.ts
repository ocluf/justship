import type { JSONSchema7Definition } from 'json-schema';
import type { JSONSchema } from './jsonSchema/index.js';
export type NumericRange<START extends number, END extends number, ARR extends unknown[] = [], ACC extends number = never> = ARR['length'] extends END ? ACC | START | END : NumericRange<START, END, [...ARR, 1], ARR[START] extends undefined ? ACC : ACC | ARR['length']>;
export type ErrorStatus = NumericRange<400, 599>;
export declare function clone<T>(data: T): T;
export type MaybePromise<T> = T | Promise<T>;
export type Prettify<T> = T extends object ? {
    [K in keyof T]: T[K];
} : T & {};
export type IsAny<T> = boolean extends (T extends never ? true : false) ? true : false;
export declare function assertSchema(schema: JSONSchema7Definition, path: string | (string | number | symbol)[]): asserts schema is JSONSchema;
export type AllKeys<T> = T extends T ? keyof T : never;
type PickType<T, K extends AllKeys<T>> = T extends {
    [k in K]: any;
} ? T[K] : never;
export type MergeUnion<T> = {
    [K in AllKeys<T>]: PickType<T, K>;
};
export {};
