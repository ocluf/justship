import { entityKind } from "../entity.cjs";
import type { Logger } from "../logger.cjs";
import { PgDatabase } from "../pg-core/db.cjs";
import { PgDialect } from "../pg-core/dialect.cjs";
import { type RelationalSchemaConfig, type TablesRelationalConfig } from "../relations.cjs";
import type { DrizzleConfig } from "../utils.cjs";
import type { PgliteClient, PgliteQueryResultHKT } from "./session.cjs";
import { PgliteSession } from "./session.cjs";
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
