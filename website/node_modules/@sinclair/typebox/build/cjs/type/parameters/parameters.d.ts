import type { TSchema, SchemaOptions } from '../schema/index';
import type { TFunction } from '../function/index';
import type { Ensure } from '../helpers/index';
import { type TTuple } from '../tuple/index';
export type TParameters<T extends TFunction> = Ensure<TTuple<T['parameters']>>;
/** `[JavaScript]` Extracts the Parameters from the given Function type */
export declare function Parameters<T extends TFunction<TSchema[], TSchema>>(schema: T, options?: SchemaOptions): TParameters<T>;
