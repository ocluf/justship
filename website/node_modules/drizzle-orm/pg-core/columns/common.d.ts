import type { ColumnBuilderBase, ColumnBuilderBaseConfig, ColumnBuilderExtraConfig, ColumnBuilderRuntimeConfig, ColumnDataType } from "../../column-builder.js";
import { ColumnBuilder } from "../../column-builder.js";
import type { ColumnBaseConfig } from "../../column.js";
import { Column } from "../../column.js";
import { entityKind } from "../../entity.js";
import type { Update } from "../../utils.js";
import type { UpdateDeleteAction } from "../foreign-keys.js";
import type { AnyPgTable, PgTable } from "../table.js";
export interface ReferenceConfig {
    ref: () => PgColumn;
    actions: {
        onUpdate?: UpdateDeleteAction;
        onDelete?: UpdateDeleteAction;
    };
}
export interface PgColumnBuilderBase<T extends ColumnBuilderBaseConfig<ColumnDataType, string> = ColumnBuilderBaseConfig<ColumnDataType, string>, TTypeConfig extends object = object> extends ColumnBuilderBase<T, TTypeConfig & {
    dialect: 'pg';
}> {
}
export declare abstract class PgColumnBuilder<T extends ColumnBuilderBaseConfig<ColumnDataType, string> = ColumnBuilderBaseConfig<ColumnDataType, string>, TRuntimeConfig extends object = object, TTypeConfig extends object = object, TExtraConfig extends ColumnBuilderExtraConfig = ColumnBuilderExtraConfig> extends ColumnBuilder<T, TRuntimeConfig, TTypeConfig & {
    dialect: 'pg';
}, TExtraConfig> implements PgColumnBuilderBase<T, TTypeConfig> {
    private foreignKeyConfigs;
    static readonly [entityKind]: string;
    array(size?: number): PgArrayBuilder<{
        name: T['name'];
        dataType: 'array';
        columnType: 'PgArray';
        data: T['data'][];
        driverParam: T['driverParam'][] | string;
        enumValues: T['enumValues'];
    } & (T extends {
        notNull: true;
    } ? {
        notNull: true;
    } : {}) & (T extends {
        hasDefault: true;
    } ? {
        hasDefault: true;
    } : {}), T>;
    references(ref: ReferenceConfig['ref'], actions?: ReferenceConfig['actions']): this;
    unique(name?: string, config?: {
        nulls: 'distinct' | 'not distinct';
    }): this;
}
export declare abstract class PgColumn<T extends ColumnBaseConfig<ColumnDataType, string> = ColumnBaseConfig<ColumnDataType, string>, TRuntimeConfig extends object = {}, TTypeConfig extends object = {}> extends Column<T, TRuntimeConfig, TTypeConfig & {
    dialect: 'pg';
}> {
    readonly table: PgTable;
    static readonly [entityKind]: string;
    constructor(table: PgTable, config: ColumnBuilderRuntimeConfig<T['data'], TRuntimeConfig>);
}
export type AnyPgColumn<TPartial extends Partial<ColumnBaseConfig<ColumnDataType, string>> = {}> = PgColumn<Required<Update<ColumnBaseConfig<ColumnDataType, string>, TPartial>>>;
export declare class PgArrayBuilder<T extends ColumnBuilderBaseConfig<'array', 'PgArray'>, TBase extends ColumnBuilderBaseConfig<ColumnDataType, string>> extends PgColumnBuilder<T, {
    baseBuilder: PgColumnBuilder<TBase>;
    size: number | undefined;
}, {
    baseBuilder: PgColumnBuilder<TBase>;
}> {
    static readonly [entityKind] = "PgArrayBuilder";
    constructor(name: string, baseBuilder: PgArrayBuilder<T, TBase>['config']['baseBuilder'], size: number | undefined);
}
export declare class PgArray<T extends ColumnBaseConfig<'array', 'PgArray'>, TBase extends ColumnBuilderBaseConfig<ColumnDataType, string>> extends PgColumn<T> {
    readonly baseColumn: PgColumn;
    readonly range?: [number | undefined, number | undefined] | undefined;
    readonly size: number | undefined;
    static readonly [entityKind]: string;
    constructor(table: AnyPgTable<{
        name: T['tableName'];
    }>, config: PgArrayBuilder<T, TBase>['config'], baseColumn: PgColumn, range?: [number | undefined, number | undefined] | undefined);
    getSQLType(): string;
    mapFromDriverValue(value: unknown[] | string): T['data'];
    mapToDriverValue(value: unknown[], isNestedArray?: boolean): unknown[] | string;
}
