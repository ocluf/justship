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
var indexes_exports = {};
__export(indexes_exports, {
  Index: () => Index,
  IndexBuilder: () => IndexBuilder,
  IndexBuilderOn: () => IndexBuilderOn,
  index: () => index,
  uniqueIndex: () => uniqueIndex
});
module.exports = __toCommonJS(indexes_exports);
var import_entity = require("../entity.cjs");
class IndexBuilderOn {
  constructor(unique, name) {
    this.unique = unique;
    this.name = name;
  }
  static [import_entity.entityKind] = "PgIndexBuilderOn";
  on(...columns) {
    return new IndexBuilder(columns, this.unique, false, this.name);
  }
  onOnly(...columns) {
    return new IndexBuilder(columns, this.unique, true, this.name);
  }
}
class IndexBuilder {
  static [import_entity.entityKind] = "PgIndexBuilder";
  /** @internal */
  config;
  constructor(columns, unique, only, name) {
    this.config = {
      name,
      columns,
      unique,
      only
    };
  }
  concurrently() {
    this.config.concurrently = true;
    return this;
  }
  using(method) {
    this.config.using = method;
    return this;
  }
  asc() {
    this.config.order = "asc";
    return this;
  }
  desc() {
    this.config.order = "desc";
    return this;
  }
  nullsFirst() {
    this.config.nulls = "first";
    return this;
  }
  nullsLast() {
    this.config.nulls = "last";
    return this;
  }
  where(condition) {
    this.config.where = condition;
    return this;
  }
  /** @internal */
  build(table) {
    return new Index(this.config, table);
  }
}
class Index {
  static [import_entity.entityKind] = "PgIndex";
  config;
  constructor(config, table) {
    this.config = { ...config, table };
  }
}
function index(name) {
  return new IndexBuilderOn(false, name);
}
function uniqueIndex(name) {
  return new IndexBuilderOn(true, name);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Index,
  IndexBuilder,
  IndexBuilderOn,
  index,
  uniqueIndex
});
//# sourceMappingURL=indexes.cjs.map