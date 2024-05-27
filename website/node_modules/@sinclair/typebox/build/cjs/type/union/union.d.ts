import type { TSchema, SchemaOptions } from '../schema/index';
import { type TNever } from '../never/index';
import type { TUnion } from './union-type';
export type Union<T extends TSchema[]> = (T extends [] ? TNever : T extends [TSchema] ? T[0] : TUnion<T>);
/** `[Json]` Creates a Union type */
export declare function Union<T extends TSchema[]>(T: [...T], options?: SchemaOptions): Union<T>;
