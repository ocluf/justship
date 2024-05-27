import { entityKind } from "../../entity.js";
import { MySqlColumnBuilderWithAutoIncrement, MySqlColumnWithAutoIncrement } from "./common.js";
class MySqlFloatBuilder extends MySqlColumnBuilderWithAutoIncrement {
  static [entityKind] = "MySqlFloatBuilder";
  constructor(name) {
    super(name, "number", "MySqlFloat");
  }
  /** @internal */
  build(table) {
    return new MySqlFloat(table, this.config);
  }
}
class MySqlFloat extends MySqlColumnWithAutoIncrement {
  static [entityKind] = "MySqlFloat";
  getSQLType() {
    return "float";
  }
}
function float(name) {
  return new MySqlFloatBuilder(name);
}
export {
  MySqlFloat,
  MySqlFloatBuilder,
  float
};
//# sourceMappingURL=float.js.map