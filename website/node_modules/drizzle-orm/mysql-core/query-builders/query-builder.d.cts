import { entityKind } from "../../entity.cjs";
import type { WithSubqueryWithSelection } from "../subquery.cjs";
import type { TypedQueryBuilder } from "../../query-builders/query-builder.cjs";
import type { ColumnsSelection } from "../../sql/sql.cjs";
import { WithSubquery } from "../../subquery.cjs";
import { MySqlSelectBuilder } from "./select.cjs";
import type { SelectedFields } from "./select.types.cjs";
export declare class QueryBuilder {
    static readonly [entityKind]: string;
    private dialect;
    $with<TAlias extends string>(alias: TAlias): {
        as<TSelection extends ColumnsSelection>(qb: TypedQueryBuilder<TSelection, unknown> | ((qb: QueryBuilder) => TypedQueryBuilder<TSelection, unknown>)): WithSubqueryWithSelection<TSelection, TAlias>;
    };
    with(...queries: WithSubquery[]): {
        select: {
            (): MySqlSelectBuilder<undefined, never, 'qb'>;
            <TSelection extends SelectedFields>(fields: TSelection): MySqlSelectBuilder<TSelection, never, "qb">;
        };
        selectDistinct: {
            (): MySqlSelectBuilder<undefined, never, 'qb'>;
            <TSelection_1 extends SelectedFields>(fields: TSelection_1): MySqlSelectBuilder<TSelection_1, never, "qb">;
        };
    };
    select(): MySqlSelectBuilder<undefined, never, 'qb'>;
    select<TSelection extends SelectedFields>(fields: TSelection): MySqlSelectBuilder<TSelection, never, 'qb'>;
    selectDistinct(): MySqlSelectBuilder<undefined, never, 'qb'>;
    selectDistinct<TSelection extends SelectedFields>(fields: TSelection): MySqlSelectBuilder<TSelection, never, 'qb'>;
    private getDialect;
}
