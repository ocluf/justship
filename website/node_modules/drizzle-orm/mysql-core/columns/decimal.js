import { entityKind } from "../../entity.js";
import { MySqlColumnBuilderWithAutoIncrement, MySqlColumnWithAutoIncrement } from "./common.js";
class MySqlDecimalBuilder extends MySqlColumnBuilderWithAutoIncrement {
  static [entityKind] = "MySqlDecimalBuilder";
  constructor(name, precision, scale) {
    super(name, "string", "MySqlDecimal");
    this.config.precision = precision;
    this.config.scale = scale;
  }
  /** @internal */
  build(table) {
    return new MySqlDecimal(
      table,
      this.config
    );
  }
}
class MySqlDecimal extends MySqlColumnWithAutoIncrement {
  static [entityKind] = "MySqlDecimal";
  precision = this.config.precision;
  scale = this.config.scale;
  getSQLType() {
    if (this.precision !== void 0 && this.scale !== void 0) {
      return `decimal(${this.precision},${this.scale})`;
    } else if (this.precision === void 0) {
      return "decimal";
    } else {
      return `decimal(${this.precision})`;
    }
  }
}
function decimal(name, config = {}) {
  return new MySqlDecimalBuilder(name, config.precision, config.scale);
}
export {
  MySqlDecimal,
  MySqlDecimalBuilder,
  decimal
};
//# sourceMappingURL=decimal.js.map