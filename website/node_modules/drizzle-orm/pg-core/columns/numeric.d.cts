import type { ColumnBuilderBaseConfig } from "../../column-builder.cjs";
import type { ColumnBaseConfig } from "../../column.cjs";
import { entityKind } from "../../entity.cjs";
import type { AnyPgTable } from "../table.cjs";
import { PgColumn, PgColumnBuilder } from "./common.cjs";
export type PgNumericBuilderInitial<TName extends string> = PgNumericBuilder<{
    name: TName;
    dataType: 'string';
    columnType: 'PgNumeric';
    data: string;
    driverParam: string;
    enumValues: undefined;
}>;
export declare class PgNumericBuilder<T extends ColumnBuilderBaseConfig<'string', 'PgNumeric'>> extends PgColumnBuilder<T, {
    precision: number | undefined;
    scale: number | undefined;
}> {
    static readonly [entityKind]: string;
    constructor(name: string, precision?: number, scale?: number);
}
export declare class PgNumeric<T extends ColumnBaseConfig<'string', 'PgNumeric'>> extends PgColumn<T> {
    static readonly [entityKind]: string;
    readonly precision: number | undefined;
    readonly scale: number | undefined;
    constructor(table: AnyPgTable<{
        name: T['tableName'];
    }>, config: PgNumericBuilder<T>['config']);
    getSQLType(): string;
}
export declare function numeric<TName extends string>(name: TName, config?: {
    precision: number;
    scale?: number;
} | {
    precision?: number;
    scale: number;
} | {
    precision: number;
    scale: number;
}): PgNumericBuilderInitial<TName>;
export declare const decimal: typeof numeric;
