import { entityKind } from "../entity.js";
import type { Logger } from "../logger.js";
import { PgDatabase } from "../pg-core/db.js";
import { PgDialect } from "../pg-core/dialect.js";
import { type RelationalSchemaConfig, type TablesRelationalConfig } from "../relations.js";
import type { DrizzleConfig } from "../utils.js";
import type { NodePgClient, NodePgQueryResultHKT } from "./session.js";
import { NodePgSession } from "./session.js";
export interface PgDriverOptions {
    logger?: Logger;
}
export declare class NodePgDriver {
    private client;
    private dialect;
    private options;
    static readonly [entityKind]: string;
    constructor(client: NodePgClient, dialect: PgDialect, options?: PgDriverOptions);
    createSession(schema: RelationalSchemaConfig<TablesRelationalConfig> | undefined): NodePgSession<Record<string, unknown>, TablesRelationalConfig>;
    initMappers(): void;
}
export type NodePgDatabase<TSchema extends Record<string, unknown> = Record<string, never>> = PgDatabase<NodePgQueryResultHKT, TSchema>;
export declare function drizzle<TSchema extends Record<string, unknown> = Record<string, never>>(client: NodePgClient, config?: DrizzleConfig<TSchema>): NodePgDatabase<TSchema>;
