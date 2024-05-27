import { entityKind } from "../entity.cjs";
import type { pgEnum } from "./columns/enum.cjs";
import { type PgTableFn } from "./table.cjs";
import { type pgMaterializedView, type pgView } from "./view.cjs";
export declare class PgSchema<TName extends string = string> {
    readonly schemaName: TName;
    static readonly [entityKind]: string;
    constructor(schemaName: TName);
    table: PgTableFn<TName>;
    view: typeof pgView;
    materializedView: typeof pgMaterializedView;
    enum: typeof pgEnum;
}
export declare function isPgSchema(obj: unknown): obj is PgSchema;
export declare function pgSchema<T extends string>(name: T): PgSchema<T>;
