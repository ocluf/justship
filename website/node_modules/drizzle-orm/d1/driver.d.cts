/// <reference types="@cloudflare/workers-types" />
import type { BatchItem, BatchResponse } from "../batch.cjs";
import { entityKind } from "../entity.cjs";
import { BaseSQLiteDatabase } from "../sqlite-core/db.cjs";
import type { DrizzleConfig } from "../utils.cjs";
export declare class DrizzleD1Database<TSchema extends Record<string, unknown> = Record<string, never>> extends BaseSQLiteDatabase<'async', D1Result, TSchema> {
    static readonly [entityKind]: string;
    batch<U extends BatchItem<'sqlite'>, T extends Readonly<[U, ...U[]]>>(batch: T): Promise<BatchResponse<T>>;
}
export declare function drizzle<TSchema extends Record<string, unknown> = Record<string, never>>(client: D1Database, config?: DrizzleConfig<TSchema>): DrizzleD1Database<TSchema>;
