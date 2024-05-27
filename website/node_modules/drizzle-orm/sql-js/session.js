import { entityKind } from "../entity.js";
import { NoopLogger } from "../logger.js";
import { fillPlaceholders, sql } from "../sql/sql.js";
import { SQLiteTransaction } from "../sqlite-core/index.js";
import { SQLitePreparedQuery as PreparedQueryBase, SQLiteSession } from "../sqlite-core/session.js";
import { mapResultRow } from "../utils.js";
class SQLJsSession extends SQLiteSession {
  constructor(client, dialect, schema, options = {}) {
    super(dialect);
    this.client = client;
    this.schema = schema;
    this.logger = options.logger ?? new NoopLogger();
  }
  static [entityKind] = "SQLJsSession";
  logger;
  prepareQuery(query, fields, executeMethod, isResponseInArrayMode) {
    const stmt = this.client.prepare(query.sql);
    return new PreparedQuery(stmt, query, this.logger, fields, executeMethod, isResponseInArrayMode);
  }
  prepareOneTimeQuery(query, fields, executeMethod, isResponseInArrayMode, customResultMapper) {
    const stmt = this.client.prepare(query.sql);
    return new PreparedQuery(
      stmt,
      query,
      this.logger,
      fields,
      executeMethod,
      isResponseInArrayMode,
      customResultMapper,
      true
    );
  }
  transaction(transaction, config = {}) {
    const tx = new SQLJsTransaction("sync", this.dialect, this, this.schema);
    this.run(sql.raw(`begin${config.behavior ? ` ${config.behavior}` : ""}`));
    try {
      const result = transaction(tx);
      this.run(sql`commit`);
      return result;
    } catch (err) {
      this.run(sql`rollback`);
      throw err;
    }
  }
}
class SQLJsTransaction extends SQLiteTransaction {
  static [entityKind] = "SQLJsTransaction";
  transaction(transaction) {
    const savepointName = `sp${this.nestedIndex + 1}`;
    const tx = new SQLJsTransaction("sync", this.dialect, this.session, this.schema, this.nestedIndex + 1);
    tx.run(sql.raw(`savepoint ${savepointName}`));
    try {
      const result = transaction(tx);
      tx.run(sql.raw(`release savepoint ${savepointName}`));
      return result;
    } catch (err) {
      tx.run(sql.raw(`rollback to savepoint ${savepointName}`));
      throw err;
    }
  }
}
class PreparedQuery extends PreparedQueryBase {
  constructor(stmt, query, logger, fields, executeMethod, _isResponseInArrayMode, customResultMapper, isOneTimeQuery = false) {
    super("sync", executeMethod, query);
    this.stmt = stmt;
    this.logger = logger;
    this.fields = fields;
    this._isResponseInArrayMode = _isResponseInArrayMode;
    this.customResultMapper = customResultMapper;
    this.isOneTimeQuery = isOneTimeQuery;
  }
  static [entityKind] = "SQLJsPreparedQuery";
  run(placeholderValues) {
    const params = fillPlaceholders(this.query.params, placeholderValues ?? {});
    this.logger.logQuery(this.query.sql, params);
    const result = this.stmt.run(params);
    if (this.isOneTimeQuery) {
      this.free();
    }
    return result;
  }
  all(placeholderValues) {
    const { fields, joinsNotNullableMap, logger, query, stmt, isOneTimeQuery, customResultMapper } = this;
    if (!fields && !customResultMapper) {
      const params = fillPlaceholders(query.params, placeholderValues ?? {});
      logger.logQuery(query.sql, params);
      stmt.bind(params);
      const rows2 = [];
      while (stmt.step()) {
        rows2.push(stmt.getAsObject());
      }
      if (isOneTimeQuery) {
        this.free();
      }
      return rows2;
    }
    const rows = this.values(placeholderValues);
    if (customResultMapper) {
      return customResultMapper(rows, normalizeFieldValue);
    }
    return rows.map((row) => mapResultRow(fields, row.map((v) => normalizeFieldValue(v)), joinsNotNullableMap));
  }
  get(placeholderValues) {
    const params = fillPlaceholders(this.query.params, placeholderValues ?? {});
    this.logger.logQuery(this.query.sql, params);
    const { fields, stmt, isOneTimeQuery, joinsNotNullableMap, customResultMapper } = this;
    if (!fields && !customResultMapper) {
      const result = stmt.getAsObject(params);
      if (isOneTimeQuery) {
        this.free();
      }
      return result;
    }
    const row = stmt.get(params);
    if (isOneTimeQuery) {
      this.free();
    }
    if (!row || row.length === 0 && fields.length > 0) {
      return void 0;
    }
    if (customResultMapper) {
      return customResultMapper([row], normalizeFieldValue);
    }
    return mapResultRow(fields, row.map((v) => normalizeFieldValue(v)), joinsNotNullableMap);
  }
  values(placeholderValues) {
    const params = fillPlaceholders(this.query.params, placeholderValues ?? {});
    this.logger.logQuery(this.query.sql, params);
    this.stmt.bind(params);
    const rows = [];
    while (this.stmt.step()) {
      rows.push(this.stmt.get());
    }
    if (this.isOneTimeQuery) {
      this.free();
    }
    return rows;
  }
  free() {
    return this.stmt.free();
  }
  /** @internal */
  isResponseInArrayMode() {
    return this._isResponseInArrayMode;
  }
}
function normalizeFieldValue(value) {
  if (value instanceof Uint8Array) {
    if (typeof Buffer !== "undefined") {
      if (!(value instanceof Buffer)) {
        return Buffer.from(value);
      }
      return value;
    }
    if (typeof TextDecoder !== "undefined") {
      return new TextDecoder().decode(value);
    }
    throw new Error("TextDecoder is not available. Please provide either Buffer or TextDecoder polyfill.");
  }
  return value;
}
export {
  PreparedQuery,
  SQLJsSession,
  SQLJsTransaction
};
//# sourceMappingURL=session.js.map