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
  PgPreparedQuery: () => PgPreparedQuery,
  PgSession: () => PgSession,
  PgTransaction: () => PgTransaction
});
module.exports = __toCommonJS(session_exports);
var import_entity = require("../entity.cjs");
var import_errors = require("../errors.cjs");
var import_sql = require("../sql/index.cjs");
var import_tracing = require("../tracing.cjs");
var import_db = require("./db.cjs");
class PgPreparedQuery {
  constructor(query) {
    this.query = query;
  }
  getQuery() {
    return this.query;
  }
  mapResult(response, _isFromBatch) {
    return response;
  }
  static [import_entity.entityKind] = "PgPreparedQuery";
  /** @internal */
  joinsNotNullableMap;
}
class PgSession {
  constructor(dialect) {
    this.dialect = dialect;
  }
  static [import_entity.entityKind] = "PgSession";
  execute(query) {
    return import_tracing.tracer.startActiveSpan("drizzle.operation", () => {
      const prepared = import_tracing.tracer.startActiveSpan("drizzle.prepareQuery", () => {
        return this.prepareQuery(
          this.dialect.sqlToQuery(query),
          void 0,
          void 0,
          false
        );
      });
      return prepared.execute();
    });
  }
  all(query) {
    return this.prepareQuery(
      this.dialect.sqlToQuery(query),
      void 0,
      void 0,
      false
    ).all();
  }
}
class PgTransaction extends import_db.PgDatabase {
  constructor(dialect, session, schema, nestedIndex = 0) {
    super(dialect, session, schema);
    this.schema = schema;
    this.nestedIndex = nestedIndex;
  }
  static [import_entity.entityKind] = "PgTransaction";
  rollback() {
    throw new import_errors.TransactionRollbackError();
  }
  /** @internal */
  getTransactionConfigSQL(config) {
    const chunks = [];
    if (config.isolationLevel) {
      chunks.push(`isolation level ${config.isolationLevel}`);
    }
    if (config.accessMode) {
      chunks.push(config.accessMode);
    }
    if (typeof config.deferrable === "boolean") {
      chunks.push(config.deferrable ? "deferrable" : "not deferrable");
    }
    return import_sql.sql.raw(chunks.join(" "));
  }
  setTransaction(config) {
    return this.session.execute(import_sql.sql`set transaction ${this.getTransactionConfigSQL(config)}`);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PgPreparedQuery,
  PgSession,
  PgTransaction
});
//# sourceMappingURL=session.cjs.map