import type { PgColumn } from "./columns/index.cjs";
import type { Placeholder, SQL, SQLWrapper } from "../sql/sql.cjs";
export * from "../expressions.cjs";
export declare function concat(column: PgColumn | SQL.Aliased, value: string | Placeholder | SQLWrapper): SQL;
export declare function substring(column: PgColumn | SQL.Aliased, { from, for: _for }: {
    from?: number | Placeholder | SQLWrapper;
    for?: number | Placeholder | SQLWrapper;
}): SQL;
