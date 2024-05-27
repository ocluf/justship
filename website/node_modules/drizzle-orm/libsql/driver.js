import { entityKind } from "../entity.js";
import { DefaultLogger } from "../logger.js";
import {
  createTableRelationsHelpers,
  extractTablesRelationalConfig
} from "../relations.js";
import { BaseSQLiteDatabase } from "../sqlite-core/db.js";
import { SQLiteAsyncDialect } from "../sqlite-core/dialect.js";
import { LibSQLSession } from "./session.js";
class LibSQLDatabase extends BaseSQLiteDatabase {
  static [entityKind] = "LibSQLDatabase";
  async batch(batch) {
    return this.session.batch(batch);
  }
}
function drizzle(client, config = {}) {
  const dialect = new SQLiteAsyncDialect();
  let logger;
  if (config.logger === true) {
    logger = new DefaultLogger();
  } else if (config.logger !== false) {
    logger = config.logger;
  }
  let schema;
  if (config.schema) {
    const tablesConfig = extractTablesRelationalConfig(
      config.schema,
      createTableRelationsHelpers
    );
    schema = {
      fullSchema: config.schema,
      schema: tablesConfig.tables,
      tableNamesMap: tablesConfig.tableNamesMap
    };
  }
  const session = new LibSQLSession(client, dialect, schema, { logger }, void 0);
  return new LibSQLDatabase("async", dialect, session, schema);
}
export {
  LibSQLDatabase,
  drizzle
};
//# sourceMappingURL=driver.js.map