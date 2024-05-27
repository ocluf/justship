import { entityKind } from "../../entity.js";
import type { TypedQueryBuilder } from "../../query-builders/query-builder.js";
import type { ColumnsSelection } from "../../sql/sql.js";
import type { WithSubqueryWithSelection } from "../subquery.js";
import { WithSubquery } from "../../subquery.js";
import { SQLiteSelectBuilder } from "./select.js";
import type { SelectedFields } from "./select.types.js";
export declare class QueryBuilder {
    static readonly [entityKind]: string;
    private dialect;
    $with<TAlias extends string>(alias: TAlias): {
        as<TSelection extends ColumnsSelection>(qb: TypedQueryBuilder<TSelection, unknown> | ((qb: QueryBuilder) => TypedQueryBuilder<TSelection, unknown>)): WithSubqueryWithSelection<TSelection, TAlias>;
    };
    with(...queries: WithSubquery[]): {
        select: {
            (): SQLiteSelectBuilder<undefined, 'sync', void, 'qb'>;
            <TSelection extends SelectedFields>(fields: TSelection): SQLiteSelectBuilder<TSelection, "sync", void, "qb">;
        };
        selectDistinct: {
            (): SQLiteSelectBuilder<undefined, 'sync', void, 'qb'>;
            <TSelection_1 extends SelectedFields>(fields: TSelection_1): SQLiteSelectBuilder<TSelection_1, "sync", void, "qb">;
        };
    };
    select(): SQLiteSelectBuilder<undefined, 'sync', void, 'qb'>;
    select<TSelection extends SelectedFields>(fields: TSelection): SQLiteSelectBuilder<TSelection, 'sync', void, 'qb'>;
    selectDistinct(): SQLiteSelectBuilder<undefined, 'sync', void, 'qb'>;
    selectDistinct<TSelection extends SelectedFields>(fields: TSelection): SQLiteSelectBuilder<TSelection, 'sync', void, 'qb'>;
    private getDialect;
}
