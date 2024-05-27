import { entityKind } from "../../entity.js";
import { MySqlColumnBuilderWithAutoIncrement, MySqlColumnWithAutoIncrement } from "./common.js";
class MySqlDoubleBuilder extends MySqlColumnBuilderWithAutoIncrement {
  static [entityKind] = "MySqlDoubleBuilder";
  constructor(name, config) {
    super(name, "number", "MySqlDouble");
    this.config.precision = config?.precision;
    this.config.scale = config?.scale;
  }
  /** @internal */
  build(table) {
    return new MySqlDouble(table, this.config);
  }
}
class MySqlDouble extends MySqlColumnWithAutoIncrement {
  static [entityKind] = "MySqlDouble";
  precision = this.config.precision;
  scale = this.config.scale;
  getSQLType() {
    if (this.precision !== void 0 && this.scale !== void 0) {
      return `double(${this.precision},${this.scale})`;
    } else if (this.precision === void 0) {
      return "double";
    } else {
      return `double(${this.precision})`;
    }
  }
}
function double(name, config) {
  return new MySqlDoubleBuilder(name, config);
}
export {
  MySqlDouble,
  MySqlDoubleBuilder,
  double
};
//# sourceMappingURL=double.js.map