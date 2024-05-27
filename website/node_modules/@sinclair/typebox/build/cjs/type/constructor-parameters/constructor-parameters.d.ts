import type { TSchema, SchemaOptions } from '../schema/index';
import type { Ensure } from '../helpers/index';
import type { TConstructor } from '../constructor/index';
import { type TTuple } from '../tuple/index';
export type TConstructorParameters<T extends TConstructor<TSchema[], TSchema>> = (Ensure<TTuple<T['parameters']>>);
/** `[JavaScript]` Extracts the ConstructorParameters from the given Constructor type */
export declare function ConstructorParameters<T extends TConstructor<TSchema[], TSchema>>(schema: T, options?: SchemaOptions): TConstructorParameters<T>;
