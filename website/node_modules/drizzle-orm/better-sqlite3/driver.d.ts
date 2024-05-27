import type { Database, RunResult } from 'better-sqlite3';
import { BaseSQLiteDatabase } from "../sqlite-core/db.js";
import type { DrizzleConfig } from "../utils.js";
export type BetterSQLite3Database<TSchema extends Record<string, unknown> = Record<string, never>> = BaseSQLiteDatabase<'sync', RunResult, TSchema>;
export declare function drizzle<TSchema extends Record<string, unknown> = Record<string, never>>(client: Database, config?: DrizzleConfig<TSchema>): BetterSQLite3Database<TSchema>;
