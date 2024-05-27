import { entityKind } from "../entity.js";
import type { RelationalSchemaConfig, TablesRelationalConfig } from "../relations.js";
import { type Query, type SQL } from "../sql/sql.js";
import type { Assume, Equal } from "../utils.js";
import { MySqlDatabase } from "./db.js";
import type { MySqlDialect } from "./dialect.js";
import type { SelectedFieldsOrdered } from "./query-builders/select.types.js";
export type Mode = 'default' | 'planetscale';
export interface QueryResultHKT {
    readonly $brand: 'MySqlQueryRowHKT';
    readonly row: unknown;
    readonly type: unknown;
}
export interface AnyQueryResultHKT extends QueryResultHKT {
    readonly type: any;
}
export type QueryResultKind<TKind extends QueryResultHKT, TRow> = (TKind & {
    readonly row: TRow;
})['type'];
export interface PreparedQueryConfig {
    execute: unknown;
    iterator: unknown;
}
export interface PreparedQueryHKT {
    readonly $brand: 'MySqlPreparedQueryHKT';
    readonly config: unknown;
    readonly type: unknown;
}
export type PreparedQueryKind<TKind extends PreparedQueryHKT, TConfig extends PreparedQueryConfig, TAssume extends boolean = false> = Equal<TAssume, true> extends true ? Assume<(TKind & {
    readonly config: TConfig;
})['type'], PreparedQuery<TConfig>> : (TKind & {
    readonly config: TConfig;
})['type'];
export declare abstract class PreparedQuery<T extends PreparedQueryConfig> {
    static readonly [entityKind]: string;
    abstract execute(placeholderValues?: Record<string, unknown>): Promise<T['execute']>;
    abstract iterator(placeholderValues?: Record<string, unknown>): AsyncGenerator<T['iterator']>;
}
export interface MySqlTransactionConfig {
    withConsistentSnapshot?: boolean;
    accessMode?: 'read only' | 'read write';
    isolationLevel: 'read uncommitted' | 'read committed' | 'repeatable read' | 'serializable';
}
export declare abstract class MySqlSession<TQueryResult extends QueryResultHKT = QueryResultHKT, TPreparedQueryHKT extends PreparedQueryHKTBase = PreparedQueryHKTBase, TFullSchema extends Record<string, unknown> = Record<string, never>, TSchema extends TablesRelationalConfig = Record<string, never>> {
    protected dialect: MySqlDialect;
    static readonly [entityKind]: string;
    constructor(dialect: MySqlDialect);
    abstract prepareQuery<T extends PreparedQueryConfig, TPreparedQueryHKT extends PreparedQueryHKT>(query: Query, fields: SelectedFieldsOrdered | undefined, customResultMapper?: (rows: unknown[][]) => T['execute']): PreparedQueryKind<TPreparedQueryHKT, T>;
    execute<T>(query: SQL): Promise<T>;
    abstract all<T = unknown>(query: SQL): Promise<T[]>;
    abstract transaction<T>(transaction: (tx: MySqlTransaction<TQueryResult, TPreparedQueryHKT, TFullSchema, TSchema>) => Promise<T>, config?: MySqlTransactionConfig): Promise<T>;
    protected getSetTransactionSQL(config: MySqlTransactionConfig): SQL | undefined;
    protected getStartTransactionSQL(config: MySqlTransactionConfig): SQL | undefined;
}
export declare abstract class MySqlTransaction<TQueryResult extends QueryResultHKT, TPreparedQueryHKT extends PreparedQueryHKTBase, TFullSchema extends Record<string, unknown> = Record<string, never>, TSchema extends TablesRelationalConfig = Record<string, never>> extends MySqlDatabase<TQueryResult, TPreparedQueryHKT, TFullSchema, TSchema> {
    protected schema: RelationalSchemaConfig<TSchema> | undefined;
    protected readonly nestedIndex: number;
    static readonly [entityKind]: string;
    constructor(dialect: MySqlDialect, session: MySqlSession, schema: RelationalSchemaConfig<TSchema> | undefined, nestedIndex: number, mode: Mode);
    rollback(): never;
    /** Nested transactions (aka savepoints) only work with InnoDB engine. */
    abstract transaction<T>(transaction: (tx: MySqlTransaction<TQueryResult, TPreparedQueryHKT, TFullSchema, TSchema>) => Promise<T>): Promise<T>;
}
export interface PreparedQueryHKTBase extends PreparedQueryHKT {
    type: PreparedQuery<Assume<this['config'], PreparedQueryConfig>>;
}
