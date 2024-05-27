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
var session_exports = {};
__export(session_exports, {
  MySqlSession: () => MySqlSession,
  MySqlTransaction: () => MySqlTransaction,
  PreparedQuery: () => PreparedQuery
});
module.exports = __toCommonJS(session_exports);
var import_entity = require("../entity.cjs");
var import_errors = require("../errors.cjs");
var import_sql = require("../sql/sql.cjs");
var import_db = require("./db.cjs");
class PreparedQuery {
  static [import_entity.entityKind] = "MySqlPreparedQuery";
  /** @internal */
  joinsNotNullableMap;
}
class MySqlSession {
  constructor(dialect) {
    this.dialect = dialect;
  }
  static [import_entity.entityKind] = "MySqlSession";
  execute(query) {
    return this.prepareQuery(
      this.dialect.sqlToQuery(query),
      void 0
    ).execute();
  }
  getSetTransactionSQL(config) {
    const parts = [];
    if (config.isolationLevel) {
      parts.push(`isolation level ${config.isolationLevel}`);
    }
    return parts.length ? import_sql.sql.join(["set transaction ", parts.join(" ")]) : void 0;
  }
  getStartTransactionSQL(config) {
    const parts = [];
    if (config.withConsistentSnapshot) {
      parts.push("with consistent snapshot");
    }
    if (config.accessMode) {
      parts.push(config.accessMode);
    }
    return parts.length ? import_sql.sql.join(["start transaction ", parts.join(" ")]) : void 0;
  }
}
class MySqlTransaction extends import_db.MySqlDatabase {
  constructor(dialect, session, schema, nestedIndex, mode) {
    super(dialect, session, schema, mode);
    this.schema = schema;
    this.nestedIndex = nestedIndex;
  }
  static [import_entity.entityKind] = "MySqlTransaction";
  rollback() {
    throw new import_errors.TransactionRollbackError();
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MySqlSession,
  MySqlTransaction,
  PreparedQuery
});
//# sourceMappingURL=session.cjs.map