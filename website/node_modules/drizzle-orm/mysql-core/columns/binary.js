import { entityKind } from "../../entity.js";
import { MySqlColumn, MySqlColumnBuilder } from "./common.js";
class MySqlBinaryBuilder extends MySqlColumnBuilder {
  static [entityKind] = "MySqlBinaryBuilder";
  constructor(name, length) {
    super(name, "string", "MySqlBinary");
    this.config.length = length;
  }
  /** @internal */
  build(table) {
    return new MySqlBinary(table, this.config);
  }
}
class MySqlBinary extends MySqlColumn {
  static [entityKind] = "MySqlBinary";
  length = this.config.length;
  getSQLType() {
    return this.length === void 0 ? `binary` : `binary(${this.length})`;
  }
}
function binary(name, config = {}) {
  return new MySqlBinaryBuilder(name, config.length);
}
export {
  MySqlBinary,
  MySqlBinaryBuilder,
  binary
};
//# sourceMappingURL=binary.js.map