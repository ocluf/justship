import { entityKind } from "../entity.cjs";
import type { Logger } from "../logger.cjs";
import { PgDatabase } from "../pg-core/db.cjs";
import { PgDialect } from "../pg-core/dialect.cjs";
import { type RelationalSchemaConfig, type TablesRelationalConfig } from "../relations.cjs";
import type { DrizzleConfig } from "../utils.cjs";
import type { NeonClient, NeonQueryResultHKT } from "./session.cjs";
import { NeonSession } from "./session.cjs";
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
