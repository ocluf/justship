import type { ColumnBuilderBaseConfig } from "../../column-builder.cjs";
import type { ColumnBaseConfig } from "../../column.cjs";
import { entityKind } from "../../entity.cjs";
import type { Writable } from "../../utils.cjs";
import { MySqlColumn, MySqlColumnBuilder } from "./common.cjs";
export type MySqlEnumColumnBuilderInitial<TName extends string, TEnum extends [string, ...string[]]> = MySqlEnumColumnBuilder<{
    name: TName;
    dataType: 'string';
    columnType: 'MySqlEnumColumn';
    data: TEnum[number];
    driverParam: string;
    enumValues: TEnum;
}>;
export declare class MySqlEnumColumnBuilder<T extends ColumnBuilderBaseConfig<'string', 'MySqlEnumColumn'>> extends MySqlColumnBuilder<T, {
    enumValues: T['enumValues'];
}> {
    static readonly [entityKind]: string;
    constructor(name: T['name'], values: T['enumValues']);
}
export declare class MySqlEnumColumn<T extends ColumnBaseConfig<'string', 'MySqlEnumColumn'>> extends MySqlColumn<T, {
    enumValues: T['enumValues'];
}> {
    static readonly [entityKind]: string;
    readonly enumValues: T["enumValues"];
    getSQLType(): string;
}
export declare function mysqlEnum<TName extends string, U extends string, T extends Readonly<[U, ...U[]]>>(name: TName, values: T | Writable<T>): MySqlEnumColumnBuilderInitial<TName, Writable<T>>;
