import type { GetColumnData } from "../../column.js";
import { entityKind } from "../../entity.js";
import type { SelectResultFields } from "../../query-builders/select.types.js";
import { QueryPromise } from "../../query-promise.js";
import type { RunnableQuery } from "../../runnable-query.js";
import type { Query, SQL, SQLWrapper } from "../../sql/sql.js";
import type { SQLiteDialect } from "../dialect.js";
import type { SQLitePreparedQuery, SQLiteSession } from "../session.js";
import { SQLiteTable } from "../table.js";
import type { Subquery } from "../../subquery.js";
import { type DrizzleTypeError, type UpdateSet } from "../../utils.js";
import type { SelectedFields, SelectedFieldsOrdered } from "./select.types.js";
export interface SQLiteUpdateConfig {
    where?: SQL | undefined;
    set: UpdateSet;
    table: SQLiteTable;
    returning?: SelectedFieldsOrdered;
    withList?: Subquery[];
}
export type SQLiteUpdateSetSource<TTable extends SQLiteTable> = {
    [Key in keyof TTable['_']['columns']]?: GetColumnData<TTable['_']['columns'][Key], 'query'> | SQL;
} & {};
export declare class SQLiteUpdateBuilder<TTable extends SQLiteTable, TResultType extends 'sync' | 'async', TRunResult> {
    protected table: TTable;
    protected session: SQLiteSession<any, any, any, any>;
    protected dialect: SQLiteDialect;
    private withList?;
    static readonly [entityKind]: string;
    readonly _: {
        readonly table: TTable;
    };
    constructor(table: TTable, session: SQLiteSession<any, any, any, any>, dialect: SQLiteDialect, withList?: Subquery<string, Record<string, unknown>>[] | undefined);
    set(values: SQLiteUpdateSetSource<TTable>): SQLiteUpdateBase<TTable, TResultType, TRunResult>;
}
export type SQLiteUpdateWithout<T extends AnySQLiteUpdate, TDynamic extends boolean, K extends keyof T & string> = TDynamic extends true ? T : Omit<SQLiteUpdateBase<T['_']['table'], T['_']['resultType'], T['_']['runResult'], T['_']['returning'], TDynamic, T['_']['excludedMethods'] | K>, T['_']['excludedMethods'] | K>;
export type SQLiteUpdateReturningAll<T extends AnySQLiteUpdate, TDynamic extends boolean> = SQLiteUpdateWithout<SQLiteUpdateBase<T['_']['table'], T['_']['resultType'], T['_']['runResult'], T['_']['table']['$inferSelect'], TDynamic, T['_']['excludedMethods']>, TDynamic, 'returning'>;
export type SQLiteUpdateReturning<T extends AnySQLiteUpdate, TDynamic extends boolean, TSelectedFields extends SelectedFields> = SQLiteUpdateWithout<SQLiteUpdateBase<T['_']['table'], T['_']['resultType'], T['_']['runResult'], SelectResultFields<TSelectedFields>, TDynamic, T['_']['excludedMethods']>, TDynamic, 'returning'>;
export type SQLiteUpdateExecute<T extends AnySQLiteUpdate> = T['_']['returning'] extends undefined ? T['_']['runResult'] : T['_']['returning'][];
export type SQLiteUpdatePrepare<T extends AnySQLiteUpdate> = SQLitePreparedQuery<{
    type: T['_']['resultType'];
    run: T['_']['runResult'];
    all: T['_']['returning'] extends undefined ? DrizzleTypeError<'.all() cannot be used without .returning()'> : T['_']['returning'][];
    get: T['_']['returning'] extends undefined ? DrizzleTypeError<'.get() cannot be used without .returning()'> : T['_']['returning'];
    values: T['_']['returning'] extends undefined ? DrizzleTypeError<'.values() cannot be used without .returning()'> : any[][];
    execute: SQLiteUpdateExecute<T>;
}>;
export type SQLiteUpdateDynamic<T extends AnySQLiteUpdate> = SQLiteUpdate<T['_']['table'], T['_']['resultType'], T['_']['runResult'], T['_']['returning']>;
export type SQLiteUpdate<TTable extends SQLiteTable = SQLiteTable, TResultType extends 'sync' | 'async' = 'sync' | 'async', TRunResult = any, TReturning extends Record<string, unknown> | undefined = Record<string, unknown> | undefined> = SQLiteUpdateBase<TTable, TResultType, TRunResult, TReturning, true, never>;
type AnySQLiteUpdate = SQLiteUpdateBase<any, any, any, any, any, any>;
export interface SQLiteUpdateBase<TTable extends SQLiteTable = SQLiteTable, TResultType extends 'sync' | 'async' = 'sync' | 'async', TRunResult = unknown, TReturning = undefined, TDynamic extends boolean = false, TExcludedMethods extends string = never> extends SQLWrapper, QueryPromise<TReturning extends undefined ? TRunResult : TReturning[]> {
    readonly _: {
        readonly dialect: 'sqlite';
        readonly table: TTable;
        readonly resultType: TResultType;
        readonly runResult: TRunResult;
        readonly returning: TReturning;
        readonly dynamic: TDynamic;
        readonly excludedMethods: TExcludedMethods;
        readonly result: TReturning extends undefined ? TRunResult : TReturning[];
    };
}
export declare class SQLiteUpdateBase<TTable extends SQLiteTable = SQLiteTable, TResultType extends 'sync' | 'async' = 'sync' | 'async', TRunResult = unknown, TReturning = undefined, TDynamic extends boolean = false, TExcludedMethods extends string = never> extends QueryPromise<TReturning extends undefined ? TRunResult : TReturning[]> implements RunnableQuery<TReturning extends undefined ? TRunResult : TReturning[], 'sqlite'>, SQLWrapper {
    private session;
    private dialect;
    static readonly [entityKind]: string;
    constructor(table: TTable, set: UpdateSet, session: SQLiteSession<any, any, any, any>, dialect: SQLiteDialect, withList?: Subquery[]);
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
    where(where: SQL | undefined): SQLiteUpdateWithout<this, TDynamic, 'where'>;
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
    returning(): SQLiteUpdateReturningAll<this, TDynamic>;
    returning<TSelectedFields extends SelectedFields>(fields: TSelectedFields): SQLiteUpdateReturning<this, TDynamic, TSelectedFields>;
    toSQL(): Query;
    prepare(): SQLiteUpdatePrepare<this>;
    run: ReturnType<this['prepare']>['run'];
    all: ReturnType<this['prepare']>['all'];
    get: ReturnType<this['prepare']>['get'];
    values: ReturnType<this['prepare']>['values'];
    execute(): Promise<SQLiteUpdateExecute<this>>;
    $dynamic(): SQLiteUpdateDynamic<this>;
}
export {};
