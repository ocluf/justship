import type { Connection } from '@planetscale/database';
import { Client } from '@planetscale/database';
import type { Logger } from "../logger.js";
import { MySqlDatabase } from "../mysql-core/db.js";
import type { DrizzleConfig } from "../utils.js";
import type { PlanetScalePreparedQueryHKT, PlanetscaleQueryResultHKT } from "./session.js";
export interface PlanetscaleSDriverOptions {
    logger?: Logger;
}
export type PlanetScaleDatabase<TSchema extends Record<string, unknown> = Record<string, never>> = MySqlDatabase<PlanetscaleQueryResultHKT, PlanetScalePreparedQueryHKT, TSchema>;
export declare function drizzle<TSchema extends Record<string, unknown> = Record<string, never>>(client: Client | Connection, config?: DrizzleConfig<TSchema>): PlanetScaleDatabase<TSchema>;
