import { entityKind } from "../../entity.cjs";
import type { SQL, SQLWrapper } from "../../index.cjs";
import type { Logger } from "../../logger.cjs";
import { PgDatabase } from "../../pg-core/db.cjs";
import { PgDialect } from "../../pg-core/dialect.cjs";
import type { PgInsertConfig, PgTable, TableConfig } from "../../pg-core/index.cjs";
import type { PgRaw } from "../../pg-core/query-builders/raw.cjs";
import type { DrizzleConfig, UpdateSet } from "../../utils.cjs";
import type { AwsDataApiClient, AwsDataApiPgQueryResult, AwsDataApiPgQueryResultHKT } from "./session.cjs";
export interface PgDriverOptions {
    logger?: Logger;
    database: string;
    resourceArn: string;
    secretArn: string;
}
export interface DrizzleAwsDataApiPgConfig<TSchema extends Record<string, unknown> = Record<string, never>> extends DrizzleConfig<TSchema> {
    database: string;
    resourceArn: string;
    secretArn: string;
}
export declare class AwsDataApiPgDatabase<TSchema extends Record<string, unknown> = Record<string, never>> extends PgDatabase<AwsDataApiPgQueryResultHKT, TSchema> {
    static readonly [entityKind]: string;
    execute<TRow extends Record<string, unknown> = Record<string, unknown>>(query: SQLWrapper): PgRaw<AwsDataApiPgQueryResult<TRow>>;
}
export declare class AwsPgDialect extends PgDialect {
    static readonly [entityKind]: string;
    escapeParam(num: number): string;
    buildInsertQuery({ table, values, onConflict, returning }: PgInsertConfig<PgTable<TableConfig>>): SQL<unknown>;
    buildUpdateSet(table: PgTable<TableConfig>, set: UpdateSet): SQL<unknown>;
}
export declare function drizzle<TSchema extends Record<string, unknown> = Record<string, never>>(client: AwsDataApiClient, config: DrizzleAwsDataApiPgConfig<TSchema>): AwsDataApiPgDatabase<TSchema>;
