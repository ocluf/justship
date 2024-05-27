import { entityKind } from "../entity.js";
import { NoopLogger } from "../logger.js";
import { MySqlTransaction } from "../mysql-core/index.js";
import { MySqlSession, PreparedQuery as PreparedQueryBase } from "../mysql-core/session.js";
import { fillPlaceholders } from "../sql/sql.js";
import { mapResultRow } from "../utils.js";
class MySqlRemoteSession extends MySqlSession {
  constructor(client, dialect, schema, options) {
    super(dialect);
    this.client = client;
    this.schema = schema;
    this.logger = options.logger ?? new NoopLogger();
  }
  static [entityKind] = "MySqlRemoteSession";
  logger;
  prepareQuery(query, fields, customResultMapper) {
    return new PreparedQuery(
      this.client,
      query.sql,
      query.params,
      this.logger,
      fields,
      customResultMapper
    );
  }
  all(query) {
    const querySql = this.dialect.sqlToQuery(query);
    this.logger.logQuery(querySql.sql, querySql.params);
    return this.client(querySql.sql, querySql.params, "all").then(({ rows }) => rows);
  }
  async transaction(_transaction, _config) {
    throw new Error("Transactions are not supported by the MySql Proxy driver");
  }
}
class MySqlProxyTransaction extends MySqlTransaction {
  static [entityKind] = "MySqlProxyTransaction";
  async transaction(_transaction) {
    throw new Error("Transactions are not supported by the MySql Proxy driver");
  }
}
class PreparedQuery extends PreparedQueryBase {
  constructor(client, queryString, params, logger, fields, customResultMapper) {
    super();
    this.client = client;
    this.queryString = queryString;
    this.params = params;
    this.logger = logger;
    this.fields = fields;
    this.customResultMapper = customResultMapper;
  }
  static [entityKind] = "MySqlProxyPreparedQuery";
  async execute(placeholderValues = {}) {
    const params = fillPlaceholders(this.params, placeholderValues);
    const { fields, client, queryString, logger, joinsNotNullableMap, customResultMapper } = this;
    logger.logQuery(queryString, params);
    if (!fields && !customResultMapper) {
      const { rows: rows2 } = await client(queryString, params, "execute");
      return rows2;
    }
    const { rows } = await client(queryString, params, "all");
    if (customResultMapper) {
      return customResultMapper(rows);
    }
    return rows.map((row) => mapResultRow(fields, row, joinsNotNullableMap));
  }
  iterator(_placeholderValues = {}) {
    throw new Error("Streaming is not supported by the MySql Proxy driver");
  }
}
export {
  MySqlProxyTransaction,
  MySqlRemoteSession,
  PreparedQuery
};
//# sourceMappingURL=session.js.map