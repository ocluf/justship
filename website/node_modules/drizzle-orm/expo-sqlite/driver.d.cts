import type { SQLiteDatabase, SQLiteRunResult } from 'expo-sqlite/next';
import { BaseSQLiteDatabase } from "../sqlite-core/db.cjs";
import type { DrizzleConfig } from "../utils.cjs";
export type ExpoSQLiteDatabase<TSchema extends Record<string, unknown> = Record<string, never>> = BaseSQLiteDatabase<'sync', SQLiteRunResult, TSchema>;
export declare function drizzle<TSchema extends Record<string, unknown> = Record<string, never>>(client: SQLiteDatabase, config?: DrizzleConfig<TSchema>): ExpoSQLiteDatabase<TSchema>;
