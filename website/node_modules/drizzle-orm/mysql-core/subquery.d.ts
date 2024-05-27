import type { AddAliasToSelection } from "../query-builders/select.types.js";
import type { ColumnsSelection } from "../sql/sql.js";
import type { Subquery, WithSubquery } from "../subquery.js";
export type SubqueryWithSelection<TSelection extends ColumnsSelection, TAlias extends string> = Subquery<TAlias, AddAliasToSelection<TSelection, TAlias, 'mysql'>> & AddAliasToSelection<TSelection, TAlias, 'mysql'>;
export type WithSubqueryWithSelection<TSelection extends ColumnsSelection, TAlias extends string> = WithSubquery<TAlias, AddAliasToSelection<TSelection, TAlias, 'mysql'>> & AddAliasToSelection<TSelection, TAlias, 'mysql'>;
