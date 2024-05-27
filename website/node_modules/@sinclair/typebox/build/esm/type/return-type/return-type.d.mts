import type { SchemaOptions } from '../schema/index.mjs';
import type { TFunction } from '../function/index.mjs';
export type TReturnType<T extends TFunction> = T['returns'];
/** `[JavaScript]` Extracts the ReturnType from the given Function type */
export declare function ReturnType<T extends TFunction<any[], any>>(schema: T, options?: SchemaOptions): TReturnType<T>;
