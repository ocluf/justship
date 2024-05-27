import type { TSchema, SchemaOptions } from '../schema/index.mjs';
import type { Ensure } from '../helpers/index.mjs';
import type { TConstructor } from '../constructor/index.mjs';
import { type TTuple } from '../tuple/index.mjs';
export type TConstructorParameters<T extends TConstructor<TSchema[], TSchema>> = (Ensure<TTuple<T['parameters']>>);
/** `[JavaScript]` Extracts the ConstructorParameters from the given Constructor type */
export declare function ConstructorParameters<T extends TConstructor<TSchema[], TSchema>>(schema: T, options?: SchemaOptions): TConstructorParameters<T>;
