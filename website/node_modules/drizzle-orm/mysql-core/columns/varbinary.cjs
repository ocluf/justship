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
var varbinary_exports = {};
__export(varbinary_exports, {
  MySqlVarBinary: () => MySqlVarBinary,
  MySqlVarBinaryBuilder: () => MySqlVarBinaryBuilder,
  varbinary: () => varbinary
});
module.exports = __toCommonJS(varbinary_exports);
var import_entity = require("../../entity.cjs");
var import_common = require("./common.cjs");
class MySqlVarBinaryBuilder extends import_common.MySqlColumnBuilder {
  static [import_entity.entityKind] = "MySqlVarBinaryBuilder";
  /** @internal */
  constructor(name, config) {
    super(name, "string", "MySqlVarBinary");
    this.config.length = config?.length;
  }
  /** @internal */
  build(table) {
    return new MySqlVarBinary(
      table,
      this.config
    );
  }
}
class MySqlVarBinary extends import_common.MySqlColumn {
  static [import_entity.entityKind] = "MySqlVarBinary";
  length = this.config.length;
  getSQLType() {
    return this.length === void 0 ? `varbinary` : `varbinary(${this.length})`;
  }
}
function varbinary(name, options) {
  return new MySqlVarBinaryBuilder(name, options);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MySqlVarBinary,
  MySqlVarBinaryBuilder,
  varbinary
});
//# sourceMappingURL=varbinary.cjs.map