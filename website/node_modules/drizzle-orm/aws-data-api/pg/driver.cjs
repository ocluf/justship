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
  AwsDataApiPgDatabase: () => AwsDataApiPgDatabase,
  AwsPgDialect: () => AwsPgDialect,
  drizzle: () => drizzle
});
module.exports = __toCommonJS(driver_exports);
var import_entity = require("../../entity.cjs");
var import__ = require("../../index.cjs");
var import_logger = require("../../logger.cjs");
var import_db = require("../../pg-core/db.cjs");
var import_dialect = require("../../pg-core/dialect.cjs");
var import_pg_core = require("../../pg-core/index.cjs");
var import_relations = require("../../relations.cjs");
var import_session = require("./session.cjs");
class AwsDataApiPgDatabase extends import_db.PgDatabase {
  static [import_entity.entityKind] = "AwsDataApiPgDatabase";
  execute(query) {
    return super.execute(query);
  }
}
class AwsPgDialect extends import_dialect.PgDialect {
  static [import_entity.entityKind] = "AwsPgDialect";
  escapeParam(num) {
    return `:${num + 1}`;
  }
  buildInsertQuery({ table, values, onConflict, returning }) {
    const columns = table[import__.Table.Symbol.Columns];
    const colEntries = Object.entries(columns);
    for (const value of values) {
      for (const [fieldName, col] of colEntries) {
        const colValue = value[fieldName];
        if ((0, import_entity.is)(colValue, import__.Param) && colValue.value !== void 0 && (0, import_entity.is)(colValue.encoder, import_pg_core.PgArray) && Array.isArray(colValue.value)) {
          value[fieldName] = import__.sql`cast(${col.mapToDriverValue(colValue.value)} as ${import__.sql.raw(colValue.encoder.getSQLType())})`;
        }
      }
    }
    return super.buildInsertQuery({ table, values, onConflict, returning });
  }
  buildUpdateSet(table, set) {
    const columns = table[import__.Table.Symbol.Columns];
    for (const [colName, colValue] of Object.entries(set)) {
      const currentColumn = columns[colName];
      if (currentColumn && (0, import_entity.is)(colValue, import__.Param) && colValue.value !== void 0 && (0, import_entity.is)(colValue.encoder, import_pg_core.PgArray) && Array.isArray(colValue.value)) {
        set[colName] = import__.sql`cast(${currentColumn?.mapToDriverValue(colValue.value)} as ${import__.sql.raw(colValue.encoder.getSQLType())})`;
      }
    }
    return super.buildUpdateSet(table, set);
  }
}
function drizzle(client, config) {
  const dialect = new AwsPgDialect();
  let logger;
  if (config.logger === true) {
    logger = new import_logger.DefaultLogger();
  } else if (config.logger !== false) {
    logger = config.logger;
  }
  let schema;
  if (config.schema) {
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
  const session = new import_session.AwsDataApiSession(client, dialect, schema, { ...config, logger }, void 0);
  return new import_db.PgDatabase(dialect, session, schema);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AwsDataApiPgDatabase,
  AwsPgDialect,
  drizzle
});
//# sourceMappingURL=driver.cjs.map