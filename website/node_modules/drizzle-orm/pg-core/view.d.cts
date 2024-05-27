import type { BuildColumns } from "../column-builder.cjs";
import { entityKind } from "../entity.cjs";
import type { TypedQueryBuilder } from "../query-builders/query-builder.cjs";
import type { AddAliasToSelection } from "../query-builders/select.types.cjs";
import type { ColumnsSelection, SQL } from "../sql/sql.cjs";
import type { PgColumnBuilderBase } from "./columns/common.cjs";
import { QueryBuilder } from "./query-builders/query-builder.cjs";
import type { SelectedFields } from "./query-builders/select.types.cjs";
import { PgViewBase } from "./view-base.cjs";
import { PgViewConfig } from "./view-common.cjs";
export interface ViewWithConfig {
    checkOption: 'local' | 'cascaded';
    securityBarrier: boolean;
    securityInvoker: boolean;
}
export declare class DefaultViewBuilderCore<TConfig extends {
    name: string;
    columns?: unknown;
}> {
    protected name: TConfig['name'];
    protected schema: string | undefined;
    static readonly [entityKind]: string;
    readonly _: {
        readonly name: TConfig['name'];
        readonly columns: TConfig['columns'];
    };
    constructor(name: TConfig['name'], schema: string | undefined);
    protected config: {
        with?: ViewWithConfig;
    };
    with(config: ViewWithConfig): this;
}
export declare class ViewBuilder<TName extends string = string> extends DefaultViewBuilderCore<{
    name: TName;
}> {
    static readonly [entityKind]: string;
    as<TSelectedFields extends SelectedFields>(qb: TypedQueryBuilder<TSelectedFields> | ((qb: QueryBuilder) => TypedQueryBuilder<TSelectedFields>)): PgViewWithSelection<TName, false, AddAliasToSelection<TSelectedFields, TName, 'pg'>>;
}
export declare class ManualViewBuilder<TName extends string = string, TColumns extends Record<string, PgColumnBuilderBase> = Record<string, PgColumnBuilderBase>> extends DefaultViewBuilderCore<{
    name: TName;
    columns: TColumns;
}> {
    static readonly [entityKind]: string;
    private columns;
    constructor(name: TName, columns: TColumns, schema: string | undefined);
    existing(): PgViewWithSelection<TName, true, BuildColumns<TName, TColumns, 'pg'>>;
    as(query: SQL): PgViewWithSelection<TName, false, BuildColumns<TName, TColumns, 'pg'>>;
}
export interface PgMaterializedViewWithConfig {
    [Key: string]: string | number | boolean | SQL;
}
export declare class MaterializedViewBuilderCore<TConfig extends {
    name: string;
    columns?: unknown;
}> {
    protected name: TConfig['name'];
    protected schema: string | undefined;
    static readonly [entityKind]: string;
    _: {
        readonly name: TConfig['name'];
        readonly columns: TConfig['columns'];
    };
    constructor(name: TConfig['name'], schema: string | undefined);
    protected config: {
        with?: PgMaterializedViewWithConfig;
        using?: string;
        tablespace?: string;
        withNoData?: boolean;
    };
    using(using: string): this;
    with(config: PgMaterializedViewWithConfig): this;
    tablespace(tablespace: string): this;
    withNoData(): this;
}
export declare class MaterializedViewBuilder<TName extends string = string> extends MaterializedViewBuilderCore<{
    name: TName;
}> {
    static readonly [entityKind]: string;
    as<TSelectedFields extends SelectedFields>(qb: TypedQueryBuilder<TSelectedFields> | ((qb: QueryBuilder) => TypedQueryBuilder<TSelectedFields>)): PgMaterializedViewWithSelection<TName, false, AddAliasToSelection<TSelectedFields, TName, 'pg'>>;
}
export declare class ManualMaterializedViewBuilder<TName extends string = string, TColumns extends Record<string, PgColumnBuilderBase> = Record<string, PgColumnBuilderBase>> extends MaterializedViewBuilderCore<{
    name: TName;
    columns: TColumns;
}> {
    static readonly [entityKind]: string;
    private columns;
    constructor(name: TName, columns: TColumns, schema: string | undefined);
    existing(): PgMaterializedViewWithSelection<TName, true, BuildColumns<TName, TColumns, 'pg'>>;
    as(query: SQL): PgMaterializedViewWithSelection<TName, false, BuildColumns<TName, TColumns, 'pg'>>;
}
export declare class PgView<TName extends string = string, TExisting extends boolean = boolean, TSelectedFields extends ColumnsSelection = ColumnsSelection> extends PgViewBase<TName, TExisting, TSelectedFields> {
    static readonly [entityKind]: string;
    [PgViewConfig]: {
        with?: ViewWithConfig;
    } | undefined;
    constructor({ pgConfig, config }: {
        pgConfig: {
            with?: ViewWithConfig;
        } | undefined;
        config: {
            name: TName;
            schema: string | undefined;
            selectedFields: SelectedFields;
            query: SQL | undefined;
        };
    });
}
export type PgViewWithSelection<TName extends string = string, TExisting extends boolean = boolean, TSelectedFields extends ColumnsSelection = ColumnsSelection> = PgView<TName, TExisting, TSelectedFields> & TSelectedFields;
export declare const PgMaterializedViewConfig: unique symbol;
export declare class PgMaterializedView<TName extends string = string, TExisting extends boolean = boolean, TSelectedFields extends ColumnsSelection = ColumnsSelection> extends PgViewBase<TName, TExisting, TSelectedFields> {
    static readonly [entityKind]: string;
    readonly [PgMaterializedViewConfig]: {
        readonly with?: PgMaterializedViewWithConfig;
        readonly using?: string;
        readonly tablespace?: string;
        readonly withNoData?: boolean;
    } | undefined;
    constructor({ pgConfig, config }: {
        pgConfig: {
            with: PgMaterializedViewWithConfig | undefined;
            using: string | undefined;
            tablespace: string | undefined;
            withNoData: boolean | undefined;
        } | undefined;
        config: {
            name: TName;
            schema: string | undefined;
            selectedFields: SelectedFields;
            query: SQL | undefined;
        };
    });
}
export type PgMaterializedViewWithSelection<TName extends string = string, TExisting extends boolean = boolean, TSelectedFields extends ColumnsSelection = ColumnsSelection> = PgMaterializedView<TName, TExisting, TSelectedFields> & TSelectedFields;
export declare function pgView<TName extends string>(name: TName): ViewBuilder<TName>;
export declare function pgView<TName extends string, TColumns extends Record<string, PgColumnBuilderBase>>(name: TName, columns: TColumns): ManualViewBuilder<TName, TColumns>;
export declare function pgMaterializedView<TName extends string>(name: TName): MaterializedViewBuilder<TName>;
export declare function pgMaterializedView<TName extends string, TColumns extends Record<string, PgColumnBuilderBase>>(name: TName, columns: TColumns): ManualMaterializedViewBuilder<TName, TColumns>;
