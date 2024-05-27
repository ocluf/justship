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
var enum_exports = {};
__export(enum_exports, {
  MySqlEnumColumn: () => MySqlEnumColumn,
  MySqlEnumColumnBuilder: () => MySqlEnumColumnBuilder,
  mysqlEnum: () => mysqlEnum
});
module.exports = __toCommonJS(enum_exports);
var import_entity = require("../../entity.cjs");
var import_common = require("./common.cjs");
class MySqlEnumColumnBuilder extends import_common.MySqlColumnBuilder {
  static [import_entity.entityKind] = "MySqlEnumColumnBuilder";
  constructor(name, values) {
    super(name, "string", "MySqlEnumColumn");
    this.config.enumValues = values;
  }
  /** @internal */
  build(table) {
    return new MySqlEnumColumn(
      table,
      this.config
    );
  }
}
class MySqlEnumColumn extends import_common.MySqlColumn {
  static [import_entity.entityKind] = "MySqlEnumColumn";
  enumValues = this.config.enumValues;
  getSQLType() {
    return `enum(${this.enumValues.map((value) => `'${value}'`).join(",")})`;
  }
}
function mysqlEnum(name, values) {
  if (values.length === 0) {
    throw new Error(`You have an empty array for "${name}" enum values`);
  }
  return new MySqlEnumColumnBuilder(name, values);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MySqlEnumColumn,
  MySqlEnumColumnBuilder,
  mysqlEnum
});
//# sourceMappingURL=enum.cjs.map