import type { BuildColumns } from "../column-builder.cjs";
import { entityKind } from "../entity.cjs";
import { Table, type TableConfig as TableConfigBase, type UpdateTableConfig } from "../table.cjs";
import type { CheckBuilder } from "./checks.cjs";
import type { PgColumn, PgColumnBuilderBase } from "./columns/common.cjs";
import type { ForeignKeyBuilder } from "./foreign-keys.cjs";
import type { AnyIndexBuilder } from "./indexes.cjs";
import type { PrimaryKeyBuilder } from "./primary-keys.cjs";
import type { UniqueConstraintBuilder } from "./unique-constraint.cjs";
export type PgTableExtraConfig = Record<string, AnyIndexBuilder | CheckBuilder | ForeignKeyBuilder | PrimaryKeyBuilder | UniqueConstraintBuilder>;
export type TableConfig = TableConfigBase<PgColumn>;
export declare class PgTable<T extends TableConfig = TableConfig> extends Table<T> {
    static readonly [entityKind]: string;
}
export type AnyPgTable<TPartial extends Partial<TableConfig> = {}> = PgTable<UpdateTableConfig<TableConfig, TPartial>>;
export type PgTableWithColumns<T extends TableConfig> = PgTable<T> & {
    [Key in keyof T['columns']]: T['columns'][Key];
};
export interface PgTableFn<TSchema extends string | undefined = undefined> {
    <TTableName extends string, TColumnsMap extends Record<string, PgColumnBuilderBase>>(name: TTableName, columns: TColumnsMap, extraConfig?: (self: BuildColumns<TTableName, TColumnsMap, 'pg'>) => PgTableExtraConfig): PgTableWithColumns<{
        name: TTableName;
        schema: TSchema;
        columns: BuildColumns<TTableName, TColumnsMap, 'pg'>;
        dialect: 'pg';
    }>;
}
export declare const pgTable: PgTableFn;
export declare function pgTableCreator(customizeTableName: (name: string) => string): PgTableFn;
