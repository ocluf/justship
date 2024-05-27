import type { TSchema } from '../schema/index.mjs';
import { type TNever } from '../never/index.mjs';
import { TIntersect, IntersectOptions } from './intersect-type.mjs';
export type Intersect<T extends TSchema[]> = (T extends [] ? TNever : T extends [TSchema] ? T[0] : TIntersect<T>);
/** `[Json]` Creates an evaluated Intersect type */
export declare function Intersect<T extends TSchema[]>(T: [...T], options?: IntersectOptions): Intersect<T>;
