import { entityKind } from "../entity.js";
import { NoopLogger } from "../logger.js";
import { PgTransaction } from "../pg-core/index.js";
import { PgPreparedQuery, PgSession } from "../pg-core/session.js";
import { fillPlaceholders, sql } from "../sql/sql.js";
import { mapResultRow } from "../utils.js";
import { types } from "@electric-sql/pglite";
class PglitePreparedQuery extends PgPreparedQuery {
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
        [types.TIMESTAMP]: (value) => value,
        [types.TIMESTAMPTZ]: (value) => value,
        [types.INTERVAL]: (value) => value,
        [types.DATE]: (value) => value
      }
    };
    this.queryConfig = {
      rowMode: "array",
      parsers: {
        [types.TIMESTAMP]: (value) => value,
        [types.TIMESTAMPTZ]: (value) => value,
        [types.INTERVAL]: (value) => value,
        [types.DATE]: (value) => value
      }
    };
  }
  static [entityKind] = "PglitePreparedQuery";
  rawQueryConfig;
  queryConfig;
  async execute(placeholderValues = {}) {
    const params = fillPlaceholders(this.params, placeholderValues);
    this.logger.logQuery(this.queryString, params);
    const { fields, rawQueryConfig, client, queryConfig, joinsNotNullableMap, customResultMapper, queryString } = this;
    if (!fields && !customResultMapper) {
      return client.query(queryString, params, rawQueryConfig);
    }
    const result = await client.query(queryString, params, queryConfig);
    return customResultMapper ? customResultMapper(result.rows) : result.rows.map((row) => mapResultRow(fields, row, joinsNotNullableMap));
  }
  all(placeholderValues = {}) {
    const params = fillPlaceholders(this.params, placeholderValues);
    this.logger.logQuery(this.queryString, params);
    return this.client.query(this.queryString, params, this.rawQueryConfig).then((result) => result.rows);
  }
  /** @internal */
  isResponseInArrayMode() {
    return this._isResponseInArrayMode;
  }
}
class PgliteSession extends PgSession {
  constructor(client, dialect, schema, options = {}) {
    super(dialect);
    this.client = client;
    this.schema = schema;
    this.options = options;
    this.logger = options.logger ?? new NoopLogger();
  }
  static [entityKind] = "PgliteSession";
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
class PgliteTransaction extends PgTransaction {
  static [entityKind] = "PgliteTransaction";
  async transaction(transaction) {
    const savepointName = `sp${this.nestedIndex + 1}`;
    const tx = new PgliteTransaction(
      this.dialect,
      this.session,
      this.schema,
      this.nestedIndex + 1
    );
    await tx.execute(sql.raw(`savepoint ${savepointName}`));
    try {
      const result = await transaction(tx);
      await tx.execute(sql.raw(`release savepoint ${savepointName}`));
      return result;
    } catch (err) {
      await tx.execute(sql.raw(`rollback to savepoint ${savepointName}`));
      throw err;
    }
  }
}
export {
  PglitePreparedQuery,
  PgliteSession,
  PgliteTransaction
};
//# sourceMappingURL=session.js.map