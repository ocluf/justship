import { entityKind } from "../../entity.js";
import type { TypedQueryBuilder } from "../../query-builders/query-builder.js";
import type { ColumnsSelection, SQLWrapper } from "../../sql/sql.js";
import { WithSubquery } from "../../subquery.js";
import type { PgColumn } from "../columns/index.js";
import type { WithSubqueryWithSelection } from "../subquery.js";
import { PgSelectBuilder } from "./select.js";
import type { SelectedFields } from "./select.types.js";
export declare class QueryBuilder {
    static readonly [entityKind]: string;
    private dialect;
    $with<TAlias extends string>(alias: TAlias): {
        as<TSelection extends ColumnsSelection>(qb: TypedQueryBuilder<TSelection, unknown> | ((qb: QueryBuilder) => TypedQueryBuilder<TSelection, unknown>)): WithSubqueryWithSelection<TSelection, TAlias>;
    };
    with(...queries: WithSubquery[]): {
        select: {
            (): PgSelectBuilder<undefined, 'qb'>;
            <TSelection extends SelectedFields>(fields: TSelection): PgSelectBuilder<TSelection, "qb">;
        };
        selectDistinct: {
            (): PgSelectBuilder<undefined, 'qb'>;
            <TSelection_1 extends SelectedFields>(fields: TSelection_1): PgSelectBuilder<TSelection_1, "qb">;
        };
        selectDistinctOn: {
            (on: (PgColumn | SQLWrapper)[]): PgSelectBuilder<undefined, 'qb'>;
            <TSelection_2 extends SelectedFields>(on: (PgColumn | SQLWrapper)[], fields: TSelection_2): PgSelectBuilder<TSelection_2, "qb">;
        };
    };
    select(): PgSelectBuilder<undefined, 'qb'>;
    select<TSelection extends SelectedFields>(fields: TSelection): PgSelectBuilder<TSelection, 'qb'>;
    selectDistinct(): PgSelectBuilder<undefined>;
    selectDistinct<TSelection extends SelectedFields>(fields: TSelection): PgSelectBuilder<TSelection>;
    selectDistinctOn(on: (PgColumn | SQLWrapper)[]): PgSelectBuilder<undefined>;
    selectDistinctOn<TSelection extends SelectedFields>(on: (PgColumn | SQLWrapper)[], fields: TSelection): PgSelectBuilder<TSelection>;
    private getDialect;
}
