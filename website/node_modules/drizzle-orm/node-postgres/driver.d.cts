import { entityKind } from "../entity.cjs";
import type { Logger } from "../logger.cjs";
import { PgDatabase } from "../pg-core/db.cjs";
import { PgDialect } from "../pg-core/dialect.cjs";
import { type RelationalSchemaConfig, type TablesRelationalConfig } from "../relations.cjs";
import type { DrizzleConfig } from "../utils.cjs";
import type { NodePgClient, NodePgQueryResultHKT } from "./session.cjs";
import { NodePgSession } from "./session.cjs";
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
