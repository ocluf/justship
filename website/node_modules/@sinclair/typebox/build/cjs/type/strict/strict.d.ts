import type { TSchema } from '../schema/index';
/** `[Json]` Omits compositing symbols from this schema. */
export declare function Strict<T extends TSchema>(schema: T): T;
