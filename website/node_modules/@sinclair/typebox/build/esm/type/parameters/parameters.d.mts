import type { TSchema, SchemaOptions } from '../schema/index.mjs';
import type { TFunction } from '../function/index.mjs';
import type { Ensure } from '../helpers/index.mjs';
import { type TTuple } from '../tuple/index.mjs';
export type TParameters<T extends TFunction> = Ensure<TTuple<T['parameters']>>;
/** `[JavaScript]` Extracts the Parameters from the given Function type */
export declare function Parameters<T extends TFunction<TSchema[], TSchema>>(schema: T, options?: SchemaOptions): TParameters<T>;
