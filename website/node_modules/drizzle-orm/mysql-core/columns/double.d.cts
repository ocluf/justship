import type { ColumnBuilderBaseConfig } from "../../column-builder.cjs";
import type { ColumnBaseConfig } from "../../column.cjs";
import { entityKind } from "../../entity.cjs";
import { MySqlColumnBuilderWithAutoIncrement, MySqlColumnWithAutoIncrement } from "./common.cjs";
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
