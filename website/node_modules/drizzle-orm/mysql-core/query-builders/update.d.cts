import type { GetColumnData } from "../../column.cjs";
import { entityKind } from "../../entity.cjs";
import type { MySqlDialect } from "../dialect.cjs";
import type { AnyQueryResultHKT, MySqlSession, PreparedQueryConfig, PreparedQueryHKTBase, PreparedQueryKind, QueryResultHKT, QueryResultKind } from "../session.cjs";
import type { MySqlTable } from "../table.cjs";
import { QueryPromise } from "../../query-promise.cjs";
import type { Query, SQL, SQLWrapper } from "../../sql/sql.cjs";
import type { Subquery } from "../../subquery.cjs";
import { type UpdateSet } from "../../utils.cjs";
import type { SelectedFieldsOrdered } from "./select.types.cjs";
export interface MySqlUpdateConfig {
    where?: SQL | undefined;
    set: UpdateSet;
    table: MySqlTable;
    returning?: SelectedFieldsOrdered;
    withList?: Subquery[];
}
export type MySqlUpdateSetSource<TTable extends MySqlTable> = {
    [Key in keyof TTable['_']['columns']]?: GetColumnData<TTable['_']['columns'][Key], 'query'> | SQL;
} & {};
export declare class MySqlUpdateBuilder<TTable extends MySqlTable, TQueryResult extends QueryResultHKT, TPreparedQueryHKT extends PreparedQueryHKTBase> {
    private table;
    private session;
    private dialect;
    private withList?;
    static readonly [entityKind]: string;
    readonly _: {
        readonly table: TTable;
    };
    constructor(table: TTable, session: MySqlSession, dialect: MySqlDialect, withList?: Subquery<string, Record<string, unknown>>[] | undefined);
    set(values: MySqlUpdateSetSource<TTable>): MySqlUpdateBase<TTable, TQueryResult, TPreparedQueryHKT>;
}
export type MySqlUpdateWithout<T extends AnyMySqlUpdateBase, TDynamic extends boolean, K extends keyof T & string> = TDynamic extends true ? T : Omit<MySqlUpdateBase<T['_']['table'], T['_']['queryResult'], T['_']['preparedQueryHKT'], TDynamic, T['_']['excludedMethods'] | K>, T['_']['excludedMethods'] | K>;
export type MySqlUpdatePrepare<T extends AnyMySqlUpdateBase> = PreparedQueryKind<T['_']['preparedQueryHKT'], PreparedQueryConfig & {
    execute: QueryResultKind<T['_']['queryResult'], never>;
    iterator: never;
}, true>;
export type MySqlUpdateDynamic<T extends AnyMySqlUpdateBase> = MySqlUpdate<T['_']['table'], T['_']['queryResult'], T['_']['preparedQueryHKT']>;
export type MySqlUpdate<TTable extends MySqlTable = MySqlTable, TQueryResult extends QueryResultHKT = AnyQueryResultHKT, TPreparedQueryHKT extends PreparedQueryHKTBase = PreparedQueryHKTBase> = MySqlUpdateBase<TTable, TQueryResult, TPreparedQueryHKT, true, never>;
export type AnyMySqlUpdateBase = MySqlUpdateBase<any, any, any, any, any>;
export interface MySqlUpdateBase<TTable extends MySqlTable, TQueryResult extends QueryResultHKT, TPreparedQueryHKT extends PreparedQueryHKTBase, TDynamic extends boolean = false, TExcludedMethods extends string = never> extends QueryPromise<QueryResultKind<TQueryResult, never>>, SQLWrapper {
    readonly _: {
        readonly table: TTable;
        readonly queryResult: TQueryResult;
        readonly preparedQueryHKT: TPreparedQueryHKT;
        readonly dynamic: TDynamic;
        readonly excludedMethods: TExcludedMethods;
    };
}
export declare class MySqlUpdateBase<TTable extends MySqlTable, TQueryResult extends QueryResultHKT, TPreparedQueryHKT extends PreparedQueryHKTBase, TDynamic extends boolean = false, TExcludedMethods extends string = never> extends QueryPromise<QueryResultKind<TQueryResult, never>> implements SQLWrapper {
    private session;
    private dialect;
    static readonly [entityKind]: string;
    private config;
    constructor(table: TTable, set: UpdateSet, session: MySqlSession, dialect: MySqlDialect, withList?: Subquery[]);
    /**
     * Adds a 'where' clause to the query.
     *
     * Calling this method will update only those rows that fulfill a specified condition.
     *
     * See docs: {@link https://orm.drizzle.team/docs/update}
     *
     * @param where the 'where' clause.
     *
     * @example
     * You can use conditional operators and `sql function` to filter the rows to be updated.
     *
     * ```ts
     * // Update all cars with green color
     * db.update(cars).set({ color: 'red' })
     *   .where(eq(cars.color, 'green'));
     * // or
     * db.update(cars).set({ color: 'red' })
     *   .where(sql`${cars.color} = 'green'`)
     * ```
     *
     * You can logically combine conditional operators with `and()` and `or()` operators:
     *
     * ```ts
     * // Update all BMW cars with a green color
     * db.update(cars).set({ color: 'red' })
     *   .where(and(eq(cars.color, 'green'), eq(cars.brand, 'BMW')));
     *
     * // Update all cars with the green or blue color
     * db.update(cars).set({ color: 'red' })
     *   .where(or(eq(cars.color, 'green'), eq(cars.color, 'blue')));
     * ```
     */
    where(where: SQL | undefined): MySqlUpdateWithout<this, TDynamic, 'where'>;
    toSQL(): Query;
    prepare(): MySqlUpdatePrepare<this>;
    execute: ReturnType<this['prepare']>['execute'];
    private createIterator;
    iterator: ReturnType<this["prepare"]>["iterator"];
    $dynamic(): MySqlUpdateDynamic<this>;
}
