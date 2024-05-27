import type { AnyColumn } from "./column.cjs";
import type { Logger } from "./logger.cjs";
import { Param, SQL } from "./sql/sql.cjs";
import { Table } from "./table.cjs";
export declare function haveSameKeys(left: Record<string, unknown>, right: Record<string, unknown>): boolean;
export type UpdateSet = Record<string, SQL | Param | null | undefined>;
export type OneOrMany<T> = T | T[];
export type Update<T, TUpdate> = Simplify<{
    [K in Exclude<keyof T, keyof TUpdate>]: T[K];
} & TUpdate>;
export type Simplify<T> = {
    [K in keyof T]: T[K];
} & {};
export type SimplifyMappedType<T> = [T] extends [unknown] ? T : never;
export type ShallowRecord<K extends keyof any, T> = SimplifyMappedType<{
    [P in K]: T;
}>;
export type Assume<T, U> = T extends U ? T : U;
export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;
export interface DrizzleTypeError<T extends string> {
    $drizzleTypeError: T;
}
export type ValueOrArray<T> = T | T[];
export type Or<T1, T2> = T1 extends true ? true : T2 extends true ? true : false;
export type IfThenElse<If, Then, Else> = If extends true ? Then : Else;
export type PromiseOf<T> = T extends Promise<infer U> ? U : T;
export type Writable<T> = {
    -readonly [P in keyof T]: T[P];
};
export declare function getTableColumns<T extends Table>(table: T): T['_']['columns'];
export type ColumnsWithTable<TTableName extends string, TForeignTableName extends string, TColumns extends AnyColumn<{
    tableName: TTableName;
}>[]> = {
    [Key in keyof TColumns]: AnyColumn<{
        tableName: TForeignTableName;
    }>;
};
export interface DrizzleConfig<TSchema extends Record<string, unknown> = Record<string, never>> {
    logger?: boolean | Logger;
    schema?: TSchema;
}
export type ValidateShape<T, ValidShape, TResult = T> = T extends ValidShape ? Exclude<keyof T, keyof ValidShape> extends never ? TResult : DrizzleTypeError<`Invalid key(s): ${Exclude<(keyof T) & (string | number | bigint | boolean | null | undefined), keyof ValidShape>}`> : never;
export type KnownKeysOnly<T, U> = {
    [K in keyof T]: K extends keyof U ? T[K] : never;
};
export type IsAny<T> = 0 extends (1 & T) ? true : false;
