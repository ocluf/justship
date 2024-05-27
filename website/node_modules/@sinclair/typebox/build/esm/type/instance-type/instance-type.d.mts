import type { TSchema, SchemaOptions } from '../schema/index.mjs';
import type { TConstructor } from '../constructor/index.mjs';
export type TInstanceType<T extends TConstructor<TSchema[], TSchema>> = T['returns'];
/** `[JavaScript]` Extracts the InstanceType from the given Constructor type */
export declare function InstanceType<T extends TConstructor<any[], any>>(schema: T, options?: SchemaOptions): TInstanceType<T>;
