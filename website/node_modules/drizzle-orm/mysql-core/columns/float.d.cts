import type { ColumnBuilderBaseConfig } from "../../column-builder.cjs";
import type { ColumnBaseConfig } from "../../column.cjs";
import { entityKind } from "../../entity.cjs";
import { MySqlColumnBuilderWithAutoIncrement, MySqlColumnWithAutoIncrement } from "./common.cjs";
export type MySqlFloatBuilderInitial<TName extends string> = MySqlFloatBuilder<{
    name: TName;
    dataType: 'number';
    columnType: 'MySqlFloat';
    data: number;
    driverParam: number | string;
    enumValues: undefined;
}>;
export declare class MySqlFloatBuilder<T extends ColumnBuilderBaseConfig<'number', 'MySqlFloat'>> extends MySqlColumnBuilderWithAutoIncrement<T> {
    static readonly [entityKind]: string;
    constructor(name: T['name']);
}
export declare class MySqlFloat<T extends ColumnBaseConfig<'number', 'MySqlFloat'>> extends MySqlColumnWithAutoIncrement<T> {
    static readonly [entityKind]: string;
    getSQLType(): string;
}
export declare function float<TName extends string>(name: TName): MySqlFloatBuilderInitial<TName>;
