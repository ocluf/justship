import type { FieldPacket, ResultSetHeader } from 'mysql2/promise';
import { entityKind } from "../entity.js";
import type { Logger } from "../logger.js";
import type { MySqlDialect } from "../mysql-core/dialect.js";
import { MySqlTransaction } from "../mysql-core/index.js";
import type { SelectedFieldsOrdered } from "../mysql-core/query-builders/select.types.js";
import type { MySqlTransactionConfig, PreparedQueryConfig, PreparedQueryHKT, PreparedQueryKind, QueryResultHKT } from "../mysql-core/session.js";
import { MySqlSession, PreparedQuery as PreparedQueryBase } from "../mysql-core/session.js";
import type { RelationalSchemaConfig, TablesRelationalConfig } from "../relations.js";
import type { Query, SQL } from "../sql/sql.js";
import { type Assume } from "../utils.js";
import type { RemoteCallback } from "./driver.js";
export type MySqlRawQueryResult = [ResultSetHeader, FieldPacket[]];
export interface MySqlRemoteSessionOptions {
    logger?: Logger;
}
export declare class MySqlRemoteSession<TFullSchema extends Record<string, unknown>, TSchema extends TablesRelationalConfig> extends MySqlSession<MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT, TFullSchema, TSchema> {
    private client;
    private schema;
    static readonly [entityKind]: string;
    private logger;
    constructor(client: RemoteCallback, dialect: MySqlDialect, schema: RelationalSchemaConfig<TSchema> | undefined, options: MySqlRemoteSessionOptions);
    prepareQuery<T extends PreparedQueryConfig>(query: Query, fields: SelectedFieldsOrdered | undefined, customResultMapper?: (rows: unknown[][]) => T['execute']): PreparedQueryKind<MySqlRemotePreparedQueryHKT, T>;
    all<T = unknown>(query: SQL): Promise<T[]>;
    transaction<T>(_transaction: (tx: MySqlProxyTransaction<TFullSchema, TSchema>) => Promise<T>, _config?: MySqlTransactionConfig): Promise<T>;
}
export declare class MySqlProxyTransaction<TFullSchema extends Record<string, unknown>, TSchema extends TablesRelationalConfig> extends MySqlTransaction<MySqlRemoteQueryResultHKT, MySqlRemotePreparedQueryHKT, TFullSchema, TSchema> {
    static readonly [entityKind]: string;
    transaction<T>(_transaction: (tx: MySqlProxyTransaction<TFullSchema, TSchema>) => Promise<T>): Promise<T>;
}
export declare class PreparedQuery<T extends PreparedQueryConfig> extends PreparedQueryBase<T> {
    private client;
    private queryString;
    private params;
    private logger;
    private fields;
    private customResultMapper?;
    static readonly [entityKind]: string;
    constructor(client: RemoteCallback, queryString: string, params: unknown[], logger: Logger, fields: SelectedFieldsOrdered | undefined, customResultMapper?: ((rows: unknown[][]) => T['execute']) | undefined);
    execute(placeholderValues?: Record<string, unknown> | undefined): Promise<T['execute']>;
    iterator(_placeholderValues?: Record<string, unknown>): AsyncGenerator<T['iterator']>;
}
export interface MySqlRemoteQueryResultHKT extends QueryResultHKT {
    type: MySqlRawQueryResult;
}
export interface MySqlRemotePreparedQueryHKT extends PreparedQueryHKT {
    type: PreparedQuery<Assume<this['config'], PreparedQueryConfig>>;
}
