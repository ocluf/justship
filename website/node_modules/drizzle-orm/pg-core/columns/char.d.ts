import type { ColumnBuilderBaseConfig } from "../../column-builder.js";
import type { ColumnBaseConfig } from "../../column.js";
import { entityKind } from "../../entity.js";
import type { Writable } from "../../utils.js";
import { PgColumn, PgColumnBuilder } from "./common.js";
export type PgCharBuilderInitial<TName extends string, TEnum extends [string, ...string[]]> = PgCharBuilder<{
    name: TName;
    dataType: 'string';
    columnType: 'PgChar';
    data: TEnum[number];
    enumValues: TEnum;
    driverParam: string;
}>;
export declare class PgCharBuilder<T extends ColumnBuilderBaseConfig<'string', 'PgChar'>> extends PgColumnBuilder<T, {
    length: number | undefined;
    enumValues: T['enumValues'];
}> {
    static readonly [entityKind]: string;
    constructor(name: string, config: PgCharConfig<T['enumValues']>);
}
export declare class PgChar<T extends ColumnBaseConfig<'string', 'PgChar'>> extends PgColumn<T, {
    length: number | undefined;
    enumValues: T['enumValues'];
}> {
    static readonly [entityKind]: string;
    readonly length: number | undefined;
    readonly enumValues: T["enumValues"];
    getSQLType(): string;
}
export interface PgCharConfig<TEnum extends readonly string[] | string[] | undefined> {
    length?: number;
    enum?: TEnum;
}
export declare function char<TName extends string, U extends string, T extends Readonly<[U, ...U[]]>>(name: TName, config?: PgCharConfig<T | Writable<T>>): PgCharBuilderInitial<TName, Writable<T>>;
