import type { ColumnBuilderBaseConfig } from "../../column-builder.js";
import type { ColumnBaseConfig } from "../../column.js";
import { entityKind } from "../../entity.js";
import { MySqlColumnBuilderWithAutoIncrement, MySqlColumnWithAutoIncrement } from "./common.js";
export type MySqlDoubleBuilderInitial<TName extends string> = MySqlDoubleBuilder<{
    name: TName;
    dataType: 'number';
    columnType: 'MySqlDouble';
    data: number;
    driverParam: number | string;
    enumValues: undefined;
}>;
export declare class MySqlDoubleBuilder<T extends ColumnBuilderBaseConfig<'number', 'MySqlDouble'>> extends MySqlColumnBuilderWithAutoIncrement<T, MySqlDoubleConfig> {
    static readonly [entityKind]: string;
    constructor(name: T['name'], config: MySqlDoubleConfig | undefined);
}
export declare class MySqlDouble<T extends ColumnBaseConfig<'number', 'MySqlDouble'>> extends MySqlColumnWithAutoIncrement<T, MySqlDoubleConfig> {
    static readonly [entityKind]: string;
    precision: number | undefined;
    scale: number | undefined;
    getSQLType(): string;
}
export interface MySqlDoubleConfig {
    precision?: number;
    scale?: number;
}
export declare function double<TName extends string>(name: TName, config?: MySqlDoubleConfig): MySqlDoubleBuilderInitial<TName>;
