import { entityKind } from "../../entity.js";
import { SQLiteColumn, SQLiteColumnBuilder } from "./common.js";
class SQLiteNumericBuilder extends SQLiteColumnBuilder {
  static [entityKind] = "SQLiteNumericBuilder";
  constructor(name) {
    super(name, "string", "SQLiteNumeric");
  }
  /** @internal */
  build(table) {
    return new SQLiteNumeric(
      table,
      this.config
    );
  }
}
class SQLiteNumeric extends SQLiteColumn {
  static [entityKind] = "SQLiteNumeric";
  getSQLType() {
    return "numeric";
  }
}
function numeric(name) {
  return new SQLiteNumericBuilder(name);
}
export {
  SQLiteNumeric,
  SQLiteNumericBuilder,
  numeric
};
//# sourceMappingURL=numeric.js.map