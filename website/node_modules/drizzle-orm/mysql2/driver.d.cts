import type { Connection as CallbackConnection, Pool as CallbackPool } from 'mysql2';
import { entityKind } from "../entity.cjs";
import type { Logger } from "../logger.cjs";
import { MySqlDatabase } from "../mysql-core/db.cjs";
import { MySqlDialect } from "../mysql-core/dialect.cjs";
import type { Mode } from "../mysql-core/session.cjs";
import { type RelationalSchemaConfig, type TablesRelationalConfig } from "../relations.cjs";
import type { DrizzleConfig } from "../utils.cjs";
import type { MySql2Client, MySql2PreparedQueryHKT, MySql2QueryResultHKT } from "./session.cjs";
import { MySql2Session } from "./session.cjs";
export interface MySqlDriverOptions {
    logger?: Logger;
}
export declare class MySql2Driver {
    private client;
    private dialect;
    private options;
    static readonly [entityKind]: string;
    constructor(client: MySql2Client, dialect: MySqlDialect, options?: MySqlDriverOptions);
    createSession(schema: RelationalSchemaConfig<TablesRelationalConfig> | undefined, mode: Mode): MySql2Session<Record<string, unknown>, TablesRelationalConfig>;
}
export { MySqlDatabase } from "../mysql-core/db.cjs";
export type MySql2Database<TSchema extends Record<string, unknown> = Record<string, never>> = MySqlDatabase<MySql2QueryResultHKT, MySql2PreparedQueryHKT, TSchema>;
export type MySql2DrizzleConfig<TSchema extends Record<string, unknown> = Record<string, never>> = Omit<DrizzleConfig<TSchema>, 'schema'> & ({
    schema: TSchema;
    mode: Mode;
} | {
    schema?: undefined;
    mode?: Mode;
});
export declare function drizzle<TSchema extends Record<string, unknown> = Record<string, never>>(client: MySql2Client | CallbackConnection | CallbackPool, config?: MySql2DrizzleConfig<TSchema>): MySql2Database<TSchema>;
