import type { TSchema } from '../../type/schema/index';
/** Converts any type mismatched values to their target type if a reasonable conversion is possible. */
export declare function Convert(schema: TSchema, references: TSchema[], value: unknown): unknown;
/** Converts any type mismatched values to their target type if a reasonable conversion is possible. */
export declare function Convert(schema: TSchema, value: unknown): unknown;
