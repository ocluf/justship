import { PgTable } from "./table.cjs";
import { Table } from "../table.cjs";
import { type Check } from "./checks.cjs";
import type { AnyPgColumn } from "./columns/index.cjs";
import { type ForeignKey } from "./foreign-keys.cjs";
import { type Index } from "./indexes.cjs";
import { type PrimaryKey } from "./primary-keys.cjs";
import { type UniqueConstraint } from "./unique-constraint.cjs";
import { type PgMaterializedView, type PgView } from "./view.cjs";
export declare function getTableConfig<TTable extends PgTable>(table: TTable): {
    columns: import("./columns/common.ts").PgColumn<import("../column.ts").ColumnBaseConfig<import("../column-builder.ts").ColumnDataType, string>, {}, {}>[];
    indexes: Index[];
    foreignKeys: ForeignKey[];
    checks: Check[];
    primaryKeys: PrimaryKey[];
    uniqueConstraints: UniqueConstraint[];
    name: string;
    schema: string | undefined;
};
export declare function getViewConfig<TName extends string = string, TExisting extends boolean = boolean>(view: PgView<TName, TExisting>): {
    with?: import("./view.ts").ViewWithConfig | undefined;
    name: TName;
    originalName: TName;
    schema: string | undefined;
    selectedFields: import("../operations.ts").SelectedFields<import("../column.ts").AnyColumn, Table<import("../table.ts").TableConfig<import("../column.ts").Column<any, object, object>>>>;
    isExisting: TExisting;
    query: TExisting extends true ? undefined : import("../index.ts").SQL<unknown>;
    isAlias: boolean;
};
export declare function getMaterializedViewConfig<TName extends string = string, TExisting extends boolean = boolean>(view: PgMaterializedView<TName, TExisting>): {
    with?: import("./view.ts").PgMaterializedViewWithConfig | undefined;
    using?: string | undefined;
    tablespace?: string | undefined;
    withNoData?: boolean | undefined;
    name: TName;
    originalName: TName;
    schema: string | undefined;
    selectedFields: import("../operations.ts").SelectedFields<import("../column.ts").AnyColumn, Table<import("../table.ts").TableConfig<import("../column.ts").Column<any, object, object>>>>;
    isExisting: TExisting;
    query: TExisting extends true ? undefined : import("../index.ts").SQL<unknown>;
    isAlias: boolean;
};
export type ColumnsWithTable<TTableName extends string, TForeignTableName extends string, TColumns extends AnyPgColumn<{
    tableName: TTableName;
}>[]> = {
    [Key in keyof TColumns]: AnyPgColumn<{
        tableName: TForeignTableName;
    }>;
};
