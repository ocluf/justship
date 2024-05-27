import type { ColumnBuilderBaseConfig } from "../../column-builder.js";
import type { ColumnBaseConfig } from "../../column.js";
import { entityKind } from "../../entity.js";
import type { Writable } from "../../utils.js";
import { MySqlColumn, MySqlColumnBuilder } from "./common.js";
export type MySqlVarCharBuilderInitial<TName extends string, TEnum extends [string, ...string[]]> = MySqlVarCharBuilder<{
    name: TName;
    dataType: 'string';
    columnType: 'MySqlVarChar';
    data: TEnum[number];
    driverParam: number | string;
    enumValues: TEnum;
}>;
export declare class MySqlVarCharBuilder<T extends ColumnBuilderBaseConfig<'string', 'MySqlVarChar'>> extends MySqlColumnBuilder<T, MySqlVarCharConfig<T['enumValues']>> {
    static readonly [entityKind]: string;
}
export declare class MySqlVarChar<T extends ColumnBaseConfig<'string', 'MySqlVarChar'>> extends MySqlColumn<T, MySqlVarCharConfig<T['enumValues']>> {
    static readonly [entityKind]: string;
    readonly length: number | undefined;
    readonly enumValues: T["enumValues"] | undefined;
    getSQLType(): string;
}
export interface MySqlVarCharConfig<TEnum extends string[] | readonly string[] | undefined> {
    length: number;
    enum?: TEnum;
}
export declare function varchar<TName extends string, U extends string, T extends Readonly<[U, ...U[]]>>(name: TName, config: MySqlVarCharConfig<T | Writable<T>>): MySqlVarCharBuilderInitial<TName, Writable<T>>;
