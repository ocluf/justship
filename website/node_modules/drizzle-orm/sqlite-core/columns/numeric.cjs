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
var numeric_exports = {};
__export(numeric_exports, {
  SQLiteNumeric: () => SQLiteNumeric,
  SQLiteNumericBuilder: () => SQLiteNumericBuilder,
  numeric: () => numeric
});
module.exports = __toCommonJS(numeric_exports);
var import_entity = require("../../entity.cjs");
var import_common = require("./common.cjs");
class SQLiteNumericBuilder extends import_common.SQLiteColumnBuilder {
  static [import_entity.entityKind] = "SQLiteNumericBuilder";
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
class SQLiteNumeric extends import_common.SQLiteColumn {
  static [import_entity.entityKind] = "SQLiteNumeric";
  getSQLType() {
    return "numeric";
  }
}
function numeric(name) {
  return new SQLiteNumericBuilder(name);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SQLiteNumeric,
  SQLiteNumericBuilder,
  numeric
});
//# sourceMappingURL=numeric.cjs.map