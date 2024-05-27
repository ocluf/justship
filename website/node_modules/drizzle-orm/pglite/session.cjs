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
  PglitePreparedQuery: () => PglitePreparedQuery,
  PgliteSession: () => PgliteSession,
  PgliteTransaction: () => PgliteTransaction
});
module.exports = __toCommonJS(session_exports);
var import_entity = require("../entity.cjs");
var import_logger = require("../logger.cjs");
var import_pg_core = require("../pg-core/index.cjs");
var import_session = require("../pg-core/session.cjs");
var import_sql = require("../sql/sql.cjs");
var import_utils = require("../utils.cjs");
var import_pglite = require("@electric-sql/pglite");
class PglitePreparedQuery extends import_session.PgPreparedQuery {
  constructor(client, queryString, params, logger, fields, name, _isResponseInArrayMode, customResultMapper) {
    super({ sql: queryString, params });
    this.client = client;
    this.queryString = queryString;
    this.params = params;
    this.logger = logger;
    this.fields = fields;
    this._isResponseInArrayMode = _isResponseInArrayMode;
    this.customResultMapper = customResultMapper;
    this.rawQueryConfig = {
      rowMode: "object",
      parsers: {
        [import_pglite.types.TIMESTAMP]: (value) => value,
        [import_pglite.types.TIMESTAMPTZ]: (value) => value,
        [import_pglite.types.INTERVAL]: (value) => value,
        [import_pglite.types.DATE]: (value) => value
      }
    };
    this.queryConfig = {
      rowMode: "array",
      parsers: {
        [import_pglite.types.TIMESTAMP]: (value) => value,
        [import_pglite.types.TIMESTAMPTZ]: (value) => value,
        [import_pglite.types.INTERVAL]: (value) => value,
        [import_pglite.types.DATE]: (value) => value
      }
    };
  }
  static [import_entity.entityKind] = "PglitePreparedQuery";
  rawQueryConfig;
  queryConfig;
  async execute(placeholderValues = {}) {
    const params = (0, import_sql.fillPlaceholders)(this.params, placeholderValues);
    this.logger.logQuery(this.queryString, params);
    const { fields, rawQueryConfig, client, queryConfig, joinsNotNullableMap, customResultMapper, queryString } = this;
    if (!fields && !customResultMapper) {
      return client.query(queryString, params, rawQueryConfig);
    }
    const result = await client.query(queryString, params, queryConfig);
    return customResultMapper ? customResultMapper(result.rows) : result.rows.map((row) => (0, import_utils.mapResultRow)(fields, row, joinsNotNullableMap));
  }
  all(placeholderValues = {}) {
    const params = (0, import_sql.fillPlaceholders)(this.params, placeholderValues);
    this.logger.logQuery(this.queryString, params);
    return this.client.query(this.queryString, params, this.rawQueryConfig).then((result) => result.rows);
  }
  /** @internal */
  isResponseInArrayMode() {
    return this._isResponseInArrayMode;
  }
}
class PgliteSession extends import_session.PgSession {
  constructor(client, dialect, schema, options = {}) {
    super(dialect);
    this.client = client;
    this.schema = schema;
    this.options = options;
    this.logger = options.logger ?? new import_logger.NoopLogger();
  }
  static [import_entity.entityKind] = "PgliteSession";
  logger;
  prepareQuery(query, fields, name, isResponseInArrayMode, customResultMapper) {
    return new PglitePreparedQuery(
      this.client,
      query.sql,
      query.params,
      this.logger,
      fields,
      name,
      isResponseInArrayMode,
      customResultMapper
    );
  }
  async transaction(transaction, config) {
    return this.client.transaction(async (client) => {
      const session = new PgliteSession(
        client,
        this.dialect,
        this.schema,
        this.options
      );
      const tx = new PgliteTransaction(this.dialect, session, this.schema);
      if (config) {
        await tx.setTransaction(config);
      }
      return transaction(tx);
    });
  }
}
class PgliteTransaction extends import_pg_core.PgTransaction {
  static [import_entity.entityKind] = "PgliteTransaction";
  async transaction(transaction) {
    const savepointName = `sp${this.nestedIndex + 1}`;
    const tx = new PgliteTransaction(
      this.dialect,
      this.session,
      this.schema,
      this.nestedIndex + 1
    );
    await tx.execute(import_sql.sql.raw(`savepoint ${savepointName}`));
    try {
      const result = await transaction(tx);
      await tx.execute(import_sql.sql.raw(`release savepoint ${savepointName}`));
      return result;
    } catch (err) {
      await tx.execute(import_sql.sql.raw(`rollback to savepoint ${savepointName}`));
      throw err;
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PglitePreparedQuery,
  PgliteSession,
  PgliteTransaction
});
//# sourceMappingURL=session.cjs.map