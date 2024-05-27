import { entityKind } from "../../entity.cjs";
import type { MySqlDialect } from "../dialect.cjs";
import type { AnyQueryResultHKT, MySqlSession, PreparedQueryConfig, PreparedQueryHKTBase, PreparedQueryKind, QueryResultHKT, QueryResultKind } from "../session.cjs";
import type { MySqlTable } from "../table.cjs";
import { QueryPromise } from "../../query-promise.cjs";
import type { Placeholder, Query, SQLWrapper } from "../../sql/sql.cjs";
import { Param, SQL } from "../../sql/sql.cjs";
import type { MySqlUpdateSetSource } from "./update.cjs";
export interface MySqlInsertConfig<TTable extends MySqlTable = MySqlTable> {
    table: TTable;
    values: Record<string, Param | SQL>[];
    ignore: boolean;
    onConflict?: SQL;
}
export type AnyMySqlInsertConfig = MySqlInsertConfig<MySqlTable>;
export type MySqlInsertValue<TTable extends MySqlTable> = {
    [Key in keyof TTable['$inferInsert']]: TTable['$inferInsert'][Key] | SQL | Placeholder;
} & {};
export declare class MySqlInsertBuilder<TTable extends MySqlTable, TQueryResult extends QueryResultHKT, TPreparedQueryHKT extends PreparedQueryHKTBase> {
    private table;
    private session;
    private dialect;
    static readonly [entityKind]: string;
    private shouldIgnore;
    constructor(table: TTable, session: MySqlSession, dialect: MySqlDialect);
    ignore(): this;
    values(value: MySqlInsertValue<TTable>): MySqlInsertBase<TTable, TQueryResult, TPreparedQueryHKT>;
    values(values: MySqlInsertValue<TTable>[]): MySqlInsertBase<TTable, TQueryResult, TPreparedQueryHKT>;
}
export type MySqlInsertWithout<T extends AnyMySqlInsert, TDynamic extends boolean, K extends keyof T & string> = TDynamic extends true ? T : Omit<MySqlInsertBase<T['_']['table'], T['_']['queryResult'], T['_']['preparedQueryHKT'], TDynamic, T['_']['excludedMethods'] | K>, T['_']['excludedMethods'] | K>;
export type MySqlInsertDynamic<T extends AnyMySqlInsert> = MySqlInsert<T['_']['table'], T['_']['queryResult'], T['_']['preparedQueryHKT']>;
export type MySqlInsertPrepare<T extends AnyMySqlInsert> = PreparedQueryKind<T['_']['preparedQueryHKT'], PreparedQueryConfig & {
    execute: QueryResultKind<T['_']['queryResult'], never>;
    iterator: never;
}, true>;
export type MySqlInsertOnDuplicateKeyUpdateConfig<T extends AnyMySqlInsert> = {
    set: MySqlUpdateSetSource<T['_']['table']>;
};
export type MySqlInsert<TTable extends MySqlTable = MySqlTable, TQueryResult extends QueryResultHKT = AnyQueryResultHKT, TPreparedQueryHKT extends PreparedQueryHKTBase = PreparedQueryHKTBase> = MySqlInsertBase<TTable, TQueryResult, TPreparedQueryHKT, true, never>;
export type AnyMySqlInsert = MySqlInsertBase<any, any, any, any, any>;
export interface MySqlInsertBase<TTable extends MySqlTable, TQueryResult extends QueryResultHKT, TPreparedQueryHKT extends PreparedQueryHKTBase, TDynamic extends boolean = false, TExcludedMethods extends string = never> extends QueryPromise<QueryResultKind<TQueryResult, never>>, SQLWrapper {
    readonly _: {
        readonly table: TTable;
        readonly queryResult: TQueryResult;
        readonly preparedQueryHKT: TPreparedQueryHKT;
        readonly dynamic: TDynamic;
        readonly excludedMethods: TExcludedMethods;
    };
}
export declare class MySqlInsertBase<TTable extends MySqlTable, TQueryResult extends QueryResultHKT, TPreparedQueryHKT extends PreparedQueryHKTBase, TDynamic extends boolean = false, TExcludedMethods extends string = never> extends QueryPromise<QueryResultKind<TQueryResult, never>> implements SQLWrapper {
    private session;
    private dialect;
    static readonly [entityKind]: string;
    protected $table: TTable;
    private config;
    constructor(table: TTable, values: MySqlInsertConfig['values'], ignore: boolean, session: MySqlSession, dialect: MySqlDialect);
    /**
     * Adds an `on duplicate key update` clause to the query.
     *
     * Calling this method will update update the row if any unique index conflicts. MySQL will automatically determine the conflict target based on the primary key and unique indexes.
     *
     * See docs: {@link https://orm.drizzle.team/docs/insert#on-duplicate-key-update}
     *
     * @param config The `set` clause
     *
     * @example
     * ```ts
     * await db.insert(cars)
     *   .values({ id: 1, brand: 'BMW'})
     *   .onDuplicateKeyUpdate({ set: { brand: 'Porsche' }});
     * ```
     *
     * While MySQL does not directly support doing nothing on conflict, you can perform a no-op by setting any column's value to itself and achieve the same effect:
     *
     * ```ts
     * import { sql } from 'drizzle-orm';
     *
     * await db.insert(cars)
     *   .values({ id: 1, brand: 'BMW' })
     *   .onDuplicateKeyUpdate({ set: { id: sql`id` } });
     * ```
     */
    onDuplicateKeyUpdate(config: MySqlInsertOnDuplicateKeyUpdateConfig<this>): MySqlInsertWithout<this, TDynamic, 'onDuplicateKeyUpdate'>;
    toSQL(): Query;
    prepare(): MySqlInsertPrepare<this>;
    execute: ReturnType<this['prepare']>['execute'];
    private createIterator;
    iterator: ReturnType<this["prepare"]>["iterator"];
    $dynamic(): MySqlInsertDynamic<this>;
}
