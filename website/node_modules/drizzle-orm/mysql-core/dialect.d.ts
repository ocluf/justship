import { entityKind } from "../entity.js";
import type { MigrationConfig, MigrationMeta } from "../migrator.js";
import { type BuildRelationalQueryResult, type DBQueryConfig, type Relation, type TableRelationalConfig, type TablesRelationalConfig } from "../relations.js";
import { type QueryWithTypings, SQL } from "../sql/sql.js";
import { type UpdateSet } from "../utils.js";
import { MySqlColumn } from "./columns/common.js";
import type { MySqlDeleteConfig } from "./query-builders/delete.js";
import type { MySqlInsertConfig } from "./query-builders/insert.js";
import type { MySqlSelectConfig } from "./query-builders/select.types.js";
import type { MySqlUpdateConfig } from "./query-builders/update.js";
import type { MySqlSession } from "./session.js";
import { MySqlTable } from "./table.js";
export declare class MySqlDialect {
    static readonly [entityKind]: string;
    migrate(migrations: MigrationMeta[], session: MySqlSession, config: Omit<MigrationConfig, 'migrationsSchema'>): Promise<void>;
    escapeName(name: string): string;
    escapeParam(_num: number): string;
    escapeString(str: string): string;
    private buildWithCTE;
    buildDeleteQuery({ table, where, returning, withList }: MySqlDeleteConfig): SQL;
    buildUpdateSet(table: MySqlTable, set: UpdateSet): SQL;
    buildUpdateQuery({ table, set, where, returning, withList }: MySqlUpdateConfig): SQL;
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
    buildSelectQuery({ withList, fields, fieldsFlat, where, having, table, joins, orderBy, groupBy, limit, offset, lockingClause, distinct, setOperators, }: MySqlSelectConfig): SQL;
    buildSetOperations(leftSelect: SQL, setOperators: MySqlSelectConfig['setOperators']): SQL;
    buildSetOperationQuery({ leftSelect, setOperator: { type, isAll, rightSelect, limit, orderBy, offset }, }: {
        leftSelect: SQL;
        setOperator: MySqlSelectConfig['setOperators'][number];
    }): SQL;
    buildInsertQuery({ table, values, ignore, onConflict }: MySqlInsertConfig): SQL;
    sqlToQuery(sql: SQL): QueryWithTypings;
    buildRelationalQuery({ fullSchema, schema, tableNamesMap, table, tableConfig, queryConfig: config, tableAlias, nestedQueryRelation, joinOn, }: {
        fullSchema: Record<string, unknown>;
        schema: TablesRelationalConfig;
        tableNamesMap: Record<string, string>;
        table: MySqlTable;
        tableConfig: TableRelationalConfig;
        queryConfig: true | DBQueryConfig<'many', true>;
        tableAlias: string;
        nestedQueryRelation?: Relation;
        joinOn?: SQL;
    }): BuildRelationalQueryResult<MySqlTable, MySqlColumn>;
    buildRelationalQueryWithoutLateralSubqueries({ fullSchema, schema, tableNamesMap, table, tableConfig, queryConfig: config, tableAlias, nestedQueryRelation, joinOn, }: {
        fullSchema: Record<string, unknown>;
        schema: TablesRelationalConfig;
        tableNamesMap: Record<string, string>;
        table: MySqlTable;
        tableConfig: TableRelationalConfig;
        queryConfig: true | DBQueryConfig<'many', true>;
        tableAlias: string;
        nestedQueryRelation?: Relation;
        joinOn?: SQL;
    }): BuildRelationalQueryResult<MySqlTable, MySqlColumn>;
}
