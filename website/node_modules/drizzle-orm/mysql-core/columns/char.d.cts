import type { ColumnBuilderBaseConfig } from "../../column-builder.cjs";
import type { ColumnBaseConfig } from "../../column.cjs";
import { entityKind } from "../../entity.cjs";
import type { Writable } from "../../utils.cjs";
import { MySqlColumn, MySqlColumnBuilder } from "./common.cjs";
export type MySqlCharBuilderInitial<TName extends string, TEnum extends [string, ...string[]]> = MySqlCharBuilder<{
    name: TName;
    dataType: 'string';
    columnType: 'MySqlChar';
    data: TEnum[number];
    driverParam: number | string;
    enumValues: TEnum;
}>;
export declare class MySqlCharBuilder<T extends ColumnBuilderBaseConfig<'string', 'MySqlChar'>> extends MySqlColumnBuilder<T, MySqlCharConfig<T['enumValues']>> {
    static readonly [entityKind]: string;
    constructor(name: T['name'], config: MySqlCharConfig<T['enumValues']>);
}
export declare class MySqlChar<T extends ColumnBaseConfig<'string', 'MySqlChar'>> extends MySqlColumn<T, MySqlCharConfig<T['enumValues']>> {
    static readonly [entityKind]: string;
    readonly length: number | undefined;
    readonly enumValues: T["enumValues"] | undefined;
    getSQLType(): string;
}
export interface MySqlCharConfig<TEnum extends readonly string[] | string[] | undefined> {
    length?: number;
    enum?: TEnum;
}
export declare function char<TName extends string, U extends string, T extends Readonly<[U, ...U[]]>>(name: TName, config?: MySqlCharConfig<T | Writable<T>>): MySqlCharBuilderInitial<TName, Writable<T>>;
