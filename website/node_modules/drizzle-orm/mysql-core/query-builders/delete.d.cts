import { entityKind } from "../../entity.cjs";
import type { MySqlDialect } from "../dialect.cjs";
import type { AnyQueryResultHKT, MySqlSession, PreparedQueryConfig, PreparedQueryHKTBase, PreparedQueryKind, QueryResultHKT, QueryResultKind } from "../session.cjs";
import type { MySqlTable } from "../table.cjs";
import { QueryPromise } from "../../query-promise.cjs";
import type { Query, SQL, SQLWrapper } from "../../sql/sql.cjs";
import type { Subquery } from "../../subquery.cjs";
import type { SelectedFieldsOrdered } from "./select.types.cjs";
export type MySqlDeleteWithout<T extends AnyMySqlDeleteBase, TDynamic extends boolean, K extends keyof T & string> = TDynamic extends true ? T : Omit<MySqlDeleteBase<T['_']['table'], T['_']['queryResult'], T['_']['preparedQueryHKT'], TDynamic, T['_']['excludedMethods'] | K>, T['_']['excludedMethods'] | K>;
export type MySqlDelete<TTable extends MySqlTable = MySqlTable, TQueryResult extends QueryResultHKT = AnyQueryResultHKT, TPreparedQueryHKT extends PreparedQueryHKTBase = PreparedQueryHKTBase> = MySqlDeleteBase<TTable, TQueryResult, TPreparedQueryHKT, true, never>;
export interface MySqlDeleteConfig {
    where?: SQL | undefined;
    table: MySqlTable;
    returning?: SelectedFieldsOrdered;
    withList?: Subquery[];
}
export type MySqlDeletePrepare<T extends AnyMySqlDeleteBase> = PreparedQueryKind<T['_']['preparedQueryHKT'], PreparedQueryConfig & {
    execute: QueryResultKind<T['_']['queryResult'], never>;
    iterator: never;
}, true>;
type MySqlDeleteDynamic<T extends AnyMySqlDeleteBase> = MySqlDelete<T['_']['table'], T['_']['queryResult'], T['_']['preparedQueryHKT']>;
type AnyMySqlDeleteBase = MySqlDeleteBase<any, any, any, any, any>;
export interface MySqlDeleteBase<TTable extends MySqlTable, TQueryResult extends QueryResultHKT, TPreparedQueryHKT extends PreparedQueryHKTBase, TDynamic extends boolean = false, TExcludedMethods extends string = never> extends QueryPromise<QueryResultKind<TQueryResult, never>> {
    readonly _: {
        readonly table: TTable;
        readonly queryResult: TQueryResult;
        readonly preparedQueryHKT: TPreparedQueryHKT;
        readonly dynamic: TDynamic;
        readonly excludedMethods: TExcludedMethods;
    };
}
export declare class MySqlDeleteBase<TTable extends MySqlTable, TQueryResult extends QueryResultHKT, TPreparedQueryHKT extends PreparedQueryHKTBase, TDynamic extends boolean = false, TExcludedMethods extends string = never> extends QueryPromise<QueryResultKind<TQueryResult, never>> implements SQLWrapper {
    private table;
    private session;
    private dialect;
    static readonly [entityKind]: string;
    private config;
    constructor(table: TTable, session: MySqlSession, dialect: MySqlDialect, withList?: Subquery[]);
    /**
     * Adds a `where` clause to the query.
     *
     * Calling this method will delete only those rows that fulfill a specified condition.
     *
     * See docs: {@link https://orm.drizzle.team/docs/delete}
     *
     * @param where the `where` clause.
     *
     * @example
     * You can use conditional operators and `sql function` to filter the rows to be deleted.
     *
     * ```ts
     * // Delete all cars with green color
     * db.delete(cars).where(eq(cars.color, 'green'));
     * // or
     * db.delete(cars).where(sql`${cars.color} = 'green'`)
     * ```
     *
     * You can logically combine conditional operators with `and()` and `or()` operators:
     *
     * ```ts
     * // Delete all BMW cars with a green color
     * db.delete(cars).where(and(eq(cars.color, 'green'), eq(cars.brand, 'BMW')));
     *
     * // Delete all cars with the green or blue color
     * db.delete(cars).where(or(eq(cars.color, 'green'), eq(cars.color, 'blue')));
     * ```
     */
    where(where: SQL | undefined): MySqlDeleteWithout<this, TDynamic, 'where'>;
    toSQL(): Query;
    prepare(): MySqlDeletePrepare<this>;
    execute: ReturnType<this['prepare']>['execute'];
    private createIterator;
    iterator: ReturnType<this["prepare"]>["iterator"];
    $dynamic(): MySqlDeleteDynamic<this>;
}
export {};
