import type { TSchema, SchemaOptions } from '../schema/index';
import type { TConstructor } from '../constructor/index';
export type TInstanceType<T extends TConstructor<TSchema[], TSchema>> = T['returns'];
/** `[JavaScript]` Extracts the InstanceType from the given Constructor type */
export declare function InstanceType<T extends TConstructor<any[], any>>(schema: T, options?: SchemaOptions): TInstanceType<T>;
