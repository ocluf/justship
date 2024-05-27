import { PgDatabase } from "../pg-core/db.cjs";
import { PgDialect } from "../pg-core/dialect.cjs";
import type { DrizzleConfig } from "../utils.cjs";
import { type PgRemoteQueryResultHKT } from "./session.cjs";
export type PgRemoteDatabase<TSchema extends Record<string, unknown> = Record<string, never>> = PgDatabase<PgRemoteQueryResultHKT, TSchema>;
export type RemoteCallback = (sql: string, params: any[], method: 'all' | 'execute', typings?: any[]) => Promise<{
    rows: any[];
}>;
export declare function drizzle<TSchema extends Record<string, unknown> = Record<string, never>>(callback: RemoteCallback, config?: DrizzleConfig<TSchema>, _dialect?: () => PgDialect): PgRemoteDatabase<TSchema>;
