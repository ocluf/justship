import { entityKind } from "../entity.js";
import { TransactionRollbackError } from "../errors.js";
import { sql } from "../sql/sql.js";
import { MySqlDatabase } from "./db.js";
class PreparedQuery {
  static [entityKind] = "MySqlPreparedQuery";
  /** @internal */
  joinsNotNullableMap;
}
class MySqlSession {
  constructor(dialect) {
    this.dialect = dialect;
  }
  static [entityKind] = "MySqlSession";
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
    return parts.length ? sql.join(["set transaction ", parts.join(" ")]) : void 0;
  }
  getStartTransactionSQL(config) {
    const parts = [];
    if (config.withConsistentSnapshot) {
      parts.push("with consistent snapshot");
    }
    if (config.accessMode) {
      parts.push(config.accessMode);
    }
    return parts.length ? sql.join(["start transaction ", parts.join(" ")]) : void 0;
  }
}
class MySqlTransaction extends MySqlDatabase {
  constructor(dialect, session, schema, nestedIndex, mode) {
    super(dialect, session, schema, mode);
    this.schema = schema;
    this.nestedIndex = nestedIndex;
  }
  static [entityKind] = "MySqlTransaction";
  rollback() {
    throw new TransactionRollbackError();
  }
}
export {
  MySqlSession,
  MySqlTransaction,
  PreparedQuery
};
//# sourceMappingURL=session.js.map