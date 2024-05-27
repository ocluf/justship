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
var float_exports = {};
__export(float_exports, {
  MySqlFloat: () => MySqlFloat,
  MySqlFloatBuilder: () => MySqlFloatBuilder,
  float: () => float
});
module.exports = __toCommonJS(float_exports);
var import_entity = require("../../entity.cjs");
var import_common = require("./common.cjs");
class MySqlFloatBuilder extends import_common.MySqlColumnBuilderWithAutoIncrement {
  static [import_entity.entityKind] = "MySqlFloatBuilder";
  constructor(name) {
    super(name, "number", "MySqlFloat");
  }
  /** @internal */
  build(table) {
    return new MySqlFloat(table, this.config);
  }
}
class MySqlFloat extends import_common.MySqlColumnWithAutoIncrement {
  static [import_entity.entityKind] = "MySqlFloat";
  getSQLType() {
    return "float";
  }
}
function float(name) {
  return new MySqlFloatBuilder(name);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MySqlFloat,
  MySqlFloatBuilder,
  float
});
//# sourceMappingURL=float.cjs.map