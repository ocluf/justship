import type { Sql } from 'postgres';
import { PgDatabase } from "../pg-core/db.cjs";
import type { DrizzleConfig } from "../utils.cjs";
import type { PostgresJsQueryResultHKT } from "./session.cjs";
export type PostgresJsDatabase<TSchema extends Record<string, unknown> = Record<string, never>> = PgDatabase<PostgresJsQueryResultHKT, TSchema>;
export declare function drizzle<TSchema extends Record<string, unknown> = Record<string, never>>(client: Sql, config?: DrizzleConfig<TSchema>): PostgresJsDatabase<TSchema>;
