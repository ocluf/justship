"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var driver_exports = {};
__export(driver_exports, {
  MySql2Driver: () => MySql2Driver,
  MySqlDatabase: () => import_db2.MySqlDatabase,
  drizzle: () => drizzle
});
module.exports = __toCommonJS(driver_exports);
var import_entity = require("../entity.cjs");
var import_logger = require("../logger.cjs");
var import_db = require("../mysql-core/db.cjs");
var import_dialect = require("../mysql-core/dialect.cjs");
var import_relations = require("../relations.cjs");
var import__ = require("../index.cjs");
var import_session = require("./session.cjs");
var import_db2 = require("../mysql-core/db.cjs");
class MySql2Driver {
  constructor(client, dialect, options = {}) {
    this.client = client;
    this.dialect = dialect;
    this.options = options;
  }
  static [import_entity.entityKind] = "MySql2Driver";
  createSession(schema, mode) {
    return new import_session.MySql2Session(this.client, this.dialect, schema, { logger: this.options.logger, mode });
  }
}
function drizzle(client, config = {}) {
  const dialect = new import_dialect.MySqlDialect();
  let logger;
  if (config.logger === true) {
    logger = new import_logger.DefaultLogger();
  } else if (config.logger !== false) {
    logger = config.logger;
  }
  if (isCallbackClient(client)) {
    client = client.promise();
  }
  let schema;
  if (config.schema) {
    if (config.mode === void 0) {
      throw new import__.DrizzleError({
        message: 'You need to specify "mode": "planetscale" or "default" when providing a schema. Read more: https://orm.drizzle.team/docs/rqb#modes'
      });
    }
    const tablesConfig = (0, import_relations.extractTablesRelationalConfig)(
      config.schema,
      import_relations.createTableRelationsHelpers
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
  return new import_db.MySqlDatabase(dialect, session, schema, mode);
}
function isCallbackClient(client) {
  return typeof client.promise === "function";
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MySql2Driver,
  MySqlDatabase,
  drizzle
});
//# sourceMappingURL=driver.cjs.map