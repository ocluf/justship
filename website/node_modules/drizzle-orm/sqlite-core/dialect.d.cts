import { entityKind } from "../entity.cjs";
import type { MigrationConfig, MigrationMeta } from "../migrator.cjs";
import { type BuildRelationalQueryResult, type DBQueryConfig, type Relation, type TableRelationalConfig, type TablesRelationalConfig } from "../relations.cjs";
import { type QueryWithTypings, SQL } from "../sql/sql.cjs";
import { SQLiteColumn } from "./columns/index.cjs";
import type { SQLiteDeleteConfig, SQLiteInsertConfig, SQLiteUpdateConfig } from "./query-builders/index.cjs";
import { SQLiteTable } from "./table.cjs";
import { type UpdateSet } from "../utils.cjs";
import type { SQLiteSelectConfig } from "./query-builders/select.types.cjs";
import type { SQLiteSession } from "./session.cjs";
export declare abstract class SQLiteDialect {
    static readonly [entityKind]: string;
    escapeName(name: string): string;
    escapeParam(_num: number): string;
    escapeString(str: string): string;
    private buildWithCTE;
    buildDeleteQuery({ table, where, returning, withList }: SQLiteDeleteConfig): SQL;
    buildUpdateSet(table: SQLiteTable, set: UpdateSet): SQL;
    buildUpdateQuery({ table, set, where, returning, withList }: SQLiteUpdateConfig): SQL;
    /**
     * Builds selection SQL with provided fields/expressions
     *
     * Examples:
     *
     * `select <selection> from`
     *
     * `insert ... returning <selection>`
     *
     * If `isSingleTable` is true, then columns won't be prefixed with table name
     */
    private buildSelection;
    buildSelectQuery({ withList, fields, fieldsFlat, where, having, table, joins, orderBy, groupBy, limit, offset, distinct, setOperators, }: SQLiteSelectConfig): SQL;
    buildSetOperations(leftSelect: SQL, setOperators: SQLiteSelectConfig['setOperators']): SQL;
    buildSetOperationQuery({ leftSelect, setOperator: { type, isAll, rightSelect, limit, orderBy, offset }, }: {
        leftSelect: SQL;
        setOperator: SQLiteSelectConfig['setOperators'][number];
    }): SQL;
    buildInsertQuery({ table, values, onConflict, returning, withList }: SQLiteInsertConfig): SQL;
    sqlToQuery(sql: SQL): QueryWithTypings;
    buildRelationalQuery({ fullSchema, schema, tableNamesMap, table, tableConfig, queryConfig: config, tableAlias, nestedQueryRelation, joinOn, }: {
        fullSchema: Record<string, unknown>;
        schema: TablesRelationalConfig;
        tableNamesMap: Record<string, string>;
        table: SQLiteTable;
        tableConfig: TableRelationalConfig;
        queryConfig: true | DBQueryConfig<'many', true>;
        tableAlias: string;
        nestedQueryRelation?: Relation;
        joinOn?: SQL;
    }): BuildRelationalQueryResult<SQLiteTable, SQLiteColumn>;
}
export declare class SQLiteSyncDialect extends SQLiteDialect {
    static readonly [entityKind]: string;
    migrate(migrations: MigrationMeta[], session: SQLiteSession<'sync', unknown, Record<string, unknown>, TablesRelationalConfig>, config?: string | MigrationConfig): void;
}
export declare class SQLiteAsyncDialect extends SQLiteDialect {
    static readonly [entityKind]: string;
    migrate(migrations: MigrationMeta[], session: SQLiteSession<'async', unknown, any, TablesRelationalConfig>, config?: string | MigrationConfig): Promise<void>;
}
