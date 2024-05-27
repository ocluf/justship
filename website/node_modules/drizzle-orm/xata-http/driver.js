import { entityKind } from "../entity.js";
import { DefaultLogger } from "../logger.js";
import { PgDatabase } from "../pg-core/db.js";
import { PgDialect } from "../pg-core/dialect.js";
import { createTableRelationsHelpers, extractTablesRelationalConfig } from "../relations.js";
import { XataHttpSession } from "./session.js";
class XataHttpDriver {
  constructor(client, dialect, options = {}) {
    this.client = client;
    this.dialect = dialect;
    this.options = options;
    this.initMappers();
  }
  static [entityKind] = "XataDriver";
  createSession(schema) {
    return new XataHttpSession(this.client, this.dialect, schema, {
      logger: this.options.logger
    });
  }
  initMappers() {
  }
}
class XataHttpDatabase extends PgDatabase {
  static [entityKind] = "XataHttpDatabase";
}
function drizzle(client, config = {}) {
  const dialect = new PgDialect();
  let logger;
  if (config.logger === true) {
    logger = new DefaultLogger();
  } else if (config.logger !== false) {
    logger = config.logger;
  }
  let schema;
  if (config.schema) {
    const tablesConfig = extractTablesRelationalConfig(config.schema, createTableRelationsHelpers);
    schema = {
      fullSchema: config.schema,
      schema: tablesConfig.tables,
      tableNamesMap: tablesConfig.tableNamesMap
    };
  }
  const driver = new XataHttpDriver(client, dialect, { logger });
  const session = driver.createSession(schema);
  return new XataHttpDatabase(
    dialect,
    session,
    schema
  );
}
export {
  XataHttpDatabase,
  XataHttpDriver,
  drizzle
};
//# sourceMappingURL=driver.js.map