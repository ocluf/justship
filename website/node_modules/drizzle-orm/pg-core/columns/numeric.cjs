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
  PgNumeric: () => PgNumeric,
  PgNumericBuilder: () => PgNumericBuilder,
  decimal: () => decimal,
  numeric: () => numeric
});
module.exports = __toCommonJS(numeric_exports);
var import_entity = require("../../entity.cjs");
var import_common = require("./common.cjs");
class PgNumericBuilder extends import_common.PgColumnBuilder {
  static [import_entity.entityKind] = "PgNumericBuilder";
  constructor(name, precision, scale) {
    super(name, "string", "PgNumeric");
    this.config.precision = precision;
    this.config.scale = scale;
  }
  /** @internal */
  build(table) {
    return new PgNumeric(table, this.config);
  }
}
class PgNumeric extends import_common.PgColumn {
  static [import_entity.entityKind] = "PgNumeric";
  precision;
  scale;
  constructor(table, config) {
    super(table, config);
    this.precision = config.precision;
    this.scale = config.scale;
  }
  getSQLType() {
    if (this.precision !== void 0 && this.scale !== void 0) {
      return `numeric(${this.precision}, ${this.scale})`;
    } else if (this.precision === void 0) {
      return "numeric";
    } else {
      return `numeric(${this.precision})`;
    }
  }
}
function numeric(name, config) {
  return new PgNumericBuilder(name, config?.precision, config?.scale);
}
const decimal = numeric;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PgNumeric,
  PgNumericBuilder,
  decimal,
  numeric
});
//# sourceMappingURL=numeric.cjs.map