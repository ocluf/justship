import { entityKind } from "../entity.js";
class IndexBuilderOn {
  constructor(unique, name) {
    this.unique = unique;
    this.name = name;
  }
  static [entityKind] = "PgIndexBuilderOn";
  on(...columns) {
    return new IndexBuilder(columns, this.unique, false, this.name);
  }
  onOnly(...columns) {
    return new IndexBuilder(columns, this.unique, true, this.name);
  }
}
class IndexBuilder {
  static [entityKind] = "PgIndexBuilder";
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
  static [entityKind] = "PgIndex";
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
export {
  Index,
  IndexBuilder,
  IndexBuilderOn,
  index,
  uniqueIndex
};
//# sourceMappingURL=indexes.js.map