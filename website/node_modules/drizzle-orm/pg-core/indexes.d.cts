import type { SQL } from "../sql/sql.cjs";
import { entityKind } from "../entity.cjs";
import type { PgColumn } from "./columns/index.cjs";
import type { PgTable } from "./table.cjs";
interface IndexConfig {
    name?: string;
    columns: IndexColumn[];
    /**
     * If true, the index will be created as `create unique index` instead of `create index`.
     */
    unique: boolean;
    /**
     * If true, the index will be created as `create index concurrently` instead of `create index`.
     */
    concurrently?: boolean;
    /**
     * If true, the index will be created as `create index ... on only <table>` instead of `create index ... on <table>`.
     */
    only: boolean;
    /**
     * If set, the index will be created as `create index ... using <method>`.
     */
    using?: SQL;
    /**
     * If set, the index will be created as `create index ... asc | desc`.
     */
    order?: 'asc' | 'desc';
    /**
     * If set, adds `nulls first` or `nulls last` to the index.
     */
    nulls?: 'first' | 'last';
    /**
     * Condition for partial index.
     */
    where?: SQL;
}
export type IndexColumn = PgColumn;
export declare class IndexBuilderOn {
    private unique;
    private name?;
    static readonly [entityKind]: string;
    constructor(unique: boolean, name?: string | undefined);
    on(...columns: [IndexColumn, ...IndexColumn[]]): IndexBuilder;
    onOnly(...columns: [IndexColumn, ...IndexColumn[]]): IndexBuilder;
}
export interface AnyIndexBuilder {
    build(table: PgTable): Index;
}
export interface IndexBuilder extends AnyIndexBuilder {
}
export declare class IndexBuilder implements AnyIndexBuilder {
    static readonly [entityKind]: string;
    constructor(columns: IndexColumn[], unique: boolean, only: boolean, name?: string);
    concurrently(): this;
    using(method: SQL): this;
    asc(): Omit<this, 'asc' | 'desc'>;
    desc(): Omit<this, 'asc' | 'desc'>;
    nullsFirst(): Omit<this, 'nullsFirst' | 'nullsLast'>;
    nullsLast(): Omit<this, 'nullsFirst' | 'nullsLast'>;
    where(condition: SQL): Omit<this, 'where'>;
}
export declare class Index {
    static readonly [entityKind]: string;
    readonly config: IndexConfig & {
        table: PgTable;
    };
    constructor(config: IndexConfig, table: PgTable);
}
export type GetColumnsTableName<TColumns> = TColumns extends PgColumn ? TColumns['_']['name'] : TColumns extends PgColumn[] ? TColumns[number]['_']['name'] : never;
export declare function index(name?: string): IndexBuilderOn;
export declare function uniqueIndex(name?: string): IndexBuilderOn;
export {};
