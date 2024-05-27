import type { Client, ResultSet } from '@libsql/client';
import type { BatchItem, BatchResponse } from "../batch.cjs";
import { entityKind } from "../entity.cjs";
import { BaseSQLiteDatabase } from "../sqlite-core/db.cjs";
import type { DrizzleConfig } from "../utils.cjs";
export declare class LibSQLDatabase<TSchema extends Record<string, unknown> = Record<string, never>> extends BaseSQLiteDatabase<'async', ResultSet, TSchema> {
    static readonly [entityKind]: string;
    batch<U extends BatchItem<'sqlite'>, T extends Readonly<[U, ...U[]]>>(batch: T): Promise<BatchResponse<T>>;
}
export declare function drizzle<TSchema extends Record<string, unknown> = Record<string, never>>(client: Client, config?: DrizzleConfig<TSchema>): LibSQLDatabase<TSchema>;
