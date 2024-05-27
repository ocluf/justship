import { entityKind } from "../entity.cjs";
import type { Logger } from "../logger.cjs";
import { PgDatabase } from "../pg-core/db.cjs";
import { PgDialect } from "../pg-core/index.cjs";
import { type RelationalSchemaConfig, type TablesRelationalConfig } from "../relations.cjs";
import type { DrizzleConfig } from "../utils.cjs";
import { type VercelPgClient, type VercelPgQueryResultHKT, VercelPgSession } from "./session.cjs";
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
