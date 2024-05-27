import { entityKind } from "../entity.js";
import type { Logger } from "../logger.js";
import { PgDatabase } from "../pg-core/db.js";
import { PgDialect } from "../pg-core/index.js";
import { type RelationalSchemaConfig, type TablesRelationalConfig } from "../relations.js";
import type { DrizzleConfig } from "../utils.js";
import { type VercelPgClient, type VercelPgQueryResultHKT, VercelPgSession } from "./session.js";
export interface VercelPgDriverOptions {
    logger?: Logger;
}
export declare class VercelPgDriver {
    private client;
    private dialect;
    private options;
    static readonly [entityKind]: string;
    constructor(client: VercelPgClient, dialect: PgDialect, options?: VercelPgDriverOptions);
    createSession(schema: RelationalSchemaConfig<TablesRelationalConfig> | undefined): VercelPgSession<Record<string, unknown>, TablesRelationalConfig>;
    initMappers(): void;
}
export type VercelPgDatabase<TSchema extends Record<string, unknown> = Record<string, never>> = PgDatabase<VercelPgQueryResultHKT, TSchema>;
export declare function drizzle<TSchema extends Record<string, unknown> = Record<string, never>>(client: VercelPgClient, config?: DrizzleConfig<TSchema>): VercelPgDatabase<TSchema>;
