import { entityKind } from "../entity.js";
import type { Logger } from "../logger.js";
import { PgDatabase } from "../pg-core/db.js";
import { PgDialect } from "../pg-core/dialect.js";
import { type RelationalSchemaConfig, type TablesRelationalConfig } from "../relations.js";
import type { DrizzleConfig } from "../utils.js";
import type { NeonClient, NeonQueryResultHKT } from "./session.js";
import { NeonSession } from "./session.js";
export interface NeonDriverOptions {
    logger?: Logger;
}
export declare class NeonDriver {
    private client;
    private dialect;
    private options;
    static readonly [entityKind]: string;
    constructor(client: NeonClient, dialect: PgDialect, options?: NeonDriverOptions);
    createSession(schema: RelationalSchemaConfig<TablesRelationalConfig> | undefined): NeonSession<Record<string, unknown>, TablesRelationalConfig>;
    initMappers(): void;
}
export type NeonDatabase<TSchema extends Record<string, unknown> = Record<string, never>> = PgDatabase<NeonQueryResultHKT, TSchema>;
export declare function drizzle<TSchema extends Record<string, unknown> = Record<string, never>>(client: NeonClient, config?: DrizzleConfig<TSchema>): NeonDatabase<TSchema>;
