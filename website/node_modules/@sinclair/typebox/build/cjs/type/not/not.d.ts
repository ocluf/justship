import type { TSchema, SchemaOptions } from '../schema/index';
import type { Static } from '../static/index';
import { Kind } from '../symbols/index';
export interface TNot<T extends TSchema = TSchema> extends TSchema {
    [Kind]: 'Not';
    static: T extends TNot<infer U> ? Static<U> : unknown;
    not: T;
}
/** `[Json]` Creates a Not type */
export declare function Not<T extends TSchema>(schema: T, options?: SchemaOptions): TNot<T>;
