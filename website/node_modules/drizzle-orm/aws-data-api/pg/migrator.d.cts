import type { MigrationConfig } from "../../migrator.cjs";
import type { AwsDataApiPgDatabase } from "./driver.cjs";
export declare function migrate<TSchema extends Record<string, unknown>>(db: AwsDataApiPgDatabase<TSchema>, config: string | MigrationConfig): Promise<void>;
