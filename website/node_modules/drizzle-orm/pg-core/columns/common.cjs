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
var common_exports = {};
__export(common_exports, {
  PgArray: () => PgArray,
  PgArrayBuilder: () => PgArrayBuilder,
  PgColumn: () => PgColumn,
  PgColumnBuilder: () => PgColumnBuilder
});
module.exports = __toCommonJS(common_exports);
var import_column_builder = require("../../column-builder.cjs");
var import_column = require("../../column.cjs");
var import_entity = require("../../entity.cjs");
var import_foreign_keys = require("../foreign-keys.cjs");
var import_tracing_utils = require("../../tracing-utils.cjs");
var import_unique_constraint = require("../unique-constraint.cjs");
var import_array = require("../utils/array.cjs");
class PgColumnBuilder extends import_column_builder.ColumnBuilder {
  foreignKeyConfigs = [];
  static [import_entity.entityKind] = "PgColumnBuilder";
  array(size) {
    return new PgArrayBuilder(this.config.name, this, size);
  }
  references(ref, actions = {}) {
    this.foreignKeyConfigs.push({ ref, actions });
    return this;
  }
  unique(name, config) {
    this.config.isUnique = true;
    this.config.uniqueName = name;
    this.config.uniqueType = config?.nulls;
    return this;
  }
  /** @internal */
  buildForeignKeys(column, table) {
    return this.foreignKeyConfigs.map(({ ref, actions }) => {
      return (0, import_tracing_utils.iife)(
        (ref2, actions2) => {
          const builder = new import_foreign_keys.ForeignKeyBuilder(() => {
            const foreignColumn = ref2();
            return { columns: [column], foreignColumns: [foreignColumn] };
          });
          if (actions2.onUpdate) {
            builder.onUpdate(actions2.onUpdate);
          }
          if (actions2.onDelete) {
            builder.onDelete(actions2.onDelete);
          }
          return builder.build(table);
        },
        ref,
        actions
      );
    });
  }
}
class PgColumn extends import_column.Column {
  constructor(table, config) {
    if (!config.uniqueName) {
      config.uniqueName = (0, import_unique_constraint.uniqueKeyName)(table, [config.name]);
    }
    super(table, config);
    this.table = table;
  }
  static [import_entity.entityKind] = "PgColumn";
}
class PgArrayBuilder extends PgColumnBuilder {
  static [import_entity.entityKind] = "PgArrayBuilder";
  constructor(name, baseBuilder, size) {
    super(name, "array", "PgArray");
    this.config.baseBuilder = baseBuilder;
    this.config.size = size;
  }
  /** @internal */
  build(table) {
    const baseColumn = this.config.baseBuilder.build(table);
    return new PgArray(
      table,
      this.config,
      baseColumn
    );
  }
}
class PgArray extends PgColumn {
  constructor(table, config, baseColumn, range) {
    super(table, config);
    this.baseColumn = baseColumn;
    this.range = range;
    this.size = config.size;
  }
  size;
  static [import_entity.entityKind] = "PgArray";
  getSQLType() {
    return `${this.baseColumn.getSQLType()}[${typeof this.size === "number" ? this.size : ""}]`;
  }
  mapFromDriverValue(value) {
    if (typeof value === "string") {
      value = (0, import_array.parsePgArray)(value);
    }
    return value.map((v) => this.baseColumn.mapFromDriverValue(v));
  }
  mapToDriverValue(value, isNestedArray = false) {
    const a = value.map(
      (v) => v === null ? null : (0, import_entity.is)(this.baseColumn, PgArray) ? this.baseColumn.mapToDriverValue(v, true) : this.baseColumn.mapToDriverValue(v)
    );
    if (isNestedArray)
      return a;
    return (0, import_array.makePgArray)(a);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PgArray,
  PgArrayBuilder,
  PgColumn,
  PgColumnBuilder
});
//# sourceMappingURL=common.cjs.map