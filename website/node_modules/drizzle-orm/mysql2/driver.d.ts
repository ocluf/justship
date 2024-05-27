import type { Connection as CallbackConnection, Pool as CallbackPool } from 'mysql2';
import { entityKind } from "../entity.js";
import type { Logger } from "../logger.js";
import { MySqlDatabase } from "../mysql-core/db.js";
import { MySqlDialect } from "../mysql-core/dialect.js";
import type { Mode } from "../mysql-core/session.js";
import { type RelationalSchemaConfig, type TablesRelationalConfig } from "../relations.js";
import type { DrizzleConfig } from "../utils.js";
import type { MySql2Client, MySql2PreparedQueryHKT, MySql2QueryResultHKT } from "./session.js";
import { MySql2Session } from "./session.js";
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
export { MySqlDatabase } from "../mysql-core/db.js";
export type MySql2Database<TSchema extends Record<string, unknown> = Record<string, never>> = MySqlDatabase<MySql2QueryResultHKT, MySql2PreparedQueryHKT, TSchema>;
export type MySql2DrizzleConfig<TSchema extends Record<string, unknown> = Record<string, never>> = Omit<DrizzleConfig<TSchema>, 'schema'> & ({
    schema: TSchema;
    mode: Mode;
} | {
    schema?: undefined;
    mode?: Mode;
});
export declare function drizzle<TSchema extends Record<string, unknown> = Record<string, never>>(client: MySql2Client | CallbackConnection | CallbackPool, config?: MySql2DrizzleConfig<TSchema>): MySql2Database<TSchema>;
