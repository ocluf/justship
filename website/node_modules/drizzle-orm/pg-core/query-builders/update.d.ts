import type { GetColumnData } from "../../column.js";
import { entityKind } from "../../entity.js";
import type { PgDialect } from "../dialect.js";
import type { PgPreparedQuery, PgSession, PreparedQueryConfig, QueryResultHKT, QueryResultKind } from "../session.js";
import type { PgTable } from "../table.js";
import type { SelectResultFields } from "../../query-builders/select.types.js";
import { QueryPromise } from "../../query-promise.js";
import type { RunnableQuery } from "../../runnable-query.js";
import type { Query, SQL, SQLWrapper } from "../../sql/sql.js";
import type { Subquery } from "../../subquery.js";
import { type UpdateSet } from "../../utils.js";
import type { SelectedFields, SelectedFieldsOrdered } from "./select.types.js";
export interface PgUpdateConfig {
    where?: SQL | undefined;
    set: UpdateSet;
    table: PgTable;
    returning?: SelectedFieldsOrdered;
    withList?: Subquery[];
}
export type PgUpdateSetSource<TTable extends PgTable> = {
    [Key in keyof TTable['_']['columns']]?: GetColumnData<TTable['_']['columns'][Key]> | SQL;
} & {};
export declare class PgUpdateBuilder<TTable extends PgTable, TQueryResult extends QueryResultHKT> {
    private table;
    private session;
    private dialect;
    private withList?;
    static readonly [entityKind]: string;
    readonly _: {
        readonly table: TTable;
    };
    constructor(table: TTable, session: PgSession, dialect: PgDialect, withList?: Subquery<string, Record<string, unknown>>[] | undefined);
    set(values: PgUpdateSetSource<TTable>): PgUpdateBase<TTable, TQueryResult>;
}
export type PgUpdateWithout<T extends AnyPgUpdate, TDynamic extends boolean, K extends keyof T & string> = TDynamic extends true ? T : Omit<PgUpdateBase<T['_']['table'], T['_']['queryResult'], T['_']['returning'], TDynamic, T['_']['excludedMethods'] | K>, T['_']['excludedMethods'] | K>;
export type PgUpdateReturningAll<T extends AnyPgUpdate, TDynamic extends boolean> = PgUpdateWithout<PgUpdateBase<T['_']['table'], T['_']['queryResult'], T['_']['table']['$inferSelect'], TDynamic, T['_']['excludedMethods']>, TDynamic, 'returning'>;
export type PgUpdateReturning<T extends AnyPgUpdate, TDynamic extends boolean, TSelectedFields extends SelectedFields> = PgUpdateWithout<PgUpdateBase<T['_']['table'], T['_']['queryResult'], SelectResultFields<TSelectedFields>, TDynamic, T['_']['excludedMethods']>, TDynamic, 'returning'>;
export type PgUpdatePrepare<T extends AnyPgUpdate> = PgPreparedQuery<PreparedQueryConfig & {
    execute: T['_']['returning'] extends undefined ? QueryResultKind<T['_']['queryResult'], never> : T['_']['returning'][];
}>;
export type PgUpdateDynamic<T extends AnyPgUpdate> = PgUpdate<T['_']['table'], T['_']['queryResult'], T['_']['returning']>;
export type PgUpdate<TTable extends PgTable = PgTable, TQueryResult extends QueryResultHKT = QueryResultHKT, TReturning extends Record<string, unknown> | undefined = Record<string, unknown> | undefined> = PgUpdateBase<TTable, TQueryResult, TReturning, true, never>;
type AnyPgUpdate = PgUpdateBase<any, any, any, any, any>;
export interface PgUpdateBase<TTable extends PgTable, TQueryResult extends QueryResultHKT, TReturning extends Record<string, unknown> | undefined = undefined, TDynamic extends boolean = false, TExcludedMethods extends string = never> extends QueryPromise<TReturning extends undefined ? QueryResultKind<TQueryResult, never> : TReturning[]>, RunnableQuery<TReturning extends undefined ? QueryResultKind<TQueryResult, never> : TReturning[], 'pg'>, SQLWrapper {
    readonly _: {
        readonly dialect: 'pg';
        readonly table: TTable;
        readonly queryResult: TQueryResult;
        readonly returning: TReturning;
        readonly dynamic: TDynamic;
        readonly excludedMethods: TExcludedMethods;
        readonly result: TReturning extends undefined ? QueryResultKind<TQueryResult, never> : TReturning[];
    };
}
export declare class PgUpdateBase<TTable extends PgTable, TQueryResult extends QueryResultHKT, TReturning extends Record<string, unknown> | undefined = undefined, TDynamic extends boolean = false, TExcludedMethods extends string = never> extends QueryPromise<TReturning extends undefined ? QueryResultKind<TQueryResult, never> : TReturning[]> implements RunnableQuery<TReturning extends undefined ? QueryResultKind<TQueryResult, never> : TReturning[], 'pg'>, SQLWrapper {
    private session;
    private dialect;
    static readonly [entityKind]: string;
    private config;
    constructor(table: TTable, set: UpdateSet, session: PgSession, dialect: PgDialect, withList?: Subquery[]);
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
     * await db.update(cars).set({ color: 'red' })
     *   .where(eq(cars.color, 'green'));
     * // or
     * await db.update(cars).set({ color: 'red' })
     *   .where(sql`${cars.color} = 'green'`)
     * ```
     *
     * You can logically combine conditional operators with `and()` and `or()` operators:
     *
     * ```ts
     * // Update all BMW cars with a green color
     * await db.update(cars).set({ color: 'red' })
     *   .where(and(eq(cars.color, 'green'), eq(cars.brand, 'BMW')));
     *
     * // Update all cars with the green or blue color
     * await db.update(cars).set({ color: 'red' })
     *   .where(or(eq(cars.color, 'green'), eq(cars.color, 'blue')));
     * ```
     */
    where(where: SQL | undefined): PgUpdateWithout<this, TDynamic, 'where'>;
    /**
     * Adds a `returning` clause to the query.
     *
     * Calling this method will return the specified fields of the updated rows. If no fields are specified, all fields will be returned.
     *
     * See docs: {@link https://orm.drizzle.team/docs/update#update-with-returning}
     *
     * @example
     * ```ts
     * // Update all cars with the green color and return all fields
     * const updatedCars: Car[] = await db.update(cars)
     *   .set({ color: 'red' })
     *   .where(eq(cars.color, 'green'))
     *   .returning();
     *
     * // Update all cars with the green color and return only their id and brand fields
     * const updatedCarsIdsAndBrands: { id: number, brand: string }[] = await db.update(cars)
     *   .set({ color: 'red' })
     *   .where(eq(cars.color, 'green'))
     *   .returning({ id: cars.id, brand: cars.brand });
     * ```
     */
    returning(): PgUpdateReturningAll<this, TDynamic>;
    returning<TSelectedFields extends SelectedFields>(fields: TSelectedFields): PgUpdateReturning<this, TDynamic, TSelectedFields>;
    toSQL(): Query;
    prepare(name: string): PgUpdatePrepare<this>;
    execute: ReturnType<this['prepare']>['execute'];
    $dynamic(): PgUpdateDynamic<this>;
}
export {};
