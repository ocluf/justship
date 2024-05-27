"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var decimal_exports = {};
__export(decimal_exports, {
  MySqlDecimal: () => MySqlDecimal,
  MySqlDecimalBuilder: () => MySqlDecimalBuilder,
  decimal: () => decimal
});
module.exports = __toCommonJS(decimal_exports);
var import_entity = require("../../entity.cjs");
var import_common = require("./common.cjs");
class MySqlDecimalBuilder extends import_common.MySqlColumnBuilderWithAutoIncrement {
  static [import_entity.entityKind] = "MySqlDecimalBuilder";
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
class MySqlDecimal extends import_common.MySqlColumnWithAutoIncrement {
  static [import_entity.entityKind] = "MySqlDecimal";
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MySqlDecimal,
  MySqlDecimalBuilder,
  decimal
});
//# sourceMappingURL=decimal.cjs.map