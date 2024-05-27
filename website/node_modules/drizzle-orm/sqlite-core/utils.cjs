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
var utils_exports = {};
__export(utils_exports, {
  getTableConfig: () => getTableConfig,
  getViewConfig: () => getViewConfig
});
module.exports = __toCommonJS(utils_exports);
var import_entity = require("../entity.cjs");
var import_table = require("../table.cjs");
var import_view_common = require("../view-common.cjs");
var import_checks = require("./checks.cjs");
var import_foreign_keys = require("./foreign-keys.cjs");
var import_indexes = require("./indexes.cjs");
var import_primary_keys = require("./primary-keys.cjs");
var import_table2 = require("./table.cjs");
var import_unique_constraint = require("./unique-constraint.cjs");
var import_view_common2 = require("./view-common.cjs");
function getTableConfig(table) {
  const columns = Object.values(table[import_table2.SQLiteTable.Symbol.Columns]);
  const indexes = [];
  const checks = [];
  const primaryKeys = [];
  const uniqueConstraints = [];
  const foreignKeys = Object.values(table[import_table2.SQLiteTable.Symbol.InlineForeignKeys]);
  const name = table[import_table.Table.Symbol.Name];
  const extraConfigBuilder = table[import_table2.SQLiteTable.Symbol.ExtraConfigBuilder];
  if (extraConfigBuilder !== void 0) {
    const extraConfig = extraConfigBuilder(table[import_table2.SQLiteTable.Symbol.Columns]);
    for (const builder of Object.values(extraConfig)) {
      if ((0, import_entity.is)(builder, import_indexes.IndexBuilder)) {
        indexes.push(builder.build(table));
      } else if ((0, import_entity.is)(builder, import_checks.CheckBuilder)) {
        checks.push(builder.build(table));
      } else if ((0, import_entity.is)(builder, import_unique_constraint.UniqueConstraintBuilder)) {
        uniqueConstraints.push(builder.build(table));
      } else if ((0, import_entity.is)(builder, import_primary_keys.PrimaryKeyBuilder)) {
        primaryKeys.push(builder.build(table));
      } else if ((0, import_entity.is)(builder, import_foreign_keys.ForeignKeyBuilder)) {
        foreignKeys.push(builder.build(table));
      }
    }
  }
  return {
    columns,
    indexes,
    foreignKeys,
    checks,
    primaryKeys,
    uniqueConstraints,
    name
  };
}
function getViewConfig(view) {
  return {
    ...view[import_view_common.ViewBaseConfig],
    ...view[import_view_common2.SQLiteViewConfig]
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getTableConfig,
  getViewConfig
});
//# sourceMappingURL=utils.cjs.map