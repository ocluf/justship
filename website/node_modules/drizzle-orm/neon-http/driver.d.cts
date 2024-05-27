import type { NeonQueryFunction } from '@neondatabase/serverless';
import type { BatchItem, BatchResponse } from "../batch.cjs";
import { entityKind } from "../entity.cjs";
import type { Logger } from "../logger.cjs";
import { PgDatabase } from "../pg-core/db.cjs";
import { PgDialect } from "../pg-core/dialect.cjs";
import type { RelationalSchemaConfig, TablesRelationalConfig } from "../relations.cjs";
import type { DrizzleConfig } from "../utils.cjs";
import { type NeonHttpClient, type NeonHttpQueryResultHKT, NeonHttpSession } from "./session.cjs";
export interface NeonDriverOptions {
    logger?: Logger;
}
export declare class NeonHttpDriver {
    private client;
    private dialect;
    private options;
    static readonly [entityKind]: string;
    constructor(client: NeonHttpClient, dialect: PgDialect, options?: NeonDriverOptions);
    createSession(schema: RelationalSchemaConfig<TablesRelationalConfig> | undefined): NeonHttpSession<Record<string, unknown>, TablesRelationalConfig>;
    initMappers(): void;
}
export declare class NeonHttpDatabase<TSchema extends Record<string, unknown> = Record<string, never>> extends PgDatabase<NeonHttpQueryResultHKT, TSchema> {
    static readonly [entityKind]: string;
    batch<U extends BatchItem<'pg'>, T extends Readonly<[U, ...U[]]>>(batch: T): Promise<BatchResponse<T>>;
}
export declare function drizzle<TSchema extends Record<string, unknown> = Record<string, never>>(client: NeonQueryFunction<any, any>, config?: DrizzleConfig<TSchema>): NeonHttpDatabase<TSchema>;
