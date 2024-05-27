import type { Client, Connection, ExecutedQuery, Transaction } from '@planetscale/database';
import { entityKind } from "../entity.cjs";
import type { Logger } from "../logger.cjs";
import type { MySqlDialect } from "../mysql-core/dialect.cjs";
import type { SelectedFieldsOrdered } from "../mysql-core/query-builders/select.types.cjs";
import { MySqlSession, MySqlTransaction, PreparedQuery, type PreparedQueryConfig, type PreparedQueryHKT, type QueryResultHKT } from "../mysql-core/session.cjs";
import type { RelationalSchemaConfig, TablesRelationalConfig } from "../relations.cjs";
import { type Query, type SQL } from "../sql/sql.cjs";
import { type Assume } from "../utils.cjs";
export declare class PlanetScalePreparedQuery<T extends PreparedQueryConfig> extends PreparedQuery<T> {
    private client;
    private queryString;
    private params;
    private logger;
    private fields;
    private customResultMapper?;
    static readonly [entityKind]: string;
    private rawQuery;
    private query;
    constructor(client: Client | Transaction | Connection, queryString: string, params: unknown[], logger: Logger, fields: SelectedFieldsOrdered | undefined, customResultMapper?: ((rows: unknown[][]) => T['execute']) | undefined);
    execute(placeholderValues?: Record<string, unknown> | undefined): Promise<T['execute']>;
    iterator(_placeholderValues?: Record<string, unknown>): AsyncGenerator<T['iterator']>;
}
export interface PlanetscaleSessionOptions {
    logger?: Logger;
}
export declare class PlanetscaleSession<TFullSchema extends Record<string, unknown>, TSchema extends TablesRelationalConfig> extends MySqlSession<PlanetscaleQueryResultHKT, PlanetScalePreparedQueryHKT, TFullSchema, TSchema> {
    private baseClient;
    private schema;
    private options;
    static readonly [entityKind]: string;
    private logger;
    private client;
    constructor(baseClient: Client | Connection, dialect: MySqlDialect, tx: Transaction | undefined, schema: RelationalSchemaConfig<TSchema> | undefined, options?: PlanetscaleSessionOptions);
    prepareQuery<T extends PreparedQueryConfig = PreparedQueryConfig>(query: Query, fields: SelectedFieldsOrdered | undefined, customResultMapper?: (rows: unknown[][]) => T['execute']): PreparedQuery<T>;
    query(query: string, params: unknown[]): Promise<ExecutedQuery>;
    queryObjects(query: string, params: unknown[]): Promise<ExecutedQuery>;
    all<T = unknown>(query: SQL): Promise<T[]>;
    transaction<T>(transaction: (tx: PlanetScaleTransaction<TFullSchema, TSchema>) => Promise<T>): Promise<T>;
}
export declare class PlanetScaleTransaction<TFullSchema extends Record<string, unknown>, TSchema extends TablesRelationalConfig> extends MySqlTransaction<PlanetscaleQueryResultHKT, PlanetScalePreparedQueryHKT, TFullSchema, TSchema> {
    static readonly [entityKind]: string;
    constructor(dialect: MySqlDialect, session: MySqlSession, schema: RelationalSchemaConfig<TSchema> | undefined, nestedIndex?: number);
    transaction<T>(transaction: (tx: PlanetScaleTransaction<TFullSchema, TSchema>) => Promise<T>): Promise<T>;
}
export interface PlanetscaleQueryResultHKT extends QueryResultHKT {
    type: ExecutedQuery;
}
export interface PlanetScalePreparedQueryHKT extends PreparedQueryHKT {
    type: PlanetScalePreparedQuery<Assume<this['config'], PreparedQueryConfig>>;
}
