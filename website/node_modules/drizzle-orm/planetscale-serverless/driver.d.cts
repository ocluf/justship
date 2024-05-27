import type { Connection } from '@planetscale/database';
import { Client } from '@planetscale/database';
import type { Logger } from "../logger.cjs";
import { MySqlDatabase } from "../mysql-core/db.cjs";
import type { DrizzleConfig } from "../utils.cjs";
import type { PlanetScalePreparedQueryHKT, PlanetscaleQueryResultHKT } from "./session.cjs";
export interface PlanetscaleSDriverOptions {
    logger?: Logger;
}
export type PlanetScaleDatabase<TSchema extends Record<string, unknown> = Record<string, never>> = MySqlDatabase<PlanetscaleQueryResultHKT, PlanetScalePreparedQueryHKT, TSchema>;
export declare function drizzle<TSchema extends Record<string, unknown> = Record<string, never>>(client: Client | Connection, config?: DrizzleConfig<TSchema>): PlanetScaleDatabase<TSchema>;
