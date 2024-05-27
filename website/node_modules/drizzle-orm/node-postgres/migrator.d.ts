import type { MigrationConfig } from "../migrator.js";
import type { NodePgDatabase } from "./driver.js";
export declare function migrate<TSchema extends Record<string, unknown>>(db: NodePgDatabase<TSchema>, config: string | MigrationConfig): Promise<void>;
