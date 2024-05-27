import { entityKind } from "../../entity.js";
import { MySqlColumn, MySqlColumnBuilder } from "./common.js";
class MySqlCharBuilder extends MySqlColumnBuilder {
  static [entityKind] = "MySqlCharBuilder";
  constructor(name, config) {
    super(name, "string", "MySqlChar");
    this.config.length = config.length;
    this.config.enum = config.enum;
  }
  /** @internal */
  build(table) {
    return new MySqlChar(
      table,
      this.config
    );
  }
}
class MySqlChar extends MySqlColumn {
  static [entityKind] = "MySqlChar";
  length = this.config.length;
  enumValues = this.config.enum;
  getSQLType() {
    return this.length === void 0 ? `char` : `char(${this.length})`;
  }
}
function char(name, config = {}) {
  return new MySqlCharBuilder(name, config);
}
export {
  MySqlChar,
  MySqlCharBuilder,
  char
};
//# sourceMappingURL=char.js.map