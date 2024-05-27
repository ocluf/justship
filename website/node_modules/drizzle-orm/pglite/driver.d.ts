import { entityKind } from "../entity.js";
import type { Logger } from "../logger.js";
import { PgDatabase } from "../pg-core/db.js";
import { PgDialect } from "../pg-core/dialect.js";
import { type RelationalSchemaConfig, type TablesRelationalConfig } from "../relations.js";
import type { DrizzleConfig } from "../utils.js";
import type { PgliteClient, PgliteQueryResultHKT } from "./session.js";
import { PgliteSession } from "./session.js";
export interface PgDriverOptions {
    logger?: Logger;
}
export declare class PgliteDriver {
    private client;
    private dialect;
    private options;
    static readonly [entityKind]: string;
    constructor(client: PgliteClient, dialect: PgDialect, options?: PgDriverOptions);
    createSession(schema: RelationalSchemaConfig<TablesRelationalConfig> | undefined): PgliteSession<Record<string, unknown>, TablesRelationalConfig>;
}
export type PgliteDatabase<TSchema extends Record<string, unknown> = Record<string, never>> = PgDatabase<PgliteQueryResultHKT, TSchema>;
export declare function drizzle<TSchema extends Record<string, unknown> = Record<string, never>>(client: PgliteClient, config?: DrizzleConfig<TSchema>): PgliteDatabase<TSchema>;
