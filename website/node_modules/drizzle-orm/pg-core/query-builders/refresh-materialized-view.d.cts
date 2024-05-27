import { entityKind } from "../../entity.cjs";
import type { PgDialect } from "../dialect.cjs";
import type { PgPreparedQuery, PgSession, PreparedQueryConfig, QueryResultHKT, QueryResultKind } from "../session.cjs";
import type { PgMaterializedView } from "../view.cjs";
import { QueryPromise } from "../../query-promise.cjs";
import type { RunnableQuery } from "../../runnable-query.cjs";
import type { Query, SQLWrapper } from "../../sql/sql.cjs";
export interface PgRefreshMaterializedView<TQueryResult extends QueryResultHKT> extends QueryPromise<QueryResultKind<TQueryResult, never>>, RunnableQuery<QueryResultKind<TQueryResult, never>, 'pg'>, SQLWrapper {
    readonly _: {
        readonly dialect: 'pg';
        readonly result: QueryResultKind<TQueryResult, never>;
    };
}
export declare class PgRefreshMaterializedView<TQueryResult extends QueryResultHKT> extends QueryPromise<QueryResultKind<TQueryResult, never>> implements RunnableQuery<QueryResultKind<TQueryResult, never>, 'pg'>, SQLWrapper {
    private session;
    private dialect;
    static readonly [entityKind]: string;
    private config;
    constructor(view: PgMaterializedView, session: PgSession, dialect: PgDialect);
    concurrently(): this;
    withNoData(): this;
    toSQL(): Query;
    prepare(name: string): PgPreparedQuery<PreparedQueryConfig & {
        execute: QueryResultKind<TQueryResult, never>;
    }>;
    execute: ReturnType<this['prepare']>['execute'];
}
