import type { ColumnBuilderBaseConfig } from "../../column-builder.cjs";
import type { ColumnBaseConfig } from "../../column.cjs";
import { entityKind } from "../../entity.cjs";
import { SQLiteColumn, SQLiteColumnBuilder } from "./common.cjs";
export type SQLiteNumericBuilderInitial<TName extends string> = SQLiteNumericBuilder<{
    name: TName;
    dataType: 'string';
    columnType: 'SQLiteNumeric';
    data: string;
    driverParam: string;
    enumValues: undefined;
}>;
export declare class SQLiteNumericBuilder<T extends ColumnBuilderBaseConfig<'string', 'SQLiteNumeric'>> extends SQLiteColumnBuilder<T> {
    static readonly [entityKind]: string;
    constructor(name: T['name']);
}
export declare class SQLiteNumeric<T extends ColumnBaseConfig<'string', 'SQLiteNumeric'>> extends SQLiteColumn<T> {
    static readonly [entityKind]: string;
    getSQLType(): string;
}
export declare function numeric<TName extends string>(name: TName): SQLiteNumericBuilderInitial<TName>;
