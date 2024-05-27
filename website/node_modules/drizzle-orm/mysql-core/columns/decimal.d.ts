import type { ColumnBuilderBaseConfig } from "../../column-builder.js";
import type { ColumnBaseConfig } from "../../column.js";
import { entityKind } from "../../entity.js";
import { MySqlColumnBuilderWithAutoIncrement, MySqlColumnWithAutoIncrement } from "./common.js";
export type MySqlDecimalBuilderInitial<TName extends string> = MySqlDecimalBuilder<{
    name: TName;
    dataType: 'string';
    columnType: 'MySqlDecimal';
    data: string;
    driverParam: string;
    enumValues: undefined;
}>;
export declare class MySqlDecimalBuilder<T extends ColumnBuilderBaseConfig<'string', 'MySqlDecimal'>> extends MySqlColumnBuilderWithAutoIncrement<T, MySqlDecimalConfig> {
    static readonly [entityKind]: string;
    constructor(name: T['name'], precision?: number, scale?: number);
}
export declare class MySqlDecimal<T extends ColumnBaseConfig<'string', 'MySqlDecimal'>> extends MySqlColumnWithAutoIncrement<T, MySqlDecimalConfig> {
    static readonly [entityKind]: string;
    readonly precision: number | undefined;
    readonly scale: number | undefined;
    getSQLType(): string;
}
export interface MySqlDecimalConfig {
    precision?: number;
    scale?: number;
}
export declare function decimal<TName extends string>(name: TName, config?: MySqlDecimalConfig): MySqlDecimalBuilderInitial<TName>;
