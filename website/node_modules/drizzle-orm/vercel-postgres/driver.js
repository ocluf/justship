import { types } from "@vercel/postgres";
import { entityKind } from "../entity.js";
import { DefaultLogger } from "../logger.js";
import { PgDatabase } from "../pg-core/db.js";
import { PgDialect } from "../pg-core/index.js";
import {
  createTableRelationsHelpers,
  extractTablesRelationalConfig
} from "../relations.js";
import { VercelPgSession } from "./session.js";
class VercelPgDriver {
  constructor(client, dialect, options = {}) {
    this.client = client;
    this.dialect = dialect;
    this.options = options;
    this.initMappers();
  }
  static [entityKind] = "VercelPgDriver";
  createSession(schema) {
    return new VercelPgSession(this.client, this.dialect, schema, { logger: this.options.logger });
  }
  initMappers() {
    types.setTypeParser(types.builtins.TIMESTAMPTZ, (val) => val);
    types.setTypeParser(types.builtins.TIMESTAMP, (val) => val);
    types.setTypeParser(types.builtins.DATE, (val) => val);
    types.setTypeParser(types.builtins.INTERVAL, (val) => val);
  }
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
  const driver = new VercelPgDriver(client, dialect, { logger });
  const session = driver.createSession(schema);
  return new PgDatabase(dialect, session, schema);
}
export {
  VercelPgDriver,
  drizzle
};
//# sourceMappingURL=driver.js.map