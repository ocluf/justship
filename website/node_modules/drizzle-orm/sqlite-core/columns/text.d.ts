import type { ColumnBuilderBaseConfig } from "../../column-builder.js";
import type { ColumnBaseConfig } from "../../column.js";
import { entityKind } from "../../entity.js";
import type { AnySQLiteTable } from "../table.js";
import type { Equal, Writable } from "../../utils.js";
import { SQLiteColumn, SQLiteColumnBuilder } from "./common.js";
export type SQLiteTextBuilderInitial<TName extends string, TEnum extends [string, ...string[]]> = SQLiteTextBuilder<{
    name: TName;
    dataType: 'string';
    columnType: 'SQLiteText';
    data: TEnum[number];
    driverParam: string;
    enumValues: TEnum;
}>;
export declare class SQLiteTextBuilder<T extends ColumnBuilderBaseConfig<'string', 'SQLiteText'>> extends SQLiteColumnBuilder<T, {
    length: number | undefined;
    enumValues: T['enumValues'];
}> {
    static readonly [entityKind]: string;
    constructor(name: T['name'], config: SQLiteTextConfig<'text', T['enumValues']>);
}
export declare class SQLiteText<T extends ColumnBaseConfig<'string', 'SQLiteText'>> extends SQLiteColumn<T, {
    length: number | undefined;
    enumValues: T['enumValues'];
}> {
    static readonly [entityKind]: string;
    readonly enumValues: T["enumValues"];
    readonly length: number | undefined;
    constructor(table: AnySQLiteTable<{
        name: T['tableName'];
    }>, config: SQLiteTextBuilder<T>['config']);
    getSQLType(): string;
}
export type SQLiteTextJsonBuilderInitial<TName extends string> = SQLiteTextJsonBuilder<{
    name: TName;
    dataType: 'json';
    columnType: 'SQLiteTextJson';
    data: unknown;
    driverParam: string;
    enumValues: undefined;
}>;
export declare class SQLiteTextJsonBuilder<T extends ColumnBuilderBaseConfig<'json', 'SQLiteTextJson'>> extends SQLiteColumnBuilder<T> {
    static readonly [entityKind]: string;
    constructor(name: T['name']);
}
export declare class SQLiteTextJson<T extends ColumnBaseConfig<'json', 'SQLiteTextJson'>> extends SQLiteColumn<T, {
    length: number | undefined;
    enumValues: T['enumValues'];
}> {
    static readonly [entityKind]: string;
    getSQLType(): string;
    mapFromDriverValue(value: string): T['data'];
    mapToDriverValue(value: T['data']): string;
}
export type SQLiteTextConfig<TMode extends 'text' | 'json', TEnum extends readonly string[] | string[] | undefined> = TMode extends 'text' ? {
    mode?: TMode;
    length?: number;
    enum?: TEnum;
} : {
    mode?: TMode;
};
export declare function text<TName extends string, U extends string, T extends Readonly<[U, ...U[]]>, TMode extends 'text' | 'json' = 'text' | 'json'>(name: TName, config?: SQLiteTextConfig<TMode, T | Writable<T>>): Equal<TMode, 'json'> extends true ? SQLiteTextJsonBuilderInitial<TName> : SQLiteTextBuilderInitial<TName, Writable<T>>;
