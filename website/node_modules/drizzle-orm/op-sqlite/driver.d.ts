import type { OPSQLiteConnection, QueryResult } from '@op-engineering/op-sqlite';
import { BaseSQLiteDatabase } from "../sqlite-core/db.js";
import type { DrizzleConfig } from "../utils.js";
export type OPSQLiteDatabase<TSchema extends Record<string, unknown> = Record<string, never>> = BaseSQLiteDatabase<'async', QueryResult, TSchema>;
export declare function drizzle<TSchema extends Record<string, unknown> = Record<string, never>>(client: OPSQLiteConnection, config?: DrizzleConfig<TSchema>): OPSQLiteDatabase<TSchema>;
