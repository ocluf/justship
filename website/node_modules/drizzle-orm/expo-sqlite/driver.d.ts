import type { SQLiteDatabase, SQLiteRunResult } from 'expo-sqlite/next';
import { BaseSQLiteDatabase } from "../sqlite-core/db.js";
import type { DrizzleConfig } from "../utils.js";
export type ExpoSQLiteDatabase<TSchema extends Record<string, unknown> = Record<string, never>> = BaseSQLiteDatabase<'sync', SQLiteRunResult, TSchema>;
export declare function drizzle<TSchema extends Record<string, unknown> = Record<string, never>>(client: SQLiteDatabase, config?: DrizzleConfig<TSchema>): ExpoSQLiteDatabase<TSchema>;
