import type { ColumnBuilderBaseConfig } from "../../column-builder.js";
import type { ColumnBaseConfig } from "../../column.js";
import { entityKind } from "../../entity.js";
import type { Writable } from "../../utils.js";
import { PgColumn, PgColumnBuilder } from "./common.js";
export type PgVarcharBuilderInitial<TName extends string, TEnum extends [string, ...string[]]> = PgVarcharBuilder<{
    name: TName;
    dataType: 'string';
    columnType: 'PgVarchar';
    data: TEnum[number];
    driverParam: string;
    enumValues: TEnum;
}>;
export declare class PgVarcharBuilder<T extends ColumnBuilderBaseConfig<'string', 'PgVarchar'>> extends PgColumnBuilder<T, {
    length: number | undefined;
    enumValues: T['enumValues'];
}> {
    static readonly [entityKind]: string;
    constructor(name: string, config: PgVarcharConfig<T['enumValues']>);
}
export declare class PgVarchar<T extends ColumnBaseConfig<'string', 'PgVarchar'>> extends PgColumn<T, {
    length: number | undefined;
    enumValues: T['enumValues'];
}> {
    static readonly [entityKind]: string;
    readonly length: number | undefined;
    readonly enumValues: T["enumValues"];
    getSQLType(): string;
}
export interface PgVarcharConfig<TEnum extends readonly string[] | string[] | undefined> {
    length?: number;
    enum?: TEnum;
}
export declare function varchar<TName extends string, U extends string, T extends Readonly<[U, ...U[]]>>(name: TName, config?: PgVarcharConfig<T | Writable<T>>): PgVarcharBuilderInitial<TName, Writable<T>>;
