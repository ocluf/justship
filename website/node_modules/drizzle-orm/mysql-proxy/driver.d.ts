import { MySqlDatabase } from "../mysql-core/db.js";
import type { DrizzleConfig } from "../utils.js";
import { type MySqlRemotePreparedQueryHKT, type MySqlRemoteQueryResultHKT } from "./session.js";
export type MySqlRemoteDatabase<TSchema extends Record<string, unknown> = Record<string, never>> = MySqlDatabase<MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT, TSchema>;
export type RemoteCallback = (sql: string, params: any[], method: 'all' | 'execute') => Promise<{
    rows: any[];
}>;
export declare function drizzle<TSchema extends Record<string, unknown> = Record<string, never>>(callback: RemoteCallback, config?: DrizzleConfig<TSchema>): MySqlRemoteDatabase<TSchema>;
