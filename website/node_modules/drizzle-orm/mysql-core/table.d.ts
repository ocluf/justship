import type { BuildColumns } from "../column-builder.js";
import { entityKind } from "../entity.js";
import { Table, type TableConfig as TableConfigBase, type UpdateTableConfig } from "../table.js";
import type { CheckBuilder } from "./checks.js";
import type { MySqlColumn, MySqlColumnBuilderBase } from "./columns/common.js";
import type { ForeignKeyBuilder } from "./foreign-keys.js";
import type { AnyIndexBuilder } from "./indexes.js";
import type { PrimaryKeyBuilder } from "./primary-keys.js";
import type { UniqueConstraintBuilder } from "./unique-constraint.js";
export type MySqlTableExtraConfig = Record<string, AnyIndexBuilder | CheckBuilder | ForeignKeyBuilder | PrimaryKeyBuilder | UniqueConstraintBuilder>;
export type TableConfig = TableConfigBase<MySqlColumn>;
export declare class MySqlTable<T extends TableConfig = TableConfig> extends Table<T> {
    static readonly [entityKind]: string;
    protected $columns: T['columns'];
}
export type AnyMySqlTable<TPartial extends Partial<TableConfig> = {}> = MySqlTable<UpdateTableConfig<TableConfig, TPartial>>;
export type MySqlTableWithColumns<T extends TableConfig> = MySqlTable<T> & {
    [Key in keyof T['columns']]: T['columns'][Key];
};
export declare function mysqlTableWithSchema<TTableName extends string, TSchemaName extends string | undefined, TColumnsMap extends Record<string, MySqlColumnBuilderBase>>(name: TTableName, columns: TColumnsMap, extraConfig: ((self: BuildColumns<TTableName, TColumnsMap, 'mysql'>) => MySqlTableExtraConfig) | undefined, schema: TSchemaName, baseName?: TTableName): MySqlTableWithColumns<{
    name: TTableName;
    schema: TSchemaName;
    columns: BuildColumns<TTableName, TColumnsMap, 'mysql'>;
    dialect: 'mysql';
}>;
export interface MySqlTableFn<TSchemaName extends string | undefined = undefined> {
    <TTableName extends string, TColumnsMap extends Record<string, MySqlColumnBuilderBase>>(name: TTableName, columns: TColumnsMap, extraConfig?: (self: BuildColumns<TTableName, TColumnsMap, 'mysql'>) => MySqlTableExtraConfig): MySqlTableWithColumns<{
        name: TTableName;
        schema: TSchemaName;
        columns: BuildColumns<TTableName, TColumnsMap, 'mysql'>;
        dialect: 'mysql';
    }>;
}
export declare const mysqlTable: MySqlTableFn;
export declare function mysqlTableCreator(customizeTableName: (name: string) => string): MySqlTableFn;
