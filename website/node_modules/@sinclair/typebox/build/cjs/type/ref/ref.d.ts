import type { TSchema, SchemaOptions } from '../schema/index';
import type { Static } from '../static/index';
import { Kind } from '../symbols/index';
export interface TRef<T extends TSchema = TSchema> extends TSchema {
    [Kind]: 'Ref';
    static: Static<T, this['params']>;
    $ref: string;
}
/** `[Json]` Creates a Ref type. The referenced type must contain a $id */
export declare function Ref<T extends TSchema>(schema: T, options?: SchemaOptions): TRef<T>;
/** `[Json]` Creates a Ref type. */
export declare function Ref<T extends TSchema>($ref: string, options?: SchemaOptions): TRef<T>;
