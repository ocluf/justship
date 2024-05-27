import { entityKind } from "../entity.js";
import { DefaultLogger } from "../logger.js";
import { MySqlDatabase } from "../mysql-core/db.js";
import { MySqlDialect } from "../mysql-core/dialect.js";
import {
  createTableRelationsHelpers,
  extractTablesRelationalConfig
} from "../relations.js";
import { DrizzleError } from "../index.js";
import { MySql2Session } from "./session.js";
class MySql2Driver {
  constructor(client, dialect, options = {}) {
    this.client = client;
    this.dialect = dialect;
    this.options = options;
  }
  static [entityKind] = "MySql2Driver";
  createSession(schema, mode) {
    return new MySql2Session(this.client, this.dialect, schema, { logger: this.options.logger, mode });
  }
}
import { MySqlDatabase as MySqlDatabase2 } from "../mysql-core/db.js";
function drizzle(client, config = {}) {
  const dialect = new MySqlDialect();
  let logger;
  if (config.logger === true) {
    logger = new DefaultLogger();
  } else if (config.logger !== false) {
    logger = config.logger;
  }
  if (isCallbackClient(client)) {
    client = client.promise();
  }
  let schema;
  if (config.schema) {
    if (config.mode === void 0) {
      throw new DrizzleError({
        message: 'You need to specify "mode": "planetscale" or "default" when providing a schema. Read more: https://orm.drizzle.team/docs/rqb#modes'
      });
    }
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
  const mode = config.mode ?? "default";
  const driver = new MySql2Driver(client, dialect, { logger });
  const session = driver.createSession(schema, mode);
  return new MySqlDatabase(dialect, session, schema, mode);
}
function isCallbackClient(client) {
  return typeof client.promise === "function";
}
export {
  MySql2Driver,
  MySqlDatabase2 as MySqlDatabase,
  drizzle
};
//# sourceMappingURL=driver.js.map