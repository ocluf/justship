var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except4, desc2) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except4)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc2 = __getOwnPropDesc(from, key)) || desc2.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/entity.js
function is(value, type) {
  if (!value || typeof value !== "object") {
    return false;
  }
  if (value instanceof type) {
    return true;
  }
  if (!Object.prototype.hasOwnProperty.call(type, entityKind)) {
    throw new Error(
      `Class "${type.name ?? "<unknown>"}" doesn't look like a Drizzle entity. If this is incorrect and the class is provided by Drizzle, please report this as a bug.`
    );
  }
  let cls = value.constructor;
  if (cls) {
    while (cls) {
      if (entityKind in cls && cls[entityKind] === type[entityKind]) {
        return true;
      }
      cls = Object.getPrototypeOf(cls);
    }
  }
  return false;
}
var entityKind, hasOwnEntityKind;
var init_entity = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/entity.js"() {
    "use strict";
    entityKind = Symbol.for("drizzle:entityKind");
    hasOwnEntityKind = Symbol.for("drizzle:hasOwnEntityKind");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/column.js
var _a, Column;
var init_column = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/column.js"() {
    "use strict";
    init_entity();
    Column = class {
      constructor(table4, config) {
        __publicField(this, "name");
        __publicField(this, "primary");
        __publicField(this, "notNull");
        __publicField(this, "default");
        __publicField(this, "defaultFn");
        __publicField(this, "onUpdateFn");
        __publicField(this, "hasDefault");
        __publicField(this, "isUnique");
        __publicField(this, "uniqueName");
        __publicField(this, "uniqueType");
        __publicField(this, "dataType");
        __publicField(this, "columnType");
        __publicField(this, "enumValues");
        __publicField(this, "config");
        this.table = table4;
        this.config = config;
        this.name = config.name;
        this.notNull = config.notNull;
        this.default = config.default;
        this.defaultFn = config.defaultFn;
        this.onUpdateFn = config.onUpdateFn;
        this.hasDefault = config.hasDefault;
        this.primary = config.primaryKey;
        this.isUnique = config.isUnique;
        this.uniqueName = config.uniqueName;
        this.uniqueType = config.uniqueType;
        this.dataType = config.dataType;
        this.columnType = config.columnType;
      }
      mapFromDriverValue(value) {
        return value;
      }
      mapToDriverValue(value) {
        return value;
      }
    };
    _a = entityKind;
    __publicField(Column, _a, "Column");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/column-builder.js
var _a2, ColumnBuilder;
var init_column_builder = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/column-builder.js"() {
    "use strict";
    init_entity();
    ColumnBuilder = class {
      constructor(name2, dataType, columnType) {
        __publicField(this, "config");
        /**
         * Alias for {@link $defaultFn}.
         */
        __publicField(this, "$default", this.$defaultFn);
        /**
         * Alias for {@link $onUpdateFn}.
         */
        __publicField(this, "$onUpdate", this.$onUpdateFn);
        this.config = {
          name: name2,
          notNull: false,
          default: void 0,
          hasDefault: false,
          primaryKey: false,
          isUnique: false,
          uniqueName: void 0,
          uniqueType: void 0,
          dataType,
          columnType
        };
      }
      /**
       * Changes the data type of the column. Commonly used with `json` columns. Also, useful for branded types.
       *
       * @example
       * ```ts
       * const users = pgTable('users', {
       * 	id: integer('id').$type<UserId>().primaryKey(),
       * 	details: json('details').$type<UserDetails>().notNull(),
       * });
       * ```
       */
      $type() {
        return this;
      }
      /**
       * Adds a `not null` clause to the column definition.
       *
       * Affects the `select` model of the table - columns *without* `not null` will be nullable on select.
       */
      notNull() {
        this.config.notNull = true;
        return this;
      }
      /**
       * Adds a `default <value>` clause to the column definition.
       *
       * Affects the `insert` model of the table - columns *with* `default` are optional on insert.
       *
       * If you need to set a dynamic default value, use {@link $defaultFn} instead.
       */
      default(value) {
        this.config.default = value;
        this.config.hasDefault = true;
        return this;
      }
      /**
       * Adds a dynamic default value to the column.
       * The function will be called when the row is inserted, and the returned value will be used as the column value.
       *
       * **Note:** This value does not affect the `drizzle-kit` behavior, it is only used at runtime in `drizzle-orm`.
       */
      $defaultFn(fn) {
        this.config.defaultFn = fn;
        this.config.hasDefault = true;
        return this;
      }
      /**
       * Adds a dynamic update value to the column.
       * The function will be called when the row is updated, and the returned value will be used as the column value if none is provided.
       * If no `default` (or `$defaultFn`) value is provided, the function will be called when the row is inserted as well, and the returned value will be used as the column value.
       *
       * **Note:** This value does not affect the `drizzle-kit` behavior, it is only used at runtime in `drizzle-orm`.
       */
      $onUpdateFn(fn) {
        this.config.onUpdateFn = fn;
        this.config.hasDefault = true;
        return this;
      }
      /**
       * Adds a `primary key` clause to the column definition. This implicitly makes the column `not null`.
       *
       * In SQLite, `integer primary key` implicitly makes the column auto-incrementing.
       */
      primaryKey() {
        this.config.primaryKey = true;
        this.config.notNull = true;
        return this;
      }
    };
    _a2 = entityKind;
    __publicField(ColumnBuilder, _a2, "ColumnBuilder");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/table.js
function isTable(table4) {
  return typeof table4 === "object" && table4 !== null && IsDrizzleTable in table4;
}
function getTableName(table4) {
  return table4[TableName];
}
var TableName, Schema, Columns, OriginalName, BaseName, IsAlias, ExtraConfigBuilder, IsDrizzleTable, _a3, _b, _c, _d, _e, _f, _g, _h, _i, Table;
var init_table = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/table.js"() {
    "use strict";
    init_entity();
    TableName = Symbol.for("drizzle:Name");
    Schema = Symbol.for("drizzle:Schema");
    Columns = Symbol.for("drizzle:Columns");
    OriginalName = Symbol.for("drizzle:OriginalName");
    BaseName = Symbol.for("drizzle:BaseName");
    IsAlias = Symbol.for("drizzle:IsAlias");
    ExtraConfigBuilder = Symbol.for("drizzle:ExtraConfigBuilder");
    IsDrizzleTable = Symbol.for("drizzle:IsDrizzleTable");
    Table = class {
      constructor(name2, schema4, baseName) {
        /**
         * @internal
         * Can be changed if the table is aliased.
         */
        __publicField(this, _b);
        /**
         * @internal
         * Used to store the original name of the table, before any aliasing.
         */
        __publicField(this, _c);
        /** @internal */
        __publicField(this, _d);
        /** @internal */
        __publicField(this, _e);
        /**
         *  @internal
         * Used to store the table name before the transformation via the `tableCreator` functions.
         */
        __publicField(this, _f);
        /** @internal */
        __publicField(this, _g, false);
        /** @internal */
        __publicField(this, _h);
        __publicField(this, _i, true);
        this[TableName] = this[OriginalName] = name2;
        this[Schema] = schema4;
        this[BaseName] = baseName;
      }
    };
    _a3 = entityKind, _b = TableName, _c = OriginalName, _d = Schema, _e = Columns, _f = BaseName, _g = IsAlias, _h = ExtraConfigBuilder, _i = IsDrizzleTable;
    __publicField(Table, _a3, "Table");
    /** @internal */
    __publicField(Table, "Symbol", {
      Name: TableName,
      Schema,
      OriginalName,
      Columns,
      BaseName,
      IsAlias,
      ExtraConfigBuilder
    });
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/table.js
function pgTableWithSchema(name2, columns, extraConfig, schema4, baseName = name2) {
  const rawTable = new PgTable(name2, schema4, baseName);
  const builtColumns = Object.fromEntries(
    Object.entries(columns).map(([name22, colBuilderBase]) => {
      const colBuilder = colBuilderBase;
      const column4 = colBuilder.build(rawTable);
      rawTable[InlineForeignKeys].push(...colBuilder.buildForeignKeys(column4, rawTable));
      return [name22, column4];
    })
  );
  const table4 = Object.assign(rawTable, builtColumns);
  table4[Table.Symbol.Columns] = builtColumns;
  if (extraConfig) {
    table4[PgTable.Symbol.ExtraConfigBuilder] = extraConfig;
  }
  return table4;
}
var InlineForeignKeys, _a4, _b2, _c2, PgTable, pgTable;
var init_table2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/table.js"() {
    "use strict";
    init_entity();
    init_table();
    InlineForeignKeys = Symbol.for("drizzle:PgInlineForeignKeys");
    PgTable = class extends Table {
      constructor() {
        super(...arguments);
        /**@internal */
        __publicField(this, _b2, []);
        /** @internal */
        __publicField(this, _c2);
      }
    };
    _a4 = entityKind, _b2 = InlineForeignKeys, _c2 = Table.Symbol.ExtraConfigBuilder;
    __publicField(PgTable, _a4, "PgTable");
    /** @internal */
    __publicField(PgTable, "Symbol", Object.assign({}, Table.Symbol, {
      InlineForeignKeys
    }));
    pgTable = (name2, columns, extraConfig) => {
      return pgTableWithSchema(name2, columns, extraConfig, void 0);
    };
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/foreign-keys.js
var _a5, ForeignKeyBuilder, _a6, ForeignKey;
var init_foreign_keys = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/foreign-keys.js"() {
    "use strict";
    init_entity();
    init_table2();
    ForeignKeyBuilder = class {
      constructor(config, actions) {
        /** @internal */
        __publicField(this, "reference");
        /** @internal */
        __publicField(this, "_onUpdate", "no action");
        /** @internal */
        __publicField(this, "_onDelete", "no action");
        this.reference = () => {
          const { name: name2, columns, foreignColumns } = config();
          return { name: name2, columns, foreignTable: foreignColumns[0].table, foreignColumns };
        };
        if (actions) {
          this._onUpdate = actions.onUpdate;
          this._onDelete = actions.onDelete;
        }
      }
      onUpdate(action) {
        this._onUpdate = action === void 0 ? "no action" : action;
        return this;
      }
      onDelete(action) {
        this._onDelete = action === void 0 ? "no action" : action;
        return this;
      }
      /** @internal */
      build(table4) {
        return new ForeignKey(table4, this);
      }
    };
    _a5 = entityKind;
    __publicField(ForeignKeyBuilder, _a5, "PgForeignKeyBuilder");
    ForeignKey = class {
      constructor(table4, builder) {
        __publicField(this, "reference");
        __publicField(this, "onUpdate");
        __publicField(this, "onDelete");
        this.table = table4;
        this.reference = builder.reference;
        this.onUpdate = builder._onUpdate;
        this.onDelete = builder._onDelete;
      }
      getName() {
        const { name: name2, columns, foreignColumns } = this.reference();
        const columnNames = columns.map((column4) => column4.name);
        const foreignColumnNames = foreignColumns.map((column4) => column4.name);
        const chunks = [
          this.table[PgTable.Symbol.Name],
          ...columnNames,
          foreignColumns[0].table[PgTable.Symbol.Name],
          ...foreignColumnNames
        ];
        return name2 ?? `${chunks.join("_")}_fk`;
      }
    };
    _a6 = entityKind;
    __publicField(ForeignKey, _a6, "PgForeignKey");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/tracing-utils.js
function iife(fn, ...args) {
  return fn(...args);
}
var init_tracing_utils = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/tracing-utils.js"() {
    "use strict";
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/unique-constraint.js
function uniqueKeyName(table4, columns) {
  return `${table4[PgTable.Symbol.Name]}_${columns.join("_")}_unique`;
}
var _a7, UniqueConstraintBuilder, _a8, UniqueOnConstraintBuilder, _a9, UniqueConstraint;
var init_unique_constraint = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/unique-constraint.js"() {
    "use strict";
    init_entity();
    init_table2();
    UniqueConstraintBuilder = class {
      constructor(columns, name2) {
        /** @internal */
        __publicField(this, "columns");
        /** @internal */
        __publicField(this, "nullsNotDistinctConfig", false);
        this.name = name2;
        this.columns = columns;
      }
      nullsNotDistinct() {
        this.nullsNotDistinctConfig = true;
        return this;
      }
      /** @internal */
      build(table4) {
        return new UniqueConstraint(table4, this.columns, this.nullsNotDistinctConfig, this.name);
      }
    };
    _a7 = entityKind;
    __publicField(UniqueConstraintBuilder, _a7, "PgUniqueConstraintBuilder");
    UniqueOnConstraintBuilder = class {
      constructor(name2) {
        /** @internal */
        __publicField(this, "name");
        this.name = name2;
      }
      on(...columns) {
        return new UniqueConstraintBuilder(columns, this.name);
      }
    };
    _a8 = entityKind;
    __publicField(UniqueOnConstraintBuilder, _a8, "PgUniqueOnConstraintBuilder");
    UniqueConstraint = class {
      constructor(table4, columns, nullsNotDistinct, name2) {
        __publicField(this, "columns");
        __publicField(this, "name");
        __publicField(this, "nullsNotDistinct", false);
        this.table = table4;
        this.columns = columns;
        this.name = name2 ?? uniqueKeyName(this.table, this.columns.map((column4) => column4.name));
        this.nullsNotDistinct = nullsNotDistinct;
      }
      getName() {
        return this.name;
      }
    };
    _a9 = entityKind;
    __publicField(UniqueConstraint, _a9, "PgUniqueConstraint");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/utils/array.js
function parsePgArrayValue(arrayString, startFrom, inQuotes) {
  for (let i = startFrom; i < arrayString.length; i++) {
    const char = arrayString[i];
    if (char === "\\") {
      i++;
      continue;
    }
    if (char === '"') {
      return [arrayString.slice(startFrom, i).replace(/\\/g, ""), i + 1];
    }
    if (inQuotes) {
      continue;
    }
    if (char === "," || char === "}") {
      return [arrayString.slice(startFrom, i).replace(/\\/g, ""), i];
    }
  }
  return [arrayString.slice(startFrom).replace(/\\/g, ""), arrayString.length];
}
function parsePgNestedArray(arrayString, startFrom = 0) {
  const result = [];
  let i = startFrom;
  let lastCharIsComma = false;
  while (i < arrayString.length) {
    const char = arrayString[i];
    if (char === ",") {
      if (lastCharIsComma || i === startFrom) {
        result.push("");
      }
      lastCharIsComma = true;
      i++;
      continue;
    }
    lastCharIsComma = false;
    if (char === "\\") {
      i += 2;
      continue;
    }
    if (char === '"') {
      const [value2, startFrom2] = parsePgArrayValue(arrayString, i + 1, true);
      result.push(value2);
      i = startFrom2;
      continue;
    }
    if (char === "}") {
      return [result, i + 1];
    }
    if (char === "{") {
      const [value2, startFrom2] = parsePgNestedArray(arrayString, i + 1);
      result.push(value2);
      i = startFrom2;
      continue;
    }
    const [value, newStartFrom] = parsePgArrayValue(arrayString, i, false);
    result.push(value);
    i = newStartFrom;
  }
  return [result, i];
}
function parsePgArray(arrayString) {
  const [result] = parsePgNestedArray(arrayString, 1);
  return result;
}
function makePgArray(array3) {
  return `{${array3.map((item) => {
    if (Array.isArray(item)) {
      return makePgArray(item);
    }
    if (typeof item === "string") {
      return `"${item.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
    }
    return `${item}`;
  }).join(",")}}`;
}
var init_array = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/utils/array.js"() {
    "use strict";
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/common.js
var _a10, PgColumnBuilder, _a11, PgColumn, _a12, PgArrayBuilder, _a13, _PgArray, PgArray;
var init_common = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/common.js"() {
    "use strict";
    init_column_builder();
    init_column();
    init_entity();
    init_foreign_keys();
    init_tracing_utils();
    init_unique_constraint();
    init_array();
    PgColumnBuilder = class extends ColumnBuilder {
      constructor() {
        super(...arguments);
        __publicField(this, "foreignKeyConfigs", []);
      }
      array(size) {
        return new PgArrayBuilder(this.config.name, this, size);
      }
      references(ref, actions = {}) {
        this.foreignKeyConfigs.push({ ref, actions });
        return this;
      }
      unique(name2, config) {
        this.config.isUnique = true;
        this.config.uniqueName = name2;
        this.config.uniqueType = config?.nulls;
        return this;
      }
      /** @internal */
      buildForeignKeys(column4, table4) {
        return this.foreignKeyConfigs.map(({ ref, actions }) => {
          return iife(
            (ref2, actions2) => {
              const builder = new ForeignKeyBuilder(() => {
                const foreignColumn = ref2();
                return { columns: [column4], foreignColumns: [foreignColumn] };
              });
              if (actions2.onUpdate) {
                builder.onUpdate(actions2.onUpdate);
              }
              if (actions2.onDelete) {
                builder.onDelete(actions2.onDelete);
              }
              return builder.build(table4);
            },
            ref,
            actions
          );
        });
      }
    };
    _a10 = entityKind;
    __publicField(PgColumnBuilder, _a10, "PgColumnBuilder");
    PgColumn = class extends Column {
      constructor(table4, config) {
        if (!config.uniqueName) {
          config.uniqueName = uniqueKeyName(table4, [config.name]);
        }
        super(table4, config);
        this.table = table4;
      }
    };
    _a11 = entityKind;
    __publicField(PgColumn, _a11, "PgColumn");
    PgArrayBuilder = class extends PgColumnBuilder {
      constructor(name2, baseBuilder, size) {
        super(name2, "array", "PgArray");
        this.config.baseBuilder = baseBuilder;
        this.config.size = size;
      }
      /** @internal */
      build(table4) {
        const baseColumn = this.config.baseBuilder.build(table4);
        return new PgArray(
          table4,
          this.config,
          baseColumn
        );
      }
    };
    _a12 = entityKind;
    __publicField(PgArrayBuilder, _a12, "PgArrayBuilder");
    _PgArray = class _PgArray extends PgColumn {
      constructor(table4, config, baseColumn, range) {
        super(table4, config);
        __publicField(this, "size");
        this.baseColumn = baseColumn;
        this.range = range;
        this.size = config.size;
      }
      getSQLType() {
        return `${this.baseColumn.getSQLType()}[${typeof this.size === "number" ? this.size : ""}]`;
      }
      mapFromDriverValue(value) {
        if (typeof value === "string") {
          value = parsePgArray(value);
        }
        return value.map((v) => this.baseColumn.mapFromDriverValue(v));
      }
      mapToDriverValue(value, isNestedArray = false) {
        const a = value.map(
          (v) => v === null ? null : is(this.baseColumn, _PgArray) ? this.baseColumn.mapToDriverValue(v, true) : this.baseColumn.mapToDriverValue(v)
        );
        if (isNestedArray)
          return a;
        return makePgArray(a);
      }
    };
    _a13 = entityKind;
    __publicField(_PgArray, _a13, "PgArray");
    PgArray = _PgArray;
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/enum.js
function isPgEnum(obj) {
  return !!obj && typeof obj === "function" && isPgEnumSym in obj && obj[isPgEnumSym] === true;
}
function pgEnumWithSchema(enumName, values, schema4) {
  const enumInstance = Object.assign(
    (name2) => new PgEnumColumnBuilder(name2, enumInstance),
    {
      enumName,
      enumValues: values,
      schema: schema4,
      [isPgEnumSym]: true
    }
  );
  return enumInstance;
}
var isPgEnumSym, _a14, PgEnumColumnBuilder, _a15, PgEnumColumn;
var init_enum = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/enum.js"() {
    "use strict";
    init_entity();
    init_common();
    isPgEnumSym = Symbol.for("drizzle:isPgEnum");
    PgEnumColumnBuilder = class extends PgColumnBuilder {
      constructor(name2, enumInstance) {
        super(name2, "string", "PgEnumColumn");
        this.config.enum = enumInstance;
      }
      /** @internal */
      build(table4) {
        return new PgEnumColumn(
          table4,
          this.config
        );
      }
    };
    _a14 = entityKind;
    __publicField(PgEnumColumnBuilder, _a14, "PgEnumColumnBuilder");
    PgEnumColumn = class extends PgColumn {
      constructor(table4, config) {
        super(table4, config);
        __publicField(this, "enum", this.config.enum);
        __publicField(this, "enumValues", this.config.enum.enumValues);
        this.enum = config.enum;
      }
      getSQLType() {
        return this.enum.enumName;
      }
    };
    _a15 = entityKind;
    __publicField(PgEnumColumn, _a15, "PgEnumColumn");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/subquery.js
var _a16, Subquery, _a17, WithSubquery;
var init_subquery = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/subquery.js"() {
    "use strict";
    init_entity();
    Subquery = class {
      constructor(sql2, selection, alias, isWith = false) {
        this._ = {
          brand: "Subquery",
          sql: sql2,
          selectedFields: selection,
          alias,
          isWith
        };
      }
      // getSQL(): SQL<unknown> {
      // 	return new SQL([this]);
      // }
    };
    _a16 = entityKind;
    __publicField(Subquery, _a16, "Subquery");
    WithSubquery = class extends Subquery {
    };
    _a17 = entityKind;
    __publicField(WithSubquery, _a17, "WithSubquery");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/version.js
var version;
var init_version = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/version.js"() {
    "use strict";
    version = "0.30.9-f9be0ab";
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/tracing.js
var otel, rawTracer, tracer;
var init_tracing = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/tracing.js"() {
    "use strict";
    init_tracing_utils();
    init_version();
    tracer = {
      startActiveSpan(name2, fn) {
        if (!otel) {
          return fn();
        }
        if (!rawTracer) {
          rawTracer = otel.trace.getTracer("drizzle-orm", version);
        }
        return iife(
          (otel2, rawTracer2) => rawTracer2.startActiveSpan(
            name2,
            (span) => {
              try {
                return fn(span);
              } catch (e) {
                span.setStatus({
                  code: otel2.SpanStatusCode.ERROR,
                  message: e instanceof Error ? e.message : "Unknown error"
                  // eslint-disable-line no-instanceof/no-instanceof
                });
                throw e;
              } finally {
                span.end();
              }
            }
          ),
          otel,
          rawTracer
        );
      }
    };
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/view-common.js
var ViewBaseConfig;
var init_view_common = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/view-common.js"() {
    "use strict";
    ViewBaseConfig = Symbol.for("drizzle:ViewBaseConfig");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sql/sql.js
function isSQLWrapper(value) {
  return value !== null && value !== void 0 && typeof value.getSQL === "function";
}
function mergeQueries(queries) {
  const result = { sql: "", params: [] };
  for (const query of queries) {
    result.sql += query.sql;
    result.params.push(...query.params);
    if (query.typings?.length) {
      if (!result.typings) {
        result.typings = [];
      }
      result.typings.push(...query.typings);
    }
  }
  return result;
}
function name(value) {
  return new Name(value);
}
function isDriverValueEncoder(value) {
  return typeof value === "object" && value !== null && "mapToDriverValue" in value && typeof value.mapToDriverValue === "function";
}
function param(value, encoder) {
  return new Param(value, encoder);
}
function sql(strings, ...params) {
  const queryChunks = [];
  if (params.length > 0 || strings.length > 0 && strings[0] !== "") {
    queryChunks.push(new StringChunk(strings[0]));
  }
  for (const [paramIndex, param2] of params.entries()) {
    queryChunks.push(param2, new StringChunk(strings[paramIndex + 1]));
  }
  return new SQL(queryChunks);
}
function placeholder(name2) {
  return new Placeholder(name2);
}
function fillPlaceholders(params, values) {
  return params.map((p) => {
    if (is(p, Placeholder)) {
      if (!(p.name in values)) {
        throw new Error(`No value for placeholder "${p.name}" was provided`);
      }
      return values[p.name];
    }
    return p;
  });
}
var _a18, FakePrimitiveParam, _a19, StringChunk, _a20, _SQL, SQL, _a21, Name, noopDecoder, noopEncoder, noopMapper, _a22, Param, _a23, Placeholder, _a24, _b3, View;
var init_sql = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sql/sql.js"() {
    "use strict";
    init_entity();
    init_enum();
    init_subquery();
    init_tracing();
    init_view_common();
    init_column();
    init_table();
    FakePrimitiveParam = class {
    };
    _a18 = entityKind;
    __publicField(FakePrimitiveParam, _a18, "FakePrimitiveParam");
    StringChunk = class {
      constructor(value) {
        __publicField(this, "value");
        this.value = Array.isArray(value) ? value : [value];
      }
      getSQL() {
        return new SQL([this]);
      }
    };
    _a19 = entityKind;
    __publicField(StringChunk, _a19, "StringChunk");
    _SQL = class _SQL {
      constructor(queryChunks) {
        /** @internal */
        __publicField(this, "decoder", noopDecoder);
        __publicField(this, "shouldInlineParams", false);
        this.queryChunks = queryChunks;
      }
      append(query) {
        this.queryChunks.push(...query.queryChunks);
        return this;
      }
      toQuery(config) {
        return tracer.startActiveSpan("drizzle.buildSQL", (span) => {
          const query = this.buildQueryFromSourceParams(this.queryChunks, config);
          span?.setAttributes({
            "drizzle.query.text": query.sql,
            "drizzle.query.params": JSON.stringify(query.params)
          });
          return query;
        });
      }
      buildQueryFromSourceParams(chunks, _config) {
        const config = Object.assign({}, _config, {
          inlineParams: _config.inlineParams || this.shouldInlineParams,
          paramStartIndex: _config.paramStartIndex || { value: 0 }
        });
        const {
          escapeName,
          escapeParam,
          prepareTyping,
          inlineParams,
          paramStartIndex
        } = config;
        return mergeQueries(chunks.map((chunk) => {
          if (is(chunk, StringChunk)) {
            return { sql: chunk.value.join(""), params: [] };
          }
          if (is(chunk, Name)) {
            return { sql: escapeName(chunk.value), params: [] };
          }
          if (chunk === void 0) {
            return { sql: "", params: [] };
          }
          if (Array.isArray(chunk)) {
            const result = [new StringChunk("(")];
            for (const [i, p] of chunk.entries()) {
              result.push(p);
              if (i < chunk.length - 1) {
                result.push(new StringChunk(", "));
              }
            }
            result.push(new StringChunk(")"));
            return this.buildQueryFromSourceParams(result, config);
          }
          if (is(chunk, _SQL)) {
            return this.buildQueryFromSourceParams(chunk.queryChunks, {
              ...config,
              inlineParams: inlineParams || chunk.shouldInlineParams
            });
          }
          if (is(chunk, Table)) {
            const schemaName = chunk[Table.Symbol.Schema];
            const tableName = chunk[Table.Symbol.Name];
            return {
              sql: schemaName === void 0 ? escapeName(tableName) : escapeName(schemaName) + "." + escapeName(tableName),
              params: []
            };
          }
          if (is(chunk, Column)) {
            return { sql: escapeName(chunk.table[Table.Symbol.Name]) + "." + escapeName(chunk.name), params: [] };
          }
          if (is(chunk, View)) {
            const schemaName = chunk[ViewBaseConfig].schema;
            const viewName = chunk[ViewBaseConfig].name;
            return {
              sql: schemaName === void 0 ? escapeName(viewName) : escapeName(schemaName) + "." + escapeName(viewName),
              params: []
            };
          }
          if (is(chunk, Param)) {
            const mappedValue = chunk.value === null ? null : chunk.encoder.mapToDriverValue(chunk.value);
            if (is(mappedValue, _SQL)) {
              return this.buildQueryFromSourceParams([mappedValue], config);
            }
            if (inlineParams) {
              return { sql: this.mapInlineParam(mappedValue, config), params: [] };
            }
            let typings;
            if (prepareTyping !== void 0) {
              typings = [prepareTyping(chunk.encoder)];
            }
            return { sql: escapeParam(paramStartIndex.value++, mappedValue), params: [mappedValue], typings };
          }
          if (is(chunk, Placeholder)) {
            return { sql: escapeParam(paramStartIndex.value++, chunk), params: [chunk] };
          }
          if (is(chunk, _SQL.Aliased) && chunk.fieldAlias !== void 0) {
            return { sql: escapeName(chunk.fieldAlias), params: [] };
          }
          if (is(chunk, Subquery)) {
            if (chunk._.isWith) {
              return { sql: escapeName(chunk._.alias), params: [] };
            }
            return this.buildQueryFromSourceParams([
              new StringChunk("("),
              chunk._.sql,
              new StringChunk(") "),
              new Name(chunk._.alias)
            ], config);
          }
          if (isPgEnum(chunk)) {
            if (chunk.schema) {
              return { sql: escapeName(chunk.schema) + "." + escapeName(chunk.enumName), params: [] };
            }
            return { sql: escapeName(chunk.enumName), params: [] };
          }
          if (isSQLWrapper(chunk)) {
            return this.buildQueryFromSourceParams([
              new StringChunk("("),
              chunk.getSQL(),
              new StringChunk(")")
            ], config);
          }
          if (inlineParams) {
            return { sql: this.mapInlineParam(chunk, config), params: [] };
          }
          return { sql: escapeParam(paramStartIndex.value++, chunk), params: [chunk] };
        }));
      }
      mapInlineParam(chunk, { escapeString }) {
        if (chunk === null) {
          return "null";
        }
        if (typeof chunk === "number" || typeof chunk === "boolean") {
          return chunk.toString();
        }
        if (typeof chunk === "string") {
          return escapeString(chunk);
        }
        if (typeof chunk === "object") {
          const mappedValueAsString = chunk.toString();
          if (mappedValueAsString === "[object Object]") {
            return escapeString(JSON.stringify(chunk));
          }
          return escapeString(mappedValueAsString);
        }
        throw new Error("Unexpected param value: " + chunk);
      }
      getSQL() {
        return this;
      }
      as(alias) {
        if (alias === void 0) {
          return this;
        }
        return new _SQL.Aliased(this, alias);
      }
      mapWith(decoder) {
        this.decoder = typeof decoder === "function" ? { mapFromDriverValue: decoder } : decoder;
        return this;
      }
      inlineParams() {
        this.shouldInlineParams = true;
        return this;
      }
    };
    _a20 = entityKind;
    __publicField(_SQL, _a20, "SQL");
    SQL = _SQL;
    Name = class {
      constructor(value) {
        __publicField(this, "brand");
        this.value = value;
      }
      getSQL() {
        return new SQL([this]);
      }
    };
    _a21 = entityKind;
    __publicField(Name, _a21, "Name");
    noopDecoder = {
      mapFromDriverValue: (value) => value
    };
    noopEncoder = {
      mapToDriverValue: (value) => value
    };
    noopMapper = {
      ...noopDecoder,
      ...noopEncoder
    };
    Param = class {
      /**
       * @param value - Parameter value
       * @param encoder - Encoder to convert the value to a driver parameter
       */
      constructor(value, encoder = noopEncoder) {
        __publicField(this, "brand");
        this.value = value;
        this.encoder = encoder;
      }
      getSQL() {
        return new SQL([this]);
      }
    };
    _a22 = entityKind;
    __publicField(Param, _a22, "Param");
    ((sql2) => {
      function empty() {
        return new SQL([]);
      }
      sql2.empty = empty;
      function fromList(list) {
        return new SQL(list);
      }
      sql2.fromList = fromList;
      function raw(str) {
        return new SQL([new StringChunk(str)]);
      }
      sql2.raw = raw;
      function join(chunks, separator) {
        const result = [];
        for (const [i, chunk] of chunks.entries()) {
          if (i > 0 && separator !== void 0) {
            result.push(separator);
          }
          result.push(chunk);
        }
        return new SQL(result);
      }
      sql2.join = join;
      function identifier(value) {
        return new Name(value);
      }
      sql2.identifier = identifier;
      function placeholder2(name2) {
        return new Placeholder(name2);
      }
      sql2.placeholder = placeholder2;
      function param2(value, encoder) {
        return new Param(value, encoder);
      }
      sql2.param = param2;
    })(sql || (sql = {}));
    ((SQL2) => {
      var _a296;
      const _Aliased = class _Aliased {
        constructor(sql2, fieldAlias) {
          /** @internal */
          __publicField(this, "isSelectionField", false);
          this.sql = sql2;
          this.fieldAlias = fieldAlias;
        }
        getSQL() {
          return this.sql;
        }
        /** @internal */
        clone() {
          return new _Aliased(this.sql, this.fieldAlias);
        }
      };
      _a296 = entityKind;
      __publicField(_Aliased, _a296, "SQL.Aliased");
      let Aliased = _Aliased;
      SQL2.Aliased = Aliased;
    })(SQL || (SQL = {}));
    Placeholder = class {
      constructor(name2) {
        this.name = name2;
      }
      getSQL() {
        return new SQL([this]);
      }
    };
    _a23 = entityKind;
    __publicField(Placeholder, _a23, "Placeholder");
    View = class {
      constructor({ name: name2, schema: schema4, selectedFields, query }) {
        /** @internal */
        __publicField(this, _b3);
        this[ViewBaseConfig] = {
          name: name2,
          originalName: name2,
          schema: schema4,
          selectedFields,
          query,
          isExisting: !query,
          isAlias: false
        };
      }
      getSQL() {
        return new SQL([this]);
      }
    };
    _a24 = entityKind, _b3 = ViewBaseConfig;
    __publicField(View, _a24, "View");
    Column.prototype.getSQL = function() {
      return new SQL([this]);
    };
    Table.prototype.getSQL = function() {
      return new SQL([this]);
    };
    Subquery.prototype.getSQL = function() {
      return new SQL([this]);
    };
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/alias.js
function aliasedTable(table4, tableAlias) {
  return new Proxy(table4, new TableAliasProxyHandler(tableAlias, false));
}
function aliasedRelation(relation, tableAlias) {
  return new Proxy(relation, new RelationTableAliasProxyHandler(tableAlias));
}
function aliasedTableColumn(column4, tableAlias) {
  return new Proxy(
    column4,
    new ColumnAliasProxyHandler(new Proxy(column4.table, new TableAliasProxyHandler(tableAlias, false)))
  );
}
function mapColumnsInAliasedSQLToAlias(query, alias) {
  return new SQL.Aliased(mapColumnsInSQLToAlias(query.sql, alias), query.fieldAlias);
}
function mapColumnsInSQLToAlias(query, alias) {
  return sql.join(query.queryChunks.map((c) => {
    if (is(c, Column)) {
      return aliasedTableColumn(c, alias);
    }
    if (is(c, SQL)) {
      return mapColumnsInSQLToAlias(c, alias);
    }
    if (is(c, SQL.Aliased)) {
      return mapColumnsInAliasedSQLToAlias(c, alias);
    }
    return c;
  }));
}
var _a25, ColumnAliasProxyHandler, _a26, TableAliasProxyHandler, _a27, RelationTableAliasProxyHandler;
var init_alias = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/alias.js"() {
    "use strict";
    init_column();
    init_entity();
    init_sql();
    init_table();
    init_view_common();
    ColumnAliasProxyHandler = class {
      constructor(table4) {
        this.table = table4;
      }
      get(columnObj, prop) {
        if (prop === "table") {
          return this.table;
        }
        return columnObj[prop];
      }
    };
    _a25 = entityKind;
    __publicField(ColumnAliasProxyHandler, _a25, "ColumnAliasProxyHandler");
    TableAliasProxyHandler = class {
      constructor(alias, replaceOriginalName) {
        this.alias = alias;
        this.replaceOriginalName = replaceOriginalName;
      }
      get(target, prop) {
        if (prop === Table.Symbol.IsAlias) {
          return true;
        }
        if (prop === Table.Symbol.Name) {
          return this.alias;
        }
        if (this.replaceOriginalName && prop === Table.Symbol.OriginalName) {
          return this.alias;
        }
        if (prop === ViewBaseConfig) {
          return {
            ...target[ViewBaseConfig],
            name: this.alias,
            isAlias: true
          };
        }
        if (prop === Table.Symbol.Columns) {
          const columns = target[Table.Symbol.Columns];
          if (!columns) {
            return columns;
          }
          const proxiedColumns = {};
          Object.keys(columns).map((key) => {
            proxiedColumns[key] = new Proxy(
              columns[key],
              new ColumnAliasProxyHandler(new Proxy(target, this))
            );
          });
          return proxiedColumns;
        }
        const value = target[prop];
        if (is(value, Column)) {
          return new Proxy(value, new ColumnAliasProxyHandler(new Proxy(target, this)));
        }
        return value;
      }
    };
    _a26 = entityKind;
    __publicField(TableAliasProxyHandler, _a26, "TableAliasProxyHandler");
    RelationTableAliasProxyHandler = class {
      constructor(alias) {
        this.alias = alias;
      }
      get(target, prop) {
        if (prop === "sourceTable") {
          return aliasedTable(target.sourceTable, this.alias);
        }
        return target[prop];
      }
    };
    _a27 = entityKind;
    __publicField(RelationTableAliasProxyHandler, _a27, "RelationTableAliasProxyHandler");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/alias.js
var init_alias2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/alias.js"() {
    "use strict";
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/checks.js
var _a28, CheckBuilder, _a29, Check;
var init_checks = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/checks.js"() {
    "use strict";
    init_entity();
    CheckBuilder = class {
      constructor(name2, value) {
        __publicField(this, "brand");
        this.name = name2;
        this.value = value;
      }
      /** @internal */
      build(table4) {
        return new Check(table4, this);
      }
    };
    _a28 = entityKind;
    __publicField(CheckBuilder, _a28, "PgCheckBuilder");
    Check = class {
      constructor(table4, builder) {
        __publicField(this, "name");
        __publicField(this, "value");
        this.table = table4;
        this.name = builder.name;
        this.value = builder.value;
      }
    };
    _a29 = entityKind;
    __publicField(Check, _a29, "PgCheck");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/bigint.js
var _a30, PgBigInt53Builder, _a31, PgBigInt53, _a32, PgBigInt64Builder, _a33, PgBigInt64;
var init_bigint = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/bigint.js"() {
    "use strict";
    init_entity();
    init_common();
    PgBigInt53Builder = class extends PgColumnBuilder {
      constructor(name2) {
        super(name2, "number", "PgBigInt53");
      }
      /** @internal */
      build(table4) {
        return new PgBigInt53(table4, this.config);
      }
    };
    _a30 = entityKind;
    __publicField(PgBigInt53Builder, _a30, "PgBigInt53Builder");
    PgBigInt53 = class extends PgColumn {
      getSQLType() {
        return "bigint";
      }
      mapFromDriverValue(value) {
        if (typeof value === "number") {
          return value;
        }
        return Number(value);
      }
    };
    _a31 = entityKind;
    __publicField(PgBigInt53, _a31, "PgBigInt53");
    PgBigInt64Builder = class extends PgColumnBuilder {
      constructor(name2) {
        super(name2, "bigint", "PgBigInt64");
      }
      /** @internal */
      build(table4) {
        return new PgBigInt64(
          table4,
          this.config
        );
      }
    };
    _a32 = entityKind;
    __publicField(PgBigInt64Builder, _a32, "PgBigInt64Builder");
    PgBigInt64 = class extends PgColumn {
      getSQLType() {
        return "bigint";
      }
      // eslint-disable-next-line unicorn/prefer-native-coercion-functions
      mapFromDriverValue(value) {
        return BigInt(value);
      }
    };
    _a33 = entityKind;
    __publicField(PgBigInt64, _a33, "PgBigInt64");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/bigserial.js
var _a34, PgBigSerial53Builder, _a35, PgBigSerial53, _a36, PgBigSerial64Builder, _a37, PgBigSerial64;
var init_bigserial = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/bigserial.js"() {
    "use strict";
    init_entity();
    init_common();
    PgBigSerial53Builder = class extends PgColumnBuilder {
      constructor(name2) {
        super(name2, "number", "PgBigSerial53");
        this.config.hasDefault = true;
        this.config.notNull = true;
      }
      /** @internal */
      build(table4) {
        return new PgBigSerial53(
          table4,
          this.config
        );
      }
    };
    _a34 = entityKind;
    __publicField(PgBigSerial53Builder, _a34, "PgBigSerial53Builder");
    PgBigSerial53 = class extends PgColumn {
      getSQLType() {
        return "bigserial";
      }
      mapFromDriverValue(value) {
        if (typeof value === "number") {
          return value;
        }
        return Number(value);
      }
    };
    _a35 = entityKind;
    __publicField(PgBigSerial53, _a35, "PgBigSerial53");
    PgBigSerial64Builder = class extends PgColumnBuilder {
      constructor(name2) {
        super(name2, "bigint", "PgBigSerial64");
        this.config.hasDefault = true;
      }
      /** @internal */
      build(table4) {
        return new PgBigSerial64(
          table4,
          this.config
        );
      }
    };
    _a36 = entityKind;
    __publicField(PgBigSerial64Builder, _a36, "PgBigSerial64Builder");
    PgBigSerial64 = class extends PgColumn {
      getSQLType() {
        return "bigserial";
      }
      // eslint-disable-next-line unicorn/prefer-native-coercion-functions
      mapFromDriverValue(value) {
        return BigInt(value);
      }
    };
    _a37 = entityKind;
    __publicField(PgBigSerial64, _a37, "PgBigSerial64");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/boolean.js
var _a38, PgBooleanBuilder, _a39, PgBoolean;
var init_boolean = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/boolean.js"() {
    "use strict";
    init_entity();
    init_common();
    PgBooleanBuilder = class extends PgColumnBuilder {
      constructor(name2) {
        super(name2, "boolean", "PgBoolean");
      }
      /** @internal */
      build(table4) {
        return new PgBoolean(table4, this.config);
      }
    };
    _a38 = entityKind;
    __publicField(PgBooleanBuilder, _a38, "PgBooleanBuilder");
    PgBoolean = class extends PgColumn {
      getSQLType() {
        return "boolean";
      }
    };
    _a39 = entityKind;
    __publicField(PgBoolean, _a39, "PgBoolean");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/char.js
var _a40, PgCharBuilder, _a41, PgChar;
var init_char = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/char.js"() {
    "use strict";
    init_entity();
    init_common();
    PgCharBuilder = class extends PgColumnBuilder {
      constructor(name2, config) {
        super(name2, "string", "PgChar");
        this.config.length = config.length;
        this.config.enumValues = config.enum;
      }
      /** @internal */
      build(table4) {
        return new PgChar(table4, this.config);
      }
    };
    _a40 = entityKind;
    __publicField(PgCharBuilder, _a40, "PgCharBuilder");
    PgChar = class extends PgColumn {
      constructor() {
        super(...arguments);
        __publicField(this, "length", this.config.length);
        __publicField(this, "enumValues", this.config.enumValues);
      }
      getSQLType() {
        return this.length === void 0 ? `char` : `char(${this.length})`;
      }
    };
    _a41 = entityKind;
    __publicField(PgChar, _a41, "PgChar");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/cidr.js
var _a42, PgCidrBuilder, _a43, PgCidr;
var init_cidr = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/cidr.js"() {
    "use strict";
    init_entity();
    init_common();
    PgCidrBuilder = class extends PgColumnBuilder {
      constructor(name2) {
        super(name2, "string", "PgCidr");
      }
      /** @internal */
      build(table4) {
        return new PgCidr(table4, this.config);
      }
    };
    _a42 = entityKind;
    __publicField(PgCidrBuilder, _a42, "PgCidrBuilder");
    PgCidr = class extends PgColumn {
      getSQLType() {
        return "cidr";
      }
    };
    _a43 = entityKind;
    __publicField(PgCidr, _a43, "PgCidr");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/custom.js
var _a44, PgCustomColumnBuilder, _a45, PgCustomColumn;
var init_custom = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/custom.js"() {
    "use strict";
    init_entity();
    init_common();
    PgCustomColumnBuilder = class extends PgColumnBuilder {
      constructor(name2, fieldConfig, customTypeParams) {
        super(name2, "custom", "PgCustomColumn");
        this.config.fieldConfig = fieldConfig;
        this.config.customTypeParams = customTypeParams;
      }
      /** @internal */
      build(table4) {
        return new PgCustomColumn(
          table4,
          this.config
        );
      }
    };
    _a44 = entityKind;
    __publicField(PgCustomColumnBuilder, _a44, "PgCustomColumnBuilder");
    PgCustomColumn = class extends PgColumn {
      constructor(table4, config) {
        super(table4, config);
        __publicField(this, "sqlName");
        __publicField(this, "mapTo");
        __publicField(this, "mapFrom");
        this.sqlName = config.customTypeParams.dataType(config.fieldConfig);
        this.mapTo = config.customTypeParams.toDriver;
        this.mapFrom = config.customTypeParams.fromDriver;
      }
      getSQLType() {
        return this.sqlName;
      }
      mapFromDriverValue(value) {
        return typeof this.mapFrom === "function" ? this.mapFrom(value) : value;
      }
      mapToDriverValue(value) {
        return typeof this.mapTo === "function" ? this.mapTo(value) : value;
      }
    };
    _a45 = entityKind;
    __publicField(PgCustomColumn, _a45, "PgCustomColumn");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/date.common.js
var _a46, PgDateColumnBaseBuilder;
var init_date_common = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/date.common.js"() {
    "use strict";
    init_entity();
    init_sql();
    init_common();
    PgDateColumnBaseBuilder = class extends PgColumnBuilder {
      defaultNow() {
        return this.default(sql`now()`);
      }
    };
    _a46 = entityKind;
    __publicField(PgDateColumnBaseBuilder, _a46, "PgDateColumnBaseBuilder");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/date.js
var _a47, PgDateBuilder, _a48, PgDate, _a49, PgDateStringBuilder, _a50, PgDateString;
var init_date = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/date.js"() {
    "use strict";
    init_entity();
    init_common();
    init_date_common();
    PgDateBuilder = class extends PgDateColumnBaseBuilder {
      constructor(name2) {
        super(name2, "date", "PgDate");
      }
      /** @internal */
      build(table4) {
        return new PgDate(table4, this.config);
      }
    };
    _a47 = entityKind;
    __publicField(PgDateBuilder, _a47, "PgDateBuilder");
    PgDate = class extends PgColumn {
      getSQLType() {
        return "date";
      }
      mapFromDriverValue(value) {
        return new Date(value);
      }
      mapToDriverValue(value) {
        return value.toISOString();
      }
    };
    _a48 = entityKind;
    __publicField(PgDate, _a48, "PgDate");
    PgDateStringBuilder = class extends PgDateColumnBaseBuilder {
      constructor(name2) {
        super(name2, "string", "PgDateString");
      }
      /** @internal */
      build(table4) {
        return new PgDateString(
          table4,
          this.config
        );
      }
    };
    _a49 = entityKind;
    __publicField(PgDateStringBuilder, _a49, "PgDateStringBuilder");
    PgDateString = class extends PgColumn {
      getSQLType() {
        return "date";
      }
    };
    _a50 = entityKind;
    __publicField(PgDateString, _a50, "PgDateString");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/double-precision.js
var _a51, PgDoublePrecisionBuilder, _a52, PgDoublePrecision;
var init_double_precision = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/double-precision.js"() {
    "use strict";
    init_entity();
    init_common();
    PgDoublePrecisionBuilder = class extends PgColumnBuilder {
      constructor(name2) {
        super(name2, "number", "PgDoublePrecision");
      }
      /** @internal */
      build(table4) {
        return new PgDoublePrecision(
          table4,
          this.config
        );
      }
    };
    _a51 = entityKind;
    __publicField(PgDoublePrecisionBuilder, _a51, "PgDoublePrecisionBuilder");
    PgDoublePrecision = class extends PgColumn {
      getSQLType() {
        return "double precision";
      }
      mapFromDriverValue(value) {
        if (typeof value === "string") {
          return Number.parseFloat(value);
        }
        return value;
      }
    };
    _a52 = entityKind;
    __publicField(PgDoublePrecision, _a52, "PgDoublePrecision");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/inet.js
var _a53, PgInetBuilder, _a54, PgInet;
var init_inet = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/inet.js"() {
    "use strict";
    init_entity();
    init_common();
    PgInetBuilder = class extends PgColumnBuilder {
      constructor(name2) {
        super(name2, "string", "PgInet");
      }
      /** @internal */
      build(table4) {
        return new PgInet(table4, this.config);
      }
    };
    _a53 = entityKind;
    __publicField(PgInetBuilder, _a53, "PgInetBuilder");
    PgInet = class extends PgColumn {
      getSQLType() {
        return "inet";
      }
    };
    _a54 = entityKind;
    __publicField(PgInet, _a54, "PgInet");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/integer.js
var _a55, PgIntegerBuilder, _a56, PgInteger;
var init_integer = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/integer.js"() {
    "use strict";
    init_entity();
    init_common();
    PgIntegerBuilder = class extends PgColumnBuilder {
      constructor(name2) {
        super(name2, "number", "PgInteger");
      }
      /** @internal */
      build(table4) {
        return new PgInteger(table4, this.config);
      }
    };
    _a55 = entityKind;
    __publicField(PgIntegerBuilder, _a55, "PgIntegerBuilder");
    PgInteger = class extends PgColumn {
      getSQLType() {
        return "integer";
      }
      mapFromDriverValue(value) {
        if (typeof value === "string") {
          return Number.parseInt(value);
        }
        return value;
      }
    };
    _a56 = entityKind;
    __publicField(PgInteger, _a56, "PgInteger");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/interval.js
var _a57, PgIntervalBuilder, _a58, PgInterval;
var init_interval = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/interval.js"() {
    "use strict";
    init_entity();
    init_common();
    PgIntervalBuilder = class extends PgColumnBuilder {
      constructor(name2, intervalConfig) {
        super(name2, "string", "PgInterval");
        this.config.intervalConfig = intervalConfig;
      }
      /** @internal */
      build(table4) {
        return new PgInterval(table4, this.config);
      }
    };
    _a57 = entityKind;
    __publicField(PgIntervalBuilder, _a57, "PgIntervalBuilder");
    PgInterval = class extends PgColumn {
      constructor() {
        super(...arguments);
        __publicField(this, "fields", this.config.intervalConfig.fields);
        __publicField(this, "precision", this.config.intervalConfig.precision);
      }
      getSQLType() {
        const fields = this.fields ? ` ${this.fields}` : "";
        const precision = this.precision ? `(${this.precision})` : "";
        return `interval${fields}${precision}`;
      }
    };
    _a58 = entityKind;
    __publicField(PgInterval, _a58, "PgInterval");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/json.js
var _a59, PgJsonBuilder, _a60, PgJson;
var init_json = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/json.js"() {
    "use strict";
    init_entity();
    init_common();
    PgJsonBuilder = class extends PgColumnBuilder {
      constructor(name2) {
        super(name2, "json", "PgJson");
      }
      /** @internal */
      build(table4) {
        return new PgJson(table4, this.config);
      }
    };
    _a59 = entityKind;
    __publicField(PgJsonBuilder, _a59, "PgJsonBuilder");
    PgJson = class extends PgColumn {
      constructor(table4, config) {
        super(table4, config);
      }
      getSQLType() {
        return "json";
      }
      mapToDriverValue(value) {
        return JSON.stringify(value);
      }
      mapFromDriverValue(value) {
        if (typeof value === "string") {
          try {
            return JSON.parse(value);
          } catch {
            return value;
          }
        }
        return value;
      }
    };
    _a60 = entityKind;
    __publicField(PgJson, _a60, "PgJson");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/jsonb.js
var _a61, PgJsonbBuilder, _a62, PgJsonb;
var init_jsonb = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/jsonb.js"() {
    "use strict";
    init_entity();
    init_common();
    PgJsonbBuilder = class extends PgColumnBuilder {
      constructor(name2) {
        super(name2, "json", "PgJsonb");
      }
      /** @internal */
      build(table4) {
        return new PgJsonb(table4, this.config);
      }
    };
    _a61 = entityKind;
    __publicField(PgJsonbBuilder, _a61, "PgJsonbBuilder");
    PgJsonb = class extends PgColumn {
      constructor(table4, config) {
        super(table4, config);
      }
      getSQLType() {
        return "jsonb";
      }
      mapToDriverValue(value) {
        return JSON.stringify(value);
      }
      mapFromDriverValue(value) {
        if (typeof value === "string") {
          try {
            return JSON.parse(value);
          } catch {
            return value;
          }
        }
        return value;
      }
    };
    _a62 = entityKind;
    __publicField(PgJsonb, _a62, "PgJsonb");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/macaddr.js
var _a63, PgMacaddrBuilder, _a64, PgMacaddr;
var init_macaddr = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/macaddr.js"() {
    "use strict";
    init_entity();
    init_common();
    PgMacaddrBuilder = class extends PgColumnBuilder {
      constructor(name2) {
        super(name2, "string", "PgMacaddr");
      }
      /** @internal */
      build(table4) {
        return new PgMacaddr(table4, this.config);
      }
    };
    _a63 = entityKind;
    __publicField(PgMacaddrBuilder, _a63, "PgMacaddrBuilder");
    PgMacaddr = class extends PgColumn {
      getSQLType() {
        return "macaddr";
      }
    };
    _a64 = entityKind;
    __publicField(PgMacaddr, _a64, "PgMacaddr");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/macaddr8.js
var _a65, PgMacaddr8Builder, _a66, PgMacaddr8;
var init_macaddr8 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/macaddr8.js"() {
    "use strict";
    init_entity();
    init_common();
    PgMacaddr8Builder = class extends PgColumnBuilder {
      constructor(name2) {
        super(name2, "string", "PgMacaddr8");
      }
      /** @internal */
      build(table4) {
        return new PgMacaddr8(table4, this.config);
      }
    };
    _a65 = entityKind;
    __publicField(PgMacaddr8Builder, _a65, "PgMacaddr8Builder");
    PgMacaddr8 = class extends PgColumn {
      getSQLType() {
        return "macaddr8";
      }
    };
    _a66 = entityKind;
    __publicField(PgMacaddr8, _a66, "PgMacaddr8");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/numeric.js
var _a67, PgNumericBuilder, _a68, PgNumeric;
var init_numeric = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/numeric.js"() {
    "use strict";
    init_entity();
    init_common();
    PgNumericBuilder = class extends PgColumnBuilder {
      constructor(name2, precision, scale) {
        super(name2, "string", "PgNumeric");
        this.config.precision = precision;
        this.config.scale = scale;
      }
      /** @internal */
      build(table4) {
        return new PgNumeric(table4, this.config);
      }
    };
    _a67 = entityKind;
    __publicField(PgNumericBuilder, _a67, "PgNumericBuilder");
    PgNumeric = class extends PgColumn {
      constructor(table4, config) {
        super(table4, config);
        __publicField(this, "precision");
        __publicField(this, "scale");
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
    };
    _a68 = entityKind;
    __publicField(PgNumeric, _a68, "PgNumeric");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/real.js
var _a69, PgRealBuilder, _a70, PgReal;
var init_real = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/real.js"() {
    "use strict";
    init_entity();
    init_common();
    PgRealBuilder = class extends PgColumnBuilder {
      constructor(name2, length) {
        super(name2, "number", "PgReal");
        this.config.length = length;
      }
      /** @internal */
      build(table4) {
        return new PgReal(table4, this.config);
      }
    };
    _a69 = entityKind;
    __publicField(PgRealBuilder, _a69, "PgRealBuilder");
    PgReal = class extends PgColumn {
      constructor(table4, config) {
        super(table4, config);
        __publicField(this, "mapFromDriverValue", (value) => {
          if (typeof value === "string") {
            return Number.parseFloat(value);
          }
          return value;
        });
      }
      getSQLType() {
        return "real";
      }
    };
    _a70 = entityKind;
    __publicField(PgReal, _a70, "PgReal");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/serial.js
var _a71, PgSerialBuilder, _a72, PgSerial;
var init_serial = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/serial.js"() {
    "use strict";
    init_entity();
    init_common();
    PgSerialBuilder = class extends PgColumnBuilder {
      constructor(name2) {
        super(name2, "number", "PgSerial");
        this.config.hasDefault = true;
        this.config.notNull = true;
      }
      /** @internal */
      build(table4) {
        return new PgSerial(table4, this.config);
      }
    };
    _a71 = entityKind;
    __publicField(PgSerialBuilder, _a71, "PgSerialBuilder");
    PgSerial = class extends PgColumn {
      getSQLType() {
        return "serial";
      }
    };
    _a72 = entityKind;
    __publicField(PgSerial, _a72, "PgSerial");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/smallint.js
var _a73, PgSmallIntBuilder, _a74, PgSmallInt;
var init_smallint = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/smallint.js"() {
    "use strict";
    init_entity();
    init_common();
    PgSmallIntBuilder = class extends PgColumnBuilder {
      constructor(name2) {
        super(name2, "number", "PgSmallInt");
      }
      /** @internal */
      build(table4) {
        return new PgSmallInt(table4, this.config);
      }
    };
    _a73 = entityKind;
    __publicField(PgSmallIntBuilder, _a73, "PgSmallIntBuilder");
    PgSmallInt = class extends PgColumn {
      constructor() {
        super(...arguments);
        __publicField(this, "mapFromDriverValue", (value) => {
          if (typeof value === "string") {
            return Number(value);
          }
          return value;
        });
      }
      getSQLType() {
        return "smallint";
      }
    };
    _a74 = entityKind;
    __publicField(PgSmallInt, _a74, "PgSmallInt");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/smallserial.js
var _a75, PgSmallSerialBuilder, _a76, PgSmallSerial;
var init_smallserial = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/smallserial.js"() {
    "use strict";
    init_entity();
    init_common();
    PgSmallSerialBuilder = class extends PgColumnBuilder {
      constructor(name2) {
        super(name2, "number", "PgSmallSerial");
        this.config.hasDefault = true;
        this.config.notNull = true;
      }
      /** @internal */
      build(table4) {
        return new PgSmallSerial(
          table4,
          this.config
        );
      }
    };
    _a75 = entityKind;
    __publicField(PgSmallSerialBuilder, _a75, "PgSmallSerialBuilder");
    PgSmallSerial = class extends PgColumn {
      getSQLType() {
        return "smallserial";
      }
    };
    _a76 = entityKind;
    __publicField(PgSmallSerial, _a76, "PgSmallSerial");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/text.js
var _a77, PgTextBuilder, _a78, PgText;
var init_text = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/text.js"() {
    "use strict";
    init_entity();
    init_common();
    PgTextBuilder = class extends PgColumnBuilder {
      constructor(name2, config) {
        super(name2, "string", "PgText");
        this.config.enumValues = config.enum;
      }
      /** @internal */
      build(table4) {
        return new PgText(table4, this.config);
      }
    };
    _a77 = entityKind;
    __publicField(PgTextBuilder, _a77, "PgTextBuilder");
    PgText = class extends PgColumn {
      constructor() {
        super(...arguments);
        __publicField(this, "enumValues", this.config.enumValues);
      }
      getSQLType() {
        return "text";
      }
    };
    _a78 = entityKind;
    __publicField(PgText, _a78, "PgText");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/time.js
var _a79, PgTimeBuilder, _a80, PgTime;
var init_time = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/time.js"() {
    "use strict";
    init_entity();
    init_common();
    init_date_common();
    PgTimeBuilder = class extends PgDateColumnBaseBuilder {
      constructor(name2, withTimezone, precision) {
        super(name2, "string", "PgTime");
        this.withTimezone = withTimezone;
        this.precision = precision;
        this.config.withTimezone = withTimezone;
        this.config.precision = precision;
      }
      /** @internal */
      build(table4) {
        return new PgTime(table4, this.config);
      }
    };
    _a79 = entityKind;
    __publicField(PgTimeBuilder, _a79, "PgTimeBuilder");
    PgTime = class extends PgColumn {
      constructor(table4, config) {
        super(table4, config);
        __publicField(this, "withTimezone");
        __publicField(this, "precision");
        this.withTimezone = config.withTimezone;
        this.precision = config.precision;
      }
      getSQLType() {
        const precision = this.precision === void 0 ? "" : `(${this.precision})`;
        return `time${precision}${this.withTimezone ? " with time zone" : ""}`;
      }
    };
    _a80 = entityKind;
    __publicField(PgTime, _a80, "PgTime");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/timestamp.js
var _a81, PgTimestampBuilder, _a82, PgTimestamp, _a83, PgTimestampStringBuilder, _a84, PgTimestampString;
var init_timestamp = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/timestamp.js"() {
    "use strict";
    init_entity();
    init_common();
    init_date_common();
    PgTimestampBuilder = class extends PgDateColumnBaseBuilder {
      constructor(name2, withTimezone, precision) {
        super(name2, "date", "PgTimestamp");
        this.config.withTimezone = withTimezone;
        this.config.precision = precision;
      }
      /** @internal */
      build(table4) {
        return new PgTimestamp(table4, this.config);
      }
    };
    _a81 = entityKind;
    __publicField(PgTimestampBuilder, _a81, "PgTimestampBuilder");
    PgTimestamp = class extends PgColumn {
      constructor(table4, config) {
        super(table4, config);
        __publicField(this, "withTimezone");
        __publicField(this, "precision");
        __publicField(this, "mapFromDriverValue", (value) => {
          return new Date(this.withTimezone ? value : value + "+0000");
        });
        __publicField(this, "mapToDriverValue", (value) => {
          return value.toISOString();
        });
        this.withTimezone = config.withTimezone;
        this.precision = config.precision;
      }
      getSQLType() {
        const precision = this.precision === void 0 ? "" : ` (${this.precision})`;
        return `timestamp${precision}${this.withTimezone ? " with time zone" : ""}`;
      }
    };
    _a82 = entityKind;
    __publicField(PgTimestamp, _a82, "PgTimestamp");
    PgTimestampStringBuilder = class extends PgDateColumnBaseBuilder {
      constructor(name2, withTimezone, precision) {
        super(name2, "string", "PgTimestampString");
        this.config.withTimezone = withTimezone;
        this.config.precision = precision;
      }
      /** @internal */
      build(table4) {
        return new PgTimestampString(
          table4,
          this.config
        );
      }
    };
    _a83 = entityKind;
    __publicField(PgTimestampStringBuilder, _a83, "PgTimestampStringBuilder");
    PgTimestampString = class extends PgColumn {
      constructor(table4, config) {
        super(table4, config);
        __publicField(this, "withTimezone");
        __publicField(this, "precision");
        this.withTimezone = config.withTimezone;
        this.precision = config.precision;
      }
      getSQLType() {
        const precision = this.precision === void 0 ? "" : `(${this.precision})`;
        return `timestamp${precision}${this.withTimezone ? " with time zone" : ""}`;
      }
    };
    _a84 = entityKind;
    __publicField(PgTimestampString, _a84, "PgTimestampString");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/uuid.js
var _a85, PgUUIDBuilder, _a86, PgUUID;
var init_uuid = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/uuid.js"() {
    "use strict";
    init_entity();
    init_sql();
    init_common();
    PgUUIDBuilder = class extends PgColumnBuilder {
      constructor(name2) {
        super(name2, "string", "PgUUID");
      }
      /**
       * Adds `default gen_random_uuid()` to the column definition.
       */
      defaultRandom() {
        return this.default(sql`gen_random_uuid()`);
      }
      /** @internal */
      build(table4) {
        return new PgUUID(table4, this.config);
      }
    };
    _a85 = entityKind;
    __publicField(PgUUIDBuilder, _a85, "PgUUIDBuilder");
    PgUUID = class extends PgColumn {
      getSQLType() {
        return "uuid";
      }
    };
    _a86 = entityKind;
    __publicField(PgUUID, _a86, "PgUUID");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/varchar.js
var _a87, PgVarcharBuilder, _a88, PgVarchar;
var init_varchar = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/varchar.js"() {
    "use strict";
    init_entity();
    init_common();
    PgVarcharBuilder = class extends PgColumnBuilder {
      constructor(name2, config) {
        super(name2, "string", "PgVarchar");
        this.config.length = config.length;
        this.config.enumValues = config.enum;
      }
      /** @internal */
      build(table4) {
        return new PgVarchar(table4, this.config);
      }
    };
    _a87 = entityKind;
    __publicField(PgVarcharBuilder, _a87, "PgVarcharBuilder");
    PgVarchar = class extends PgColumn {
      constructor() {
        super(...arguments);
        __publicField(this, "length", this.config.length);
        __publicField(this, "enumValues", this.config.enumValues);
      }
      getSQLType() {
        return this.length === void 0 ? `varchar` : `varchar(${this.length})`;
      }
    };
    _a88 = entityKind;
    __publicField(PgVarchar, _a88, "PgVarchar");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/index.js
var init_columns = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/columns/index.js"() {
    "use strict";
    init_bigint();
    init_bigserial();
    init_boolean();
    init_char();
    init_cidr();
    init_common();
    init_custom();
    init_date();
    init_double_precision();
    init_enum();
    init_inet();
    init_integer();
    init_interval();
    init_json();
    init_jsonb();
    init_macaddr();
    init_macaddr8();
    init_numeric();
    init_real();
    init_serial();
    init_smallint();
    init_smallserial();
    init_text();
    init_time();
    init_timestamp();
    init_uuid();
    init_varchar();
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/query-promise.js
var _a89, _b4, QueryPromise;
var init_query_promise = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/query-promise.js"() {
    "use strict";
    init_entity();
    QueryPromise = class {
      constructor() {
        __publicField(this, _b4, "QueryPromise");
      }
      catch(onRejected) {
        return this.then(void 0, onRejected);
      }
      finally(onFinally) {
        return this.then(
          (value) => {
            onFinally?.();
            return value;
          },
          (reason) => {
            onFinally?.();
            throw reason;
          }
        );
      }
      then(onFulfilled, onRejected) {
        return this.execute().then(onFulfilled, onRejected);
      }
    };
    _a89 = entityKind, _b4 = Symbol.toStringTag;
    __publicField(QueryPromise, _a89, "QueryPromise");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/utils.js
function mapResultRow(columns, row, joinsNotNullableMap) {
  const nullifyMap = {};
  const result = columns.reduce(
    (result2, { path: path2, field }, columnIndex) => {
      let decoder;
      if (is(field, Column)) {
        decoder = field;
      } else if (is(field, SQL)) {
        decoder = field.decoder;
      } else {
        decoder = field.sql.decoder;
      }
      let node = result2;
      for (const [pathChunkIndex, pathChunk] of path2.entries()) {
        if (pathChunkIndex < path2.length - 1) {
          if (!(pathChunk in node)) {
            node[pathChunk] = {};
          }
          node = node[pathChunk];
        } else {
          const rawValue = row[columnIndex];
          const value = node[pathChunk] = rawValue === null ? null : decoder.mapFromDriverValue(rawValue);
          if (joinsNotNullableMap && is(field, Column) && path2.length === 2) {
            const objectName = path2[0];
            if (!(objectName in nullifyMap)) {
              nullifyMap[objectName] = value === null ? getTableName(field.table) : false;
            } else if (typeof nullifyMap[objectName] === "string" && nullifyMap[objectName] !== getTableName(field.table)) {
              nullifyMap[objectName] = false;
            }
          }
        }
      }
      return result2;
    },
    {}
  );
  if (joinsNotNullableMap && Object.keys(nullifyMap).length > 0) {
    for (const [objectName, tableName] of Object.entries(nullifyMap)) {
      if (typeof tableName === "string" && !joinsNotNullableMap[tableName]) {
        result[objectName] = null;
      }
    }
  }
  return result;
}
function orderSelectedFields(fields, pathPrefix) {
  return Object.entries(fields).reduce((result, [name2, field]) => {
    if (typeof name2 !== "string") {
      return result;
    }
    const newPath = pathPrefix ? [...pathPrefix, name2] : [name2];
    if (is(field, Column) || is(field, SQL) || is(field, SQL.Aliased)) {
      result.push({ path: newPath, field });
    } else if (is(field, Table)) {
      result.push(...orderSelectedFields(field[Table.Symbol.Columns], newPath));
    } else {
      result.push(...orderSelectedFields(field, newPath));
    }
    return result;
  }, []);
}
function haveSameKeys(left, right) {
  const leftKeys = Object.keys(left);
  const rightKeys = Object.keys(right);
  if (leftKeys.length !== rightKeys.length) {
    return false;
  }
  for (const [index4, key] of leftKeys.entries()) {
    if (key !== rightKeys[index4]) {
      return false;
    }
  }
  return true;
}
function mapUpdateSet(table4, values) {
  const entries = Object.entries(values).filter(([, value]) => value !== void 0).map(([key, value]) => {
    if (is(value, SQL)) {
      return [key, value];
    } else {
      return [key, new Param(value, table4[Table.Symbol.Columns][key])];
    }
  });
  if (entries.length === 0) {
    throw new Error("No values to set");
  }
  return Object.fromEntries(entries);
}
function applyMixins(baseClass, extendedClasses) {
  for (const extendedClass of extendedClasses) {
    for (const name2 of Object.getOwnPropertyNames(extendedClass.prototype)) {
      if (name2 === "constructor")
        continue;
      Object.defineProperty(
        baseClass.prototype,
        name2,
        Object.getOwnPropertyDescriptor(extendedClass.prototype, name2) || /* @__PURE__ */ Object.create(null)
      );
    }
  }
}
function getTableColumns(table4) {
  return table4[Table.Symbol.Columns];
}
function getTableLikeName(table4) {
  return is(table4, Subquery) ? table4._.alias : is(table4, View) ? table4[ViewBaseConfig].name : is(table4, SQL) ? void 0 : table4[Table.Symbol.IsAlias] ? table4[Table.Symbol.Name] : table4[Table.Symbol.BaseName];
}
var init_utils = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/utils.js"() {
    "use strict";
    init_column();
    init_entity();
    init_sql();
    init_subquery();
    init_table();
    init_view_common();
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/query-builders/delete.js
var _a90, PgDeleteBase;
var init_delete = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/query-builders/delete.js"() {
    "use strict";
    init_entity();
    init_query_promise();
    init_table();
    init_tracing();
    init_utils();
    PgDeleteBase = class extends QueryPromise {
      constructor(table4, session, dialect7, withList) {
        super();
        __publicField(this, "config");
        __publicField(this, "execute", (placeholderValues) => {
          return tracer.startActiveSpan("drizzle.operation", () => {
            return this._prepare().execute(placeholderValues);
          });
        });
        this.session = session;
        this.dialect = dialect7;
        this.config = { table: table4, withList };
      }
      /**
       * Adds a `where` clause to the query.
       *
       * Calling this method will delete only those rows that fulfill a specified condition.
       *
       * See docs: {@link https://orm.drizzle.team/docs/delete}
       *
       * @param where the `where` clause.
       *
       * @example
       * You can use conditional operators and `sql function` to filter the rows to be deleted.
       *
       * ```ts
       * // Delete all cars with green color
       * await db.delete(cars).where(eq(cars.color, 'green'));
       * // or
       * await db.delete(cars).where(sql`${cars.color} = 'green'`)
       * ```
       *
       * You can logically combine conditional operators with `and()` and `or()` operators:
       *
       * ```ts
       * // Delete all BMW cars with a green color
       * await db.delete(cars).where(and(eq(cars.color, 'green'), eq(cars.brand, 'BMW')));
       *
       * // Delete all cars with the green or blue color
       * await db.delete(cars).where(or(eq(cars.color, 'green'), eq(cars.color, 'blue')));
       * ```
       */
      where(where) {
        this.config.where = where;
        return this;
      }
      returning(fields = this.config.table[Table.Symbol.Columns]) {
        this.config.returning = orderSelectedFields(fields);
        return this;
      }
      /** @internal */
      getSQL() {
        return this.dialect.buildDeleteQuery(this.config);
      }
      toSQL() {
        const { typings: _typings, ...rest } = this.dialect.sqlToQuery(this.getSQL());
        return rest;
      }
      /** @internal */
      _prepare(name2) {
        return tracer.startActiveSpan("drizzle.prepareQuery", () => {
          return this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()), this.config.returning, name2, true);
        });
      }
      prepare(name2) {
        return this._prepare(name2);
      }
      $dynamic() {
        return this;
      }
    };
    _a90 = entityKind;
    __publicField(PgDeleteBase, _a90, "PgDelete");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/query-builders/insert.js
var _a91, PgInsertBuilder, _a92, PgInsertBase;
var init_insert = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/query-builders/insert.js"() {
    "use strict";
    init_entity();
    init_query_promise();
    init_sql();
    init_table();
    init_tracing();
    init_utils();
    PgInsertBuilder = class {
      constructor(table4, session, dialect7, withList) {
        this.table = table4;
        this.session = session;
        this.dialect = dialect7;
        this.withList = withList;
      }
      values(values) {
        values = Array.isArray(values) ? values : [values];
        if (values.length === 0) {
          throw new Error("values() must be called with at least one value");
        }
        const mappedValues = values.map((entry) => {
          const result = {};
          const cols = this.table[Table.Symbol.Columns];
          for (const colKey of Object.keys(entry)) {
            const colValue = entry[colKey];
            result[colKey] = is(colValue, SQL) ? colValue : new Param(colValue, cols[colKey]);
          }
          return result;
        });
        return new PgInsertBase(this.table, mappedValues, this.session, this.dialect, this.withList);
      }
    };
    _a91 = entityKind;
    __publicField(PgInsertBuilder, _a91, "PgInsertBuilder");
    PgInsertBase = class extends QueryPromise {
      constructor(table4, values, session, dialect7, withList) {
        super();
        __publicField(this, "config");
        __publicField(this, "execute", (placeholderValues) => {
          return tracer.startActiveSpan("drizzle.operation", () => {
            return this._prepare().execute(placeholderValues);
          });
        });
        this.session = session;
        this.dialect = dialect7;
        this.config = { table: table4, values, withList };
      }
      returning(fields = this.config.table[Table.Symbol.Columns]) {
        this.config.returning = orderSelectedFields(fields);
        return this;
      }
      /**
       * Adds an `on conflict do nothing` clause to the query.
       *
       * Calling this method simply avoids inserting a row as its alternative action.
       *
       * See docs: {@link https://orm.drizzle.team/docs/insert#on-conflict-do-nothing}
       *
       * @param config The `target` and `where` clauses.
       *
       * @example
       * ```ts
       * // Insert one row and cancel the insert if there's a conflict
       * await db.insert(cars)
       *   .values({ id: 1, brand: 'BMW' })
       *   .onConflictDoNothing();
       *
       * // Explicitly specify conflict target
       * await db.insert(cars)
       *   .values({ id: 1, brand: 'BMW' })
       *   .onConflictDoNothing({ target: cars.id });
       * ```
       */
      onConflictDoNothing(config = {}) {
        if (config.target === void 0) {
          this.config.onConflict = sql`do nothing`;
        } else {
          let targetColumn = "";
          targetColumn = Array.isArray(config.target) ? config.target.map((it) => this.dialect.escapeName(it.name)).join(",") : this.dialect.escapeName(config.target.name);
          const whereSql = config.where ? sql` where ${config.where}` : void 0;
          this.config.onConflict = sql`(${sql.raw(targetColumn)})${whereSql} do nothing`;
        }
        return this;
      }
      /**
       * Adds an `on conflict do update` clause to the query.
       *
       * Calling this method will update the existing row that conflicts with the row proposed for insertion as its alternative action.
       *
       * See docs: {@link https://orm.drizzle.team/docs/insert#upserts-and-conflicts}
       *
       * @param config The `target`, `set` and `where` clauses.
       *
       * @example
       * ```ts
       * // Update the row if there's a conflict
       * await db.insert(cars)
       *   .values({ id: 1, brand: 'BMW' })
       *   .onConflictDoUpdate({
       *     target: cars.id,
       *     set: { brand: 'Porsche' }
       *   });
       *
       * // Upsert with 'where' clause
       * await db.insert(cars)
       *   .values({ id: 1, brand: 'BMW' })
       *   .onConflictDoUpdate({
       *     target: cars.id,
       *     set: { brand: 'newBMW' },
       *     targetWhere: sql`${cars.createdAt} > '2023-01-01'::date`,
       *   });
       * ```
       */
      onConflictDoUpdate(config) {
        if (config.where && (config.targetWhere || config.setWhere)) {
          throw new Error(
            'You cannot use both "where" and "targetWhere"/"setWhere" at the same time - "where" is deprecated, use "targetWhere" or "setWhere" instead.'
          );
        }
        const whereSql = config.where ? sql` where ${config.where}` : void 0;
        const targetWhereSql = config.targetWhere ? sql` where ${config.targetWhere}` : void 0;
        const setWhereSql = config.setWhere ? sql` where ${config.setWhere}` : void 0;
        const setSql = this.dialect.buildUpdateSet(this.config.table, mapUpdateSet(this.config.table, config.set));
        let targetColumn = "";
        targetColumn = Array.isArray(config.target) ? config.target.map((it) => this.dialect.escapeName(it.name)).join(",") : this.dialect.escapeName(config.target.name);
        this.config.onConflict = sql`(${sql.raw(targetColumn)})${targetWhereSql} do update set ${setSql}${whereSql}${setWhereSql}`;
        return this;
      }
      /** @internal */
      getSQL() {
        return this.dialect.buildInsertQuery(this.config);
      }
      toSQL() {
        const { typings: _typings, ...rest } = this.dialect.sqlToQuery(this.getSQL());
        return rest;
      }
      /** @internal */
      _prepare(name2) {
        return tracer.startActiveSpan("drizzle.prepareQuery", () => {
          return this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()), this.config.returning, name2, true);
        });
      }
      prepare(name2) {
        return this._prepare(name2);
      }
      $dynamic() {
        return this;
      }
    };
    _a92 = entityKind;
    __publicField(PgInsertBase, _a92, "PgInsert");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/errors.js
var _a93, DrizzleError, _a94, TransactionRollbackError;
var init_errors = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/errors.js"() {
    "use strict";
    init_entity();
    DrizzleError = class extends Error {
      constructor({ message, cause }) {
        super(message);
        this.name = "DrizzleError";
        this.cause = cause;
      }
    };
    _a93 = entityKind;
    __publicField(DrizzleError, _a93, "DrizzleError");
    TransactionRollbackError = class extends DrizzleError {
      constructor() {
        super({ message: "Rollback" });
      }
    };
    _a94 = entityKind;
    __publicField(TransactionRollbackError, _a94, "TransactionRollbackError");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/primary-keys.js
var _a95, PrimaryKeyBuilder, _a96, PrimaryKey;
var init_primary_keys = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/primary-keys.js"() {
    "use strict";
    init_entity();
    init_table2();
    PrimaryKeyBuilder = class {
      constructor(columns, name2) {
        /** @internal */
        __publicField(this, "columns");
        /** @internal */
        __publicField(this, "name");
        this.columns = columns;
        this.name = name2;
      }
      /** @internal */
      build(table4) {
        return new PrimaryKey(table4, this.columns, this.name);
      }
    };
    _a95 = entityKind;
    __publicField(PrimaryKeyBuilder, _a95, "PgPrimaryKeyBuilder");
    PrimaryKey = class {
      constructor(table4, columns, name2) {
        __publicField(this, "columns");
        __publicField(this, "name");
        this.table = table4;
        this.columns = columns;
        this.name = name2;
      }
      getName() {
        return this.name ?? `${this.table[PgTable.Symbol.Name]}_${this.columns.map((column4) => column4.name).join("_")}_pk`;
      }
    };
    _a96 = entityKind;
    __publicField(PrimaryKey, _a96, "PgPrimaryKey");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sql/expressions/conditions.js
function bindIfParam(value, column4) {
  if (isDriverValueEncoder(column4) && !isSQLWrapper(value) && !is(value, Param) && !is(value, Placeholder) && !is(value, Column) && !is(value, Table) && !is(value, View)) {
    return new Param(value, column4);
  }
  return value;
}
function and(...unfilteredConditions) {
  const conditions = unfilteredConditions.filter(
    (c) => c !== void 0
  );
  if (conditions.length === 0) {
    return void 0;
  }
  if (conditions.length === 1) {
    return new SQL(conditions);
  }
  return new SQL([
    new StringChunk("("),
    sql.join(conditions, new StringChunk(" and ")),
    new StringChunk(")")
  ]);
}
function or(...unfilteredConditions) {
  const conditions = unfilteredConditions.filter(
    (c) => c !== void 0
  );
  if (conditions.length === 0) {
    return void 0;
  }
  if (conditions.length === 1) {
    return new SQL(conditions);
  }
  return new SQL([
    new StringChunk("("),
    sql.join(conditions, new StringChunk(" or ")),
    new StringChunk(")")
  ]);
}
function not(condition) {
  return sql`not ${condition}`;
}
function inArray(column4, values) {
  if (Array.isArray(values)) {
    if (values.length === 0) {
      throw new Error("inArray requires at least one value");
    }
    return sql`${column4} in ${values.map((v) => bindIfParam(v, column4))}`;
  }
  return sql`${column4} in ${bindIfParam(values, column4)}`;
}
function notInArray(column4, values) {
  if (Array.isArray(values)) {
    if (values.length === 0) {
      throw new Error("notInArray requires at least one value");
    }
    return sql`${column4} not in ${values.map((v) => bindIfParam(v, column4))}`;
  }
  return sql`${column4} not in ${bindIfParam(values, column4)}`;
}
function isNull(value) {
  return sql`${value} is null`;
}
function isNotNull(value) {
  return sql`${value} is not null`;
}
function exists(subquery) {
  return sql`exists ${subquery}`;
}
function notExists(subquery) {
  return sql`not exists ${subquery}`;
}
function between(column4, min2, max2) {
  return sql`${column4} between ${bindIfParam(min2, column4)} and ${bindIfParam(
    max2,
    column4
  )}`;
}
function notBetween(column4, min2, max2) {
  return sql`${column4} not between ${bindIfParam(
    min2,
    column4
  )} and ${bindIfParam(max2, column4)}`;
}
function like(column4, value) {
  return sql`${column4} like ${value}`;
}
function notLike(column4, value) {
  return sql`${column4} not like ${value}`;
}
function ilike(column4, value) {
  return sql`${column4} ilike ${value}`;
}
function notIlike(column4, value) {
  return sql`${column4} not ilike ${value}`;
}
function arrayContains(column4, values) {
  if (Array.isArray(values)) {
    if (values.length === 0) {
      throw new Error("arrayContains requires at least one value");
    }
    const array3 = sql`${bindIfParam(values, column4)}`;
    return sql`${column4} @> ${array3}`;
  }
  return sql`${column4} @> ${bindIfParam(values, column4)}`;
}
function arrayContained(column4, values) {
  if (Array.isArray(values)) {
    if (values.length === 0) {
      throw new Error("arrayContained requires at least one value");
    }
    const array3 = sql`${bindIfParam(values, column4)}`;
    return sql`${column4} <@ ${array3}`;
  }
  return sql`${column4} <@ ${bindIfParam(values, column4)}`;
}
function arrayOverlaps(column4, values) {
  if (Array.isArray(values)) {
    if (values.length === 0) {
      throw new Error("arrayOverlaps requires at least one value");
    }
    const array3 = sql`${bindIfParam(values, column4)}`;
    return sql`${column4} && ${array3}`;
  }
  return sql`${column4} && ${bindIfParam(values, column4)}`;
}
var eq, ne, gt, gte, lt, lte;
var init_conditions = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sql/expressions/conditions.js"() {
    "use strict";
    init_column();
    init_entity();
    init_table();
    init_sql();
    eq = (left, right) => {
      return sql`${left} = ${bindIfParam(right, left)}`;
    };
    ne = (left, right) => {
      return sql`${left} <> ${bindIfParam(right, left)}`;
    };
    gt = (left, right) => {
      return sql`${left} > ${bindIfParam(right, left)}`;
    };
    gte = (left, right) => {
      return sql`${left} >= ${bindIfParam(right, left)}`;
    };
    lt = (left, right) => {
      return sql`${left} < ${bindIfParam(right, left)}`;
    };
    lte = (left, right) => {
      return sql`${left} <= ${bindIfParam(right, left)}`;
    };
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sql/expressions/select.js
function asc(column4) {
  return sql`${column4} asc`;
}
function desc(column4) {
  return sql`${column4} desc`;
}
var init_select = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sql/expressions/select.js"() {
    "use strict";
    init_sql();
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sql/expressions/index.js
var init_expressions = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sql/expressions/index.js"() {
    "use strict";
    init_conditions();
    init_select();
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/relations.js
function getOperators() {
  return {
    and,
    between,
    eq,
    exists,
    gt,
    gte,
    ilike,
    inArray,
    isNull,
    isNotNull,
    like,
    lt,
    lte,
    ne,
    not,
    notBetween,
    notExists,
    notLike,
    notIlike,
    notInArray,
    or,
    sql
  };
}
function getOrderByOperators() {
  return {
    sql,
    asc,
    desc
  };
}
function extractTablesRelationalConfig(schema4, configHelpers) {
  if (Object.keys(schema4).length === 1 && "default" in schema4 && !is(schema4["default"], Table)) {
    schema4 = schema4["default"];
  }
  const tableNamesMap = {};
  const relationsBuffer = {};
  const tablesConfig = {};
  for (const [key, value] of Object.entries(schema4)) {
    if (isTable(value)) {
      const dbName = value[Table.Symbol.Name];
      const bufferedRelations = relationsBuffer[dbName];
      tableNamesMap[dbName] = key;
      tablesConfig[key] = {
        tsName: key,
        dbName: value[Table.Symbol.Name],
        schema: value[Table.Symbol.Schema],
        columns: value[Table.Symbol.Columns],
        relations: bufferedRelations?.relations ?? {},
        primaryKey: bufferedRelations?.primaryKey ?? []
      };
      for (const column4 of Object.values(
        value[Table.Symbol.Columns]
      )) {
        if (column4.primary) {
          tablesConfig[key].primaryKey.push(column4);
        }
      }
      const extraConfig = value[Table.Symbol.ExtraConfigBuilder]?.(value);
      if (extraConfig) {
        for (const configEntry of Object.values(extraConfig)) {
          if (is(configEntry, PrimaryKeyBuilder)) {
            tablesConfig[key].primaryKey.push(...configEntry.columns);
          }
        }
      }
    } else if (is(value, Relations)) {
      const dbName = value.table[Table.Symbol.Name];
      const tableName = tableNamesMap[dbName];
      const relations2 = value.config(
        configHelpers(value.table)
      );
      let primaryKey;
      for (const [relationName, relation] of Object.entries(relations2)) {
        if (tableName) {
          const tableConfig = tablesConfig[tableName];
          tableConfig.relations[relationName] = relation;
          if (primaryKey) {
            tableConfig.primaryKey.push(...primaryKey);
          }
        } else {
          if (!(dbName in relationsBuffer)) {
            relationsBuffer[dbName] = {
              relations: {},
              primaryKey
            };
          }
          relationsBuffer[dbName].relations[relationName] = relation;
        }
      }
    }
  }
  return { tables: tablesConfig, tableNamesMap };
}
function relations(table4, relations2) {
  return new Relations(
    table4,
    (helpers) => Object.fromEntries(
      Object.entries(relations2(helpers)).map(([key, value]) => [
        key,
        value.withFieldName(key)
      ])
    )
  );
}
function createOne(sourceTable) {
  return function one(table4, config) {
    return new One(
      sourceTable,
      table4,
      config,
      config?.fields.reduce((res, f) => res && f.notNull, true) ?? false
    );
  };
}
function createMany(sourceTable) {
  return function many(referencedTable, config) {
    return new Many(sourceTable, referencedTable, config);
  };
}
function normalizeRelation(schema4, tableNamesMap, relation) {
  if (is(relation, One) && relation.config) {
    return {
      fields: relation.config.fields,
      references: relation.config.references
    };
  }
  const referencedTableTsName = tableNamesMap[relation.referencedTable[Table.Symbol.Name]];
  if (!referencedTableTsName) {
    throw new Error(
      `Table "${relation.referencedTable[Table.Symbol.Name]}" not found in schema`
    );
  }
  const referencedTableConfig = schema4[referencedTableTsName];
  if (!referencedTableConfig) {
    throw new Error(`Table "${referencedTableTsName}" not found in schema`);
  }
  const sourceTable = relation.sourceTable;
  const sourceTableTsName = tableNamesMap[sourceTable[Table.Symbol.Name]];
  if (!sourceTableTsName) {
    throw new Error(
      `Table "${sourceTable[Table.Symbol.Name]}" not found in schema`
    );
  }
  const reverseRelations = [];
  for (const referencedTableRelation of Object.values(
    referencedTableConfig.relations
  )) {
    if (relation.relationName && relation !== referencedTableRelation && referencedTableRelation.relationName === relation.relationName || !relation.relationName && referencedTableRelation.referencedTable === relation.sourceTable) {
      reverseRelations.push(referencedTableRelation);
    }
  }
  if (reverseRelations.length > 1) {
    throw relation.relationName ? new Error(
      `There are multiple relations with name "${relation.relationName}" in table "${referencedTableTsName}"`
    ) : new Error(
      `There are multiple relations between "${referencedTableTsName}" and "${relation.sourceTable[Table.Symbol.Name]}". Please specify relation name`
    );
  }
  if (reverseRelations[0] && is(reverseRelations[0], One) && reverseRelations[0].config) {
    return {
      fields: reverseRelations[0].config.references,
      references: reverseRelations[0].config.fields
    };
  }
  throw new Error(
    `There is not enough information to infer relation "${sourceTableTsName}.${relation.fieldName}"`
  );
}
function createTableRelationsHelpers(sourceTable) {
  return {
    one: createOne(sourceTable),
    many: createMany(sourceTable)
  };
}
function mapRelationalRow(tablesConfig, tableConfig, row, buildQueryResultSelection, mapColumnValue = (value) => value) {
  const result = {};
  for (const [
    selectionItemIndex,
    selectionItem
  ] of buildQueryResultSelection.entries()) {
    if (selectionItem.isJson) {
      const relation = tableConfig.relations[selectionItem.tsKey];
      const rawSubRows = row[selectionItemIndex];
      const subRows = typeof rawSubRows === "string" ? JSON.parse(rawSubRows) : rawSubRows;
      result[selectionItem.tsKey] = is(relation, One) ? subRows && mapRelationalRow(
        tablesConfig,
        tablesConfig[selectionItem.relationTableTsKey],
        subRows,
        selectionItem.selection,
        mapColumnValue
      ) : subRows.map(
        (subRow) => mapRelationalRow(
          tablesConfig,
          tablesConfig[selectionItem.relationTableTsKey],
          subRow,
          selectionItem.selection,
          mapColumnValue
        )
      );
    } else {
      const value = mapColumnValue(row[selectionItemIndex]);
      const field = selectionItem.field;
      let decoder;
      if (is(field, Column)) {
        decoder = field;
      } else if (is(field, SQL)) {
        decoder = field.decoder;
      } else {
        decoder = field.sql.decoder;
      }
      result[selectionItem.tsKey] = value === null ? null : decoder.mapFromDriverValue(value);
    }
  }
  return result;
}
var _a97, Relation, _a98, Relations, _a99, _One, One, _a100, _Many, Many;
var init_relations = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/relations.js"() {
    "use strict";
    init_table();
    init_column();
    init_entity();
    init_primary_keys();
    init_expressions();
    init_sql();
    Relation = class {
      constructor(sourceTable, referencedTable, relationName) {
        __publicField(this, "referencedTableName");
        __publicField(this, "fieldName");
        this.sourceTable = sourceTable;
        this.referencedTable = referencedTable;
        this.relationName = relationName;
        this.referencedTableName = referencedTable[Table.Symbol.Name];
      }
    };
    _a97 = entityKind;
    __publicField(Relation, _a97, "Relation");
    Relations = class {
      constructor(table4, config) {
        this.table = table4;
        this.config = config;
      }
    };
    _a98 = entityKind;
    __publicField(Relations, _a98, "Relations");
    _One = class _One extends Relation {
      constructor(sourceTable, referencedTable, config, isNullable) {
        super(sourceTable, referencedTable, config?.relationName);
        this.config = config;
        this.isNullable = isNullable;
      }
      withFieldName(fieldName) {
        const relation = new _One(
          this.sourceTable,
          this.referencedTable,
          this.config,
          this.isNullable
        );
        relation.fieldName = fieldName;
        return relation;
      }
    };
    _a99 = entityKind;
    __publicField(_One, _a99, "One");
    One = _One;
    _Many = class _Many extends Relation {
      constructor(sourceTable, referencedTable, config) {
        super(sourceTable, referencedTable, config?.relationName);
        this.config = config;
      }
      withFieldName(fieldName) {
        const relation = new _Many(
          this.sourceTable,
          this.referencedTable,
          this.config
        );
        relation.fieldName = fieldName;
        return relation;
      }
    };
    _a100 = entityKind;
    __publicField(_Many, _a100, "Many");
    Many = _Many;
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sql/functions/aggregate.js
function count(expression) {
  return sql`count(${expression || sql.raw("*")})`.mapWith(Number);
}
function countDistinct(expression) {
  return sql`count(distinct ${expression})`.mapWith(Number);
}
function avg(expression) {
  return sql`avg(${expression})`.mapWith(String);
}
function avgDistinct(expression) {
  return sql`avg(distinct ${expression})`.mapWith(String);
}
function sum(expression) {
  return sql`sum(${expression})`.mapWith(String);
}
function sumDistinct(expression) {
  return sql`sum(distinct ${expression})`.mapWith(String);
}
function max(expression) {
  return sql`max(${expression})`.mapWith(is(expression, Column) ? expression : String);
}
function min(expression) {
  return sql`min(${expression})`.mapWith(is(expression, Column) ? expression : String);
}
var init_aggregate = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sql/functions/aggregate.js"() {
    "use strict";
    init_column();
    init_entity();
    init_sql();
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sql/functions/index.js
var init_functions = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sql/functions/index.js"() {
    "use strict";
    init_aggregate();
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sql/index.js
var init_sql2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sql/index.js"() {
    "use strict";
    init_expressions();
    init_functions();
    init_sql();
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/view-base.js
var _a101, PgViewBase;
var init_view_base = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/view-base.js"() {
    "use strict";
    init_entity();
    init_sql();
    PgViewBase = class extends View {
    };
    _a101 = entityKind;
    __publicField(PgViewBase, _a101, "PgViewBase");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/dialect.js
var _a102, PgDialect;
var init_dialect = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/dialect.js"() {
    "use strict";
    init_alias();
    init_column();
    init_entity();
    init_errors();
    init_columns();
    init_table2();
    init_relations();
    init_sql2();
    init_sql();
    init_subquery();
    init_table();
    init_utils();
    init_view_common();
    init_view_base();
    PgDialect = class {
      async migrate(migrations, session, config) {
        const migrationsTable = typeof config === "string" ? "__drizzle_migrations" : config.migrationsTable ?? "__drizzle_migrations";
        const migrationsSchema = typeof config === "string" ? "drizzle" : config.migrationsSchema ?? "drizzle";
        const migrationTableCreate = sql`
			CREATE TABLE IF NOT EXISTS ${sql.identifier(migrationsSchema)}.${sql.identifier(migrationsTable)} (
				id SERIAL PRIMARY KEY,
				hash text NOT NULL,
				created_at bigint
			)
		`;
        await session.execute(sql`CREATE SCHEMA IF NOT EXISTS ${sql.identifier(migrationsSchema)}`);
        await session.execute(migrationTableCreate);
        const dbMigrations = await session.all(
          sql`select id, hash, created_at from ${sql.identifier(migrationsSchema)}.${sql.identifier(migrationsTable)} order by created_at desc limit 1`
        );
        const lastDbMigration = dbMigrations[0];
        await session.transaction(async (tx) => {
          for await (const migration of migrations) {
            if (!lastDbMigration || Number(lastDbMigration.created_at) < migration.folderMillis) {
              for (const stmt of migration.sql) {
                await tx.execute(sql.raw(stmt));
              }
              await tx.execute(
                sql`insert into ${sql.identifier(migrationsSchema)}.${sql.identifier(migrationsTable)} ("hash", "created_at") values(${migration.hash}, ${migration.folderMillis})`
              );
            }
          }
        });
      }
      escapeName(name2) {
        return `"${name2}"`;
      }
      escapeParam(num) {
        return `$${num + 1}`;
      }
      escapeString(str) {
        return `'${str.replace(/'/g, "''")}'`;
      }
      buildWithCTE(queries) {
        if (!queries?.length)
          return void 0;
        const withSqlChunks = [sql`with `];
        for (const [i, w] of queries.entries()) {
          withSqlChunks.push(sql`${sql.identifier(w._.alias)} as (${w._.sql})`);
          if (i < queries.length - 1) {
            withSqlChunks.push(sql`, `);
          }
        }
        withSqlChunks.push(sql` `);
        return sql.join(withSqlChunks);
      }
      buildDeleteQuery({ table: table4, where, returning, withList }) {
        const withSql = this.buildWithCTE(withList);
        const returningSql = returning ? sql` returning ${this.buildSelection(returning, { isSingleTable: true })}` : void 0;
        const whereSql = where ? sql` where ${where}` : void 0;
        return sql`${withSql}delete from ${table4}${whereSql}${returningSql}`;
      }
      buildUpdateSet(table4, set) {
        const tableColumns = table4[Table.Symbol.Columns];
        const columnNames = Object.keys(tableColumns).filter(
          (colName) => set[colName] !== void 0 || tableColumns[colName]?.onUpdateFn !== void 0
        );
        const setSize = columnNames.length;
        return sql.join(columnNames.flatMap((colName, i) => {
          const col = tableColumns[colName];
          const value = set[colName] ?? sql.param(col.onUpdateFn(), col);
          const res = sql`${sql.identifier(col.name)} = ${value}`;
          if (i < setSize - 1) {
            return [res, sql.raw(", ")];
          }
          return [res];
        }));
      }
      buildUpdateQuery({ table: table4, set, where, returning, withList }) {
        const withSql = this.buildWithCTE(withList);
        const setSql = this.buildUpdateSet(table4, set);
        const returningSql = returning ? sql` returning ${this.buildSelection(returning, { isSingleTable: true })}` : void 0;
        const whereSql = where ? sql` where ${where}` : void 0;
        return sql`${withSql}update ${table4} set ${setSql}${whereSql}${returningSql}`;
      }
      /**
       * Builds selection SQL with provided fields/expressions
       *
       * Examples:
       *
       * `select <selection> from`
       *
       * `insert ... returning <selection>`
       *
       * If `isSingleTable` is true, then columns won't be prefixed with table name
       */
      buildSelection(fields, { isSingleTable = false } = {}) {
        const columnsLen = fields.length;
        const chunks = fields.flatMap(({ field }, i) => {
          const chunk = [];
          if (is(field, SQL.Aliased) && field.isSelectionField) {
            chunk.push(sql.identifier(field.fieldAlias));
          } else if (is(field, SQL.Aliased) || is(field, SQL)) {
            const query = is(field, SQL.Aliased) ? field.sql : field;
            if (isSingleTable) {
              chunk.push(
                new SQL(
                  query.queryChunks.map((c) => {
                    if (is(c, PgColumn)) {
                      return sql.identifier(c.name);
                    }
                    return c;
                  })
                )
              );
            } else {
              chunk.push(query);
            }
            if (is(field, SQL.Aliased)) {
              chunk.push(sql` as ${sql.identifier(field.fieldAlias)}`);
            }
          } else if (is(field, Column)) {
            if (isSingleTable) {
              chunk.push(sql.identifier(field.name));
            } else {
              chunk.push(field);
            }
          }
          if (i < columnsLen - 1) {
            chunk.push(sql`, `);
          }
          return chunk;
        });
        return sql.join(chunks);
      }
      buildSelectQuery({
        withList,
        fields,
        fieldsFlat,
        where,
        having,
        table: table4,
        joins,
        orderBy,
        groupBy,
        limit,
        offset,
        lockingClause,
        distinct,
        setOperators
      }) {
        const fieldsList = fieldsFlat ?? orderSelectedFields(fields);
        for (const f of fieldsList) {
          if (is(f.field, Column) && getTableName(f.field.table) !== (is(table4, Subquery) ? table4._.alias : is(table4, PgViewBase) ? table4[ViewBaseConfig].name : is(table4, SQL) ? void 0 : getTableName(table4)) && !((table22) => joins?.some(
            ({ alias }) => alias === (table22[Table.Symbol.IsAlias] ? getTableName(table22) : table22[Table.Symbol.BaseName])
          ))(f.field.table)) {
            const tableName = getTableName(f.field.table);
            throw new Error(
              `Your "${f.path.join("->")}" field references a column "${tableName}"."${f.field.name}", but the table "${tableName}" is not part of the query! Did you forget to join it?`
            );
          }
        }
        const isSingleTable = !joins || joins.length === 0;
        const withSql = this.buildWithCTE(withList);
        let distinctSql;
        if (distinct) {
          distinctSql = distinct === true ? sql` distinct` : sql` distinct on (${sql.join(distinct.on, sql`, `)})`;
        }
        const selection = this.buildSelection(fieldsList, { isSingleTable });
        const tableSql = (() => {
          if (is(table4, Table) && table4[Table.Symbol.OriginalName] !== table4[Table.Symbol.Name]) {
            let fullName = sql`${sql.identifier(table4[Table.Symbol.OriginalName])}`;
            if (table4[Table.Symbol.Schema]) {
              fullName = sql`${sql.identifier(table4[Table.Symbol.Schema])}.${fullName}`;
            }
            return sql`${fullName} ${sql.identifier(table4[Table.Symbol.Name])}`;
          }
          return table4;
        })();
        const joinsArray = [];
        if (joins) {
          for (const [index4, joinMeta] of joins.entries()) {
            if (index4 === 0) {
              joinsArray.push(sql` `);
            }
            const table22 = joinMeta.table;
            const lateralSql = joinMeta.lateral ? sql` lateral` : void 0;
            if (is(table22, PgTable)) {
              const tableName = table22[PgTable.Symbol.Name];
              const tableSchema = table22[PgTable.Symbol.Schema];
              const origTableName = table22[PgTable.Symbol.OriginalName];
              const alias = tableName === origTableName ? void 0 : joinMeta.alias;
              joinsArray.push(
                sql`${sql.raw(joinMeta.joinType)} join${lateralSql} ${tableSchema ? sql`${sql.identifier(tableSchema)}.` : void 0}${sql.identifier(origTableName)}${alias && sql` ${sql.identifier(alias)}`} on ${joinMeta.on}`
              );
            } else if (is(table22, View)) {
              const viewName = table22[ViewBaseConfig].name;
              const viewSchema = table22[ViewBaseConfig].schema;
              const origViewName = table22[ViewBaseConfig].originalName;
              const alias = viewName === origViewName ? void 0 : joinMeta.alias;
              joinsArray.push(
                sql`${sql.raw(joinMeta.joinType)} join${lateralSql} ${viewSchema ? sql`${sql.identifier(viewSchema)}.` : void 0}${sql.identifier(origViewName)}${alias && sql` ${sql.identifier(alias)}`} on ${joinMeta.on}`
              );
            } else {
              joinsArray.push(
                sql`${sql.raw(joinMeta.joinType)} join${lateralSql} ${table22} on ${joinMeta.on}`
              );
            }
            if (index4 < joins.length - 1) {
              joinsArray.push(sql` `);
            }
          }
        }
        const joinsSql = sql.join(joinsArray);
        const whereSql = where ? sql` where ${where}` : void 0;
        const havingSql = having ? sql` having ${having}` : void 0;
        let orderBySql;
        if (orderBy && orderBy.length > 0) {
          orderBySql = sql` order by ${sql.join(orderBy, sql`, `)}`;
        }
        let groupBySql;
        if (groupBy && groupBy.length > 0) {
          groupBySql = sql` group by ${sql.join(groupBy, sql`, `)}`;
        }
        const limitSql = limit ? sql` limit ${limit}` : void 0;
        const offsetSql = offset ? sql` offset ${offset}` : void 0;
        const lockingClauseSql = sql.empty();
        if (lockingClause) {
          const clauseSql = sql` for ${sql.raw(lockingClause.strength)}`;
          if (lockingClause.config.of) {
            clauseSql.append(
              sql` of ${sql.join(
                Array.isArray(lockingClause.config.of) ? lockingClause.config.of : [lockingClause.config.of],
                sql`, `
              )}`
            );
          }
          if (lockingClause.config.noWait) {
            clauseSql.append(sql` no wait`);
          } else if (lockingClause.config.skipLocked) {
            clauseSql.append(sql` skip locked`);
          }
          lockingClauseSql.append(clauseSql);
        }
        const finalQuery = sql`${withSql}select${distinctSql} ${selection} from ${tableSql}${joinsSql}${whereSql}${groupBySql}${havingSql}${orderBySql}${limitSql}${offsetSql}${lockingClauseSql}`;
        if (setOperators.length > 0) {
          return this.buildSetOperations(finalQuery, setOperators);
        }
        return finalQuery;
      }
      buildSetOperations(leftSelect, setOperators) {
        const [setOperator, ...rest] = setOperators;
        if (!setOperator) {
          throw new Error("Cannot pass undefined values to any set operator");
        }
        if (rest.length === 0) {
          return this.buildSetOperationQuery({ leftSelect, setOperator });
        }
        return this.buildSetOperations(
          this.buildSetOperationQuery({ leftSelect, setOperator }),
          rest
        );
      }
      buildSetOperationQuery({
        leftSelect,
        setOperator: { type, isAll, rightSelect, limit, orderBy, offset }
      }) {
        const leftChunk = sql`(${leftSelect.getSQL()}) `;
        const rightChunk = sql`(${rightSelect.getSQL()})`;
        let orderBySql;
        if (orderBy && orderBy.length > 0) {
          const orderByValues = [];
          for (const singleOrderBy of orderBy) {
            if (is(singleOrderBy, PgColumn)) {
              orderByValues.push(sql.identifier(singleOrderBy.name));
            } else if (is(singleOrderBy, SQL)) {
              for (let i = 0; i < singleOrderBy.queryChunks.length; i++) {
                const chunk = singleOrderBy.queryChunks[i];
                if (is(chunk, PgColumn)) {
                  singleOrderBy.queryChunks[i] = sql.identifier(chunk.name);
                }
              }
              orderByValues.push(sql`${singleOrderBy}`);
            } else {
              orderByValues.push(sql`${singleOrderBy}`);
            }
          }
          orderBySql = sql` order by ${sql.join(orderByValues, sql`, `)} `;
        }
        const limitSql = limit ? sql` limit ${limit}` : void 0;
        const operatorChunk = sql.raw(`${type} ${isAll ? "all " : ""}`);
        const offsetSql = offset ? sql` offset ${offset}` : void 0;
        return sql`${leftChunk}${operatorChunk}${rightChunk}${orderBySql}${limitSql}${offsetSql}`;
      }
      buildInsertQuery({ table: table4, values, onConflict, returning, withList }) {
        const valuesSqlList = [];
        const columns = table4[Table.Symbol.Columns];
        const colEntries = Object.entries(columns);
        const insertOrder = colEntries.map(([, column4]) => sql.identifier(column4.name));
        for (const [valueIndex, value] of values.entries()) {
          const valueList = [];
          for (const [fieldName, col] of colEntries) {
            const colValue = value[fieldName];
            if (colValue === void 0 || is(colValue, Param) && colValue.value === void 0) {
              if (col.defaultFn !== void 0) {
                const defaultFnResult = col.defaultFn();
                const defaultValue = is(defaultFnResult, SQL) ? defaultFnResult : sql.param(defaultFnResult, col);
                valueList.push(defaultValue);
              } else if (!col.default && col.onUpdateFn !== void 0) {
                const onUpdateFnResult = col.onUpdateFn();
                const newValue = is(onUpdateFnResult, SQL) ? onUpdateFnResult : sql.param(onUpdateFnResult, col);
                valueList.push(newValue);
              } else {
                valueList.push(sql`default`);
              }
            } else {
              valueList.push(colValue);
            }
          }
          valuesSqlList.push(valueList);
          if (valueIndex < values.length - 1) {
            valuesSqlList.push(sql`, `);
          }
        }
        const withSql = this.buildWithCTE(withList);
        const valuesSql = sql.join(valuesSqlList);
        const returningSql = returning ? sql` returning ${this.buildSelection(returning, { isSingleTable: true })}` : void 0;
        const onConflictSql = onConflict ? sql` on conflict ${onConflict}` : void 0;
        return sql`${withSql}insert into ${table4} ${insertOrder} values ${valuesSql}${onConflictSql}${returningSql}`;
      }
      buildRefreshMaterializedViewQuery({ view, concurrently, withNoData }) {
        const concurrentlySql = concurrently ? sql` concurrently` : void 0;
        const withNoDataSql = withNoData ? sql` with no data` : void 0;
        return sql`refresh materialized view${concurrentlySql} ${view}${withNoDataSql}`;
      }
      prepareTyping(encoder) {
        if (is(encoder, PgJsonb) || is(encoder, PgJson)) {
          return "json";
        } else if (is(encoder, PgNumeric)) {
          return "decimal";
        } else if (is(encoder, PgTime)) {
          return "time";
        } else if (is(encoder, PgTimestamp) || is(encoder, PgTimestampString)) {
          return "timestamp";
        } else if (is(encoder, PgDate) || is(encoder, PgDateString)) {
          return "date";
        } else if (is(encoder, PgUUID)) {
          return "uuid";
        } else {
          return "none";
        }
      }
      sqlToQuery(sql2) {
        return sql2.toQuery({
          escapeName: this.escapeName,
          escapeParam: this.escapeParam,
          escapeString: this.escapeString,
          prepareTyping: this.prepareTyping
        });
      }
      // buildRelationalQueryWithPK({
      // 	fullSchema,
      // 	schema,
      // 	tableNamesMap,
      // 	table,
      // 	tableConfig,
      // 	queryConfig: config,
      // 	tableAlias,
      // 	isRoot = false,
      // 	joinOn,
      // }: {
      // 	fullSchema: Record<string, unknown>;
      // 	schema: TablesRelationalConfig;
      // 	tableNamesMap: Record<string, string>;
      // 	table: PgTable;
      // 	tableConfig: TableRelationalConfig;
      // 	queryConfig: true | DBQueryConfig<'many', true>;
      // 	tableAlias: string;
      // 	isRoot?: boolean;
      // 	joinOn?: SQL;
      // }): BuildRelationalQueryResult<PgTable, PgColumn> {
      // 	// For { "<relation>": true }, return a table with selection of all columns
      // 	if (config === true) {
      // 		const selectionEntries = Object.entries(tableConfig.columns);
      // 		const selection: BuildRelationalQueryResult<PgTable, PgColumn>['selection'] = selectionEntries.map((
      // 			[key, value],
      // 		) => ({
      // 			dbKey: value.name,
      // 			tsKey: key,
      // 			field: value as PgColumn,
      // 			relationTableTsKey: undefined,
      // 			isJson: false,
      // 			selection: [],
      // 		}));
      // 		return {
      // 			tableTsKey: tableConfig.tsName,
      // 			sql: table,
      // 			selection,
      // 		};
      // 	}
      // 	// let selection: BuildRelationalQueryResult<PgTable, PgColumn>['selection'] = [];
      // 	// let selectionForBuild = selection;
      // 	const aliasedColumns = Object.fromEntries(
      // 		Object.entries(tableConfig.columns).map(([key, value]) => [key, aliasedTableColumn(value, tableAlias)]),
      // 	);
      // 	const aliasedRelations = Object.fromEntries(
      // 		Object.entries(tableConfig.relations).map(([key, value]) => [key, aliasedRelation(value, tableAlias)]),
      // 	);
      // 	const aliasedFields = Object.assign({}, aliasedColumns, aliasedRelations);
      // 	let where, hasUserDefinedWhere;
      // 	if (config.where) {
      // 		const whereSql = typeof config.where === 'function' ? config.where(aliasedFields, operators) : config.where;
      // 		where = whereSql && mapColumnsInSQLToAlias(whereSql, tableAlias);
      // 		hasUserDefinedWhere = !!where;
      // 	}
      // 	where = and(joinOn, where);
      // 	// const fieldsSelection: { tsKey: string; value: PgColumn | SQL.Aliased; isExtra?: boolean }[] = [];
      // 	let joins: Join[] = [];
      // 	let selectedColumns: string[] = [];
      // 	// Figure out which columns to select
      // 	if (config.columns) {
      // 		let isIncludeMode = false;
      // 		for (const [field, value] of Object.entries(config.columns)) {
      // 			if (value === undefined) {
      // 				continue;
      // 			}
      // 			if (field in tableConfig.columns) {
      // 				if (!isIncludeMode && value === true) {
      // 					isIncludeMode = true;
      // 				}
      // 				selectedColumns.push(field);
      // 			}
      // 		}
      // 		if (selectedColumns.length > 0) {
      // 			selectedColumns = isIncludeMode
      // 				? selectedColumns.filter((c) => config.columns?.[c] === true)
      // 				: Object.keys(tableConfig.columns).filter((key) => !selectedColumns.includes(key));
      // 		}
      // 	} else {
      // 		// Select all columns if selection is not specified
      // 		selectedColumns = Object.keys(tableConfig.columns);
      // 	}
      // 	// for (const field of selectedColumns) {
      // 	// 	const column = tableConfig.columns[field]! as PgColumn;
      // 	// 	fieldsSelection.push({ tsKey: field, value: column });
      // 	// }
      // 	let initiallySelectedRelations: {
      // 		tsKey: string;
      // 		queryConfig: true | DBQueryConfig<'many', false>;
      // 		relation: Relation;
      // 	}[] = [];
      // 	// let selectedRelations: BuildRelationalQueryResult<PgTable, PgColumn>['selection'] = [];
      // 	// Figure out which relations to select
      // 	if (config.with) {
      // 		initiallySelectedRelations = Object.entries(config.with)
      // 			.filter((entry): entry is [typeof entry[0], NonNullable<typeof entry[1]>] => !!entry[1])
      // 			.map(([tsKey, queryConfig]) => ({ tsKey, queryConfig, relation: tableConfig.relations[tsKey]! }));
      // 	}
      // 	const manyRelations = initiallySelectedRelations.filter((r) =>
      // 		is(r.relation, Many)
      // 		&& (schema[tableNamesMap[r.relation.referencedTable[Table.Symbol.Name]]!]?.primaryKey.length ?? 0) > 0
      // 	);
      // 	// If this is the last Many relation (or there are no Many relations), we are on the innermost subquery level
      // 	const isInnermostQuery = manyRelations.length < 2;
      // 	const selectedExtras: {
      // 		tsKey: string;
      // 		value: SQL.Aliased;
      // 	}[] = [];
      // 	// Figure out which extras to select
      // 	if (isInnermostQuery && config.extras) {
      // 		const extras = typeof config.extras === 'function'
      // 			? config.extras(aliasedFields, { sql })
      // 			: config.extras;
      // 		for (const [tsKey, value] of Object.entries(extras)) {
      // 			selectedExtras.push({
      // 				tsKey,
      // 				value: mapColumnsInAliasedSQLToAlias(value, tableAlias),
      // 			});
      // 		}
      // 	}
      // 	// Transform `fieldsSelection` into `selection`
      // 	// `fieldsSelection` shouldn't be used after this point
      // 	// for (const { tsKey, value, isExtra } of fieldsSelection) {
      // 	// 	selection.push({
      // 	// 		dbKey: is(value, SQL.Aliased) ? value.fieldAlias : tableConfig.columns[tsKey]!.name,
      // 	// 		tsKey,
      // 	// 		field: is(value, Column) ? aliasedTableColumn(value, tableAlias) : value,
      // 	// 		relationTableTsKey: undefined,
      // 	// 		isJson: false,
      // 	// 		isExtra,
      // 	// 		selection: [],
      // 	// 	});
      // 	// }
      // 	let orderByOrig = typeof config.orderBy === 'function'
      // 		? config.orderBy(aliasedFields, orderByOperators)
      // 		: config.orderBy ?? [];
      // 	if (!Array.isArray(orderByOrig)) {
      // 		orderByOrig = [orderByOrig];
      // 	}
      // 	const orderBy = orderByOrig.map((orderByValue) => {
      // 		if (is(orderByValue, Column)) {
      // 			return aliasedTableColumn(orderByValue, tableAlias) as PgColumn;
      // 		}
      // 		return mapColumnsInSQLToAlias(orderByValue, tableAlias);
      // 	});
      // 	const limit = isInnermostQuery ? config.limit : undefined;
      // 	const offset = isInnermostQuery ? config.offset : undefined;
      // 	// For non-root queries without additional config except columns, return a table with selection
      // 	if (
      // 		!isRoot
      // 		&& initiallySelectedRelations.length === 0
      // 		&& selectedExtras.length === 0
      // 		&& !where
      // 		&& orderBy.length === 0
      // 		&& limit === undefined
      // 		&& offset === undefined
      // 	) {
      // 		return {
      // 			tableTsKey: tableConfig.tsName,
      // 			sql: table,
      // 			selection: selectedColumns.map((key) => ({
      // 				dbKey: tableConfig.columns[key]!.name,
      // 				tsKey: key,
      // 				field: tableConfig.columns[key] as PgColumn,
      // 				relationTableTsKey: undefined,
      // 				isJson: false,
      // 				selection: [],
      // 			})),
      // 		};
      // 	}
      // 	const selectedRelationsWithoutPK:
      // 	// Process all relations without primary keys, because they need to be joined differently and will all be on the same query level
      // 	for (
      // 		const {
      // 			tsKey: selectedRelationTsKey,
      // 			queryConfig: selectedRelationConfigValue,
      // 			relation,
      // 		} of initiallySelectedRelations
      // 	) {
      // 		const normalizedRelation = normalizeRelation(schema, tableNamesMap, relation);
      // 		const relationTableName = relation.referencedTable[Table.Symbol.Name];
      // 		const relationTableTsName = tableNamesMap[relationTableName]!;
      // 		const relationTable = schema[relationTableTsName]!;
      // 		if (relationTable.primaryKey.length > 0) {
      // 			continue;
      // 		}
      // 		const relationTableAlias = `${tableAlias}_${selectedRelationTsKey}`;
      // 		const joinOn = and(
      // 			...normalizedRelation.fields.map((field, i) =>
      // 				eq(
      // 					aliasedTableColumn(normalizedRelation.references[i]!, relationTableAlias),
      // 					aliasedTableColumn(field, tableAlias),
      // 				)
      // 			),
      // 		);
      // 		const builtRelation = this.buildRelationalQueryWithoutPK({
      // 			fullSchema,
      // 			schema,
      // 			tableNamesMap,
      // 			table: fullSchema[relationTableTsName] as PgTable,
      // 			tableConfig: schema[relationTableTsName]!,
      // 			queryConfig: selectedRelationConfigValue,
      // 			tableAlias: relationTableAlias,
      // 			joinOn,
      // 			nestedQueryRelation: relation,
      // 		});
      // 		const field = sql`${sql.identifier(relationTableAlias)}.${sql.identifier('data')}`.as(selectedRelationTsKey);
      // 		joins.push({
      // 			on: sql`true`,
      // 			table: new Subquery(builtRelation.sql as SQL, {}, relationTableAlias),
      // 			alias: relationTableAlias,
      // 			joinType: 'left',
      // 			lateral: true,
      // 		});
      // 		selectedRelations.push({
      // 			dbKey: selectedRelationTsKey,
      // 			tsKey: selectedRelationTsKey,
      // 			field,
      // 			relationTableTsKey: relationTableTsName,
      // 			isJson: true,
      // 			selection: builtRelation.selection,
      // 		});
      // 	}
      // 	const oneRelations = initiallySelectedRelations.filter((r): r is typeof r & { relation: One } =>
      // 		is(r.relation, One)
      // 	);
      // 	// Process all One relations with PKs, because they can all be joined on the same level
      // 	for (
      // 		const {
      // 			tsKey: selectedRelationTsKey,
      // 			queryConfig: selectedRelationConfigValue,
      // 			relation,
      // 		} of oneRelations
      // 	) {
      // 		const normalizedRelation = normalizeRelation(schema, tableNamesMap, relation);
      // 		const relationTableName = relation.referencedTable[Table.Symbol.Name];
      // 		const relationTableTsName = tableNamesMap[relationTableName]!;
      // 		const relationTableAlias = `${tableAlias}_${selectedRelationTsKey}`;
      // 		const relationTable = schema[relationTableTsName]!;
      // 		if (relationTable.primaryKey.length === 0) {
      // 			continue;
      // 		}
      // 		const joinOn = and(
      // 			...normalizedRelation.fields.map((field, i) =>
      // 				eq(
      // 					aliasedTableColumn(normalizedRelation.references[i]!, relationTableAlias),
      // 					aliasedTableColumn(field, tableAlias),
      // 				)
      // 			),
      // 		);
      // 		const builtRelation = this.buildRelationalQueryWithPK({
      // 			fullSchema,
      // 			schema,
      // 			tableNamesMap,
      // 			table: fullSchema[relationTableTsName] as PgTable,
      // 			tableConfig: schema[relationTableTsName]!,
      // 			queryConfig: selectedRelationConfigValue,
      // 			tableAlias: relationTableAlias,
      // 			joinOn,
      // 		});
      // 		const field = sql`case when ${sql.identifier(relationTableAlias)} is null then null else json_build_array(${
      // 			sql.join(
      // 				builtRelation.selection.map(({ field }) =>
      // 					is(field, SQL.Aliased)
      // 						? sql`${sql.identifier(relationTableAlias)}.${sql.identifier(field.fieldAlias)}`
      // 						: is(field, Column)
      // 						? aliasedTableColumn(field, relationTableAlias)
      // 						: field
      // 				),
      // 				sql`, `,
      // 			)
      // 		}) end`.as(selectedRelationTsKey);
      // 		const isLateralJoin = is(builtRelation.sql, SQL);
      // 		joins.push({
      // 			on: isLateralJoin ? sql`true` : joinOn,
      // 			table: is(builtRelation.sql, SQL)
      // 				? new Subquery(builtRelation.sql, {}, relationTableAlias)
      // 				: aliasedTable(builtRelation.sql, relationTableAlias),
      // 			alias: relationTableAlias,
      // 			joinType: 'left',
      // 			lateral: is(builtRelation.sql, SQL),
      // 		});
      // 		selectedRelations.push({
      // 			dbKey: selectedRelationTsKey,
      // 			tsKey: selectedRelationTsKey,
      // 			field,
      // 			relationTableTsKey: relationTableTsName,
      // 			isJson: true,
      // 			selection: builtRelation.selection,
      // 		});
      // 	}
      // 	let distinct: PgSelectConfig['distinct'];
      // 	let tableFrom: PgTable | Subquery = table;
      // 	// Process first Many relation - each one requires a nested subquery
      // 	const manyRelation = manyRelations[0];
      // 	if (manyRelation) {
      // 		const {
      // 			tsKey: selectedRelationTsKey,
      // 			queryConfig: selectedRelationQueryConfig,
      // 			relation,
      // 		} = manyRelation;
      // 		distinct = {
      // 			on: tableConfig.primaryKey.map((c) => aliasedTableColumn(c as PgColumn, tableAlias)),
      // 		};
      // 		const normalizedRelation = normalizeRelation(schema, tableNamesMap, relation);
      // 		const relationTableName = relation.referencedTable[Table.Symbol.Name];
      // 		const relationTableTsName = tableNamesMap[relationTableName]!;
      // 		const relationTableAlias = `${tableAlias}_${selectedRelationTsKey}`;
      // 		const joinOn = and(
      // 			...normalizedRelation.fields.map((field, i) =>
      // 				eq(
      // 					aliasedTableColumn(normalizedRelation.references[i]!, relationTableAlias),
      // 					aliasedTableColumn(field, tableAlias),
      // 				)
      // 			),
      // 		);
      // 		const builtRelationJoin = this.buildRelationalQueryWithPK({
      // 			fullSchema,
      // 			schema,
      // 			tableNamesMap,
      // 			table: fullSchema[relationTableTsName] as PgTable,
      // 			tableConfig: schema[relationTableTsName]!,
      // 			queryConfig: selectedRelationQueryConfig,
      // 			tableAlias: relationTableAlias,
      // 			joinOn,
      // 		});
      // 		const builtRelationSelectionField = sql`case when ${
      // 			sql.identifier(relationTableAlias)
      // 		} is null then '[]' else json_agg(json_build_array(${
      // 			sql.join(
      // 				builtRelationJoin.selection.map(({ field }) =>
      // 					is(field, SQL.Aliased)
      // 						? sql`${sql.identifier(relationTableAlias)}.${sql.identifier(field.fieldAlias)}`
      // 						: is(field, Column)
      // 						? aliasedTableColumn(field, relationTableAlias)
      // 						: field
      // 				),
      // 				sql`, `,
      // 			)
      // 		})) over (partition by ${sql.join(distinct.on, sql`, `)}) end`.as(selectedRelationTsKey);
      // 		const isLateralJoin = is(builtRelationJoin.sql, SQL);
      // 		joins.push({
      // 			on: isLateralJoin ? sql`true` : joinOn,
      // 			table: isLateralJoin
      // 				? new Subquery(builtRelationJoin.sql as SQL, {}, relationTableAlias)
      // 				: aliasedTable(builtRelationJoin.sql as PgTable, relationTableAlias),
      // 			alias: relationTableAlias,
      // 			joinType: 'left',
      // 			lateral: isLateralJoin,
      // 		});
      // 		// Build the "from" subquery with the remaining Many relations
      // 		const builtTableFrom = this.buildRelationalQueryWithPK({
      // 			fullSchema,
      // 			schema,
      // 			tableNamesMap,
      // 			table,
      // 			tableConfig,
      // 			queryConfig: {
      // 				...config,
      // 				where: undefined,
      // 				orderBy: undefined,
      // 				limit: undefined,
      // 				offset: undefined,
      // 				with: manyRelations.slice(1).reduce<NonNullable<typeof config['with']>>(
      // 					(result, { tsKey, queryConfig: configValue }) => {
      // 						result[tsKey] = configValue;
      // 						return result;
      // 					},
      // 					{},
      // 				),
      // 			},
      // 			tableAlias,
      // 		});
      // 		selectedRelations.push({
      // 			dbKey: selectedRelationTsKey,
      // 			tsKey: selectedRelationTsKey,
      // 			field: builtRelationSelectionField,
      // 			relationTableTsKey: relationTableTsName,
      // 			isJson: true,
      // 			selection: builtRelationJoin.selection,
      // 		});
      // 		// selection = builtTableFrom.selection.map((item) =>
      // 		// 	is(item.field, SQL.Aliased)
      // 		// 		? { ...item, field: sql`${sql.identifier(tableAlias)}.${sql.identifier(item.field.fieldAlias)}` }
      // 		// 		: item
      // 		// );
      // 		// selectionForBuild = [{
      // 		// 	dbKey: '*',
      // 		// 	tsKey: '*',
      // 		// 	field: sql`${sql.identifier(tableAlias)}.*`,
      // 		// 	selection: [],
      // 		// 	isJson: false,
      // 		// 	relationTableTsKey: undefined,
      // 		// }];
      // 		// const newSelectionItem: (typeof selection)[number] = {
      // 		// 	dbKey: selectedRelationTsKey,
      // 		// 	tsKey: selectedRelationTsKey,
      // 		// 	field,
      // 		// 	relationTableTsKey: relationTableTsName,
      // 		// 	isJson: true,
      // 		// 	selection: builtRelationJoin.selection,
      // 		// };
      // 		// selection.push(newSelectionItem);
      // 		// selectionForBuild.push(newSelectionItem);
      // 		tableFrom = is(builtTableFrom.sql, PgTable)
      // 			? builtTableFrom.sql
      // 			: new Subquery(builtTableFrom.sql, {}, tableAlias);
      // 	}
      // 	if (selectedColumns.length === 0 && selectedRelations.length === 0 && selectedExtras.length === 0) {
      // 		throw new DrizzleError(`No fields selected for table "${tableConfig.tsName}" ("${tableAlias}")`);
      // 	}
      // 	let selection: BuildRelationalQueryResult<PgTable, PgColumn>['selection'];
      // 	function prepareSelectedColumns() {
      // 		return selectedColumns.map((key) => ({
      // 			dbKey: tableConfig.columns[key]!.name,
      // 			tsKey: key,
      // 			field: tableConfig.columns[key] as PgColumn,
      // 			relationTableTsKey: undefined,
      // 			isJson: false,
      // 			selection: [],
      // 		}));
      // 	}
      // 	function prepareSelectedExtras() {
      // 		return selectedExtras.map((item) => ({
      // 			dbKey: item.value.fieldAlias,
      // 			tsKey: item.tsKey,
      // 			field: item.value,
      // 			relationTableTsKey: undefined,
      // 			isJson: false,
      // 			selection: [],
      // 		}));
      // 	}
      // 	if (isRoot) {
      // 		selection = [
      // 			...prepareSelectedColumns(),
      // 			...prepareSelectedExtras(),
      // 		];
      // 	}
      // 	if (hasUserDefinedWhere || orderBy.length > 0) {
      // 		tableFrom = new Subquery(
      // 			this.buildSelectQuery({
      // 				table: is(tableFrom, PgTable) ? aliasedTable(tableFrom, tableAlias) : tableFrom,
      // 				fields: {},
      // 				fieldsFlat: selectionForBuild.map(({ field }) => ({
      // 					path: [],
      // 					field: is(field, Column) ? aliasedTableColumn(field, tableAlias) : field,
      // 				})),
      // 				joins,
      // 				distinct,
      // 			}),
      // 			{},
      // 			tableAlias,
      // 		);
      // 		selectionForBuild = selection.map((item) =>
      // 			is(item.field, SQL.Aliased)
      // 				? { ...item, field: sql`${sql.identifier(tableAlias)}.${sql.identifier(item.field.fieldAlias)}` }
      // 				: item
      // 		);
      // 		joins = [];
      // 		distinct = undefined;
      // 	}
      // 	const result = this.buildSelectQuery({
      // 		table: is(tableFrom, PgTable) ? aliasedTable(tableFrom, tableAlias) : tableFrom,
      // 		fields: {},
      // 		fieldsFlat: selectionForBuild.map(({ field }) => ({
      // 			path: [],
      // 			field: is(field, Column) ? aliasedTableColumn(field, tableAlias) : field,
      // 		})),
      // 		where,
      // 		limit,
      // 		offset,
      // 		joins,
      // 		orderBy,
      // 		distinct,
      // 	});
      // 	return {
      // 		tableTsKey: tableConfig.tsName,
      // 		sql: result,
      // 		selection,
      // 	};
      // }
      buildRelationalQueryWithoutPK({
        fullSchema,
        schema: schema4,
        tableNamesMap,
        table: table4,
        tableConfig,
        queryConfig: config,
        tableAlias,
        nestedQueryRelation,
        joinOn
      }) {
        let selection = [];
        let limit, offset, orderBy = [], where;
        const joins = [];
        if (config === true) {
          const selectionEntries = Object.entries(tableConfig.columns);
          selection = selectionEntries.map(([key, value]) => ({
            dbKey: value.name,
            tsKey: key,
            field: aliasedTableColumn(value, tableAlias),
            relationTableTsKey: void 0,
            isJson: false,
            selection: []
          }));
        } else {
          const aliasedColumns = Object.fromEntries(
            Object.entries(tableConfig.columns).map(([key, value]) => [key, aliasedTableColumn(value, tableAlias)])
          );
          if (config.where) {
            const whereSql = typeof config.where === "function" ? config.where(aliasedColumns, getOperators()) : config.where;
            where = whereSql && mapColumnsInSQLToAlias(whereSql, tableAlias);
          }
          const fieldsSelection = [];
          let selectedColumns = [];
          if (config.columns) {
            let isIncludeMode = false;
            for (const [field, value] of Object.entries(config.columns)) {
              if (value === void 0) {
                continue;
              }
              if (field in tableConfig.columns) {
                if (!isIncludeMode && value === true) {
                  isIncludeMode = true;
                }
                selectedColumns.push(field);
              }
            }
            if (selectedColumns.length > 0) {
              selectedColumns = isIncludeMode ? selectedColumns.filter((c) => config.columns?.[c] === true) : Object.keys(tableConfig.columns).filter((key) => !selectedColumns.includes(key));
            }
          } else {
            selectedColumns = Object.keys(tableConfig.columns);
          }
          for (const field of selectedColumns) {
            const column4 = tableConfig.columns[field];
            fieldsSelection.push({ tsKey: field, value: column4 });
          }
          let selectedRelations = [];
          if (config.with) {
            selectedRelations = Object.entries(config.with).filter((entry) => !!entry[1]).map(([tsKey, queryConfig]) => ({ tsKey, queryConfig, relation: tableConfig.relations[tsKey] }));
          }
          let extras;
          if (config.extras) {
            extras = typeof config.extras === "function" ? config.extras(aliasedColumns, { sql }) : config.extras;
            for (const [tsKey, value] of Object.entries(extras)) {
              fieldsSelection.push({
                tsKey,
                value: mapColumnsInAliasedSQLToAlias(value, tableAlias)
              });
            }
          }
          for (const { tsKey, value } of fieldsSelection) {
            selection.push({
              dbKey: is(value, SQL.Aliased) ? value.fieldAlias : tableConfig.columns[tsKey].name,
              tsKey,
              field: is(value, Column) ? aliasedTableColumn(value, tableAlias) : value,
              relationTableTsKey: void 0,
              isJson: false,
              selection: []
            });
          }
          let orderByOrig = typeof config.orderBy === "function" ? config.orderBy(aliasedColumns, getOrderByOperators()) : config.orderBy ?? [];
          if (!Array.isArray(orderByOrig)) {
            orderByOrig = [orderByOrig];
          }
          orderBy = orderByOrig.map((orderByValue) => {
            if (is(orderByValue, Column)) {
              return aliasedTableColumn(orderByValue, tableAlias);
            }
            return mapColumnsInSQLToAlias(orderByValue, tableAlias);
          });
          limit = config.limit;
          offset = config.offset;
          for (const {
            tsKey: selectedRelationTsKey,
            queryConfig: selectedRelationConfigValue,
            relation
          } of selectedRelations) {
            const normalizedRelation = normalizeRelation(schema4, tableNamesMap, relation);
            const relationTableName = relation.referencedTable[Table.Symbol.Name];
            const relationTableTsName = tableNamesMap[relationTableName];
            const relationTableAlias = `${tableAlias}_${selectedRelationTsKey}`;
            const joinOn2 = and(
              ...normalizedRelation.fields.map(
                (field2, i) => eq(
                  aliasedTableColumn(normalizedRelation.references[i], relationTableAlias),
                  aliasedTableColumn(field2, tableAlias)
                )
              )
            );
            const builtRelation = this.buildRelationalQueryWithoutPK({
              fullSchema,
              schema: schema4,
              tableNamesMap,
              table: fullSchema[relationTableTsName],
              tableConfig: schema4[relationTableTsName],
              queryConfig: is(relation, One) ? selectedRelationConfigValue === true ? { limit: 1 } : { ...selectedRelationConfigValue, limit: 1 } : selectedRelationConfigValue,
              tableAlias: relationTableAlias,
              joinOn: joinOn2,
              nestedQueryRelation: relation
            });
            const field = sql`${sql.identifier(relationTableAlias)}.${sql.identifier("data")}`.as(selectedRelationTsKey);
            joins.push({
              on: sql`true`,
              table: new Subquery(builtRelation.sql, {}, relationTableAlias),
              alias: relationTableAlias,
              joinType: "left",
              lateral: true
            });
            selection.push({
              dbKey: selectedRelationTsKey,
              tsKey: selectedRelationTsKey,
              field,
              relationTableTsKey: relationTableTsName,
              isJson: true,
              selection: builtRelation.selection
            });
          }
        }
        if (selection.length === 0) {
          throw new DrizzleError({ message: `No fields selected for table "${tableConfig.tsName}" ("${tableAlias}")` });
        }
        let result;
        where = and(joinOn, where);
        if (nestedQueryRelation) {
          let field = sql`json_build_array(${sql.join(
            selection.map(
              ({ field: field2, tsKey, isJson }) => isJson ? sql`${sql.identifier(`${tableAlias}_${tsKey}`)}.${sql.identifier("data")}` : is(field2, SQL.Aliased) ? field2.sql : field2
            ),
            sql`, `
          )})`;
          if (is(nestedQueryRelation, Many)) {
            field = sql`coalesce(json_agg(${field}${orderBy.length > 0 ? sql` order by ${sql.join(orderBy, sql`, `)}` : void 0}), '[]'::json)`;
          }
          const nestedSelection = [{
            dbKey: "data",
            tsKey: "data",
            field: field.as("data"),
            isJson: true,
            relationTableTsKey: tableConfig.tsName,
            selection
          }];
          const needsSubquery = limit !== void 0 || offset !== void 0 || orderBy.length > 0;
          if (needsSubquery) {
            result = this.buildSelectQuery({
              table: aliasedTable(table4, tableAlias),
              fields: {},
              fieldsFlat: [{
                path: [],
                field: sql.raw("*")
              }],
              where,
              limit,
              offset,
              orderBy,
              setOperators: []
            });
            where = void 0;
            limit = void 0;
            offset = void 0;
            orderBy = [];
          } else {
            result = aliasedTable(table4, tableAlias);
          }
          result = this.buildSelectQuery({
            table: is(result, PgTable) ? result : new Subquery(result, {}, tableAlias),
            fields: {},
            fieldsFlat: nestedSelection.map(({ field: field2 }) => ({
              path: [],
              field: is(field2, Column) ? aliasedTableColumn(field2, tableAlias) : field2
            })),
            joins,
            where,
            limit,
            offset,
            orderBy,
            setOperators: []
          });
        } else {
          result = this.buildSelectQuery({
            table: aliasedTable(table4, tableAlias),
            fields: {},
            fieldsFlat: selection.map(({ field }) => ({
              path: [],
              field: is(field, Column) ? aliasedTableColumn(field, tableAlias) : field
            })),
            joins,
            where,
            limit,
            offset,
            orderBy,
            setOperators: []
          });
        }
        return {
          tableTsKey: tableConfig.tsName,
          sql: result,
          selection
        };
      }
    };
    _a102 = entityKind;
    __publicField(PgDialect, _a102, "PgDialect");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/selection-proxy.js
var _a103, _SelectionProxyHandler, SelectionProxyHandler;
var init_selection_proxy = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/selection-proxy.js"() {
    "use strict";
    init_alias();
    init_column();
    init_entity();
    init_sql();
    init_subquery();
    init_view_common();
    _SelectionProxyHandler = class _SelectionProxyHandler {
      constructor(config) {
        __publicField(this, "config");
        this.config = { ...config };
      }
      get(subquery, prop) {
        if (prop === "_") {
          return {
            ...subquery["_"],
            selectedFields: new Proxy(
              subquery._.selectedFields,
              this
            )
          };
        }
        if (prop === ViewBaseConfig) {
          return {
            ...subquery[ViewBaseConfig],
            selectedFields: new Proxy(
              subquery[ViewBaseConfig].selectedFields,
              this
            )
          };
        }
        if (typeof prop === "symbol") {
          return subquery[prop];
        }
        const columns = is(subquery, Subquery) ? subquery._.selectedFields : is(subquery, View) ? subquery[ViewBaseConfig].selectedFields : subquery;
        const value = columns[prop];
        if (is(value, SQL.Aliased)) {
          if (this.config.sqlAliasedBehavior === "sql" && !value.isSelectionField) {
            return value.sql;
          }
          const newValue = value.clone();
          newValue.isSelectionField = true;
          return newValue;
        }
        if (is(value, SQL)) {
          if (this.config.sqlBehavior === "sql") {
            return value;
          }
          throw new Error(
            `You tried to reference "${prop}" field from a subquery, which is a raw SQL field, but it doesn't have an alias declared. Please add an alias to the field using ".as('alias')" method.`
          );
        }
        if (is(value, Column)) {
          if (this.config.alias) {
            return new Proxy(
              value,
              new ColumnAliasProxyHandler(
                new Proxy(
                  value.table,
                  new TableAliasProxyHandler(this.config.alias, this.config.replaceOriginalName ?? false)
                )
              )
            );
          }
          return value;
        }
        if (typeof value !== "object" || value === null) {
          return value;
        }
        return new Proxy(value, new _SelectionProxyHandler(this.config));
      }
    };
    _a103 = entityKind;
    __publicField(_SelectionProxyHandler, _a103, "SelectionProxyHandler");
    SelectionProxyHandler = _SelectionProxyHandler;
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/query-builders/query-builder.js
var _a104, TypedQueryBuilder;
var init_query_builder = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/query-builders/query-builder.js"() {
    "use strict";
    init_entity();
    TypedQueryBuilder = class {
      /** @internal */
      getSelectedFields() {
        return this._.selectedFields;
      }
    };
    _a104 = entityKind;
    __publicField(TypedQueryBuilder, _a104, "TypedQueryBuilder");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/query-builders/select.js
function createSetOperator(type, isAll) {
  return (leftSelect, rightSelect, ...restSelects) => {
    const setOperators = [rightSelect, ...restSelects].map((select) => ({
      type,
      isAll,
      rightSelect: select
    }));
    for (const setOperator of setOperators) {
      if (!haveSameKeys(leftSelect.getSelectedFields(), setOperator.rightSelect.getSelectedFields())) {
        throw new Error(
          "Set operator error (union / intersect / except): selected fields are not the same or are in a different order"
        );
      }
    }
    return leftSelect.addSetOperators(setOperators);
  };
}
var _a105, PgSelectBuilder, _a106, PgSelectQueryBuilderBase, _a107, PgSelectBase, getPgSetOperators, union, unionAll, intersect, intersectAll, except, exceptAll;
var init_select2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/query-builders/select.js"() {
    "use strict";
    init_entity();
    init_view_base();
    init_query_builder();
    init_query_promise();
    init_selection_proxy();
    init_sql();
    init_subquery();
    init_table();
    init_tracing();
    init_utils();
    init_utils();
    init_view_common();
    PgSelectBuilder = class {
      constructor(config) {
        __publicField(this, "fields");
        __publicField(this, "session");
        __publicField(this, "dialect");
        __publicField(this, "withList", []);
        __publicField(this, "distinct");
        this.fields = config.fields;
        this.session = config.session;
        this.dialect = config.dialect;
        if (config.withList) {
          this.withList = config.withList;
        }
        this.distinct = config.distinct;
      }
      /**
       * Specify the table, subquery, or other target that you're
       * building a select query against.
       *
       * {@link https://www.postgresql.org/docs/current/sql-select.html#SQL-FROM | Postgres from documentation}
       */
      from(source) {
        const isPartialSelect = !!this.fields;
        let fields;
        if (this.fields) {
          fields = this.fields;
        } else if (is(source, Subquery)) {
          fields = Object.fromEntries(
            Object.keys(source._.selectedFields).map((key) => [key, source[key]])
          );
        } else if (is(source, PgViewBase)) {
          fields = source[ViewBaseConfig].selectedFields;
        } else if (is(source, SQL)) {
          fields = {};
        } else {
          fields = getTableColumns(source);
        }
        return new PgSelectBase({
          table: source,
          fields,
          isPartialSelect,
          session: this.session,
          dialect: this.dialect,
          withList: this.withList,
          distinct: this.distinct
        });
      }
    };
    _a105 = entityKind;
    __publicField(PgSelectBuilder, _a105, "PgSelectBuilder");
    PgSelectQueryBuilderBase = class extends TypedQueryBuilder {
      constructor({ table: table4, fields, isPartialSelect, session, dialect: dialect7, withList, distinct }) {
        super();
        __publicField(this, "_");
        __publicField(this, "config");
        __publicField(this, "joinsNotNullableMap");
        __publicField(this, "tableName");
        __publicField(this, "isPartialSelect");
        __publicField(this, "session");
        __publicField(this, "dialect");
        /**
         * Executes a `left join` operation by adding another table to the current query.
         *
         * Calling this method associates each row of the table with the corresponding row from the joined table, if a match is found. If no matching row exists, it sets all columns of the joined table to null.
         *
         * See docs: {@link https://orm.drizzle.team/docs/joins#left-join}
         *
         * @param table the table to join.
         * @param on the `on` clause.
         *
         * @example
         *
         * ```ts
         * // Select all users and their pets
         * const usersWithPets: { user: User; pets: Pet | null }[] = await db.select()
         *   .from(users)
         *   .leftJoin(pets, eq(users.id, pets.ownerId))
         *
         * // Select userId and petId
         * const usersIdsAndPetIds: { userId: number; petId: number | null }[] = await db.select({
         *   userId: users.id,
         *   petId: pets.id,
         * })
         *   .from(users)
         *   .leftJoin(pets, eq(users.id, pets.ownerId))
         * ```
         */
        __publicField(this, "leftJoin", this.createJoin("left"));
        /**
         * Executes a `right join` operation by adding another table to the current query.
         *
         * Calling this method associates each row of the joined table with the corresponding row from the main table, if a match is found. If no matching row exists, it sets all columns of the main table to null.
         *
         * See docs: {@link https://orm.drizzle.team/docs/joins#right-join}
         *
         * @param table the table to join.
         * @param on the `on` clause.
         *
         * @example
         *
         * ```ts
         * // Select all users and their pets
         * const usersWithPets: { user: User | null; pets: Pet }[] = await db.select()
         *   .from(users)
         *   .rightJoin(pets, eq(users.id, pets.ownerId))
         *
         * // Select userId and petId
         * const usersIdsAndPetIds: { userId: number | null; petId: number }[] = await db.select({
         *   userId: users.id,
         *   petId: pets.id,
         * })
         *   .from(users)
         *   .rightJoin(pets, eq(users.id, pets.ownerId))
         * ```
         */
        __publicField(this, "rightJoin", this.createJoin("right"));
        /**
         * Executes an `inner join` operation, creating a new table by combining rows from two tables that have matching values.
         *
         * Calling this method retrieves rows that have corresponding entries in both joined tables. Rows without matching entries in either table are excluded, resulting in a table that includes only matching pairs.
         *
         * See docs: {@link https://orm.drizzle.team/docs/joins#inner-join}
         *
         * @param table the table to join.
         * @param on the `on` clause.
         *
         * @example
         *
         * ```ts
         * // Select all users and their pets
         * const usersWithPets: { user: User; pets: Pet }[] = await db.select()
         *   .from(users)
         *   .innerJoin(pets, eq(users.id, pets.ownerId))
         *
         * // Select userId and petId
         * const usersIdsAndPetIds: { userId: number; petId: number }[] = await db.select({
         *   userId: users.id,
         *   petId: pets.id,
         * })
         *   .from(users)
         *   .innerJoin(pets, eq(users.id, pets.ownerId))
         * ```
         */
        __publicField(this, "innerJoin", this.createJoin("inner"));
        /**
         * Executes a `full join` operation by combining rows from two tables into a new table.
         *
         * Calling this method retrieves all rows from both main and joined tables, merging rows with matching values and filling in `null` for non-matching columns.
         *
         * See docs: {@link https://orm.drizzle.team/docs/joins#full-join}
         *
         * @param table the table to join.
         * @param on the `on` clause.
         *
         * @example
         *
         * ```ts
         * // Select all users and their pets
         * const usersWithPets: { user: User | null; pets: Pet | null }[] = await db.select()
         *   .from(users)
         *   .fullJoin(pets, eq(users.id, pets.ownerId))
         *
         * // Select userId and petId
         * const usersIdsAndPetIds: { userId: number | null; petId: number | null }[] = await db.select({
         *   userId: users.id,
         *   petId: pets.id,
         * })
         *   .from(users)
         *   .fullJoin(pets, eq(users.id, pets.ownerId))
         * ```
         */
        __publicField(this, "fullJoin", this.createJoin("full"));
        /**
         * Adds `union` set operator to the query.
         *
         * Calling this method will combine the result sets of the `select` statements and remove any duplicate rows that appear across them.
         *
         * See docs: {@link https://orm.drizzle.team/docs/set-operations#union}
         *
         * @example
         *
         * ```ts
         * // Select all unique names from customers and users tables
         * await db.select({ name: users.name })
         *   .from(users)
         *   .union(
         *     db.select({ name: customers.name }).from(customers)
         *   );
         * // or
         * import { union } from 'drizzle-orm/pg-core'
         *
         * await union(
         *   db.select({ name: users.name }).from(users),
         *   db.select({ name: customers.name }).from(customers)
         * );
         * ```
         */
        __publicField(this, "union", this.createSetOperator("union", false));
        /**
         * Adds `union all` set operator to the query.
         *
         * Calling this method will combine the result-set of the `select` statements and keep all duplicate rows that appear across them.
         *
         * See docs: {@link https://orm.drizzle.team/docs/set-operations#union-all}
         *
         * @example
         *
         * ```ts
         * // Select all transaction ids from both online and in-store sales
         * await db.select({ transaction: onlineSales.transactionId })
         *   .from(onlineSales)
         *   .unionAll(
         *     db.select({ transaction: inStoreSales.transactionId }).from(inStoreSales)
         *   );
         * // or
         * import { unionAll } from 'drizzle-orm/pg-core'
         *
         * await unionAll(
         *   db.select({ transaction: onlineSales.transactionId }).from(onlineSales),
         *   db.select({ transaction: inStoreSales.transactionId }).from(inStoreSales)
         * );
         * ```
         */
        __publicField(this, "unionAll", this.createSetOperator("union", true));
        /**
         * Adds `intersect` set operator to the query.
         *
         * Calling this method will retain only the rows that are present in both result sets and eliminate duplicates.
         *
         * See docs: {@link https://orm.drizzle.team/docs/set-operations#intersect}
         *
         * @example
         *
         * ```ts
         * // Select course names that are offered in both departments A and B
         * await db.select({ courseName: depA.courseName })
         *   .from(depA)
         *   .intersect(
         *     db.select({ courseName: depB.courseName }).from(depB)
         *   );
         * // or
         * import { intersect } from 'drizzle-orm/pg-core'
         *
         * await intersect(
         *   db.select({ courseName: depA.courseName }).from(depA),
         *   db.select({ courseName: depB.courseName }).from(depB)
         * );
         * ```
         */
        __publicField(this, "intersect", this.createSetOperator("intersect", false));
        /**
         * Adds `intersect all` set operator to the query.
         *
         * Calling this method will retain only the rows that are present in both result sets including all duplicates.
         *
         * See docs: {@link https://orm.drizzle.team/docs/set-operations#intersect-all}
         *
         * @example
         *
         * ```ts
         * // Select all products and quantities that are ordered by both regular and VIP customers
         * await db.select({
         *   productId: regularCustomerOrders.productId,
         *   quantityOrdered: regularCustomerOrders.quantityOrdered
         * })
         * .from(regularCustomerOrders)
         * .intersectAll(
         *   db.select({
         *     productId: vipCustomerOrders.productId,
         *     quantityOrdered: vipCustomerOrders.quantityOrdered
         *   })
         *   .from(vipCustomerOrders)
         * );
         * // or
         * import { intersectAll } from 'drizzle-orm/pg-core'
         *
         * await intersectAll(
         *   db.select({
         *     productId: regularCustomerOrders.productId,
         *     quantityOrdered: regularCustomerOrders.quantityOrdered
         *   })
         *   .from(regularCustomerOrders),
         *   db.select({
         *     productId: vipCustomerOrders.productId,
         *     quantityOrdered: vipCustomerOrders.quantityOrdered
         *   })
         *   .from(vipCustomerOrders)
         * );
         * ```
         */
        __publicField(this, "intersectAll", this.createSetOperator("intersect", true));
        /**
         * Adds `except` set operator to the query.
         *
         * Calling this method will retrieve all unique rows from the left query, except for the rows that are present in the result set of the right query.
         *
         * See docs: {@link https://orm.drizzle.team/docs/set-operations#except}
         *
         * @example
         *
         * ```ts
         * // Select all courses offered in department A but not in department B
         * await db.select({ courseName: depA.courseName })
         *   .from(depA)
         *   .except(
         *     db.select({ courseName: depB.courseName }).from(depB)
         *   );
         * // or
         * import { except } from 'drizzle-orm/pg-core'
         *
         * await except(
         *   db.select({ courseName: depA.courseName }).from(depA),
         *   db.select({ courseName: depB.courseName }).from(depB)
         * );
         * ```
         */
        __publicField(this, "except", this.createSetOperator("except", false));
        /**
         * Adds `except all` set operator to the query.
         *
         * Calling this method will retrieve all rows from the left query, except for the rows that are present in the result set of the right query.
         *
         * See docs: {@link https://orm.drizzle.team/docs/set-operations#except-all}
         *
         * @example
         *
         * ```ts
         * // Select all products that are ordered by regular customers but not by VIP customers
         * await db.select({
         *   productId: regularCustomerOrders.productId,
         *   quantityOrdered: regularCustomerOrders.quantityOrdered,
         * })
         * .from(regularCustomerOrders)
         * .exceptAll(
         *   db.select({
         *     productId: vipCustomerOrders.productId,
         *     quantityOrdered: vipCustomerOrders.quantityOrdered,
         *   })
         *   .from(vipCustomerOrders)
         * );
         * // or
         * import { exceptAll } from 'drizzle-orm/pg-core'
         *
         * await exceptAll(
         *   db.select({
         *     productId: regularCustomerOrders.productId,
         *     quantityOrdered: regularCustomerOrders.quantityOrdered
         *   })
         *   .from(regularCustomerOrders),
         *   db.select({
         *     productId: vipCustomerOrders.productId,
         *     quantityOrdered: vipCustomerOrders.quantityOrdered
         *   })
         *   .from(vipCustomerOrders)
         * );
         * ```
         */
        __publicField(this, "exceptAll", this.createSetOperator("except", true));
        this.config = {
          withList,
          table: table4,
          fields: { ...fields },
          distinct,
          setOperators: []
        };
        this.isPartialSelect = isPartialSelect;
        this.session = session;
        this.dialect = dialect7;
        this._ = {
          selectedFields: fields
        };
        this.tableName = getTableLikeName(table4);
        this.joinsNotNullableMap = typeof this.tableName === "string" ? { [this.tableName]: true } : {};
      }
      createJoin(joinType) {
        return (table4, on) => {
          const baseTableName = this.tableName;
          const tableName = getTableLikeName(table4);
          if (typeof tableName === "string" && this.config.joins?.some((join) => join.alias === tableName)) {
            throw new Error(`Alias "${tableName}" is already used in this query`);
          }
          if (!this.isPartialSelect) {
            if (Object.keys(this.joinsNotNullableMap).length === 1 && typeof baseTableName === "string") {
              this.config.fields = {
                [baseTableName]: this.config.fields
              };
            }
            if (typeof tableName === "string" && !is(table4, SQL)) {
              const selection = is(table4, Subquery) ? table4._.selectedFields : is(table4, View) ? table4[ViewBaseConfig].selectedFields : table4[Table.Symbol.Columns];
              this.config.fields[tableName] = selection;
            }
          }
          if (typeof on === "function") {
            on = on(
              new Proxy(
                this.config.fields,
                new SelectionProxyHandler({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })
              )
            );
          }
          if (!this.config.joins) {
            this.config.joins = [];
          }
          this.config.joins.push({ on, table: table4, joinType, alias: tableName });
          if (typeof tableName === "string") {
            switch (joinType) {
              case "left": {
                this.joinsNotNullableMap[tableName] = false;
                break;
              }
              case "right": {
                this.joinsNotNullableMap = Object.fromEntries(
                  Object.entries(this.joinsNotNullableMap).map(([key]) => [key, false])
                );
                this.joinsNotNullableMap[tableName] = true;
                break;
              }
              case "inner": {
                this.joinsNotNullableMap[tableName] = true;
                break;
              }
              case "full": {
                this.joinsNotNullableMap = Object.fromEntries(
                  Object.entries(this.joinsNotNullableMap).map(([key]) => [key, false])
                );
                this.joinsNotNullableMap[tableName] = false;
                break;
              }
            }
          }
          return this;
        };
      }
      createSetOperator(type, isAll) {
        return (rightSelection) => {
          const rightSelect = typeof rightSelection === "function" ? rightSelection(getPgSetOperators()) : rightSelection;
          if (!haveSameKeys(this.getSelectedFields(), rightSelect.getSelectedFields())) {
            throw new Error(
              "Set operator error (union / intersect / except): selected fields are not the same or are in a different order"
            );
          }
          this.config.setOperators.push({ type, isAll, rightSelect });
          return this;
        };
      }
      /** @internal */
      addSetOperators(setOperators) {
        this.config.setOperators.push(...setOperators);
        return this;
      }
      /**
       * Adds a `where` clause to the query.
       *
       * Calling this method will select only those rows that fulfill a specified condition.
       *
       * See docs: {@link https://orm.drizzle.team/docs/select#filtering}
       *
       * @param where the `where` clause.
       *
       * @example
       * You can use conditional operators and `sql function` to filter the rows to be selected.
       *
       * ```ts
       * // Select all cars with green color
       * await db.select().from(cars).where(eq(cars.color, 'green'));
       * // or
       * await db.select().from(cars).where(sql`${cars.color} = 'green'`)
       * ```
       *
       * You can logically combine conditional operators with `and()` and `or()` operators:
       *
       * ```ts
       * // Select all BMW cars with a green color
       * await db.select().from(cars).where(and(eq(cars.color, 'green'), eq(cars.brand, 'BMW')));
       *
       * // Select all cars with the green or blue color
       * await db.select().from(cars).where(or(eq(cars.color, 'green'), eq(cars.color, 'blue')));
       * ```
       */
      where(where) {
        if (typeof where === "function") {
          where = where(
            new Proxy(
              this.config.fields,
              new SelectionProxyHandler({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })
            )
          );
        }
        this.config.where = where;
        return this;
      }
      /**
       * Adds a `having` clause to the query.
       *
       * Calling this method will select only those rows that fulfill a specified condition. It is typically used with aggregate functions to filter the aggregated data based on a specified condition.
       *
       * See docs: {@link https://orm.drizzle.team/docs/select#aggregations}
       *
       * @param having the `having` clause.
       *
       * @example
       *
       * ```ts
       * // Select all brands with more than one car
       * await db.select({
       * 	brand: cars.brand,
       * 	count: sql<number>`cast(count(${cars.id}) as int)`,
       * })
       *   .from(cars)
       *   .groupBy(cars.brand)
       *   .having(({ count }) => gt(count, 1));
       * ```
       */
      having(having) {
        if (typeof having === "function") {
          having = having(
            new Proxy(
              this.config.fields,
              new SelectionProxyHandler({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })
            )
          );
        }
        this.config.having = having;
        return this;
      }
      groupBy(...columns) {
        if (typeof columns[0] === "function") {
          const groupBy = columns[0](
            new Proxy(
              this.config.fields,
              new SelectionProxyHandler({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" })
            )
          );
          this.config.groupBy = Array.isArray(groupBy) ? groupBy : [groupBy];
        } else {
          this.config.groupBy = columns;
        }
        return this;
      }
      orderBy(...columns) {
        if (typeof columns[0] === "function") {
          const orderBy = columns[0](
            new Proxy(
              this.config.fields,
              new SelectionProxyHandler({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" })
            )
          );
          const orderByArray = Array.isArray(orderBy) ? orderBy : [orderBy];
          if (this.config.setOperators.length > 0) {
            this.config.setOperators.at(-1).orderBy = orderByArray;
          } else {
            this.config.orderBy = orderByArray;
          }
        } else {
          const orderByArray = columns;
          if (this.config.setOperators.length > 0) {
            this.config.setOperators.at(-1).orderBy = orderByArray;
          } else {
            this.config.orderBy = orderByArray;
          }
        }
        return this;
      }
      /**
       * Adds a `limit` clause to the query.
       *
       * Calling this method will set the maximum number of rows that will be returned by this query.
       *
       * See docs: {@link https://orm.drizzle.team/docs/select#limit--offset}
       *
       * @param limit the `limit` clause.
       *
       * @example
       *
       * ```ts
       * // Get the first 10 people from this query.
       * await db.select().from(people).limit(10);
       * ```
       */
      limit(limit) {
        if (this.config.setOperators.length > 0) {
          this.config.setOperators.at(-1).limit = limit;
        } else {
          this.config.limit = limit;
        }
        return this;
      }
      /**
       * Adds an `offset` clause to the query.
       *
       * Calling this method will skip a number of rows when returning results from this query.
       *
       * See docs: {@link https://orm.drizzle.team/docs/select#limit--offset}
       *
       * @param offset the `offset` clause.
       *
       * @example
       *
       * ```ts
       * // Get the 10th-20th people from this query.
       * await db.select().from(people).offset(10).limit(10);
       * ```
       */
      offset(offset) {
        if (this.config.setOperators.length > 0) {
          this.config.setOperators.at(-1).offset = offset;
        } else {
          this.config.offset = offset;
        }
        return this;
      }
      /**
       * Adds a `for` clause to the query.
       *
       * Calling this method will specify a lock strength for this query that controls how strictly it acquires exclusive access to the rows being queried.
       *
       * See docs: {@link https://www.postgresql.org/docs/current/sql-select.html#SQL-FOR-UPDATE-SHARE}
       *
       * @param strength the lock strength.
       * @param config the lock configuration.
       */
      for(strength, config = {}) {
        this.config.lockingClause = { strength, config };
        return this;
      }
      /** @internal */
      getSQL() {
        return this.dialect.buildSelectQuery(this.config);
      }
      toSQL() {
        const { typings: _typings, ...rest } = this.dialect.sqlToQuery(this.getSQL());
        return rest;
      }
      as(alias) {
        return new Proxy(
          new Subquery(this.getSQL(), this.config.fields, alias),
          new SelectionProxyHandler({ alias, sqlAliasedBehavior: "alias", sqlBehavior: "error" })
        );
      }
      /** @internal */
      getSelectedFields() {
        return new Proxy(
          this.config.fields,
          new SelectionProxyHandler({ alias: this.tableName, sqlAliasedBehavior: "alias", sqlBehavior: "error" })
        );
      }
      $dynamic() {
        return this;
      }
    };
    _a106 = entityKind;
    __publicField(PgSelectQueryBuilderBase, _a106, "PgSelectQueryBuilder");
    PgSelectBase = class extends PgSelectQueryBuilderBase {
      constructor() {
        super(...arguments);
        __publicField(this, "execute", (placeholderValues) => {
          return tracer.startActiveSpan("drizzle.operation", () => {
            return this._prepare().execute(placeholderValues);
          });
        });
      }
      /** @internal */
      _prepare(name2) {
        const { session, config, dialect: dialect7, joinsNotNullableMap } = this;
        if (!session) {
          throw new Error("Cannot execute a query on a query builder. Please use a database instance instead.");
        }
        return tracer.startActiveSpan("drizzle.prepareQuery", () => {
          const fieldsList = orderSelectedFields(config.fields);
          const query = session.prepareQuery(dialect7.sqlToQuery(this.getSQL()), fieldsList, name2, true);
          query.joinsNotNullableMap = joinsNotNullableMap;
          return query;
        });
      }
      /**
       * Create a prepared statement for this query. This allows
       * the database to remember this query for the given session
       * and call it by name, rather than specifying the full query.
       *
       * {@link https://www.postgresql.org/docs/current/sql-prepare.html | Postgres prepare documentation}
       */
      prepare(name2) {
        return this._prepare(name2);
      }
    };
    _a107 = entityKind;
    __publicField(PgSelectBase, _a107, "PgSelect");
    applyMixins(PgSelectBase, [QueryPromise]);
    getPgSetOperators = () => ({
      union,
      unionAll,
      intersect,
      intersectAll,
      except,
      exceptAll
    });
    union = createSetOperator("union", false);
    unionAll = createSetOperator("union", true);
    intersect = createSetOperator("intersect", false);
    intersectAll = createSetOperator("intersect", true);
    except = createSetOperator("except", false);
    exceptAll = createSetOperator("except", true);
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/query-builders/query-builder.js
var _a108, QueryBuilder;
var init_query_builder2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/query-builders/query-builder.js"() {
    "use strict";
    init_entity();
    init_dialect();
    init_selection_proxy();
    init_subquery();
    init_select2();
    QueryBuilder = class {
      constructor() {
        __publicField(this, "dialect");
      }
      $with(alias) {
        const queryBuilder = this;
        return {
          as(qb) {
            if (typeof qb === "function") {
              qb = qb(queryBuilder);
            }
            return new Proxy(
              new WithSubquery(qb.getSQL(), qb.getSelectedFields(), alias, true),
              new SelectionProxyHandler({ alias, sqlAliasedBehavior: "alias", sqlBehavior: "error" })
            );
          }
        };
      }
      with(...queries) {
        const self = this;
        function select(fields) {
          return new PgSelectBuilder({
            fields: fields ?? void 0,
            session: void 0,
            dialect: self.getDialect(),
            withList: queries
          });
        }
        function selectDistinct(fields) {
          return new PgSelectBuilder({
            fields: fields ?? void 0,
            session: void 0,
            dialect: self.getDialect(),
            distinct: true
          });
        }
        function selectDistinctOn(on, fields) {
          return new PgSelectBuilder({
            fields: fields ?? void 0,
            session: void 0,
            dialect: self.getDialect(),
            distinct: { on }
          });
        }
        return { select, selectDistinct, selectDistinctOn };
      }
      select(fields) {
        return new PgSelectBuilder({
          fields: fields ?? void 0,
          session: void 0,
          dialect: this.getDialect()
        });
      }
      selectDistinct(fields) {
        return new PgSelectBuilder({
          fields: fields ?? void 0,
          session: void 0,
          dialect: this.getDialect(),
          distinct: true
        });
      }
      selectDistinctOn(on, fields) {
        return new PgSelectBuilder({
          fields: fields ?? void 0,
          session: void 0,
          dialect: this.getDialect(),
          distinct: { on }
        });
      }
      // Lazy load dialect to avoid circular dependency
      getDialect() {
        if (!this.dialect) {
          this.dialect = new PgDialect();
        }
        return this.dialect;
      }
    };
    _a108 = entityKind;
    __publicField(QueryBuilder, _a108, "PgQueryBuilder");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/query-builders/refresh-materialized-view.js
var _a109, PgRefreshMaterializedView;
var init_refresh_materialized_view = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/query-builders/refresh-materialized-view.js"() {
    "use strict";
    init_entity();
    init_query_promise();
    init_tracing();
    PgRefreshMaterializedView = class extends QueryPromise {
      constructor(view, session, dialect7) {
        super();
        __publicField(this, "config");
        __publicField(this, "execute", (placeholderValues) => {
          return tracer.startActiveSpan("drizzle.operation", () => {
            return this._prepare().execute(placeholderValues);
          });
        });
        this.session = session;
        this.dialect = dialect7;
        this.config = { view };
      }
      concurrently() {
        if (this.config.withNoData !== void 0) {
          throw new Error("Cannot use concurrently and withNoData together");
        }
        this.config.concurrently = true;
        return this;
      }
      withNoData() {
        if (this.config.concurrently !== void 0) {
          throw new Error("Cannot use concurrently and withNoData together");
        }
        this.config.withNoData = true;
        return this;
      }
      /** @internal */
      getSQL() {
        return this.dialect.buildRefreshMaterializedViewQuery(this.config);
      }
      toSQL() {
        const { typings: _typings, ...rest } = this.dialect.sqlToQuery(this.getSQL());
        return rest;
      }
      /** @internal */
      _prepare(name2) {
        return tracer.startActiveSpan("drizzle.prepareQuery", () => {
          return this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()), void 0, name2, true);
        });
      }
      prepare(name2) {
        return this._prepare(name2);
      }
    };
    _a109 = entityKind;
    __publicField(PgRefreshMaterializedView, _a109, "PgRefreshMaterializedView");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/query-builders/select.types.js
var init_select_types = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/query-builders/select.types.js"() {
    "use strict";
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/query-builders/update.js
var _a110, PgUpdateBuilder, _a111, PgUpdateBase;
var init_update = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/query-builders/update.js"() {
    "use strict";
    init_entity();
    init_query_promise();
    init_table();
    init_utils();
    PgUpdateBuilder = class {
      constructor(table4, session, dialect7, withList) {
        this.table = table4;
        this.session = session;
        this.dialect = dialect7;
        this.withList = withList;
      }
      set(values) {
        return new PgUpdateBase(
          this.table,
          mapUpdateSet(this.table, values),
          this.session,
          this.dialect,
          this.withList
        );
      }
    };
    _a110 = entityKind;
    __publicField(PgUpdateBuilder, _a110, "PgUpdateBuilder");
    PgUpdateBase = class extends QueryPromise {
      constructor(table4, set, session, dialect7, withList) {
        super();
        __publicField(this, "config");
        __publicField(this, "execute", (placeholderValues) => {
          return this._prepare().execute(placeholderValues);
        });
        this.session = session;
        this.dialect = dialect7;
        this.config = { set, table: table4, withList };
      }
      /**
       * Adds a 'where' clause to the query.
       *
       * Calling this method will update only those rows that fulfill a specified condition.
       *
       * See docs: {@link https://orm.drizzle.team/docs/update}
       *
       * @param where the 'where' clause.
       *
       * @example
       * You can use conditional operators and `sql function` to filter the rows to be updated.
       *
       * ```ts
       * // Update all cars with green color
       * await db.update(cars).set({ color: 'red' })
       *   .where(eq(cars.color, 'green'));
       * // or
       * await db.update(cars).set({ color: 'red' })
       *   .where(sql`${cars.color} = 'green'`)
       * ```
       *
       * You can logically combine conditional operators with `and()` and `or()` operators:
       *
       * ```ts
       * // Update all BMW cars with a green color
       * await db.update(cars).set({ color: 'red' })
       *   .where(and(eq(cars.color, 'green'), eq(cars.brand, 'BMW')));
       *
       * // Update all cars with the green or blue color
       * await db.update(cars).set({ color: 'red' })
       *   .where(or(eq(cars.color, 'green'), eq(cars.color, 'blue')));
       * ```
       */
      where(where) {
        this.config.where = where;
        return this;
      }
      returning(fields = this.config.table[Table.Symbol.Columns]) {
        this.config.returning = orderSelectedFields(fields);
        return this;
      }
      /** @internal */
      getSQL() {
        return this.dialect.buildUpdateQuery(this.config);
      }
      toSQL() {
        const { typings: _typings, ...rest } = this.dialect.sqlToQuery(this.getSQL());
        return rest;
      }
      /** @internal */
      _prepare(name2) {
        return this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()), this.config.returning, name2, true);
      }
      prepare(name2) {
        return this._prepare(name2);
      }
      $dynamic() {
        return this;
      }
    };
    _a111 = entityKind;
    __publicField(PgUpdateBase, _a111, "PgUpdate");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/query-builders/index.js
var init_query_builders = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/query-builders/index.js"() {
    "use strict";
    init_delete();
    init_insert();
    init_query_builder2();
    init_refresh_materialized_view();
    init_select2();
    init_select_types();
    init_update();
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/query-builders/query.js
var _a112, RelationalQueryBuilder, _a113, PgRelationalQuery;
var init_query = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/query-builders/query.js"() {
    "use strict";
    init_entity();
    init_query_promise();
    init_relations();
    init_tracing();
    RelationalQueryBuilder = class {
      constructor(fullSchema, schema4, tableNamesMap, table4, tableConfig, dialect7, session) {
        this.fullSchema = fullSchema;
        this.schema = schema4;
        this.tableNamesMap = tableNamesMap;
        this.table = table4;
        this.tableConfig = tableConfig;
        this.dialect = dialect7;
        this.session = session;
      }
      findMany(config) {
        return new PgRelationalQuery(
          this.fullSchema,
          this.schema,
          this.tableNamesMap,
          this.table,
          this.tableConfig,
          this.dialect,
          this.session,
          config ? config : {},
          "many"
        );
      }
      findFirst(config) {
        return new PgRelationalQuery(
          this.fullSchema,
          this.schema,
          this.tableNamesMap,
          this.table,
          this.tableConfig,
          this.dialect,
          this.session,
          config ? { ...config, limit: 1 } : { limit: 1 },
          "first"
        );
      }
    };
    _a112 = entityKind;
    __publicField(RelationalQueryBuilder, _a112, "PgRelationalQueryBuilder");
    PgRelationalQuery = class extends QueryPromise {
      constructor(fullSchema, schema4, tableNamesMap, table4, tableConfig, dialect7, session, config, mode) {
        super();
        this.fullSchema = fullSchema;
        this.schema = schema4;
        this.tableNamesMap = tableNamesMap;
        this.table = table4;
        this.tableConfig = tableConfig;
        this.dialect = dialect7;
        this.session = session;
        this.config = config;
        this.mode = mode;
      }
      /** @internal */
      _prepare(name2) {
        return tracer.startActiveSpan("drizzle.prepareQuery", () => {
          const { query, builtQuery } = this._toSQL();
          return this.session.prepareQuery(
            builtQuery,
            void 0,
            name2,
            true,
            (rawRows, mapColumnValue) => {
              const rows = rawRows.map(
                (row) => mapRelationalRow(this.schema, this.tableConfig, row, query.selection, mapColumnValue)
              );
              if (this.mode === "first") {
                return rows[0];
              }
              return rows;
            }
          );
        });
      }
      prepare(name2) {
        return this._prepare(name2);
      }
      _getQuery() {
        return this.dialect.buildRelationalQueryWithoutPK({
          fullSchema: this.fullSchema,
          schema: this.schema,
          tableNamesMap: this.tableNamesMap,
          table: this.table,
          tableConfig: this.tableConfig,
          queryConfig: this.config,
          tableAlias: this.tableConfig.tsName
        });
      }
      /** @internal */
      getSQL() {
        return this._getQuery().sql;
      }
      _toSQL() {
        const query = this._getQuery();
        const builtQuery = this.dialect.sqlToQuery(query.sql);
        return { query, builtQuery };
      }
      toSQL() {
        return this._toSQL().builtQuery;
      }
      execute() {
        return tracer.startActiveSpan("drizzle.operation", () => {
          return this._prepare().execute();
        });
      }
    };
    _a113 = entityKind;
    __publicField(PgRelationalQuery, _a113, "PgRelationalQuery");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/query-builders/raw.js
var _a114, PgRaw;
var init_raw = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/query-builders/raw.js"() {
    "use strict";
    init_entity();
    init_query_promise();
    PgRaw = class extends QueryPromise {
      constructor(execute, sql2, query, mapBatchResult) {
        super();
        this.execute = execute;
        this.sql = sql2;
        this.query = query;
        this.mapBatchResult = mapBatchResult;
      }
      /** @internal */
      getSQL() {
        return this.sql;
      }
      getQuery() {
        return this.query;
      }
      mapResult(result, isFromBatch) {
        return isFromBatch ? this.mapBatchResult(result) : result;
      }
      _prepare() {
        return this;
      }
      /** @internal */
      isResponseInArrayMode() {
        return false;
      }
    };
    _a114 = entityKind;
    __publicField(PgRaw, _a114, "PgRaw");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/db.js
var _a115, PgDatabase;
var init_db = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/db.js"() {
    "use strict";
    init_entity();
    init_query_builders();
    init_selection_proxy();
    init_subquery();
    init_query();
    init_raw();
    init_refresh_materialized_view();
    PgDatabase = class {
      constructor(dialect7, session, schema4) {
        __publicField(this, "query");
        this.dialect = dialect7;
        this.session = session;
        this._ = schema4 ? {
          schema: schema4.schema,
          fullSchema: schema4.fullSchema,
          tableNamesMap: schema4.tableNamesMap,
          session
        } : {
          schema: void 0,
          fullSchema: {},
          tableNamesMap: {},
          session
        };
        this.query = {};
        if (this._.schema) {
          for (const [tableName, columns] of Object.entries(this._.schema)) {
            this.query[tableName] = new RelationalQueryBuilder(
              schema4.fullSchema,
              this._.schema,
              this._.tableNamesMap,
              schema4.fullSchema[tableName],
              columns,
              dialect7,
              session
            );
          }
        }
      }
      /**
       * Creates a subquery that defines a temporary named result set as a CTE.
       *
       * It is useful for breaking down complex queries into simpler parts and for reusing the result set in subsequent parts of the query.
       *
       * See docs: {@link https://orm.drizzle.team/docs/select#with-clause}
       *
       * @param alias The alias for the subquery.
       *
       * Failure to provide an alias will result in a DrizzleTypeError, preventing the subquery from being referenced in other queries.
       *
       * @example
       *
       * ```ts
       * // Create a subquery with alias 'sq' and use it in the select query
       * const sq = db.$with('sq').as(db.select().from(users).where(eq(users.id, 42)));
       *
       * const result = await db.with(sq).select().from(sq);
       * ```
       *
       * To select arbitrary SQL values as fields in a CTE and reference them in other CTEs or in the main query, you need to add aliases to them:
       *
       * ```ts
       * // Select an arbitrary SQL value as a field in a CTE and reference it in the main query
       * const sq = db.$with('sq').as(db.select({
       *   name: sql<string>`upper(${users.name})`.as('name'),
       * })
       * .from(users));
       *
       * const result = await db.with(sq).select({ name: sq.name }).from(sq);
       * ```
       */
      $with(alias) {
        return {
          as(qb) {
            if (typeof qb === "function") {
              qb = qb(new QueryBuilder());
            }
            return new Proxy(
              new WithSubquery(qb.getSQL(), qb.getSelectedFields(), alias, true),
              new SelectionProxyHandler({ alias, sqlAliasedBehavior: "alias", sqlBehavior: "error" })
            );
          }
        };
      }
      /**
       * Incorporates a previously defined CTE (using `$with`) into the main query.
       *
       * This method allows the main query to reference a temporary named result set.
       *
       * See docs: {@link https://orm.drizzle.team/docs/select#with-clause}
       *
       * @param queries The CTEs to incorporate into the main query.
       *
       * @example
       *
       * ```ts
       * // Define a subquery 'sq' as a CTE using $with
       * const sq = db.$with('sq').as(db.select().from(users).where(eq(users.id, 42)));
       *
       * // Incorporate the CTE 'sq' into the main query and select from it
       * const result = await db.with(sq).select().from(sq);
       * ```
       */
      with(...queries) {
        const self = this;
        function select(fields) {
          return new PgSelectBuilder({
            fields: fields ?? void 0,
            session: self.session,
            dialect: self.dialect,
            withList: queries
          });
        }
        function selectDistinct(fields) {
          return new PgSelectBuilder({
            fields: fields ?? void 0,
            session: self.session,
            dialect: self.dialect,
            withList: queries,
            distinct: true
          });
        }
        function selectDistinctOn(on, fields) {
          return new PgSelectBuilder({
            fields: fields ?? void 0,
            session: self.session,
            dialect: self.dialect,
            withList: queries,
            distinct: { on }
          });
        }
        function update(table4) {
          return new PgUpdateBuilder(table4, self.session, self.dialect, queries);
        }
        function insert(table4) {
          return new PgInsertBuilder(table4, self.session, self.dialect, queries);
        }
        function delete_(table4) {
          return new PgDeleteBase(table4, self.session, self.dialect, queries);
        }
        return { select, selectDistinct, selectDistinctOn, update, insert, delete: delete_ };
      }
      select(fields) {
        return new PgSelectBuilder({
          fields: fields ?? void 0,
          session: this.session,
          dialect: this.dialect
        });
      }
      selectDistinct(fields) {
        return new PgSelectBuilder({
          fields: fields ?? void 0,
          session: this.session,
          dialect: this.dialect,
          distinct: true
        });
      }
      selectDistinctOn(on, fields) {
        return new PgSelectBuilder({
          fields: fields ?? void 0,
          session: this.session,
          dialect: this.dialect,
          distinct: { on }
        });
      }
      /**
       * Creates an update query.
       *
       * Calling this method without `.where()` clause will update all rows in a table. The `.where()` clause specifies which rows should be updated.
       *
       * Use `.set()` method to specify which values to update.
       *
       * See docs: {@link https://orm.drizzle.team/docs/update}
       *
       * @param table The table to update.
       *
       * @example
       *
       * ```ts
       * // Update all rows in the 'cars' table
       * await db.update(cars).set({ color: 'red' });
       *
       * // Update rows with filters and conditions
       * await db.update(cars).set({ color: 'red' }).where(eq(cars.brand, 'BMW'));
       *
       * // Update with returning clause
       * const updatedCar: Car[] = await db.update(cars)
       *   .set({ color: 'red' })
       *   .where(eq(cars.id, 1))
       *   .returning();
       * ```
       */
      update(table4) {
        return new PgUpdateBuilder(table4, this.session, this.dialect);
      }
      /**
       * Creates an insert query.
       *
       * Calling this method will create new rows in a table. Use `.values()` method to specify which values to insert.
       *
       * See docs: {@link https://orm.drizzle.team/docs/insert}
       *
       * @param table The table to insert into.
       *
       * @example
       *
       * ```ts
       * // Insert one row
       * await db.insert(cars).values({ brand: 'BMW' });
       *
       * // Insert multiple rows
       * await db.insert(cars).values([{ brand: 'BMW' }, { brand: 'Porsche' }]);
       *
       * // Insert with returning clause
       * const insertedCar: Car[] = await db.insert(cars)
       *   .values({ brand: 'BMW' })
       *   .returning();
       * ```
       */
      insert(table4) {
        return new PgInsertBuilder(table4, this.session, this.dialect);
      }
      /**
       * Creates a delete query.
       *
       * Calling this method without `.where()` clause will delete all rows in a table. The `.where()` clause specifies which rows should be deleted.
       *
       * See docs: {@link https://orm.drizzle.team/docs/delete}
       *
       * @param table The table to delete from.
       *
       * @example
       *
       * ```ts
       * // Delete all rows in the 'cars' table
       * await db.delete(cars);
       *
       * // Delete rows with filters and conditions
       * await db.delete(cars).where(eq(cars.color, 'green'));
       *
       * // Delete with returning clause
       * const deletedCar: Car[] = await db.delete(cars)
       *   .where(eq(cars.id, 1))
       *   .returning();
       * ```
       */
      delete(table4) {
        return new PgDeleteBase(table4, this.session, this.dialect);
      }
      refreshMaterializedView(view) {
        return new PgRefreshMaterializedView(view, this.session, this.dialect);
      }
      execute(query) {
        const sql2 = query.getSQL();
        const builtQuery = this.dialect.sqlToQuery(sql2);
        const prepared = this.session.prepareQuery(
          builtQuery,
          void 0,
          void 0,
          false
        );
        return new PgRaw(
          () => prepared.execute(),
          sql2,
          builtQuery,
          (result) => prepared.mapResult(result, true)
        );
      }
      transaction(transaction, config) {
        return this.session.transaction(transaction, config);
      }
    };
    _a115 = entityKind;
    __publicField(PgDatabase, _a115, "PgDatabase");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/indexes.js
var _a116, IndexBuilderOn, _a117, IndexBuilder, _a118, Index;
var init_indexes = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/indexes.js"() {
    "use strict";
    init_entity();
    IndexBuilderOn = class {
      constructor(unique, name2) {
        this.unique = unique;
        this.name = name2;
      }
      on(...columns) {
        return new IndexBuilder(columns, this.unique, false, this.name);
      }
      onOnly(...columns) {
        return new IndexBuilder(columns, this.unique, true, this.name);
      }
    };
    _a116 = entityKind;
    __publicField(IndexBuilderOn, _a116, "PgIndexBuilderOn");
    IndexBuilder = class {
      constructor(columns, unique, only, name2) {
        /** @internal */
        __publicField(this, "config");
        this.config = {
          name: name2,
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
      build(table4) {
        return new Index(this.config, table4);
      }
    };
    _a117 = entityKind;
    __publicField(IndexBuilder, _a117, "PgIndexBuilder");
    Index = class {
      constructor(config, table4) {
        __publicField(this, "config");
        this.config = { ...config, table: table4 };
      }
    };
    _a118 = entityKind;
    __publicField(Index, _a118, "PgIndex");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/view-common.js
var PgViewConfig;
var init_view_common2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/view-common.js"() {
    "use strict";
    PgViewConfig = Symbol.for("drizzle:PgViewConfig");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/view.js
function pgViewWithSchema(name2, selection, schema4) {
  if (selection) {
    return new ManualViewBuilder(name2, selection, schema4);
  }
  return new ViewBuilder(name2, schema4);
}
function pgMaterializedViewWithSchema(name2, selection, schema4) {
  if (selection) {
    return new ManualMaterializedViewBuilder(name2, selection, schema4);
  }
  return new MaterializedViewBuilder(name2, schema4);
}
var _a119, DefaultViewBuilderCore, _a120, ViewBuilder, _a121, ManualViewBuilder, _a122, MaterializedViewBuilderCore, _a123, MaterializedViewBuilder, _a124, ManualMaterializedViewBuilder, _a125, _b5, PgView, PgMaterializedViewConfig, _a126, _b6, PgMaterializedView;
var init_view = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/view.js"() {
    "use strict";
    init_entity();
    init_selection_proxy();
    init_utils();
    init_query_builder2();
    init_table2();
    init_view_base();
    init_view_common2();
    DefaultViewBuilderCore = class {
      constructor(name2, schema4) {
        __publicField(this, "config", {});
        this.name = name2;
        this.schema = schema4;
      }
      with(config) {
        this.config.with = config;
        return this;
      }
    };
    _a119 = entityKind;
    __publicField(DefaultViewBuilderCore, _a119, "PgDefaultViewBuilderCore");
    ViewBuilder = class extends DefaultViewBuilderCore {
      as(qb) {
        if (typeof qb === "function") {
          qb = qb(new QueryBuilder());
        }
        const selectionProxy = new SelectionProxyHandler({
          alias: this.name,
          sqlBehavior: "error",
          sqlAliasedBehavior: "alias",
          replaceOriginalName: true
        });
        const aliasedSelection = new Proxy(qb.getSelectedFields(), selectionProxy);
        return new Proxy(
          new PgView({
            pgConfig: this.config,
            config: {
              name: this.name,
              schema: this.schema,
              selectedFields: aliasedSelection,
              query: qb.getSQL().inlineParams()
            }
          }),
          selectionProxy
        );
      }
    };
    _a120 = entityKind;
    __publicField(ViewBuilder, _a120, "PgViewBuilder");
    ManualViewBuilder = class extends DefaultViewBuilderCore {
      constructor(name2, columns, schema4) {
        super(name2, schema4);
        __publicField(this, "columns");
        this.columns = getTableColumns(pgTable(name2, columns));
      }
      existing() {
        return new Proxy(
          new PgView({
            pgConfig: void 0,
            config: {
              name: this.name,
              schema: this.schema,
              selectedFields: this.columns,
              query: void 0
            }
          }),
          new SelectionProxyHandler({
            alias: this.name,
            sqlBehavior: "error",
            sqlAliasedBehavior: "alias",
            replaceOriginalName: true
          })
        );
      }
      as(query) {
        return new Proxy(
          new PgView({
            pgConfig: this.config,
            config: {
              name: this.name,
              schema: this.schema,
              selectedFields: this.columns,
              query: query.inlineParams()
            }
          }),
          new SelectionProxyHandler({
            alias: this.name,
            sqlBehavior: "error",
            sqlAliasedBehavior: "alias",
            replaceOriginalName: true
          })
        );
      }
    };
    _a121 = entityKind;
    __publicField(ManualViewBuilder, _a121, "PgManualViewBuilder");
    MaterializedViewBuilderCore = class {
      constructor(name2, schema4) {
        __publicField(this, "config", {});
        this.name = name2;
        this.schema = schema4;
      }
      using(using) {
        this.config.using = using;
        return this;
      }
      with(config) {
        this.config.with = config;
        return this;
      }
      tablespace(tablespace) {
        this.config.tablespace = tablespace;
        return this;
      }
      withNoData() {
        this.config.withNoData = true;
        return this;
      }
    };
    _a122 = entityKind;
    __publicField(MaterializedViewBuilderCore, _a122, "PgMaterializedViewBuilderCore");
    MaterializedViewBuilder = class extends MaterializedViewBuilderCore {
      as(qb) {
        if (typeof qb === "function") {
          qb = qb(new QueryBuilder());
        }
        const selectionProxy = new SelectionProxyHandler({
          alias: this.name,
          sqlBehavior: "error",
          sqlAliasedBehavior: "alias",
          replaceOriginalName: true
        });
        const aliasedSelection = new Proxy(qb.getSelectedFields(), selectionProxy);
        return new Proxy(
          new PgMaterializedView({
            pgConfig: {
              with: this.config.with,
              using: this.config.using,
              tablespace: this.config.tablespace,
              withNoData: this.config.withNoData
            },
            config: {
              name: this.name,
              schema: this.schema,
              selectedFields: aliasedSelection,
              query: qb.getSQL().inlineParams()
            }
          }),
          selectionProxy
        );
      }
    };
    _a123 = entityKind;
    __publicField(MaterializedViewBuilder, _a123, "PgMaterializedViewBuilder");
    ManualMaterializedViewBuilder = class extends MaterializedViewBuilderCore {
      constructor(name2, columns, schema4) {
        super(name2, schema4);
        __publicField(this, "columns");
        this.columns = getTableColumns(pgTable(name2, columns));
      }
      existing() {
        return new Proxy(
          new PgMaterializedView({
            pgConfig: void 0,
            config: {
              name: this.name,
              schema: this.schema,
              selectedFields: this.columns,
              query: void 0
            }
          }),
          new SelectionProxyHandler({
            alias: this.name,
            sqlBehavior: "error",
            sqlAliasedBehavior: "alias",
            replaceOriginalName: true
          })
        );
      }
      as(query) {
        return new Proxy(
          new PgMaterializedView({
            pgConfig: void 0,
            config: {
              name: this.name,
              schema: this.schema,
              selectedFields: this.columns,
              query: query.inlineParams()
            }
          }),
          new SelectionProxyHandler({
            alias: this.name,
            sqlBehavior: "error",
            sqlAliasedBehavior: "alias",
            replaceOriginalName: true
          })
        );
      }
    };
    _a124 = entityKind;
    __publicField(ManualMaterializedViewBuilder, _a124, "PgManualMaterializedViewBuilder");
    PgView = class extends PgViewBase {
      constructor({ pgConfig, config }) {
        super(config);
        __publicField(this, _b5);
        if (pgConfig) {
          this[PgViewConfig] = {
            with: pgConfig.with
          };
        }
      }
    };
    _a125 = entityKind, _b5 = PgViewConfig;
    __publicField(PgView, _a125, "PgView");
    PgMaterializedViewConfig = Symbol.for("drizzle:PgMaterializedViewConfig");
    PgMaterializedView = class extends PgViewBase {
      constructor({ pgConfig, config }) {
        super(config);
        __publicField(this, _b6);
        this[PgMaterializedViewConfig] = {
          with: pgConfig?.with,
          using: pgConfig?.using,
          tablespace: pgConfig?.tablespace,
          withNoData: pgConfig?.withNoData
        };
      }
    };
    _a126 = entityKind, _b6 = PgMaterializedViewConfig;
    __publicField(PgMaterializedView, _a126, "PgMaterializedView");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/schema.js
var _a127, PgSchema;
var init_schema = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/schema.js"() {
    "use strict";
    init_entity();
    init_enum();
    init_table2();
    init_view();
    PgSchema = class {
      constructor(schemaName) {
        __publicField(this, "table", (name2, columns, extraConfig) => {
          return pgTableWithSchema(name2, columns, extraConfig, this.schemaName);
        });
        __publicField(this, "view", (name2, columns) => {
          return pgViewWithSchema(name2, columns, this.schemaName);
        });
        __publicField(this, "materializedView", (name2, columns) => {
          return pgMaterializedViewWithSchema(name2, columns, this.schemaName);
        });
        __publicField(this, "enum", (name2, values) => {
          return pgEnumWithSchema(name2, values, this.schemaName);
        });
        this.schemaName = schemaName;
      }
    };
    _a127 = entityKind;
    __publicField(PgSchema, _a127, "PgSchema");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/session.js
var _a128, PgPreparedQuery, _a129, PgSession, _a130, PgTransaction;
var init_session = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/session.js"() {
    "use strict";
    init_entity();
    init_errors();
    init_sql2();
    init_tracing();
    init_db();
    PgPreparedQuery = class {
      constructor(query) {
        /** @internal */
        __publicField(this, "joinsNotNullableMap");
        this.query = query;
      }
      getQuery() {
        return this.query;
      }
      mapResult(response, _isFromBatch) {
        return response;
      }
    };
    _a128 = entityKind;
    __publicField(PgPreparedQuery, _a128, "PgPreparedQuery");
    PgSession = class {
      constructor(dialect7) {
        this.dialect = dialect7;
      }
      execute(query) {
        return tracer.startActiveSpan("drizzle.operation", () => {
          const prepared = tracer.startActiveSpan("drizzle.prepareQuery", () => {
            return this.prepareQuery(
              this.dialect.sqlToQuery(query),
              void 0,
              void 0,
              false
            );
          });
          return prepared.execute();
        });
      }
      all(query) {
        return this.prepareQuery(
          this.dialect.sqlToQuery(query),
          void 0,
          void 0,
          false
        ).all();
      }
    };
    _a129 = entityKind;
    __publicField(PgSession, _a129, "PgSession");
    PgTransaction = class extends PgDatabase {
      constructor(dialect7, session, schema4, nestedIndex = 0) {
        super(dialect7, session, schema4);
        this.schema = schema4;
        this.nestedIndex = nestedIndex;
      }
      rollback() {
        throw new TransactionRollbackError();
      }
      /** @internal */
      getTransactionConfigSQL(config) {
        const chunks = [];
        if (config.isolationLevel) {
          chunks.push(`isolation level ${config.isolationLevel}`);
        }
        if (config.accessMode) {
          chunks.push(config.accessMode);
        }
        if (typeof config.deferrable === "boolean") {
          chunks.push(config.deferrable ? "deferrable" : "not deferrable");
        }
        return sql.raw(chunks.join(" "));
      }
      setTransaction(config) {
        return this.session.execute(sql`set transaction ${this.getTransactionConfigSQL(config)}`);
      }
    };
    _a130 = entityKind;
    __publicField(PgTransaction, _a130, "PgTransaction");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/subquery.js
var init_subquery2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/subquery.js"() {
    "use strict";
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/utils.js
function getTableConfig(table4) {
  const columns = Object.values(table4[Table.Symbol.Columns]);
  const indexes = [];
  const checks = [];
  const primaryKeys = [];
  const foreignKeys = Object.values(table4[PgTable.Symbol.InlineForeignKeys]);
  const uniqueConstraints = [];
  const name2 = table4[Table.Symbol.Name];
  const schema4 = table4[Table.Symbol.Schema];
  const extraConfigBuilder = table4[PgTable.Symbol.ExtraConfigBuilder];
  if (extraConfigBuilder !== void 0) {
    const extraConfig = extraConfigBuilder(table4[Table.Symbol.Columns]);
    for (const builder of Object.values(extraConfig)) {
      if (is(builder, IndexBuilder)) {
        indexes.push(builder.build(table4));
      } else if (is(builder, CheckBuilder)) {
        checks.push(builder.build(table4));
      } else if (is(builder, UniqueConstraintBuilder)) {
        uniqueConstraints.push(builder.build(table4));
      } else if (is(builder, PrimaryKeyBuilder)) {
        primaryKeys.push(builder.build(table4));
      } else if (is(builder, ForeignKeyBuilder)) {
        foreignKeys.push(builder.build(table4));
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
    name: name2,
    schema: schema4
  };
}
var init_utils2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/utils.js"() {
    "use strict";
    init_entity();
    init_table2();
    init_table();
    init_checks();
    init_foreign_keys();
    init_indexes();
    init_primary_keys();
    init_unique_constraint();
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/utils/index.js
var init_utils3 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/utils/index.js"() {
    "use strict";
    init_array();
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/index.js
var init_pg_core = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/pg-core/index.js"() {
    "use strict";
    init_alias2();
    init_checks();
    init_columns();
    init_db();
    init_dialect();
    init_foreign_keys();
    init_indexes();
    init_primary_keys();
    init_query_builders();
    init_schema();
    init_session();
    init_subquery2();
    init_table2();
    init_unique_constraint();
    init_utils2();
    init_utils3();
    init_view_common2();
    init_view();
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/expressions.js
var init_expressions2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/expressions.js"() {
    "use strict";
    init_expressions();
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/logger.js
var _a131, ConsoleLogWriter, _a132, DefaultLogger, _a133, NoopLogger;
var init_logger = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/logger.js"() {
    "use strict";
    init_entity();
    ConsoleLogWriter = class {
      write(message) {
        console.log(message);
      }
    };
    _a131 = entityKind;
    __publicField(ConsoleLogWriter, _a131, "ConsoleLogWriter");
    DefaultLogger = class {
      constructor(config) {
        __publicField(this, "writer");
        this.writer = config?.writer ?? new ConsoleLogWriter();
      }
      logQuery(query, params) {
        const stringifiedParams = params.map((p) => {
          try {
            return JSON.stringify(p);
          } catch {
            return String(p);
          }
        });
        const paramsStr = stringifiedParams.length ? ` -- params: [${stringifiedParams.join(", ")}]` : "";
        this.writer.write(`Query: ${query}${paramsStr}`);
      }
    };
    _a132 = entityKind;
    __publicField(DefaultLogger, _a132, "DefaultLogger");
    NoopLogger = class {
      logQuery() {
      }
    };
    _a133 = entityKind;
    __publicField(NoopLogger, _a133, "NoopLogger");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/operations.js
var init_operations = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/operations.js"() {
    "use strict";
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/index.js
var drizzle_orm_exports = {};
__export(drizzle_orm_exports, {
  BaseName: () => BaseName,
  Column: () => Column,
  ColumnAliasProxyHandler: () => ColumnAliasProxyHandler,
  ColumnBuilder: () => ColumnBuilder,
  Columns: () => Columns,
  ConsoleLogWriter: () => ConsoleLogWriter,
  DefaultLogger: () => DefaultLogger,
  DrizzleError: () => DrizzleError,
  ExtraConfigBuilder: () => ExtraConfigBuilder,
  FakePrimitiveParam: () => FakePrimitiveParam,
  IsAlias: () => IsAlias,
  Many: () => Many,
  Name: () => Name,
  NoopLogger: () => NoopLogger,
  One: () => One,
  OriginalName: () => OriginalName,
  Param: () => Param,
  Placeholder: () => Placeholder,
  QueryPromise: () => QueryPromise,
  Relation: () => Relation,
  RelationTableAliasProxyHandler: () => RelationTableAliasProxyHandler,
  Relations: () => Relations,
  SQL: () => SQL,
  Schema: () => Schema,
  StringChunk: () => StringChunk,
  Subquery: () => Subquery,
  Table: () => Table,
  TableAliasProxyHandler: () => TableAliasProxyHandler,
  TableName: () => TableName,
  TransactionRollbackError: () => TransactionRollbackError,
  View: () => View,
  ViewBaseConfig: () => ViewBaseConfig,
  WithSubquery: () => WithSubquery,
  aliasedRelation: () => aliasedRelation,
  aliasedTable: () => aliasedTable,
  aliasedTableColumn: () => aliasedTableColumn,
  and: () => and,
  applyMixins: () => applyMixins,
  arrayContained: () => arrayContained,
  arrayContains: () => arrayContains,
  arrayOverlaps: () => arrayOverlaps,
  asc: () => asc,
  avg: () => avg,
  avgDistinct: () => avgDistinct,
  between: () => between,
  bindIfParam: () => bindIfParam,
  count: () => count,
  countDistinct: () => countDistinct,
  createMany: () => createMany,
  createOne: () => createOne,
  createTableRelationsHelpers: () => createTableRelationsHelpers,
  desc: () => desc,
  entityKind: () => entityKind,
  eq: () => eq,
  exists: () => exists,
  extractTablesRelationalConfig: () => extractTablesRelationalConfig,
  fillPlaceholders: () => fillPlaceholders,
  getOperators: () => getOperators,
  getOrderByOperators: () => getOrderByOperators,
  getTableColumns: () => getTableColumns,
  getTableLikeName: () => getTableLikeName,
  getTableName: () => getTableName,
  gt: () => gt,
  gte: () => gte,
  hasOwnEntityKind: () => hasOwnEntityKind,
  haveSameKeys: () => haveSameKeys,
  ilike: () => ilike,
  inArray: () => inArray,
  is: () => is,
  isDriverValueEncoder: () => isDriverValueEncoder,
  isNotNull: () => isNotNull,
  isNull: () => isNull,
  isSQLWrapper: () => isSQLWrapper,
  isTable: () => isTable,
  like: () => like,
  lt: () => lt,
  lte: () => lte,
  mapColumnsInAliasedSQLToAlias: () => mapColumnsInAliasedSQLToAlias,
  mapColumnsInSQLToAlias: () => mapColumnsInSQLToAlias,
  mapRelationalRow: () => mapRelationalRow,
  mapResultRow: () => mapResultRow,
  mapUpdateSet: () => mapUpdateSet,
  max: () => max,
  min: () => min,
  name: () => name,
  ne: () => ne,
  noopDecoder: () => noopDecoder,
  noopEncoder: () => noopEncoder,
  noopMapper: () => noopMapper,
  normalizeRelation: () => normalizeRelation,
  not: () => not,
  notBetween: () => notBetween,
  notExists: () => notExists,
  notIlike: () => notIlike,
  notInArray: () => notInArray,
  notLike: () => notLike,
  or: () => or,
  orderSelectedFields: () => orderSelectedFields,
  param: () => param,
  placeholder: () => placeholder,
  relations: () => relations,
  sql: () => sql,
  sum: () => sum,
  sumDistinct: () => sumDistinct
});
var init_drizzle_orm = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/index.js"() {
    "use strict";
    init_alias();
    init_column_builder();
    init_column();
    init_entity();
    init_errors();
    init_expressions2();
    init_logger();
    init_operations();
    init_query_promise();
    init_relations();
    init_sql2();
    init_subquery();
    init_table();
    init_utils();
    init_view_common();
  }
});

// node_modules/.pnpm/chalk@5.3.0/node_modules/chalk/source/vendor/ansi-styles/index.js
function assembleStyles() {
  const codes = /* @__PURE__ */ new Map();
  for (const [groupName, group] of Object.entries(styles)) {
    for (const [styleName, style] of Object.entries(group)) {
      styles[styleName] = {
        open: `\x1B[${style[0]}m`,
        close: `\x1B[${style[1]}m`
      };
      group[styleName] = styles[styleName];
      codes.set(style[0], style[1]);
    }
    Object.defineProperty(styles, groupName, {
      value: group,
      enumerable: false
    });
  }
  Object.defineProperty(styles, "codes", {
    value: codes,
    enumerable: false
  });
  styles.color.close = "\x1B[39m";
  styles.bgColor.close = "\x1B[49m";
  styles.color.ansi = wrapAnsi16();
  styles.color.ansi256 = wrapAnsi256();
  styles.color.ansi16m = wrapAnsi16m();
  styles.bgColor.ansi = wrapAnsi16(ANSI_BACKGROUND_OFFSET);
  styles.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
  styles.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
  Object.defineProperties(styles, {
    rgbToAnsi256: {
      value(red, green, blue) {
        if (red === green && green === blue) {
          if (red < 8) {
            return 16;
          }
          if (red > 248) {
            return 231;
          }
          return Math.round((red - 8) / 247 * 24) + 232;
        }
        return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
      },
      enumerable: false
    },
    hexToRgb: {
      value(hex) {
        const matches = /[a-f\d]{6}|[a-f\d]{3}/i.exec(hex.toString(16));
        if (!matches) {
          return [0, 0, 0];
        }
        let [colorString] = matches;
        if (colorString.length === 3) {
          colorString = [...colorString].map((character) => character + character).join("");
        }
        const integer = Number.parseInt(colorString, 16);
        return [
          /* eslint-disable no-bitwise */
          integer >> 16 & 255,
          integer >> 8 & 255,
          integer & 255
          /* eslint-enable no-bitwise */
        ];
      },
      enumerable: false
    },
    hexToAnsi256: {
      value: (hex) => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
      enumerable: false
    },
    ansi256ToAnsi: {
      value(code) {
        if (code < 8) {
          return 30 + code;
        }
        if (code < 16) {
          return 90 + (code - 8);
        }
        let red;
        let green;
        let blue;
        if (code >= 232) {
          red = ((code - 232) * 10 + 8) / 255;
          green = red;
          blue = red;
        } else {
          code -= 16;
          const remainder = code % 36;
          red = Math.floor(code / 36) / 5;
          green = Math.floor(remainder / 6) / 5;
          blue = remainder % 6 / 5;
        }
        const value = Math.max(red, green, blue) * 2;
        if (value === 0) {
          return 30;
        }
        let result = 30 + (Math.round(blue) << 2 | Math.round(green) << 1 | Math.round(red));
        if (value === 2) {
          result += 60;
        }
        return result;
      },
      enumerable: false
    },
    rgbToAnsi: {
      value: (red, green, blue) => styles.ansi256ToAnsi(styles.rgbToAnsi256(red, green, blue)),
      enumerable: false
    },
    hexToAnsi: {
      value: (hex) => styles.ansi256ToAnsi(styles.hexToAnsi256(hex)),
      enumerable: false
    }
  });
  return styles;
}
var ANSI_BACKGROUND_OFFSET, wrapAnsi16, wrapAnsi256, wrapAnsi16m, styles, modifierNames, foregroundColorNames, backgroundColorNames, colorNames, ansiStyles, ansi_styles_default;
var init_ansi_styles = __esm({
  "node_modules/.pnpm/chalk@5.3.0/node_modules/chalk/source/vendor/ansi-styles/index.js"() {
    "use strict";
    ANSI_BACKGROUND_OFFSET = 10;
    wrapAnsi16 = (offset = 0) => (code) => `\x1B[${code + offset}m`;
    wrapAnsi256 = (offset = 0) => (code) => `\x1B[${38 + offset};5;${code}m`;
    wrapAnsi16m = (offset = 0) => (red, green, blue) => `\x1B[${38 + offset};2;${red};${green};${blue}m`;
    styles = {
      modifier: {
        reset: [0, 0],
        // 21 isn't widely supported and 22 does the same thing
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        overline: [53, 55],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29]
      },
      color: {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        // Bright color
        blackBright: [90, 39],
        gray: [90, 39],
        // Alias of `blackBright`
        grey: [90, 39],
        // Alias of `blackBright`
        redBright: [91, 39],
        greenBright: [92, 39],
        yellowBright: [93, 39],
        blueBright: [94, 39],
        magentaBright: [95, 39],
        cyanBright: [96, 39],
        whiteBright: [97, 39]
      },
      bgColor: {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        // Bright color
        bgBlackBright: [100, 49],
        bgGray: [100, 49],
        // Alias of `bgBlackBright`
        bgGrey: [100, 49],
        // Alias of `bgBlackBright`
        bgRedBright: [101, 49],
        bgGreenBright: [102, 49],
        bgYellowBright: [103, 49],
        bgBlueBright: [104, 49],
        bgMagentaBright: [105, 49],
        bgCyanBright: [106, 49],
        bgWhiteBright: [107, 49]
      }
    };
    modifierNames = Object.keys(styles.modifier);
    foregroundColorNames = Object.keys(styles.color);
    backgroundColorNames = Object.keys(styles.bgColor);
    colorNames = [...foregroundColorNames, ...backgroundColorNames];
    ansiStyles = assembleStyles();
    ansi_styles_default = ansiStyles;
  }
});

// node_modules/.pnpm/chalk@5.3.0/node_modules/chalk/source/vendor/supports-color/index.js
import process2 from "process";
import os from "os";
import tty from "tty";
function hasFlag(flag, argv = globalThis.Deno ? globalThis.Deno.args : process2.argv) {
  const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
  const position = argv.indexOf(prefix + flag);
  const terminatorPosition = argv.indexOf("--");
  return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
}
function envForceColor() {
  if ("FORCE_COLOR" in env) {
    if (env.FORCE_COLOR === "true") {
      return 1;
    }
    if (env.FORCE_COLOR === "false") {
      return 0;
    }
    return env.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(env.FORCE_COLOR, 10), 3);
  }
}
function translateLevel(level) {
  if (level === 0) {
    return false;
  }
  return {
    level,
    hasBasic: true,
    has256: level >= 2,
    has16m: level >= 3
  };
}
function _supportsColor(haveStream, { streamIsTTY, sniffFlags = true } = {}) {
  const noFlagForceColor = envForceColor();
  if (noFlagForceColor !== void 0) {
    flagForceColor = noFlagForceColor;
  }
  const forceColor = sniffFlags ? flagForceColor : noFlagForceColor;
  if (forceColor === 0) {
    return 0;
  }
  if (sniffFlags) {
    if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
      return 3;
    }
    if (hasFlag("color=256")) {
      return 2;
    }
  }
  if ("TF_BUILD" in env && "AGENT_NAME" in env) {
    return 1;
  }
  if (haveStream && !streamIsTTY && forceColor === void 0) {
    return 0;
  }
  const min2 = forceColor || 0;
  if (env.TERM === "dumb") {
    return min2;
  }
  if (process2.platform === "win32") {
    const osRelease = os.release().split(".");
    if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
      return Number(osRelease[2]) >= 14931 ? 3 : 2;
    }
    return 1;
  }
  if ("CI" in env) {
    if ("GITHUB_ACTIONS" in env || "GITEA_ACTIONS" in env) {
      return 3;
    }
    if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "BUILDKITE", "DRONE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
      return 1;
    }
    return min2;
  }
  if ("TEAMCITY_VERSION" in env) {
    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
  }
  if (env.COLORTERM === "truecolor") {
    return 3;
  }
  if (env.TERM === "xterm-kitty") {
    return 3;
  }
  if ("TERM_PROGRAM" in env) {
    const version2 = Number.parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
    switch (env.TERM_PROGRAM) {
      case "iTerm.app": {
        return version2 >= 3 ? 3 : 2;
      }
      case "Apple_Terminal": {
        return 2;
      }
    }
  }
  if (/-256(color)?$/i.test(env.TERM)) {
    return 2;
  }
  if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
    return 1;
  }
  if ("COLORTERM" in env) {
    return 1;
  }
  return min2;
}
function createSupportsColor(stream, options = {}) {
  const level = _supportsColor(stream, {
    streamIsTTY: stream && stream.isTTY,
    ...options
  });
  return translateLevel(level);
}
var env, flagForceColor, supportsColor, supports_color_default;
var init_supports_color = __esm({
  "node_modules/.pnpm/chalk@5.3.0/node_modules/chalk/source/vendor/supports-color/index.js"() {
    "use strict";
    ({ env } = process2);
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
      flagForceColor = 0;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      flagForceColor = 1;
    }
    supportsColor = {
      stdout: createSupportsColor({ isTTY: tty.isatty(1) }),
      stderr: createSupportsColor({ isTTY: tty.isatty(2) })
    };
    supports_color_default = supportsColor;
  }
});

// node_modules/.pnpm/chalk@5.3.0/node_modules/chalk/source/utilities.js
function stringReplaceAll(string12, substring, replacer) {
  let index4 = string12.indexOf(substring);
  if (index4 === -1) {
    return string12;
  }
  const substringLength = substring.length;
  let endIndex = 0;
  let returnValue = "";
  do {
    returnValue += string12.slice(endIndex, index4) + substring + replacer;
    endIndex = index4 + substringLength;
    index4 = string12.indexOf(substring, endIndex);
  } while (index4 !== -1);
  returnValue += string12.slice(endIndex);
  return returnValue;
}
function stringEncaseCRLFWithFirstIndex(string12, prefix, postfix, index4) {
  let endIndex = 0;
  let returnValue = "";
  do {
    const gotCR = string12[index4 - 1] === "\r";
    returnValue += string12.slice(endIndex, gotCR ? index4 - 1 : index4) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
    endIndex = index4 + 1;
    index4 = string12.indexOf("\n", endIndex);
  } while (index4 !== -1);
  returnValue += string12.slice(endIndex);
  return returnValue;
}
var init_utilities = __esm({
  "node_modules/.pnpm/chalk@5.3.0/node_modules/chalk/source/utilities.js"() {
    "use strict";
  }
});

// node_modules/.pnpm/chalk@5.3.0/node_modules/chalk/source/index.js
function createChalk(options) {
  return chalkFactory(options);
}
var stdoutColor, stderrColor, GENERATOR, STYLER, IS_EMPTY, levelMapping, styles2, applyOptions, chalkFactory, getModelAnsi, usedModels, proto, createStyler, createBuilder, applyStyle, chalk, chalkStderr, source_default;
var init_source = __esm({
  "node_modules/.pnpm/chalk@5.3.0/node_modules/chalk/source/index.js"() {
    "use strict";
    init_ansi_styles();
    init_supports_color();
    init_utilities();
    ({ stdout: stdoutColor, stderr: stderrColor } = supports_color_default);
    GENERATOR = Symbol("GENERATOR");
    STYLER = Symbol("STYLER");
    IS_EMPTY = Symbol("IS_EMPTY");
    levelMapping = [
      "ansi",
      "ansi",
      "ansi256",
      "ansi16m"
    ];
    styles2 = /* @__PURE__ */ Object.create(null);
    applyOptions = (object12, options = {}) => {
      if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
        throw new Error("The `level` option should be an integer from 0 to 3");
      }
      const colorLevel = stdoutColor ? stdoutColor.level : 0;
      object12.level = options.level === void 0 ? colorLevel : options.level;
    };
    chalkFactory = (options) => {
      const chalk2 = (...strings) => strings.join(" ");
      applyOptions(chalk2, options);
      Object.setPrototypeOf(chalk2, createChalk.prototype);
      return chalk2;
    };
    Object.setPrototypeOf(createChalk.prototype, Function.prototype);
    for (const [styleName, style] of Object.entries(ansi_styles_default)) {
      styles2[styleName] = {
        get() {
          const builder = createBuilder(this, createStyler(style.open, style.close, this[STYLER]), this[IS_EMPTY]);
          Object.defineProperty(this, styleName, { value: builder });
          return builder;
        }
      };
    }
    styles2.visible = {
      get() {
        const builder = createBuilder(this, this[STYLER], true);
        Object.defineProperty(this, "visible", { value: builder });
        return builder;
      }
    };
    getModelAnsi = (model, level, type, ...arguments_) => {
      if (model === "rgb") {
        if (level === "ansi16m") {
          return ansi_styles_default[type].ansi16m(...arguments_);
        }
        if (level === "ansi256") {
          return ansi_styles_default[type].ansi256(ansi_styles_default.rgbToAnsi256(...arguments_));
        }
        return ansi_styles_default[type].ansi(ansi_styles_default.rgbToAnsi(...arguments_));
      }
      if (model === "hex") {
        return getModelAnsi("rgb", level, type, ...ansi_styles_default.hexToRgb(...arguments_));
      }
      return ansi_styles_default[type][model](...arguments_);
    };
    usedModels = ["rgb", "hex", "ansi256"];
    for (const model of usedModels) {
      styles2[model] = {
        get() {
          const { level } = this;
          return function(...arguments_) {
            const styler = createStyler(getModelAnsi(model, levelMapping[level], "color", ...arguments_), ansi_styles_default.color.close, this[STYLER]);
            return createBuilder(this, styler, this[IS_EMPTY]);
          };
        }
      };
      const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
      styles2[bgModel] = {
        get() {
          const { level } = this;
          return function(...arguments_) {
            const styler = createStyler(getModelAnsi(model, levelMapping[level], "bgColor", ...arguments_), ansi_styles_default.bgColor.close, this[STYLER]);
            return createBuilder(this, styler, this[IS_EMPTY]);
          };
        }
      };
    }
    proto = Object.defineProperties(() => {
    }, {
      ...styles2,
      level: {
        enumerable: true,
        get() {
          return this[GENERATOR].level;
        },
        set(level) {
          this[GENERATOR].level = level;
        }
      }
    });
    createStyler = (open, close, parent) => {
      let openAll;
      let closeAll;
      if (parent === void 0) {
        openAll = open;
        closeAll = close;
      } else {
        openAll = parent.openAll + open;
        closeAll = close + parent.closeAll;
      }
      return {
        open,
        close,
        openAll,
        closeAll,
        parent
      };
    };
    createBuilder = (self, _styler, _isEmpty) => {
      const builder = (...arguments_) => applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
      Object.setPrototypeOf(builder, proto);
      builder[GENERATOR] = self;
      builder[STYLER] = _styler;
      builder[IS_EMPTY] = _isEmpty;
      return builder;
    };
    applyStyle = (self, string12) => {
      if (self.level <= 0 || !string12) {
        return self[IS_EMPTY] ? "" : string12;
      }
      let styler = self[STYLER];
      if (styler === void 0) {
        return string12;
      }
      const { openAll, closeAll } = styler;
      if (string12.includes("\x1B")) {
        while (styler !== void 0) {
          string12 = stringReplaceAll(string12, styler.close, styler.open);
          styler = styler.parent;
        }
      }
      const lfIndex = string12.indexOf("\n");
      if (lfIndex !== -1) {
        string12 = stringEncaseCRLFWithFirstIndex(string12, closeAll, openAll, lfIndex);
      }
      return openAll + string12 + closeAll;
    };
    Object.defineProperties(createChalk.prototype, styles2);
    chalk = createChalk();
    chalkStderr = createChalk({ level: stderrColor ? stderrColor.level : 0 });
    source_default = chalk;
  }
});

// src/global.ts
var originUUID, snapshotVersion, mapValues, mapKeys, mapEntries;
var init_global = __esm({
  "src/global.ts"() {
    "use strict";
    originUUID = "00000000-0000-0000-0000-000000000000";
    snapshotVersion = "6";
    mapValues = (obj, map) => {
      const result = Object.keys(obj).reduce(function(result2, key) {
        result2[key] = map(obj[key]);
        return result2;
      }, {});
      return result;
    };
    mapKeys = (obj, map) => {
      const result = Object.fromEntries(
        Object.entries(obj).map(([key, val]) => {
          const newKey = map(key, val);
          return [newKey, val];
        })
      );
      return result;
    };
    mapEntries = (obj, map) => {
      const result = Object.fromEntries(
        Object.entries(obj).map(([key, val]) => {
          const [newKey, newVal] = map(key, val);
          return [newKey, newVal];
        })
      );
      return result;
    };
  }
});

// src/serializer/mysqlSchema.ts
import {
  any,
  boolean,
  string,
  enum as enumType,
  object,
  record,
  literal,
  union as union2
} from "zod";
var index, fk, column, tableV3, compositePK, uniqueConstraint, tableV4, table, kitInternals, dialect, schemaHash, schemaInternalV3, schemaInternalV4, schemaInternalV5, schemaInternal, schemaV3, schemaV4, schemaV5, schema, tableSquashedV4, tableSquashed, schemaSquashed, schemaSquashedV4, MySqlSquasher, squashMysqlScheme, mysqlSchema, mysqlSchemaV5, mysqlSchemaSquashed, backwardCompatibleMysqlSchema, dryMySql;
var init_mysqlSchema = __esm({
  "src/serializer/mysqlSchema.ts"() {
    "use strict";
    init_global();
    index = object({
      name: string(),
      columns: string().array(),
      isUnique: boolean(),
      using: enumType(["btree", "hash"]).optional(),
      algorithm: enumType(["default", "inplace", "copy"]).optional(),
      lock: enumType(["default", "none", "shared", "exclusive"]).optional()
    }).strict();
    fk = object({
      name: string(),
      tableFrom: string(),
      columnsFrom: string().array(),
      tableTo: string(),
      columnsTo: string().array(),
      onUpdate: string().optional(),
      onDelete: string().optional()
    }).strict();
    column = object({
      name: string(),
      type: string(),
      primaryKey: boolean(),
      notNull: boolean(),
      autoincrement: boolean().optional(),
      default: any().optional(),
      onUpdate: any().optional()
    }).strict();
    tableV3 = object({
      name: string(),
      columns: record(string(), column),
      indexes: record(string(), index),
      foreignKeys: record(string(), fk)
    }).strict();
    compositePK = object({
      name: string(),
      columns: string().array()
    }).strict();
    uniqueConstraint = object({
      name: string(),
      columns: string().array()
    }).strict();
    tableV4 = object({
      name: string(),
      schema: string().optional(),
      columns: record(string(), column),
      indexes: record(string(), index),
      foreignKeys: record(string(), fk)
    }).strict();
    table = object({
      name: string(),
      columns: record(string(), column),
      indexes: record(string(), index),
      foreignKeys: record(string(), fk),
      compositePrimaryKeys: record(string(), compositePK),
      uniqueConstraints: record(string(), uniqueConstraint).default({})
    }).strict();
    kitInternals = object({
      tables: record(
        string(),
        object({
          columns: record(
            string(),
            object({ isDefaultAnExpression: boolean().optional() }).optional()
          )
        }).optional()
      )
    }).optional();
    dialect = literal("mysql");
    schemaHash = object({
      id: string(),
      prevId: string()
    });
    schemaInternalV3 = object({
      version: literal("3"),
      dialect,
      tables: record(string(), tableV3)
    }).strict();
    schemaInternalV4 = object({
      version: literal("4"),
      dialect,
      tables: record(string(), tableV4),
      schemas: record(string(), string())
    }).strict();
    schemaInternalV5 = object({
      version: literal("5"),
      dialect,
      tables: record(string(), table),
      schemas: record(string(), string()),
      _meta: object({
        schemas: record(string(), string()),
        tables: record(string(), string()),
        columns: record(string(), string())
      }),
      internal: kitInternals
    }).strict();
    schemaInternal = object({
      version: literal("5"),
      dialect,
      tables: record(string(), table),
      _meta: object({
        tables: record(string(), string()),
        columns: record(string(), string())
      }),
      internal: kitInternals
    }).strict();
    schemaV3 = schemaInternalV3.merge(schemaHash);
    schemaV4 = schemaInternalV4.merge(schemaHash);
    schemaV5 = schemaInternalV5.merge(schemaHash);
    schema = schemaInternal.merge(schemaHash);
    tableSquashedV4 = object({
      name: string(),
      schema: string().optional(),
      columns: record(string(), column),
      indexes: record(string(), string()),
      foreignKeys: record(string(), string())
    }).strict();
    tableSquashed = object({
      name: string(),
      columns: record(string(), column),
      indexes: record(string(), string()),
      foreignKeys: record(string(), string()),
      compositePrimaryKeys: record(string(), string()),
      uniqueConstraints: record(string(), string()).default({})
    }).strict();
    schemaSquashed = object({
      version: literal("5"),
      dialect,
      tables: record(string(), tableSquashed)
    }).strict();
    schemaSquashedV4 = object({
      version: literal("4"),
      dialect,
      tables: record(string(), tableSquashedV4),
      schemas: record(string(), string())
    }).strict();
    MySqlSquasher = {
      squashIdx: (idx) => {
        index.parse(idx);
        return `${idx.name};${idx.columns.join(",")};${idx.isUnique};${idx.using ?? ""};${idx.algorithm ?? ""};${idx.lock ?? ""}`;
      },
      unsquashIdx: (input) => {
        const [name2, columnsString, isUnique, using, algorithm, lock] = input.split(";");
        const destructed = {
          name: name2,
          columns: columnsString.split(","),
          isUnique: isUnique === "true",
          using: using ? using : void 0,
          algorithm: algorithm ? algorithm : void 0,
          lock: lock ? lock : void 0
        };
        return index.parse(destructed);
      },
      squashPK: (pk) => {
        return `${pk.name};${pk.columns.join(",")}`;
      },
      unsquashPK: (pk) => {
        const splitted = pk.split(";");
        return { name: splitted[0], columns: splitted[1].split(",") };
      },
      squashUnique: (unq) => {
        return `${unq.name};${unq.columns.join(",")}`;
      },
      unsquashUnique: (unq) => {
        const [name2, columns] = unq.split(";");
        return { name: name2, columns: columns.split(",") };
      },
      squashFK: (fk4) => {
        return `${fk4.name};${fk4.tableFrom};${fk4.columnsFrom.join(",")};${fk4.tableTo};${fk4.columnsTo.join(",")};${fk4.onUpdate ?? ""};${fk4.onDelete ?? ""}`;
      },
      unsquashFK: (input) => {
        const [
          name2,
          tableFrom,
          columnsFromStr,
          tableTo,
          columnsToStr,
          onUpdate,
          onDelete
        ] = input.split(";");
        const result = fk.parse({
          name: name2,
          tableFrom,
          columnsFrom: columnsFromStr.split(","),
          tableTo,
          columnsTo: columnsToStr.split(","),
          onUpdate,
          onDelete
        });
        return result;
      }
    };
    squashMysqlScheme = (json) => {
      const mappedTables = Object.fromEntries(
        Object.entries(json.tables).map((it) => {
          const squashedIndexes = mapValues(it[1].indexes, (index4) => {
            return MySqlSquasher.squashIdx(index4);
          });
          const squashedFKs = mapValues(it[1].foreignKeys, (fk4) => {
            return MySqlSquasher.squashFK(fk4);
          });
          const squashedPKs = mapValues(it[1].compositePrimaryKeys, (pk) => {
            return MySqlSquasher.squashPK(pk);
          });
          const squashedUniqueConstraints = mapValues(
            it[1].uniqueConstraints,
            (unq) => {
              return MySqlSquasher.squashUnique(unq);
            }
          );
          return [
            it[0],
            {
              name: it[1].name,
              columns: it[1].columns,
              indexes: squashedIndexes,
              foreignKeys: squashedFKs,
              compositePrimaryKeys: squashedPKs,
              uniqueConstraints: squashedUniqueConstraints
            }
          ];
        })
      );
      return {
        version: "5",
        dialect: json.dialect,
        tables: mappedTables
      };
    };
    mysqlSchema = schema;
    mysqlSchemaV5 = schemaV5;
    mysqlSchemaSquashed = schemaSquashed;
    backwardCompatibleMysqlSchema = union2([mysqlSchemaV5, schema]);
    dryMySql = mysqlSchema.parse({
      version: "5",
      dialect: "mysql",
      id: originUUID,
      prevId: "",
      tables: {},
      schemas: {},
      _meta: {
        schemas: {},
        tables: {},
        columns: {}
      }
    });
  }
});

// src/serializer/pgSchema.ts
import {
  any as any2,
  boolean as boolean2,
  string as string2,
  object as object2,
  record as record2,
  literal as literal2,
  union as union3,
  array,
  number
} from "zod";
var indexV2, columnV2, tableV2, enumSchemaV1, enumSchema, pgSchemaV2, references, columnV1, tableV1, pgSchemaV1, index2, fk2, column2, tableV32, compositePK2, uniqueConstraint2, tableV42, table2, schemaHash2, kitInternals2, pgSchemaInternalV3, pgSchemaInternalV4, pgSchemaInternalV5, pgSchemaExternal, pgSchemaInternal, tableSquashed2, tableSquashedV42, pgSchemaSquashedV4, pgSchemaSquashed, pgSchemaV3, pgSchemaV4, pgSchemaV5, pgSchema, backwardCompatiblePgSchema, PgSquasher, squashPgScheme, dryPg;
var init_pgSchema = __esm({
  "src/serializer/pgSchema.ts"() {
    "use strict";
    init_global();
    indexV2 = object2({
      name: string2(),
      columns: record2(
        string2(),
        object2({
          name: string2()
        })
      ),
      isUnique: boolean2()
    }).strict();
    columnV2 = object2({
      name: string2(),
      type: string2(),
      primaryKey: boolean2(),
      notNull: boolean2(),
      default: any2().optional(),
      references: string2().optional()
    }).strict();
    tableV2 = object2({
      name: string2(),
      columns: record2(string2(), columnV2),
      indexes: record2(string2(), indexV2)
    }).strict();
    enumSchemaV1 = object2({
      name: string2(),
      values: record2(string2(), string2())
    }).strict();
    enumSchema = object2({
      name: string2(),
      schema: string2(),
      values: string2().array()
    }).strict();
    pgSchemaV2 = object2({
      version: literal2("2"),
      tables: record2(string2(), tableV2),
      enums: record2(string2(), enumSchemaV1)
    }).strict();
    references = object2({
      foreignKeyName: string2(),
      table: string2(),
      column: string2(),
      onDelete: string2().optional(),
      onUpdate: string2().optional()
    }).strict();
    columnV1 = object2({
      name: string2(),
      type: string2(),
      primaryKey: boolean2(),
      notNull: boolean2(),
      default: any2().optional(),
      references: references.optional()
    }).strict();
    tableV1 = object2({
      name: string2(),
      columns: record2(string2(), columnV1),
      indexes: record2(string2(), indexV2)
    }).strict();
    pgSchemaV1 = object2({
      version: literal2("1"),
      tables: record2(string2(), tableV1),
      enums: record2(string2(), enumSchemaV1)
    }).strict();
    index2 = object2({
      name: string2(),
      columns: string2().array(),
      isUnique: boolean2()
    }).strict();
    fk2 = object2({
      name: string2(),
      tableFrom: string2(),
      columnsFrom: string2().array(),
      tableTo: string2(),
      schemaTo: string2().optional(),
      columnsTo: string2().array(),
      onUpdate: string2().optional(),
      onDelete: string2().optional()
    }).strict();
    column2 = object2({
      name: string2(),
      type: string2(),
      typeSchema: string2().optional(),
      primaryKey: boolean2(),
      notNull: boolean2(),
      default: any2().optional(),
      isUnique: any2().optional(),
      uniqueName: string2().optional(),
      nullsNotDistinct: boolean2().optional()
    }).strict();
    tableV32 = object2({
      name: string2(),
      columns: record2(string2(), column2),
      indexes: record2(string2(), index2),
      foreignKeys: record2(string2(), fk2)
    }).strict();
    compositePK2 = object2({
      name: string2(),
      columns: string2().array()
    }).strict();
    uniqueConstraint2 = object2({
      name: string2(),
      columns: string2().array(),
      nullsNotDistinct: boolean2()
    }).strict();
    tableV42 = object2({
      name: string2(),
      schema: string2(),
      columns: record2(string2(), column2),
      indexes: record2(string2(), index2),
      foreignKeys: record2(string2(), fk2)
    }).strict();
    table2 = object2({
      name: string2(),
      schema: string2(),
      columns: record2(string2(), column2),
      indexes: record2(string2(), index2),
      foreignKeys: record2(string2(), fk2),
      compositePrimaryKeys: record2(string2(), compositePK2),
      uniqueConstraints: record2(string2(), uniqueConstraint2).default({})
    }).strict();
    schemaHash2 = object2({
      id: string2(),
      prevId: string2()
    });
    kitInternals2 = object2({
      tables: record2(
        string2(),
        object2({
          columns: record2(
            string2(),
            object2({
              isArray: boolean2().optional(),
              dimensions: number().optional(),
              rawType: string2().optional()
            }).optional()
          )
        }).optional()
      )
    }).optional();
    pgSchemaInternalV3 = object2({
      version: literal2("3"),
      dialect: literal2("pg"),
      tables: record2(string2(), tableV32),
      enums: record2(string2(), enumSchemaV1)
    }).strict();
    pgSchemaInternalV4 = object2({
      version: literal2("4"),
      dialect: literal2("pg"),
      tables: record2(string2(), tableV42),
      enums: record2(string2(), enumSchemaV1),
      schemas: record2(string2(), string2())
    }).strict();
    pgSchemaInternalV5 = object2({
      version: literal2("5"),
      dialect: literal2("pg"),
      tables: record2(string2(), table2),
      enums: record2(string2(), enumSchemaV1),
      schemas: record2(string2(), string2()),
      _meta: object2({
        schemas: record2(string2(), string2()),
        tables: record2(string2(), string2()),
        columns: record2(string2(), string2())
      }),
      internal: kitInternals2
    }).strict();
    pgSchemaExternal = object2({
      version: literal2("5"),
      dialect: literal2("pg"),
      tables: array(table2),
      enums: array(enumSchemaV1),
      schemas: array(object2({ name: string2() })),
      _meta: object2({
        schemas: record2(string2(), string2()),
        tables: record2(string2(), string2()),
        columns: record2(string2(), string2())
      })
    }).strict();
    pgSchemaInternal = object2({
      version: literal2("6"),
      dialect: literal2("postgresql"),
      tables: record2(string2(), table2),
      enums: record2(string2(), enumSchema),
      schemas: record2(string2(), string2()),
      _meta: object2({
        schemas: record2(string2(), string2()),
        tables: record2(string2(), string2()),
        columns: record2(string2(), string2())
      }),
      internal: kitInternals2
    }).strict();
    tableSquashed2 = object2({
      name: string2(),
      schema: string2(),
      columns: record2(string2(), column2),
      indexes: record2(string2(), string2()),
      foreignKeys: record2(string2(), string2()),
      compositePrimaryKeys: record2(string2(), string2()),
      uniqueConstraints: record2(string2(), string2())
    }).strict();
    tableSquashedV42 = object2({
      name: string2(),
      schema: string2(),
      columns: record2(string2(), column2),
      indexes: record2(string2(), string2()),
      foreignKeys: record2(string2(), string2())
    }).strict();
    pgSchemaSquashedV4 = object2({
      version: literal2("4"),
      dialect: literal2("pg"),
      tables: record2(string2(), tableSquashedV42),
      enums: record2(string2(), enumSchemaV1),
      schemas: record2(string2(), string2())
    }).strict();
    pgSchemaSquashed = object2({
      version: literal2("6"),
      dialect: literal2("postgresql"),
      tables: record2(string2(), tableSquashed2),
      enums: record2(string2(), enumSchema),
      schemas: record2(string2(), string2())
    }).strict();
    pgSchemaV3 = pgSchemaInternalV3.merge(schemaHash2);
    pgSchemaV4 = pgSchemaInternalV4.merge(schemaHash2);
    pgSchemaV5 = pgSchemaInternalV5.merge(schemaHash2);
    pgSchema = pgSchemaInternal.merge(schemaHash2);
    backwardCompatiblePgSchema = union3([pgSchemaV5, pgSchema]);
    PgSquasher = {
      squashIdx: (idx) => {
        index2.parse(idx);
        return `${idx.name};${idx.columns.join(",")};${idx.isUnique}`;
      },
      unsquashIdx: (input) => {
        const [name2, columnsString, isUnique] = input.split(";");
        const result = index2.parse({
          name: name2,
          columns: columnsString.split(","),
          isUnique: isUnique === "true"
        });
        return result;
      },
      squashFK: (fk4) => {
        return `${fk4.name};${fk4.tableFrom};${fk4.columnsFrom.join(",")};${fk4.tableTo};${fk4.columnsTo.join(",")};${fk4.onUpdate ?? ""};${fk4.onDelete ?? ""};${fk4.schemaTo || "public"}`;
      },
      squashPK: (pk) => {
        return `${pk.columns.join(",")};${pk.name}`;
      },
      unsquashPK: (pk) => {
        const splitted = pk.split(";");
        return { name: splitted[1], columns: splitted[0].split(",") };
      },
      squashUnique: (unq) => {
        return `${unq.name};${unq.columns.join(",")};${unq.nullsNotDistinct}`;
      },
      unsquashUnique: (unq) => {
        const [name2, columns, nullsNotDistinct] = unq.split(";");
        return {
          name: name2,
          columns: columns.split(","),
          nullsNotDistinct: nullsNotDistinct === "true"
        };
      },
      unsquashFK: (input) => {
        const [
          name2,
          tableFrom,
          columnsFromStr,
          tableTo,
          columnsToStr,
          onUpdate,
          onDelete,
          schemaTo
        ] = input.split(";");
        const result = fk2.parse({
          name: name2,
          tableFrom,
          columnsFrom: columnsFromStr.split(","),
          schemaTo,
          tableTo,
          columnsTo: columnsToStr.split(","),
          onUpdate,
          onDelete
        });
        return result;
      }
    };
    squashPgScheme = (json) => {
      const mappedTables = Object.fromEntries(
        Object.entries(json.tables).map((it) => {
          const squashedIndexes = mapValues(it[1].indexes, (index4) => {
            return PgSquasher.squashIdx(index4);
          });
          const squashedFKs = mapValues(it[1].foreignKeys, (fk4) => {
            return PgSquasher.squashFK(fk4);
          });
          const squashedPKs = mapValues(it[1].compositePrimaryKeys, (pk) => {
            return PgSquasher.squashPK(pk);
          });
          const squashedUniqueConstraints = mapValues(
            it[1].uniqueConstraints,
            (unq) => {
              return PgSquasher.squashUnique(unq);
            }
          );
          return [
            it[0],
            {
              name: it[1].name,
              schema: it[1].schema,
              columns: it[1].columns,
              indexes: squashedIndexes,
              foreignKeys: squashedFKs,
              compositePrimaryKeys: squashedPKs,
              uniqueConstraints: squashedUniqueConstraints
            }
          ];
        })
      );
      return {
        version: "6",
        dialect: json.dialect,
        tables: mappedTables,
        enums: json.enums,
        schemas: json.schemas
      };
    };
    dryPg = pgSchema.parse({
      version: snapshotVersion,
      dialect: "postgresql",
      id: originUUID,
      prevId: "",
      tables: {},
      enums: {},
      schemas: {},
      _meta: {
        schemas: {},
        tables: {},
        columns: {}
      }
    });
  }
});

// src/serializer/sqliteSchema.ts
import {
  any as any3,
  boolean as boolean3,
  string as string3,
  enum as enumType3,
  object as object3,
  record as record3,
  literal as literal3,
  union as union4
} from "zod";
var index3, fk3, compositePK3, column3, tableV33, uniqueConstraint3, table3, dialect2, schemaHash3, schemaInternalV32, schemaInternalV42, schemaInternalV52, latestVersion, schemaInternal2, schemaV32, schemaV42, schemaV52, schema2, tableSquashed3, schemaSquashed2, SQLiteSquasher, squashSqliteScheme, drySQLite, sqliteSchemaV5, sqliteSchema, SQLiteSchemaSquashed, backwardCompatibleSqliteSchema;
var init_sqliteSchema = __esm({
  "src/serializer/sqliteSchema.ts"() {
    "use strict";
    init_global();
    index3 = object3({
      name: string3(),
      columns: string3().array(),
      where: string3().optional(),
      isUnique: boolean3()
    }).strict();
    fk3 = object3({
      name: string3(),
      tableFrom: string3(),
      columnsFrom: string3().array(),
      tableTo: string3(),
      columnsTo: string3().array(),
      onUpdate: string3().optional(),
      onDelete: string3().optional()
    }).strict();
    compositePK3 = object3({
      columns: string3().array(),
      name: string3().optional()
    }).strict();
    column3 = object3({
      name: string3(),
      type: string3(),
      primaryKey: boolean3(),
      notNull: boolean3(),
      autoincrement: boolean3().optional(),
      default: any3().optional()
    }).strict();
    tableV33 = object3({
      name: string3(),
      columns: record3(string3(), column3),
      indexes: record3(string3(), index3),
      foreignKeys: record3(string3(), fk3)
    }).strict();
    uniqueConstraint3 = object3({
      name: string3(),
      columns: string3().array()
    }).strict();
    table3 = object3({
      name: string3(),
      columns: record3(string3(), column3),
      indexes: record3(string3(), index3),
      foreignKeys: record3(string3(), fk3),
      compositePrimaryKeys: record3(string3(), compositePK3),
      uniqueConstraints: record3(string3(), uniqueConstraint3).default({})
    }).strict();
    dialect2 = enumType3(["sqlite"]);
    schemaHash3 = object3({
      id: string3(),
      prevId: string3()
    }).strict();
    schemaInternalV32 = object3({
      version: literal3("3"),
      dialect: dialect2,
      tables: record3(string3(), tableV33),
      enums: object3({})
    }).strict();
    schemaInternalV42 = object3({
      version: literal3("4"),
      dialect: dialect2,
      tables: record3(string3(), table3),
      enums: object3({})
    }).strict();
    schemaInternalV52 = object3({
      version: literal3("5"),
      dialect: dialect2,
      tables: record3(string3(), table3),
      enums: object3({}),
      _meta: object3({
        tables: record3(string3(), string3()),
        columns: record3(string3(), string3())
      })
    }).strict();
    latestVersion = literal3("6");
    schemaInternal2 = object3({
      version: latestVersion,
      dialect: dialect2,
      tables: record3(string3(), table3),
      enums: object3({}),
      _meta: object3({
        tables: record3(string3(), string3()),
        columns: record3(string3(), string3())
      })
    }).strict();
    schemaV32 = schemaInternalV32.merge(schemaHash3).strict();
    schemaV42 = schemaInternalV42.merge(schemaHash3).strict();
    schemaV52 = schemaInternalV52.merge(schemaHash3).strict();
    schema2 = schemaInternal2.merge(schemaHash3).strict();
    tableSquashed3 = object3({
      name: string3(),
      columns: record3(string3(), column3),
      indexes: record3(string3(), string3()),
      foreignKeys: record3(string3(), string3()),
      compositePrimaryKeys: record3(string3(), string3()),
      uniqueConstraints: record3(string3(), string3()).default({})
    }).strict();
    schemaSquashed2 = object3({
      version: latestVersion,
      dialect: dialect2,
      tables: record3(string3(), tableSquashed3),
      enums: any3()
    }).strict();
    SQLiteSquasher = {
      squashIdx: (idx) => {
        index3.parse(idx);
        return `${idx.name};${idx.columns.join(",")};${idx.isUnique};${idx.where ?? ""}`;
      },
      unsquashIdx: (input) => {
        const [name2, columnsString, isUnique, where] = input.split(";");
        const result = index3.parse({
          name: name2,
          columns: columnsString.split(","),
          isUnique: isUnique === "true",
          where: where ?? void 0
        });
        return result;
      },
      squashUnique: (unq) => {
        return `${unq.name};${unq.columns.join(",")}`;
      },
      unsquashUnique: (unq) => {
        const [name2, columns] = unq.split(";");
        return { name: name2, columns: columns.split(",") };
      },
      squashFK: (fk4) => {
        return `${fk4.name};${fk4.tableFrom};${fk4.columnsFrom.join(",")};${fk4.tableTo};${fk4.columnsTo.join(",")};${fk4.onUpdate ?? ""};${fk4.onDelete ?? ""}`;
      },
      unsquashFK: (input) => {
        const [
          name2,
          tableFrom,
          columnsFromStr,
          tableTo,
          columnsToStr,
          onUpdate,
          onDelete
        ] = input.split(";");
        const result = fk3.parse({
          name: name2,
          tableFrom,
          columnsFrom: columnsFromStr.split(","),
          tableTo,
          columnsTo: columnsToStr.split(","),
          onUpdate,
          onDelete
        });
        return result;
      },
      squashPK: (pk) => {
        return pk.columns.join(",");
      },
      unsquashPK: (pk) => {
        return pk.split(",");
      }
    };
    squashSqliteScheme = (json) => {
      const mappedTables = Object.fromEntries(
        Object.entries(json.tables).map((it) => {
          const squashedIndexes = mapValues(it[1].indexes, (index4) => {
            return SQLiteSquasher.squashIdx(index4);
          });
          const squashedFKs = mapValues(it[1].foreignKeys, (fk4) => {
            return SQLiteSquasher.squashFK(fk4);
          });
          const squashedPKs = mapValues(it[1].compositePrimaryKeys, (pk) => {
            return SQLiteSquasher.squashPK(pk);
          });
          const squashedUniqueConstraints = mapValues(
            it[1].uniqueConstraints,
            (unq) => {
              return SQLiteSquasher.squashUnique(unq);
            }
          );
          return [
            it[0],
            {
              name: it[1].name,
              columns: it[1].columns,
              indexes: squashedIndexes,
              foreignKeys: squashedFKs,
              compositePrimaryKeys: squashedPKs,
              uniqueConstraints: squashedUniqueConstraints
            }
          ];
        })
      );
      return {
        version: "6",
        dialect: json.dialect,
        tables: mappedTables,
        enums: json.enums
      };
    };
    drySQLite = schema2.parse({
      version: "6",
      dialect: "sqlite",
      id: originUUID,
      prevId: "",
      tables: {},
      enums: {},
      _meta: {
        tables: {},
        columns: {}
      }
    });
    sqliteSchemaV5 = schemaV52;
    sqliteSchema = schema2;
    SQLiteSchemaSquashed = schemaSquashed2;
    backwardCompatibleSqliteSchema = union4([sqliteSchemaV5, schema2]);
  }
});

// src/utils.ts
var copy, prepareMigrationMeta, schemaRenameKey, tableRenameKey, columnRenameKey;
var init_utils4 = __esm({
  "src/utils.ts"() {
    "use strict";
    init_views();
    init_mysqlSchema();
    init_pgSchema();
    init_sqliteSchema();
    init_global();
    copy = (it) => {
      return JSON.parse(JSON.stringify(it));
    };
    prepareMigrationMeta = (schemas, tables, columns) => {
      const _meta = {
        schemas: {},
        tables: {},
        columns: {}
      };
      schemas.forEach((it) => {
        const from = schemaRenameKey(it.from);
        const to = schemaRenameKey(it.to);
        _meta.schemas[from] = to;
      });
      tables.forEach((it) => {
        const from = tableRenameKey(it.from);
        const to = tableRenameKey(it.to);
        _meta.tables[from] = to;
      });
      columns.forEach((it) => {
        const from = columnRenameKey(it.from.table, it.from.schema, it.from.column);
        const to = columnRenameKey(it.to.table, it.to.schema, it.to.column);
        _meta.columns[from] = to;
      });
      return _meta;
    };
    schemaRenameKey = (it) => {
      return it;
    };
    tableRenameKey = (it) => {
      const out = it.schema ? `"${it.schema}"."${it.name}"` : `"${it.name}"`;
      return out;
    };
    columnRenameKey = (table4, schema4, column4) => {
      const out = schema4 ? `"${schema4}"."${table4}"."${column4}"` : `"${table4}"."${column4}"`;
      return out;
    };
  }
});

// src/cli/views.ts
import { Prompt, render, SelectState, TaskView } from "hanji";
var error, isRenamePromptItem, ResolveColumnSelect, tableKey, ResolveSelect, ResolveSchemasSelect, Spinner, ProgressView;
var init_views = __esm({
  "src/cli/views.ts"() {
    "use strict";
    init_source();
    init_utils4();
    error = (error2, greyMsg = "") => {
      return `${source_default.red.bold("Err:")} ${error2} ${greyMsg ? source_default.grey(greyMsg) : ""}`.trim();
    };
    isRenamePromptItem = (item) => {
      return "from" in item && "to" in item;
    };
    ResolveColumnSelect = class extends Prompt {
      constructor(tableName, base, data) {
        super();
        this.tableName = tableName;
        this.base = base;
        this.on("attach", (terminal) => terminal.toggleCursor("hide"));
        this.data = new SelectState(data);
        this.data.bind(this);
      }
      render(status) {
        if (status === "submitted" || status === "aborted") {
          return "\n";
        }
        let text = `
Is ${source_default.bold.blue(
          this.base.name
        )} column in ${source_default.bold.blue(
          this.tableName
        )} table created or renamed from another column?
`;
        const isSelectedRenamed = isRenamePromptItem(
          this.data.items[this.data.selectedIdx]
        );
        const selectedPrefix = isSelectedRenamed ? source_default.yellow("\u276F ") : source_default.green("\u276F ");
        const labelLength = this.data.items.filter((it) => isRenamePromptItem(it)).map((it) => {
          return this.base.name.length + 3 + it["from"].name.length;
        }).reduce((a, b) => {
          if (a > b) {
            return a;
          }
          return b;
        }, 0);
        this.data.items.forEach((it, idx) => {
          const isSelected = idx === this.data.selectedIdx;
          const isRenamed = isRenamePromptItem(it);
          const title = isRenamed ? `${it.from.name} \u203A ${it.to.name}`.padEnd(labelLength, " ") : it.name.padEnd(labelLength, " ");
          const label = isRenamed ? `${source_default.yellow("~")} ${title} ${source_default.gray("rename column")}` : `${source_default.green("+")} ${title} ${source_default.gray("create column")}`;
          text += isSelected ? `${selectedPrefix}${label}` : `  ${label}`;
          text += idx != this.data.items.length - 1 ? "\n" : "";
        });
        return text;
      }
      result() {
        return this.data.items[this.data.selectedIdx];
      }
    };
    tableKey = (it) => {
      return it.schema === "public" || !it.schema ? it.name : `${it.schema}.${it.name}`;
    };
    ResolveSelect = class extends Prompt {
      constructor(base, data, entityType) {
        super();
        this.base = base;
        this.entityType = entityType;
        this.on("attach", (terminal) => terminal.toggleCursor("hide"));
        this.state = new SelectState(data);
        this.state.bind(this);
        this.base = base;
      }
      render(status) {
        if (status === "submitted" || status === "aborted") {
          return "";
        }
        const key = tableKey(this.base);
        let text = `
Is ${source_default.bold.blue(key)} ${this.entityType} created or renamed from another ${this.entityType}?
`;
        const isSelectedRenamed = isRenamePromptItem(
          this.state.items[this.state.selectedIdx]
        );
        const selectedPrefix = isSelectedRenamed ? source_default.yellow("\u276F ") : source_default.green("\u276F ");
        const labelLength = this.state.items.filter((it) => isRenamePromptItem(it)).map((_2) => {
          const it = _2;
          const keyFrom = tableKey(it.from);
          return key.length + 3 + keyFrom.length;
        }).reduce((a, b) => {
          if (a > b) {
            return a;
          }
          return b;
        }, 0);
        const entityType = this.entityType;
        this.state.items.forEach((it, idx) => {
          const isSelected = idx === this.state.selectedIdx;
          const isRenamed = isRenamePromptItem(it);
          const title = isRenamed ? `${tableKey(it.from)} \u203A ${tableKey(it.to)}`.padEnd(labelLength, " ") : tableKey(it).padEnd(labelLength, " ");
          const label = isRenamed ? `${source_default.yellow("~")} ${title} ${source_default.gray(`rename ${entityType}`)}` : `${source_default.green("+")} ${title} ${source_default.gray(`create ${entityType}`)}`;
          text += isSelected ? `${selectedPrefix}${label}` : `  ${label}`;
          text += idx != this.state.items.length - 1 ? "\n" : "";
        });
        return text;
      }
      result() {
        return this.state.items[this.state.selectedIdx];
      }
    };
    ResolveSchemasSelect = class extends Prompt {
      constructor(base, data) {
        super();
        this.base = base;
        this.on("attach", (terminal) => terminal.toggleCursor("hide"));
        this.state = new SelectState(data);
        this.state.bind(this);
        this.base = base;
      }
      render(status) {
        if (status === "submitted" || status === "aborted") {
          return "";
        }
        let text = `
Is ${source_default.bold.blue(
          this.base.name
        )} schema created or renamed from another schema?
`;
        const isSelectedRenamed = isRenamePromptItem(
          this.state.items[this.state.selectedIdx]
        );
        const selectedPrefix = isSelectedRenamed ? source_default.yellow("\u276F ") : source_default.green("\u276F ");
        const labelLength = this.state.items.filter((it) => isRenamePromptItem(it)).map((it) => {
          return this.base.name.length + 3 + it["from"].name.length;
        }).reduce((a, b) => {
          if (a > b) {
            return a;
          }
          return b;
        }, 0);
        this.state.items.forEach((it, idx) => {
          const isSelected = idx === this.state.selectedIdx;
          const isRenamed = isRenamePromptItem(it);
          const title = isRenamed ? `${it.from.name} \u203A ${it.to.name}`.padEnd(labelLength, " ") : it.name.padEnd(labelLength, " ");
          const label = isRenamed ? `${source_default.yellow("~")} ${title} ${source_default.gray("rename schema")}` : `${source_default.green("+")} ${title} ${source_default.gray("create schema")}`;
          text += isSelected ? `${selectedPrefix}${label}` : `  ${label}`;
          text += idx != this.state.items.length - 1 ? "\n" : "";
        });
        return text;
      }
      result() {
        return this.state.items[this.state.selectedIdx];
      }
    };
    Spinner = class {
      constructor(frames) {
        this.frames = frames;
        this.offset = 0;
        this.tick = () => {
          this.iterator();
        };
        this.value = () => {
          return this.frames[this.offset];
        };
        this.iterator = () => {
          this.offset += 1;
          this.offset %= frames.length - 1;
        };
      }
    };
    ProgressView = class extends TaskView {
      constructor(progressText, successText) {
        super();
        this.progressText = progressText;
        this.successText = successText;
        this.spinner = new Spinner("\u28F7\u28EF\u28DF\u287F\u28BF\u28FB\u28FD\u28FE".split(""));
        this.timeout = setInterval(() => {
          this.spinner.tick();
          this.requestLayout();
        }, 128);
        this.on("detach", () => clearInterval(this.timeout));
      }
      render(status) {
        if (status === "pending") {
          const spin = this.spinner.value();
          return `[${spin}] ${this.progressText}`;
        }
        return `[${source_default.green("\u2713")}] ${this.successText}`;
      }
    };
  }
});

// src/serializer/index.ts
import * as glob from "glob";
var sqlToStr;
var init_serializer = __esm({
  "src/serializer/index.ts"() {
    "use strict";
    init_views();
    sqlToStr = (sql2) => {
      return sql2.toQuery({
        escapeName: () => {
          throw new Error("we don't support params for `sql` default values");
        },
        escapeParam: () => {
          throw new Error("we don't support params for `sql` default values");
        },
        escapeString: () => {
          throw new Error("we don't support params for `sql` default values");
        }
      }).sql;
    };
  }
});

// src/cli/validations/outputs.ts
var withStyle;
var init_outputs = __esm({
  "src/cli/validations/outputs.ts"() {
    "use strict";
    init_source();
    withStyle = {
      error: (str) => `${source_default.red(`${source_default.white.bgRed(" Invalid input ")} ${str}`)}`,
      warning: (str) => `${source_default.white.bgGray(" Warning ")} ${str}`,
      errorWarning: (str) => `${source_default.red(`${source_default.white.bgRed(" Warning ")} ${str}`)}`,
      fullWarning: (str) => `${source_default.black.bgYellow("[Warning]")} ${source_default.bold(str)}`,
      suggestion: (str) => `${source_default.white.bgGray(" Suggestion ")} ${str}`,
      info: (str) => `${source_default.grey(str)}`
    };
  }
});

// src/cli/validations/mysql.ts
import { boolean as boolean4, coerce, object as object4, string as string4, union as union5 } from "zod";
var mysqlCredentials;
var init_mysql = __esm({
  "src/cli/validations/mysql.ts"() {
    "use strict";
    init_outputs();
    mysqlCredentials = union5([
      object4({
        host: string4(),
        port: coerce.number().optional(),
        user: string4().default("mysql"),
        password: string4().optional(),
        database: string4(),
        ssl: union5([
          string4(),
          object4({
            pfx: string4().optional(),
            key: string4().optional(),
            passphrase: string4().optional(),
            cert: string4().optional(),
            ca: union5([string4(), string4().array()]).optional(),
            crl: union5([string4(), string4().array()]).optional(),
            ciphers: string4().optional(),
            rejectUnauthorized: boolean4().optional()
          })
        ]).optional()
      }),
      object4({
        url: string4()
      })
    ]);
  }
});

// src/cli/validations/pg.ts
import { coerce as coerce2, literal as literal4, object as object5, string as string5, union as union6 } from "zod";
var postgresCredentials;
var init_pg = __esm({
  "src/cli/validations/pg.ts"() {
    "use strict";
    init_outputs();
    postgresCredentials = union6([
      object5({
        host: string5(),
        port: coerce2.number().optional(),
        user: string5().default("postgres"),
        password: string5().optional(),
        database: string5(),
        ssl: coerce2.boolean().optional()
      }),
      object5({
        url: string5()
      }),
      object5({
        driver: literal4("aws-data-api"),
        database: string5(),
        secretArn: string5(),
        resourceArn: string5()
      })
    ]);
  }
});

// src/cli/validations/sqlite.ts
import { literal as literal5, object as object6, string as string6, union as union7 } from "zod";
var sqliteCredentials;
var init_sqlite = __esm({
  "src/cli/validations/sqlite.ts"() {
    "use strict";
    init_outputs();
    sqliteCredentials = union7([
      object6({
        driver: literal5("turso"),
        url: string6(),
        authToken: string6()
      }),
      object6({
        driver: literal5("d1-http"),
        accountId: string6(),
        databaseId: string6(),
        token: string6()
      }),
      object6({
        url: string6()
      })
    ]);
  }
});

// src/schemaValidator.ts
import { enum as enumType4, union as union8 } from "zod";
var dialect3, commonSquashedSchema, commonSchema;
var init_schemaValidator = __esm({
  "src/schemaValidator.ts"() {
    "use strict";
    init_mysqlSchema();
    init_pgSchema();
    init_sqliteSchema();
    dialect3 = enumType4(["postgresql", "mysql", "sqlite"]);
    commonSquashedSchema = union8([
      pgSchemaSquashed,
      mysqlSchemaSquashed,
      SQLiteSchemaSquashed
    ]);
    commonSchema = union8([
      pgSchema,
      mysqlSchema,
      sqliteSchema
    ]);
  }
});

// src/cli/validations/common.ts
import {
  object as object7,
  string as string7,
  union as union9,
  boolean as boolean5,
  literal as literal6
} from "zod";
var sqliteDriver, postgresDriver, mysqlDriver, driver, configCommonSchema, casing, introspectParams, configIntrospectCliSchema, configGenerateSchema, configPushSchema;
var init_common2 = __esm({
  "src/cli/validations/common.ts"() {
    "use strict";
    init_outputs();
    init_schemaValidator();
    sqliteDriver = union9([
      literal6("better-sqlite"),
      literal6("turso"),
      literal6("libsql"),
      literal6("d1"),
      literal6("d1-http"),
      literal6("expo")
    ]);
    postgresDriver = literal6("aws-data-api");
    mysqlDriver = literal6("mysql2");
    driver = union9([sqliteDriver, postgresDriver, mysqlDriver]);
    configCommonSchema = object7({
      dialect: dialect3,
      schema: union9([string7(), string7().array()]).optional(),
      out: string7().optional(),
      breakpoints: boolean5().optional().default(true),
      driver: driver.optional(),
      tablesFilter: union9([string7(), string7().array()]).optional(),
      schemaFilter: union9([string7(), string7().array()]).default(["public"])
    });
    casing = union9([literal6("camel"), literal6("preserve")]).default(
      "preserve"
    );
    introspectParams = object7({
      schema: union9([string7(), string7().array()]).optional(),
      out: string7().optional().default("./drizzle"),
      breakpoints: boolean5().default(true),
      tablesFilter: union9([string7(), string7().array()]).optional(),
      schemaFilter: union9([string7(), string7().array()]).default(["public"]),
      introspect: object7({
        casing
      }).default({ casing: "camel" })
    });
    configIntrospectCliSchema = object7({
      schema: union9([string7(), string7().array()]).optional(),
      out: string7().optional().default("./drizzle"),
      breakpoints: boolean5().default(true),
      tablesFilter: union9([string7(), string7().array()]).optional(),
      schemaFilter: union9([string7(), string7().array()]).default(["public"]),
      introspectCasing: union9([literal6("camel"), literal6("preserve")]).default(
        "camel"
      )
    });
    configGenerateSchema = object7({
      schema: union9([string7(), string7().array()]),
      out: string7().optional().default("./drizzle"),
      breakpoints: boolean5().default(true)
    });
    configPushSchema = object7({
      dialect: dialect3,
      schema: union9([string7(), string7().array()]),
      tablesFilter: union9([string7(), string7().array()]).optional(),
      schemaFilter: union9([string7(), string7().array()]).default(["public"]),
      verbose: boolean5().default(false),
      strict: boolean5().default(false),
      out: string7().optional()
    });
  }
});

// src/cli/validations/cli.ts
import { boolean as boolean6, intersection as intersection2, object as object8, string as string8, union as union10 } from "zod";
var cliConfigGenerate, pushParams, pullParams, configCheck, cliConfigCheck;
var init_cli = __esm({
  "src/cli/validations/cli.ts"() {
    "use strict";
    init_schemaValidator();
    init_common2();
    cliConfigGenerate = object8({
      dialect: dialect3.optional(),
      schema: union10([string8(), string8().array()]).optional(),
      out: string8().optional().default("./drizzle"),
      config: string8().optional(),
      name: string8().optional(),
      breakpoints: boolean6().optional().default(true),
      custom: boolean6().optional().default(false)
    }).strict();
    pushParams = object8({
      dialect: dialect3,
      schema: union10([string8(), string8().array()]).optional(),
      tablesFilter: union10([string8(), string8().array()]).optional(),
      schemaFilter: union10([string8(), string8().array()]).optional().default(["public"]),
      verbose: boolean6().optional(),
      strict: boolean6().optional()
    }).passthrough();
    pullParams = object8({
      config: string8().optional(),
      dialect: dialect3.optional(),
      out: string8().optional().default("drizzle"),
      tablesFilter: union10([string8(), string8().array()]).optional(),
      schemaFilter: union10([string8(), string8().array()]).optional().default(["public"]),
      introspectCasing: casing,
      breakpoints: boolean6().optional().default(true)
    }).passthrough();
    configCheck = object8({
      dialect: dialect3.optional(),
      out: string8().optional()
    });
    cliConfigCheck = intersection2(
      object8({
        config: string8().optional()
      }),
      configCheck
    );
  }
});

// src/cli/validations/studio.ts
import { coerce as coerce4, intersection as intersection3, object as object9, string as string9, union as union11 } from "zod";
var credentials, studioCliParams, studioConfig;
var init_studio = __esm({
  "src/cli/validations/studio.ts"() {
    "use strict";
    init_mysql();
    init_sqlite();
    init_schemaValidator();
    init_pg();
    credentials = intersection3(
      postgresCredentials,
      mysqlCredentials,
      sqliteCredentials
    );
    studioCliParams = object9({
      port: coerce4.number().optional().default(4983),
      host: string9().optional().default("127.0.0.1"),
      config: string9().optional()
    });
    studioConfig = object9({
      dialect: dialect3,
      schema: union11([string9(), string9().array()]).optional()
    });
  }
});

// src/cli/commands/_es5.ts
var es5_exports = {};
__export(es5_exports, {
  default: () => es5_default
});
var _, es5_default;
var init_es5 = __esm({
  "src/cli/commands/_es5.ts"() {
    "use strict";
    _ = "";
    es5_default = _;
  }
});

// src/cli/commands/utils.ts
import { render as render2 } from "hanji";
import { object as object10, string as string10 } from "zod";
var assertES5, safeRegister, migrateCliParams, migrateConfig;
var init_utils5 = __esm({
  "src/cli/commands/utils.ts"() {
    "use strict";
    init_serializer();
    init_views();
    init_global();
    init_mysql();
    init_pg();
    init_sqlite();
    init_common2();
    init_schemaValidator();
    init_cli();
    init_outputs();
    init_studio();
    assertES5 = async (unregister) => {
      try {
        init_es5();
      } catch (e) {
        if ("errors" in e && Array.isArray(e.errors) && e.errors.length > 0) {
          const es5Error = e.errors.filter(
            (it) => it.text?.includes(`("es5") is not supported yet`)
          ).length > 0;
          if (es5Error) {
            console.log(
              error(
                `Please change compilerOptions.target from 'es5' to 'es6' or above in your tsconfig.json`
              )
            );
            process.exit(1);
          }
        }
        console.error(e);
        process.exit(1);
      }
    };
    safeRegister = async () => {
      const { register } = await import("esbuild-register/dist/node");
      let res;
      try {
        res = register({
          format: "cjs",
          loader: "ts"
        });
      } catch {
        res = {
          unregister: () => {
          }
        };
      }
      await assertES5(res.unregister);
      return res;
    };
    migrateCliParams = object10({
      config: string10().optional()
    });
    migrateConfig = object10({
      dialect: dialect3,
      out: string10().optional().default("drizzle"),
      migrations: object10({
        table: string10().optional(),
        schema: string10().optional()
      }).optional()
    });
  }
});

// src/serializer/pgImports.ts
var prepareFromExports;
var init_pgImports = __esm({
  "src/serializer/pgImports.ts"() {
    "use strict";
    init_pg_core();
    init_drizzle_orm();
    init_utils5();
    prepareFromExports = (exports) => {
      const tables = [];
      const enums = [];
      const schemas = [];
      const i0values = Object.values(exports);
      i0values.forEach((t) => {
        if (isPgEnum(t)) {
          enums.push(t);
          return;
        }
        if (is(t, PgTable)) {
          tables.push(t);
        }
        if (is(t, PgSchema)) {
          schemas.push(t);
        }
      });
      return { tables, enums, schemas };
    };
  }
});

// src/serializer/pgSerializer.ts
var dialect4, indexName, generatePgSnapshot, trimChar, fromDatabase, columnToDefault, defaultForColumn;
var init_pgSerializer = __esm({
  "src/serializer/pgSerializer.ts"() {
    "use strict";
    init_pg_core();
    init_pg_core();
    init_drizzle_orm();
    init_serializer();
    init_source();
    init_outputs();
    dialect4 = new PgDialect();
    indexName = (tableName, columns) => {
      return `${tableName}_${columns.join("_")}_index`;
    };
    generatePgSnapshot = (tables, enums, schemas, schemaFilter) => {
      const result = {};
      const indexesInSchema = {};
      for (const table4 of tables) {
        const {
          name: tableName,
          columns,
          indexes,
          foreignKeys,
          checks,
          schema: schema4,
          primaryKeys,
          uniqueConstraints
        } = getTableConfig(table4);
        if (schemaFilter && !schemaFilter.includes(schema4 ?? "public")) {
          continue;
        }
        const columnsObject = {};
        const indexesObject = {};
        const foreignKeysObject = {};
        const primaryKeysObject = {};
        const uniqueConstraintObject = {};
        columns.forEach((column4) => {
          const notNull = column4.notNull;
          const primaryKey = column4.primary;
          const sqlTypeLowered = column4.getSQLType().toLowerCase();
          const typeSchema = is(column4, PgEnumColumn) ? column4.enum.schema || "public" : void 0;
          const columnToSet = {
            name: column4.name,
            type: column4.getSQLType(),
            typeSchema,
            primaryKey,
            notNull
          };
          if (column4.isUnique) {
            const existingUnique = uniqueConstraintObject[column4.uniqueName];
            if (typeof existingUnique !== "undefined") {
              console.log(
                `
${withStyle.errorWarning(`We've found duplicated unique constraint names in ${source_default.underline.blue(
                  tableName
                )} table. 
          The unique constraint ${source_default.underline.blue(
                  column4.uniqueName
                )} on the ${source_default.underline.blue(
                  column4.name
                )} column is confilcting with a unique constraint name already defined for ${source_default.underline.blue(
                  existingUnique.columns.join(",")
                )} columns
`)}`
              );
              process.exit(1);
            }
            uniqueConstraintObject[column4.uniqueName] = {
              name: column4.uniqueName,
              nullsNotDistinct: column4.uniqueType === "not distinct",
              columns: [columnToSet.name]
            };
          }
          if (column4.default !== void 0) {
            if (is(column4.default, SQL)) {
              columnToSet.default = sqlToStr(column4.default);
            } else {
              if (typeof column4.default === "string") {
                columnToSet.default = `'${column4.default}'`;
              } else {
                if (sqlTypeLowered === "jsonb" || sqlTypeLowered === "json") {
                  columnToSet.default = `'${JSON.stringify(
                    column4.default
                  )}'::${sqlTypeLowered}`;
                } else if (column4.default instanceof Date) {
                  if (sqlTypeLowered === "date") {
                    columnToSet.default = `'${column4.default.toISOString().split("T")[0]}'`;
                  } else if (sqlTypeLowered === "timestamp") {
                    columnToSet.default = `'${column4.default.toISOString().replace("T", " ").slice(0, 23)}'`;
                  } else {
                    columnToSet.default = `'${column4.default.toISOString()}'`;
                  }
                } else {
                  columnToSet.default = column4.default;
                }
              }
            }
          }
          columnsObject[column4.name] = columnToSet;
        });
        primaryKeys.map((pk) => {
          const columnNames = pk.columns.map((c) => c.name);
          primaryKeysObject[pk.getName()] = {
            name: pk.getName(),
            columns: columnNames
          };
        });
        uniqueConstraints?.map((unq) => {
          const columnNames = unq.columns.map((c) => c.name);
          const name2 = unq.name ?? uniqueKeyName(table4, columnNames);
          const existingUnique = uniqueConstraintObject[name2];
          if (typeof existingUnique !== "undefined") {
            console.log(
              `
${withStyle.errorWarning(`We've found duplicated unique constraint names in ${source_default.underline.blue(
                tableName
              )} table. 
        The unique constraint ${source_default.underline.blue(
                name2
              )} on the ${source_default.underline.blue(
                columnNames.join(",")
              )} columns is confilcting with a unique constraint name already defined for ${source_default.underline.blue(
                existingUnique.columns.join(",")
              )} columns
`)}`
            );
            process.exit(1);
          }
          uniqueConstraintObject[name2] = {
            name: unq.name,
            nullsNotDistinct: unq.nullsNotDistinct,
            columns: columnNames
          };
        });
        const fks = foreignKeys.map((fk4) => {
          const name2 = fk4.getName();
          const tableFrom = tableName;
          const onDelete = fk4.onDelete;
          const onUpdate = fk4.onUpdate;
          const reference = fk4.reference();
          const tableTo = getTableName(reference.foreignTable);
          const schemaTo = getTableConfig(reference.foreignTable).schema;
          const columnsFrom = reference.columns.map((it) => it.name);
          const columnsTo = reference.foreignColumns.map((it) => it.name);
          return {
            name: name2,
            tableFrom,
            tableTo,
            schemaTo,
            columnsFrom,
            columnsTo,
            onDelete,
            onUpdate
          };
        });
        fks.forEach((it) => {
          foreignKeysObject[it.name] = it;
        });
        indexes.forEach((value) => {
          const columns2 = value.config.columns;
          let name2 = value.config.name;
          name2 = name2 ? name2 : indexName(
            tableName,
            columns2.map((it) => it.name)
          );
          let indexColumns = columns2.map((it) => {
            if (is(it, SQL)) {
              return dialect4.sqlToQuery(it).sql;
            } else {
              return it.name;
            }
          });
          if (typeof indexesInSchema[schema4 ?? "public"] !== "undefined") {
            if (indexesInSchema[schema4 ?? "public"].includes(name2)) {
              console.log(
                `
${withStyle.errorWarning(
                  `We've found duplicated index name across ${source_default.underline.blue(
                    schema4 ?? "public"
                  )} schema. Please rename your index in either the ${source_default.underline.blue(
                    tableName
                  )} table or the table with the duplicated index name`
                )}`
              );
              process.exit(1);
            }
            indexesInSchema[schema4 ?? "public"].push(name2);
          } else {
            indexesInSchema[schema4 ?? "public"] = [name2];
          }
          indexesObject[name2] = {
            name: name2,
            columns: indexColumns,
            isUnique: value.config.unique ?? false
          };
        });
        const tableKey2 = `${schema4 ?? "public"}.${tableName}`;
        result[tableKey2] = {
          name: tableName,
          schema: schema4 ?? "",
          columns: columnsObject,
          indexes: indexesObject,
          foreignKeys: foreignKeysObject,
          compositePrimaryKeys: primaryKeysObject,
          uniqueConstraints: uniqueConstraintObject
        };
      }
      const enumsToReturn = enums.reduce((map, obj) => {
        const enumSchema3 = obj.schema || "public";
        const key = `${enumSchema3}.${obj.enumName}`;
        map[key] = {
          name: obj.enumName,
          schema: enumSchema3,
          values: obj.enumValues
        };
        return map;
      }, {});
      const schemasObject = Object.fromEntries(
        schemas.filter((it) => {
          if (schemaFilter) {
            return schemaFilter.includes(it.schemaName) && it.schemaName !== "public";
          } else {
            return it.schemaName !== "public";
          }
        }).map((it) => [it.schemaName, it.schemaName])
      );
      return {
        version: "6",
        dialect: "postgresql",
        tables: result,
        enums: enumsToReturn,
        schemas: schemasObject,
        _meta: {
          schemas: {},
          tables: {},
          columns: {}
        }
      };
    };
    trimChar = (str, char) => {
      let start = 0;
      let end = str.length;
      while (start < end && str[start] === char)
        ++start;
      while (end > start && str[end - 1] === char)
        --end;
      return start > 0 || end < str.length ? str.substring(start, end) : str.toString();
    };
    fromDatabase = async (db, tablesFilter = () => true, schemaFilters, progressCallback) => {
      const result = {};
      const internals = { tables: {} };
      const where = schemaFilters.map((t) => `table_schema = '${t}'`).join(" or ");
      const allTables = await db.query(
        `SELECT table_schema, table_name FROM information_schema.tables${where === "" ? "" : ` WHERE ${where}`};`
      );
      const schemas = new Set(allTables.map((it) => it.table_schema));
      schemas.delete("public");
      const allSchemas = await db.query(`select s.nspname as table_schema
  from pg_catalog.pg_namespace s
  join pg_catalog.pg_user u on u.usesysid = s.nspowner
  where nspname not in ('information_schema', 'pg_catalog', 'public')
        and nspname not like 'pg_toast%'
        and nspname not like 'pg_temp_%'
  order by table_schema;`);
      allSchemas.forEach((item) => {
        if (schemaFilters.includes(item.table_schema)) {
          schemas.add(item.table_schema);
        }
      });
      let columnsCount = 0;
      let indexesCount = 0;
      let foreignKeysCount = 0;
      let tableCount = 0;
      const allEnums = await db.query(
        `select n.nspname as enum_schema,
  t.typname as enum_name,
  e.enumlabel as enum_value,
  e.enumsortorder as sort_order
  from pg_type t
  join pg_enum e on t.oid = e.enumtypid
  join pg_catalog.pg_namespace n ON n.oid = t.typnamespace
  order by enum_schema, enum_name, sort_order;`
      );
      const enumsToReturn = {};
      for (const dbEnum of allEnums) {
        const enumName = dbEnum.enum_name;
        const enumValue = dbEnum.enum_value;
        const enumSchema3 = dbEnum.enum_schema || "public";
        const key = `${enumSchema3}.${enumName}`;
        if (enumsToReturn[key] !== void 0 && enumsToReturn[key] !== null) {
          enumsToReturn[key].values.push(enumValue);
        } else {
          enumsToReturn[key] = {
            name: enumName,
            values: [enumValue],
            schema: enumSchema3
          };
        }
      }
      if (progressCallback) {
        progressCallback("enums", Object.keys(enumsToReturn).length, "done");
      }
      const all = allTables.map((row) => {
        return new Promise(async (res, rej) => {
          const tableName = row.table_name;
          if (!tablesFilter(tableName))
            return res("");
          tableCount += 1;
          const tableSchema = row.table_schema;
          try {
            const columnToReturn = {};
            const indexToReturn = {};
            const foreignKeysToReturn = {};
            const primaryKeys = {};
            const uniqueConstrains = {};
            const tableResponse = await db.query(
              `SELECT a.attrelid::regclass::text, a.attname, is_nullable, a.attndims as array_dimensions
        , CASE WHEN a.atttypid = ANY ('{int,int8,int2}'::regtype[])
             AND EXISTS (
                SELECT FROM pg_attrdef ad
                WHERE  ad.adrelid = a.attrelid
                AND    ad.adnum   = a.attnum
                AND    pg_get_expr(ad.adbin, ad.adrelid)
                     = 'nextval('''
                    || (pg_get_serial_sequence (a.attrelid::regclass::text
                                             , a.attname))::regclass
                    || '''::regclass)'
                )
           THEN CASE a.atttypid
                   WHEN 'int'::regtype  THEN 'serial'
                   WHEN 'int8'::regtype THEN 'bigserial'
                   WHEN 'int2'::regtype THEN 'smallserial'
                END
           ELSE format_type(a.atttypid, a.atttypmod)
           END AS data_type, INFORMATION_SCHEMA.COLUMNS.table_name, INFORMATION_SCHEMA.COLUMNS.column_name, INFORMATION_SCHEMA.COLUMNS.column_default, INFORMATION_SCHEMA.COLUMNS.data_type as additional_dt, INFORMATION_SCHEMA.COLUMNS.udt_name as enum_name
   FROM  pg_attribute  a
   JOIN INFORMATION_SCHEMA.COLUMNS ON INFORMATION_SCHEMA.COLUMNS.column_name = a.attname
   WHERE  a.attrelid = '"${tableSchema}"."${tableName}"'::regclass and INFORMATION_SCHEMA.COLUMNS.table_name = '${tableName}' and INFORMATION_SCHEMA.COLUMNS.table_schema = '${tableSchema}'
   AND    a.attnum > 0
   AND    NOT a.attisdropped
   ORDER  BY a.attnum;`
            );
            const tableConstraints = await db.query(
              `SELECT c.column_name, c.data_type, constraint_type, constraint_name, constraint_schema
      FROM information_schema.table_constraints tc
      JOIN information_schema.constraint_column_usage AS ccu USING (constraint_schema, constraint_name)
      JOIN information_schema.columns AS c ON c.table_schema = tc.constraint_schema
        AND tc.table_name = c.table_name AND ccu.column_name = c.column_name
      WHERE tc.table_name = '${tableName}' and constraint_schema = '${tableSchema}';`
            );
            columnsCount += tableResponse.length;
            if (progressCallback) {
              progressCallback("columns", columnsCount, "fetching");
            }
            const tableForeignKeys = await db.query(
              `SELECT
          tc.table_schema,
          tc.constraint_name,
          tc.table_name,
          kcu.column_name,
          (
              SELECT ccu.table_schema
              FROM information_schema.constraint_column_usage ccu
              WHERE ccu.constraint_name = tc.constraint_name
              LIMIT 1
          ) AS foreign_table_schema,
          ccu.table_name AS foreign_table_name,
          ccu.column_name AS foreign_column_name,
          rc.delete_rule, 
          rc.update_rule
      FROM
          information_schema.table_constraints AS tc
          JOIN information_schema.key_column_usage AS kcu
            ON tc.constraint_name = kcu.constraint_name
            AND tc.table_schema = kcu.table_schema
          JOIN information_schema.constraint_column_usage AS ccu
            ON ccu.constraint_name = tc.constraint_name
          JOIN information_schema.referential_constraints AS rc
            ON ccu.constraint_name = rc.constraint_name
    WHERE tc.constraint_type = 'FOREIGN KEY' AND tc.table_name='${tableName}' and tc.table_schema='${tableSchema}';`
            );
            foreignKeysCount += tableForeignKeys.length;
            if (progressCallback) {
              progressCallback("fks", foreignKeysCount, "fetching");
            }
            for (const fk4 of tableForeignKeys) {
              const columnFrom = fk4.column_name;
              const tableTo = fk4.foreign_table_name;
              const columnTo = fk4.foreign_column_name;
              const schemaTo = fk4.foreign_table_schema;
              const foreignKeyName = fk4.constraint_name;
              const onUpdate = fk4.update_rule.toLowerCase();
              const onDelete = fk4.delete_rule.toLowerCase();
              if (typeof foreignKeysToReturn[foreignKeyName] !== "undefined") {
                foreignKeysToReturn[foreignKeyName].columnsFrom.push(columnFrom);
                foreignKeysToReturn[foreignKeyName].columnsTo.push(columnTo);
              } else {
                foreignKeysToReturn[foreignKeyName] = {
                  name: foreignKeyName,
                  tableFrom: tableName,
                  tableTo,
                  schemaTo,
                  columnsFrom: [columnFrom],
                  columnsTo: [columnTo],
                  onDelete,
                  onUpdate
                };
              }
              foreignKeysToReturn[foreignKeyName].columnsFrom = [
                ...new Set(foreignKeysToReturn[foreignKeyName].columnsFrom)
              ];
              foreignKeysToReturn[foreignKeyName].columnsTo = [
                ...new Set(foreignKeysToReturn[foreignKeyName].columnsTo)
              ];
            }
            const uniqueConstrainsRows = tableConstraints.filter(
              (mapRow) => mapRow.constraint_type === "UNIQUE"
            );
            for (const unqs of uniqueConstrainsRows) {
              const columnName = unqs.column_name;
              const constraintName = unqs.constraint_name;
              if (typeof uniqueConstrains[constraintName] !== "undefined") {
                uniqueConstrains[constraintName].columns.push(columnName);
              } else {
                uniqueConstrains[constraintName] = {
                  columns: [columnName],
                  nullsNotDistinct: false,
                  name: constraintName
                };
              }
            }
            for (const columnResponse of tableResponse) {
              const columnName = columnResponse.attname;
              const columnAdditionalDT = columnResponse.additional_dt;
              const columnDimensions = columnResponse.array_dimensions;
              const enumType6 = columnResponse.enum_name;
              let columnType = columnResponse.data_type;
              const primaryKey = tableConstraints.filter(
                (mapRow) => columnName === mapRow.column_name && mapRow.constraint_type === "PRIMARY KEY"
              );
              const cprimaryKey = tableConstraints.filter(
                (mapRow) => mapRow.constraint_type === "PRIMARY KEY"
              );
              if (cprimaryKey.length > 1) {
                const tableCompositePkName = await db.query(
                  `SELECT conname AS primary_key
            FROM   pg_constraint join pg_class on (pg_class.oid = conrelid)
            WHERE  contype = 'p' 
            AND    connamespace = $1::regnamespace  
            AND    pg_class.relname = $2;`,
                  [tableSchema, tableName]
                );
                primaryKeys[tableCompositePkName[0].primary_key] = {
                  name: tableCompositePkName[0].primary_key,
                  columns: cprimaryKey.map((c) => c.column_name)
                };
              }
              const defaultValue = defaultForColumn(columnResponse);
              const isSerial = columnType === "serial";
              let columnTypeMapped = columnType;
              if (columnTypeMapped.startsWith("numeric(")) {
                columnTypeMapped = columnTypeMapped.replace(",", ", ");
              }
              if (columnAdditionalDT === "ARRAY") {
                if (typeof internals.tables[tableName] === "undefined") {
                  internals.tables[tableName] = {
                    columns: {
                      [columnName]: {
                        isArray: true,
                        dimensions: columnDimensions,
                        rawType: columnTypeMapped.substring(
                          0,
                          columnTypeMapped.length - 2
                        )
                      }
                    }
                  };
                } else {
                  if (typeof internals.tables[tableName].columns[columnName] === "undefined") {
                    internals.tables[tableName].columns[columnName] = {
                      isArray: true,
                      dimensions: columnDimensions,
                      rawType: columnTypeMapped.substring(
                        0,
                        columnTypeMapped.length - 2
                      )
                    };
                  }
                }
              }
              if (columnAdditionalDT === "ARRAY") {
                for (let i = 1; i < Number(columnDimensions); i++) {
                  columnTypeMapped += "[]";
                }
              }
              columnTypeMapped = columnTypeMapped.replace("character varying", "varchar").replace(" without time zone", "").replace("character", "char");
              columnTypeMapped = trimChar(columnTypeMapped, '"');
              columnToReturn[columnName] = {
                name: columnName,
                type: columnAdditionalDT === "USER-DEFINED" ? enumType6 : columnTypeMapped,
                typeSchema: enumsToReturn[`${tableSchema}.${enumType6}`] !== void 0 ? enumsToReturn[`${tableSchema}.${enumType6}`].schema : void 0,
                primaryKey: primaryKey.length === 1 && cprimaryKey.length < 2,
                // default: isSerial ? undefined : defaultValue,
                notNull: columnResponse.is_nullable === "NO"
              };
              if (!isSerial && typeof defaultValue !== "undefined") {
                columnToReturn[columnName].default = defaultValue;
              }
            }
            const dbIndexes = await db.query(
              `SELECT t.relname as table_name, i.relname AS index_name, ix.indisunique AS is_unique, a.attname AS column_name
          FROM pg_class t
          JOIN pg_index ix ON t.oid = ix.indrelid
          JOIN pg_class i ON i.oid = ix.indexrelid
          JOIN pg_attribute a ON a.attrelid = t.oid AND a.attnum = ANY(ix.indkey)
          JOIN pg_namespace ns ON ns.oid = t.relnamespace
          WHERE ns.nspname = '${tableSchema}'
            AND t.relname = '${tableName}'
            and ix.indisprimary = false;`
            );
            const dbIndexFromConstraint = await db.query(
              `SELECT
          idx.indexrelname AS index_name,
          idx.relname AS table_name,
          schemaname,
          CASE WHEN con.conname IS NOT NULL THEN 1 ELSE 0 END AS generated_by_constraint
        FROM
          pg_stat_user_indexes idx
        LEFT JOIN
          pg_constraint con ON con.conindid = idx.indexrelid
        WHERE idx.relname = '${tableName}' and schemaname = '${tableSchema}'
        group by index_name, table_name,schemaname, generated_by_constraint;`
            );
            const idxsInConsteraint = dbIndexFromConstraint.filter((it) => it.generated_by_constraint === 1).map((it) => it.index_name);
            for (const dbIndex of dbIndexes) {
              const indexName2 = dbIndex.index_name;
              const indexColumnName = dbIndex.column_name;
              const indexIsUnique = dbIndex.is_unique;
              if (idxsInConsteraint.includes(indexName2))
                continue;
              if (typeof indexToReturn[indexName2] !== "undefined") {
                indexToReturn[indexName2].columns.push(indexColumnName);
              } else {
                indexToReturn[indexName2] = {
                  name: indexName2,
                  columns: [indexColumnName],
                  isUnique: indexIsUnique
                };
              }
            }
            indexesCount += Object.keys(indexToReturn).length;
            if (progressCallback) {
              progressCallback("indexes", indexesCount, "fetching");
            }
            result[`${tableSchema}.${tableName}`] = {
              name: tableName,
              schema: tableSchema !== "public" ? tableSchema : "",
              columns: columnToReturn,
              indexes: indexToReturn,
              foreignKeys: foreignKeysToReturn,
              compositePrimaryKeys: primaryKeys,
              uniqueConstraints: uniqueConstrains
            };
          } catch (e) {
            rej(e);
            return;
          }
          res("");
        });
      });
      if (progressCallback) {
        progressCallback("tables", tableCount, "done");
      }
      for await (const _2 of all) {
      }
      if (progressCallback) {
        progressCallback("columns", columnsCount, "done");
        progressCallback("indexes", indexesCount, "done");
        progressCallback("fks", foreignKeysCount, "done");
      }
      const schemasObject = Object.fromEntries([...schemas].map((it) => [it, it]));
      return {
        version: "6",
        dialect: "postgresql",
        tables: result,
        enums: enumsToReturn,
        schemas: schemasObject,
        _meta: {
          schemas: {},
          tables: {},
          columns: {}
        },
        internal: internals
      };
    };
    columnToDefault = {
      "numeric(": "::numeric",
      // text: "::text",
      // "character varying": "::character varying",
      // "double precision": "::double precision",
      // "time with time zone": "::time with time zone",
      "time without time zone": "::time without time zone",
      // "timestamp with time zone": "::timestamp with time zone",
      "timestamp without time zone": "::timestamp without time zone",
      "timestamp(": "::timestamp without time zone",
      // date: "::date",
      // interval: "::interval",
      // character: "::bpchar",
      // macaddr8: "::macaddr8",
      // macaddr: "::macaddr",
      // inet: "::inet",
      // cidr: "::cidr",
      // jsonb: "::jsonb",
      // json: "::json",
      "character(": "::bpchar"
    };
    defaultForColumn = (column4) => {
      if (column4.column_default === null) {
        return void 0;
      }
      if (column4.data_type === "serial" || column4.data_type === "smallserial" || column4.data_type === "bigserial") {
        return void 0;
      }
      const hasDifferentDefaultCast = Object.keys(columnToDefault).find(
        (it) => column4.data_type.startsWith(it)
      );
      const columnDefaultAsString = column4.column_default.toString();
      if (columnDefaultAsString.endsWith(
        hasDifferentDefaultCast ? columnToDefault[hasDifferentDefaultCast] : column4.data_type
      )) {
        const nonPrefixPart = column4.column_default.length - (hasDifferentDefaultCast ? columnToDefault[hasDifferentDefaultCast] : `::${column4.data_type}`).length - 1;
        const rt = column4.column_default.toString().substring(1, nonPrefixPart);
        if (/^-?[\d.]+(?:e-?\d+)?$/.test(rt) && !column4.data_type.startsWith("numeric")) {
          return Number(rt);
        } else if (column4.data_type === "json" || column4.data_type === "jsonb") {
          const jsonWithoutSpaces = JSON.stringify(JSON.parse(rt));
          return `'${jsonWithoutSpaces}'${hasDifferentDefaultCast ? columnToDefault[hasDifferentDefaultCast] : `::${column4.data_type}`}`;
        } else if (column4.data_type === "boolean") {
          return column4.column_default === "true";
        } else {
          return `'${rt}'`;
        }
      } else {
        if (/^-?[\d.]+(?:e-?\d+)?$/.test(columnDefaultAsString) && !column4.data_type.startsWith("numeric")) {
          return Number(columnDefaultAsString);
        } else if (column4.data_type === "boolean") {
          return column4.column_default === "true";
        } else {
          return `${columnDefaultAsString}`;
        }
      }
    };
  }
});

// src/migrationPreparator.ts
var fillPgSnapshot;
var init_migrationPreparator = __esm({
  "src/migrationPreparator.ts"() {
    "use strict";
    init_serializer();
    init_pgSchema();
    init_sqliteSchema();
    init_mysqlSchema();
    fillPgSnapshot = ({
      serialized,
      id,
      idPrev
    }) => {
      return { id, prevId: idPrev, ...serialized };
    };
  }
});

// node_modules/.pnpm/balanced-match@1.0.2/node_modules/balanced-match/index.js
var require_balanced_match = __commonJS({
  "node_modules/.pnpm/balanced-match@1.0.2/node_modules/balanced-match/index.js"(exports, module) {
    "use strict";
    module.exports = balanced;
    function balanced(a, b, str) {
      if (a instanceof RegExp)
        a = maybeMatch(a, str);
      if (b instanceof RegExp)
        b = maybeMatch(b, str);
      var r = range(a, b, str);
      return r && {
        start: r[0],
        end: r[1],
        pre: str.slice(0, r[0]),
        body: str.slice(r[0] + a.length, r[1]),
        post: str.slice(r[1] + b.length)
      };
    }
    function maybeMatch(reg, str) {
      var m = str.match(reg);
      return m ? m[0] : null;
    }
    balanced.range = range;
    function range(a, b, str) {
      var begs, beg, left, right, result;
      var ai = str.indexOf(a);
      var bi = str.indexOf(b, ai + 1);
      var i = ai;
      if (ai >= 0 && bi > 0) {
        if (a === b) {
          return [ai, bi];
        }
        begs = [];
        left = str.length;
        while (i >= 0 && !result) {
          if (i == ai) {
            begs.push(i);
            ai = str.indexOf(a, i + 1);
          } else if (begs.length == 1) {
            result = [begs.pop(), bi];
          } else {
            beg = begs.pop();
            if (beg < left) {
              left = beg;
              right = bi;
            }
            bi = str.indexOf(b, i + 1);
          }
          i = ai < bi && ai >= 0 ? ai : bi;
        }
        if (begs.length) {
          result = [left, right];
        }
      }
      return result;
    }
  }
});

// node_modules/.pnpm/brace-expansion@2.0.1/node_modules/brace-expansion/index.js
var require_brace_expansion = __commonJS({
  "node_modules/.pnpm/brace-expansion@2.0.1/node_modules/brace-expansion/index.js"(exports, module) {
    "use strict";
    var balanced = require_balanced_match();
    module.exports = expandTop;
    var escSlash = "\0SLASH" + Math.random() + "\0";
    var escOpen = "\0OPEN" + Math.random() + "\0";
    var escClose = "\0CLOSE" + Math.random() + "\0";
    var escComma = "\0COMMA" + Math.random() + "\0";
    var escPeriod = "\0PERIOD" + Math.random() + "\0";
    function numeric(str) {
      return parseInt(str, 10) == str ? parseInt(str, 10) : str.charCodeAt(0);
    }
    function escapeBraces(str) {
      return str.split("\\\\").join(escSlash).split("\\{").join(escOpen).split("\\}").join(escClose).split("\\,").join(escComma).split("\\.").join(escPeriod);
    }
    function unescapeBraces(str) {
      return str.split(escSlash).join("\\").split(escOpen).join("{").split(escClose).join("}").split(escComma).join(",").split(escPeriod).join(".");
    }
    function parseCommaParts(str) {
      if (!str)
        return [""];
      var parts = [];
      var m = balanced("{", "}", str);
      if (!m)
        return str.split(",");
      var pre = m.pre;
      var body = m.body;
      var post = m.post;
      var p = pre.split(",");
      p[p.length - 1] += "{" + body + "}";
      var postParts = parseCommaParts(post);
      if (post.length) {
        p[p.length - 1] += postParts.shift();
        p.push.apply(p, postParts);
      }
      parts.push.apply(parts, p);
      return parts;
    }
    function expandTop(str) {
      if (!str)
        return [];
      if (str.substr(0, 2) === "{}") {
        str = "\\{\\}" + str.substr(2);
      }
      return expand2(escapeBraces(str), true).map(unescapeBraces);
    }
    function embrace(str) {
      return "{" + str + "}";
    }
    function isPadded(el) {
      return /^-?0\d/.test(el);
    }
    function lte2(i, y) {
      return i <= y;
    }
    function gte2(i, y) {
      return i >= y;
    }
    function expand2(str, isTop) {
      var expansions = [];
      var m = balanced("{", "}", str);
      if (!m)
        return [str];
      var pre = m.pre;
      var post = m.post.length ? expand2(m.post, false) : [""];
      if (/\$$/.test(m.pre)) {
        for (var k = 0; k < post.length; k++) {
          var expansion = pre + "{" + m.body + "}" + post[k];
          expansions.push(expansion);
        }
      } else {
        var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
        var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
        var isSequence = isNumericSequence || isAlphaSequence;
        var isOptions = m.body.indexOf(",") >= 0;
        if (!isSequence && !isOptions) {
          if (m.post.match(/,.*\}/)) {
            str = m.pre + "{" + m.body + escClose + m.post;
            return expand2(str);
          }
          return [str];
        }
        var n;
        if (isSequence) {
          n = m.body.split(/\.\./);
        } else {
          n = parseCommaParts(m.body);
          if (n.length === 1) {
            n = expand2(n[0], false).map(embrace);
            if (n.length === 1) {
              return post.map(function(p) {
                return m.pre + n[0] + p;
              });
            }
          }
        }
        var N;
        if (isSequence) {
          var x = numeric(n[0]);
          var y = numeric(n[1]);
          var width = Math.max(n[0].length, n[1].length);
          var incr = n.length == 3 ? Math.abs(numeric(n[2])) : 1;
          var test = lte2;
          var reverse = y < x;
          if (reverse) {
            incr *= -1;
            test = gte2;
          }
          var pad = n.some(isPadded);
          N = [];
          for (var i = x; test(i, y); i += incr) {
            var c;
            if (isAlphaSequence) {
              c = String.fromCharCode(i);
              if (c === "\\")
                c = "";
            } else {
              c = String(i);
              if (pad) {
                var need = width - c.length;
                if (need > 0) {
                  var z = new Array(need + 1).join("0");
                  if (i < 0)
                    c = "-" + z + c.slice(1);
                  else
                    c = z + c;
                }
              }
            }
            N.push(c);
          }
        } else {
          N = [];
          for (var j = 0; j < n.length; j++) {
            N.push.apply(N, expand2(n[j], false));
          }
        }
        for (var j = 0; j < N.length; j++) {
          for (var k = 0; k < post.length; k++) {
            var expansion = pre + N[j] + post[k];
            if (!isTop || isSequence || expansion)
              expansions.push(expansion);
          }
        }
      }
      return expansions;
    }
  }
});

// node_modules/.pnpm/minimatch@7.4.6/node_modules/minimatch/dist/mjs/brace-expressions.js
var posixClasses, braceEscape, regexpEscape, rangesToString, parseClass;
var init_brace_expressions = __esm({
  "node_modules/.pnpm/minimatch@7.4.6/node_modules/minimatch/dist/mjs/brace-expressions.js"() {
    "use strict";
    posixClasses = {
      "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", true],
      "[:alpha:]": ["\\p{L}\\p{Nl}", true],
      "[:ascii:]": ["\\x00-\\x7f", false],
      "[:blank:]": ["\\p{Zs}\\t", true],
      "[:cntrl:]": ["\\p{Cc}", true],
      "[:digit:]": ["\\p{Nd}", true],
      "[:graph:]": ["\\p{Z}\\p{C}", true, true],
      "[:lower:]": ["\\p{Ll}", true],
      "[:print:]": ["\\p{C}", true],
      "[:punct:]": ["\\p{P}", true],
      "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", true],
      "[:upper:]": ["\\p{Lu}", true],
      "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", true],
      "[:xdigit:]": ["A-Fa-f0-9", false]
    };
    braceEscape = (s) => s.replace(/[[\]\\-]/g, "\\$&");
    regexpEscape = (s) => s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    rangesToString = (ranges) => ranges.join("");
    parseClass = (glob2, position) => {
      const pos = position;
      if (glob2.charAt(pos) !== "[") {
        throw new Error("not in a brace expression");
      }
      const ranges = [];
      const negs = [];
      let i = pos + 1;
      let sawStart = false;
      let uflag = false;
      let escaping = false;
      let negate = false;
      let endPos = pos;
      let rangeStart = "";
      WHILE:
        while (i < glob2.length) {
          const c = glob2.charAt(i);
          if ((c === "!" || c === "^") && i === pos + 1) {
            negate = true;
            i++;
            continue;
          }
          if (c === "]" && sawStart && !escaping) {
            endPos = i + 1;
            break;
          }
          sawStart = true;
          if (c === "\\") {
            if (!escaping) {
              escaping = true;
              i++;
              continue;
            }
          }
          if (c === "[" && !escaping) {
            for (const [cls, [unip, u, neg]] of Object.entries(posixClasses)) {
              if (glob2.startsWith(cls, i)) {
                if (rangeStart) {
                  return ["$.", false, glob2.length - pos, true];
                }
                i += cls.length;
                if (neg)
                  negs.push(unip);
                else
                  ranges.push(unip);
                uflag = uflag || u;
                continue WHILE;
              }
            }
          }
          escaping = false;
          if (rangeStart) {
            if (c > rangeStart) {
              ranges.push(braceEscape(rangeStart) + "-" + braceEscape(c));
            } else if (c === rangeStart) {
              ranges.push(braceEscape(c));
            }
            rangeStart = "";
            i++;
            continue;
          }
          if (glob2.startsWith("-]", i + 1)) {
            ranges.push(braceEscape(c + "-"));
            i += 2;
            continue;
          }
          if (glob2.startsWith("-", i + 1)) {
            rangeStart = c;
            i += 2;
            continue;
          }
          ranges.push(braceEscape(c));
          i++;
        }
      if (endPos < i) {
        return ["", false, 0, false];
      }
      if (!ranges.length && !negs.length) {
        return ["$.", false, glob2.length - pos, true];
      }
      if (negs.length === 0 && ranges.length === 1 && /^\\?.$/.test(ranges[0]) && !negate) {
        const r = ranges[0].length === 2 ? ranges[0].slice(-1) : ranges[0];
        return [regexpEscape(r), false, endPos - pos, false];
      }
      const sranges = "[" + (negate ? "^" : "") + rangesToString(ranges) + "]";
      const snegs = "[" + (negate ? "" : "^") + rangesToString(negs) + "]";
      const comb = ranges.length && negs.length ? "(" + sranges + "|" + snegs + ")" : ranges.length ? sranges : snegs;
      return [comb, uflag, endPos - pos, true];
    };
  }
});

// node_modules/.pnpm/minimatch@7.4.6/node_modules/minimatch/dist/mjs/escape.js
var escape;
var init_escape = __esm({
  "node_modules/.pnpm/minimatch@7.4.6/node_modules/minimatch/dist/mjs/escape.js"() {
    "use strict";
    escape = (s, { windowsPathsNoEscape = false } = {}) => {
      return windowsPathsNoEscape ? s.replace(/[?*()[\]]/g, "[$&]") : s.replace(/[?*()[\]\\]/g, "\\$&");
    };
  }
});

// node_modules/.pnpm/minimatch@7.4.6/node_modules/minimatch/dist/mjs/unescape.js
var unescape;
var init_unescape = __esm({
  "node_modules/.pnpm/minimatch@7.4.6/node_modules/minimatch/dist/mjs/unescape.js"() {
    "use strict";
    unescape = (s, { windowsPathsNoEscape = false } = {}) => {
      return windowsPathsNoEscape ? s.replace(/\[([^\/\\])\]/g, "$1") : s.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1");
    };
  }
});

// node_modules/.pnpm/minimatch@7.4.6/node_modules/minimatch/dist/mjs/index.js
var import_brace_expansion, minimatch, starDotExtRE, starDotExtTest, starDotExtTestDot, starDotExtTestNocase, starDotExtTestNocaseDot, starDotStarRE, starDotStarTest, starDotStarTestDot, dotStarRE, dotStarTest, starRE, starTest, starTestDot, qmarksRE, qmarksTestNocase, qmarksTestNocaseDot, qmarksTestDot, qmarksTest, qmarksTestNoExt, qmarksTestNoExtDot, defaultPlatform, path, sep, GLOBSTAR, plTypes, qmark, star, twoStarDot, twoStarNoDot, charSet, reSpecials, addPatternStartSet, filter, ext, defaults, braceExpand, MAX_PATTERN_LENGTH, assertValidPattern, makeRe, match, globUnescape, globMagic, regExpEscape, Minimatch;
var init_mjs = __esm({
  "node_modules/.pnpm/minimatch@7.4.6/node_modules/minimatch/dist/mjs/index.js"() {
    "use strict";
    import_brace_expansion = __toESM(require_brace_expansion(), 1);
    init_brace_expressions();
    init_escape();
    init_unescape();
    init_escape();
    init_unescape();
    minimatch = (p, pattern, options = {}) => {
      assertValidPattern(pattern);
      if (!options.nocomment && pattern.charAt(0) === "#") {
        return false;
      }
      return new Minimatch(pattern, options).match(p);
    };
    starDotExtRE = /^\*+([^+@!?\*\[\(]*)$/;
    starDotExtTest = (ext2) => (f) => !f.startsWith(".") && f.endsWith(ext2);
    starDotExtTestDot = (ext2) => (f) => f.endsWith(ext2);
    starDotExtTestNocase = (ext2) => {
      ext2 = ext2.toLowerCase();
      return (f) => !f.startsWith(".") && f.toLowerCase().endsWith(ext2);
    };
    starDotExtTestNocaseDot = (ext2) => {
      ext2 = ext2.toLowerCase();
      return (f) => f.toLowerCase().endsWith(ext2);
    };
    starDotStarRE = /^\*+\.\*+$/;
    starDotStarTest = (f) => !f.startsWith(".") && f.includes(".");
    starDotStarTestDot = (f) => f !== "." && f !== ".." && f.includes(".");
    dotStarRE = /^\.\*+$/;
    dotStarTest = (f) => f !== "." && f !== ".." && f.startsWith(".");
    starRE = /^\*+$/;
    starTest = (f) => f.length !== 0 && !f.startsWith(".");
    starTestDot = (f) => f.length !== 0 && f !== "." && f !== "..";
    qmarksRE = /^\?+([^+@!?\*\[\(]*)?$/;
    qmarksTestNocase = ([$0, ext2 = ""]) => {
      const noext = qmarksTestNoExt([$0]);
      if (!ext2)
        return noext;
      ext2 = ext2.toLowerCase();
      return (f) => noext(f) && f.toLowerCase().endsWith(ext2);
    };
    qmarksTestNocaseDot = ([$0, ext2 = ""]) => {
      const noext = qmarksTestNoExtDot([$0]);
      if (!ext2)
        return noext;
      ext2 = ext2.toLowerCase();
      return (f) => noext(f) && f.toLowerCase().endsWith(ext2);
    };
    qmarksTestDot = ([$0, ext2 = ""]) => {
      const noext = qmarksTestNoExtDot([$0]);
      return !ext2 ? noext : (f) => noext(f) && f.endsWith(ext2);
    };
    qmarksTest = ([$0, ext2 = ""]) => {
      const noext = qmarksTestNoExt([$0]);
      return !ext2 ? noext : (f) => noext(f) && f.endsWith(ext2);
    };
    qmarksTestNoExt = ([$0]) => {
      const len = $0.length;
      return (f) => f.length === len && !f.startsWith(".");
    };
    qmarksTestNoExtDot = ([$0]) => {
      const len = $0.length;
      return (f) => f.length === len && f !== "." && f !== "..";
    };
    defaultPlatform = typeof process === "object" && process ? typeof process.env === "object" && process.env && process.env.__MINIMATCH_TESTING_PLATFORM__ || process.platform : "posix";
    path = {
      win32: { sep: "\\" },
      posix: { sep: "/" }
    };
    sep = defaultPlatform === "win32" ? path.win32.sep : path.posix.sep;
    minimatch.sep = sep;
    GLOBSTAR = Symbol("globstar **");
    minimatch.GLOBSTAR = GLOBSTAR;
    plTypes = {
      "!": { open: "(?:(?!(?:", close: "))[^/]*?)" },
      "?": { open: "(?:", close: ")?" },
      "+": { open: "(?:", close: ")+" },
      "*": { open: "(?:", close: ")*" },
      "@": { open: "(?:", close: ")" }
    };
    qmark = "[^/]";
    star = qmark + "*?";
    twoStarDot = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?";
    twoStarNoDot = "(?:(?!(?:\\/|^)\\.).)*?";
    charSet = (s) => s.split("").reduce((set, c) => {
      set[c] = true;
      return set;
    }, {});
    reSpecials = charSet("().*{}+?[]^$\\!");
    addPatternStartSet = charSet("[.(");
    filter = (pattern, options = {}) => (p) => minimatch(p, pattern, options);
    minimatch.filter = filter;
    ext = (a, b = {}) => Object.assign({}, a, b);
    defaults = (def) => {
      if (!def || typeof def !== "object" || !Object.keys(def).length) {
        return minimatch;
      }
      const orig = minimatch;
      const m = (p, pattern, options = {}) => orig(p, pattern, ext(def, options));
      return Object.assign(m, {
        Minimatch: class Minimatch extends orig.Minimatch {
          constructor(pattern, options = {}) {
            super(pattern, ext(def, options));
          }
          static defaults(options) {
            return orig.defaults(ext(def, options)).Minimatch;
          }
        },
        unescape: (s, options = {}) => orig.unescape(s, ext(def, options)),
        escape: (s, options = {}) => orig.escape(s, ext(def, options)),
        filter: (pattern, options = {}) => orig.filter(pattern, ext(def, options)),
        defaults: (options) => orig.defaults(ext(def, options)),
        makeRe: (pattern, options = {}) => orig.makeRe(pattern, ext(def, options)),
        braceExpand: (pattern, options = {}) => orig.braceExpand(pattern, ext(def, options)),
        match: (list, pattern, options = {}) => orig.match(list, pattern, ext(def, options)),
        sep: orig.sep,
        GLOBSTAR
      });
    };
    minimatch.defaults = defaults;
    braceExpand = (pattern, options = {}) => {
      assertValidPattern(pattern);
      if (options.nobrace || !/\{(?:(?!\{).)*\}/.test(pattern)) {
        return [pattern];
      }
      return (0, import_brace_expansion.default)(pattern);
    };
    minimatch.braceExpand = braceExpand;
    MAX_PATTERN_LENGTH = 1024 * 64;
    assertValidPattern = (pattern) => {
      if (typeof pattern !== "string") {
        throw new TypeError("invalid pattern");
      }
      if (pattern.length > MAX_PATTERN_LENGTH) {
        throw new TypeError("pattern is too long");
      }
    };
    makeRe = (pattern, options = {}) => new Minimatch(pattern, options).makeRe();
    minimatch.makeRe = makeRe;
    match = (list, pattern, options = {}) => {
      const mm = new Minimatch(pattern, options);
      list = list.filter((f) => mm.match(f));
      if (mm.options.nonull && !list.length) {
        list.push(pattern);
      }
      return list;
    };
    minimatch.match = match;
    globUnescape = (s) => s.replace(/\\(.)/g, "$1");
    globMagic = /[?*]|[+@!]\(.*?\)|\[|\]/;
    regExpEscape = (s) => s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    Minimatch = class {
      constructor(pattern, options = {}) {
        __publicField(this, "options");
        __publicField(this, "set");
        __publicField(this, "pattern");
        __publicField(this, "windowsPathsNoEscape");
        __publicField(this, "nonegate");
        __publicField(this, "negate");
        __publicField(this, "comment");
        __publicField(this, "empty");
        __publicField(this, "preserveMultipleSlashes");
        __publicField(this, "partial");
        __publicField(this, "globSet");
        __publicField(this, "globParts");
        __publicField(this, "nocase");
        __publicField(this, "isWindows");
        __publicField(this, "platform");
        __publicField(this, "windowsNoMagicRoot");
        __publicField(this, "regexp");
        assertValidPattern(pattern);
        options = options || {};
        this.options = options;
        this.pattern = pattern;
        this.platform = options.platform || defaultPlatform;
        this.isWindows = this.platform === "win32";
        this.windowsPathsNoEscape = !!options.windowsPathsNoEscape || options.allowWindowsEscape === false;
        if (this.windowsPathsNoEscape) {
          this.pattern = this.pattern.replace(/\\/g, "/");
        }
        this.preserveMultipleSlashes = !!options.preserveMultipleSlashes;
        this.regexp = null;
        this.negate = false;
        this.nonegate = !!options.nonegate;
        this.comment = false;
        this.empty = false;
        this.partial = !!options.partial;
        this.nocase = !!this.options.nocase;
        this.windowsNoMagicRoot = options.windowsNoMagicRoot !== void 0 ? options.windowsNoMagicRoot : !!(this.isWindows && this.nocase);
        this.globSet = [];
        this.globParts = [];
        this.set = [];
        this.make();
      }
      hasMagic() {
        if (this.options.magicalBraces && this.set.length > 1) {
          return true;
        }
        for (const pattern of this.set) {
          for (const part of pattern) {
            if (typeof part !== "string")
              return true;
          }
        }
        return false;
      }
      debug(..._2) {
      }
      make() {
        const pattern = this.pattern;
        const options = this.options;
        if (!options.nocomment && pattern.charAt(0) === "#") {
          this.comment = true;
          return;
        }
        if (!pattern) {
          this.empty = true;
          return;
        }
        this.parseNegate();
        this.globSet = [...new Set(this.braceExpand())];
        if (options.debug) {
          this.debug = (...args) => console.error(...args);
        }
        this.debug(this.pattern, this.globSet);
        const rawGlobParts = this.globSet.map((s) => this.slashSplit(s));
        this.globParts = this.preprocess(rawGlobParts);
        this.debug(this.pattern, this.globParts);
        let set = this.globParts.map((s, _2, __) => {
          if (this.isWindows && this.windowsNoMagicRoot) {
            const isUNC = s[0] === "" && s[1] === "" && (s[2] === "?" || !globMagic.test(s[2])) && !globMagic.test(s[3]);
            const isDrive = /^[a-z]:/i.test(s[0]);
            if (isUNC) {
              return [...s.slice(0, 4), ...s.slice(4).map((ss) => this.parse(ss))];
            } else if (isDrive) {
              return [s[0], ...s.slice(1).map((ss) => this.parse(ss))];
            }
          }
          return s.map((ss) => this.parse(ss));
        });
        this.debug(this.pattern, set);
        this.set = set.filter((s) => s.indexOf(false) === -1);
        if (this.isWindows) {
          for (let i = 0; i < this.set.length; i++) {
            const p = this.set[i];
            if (p[0] === "" && p[1] === "" && this.globParts[i][2] === "?" && typeof p[3] === "string" && /^[a-z]:$/i.test(p[3])) {
              p[2] = "?";
            }
          }
        }
        this.debug(this.pattern, this.set);
      }
      // various transforms to equivalent pattern sets that are
      // faster to process in a filesystem walk.  The goal is to
      // eliminate what we can, and push all ** patterns as far
      // to the right as possible, even if it increases the number
      // of patterns that we have to process.
      preprocess(globParts) {
        if (this.options.noglobstar) {
          for (let i = 0; i < globParts.length; i++) {
            for (let j = 0; j < globParts[i].length; j++) {
              if (globParts[i][j] === "**") {
                globParts[i][j] = "*";
              }
            }
          }
        }
        const { optimizationLevel = 1 } = this.options;
        if (optimizationLevel >= 2) {
          globParts = this.firstPhasePreProcess(globParts);
          globParts = this.secondPhasePreProcess(globParts);
        } else if (optimizationLevel >= 1) {
          globParts = this.levelOneOptimize(globParts);
        } else {
          globParts = this.adjascentGlobstarOptimize(globParts);
        }
        return globParts;
      }
      // just get rid of adjascent ** portions
      adjascentGlobstarOptimize(globParts) {
        return globParts.map((parts) => {
          let gs = -1;
          while (-1 !== (gs = parts.indexOf("**", gs + 1))) {
            let i = gs;
            while (parts[i + 1] === "**") {
              i++;
            }
            if (i !== gs) {
              parts.splice(gs, i - gs);
            }
          }
          return parts;
        });
      }
      // get rid of adjascent ** and resolve .. portions
      levelOneOptimize(globParts) {
        return globParts.map((parts) => {
          parts = parts.reduce((set, part) => {
            const prev = set[set.length - 1];
            if (part === "**" && prev === "**") {
              return set;
            }
            if (part === "..") {
              if (prev && prev !== ".." && prev !== "." && prev !== "**") {
                set.pop();
                return set;
              }
            }
            set.push(part);
            return set;
          }, []);
          return parts.length === 0 ? [""] : parts;
        });
      }
      levelTwoFileOptimize(parts) {
        if (!Array.isArray(parts)) {
          parts = this.slashSplit(parts);
        }
        let didSomething = false;
        do {
          didSomething = false;
          if (!this.preserveMultipleSlashes) {
            for (let i = 1; i < parts.length - 1; i++) {
              const p = parts[i];
              if (i === 1 && p === "" && parts[0] === "")
                continue;
              if (p === "." || p === "") {
                didSomething = true;
                parts.splice(i, 1);
                i--;
              }
            }
            if (parts[0] === "." && parts.length === 2 && (parts[1] === "." || parts[1] === "")) {
              didSomething = true;
              parts.pop();
            }
          }
          let dd = 0;
          while (-1 !== (dd = parts.indexOf("..", dd + 1))) {
            const p = parts[dd - 1];
            if (p && p !== "." && p !== ".." && p !== "**") {
              didSomething = true;
              parts.splice(dd - 1, 2);
              dd -= 2;
            }
          }
        } while (didSomething);
        return parts.length === 0 ? [""] : parts;
      }
      // First phase: single-pattern processing
      // <pre> is 1 or more portions
      // <rest> is 1 or more portions
      // <p> is any portion other than ., .., '', or **
      // <e> is . or ''
      //
      // **/.. is *brutal* for filesystem walking performance, because
      // it effectively resets the recursive walk each time it occurs,
      // and ** cannot be reduced out by a .. pattern part like a regexp
      // or most strings (other than .., ., and '') can be.
      //
      // <pre>/**/../<p>/<p>/<rest> -> {<pre>/../<p>/<p>/<rest>,<pre>/**/<p>/<p>/<rest>}
      // <pre>/<e>/<rest> -> <pre>/<rest>
      // <pre>/<p>/../<rest> -> <pre>/<rest>
      // **/**/<rest> -> **/<rest>
      //
      // **/*/<rest> -> */**/<rest> <== not valid because ** doesn't follow
      // this WOULD be allowed if ** did follow symlinks, or * didn't
      firstPhasePreProcess(globParts) {
        let didSomething = false;
        do {
          didSomething = false;
          for (let parts of globParts) {
            let gs = -1;
            while (-1 !== (gs = parts.indexOf("**", gs + 1))) {
              let gss = gs;
              while (parts[gss + 1] === "**") {
                gss++;
              }
              if (gss > gs) {
                parts.splice(gs + 1, gss - gs);
              }
              let next = parts[gs + 1];
              const p = parts[gs + 2];
              const p2 = parts[gs + 3];
              if (next !== "..")
                continue;
              if (!p || p === "." || p === ".." || !p2 || p2 === "." || p2 === "..") {
                continue;
              }
              didSomething = true;
              parts.splice(gs, 1);
              const other = parts.slice(0);
              other[gs] = "**";
              globParts.push(other);
              gs--;
            }
            if (!this.preserveMultipleSlashes) {
              for (let i = 1; i < parts.length - 1; i++) {
                const p = parts[i];
                if (i === 1 && p === "" && parts[0] === "")
                  continue;
                if (p === "." || p === "") {
                  didSomething = true;
                  parts.splice(i, 1);
                  i--;
                }
              }
              if (parts[0] === "." && parts.length === 2 && (parts[1] === "." || parts[1] === "")) {
                didSomething = true;
                parts.pop();
              }
            }
            let dd = 0;
            while (-1 !== (dd = parts.indexOf("..", dd + 1))) {
              const p = parts[dd - 1];
              if (p && p !== "." && p !== ".." && p !== "**") {
                didSomething = true;
                const needDot = dd === 1 && parts[dd + 1] === "**";
                const splin = needDot ? ["."] : [];
                parts.splice(dd - 1, 2, ...splin);
                if (parts.length === 0)
                  parts.push("");
                dd -= 2;
              }
            }
          }
        } while (didSomething);
        return globParts;
      }
      // second phase: multi-pattern dedupes
      // {<pre>/*/<rest>,<pre>/<p>/<rest>} -> <pre>/*/<rest>
      // {<pre>/<rest>,<pre>/<rest>} -> <pre>/<rest>
      // {<pre>/**/<rest>,<pre>/<rest>} -> <pre>/**/<rest>
      //
      // {<pre>/**/<rest>,<pre>/**/<p>/<rest>} -> <pre>/**/<rest>
      // ^-- not valid because ** doens't follow symlinks
      secondPhasePreProcess(globParts) {
        for (let i = 0; i < globParts.length - 1; i++) {
          for (let j = i + 1; j < globParts.length; j++) {
            const matched = this.partsMatch(globParts[i], globParts[j], !this.preserveMultipleSlashes);
            if (!matched)
              continue;
            globParts[i] = matched;
            globParts[j] = [];
          }
        }
        return globParts.filter((gs) => gs.length);
      }
      partsMatch(a, b, emptyGSMatch = false) {
        let ai = 0;
        let bi = 0;
        let result = [];
        let which = "";
        while (ai < a.length && bi < b.length) {
          if (a[ai] === b[bi]) {
            result.push(which === "b" ? b[bi] : a[ai]);
            ai++;
            bi++;
          } else if (emptyGSMatch && a[ai] === "**" && b[bi] === a[ai + 1]) {
            result.push(a[ai]);
            ai++;
          } else if (emptyGSMatch && b[bi] === "**" && a[ai] === b[bi + 1]) {
            result.push(b[bi]);
            bi++;
          } else if (a[ai] === "*" && b[bi] && (this.options.dot || !b[bi].startsWith(".")) && b[bi] !== "**") {
            if (which === "b")
              return false;
            which = "a";
            result.push(a[ai]);
            ai++;
            bi++;
          } else if (b[bi] === "*" && a[ai] && (this.options.dot || !a[ai].startsWith(".")) && a[ai] !== "**") {
            if (which === "a")
              return false;
            which = "b";
            result.push(b[bi]);
            ai++;
            bi++;
          } else {
            return false;
          }
        }
        return a.length === b.length && result;
      }
      parseNegate() {
        if (this.nonegate)
          return;
        const pattern = this.pattern;
        let negate = false;
        let negateOffset = 0;
        for (let i = 0; i < pattern.length && pattern.charAt(i) === "!"; i++) {
          negate = !negate;
          negateOffset++;
        }
        if (negateOffset)
          this.pattern = pattern.slice(negateOffset);
        this.negate = negate;
      }
      // set partial to true to test if, for example,
      // "/a/b" matches the start of "/*/b/*/d"
      // Partial means, if you run out of file before you run
      // out of pattern, then that's fine, as long as all
      // the parts match.
      matchOne(file, pattern, partial = false) {
        const options = this.options;
        if (this.isWindows) {
          const fileUNC = file[0] === "" && file[1] === "" && file[2] === "?" && typeof file[3] === "string" && /^[a-z]:$/i.test(file[3]);
          const patternUNC = pattern[0] === "" && pattern[1] === "" && pattern[2] === "?" && typeof pattern[3] === "string" && /^[a-z]:$/i.test(pattern[3]);
          if (fileUNC && patternUNC) {
            const fd = file[3];
            const pd = pattern[3];
            if (fd.toLowerCase() === pd.toLowerCase()) {
              file[3] = pd;
            }
          } else if (patternUNC && typeof file[0] === "string") {
            const pd = pattern[3];
            const fd = file[0];
            if (pd.toLowerCase() === fd.toLowerCase()) {
              pattern[3] = fd;
              pattern = pattern.slice(3);
            }
          } else if (fileUNC && typeof pattern[0] === "string") {
            const fd = file[3];
            if (fd.toLowerCase() === pattern[0].toLowerCase()) {
              pattern[0] = fd;
              file = file.slice(3);
            }
          }
        }
        const { optimizationLevel = 1 } = this.options;
        if (optimizationLevel >= 2) {
          file = this.levelTwoFileOptimize(file);
        }
        this.debug("matchOne", this, { file, pattern });
        this.debug("matchOne", file.length, pattern.length);
        for (var fi = 0, pi = 0, fl = file.length, pl = pattern.length; fi < fl && pi < pl; fi++, pi++) {
          this.debug("matchOne loop");
          var p = pattern[pi];
          var f = file[fi];
          this.debug(pattern, p, f);
          if (p === false) {
            return false;
          }
          if (p === GLOBSTAR) {
            this.debug("GLOBSTAR", [pattern, p, f]);
            var fr = fi;
            var pr = pi + 1;
            if (pr === pl) {
              this.debug("** at the end");
              for (; fi < fl; fi++) {
                if (file[fi] === "." || file[fi] === ".." || !options.dot && file[fi].charAt(0) === ".")
                  return false;
              }
              return true;
            }
            while (fr < fl) {
              var swallowee = file[fr];
              this.debug("\nglobstar while", file, fr, pattern, pr, swallowee);
              if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
                this.debug("globstar found match!", fr, fl, swallowee);
                return true;
              } else {
                if (swallowee === "." || swallowee === ".." || !options.dot && swallowee.charAt(0) === ".") {
                  this.debug("dot detected!", file, fr, pattern, pr);
                  break;
                }
                this.debug("globstar swallow a segment, and continue");
                fr++;
              }
            }
            if (partial) {
              this.debug("\n>>> no match, partial?", file, fr, pattern, pr);
              if (fr === fl) {
                return true;
              }
            }
            return false;
          }
          let hit;
          if (typeof p === "string") {
            hit = f === p;
            this.debug("string match", p, f, hit);
          } else {
            hit = p.test(f);
            this.debug("pattern match", p, f, hit);
          }
          if (!hit)
            return false;
        }
        if (fi === fl && pi === pl) {
          return true;
        } else if (fi === fl) {
          return partial;
        } else if (pi === pl) {
          return fi === fl - 1 && file[fi] === "";
        } else {
          throw new Error("wtf?");
        }
      }
      braceExpand() {
        return braceExpand(this.pattern, this.options);
      }
      parse(pattern) {
        assertValidPattern(pattern);
        const options = this.options;
        if (pattern === "**")
          return GLOBSTAR;
        if (pattern === "")
          return "";
        let m;
        let fastTest = null;
        if (m = pattern.match(starRE)) {
          fastTest = options.dot ? starTestDot : starTest;
        } else if (m = pattern.match(starDotExtRE)) {
          fastTest = (options.nocase ? options.dot ? starDotExtTestNocaseDot : starDotExtTestNocase : options.dot ? starDotExtTestDot : starDotExtTest)(m[1]);
        } else if (m = pattern.match(qmarksRE)) {
          fastTest = (options.nocase ? options.dot ? qmarksTestNocaseDot : qmarksTestNocase : options.dot ? qmarksTestDot : qmarksTest)(m);
        } else if (m = pattern.match(starDotStarRE)) {
          fastTest = options.dot ? starDotStarTestDot : starDotStarTest;
        } else if (m = pattern.match(dotStarRE)) {
          fastTest = dotStarTest;
        }
        let re = "";
        let hasMagic = false;
        let escaping = false;
        const patternListStack = [];
        const negativeLists = [];
        let stateChar = false;
        let uflag = false;
        let pl;
        let dotTravAllowed = pattern.charAt(0) === ".";
        let dotFileAllowed = options.dot || dotTravAllowed;
        const patternStart = () => dotTravAllowed ? "" : dotFileAllowed ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)";
        const subPatternStart = (p) => p.charAt(0) === "." ? "" : options.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)";
        const clearStateChar = () => {
          if (stateChar) {
            switch (stateChar) {
              case "*":
                re += star;
                hasMagic = true;
                break;
              case "?":
                re += qmark;
                hasMagic = true;
                break;
              default:
                re += "\\" + stateChar;
                break;
            }
            this.debug("clearStateChar %j %j", stateChar, re);
            stateChar = false;
          }
        };
        for (let i = 0, c; i < pattern.length && (c = pattern.charAt(i)); i++) {
          this.debug("%s	%s %s %j", pattern, i, re, c);
          if (escaping) {
            if (c === "/") {
              return false;
            }
            if (reSpecials[c]) {
              re += "\\";
            }
            re += c;
            escaping = false;
            continue;
          }
          switch (c) {
            case "/": {
              return false;
            }
            case "\\":
              clearStateChar();
              escaping = true;
              continue;
            case "?":
            case "*":
            case "+":
            case "@":
            case "!":
              this.debug("%s	%s %s %j <-- stateChar", pattern, i, re, c);
              this.debug("call clearStateChar %j", stateChar);
              clearStateChar();
              stateChar = c;
              if (options.noext)
                clearStateChar();
              continue;
            case "(": {
              if (!stateChar) {
                re += "\\(";
                continue;
              }
              const plEntry = {
                type: stateChar,
                start: i - 1,
                reStart: re.length,
                open: plTypes[stateChar].open,
                close: plTypes[stateChar].close
              };
              this.debug(this.pattern, "	", plEntry);
              patternListStack.push(plEntry);
              re += plEntry.open;
              if (plEntry.start === 0 && plEntry.type !== "!") {
                dotTravAllowed = true;
                re += subPatternStart(pattern.slice(i + 1));
              }
              this.debug("plType %j %j", stateChar, re);
              stateChar = false;
              continue;
            }
            case ")": {
              const plEntry = patternListStack[patternListStack.length - 1];
              if (!plEntry) {
                re += "\\)";
                continue;
              }
              patternListStack.pop();
              clearStateChar();
              hasMagic = true;
              pl = plEntry;
              re += pl.close;
              if (pl.type === "!") {
                negativeLists.push(Object.assign(pl, { reEnd: re.length }));
              }
              continue;
            }
            case "|": {
              const plEntry = patternListStack[patternListStack.length - 1];
              if (!plEntry) {
                re += "\\|";
                continue;
              }
              clearStateChar();
              re += "|";
              if (plEntry.start === 0 && plEntry.type !== "!") {
                dotTravAllowed = true;
                re += subPatternStart(pattern.slice(i + 1));
              }
              continue;
            }
            case "[":
              clearStateChar();
              const [src, needUflag, consumed, magic] = parseClass(pattern, i);
              if (consumed) {
                re += src;
                uflag = uflag || needUflag;
                i += consumed - 1;
                hasMagic = hasMagic || magic;
              } else {
                re += "\\[";
              }
              continue;
            case "]":
              re += "\\" + c;
              continue;
            default:
              clearStateChar();
              re += regExpEscape(c);
              break;
          }
        }
        for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
          let tail;
          tail = re.slice(pl.reStart + pl.open.length);
          this.debug(this.pattern, "setting tail", re, pl);
          tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, (_2, $1, $2) => {
            if (!$2) {
              $2 = "\\";
            }
            return $1 + $1 + $2 + "|";
          });
          this.debug("tail=%j\n   %s", tail, tail, pl, re);
          const t = pl.type === "*" ? star : pl.type === "?" ? qmark : "\\" + pl.type;
          hasMagic = true;
          re = re.slice(0, pl.reStart) + t + "\\(" + tail;
        }
        clearStateChar();
        if (escaping) {
          re += "\\\\";
        }
        const addPatternStart = addPatternStartSet[re.charAt(0)];
        for (let n = negativeLists.length - 1; n > -1; n--) {
          const nl = negativeLists[n];
          const nlBefore = re.slice(0, nl.reStart);
          const nlFirst = re.slice(nl.reStart, nl.reEnd - 8);
          let nlAfter = re.slice(nl.reEnd);
          const nlLast = re.slice(nl.reEnd - 8, nl.reEnd) + nlAfter;
          const closeParensBefore = nlBefore.split(")").length;
          const openParensBefore = nlBefore.split("(").length - closeParensBefore;
          let cleanAfter = nlAfter;
          for (let i = 0; i < openParensBefore; i++) {
            cleanAfter = cleanAfter.replace(/\)[+*?]?/, "");
          }
          nlAfter = cleanAfter;
          const dollar = nlAfter === "" ? "(?:$|\\/)" : "";
          re = nlBefore + nlFirst + nlAfter + dollar + nlLast;
        }
        if (re !== "" && hasMagic) {
          re = "(?=.)" + re;
        }
        if (addPatternStart) {
          re = patternStart() + re;
        }
        if (options.nocase && !hasMagic && !options.nocaseMagicOnly) {
          hasMagic = pattern.toUpperCase() !== pattern.toLowerCase();
        }
        if (!hasMagic) {
          return globUnescape(re);
        }
        const flags = (options.nocase ? "i" : "") + (uflag ? "u" : "");
        try {
          const ext2 = fastTest ? {
            _glob: pattern,
            _src: re,
            test: fastTest
          } : {
            _glob: pattern,
            _src: re
          };
          return Object.assign(new RegExp("^" + re + "$", flags), ext2);
        } catch (er) {
          this.debug("invalid regexp", er);
          return new RegExp("$.");
        }
      }
      makeRe() {
        if (this.regexp || this.regexp === false)
          return this.regexp;
        const set = this.set;
        if (!set.length) {
          this.regexp = false;
          return this.regexp;
        }
        const options = this.options;
        const twoStar = options.noglobstar ? star : options.dot ? twoStarDot : twoStarNoDot;
        const flags = options.nocase ? "i" : "";
        let re = set.map((pattern) => {
          const pp = pattern.map((p) => typeof p === "string" ? regExpEscape(p) : p === GLOBSTAR ? GLOBSTAR : p._src);
          pp.forEach((p, i) => {
            const next = pp[i + 1];
            const prev = pp[i - 1];
            if (p !== GLOBSTAR || prev === GLOBSTAR) {
              return;
            }
            if (prev === void 0) {
              if (next !== void 0 && next !== GLOBSTAR) {
                pp[i + 1] = "(?:\\/|" + twoStar + "\\/)?" + next;
              } else {
                pp[i] = twoStar;
              }
            } else if (next === void 0) {
              pp[i - 1] = prev + "(?:\\/|" + twoStar + ")?";
            } else if (next !== GLOBSTAR) {
              pp[i - 1] = prev + "(?:\\/|\\/" + twoStar + "\\/)" + next;
              pp[i + 1] = GLOBSTAR;
            }
          });
          return pp.filter((p) => p !== GLOBSTAR).join("/");
        }).join("|");
        re = "^(?:" + re + ")$";
        if (this.negate)
          re = "^(?!" + re + ").*$";
        try {
          this.regexp = new RegExp(re, flags);
        } catch (ex) {
          this.regexp = false;
        }
        return this.regexp;
      }
      slashSplit(p) {
        if (this.preserveMultipleSlashes) {
          return p.split("/");
        } else if (this.isWindows && /^\/\/[^\/]+/.test(p)) {
          return ["", ...p.split(/\/+/)];
        } else {
          return p.split(/\/+/);
        }
      }
      match(f, partial = this.partial) {
        this.debug("match", f, this.pattern);
        if (this.comment) {
          return false;
        }
        if (this.empty) {
          return f === "";
        }
        if (f === "/" && partial) {
          return true;
        }
        const options = this.options;
        if (this.isWindows) {
          f = f.split("\\").join("/");
        }
        const ff = this.slashSplit(f);
        this.debug(this.pattern, "split", ff);
        const set = this.set;
        this.debug(this.pattern, "set", set);
        let filename = ff[ff.length - 1];
        if (!filename) {
          for (let i = ff.length - 2; !filename && i >= 0; i--) {
            filename = ff[i];
          }
        }
        for (let i = 0; i < set.length; i++) {
          const pattern = set[i];
          let file = ff;
          if (options.matchBase && pattern.length === 1) {
            file = [filename];
          }
          const hit = this.matchOne(file, pattern, partial);
          if (hit) {
            if (options.flipNegate) {
              return true;
            }
            return !this.negate;
          }
        }
        if (options.flipNegate) {
          return false;
        }
        return this.negate;
      }
      static defaults(def) {
        return minimatch.defaults(def).Minimatch;
      }
    };
    minimatch.Minimatch = Minimatch;
    minimatch.escape = escape;
    minimatch.unescape = unescape;
  }
});

// src/jsonDiffer.js
import { diff } from "json-diff";
function diffSchemasOrTables(left, right) {
  left = JSON.parse(JSON.stringify(left));
  right = JSON.parse(JSON.stringify(right));
  const result = Object.entries(diff(left, right) ?? {});
  const added = result.filter((it) => it[0].endsWith("__added")).map((it) => it[1]);
  const deleted = result.filter((it) => it[0].endsWith("__deleted")).map((it) => it[1]);
  return { added, deleted };
}
function diffColumns(left, right) {
  left = JSON.parse(JSON.stringify(left));
  right = JSON.parse(JSON.stringify(right));
  const result = diff(left, right) ?? {};
  const alteredTables = Object.fromEntries(
    Object.entries(result).filter((it) => {
      return !(it[0].includes("__added") || it[0].includes("__deleted"));
    }).map((tableEntry) => {
      const deletedColumns = Object.entries(tableEntry[1].columns ?? {}).filter((it) => {
        return it[0].endsWith("__deleted");
      }).map((it) => {
        return it[1];
      });
      const addedColumns = Object.entries(tableEntry[1].columns ?? {}).filter((it) => {
        return it[0].endsWith("__added");
      }).map((it) => {
        return it[1];
      });
      tableEntry[1].columns = {
        added: addedColumns,
        deleted: deletedColumns
      };
      const table4 = left[tableEntry[0]];
      return [
        tableEntry[0],
        { name: table4.name, schema: table4.schema, ...tableEntry[1] }
      ];
    })
  );
  return alteredTables;
}
function applyJsonDiff(json1, json2) {
  json1 = JSON.parse(JSON.stringify(json1));
  json2 = JSON.parse(JSON.stringify(json2));
  const rawDiff = diff(json1, json2);
  const difference = JSON.parse(JSON.stringify(rawDiff || {}));
  difference.schemas = difference.schemas || {};
  difference.tables = difference.tables || {};
  difference.enums = difference.enums || {};
  const schemaKeys = Object.keys(difference.schemas);
  for (let key of schemaKeys) {
    if (key.endsWith("__added") || key.endsWith("__deleted")) {
      delete difference.schemas[key];
      continue;
    }
  }
  const tableKeys = Object.keys(difference.tables);
  for (let key of tableKeys) {
    if (key.endsWith("__added") || key.endsWith("__deleted")) {
      delete difference.tables[key];
      continue;
    }
    const table4 = json1.tables[key];
    difference.tables[key] = {
      name: table4.name,
      schema: table4.schema,
      ...difference.tables[key]
    };
  }
  for (let [tableKey2, tableValue] of Object.entries(difference.tables)) {
    const table4 = difference.tables[tableKey2];
    const columns = tableValue.columns || {};
    const columnKeys = Object.keys(columns);
    for (let key of columnKeys) {
      if (key.endsWith("__added") || key.endsWith("__deleted")) {
        delete table4.columns[key];
        continue;
      }
    }
    if (Object.keys(columns).length === 0) {
      delete table4["columns"];
    }
    if ("name" in table4 && "schema" in table4 && Object.keys(table4).length === 2) {
      delete difference.tables[tableKey2];
    }
  }
  const enumsEntries = Object.entries(difference.enums);
  const alteredEnums = enumsEntries.filter((it) => !(it[0].includes("__added") || it[0].includes("__deleted"))).map((it) => {
    const enumEntry = json1.enums[it[0]];
    const { name: name2, schema: schema4, values } = enumEntry;
    const sequence = mapArraysDiff(values, it[1].values);
    const addedValues = sequence.filter((it2) => it2.type === "added").map((it2) => {
      return {
        before: it2.before,
        value: it2.value
      };
    });
    const deletedValues = sequence.filter((it2) => it2.type === "removed").map((it2) => it2.value);
    return { name: name2, schema: schema4, addedValues, deletedValues };
  });
  const alteredTablesWithColumns = Object.values(difference.tables).map(
    (table4) => {
      return findAlternationsInTable(table4);
    }
  );
  return {
    alteredTablesWithColumns,
    alteredEnums
  };
}
var mapArraysDiff, findAlternationsInTable, alternationsInColumn;
var init_jsonDiffer = __esm({
  "src/jsonDiffer.js"() {
    "use strict";
    "use-strict";
    mapArraysDiff = (source, diff2) => {
      const sequence = [];
      let sourceIndex = 0;
      for (let i = 0; i < diff2.length; i++) {
        const it = diff2[i];
        if (it.length === 1) {
          sequence.push({ type: "same", value: source[sourceIndex] });
          sourceIndex += 1;
        } else {
          if (it[0] === "-") {
            sequence.push({ type: "removed", value: it[1] });
          } else {
            sequence.push({ type: "added", value: it[1], before: "" });
          }
        }
      }
      const result = sequence.reverse().reduce(
        (acc, it) => {
          if (it.type === "same") {
            acc.prev = it.value;
          }
          if (it.type === "added" && acc.prev) {
            it.before = acc.prev;
          }
          acc.result.push(it);
          return acc;
        },
        { result: [] }
      );
      return result.result.reverse();
    };
    findAlternationsInTable = (table4) => {
      const columns = table4.columns ?? {};
      const altered = Object.keys(columns).filter((it) => !(it.includes("__deleted") || it.includes("__added"))).map((it) => {
        return { name: it, ...columns[it] };
      });
      const deletedIndexes = Object.fromEntries(
        Object.entries(table4.indexes__deleted || {}).concat(
          Object.entries(table4.indexes || {}).filter(
            (it) => it[0].includes("__deleted")
          )
        ).map((entry) => [entry[0].replace("__deleted", ""), entry[1]])
      );
      const addedIndexes = Object.fromEntries(
        Object.entries(table4.indexes__added || {}).concat(
          Object.entries(table4.indexes || {}).filter(
            (it) => it[0].includes("__added")
          )
        ).map((entry) => [entry[0].replace("__added", ""), entry[1]])
      );
      const alteredIndexes = Object.fromEntries(
        Object.entries(table4.indexes || {}).filter((it) => {
          return !it[0].endsWith("__deleted") && !it[0].endsWith("__added");
        })
      );
      const deletedForeignKeys = Object.fromEntries(
        Object.entries(table4.foreignKeys__deleted || {}).concat(
          Object.entries(table4.foreignKeys || {}).filter(
            (it) => it[0].includes("__deleted")
          )
        ).map((entry) => [entry[0].replace("__deleted", ""), entry[1]])
      );
      const addedForeignKeys = Object.fromEntries(
        Object.entries(table4.foreignKeys__added || {}).concat(
          Object.entries(table4.foreignKeys || {}).filter(
            (it) => it[0].includes("__added")
          )
        ).map((entry) => [entry[0].replace("__added", ""), entry[1]])
      );
      const alteredForeignKeys = Object.fromEntries(
        Object.entries(table4.foreignKeys || {}).filter(
          (it) => !it[0].endsWith("__added") && !it[0].endsWith("__deleted")
        ).map((entry) => [entry[0], entry[1]])
      );
      const addedCompositePKs = Object.fromEntries(
        Object.entries(table4.compositePrimaryKeys || {}).filter((it) => {
          return it[0].endsWith("__added");
        })
      );
      const deletedCompositePKs = Object.fromEntries(
        Object.entries(table4.compositePrimaryKeys || {}).filter((it) => {
          return it[0].endsWith("__deleted");
        })
      );
      const alteredCompositePKs = Object.fromEntries(
        Object.entries(table4.compositePrimaryKeys || {}).filter((it) => {
          return !it[0].endsWith("__deleted") && !it[0].endsWith("__added");
        })
      );
      const addedUniqueConstraints = Object.fromEntries(
        Object.entries(table4.uniqueConstraints || {}).filter((it) => {
          return it[0].endsWith("__added");
        })
      );
      const deletedUniqueConstraints = Object.fromEntries(
        Object.entries(table4.uniqueConstraints || {}).filter((it) => {
          return it[0].endsWith("__deleted");
        })
      );
      const alteredUniqueConstraints = Object.fromEntries(
        Object.entries(table4.uniqueConstraints || {}).filter((it) => {
          return !it[0].endsWith("__deleted") && !it[0].endsWith("__added");
        })
      );
      const mappedAltered = altered.map((it) => alternationsInColumn(it));
      return {
        name: table4.name,
        schema: table4.schema || "",
        altered: mappedAltered,
        addedIndexes,
        deletedIndexes,
        alteredIndexes,
        addedForeignKeys,
        deletedForeignKeys,
        alteredForeignKeys,
        addedCompositePKs,
        deletedCompositePKs,
        alteredCompositePKs,
        addedUniqueConstraints,
        deletedUniqueConstraints,
        alteredUniqueConstraints
      };
    };
    alternationsInColumn = (column4) => {
      const altered = [column4];
      const result = altered.map((it) => {
        if (typeof it.name !== "string" && "__old" in it.name) {
          return {
            ...it,
            name: { type: "changed", old: it.name.__old, new: it.name.__new }
          };
        }
        return it;
      }).map((it) => {
        if ("type" in it) {
          if (it.type.__old.replace(" (", "(") === it.type.__new.replace(" (", "(")) {
            return void 0;
          }
          return {
            ...it,
            type: { type: "changed", old: it.type.__old, new: it.type.__new }
          };
        }
        return it;
      }).map((it) => {
        if ("default" in it) {
          return {
            ...it,
            default: {
              type: "changed",
              old: it.default.__old,
              new: it.default.__new
            }
          };
        }
        if ("default__added" in it) {
          const { default__added, ...others } = it;
          return {
            ...others,
            default: { type: "added", value: it.default__added }
          };
        }
        if ("default__deleted" in it) {
          const { default__deleted, ...others } = it;
          return {
            ...others,
            default: { type: "deleted", value: it.default__deleted }
          };
        }
        return it;
      }).map((it) => {
        if ("notNull" in it) {
          return {
            ...it,
            notNull: {
              type: "changed",
              old: it.notNull.__old,
              new: it.notNull.__new
            }
          };
        }
        if ("notNull__added" in it) {
          const { notNull__added, ...others } = it;
          return {
            ...others,
            notNull: { type: "added", value: it.notNull__added }
          };
        }
        if ("notNull__deleted" in it) {
          const { notNull__deleted, ...others } = it;
          return {
            ...others,
            notNull: { type: "deleted", value: it.notNull__deleted }
          };
        }
        return it;
      }).map((it) => {
        if ("primaryKey" in it) {
          return {
            ...it,
            primaryKey: {
              type: "changed",
              old: it.primaryKey.__old,
              new: it.primaryKey.__new
            }
          };
        }
        if ("primaryKey__added" in it) {
          const { notNull__added, ...others } = it;
          return {
            ...others,
            primaryKey: { type: "added", value: it.primaryKey__added }
          };
        }
        if ("primaryKey__deleted" in it) {
          const { notNull__deleted, ...others } = it;
          return {
            ...others,
            primaryKey: { type: "deleted", value: it.primaryKey__deleted }
          };
        }
        return it;
      }).map((it) => {
        if ("typeSchema" in it) {
          return {
            ...it,
            typeSchema: {
              type: "changed",
              old: it.typeSchema.__old,
              new: it.typeSchema.__new
            }
          };
        }
        if ("typeSchema__added" in it) {
          const { typeSchema__added, ...others } = it;
          return {
            ...others,
            typeSchema: { type: "added", value: it.typeSchema__added }
          };
        }
        if ("typeSchema__deleted" in it) {
          const { typeSchema__deleted, ...others } = it;
          return {
            ...others,
            typeSchema: { type: "deleted", value: it.typeSchema__deleted }
          };
        }
        return it;
      }).map((it) => {
        if ("onUpdate" in it) {
          return {
            ...it,
            onUpdate: {
              type: "changed",
              old: it.onUpdate.__old,
              new: it.onUpdate.__new
            }
          };
        }
        if ("onUpdate__added" in it) {
          const { onUpdate__added, ...others } = it;
          return {
            ...others,
            onUpdate: { type: "added", value: it.onUpdate__added }
          };
        }
        if ("onUpdate__deleted" in it) {
          const { onUpdate__deleted, ...others } = it;
          return {
            ...others,
            onUpdate: { type: "deleted", value: it.onUpdate__deleted }
          };
        }
        return it;
      }).map((it) => {
        if ("autoincrement" in it) {
          return {
            ...it,
            autoincrement: {
              type: "changed",
              old: it.autoincrement.__old,
              new: it.autoincrement.__new
            }
          };
        }
        if ("autoincrement__added" in it) {
          const { autoincrement__added, ...others } = it;
          return {
            ...others,
            autoincrement: { type: "added", value: it.autoincrement__added }
          };
        }
        if ("autoincrement__deleted" in it) {
          const { autoincrement__deleted, ...others } = it;
          return {
            ...others,
            autoincrement: { type: "deleted", value: it.autoincrement__deleted }
          };
        }
        return it;
      }).filter(Boolean);
      return result[0];
    };
  }
});

// src/jsonStatements.ts
var preparePgCreateTableJson, prepareMySqlCreateTableJson, prepareSQLiteCreateTable, prepareDropTableJson, prepareRenameTableJson, prepareCreateEnumJson, prepareAddValuesToEnumJson, prepareDropEnumJson, prepareMoveEnumJson, prepareRenameEnumJson, prepareCreateSchemasJson, prepareRenameSchemasJson, prepareDeleteSchemasJson, prepareRenameColumns, _prepareDropColumns, _prepareAddColumns, _prepareSqliteAddColumns, prepareAlterColumnsMysql, preparePgAlterColumns, prepareSqliteAlterColumns, prepareCreateIndexesJson, prepareCreateReferencesJson, prepareDropReferencesJson, prepareAlterReferencesJson, prepareDropIndexesJson, prepareAddCompositePrimaryKeySqlite, prepareDeleteCompositePrimaryKeySqlite, prepareAlterCompositePrimaryKeySqlite, prepareAddCompositePrimaryKeyPg, prepareDeleteCompositePrimaryKeyPg, prepareAlterCompositePrimaryKeyPg, prepareAddUniqueConstraintPg, prepareDeleteUniqueConstraintPg, prepareAddCompositePrimaryKeyMySql, prepareDeleteCompositePrimaryKeyMySql, prepareAlterCompositePrimaryKeyMySql;
var init_jsonStatements = __esm({
  "src/jsonStatements.ts"() {
    "use strict";
    init_mysqlSchema();
    init_pgSchema();
    init_sqliteSchema();
    preparePgCreateTableJson = (table4, json2) => {
      const { name: name2, schema: schema4, columns, compositePrimaryKeys, uniqueConstraints } = table4;
      const tableKey2 = `${schema4 || "public"}.${name2}`;
      const compositePkName = Object.values(compositePrimaryKeys).length > 0 ? json2.tables[tableKey2].compositePrimaryKeys[`${PgSquasher.unsquashPK(Object.values(compositePrimaryKeys)[0]).name}`].name : "";
      return {
        type: "create_table",
        tableName: name2,
        schema: schema4,
        columns: Object.values(columns),
        compositePKs: Object.values(compositePrimaryKeys),
        compositePkName,
        uniqueConstraints: Object.values(uniqueConstraints)
      };
    };
    prepareMySqlCreateTableJson = (table4, json2) => {
      const { name: name2, schema: schema4, columns, compositePrimaryKeys, uniqueConstraints } = table4;
      return {
        type: "create_table",
        tableName: name2,
        schema: schema4,
        columns: Object.values(columns),
        compositePKs: Object.values(compositePrimaryKeys),
        compositePkName: Object.values(compositePrimaryKeys).length > 0 ? json2.tables[name2].compositePrimaryKeys[MySqlSquasher.unsquashPK(Object.values(compositePrimaryKeys)[0]).name].name : "",
        uniqueConstraints: Object.values(uniqueConstraints)
      };
    };
    prepareSQLiteCreateTable = (table4) => {
      const { name: name2, columns, uniqueConstraints } = table4;
      const references2 = Object.values(table4.foreignKeys);
      const composites = Object.values(table4.compositePrimaryKeys).map(
        (it) => SQLiteSquasher.unsquashPK(it)
      );
      return {
        type: "sqlite_create_table",
        tableName: name2,
        columns: Object.values(columns),
        referenceData: references2,
        compositePKs: composites,
        uniqueConstraints: Object.values(uniqueConstraints)
      };
    };
    prepareDropTableJson = (table4) => {
      return {
        type: "drop_table",
        tableName: table4.name,
        schema: table4.schema
      };
    };
    prepareRenameTableJson = (tableFrom, tableTo) => {
      return {
        type: "rename_table",
        fromSchema: tableTo.schema,
        toSchema: tableTo.schema,
        tableNameFrom: tableFrom.name,
        tableNameTo: tableTo.name
      };
    };
    prepareCreateEnumJson = (name2, schema4, values) => {
      return {
        type: "create_type_enum",
        name: name2,
        schema: schema4,
        values
      };
    };
    prepareAddValuesToEnumJson = (name2, schema4, values) => {
      return values.map((it) => {
        return {
          type: "alter_type_add_value",
          name: name2,
          schema: schema4,
          value: it.value,
          before: it.before
        };
      });
    };
    prepareDropEnumJson = (name2, schema4) => {
      return {
        type: "drop_type_enum",
        name: name2,
        schema: schema4
      };
    };
    prepareMoveEnumJson = (name2, schemaFrom, schemaTo) => {
      return {
        type: "move_type_enum",
        name: name2,
        schemaFrom,
        schemaTo
      };
    };
    prepareRenameEnumJson = (nameFrom, nameTo, schema4) => {
      return {
        type: "rename_type_enum",
        nameFrom,
        nameTo,
        schema: schema4
      };
    };
    prepareCreateSchemasJson = (values) => {
      return values.map((it) => {
        return {
          type: "create_schema",
          name: it
        };
      });
    };
    prepareRenameSchemasJson = (values) => {
      return values.map((it) => {
        return {
          type: "rename_schema",
          from: it.from,
          to: it.to
        };
      });
    };
    prepareDeleteSchemasJson = (values) => {
      return values.map((it) => {
        return {
          type: "drop_schema",
          name: it
        };
      });
    };
    prepareRenameColumns = (tableName, schema4, pairs) => {
      return pairs.map((it) => {
        return {
          type: "alter_table_rename_column",
          tableName,
          oldColumnName: it.from.name,
          newColumnName: it.to.name,
          schema: schema4
        };
      });
    };
    _prepareDropColumns = (taleName, schema4, columns) => {
      return columns.map((it) => {
        return {
          type: "alter_table_drop_column",
          tableName: taleName,
          columnName: it.name,
          schema: schema4
        };
      });
    };
    _prepareAddColumns = (tableName, schema4, columns) => {
      return columns.map((it) => {
        return {
          type: "alter_table_add_column",
          tableName,
          column: it,
          schema: schema4
        };
      });
    };
    _prepareSqliteAddColumns = (tableName, columns, referenceData) => {
      const unsquashed = referenceData.map(
        (addedFkValue) => SQLiteSquasher.unsquashFK(addedFkValue)
      );
      return columns.map((it) => {
        const columnsWithReference = unsquashed.find(
          (t) => t.columnsFrom.includes(it.name)
        );
        return {
          type: "sqlite_alter_table_add_column",
          tableName,
          column: it,
          referenceData: columnsWithReference ? SQLiteSquasher.squashFK(columnsWithReference) : void 0
        };
      });
    };
    prepareAlterColumnsMysql = (tableName, schema4, columns, json2) => {
      let statements = [];
      let dropPkStatements = [];
      let setPkStatements = [];
      for (const column4 of columns) {
        const columnName = typeof column4.name !== "string" ? column4.name.new : column4.name;
        const table4 = json2.tables[tableName];
        const snapshotColumn = table4.columns[columnName];
        const columnType = snapshotColumn.type;
        const columnDefault = snapshotColumn.default;
        const columnOnUpdate = "onUpdate" in snapshotColumn ? snapshotColumn.onUpdate : void 0;
        const columnNotNull = table4.columns[columnName].notNull;
        const columnAutoIncrement = "autoincrement" in snapshotColumn ? snapshotColumn.autoincrement ?? false : false;
        const columnPk = table4.columns[columnName].primaryKey;
        if (column4.autoincrement?.type === "added") {
          statements.push({
            type: "alter_table_alter_column_set_autoincrement",
            tableName,
            columnName,
            schema: schema4,
            newDataType: columnType,
            columnDefault,
            columnOnUpdate,
            columnNotNull,
            columnAutoIncrement,
            columnPk
          });
        }
        if (column4.autoincrement?.type === "changed") {
          const type = column4.autoincrement.new ? "alter_table_alter_column_set_autoincrement" : "alter_table_alter_column_drop_autoincrement";
          statements.push({
            type,
            tableName,
            columnName,
            schema: schema4,
            newDataType: columnType,
            columnDefault,
            columnOnUpdate,
            columnNotNull,
            columnAutoIncrement,
            columnPk
          });
        }
        if (column4.autoincrement?.type === "deleted") {
          statements.push({
            type: "alter_table_alter_column_drop_autoincrement",
            tableName,
            columnName,
            schema: schema4,
            newDataType: columnType,
            columnDefault,
            columnOnUpdate,
            columnNotNull,
            columnAutoIncrement,
            columnPk
          });
        }
      }
      for (const column4 of columns) {
        const columnName = typeof column4.name !== "string" ? column4.name.new : column4.name;
        const columnType = json2.tables[tableName].columns[columnName].type;
        const columnDefault = json2.tables[tableName].columns[columnName].default;
        const columnOnUpdate = json2.tables[tableName].columns[columnName].onUpdate;
        const columnNotNull = json2.tables[tableName].columns[columnName].notNull;
        const columnAutoIncrement = json2.tables[tableName].columns[columnName].autoincrement;
        const columnPk = json2.tables[tableName].columns[columnName].primaryKey;
        const compositePk = json2.tables[tableName].compositePrimaryKeys[`${tableName}_${columnName}`];
        if (typeof column4.name !== "string") {
          statements.push({
            type: "alter_table_rename_column",
            tableName,
            oldColumnName: column4.name.old,
            newColumnName: column4.name.new,
            schema: schema4
          });
        }
        if (column4.type?.type === "changed") {
          statements.push({
            type: "alter_table_alter_column_set_type",
            tableName,
            columnName,
            newDataType: column4.type.new,
            oldDataType: column4.type.old,
            schema: schema4,
            columnDefault,
            columnOnUpdate,
            columnNotNull,
            columnAutoIncrement,
            columnPk
          });
        }
        if (column4.primaryKey?.type === "deleted" || column4.primaryKey?.type === "changed" && !column4.primaryKey.new && typeof compositePk === "undefined") {
          dropPkStatements.push({
            ////
            type: "alter_table_alter_column_drop_pk",
            tableName,
            columnName,
            schema: schema4
          });
        }
        if (column4.default?.type === "added") {
          statements.push({
            type: "alter_table_alter_column_set_default",
            tableName,
            columnName,
            newDefaultValue: column4.default.value,
            schema: schema4,
            columnOnUpdate,
            columnNotNull,
            columnAutoIncrement,
            newDataType: columnType,
            columnPk
          });
        }
        if (column4.default?.type === "changed") {
          statements.push({
            type: "alter_table_alter_column_set_default",
            tableName,
            columnName,
            newDefaultValue: column4.default.new,
            oldDefaultValue: column4.default.old,
            schema: schema4,
            columnOnUpdate,
            columnNotNull,
            columnAutoIncrement,
            newDataType: columnType,
            columnPk
          });
        }
        if (column4.default?.type === "deleted") {
          statements.push({
            type: "alter_table_alter_column_drop_default",
            tableName,
            columnName,
            schema: schema4,
            columnDefault,
            columnOnUpdate,
            columnNotNull,
            columnAutoIncrement,
            newDataType: columnType,
            columnPk
          });
        }
        if (column4.notNull?.type === "added") {
          statements.push({
            type: "alter_table_alter_column_set_notnull",
            tableName,
            columnName,
            schema: schema4,
            newDataType: columnType,
            columnDefault,
            columnOnUpdate,
            columnNotNull,
            columnAutoIncrement,
            columnPk
          });
        }
        if (column4.notNull?.type === "changed") {
          const type = column4.notNull.new ? "alter_table_alter_column_set_notnull" : "alter_table_alter_column_drop_notnull";
          statements.push({
            type,
            tableName,
            columnName,
            schema: schema4,
            newDataType: columnType,
            columnDefault,
            columnOnUpdate,
            columnNotNull,
            columnAutoIncrement,
            columnPk
          });
        }
        if (column4.notNull?.type === "deleted") {
          statements.push({
            type: "alter_table_alter_column_drop_notnull",
            tableName,
            columnName,
            schema: schema4,
            newDataType: columnType,
            columnDefault,
            columnOnUpdate,
            columnNotNull,
            columnAutoIncrement,
            columnPk
          });
        }
        if (column4.primaryKey?.type === "added" || column4.primaryKey?.type === "changed" && column4.primaryKey.new) {
          const wasAutoincrement = statements.filter(
            (it) => it.type === "alter_table_alter_column_set_autoincrement"
          );
          if (wasAutoincrement.length === 0) {
            setPkStatements.push({
              type: "alter_table_alter_column_set_pk",
              tableName,
              schema: schema4,
              columnName
            });
          }
        }
        if (column4.onUpdate?.type === "added") {
          statements.push({
            type: "alter_table_alter_column_set_on_update",
            tableName,
            columnName,
            schema: schema4,
            newDataType: columnType,
            columnDefault,
            columnOnUpdate,
            columnNotNull,
            columnAutoIncrement,
            columnPk
          });
        }
        if (column4.onUpdate?.type === "deleted") {
          statements.push({
            type: "alter_table_alter_column_drop_on_update",
            tableName,
            columnName,
            schema: schema4,
            newDataType: columnType,
            columnDefault,
            columnOnUpdate,
            columnNotNull,
            columnAutoIncrement,
            columnPk
          });
        }
      }
      return [...dropPkStatements, ...setPkStatements, ...statements];
    };
    preparePgAlterColumns = (_tableName, schema4, columns, json2) => {
      const tableKey2 = `${schema4 || "public"}.${_tableName}`;
      let statements = [];
      let dropPkStatements = [];
      let setPkStatements = [];
      for (const column4 of columns) {
        const columnName = typeof column4.name !== "string" ? column4.name.new : column4.name;
        const tableName = json2.tables[tableKey2].name;
        const columnType = json2.tables[tableKey2].columns[columnName].type;
        const columnDefault = json2.tables[tableKey2].columns[columnName].default;
        const columnOnUpdate = json2.tables[tableKey2].columns[columnName].onUpdate;
        const columnNotNull = json2.tables[tableKey2].columns[columnName].notNull;
        const columnAutoIncrement = json2.tables[tableKey2].columns[columnName].autoincrement;
        const columnPk = json2.tables[tableKey2].columns[columnName].primaryKey;
        const compositePk = json2.tables[tableKey2].compositePrimaryKeys[`${tableName}_${columnName}`];
        if (typeof column4.name !== "string") {
          statements.push({
            type: "alter_table_rename_column",
            tableName,
            oldColumnName: column4.name.old,
            newColumnName: column4.name.new,
            schema: schema4
          });
        }
        if (column4.type?.type === "changed") {
          statements.push({
            type: "alter_table_alter_column_set_type",
            tableName,
            columnName,
            newDataType: column4.type.new,
            oldDataType: column4.type.old,
            schema: schema4,
            columnDefault,
            columnOnUpdate,
            columnNotNull,
            columnAutoIncrement,
            columnPk
          });
        }
        if (column4.primaryKey?.type === "deleted" || column4.primaryKey?.type === "changed" && !column4.primaryKey.new && typeof compositePk === "undefined") {
          dropPkStatements.push({
            ////
            type: "alter_table_alter_column_drop_pk",
            tableName,
            columnName,
            schema: schema4
          });
        }
        if (column4.default?.type === "added") {
          statements.push({
            type: "alter_table_alter_column_set_default",
            tableName,
            columnName,
            newDefaultValue: column4.default.value,
            schema: schema4,
            columnOnUpdate,
            columnNotNull,
            columnAutoIncrement,
            newDataType: columnType,
            columnPk
          });
        }
        if (column4.default?.type === "changed") {
          statements.push({
            type: "alter_table_alter_column_set_default",
            tableName,
            columnName,
            newDefaultValue: column4.default.new,
            oldDefaultValue: column4.default.old,
            schema: schema4,
            columnOnUpdate,
            columnNotNull,
            columnAutoIncrement,
            newDataType: columnType,
            columnPk
          });
        }
        if (column4.default?.type === "deleted") {
          statements.push({
            type: "alter_table_alter_column_drop_default",
            tableName,
            columnName,
            schema: schema4,
            columnDefault,
            columnOnUpdate,
            columnNotNull,
            columnAutoIncrement,
            newDataType: columnType,
            columnPk
          });
        }
        if (column4.notNull?.type === "added") {
          statements.push({
            type: "alter_table_alter_column_set_notnull",
            tableName,
            columnName,
            schema: schema4,
            newDataType: columnType,
            columnDefault,
            columnOnUpdate,
            columnNotNull,
            columnAutoIncrement,
            columnPk
          });
        }
        if (column4.notNull?.type === "changed") {
          const type = column4.notNull.new ? "alter_table_alter_column_set_notnull" : "alter_table_alter_column_drop_notnull";
          statements.push({
            type,
            tableName,
            columnName,
            schema: schema4,
            newDataType: columnType,
            columnDefault,
            columnOnUpdate,
            columnNotNull,
            columnAutoIncrement,
            columnPk
          });
        }
        if (column4.notNull?.type === "deleted") {
          statements.push({
            type: "alter_table_alter_column_drop_notnull",
            tableName,
            columnName,
            schema: schema4,
            newDataType: columnType,
            columnDefault,
            columnOnUpdate,
            columnNotNull,
            columnAutoIncrement,
            columnPk
          });
        }
        if (column4.primaryKey?.type === "added" || column4.primaryKey?.type === "changed" && column4.primaryKey.new) {
          const wasAutoincrement = statements.filter(
            (it) => it.type === "alter_table_alter_column_set_autoincrement"
          );
          if (wasAutoincrement.length === 0) {
            setPkStatements.push({
              type: "alter_table_alter_column_set_pk",
              tableName,
              schema: schema4,
              columnName
            });
          }
        }
        if (column4.onUpdate?.type === "added") {
          statements.push({
            type: "alter_table_alter_column_set_on_update",
            tableName,
            columnName,
            schema: schema4,
            newDataType: columnType,
            columnDefault,
            columnOnUpdate,
            columnNotNull,
            columnAutoIncrement,
            columnPk
          });
        }
        if (column4.onUpdate?.type === "deleted") {
          statements.push({
            type: "alter_table_alter_column_drop_on_update",
            tableName,
            columnName,
            schema: schema4,
            newDataType: columnType,
            columnDefault,
            columnOnUpdate,
            columnNotNull,
            columnAutoIncrement,
            columnPk
          });
        }
      }
      return [...dropPkStatements, ...setPkStatements, ...statements];
    };
    prepareSqliteAlterColumns = (tableName, schema4, columns, json2) => {
      let statements = [];
      let dropPkStatements = [];
      let setPkStatements = [];
      for (const column4 of columns) {
        const columnName = typeof column4.name !== "string" ? column4.name.new : column4.name;
        const columnType = json2.tables[tableName].columns[columnName].type;
        const columnDefault = json2.tables[tableName].columns[columnName].default;
        const columnOnUpdate = json2.tables[tableName].columns[columnName].onUpdate;
        const columnNotNull = json2.tables[tableName].columns[columnName].notNull;
        const columnAutoIncrement = json2.tables[tableName].columns[columnName].autoincrement;
        const columnPk = json2.tables[tableName].columns[columnName].primaryKey;
        const compositePk = json2.tables[tableName].compositePrimaryKeys[`${tableName}_${columnName}`];
        if (typeof column4.name !== "string") {
          statements.push({
            type: "alter_table_rename_column",
            tableName,
            oldColumnName: column4.name.old,
            newColumnName: column4.name.new,
            schema: schema4
          });
        }
        if (column4.type?.type === "changed") {
          statements.push({
            type: "alter_table_alter_column_set_type",
            tableName,
            columnName,
            newDataType: column4.type.new,
            oldDataType: column4.type.old,
            schema: schema4,
            columnDefault,
            columnOnUpdate,
            columnNotNull,
            columnAutoIncrement,
            columnPk
          });
        }
        if (column4.primaryKey?.type === "deleted" || column4.primaryKey?.type === "changed" && !column4.primaryKey.new && typeof compositePk === "undefined") {
          dropPkStatements.push({
            ////
            type: "alter_table_alter_column_drop_pk",
            tableName,
            columnName,
            schema: schema4
          });
        }
        if (column4.default?.type === "added") {
          statements.push({
            type: "alter_table_alter_column_set_default",
            tableName,
            columnName,
            newDefaultValue: column4.default.value,
            schema: schema4,
            columnOnUpdate,
            columnNotNull,
            columnAutoIncrement,
            newDataType: columnType,
            columnPk
          });
        }
        if (column4.default?.type === "changed") {
          statements.push({
            type: "alter_table_alter_column_set_default",
            tableName,
            columnName,
            newDefaultValue: column4.default.new,
            oldDefaultValue: column4.default.old,
            schema: schema4,
            columnOnUpdate,
            columnNotNull,
            columnAutoIncrement,
            newDataType: columnType,
            columnPk
          });
        }
        if (column4.default?.type === "deleted") {
          statements.push({
            type: "alter_table_alter_column_drop_default",
            tableName,
            columnName,
            schema: schema4,
            columnDefault,
            columnOnUpdate,
            columnNotNull,
            columnAutoIncrement,
            newDataType: columnType,
            columnPk
          });
        }
        if (column4.notNull?.type === "added") {
          statements.push({
            type: "alter_table_alter_column_set_notnull",
            tableName,
            columnName,
            schema: schema4,
            newDataType: columnType,
            columnDefault,
            columnOnUpdate,
            columnNotNull,
            columnAutoIncrement,
            columnPk
          });
        }
        if (column4.notNull?.type === "changed") {
          const type = column4.notNull.new ? "alter_table_alter_column_set_notnull" : "alter_table_alter_column_drop_notnull";
          statements.push({
            type,
            tableName,
            columnName,
            schema: schema4,
            newDataType: columnType,
            columnDefault,
            columnOnUpdate,
            columnNotNull,
            columnAutoIncrement,
            columnPk
          });
        }
        if (column4.notNull?.type === "deleted") {
          statements.push({
            type: "alter_table_alter_column_drop_notnull",
            tableName,
            columnName,
            schema: schema4,
            newDataType: columnType,
            columnDefault,
            columnOnUpdate,
            columnNotNull,
            columnAutoIncrement,
            columnPk
          });
        }
        if (column4.primaryKey?.type === "added" || column4.primaryKey?.type === "changed" && column4.primaryKey.new) {
          const wasAutoincrement = statements.filter(
            (it) => it.type === "alter_table_alter_column_set_autoincrement"
          );
          if (wasAutoincrement.length === 0) {
            setPkStatements.push({
              type: "alter_table_alter_column_set_pk",
              tableName,
              schema: schema4,
              columnName
            });
          }
        }
        if (column4.onUpdate?.type === "added") {
          statements.push({
            type: "alter_table_alter_column_set_on_update",
            tableName,
            columnName,
            schema: schema4,
            newDataType: columnType,
            columnDefault,
            columnOnUpdate,
            columnNotNull,
            columnAutoIncrement,
            columnPk
          });
        }
        if (column4.onUpdate?.type === "deleted") {
          statements.push({
            type: "alter_table_alter_column_drop_on_update",
            tableName,
            columnName,
            schema: schema4,
            newDataType: columnType,
            columnDefault,
            columnOnUpdate,
            columnNotNull,
            columnAutoIncrement,
            columnPk
          });
        }
      }
      return [...dropPkStatements, ...setPkStatements, ...statements];
    };
    prepareCreateIndexesJson = (tableName, schema4, indexes) => {
      return Object.values(indexes).map((indexData) => {
        return {
          type: "create_index",
          tableName,
          data: indexData,
          schema: schema4
        };
      });
    };
    prepareCreateReferencesJson = (tableName, schema4, foreignKeys) => {
      return Object.values(foreignKeys).map((fkData) => {
        return {
          type: "create_reference",
          tableName,
          data: fkData,
          schema: schema4
        };
      });
    };
    prepareDropReferencesJson = (tableName, schema4, foreignKeys) => {
      return Object.values(foreignKeys).map((fkData) => {
        return {
          type: "delete_reference",
          tableName,
          data: fkData,
          schema: schema4
        };
      });
    };
    prepareAlterReferencesJson = (tableName, schema4, foreignKeys) => {
      const keys = Object.keys(foreignKeys);
      const stmts = [];
      if (keys.length > 0) {
        stmts.push(
          ...prepareDropReferencesJson(tableName, schema4, {
            [keys[0]]: foreignKeys[keys[0]].__old
          })
        );
        stmts.push(
          ...prepareCreateReferencesJson(tableName, schema4, {
            [keys[0]]: foreignKeys[keys[0]].__new
          })
        );
      }
      return stmts;
    };
    prepareDropIndexesJson = (tableName, schema4, indexes) => {
      return Object.values(indexes).map((indexData) => {
        return {
          type: "drop_index",
          tableName,
          data: indexData,
          schema: schema4
        };
      });
    };
    prepareAddCompositePrimaryKeySqlite = (tableName, pks) => {
      return Object.values(pks).map((it) => {
        return {
          type: "create_composite_pk",
          tableName,
          data: it
        };
      });
    };
    prepareDeleteCompositePrimaryKeySqlite = (tableName, pks) => {
      return Object.values(pks).map((it) => {
        return {
          type: "delete_composite_pk",
          tableName,
          data: it
        };
      });
    };
    prepareAlterCompositePrimaryKeySqlite = (tableName, pks) => {
      return Object.values(pks).map((it) => {
        return {
          type: "alter_composite_pk",
          tableName,
          old: it.__old,
          new: it.__new
        };
      });
    };
    prepareAddCompositePrimaryKeyPg = (tableName, schema4, pks, json2) => {
      return Object.values(pks).map((it) => {
        const unsquashed = PgSquasher.unsquashPK(it);
        return {
          type: "create_composite_pk",
          tableName,
          data: it,
          schema: schema4,
          constraintName: json2.tables[`${schema4 || "public"}.${tableName}`].compositePrimaryKeys[unsquashed.name].name
        };
      });
    };
    prepareDeleteCompositePrimaryKeyPg = (tableName, schema4, pks, json1) => {
      return Object.values(pks).map((it) => {
        return {
          type: "delete_composite_pk",
          tableName,
          data: it,
          schema: schema4,
          constraintName: json1.tables[`${schema4}.${tableName}`].compositePrimaryKeys[PgSquasher.unsquashPK(it).name].name
        };
      });
    };
    prepareAlterCompositePrimaryKeyPg = (tableName, schema4, pks, json1, json2) => {
      return Object.values(pks).map((it) => {
        return {
          type: "alter_composite_pk",
          tableName,
          old: it.__old,
          new: it.__new,
          schema: schema4,
          oldConstraintName: json1.tables[`${schema4 || "public"}.${tableName}`].compositePrimaryKeys[PgSquasher.unsquashPK(it.__old).name].name,
          newConstraintName: json2.tables[`${schema4 || "public"}.${tableName}`].compositePrimaryKeys[PgSquasher.unsquashPK(it.__new).name].name
        };
      });
    };
    prepareAddUniqueConstraintPg = (tableName, schema4, unqs) => {
      return Object.values(unqs).map((it) => {
        return {
          type: "create_unique_constraint",
          tableName,
          data: it,
          schema: schema4
        };
      });
    };
    prepareDeleteUniqueConstraintPg = (tableName, schema4, unqs) => {
      return Object.values(unqs).map((it) => {
        return {
          type: "delete_unique_constraint",
          tableName,
          data: it,
          schema: schema4
        };
      });
    };
    prepareAddCompositePrimaryKeyMySql = (tableName, pks, json1, json2) => {
      const res = [];
      for (const it of Object.values(pks)) {
        const unsquashed = MySqlSquasher.unsquashPK(it);
        if (unsquashed.columns.length === 1 && json1.tables[tableName]?.columns[unsquashed.columns[0]]?.primaryKey) {
          continue;
        }
        res.push({
          type: "create_composite_pk",
          tableName,
          data: it,
          constraintName: json2.tables[tableName].compositePrimaryKeys[unsquashed.name].name
        });
      }
      return res;
    };
    prepareDeleteCompositePrimaryKeyMySql = (tableName, pks, json1) => {
      return Object.values(pks).map((it) => {
        return {
          type: "delete_composite_pk",
          tableName,
          data: it,
          constraintName: json1.tables[tableName].compositePrimaryKeys[MySqlSquasher.unsquashPK(it).name].name
        };
      });
    };
    prepareAlterCompositePrimaryKeyMySql = (tableName, pks, json1, json2) => {
      return Object.values(pks).map((it) => {
        return {
          type: "alter_composite_pk",
          tableName,
          old: it.__old,
          new: it.__new,
          oldConstraintName: json1.tables[tableName].compositePrimaryKeys[MySqlSquasher.unsquashPK(it.__old).name].name,
          newConstraintName: json2.tables[tableName].compositePrimaryKeys[MySqlSquasher.unsquashPK(it.__new).name].name
        };
      });
    };
  }
});

// src/snapshotsDiffer.ts
var snapshotsDiffer_exports = {};
__export(snapshotsDiffer_exports, {
  alteredTableScheme: () => alteredTableScheme,
  applyMysqlSnapshotsDiff: () => applyMysqlSnapshotsDiff,
  applyPgSnapshotsDiff: () => applyPgSnapshotsDiff,
  applySqliteSnapshotsDiff: () => applySqliteSnapshotsDiff,
  diffResultScheme: () => diffResultScheme,
  diffResultSchemeMysql: () => diffResultSchemeMysql,
  diffResultSchemeSQLite: () => diffResultSchemeSQLite,
  makePatched: () => makePatched,
  makeSelfOrPatched: () => makeSelfOrPatched
});
import {
  any as any4,
  boolean as boolean7,
  string as string11,
  enum as enumType5,
  object as object11,
  union as union13,
  array as array2,
  record as record4,
  literal as literal7,
  never
} from "zod";
var makeChanged, makeSelfOrChanged, makePatched, makeSelfOrPatched, columnSchema, alteredColumnSchema, enumSchema2, changedEnumSchema, tableScheme, alteredTableScheme, diffResultScheme, diffResultSchemeMysql, diffResultSchemeSQLite, schemaChangeFor, nameChangeFor, nameSchemaChangeFor, columnChangeFor, applyPgSnapshotsDiff, applyMysqlSnapshotsDiff, applySqliteSnapshotsDiff;
var init_snapshotsDiffer = __esm({
  "src/snapshotsDiffer.ts"() {
    "use strict";
    init_sqlgenerator();
    init_jsonDiffer();
    init_jsonStatements();
    init_utils4();
    init_sqliteSchema();
    init_mysqlSchema();
    init_global();
    makeChanged = (schema4) => {
      return object11({
        type: enumType5(["changed"]),
        old: schema4,
        new: schema4
      });
    };
    makeSelfOrChanged = (schema4) => {
      return union13([
        schema4,
        object11({
          type: enumType5(["changed"]),
          old: schema4,
          new: schema4
        })
      ]);
    };
    makePatched = (schema4) => {
      return union13([
        object11({
          type: literal7("added"),
          value: schema4
        }),
        object11({
          type: literal7("deleted"),
          value: schema4
        }),
        object11({
          type: literal7("changed"),
          old: schema4,
          new: schema4
        })
      ]);
    };
    makeSelfOrPatched = (schema4) => {
      return union13([
        object11({
          type: literal7("none"),
          value: schema4
        }),
        object11({
          type: literal7("added"),
          value: schema4
        }),
        object11({
          type: literal7("deleted"),
          value: schema4
        }),
        object11({
          type: literal7("changed"),
          old: schema4,
          new: schema4
        })
      ]);
    };
    columnSchema = object11({
      name: string11(),
      type: string11(),
      typeSchema: string11().optional(),
      primaryKey: boolean7().optional(),
      default: any4().optional(),
      notNull: boolean7().optional(),
      // should it be optional? should if be here?
      autoincrement: boolean7().optional(),
      onUpdate: boolean7().optional(),
      isUnique: any4().optional(),
      uniqueName: string11().optional(),
      nullsNotDistinct: boolean7().optional()
    }).strict();
    alteredColumnSchema = object11({
      name: makeSelfOrChanged(string11()),
      type: makeChanged(string11()).optional(),
      default: makePatched(any4()).optional(),
      primaryKey: makePatched(boolean7()).optional(),
      notNull: makePatched(boolean7()).optional(),
      typeSchema: makePatched(string11()).optional(),
      onUpdate: makePatched(boolean7()).optional(),
      autoincrement: makePatched(boolean7()).optional()
    }).strict();
    enumSchema2 = object11({
      name: string11(),
      schema: string11(),
      values: array2(string11())
    }).strict();
    changedEnumSchema = object11({
      name: string11(),
      schema: string11(),
      addedValues: object11({
        before: string11(),
        value: string11()
      }).array(),
      deletedValues: array2(string11())
    }).strict();
    tableScheme = object11({
      name: string11(),
      schema: string11().default(""),
      columns: record4(string11(), columnSchema),
      indexes: record4(string11(), string11()),
      foreignKeys: record4(string11(), string11()),
      compositePrimaryKeys: record4(string11(), string11()).default({}),
      uniqueConstraints: record4(string11(), string11()).default({})
    }).strict();
    alteredTableScheme = object11({
      name: string11(),
      schema: string11(),
      altered: alteredColumnSchema.array(),
      addedIndexes: record4(string11(), string11()),
      deletedIndexes: record4(string11(), string11()),
      alteredIndexes: record4(
        string11(),
        object11({
          __new: string11(),
          __old: string11()
        }).strict()
      ),
      addedForeignKeys: record4(string11(), string11()),
      deletedForeignKeys: record4(string11(), string11()),
      alteredForeignKeys: record4(
        string11(),
        object11({
          __new: string11(),
          __old: string11()
        }).strict()
      ),
      addedCompositePKs: record4(string11(), string11()),
      deletedCompositePKs: record4(string11(), string11()),
      alteredCompositePKs: record4(
        string11(),
        object11({
          __new: string11(),
          __old: string11()
        })
      ),
      addedUniqueConstraints: record4(string11(), string11()),
      deletedUniqueConstraints: record4(string11(), string11()),
      alteredUniqueConstraints: record4(
        string11(),
        object11({
          __new: string11(),
          __old: string11()
        })
      )
    }).strict();
    diffResultScheme = object11({
      alteredTablesWithColumns: alteredTableScheme.array(),
      alteredEnums: changedEnumSchema.array()
    }).strict();
    diffResultSchemeMysql = object11({
      alteredTablesWithColumns: alteredTableScheme.array(),
      alteredEnums: never().array()
    }).strict();
    diffResultSchemeSQLite = object11({
      alteredTablesWithColumns: alteredTableScheme.array(),
      alteredEnums: never().array()
    }).strict();
    schemaChangeFor = (table4, renamedSchemas) => {
      for (let ren of renamedSchemas) {
        if (table4.schema === ren.from.name) {
          return { key: `${ren.to.name}.${table4.name}`, schema: ren.to.name };
        }
      }
      return {
        key: `${table4.schema || "public"}.${table4.name}`,
        schema: table4.schema
      };
    };
    nameChangeFor = (table4, renamed) => {
      for (let ren of renamed) {
        if (table4.name === ren.from.name) {
          return { name: ren.to.name };
        }
      }
      return {
        name: table4.name
      };
    };
    nameSchemaChangeFor = (table4, renamedTables) => {
      for (let ren of renamedTables) {
        if (table4.name === ren.from.name && table4.schema === ren.from.schema) {
          return {
            key: `${ren.to.schema || "public"}.${ren.to.name}`,
            name: ren.to.name,
            schema: ren.to.schema
          };
        }
      }
      return {
        key: `${table4.schema || "public"}.${table4.name}`,
        name: table4.name,
        schema: table4.schema
      };
    };
    columnChangeFor = (column4, renamedColumns) => {
      for (let ren of renamedColumns) {
        if (column4 === ren.from.name) {
          return ren.to.name;
        }
      }
      return column4;
    };
    applyPgSnapshotsDiff = async (json1, json2, schemasResolver2, enumsResolver2, tablesResolver2, columnsResolver2, prevFull, curFull) => {
      const schemasDiff = diffSchemasOrTables(json1.schemas, json2.schemas);
      const {
        created: createdSchemas,
        deleted: deletedSchemas,
        renamed: renamedSchemas
      } = await schemasResolver2({
        created: schemasDiff.added.map((it) => ({ name: it })),
        deleted: schemasDiff.deleted.map((it) => ({ name: it }))
      });
      const schemasPatchedSnap1 = copy(json1);
      schemasPatchedSnap1.tables = mapEntries(
        schemasPatchedSnap1.tables,
        (_2, it) => {
          const { key, schema: schema4 } = schemaChangeFor(it, renamedSchemas);
          it.schema = schema4;
          return [key, it];
        }
      );
      schemasPatchedSnap1.enums = mapEntries(schemasPatchedSnap1.enums, (_2, it) => {
        const { key, schema: schema4 } = schemaChangeFor(it, renamedSchemas);
        it.schema = schema4;
        return [key, it];
      });
      const enumsDiff = diffSchemasOrTables(schemasPatchedSnap1.enums, json2.enums);
      const {
        created: createdEnums,
        deleted: deletedEnums,
        renamed: renamedEnums,
        moved: movedEnums
      } = await enumsResolver2({
        created: enumsDiff.added,
        deleted: enumsDiff.deleted
      });
      schemasPatchedSnap1.enums = mapEntries(schemasPatchedSnap1.enums, (_2, it) => {
        const { key, name: name2, schema: schema4 } = nameSchemaChangeFor(it, renamedEnums);
        it.name = name2;
        it.schema = schema4;
        return [key, it];
      });
      const columnTypesChangeMap = renamedEnums.reduce(
        (acc, it) => {
          acc[`${it.from.schema}.${it.from.name}`] = {
            nameFrom: it.from.name,
            nameTo: it.to.name,
            schemaFrom: it.from.schema,
            schemaTo: it.to.schema
          };
          return acc;
        },
        {}
      );
      const columnTypesMovesMap = movedEnums.reduce(
        (acc, it) => {
          acc[`${it.schemaFrom}.${it.name}`] = {
            nameFrom: it.name,
            nameTo: it.name,
            schemaFrom: it.schemaFrom,
            schemaTo: it.schemaTo
          };
          return acc;
        },
        {}
      );
      schemasPatchedSnap1.tables = mapEntries(
        schemasPatchedSnap1.tables,
        (tableKey2, tableValue) => {
          const patchedColumns = mapValues(tableValue.columns, (column4) => {
            const key = `${column4.typeSchema || "public"}.${column4.type}`;
            const change = columnTypesChangeMap[key] || columnTypesMovesMap[key];
            if (change) {
              column4.type = change.nameTo;
              column4.typeSchema = change.schemaTo;
            }
            return column4;
          });
          tableValue.columns = patchedColumns;
          return [tableKey2, tableValue];
        }
      );
      const tablesDiff = diffSchemasOrTables(
        schemasPatchedSnap1.tables,
        json2.tables
      );
      const {
        created: createdTables,
        deleted: deletedTables,
        moved: movedTables,
        renamed: renamedTables
        // renamed or moved
      } = await tablesResolver2({
        created: tablesDiff.added,
        deleted: tablesDiff.deleted
      });
      const tablesPatchedSnap1 = copy(schemasPatchedSnap1);
      tablesPatchedSnap1.tables = mapEntries(tablesPatchedSnap1.tables, (_2, it) => {
        const { key, name: name2, schema: schema4 } = nameSchemaChangeFor(it, renamedTables);
        it.name = name2;
        it.schema = schema4;
        return [key, it];
      });
      const res = diffColumns(tablesPatchedSnap1.tables, json2.tables);
      const columnRenames = [];
      const columnCreates = [];
      const columnDeletes = [];
      for (let entry of Object.values(res)) {
        const { renamed, created, deleted } = await columnsResolver2({
          tableName: entry.name,
          schema: entry.schema,
          deleted: entry.columns.deleted,
          created: entry.columns.added
        });
        if (created.length > 0) {
          columnCreates.push({
            table: entry.name,
            schema: entry.schema,
            columns: created
          });
        }
        if (deleted.length > 0) {
          columnDeletes.push({
            table: entry.name,
            schema: entry.schema,
            columns: deleted
          });
        }
        if (renamed.length > 0) {
          columnRenames.push({
            table: entry.name,
            schema: entry.schema,
            renames: renamed
          });
        }
      }
      const columnRenamesDict = columnRenames.reduce(
        (acc, it) => {
          acc[`${it.schema || "public"}.${it.table}`] = it.renames;
          return acc;
        },
        {}
      );
      const columnsPatchedSnap1 = copy(tablesPatchedSnap1);
      columnsPatchedSnap1.tables = mapEntries(
        columnsPatchedSnap1.tables,
        (tableKey2, tableValue) => {
          const patchedColumns = mapKeys(
            tableValue.columns,
            (columnKey, column4) => {
              const rens = columnRenamesDict[`${tableValue.schema || "public"}.${tableValue.name}`] || [];
              const newName = columnChangeFor(columnKey, rens);
              column4.name = newName;
              return newName;
            }
          );
          tableValue.columns = patchedColumns;
          return [tableKey2, tableValue];
        }
      );
      const diffResult = applyJsonDiff(columnsPatchedSnap1, json2);
      const typedResult = diffResultScheme.parse(diffResult);
      const jsonStatements = [];
      const jsonCreateIndexesForCreatedTables = createdTables.map((it) => {
        return prepareCreateIndexesJson(it.name, it.schema, it.indexes);
      }).flat();
      const jsonDropTables = deletedTables.map((it) => {
        return prepareDropTableJson(it);
      });
      const jsonRenameTables = renamedTables.map((it) => {
        return prepareRenameTableJson(it.from, it.to);
      });
      const alteredTables = typedResult.alteredTablesWithColumns;
      const jsonRenameColumnsStatements = [];
      const jsonDropColumnsStatemets = [];
      const jsonAddColumnsStatemets = [];
      for (let it of columnRenames) {
        jsonRenameColumnsStatements.push(
          ...prepareRenameColumns(it.table, it.schema, it.renames)
        );
      }
      for (let it of columnDeletes) {
        jsonDropColumnsStatemets.push(
          ..._prepareDropColumns(it.table, it.schema, it.columns)
        );
      }
      for (let it of columnCreates) {
        jsonAddColumnsStatemets.push(
          ..._prepareAddColumns(it.table, it.schema, it.columns)
        );
      }
      const jsonAddedCompositePKs = [];
      const jsonDeletedCompositePKs = [];
      const jsonAlteredCompositePKs = [];
      const jsonAddedUniqueConstraints = [];
      const jsonDeletedUniqueConstraints = [];
      const jsonAlteredUniqueConstraints = [];
      const jsonSetTableSchemas = [];
      for (let it of movedTables) {
        jsonSetTableSchemas.push({
          type: "alter_table_set_schema",
          tableName: it.name,
          schemaFrom: it.schemaFrom || "public",
          schemaTo: it.schemaTo || "public"
        });
      }
      for (let it of alteredTables) {
        let addedColumns = [];
        for (const addedPkName of Object.keys(it.addedCompositePKs)) {
          const addedPkColumns = it.addedCompositePKs[addedPkName];
          addedColumns = SQLiteSquasher.unsquashPK(addedPkColumns);
        }
        let deletedColumns = [];
        for (const deletedPkName of Object.keys(it.deletedCompositePKs)) {
          const deletedPkColumns = it.deletedCompositePKs[deletedPkName];
          deletedColumns = SQLiteSquasher.unsquashPK(deletedPkColumns);
        }
        const doPerformDeleteAndCreate = JSON.stringify(addedColumns) !== JSON.stringify(deletedColumns);
        let addedCompositePKs = [];
        let deletedCompositePKs = [];
        let alteredCompositePKs = [];
        if (doPerformDeleteAndCreate) {
          addedCompositePKs = prepareAddCompositePrimaryKeyPg(
            it.name,
            it.schema,
            it.addedCompositePKs,
            curFull
          );
          deletedCompositePKs = prepareDeleteCompositePrimaryKeyPg(
            it.name,
            it.schema,
            it.deletedCompositePKs,
            prevFull
          );
        }
        alteredCompositePKs = prepareAlterCompositePrimaryKeyPg(
          it.name,
          it.schema,
          it.alteredCompositePKs,
          prevFull,
          curFull
        );
        let addedUniqueConstraints = [];
        let deletedUniqueConstraints = [];
        let alteredUniqueConstraints = [];
        addedUniqueConstraints = prepareAddUniqueConstraintPg(
          it.name,
          it.schema,
          it.addedUniqueConstraints
        );
        deletedUniqueConstraints = prepareDeleteUniqueConstraintPg(
          it.name,
          it.schema,
          it.deletedUniqueConstraints
        );
        if (it.alteredUniqueConstraints) {
          const added = {};
          const deleted = {};
          for (const k of Object.keys(it.alteredUniqueConstraints)) {
            added[k] = it.alteredUniqueConstraints[k].__new;
            deleted[k] = it.alteredUniqueConstraints[k].__old;
          }
          addedUniqueConstraints.push(
            ...prepareAddUniqueConstraintPg(it.name, it.schema, added)
          );
          deletedUniqueConstraints.push(
            ...prepareDeleteUniqueConstraintPg(it.name, it.schema, deleted)
          );
        }
        jsonAddedCompositePKs.push(...addedCompositePKs);
        jsonDeletedCompositePKs.push(...deletedCompositePKs);
        jsonAlteredCompositePKs.push(...alteredCompositePKs);
        jsonAddedUniqueConstraints.push(...addedUniqueConstraints);
        jsonDeletedUniqueConstraints.push(...deletedUniqueConstraints);
        jsonAlteredUniqueConstraints.push(...alteredUniqueConstraints);
      }
      const rColumns = jsonRenameColumnsStatements.map((it) => {
        const tableName = it.tableName;
        const schema4 = it.schema;
        return {
          from: { schema: schema4, table: tableName, column: it.oldColumnName },
          to: { schema: schema4, table: tableName, column: it.newColumnName }
        };
      });
      const jsonTableAlternations = alteredTables.map((it) => {
        return preparePgAlterColumns(it.name, it.schema, it.altered, json2);
      }).flat();
      const jsonCreateIndexesFoAlteredTables = alteredTables.map((it) => {
        return prepareCreateIndexesJson(
          it.name,
          it.schema,
          it.addedIndexes || {}
        );
      }).flat();
      const jsonDropIndexesForAllAlteredTables = alteredTables.map((it) => {
        return prepareDropIndexesJson(
          it.name,
          it.schema,
          it.deletedIndexes || {}
        );
      }).flat();
      alteredTables.forEach((it) => {
        const droppedIndexes = Object.keys(it.alteredIndexes).reduce(
          (current, item) => {
            current[item] = it.alteredIndexes[item].__old;
            return current;
          },
          {}
        );
        const createdIndexes = Object.keys(it.alteredIndexes).reduce(
          (current, item) => {
            current[item] = it.alteredIndexes[item].__new;
            return current;
          },
          {}
        );
        jsonCreateIndexesFoAlteredTables.push(
          ...prepareCreateIndexesJson(it.name, it.schema, createdIndexes || {})
        );
        jsonDropIndexesForAllAlteredTables.push(
          ...prepareDropIndexesJson(it.name, it.schema, droppedIndexes || {})
        );
      });
      const jsonCreateReferencesForCreatedTables = createdTables.map((it) => {
        return prepareCreateReferencesJson(it.name, it.schema, it.foreignKeys);
      }).flat();
      const jsonReferencesForAlteredTables = alteredTables.map((it) => {
        const forAdded = prepareCreateReferencesJson(
          it.name,
          it.schema,
          it.addedForeignKeys
        );
        const forAltered = prepareDropReferencesJson(
          it.name,
          it.schema,
          it.deletedForeignKeys
        );
        const alteredFKs = prepareAlterReferencesJson(
          it.name,
          it.schema,
          it.alteredForeignKeys
        );
        return [...forAdded, ...forAltered, ...alteredFKs];
      }).flat();
      const jsonCreatedReferencesForAlteredTables = jsonReferencesForAlteredTables.filter((t) => t.type === "create_reference");
      const jsonDroppedReferencesForAlteredTables = jsonReferencesForAlteredTables.filter((t) => t.type === "delete_reference");
      const createEnums = createdEnums.map((it) => {
        return prepareCreateEnumJson(it.name, it.schema, it.values);
      }) ?? [];
      const dropEnums = deletedEnums.map((it) => {
        return prepareDropEnumJson(it.name, it.schema);
      });
      const moveEnums = movedEnums.map((it) => {
        return prepareMoveEnumJson(it.name, it.schemaFrom, it.schemaTo);
      });
      const renameEnums = renamedEnums.map((it) => {
        return prepareRenameEnumJson(it.from.name, it.to.name, it.to.schema);
      });
      const jsonAlterEnumsWithAddedValues = typedResult.alteredEnums.map((it) => {
        return prepareAddValuesToEnumJson(it.name, it.schema, it.addedValues);
      }).flat() ?? [];
      const createSchemas = prepareCreateSchemasJson(
        createdSchemas.map((it) => it.name)
      );
      const renameSchemas = prepareRenameSchemasJson(
        renamedSchemas.map((it) => ({ from: it.from.name, to: it.to.name }))
      );
      const dropSchemas = prepareDeleteSchemasJson(
        deletedSchemas.map((it) => it.name)
      );
      const createTables = createdTables.map((it) => {
        return preparePgCreateTableJson(it, curFull);
      });
      jsonStatements.push(...createSchemas);
      jsonStatements.push(...renameSchemas);
      jsonStatements.push(...createEnums);
      jsonStatements.push(...moveEnums);
      jsonStatements.push(...renameEnums);
      jsonStatements.push(...jsonAlterEnumsWithAddedValues);
      jsonStatements.push(...createTables);
      jsonStatements.push(...jsonDropTables);
      jsonStatements.push(...jsonSetTableSchemas);
      jsonStatements.push(...jsonRenameTables);
      jsonStatements.push(...jsonRenameColumnsStatements);
      jsonStatements.push(...jsonDeletedUniqueConstraints);
      jsonStatements.push(...jsonDroppedReferencesForAlteredTables);
      jsonStatements.push(...jsonDropIndexesForAllAlteredTables);
      jsonStatements.push(...jsonDeletedCompositePKs);
      jsonStatements.push(...jsonTableAlternations);
      jsonStatements.push(...jsonAddedCompositePKs);
      jsonStatements.push(...jsonAddColumnsStatemets);
      jsonStatements.push(...jsonCreateReferencesForCreatedTables);
      jsonStatements.push(...jsonCreateIndexesForCreatedTables);
      jsonStatements.push(...jsonCreatedReferencesForAlteredTables);
      jsonStatements.push(...jsonCreateIndexesFoAlteredTables);
      jsonStatements.push(...jsonDropColumnsStatemets);
      jsonStatements.push(...jsonAlteredCompositePKs);
      jsonStatements.push(...jsonAddedUniqueConstraints);
      jsonStatements.push(...jsonAlteredUniqueConstraints);
      jsonStatements.push(...dropEnums);
      jsonStatements.push(...dropSchemas);
      const sqlStatements = fromJson(jsonStatements, "postgresql");
      const uniqueSqlStatements = [];
      sqlStatements.forEach((ss) => {
        if (!uniqueSqlStatements.includes(ss)) {
          uniqueSqlStatements.push(ss);
        }
      });
      const rSchemas = renamedSchemas.map((it) => ({
        from: it.from.name,
        to: it.to.name
      }));
      const rTables = renamedTables.map((it) => {
        return { from: it.from, to: it.to };
      });
      const _meta = prepareMigrationMeta(rSchemas, rTables, rColumns);
      return {
        statements: jsonStatements,
        sqlStatements: uniqueSqlStatements,
        _meta
      };
    };
    applyMysqlSnapshotsDiff = async (json1, json2, tablesResolver2, columnsResolver2, prevFull, curFull) => {
      for (const tableName in json1.tables) {
        const table4 = json1.tables[tableName];
        for (const indexName2 in table4.indexes) {
          const index4 = MySqlSquasher.unsquashIdx(table4.indexes[indexName2]);
          if (index4.isUnique) {
            table4.uniqueConstraints[indexName2] = MySqlSquasher.squashUnique({
              name: index4.name,
              columns: index4.columns
            });
            delete json1.tables[tableName].indexes[index4.name];
          }
        }
      }
      for (const tableName in json2.tables) {
        const table4 = json2.tables[tableName];
        for (const indexName2 in table4.indexes) {
          const index4 = MySqlSquasher.unsquashIdx(table4.indexes[indexName2]);
          if (index4.isUnique) {
            table4.uniqueConstraints[indexName2] = MySqlSquasher.squashUnique({
              name: index4.name,
              columns: index4.columns
            });
            delete json2.tables[tableName].indexes[index4.name];
          }
        }
      }
      const tablesDiff = diffSchemasOrTables(json1.tables, json2.tables);
      const {
        created: createdTables,
        deleted: deletedTables,
        renamed: renamedTables
        // renamed or moved
      } = await tablesResolver2({
        created: tablesDiff.added,
        deleted: tablesDiff.deleted
      });
      const tablesPatchedSnap1 = copy(json1);
      tablesPatchedSnap1.tables = mapEntries(tablesPatchedSnap1.tables, (_2, it) => {
        const { name: name2 } = nameChangeFor(it, renamedTables);
        it.name = name2;
        return [name2, it];
      });
      const res = diffColumns(tablesPatchedSnap1.tables, json2.tables);
      const columnRenames = [];
      const columnCreates = [];
      const columnDeletes = [];
      for (let entry of Object.values(res)) {
        const { renamed, created, deleted } = await columnsResolver2({
          tableName: entry.name,
          schema: entry.schema,
          deleted: entry.columns.deleted,
          created: entry.columns.added
        });
        if (created.length > 0) {
          columnCreates.push({
            table: entry.name,
            columns: created
          });
        }
        if (deleted.length > 0) {
          columnDeletes.push({
            table: entry.name,
            columns: deleted
          });
        }
        if (renamed.length > 0) {
          columnRenames.push({
            table: entry.name,
            renames: renamed
          });
        }
      }
      const columnRenamesDict = columnRenames.reduce(
        (acc, it) => {
          acc[it.table] = it.renames;
          return acc;
        },
        {}
      );
      const columnsPatchedSnap1 = copy(tablesPatchedSnap1);
      columnsPatchedSnap1.tables = mapEntries(
        columnsPatchedSnap1.tables,
        (tableKey2, tableValue) => {
          const patchedColumns = mapKeys(
            tableValue.columns,
            (columnKey, column4) => {
              const rens = columnRenamesDict[tableValue.name] || [];
              const newName = columnChangeFor(columnKey, rens);
              column4.name = newName;
              return newName;
            }
          );
          tableValue.columns = patchedColumns;
          return [tableKey2, tableValue];
        }
      );
      const diffResult = applyJsonDiff(columnsPatchedSnap1, json2);
      const typedResult = diffResultSchemeMysql.parse(diffResult);
      const jsonStatements = [];
      const jsonCreateIndexesForCreatedTables = createdTables.map((it) => {
        return prepareCreateIndexesJson(it.name, it.schema, it.indexes);
      }).flat();
      const jsonDropTables = deletedTables.map((it) => {
        return prepareDropTableJson(it);
      });
      const jsonRenameTables = renamedTables.map((it) => {
        return prepareRenameTableJson(it.from, it.to);
      });
      const alteredTables = typedResult.alteredTablesWithColumns;
      const jsonAddedCompositePKs = [];
      const jsonDeletedCompositePKs = [];
      const jsonAlteredCompositePKs = [];
      const jsonAddedUniqueConstraints = [];
      const jsonDeletedUniqueConstraints = [];
      const jsonAlteredUniqueConstraints = [];
      const jsonRenameColumnsStatements = columnRenames.map((it) => prepareRenameColumns(it.table, "", it.renames)).flat();
      const jsonAddColumnsStatemets = columnCreates.map((it) => _prepareAddColumns(it.table, "", it.columns)).flat();
      const jsonDropColumnsStatemets = columnDeletes.map((it) => _prepareDropColumns(it.table, "", it.columns)).flat();
      alteredTables.forEach((it) => {
        let addedColumns = [];
        for (const addedPkName of Object.keys(it.addedCompositePKs)) {
          const addedPkColumns = it.addedCompositePKs[addedPkName];
          addedColumns = MySqlSquasher.unsquashPK(addedPkColumns).columns;
        }
        let deletedColumns = [];
        for (const deletedPkName of Object.keys(it.deletedCompositePKs)) {
          const deletedPkColumns = it.deletedCompositePKs[deletedPkName];
          deletedColumns = MySqlSquasher.unsquashPK(deletedPkColumns).columns;
        }
        const doPerformDeleteAndCreate = JSON.stringify(addedColumns) !== JSON.stringify(deletedColumns);
        let addedCompositePKs = [];
        let deletedCompositePKs = [];
        let alteredCompositePKs = [];
        addedCompositePKs = prepareAddCompositePrimaryKeyMySql(
          it.name,
          it.addedCompositePKs,
          prevFull,
          curFull
        );
        deletedCompositePKs = prepareDeleteCompositePrimaryKeyMySql(
          it.name,
          it.deletedCompositePKs,
          prevFull
        );
        alteredCompositePKs = prepareAlterCompositePrimaryKeyMySql(
          it.name,
          it.alteredCompositePKs,
          prevFull,
          curFull
        );
        let addedUniqueConstraints = [];
        let deletedUniqueConstraints = [];
        let alteredUniqueConstraints = [];
        addedUniqueConstraints = prepareAddUniqueConstraintPg(
          it.name,
          it.schema,
          it.addedUniqueConstraints
        );
        deletedUniqueConstraints = prepareDeleteUniqueConstraintPg(
          it.name,
          it.schema,
          it.deletedUniqueConstraints
        );
        if (it.alteredUniqueConstraints) {
          const added = {};
          const deleted = {};
          for (const k of Object.keys(it.alteredUniqueConstraints)) {
            added[k] = it.alteredUniqueConstraints[k].__new;
            deleted[k] = it.alteredUniqueConstraints[k].__old;
          }
          addedUniqueConstraints.push(
            ...prepareAddUniqueConstraintPg(it.name, it.schema, added)
          );
          deletedUniqueConstraints.push(
            ...prepareDeleteUniqueConstraintPg(it.name, it.schema, deleted)
          );
        }
        jsonAddedCompositePKs.push(...addedCompositePKs);
        jsonDeletedCompositePKs.push(...deletedCompositePKs);
        jsonAlteredCompositePKs.push(...alteredCompositePKs);
        jsonAddedUniqueConstraints.push(...addedUniqueConstraints);
        jsonDeletedUniqueConstraints.push(...deletedUniqueConstraints);
        jsonAlteredUniqueConstraints.push(...alteredUniqueConstraints);
      });
      const rColumns = jsonRenameColumnsStatements.map((it) => {
        const tableName = it.tableName;
        const schema4 = it.schema;
        return {
          from: { schema: schema4, table: tableName, column: it.oldColumnName },
          to: { schema: schema4, table: tableName, column: it.newColumnName }
        };
      });
      const jsonTableAlternations = alteredTables.map((it) => {
        return prepareAlterColumnsMysql(it.name, it.schema, it.altered, json2);
      }).flat();
      const jsonCreateIndexesForAllAlteredTables = alteredTables.map((it) => {
        return prepareCreateIndexesJson(
          it.name,
          it.schema,
          it.addedIndexes || {}
        );
      }).flat();
      const jsonDropIndexesForAllAlteredTables = alteredTables.map((it) => {
        return prepareDropIndexesJson(
          it.name,
          it.schema,
          it.deletedIndexes || {}
        );
      }).flat();
      alteredTables.forEach((it) => {
        const droppedIndexes = Object.keys(it.alteredIndexes).reduce(
          (current, item) => {
            current[item] = it.alteredIndexes[item].__old;
            return current;
          },
          {}
        );
        const createdIndexes = Object.keys(it.alteredIndexes).reduce(
          (current, item) => {
            current[item] = it.alteredIndexes[item].__new;
            return current;
          },
          {}
        );
        jsonCreateIndexesForAllAlteredTables.push(
          ...prepareCreateIndexesJson(it.name, it.schema, createdIndexes || {})
        );
        jsonDropIndexesForAllAlteredTables.push(
          ...prepareDropIndexesJson(it.name, it.schema, droppedIndexes || {})
        );
      });
      const jsonCreateReferencesForCreatedTables = createdTables.map((it) => {
        return prepareCreateReferencesJson(it.name, it.schema, it.foreignKeys);
      }).flat();
      const jsonReferencesForAllAlteredTables = alteredTables.map((it) => {
        const forAdded = prepareCreateReferencesJson(
          it.name,
          it.schema,
          it.addedForeignKeys
        );
        const forAltered = prepareDropReferencesJson(
          it.name,
          it.schema,
          it.deletedForeignKeys
        );
        const alteredFKs = prepareAlterReferencesJson(
          it.name,
          it.schema,
          it.alteredForeignKeys
        );
        return [...forAdded, ...forAltered, ...alteredFKs];
      }).flat();
      const jsonCreatedReferencesForAlteredTables = jsonReferencesForAllAlteredTables.filter(
        (t) => t.type === "create_reference"
      );
      const jsonDroppedReferencesForAlteredTables = jsonReferencesForAllAlteredTables.filter(
        (t) => t.type === "delete_reference"
      );
      const jsonMySqlCreateTables = createdTables.map((it) => {
        return prepareMySqlCreateTableJson(it, curFull);
      });
      jsonStatements.push(...jsonMySqlCreateTables);
      jsonStatements.push(...jsonDropTables);
      jsonStatements.push(...jsonRenameTables);
      jsonStatements.push(...jsonRenameColumnsStatements);
      jsonStatements.push(...jsonDeletedUniqueConstraints);
      jsonStatements.push(...jsonDroppedReferencesForAlteredTables);
      jsonStatements.push(...jsonDropIndexesForAllAlteredTables);
      jsonStatements.push(...jsonDeletedCompositePKs);
      jsonStatements.push(...jsonTableAlternations);
      jsonStatements.push(...jsonAddedCompositePKs);
      jsonStatements.push(...jsonAddedUniqueConstraints);
      jsonStatements.push(...jsonDeletedUniqueConstraints);
      jsonStatements.push(...jsonAddColumnsStatemets);
      jsonStatements.push(...jsonCreateReferencesForCreatedTables);
      jsonStatements.push(...jsonCreateIndexesForCreatedTables);
      jsonStatements.push(...jsonCreatedReferencesForAlteredTables);
      jsonStatements.push(...jsonCreateIndexesForAllAlteredTables);
      jsonStatements.push(...jsonDropColumnsStatemets);
      jsonStatements.push(...jsonAlteredCompositePKs);
      jsonStatements.push(...jsonAddedUniqueConstraints);
      jsonStatements.push(...jsonAlteredUniqueConstraints);
      const sqlStatements = fromJson(jsonStatements, "mysql");
      const uniqueSqlStatements = [];
      sqlStatements.forEach((ss) => {
        if (!uniqueSqlStatements.includes(ss)) {
          uniqueSqlStatements.push(ss);
        }
      });
      const rTables = renamedTables.map((it) => {
        return { from: it.from, to: it.to };
      });
      const _meta = prepareMigrationMeta([], rTables, rColumns);
      return {
        statements: jsonStatements,
        sqlStatements: uniqueSqlStatements,
        _meta
      };
    };
    applySqliteSnapshotsDiff = async (json1, json2, tablesResolver2, columnsResolver2) => {
      const tablesDiff = diffSchemasOrTables(json1.tables, json2.tables);
      const {
        created: createdTables,
        deleted: deletedTables,
        renamed: renamedTables
      } = await tablesResolver2({
        created: tablesDiff.added,
        deleted: tablesDiff.deleted
      });
      const tablesPatchedSnap1 = copy(json1);
      tablesPatchedSnap1.tables = mapEntries(tablesPatchedSnap1.tables, (_2, it) => {
        const { name: name2 } = nameChangeFor(it, renamedTables);
        it.name = name2;
        return [name2, it];
      });
      const res = diffColumns(tablesPatchedSnap1.tables, json2.tables);
      const columnRenames = [];
      const columnCreates = [];
      const columnDeletes = [];
      for (let entry of Object.values(res)) {
        const { renamed, created, deleted } = await columnsResolver2({
          tableName: entry.name,
          schema: entry.schema,
          deleted: entry.columns.deleted,
          created: entry.columns.added
        });
        if (created.length > 0) {
          columnCreates.push({
            table: entry.name,
            columns: created
          });
        }
        if (deleted.length > 0) {
          columnDeletes.push({
            table: entry.name,
            columns: deleted
          });
        }
        if (renamed.length > 0) {
          columnRenames.push({
            table: entry.name,
            renames: renamed
          });
        }
      }
      const columnRenamesDict = columnRenames.reduce(
        (acc, it) => {
          acc[it.table] = it.renames;
          return acc;
        },
        {}
      );
      const columnsPatchedSnap1 = copy(tablesPatchedSnap1);
      columnsPatchedSnap1.tables = mapEntries(
        columnsPatchedSnap1.tables,
        (tableKey2, tableValue) => {
          const patchedColumns = mapKeys(
            tableValue.columns,
            (columnKey, column4) => {
              const rens = columnRenamesDict[tableValue.name] || [];
              const newName = columnChangeFor(columnKey, rens);
              column4.name = newName;
              return newName;
            }
          );
          tableValue.columns = patchedColumns;
          return [tableKey2, tableValue];
        }
      );
      const diffResult = applyJsonDiff(columnsPatchedSnap1, json2);
      const typedResult = diffResultSchemeSQLite.parse(diffResult);
      const tablesMap = {};
      typedResult.alteredTablesWithColumns.forEach((obj) => {
        tablesMap[obj.name] = obj;
      });
      const jsonCreateTables = createdTables.map((it) => {
        return prepareSQLiteCreateTable(it);
      });
      const jsonCreateIndexesForCreatedTables = createdTables.map((it) => {
        return prepareCreateIndexesJson(it.name, it.schema, it.indexes);
      }).flat();
      const jsonDropTables = deletedTables.map((it) => {
        return prepareDropTableJson(it);
      });
      const jsonRenameTables = renamedTables.map((it) => {
        return prepareRenameTableJson(it.from, it.to);
      });
      const jsonRenameColumnsStatements = columnRenames.map((it) => prepareRenameColumns(it.table, "", it.renames)).flat();
      const jsonDropColumnsStatemets = columnDeletes.map((it) => _prepareDropColumns(it.table, "", it.columns)).flat();
      const jsonAddColumnsStatemets = columnCreates.map(
        (it) => _prepareSqliteAddColumns(
          it.table,
          it.columns,
          tablesMap[it.table] && tablesMap[it.table].addedForeignKeys ? Object.values(tablesMap[it.table].addedForeignKeys) : []
        )
      ).flat();
      const allAltered = typedResult.alteredTablesWithColumns;
      const jsonAddedCompositePKs = [];
      const jsonDeletedCompositePKs = [];
      const jsonAlteredCompositePKs = [];
      const jsonAddedUniqueConstraints = [];
      const jsonDeletedUniqueConstraints = [];
      const jsonAlteredUniqueConstraints = [];
      allAltered.forEach((it) => {
        let addedColumns = [];
        for (const addedPkName of Object.keys(it.addedCompositePKs)) {
          const addedPkColumns = it.addedCompositePKs[addedPkName];
          addedColumns = SQLiteSquasher.unsquashPK(addedPkColumns);
        }
        let deletedColumns = [];
        for (const deletedPkName of Object.keys(it.deletedCompositePKs)) {
          const deletedPkColumns = it.deletedCompositePKs[deletedPkName];
          deletedColumns = SQLiteSquasher.unsquashPK(deletedPkColumns);
        }
        const doPerformDeleteAndCreate = JSON.stringify(addedColumns) !== JSON.stringify(deletedColumns);
        let addedCompositePKs = [];
        let deletedCompositePKs = [];
        let alteredCompositePKs = [];
        if (doPerformDeleteAndCreate) {
          addedCompositePKs = prepareAddCompositePrimaryKeySqlite(
            it.name,
            it.addedCompositePKs
          );
          deletedCompositePKs = prepareDeleteCompositePrimaryKeySqlite(
            it.name,
            it.deletedCompositePKs
          );
        }
        alteredCompositePKs = prepareAlterCompositePrimaryKeySqlite(
          it.name,
          it.alteredCompositePKs
        );
        let addedUniqueConstraints = [];
        let deletedUniqueConstraints = [];
        let alteredUniqueConstraints = [];
        addedUniqueConstraints = prepareAddUniqueConstraintPg(
          it.name,
          it.schema,
          it.addedUniqueConstraints
        );
        deletedUniqueConstraints = prepareDeleteUniqueConstraintPg(
          it.name,
          it.schema,
          it.deletedUniqueConstraints
        );
        if (it.alteredUniqueConstraints) {
          const added = {};
          const deleted = {};
          for (const k of Object.keys(it.alteredUniqueConstraints)) {
            added[k] = it.alteredUniqueConstraints[k].__new;
            deleted[k] = it.alteredUniqueConstraints[k].__old;
          }
          addedUniqueConstraints.push(
            ...prepareAddUniqueConstraintPg(it.name, it.schema, added)
          );
          deletedUniqueConstraints.push(
            ...prepareDeleteUniqueConstraintPg(it.name, it.schema, deleted)
          );
        }
        jsonAddedCompositePKs.push(...addedCompositePKs);
        jsonDeletedCompositePKs.push(...deletedCompositePKs);
        jsonAlteredCompositePKs.push(...alteredCompositePKs);
        jsonAddedUniqueConstraints.push(...addedUniqueConstraints);
        jsonDeletedUniqueConstraints.push(...deletedUniqueConstraints);
        jsonAlteredUniqueConstraints.push(...alteredUniqueConstraints);
      });
      const rColumns = jsonRenameColumnsStatements.map((it) => {
        const tableName = it.tableName;
        const schema4 = it.schema;
        return {
          from: { schema: schema4, table: tableName, column: it.oldColumnName },
          to: { schema: schema4, table: tableName, column: it.newColumnName }
        };
      });
      const jsonTableAlternations = allAltered.map((it) => {
        return prepareSqliteAlterColumns(it.name, it.schema, it.altered, json2);
      }).flat();
      const jsonCreateIndexesForAllAlteredTables = allAltered.map((it) => {
        return prepareCreateIndexesJson(
          it.name,
          it.schema,
          it.addedIndexes || {}
        );
      }).flat();
      const jsonDropIndexesForAllAlteredTables = allAltered.map((it) => {
        return prepareDropIndexesJson(
          it.name,
          it.schema,
          it.deletedIndexes || {}
        );
      }).flat();
      allAltered.forEach((it) => {
        const droppedIndexes = Object.keys(it.alteredIndexes).reduce(
          (current, item) => {
            current[item] = it.alteredIndexes[item].__old;
            return current;
          },
          {}
        );
        const createdIndexes = Object.keys(it.alteredIndexes).reduce(
          (current, item) => {
            current[item] = it.alteredIndexes[item].__new;
            return current;
          },
          {}
        );
        jsonCreateIndexesForAllAlteredTables.push(
          ...prepareCreateIndexesJson(it.name, it.schema, createdIndexes || {})
        );
        jsonDropIndexesForAllAlteredTables.push(
          ...prepareDropIndexesJson(it.name, it.schema, droppedIndexes || {})
        );
      });
      const jsonReferencesForAllAlteredTables = allAltered.map((it) => {
        const forAdded = prepareCreateReferencesJson(
          it.name,
          it.schema,
          it.addedForeignKeys
        );
        const forAltered = prepareDropReferencesJson(
          it.name,
          it.schema,
          it.deletedForeignKeys
        );
        const alteredFKs = prepareAlterReferencesJson(
          it.name,
          it.schema,
          it.alteredForeignKeys
        );
        return [...forAdded, ...forAltered, ...alteredFKs];
      }).flat();
      const jsonCreatedReferencesForAlteredTables = jsonReferencesForAllAlteredTables.filter(
        (t) => t.type === "create_reference"
      );
      const jsonDroppedReferencesForAlteredTables = jsonReferencesForAllAlteredTables.filter(
        (t) => t.type === "delete_reference"
      );
      const jsonStatements = [];
      jsonStatements.push(...jsonCreateTables);
      jsonStatements.push(...jsonDropTables);
      jsonStatements.push(...jsonRenameTables);
      jsonStatements.push(...jsonRenameColumnsStatements);
      jsonStatements.push(...jsonDroppedReferencesForAlteredTables);
      jsonStatements.push(...jsonDropIndexesForAllAlteredTables);
      jsonStatements.push(...jsonDeletedCompositePKs);
      jsonStatements.push(...jsonTableAlternations);
      jsonStatements.push(...jsonAddedCompositePKs);
      jsonStatements.push(...jsonAddColumnsStatemets);
      jsonStatements.push(...jsonCreateIndexesForCreatedTables);
      jsonStatements.push(...jsonCreateIndexesForAllAlteredTables);
      jsonStatements.push(...jsonCreatedReferencesForAlteredTables);
      jsonStatements.push(...jsonDropColumnsStatemets);
      jsonStatements.push(...jsonAlteredCompositePKs);
      jsonStatements.push(...jsonAlteredUniqueConstraints);
      const sqlStatements = fromJson(jsonStatements, "sqlite");
      const uniqueSqlStatements = [];
      sqlStatements.forEach((ss) => {
        if (!uniqueSqlStatements.includes(ss)) {
          uniqueSqlStatements.push(ss);
        }
      });
      const rTables = renamedTables.map((it) => {
        return { from: it.from, to: it.to };
      });
      const _meta = prepareMigrationMeta([], rTables, rColumns);
      return {
        statements: jsonStatements,
        sqlStatements: uniqueSqlStatements,
        _meta
      };
    };
  }
});

// src/utils/words.ts
var init_words = __esm({
  "src/utils/words.ts"() {
    "use strict";
  }
});

// src/cli/commands/migrate.ts
import { render as render3 } from "hanji";
var schemasResolver, tablesResolver, enumsResolver, columnsResolver, promptColumnsConflicts, promptNamedWithSchemasConflict, promptSchemasConflict, BREAKPOINT;
var init_migrate = __esm({
  "src/cli/commands/migrate.ts"() {
    "use strict";
    init_migrationPreparator();
    init_snapshotsDiffer();
    init_views();
    init_source();
    init_pgSchema();
    init_sqliteSchema();
    init_mysqlSchema();
    init_utils4();
    init_words();
    init_outputs();
    schemasResolver = async (input) => {
      try {
        const { created, deleted, renamed } = await promptSchemasConflict(
          input.created,
          input.deleted
        );
        return { created, deleted, renamed };
      } catch (e) {
        console.error(e);
        throw e;
      }
    };
    tablesResolver = async (input) => {
      try {
        const { created, deleted, moved, renamed } = await promptNamedWithSchemasConflict(
          input.created,
          input.deleted,
          "table"
        );
        return {
          created,
          deleted,
          moved,
          renamed
        };
      } catch (e) {
        console.error(e);
        throw e;
      }
    };
    enumsResolver = async (input) => {
      try {
        const { created, deleted, moved, renamed } = await promptNamedWithSchemasConflict(
          input.created,
          input.deleted,
          "enum"
        );
        return {
          created,
          deleted,
          moved,
          renamed
        };
      } catch (e) {
        console.error(e);
        throw e;
      }
    };
    columnsResolver = async (input) => {
      const result = await promptColumnsConflicts(
        input.tableName,
        input.created,
        input.deleted
      );
      return {
        tableName: input.tableName,
        schema: input.schema,
        created: result.created,
        deleted: result.deleted,
        renamed: result.renamed
      };
    };
    promptColumnsConflicts = async (tableName, newColumns, missingColumns) => {
      if (newColumns.length === 0 || missingColumns.length === 0) {
        return { created: newColumns, renamed: [], deleted: missingColumns };
      }
      const result = { created: [], renamed: [], deleted: [] };
      let index4 = 0;
      let leftMissing = [...missingColumns];
      do {
        const created = newColumns[index4];
        const renames = leftMissing.map((it) => {
          return { from: it, to: created };
        });
        const promptData = [created, ...renames];
        const { status, data } = await render3(
          new ResolveColumnSelect(tableName, created, promptData)
        );
        if (status === "aborted") {
          console.error("ERROR");
          process.exit(1);
        }
        if (isRenamePromptItem(data)) {
          console.log(
            `${source_default.yellow("~")} ${data.from.name} \u203A ${data.to.name} ${source_default.gray(
              "column will be renamed"
            )}`
          );
          result.renamed.push(data);
          delete leftMissing[leftMissing.indexOf(data.from)];
          leftMissing = leftMissing.filter(Boolean);
        } else {
          console.log(
            `${source_default.green("+")} ${data.name} ${source_default.gray(
              "column will be created"
            )}`
          );
          result.created.push(created);
        }
        index4 += 1;
      } while (index4 < newColumns.length);
      console.log(
        source_default.gray(`--- all columns conflicts in ${tableName} table resolved ---
`)
      );
      result.deleted.push(...leftMissing);
      return result;
    };
    promptNamedWithSchemasConflict = async (newItems, missingItems, entity) => {
      if (missingItems.length === 0 || newItems.length === 0) {
        return {
          created: newItems,
          renamed: [],
          moved: [],
          deleted: missingItems
        };
      }
      const result = { created: [], renamed: [], moved: [], deleted: [] };
      let index4 = 0;
      let leftMissing = [...missingItems];
      do {
        const created = newItems[index4];
        const renames = leftMissing.map((it) => {
          return { from: it, to: created };
        });
        const promptData = [created, ...renames];
        const { status, data } = await render3(
          new ResolveSelect(created, promptData, entity)
        );
        if (status === "aborted") {
          console.error("ERROR");
          process.exit(1);
        }
        if (isRenamePromptItem(data)) {
          const schemaFromPrefix = !data.from.schema || data.from.schema === "public" ? "" : `${data.from.schema}.`;
          const schemaToPrefix = !data.to.schema || data.to.schema === "public" ? "" : `${data.to.schema}.`;
          console.log(
            `${source_default.yellow("~")} ${schemaFromPrefix}${data.from.name} \u203A ${schemaToPrefix}${data.to.name} ${source_default.gray(
              `${entity} will be renamed/moved`
            )}`
          );
          if (data.from.name !== data.to.name) {
            result.renamed.push(data);
          }
          if (data.from.schema !== data.to.schema) {
            result.moved.push({
              name: data.from.name,
              schemaFrom: data.from.schema || "public",
              schemaTo: data.to.schema || "public"
            });
          }
          delete leftMissing[leftMissing.indexOf(data.from)];
          leftMissing = leftMissing.filter(Boolean);
        } else {
          console.log(
            `${source_default.green("+")} ${data.name} ${source_default.gray(
              `${entity} will be created`
            )}`
          );
          result.created.push(created);
        }
        index4 += 1;
      } while (index4 < newItems.length);
      console.log(source_default.gray(`--- all ${entity} conflicts resolved ---
`));
      result.deleted.push(...leftMissing);
      return result;
    };
    promptSchemasConflict = async (newSchemas, missingSchemas) => {
      if (missingSchemas.length === 0 || newSchemas.length === 0) {
        return { created: newSchemas, renamed: [], deleted: missingSchemas };
      }
      const result = { created: [], renamed: [], deleted: [] };
      let index4 = 0;
      let leftMissing = [...missingSchemas];
      do {
        const created = newSchemas[index4];
        const renames = leftMissing.map((it) => {
          return { from: it, to: created };
        });
        const promptData = [created, ...renames];
        const { status, data } = await render3(
          new ResolveSchemasSelect(created, promptData)
        );
        if (status === "aborted") {
          console.error("ERROR");
          process.exit(1);
        }
        if (isRenamePromptItem(data)) {
          console.log(
            `${source_default.yellow("~")} ${data.from.name} \u203A ${data.to.name} ${source_default.gray(
              "schema will be renamed"
            )}`
          );
          result.renamed.push(data);
          delete leftMissing[leftMissing.indexOf(data.from)];
          leftMissing = leftMissing.filter(Boolean);
        } else {
          console.log(
            `${source_default.green("+")} ${data.name} ${source_default.gray(
              "schema will be created"
            )}`
          );
          result.created.push(created);
        }
        index4 += 1;
      } while (index4 < newSchemas.length);
      console.log(source_default.gray("--- all schemas conflicts resolved ---\n"));
      result.deleted.push(...leftMissing);
      return result;
    };
    BREAKPOINT = "--> statement-breakpoint\n";
  }
});

// src/sqlgenerator.ts
var pgNativeTypes, isPgNativeType, Convertor, PgCreateTableConvertor, MySqlCreateTableConvertor, SQLiteCreateTableConvertor, PgAlterTableAddUniqueConstraintConvertor, PgAlterTableDropUniqueConstraintConvertor, MySQLAlterTableAddUniqueConstraintConvertor, MySQLAlterTableDropUniqueConstraintConvertor, SQLiteAlterTableAddUniqueConstraintConvertor, SQLiteAlterTableDropUniqueConstraintConvertor, CreateTypeEnumConvertor, AlterTypeAddValueConvertor, PgDropTableConvertor, MySQLDropTableConvertor, SQLiteDropTableConvertor, PgRenameTableConvertor, SqliteRenameTableConvertor, MySqlRenameTableConvertor, PgAlterTableRenameColumnConvertor, MySqlAlterTableRenameColumnConvertor, SQLiteAlterTableRenameColumnConvertor, PgAlterTableDropColumnConvertor, MySqlAlterTableDropColumnConvertor, SQLiteAlterTableDropColumnConvertor, PgAlterTableAddColumnConvertor, MySqlAlterTableAddColumnConvertor, SQLiteAlterTableAddColumnConvertor, PgAlterTableAlterColumnSetTypeConvertor, SQLiteAlterTableAlterColumnSetTypeConvertor, PgAlterTableAlterColumnSetDefaultConvertor, SqliteAlterTableAlterColumnSetDefaultConvertor, PgAlterTableAlterColumnDropDefaultConvertor, MySqlAlterTableAddPk, MySqlAlterTableDropPk, MySqlModifyColumn, SqliteAlterTableAlterColumnDropDefaultConvertor, PgAlterTableCreateCompositePrimaryKeyConvertor, PgAlterTableDeleteCompositePrimaryKeyConvertor, PgAlterTableAlterCompositePrimaryKeyConvertor, MySqlAlterTableCreateCompositePrimaryKeyConvertor, MySqlAlterTableDeleteCompositePrimaryKeyConvertor, MySqlAlterTableAlterCompositePrimaryKeyConvertor, SqliteAlterTableCreateCompositePrimaryKeyConvertor, SqliteAlterTableDeleteCompositePrimaryKeyConvertor, SqliteAlterTableAlterCompositePrimaryKeyConvertor, PgAlterTableAlterColumnSetPrimaryKeyConvertor, PgAlterTableAlterColumnDropPrimaryKeyConvertor, PgAlterTableAlterColumnSetNotNullConvertor, SqliteAlterTableAlterColumnSetNotNullConvertor, SqliteAlterTableAlterColumnSetAutoincrementConvertor, SqliteAlterTableAlterColumnDropAutoincrementConvertor, PgAlterTableAlterColumnDropNotNullConvertor, SqliteAlterTableAlterColumnDropNotNullConvertor, PgCreateForeignKeyConvertor, SqliteCreateForeignKeyConvertor, MySqlCreateForeignKeyConvertor, PgAlterForeignKeyConvertor, SqliteAlterForeignKeyConvertor, PgDeleteForeignKeyConvertor, SqliteDeleteForeignKeyConvertor, MySqlDeleteForeignKeyConvertor, CreatePgIndexConvertor, CreateMySqlIndexConvertor, CreateSqliteIndexConvertor, PgDropIndexConvertor, PgCreateSchemaConvertor, PgRenameSchemaConvertor, PgDropSchemaConvertor, PgAlterTableSetSchemaConvertor, PgAlterTableSetNewSchemaConvertor, PgAlterTableRemoveFromSchemaConvertor, SqliteDropIndexConvertor, MySqlDropIndexConvertor, convertors, fromJson;
var init_sqlgenerator = __esm({
  "src/sqlgenerator.ts"() {
    "use strict";
    init_migrate();
    init_mysqlSchema();
    init_pgSchema();
    init_sqliteSchema();
    pgNativeTypes = /* @__PURE__ */ new Set([
      "uuid",
      "smallint",
      "integer",
      "bigint",
      "boolean",
      "text",
      "varchar",
      "serial",
      "bigserial",
      "decimal",
      "numeric",
      "real",
      "json",
      "jsonb",
      "time",
      "time with time zone",
      "time without time zone",
      "time",
      "timestamp",
      "timestamp with time zone",
      "timestamp without time zone",
      "date",
      "interval",
      "bigint",
      "bigserial",
      "double precision",
      "interval year",
      "interval month",
      "interval day",
      "interval hour",
      "interval minute",
      "interval second",
      "interval year to month",
      "interval day to hour",
      "interval day to minute",
      "interval day to second",
      "interval hour to minute",
      "interval hour to second",
      "interval minute to second"
    ]);
    isPgNativeType = (it) => {
      if (pgNativeTypes.has(it))
        return true;
      const toCheck = it.replace(/ /g, "");
      return toCheck.startsWith("varchar(") || toCheck.startsWith("char(") || toCheck.startsWith("numeric(") || toCheck.startsWith("timestamp(") || toCheck.startsWith("intervalyear(") || toCheck.startsWith("intervalmonth(") || toCheck.startsWith("intervalday(") || toCheck.startsWith("intervalhour(") || toCheck.startsWith("intervalminute(") || toCheck.startsWith("intervalsecond(") || toCheck.startsWith("intervalyeartomonth(") || toCheck.startsWith("intervaldaytohour(") || toCheck.startsWith("intervaldaytominute(") || toCheck.startsWith("intervaldaytosecond(") || toCheck.startsWith("intervalhourtominute(") || toCheck.startsWith("intervalhourtosecond(") || toCheck.startsWith("intervalminutetosecond(") || /^(\w+)(\[\d*])+$/.test(it);
    };
    Convertor = class {
    };
    PgCreateTableConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "create_table" && dialect7 === "postgresql";
      }
      convert(st) {
        const { tableName, schema: schema4, columns, compositePKs, uniqueConstraints } = st;
        let statement = "";
        const name2 = schema4 ? `"${schema4}"."${tableName}"` : `"${tableName}"`;
        statement += `CREATE TABLE IF NOT EXISTS ${name2} (
`;
        for (let i = 0; i < columns.length; i++) {
          const column4 = columns[i];
          const primaryKeyStatement = column4.primaryKey ? " PRIMARY KEY" : "";
          const notNullStatement = column4.notNull ? " NOT NULL" : "";
          const defaultStatement = column4.default !== void 0 ? ` DEFAULT ${column4.default}` : "";
          const uniqueConstraint4 = column4.isUnique ? ` CONSTRAINT "${column4.uniqueName}" UNIQUE${column4.nullsNotDistinct ? " NULLS NOT DISTINCT" : ""}` : "";
          const schemaPrefix = column4.typeSchema && column4.typeSchema !== "public" ? `"${column4.typeSchema}".` : "";
          const type = isPgNativeType(column4.type) ? column4.type : `${schemaPrefix}"${column4.type}"`;
          statement += `	"${column4.name}" ${type}${primaryKeyStatement}${defaultStatement}${notNullStatement}${uniqueConstraint4}`;
          statement += i === columns.length - 1 ? "" : ",\n";
        }
        if (typeof compositePKs !== "undefined" && compositePKs.length > 0) {
          statement += ",\n";
          const compositePK4 = PgSquasher.unsquashPK(compositePKs[0]);
          statement += `	CONSTRAINT "${st.compositePkName}" PRIMARY KEY("${compositePK4.columns.join(`","`)}")`;
        }
        if (typeof uniqueConstraints !== "undefined" && uniqueConstraints.length > 0) {
          for (const uniqueConstraint4 of uniqueConstraints) {
            statement += ",\n";
            const unsquashedUnique = PgSquasher.unsquashUnique(uniqueConstraint4);
            statement += `	CONSTRAINT "${unsquashedUnique.name}" UNIQUE${unsquashedUnique.nullsNotDistinct ? " NULLS NOT DISTINCT" : ""}("${unsquashedUnique.columns.join(`","`)}")`;
          }
        }
        statement += `
);`;
        statement += `
`;
        return statement;
      }
    };
    MySqlCreateTableConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "create_table" && dialect7 === "mysql";
      }
      convert(st) {
        const { tableName, columns, schema: schema4, compositePKs, uniqueConstraints } = st;
        let statement = "";
        statement += `CREATE TABLE \`${tableName}\` (
`;
        for (let i = 0; i < columns.length; i++) {
          const column4 = columns[i];
          const primaryKeyStatement = column4.primaryKey ? " PRIMARY KEY" : "";
          const notNullStatement = column4.notNull ? " NOT NULL" : "";
          const defaultStatement = column4.default !== void 0 ? ` DEFAULT ${column4.default}` : "";
          const onUpdateStatement = column4.onUpdate ? ` ON UPDATE CURRENT_TIMESTAMP` : "";
          const autoincrementStatement = column4.autoincrement ? " AUTO_INCREMENT" : "";
          statement += `	\`${column4.name}\` ${column4.type}${autoincrementStatement}${primaryKeyStatement}${notNullStatement}${defaultStatement}${onUpdateStatement}`;
          statement += i === columns.length - 1 ? "" : ",\n";
        }
        if (typeof compositePKs !== "undefined" && compositePKs.length > 0) {
          statement += ",\n";
          const compositePK4 = MySqlSquasher.unsquashPK(compositePKs[0]);
          statement += `	CONSTRAINT \`${st.compositePkName}\` PRIMARY KEY(\`${compositePK4.columns.join(`\`,\``)}\`)`;
        }
        if (typeof uniqueConstraints !== "undefined" && uniqueConstraints.length > 0) {
          for (const uniqueConstraint4 of uniqueConstraints) {
            statement += ",\n";
            const unsquashedUnique = MySqlSquasher.unsquashUnique(uniqueConstraint4);
            statement += `	CONSTRAINT \`${unsquashedUnique.name}\` UNIQUE(\`${unsquashedUnique.columns.join(`\`,\``)}\`)`;
          }
        }
        statement += `
);`;
        statement += `
`;
        return statement;
      }
    };
    SQLiteCreateTableConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "sqlite_create_table" && dialect7 === "sqlite";
      }
      convert(st) {
        const {
          tableName,
          columns,
          referenceData,
          compositePKs,
          uniqueConstraints
        } = st;
        let statement = "";
        statement += `CREATE TABLE \`${tableName}\` (
`;
        for (let i = 0; i < columns.length; i++) {
          const column4 = columns[i];
          const primaryKeyStatement = column4.primaryKey ? " PRIMARY KEY" : "";
          const notNullStatement = column4.notNull ? " NOT NULL" : "";
          const defaultStatement = column4.default !== void 0 ? ` DEFAULT ${column4.default}` : "";
          const autoincrementStatement = column4.autoincrement ? " AUTOINCREMENT" : "";
          statement += "	";
          statement += `\`${column4.name}\` ${column4.type}${primaryKeyStatement}${autoincrementStatement}${defaultStatement}${notNullStatement}`;
          statement += i === columns.length - 1 ? "" : ",\n";
        }
        compositePKs.forEach((it) => {
          statement += ",\n	";
          statement += `PRIMARY KEY(${it.map((it2) => `\`${it2}\``).join(", ")})`;
        });
        for (let i = 0; i < referenceData.length; i++) {
          const referenceAsString = referenceData[i];
          const {
            name: name2,
            tableFrom,
            tableTo,
            columnsFrom,
            columnsTo,
            onDelete,
            onUpdate
          } = SQLiteSquasher.unsquashFK(referenceAsString);
          const onDeleteStatement = onDelete ? ` ON DELETE ${onDelete}` : "";
          const onUpdateStatement = onUpdate ? ` ON UPDATE ${onUpdate}` : "";
          const fromColumnsString = columnsFrom.map((it) => `\`${it}\``).join(",");
          const toColumnsString = columnsTo.map((it) => `\`${it}\``).join(",");
          statement += ",";
          statement += "\n	";
          statement += `FOREIGN KEY (${fromColumnsString}) REFERENCES \`${tableTo}\`(${toColumnsString})${onUpdateStatement}${onDeleteStatement}`;
        }
        if (typeof uniqueConstraints !== "undefined" && uniqueConstraints.length > 0) {
          for (const uniqueConstraint4 of uniqueConstraints) {
            statement += ",\n";
            const unsquashedUnique = MySqlSquasher.unsquashUnique(uniqueConstraint4);
            statement += `	CONSTRAINT ${unsquashedUnique.name} UNIQUE(\`${unsquashedUnique.columns.join(`\`,\``)}\`)`;
          }
        }
        statement += `
`;
        statement += `);`;
        statement += `
`;
        return statement;
      }
    };
    PgAlterTableAddUniqueConstraintConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "create_unique_constraint" && dialect7 === "postgresql";
      }
      convert(statement) {
        const unsquashed = PgSquasher.unsquashUnique(statement.data);
        const tableNameWithSchema = statement.schema ? `"${statement.schema}"."${statement.tableName}"` : `"${statement.tableName}"`;
        return `ALTER TABLE ${tableNameWithSchema} ADD CONSTRAINT "${unsquashed.name}" UNIQUE${unsquashed.nullsNotDistinct ? " NULLS NOT DISTINCT" : ""}("${unsquashed.columns.join('","')}");`;
      }
    };
    PgAlterTableDropUniqueConstraintConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "delete_unique_constraint" && dialect7 === "postgresql";
      }
      convert(statement) {
        const unsquashed = PgSquasher.unsquashUnique(statement.data);
        const tableNameWithSchema = statement.schema ? `"${statement.schema}"."${statement.tableName}"` : `"${statement.tableName}"`;
        return `ALTER TABLE ${tableNameWithSchema} DROP CONSTRAINT "${unsquashed.name}";`;
      }
    };
    MySQLAlterTableAddUniqueConstraintConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "create_unique_constraint" && dialect7 === "mysql";
      }
      convert(statement) {
        const unsquashed = MySqlSquasher.unsquashUnique(statement.data);
        return `ALTER TABLE \`${statement.tableName}\` ADD CONSTRAINT \`${unsquashed.name}\` UNIQUE(\`${unsquashed.columns.join("`,`")}\`);`;
      }
    };
    MySQLAlterTableDropUniqueConstraintConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "delete_unique_constraint" && dialect7 === "mysql";
      }
      convert(statement) {
        const unsquashed = MySqlSquasher.unsquashUnique(statement.data);
        return `ALTER TABLE \`${statement.tableName}\` DROP INDEX \`${unsquashed.name}\`;`;
      }
    };
    SQLiteAlterTableAddUniqueConstraintConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "create_unique_constraint" && dialect7 === "sqlite";
      }
      convert(statement) {
        return `/*
 SQLite does not support "Adding unique constraint to an existing table" out of the box, we do not generate automatic migration for that, so it has to be done manually
 Please refer to: https://www.techonthenet.com/sqlite/unique.php

 Due to that we don't generate migration automatically and it has to be done manually
*/`;
      }
    };
    SQLiteAlterTableDropUniqueConstraintConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "delete_unique_constraint" && dialect7 === "sqlite";
      }
      convert(statement) {
        return `/*
 SQLite does not support "Dropping unique constraint from an existing table" out of the box, we do not generate automatic migration for that, so it has to be done manually
 Please refer to: https://www.techonthenet.com/sqlite/unique.php

 Due to that we don't generate migration automatically and it has to be done manually
*/`;
      }
    };
    CreateTypeEnumConvertor = class extends Convertor {
      can(statement) {
        return statement.type === "create_type_enum";
      }
      convert(st) {
        const { name: name2, values, schema: schema4 } = st;
        const tableNameWithSchema = schema4 ? `"${schema4}"."${name2}"` : `"${name2}"`;
        let valuesStatement = "(";
        valuesStatement += values.map((it) => `'${it}'`).join(", ");
        valuesStatement += ")";
        let statement = "DO $$ BEGIN";
        statement += "\n";
        statement += ` CREATE TYPE ${tableNameWithSchema} AS ENUM${valuesStatement};`;
        statement += "\n";
        statement += "EXCEPTION";
        statement += "\n";
        statement += " WHEN duplicate_object THEN null;";
        statement += "\n";
        statement += "END $$;";
        statement += "\n";
        return statement;
      }
    };
    AlterTypeAddValueConvertor = class extends Convertor {
      can(statement) {
        return statement.type === "alter_type_add_value";
      }
      convert(st) {
        const { name: name2, schema: schema4, value } = st;
        const schemaPrefix = schema4 && schema4 !== "public" ? `"${schema4}".` : "";
        return `ALTER TYPE ${schemaPrefix}"${name2}" ADD VALUE '${value}';`;
      }
    };
    PgDropTableConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "drop_table" && dialect7 === "postgresql";
      }
      convert(statement) {
        const { tableName, schema: schema4 } = statement;
        const tableNameWithSchema = schema4 ? `"${schema4}"."${tableName}"` : `"${tableName}"`;
        return `DROP TABLE ${tableNameWithSchema};`;
      }
    };
    MySQLDropTableConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "drop_table" && dialect7 === "mysql";
      }
      convert(statement) {
        const { tableName } = statement;
        return `DROP TABLE \`${tableName}\`;`;
      }
    };
    SQLiteDropTableConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "drop_table" && dialect7 === "sqlite";
      }
      convert(statement) {
        const { tableName } = statement;
        return `DROP TABLE \`${tableName}\`;`;
      }
    };
    PgRenameTableConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "rename_table" && dialect7 === "postgresql";
      }
      convert(statement) {
        const { tableNameFrom, tableNameTo, toSchema, fromSchema } = statement;
        const from = fromSchema ? `"${fromSchema}"."${tableNameFrom}"` : `"${tableNameFrom}"`;
        const to = `"${tableNameTo}"`;
        return `ALTER TABLE ${from} RENAME TO ${to};`;
      }
    };
    SqliteRenameTableConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "rename_table" && dialect7 === "sqlite";
      }
      convert(statement) {
        const { tableNameFrom, tableNameTo } = statement;
        return `ALTER TABLE \`${tableNameFrom}\` RENAME TO \`${tableNameTo}\`;`;
      }
    };
    MySqlRenameTableConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "rename_table" && dialect7 === "mysql";
      }
      convert(statement) {
        const { tableNameFrom, tableNameTo } = statement;
        return `RENAME TABLE \`${tableNameFrom}\` TO \`${tableNameTo}\`;`;
      }
    };
    PgAlterTableRenameColumnConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "alter_table_rename_column" && dialect7 === "postgresql";
      }
      convert(statement) {
        const { tableName, oldColumnName, newColumnName, schema: schema4 } = statement;
        const tableNameWithSchema = schema4 ? `"${schema4}"."${tableName}"` : `"${tableName}"`;
        return `ALTER TABLE ${tableNameWithSchema} RENAME COLUMN "${oldColumnName}" TO "${newColumnName}";`;
      }
    };
    MySqlAlterTableRenameColumnConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "alter_table_rename_column" && dialect7 === "mysql";
      }
      convert(statement) {
        const { tableName, oldColumnName, newColumnName } = statement;
        return `ALTER TABLE \`${tableName}\` RENAME COLUMN \`${oldColumnName}\` TO \`${newColumnName}\`;`;
      }
    };
    SQLiteAlterTableRenameColumnConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "alter_table_rename_column" && dialect7 === "sqlite";
      }
      convert(statement) {
        const { tableName, oldColumnName, newColumnName } = statement;
        return `ALTER TABLE \`${tableName}\` RENAME COLUMN \`${oldColumnName}\` TO \`${newColumnName}\`;`;
      }
    };
    PgAlterTableDropColumnConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "alter_table_drop_column" && dialect7 === "postgresql";
      }
      convert(statement) {
        const { tableName, columnName, schema: schema4 } = statement;
        const tableNameWithSchema = schema4 ? `"${schema4}"."${tableName}"` : `"${tableName}"`;
        return `ALTER TABLE ${tableNameWithSchema} DROP COLUMN IF EXISTS "${columnName}";`;
      }
    };
    MySqlAlterTableDropColumnConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "alter_table_drop_column" && dialect7 === "mysql";
      }
      convert(statement) {
        const { tableName, columnName } = statement;
        return `ALTER TABLE \`${tableName}\` DROP COLUMN \`${columnName}\`;`;
      }
    };
    SQLiteAlterTableDropColumnConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "alter_table_drop_column" && dialect7 === "sqlite";
      }
      convert(statement) {
        const { tableName, columnName } = statement;
        return `ALTER TABLE \`${tableName}\` DROP COLUMN \`${columnName}\`;`;
      }
    };
    PgAlterTableAddColumnConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "alter_table_add_column" && dialect7 === "postgresql";
      }
      convert(statement) {
        const { tableName, column: column4, schema: schema4 } = statement;
        const { name: name2, type, notNull } = column4;
        const tableNameWithSchema = schema4 ? `"${schema4}"."${tableName}"` : `"${tableName}"`;
        const defaultStatement = `${column4.default !== void 0 ? ` DEFAULT ${column4.default}` : ""}`;
        const schemaPrefix = column4.typeSchema && column4.typeSchema !== "public" ? `"${column4.typeSchema}".` : "";
        const fixedType = isPgNativeType(column4.type) ? column4.type : `${schemaPrefix}"${column4.type}"`;
        const notNullStatement = `${notNull ? " NOT NULL" : ""}`;
        return `ALTER TABLE ${tableNameWithSchema} ADD COLUMN "${name2}" ${fixedType}${defaultStatement}${notNullStatement};`;
      }
    };
    MySqlAlterTableAddColumnConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "alter_table_add_column" && dialect7 === "mysql";
      }
      convert(statement) {
        const { tableName, column: column4 } = statement;
        const { name: name2, type, notNull, primaryKey, autoincrement, onUpdate } = column4;
        const defaultStatement = `${column4.default !== void 0 ? ` DEFAULT ${column4.default}` : ""}`;
        const notNullStatement = `${notNull ? " NOT NULL" : ""}`;
        const primaryKeyStatement = `${primaryKey ? " PRIMARY KEY" : ""}`;
        const autoincrementStatement = `${autoincrement ? " AUTO_INCREMENT" : ""}`;
        const onUpdateStatement = `${onUpdate ? " ON UPDATE CURRENT_TIMESTAMP" : ""}`;
        return `ALTER TABLE \`${tableName}\` ADD \`${name2}\` ${type}${primaryKeyStatement}${autoincrementStatement}${defaultStatement}${notNullStatement}${onUpdateStatement};`;
      }
    };
    SQLiteAlterTableAddColumnConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "sqlite_alter_table_add_column" && dialect7 === "sqlite";
      }
      convert(statement) {
        const { tableName, column: column4, referenceData } = statement;
        const { name: name2, type, notNull, primaryKey } = column4;
        const defaultStatement = `${column4.default !== void 0 ? ` DEFAULT ${column4.default}` : ""}`;
        const notNullStatement = `${notNull ? " NOT NULL" : ""}`;
        const primaryKeyStatement = `${primaryKey ? " PRIMARY KEY" : ""}`;
        const referenceAsObject = referenceData ? SQLiteSquasher.unsquashFK(referenceData) : void 0;
        const referenceStatement = `${referenceAsObject ? ` REFERENCES ${referenceAsObject.tableTo}(${referenceAsObject.columnsTo})` : ""}`;
        return `ALTER TABLE \`${tableName}\` ADD \`${name2}\` ${type}${primaryKeyStatement}${defaultStatement}${notNullStatement}${referenceStatement};`;
      }
    };
    PgAlterTableAlterColumnSetTypeConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "alter_table_alter_column_set_type" && dialect7 === "postgresql";
      }
      convert(statement) {
        const { tableName, columnName, newDataType, schema: schema4 } = statement;
        const tableNameWithSchema = schema4 ? `"${schema4}"."${tableName}"` : `"${tableName}"`;
        return `ALTER TABLE ${tableNameWithSchema} ALTER COLUMN "${columnName}" SET DATA TYPE ${newDataType};`;
      }
    };
    SQLiteAlterTableAlterColumnSetTypeConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "alter_table_alter_column_set_type" && dialect7 === "sqlite";
      }
      convert(statement) {
        return `/*
 SQLite does not support "Changing existing column type" out of the box, we do not generate automatic migration for that, so it has to be done manually
 Please refer to: https://www.techonthenet.com/sqlite/tables/alter_table.php
                  https://www.sqlite.org/lang_altertable.html
                  https://stackoverflow.com/questions/2083543/modify-a-columns-type-in-sqlite3

 Due to that we don't generate migration automatically and it has to be done manually
*/`;
      }
    };
    PgAlterTableAlterColumnSetDefaultConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "alter_table_alter_column_set_default" && dialect7 === "postgresql";
      }
      convert(statement) {
        const { tableName, columnName, schema: schema4 } = statement;
        const tableNameWithSchema = schema4 ? `"${schema4}"."${tableName}"` : `"${tableName}"`;
        return `ALTER TABLE ${tableNameWithSchema} ALTER COLUMN "${columnName}" SET DEFAULT ${statement.newDefaultValue};`;
      }
    };
    SqliteAlterTableAlterColumnSetDefaultConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "alter_table_alter_column_set_default" && dialect7 === "sqlite";
      }
      convert(statement) {
        return `/*
 SQLite does not support "Set default to column" out of the box, we do not generate automatic migration for that, so it has to be done manually
 Please refer to: https://www.techonthenet.com/sqlite/tables/alter_table.php
                  https://www.sqlite.org/lang_altertable.html
                  https://stackoverflow.com/questions/2083543/modify-a-columns-type-in-sqlite3

 Due to that we don't generate migration automatically and it has to be done manually
*/`;
      }
    };
    PgAlterTableAlterColumnDropDefaultConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "alter_table_alter_column_drop_default" && dialect7 === "postgresql";
      }
      convert(statement) {
        const { tableName, columnName, schema: schema4 } = statement;
        const tableNameWithSchema = schema4 ? `"${schema4}"."${tableName}"` : `"${tableName}"`;
        return `ALTER TABLE ${tableNameWithSchema} ALTER COLUMN "${columnName}" DROP DEFAULT;`;
      }
    };
    MySqlAlterTableAddPk = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "alter_table_alter_column_set_pk" && dialect7 === "mysql";
      }
      convert(statement) {
        return `ALTER TABLE \`${statement.tableName}\` ADD PRIMARY KEY (\`${statement.columnName}\`);`;
      }
    };
    MySqlAlterTableDropPk = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "alter_table_alter_column_drop_pk" && dialect7 === "mysql";
      }
      convert(statement) {
        return `ALTER TABLE \`${statement.tableName}\` DROP PRIMARY KEY`;
      }
    };
    MySqlModifyColumn = class extends Convertor {
      can(statement, dialect7) {
        return (statement.type === "alter_table_alter_column_set_type" || statement.type === "alter_table_alter_column_set_notnull" || statement.type === "alter_table_alter_column_drop_notnull" || statement.type === "alter_table_alter_column_drop_on_update" || statement.type === "alter_table_alter_column_set_on_update" || statement.type === "alter_table_alter_column_set_autoincrement" || statement.type === "alter_table_alter_column_drop_autoincrement" || statement.type === "alter_table_alter_column_set_default" || statement.type === "alter_table_alter_column_drop_default") && dialect7 === "mysql";
      }
      convert(statement) {
        const { tableName, columnName } = statement;
        let columnType = ``;
        let columnDefault = "";
        let columnNotNull = "";
        let columnOnUpdate = "";
        let columnAutoincrement = "";
        let primaryKey = statement.columnPk ? " PRIMARY KEY" : "";
        if (statement.type === "alter_table_alter_column_drop_notnull") {
          columnType = ` ${statement.newDataType}`;
          columnDefault = statement.columnDefault ? ` DEFAULT ${statement.columnDefault}` : "";
          columnNotNull = statement.columnNotNull ? ` NOT NULL` : "";
          columnOnUpdate = statement.columnOnUpdate ? ` ON UPDATE CURRENT_TIMESTAMP` : "";
          columnAutoincrement = statement.columnAutoIncrement ? " AUTO_INCREMENT" : "";
        } else if (statement.type === "alter_table_alter_column_set_notnull") {
          columnNotNull = ` NOT NULL`;
          columnType = ` ${statement.newDataType}`;
          columnDefault = statement.columnDefault ? ` DEFAULT ${statement.columnDefault}` : "";
          columnOnUpdate = statement.columnOnUpdate ? ` ON UPDATE CURRENT_TIMESTAMP` : "";
          columnAutoincrement = statement.columnAutoIncrement ? " AUTO_INCREMENT" : "";
        } else if (statement.type === "alter_table_alter_column_drop_on_update") {
          columnNotNull = statement.columnNotNull ? ` NOT NULL` : "";
          columnType = ` ${statement.newDataType}`;
          columnDefault = statement.columnDefault ? ` DEFAULT ${statement.columnDefault}` : "";
          columnOnUpdate = "";
          columnAutoincrement = statement.columnAutoIncrement ? " AUTO_INCREMENT" : "";
        } else if (statement.type === "alter_table_alter_column_set_on_update") {
          columnNotNull = statement.columnNotNull ? ` NOT NULL` : "";
          columnOnUpdate = ` ON UPDATE CURRENT_TIMESTAMP`;
          columnType = ` ${statement.newDataType}`;
          columnDefault = statement.columnDefault ? ` DEFAULT ${statement.columnDefault}` : "";
          columnAutoincrement = statement.columnAutoIncrement ? " AUTO_INCREMENT" : "";
        } else if (statement.type === "alter_table_alter_column_set_autoincrement") {
          columnNotNull = statement.columnNotNull ? ` NOT NULL` : "";
          columnOnUpdate = columnOnUpdate = statement.columnOnUpdate ? ` ON UPDATE CURRENT_TIMESTAMP` : "";
          columnType = ` ${statement.newDataType}`;
          columnDefault = statement.columnDefault ? ` DEFAULT ${statement.columnDefault}` : "";
          columnAutoincrement = " AUTO_INCREMENT";
        } else if (statement.type === "alter_table_alter_column_drop_autoincrement") {
          columnNotNull = statement.columnNotNull ? ` NOT NULL` : "";
          columnOnUpdate = columnOnUpdate = statement.columnOnUpdate ? ` ON UPDATE CURRENT_TIMESTAMP` : "";
          columnType = ` ${statement.newDataType}`;
          columnDefault = statement.columnDefault ? ` DEFAULT ${statement.columnDefault}` : "";
          columnAutoincrement = "";
        } else if (statement.type === "alter_table_alter_column_set_default") {
          columnNotNull = statement.columnNotNull ? ` NOT NULL` : "";
          columnOnUpdate = columnOnUpdate = statement.columnOnUpdate ? ` ON UPDATE CURRENT_TIMESTAMP` : "";
          columnType = ` ${statement.newDataType}`;
          columnDefault = ` DEFAULT ${statement.newDefaultValue}`;
          columnAutoincrement = statement.columnAutoIncrement ? " AUTO_INCREMENT" : "";
        } else if (statement.type === "alter_table_alter_column_drop_default") {
          columnNotNull = statement.columnNotNull ? ` NOT NULL` : "";
          columnOnUpdate = columnOnUpdate = statement.columnOnUpdate ? ` ON UPDATE CURRENT_TIMESTAMP` : "";
          columnType = ` ${statement.newDataType}`;
          columnDefault = "";
          columnAutoincrement = statement.columnAutoIncrement ? " AUTO_INCREMENT" : "";
        } else {
          columnType = ` ${statement.newDataType}`;
          columnNotNull = statement.columnNotNull ? ` NOT NULL` : "";
          columnOnUpdate = columnOnUpdate = statement.columnOnUpdate ? ` ON UPDATE CURRENT_TIMESTAMP` : "";
          columnDefault = statement.columnDefault ? ` DEFAULT ${statement.columnDefault}` : "";
          columnAutoincrement = statement.columnAutoIncrement ? " AUTO_INCREMENT" : "";
        }
        columnDefault = columnDefault instanceof Date ? columnDefault.toISOString() : columnDefault;
        return `ALTER TABLE \`${tableName}\` MODIFY COLUMN \`${columnName}\`${columnType}${columnAutoincrement}${columnNotNull}${columnDefault}${columnOnUpdate};`;
      }
    };
    SqliteAlterTableAlterColumnDropDefaultConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "alter_table_alter_column_drop_default" && dialect7 === "sqlite";
      }
      convert(statement) {
        return `/*
 SQLite does not support "Drop default from column" out of the box, we do not generate automatic migration for that, so it has to be done manually
 Please refer to: https://www.techonthenet.com/sqlite/tables/alter_table.php
                  https://www.sqlite.org/lang_altertable.html
                  https://stackoverflow.com/questions/2083543/modify-a-columns-type-in-sqlite3

 Due to that we don't generate migration automatically and it has to be done manually
*/`;
      }
    };
    PgAlterTableCreateCompositePrimaryKeyConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "create_composite_pk" && dialect7 === "postgresql";
      }
      convert(statement) {
        const { name: name2, columns } = PgSquasher.unsquashPK(statement.data);
        const tableNameWithSchema = statement.schema ? `"${statement.schema}"."${statement.tableName}"` : `"${statement.tableName}"`;
        return `ALTER TABLE ${tableNameWithSchema} ADD CONSTRAINT "${statement.constraintName}" PRIMARY KEY("${columns.join('","')}");`;
      }
    };
    PgAlterTableDeleteCompositePrimaryKeyConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "delete_composite_pk" && dialect7 === "postgresql";
      }
      convert(statement) {
        const { name: name2, columns } = PgSquasher.unsquashPK(statement.data);
        const tableNameWithSchema = statement.schema ? `"${statement.schema}"."${statement.tableName}"` : `"${statement.tableName}"`;
        return `ALTER TABLE ${tableNameWithSchema} DROP CONSTRAINT "${statement.constraintName}";`;
      }
    };
    PgAlterTableAlterCompositePrimaryKeyConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "alter_composite_pk" && dialect7 === "postgresql";
      }
      convert(statement) {
        const { name: name2, columns } = PgSquasher.unsquashPK(statement.old);
        const { name: newName, columns: newColumns } = PgSquasher.unsquashPK(
          statement.new
        );
        const tableNameWithSchema = statement.schema ? `"${statement.schema}"."${statement.tableName}"` : `"${statement.tableName}"`;
        return `ALTER TABLE ${tableNameWithSchema} DROP CONSTRAINT ${statement.oldConstraintName};
${BREAKPOINT}ALTER TABLE ${tableNameWithSchema} ADD CONSTRAINT ${statement.newConstraintName} PRIMARY KEY(${newColumns.join(",")});`;
      }
    };
    MySqlAlterTableCreateCompositePrimaryKeyConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "create_composite_pk" && dialect7 === "mysql";
      }
      convert(statement) {
        const { name: name2, columns } = MySqlSquasher.unsquashPK(statement.data);
        return `ALTER TABLE \`${statement.tableName}\` ADD PRIMARY KEY(\`${columns.join("`,`")}\`);`;
      }
    };
    MySqlAlterTableDeleteCompositePrimaryKeyConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "delete_composite_pk" && dialect7 === "mysql";
      }
      convert(statement) {
        const { name: name2, columns } = MySqlSquasher.unsquashPK(statement.data);
        return `ALTER TABLE \`${statement.tableName}\` DROP PRIMARY KEY;`;
      }
    };
    MySqlAlterTableAlterCompositePrimaryKeyConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "alter_composite_pk" && dialect7 === "mysql";
      }
      convert(statement) {
        const { name: name2, columns } = MySqlSquasher.unsquashPK(statement.old);
        const { name: newName, columns: newColumns } = MySqlSquasher.unsquashPK(
          statement.new
        );
        return `ALTER TABLE \`${statement.tableName}\` DROP PRIMARY KEY, ADD PRIMARY KEY(\`${newColumns.join("`,`")}\`);`;
      }
    };
    SqliteAlterTableCreateCompositePrimaryKeyConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "create_composite_pk" && dialect7 === "sqlite";
      }
      convert(statement) {
        let msg = "/*\n";
        msg += `You're trying to add PRIMARY KEY(${statement.data}) to '${statement.tableName}' table
`;
        msg += "SQLite does not support adding primary key to an already created table\n";
        msg += "You can do it in 3 steps with drizzle orm:\n";
        msg += " - create new mirror table with needed pk, rename current table to old_table, generate SQL\n";
        msg += " - migrate old data from one table to another\n";
        msg += " - delete old_table in schema, generate sql\n\n";
        msg += "or create manual migration like below:\n\n";
        msg += "ALTER TABLE table_name RENAME TO old_table;\n";
        msg += "CREATE TABLE table_name (\n";
        msg += "	column1 datatype [ NULL | NOT NULL ],\n";
        msg += "	column2 datatype [ NULL | NOT NULL ],\n";
        msg += "	...\n";
        msg += "	PRIMARY KEY (pk_col1, pk_col2, ... pk_col_n)\n";
        msg += " );\n";
        msg += "INSERT INTO table_name SELECT * FROM old_table;\n\n";
        msg += "Due to that we don't generate migration automatically and it has to be done manually\n";
        msg += "*/\n";
        return msg;
      }
    };
    SqliteAlterTableDeleteCompositePrimaryKeyConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "delete_composite_pk" && dialect7 === "sqlite";
      }
      convert(statement) {
        let msg = "/*\n";
        msg += `You're trying to delete PRIMARY KEY(${statement.data}) from '${statement.tableName}' table
`;
        msg += "SQLite does not supportprimary key deletion from existing table\n";
        msg += "You can do it in 3 steps with drizzle orm:\n";
        msg += " - create new mirror table table without pk, rename current table to old_table, generate SQL\n";
        msg += " - migrate old data from one table to another\n";
        msg += " - delete old_table in schema, generate sql\n\n";
        msg += "or create manual migration like below:\n\n";
        msg += "ALTER TABLE table_name RENAME TO old_table;\n";
        msg += "CREATE TABLE table_name (\n";
        msg += "	column1 datatype [ NULL | NOT NULL ],\n";
        msg += "	column2 datatype [ NULL | NOT NULL ],\n";
        msg += "	...\n";
        msg += "	PRIMARY KEY (pk_col1, pk_col2, ... pk_col_n)\n";
        msg += " );\n";
        msg += "INSERT INTO table_name SELECT * FROM old_table;\n\n";
        msg += "Due to that we don't generate migration automatically and it has to be done manually\n";
        msg += "*/\n";
        return msg;
      }
    };
    SqliteAlterTableAlterCompositePrimaryKeyConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "alter_composite_pk" && dialect7 === "sqlite";
      }
      convert(statement) {
        let msg = "/*\n";
        msg += "SQLite does not support altering primary key\n";
        msg += "You can do it in 3 steps with drizzle orm:\n";
        msg += " - create new mirror table with needed pk, rename current table to old_table, generate SQL\n";
        msg += " - migrate old data from one table to another\n";
        msg += " - delete old_table in schema, generate sql\n\n";
        msg += "or create manual migration like below:\n\n";
        msg += "ALTER TABLE table_name RENAME TO old_table;\n";
        msg += "CREATE TABLE table_name (\n";
        msg += "	column1 datatype [ NULL | NOT NULL ],\n";
        msg += "	column2 datatype [ NULL | NOT NULL ],\n";
        msg += "	...\n";
        msg += "	PRIMARY KEY (pk_col1, pk_col2, ... pk_col_n)\n";
        msg += " );\n";
        msg += "INSERT INTO table_name SELECT * FROM old_table;\n\n";
        msg += "Due to that we don't generate migration automatically and it has to be done manually\n";
        msg += "*/\n";
        return msg;
      }
    };
    PgAlterTableAlterColumnSetPrimaryKeyConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "alter_table_alter_column_set_pk" && dialect7 === "postgresql";
      }
      convert(statement) {
        const { tableName, columnName } = statement;
        const tableNameWithSchema = statement.schema ? `"${statement.schema}"."${statement.tableName}"` : `"${statement.tableName}"`;
        return `ALTER TABLE ${tableNameWithSchema} ADD PRIMARY KEY ("${columnName}");`;
      }
    };
    PgAlterTableAlterColumnDropPrimaryKeyConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "alter_table_alter_column_drop_pk" && dialect7 === "postgresql";
      }
      convert(statement) {
        const { tableName, columnName, schema: schema4 } = statement;
        return `/* 
    Unfortunately in current drizzle-kit version we can't automatically get name for primary key.
    We are working on making it available!

    Meanwhile you can:
        1. Check pk name in your database, by running
            SELECT constraint_name FROM information_schema.table_constraints
            WHERE table_schema = '${typeof schema4 === "undefined" || schema4 === "" ? "public" : schema4}'
                AND table_name = '${tableName}'
                AND constraint_type = 'PRIMARY KEY';
        2. Uncomment code below and paste pk name manually
        
    Hope to release this update as soon as possible
*/

-- ALTER TABLE "${tableName}" DROP CONSTRAINT "<constraint_name>";`;
      }
    };
    PgAlterTableAlterColumnSetNotNullConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "alter_table_alter_column_set_notnull" && dialect7 === "postgresql";
      }
      convert(statement) {
        const { tableName, columnName } = statement;
        const tableNameWithSchema = statement.schema ? `"${statement.schema}"."${statement.tableName}"` : `"${statement.tableName}"`;
        return `ALTER TABLE ${tableNameWithSchema} ALTER COLUMN "${columnName}" SET NOT NULL;`;
      }
    };
    SqliteAlterTableAlterColumnSetNotNullConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "alter_table_alter_column_set_notnull" && dialect7 === "sqlite";
      }
      convert(statement) {
        return `/*
 SQLite does not support "Set not null to column" out of the box, we do not generate automatic migration for that, so it has to be done manually
 Please refer to: https://www.techonthenet.com/sqlite/tables/alter_table.php
                  https://www.sqlite.org/lang_altertable.html
                  https://stackoverflow.com/questions/2083543/modify-a-columns-type-in-sqlite3

 Due to that we don't generate migration automatically and it has to be done manually
*/`;
      }
    };
    SqliteAlterTableAlterColumnSetAutoincrementConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "alter_table_alter_column_set_autoincrement" && dialect7 === "sqlite";
      }
      convert(statement) {
        return `/*
 SQLite does not support "Set autoincrement to a column" out of the box, we do not generate automatic migration for that, so it has to be done manually
 Please refer to: https://www.techonthenet.com/sqlite/tables/alter_table.php
                  https://www.sqlite.org/lang_altertable.html
                  https://stackoverflow.com/questions/2083543/modify-a-columns-type-in-sqlite3

 Due to that we don't generate migration automatically and it has to be done manually
*/`;
      }
    };
    SqliteAlterTableAlterColumnDropAutoincrementConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "alter_table_alter_column_drop_autoincrement" && dialect7 === "sqlite";
      }
      convert(statement) {
        return `/*
 SQLite does not support "Drop autoincrement from a column" out of the box, we do not generate automatic migration for that, so it has to be done manually
 Please refer to: https://www.techonthenet.com/sqlite/tables/alter_table.php
                  https://www.sqlite.org/lang_altertable.html
                  https://stackoverflow.com/questions/2083543/modify-a-columns-type-in-sqlite3

 Due to that we don't generate migration automatically and it has to be done manually
*/`;
      }
    };
    PgAlterTableAlterColumnDropNotNullConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "alter_table_alter_column_drop_notnull" && dialect7 === "postgresql";
      }
      convert(statement) {
        const { tableName, columnName } = statement;
        const tableNameWithSchema = statement.schema ? `"${statement.schema}"."${statement.tableName}"` : `"${statement.tableName}"`;
        return `ALTER TABLE ${tableNameWithSchema} ALTER COLUMN "${columnName}" DROP NOT NULL;`;
      }
    };
    SqliteAlterTableAlterColumnDropNotNullConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "alter_table_alter_column_drop_notnull" && dialect7 === "sqlite";
      }
      convert(statement) {
        return `/*
 SQLite does not support "Drop not null from column" out of the box, we do not generate automatic migration for that, so it has to be done manually
 Please refer to: https://www.techonthenet.com/sqlite/tables/alter_table.php
                  https://www.sqlite.org/lang_altertable.html
                  https://stackoverflow.com/questions/2083543/modify-a-columns-type-in-sqlite3

 Due to that we don't generate migration automatically and it has to be done manually
*/`;
      }
    };
    PgCreateForeignKeyConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "create_reference" && dialect7 === "postgresql";
      }
      convert(statement) {
        const {
          name: name2,
          tableFrom,
          tableTo,
          columnsFrom,
          columnsTo,
          onDelete,
          onUpdate,
          schemaTo
        } = PgSquasher.unsquashFK(statement.data);
        const onDeleteStatement = onDelete ? ` ON DELETE ${onDelete}` : "";
        const onUpdateStatement = onUpdate ? ` ON UPDATE ${onUpdate}` : "";
        const fromColumnsString = columnsFrom.map((it) => `"${it}"`).join(",");
        const toColumnsString = columnsTo.map((it) => `"${it}"`).join(",");
        const tableNameWithSchema = statement.schema ? `"${statement.schema}"."${tableFrom}"` : `"${tableFrom}"`;
        const tableToNameWithSchema = schemaTo ? `"${schemaTo}"."${tableTo}"` : `"${tableTo}"`;
        const alterStatement = `ALTER TABLE ${tableNameWithSchema} ADD CONSTRAINT "${name2}" FOREIGN KEY (${fromColumnsString}) REFERENCES ${tableToNameWithSchema}(${toColumnsString})${onDeleteStatement}${onUpdateStatement}`;
        let sql2 = "DO $$ BEGIN\n";
        sql2 += " " + alterStatement + ";\n";
        sql2 += "EXCEPTION\n";
        sql2 += " WHEN duplicate_object THEN null;\n";
        sql2 += "END $$;\n";
        return sql2;
      }
    };
    SqliteCreateForeignKeyConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "create_reference" && dialect7 === "sqlite";
      }
      convert(statement) {
        return `/*
 SQLite does not support "Creating foreign key on existing column" out of the box, we do not generate automatic migration for that, so it has to be done manually
 Please refer to: https://www.techonthenet.com/sqlite/tables/alter_table.php
                  https://www.sqlite.org/lang_altertable.html

 Due to that we don't generate migration automatically and it has to be done manually
*/`;
      }
    };
    MySqlCreateForeignKeyConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "create_reference" && dialect7 === "mysql";
      }
      convert(statement) {
        const {
          name: name2,
          tableFrom,
          tableTo,
          columnsFrom,
          columnsTo,
          onDelete,
          onUpdate
        } = MySqlSquasher.unsquashFK(statement.data);
        const onDeleteStatement = onDelete ? ` ON DELETE ${onDelete}` : "";
        const onUpdateStatement = onUpdate ? ` ON UPDATE ${onUpdate}` : "";
        const fromColumnsString = columnsFrom.map((it) => `\`${it}\``).join(",");
        const toColumnsString = columnsTo.map((it) => `\`${it}\``).join(",");
        return `ALTER TABLE \`${tableFrom}\` ADD CONSTRAINT \`${name2}\` FOREIGN KEY (${fromColumnsString}) REFERENCES \`${tableTo}\`(${toColumnsString})${onDeleteStatement}${onUpdateStatement};`;
      }
    };
    PgAlterForeignKeyConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "alter_reference" && dialect7 === "postgresql";
      }
      convert(statement) {
        const newFk = PgSquasher.unsquashFK(statement.data);
        const oldFk = PgSquasher.unsquashFK(statement.oldFkey);
        const tableNameWithSchema = statement.schema ? `"${statement.schema}"."${oldFk.tableFrom}"` : `"${oldFk.tableFrom}"`;
        let sql2 = `ALTER TABLE ${tableNameWithSchema} DROP CONSTRAINT "${oldFk.name}";
`;
        const onDeleteStatement = newFk.onDelete ? ` ON DELETE ${newFk.onDelete}` : "";
        const onUpdateStatement = newFk.onUpdate ? ` ON UPDATE ${newFk.onUpdate}` : "";
        const fromColumnsString = newFk.columnsFrom.map((it) => `"${it}"`).join(",");
        const toColumnsString = newFk.columnsTo.map((it) => `"${it}"`).join(",");
        const tableFromNameWithSchema = oldFk.schemaTo ? `"${oldFk.schemaTo}"."${oldFk.tableFrom}"` : `"${oldFk.tableFrom}"`;
        const tableToNameWithSchema = newFk.schemaTo ? `"${newFk.schemaTo}"."${newFk.tableFrom}"` : `"${newFk.tableFrom}"`;
        const alterStatement = `ALTER TABLE ${tableFromNameWithSchema} ADD CONSTRAINT "${newFk.name}" FOREIGN KEY (${fromColumnsString}) REFERENCES ${tableToNameWithSchema}(${toColumnsString})${onDeleteStatement}${onUpdateStatement}`;
        sql2 += "DO $$ BEGIN\n";
        sql2 += " " + alterStatement + ";\n";
        sql2 += "EXCEPTION\n";
        sql2 += " WHEN duplicate_object THEN null;\n";
        sql2 += "END $$;\n";
        return sql2;
      }
    };
    SqliteAlterForeignKeyConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "alter_reference" && dialect7 === "sqlite";
      }
      convert(statement) {
        return `/*
 SQLite does not support "Changing existing foreign key" out of the box, we do not generate automatic migration for that, so it has to be done manually
 Please refer to: https://www.techonthenet.com/sqlite/tables/alter_table.php
                  https://www.sqlite.org/lang_altertable.html

 Due to that we don't generate migration automatically and it has to be done manually
*/`;
      }
    };
    PgDeleteForeignKeyConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "delete_reference" && dialect7 === "postgresql";
      }
      convert(statement) {
        const tableFrom = statement.tableName;
        const { name: name2 } = PgSquasher.unsquashFK(statement.data);
        const tableNameWithSchema = statement.schema ? `"${statement.schema}"."${tableFrom}"` : `"${tableFrom}"`;
        return `ALTER TABLE ${tableNameWithSchema} DROP CONSTRAINT "${name2}";
`;
      }
    };
    SqliteDeleteForeignKeyConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "delete_reference" && dialect7 === "sqlite";
      }
      convert(statement) {
        return `/*
 SQLite does not support "Dropping foreign key" out of the box, we do not generate automatic migration for that, so it has to be done manually
 Please refer to: https://www.techonthenet.com/sqlite/tables/alter_table.php
                  https://www.sqlite.org/lang_altertable.html

 Due to that we don't generate migration automatically and it has to be done manually
*/`;
      }
    };
    MySqlDeleteForeignKeyConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "delete_reference" && dialect7 === "mysql";
      }
      convert(statement) {
        const tableFrom = statement.tableName;
        const { name: name2 } = MySqlSquasher.unsquashFK(statement.data);
        return `ALTER TABLE \`${tableFrom}\` DROP FOREIGN KEY \`${name2}\`;
`;
      }
    };
    CreatePgIndexConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "create_index" && dialect7 === "postgresql";
      }
      convert(statement) {
        const { name: name2, columns, isUnique } = PgSquasher.unsquashIdx(statement.data);
        const indexPart = isUnique ? "UNIQUE INDEX" : "INDEX";
        const value = columns.map((it) => `"${it}"`).join(",");
        const tableNameWithSchema = statement.schema ? `"${statement.schema}"."${statement.tableName}"` : `"${statement.tableName}"`;
        return `CREATE ${indexPart} IF NOT EXISTS "${name2}" ON ${tableNameWithSchema} (${value});`;
      }
    };
    CreateMySqlIndexConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "create_index" && dialect7 === "mysql";
      }
      convert(statement) {
        const { name: name2, columns, isUnique } = MySqlSquasher.unsquashIdx(
          statement.data
        );
        const indexPart = isUnique ? "UNIQUE INDEX" : "INDEX";
        const value = columns.map((it) => `\`${it}\``).join(",");
        return `CREATE ${indexPart} \`${name2}\` ON \`${statement.tableName}\` (${value});`;
      }
    };
    CreateSqliteIndexConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "create_index" && dialect7 === "sqlite";
      }
      convert(statement) {
        const { name: name2, columns, isUnique, where } = SQLiteSquasher.unsquashIdx(
          statement.data
        );
        const indexPart = isUnique ? "UNIQUE INDEX" : "INDEX";
        const whereStatement = where ? ` WHERE ${where}` : "";
        const value = columns.map((it) => `\`${it}\``).join(",");
        return `CREATE ${indexPart} \`${name2}\` ON \`${statement.tableName}\` (${value})${whereStatement};`;
      }
    };
    PgDropIndexConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "drop_index" && dialect7 === "postgresql";
      }
      convert(statement) {
        const { name: name2 } = PgSquasher.unsquashIdx(statement.data);
        return `DROP INDEX IF EXISTS "${name2}";`;
      }
    };
    PgCreateSchemaConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "create_schema" && dialect7 === "postgresql";
      }
      convert(statement) {
        const { name: name2 } = statement;
        return `CREATE SCHEMA "${name2}";
`;
      }
    };
    PgRenameSchemaConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "rename_schema" && dialect7 === "postgresql";
      }
      convert(statement) {
        const { from, to } = statement;
        return `ALTER SCHEMA "${from}" RENAME TO "${to}";
`;
      }
    };
    PgDropSchemaConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "drop_schema" && dialect7 === "postgresql";
      }
      convert(statement) {
        const { name: name2 } = statement;
        return `DROP SCHEMA "${name2}";
`;
      }
    };
    PgAlterTableSetSchemaConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "alter_table_set_schema" && dialect7 === "postgresql";
      }
      convert(statement) {
        const { tableName, schemaFrom, schemaTo } = statement;
        return `ALTER TABLE "${schemaFrom}"."${tableName}" SET SCHEMA "${schemaTo}";
`;
      }
    };
    PgAlterTableSetNewSchemaConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "alter_table_set_new_schema" && dialect7 === "postgresql";
      }
      convert(statement) {
        const { tableName, to, from } = statement;
        const tableNameWithSchema = from ? `"${from}"."${tableName}"` : `"${tableName}"`;
        return `ALTER TABLE ${tableNameWithSchema} SET SCHEMA "${to}";
`;
      }
    };
    PgAlterTableRemoveFromSchemaConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "alter_table_remove_from_schema" && dialect7 === "postgresql";
      }
      convert(statement) {
        const { tableName, schema: schema4 } = statement;
        const tableNameWithSchema = schema4 ? `"${schema4}"."${tableName}"` : `"${tableName}"`;
        return `ALTER TABLE ${tableNameWithSchema} SET SCHEMA public;
`;
      }
    };
    SqliteDropIndexConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "drop_index" && dialect7 === "sqlite";
      }
      convert(statement) {
        const { name: name2 } = PgSquasher.unsquashIdx(statement.data);
        return `DROP INDEX IF EXISTS \`${name2}\`;`;
      }
    };
    MySqlDropIndexConvertor = class extends Convertor {
      can(statement, dialect7) {
        return statement.type === "drop_index" && dialect7 === "mysql";
      }
      convert(statement) {
        const { name: name2 } = MySqlSquasher.unsquashIdx(statement.data);
        return `DROP INDEX \`${name2}\` ON \`${statement.tableName}\`;`;
      }
    };
    convertors = [];
    convertors.push(new PgCreateTableConvertor());
    convertors.push(new MySqlCreateTableConvertor());
    convertors.push(new SQLiteCreateTableConvertor());
    convertors.push(new CreateTypeEnumConvertor());
    convertors.push(new PgDropTableConvertor());
    convertors.push(new MySQLDropTableConvertor());
    convertors.push(new SQLiteDropTableConvertor());
    convertors.push(new PgRenameTableConvertor());
    convertors.push(new MySqlRenameTableConvertor());
    convertors.push(new SqliteRenameTableConvertor());
    convertors.push(new PgAlterTableRenameColumnConvertor());
    convertors.push(new MySqlAlterTableRenameColumnConvertor());
    convertors.push(new SQLiteAlterTableRenameColumnConvertor());
    convertors.push(new PgAlterTableDropColumnConvertor());
    convertors.push(new MySqlAlterTableDropColumnConvertor());
    convertors.push(new SQLiteAlterTableDropColumnConvertor());
    convertors.push(new PgAlterTableAddColumnConvertor());
    convertors.push(new MySqlAlterTableAddColumnConvertor());
    convertors.push(new SQLiteAlterTableAddColumnConvertor());
    convertors.push(new PgAlterTableAlterColumnSetTypeConvertor());
    convertors.push(new PgAlterTableAddUniqueConstraintConvertor());
    convertors.push(new PgAlterTableDropUniqueConstraintConvertor());
    convertors.push(new MySQLAlterTableAddUniqueConstraintConvertor());
    convertors.push(new MySQLAlterTableDropUniqueConstraintConvertor());
    convertors.push(new CreatePgIndexConvertor());
    convertors.push(new CreateMySqlIndexConvertor());
    convertors.push(new CreateSqliteIndexConvertor());
    convertors.push(new PgDropIndexConvertor());
    convertors.push(new SqliteDropIndexConvertor());
    convertors.push(new MySqlDropIndexConvertor());
    convertors.push(new AlterTypeAddValueConvertor());
    convertors.push(new PgAlterTableAlterColumnSetPrimaryKeyConvertor());
    convertors.push(new PgAlterTableAlterColumnDropPrimaryKeyConvertor());
    convertors.push(new PgAlterTableAlterColumnSetNotNullConvertor());
    convertors.push(new PgAlterTableAlterColumnDropNotNullConvertor());
    convertors.push(new PgAlterTableAlterColumnSetDefaultConvertor());
    convertors.push(new PgAlterTableAlterColumnDropDefaultConvertor());
    convertors.push(new MySqlModifyColumn());
    convertors.push(new PgCreateForeignKeyConvertor());
    convertors.push(new MySqlCreateForeignKeyConvertor());
    convertors.push(new PgAlterForeignKeyConvertor());
    convertors.push(new PgDeleteForeignKeyConvertor());
    convertors.push(new MySqlDeleteForeignKeyConvertor());
    convertors.push(new PgCreateSchemaConvertor());
    convertors.push(new PgRenameSchemaConvertor());
    convertors.push(new PgDropSchemaConvertor());
    convertors.push(new PgAlterTableSetSchemaConvertor());
    convertors.push(new PgAlterTableSetNewSchemaConvertor());
    convertors.push(new PgAlterTableRemoveFromSchemaConvertor());
    convertors.push(new SQLiteAlterTableAlterColumnSetTypeConvertor());
    convertors.push(new SqliteAlterForeignKeyConvertor());
    convertors.push(new SqliteDeleteForeignKeyConvertor());
    convertors.push(new SqliteCreateForeignKeyConvertor());
    convertors.push(new SQLiteAlterTableAddUniqueConstraintConvertor());
    convertors.push(new SQLiteAlterTableDropUniqueConstraintConvertor());
    convertors.push(new SqliteAlterTableAlterColumnSetNotNullConvertor());
    convertors.push(new SqliteAlterTableAlterColumnDropNotNullConvertor());
    convertors.push(new SqliteAlterTableAlterColumnSetDefaultConvertor());
    convertors.push(new SqliteAlterTableAlterColumnDropDefaultConvertor());
    convertors.push(new SqliteAlterTableAlterColumnSetAutoincrementConvertor());
    convertors.push(new SqliteAlterTableAlterColumnDropAutoincrementConvertor());
    convertors.push(new SqliteAlterTableCreateCompositePrimaryKeyConvertor());
    convertors.push(new SqliteAlterTableDeleteCompositePrimaryKeyConvertor());
    convertors.push(new SqliteAlterTableAlterCompositePrimaryKeyConvertor());
    convertors.push(new PgAlterTableCreateCompositePrimaryKeyConvertor());
    convertors.push(new PgAlterTableDeleteCompositePrimaryKeyConvertor());
    convertors.push(new PgAlterTableAlterCompositePrimaryKeyConvertor());
    convertors.push(new MySqlAlterTableDeleteCompositePrimaryKeyConvertor());
    convertors.push(new MySqlAlterTableDropPk());
    convertors.push(new MySqlAlterTableCreateCompositePrimaryKeyConvertor());
    convertors.push(new MySqlAlterTableAddPk());
    convertors.push(new MySqlAlterTableAlterCompositePrimaryKeyConvertor());
    fromJson = (statements, dialect7) => {
      const result = statements.map((statement) => {
        const filtered = convertors.filter((it) => {
          return it.can(statement, dialect7);
        });
        const convertor = filtered.length === 1 ? filtered[0] : void 0;
        if (!convertor) {
          return "";
        }
        return convertor.convert(statement);
      }).filter((it) => it !== "");
      return result;
    };
    https:
      `
create table users (
	id int,
    name character varying(128)
);

create type venum as enum('one', 'two', 'three');
alter table users add column typed venum;

insert into users(id, name, typed) values (1, 'name1', 'one');
insert into users(id, name, typed) values (2, 'name2', 'two');
insert into users(id, name, typed) values (3, 'name3', 'three');

alter type venum rename to __venum;
create type venum as enum ('one', 'two', 'three', 'four', 'five');

ALTER TABLE users ALTER COLUMN typed TYPE venum USING typed::text::venum;

insert into users(id, name, typed) values (4, 'name4', 'four');
insert into users(id, name, typed) values (5, 'name5', 'five');

drop type __venum;
`;
  }
});

// src/cli/selector-ui.ts
import { Prompt as Prompt2, SelectState as SelectState2 } from "hanji";
var Select;
var init_selector_ui = __esm({
  "src/cli/selector-ui.ts"() {
    "use strict";
    init_source();
    Select = class extends Prompt2 {
      constructor(items) {
        super();
        this.on("attach", (terminal) => terminal.toggleCursor("hide"));
        this.on("detach", (terminal) => terminal.toggleCursor("show"));
        this.data = new SelectState2(
          items.map((it) => ({ label: it, value: `${it}-value` }))
        );
        this.data.bind(this);
      }
      render(status) {
        if (status === "submitted" || status === "aborted")
          return "";
        let text = ``;
        this.data.items.forEach((it, idx) => {
          text += idx === this.data.selectedIdx ? `${source_default.green("\u276F " + it.label)}` : `  ${it.label}`;
          text += idx != this.data.items.length - 1 ? "\n" : "";
        });
        return text;
      }
      result() {
        return {
          index: this.data.selectedIdx,
          value: this.data.items[this.data.selectedIdx].value
        };
      }
    };
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/alias.js
var init_alias3 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/alias.js"() {
    "use strict";
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/checks.js
var _a134, CheckBuilder2, _a135, Check2;
var init_checks2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/checks.js"() {
    "use strict";
    init_entity();
    CheckBuilder2 = class {
      constructor(name2, value) {
        __publicField(this, "brand");
        this.name = name2;
        this.value = value;
      }
      build(table4) {
        return new Check2(table4, this);
      }
    };
    _a134 = entityKind;
    __publicField(CheckBuilder2, _a134, "SQLiteCheckBuilder");
    Check2 = class {
      constructor(table4, builder) {
        __publicField(this, "name");
        __publicField(this, "value");
        this.table = table4;
        this.name = builder.name;
        this.value = builder.value;
      }
    };
    _a135 = entityKind;
    __publicField(Check2, _a135, "SQLiteCheck");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/table.js
function sqliteTableBase(name2, columns, extraConfig, schema4, baseName = name2) {
  const rawTable = new SQLiteTable(name2, schema4, baseName);
  const builtColumns = Object.fromEntries(
    Object.entries(columns).map(([name22, colBuilderBase]) => {
      const colBuilder = colBuilderBase;
      const column4 = colBuilder.build(rawTable);
      rawTable[InlineForeignKeys2].push(...colBuilder.buildForeignKeys(column4, rawTable));
      return [name22, column4];
    })
  );
  const table4 = Object.assign(rawTable, builtColumns);
  table4[Table.Symbol.Columns] = builtColumns;
  if (extraConfig) {
    table4[SQLiteTable.Symbol.ExtraConfigBuilder] = extraConfig;
  }
  return table4;
}
var InlineForeignKeys2, _a136, _b7, _c3, _d2, SQLiteTable, sqliteTable;
var init_table3 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/table.js"() {
    "use strict";
    init_entity();
    init_table();
    InlineForeignKeys2 = Symbol.for("drizzle:SQLiteInlineForeignKeys");
    SQLiteTable = class extends Table {
      constructor() {
        super(...arguments);
        /** @internal */
        __publicField(this, _b7);
        /** @internal */
        __publicField(this, _c3, []);
        /** @internal */
        __publicField(this, _d2);
      }
    };
    _a136 = entityKind, _b7 = Table.Symbol.Columns, _c3 = InlineForeignKeys2, _d2 = Table.Symbol.ExtraConfigBuilder;
    __publicField(SQLiteTable, _a136, "SQLiteTable");
    /** @internal */
    __publicField(SQLiteTable, "Symbol", Object.assign({}, Table.Symbol, {
      InlineForeignKeys: InlineForeignKeys2
    }));
    sqliteTable = (name2, columns, extraConfig) => {
      return sqliteTableBase(name2, columns, extraConfig);
    };
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/foreign-keys.js
var _a137, ForeignKeyBuilder2, _a138, ForeignKey2;
var init_foreign_keys2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/foreign-keys.js"() {
    "use strict";
    init_entity();
    init_table3();
    ForeignKeyBuilder2 = class {
      constructor(config, actions) {
        /** @internal */
        __publicField(this, "reference");
        /** @internal */
        __publicField(this, "_onUpdate");
        /** @internal */
        __publicField(this, "_onDelete");
        this.reference = () => {
          const { name: name2, columns, foreignColumns } = config();
          return { name: name2, columns, foreignTable: foreignColumns[0].table, foreignColumns };
        };
        if (actions) {
          this._onUpdate = actions.onUpdate;
          this._onDelete = actions.onDelete;
        }
      }
      onUpdate(action) {
        this._onUpdate = action;
        return this;
      }
      onDelete(action) {
        this._onDelete = action;
        return this;
      }
      /** @internal */
      build(table4) {
        return new ForeignKey2(table4, this);
      }
    };
    _a137 = entityKind;
    __publicField(ForeignKeyBuilder2, _a137, "SQLiteForeignKeyBuilder");
    ForeignKey2 = class {
      constructor(table4, builder) {
        __publicField(this, "reference");
        __publicField(this, "onUpdate");
        __publicField(this, "onDelete");
        this.table = table4;
        this.reference = builder.reference;
        this.onUpdate = builder._onUpdate;
        this.onDelete = builder._onDelete;
      }
      getName() {
        const { name: name2, columns, foreignColumns } = this.reference();
        const columnNames = columns.map((column4) => column4.name);
        const foreignColumnNames = foreignColumns.map((column4) => column4.name);
        const chunks = [
          this.table[SQLiteTable.Symbol.Name],
          ...columnNames,
          foreignColumns[0].table[SQLiteTable.Symbol.Name],
          ...foreignColumnNames
        ];
        return name2 ?? `${chunks.join("_")}_fk`;
      }
    };
    _a138 = entityKind;
    __publicField(ForeignKey2, _a138, "SQLiteForeignKey");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/unique-constraint.js
function uniqueKeyName2(table4, columns) {
  return `${table4[SQLiteTable.Symbol.Name]}_${columns.join("_")}_unique`;
}
var _a139, UniqueConstraintBuilder2, _a140, UniqueOnConstraintBuilder2, _a141, UniqueConstraint2;
var init_unique_constraint2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/unique-constraint.js"() {
    "use strict";
    init_entity();
    init_table3();
    UniqueConstraintBuilder2 = class {
      constructor(columns, name2) {
        /** @internal */
        __publicField(this, "columns");
        this.name = name2;
        this.columns = columns;
      }
      /** @internal */
      build(table4) {
        return new UniqueConstraint2(table4, this.columns, this.name);
      }
    };
    _a139 = entityKind;
    __publicField(UniqueConstraintBuilder2, _a139, "SQLiteUniqueConstraintBuilder");
    UniqueOnConstraintBuilder2 = class {
      constructor(name2) {
        /** @internal */
        __publicField(this, "name");
        this.name = name2;
      }
      on(...columns) {
        return new UniqueConstraintBuilder2(columns, this.name);
      }
    };
    _a140 = entityKind;
    __publicField(UniqueOnConstraintBuilder2, _a140, "SQLiteUniqueOnConstraintBuilder");
    UniqueConstraint2 = class {
      constructor(table4, columns, name2) {
        __publicField(this, "columns");
        __publicField(this, "name");
        this.table = table4;
        this.columns = columns;
        this.name = name2 ?? uniqueKeyName2(this.table, this.columns.map((column4) => column4.name));
      }
      getName() {
        return this.name;
      }
    };
    _a141 = entityKind;
    __publicField(UniqueConstraint2, _a141, "SQLiteUniqueConstraint");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/columns/common.js
var _a142, SQLiteColumnBuilder, _a143, SQLiteColumn;
var init_common3 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/columns/common.js"() {
    "use strict";
    init_column_builder();
    init_column();
    init_entity();
    init_foreign_keys2();
    init_unique_constraint2();
    SQLiteColumnBuilder = class extends ColumnBuilder {
      constructor() {
        super(...arguments);
        __publicField(this, "foreignKeyConfigs", []);
      }
      references(ref, actions = {}) {
        this.foreignKeyConfigs.push({ ref, actions });
        return this;
      }
      unique(name2) {
        this.config.isUnique = true;
        this.config.uniqueName = name2;
        return this;
      }
      /** @internal */
      buildForeignKeys(column4, table4) {
        return this.foreignKeyConfigs.map(({ ref, actions }) => {
          return ((ref2, actions2) => {
            const builder = new ForeignKeyBuilder2(() => {
              const foreignColumn = ref2();
              return { columns: [column4], foreignColumns: [foreignColumn] };
            });
            if (actions2.onUpdate) {
              builder.onUpdate(actions2.onUpdate);
            }
            if (actions2.onDelete) {
              builder.onDelete(actions2.onDelete);
            }
            return builder.build(table4);
          })(ref, actions);
        });
      }
    };
    _a142 = entityKind;
    __publicField(SQLiteColumnBuilder, _a142, "SQLiteColumnBuilder");
    SQLiteColumn = class extends Column {
      constructor(table4, config) {
        if (!config.uniqueName) {
          config.uniqueName = uniqueKeyName2(table4, [config.name]);
        }
        super(table4, config);
        this.table = table4;
      }
    };
    _a143 = entityKind;
    __publicField(SQLiteColumn, _a143, "SQLiteColumn");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/columns/blob.js
var _a144, SQLiteBigIntBuilder, _a145, SQLiteBigInt, _a146, SQLiteBlobJsonBuilder, _a147, SQLiteBlobJson, _a148, SQLiteBlobBufferBuilder, _a149, SQLiteBlobBuffer;
var init_blob = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/columns/blob.js"() {
    "use strict";
    init_entity();
    init_common3();
    SQLiteBigIntBuilder = class extends SQLiteColumnBuilder {
      constructor(name2) {
        super(name2, "bigint", "SQLiteBigInt");
      }
      /** @internal */
      build(table4) {
        return new SQLiteBigInt(table4, this.config);
      }
    };
    _a144 = entityKind;
    __publicField(SQLiteBigIntBuilder, _a144, "SQLiteBigIntBuilder");
    SQLiteBigInt = class extends SQLiteColumn {
      getSQLType() {
        return "blob";
      }
      mapFromDriverValue(value) {
        return BigInt(value.toString());
      }
      mapToDriverValue(value) {
        return Buffer.from(value.toString());
      }
    };
    _a145 = entityKind;
    __publicField(SQLiteBigInt, _a145, "SQLiteBigInt");
    SQLiteBlobJsonBuilder = class extends SQLiteColumnBuilder {
      constructor(name2) {
        super(name2, "json", "SQLiteBlobJson");
      }
      /** @internal */
      build(table4) {
        return new SQLiteBlobJson(
          table4,
          this.config
        );
      }
    };
    _a146 = entityKind;
    __publicField(SQLiteBlobJsonBuilder, _a146, "SQLiteBlobJsonBuilder");
    SQLiteBlobJson = class extends SQLiteColumn {
      getSQLType() {
        return "blob";
      }
      mapFromDriverValue(value) {
        return JSON.parse(value.toString());
      }
      mapToDriverValue(value) {
        return Buffer.from(JSON.stringify(value));
      }
    };
    _a147 = entityKind;
    __publicField(SQLiteBlobJson, _a147, "SQLiteBlobJson");
    SQLiteBlobBufferBuilder = class extends SQLiteColumnBuilder {
      constructor(name2) {
        super(name2, "buffer", "SQLiteBlobBuffer");
      }
      /** @internal */
      build(table4) {
        return new SQLiteBlobBuffer(table4, this.config);
      }
    };
    _a148 = entityKind;
    __publicField(SQLiteBlobBufferBuilder, _a148, "SQLiteBlobBufferBuilder");
    SQLiteBlobBuffer = class extends SQLiteColumn {
      getSQLType() {
        return "blob";
      }
    };
    _a149 = entityKind;
    __publicField(SQLiteBlobBuffer, _a149, "SQLiteBlobBuffer");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/columns/custom.js
var _a150, SQLiteCustomColumnBuilder, _a151, SQLiteCustomColumn;
var init_custom2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/columns/custom.js"() {
    "use strict";
    init_entity();
    init_common3();
    SQLiteCustomColumnBuilder = class extends SQLiteColumnBuilder {
      constructor(name2, fieldConfig, customTypeParams) {
        super(name2, "custom", "SQLiteCustomColumn");
        this.config.fieldConfig = fieldConfig;
        this.config.customTypeParams = customTypeParams;
      }
      /** @internal */
      build(table4) {
        return new SQLiteCustomColumn(
          table4,
          this.config
        );
      }
    };
    _a150 = entityKind;
    __publicField(SQLiteCustomColumnBuilder, _a150, "SQLiteCustomColumnBuilder");
    SQLiteCustomColumn = class extends SQLiteColumn {
      constructor(table4, config) {
        super(table4, config);
        __publicField(this, "sqlName");
        __publicField(this, "mapTo");
        __publicField(this, "mapFrom");
        this.sqlName = config.customTypeParams.dataType(config.fieldConfig);
        this.mapTo = config.customTypeParams.toDriver;
        this.mapFrom = config.customTypeParams.fromDriver;
      }
      getSQLType() {
        return this.sqlName;
      }
      mapFromDriverValue(value) {
        return typeof this.mapFrom === "function" ? this.mapFrom(value) : value;
      }
      mapToDriverValue(value) {
        return typeof this.mapTo === "function" ? this.mapTo(value) : value;
      }
    };
    _a151 = entityKind;
    __publicField(SQLiteCustomColumn, _a151, "SQLiteCustomColumn");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/columns/integer.js
var _a152, SQLiteBaseIntegerBuilder, _a153, SQLiteBaseInteger, _a154, SQLiteIntegerBuilder, _a155, SQLiteInteger, _a156, SQLiteTimestampBuilder, _a157, SQLiteTimestamp, _a158, SQLiteBooleanBuilder, _a159, SQLiteBoolean;
var init_integer2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/columns/integer.js"() {
    "use strict";
    init_entity();
    init_sql();
    init_common3();
    SQLiteBaseIntegerBuilder = class extends SQLiteColumnBuilder {
      constructor(name2, dataType, columnType) {
        super(name2, dataType, columnType);
        this.config.autoIncrement = false;
      }
      primaryKey(config) {
        if (config?.autoIncrement) {
          this.config.autoIncrement = true;
        }
        this.config.hasDefault = true;
        return super.primaryKey();
      }
    };
    _a152 = entityKind;
    __publicField(SQLiteBaseIntegerBuilder, _a152, "SQLiteBaseIntegerBuilder");
    SQLiteBaseInteger = class extends SQLiteColumn {
      constructor() {
        super(...arguments);
        __publicField(this, "autoIncrement", this.config.autoIncrement);
      }
      getSQLType() {
        return "integer";
      }
    };
    _a153 = entityKind;
    __publicField(SQLiteBaseInteger, _a153, "SQLiteBaseInteger");
    SQLiteIntegerBuilder = class extends SQLiteBaseIntegerBuilder {
      constructor(name2) {
        super(name2, "number", "SQLiteInteger");
      }
      build(table4) {
        return new SQLiteInteger(
          table4,
          this.config
        );
      }
    };
    _a154 = entityKind;
    __publicField(SQLiteIntegerBuilder, _a154, "SQLiteIntegerBuilder");
    SQLiteInteger = class extends SQLiteBaseInteger {
    };
    _a155 = entityKind;
    __publicField(SQLiteInteger, _a155, "SQLiteInteger");
    SQLiteTimestampBuilder = class extends SQLiteBaseIntegerBuilder {
      constructor(name2, mode) {
        super(name2, "date", "SQLiteTimestamp");
        this.config.mode = mode;
      }
      /**
       * @deprecated Use `default()` with your own expression instead.
       *
       * Adds `DEFAULT (cast((julianday('now') - 2440587.5)*86400000 as integer))` to the column, which is the current epoch timestamp in milliseconds.
       */
      defaultNow() {
        return this.default(sql`(cast((julianday('now') - 2440587.5)*86400000 as integer))`);
      }
      build(table4) {
        return new SQLiteTimestamp(
          table4,
          this.config
        );
      }
    };
    _a156 = entityKind;
    __publicField(SQLiteTimestampBuilder, _a156, "SQLiteTimestampBuilder");
    SQLiteTimestamp = class extends SQLiteBaseInteger {
      constructor() {
        super(...arguments);
        __publicField(this, "mode", this.config.mode);
      }
      mapFromDriverValue(value) {
        if (this.config.mode === "timestamp") {
          return new Date(value * 1e3);
        }
        return new Date(value);
      }
      mapToDriverValue(value) {
        const unix = value.getTime();
        if (this.config.mode === "timestamp") {
          return Math.floor(unix / 1e3);
        }
        return unix;
      }
    };
    _a157 = entityKind;
    __publicField(SQLiteTimestamp, _a157, "SQLiteTimestamp");
    SQLiteBooleanBuilder = class extends SQLiteBaseIntegerBuilder {
      constructor(name2, mode) {
        super(name2, "boolean", "SQLiteBoolean");
        this.config.mode = mode;
      }
      build(table4) {
        return new SQLiteBoolean(
          table4,
          this.config
        );
      }
    };
    _a158 = entityKind;
    __publicField(SQLiteBooleanBuilder, _a158, "SQLiteBooleanBuilder");
    SQLiteBoolean = class extends SQLiteBaseInteger {
      constructor() {
        super(...arguments);
        __publicField(this, "mode", this.config.mode);
      }
      mapFromDriverValue(value) {
        return Number(value) === 1;
      }
      mapToDriverValue(value) {
        return value ? 1 : 0;
      }
    };
    _a159 = entityKind;
    __publicField(SQLiteBoolean, _a159, "SQLiteBoolean");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/columns/numeric.js
var _a160, SQLiteNumericBuilder, _a161, SQLiteNumeric;
var init_numeric2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/columns/numeric.js"() {
    "use strict";
    init_entity();
    init_common3();
    SQLiteNumericBuilder = class extends SQLiteColumnBuilder {
      constructor(name2) {
        super(name2, "string", "SQLiteNumeric");
      }
      /** @internal */
      build(table4) {
        return new SQLiteNumeric(
          table4,
          this.config
        );
      }
    };
    _a160 = entityKind;
    __publicField(SQLiteNumericBuilder, _a160, "SQLiteNumericBuilder");
    SQLiteNumeric = class extends SQLiteColumn {
      getSQLType() {
        return "numeric";
      }
    };
    _a161 = entityKind;
    __publicField(SQLiteNumeric, _a161, "SQLiteNumeric");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/columns/real.js
var _a162, SQLiteRealBuilder, _a163, SQLiteReal;
var init_real2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/columns/real.js"() {
    "use strict";
    init_entity();
    init_common3();
    SQLiteRealBuilder = class extends SQLiteColumnBuilder {
      constructor(name2) {
        super(name2, "number", "SQLiteReal");
      }
      /** @internal */
      build(table4) {
        return new SQLiteReal(table4, this.config);
      }
    };
    _a162 = entityKind;
    __publicField(SQLiteRealBuilder, _a162, "SQLiteRealBuilder");
    SQLiteReal = class extends SQLiteColumn {
      getSQLType() {
        return "real";
      }
    };
    _a163 = entityKind;
    __publicField(SQLiteReal, _a163, "SQLiteReal");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/columns/text.js
var _a164, SQLiteTextBuilder, _a165, SQLiteText, _a166, SQLiteTextJsonBuilder, _a167, SQLiteTextJson;
var init_text2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/columns/text.js"() {
    "use strict";
    init_entity();
    init_common3();
    SQLiteTextBuilder = class extends SQLiteColumnBuilder {
      constructor(name2, config) {
        super(name2, "string", "SQLiteText");
        this.config.enumValues = config.enum;
        this.config.length = config.length;
      }
      /** @internal */
      build(table4) {
        return new SQLiteText(table4, this.config);
      }
    };
    _a164 = entityKind;
    __publicField(SQLiteTextBuilder, _a164, "SQLiteTextBuilder");
    SQLiteText = class extends SQLiteColumn {
      constructor(table4, config) {
        super(table4, config);
        __publicField(this, "enumValues", this.config.enumValues);
        __publicField(this, "length", this.config.length);
      }
      getSQLType() {
        return `text${this.config.length ? `(${this.config.length})` : ""}`;
      }
    };
    _a165 = entityKind;
    __publicField(SQLiteText, _a165, "SQLiteText");
    SQLiteTextJsonBuilder = class extends SQLiteColumnBuilder {
      constructor(name2) {
        super(name2, "json", "SQLiteTextJson");
      }
      /** @internal */
      build(table4) {
        return new SQLiteTextJson(
          table4,
          this.config
        );
      }
    };
    _a166 = entityKind;
    __publicField(SQLiteTextJsonBuilder, _a166, "SQLiteTextJsonBuilder");
    SQLiteTextJson = class extends SQLiteColumn {
      getSQLType() {
        return "text";
      }
      mapFromDriverValue(value) {
        return JSON.parse(value);
      }
      mapToDriverValue(value) {
        return JSON.stringify(value);
      }
    };
    _a167 = entityKind;
    __publicField(SQLiteTextJson, _a167, "SQLiteTextJson");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/columns/index.js
var init_columns2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/columns/index.js"() {
    "use strict";
    init_blob();
    init_common3();
    init_custom2();
    init_integer2();
    init_numeric2();
    init_real2();
    init_text2();
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/query-builders/delete.js
var _a168, SQLiteDeleteBase;
var init_delete2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/query-builders/delete.js"() {
    "use strict";
    init_entity();
    init_query_promise();
    init_table3();
    init_utils();
    SQLiteDeleteBase = class extends QueryPromise {
      constructor(table4, session, dialect7, withList) {
        super();
        /** @internal */
        __publicField(this, "config");
        __publicField(this, "run", (placeholderValues) => {
          return this._prepare().run(placeholderValues);
        });
        __publicField(this, "all", (placeholderValues) => {
          return this._prepare().all(placeholderValues);
        });
        __publicField(this, "get", (placeholderValues) => {
          return this._prepare().get(placeholderValues);
        });
        __publicField(this, "values", (placeholderValues) => {
          return this._prepare().values(placeholderValues);
        });
        this.table = table4;
        this.session = session;
        this.dialect = dialect7;
        this.config = { table: table4, withList };
      }
      /**
       * Adds a `where` clause to the query.
       *
       * Calling this method will delete only those rows that fulfill a specified condition.
       *
       * See docs: {@link https://orm.drizzle.team/docs/delete}
       *
       * @param where the `where` clause.
       *
       * @example
       * You can use conditional operators and `sql function` to filter the rows to be deleted.
       *
       * ```ts
       * // Delete all cars with green color
       * db.delete(cars).where(eq(cars.color, 'green'));
       * // or
       * db.delete(cars).where(sql`${cars.color} = 'green'`)
       * ```
       *
       * You can logically combine conditional operators with `and()` and `or()` operators:
       *
       * ```ts
       * // Delete all BMW cars with a green color
       * db.delete(cars).where(and(eq(cars.color, 'green'), eq(cars.brand, 'BMW')));
       *
       * // Delete all cars with the green or blue color
       * db.delete(cars).where(or(eq(cars.color, 'green'), eq(cars.color, 'blue')));
       * ```
       */
      where(where) {
        this.config.where = where;
        return this;
      }
      returning(fields = this.table[SQLiteTable.Symbol.Columns]) {
        this.config.returning = orderSelectedFields(fields);
        return this;
      }
      /** @internal */
      getSQL() {
        return this.dialect.buildDeleteQuery(this.config);
      }
      toSQL() {
        const { typings: _typings, ...rest } = this.dialect.sqlToQuery(this.getSQL());
        return rest;
      }
      /** @internal */
      _prepare(isOneTimeQuery = true) {
        return this.session[isOneTimeQuery ? "prepareOneTimeQuery" : "prepareQuery"](
          this.dialect.sqlToQuery(this.getSQL()),
          this.config.returning,
          this.config.returning ? "all" : "run",
          true
        );
      }
      prepare() {
        return this._prepare(false);
      }
      async execute(placeholderValues) {
        return this._prepare().execute(placeholderValues);
      }
      $dynamic() {
        return this;
      }
    };
    _a168 = entityKind;
    __publicField(SQLiteDeleteBase, _a168, "SQLiteDelete");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/query-builders/insert.js
var _a169, SQLiteInsertBuilder, _a170, SQLiteInsertBase;
var init_insert2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/query-builders/insert.js"() {
    "use strict";
    init_entity();
    init_query_promise();
    init_sql();
    init_table3();
    init_table();
    init_utils();
    SQLiteInsertBuilder = class {
      constructor(table4, session, dialect7, withList) {
        this.table = table4;
        this.session = session;
        this.dialect = dialect7;
        this.withList = withList;
      }
      values(values) {
        values = Array.isArray(values) ? values : [values];
        if (values.length === 0) {
          throw new Error("values() must be called with at least one value");
        }
        const mappedValues = values.map((entry) => {
          const result = {};
          const cols = this.table[Table.Symbol.Columns];
          for (const colKey of Object.keys(entry)) {
            const colValue = entry[colKey];
            result[colKey] = is(colValue, SQL) ? colValue : new Param(colValue, cols[colKey]);
          }
          return result;
        });
        return new SQLiteInsertBase(this.table, mappedValues, this.session, this.dialect, this.withList);
      }
    };
    _a169 = entityKind;
    __publicField(SQLiteInsertBuilder, _a169, "SQLiteInsertBuilder");
    SQLiteInsertBase = class extends QueryPromise {
      constructor(table4, values, session, dialect7, withList) {
        super();
        /** @internal */
        __publicField(this, "config");
        __publicField(this, "run", (placeholderValues) => {
          return this._prepare().run(placeholderValues);
        });
        __publicField(this, "all", (placeholderValues) => {
          return this._prepare().all(placeholderValues);
        });
        __publicField(this, "get", (placeholderValues) => {
          return this._prepare().get(placeholderValues);
        });
        __publicField(this, "values", (placeholderValues) => {
          return this._prepare().values(placeholderValues);
        });
        this.session = session;
        this.dialect = dialect7;
        this.config = { table: table4, values, withList };
      }
      returning(fields = this.config.table[SQLiteTable.Symbol.Columns]) {
        this.config.returning = orderSelectedFields(fields);
        return this;
      }
      /**
       * Adds an `on conflict do nothing` clause to the query.
       *
       * Calling this method simply avoids inserting a row as its alternative action.
       *
       * See docs: {@link https://orm.drizzle.team/docs/insert#on-conflict-do-nothing}
       *
       * @param config The `target` and `where` clauses.
       *
       * @example
       * ```ts
       * // Insert one row and cancel the insert if there's a conflict
       * await db.insert(cars)
       *   .values({ id: 1, brand: 'BMW' })
       *   .onConflictDoNothing();
       *
       * // Explicitly specify conflict target
       * await db.insert(cars)
       *   .values({ id: 1, brand: 'BMW' })
       *   .onConflictDoNothing({ target: cars.id });
       * ```
       */
      onConflictDoNothing(config = {}) {
        if (config.target === void 0) {
          this.config.onConflict = sql`do nothing`;
        } else {
          const targetSql = Array.isArray(config.target) ? sql`${config.target}` : sql`${[config.target]}`;
          const whereSql = config.where ? sql` where ${config.where}` : sql``;
          this.config.onConflict = sql`${targetSql} do nothing${whereSql}`;
        }
        return this;
      }
      /**
       * Adds an `on conflict do update` clause to the query.
       *
       * Calling this method will update the existing row that conflicts with the row proposed for insertion as its alternative action.
       *
       * See docs: {@link https://orm.drizzle.team/docs/insert#upserts-and-conflicts}
       *
       * @param config The `target`, `set` and `where` clauses.
       *
       * @example
       * ```ts
       * // Update the row if there's a conflict
       * await db.insert(cars)
       *   .values({ id: 1, brand: 'BMW' })
       *   .onConflictDoUpdate({
       *     target: cars.id,
       *     set: { brand: 'Porsche' }
       *   });
       *
       * // Upsert with 'where' clause
       * await db.insert(cars)
       *   .values({ id: 1, brand: 'BMW' })
       *   .onConflictDoUpdate({
       *     target: cars.id,
       *     set: { brand: 'newBMW' },
       *     where: sql`${cars.createdAt} > '2023-01-01'::date`,
       *   });
       * ```
       */
      onConflictDoUpdate(config) {
        if (config.where && (config.targetWhere || config.setWhere)) {
          throw new Error(
            'You cannot use both "where" and "targetWhere"/"setWhere" at the same time - "where" is deprecated, use "targetWhere" or "setWhere" instead.'
          );
        }
        const whereSql = config.where ? sql` where ${config.where}` : void 0;
        const targetWhereSql = config.targetWhere ? sql` where ${config.targetWhere}` : void 0;
        const setWhereSql = config.setWhere ? sql` where ${config.setWhere}` : void 0;
        const targetSql = Array.isArray(config.target) ? sql`${config.target}` : sql`${[config.target]}`;
        const setSql = this.dialect.buildUpdateSet(this.config.table, mapUpdateSet(this.config.table, config.set));
        this.config.onConflict = sql`${targetSql}${targetWhereSql} do update set ${setSql}${whereSql}${setWhereSql}`;
        return this;
      }
      /** @internal */
      getSQL() {
        return this.dialect.buildInsertQuery(this.config);
      }
      toSQL() {
        const { typings: _typings, ...rest } = this.dialect.sqlToQuery(this.getSQL());
        return rest;
      }
      /** @internal */
      _prepare(isOneTimeQuery = true) {
        return this.session[isOneTimeQuery ? "prepareOneTimeQuery" : "prepareQuery"](
          this.dialect.sqlToQuery(this.getSQL()),
          this.config.returning,
          this.config.returning ? "all" : "run",
          true
        );
      }
      prepare() {
        return this._prepare(false);
      }
      async execute() {
        return this.config.returning ? this.all() : this.run();
      }
      $dynamic() {
        return this;
      }
    };
    _a170 = entityKind;
    __publicField(SQLiteInsertBase, _a170, "SQLiteInsert");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/view-base.js
var _a171, SQLiteViewBase;
var init_view_base2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/view-base.js"() {
    "use strict";
    init_entity();
    init_sql();
    SQLiteViewBase = class extends View {
    };
    _a171 = entityKind;
    __publicField(SQLiteViewBase, _a171, "SQLiteViewBase");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/dialect.js
var _a172, SQLiteDialect, _a173, SQLiteSyncDialect, _a174, SQLiteAsyncDialect;
var init_dialect2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/dialect.js"() {
    "use strict";
    init_alias();
    init_column();
    init_entity();
    init_errors();
    init_relations();
    init_sql2();
    init_sql();
    init_columns2();
    init_table3();
    init_subquery();
    init_table();
    init_utils();
    init_view_common();
    init_view_base2();
    SQLiteDialect = class {
      escapeName(name2) {
        return `"${name2}"`;
      }
      escapeParam(_num) {
        return "?";
      }
      escapeString(str) {
        return `'${str.replace(/'/g, "''")}'`;
      }
      buildWithCTE(queries) {
        if (!queries?.length)
          return void 0;
        const withSqlChunks = [sql`with `];
        for (const [i, w] of queries.entries()) {
          withSqlChunks.push(sql`${sql.identifier(w._.alias)} as (${w._.sql})`);
          if (i < queries.length - 1) {
            withSqlChunks.push(sql`, `);
          }
        }
        withSqlChunks.push(sql` `);
        return sql.join(withSqlChunks);
      }
      buildDeleteQuery({ table: table4, where, returning, withList }) {
        const withSql = this.buildWithCTE(withList);
        const returningSql = returning ? sql` returning ${this.buildSelection(returning, { isSingleTable: true })}` : void 0;
        const whereSql = where ? sql` where ${where}` : void 0;
        return sql`${withSql}delete from ${table4}${whereSql}${returningSql}`;
      }
      buildUpdateSet(table4, set) {
        const tableColumns = table4[Table.Symbol.Columns];
        const columnNames = Object.keys(tableColumns).filter(
          (colName) => set[colName] !== void 0 || tableColumns[colName]?.onUpdateFn !== void 0
        );
        const setSize = columnNames.length;
        return sql.join(columnNames.flatMap((colName, i) => {
          const col = tableColumns[colName];
          const value = set[colName] ?? sql.param(col.onUpdateFn(), col);
          const res = sql`${sql.identifier(col.name)} = ${value}`;
          if (i < setSize - 1) {
            return [res, sql.raw(", ")];
          }
          return [res];
        }));
      }
      buildUpdateQuery({ table: table4, set, where, returning, withList }) {
        const withSql = this.buildWithCTE(withList);
        const setSql = this.buildUpdateSet(table4, set);
        const returningSql = returning ? sql` returning ${this.buildSelection(returning, { isSingleTable: true })}` : void 0;
        const whereSql = where ? sql` where ${where}` : void 0;
        return sql`${withSql}update ${table4} set ${setSql}${whereSql}${returningSql}`;
      }
      /**
       * Builds selection SQL with provided fields/expressions
       *
       * Examples:
       *
       * `select <selection> from`
       *
       * `insert ... returning <selection>`
       *
       * If `isSingleTable` is true, then columns won't be prefixed with table name
       */
      buildSelection(fields, { isSingleTable = false } = {}) {
        const columnsLen = fields.length;
        const chunks = fields.flatMap(({ field }, i) => {
          const chunk = [];
          if (is(field, SQL.Aliased) && field.isSelectionField) {
            chunk.push(sql.identifier(field.fieldAlias));
          } else if (is(field, SQL.Aliased) || is(field, SQL)) {
            const query = is(field, SQL.Aliased) ? field.sql : field;
            if (isSingleTable) {
              chunk.push(
                new SQL(
                  query.queryChunks.map((c) => {
                    if (is(c, Column)) {
                      return sql.identifier(c.name);
                    }
                    return c;
                  })
                )
              );
            } else {
              chunk.push(query);
            }
            if (is(field, SQL.Aliased)) {
              chunk.push(sql` as ${sql.identifier(field.fieldAlias)}`);
            }
          } else if (is(field, Column)) {
            const tableName = field.table[Table.Symbol.Name];
            const columnName = field.name;
            if (isSingleTable) {
              chunk.push(sql.identifier(columnName));
            } else {
              chunk.push(sql`${sql.identifier(tableName)}.${sql.identifier(columnName)}`);
            }
          }
          if (i < columnsLen - 1) {
            chunk.push(sql`, `);
          }
          return chunk;
        });
        return sql.join(chunks);
      }
      buildSelectQuery({
        withList,
        fields,
        fieldsFlat,
        where,
        having,
        table: table4,
        joins,
        orderBy,
        groupBy,
        limit,
        offset,
        distinct,
        setOperators
      }) {
        const fieldsList = fieldsFlat ?? orderSelectedFields(fields);
        for (const f of fieldsList) {
          if (is(f.field, Column) && getTableName(f.field.table) !== (is(table4, Subquery) ? table4._.alias : is(table4, SQLiteViewBase) ? table4[ViewBaseConfig].name : is(table4, SQL) ? void 0 : getTableName(table4)) && !((table22) => joins?.some(
            ({ alias }) => alias === (table22[Table.Symbol.IsAlias] ? getTableName(table22) : table22[Table.Symbol.BaseName])
          ))(f.field.table)) {
            const tableName = getTableName(f.field.table);
            throw new Error(
              `Your "${f.path.join("->")}" field references a column "${tableName}"."${f.field.name}", but the table "${tableName}" is not part of the query! Did you forget to join it?`
            );
          }
        }
        const isSingleTable = !joins || joins.length === 0;
        const withSql = this.buildWithCTE(withList);
        const distinctSql = distinct ? sql` distinct` : void 0;
        const selection = this.buildSelection(fieldsList, { isSingleTable });
        const tableSql = (() => {
          if (is(table4, Table) && table4[Table.Symbol.OriginalName] !== table4[Table.Symbol.Name]) {
            return sql`${sql.identifier(table4[Table.Symbol.OriginalName])} ${sql.identifier(table4[Table.Symbol.Name])}`;
          }
          return table4;
        })();
        const joinsArray = [];
        if (joins) {
          for (const [index4, joinMeta] of joins.entries()) {
            if (index4 === 0) {
              joinsArray.push(sql` `);
            }
            const table22 = joinMeta.table;
            if (is(table22, SQLiteTable)) {
              const tableName = table22[SQLiteTable.Symbol.Name];
              const tableSchema = table22[SQLiteTable.Symbol.Schema];
              const origTableName = table22[SQLiteTable.Symbol.OriginalName];
              const alias = tableName === origTableName ? void 0 : joinMeta.alias;
              joinsArray.push(
                sql`${sql.raw(joinMeta.joinType)} join ${tableSchema ? sql`${sql.identifier(tableSchema)}.` : void 0}${sql.identifier(origTableName)}${alias && sql` ${sql.identifier(alias)}`} on ${joinMeta.on}`
              );
            } else {
              joinsArray.push(
                sql`${sql.raw(joinMeta.joinType)} join ${table22} on ${joinMeta.on}`
              );
            }
            if (index4 < joins.length - 1) {
              joinsArray.push(sql` `);
            }
          }
        }
        const joinsSql = sql.join(joinsArray);
        const whereSql = where ? sql` where ${where}` : void 0;
        const havingSql = having ? sql` having ${having}` : void 0;
        const orderByList = [];
        if (orderBy) {
          for (const [index4, orderByValue] of orderBy.entries()) {
            orderByList.push(orderByValue);
            if (index4 < orderBy.length - 1) {
              orderByList.push(sql`, `);
            }
          }
        }
        const groupByList = [];
        if (groupBy) {
          for (const [index4, groupByValue] of groupBy.entries()) {
            groupByList.push(groupByValue);
            if (index4 < groupBy.length - 1) {
              groupByList.push(sql`, `);
            }
          }
        }
        const groupBySql = groupByList.length > 0 ? sql` group by ${sql.join(groupByList)}` : void 0;
        const orderBySql = orderByList.length > 0 ? sql` order by ${sql.join(orderByList)}` : void 0;
        const limitSql = limit ? sql` limit ${limit}` : void 0;
        const offsetSql = offset ? sql` offset ${offset}` : void 0;
        const finalQuery = sql`${withSql}select${distinctSql} ${selection} from ${tableSql}${joinsSql}${whereSql}${groupBySql}${havingSql}${orderBySql}${limitSql}${offsetSql}`;
        if (setOperators.length > 0) {
          return this.buildSetOperations(finalQuery, setOperators);
        }
        return finalQuery;
      }
      buildSetOperations(leftSelect, setOperators) {
        const [setOperator, ...rest] = setOperators;
        if (!setOperator) {
          throw new Error("Cannot pass undefined values to any set operator");
        }
        if (rest.length === 0) {
          return this.buildSetOperationQuery({ leftSelect, setOperator });
        }
        return this.buildSetOperations(
          this.buildSetOperationQuery({ leftSelect, setOperator }),
          rest
        );
      }
      buildSetOperationQuery({
        leftSelect,
        setOperator: { type, isAll, rightSelect, limit, orderBy, offset }
      }) {
        const leftChunk = sql`${leftSelect.getSQL()} `;
        const rightChunk = sql`${rightSelect.getSQL()}`;
        let orderBySql;
        if (orderBy && orderBy.length > 0) {
          const orderByValues = [];
          for (const singleOrderBy of orderBy) {
            if (is(singleOrderBy, SQLiteColumn)) {
              orderByValues.push(sql.identifier(singleOrderBy.name));
            } else if (is(singleOrderBy, SQL)) {
              for (let i = 0; i < singleOrderBy.queryChunks.length; i++) {
                const chunk = singleOrderBy.queryChunks[i];
                if (is(chunk, SQLiteColumn)) {
                  singleOrderBy.queryChunks[i] = sql.identifier(chunk.name);
                }
              }
              orderByValues.push(sql`${singleOrderBy}`);
            } else {
              orderByValues.push(sql`${singleOrderBy}`);
            }
          }
          orderBySql = sql` order by ${sql.join(orderByValues, sql`, `)}`;
        }
        const limitSql = limit ? sql` limit ${limit}` : void 0;
        const operatorChunk = sql.raw(`${type} ${isAll ? "all " : ""}`);
        const offsetSql = offset ? sql` offset ${offset}` : void 0;
        return sql`${leftChunk}${operatorChunk}${rightChunk}${orderBySql}${limitSql}${offsetSql}`;
      }
      buildInsertQuery({ table: table4, values, onConflict, returning, withList }) {
        const valuesSqlList = [];
        const columns = table4[Table.Symbol.Columns];
        const colEntries = Object.entries(columns);
        const insertOrder = colEntries.map(([, column4]) => sql.identifier(column4.name));
        for (const [valueIndex, value] of values.entries()) {
          const valueList = [];
          for (const [fieldName, col] of colEntries) {
            const colValue = value[fieldName];
            if (colValue === void 0 || is(colValue, Param) && colValue.value === void 0) {
              let defaultValue;
              if (col.default !== null && col.default !== void 0) {
                defaultValue = is(col.default, SQL) ? col.default : sql.param(col.default, col);
              } else if (col.defaultFn !== void 0) {
                const defaultFnResult = col.defaultFn();
                defaultValue = is(defaultFnResult, SQL) ? defaultFnResult : sql.param(defaultFnResult, col);
              } else if (!col.default && col.onUpdateFn !== void 0) {
                const onUpdateFnResult = col.onUpdateFn();
                defaultValue = is(onUpdateFnResult, SQL) ? onUpdateFnResult : sql.param(onUpdateFnResult, col);
              } else {
                defaultValue = sql`null`;
              }
              valueList.push(defaultValue);
            } else {
              valueList.push(colValue);
            }
          }
          valuesSqlList.push(valueList);
          if (valueIndex < values.length - 1) {
            valuesSqlList.push(sql`, `);
          }
        }
        const withSql = this.buildWithCTE(withList);
        const valuesSql = sql.join(valuesSqlList);
        const returningSql = returning ? sql` returning ${this.buildSelection(returning, { isSingleTable: true })}` : void 0;
        const onConflictSql = onConflict ? sql` on conflict ${onConflict}` : void 0;
        return sql`${withSql}insert into ${table4} ${insertOrder} values ${valuesSql}${onConflictSql}${returningSql}`;
      }
      sqlToQuery(sql2) {
        return sql2.toQuery({
          escapeName: this.escapeName,
          escapeParam: this.escapeParam,
          escapeString: this.escapeString
        });
      }
      buildRelationalQuery({
        fullSchema,
        schema: schema4,
        tableNamesMap,
        table: table4,
        tableConfig,
        queryConfig: config,
        tableAlias,
        nestedQueryRelation,
        joinOn
      }) {
        let selection = [];
        let limit, offset, orderBy = [], where;
        const joins = [];
        if (config === true) {
          const selectionEntries = Object.entries(tableConfig.columns);
          selection = selectionEntries.map(([key, value]) => ({
            dbKey: value.name,
            tsKey: key,
            field: aliasedTableColumn(value, tableAlias),
            relationTableTsKey: void 0,
            isJson: false,
            selection: []
          }));
        } else {
          const aliasedColumns = Object.fromEntries(
            Object.entries(tableConfig.columns).map(([key, value]) => [key, aliasedTableColumn(value, tableAlias)])
          );
          if (config.where) {
            const whereSql = typeof config.where === "function" ? config.where(aliasedColumns, getOperators()) : config.where;
            where = whereSql && mapColumnsInSQLToAlias(whereSql, tableAlias);
          }
          const fieldsSelection = [];
          let selectedColumns = [];
          if (config.columns) {
            let isIncludeMode = false;
            for (const [field, value] of Object.entries(config.columns)) {
              if (value === void 0) {
                continue;
              }
              if (field in tableConfig.columns) {
                if (!isIncludeMode && value === true) {
                  isIncludeMode = true;
                }
                selectedColumns.push(field);
              }
            }
            if (selectedColumns.length > 0) {
              selectedColumns = isIncludeMode ? selectedColumns.filter((c) => config.columns?.[c] === true) : Object.keys(tableConfig.columns).filter((key) => !selectedColumns.includes(key));
            }
          } else {
            selectedColumns = Object.keys(tableConfig.columns);
          }
          for (const field of selectedColumns) {
            const column4 = tableConfig.columns[field];
            fieldsSelection.push({ tsKey: field, value: column4 });
          }
          let selectedRelations = [];
          if (config.with) {
            selectedRelations = Object.entries(config.with).filter((entry) => !!entry[1]).map(([tsKey, queryConfig]) => ({ tsKey, queryConfig, relation: tableConfig.relations[tsKey] }));
          }
          let extras;
          if (config.extras) {
            extras = typeof config.extras === "function" ? config.extras(aliasedColumns, { sql }) : config.extras;
            for (const [tsKey, value] of Object.entries(extras)) {
              fieldsSelection.push({
                tsKey,
                value: mapColumnsInAliasedSQLToAlias(value, tableAlias)
              });
            }
          }
          for (const { tsKey, value } of fieldsSelection) {
            selection.push({
              dbKey: is(value, SQL.Aliased) ? value.fieldAlias : tableConfig.columns[tsKey].name,
              tsKey,
              field: is(value, Column) ? aliasedTableColumn(value, tableAlias) : value,
              relationTableTsKey: void 0,
              isJson: false,
              selection: []
            });
          }
          let orderByOrig = typeof config.orderBy === "function" ? config.orderBy(aliasedColumns, getOrderByOperators()) : config.orderBy ?? [];
          if (!Array.isArray(orderByOrig)) {
            orderByOrig = [orderByOrig];
          }
          orderBy = orderByOrig.map((orderByValue) => {
            if (is(orderByValue, Column)) {
              return aliasedTableColumn(orderByValue, tableAlias);
            }
            return mapColumnsInSQLToAlias(orderByValue, tableAlias);
          });
          limit = config.limit;
          offset = config.offset;
          for (const {
            tsKey: selectedRelationTsKey,
            queryConfig: selectedRelationConfigValue,
            relation
          } of selectedRelations) {
            const normalizedRelation = normalizeRelation(schema4, tableNamesMap, relation);
            const relationTableName = relation.referencedTable[Table.Symbol.Name];
            const relationTableTsName = tableNamesMap[relationTableName];
            const relationTableAlias = `${tableAlias}_${selectedRelationTsKey}`;
            const joinOn2 = and(
              ...normalizedRelation.fields.map(
                (field2, i) => eq(
                  aliasedTableColumn(normalizedRelation.references[i], relationTableAlias),
                  aliasedTableColumn(field2, tableAlias)
                )
              )
            );
            const builtRelation = this.buildRelationalQuery({
              fullSchema,
              schema: schema4,
              tableNamesMap,
              table: fullSchema[relationTableTsName],
              tableConfig: schema4[relationTableTsName],
              queryConfig: is(relation, One) ? selectedRelationConfigValue === true ? { limit: 1 } : { ...selectedRelationConfigValue, limit: 1 } : selectedRelationConfigValue,
              tableAlias: relationTableAlias,
              joinOn: joinOn2,
              nestedQueryRelation: relation
            });
            const field = sql`(${builtRelation.sql})`.as(selectedRelationTsKey);
            selection.push({
              dbKey: selectedRelationTsKey,
              tsKey: selectedRelationTsKey,
              field,
              relationTableTsKey: relationTableTsName,
              isJson: true,
              selection: builtRelation.selection
            });
          }
        }
        if (selection.length === 0) {
          throw new DrizzleError({
            message: `No fields selected for table "${tableConfig.tsName}" ("${tableAlias}"). You need to have at least one item in "columns", "with" or "extras". If you need to select all columns, omit the "columns" key or set it to undefined.`
          });
        }
        let result;
        where = and(joinOn, where);
        if (nestedQueryRelation) {
          let field = sql`json_array(${sql.join(
            selection.map(
              ({ field: field2 }) => is(field2, SQLiteColumn) ? sql.identifier(field2.name) : is(field2, SQL.Aliased) ? field2.sql : field2
            ),
            sql`, `
          )})`;
          if (is(nestedQueryRelation, Many)) {
            field = sql`coalesce(json_group_array(${field}), json_array())`;
          }
          const nestedSelection = [{
            dbKey: "data",
            tsKey: "data",
            field: field.as("data"),
            isJson: true,
            relationTableTsKey: tableConfig.tsName,
            selection
          }];
          const needsSubquery = limit !== void 0 || offset !== void 0 || orderBy.length > 0;
          if (needsSubquery) {
            result = this.buildSelectQuery({
              table: aliasedTable(table4, tableAlias),
              fields: {},
              fieldsFlat: [
                {
                  path: [],
                  field: sql.raw("*")
                }
              ],
              where,
              limit,
              offset,
              orderBy,
              setOperators: []
            });
            where = void 0;
            limit = void 0;
            offset = void 0;
            orderBy = void 0;
          } else {
            result = aliasedTable(table4, tableAlias);
          }
          result = this.buildSelectQuery({
            table: is(result, SQLiteTable) ? result : new Subquery(result, {}, tableAlias),
            fields: {},
            fieldsFlat: nestedSelection.map(({ field: field2 }) => ({
              path: [],
              field: is(field2, Column) ? aliasedTableColumn(field2, tableAlias) : field2
            })),
            joins,
            where,
            limit,
            offset,
            orderBy,
            setOperators: []
          });
        } else {
          result = this.buildSelectQuery({
            table: aliasedTable(table4, tableAlias),
            fields: {},
            fieldsFlat: selection.map(({ field }) => ({
              path: [],
              field: is(field, Column) ? aliasedTableColumn(field, tableAlias) : field
            })),
            joins,
            where,
            limit,
            offset,
            orderBy,
            setOperators: []
          });
        }
        return {
          tableTsKey: tableConfig.tsName,
          sql: result,
          selection
        };
      }
    };
    _a172 = entityKind;
    __publicField(SQLiteDialect, _a172, "SQLiteDialect");
    SQLiteSyncDialect = class extends SQLiteDialect {
      migrate(migrations, session, config) {
        const migrationsTable = config === void 0 ? "__drizzle_migrations" : typeof config === "string" ? "__drizzle_migrations" : config.migrationsTable ?? "__drizzle_migrations";
        const migrationTableCreate = sql`
			CREATE TABLE IF NOT EXISTS ${sql.identifier(migrationsTable)} (
				id SERIAL PRIMARY KEY,
				hash text NOT NULL,
				created_at numeric
			)
		`;
        session.run(migrationTableCreate);
        const dbMigrations = session.values(
          sql`SELECT id, hash, created_at FROM ${sql.identifier(migrationsTable)} ORDER BY created_at DESC LIMIT 1`
        );
        const lastDbMigration = dbMigrations[0] ?? void 0;
        session.run(sql`BEGIN`);
        try {
          for (const migration of migrations) {
            if (!lastDbMigration || Number(lastDbMigration[2]) < migration.folderMillis) {
              for (const stmt of migration.sql) {
                session.run(sql.raw(stmt));
              }
              session.run(
                sql`INSERT INTO ${sql.identifier(migrationsTable)} ("hash", "created_at") VALUES(${migration.hash}, ${migration.folderMillis})`
              );
            }
          }
          session.run(sql`COMMIT`);
        } catch (e) {
          session.run(sql`ROLLBACK`);
          throw e;
        }
      }
    };
    _a173 = entityKind;
    __publicField(SQLiteSyncDialect, _a173, "SQLiteSyncDialect");
    SQLiteAsyncDialect = class extends SQLiteDialect {
      async migrate(migrations, session, config) {
        const migrationsTable = config === void 0 ? "__drizzle_migrations" : typeof config === "string" ? "__drizzle_migrations" : config.migrationsTable ?? "__drizzle_migrations";
        const migrationTableCreate = sql`
			CREATE TABLE IF NOT EXISTS ${sql.identifier(migrationsTable)} (
				id SERIAL PRIMARY KEY,
				hash text NOT NULL,
				created_at numeric
			)
		`;
        await session.run(migrationTableCreate);
        const dbMigrations = await session.values(
          sql`SELECT id, hash, created_at FROM ${sql.identifier(migrationsTable)} ORDER BY created_at DESC LIMIT 1`
        );
        const lastDbMigration = dbMigrations[0] ?? void 0;
        await session.transaction(async (tx) => {
          for (const migration of migrations) {
            if (!lastDbMigration || Number(lastDbMigration[2]) < migration.folderMillis) {
              for (const stmt of migration.sql) {
                await tx.run(sql.raw(stmt));
              }
              await tx.run(
                sql`INSERT INTO ${sql.identifier(migrationsTable)} ("hash", "created_at") VALUES(${migration.hash}, ${migration.folderMillis})`
              );
            }
          }
        });
      }
    };
    _a174 = entityKind;
    __publicField(SQLiteAsyncDialect, _a174, "SQLiteAsyncDialect");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/query-builders/select.js
function createSetOperator2(type, isAll) {
  return (leftSelect, rightSelect, ...restSelects) => {
    const setOperators = [rightSelect, ...restSelects].map((select) => ({
      type,
      isAll,
      rightSelect: select
    }));
    for (const setOperator of setOperators) {
      if (!haveSameKeys(leftSelect.getSelectedFields(), setOperator.rightSelect.getSelectedFields())) {
        throw new Error(
          "Set operator error (union / intersect / except): selected fields are not the same or are in a different order"
        );
      }
    }
    return leftSelect.addSetOperators(setOperators);
  };
}
var _a175, SQLiteSelectBuilder, _a176, SQLiteSelectQueryBuilderBase, _a177, SQLiteSelectBase, getSQLiteSetOperators, union14, unionAll2, intersect2, except2;
var init_select3 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/query-builders/select.js"() {
    "use strict";
    init_entity();
    init_query_builder();
    init_query_promise();
    init_selection_proxy();
    init_sql();
    init_subquery();
    init_table();
    init_utils();
    init_view_common();
    init_view_base2();
    SQLiteSelectBuilder = class {
      constructor(config) {
        __publicField(this, "fields");
        __publicField(this, "session");
        __publicField(this, "dialect");
        __publicField(this, "withList");
        __publicField(this, "distinct");
        this.fields = config.fields;
        this.session = config.session;
        this.dialect = config.dialect;
        this.withList = config.withList;
        this.distinct = config.distinct;
      }
      from(source) {
        const isPartialSelect = !!this.fields;
        let fields;
        if (this.fields) {
          fields = this.fields;
        } else if (is(source, Subquery)) {
          fields = Object.fromEntries(
            Object.keys(source._.selectedFields).map((key) => [key, source[key]])
          );
        } else if (is(source, SQLiteViewBase)) {
          fields = source[ViewBaseConfig].selectedFields;
        } else if (is(source, SQL)) {
          fields = {};
        } else {
          fields = getTableColumns(source);
        }
        return new SQLiteSelectBase({
          table: source,
          fields,
          isPartialSelect,
          session: this.session,
          dialect: this.dialect,
          withList: this.withList,
          distinct: this.distinct
        });
      }
    };
    _a175 = entityKind;
    __publicField(SQLiteSelectBuilder, _a175, "SQLiteSelectBuilder");
    SQLiteSelectQueryBuilderBase = class extends TypedQueryBuilder {
      constructor({ table: table4, fields, isPartialSelect, session, dialect: dialect7, withList, distinct }) {
        super();
        __publicField(this, "_");
        /** @internal */
        __publicField(this, "config");
        __publicField(this, "joinsNotNullableMap");
        __publicField(this, "tableName");
        __publicField(this, "isPartialSelect");
        __publicField(this, "session");
        __publicField(this, "dialect");
        /**
         * Executes a `left join` operation by adding another table to the current query.
         *
         * Calling this method associates each row of the table with the corresponding row from the joined table, if a match is found. If no matching row exists, it sets all columns of the joined table to null.
         *
         * See docs: {@link https://orm.drizzle.team/docs/joins#left-join}
         *
         * @param table the table to join.
         * @param on the `on` clause.
         *
         * @example
         *
         * ```ts
         * // Select all users and their pets
         * const usersWithPets: { user: User; pets: Pet | null }[] = await db.select()
         *   .from(users)
         *   .leftJoin(pets, eq(users.id, pets.ownerId))
         *
         * // Select userId and petId
         * const usersIdsAndPetIds: { userId: number; petId: number | null }[] = await db.select({
         *   userId: users.id,
         *   petId: pets.id,
         * })
         *   .from(users)
         *   .leftJoin(pets, eq(users.id, pets.ownerId))
         * ```
         */
        __publicField(this, "leftJoin", this.createJoin("left"));
        /**
         * Executes a `right join` operation by adding another table to the current query.
         *
         * Calling this method associates each row of the joined table with the corresponding row from the main table, if a match is found. If no matching row exists, it sets all columns of the main table to null.
         *
         * See docs: {@link https://orm.drizzle.team/docs/joins#right-join}
         *
         * @param table the table to join.
         * @param on the `on` clause.
         *
         * @example
         *
         * ```ts
         * // Select all users and their pets
         * const usersWithPets: { user: User | null; pets: Pet }[] = await db.select()
         *   .from(users)
         *   .rightJoin(pets, eq(users.id, pets.ownerId))
         *
         * // Select userId and petId
         * const usersIdsAndPetIds: { userId: number | null; petId: number }[] = await db.select({
         *   userId: users.id,
         *   petId: pets.id,
         * })
         *   .from(users)
         *   .rightJoin(pets, eq(users.id, pets.ownerId))
         * ```
         */
        __publicField(this, "rightJoin", this.createJoin("right"));
        /**
         * Executes an `inner join` operation, creating a new table by combining rows from two tables that have matching values.
         *
         * Calling this method retrieves rows that have corresponding entries in both joined tables. Rows without matching entries in either table are excluded, resulting in a table that includes only matching pairs.
         *
         * See docs: {@link https://orm.drizzle.team/docs/joins#inner-join}
         *
         * @param table the table to join.
         * @param on the `on` clause.
         *
         * @example
         *
         * ```ts
         * // Select all users and their pets
         * const usersWithPets: { user: User; pets: Pet }[] = await db.select()
         *   .from(users)
         *   .innerJoin(pets, eq(users.id, pets.ownerId))
         *
         * // Select userId and petId
         * const usersIdsAndPetIds: { userId: number; petId: number }[] = await db.select({
         *   userId: users.id,
         *   petId: pets.id,
         * })
         *   .from(users)
         *   .innerJoin(pets, eq(users.id, pets.ownerId))
         * ```
         */
        __publicField(this, "innerJoin", this.createJoin("inner"));
        /**
         * Executes a `full join` operation by combining rows from two tables into a new table.
         *
         * Calling this method retrieves all rows from both main and joined tables, merging rows with matching values and filling in `null` for non-matching columns.
         *
         * See docs: {@link https://orm.drizzle.team/docs/joins#full-join}
         *
         * @param table the table to join.
         * @param on the `on` clause.
         *
         * @example
         *
         * ```ts
         * // Select all users and their pets
         * const usersWithPets: { user: User | null; pets: Pet | null }[] = await db.select()
         *   .from(users)
         *   .fullJoin(pets, eq(users.id, pets.ownerId))
         *
         * // Select userId and petId
         * const usersIdsAndPetIds: { userId: number | null; petId: number | null }[] = await db.select({
         *   userId: users.id,
         *   petId: pets.id,
         * })
         *   .from(users)
         *   .fullJoin(pets, eq(users.id, pets.ownerId))
         * ```
         */
        __publicField(this, "fullJoin", this.createJoin("full"));
        /**
         * Adds `union` set operator to the query.
         *
         * Calling this method will combine the result sets of the `select` statements and remove any duplicate rows that appear across them.
         *
         * See docs: {@link https://orm.drizzle.team/docs/set-operations#union}
         *
         * @example
         *
         * ```ts
         * // Select all unique names from customers and users tables
         * await db.select({ name: users.name })
         *   .from(users)
         *   .union(
         *     db.select({ name: customers.name }).from(customers)
         *   );
         * // or
         * import { union } from 'drizzle-orm/sqlite-core'
         *
         * await union(
         *   db.select({ name: users.name }).from(users),
         *   db.select({ name: customers.name }).from(customers)
         * );
         * ```
         */
        __publicField(this, "union", this.createSetOperator("union", false));
        /**
         * Adds `union all` set operator to the query.
         *
         * Calling this method will combine the result-set of the `select` statements and keep all duplicate rows that appear across them.
         *
         * See docs: {@link https://orm.drizzle.team/docs/set-operations#union-all}
         *
         * @example
         *
         * ```ts
         * // Select all transaction ids from both online and in-store sales
         * await db.select({ transaction: onlineSales.transactionId })
         *   .from(onlineSales)
         *   .unionAll(
         *     db.select({ transaction: inStoreSales.transactionId }).from(inStoreSales)
         *   );
         * // or
         * import { unionAll } from 'drizzle-orm/sqlite-core'
         *
         * await unionAll(
         *   db.select({ transaction: onlineSales.transactionId }).from(onlineSales),
         *   db.select({ transaction: inStoreSales.transactionId }).from(inStoreSales)
         * );
         * ```
         */
        __publicField(this, "unionAll", this.createSetOperator("union", true));
        /**
         * Adds `intersect` set operator to the query.
         *
         * Calling this method will retain only the rows that are present in both result sets and eliminate duplicates.
         *
         * See docs: {@link https://orm.drizzle.team/docs/set-operations#intersect}
         *
         * @example
         *
         * ```ts
         * // Select course names that are offered in both departments A and B
         * await db.select({ courseName: depA.courseName })
         *   .from(depA)
         *   .intersect(
         *     db.select({ courseName: depB.courseName }).from(depB)
         *   );
         * // or
         * import { intersect } from 'drizzle-orm/sqlite-core'
         *
         * await intersect(
         *   db.select({ courseName: depA.courseName }).from(depA),
         *   db.select({ courseName: depB.courseName }).from(depB)
         * );
         * ```
         */
        __publicField(this, "intersect", this.createSetOperator("intersect", false));
        /**
         * Adds `except` set operator to the query.
         *
         * Calling this method will retrieve all unique rows from the left query, except for the rows that are present in the result set of the right query.
         *
         * See docs: {@link https://orm.drizzle.team/docs/set-operations#except}
         *
         * @example
         *
         * ```ts
         * // Select all courses offered in department A but not in department B
         * await db.select({ courseName: depA.courseName })
         *   .from(depA)
         *   .except(
         *     db.select({ courseName: depB.courseName }).from(depB)
         *   );
         * // or
         * import { except } from 'drizzle-orm/sqlite-core'
         *
         * await except(
         *   db.select({ courseName: depA.courseName }).from(depA),
         *   db.select({ courseName: depB.courseName }).from(depB)
         * );
         * ```
         */
        __publicField(this, "except", this.createSetOperator("except", false));
        this.config = {
          withList,
          table: table4,
          fields: { ...fields },
          distinct,
          setOperators: []
        };
        this.isPartialSelect = isPartialSelect;
        this.session = session;
        this.dialect = dialect7;
        this._ = {
          selectedFields: fields
        };
        this.tableName = getTableLikeName(table4);
        this.joinsNotNullableMap = typeof this.tableName === "string" ? { [this.tableName]: true } : {};
      }
      createJoin(joinType) {
        return (table4, on) => {
          const baseTableName = this.tableName;
          const tableName = getTableLikeName(table4);
          if (typeof tableName === "string" && this.config.joins?.some((join) => join.alias === tableName)) {
            throw new Error(`Alias "${tableName}" is already used in this query`);
          }
          if (!this.isPartialSelect) {
            if (Object.keys(this.joinsNotNullableMap).length === 1 && typeof baseTableName === "string") {
              this.config.fields = {
                [baseTableName]: this.config.fields
              };
            }
            if (typeof tableName === "string" && !is(table4, SQL)) {
              const selection = is(table4, Subquery) ? table4._.selectedFields : is(table4, View) ? table4[ViewBaseConfig].selectedFields : table4[Table.Symbol.Columns];
              this.config.fields[tableName] = selection;
            }
          }
          if (typeof on === "function") {
            on = on(
              new Proxy(
                this.config.fields,
                new SelectionProxyHandler({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })
              )
            );
          }
          if (!this.config.joins) {
            this.config.joins = [];
          }
          this.config.joins.push({ on, table: table4, joinType, alias: tableName });
          if (typeof tableName === "string") {
            switch (joinType) {
              case "left": {
                this.joinsNotNullableMap[tableName] = false;
                break;
              }
              case "right": {
                this.joinsNotNullableMap = Object.fromEntries(
                  Object.entries(this.joinsNotNullableMap).map(([key]) => [key, false])
                );
                this.joinsNotNullableMap[tableName] = true;
                break;
              }
              case "inner": {
                this.joinsNotNullableMap[tableName] = true;
                break;
              }
              case "full": {
                this.joinsNotNullableMap = Object.fromEntries(
                  Object.entries(this.joinsNotNullableMap).map(([key]) => [key, false])
                );
                this.joinsNotNullableMap[tableName] = false;
                break;
              }
            }
          }
          return this;
        };
      }
      createSetOperator(type, isAll) {
        return (rightSelection) => {
          const rightSelect = typeof rightSelection === "function" ? rightSelection(getSQLiteSetOperators()) : rightSelection;
          if (!haveSameKeys(this.getSelectedFields(), rightSelect.getSelectedFields())) {
            throw new Error(
              "Set operator error (union / intersect / except): selected fields are not the same or are in a different order"
            );
          }
          this.config.setOperators.push({ type, isAll, rightSelect });
          return this;
        };
      }
      /** @internal */
      addSetOperators(setOperators) {
        this.config.setOperators.push(...setOperators);
        return this;
      }
      /**
       * Adds a `where` clause to the query.
       *
       * Calling this method will select only those rows that fulfill a specified condition.
       *
       * See docs: {@link https://orm.drizzle.team/docs/select#filtering}
       *
       * @param where the `where` clause.
       *
       * @example
       * You can use conditional operators and `sql function` to filter the rows to be selected.
       *
       * ```ts
       * // Select all cars with green color
       * await db.select().from(cars).where(eq(cars.color, 'green'));
       * // or
       * await db.select().from(cars).where(sql`${cars.color} = 'green'`)
       * ```
       *
       * You can logically combine conditional operators with `and()` and `or()` operators:
       *
       * ```ts
       * // Select all BMW cars with a green color
       * await db.select().from(cars).where(and(eq(cars.color, 'green'), eq(cars.brand, 'BMW')));
       *
       * // Select all cars with the green or blue color
       * await db.select().from(cars).where(or(eq(cars.color, 'green'), eq(cars.color, 'blue')));
       * ```
       */
      where(where) {
        if (typeof where === "function") {
          where = where(
            new Proxy(
              this.config.fields,
              new SelectionProxyHandler({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })
            )
          );
        }
        this.config.where = where;
        return this;
      }
      /**
       * Adds a `having` clause to the query.
       *
       * Calling this method will select only those rows that fulfill a specified condition. It is typically used with aggregate functions to filter the aggregated data based on a specified condition.
       *
       * See docs: {@link https://orm.drizzle.team/docs/select#aggregations}
       *
       * @param having the `having` clause.
       *
       * @example
       *
       * ```ts
       * // Select all brands with more than one car
       * await db.select({
       * 	brand: cars.brand,
       * 	count: sql<number>`cast(count(${cars.id}) as int)`,
       * })
       *   .from(cars)
       *   .groupBy(cars.brand)
       *   .having(({ count }) => gt(count, 1));
       * ```
       */
      having(having) {
        if (typeof having === "function") {
          having = having(
            new Proxy(
              this.config.fields,
              new SelectionProxyHandler({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })
            )
          );
        }
        this.config.having = having;
        return this;
      }
      groupBy(...columns) {
        if (typeof columns[0] === "function") {
          const groupBy = columns[0](
            new Proxy(
              this.config.fields,
              new SelectionProxyHandler({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" })
            )
          );
          this.config.groupBy = Array.isArray(groupBy) ? groupBy : [groupBy];
        } else {
          this.config.groupBy = columns;
        }
        return this;
      }
      orderBy(...columns) {
        if (typeof columns[0] === "function") {
          const orderBy = columns[0](
            new Proxy(
              this.config.fields,
              new SelectionProxyHandler({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" })
            )
          );
          const orderByArray = Array.isArray(orderBy) ? orderBy : [orderBy];
          if (this.config.setOperators.length > 0) {
            this.config.setOperators.at(-1).orderBy = orderByArray;
          } else {
            this.config.orderBy = orderByArray;
          }
        } else {
          const orderByArray = columns;
          if (this.config.setOperators.length > 0) {
            this.config.setOperators.at(-1).orderBy = orderByArray;
          } else {
            this.config.orderBy = orderByArray;
          }
        }
        return this;
      }
      /**
       * Adds a `limit` clause to the query.
       *
       * Calling this method will set the maximum number of rows that will be returned by this query.
       *
       * See docs: {@link https://orm.drizzle.team/docs/select#limit--offset}
       *
       * @param limit the `limit` clause.
       *
       * @example
       *
       * ```ts
       * // Get the first 10 people from this query.
       * await db.select().from(people).limit(10);
       * ```
       */
      limit(limit) {
        if (this.config.setOperators.length > 0) {
          this.config.setOperators.at(-1).limit = limit;
        } else {
          this.config.limit = limit;
        }
        return this;
      }
      /**
       * Adds an `offset` clause to the query.
       *
       * Calling this method will skip a number of rows when returning results from this query.
       *
       * See docs: {@link https://orm.drizzle.team/docs/select#limit--offset}
       *
       * @param offset the `offset` clause.
       *
       * @example
       *
       * ```ts
       * // Get the 10th-20th people from this query.
       * await db.select().from(people).offset(10).limit(10);
       * ```
       */
      offset(offset) {
        if (this.config.setOperators.length > 0) {
          this.config.setOperators.at(-1).offset = offset;
        } else {
          this.config.offset = offset;
        }
        return this;
      }
      /** @internal */
      getSQL() {
        return this.dialect.buildSelectQuery(this.config);
      }
      toSQL() {
        const { typings: _typings, ...rest } = this.dialect.sqlToQuery(this.getSQL());
        return rest;
      }
      as(alias) {
        return new Proxy(
          new Subquery(this.getSQL(), this.config.fields, alias),
          new SelectionProxyHandler({ alias, sqlAliasedBehavior: "alias", sqlBehavior: "error" })
        );
      }
      /** @internal */
      getSelectedFields() {
        return new Proxy(
          this.config.fields,
          new SelectionProxyHandler({ alias: this.tableName, sqlAliasedBehavior: "alias", sqlBehavior: "error" })
        );
      }
      $dynamic() {
        return this;
      }
    };
    _a176 = entityKind;
    __publicField(SQLiteSelectQueryBuilderBase, _a176, "SQLiteSelectQueryBuilder");
    SQLiteSelectBase = class extends SQLiteSelectQueryBuilderBase {
      constructor() {
        super(...arguments);
        __publicField(this, "run", (placeholderValues) => {
          return this._prepare().run(placeholderValues);
        });
        __publicField(this, "all", (placeholderValues) => {
          return this._prepare().all(placeholderValues);
        });
        __publicField(this, "get", (placeholderValues) => {
          return this._prepare().get(placeholderValues);
        });
        __publicField(this, "values", (placeholderValues) => {
          return this._prepare().values(placeholderValues);
        });
      }
      /** @internal */
      _prepare(isOneTimeQuery = true) {
        if (!this.session) {
          throw new Error("Cannot execute a query on a query builder. Please use a database instance instead.");
        }
        const fieldsList = orderSelectedFields(this.config.fields);
        const query = this.session[isOneTimeQuery ? "prepareOneTimeQuery" : "prepareQuery"](
          this.dialect.sqlToQuery(this.getSQL()),
          fieldsList,
          "all",
          true
        );
        query.joinsNotNullableMap = this.joinsNotNullableMap;
        return query;
      }
      prepare() {
        return this._prepare(false);
      }
      async execute() {
        return this.all();
      }
    };
    _a177 = entityKind;
    __publicField(SQLiteSelectBase, _a177, "SQLiteSelect");
    applyMixins(SQLiteSelectBase, [QueryPromise]);
    getSQLiteSetOperators = () => ({
      union: union14,
      unionAll: unionAll2,
      intersect: intersect2,
      except: except2
    });
    union14 = createSetOperator2("union", false);
    unionAll2 = createSetOperator2("union", true);
    intersect2 = createSetOperator2("intersect", false);
    except2 = createSetOperator2("except", false);
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/query-builders/query-builder.js
var _a178, QueryBuilder2;
var init_query_builder3 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/query-builders/query-builder.js"() {
    "use strict";
    init_entity();
    init_selection_proxy();
    init_dialect2();
    init_subquery();
    init_select3();
    QueryBuilder2 = class {
      constructor() {
        __publicField(this, "dialect");
      }
      $with(alias) {
        const queryBuilder = this;
        return {
          as(qb) {
            if (typeof qb === "function") {
              qb = qb(queryBuilder);
            }
            return new Proxy(
              new WithSubquery(qb.getSQL(), qb.getSelectedFields(), alias, true),
              new SelectionProxyHandler({ alias, sqlAliasedBehavior: "alias", sqlBehavior: "error" })
            );
          }
        };
      }
      with(...queries) {
        const self = this;
        function select(fields) {
          return new SQLiteSelectBuilder({
            fields: fields ?? void 0,
            session: void 0,
            dialect: self.getDialect(),
            withList: queries
          });
        }
        function selectDistinct(fields) {
          return new SQLiteSelectBuilder({
            fields: fields ?? void 0,
            session: void 0,
            dialect: self.getDialect(),
            withList: queries,
            distinct: true
          });
        }
        return { select, selectDistinct };
      }
      select(fields) {
        return new SQLiteSelectBuilder({ fields: fields ?? void 0, session: void 0, dialect: this.getDialect() });
      }
      selectDistinct(fields) {
        return new SQLiteSelectBuilder({
          fields: fields ?? void 0,
          session: void 0,
          dialect: this.getDialect(),
          distinct: true
        });
      }
      // Lazy load dialect to avoid circular dependency
      getDialect() {
        if (!this.dialect) {
          this.dialect = new SQLiteSyncDialect();
        }
        return this.dialect;
      }
    };
    _a178 = entityKind;
    __publicField(QueryBuilder2, _a178, "SQLiteQueryBuilder");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/query-builders/select.types.js
var init_select_types2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/query-builders/select.types.js"() {
    "use strict";
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/query-builders/update.js
var _a179, SQLiteUpdateBuilder, _a180, SQLiteUpdateBase;
var init_update2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/query-builders/update.js"() {
    "use strict";
    init_entity();
    init_query_promise();
    init_table3();
    init_utils();
    SQLiteUpdateBuilder = class {
      constructor(table4, session, dialect7, withList) {
        this.table = table4;
        this.session = session;
        this.dialect = dialect7;
        this.withList = withList;
      }
      set(values) {
        return new SQLiteUpdateBase(
          this.table,
          mapUpdateSet(this.table, values),
          this.session,
          this.dialect,
          this.withList
        );
      }
    };
    _a179 = entityKind;
    __publicField(SQLiteUpdateBuilder, _a179, "SQLiteUpdateBuilder");
    SQLiteUpdateBase = class extends QueryPromise {
      constructor(table4, set, session, dialect7, withList) {
        super();
        /** @internal */
        __publicField(this, "config");
        __publicField(this, "run", (placeholderValues) => {
          return this._prepare().run(placeholderValues);
        });
        __publicField(this, "all", (placeholderValues) => {
          return this._prepare().all(placeholderValues);
        });
        __publicField(this, "get", (placeholderValues) => {
          return this._prepare().get(placeholderValues);
        });
        __publicField(this, "values", (placeholderValues) => {
          return this._prepare().values(placeholderValues);
        });
        this.session = session;
        this.dialect = dialect7;
        this.config = { set, table: table4, withList };
      }
      /**
       * Adds a 'where' clause to the query.
       *
       * Calling this method will update only those rows that fulfill a specified condition.
       *
       * See docs: {@link https://orm.drizzle.team/docs/update}
       *
       * @param where the 'where' clause.
       *
       * @example
       * You can use conditional operators and `sql function` to filter the rows to be updated.
       *
       * ```ts
       * // Update all cars with green color
       * db.update(cars).set({ color: 'red' })
       *   .where(eq(cars.color, 'green'));
       * // or
       * db.update(cars).set({ color: 'red' })
       *   .where(sql`${cars.color} = 'green'`)
       * ```
       *
       * You can logically combine conditional operators with `and()` and `or()` operators:
       *
       * ```ts
       * // Update all BMW cars with a green color
       * db.update(cars).set({ color: 'red' })
       *   .where(and(eq(cars.color, 'green'), eq(cars.brand, 'BMW')));
       *
       * // Update all cars with the green or blue color
       * db.update(cars).set({ color: 'red' })
       *   .where(or(eq(cars.color, 'green'), eq(cars.color, 'blue')));
       * ```
       */
      where(where) {
        this.config.where = where;
        return this;
      }
      returning(fields = this.config.table[SQLiteTable.Symbol.Columns]) {
        this.config.returning = orderSelectedFields(fields);
        return this;
      }
      /** @internal */
      getSQL() {
        return this.dialect.buildUpdateQuery(this.config);
      }
      toSQL() {
        const { typings: _typings, ...rest } = this.dialect.sqlToQuery(this.getSQL());
        return rest;
      }
      /** @internal */
      _prepare(isOneTimeQuery = true) {
        return this.session[isOneTimeQuery ? "prepareOneTimeQuery" : "prepareQuery"](
          this.dialect.sqlToQuery(this.getSQL()),
          this.config.returning,
          this.config.returning ? "all" : "run",
          true
        );
      }
      prepare() {
        return this._prepare(false);
      }
      async execute() {
        return this.config.returning ? this.all() : this.run();
      }
      $dynamic() {
        return this;
      }
    };
    _a180 = entityKind;
    __publicField(SQLiteUpdateBase, _a180, "SQLiteUpdate");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/query-builders/index.js
var init_query_builders2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/query-builders/index.js"() {
    "use strict";
    init_delete2();
    init_insert2();
    init_query_builder3();
    init_select3();
    init_select_types2();
    init_update2();
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/query-builders/query.js
var _a181, RelationalQueryBuilder2, _a182, SQLiteRelationalQuery, _a183, SQLiteSyncRelationalQuery;
var init_query2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/query-builders/query.js"() {
    "use strict";
    init_entity();
    init_query_promise();
    init_relations();
    RelationalQueryBuilder2 = class {
      constructor(mode, fullSchema, schema4, tableNamesMap, table4, tableConfig, dialect7, session) {
        this.mode = mode;
        this.fullSchema = fullSchema;
        this.schema = schema4;
        this.tableNamesMap = tableNamesMap;
        this.table = table4;
        this.tableConfig = tableConfig;
        this.dialect = dialect7;
        this.session = session;
      }
      findMany(config) {
        return this.mode === "sync" ? new SQLiteSyncRelationalQuery(
          this.fullSchema,
          this.schema,
          this.tableNamesMap,
          this.table,
          this.tableConfig,
          this.dialect,
          this.session,
          config ? config : {},
          "many"
        ) : new SQLiteRelationalQuery(
          this.fullSchema,
          this.schema,
          this.tableNamesMap,
          this.table,
          this.tableConfig,
          this.dialect,
          this.session,
          config ? config : {},
          "many"
        );
      }
      findFirst(config) {
        return this.mode === "sync" ? new SQLiteSyncRelationalQuery(
          this.fullSchema,
          this.schema,
          this.tableNamesMap,
          this.table,
          this.tableConfig,
          this.dialect,
          this.session,
          config ? { ...config, limit: 1 } : { limit: 1 },
          "first"
        ) : new SQLiteRelationalQuery(
          this.fullSchema,
          this.schema,
          this.tableNamesMap,
          this.table,
          this.tableConfig,
          this.dialect,
          this.session,
          config ? { ...config, limit: 1 } : { limit: 1 },
          "first"
        );
      }
    };
    _a181 = entityKind;
    __publicField(RelationalQueryBuilder2, _a181, "SQLiteAsyncRelationalQueryBuilder");
    SQLiteRelationalQuery = class extends QueryPromise {
      constructor(fullSchema, schema4, tableNamesMap, table4, tableConfig, dialect7, session, config, mode) {
        super();
        /** @internal */
        __publicField(this, "mode");
        this.fullSchema = fullSchema;
        this.schema = schema4;
        this.tableNamesMap = tableNamesMap;
        this.table = table4;
        this.tableConfig = tableConfig;
        this.dialect = dialect7;
        this.session = session;
        this.config = config;
        this.mode = mode;
      }
      /** @internal */
      getSQL() {
        return this.dialect.buildRelationalQuery({
          fullSchema: this.fullSchema,
          schema: this.schema,
          tableNamesMap: this.tableNamesMap,
          table: this.table,
          tableConfig: this.tableConfig,
          queryConfig: this.config,
          tableAlias: this.tableConfig.tsName
        }).sql;
      }
      /** @internal */
      _prepare(isOneTimeQuery = false) {
        const { query, builtQuery } = this._toSQL();
        return this.session[isOneTimeQuery ? "prepareOneTimeQuery" : "prepareQuery"](
          builtQuery,
          void 0,
          this.mode === "first" ? "get" : "all",
          true,
          (rawRows, mapColumnValue) => {
            const rows = rawRows.map(
              (row) => mapRelationalRow(this.schema, this.tableConfig, row, query.selection, mapColumnValue)
            );
            if (this.mode === "first") {
              return rows[0];
            }
            return rows;
          }
        );
      }
      prepare() {
        return this._prepare(false);
      }
      _toSQL() {
        const query = this.dialect.buildRelationalQuery({
          fullSchema: this.fullSchema,
          schema: this.schema,
          tableNamesMap: this.tableNamesMap,
          table: this.table,
          tableConfig: this.tableConfig,
          queryConfig: this.config,
          tableAlias: this.tableConfig.tsName
        });
        const builtQuery = this.dialect.sqlToQuery(query.sql);
        return { query, builtQuery };
      }
      toSQL() {
        return this._toSQL().builtQuery;
      }
      /** @internal */
      executeRaw() {
        if (this.mode === "first") {
          return this._prepare(false).get();
        }
        return this._prepare(false).all();
      }
      async execute() {
        return this.executeRaw();
      }
    };
    _a182 = entityKind;
    __publicField(SQLiteRelationalQuery, _a182, "SQLiteAsyncRelationalQuery");
    SQLiteSyncRelationalQuery = class extends SQLiteRelationalQuery {
      sync() {
        return this.executeRaw();
      }
    };
    _a183 = entityKind;
    __publicField(SQLiteSyncRelationalQuery, _a183, "SQLiteSyncRelationalQuery");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/query-builders/raw.js
var _a184, SQLiteRaw;
var init_raw2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/query-builders/raw.js"() {
    "use strict";
    init_entity();
    init_query_promise();
    SQLiteRaw = class extends QueryPromise {
      constructor(execute, getSQL, action, dialect7, mapBatchResult) {
        super();
        /** @internal */
        __publicField(this, "config");
        this.execute = execute;
        this.getSQL = getSQL;
        this.dialect = dialect7;
        this.mapBatchResult = mapBatchResult;
        this.config = { action };
      }
      getQuery() {
        return { ...this.dialect.sqlToQuery(this.getSQL()), method: this.config.action };
      }
      mapResult(result, isFromBatch) {
        return isFromBatch ? this.mapBatchResult(result) : result;
      }
      _prepare() {
        return this;
      }
      /** @internal */
      isResponseInArrayMode() {
        return false;
      }
    };
    _a184 = entityKind;
    __publicField(SQLiteRaw, _a184, "SQLiteRaw");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/db.js
var _a185, BaseSQLiteDatabase;
var init_db2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/db.js"() {
    "use strict";
    init_entity();
    init_selection_proxy();
    init_query_builders2();
    init_subquery();
    init_query2();
    init_raw2();
    BaseSQLiteDatabase = class {
      constructor(resultKind, dialect7, session, schema4) {
        __publicField(this, "query");
        this.resultKind = resultKind;
        this.dialect = dialect7;
        this.session = session;
        this._ = schema4 ? {
          schema: schema4.schema,
          fullSchema: schema4.fullSchema,
          tableNamesMap: schema4.tableNamesMap
        } : {
          schema: void 0,
          fullSchema: {},
          tableNamesMap: {}
        };
        this.query = {};
        const query = this.query;
        if (this._.schema) {
          for (const [tableName, columns] of Object.entries(this._.schema)) {
            query[tableName] = new RelationalQueryBuilder2(
              resultKind,
              schema4.fullSchema,
              this._.schema,
              this._.tableNamesMap,
              schema4.fullSchema[tableName],
              columns,
              dialect7,
              session
            );
          }
        }
      }
      /**
       * Creates a subquery that defines a temporary named result set as a CTE.
       *
       * It is useful for breaking down complex queries into simpler parts and for reusing the result set in subsequent parts of the query.
       *
       * See docs: {@link https://orm.drizzle.team/docs/select#with-clause}
       *
       * @param alias The alias for the subquery.
       *
       * Failure to provide an alias will result in a DrizzleTypeError, preventing the subquery from being referenced in other queries.
       *
       * @example
       *
       * ```ts
       * // Create a subquery with alias 'sq' and use it in the select query
       * const sq = db.$with('sq').as(db.select().from(users).where(eq(users.id, 42)));
       *
       * const result = await db.with(sq).select().from(sq);
       * ```
       *
       * To select arbitrary SQL values as fields in a CTE and reference them in other CTEs or in the main query, you need to add aliases to them:
       *
       * ```ts
       * // Select an arbitrary SQL value as a field in a CTE and reference it in the main query
       * const sq = db.$with('sq').as(db.select({
       *   name: sql<string>`upper(${users.name})`.as('name'),
       * })
       * .from(users));
       *
       * const result = await db.with(sq).select({ name: sq.name }).from(sq);
       * ```
       */
      $with(alias) {
        return {
          as(qb) {
            if (typeof qb === "function") {
              qb = qb(new QueryBuilder2());
            }
            return new Proxy(
              new WithSubquery(qb.getSQL(), qb.getSelectedFields(), alias, true),
              new SelectionProxyHandler({ alias, sqlAliasedBehavior: "alias", sqlBehavior: "error" })
            );
          }
        };
      }
      /**
       * Incorporates a previously defined CTE (using `$with`) into the main query.
       *
       * This method allows the main query to reference a temporary named result set.
       *
       * See docs: {@link https://orm.drizzle.team/docs/select#with-clause}
       *
       * @param queries The CTEs to incorporate into the main query.
       *
       * @example
       *
       * ```ts
       * // Define a subquery 'sq' as a CTE using $with
       * const sq = db.$with('sq').as(db.select().from(users).where(eq(users.id, 42)));
       *
       * // Incorporate the CTE 'sq' into the main query and select from it
       * const result = await db.with(sq).select().from(sq);
       * ```
       */
      with(...queries) {
        const self = this;
        function select(fields) {
          return new SQLiteSelectBuilder({
            fields: fields ?? void 0,
            session: self.session,
            dialect: self.dialect,
            withList: queries
          });
        }
        function selectDistinct(fields) {
          return new SQLiteSelectBuilder({
            fields: fields ?? void 0,
            session: self.session,
            dialect: self.dialect,
            withList: queries,
            distinct: true
          });
        }
        function update(table4) {
          return new SQLiteUpdateBuilder(table4, self.session, self.dialect, queries);
        }
        function insert(into) {
          return new SQLiteInsertBuilder(into, self.session, self.dialect, queries);
        }
        function delete_(from) {
          return new SQLiteDeleteBase(from, self.session, self.dialect, queries);
        }
        return { select, selectDistinct, update, insert, delete: delete_ };
      }
      select(fields) {
        return new SQLiteSelectBuilder({ fields: fields ?? void 0, session: this.session, dialect: this.dialect });
      }
      selectDistinct(fields) {
        return new SQLiteSelectBuilder({
          fields: fields ?? void 0,
          session: this.session,
          dialect: this.dialect,
          distinct: true
        });
      }
      /**
       * Creates an update query.
       *
       * Calling this method without `.where()` clause will update all rows in a table. The `.where()` clause specifies which rows should be updated.
       *
       * Use `.set()` method to specify which values to update.
       *
       * See docs: {@link https://orm.drizzle.team/docs/update}
       *
       * @param table The table to update.
       *
       * @example
       *
       * ```ts
       * // Update all rows in the 'cars' table
       * await db.update(cars).set({ color: 'red' });
       *
       * // Update rows with filters and conditions
       * await db.update(cars).set({ color: 'red' }).where(eq(cars.brand, 'BMW'));
       *
       * // Update with returning clause
       * const updatedCar: Car[] = await db.update(cars)
       *   .set({ color: 'red' })
       *   .where(eq(cars.id, 1))
       *   .returning();
       * ```
       */
      update(table4) {
        return new SQLiteUpdateBuilder(table4, this.session, this.dialect);
      }
      /**
       * Creates an insert query.
       *
       * Calling this method will create new rows in a table. Use `.values()` method to specify which values to insert.
       *
       * See docs: {@link https://orm.drizzle.team/docs/insert}
       *
       * @param table The table to insert into.
       *
       * @example
       *
       * ```ts
       * // Insert one row
       * await db.insert(cars).values({ brand: 'BMW' });
       *
       * // Insert multiple rows
       * await db.insert(cars).values([{ brand: 'BMW' }, { brand: 'Porsche' }]);
       *
       * // Insert with returning clause
       * const insertedCar: Car[] = await db.insert(cars)
       *   .values({ brand: 'BMW' })
       *   .returning();
       * ```
       */
      insert(into) {
        return new SQLiteInsertBuilder(into, this.session, this.dialect);
      }
      /**
       * Creates a delete query.
       *
       * Calling this method without `.where()` clause will delete all rows in a table. The `.where()` clause specifies which rows should be deleted.
       *
       * See docs: {@link https://orm.drizzle.team/docs/delete}
       *
       * @param table The table to delete from.
       *
       * @example
       *
       * ```ts
       * // Delete all rows in the 'cars' table
       * await db.delete(cars);
       *
       * // Delete rows with filters and conditions
       * await db.delete(cars).where(eq(cars.color, 'green'));
       *
       * // Delete with returning clause
       * const deletedCar: Car[] = await db.delete(cars)
       *   .where(eq(cars.id, 1))
       *   .returning();
       * ```
       */
      delete(from) {
        return new SQLiteDeleteBase(from, this.session, this.dialect);
      }
      run(query) {
        const sql2 = query.getSQL();
        if (this.resultKind === "async") {
          return new SQLiteRaw(
            async () => this.session.run(sql2),
            () => sql2,
            "run",
            this.dialect,
            this.session.extractRawRunValueFromBatchResult.bind(this.session)
          );
        }
        return this.session.run(sql2);
      }
      all(query) {
        const sql2 = query.getSQL();
        if (this.resultKind === "async") {
          return new SQLiteRaw(
            async () => this.session.all(sql2),
            () => sql2,
            "all",
            this.dialect,
            this.session.extractRawAllValueFromBatchResult.bind(this.session)
          );
        }
        return this.session.all(sql2);
      }
      get(query) {
        const sql2 = query.getSQL();
        if (this.resultKind === "async") {
          return new SQLiteRaw(
            async () => this.session.get(sql2),
            () => sql2,
            "get",
            this.dialect,
            this.session.extractRawGetValueFromBatchResult.bind(this.session)
          );
        }
        return this.session.get(sql2);
      }
      values(query) {
        const sql2 = query.getSQL();
        if (this.resultKind === "async") {
          return new SQLiteRaw(
            async () => this.session.values(sql2),
            () => sql2,
            "values",
            this.dialect,
            this.session.extractRawValuesValueFromBatchResult.bind(this.session)
          );
        }
        return this.session.values(sql2);
      }
      transaction(transaction, config) {
        return this.session.transaction(transaction, config);
      }
    };
    _a185 = entityKind;
    __publicField(BaseSQLiteDatabase, _a185, "BaseSQLiteDatabase");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/indexes.js
var _a186, IndexBuilderOn2, _a187, IndexBuilder2, _a188, Index2;
var init_indexes2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/indexes.js"() {
    "use strict";
    init_entity();
    IndexBuilderOn2 = class {
      constructor(name2, unique) {
        this.name = name2;
        this.unique = unique;
      }
      on(...columns) {
        return new IndexBuilder2(this.name, columns, this.unique);
      }
    };
    _a186 = entityKind;
    __publicField(IndexBuilderOn2, _a186, "SQLiteIndexBuilderOn");
    IndexBuilder2 = class {
      constructor(name2, columns, unique) {
        /** @internal */
        __publicField(this, "config");
        this.config = {
          name: name2,
          columns,
          unique,
          where: void 0
        };
      }
      /**
       * Condition for partial index.
       */
      where(condition) {
        this.config.where = condition;
        return this;
      }
      /** @internal */
      build(table4) {
        return new Index2(this.config, table4);
      }
    };
    _a187 = entityKind;
    __publicField(IndexBuilder2, _a187, "SQLiteIndexBuilder");
    Index2 = class {
      constructor(config, table4) {
        __publicField(this, "config");
        this.config = { ...config, table: table4 };
      }
    };
    _a188 = entityKind;
    __publicField(Index2, _a188, "SQLiteIndex");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/primary-keys.js
var _a189, PrimaryKeyBuilder2, _a190, PrimaryKey2;
var init_primary_keys2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/primary-keys.js"() {
    "use strict";
    init_entity();
    init_table3();
    PrimaryKeyBuilder2 = class {
      constructor(columns, name2) {
        /** @internal */
        __publicField(this, "columns");
        /** @internal */
        __publicField(this, "name");
        this.columns = columns;
        this.name = name2;
      }
      /** @internal */
      build(table4) {
        return new PrimaryKey2(table4, this.columns, this.name);
      }
    };
    _a189 = entityKind;
    __publicField(PrimaryKeyBuilder2, _a189, "SQLitePrimaryKeyBuilder");
    PrimaryKey2 = class {
      constructor(table4, columns, name2) {
        __publicField(this, "columns");
        __publicField(this, "name");
        this.table = table4;
        this.columns = columns;
        this.name = name2;
      }
      getName() {
        return this.name ?? `${this.table[SQLiteTable.Symbol.Name]}_${this.columns.map((column4) => column4.name).join("_")}_pk`;
      }
    };
    _a190 = entityKind;
    __publicField(PrimaryKey2, _a190, "SQLitePrimaryKey");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/session.js
var _a191, ExecuteResultSync, _a192, SQLitePreparedQuery, _a193, SQLiteSession, _a194, SQLiteTransaction;
var init_session2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/session.js"() {
    "use strict";
    init_entity();
    init_errors();
    init_drizzle_orm();
    init_db2();
    ExecuteResultSync = class extends QueryPromise {
      constructor(resultCb) {
        super();
        this.resultCb = resultCb;
      }
      async execute() {
        return this.resultCb();
      }
      sync() {
        return this.resultCb();
      }
    };
    _a191 = entityKind;
    __publicField(ExecuteResultSync, _a191, "ExecuteResultSync");
    SQLitePreparedQuery = class {
      constructor(mode, executeMethod, query) {
        /** @internal */
        __publicField(this, "joinsNotNullableMap");
        this.mode = mode;
        this.executeMethod = executeMethod;
        this.query = query;
      }
      getQuery() {
        return this.query;
      }
      mapRunResult(result, _isFromBatch) {
        return result;
      }
      mapAllResult(_result, _isFromBatch) {
        throw new Error("Not implemented");
      }
      mapGetResult(_result, _isFromBatch) {
        throw new Error("Not implemented");
      }
      execute(placeholderValues) {
        if (this.mode === "async") {
          return this[this.executeMethod](placeholderValues);
        }
        return new ExecuteResultSync(() => this[this.executeMethod](placeholderValues));
      }
      mapResult(response, isFromBatch) {
        switch (this.executeMethod) {
          case "run": {
            return this.mapRunResult(response, isFromBatch);
          }
          case "all": {
            return this.mapAllResult(response, isFromBatch);
          }
          case "get": {
            return this.mapGetResult(response, isFromBatch);
          }
        }
      }
    };
    _a192 = entityKind;
    __publicField(SQLitePreparedQuery, _a192, "PreparedQuery");
    SQLiteSession = class {
      constructor(dialect7) {
        this.dialect = dialect7;
      }
      prepareOneTimeQuery(query, fields, executeMethod, isResponseInArrayMode) {
        return this.prepareQuery(query, fields, executeMethod, isResponseInArrayMode);
      }
      run(query) {
        const staticQuery = this.dialect.sqlToQuery(query);
        try {
          return this.prepareOneTimeQuery(staticQuery, void 0, "run", false).run();
        } catch (err) {
          throw new DrizzleError({ cause: err, message: `Failed to run the query '${staticQuery.sql}'` });
        }
      }
      /** @internal */
      extractRawRunValueFromBatchResult(result) {
        return result;
      }
      all(query) {
        return this.prepareOneTimeQuery(this.dialect.sqlToQuery(query), void 0, "run", false).all();
      }
      /** @internal */
      extractRawAllValueFromBatchResult(_result) {
        throw new Error("Not implemented");
      }
      get(query) {
        return this.prepareOneTimeQuery(this.dialect.sqlToQuery(query), void 0, "run", false).get();
      }
      /** @internal */
      extractRawGetValueFromBatchResult(_result) {
        throw new Error("Not implemented");
      }
      values(query) {
        return this.prepareOneTimeQuery(this.dialect.sqlToQuery(query), void 0, "run", false).values();
      }
      /** @internal */
      extractRawValuesValueFromBatchResult(_result) {
        throw new Error("Not implemented");
      }
    };
    _a193 = entityKind;
    __publicField(SQLiteSession, _a193, "SQLiteSession");
    SQLiteTransaction = class extends BaseSQLiteDatabase {
      constructor(resultType, dialect7, session, schema4, nestedIndex = 0) {
        super(resultType, dialect7, session, schema4);
        this.schema = schema4;
        this.nestedIndex = nestedIndex;
      }
      rollback() {
        throw new TransactionRollbackError();
      }
    };
    _a194 = entityKind;
    __publicField(SQLiteTransaction, _a194, "SQLiteTransaction");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/subquery.js
var init_subquery3 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/subquery.js"() {
    "use strict";
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/view-common.js
var SQLiteViewConfig;
var init_view_common3 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/view-common.js"() {
    "use strict";
    SQLiteViewConfig = Symbol.for("drizzle:SQLiteViewConfig");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/utils.js
function getTableConfig2(table4) {
  const columns = Object.values(table4[SQLiteTable.Symbol.Columns]);
  const indexes = [];
  const checks = [];
  const primaryKeys = [];
  const uniqueConstraints = [];
  const foreignKeys = Object.values(table4[SQLiteTable.Symbol.InlineForeignKeys]);
  const name2 = table4[Table.Symbol.Name];
  const extraConfigBuilder = table4[SQLiteTable.Symbol.ExtraConfigBuilder];
  if (extraConfigBuilder !== void 0) {
    const extraConfig = extraConfigBuilder(table4[SQLiteTable.Symbol.Columns]);
    for (const builder of Object.values(extraConfig)) {
      if (is(builder, IndexBuilder2)) {
        indexes.push(builder.build(table4));
      } else if (is(builder, CheckBuilder2)) {
        checks.push(builder.build(table4));
      } else if (is(builder, UniqueConstraintBuilder2)) {
        uniqueConstraints.push(builder.build(table4));
      } else if (is(builder, PrimaryKeyBuilder2)) {
        primaryKeys.push(builder.build(table4));
      } else if (is(builder, ForeignKeyBuilder2)) {
        foreignKeys.push(builder.build(table4));
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
    name: name2
  };
}
var init_utils6 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/utils.js"() {
    "use strict";
    init_entity();
    init_table();
    init_checks2();
    init_foreign_keys2();
    init_indexes2();
    init_primary_keys2();
    init_table3();
    init_unique_constraint2();
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/view.js
var _a195, ViewBuilderCore, _a196, ViewBuilder2, _a197, ManualViewBuilder2, _a198, _b8, SQLiteView;
var init_view2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/view.js"() {
    "use strict";
    init_entity();
    init_selection_proxy();
    init_utils();
    init_query_builder3();
    init_table3();
    init_view_base2();
    init_view_common3();
    ViewBuilderCore = class {
      constructor(name2) {
        __publicField(this, "config", {});
        this.name = name2;
      }
    };
    _a195 = entityKind;
    __publicField(ViewBuilderCore, _a195, "SQLiteViewBuilderCore");
    ViewBuilder2 = class extends ViewBuilderCore {
      as(qb) {
        if (typeof qb === "function") {
          qb = qb(new QueryBuilder2());
        }
        const selectionProxy = new SelectionProxyHandler({
          alias: this.name,
          sqlBehavior: "error",
          sqlAliasedBehavior: "alias",
          replaceOriginalName: true
        });
        const aliasedSelectedFields = qb.getSelectedFields();
        return new Proxy(
          new SQLiteView({
            sqliteConfig: this.config,
            config: {
              name: this.name,
              schema: void 0,
              selectedFields: aliasedSelectedFields,
              query: qb.getSQL().inlineParams()
            }
          }),
          selectionProxy
        );
      }
    };
    _a196 = entityKind;
    __publicField(ViewBuilder2, _a196, "SQLiteViewBuilder");
    ManualViewBuilder2 = class extends ViewBuilderCore {
      constructor(name2, columns) {
        super(name2);
        __publicField(this, "columns");
        this.columns = getTableColumns(sqliteTable(name2, columns));
      }
      existing() {
        return new Proxy(
          new SQLiteView({
            sqliteConfig: void 0,
            config: {
              name: this.name,
              schema: void 0,
              selectedFields: this.columns,
              query: void 0
            }
          }),
          new SelectionProxyHandler({
            alias: this.name,
            sqlBehavior: "error",
            sqlAliasedBehavior: "alias",
            replaceOriginalName: true
          })
        );
      }
      as(query) {
        return new Proxy(
          new SQLiteView({
            sqliteConfig: this.config,
            config: {
              name: this.name,
              schema: void 0,
              selectedFields: this.columns,
              query: query.inlineParams()
            }
          }),
          new SelectionProxyHandler({
            alias: this.name,
            sqlBehavior: "error",
            sqlAliasedBehavior: "alias",
            replaceOriginalName: true
          })
        );
      }
    };
    _a197 = entityKind;
    __publicField(ManualViewBuilder2, _a197, "SQLiteManualViewBuilder");
    SQLiteView = class extends SQLiteViewBase {
      constructor({ sqliteConfig, config }) {
        super(config);
        /** @internal */
        __publicField(this, _b8);
        this[SQLiteViewConfig] = sqliteConfig;
      }
    };
    _a198 = entityKind, _b8 = SQLiteViewConfig;
    __publicField(SQLiteView, _a198, "SQLiteView");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/index.js
var init_sqlite_core = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/sqlite-core/index.js"() {
    "use strict";
    init_alias3();
    init_checks2();
    init_columns2();
    init_db2();
    init_dialect2();
    init_foreign_keys2();
    init_indexes2();
    init_primary_keys2();
    init_query_builders2();
    init_session2();
    init_subquery3();
    init_table3();
    init_unique_constraint2();
    init_utils6();
    init_view2();
  }
});

// src/serializer/sqliteSerializer.ts
function mapSqlToSqliteType(sqlType) {
  const lowered = sqlType.toLowerCase();
  if ([
    "int",
    "integer",
    "integer auto_increment",
    "tinyint",
    "smallint",
    "mediumint",
    "bigint",
    "unsigned big int",
    "int2",
    "int8"
  ].some((it) => lowered.startsWith(it))) {
    return "integer";
  } else if ([
    "character",
    "varchar",
    "varying character",
    "national varying character",
    "nchar",
    "native character",
    "nvarchar",
    "text",
    "clob"
  ].some((it) => lowered.startsWith(it))) {
    const match2 = lowered.match(/\d+/);
    if (match2) {
      return `text(${match2[0]})`;
    }
    return "text";
  } else if (lowered.startsWith("blob")) {
    return "blob";
  } else if (["real", "double", "double precision", "float"].some(
    (it) => lowered.startsWith(it)
  )) {
    return "real";
  } else {
    return "numeric";
  }
}
var dialect5, generateSqliteSnapshot, fromDatabase2;
var init_sqliteSerializer = __esm({
  "src/serializer/sqliteSerializer.ts"() {
    "use strict";
    init_drizzle_orm();
    init_sqlite_core();
    init_serializer();
    init_outputs();
    init_source();
    dialect5 = new SQLiteSyncDialect();
    generateSqliteSnapshot = (tables) => {
      const result = {};
      for (const table4 of tables) {
        const columnsObject = {};
        const indexesObject = {};
        const foreignKeysObject = {};
        const primaryKeysObject = {};
        const uniqueConstraintObject = {};
        const {
          name: tableName,
          columns,
          indexes,
          foreignKeys: tableForeignKeys,
          primaryKeys,
          uniqueConstraints
        } = getTableConfig2(table4);
        columns.forEach((column4) => {
          const notNull = column4.notNull;
          const primaryKey = column4.primary;
          const columnToSet = {
            name: column4.name,
            type: column4.getSQLType(),
            primaryKey,
            notNull,
            autoincrement: is(column4, SQLiteBaseInteger) ? column4.autoIncrement : false
          };
          if (column4.default !== void 0) {
            if (is(column4.default, SQL)) {
              columnToSet.default = sqlToStr(column4.default);
            } else {
              columnToSet.default = typeof column4.default === "string" ? `'${column4.default}'` : typeof column4.default === "object" || Array.isArray(column4.default) ? `'${JSON.stringify(column4.default)}'` : column4.default;
            }
          }
          columnsObject[column4.name] = columnToSet;
          if (column4.isUnique) {
            const existingUnique = indexesObject[column4.uniqueName];
            if (typeof existingUnique !== "undefined") {
              console.log(
                `
${withStyle.errorWarning(`We've found duplicated unique constraint names in ${source_default.underline.blue(
                  tableName
                )} table. 
          The unique constraint ${source_default.underline.blue(
                  column4.uniqueName
                )} on the ${source_default.underline.blue(
                  column4.name
                )} column is confilcting with a unique constraint name already defined for ${source_default.underline.blue(
                  existingUnique.columns.join(",")
                )} columns
`)}`
              );
              process.exit(1);
            }
            indexesObject[column4.uniqueName] = {
              name: column4.uniqueName,
              columns: [columnToSet.name],
              isUnique: true
            };
          }
        });
        const foreignKeys = tableForeignKeys.map((fk4) => {
          const name2 = fk4.getName();
          const tableFrom = tableName;
          const onDelete = fk4.onDelete ?? "no action";
          const onUpdate = fk4.onUpdate ?? "no action";
          const reference = fk4.reference();
          const referenceFT = reference.foreignTable;
          const tableTo = getTableName(referenceFT);
          const columnsFrom = reference.columns.map((it) => it.name);
          const columnsTo = reference.foreignColumns.map((it) => it.name);
          return {
            name: name2,
            tableFrom,
            tableTo,
            columnsFrom,
            columnsTo,
            onDelete,
            onUpdate
          };
        });
        foreignKeys.forEach((it) => {
          foreignKeysObject[it.name] = it;
        });
        indexes.forEach((value) => {
          const columns2 = value.config.columns;
          const name2 = value.config.name;
          let indexColumns = columns2.map((it) => {
            if (is(it, SQL)) {
              return dialect5.sqlToQuery(it).sql;
            } else {
              return it.name;
            }
          });
          let where = void 0;
          if (value.config.where !== void 0) {
            if (is(value.config.where, SQL)) {
              where = dialect5.sqlToQuery(value.config.where).sql;
            }
          }
          indexesObject[name2] = {
            name: name2,
            columns: indexColumns,
            isUnique: value.config.unique ?? false,
            where
          };
        });
        uniqueConstraints?.map((unq) => {
          const columnNames = unq.columns.map((c) => c.name);
          const name2 = unq.name ?? uniqueKeyName2(table4, columnNames);
          const existingUnique = indexesObject[name2];
          if (typeof existingUnique !== "undefined") {
            console.log(
              `
${withStyle.errorWarning(
                `We've found duplicated unique constraint names in ${source_default.underline.blue(
                  tableName
                )} table. 
The unique constraint ${source_default.underline.blue(
                  name2
                )} on the ${source_default.underline.blue(
                  columnNames.join(",")
                )} columns is confilcting with a unique constraint name already defined for ${source_default.underline.blue(
                  existingUnique.columns.join(",")
                )} columns
`
              )}`
            );
            process.exit(1);
          }
          indexesObject[name2] = {
            name: unq.name,
            columns: columnNames,
            isUnique: true
          };
        });
        primaryKeys.forEach((it) => {
          if (it.columns.length > 1) {
            primaryKeysObject[it.getName()] = {
              columns: it.columns.map((it2) => it2.name).sort(),
              name: it.getName()
            };
          } else {
            columnsObject[it.columns[0].name].primaryKey = true;
          }
        });
        result[tableName] = {
          name: tableName,
          columns: columnsObject,
          indexes: indexesObject,
          foreignKeys: foreignKeysObject,
          compositePrimaryKeys: primaryKeysObject,
          uniqueConstraints: uniqueConstraintObject
        };
      }
      return {
        version: "6",
        dialect: "sqlite",
        tables: result,
        enums: {},
        _meta: {
          tables: {},
          columns: {}
        }
      };
    };
    fromDatabase2 = async (db, tablesFilter = (table4) => true, progressCallback) => {
      const result = {};
      const columns = await db.query(
        `SELECT 
    m.name as "tableName", p.name as "columnName", p.type as "columnType", p."notnull" as "notNull", p.dflt_value as "defaultValue", p.pk as pk
    FROM sqlite_master AS m JOIN pragma_table_info(m.name) AS p
    WHERE m.type = 'table' 
    and m.tbl_name != 'sqlite_sequence' 
    and m.tbl_name != 'sqlite_stat1' 
    and m.tbl_name != '_litestream_seq' 
    and m.tbl_name != '_litestream_lock' 
    and m.tbl_name != 'libsql_wasm_func_table' 
    and m.tbl_name != '__drizzle_migrations' 
    and m.tbl_name != '_cf_KV';
    `
      );
      const tablesWithSeq = [];
      const seq = await db.query(
        `SELECT * FROM sqlite_master WHERE name != 'sqlite_sequence' 
    and name != 'sqlite_stat1' 
    and name != '_litestream_seq' 
    and name != '_litestream_lock' 
    and tbl_name != '_cf_KV' 
    and sql GLOB '*[ *' || CHAR(9) || CHAR(10) || CHAR(13) || ']AUTOINCREMENT[^'']*';`
      );
      for (const s of seq) {
        tablesWithSeq.push(s.name);
      }
      let columnsCount = 0;
      let tablesCount = /* @__PURE__ */ new Set();
      let indexesCount = 0;
      let foreignKeysCount = 0;
      const tableToPk = {};
      for (const column4 of columns) {
        if (!tablesFilter(column4.tableName))
          continue;
        columnsCount += 1;
        if (progressCallback) {
          progressCallback("columns", columnsCount, "fetching");
        }
        const tableName = column4.tableName;
        tablesCount.add(tableName);
        if (progressCallback) {
          progressCallback("tables", tablesCount.size, "fetching");
        }
        const columnName = column4.columnName;
        const isNotNull2 = column4.notNull === 1;
        const columnType = column4.columnType;
        const isPrimary = column4.pk !== 0;
        const columnDefault = column4.defaultValue;
        const isAutoincrement = isPrimary && tablesWithSeq.includes(tableName);
        if (isPrimary) {
          if (typeof tableToPk[tableName] === "undefined") {
            tableToPk[tableName] = [columnName];
          } else {
            tableToPk[tableName].push(columnName);
          }
        }
        const table4 = result[tableName];
        const newColumn = {
          default: columnDefault === null ? void 0 : /^-?[\d.]+(?:e-?\d+)?$/.test(columnDefault) ? Number(columnDefault) : ["CURRENT_TIME", "CURRENT_DATE", "CURRENT_TIMESTAMP"].includes(
            columnDefault
          ) ? `(${columnDefault})` : columnDefault === "false" ? false : columnDefault === "true" ? true : columnDefault.startsWith("'") && columnDefault.endsWith("'") ? columnDefault : (
            // ? columnDefault.substring(1, columnDefault.length - 1)
            `(${columnDefault})`
          ),
          autoincrement: isAutoincrement,
          name: columnName,
          type: mapSqlToSqliteType(columnType),
          primaryKey: false,
          notNull: isNotNull2
        };
        if (!table4) {
          result[tableName] = {
            name: tableName,
            columns: {
              [columnName]: newColumn
            },
            compositePrimaryKeys: {},
            indexes: {},
            foreignKeys: {},
            uniqueConstraints: {}
          };
        } else {
          result[tableName].columns[columnName] = newColumn;
        }
      }
      for (const [key, value] of Object.entries(tableToPk)) {
        if (value.length > 1) {
          value.sort();
          result[key].compositePrimaryKeys = {
            [`${key}_${value.join("_")}_pk`]: {
              columns: value,
              name: `${key}_${value.join("_")}_pk`
            }
          };
        } else if (value.length === 1) {
          result[key].columns[value[0]].primaryKey = true;
        } else {
        }
      }
      if (progressCallback) {
        progressCallback("columns", columnsCount, "done");
        progressCallback("tables", tablesCount.size, "done");
      }
      try {
        const fks = await db.query(
          `SELECT m.name as "tableFrom", f.id as "id", f."table" as "tableTo", f."from", f."to", f."on_update" as "onUpdate", f."on_delete" as "onDelete", f.seq as "seq"
      FROM sqlite_master m, pragma_foreign_key_list(m.name) as f 
      where m.tbl_name != '_cf_KV';`
        );
        const fkByTableName = {};
        for (const fkRow of fks) {
          foreignKeysCount += 1;
          if (progressCallback) {
            progressCallback("fks", foreignKeysCount, "fetching");
          }
          const tableName = fkRow.tableFrom;
          const columnName = fkRow.from;
          const refTableName = fkRow.tableTo;
          const refColumnName = fkRow.to;
          const updateRule = fkRow.onUpdate;
          const deleteRule = fkRow.onDelete;
          const sequence = fkRow.seq;
          const id = fkRow.id;
          const tableInResult = result[tableName];
          if (typeof tableInResult === "undefined")
            continue;
          if (typeof fkByTableName[`${tableName}_${id}`] !== "undefined") {
            fkByTableName[`${tableName}_${id}`].columnsFrom.push(columnName);
            fkByTableName[`${tableName}_${id}`].columnsTo.push(refColumnName);
          } else {
            fkByTableName[`${tableName}_${id}`] = {
              name: "",
              tableFrom: tableName,
              tableTo: refTableName,
              columnsFrom: [columnName],
              columnsTo: [refColumnName],
              onDelete: deleteRule?.toLowerCase(),
              onUpdate: updateRule?.toLowerCase()
            };
          }
          const columnsFrom = fkByTableName[`${tableName}_${id}`].columnsFrom;
          const columnsTo = fkByTableName[`${tableName}_${id}`].columnsTo;
          fkByTableName[`${tableName}_${id}`].name = `${tableName}_${columnsFrom.join(
            "_"
          )}_${refTableName}_${columnsTo.join("_")}_fk`;
        }
        for (const idx of Object.keys(fkByTableName)) {
          const value = fkByTableName[idx];
          result[value.tableFrom].foreignKeys[value.name] = value;
        }
      } catch (e) {
      }
      if (progressCallback) {
        progressCallback("fks", foreignKeysCount, "done");
      }
      const idxs = await db.query(
        `SELECT 
    m.tbl_name as tableName,
    il.name as indexName,
    ii.name as columnName,
    il.[unique] as isUnique,
    il.seq as seq
FROM sqlite_master AS m,
    pragma_index_list(m.name) AS il,
    pragma_index_info(il.name) AS ii
WHERE 
    m.type = 'table' 
    and il.name NOT LIKE 'sqlite_autoindex_%'
    and m.tbl_name != '_cf_KV';`
      );
      for (const idxRow of idxs) {
        const tableName = idxRow.tableName;
        const constraintName = idxRow.indexName;
        const columnName = idxRow.columnName;
        const isUnique = idxRow.isUnique === 1;
        const tableInResult = result[tableName];
        if (typeof tableInResult === "undefined")
          continue;
        indexesCount += 1;
        if (progressCallback) {
          progressCallback("indexes", indexesCount, "fetching");
        }
        if (typeof tableInResult.indexes[constraintName] !== "undefined") {
          tableInResult.indexes[constraintName].columns.push(columnName);
        } else {
          tableInResult.indexes[constraintName] = {
            name: constraintName,
            columns: [columnName],
            isUnique
          };
        }
      }
      if (progressCallback) {
        progressCallback("indexes", indexesCount, "done");
        progressCallback("enums", 0, "done");
      }
      return {
        version: "6",
        dialect: "sqlite",
        tables: result,
        enums: {},
        _meta: {
          tables: {},
          columns: {}
        }
      };
    };
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/alias.js
var init_alias4 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/alias.js"() {
    "use strict";
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/checks.js
var _a199, CheckBuilder3, _a200, Check3;
var init_checks3 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/checks.js"() {
    "use strict";
    init_entity();
    CheckBuilder3 = class {
      constructor(name2, value) {
        __publicField(this, "brand");
        this.name = name2;
        this.value = value;
      }
      /** @internal */
      build(table4) {
        return new Check3(table4, this);
      }
    };
    _a199 = entityKind;
    __publicField(CheckBuilder3, _a199, "MySqlCheckBuilder");
    Check3 = class {
      constructor(table4, builder) {
        __publicField(this, "name");
        __publicField(this, "value");
        this.table = table4;
        this.name = builder.name;
        this.value = builder.value;
      }
    };
    _a200 = entityKind;
    __publicField(Check3, _a200, "MySqlCheck");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/table.js
function mysqlTableWithSchema(name2, columns, extraConfig, schema4, baseName = name2) {
  const rawTable = new MySqlTable(name2, schema4, baseName);
  const builtColumns = Object.fromEntries(
    Object.entries(columns).map(([name22, colBuilderBase]) => {
      const colBuilder = colBuilderBase;
      const column4 = colBuilder.build(rawTable);
      rawTable[InlineForeignKeys3].push(...colBuilder.buildForeignKeys(column4, rawTable));
      return [name22, column4];
    })
  );
  const table4 = Object.assign(rawTable, builtColumns);
  table4[Table.Symbol.Columns] = builtColumns;
  if (extraConfig) {
    table4[MySqlTable.Symbol.ExtraConfigBuilder] = extraConfig;
  }
  return table4;
}
var InlineForeignKeys3, _a201, _b9, _c4, _d3, MySqlTable, mysqlTable;
var init_table4 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/table.js"() {
    "use strict";
    init_entity();
    init_table();
    InlineForeignKeys3 = Symbol.for("drizzle:MySqlInlineForeignKeys");
    MySqlTable = class extends Table {
      constructor() {
        super(...arguments);
        /** @internal */
        __publicField(this, _b9);
        /** @internal */
        __publicField(this, _c4, []);
        /** @internal */
        __publicField(this, _d3);
      }
    };
    _a201 = entityKind, _b9 = Table.Symbol.Columns, _c4 = InlineForeignKeys3, _d3 = Table.Symbol.ExtraConfigBuilder;
    __publicField(MySqlTable, _a201, "MySqlTable");
    /** @internal */
    __publicField(MySqlTable, "Symbol", Object.assign({}, Table.Symbol, {
      InlineForeignKeys: InlineForeignKeys3
    }));
    mysqlTable = (name2, columns, extraConfig) => {
      return mysqlTableWithSchema(name2, columns, extraConfig, void 0, name2);
    };
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/foreign-keys.js
var _a202, ForeignKeyBuilder3, _a203, ForeignKey3;
var init_foreign_keys3 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/foreign-keys.js"() {
    "use strict";
    init_entity();
    init_table4();
    ForeignKeyBuilder3 = class {
      constructor(config, actions) {
        /** @internal */
        __publicField(this, "reference");
        /** @internal */
        __publicField(this, "_onUpdate");
        /** @internal */
        __publicField(this, "_onDelete");
        this.reference = () => {
          const { name: name2, columns, foreignColumns } = config();
          return { name: name2, columns, foreignTable: foreignColumns[0].table, foreignColumns };
        };
        if (actions) {
          this._onUpdate = actions.onUpdate;
          this._onDelete = actions.onDelete;
        }
      }
      onUpdate(action) {
        this._onUpdate = action;
        return this;
      }
      onDelete(action) {
        this._onDelete = action;
        return this;
      }
      /** @internal */
      build(table4) {
        return new ForeignKey3(table4, this);
      }
    };
    _a202 = entityKind;
    __publicField(ForeignKeyBuilder3, _a202, "MySqlForeignKeyBuilder");
    ForeignKey3 = class {
      constructor(table4, builder) {
        __publicField(this, "reference");
        __publicField(this, "onUpdate");
        __publicField(this, "onDelete");
        this.table = table4;
        this.reference = builder.reference;
        this.onUpdate = builder._onUpdate;
        this.onDelete = builder._onDelete;
      }
      getName() {
        const { name: name2, columns, foreignColumns } = this.reference();
        const columnNames = columns.map((column4) => column4.name);
        const foreignColumnNames = foreignColumns.map((column4) => column4.name);
        const chunks = [
          this.table[MySqlTable.Symbol.Name],
          ...columnNames,
          foreignColumns[0].table[MySqlTable.Symbol.Name],
          ...foreignColumnNames
        ];
        return name2 ?? `${chunks.join("_")}_fk`;
      }
    };
    _a203 = entityKind;
    __publicField(ForeignKey3, _a203, "MySqlForeignKey");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/unique-constraint.js
function uniqueKeyName3(table4, columns) {
  return `${table4[MySqlTable.Symbol.Name]}_${columns.join("_")}_unique`;
}
var _a204, UniqueConstraintBuilder3, _a205, UniqueOnConstraintBuilder3, _a206, UniqueConstraint3;
var init_unique_constraint3 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/unique-constraint.js"() {
    "use strict";
    init_entity();
    init_table4();
    UniqueConstraintBuilder3 = class {
      constructor(columns, name2) {
        /** @internal */
        __publicField(this, "columns");
        this.name = name2;
        this.columns = columns;
      }
      /** @internal */
      build(table4) {
        return new UniqueConstraint3(table4, this.columns, this.name);
      }
    };
    _a204 = entityKind;
    __publicField(UniqueConstraintBuilder3, _a204, "MySqlUniqueConstraintBuilder");
    UniqueOnConstraintBuilder3 = class {
      constructor(name2) {
        /** @internal */
        __publicField(this, "name");
        this.name = name2;
      }
      on(...columns) {
        return new UniqueConstraintBuilder3(columns, this.name);
      }
    };
    _a205 = entityKind;
    __publicField(UniqueOnConstraintBuilder3, _a205, "MySqlUniqueOnConstraintBuilder");
    UniqueConstraint3 = class {
      constructor(table4, columns, name2) {
        __publicField(this, "columns");
        __publicField(this, "name");
        __publicField(this, "nullsNotDistinct", false);
        this.table = table4;
        this.columns = columns;
        this.name = name2 ?? uniqueKeyName3(this.table, this.columns.map((column4) => column4.name));
      }
      getName() {
        return this.name;
      }
    };
    _a206 = entityKind;
    __publicField(UniqueConstraint3, _a206, "MySqlUniqueConstraint");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/common.js
var _a207, MySqlColumnBuilder, _a208, MySqlColumn, _a209, MySqlColumnBuilderWithAutoIncrement, _a210, MySqlColumnWithAutoIncrement;
var init_common4 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/common.js"() {
    "use strict";
    init_column_builder();
    init_column();
    init_entity();
    init_foreign_keys3();
    init_unique_constraint3();
    MySqlColumnBuilder = class extends ColumnBuilder {
      constructor() {
        super(...arguments);
        __publicField(this, "foreignKeyConfigs", []);
      }
      references(ref, actions = {}) {
        this.foreignKeyConfigs.push({ ref, actions });
        return this;
      }
      unique(name2) {
        this.config.isUnique = true;
        this.config.uniqueName = name2;
        return this;
      }
      /** @internal */
      buildForeignKeys(column4, table4) {
        return this.foreignKeyConfigs.map(({ ref, actions }) => {
          return ((ref2, actions2) => {
            const builder = new ForeignKeyBuilder3(() => {
              const foreignColumn = ref2();
              return { columns: [column4], foreignColumns: [foreignColumn] };
            });
            if (actions2.onUpdate) {
              builder.onUpdate(actions2.onUpdate);
            }
            if (actions2.onDelete) {
              builder.onDelete(actions2.onDelete);
            }
            return builder.build(table4);
          })(ref, actions);
        });
      }
    };
    _a207 = entityKind;
    __publicField(MySqlColumnBuilder, _a207, "MySqlColumnBuilder");
    MySqlColumn = class extends Column {
      constructor(table4, config) {
        if (!config.uniqueName) {
          config.uniqueName = uniqueKeyName3(table4, [config.name]);
        }
        super(table4, config);
        this.table = table4;
      }
    };
    _a208 = entityKind;
    __publicField(MySqlColumn, _a208, "MySqlColumn");
    MySqlColumnBuilderWithAutoIncrement = class extends MySqlColumnBuilder {
      constructor(name2, dataType, columnType) {
        super(name2, dataType, columnType);
        this.config.autoIncrement = false;
      }
      autoincrement() {
        this.config.autoIncrement = true;
        this.config.hasDefault = true;
        return this;
      }
    };
    _a209 = entityKind;
    __publicField(MySqlColumnBuilderWithAutoIncrement, _a209, "MySqlColumnBuilderWithAutoIncrement");
    MySqlColumnWithAutoIncrement = class extends MySqlColumn {
      constructor() {
        super(...arguments);
        __publicField(this, "autoIncrement", this.config.autoIncrement);
      }
    };
    _a210 = entityKind;
    __publicField(MySqlColumnWithAutoIncrement, _a210, "MySqlColumnWithAutoIncrement");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/bigint.js
var _a211, MySqlBigInt53Builder, _a212, MySqlBigInt53, _a213, MySqlBigInt64Builder, _a214, MySqlBigInt64;
var init_bigint2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/bigint.js"() {
    "use strict";
    init_entity();
    init_common4();
    MySqlBigInt53Builder = class extends MySqlColumnBuilderWithAutoIncrement {
      constructor(name2, unsigned = false) {
        super(name2, "number", "MySqlBigInt53");
        this.config.unsigned = unsigned;
      }
      /** @internal */
      build(table4) {
        return new MySqlBigInt53(
          table4,
          this.config
        );
      }
    };
    _a211 = entityKind;
    __publicField(MySqlBigInt53Builder, _a211, "MySqlBigInt53Builder");
    MySqlBigInt53 = class extends MySqlColumnWithAutoIncrement {
      getSQLType() {
        return `bigint${this.config.unsigned ? " unsigned" : ""}`;
      }
      mapFromDriverValue(value) {
        if (typeof value === "number") {
          return value;
        }
        return Number(value);
      }
    };
    _a212 = entityKind;
    __publicField(MySqlBigInt53, _a212, "MySqlBigInt53");
    MySqlBigInt64Builder = class extends MySqlColumnBuilderWithAutoIncrement {
      constructor(name2, unsigned = false) {
        super(name2, "bigint", "MySqlBigInt64");
        this.config.unsigned = unsigned;
      }
      /** @internal */
      build(table4) {
        return new MySqlBigInt64(
          table4,
          this.config
        );
      }
    };
    _a213 = entityKind;
    __publicField(MySqlBigInt64Builder, _a213, "MySqlBigInt64Builder");
    MySqlBigInt64 = class extends MySqlColumnWithAutoIncrement {
      getSQLType() {
        return `bigint${this.config.unsigned ? " unsigned" : ""}`;
      }
      // eslint-disable-next-line unicorn/prefer-native-coercion-functions
      mapFromDriverValue(value) {
        return BigInt(value);
      }
    };
    _a214 = entityKind;
    __publicField(MySqlBigInt64, _a214, "MySqlBigInt64");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/binary.js
var _a215, MySqlBinaryBuilder, _a216, MySqlBinary;
var init_binary = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/binary.js"() {
    "use strict";
    init_entity();
    init_common4();
    MySqlBinaryBuilder = class extends MySqlColumnBuilder {
      constructor(name2, length) {
        super(name2, "string", "MySqlBinary");
        this.config.length = length;
      }
      /** @internal */
      build(table4) {
        return new MySqlBinary(table4, this.config);
      }
    };
    _a215 = entityKind;
    __publicField(MySqlBinaryBuilder, _a215, "MySqlBinaryBuilder");
    MySqlBinary = class extends MySqlColumn {
      constructor() {
        super(...arguments);
        __publicField(this, "length", this.config.length);
      }
      getSQLType() {
        return this.length === void 0 ? `binary` : `binary(${this.length})`;
      }
    };
    _a216 = entityKind;
    __publicField(MySqlBinary, _a216, "MySqlBinary");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/boolean.js
var _a217, MySqlBooleanBuilder, _a218, MySqlBoolean;
var init_boolean2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/boolean.js"() {
    "use strict";
    init_entity();
    init_common4();
    MySqlBooleanBuilder = class extends MySqlColumnBuilder {
      constructor(name2) {
        super(name2, "boolean", "MySqlBoolean");
      }
      /** @internal */
      build(table4) {
        return new MySqlBoolean(
          table4,
          this.config
        );
      }
    };
    _a217 = entityKind;
    __publicField(MySqlBooleanBuilder, _a217, "MySqlBooleanBuilder");
    MySqlBoolean = class extends MySqlColumn {
      getSQLType() {
        return "boolean";
      }
      mapFromDriverValue(value) {
        if (typeof value === "boolean") {
          return value;
        }
        return value === 1;
      }
    };
    _a218 = entityKind;
    __publicField(MySqlBoolean, _a218, "MySqlBoolean");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/char.js
var _a219, MySqlCharBuilder, _a220, MySqlChar;
var init_char2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/char.js"() {
    "use strict";
    init_entity();
    init_common4();
    MySqlCharBuilder = class extends MySqlColumnBuilder {
      constructor(name2, config) {
        super(name2, "string", "MySqlChar");
        this.config.length = config.length;
        this.config.enum = config.enum;
      }
      /** @internal */
      build(table4) {
        return new MySqlChar(
          table4,
          this.config
        );
      }
    };
    _a219 = entityKind;
    __publicField(MySqlCharBuilder, _a219, "MySqlCharBuilder");
    MySqlChar = class extends MySqlColumn {
      constructor() {
        super(...arguments);
        __publicField(this, "length", this.config.length);
        __publicField(this, "enumValues", this.config.enum);
      }
      getSQLType() {
        return this.length === void 0 ? `char` : `char(${this.length})`;
      }
    };
    _a220 = entityKind;
    __publicField(MySqlChar, _a220, "MySqlChar");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/custom.js
var _a221, MySqlCustomColumnBuilder, _a222, MySqlCustomColumn;
var init_custom3 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/custom.js"() {
    "use strict";
    init_entity();
    init_common4();
    MySqlCustomColumnBuilder = class extends MySqlColumnBuilder {
      constructor(name2, fieldConfig, customTypeParams) {
        super(name2, "custom", "MySqlCustomColumn");
        this.config.fieldConfig = fieldConfig;
        this.config.customTypeParams = customTypeParams;
      }
      /** @internal */
      build(table4) {
        return new MySqlCustomColumn(
          table4,
          this.config
        );
      }
    };
    _a221 = entityKind;
    __publicField(MySqlCustomColumnBuilder, _a221, "MySqlCustomColumnBuilder");
    MySqlCustomColumn = class extends MySqlColumn {
      constructor(table4, config) {
        super(table4, config);
        __publicField(this, "sqlName");
        __publicField(this, "mapTo");
        __publicField(this, "mapFrom");
        this.sqlName = config.customTypeParams.dataType(config.fieldConfig);
        this.mapTo = config.customTypeParams.toDriver;
        this.mapFrom = config.customTypeParams.fromDriver;
      }
      getSQLType() {
        return this.sqlName;
      }
      mapFromDriverValue(value) {
        return typeof this.mapFrom === "function" ? this.mapFrom(value) : value;
      }
      mapToDriverValue(value) {
        return typeof this.mapTo === "function" ? this.mapTo(value) : value;
      }
    };
    _a222 = entityKind;
    __publicField(MySqlCustomColumn, _a222, "MySqlCustomColumn");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/date.js
var _a223, MySqlDateBuilder, _a224, MySqlDate, _a225, MySqlDateStringBuilder, _a226, MySqlDateString;
var init_date2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/date.js"() {
    "use strict";
    init_entity();
    init_common4();
    MySqlDateBuilder = class extends MySqlColumnBuilder {
      constructor(name2) {
        super(name2, "date", "MySqlDate");
      }
      /** @internal */
      build(table4) {
        return new MySqlDate(table4, this.config);
      }
    };
    _a223 = entityKind;
    __publicField(MySqlDateBuilder, _a223, "MySqlDateBuilder");
    MySqlDate = class extends MySqlColumn {
      constructor(table4, config) {
        super(table4, config);
      }
      getSQLType() {
        return `date`;
      }
      mapFromDriverValue(value) {
        return new Date(value);
      }
    };
    _a224 = entityKind;
    __publicField(MySqlDate, _a224, "MySqlDate");
    MySqlDateStringBuilder = class extends MySqlColumnBuilder {
      constructor(name2) {
        super(name2, "string", "MySqlDateString");
      }
      /** @internal */
      build(table4) {
        return new MySqlDateString(
          table4,
          this.config
        );
      }
    };
    _a225 = entityKind;
    __publicField(MySqlDateStringBuilder, _a225, "MySqlDateStringBuilder");
    MySqlDateString = class extends MySqlColumn {
      constructor(table4, config) {
        super(table4, config);
      }
      getSQLType() {
        return `date`;
      }
    };
    _a226 = entityKind;
    __publicField(MySqlDateString, _a226, "MySqlDateString");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/datetime.js
var _a227, MySqlDateTimeBuilder, _a228, MySqlDateTime, _a229, MySqlDateTimeStringBuilder, _a230, MySqlDateTimeString;
var init_datetime = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/datetime.js"() {
    "use strict";
    init_entity();
    init_common4();
    MySqlDateTimeBuilder = class extends MySqlColumnBuilder {
      constructor(name2, config) {
        super(name2, "date", "MySqlDateTime");
        this.config.fsp = config?.fsp;
      }
      /** @internal */
      build(table4) {
        return new MySqlDateTime(
          table4,
          this.config
        );
      }
    };
    _a227 = entityKind;
    __publicField(MySqlDateTimeBuilder, _a227, "MySqlDateTimeBuilder");
    MySqlDateTime = class extends MySqlColumn {
      constructor(table4, config) {
        super(table4, config);
        __publicField(this, "fsp");
        this.fsp = config.fsp;
      }
      getSQLType() {
        const precision = this.fsp === void 0 ? "" : `(${this.fsp})`;
        return `datetime${precision}`;
      }
      mapToDriverValue(value) {
        return value.toISOString().replace("T", " ").replace("Z", "");
      }
      mapFromDriverValue(value) {
        return /* @__PURE__ */ new Date(value.replace(" ", "T") + "Z");
      }
    };
    _a228 = entityKind;
    __publicField(MySqlDateTime, _a228, "MySqlDateTime");
    MySqlDateTimeStringBuilder = class extends MySqlColumnBuilder {
      constructor(name2, config) {
        super(name2, "string", "MySqlDateTimeString");
        this.config.fsp = config?.fsp;
      }
      /** @internal */
      build(table4) {
        return new MySqlDateTimeString(
          table4,
          this.config
        );
      }
    };
    _a229 = entityKind;
    __publicField(MySqlDateTimeStringBuilder, _a229, "MySqlDateTimeStringBuilder");
    MySqlDateTimeString = class extends MySqlColumn {
      constructor(table4, config) {
        super(table4, config);
        __publicField(this, "fsp");
        this.fsp = config.fsp;
      }
      getSQLType() {
        const precision = this.fsp === void 0 ? "" : `(${this.fsp})`;
        return `datetime${precision}`;
      }
    };
    _a230 = entityKind;
    __publicField(MySqlDateTimeString, _a230, "MySqlDateTimeString");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/decimal.js
var _a231, MySqlDecimalBuilder, _a232, MySqlDecimal;
var init_decimal = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/decimal.js"() {
    "use strict";
    init_entity();
    init_common4();
    MySqlDecimalBuilder = class extends MySqlColumnBuilderWithAutoIncrement {
      constructor(name2, precision, scale) {
        super(name2, "string", "MySqlDecimal");
        this.config.precision = precision;
        this.config.scale = scale;
      }
      /** @internal */
      build(table4) {
        return new MySqlDecimal(
          table4,
          this.config
        );
      }
    };
    _a231 = entityKind;
    __publicField(MySqlDecimalBuilder, _a231, "MySqlDecimalBuilder");
    MySqlDecimal = class extends MySqlColumnWithAutoIncrement {
      constructor() {
        super(...arguments);
        __publicField(this, "precision", this.config.precision);
        __publicField(this, "scale", this.config.scale);
      }
      getSQLType() {
        if (this.precision !== void 0 && this.scale !== void 0) {
          return `decimal(${this.precision},${this.scale})`;
        } else if (this.precision === void 0) {
          return "decimal";
        } else {
          return `decimal(${this.precision})`;
        }
      }
    };
    _a232 = entityKind;
    __publicField(MySqlDecimal, _a232, "MySqlDecimal");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/double.js
var _a233, MySqlDoubleBuilder, _a234, MySqlDouble;
var init_double = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/double.js"() {
    "use strict";
    init_entity();
    init_common4();
    MySqlDoubleBuilder = class extends MySqlColumnBuilderWithAutoIncrement {
      constructor(name2, config) {
        super(name2, "number", "MySqlDouble");
        this.config.precision = config?.precision;
        this.config.scale = config?.scale;
      }
      /** @internal */
      build(table4) {
        return new MySqlDouble(table4, this.config);
      }
    };
    _a233 = entityKind;
    __publicField(MySqlDoubleBuilder, _a233, "MySqlDoubleBuilder");
    MySqlDouble = class extends MySqlColumnWithAutoIncrement {
      constructor() {
        super(...arguments);
        __publicField(this, "precision", this.config.precision);
        __publicField(this, "scale", this.config.scale);
      }
      getSQLType() {
        if (this.precision !== void 0 && this.scale !== void 0) {
          return `double(${this.precision},${this.scale})`;
        } else if (this.precision === void 0) {
          return "double";
        } else {
          return `double(${this.precision})`;
        }
      }
    };
    _a234 = entityKind;
    __publicField(MySqlDouble, _a234, "MySqlDouble");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/enum.js
var _a235, MySqlEnumColumnBuilder, _a236, MySqlEnumColumn;
var init_enum2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/enum.js"() {
    "use strict";
    init_entity();
    init_common4();
    MySqlEnumColumnBuilder = class extends MySqlColumnBuilder {
      constructor(name2, values) {
        super(name2, "string", "MySqlEnumColumn");
        this.config.enumValues = values;
      }
      /** @internal */
      build(table4) {
        return new MySqlEnumColumn(
          table4,
          this.config
        );
      }
    };
    _a235 = entityKind;
    __publicField(MySqlEnumColumnBuilder, _a235, "MySqlEnumColumnBuilder");
    MySqlEnumColumn = class extends MySqlColumn {
      constructor() {
        super(...arguments);
        __publicField(this, "enumValues", this.config.enumValues);
      }
      getSQLType() {
        return `enum(${this.enumValues.map((value) => `'${value}'`).join(",")})`;
      }
    };
    _a236 = entityKind;
    __publicField(MySqlEnumColumn, _a236, "MySqlEnumColumn");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/float.js
var _a237, MySqlFloatBuilder, _a238, MySqlFloat;
var init_float = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/float.js"() {
    "use strict";
    init_entity();
    init_common4();
    MySqlFloatBuilder = class extends MySqlColumnBuilderWithAutoIncrement {
      constructor(name2) {
        super(name2, "number", "MySqlFloat");
      }
      /** @internal */
      build(table4) {
        return new MySqlFloat(table4, this.config);
      }
    };
    _a237 = entityKind;
    __publicField(MySqlFloatBuilder, _a237, "MySqlFloatBuilder");
    MySqlFloat = class extends MySqlColumnWithAutoIncrement {
      getSQLType() {
        return "float";
      }
    };
    _a238 = entityKind;
    __publicField(MySqlFloat, _a238, "MySqlFloat");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/int.js
var _a239, MySqlIntBuilder, _a240, MySqlInt;
var init_int = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/int.js"() {
    "use strict";
    init_entity();
    init_common4();
    MySqlIntBuilder = class extends MySqlColumnBuilderWithAutoIncrement {
      constructor(name2, config) {
        super(name2, "number", "MySqlInt");
        this.config.unsigned = config ? config.unsigned : false;
      }
      /** @internal */
      build(table4) {
        return new MySqlInt(table4, this.config);
      }
    };
    _a239 = entityKind;
    __publicField(MySqlIntBuilder, _a239, "MySqlIntBuilder");
    MySqlInt = class extends MySqlColumnWithAutoIncrement {
      getSQLType() {
        return `int${this.config.unsigned ? " unsigned" : ""}`;
      }
      mapFromDriverValue(value) {
        if (typeof value === "string") {
          return Number(value);
        }
        return value;
      }
    };
    _a240 = entityKind;
    __publicField(MySqlInt, _a240, "MySqlInt");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/json.js
var _a241, MySqlJsonBuilder, _a242, MySqlJson;
var init_json2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/json.js"() {
    "use strict";
    init_entity();
    init_common4();
    MySqlJsonBuilder = class extends MySqlColumnBuilder {
      constructor(name2) {
        super(name2, "json", "MySqlJson");
      }
      /** @internal */
      build(table4) {
        return new MySqlJson(table4, this.config);
      }
    };
    _a241 = entityKind;
    __publicField(MySqlJsonBuilder, _a241, "MySqlJsonBuilder");
    MySqlJson = class extends MySqlColumn {
      getSQLType() {
        return "json";
      }
      mapToDriverValue(value) {
        return JSON.stringify(value);
      }
    };
    _a242 = entityKind;
    __publicField(MySqlJson, _a242, "MySqlJson");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/mediumint.js
var _a243, MySqlMediumIntBuilder, _a244, MySqlMediumInt;
var init_mediumint = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/mediumint.js"() {
    "use strict";
    init_entity();
    init_common4();
    MySqlMediumIntBuilder = class extends MySqlColumnBuilderWithAutoIncrement {
      constructor(name2, config) {
        super(name2, "number", "MySqlMediumInt");
        this.config.unsigned = config ? config.unsigned : false;
      }
      /** @internal */
      build(table4) {
        return new MySqlMediumInt(
          table4,
          this.config
        );
      }
    };
    _a243 = entityKind;
    __publicField(MySqlMediumIntBuilder, _a243, "MySqlMediumIntBuilder");
    MySqlMediumInt = class extends MySqlColumnWithAutoIncrement {
      getSQLType() {
        return `mediumint${this.config.unsigned ? " unsigned" : ""}`;
      }
      mapFromDriverValue(value) {
        if (typeof value === "string") {
          return Number(value);
        }
        return value;
      }
    };
    _a244 = entityKind;
    __publicField(MySqlMediumInt, _a244, "MySqlMediumInt");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/real.js
var _a245, MySqlRealBuilder, _a246, MySqlReal;
var init_real3 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/real.js"() {
    "use strict";
    init_entity();
    init_common4();
    MySqlRealBuilder = class extends MySqlColumnBuilderWithAutoIncrement {
      constructor(name2, config) {
        super(name2, "number", "MySqlReal");
        this.config.precision = config?.precision;
        this.config.scale = config?.scale;
      }
      /** @internal */
      build(table4) {
        return new MySqlReal(table4, this.config);
      }
    };
    _a245 = entityKind;
    __publicField(MySqlRealBuilder, _a245, "MySqlRealBuilder");
    MySqlReal = class extends MySqlColumnWithAutoIncrement {
      constructor() {
        super(...arguments);
        __publicField(this, "precision", this.config.precision);
        __publicField(this, "scale", this.config.scale);
      }
      getSQLType() {
        if (this.precision !== void 0 && this.scale !== void 0) {
          return `real(${this.precision}, ${this.scale})`;
        } else if (this.precision === void 0) {
          return "real";
        } else {
          return `real(${this.precision})`;
        }
      }
    };
    _a246 = entityKind;
    __publicField(MySqlReal, _a246, "MySqlReal");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/serial.js
var _a247, MySqlSerialBuilder, _a248, MySqlSerial;
var init_serial2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/serial.js"() {
    "use strict";
    init_entity();
    init_common4();
    MySqlSerialBuilder = class extends MySqlColumnBuilderWithAutoIncrement {
      constructor(name2) {
        super(name2, "number", "MySqlSerial");
        this.config.hasDefault = true;
        this.config.autoIncrement = true;
      }
      /** @internal */
      build(table4) {
        return new MySqlSerial(table4, this.config);
      }
    };
    _a247 = entityKind;
    __publicField(MySqlSerialBuilder, _a247, "MySqlSerialBuilder");
    MySqlSerial = class extends MySqlColumnWithAutoIncrement {
      getSQLType() {
        return "serial";
      }
      mapFromDriverValue(value) {
        if (typeof value === "string") {
          return Number(value);
        }
        return value;
      }
    };
    _a248 = entityKind;
    __publicField(MySqlSerial, _a248, "MySqlSerial");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/smallint.js
var _a249, MySqlSmallIntBuilder, _a250, MySqlSmallInt;
var init_smallint2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/smallint.js"() {
    "use strict";
    init_entity();
    init_common4();
    MySqlSmallIntBuilder = class extends MySqlColumnBuilderWithAutoIncrement {
      constructor(name2, config) {
        super(name2, "number", "MySqlSmallInt");
        this.config.unsigned = config ? config.unsigned : false;
      }
      /** @internal */
      build(table4) {
        return new MySqlSmallInt(
          table4,
          this.config
        );
      }
    };
    _a249 = entityKind;
    __publicField(MySqlSmallIntBuilder, _a249, "MySqlSmallIntBuilder");
    MySqlSmallInt = class extends MySqlColumnWithAutoIncrement {
      getSQLType() {
        return `smallint${this.config.unsigned ? " unsigned" : ""}`;
      }
      mapFromDriverValue(value) {
        if (typeof value === "string") {
          return Number(value);
        }
        return value;
      }
    };
    _a250 = entityKind;
    __publicField(MySqlSmallInt, _a250, "MySqlSmallInt");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/text.js
var _a251, MySqlTextBuilder, _a252, MySqlText;
var init_text3 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/text.js"() {
    "use strict";
    init_entity();
    init_common4();
    MySqlTextBuilder = class extends MySqlColumnBuilder {
      constructor(name2, textType, config) {
        super(name2, "string", "MySqlText");
        this.config.textType = textType;
        this.config.enumValues = config.enum;
      }
      /** @internal */
      build(table4) {
        return new MySqlText(table4, this.config);
      }
    };
    _a251 = entityKind;
    __publicField(MySqlTextBuilder, _a251, "MySqlTextBuilder");
    MySqlText = class extends MySqlColumn {
      constructor() {
        super(...arguments);
        __publicField(this, "textType", this.config.textType);
        __publicField(this, "enumValues", this.config.enumValues);
      }
      getSQLType() {
        return this.textType;
      }
    };
    _a252 = entityKind;
    __publicField(MySqlText, _a252, "MySqlText");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/time.js
var _a253, MySqlTimeBuilder, _a254, MySqlTime;
var init_time2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/time.js"() {
    "use strict";
    init_entity();
    init_common4();
    MySqlTimeBuilder = class extends MySqlColumnBuilder {
      constructor(name2, config) {
        super(name2, "string", "MySqlTime");
        this.config.fsp = config?.fsp;
      }
      /** @internal */
      build(table4) {
        return new MySqlTime(table4, this.config);
      }
    };
    _a253 = entityKind;
    __publicField(MySqlTimeBuilder, _a253, "MySqlTimeBuilder");
    MySqlTime = class extends MySqlColumn {
      constructor() {
        super(...arguments);
        __publicField(this, "fsp", this.config.fsp);
      }
      getSQLType() {
        const precision = this.fsp === void 0 ? "" : `(${this.fsp})`;
        return `time${precision}`;
      }
    };
    _a254 = entityKind;
    __publicField(MySqlTime, _a254, "MySqlTime");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/date.common.js
var _a255, MySqlDateColumnBaseBuilder, _a256, MySqlDateBaseColumn;
var init_date_common2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/date.common.js"() {
    "use strict";
    init_entity();
    init_sql();
    init_common4();
    MySqlDateColumnBaseBuilder = class extends MySqlColumnBuilder {
      defaultNow() {
        return this.default(sql`(now())`);
      }
      // "on update now" also adds an implicit default value to the column - https://dev.mysql.com/doc/refman/8.0/en/timestamp-initialization.html
      onUpdateNow() {
        this.config.hasOnUpdateNow = true;
        this.config.hasDefault = true;
        return this;
      }
    };
    _a255 = entityKind;
    __publicField(MySqlDateColumnBaseBuilder, _a255, "MySqlDateColumnBuilder");
    MySqlDateBaseColumn = class extends MySqlColumn {
      constructor() {
        super(...arguments);
        __publicField(this, "hasOnUpdateNow", this.config.hasOnUpdateNow);
      }
    };
    _a256 = entityKind;
    __publicField(MySqlDateBaseColumn, _a256, "MySqlDateColumn");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/timestamp.js
var _a257, MySqlTimestampBuilder, _a258, MySqlTimestamp, _a259, MySqlTimestampStringBuilder, _a260, MySqlTimestampString;
var init_timestamp2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/timestamp.js"() {
    "use strict";
    init_entity();
    init_date_common2();
    MySqlTimestampBuilder = class extends MySqlDateColumnBaseBuilder {
      constructor(name2, config) {
        super(name2, "date", "MySqlTimestamp");
        this.config.fsp = config?.fsp;
      }
      /** @internal */
      build(table4) {
        return new MySqlTimestamp(
          table4,
          this.config
        );
      }
    };
    _a257 = entityKind;
    __publicField(MySqlTimestampBuilder, _a257, "MySqlTimestampBuilder");
    MySqlTimestamp = class extends MySqlDateBaseColumn {
      constructor() {
        super(...arguments);
        __publicField(this, "fsp", this.config.fsp);
      }
      getSQLType() {
        const precision = this.fsp === void 0 ? "" : `(${this.fsp})`;
        return `timestamp${precision}`;
      }
      mapFromDriverValue(value) {
        return /* @__PURE__ */ new Date(value + "+0000");
      }
      mapToDriverValue(value) {
        return value.toISOString().slice(0, -1).replace("T", " ");
      }
    };
    _a258 = entityKind;
    __publicField(MySqlTimestamp, _a258, "MySqlTimestamp");
    MySqlTimestampStringBuilder = class extends MySqlDateColumnBaseBuilder {
      constructor(name2, config) {
        super(name2, "string", "MySqlTimestampString");
        this.config.fsp = config?.fsp;
      }
      /** @internal */
      build(table4) {
        return new MySqlTimestampString(
          table4,
          this.config
        );
      }
    };
    _a259 = entityKind;
    __publicField(MySqlTimestampStringBuilder, _a259, "MySqlTimestampStringBuilder");
    MySqlTimestampString = class extends MySqlDateBaseColumn {
      constructor() {
        super(...arguments);
        __publicField(this, "fsp", this.config.fsp);
      }
      getSQLType() {
        const precision = this.fsp === void 0 ? "" : `(${this.fsp})`;
        return `timestamp${precision}`;
      }
    };
    _a260 = entityKind;
    __publicField(MySqlTimestampString, _a260, "MySqlTimestampString");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/tinyint.js
var _a261, MySqlTinyIntBuilder, _a262, MySqlTinyInt;
var init_tinyint = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/tinyint.js"() {
    "use strict";
    init_entity();
    init_common4();
    MySqlTinyIntBuilder = class extends MySqlColumnBuilderWithAutoIncrement {
      constructor(name2, config) {
        super(name2, "number", "MySqlTinyInt");
        this.config.unsigned = config ? config.unsigned : false;
      }
      /** @internal */
      build(table4) {
        return new MySqlTinyInt(
          table4,
          this.config
        );
      }
    };
    _a261 = entityKind;
    __publicField(MySqlTinyIntBuilder, _a261, "MySqlTinyIntBuilder");
    MySqlTinyInt = class extends MySqlColumnWithAutoIncrement {
      getSQLType() {
        return `tinyint${this.config.unsigned ? " unsigned" : ""}`;
      }
      mapFromDriverValue(value) {
        if (typeof value === "string") {
          return Number(value);
        }
        return value;
      }
    };
    _a262 = entityKind;
    __publicField(MySqlTinyInt, _a262, "MySqlTinyInt");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/varbinary.js
var _a263, MySqlVarBinaryBuilder, _a264, MySqlVarBinary;
var init_varbinary = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/varbinary.js"() {
    "use strict";
    init_entity();
    init_common4();
    MySqlVarBinaryBuilder = class extends MySqlColumnBuilder {
      /** @internal */
      constructor(name2, config) {
        super(name2, "string", "MySqlVarBinary");
        this.config.length = config?.length;
      }
      /** @internal */
      build(table4) {
        return new MySqlVarBinary(
          table4,
          this.config
        );
      }
    };
    _a263 = entityKind;
    __publicField(MySqlVarBinaryBuilder, _a263, "MySqlVarBinaryBuilder");
    MySqlVarBinary = class extends MySqlColumn {
      constructor() {
        super(...arguments);
        __publicField(this, "length", this.config.length);
      }
      getSQLType() {
        return this.length === void 0 ? `varbinary` : `varbinary(${this.length})`;
      }
    };
    _a264 = entityKind;
    __publicField(MySqlVarBinary, _a264, "MySqlVarBinary");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/varchar.js
var _a265, MySqlVarCharBuilder, _a266, MySqlVarChar;
var init_varchar2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/varchar.js"() {
    "use strict";
    init_entity();
    init_common4();
    MySqlVarCharBuilder = class extends MySqlColumnBuilder {
      /** @internal */
      constructor(name2, config) {
        super(name2, "string", "MySqlVarChar");
        this.config.length = config.length;
        this.config.enum = config.enum;
      }
      /** @internal */
      build(table4) {
        return new MySqlVarChar(
          table4,
          this.config
        );
      }
    };
    _a265 = entityKind;
    __publicField(MySqlVarCharBuilder, _a265, "MySqlVarCharBuilder");
    MySqlVarChar = class extends MySqlColumn {
      constructor() {
        super(...arguments);
        __publicField(this, "length", this.config.length);
        __publicField(this, "enumValues", this.config.enum);
      }
      getSQLType() {
        return this.length === void 0 ? `varchar` : `varchar(${this.length})`;
      }
    };
    _a266 = entityKind;
    __publicField(MySqlVarChar, _a266, "MySqlVarChar");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/year.js
var _a267, MySqlYearBuilder, _a268, MySqlYear;
var init_year = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/year.js"() {
    "use strict";
    init_entity();
    init_common4();
    MySqlYearBuilder = class extends MySqlColumnBuilder {
      constructor(name2) {
        super(name2, "number", "MySqlYear");
      }
      /** @internal */
      build(table4) {
        return new MySqlYear(table4, this.config);
      }
    };
    _a267 = entityKind;
    __publicField(MySqlYearBuilder, _a267, "MySqlYearBuilder");
    MySqlYear = class extends MySqlColumn {
      getSQLType() {
        return `year`;
      }
    };
    _a268 = entityKind;
    __publicField(MySqlYear, _a268, "MySqlYear");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/index.js
var init_columns3 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/columns/index.js"() {
    "use strict";
    init_bigint2();
    init_binary();
    init_boolean2();
    init_char2();
    init_common4();
    init_custom3();
    init_date2();
    init_datetime();
    init_decimal();
    init_double();
    init_enum2();
    init_float();
    init_int();
    init_json2();
    init_mediumint();
    init_real3();
    init_serial2();
    init_smallint2();
    init_text3();
    init_time2();
    init_timestamp2();
    init_tinyint();
    init_varbinary();
    init_varchar2();
    init_year();
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/query-builders/delete.js
var _a269, MySqlDeleteBase;
var init_delete3 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/query-builders/delete.js"() {
    "use strict";
    init_entity();
    init_query_promise();
    MySqlDeleteBase = class extends QueryPromise {
      constructor(table4, session, dialect7, withList) {
        super();
        __publicField(this, "config");
        __publicField(this, "execute", (placeholderValues) => {
          return this.prepare().execute(placeholderValues);
        });
        __publicField(this, "createIterator", () => {
          const self = this;
          return async function* (placeholderValues) {
            yield* self.prepare().iterator(placeholderValues);
          };
        });
        __publicField(this, "iterator", this.createIterator());
        this.table = table4;
        this.session = session;
        this.dialect = dialect7;
        this.config = { table: table4, withList };
      }
      /**
       * Adds a `where` clause to the query.
       *
       * Calling this method will delete only those rows that fulfill a specified condition.
       *
       * See docs: {@link https://orm.drizzle.team/docs/delete}
       *
       * @param where the `where` clause.
       *
       * @example
       * You can use conditional operators and `sql function` to filter the rows to be deleted.
       *
       * ```ts
       * // Delete all cars with green color
       * db.delete(cars).where(eq(cars.color, 'green'));
       * // or
       * db.delete(cars).where(sql`${cars.color} = 'green'`)
       * ```
       *
       * You can logically combine conditional operators with `and()` and `or()` operators:
       *
       * ```ts
       * // Delete all BMW cars with a green color
       * db.delete(cars).where(and(eq(cars.color, 'green'), eq(cars.brand, 'BMW')));
       *
       * // Delete all cars with the green or blue color
       * db.delete(cars).where(or(eq(cars.color, 'green'), eq(cars.color, 'blue')));
       * ```
       */
      where(where) {
        this.config.where = where;
        return this;
      }
      /** @internal */
      getSQL() {
        return this.dialect.buildDeleteQuery(this.config);
      }
      toSQL() {
        const { typings: _typings, ...rest } = this.dialect.sqlToQuery(this.getSQL());
        return rest;
      }
      prepare() {
        return this.session.prepareQuery(
          this.dialect.sqlToQuery(this.getSQL()),
          this.config.returning
        );
      }
      $dynamic() {
        return this;
      }
    };
    _a269 = entityKind;
    __publicField(MySqlDeleteBase, _a269, "MySqlDelete");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/query-builders/insert.js
var _a270, MySqlInsertBuilder, _a271, MySqlInsertBase;
var init_insert3 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/query-builders/insert.js"() {
    "use strict";
    init_entity();
    init_query_promise();
    init_sql();
    init_table();
    init_utils();
    MySqlInsertBuilder = class {
      constructor(table4, session, dialect7) {
        __publicField(this, "shouldIgnore", false);
        this.table = table4;
        this.session = session;
        this.dialect = dialect7;
      }
      ignore() {
        this.shouldIgnore = true;
        return this;
      }
      values(values) {
        values = Array.isArray(values) ? values : [values];
        if (values.length === 0) {
          throw new Error("values() must be called with at least one value");
        }
        const mappedValues = values.map((entry) => {
          const result = {};
          const cols = this.table[Table.Symbol.Columns];
          for (const colKey of Object.keys(entry)) {
            const colValue = entry[colKey];
            result[colKey] = is(colValue, SQL) ? colValue : new Param(colValue, cols[colKey]);
          }
          return result;
        });
        return new MySqlInsertBase(this.table, mappedValues, this.shouldIgnore, this.session, this.dialect);
      }
    };
    _a270 = entityKind;
    __publicField(MySqlInsertBuilder, _a270, "MySqlInsertBuilder");
    MySqlInsertBase = class extends QueryPromise {
      constructor(table4, values, ignore, session, dialect7) {
        super();
        __publicField(this, "config");
        __publicField(this, "execute", (placeholderValues) => {
          return this.prepare().execute(placeholderValues);
        });
        __publicField(this, "createIterator", () => {
          const self = this;
          return async function* (placeholderValues) {
            yield* self.prepare().iterator(placeholderValues);
          };
        });
        __publicField(this, "iterator", this.createIterator());
        this.session = session;
        this.dialect = dialect7;
        this.config = { table: table4, values, ignore };
      }
      /**
       * Adds an `on duplicate key update` clause to the query.
       *
       * Calling this method will update update the row if any unique index conflicts. MySQL will automatically determine the conflict target based on the primary key and unique indexes.
       *
       * See docs: {@link https://orm.drizzle.team/docs/insert#on-duplicate-key-update}
       *
       * @param config The `set` clause
       *
       * @example
       * ```ts
       * await db.insert(cars)
       *   .values({ id: 1, brand: 'BMW'})
       *   .onDuplicateKeyUpdate({ set: { brand: 'Porsche' }});
       * ```
       *
       * While MySQL does not directly support doing nothing on conflict, you can perform a no-op by setting any column's value to itself and achieve the same effect:
       *
       * ```ts
       * import { sql } from 'drizzle-orm';
       *
       * await db.insert(cars)
       *   .values({ id: 1, brand: 'BMW' })
       *   .onDuplicateKeyUpdate({ set: { id: sql`id` } });
       * ```
       */
      onDuplicateKeyUpdate(config) {
        const setSql = this.dialect.buildUpdateSet(this.config.table, mapUpdateSet(this.config.table, config.set));
        this.config.onConflict = sql`update ${setSql}`;
        return this;
      }
      /** @internal */
      getSQL() {
        return this.dialect.buildInsertQuery(this.config);
      }
      toSQL() {
        const { typings: _typings, ...rest } = this.dialect.sqlToQuery(this.getSQL());
        return rest;
      }
      prepare() {
        return this.session.prepareQuery(
          this.dialect.sqlToQuery(this.getSQL()),
          void 0
        );
      }
      $dynamic() {
        return this;
      }
    };
    _a271 = entityKind;
    __publicField(MySqlInsertBase, _a271, "MySqlInsert");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/view-base.js
var _a272, MySqlViewBase;
var init_view_base3 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/view-base.js"() {
    "use strict";
    init_entity();
    init_sql();
    MySqlViewBase = class extends View {
    };
    _a272 = entityKind;
    __publicField(MySqlViewBase, _a272, "MySqlViewBase");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/dialect.js
var _a273, MySqlDialect;
var init_dialect3 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/dialect.js"() {
    "use strict";
    init_alias();
    init_column();
    init_entity();
    init_relations();
    init_sql();
    init_subquery();
    init_table();
    init_utils();
    init_drizzle_orm();
    init_common4();
    init_table4();
    init_view_base3();
    MySqlDialect = class {
      async migrate(migrations, session, config) {
        const migrationsTable = config.migrationsTable ?? "__drizzle_migrations";
        const migrationTableCreate = sql`
			create table if not exists ${sql.identifier(migrationsTable)} (
				id serial primary key,
				hash text not null,
				created_at bigint
			)
		`;
        await session.execute(migrationTableCreate);
        const dbMigrations = await session.all(
          sql`select id, hash, created_at from ${sql.identifier(migrationsTable)} order by created_at desc limit 1`
        );
        const lastDbMigration = dbMigrations[0];
        await session.transaction(async (tx) => {
          for (const migration of migrations) {
            if (!lastDbMigration || Number(lastDbMigration.created_at) < migration.folderMillis) {
              for (const stmt of migration.sql) {
                await tx.execute(sql.raw(stmt));
              }
              await tx.execute(
                sql`insert into ${sql.identifier(migrationsTable)} (\`hash\`, \`created_at\`) values(${migration.hash}, ${migration.folderMillis})`
              );
            }
          }
        });
      }
      escapeName(name2) {
        return `\`${name2}\``;
      }
      escapeParam(_num) {
        return `?`;
      }
      escapeString(str) {
        return `'${str.replace(/'/g, "''")}'`;
      }
      buildWithCTE(queries) {
        if (!queries?.length)
          return void 0;
        const withSqlChunks = [sql`with `];
        for (const [i, w] of queries.entries()) {
          withSqlChunks.push(sql`${sql.identifier(w._.alias)} as (${w._.sql})`);
          if (i < queries.length - 1) {
            withSqlChunks.push(sql`, `);
          }
        }
        withSqlChunks.push(sql` `);
        return sql.join(withSqlChunks);
      }
      buildDeleteQuery({ table: table4, where, returning, withList }) {
        const withSql = this.buildWithCTE(withList);
        const returningSql = returning ? sql` returning ${this.buildSelection(returning, { isSingleTable: true })}` : void 0;
        const whereSql = where ? sql` where ${where}` : void 0;
        return sql`${withSql}delete from ${table4}${whereSql}${returningSql}`;
      }
      buildUpdateSet(table4, set) {
        const tableColumns = table4[Table.Symbol.Columns];
        const columnNames = Object.keys(tableColumns).filter(
          (colName) => set[colName] !== void 0 || tableColumns[colName]?.onUpdateFn !== void 0
        );
        const setSize = columnNames.length;
        return sql.join(columnNames.flatMap((colName, i) => {
          const col = tableColumns[colName];
          const value = set[colName] ?? sql.param(col.onUpdateFn(), col);
          const res = sql`${sql.identifier(col.name)} = ${value}`;
          if (i < setSize - 1) {
            return [res, sql.raw(", ")];
          }
          return [res];
        }));
      }
      buildUpdateQuery({ table: table4, set, where, returning, withList }) {
        const withSql = this.buildWithCTE(withList);
        const setSql = this.buildUpdateSet(table4, set);
        const returningSql = returning ? sql` returning ${this.buildSelection(returning, { isSingleTable: true })}` : void 0;
        const whereSql = where ? sql` where ${where}` : void 0;
        return sql`${withSql}update ${table4} set ${setSql}${whereSql}${returningSql}`;
      }
      /**
       * Builds selection SQL with provided fields/expressions
       *
       * Examples:
       *
       * `select <selection> from`
       *
       * `insert ... returning <selection>`
       *
       * If `isSingleTable` is true, then columns won't be prefixed with table name
       */
      buildSelection(fields, { isSingleTable = false } = {}) {
        const columnsLen = fields.length;
        const chunks = fields.flatMap(({ field }, i) => {
          const chunk = [];
          if (is(field, SQL.Aliased) && field.isSelectionField) {
            chunk.push(sql.identifier(field.fieldAlias));
          } else if (is(field, SQL.Aliased) || is(field, SQL)) {
            const query = is(field, SQL.Aliased) ? field.sql : field;
            if (isSingleTable) {
              chunk.push(
                new SQL(
                  query.queryChunks.map((c) => {
                    if (is(c, MySqlColumn)) {
                      return sql.identifier(c.name);
                    }
                    return c;
                  })
                )
              );
            } else {
              chunk.push(query);
            }
            if (is(field, SQL.Aliased)) {
              chunk.push(sql` as ${sql.identifier(field.fieldAlias)}`);
            }
          } else if (is(field, Column)) {
            if (isSingleTable) {
              chunk.push(sql.identifier(field.name));
            } else {
              chunk.push(field);
            }
          }
          if (i < columnsLen - 1) {
            chunk.push(sql`, `);
          }
          return chunk;
        });
        return sql.join(chunks);
      }
      buildSelectQuery({
        withList,
        fields,
        fieldsFlat,
        where,
        having,
        table: table4,
        joins,
        orderBy,
        groupBy,
        limit,
        offset,
        lockingClause,
        distinct,
        setOperators
      }) {
        const fieldsList = fieldsFlat ?? orderSelectedFields(fields);
        for (const f of fieldsList) {
          if (is(f.field, Column) && getTableName(f.field.table) !== (is(table4, Subquery) ? table4._.alias : is(table4, MySqlViewBase) ? table4[ViewBaseConfig].name : is(table4, SQL) ? void 0 : getTableName(table4)) && !((table22) => joins?.some(
            ({ alias }) => alias === (table22[Table.Symbol.IsAlias] ? getTableName(table22) : table22[Table.Symbol.BaseName])
          ))(f.field.table)) {
            const tableName = getTableName(f.field.table);
            throw new Error(
              `Your "${f.path.join("->")}" field references a column "${tableName}"."${f.field.name}", but the table "${tableName}" is not part of the query! Did you forget to join it?`
            );
          }
        }
        const isSingleTable = !joins || joins.length === 0;
        const withSql = this.buildWithCTE(withList);
        const distinctSql = distinct ? sql` distinct` : void 0;
        const selection = this.buildSelection(fieldsList, { isSingleTable });
        const tableSql = (() => {
          if (is(table4, Table) && table4[Table.Symbol.OriginalName] !== table4[Table.Symbol.Name]) {
            return sql`${sql.identifier(table4[Table.Symbol.OriginalName])} ${sql.identifier(table4[Table.Symbol.Name])}`;
          }
          return table4;
        })();
        const joinsArray = [];
        if (joins) {
          for (const [index4, joinMeta] of joins.entries()) {
            if (index4 === 0) {
              joinsArray.push(sql` `);
            }
            const table22 = joinMeta.table;
            const lateralSql = joinMeta.lateral ? sql` lateral` : void 0;
            if (is(table22, MySqlTable)) {
              const tableName = table22[MySqlTable.Symbol.Name];
              const tableSchema = table22[MySqlTable.Symbol.Schema];
              const origTableName = table22[MySqlTable.Symbol.OriginalName];
              const alias = tableName === origTableName ? void 0 : joinMeta.alias;
              joinsArray.push(
                sql`${sql.raw(joinMeta.joinType)} join${lateralSql} ${tableSchema ? sql`${sql.identifier(tableSchema)}.` : void 0}${sql.identifier(origTableName)}${alias && sql` ${sql.identifier(alias)}`} on ${joinMeta.on}`
              );
            } else if (is(table22, View)) {
              const viewName = table22[ViewBaseConfig].name;
              const viewSchema = table22[ViewBaseConfig].schema;
              const origViewName = table22[ViewBaseConfig].originalName;
              const alias = viewName === origViewName ? void 0 : joinMeta.alias;
              joinsArray.push(
                sql`${sql.raw(joinMeta.joinType)} join${lateralSql} ${viewSchema ? sql`${sql.identifier(viewSchema)}.` : void 0}${sql.identifier(origViewName)}${alias && sql` ${sql.identifier(alias)}`} on ${joinMeta.on}`
              );
            } else {
              joinsArray.push(
                sql`${sql.raw(joinMeta.joinType)} join${lateralSql} ${table22} on ${joinMeta.on}`
              );
            }
            if (index4 < joins.length - 1) {
              joinsArray.push(sql` `);
            }
          }
        }
        const joinsSql = sql.join(joinsArray);
        const whereSql = where ? sql` where ${where}` : void 0;
        const havingSql = having ? sql` having ${having}` : void 0;
        let orderBySql;
        if (orderBy && orderBy.length > 0) {
          orderBySql = sql` order by ${sql.join(orderBy, sql`, `)}`;
        }
        let groupBySql;
        if (groupBy && groupBy.length > 0) {
          groupBySql = sql` group by ${sql.join(groupBy, sql`, `)}`;
        }
        const limitSql = limit ? sql` limit ${limit}` : void 0;
        const offsetSql = offset ? sql` offset ${offset}` : void 0;
        let lockingClausesSql;
        if (lockingClause) {
          const { config, strength } = lockingClause;
          lockingClausesSql = sql` for ${sql.raw(strength)}`;
          if (config.noWait) {
            lockingClausesSql.append(sql` no wait`);
          } else if (config.skipLocked) {
            lockingClausesSql.append(sql` skip locked`);
          }
        }
        const finalQuery = sql`${withSql}select${distinctSql} ${selection} from ${tableSql}${joinsSql}${whereSql}${groupBySql}${havingSql}${orderBySql}${limitSql}${offsetSql}${lockingClausesSql}`;
        if (setOperators.length > 0) {
          return this.buildSetOperations(finalQuery, setOperators);
        }
        return finalQuery;
      }
      buildSetOperations(leftSelect, setOperators) {
        const [setOperator, ...rest] = setOperators;
        if (!setOperator) {
          throw new Error("Cannot pass undefined values to any set operator");
        }
        if (rest.length === 0) {
          return this.buildSetOperationQuery({ leftSelect, setOperator });
        }
        return this.buildSetOperations(
          this.buildSetOperationQuery({ leftSelect, setOperator }),
          rest
        );
      }
      buildSetOperationQuery({
        leftSelect,
        setOperator: { type, isAll, rightSelect, limit, orderBy, offset }
      }) {
        const leftChunk = sql`(${leftSelect.getSQL()}) `;
        const rightChunk = sql`(${rightSelect.getSQL()})`;
        let orderBySql;
        if (orderBy && orderBy.length > 0) {
          const orderByValues = [];
          for (const orderByUnit of orderBy) {
            if (is(orderByUnit, MySqlColumn)) {
              orderByValues.push(sql.identifier(orderByUnit.name));
            } else if (is(orderByUnit, SQL)) {
              for (let i = 0; i < orderByUnit.queryChunks.length; i++) {
                const chunk = orderByUnit.queryChunks[i];
                if (is(chunk, MySqlColumn)) {
                  orderByUnit.queryChunks[i] = sql.identifier(chunk.name);
                }
              }
              orderByValues.push(sql`${orderByUnit}`);
            } else {
              orderByValues.push(sql`${orderByUnit}`);
            }
          }
          orderBySql = sql` order by ${sql.join(orderByValues, sql`, `)} `;
        }
        const limitSql = limit ? sql` limit ${limit}` : void 0;
        const operatorChunk = sql.raw(`${type} ${isAll ? "all " : ""}`);
        const offsetSql = offset ? sql` offset ${offset}` : void 0;
        return sql`${leftChunk}${operatorChunk}${rightChunk}${orderBySql}${limitSql}${offsetSql}`;
      }
      buildInsertQuery({ table: table4, values, ignore, onConflict }) {
        const valuesSqlList = [];
        const columns = table4[Table.Symbol.Columns];
        const colEntries = Object.entries(columns);
        const insertOrder = colEntries.map(([, column4]) => sql.identifier(column4.name));
        for (const [valueIndex, value] of values.entries()) {
          const valueList = [];
          for (const [fieldName, col] of colEntries) {
            const colValue = value[fieldName];
            if (colValue === void 0 || is(colValue, Param) && colValue.value === void 0) {
              if (col.defaultFn !== void 0) {
                const defaultFnResult = col.defaultFn();
                const defaultValue = is(defaultFnResult, SQL) ? defaultFnResult : sql.param(defaultFnResult, col);
                valueList.push(defaultValue);
              } else if (!col.default && col.onUpdateFn !== void 0) {
                const onUpdateFnResult = col.onUpdateFn();
                const newValue = is(onUpdateFnResult, SQL) ? onUpdateFnResult : sql.param(onUpdateFnResult, col);
                valueList.push(newValue);
              } else {
                valueList.push(sql`default`);
              }
            } else {
              valueList.push(colValue);
            }
          }
          valuesSqlList.push(valueList);
          if (valueIndex < values.length - 1) {
            valuesSqlList.push(sql`, `);
          }
        }
        const valuesSql = sql.join(valuesSqlList);
        const ignoreSql = ignore ? sql` ignore` : void 0;
        const onConflictSql = onConflict ? sql` on duplicate key ${onConflict}` : void 0;
        return sql`insert${ignoreSql} into ${table4} ${insertOrder} values ${valuesSql}${onConflictSql}`;
      }
      sqlToQuery(sql2) {
        return sql2.toQuery({
          escapeName: this.escapeName,
          escapeParam: this.escapeParam,
          escapeString: this.escapeString
        });
      }
      buildRelationalQuery({
        fullSchema,
        schema: schema4,
        tableNamesMap,
        table: table4,
        tableConfig,
        queryConfig: config,
        tableAlias,
        nestedQueryRelation,
        joinOn
      }) {
        let selection = [];
        let limit, offset, orderBy, where;
        const joins = [];
        if (config === true) {
          const selectionEntries = Object.entries(tableConfig.columns);
          selection = selectionEntries.map(([key, value]) => ({
            dbKey: value.name,
            tsKey: key,
            field: aliasedTableColumn(value, tableAlias),
            relationTableTsKey: void 0,
            isJson: false,
            selection: []
          }));
        } else {
          const aliasedColumns = Object.fromEntries(
            Object.entries(tableConfig.columns).map(([key, value]) => [key, aliasedTableColumn(value, tableAlias)])
          );
          if (config.where) {
            const whereSql = typeof config.where === "function" ? config.where(aliasedColumns, getOperators()) : config.where;
            where = whereSql && mapColumnsInSQLToAlias(whereSql, tableAlias);
          }
          const fieldsSelection = [];
          let selectedColumns = [];
          if (config.columns) {
            let isIncludeMode = false;
            for (const [field, value] of Object.entries(config.columns)) {
              if (value === void 0) {
                continue;
              }
              if (field in tableConfig.columns) {
                if (!isIncludeMode && value === true) {
                  isIncludeMode = true;
                }
                selectedColumns.push(field);
              }
            }
            if (selectedColumns.length > 0) {
              selectedColumns = isIncludeMode ? selectedColumns.filter((c) => config.columns?.[c] === true) : Object.keys(tableConfig.columns).filter((key) => !selectedColumns.includes(key));
            }
          } else {
            selectedColumns = Object.keys(tableConfig.columns);
          }
          for (const field of selectedColumns) {
            const column4 = tableConfig.columns[field];
            fieldsSelection.push({ tsKey: field, value: column4 });
          }
          let selectedRelations = [];
          if (config.with) {
            selectedRelations = Object.entries(config.with).filter((entry) => !!entry[1]).map(([tsKey, queryConfig]) => ({ tsKey, queryConfig, relation: tableConfig.relations[tsKey] }));
          }
          let extras;
          if (config.extras) {
            extras = typeof config.extras === "function" ? config.extras(aliasedColumns, { sql }) : config.extras;
            for (const [tsKey, value] of Object.entries(extras)) {
              fieldsSelection.push({
                tsKey,
                value: mapColumnsInAliasedSQLToAlias(value, tableAlias)
              });
            }
          }
          for (const { tsKey, value } of fieldsSelection) {
            selection.push({
              dbKey: is(value, SQL.Aliased) ? value.fieldAlias : tableConfig.columns[tsKey].name,
              tsKey,
              field: is(value, Column) ? aliasedTableColumn(value, tableAlias) : value,
              relationTableTsKey: void 0,
              isJson: false,
              selection: []
            });
          }
          let orderByOrig = typeof config.orderBy === "function" ? config.orderBy(aliasedColumns, getOrderByOperators()) : config.orderBy ?? [];
          if (!Array.isArray(orderByOrig)) {
            orderByOrig = [orderByOrig];
          }
          orderBy = orderByOrig.map((orderByValue) => {
            if (is(orderByValue, Column)) {
              return aliasedTableColumn(orderByValue, tableAlias);
            }
            return mapColumnsInSQLToAlias(orderByValue, tableAlias);
          });
          limit = config.limit;
          offset = config.offset;
          for (const {
            tsKey: selectedRelationTsKey,
            queryConfig: selectedRelationConfigValue,
            relation
          } of selectedRelations) {
            const normalizedRelation = normalizeRelation(schema4, tableNamesMap, relation);
            const relationTableName = relation.referencedTable[Table.Symbol.Name];
            const relationTableTsName = tableNamesMap[relationTableName];
            const relationTableAlias = `${tableAlias}_${selectedRelationTsKey}`;
            const joinOn2 = and(
              ...normalizedRelation.fields.map(
                (field2, i) => eq(
                  aliasedTableColumn(normalizedRelation.references[i], relationTableAlias),
                  aliasedTableColumn(field2, tableAlias)
                )
              )
            );
            const builtRelation = this.buildRelationalQuery({
              fullSchema,
              schema: schema4,
              tableNamesMap,
              table: fullSchema[relationTableTsName],
              tableConfig: schema4[relationTableTsName],
              queryConfig: is(relation, One) ? selectedRelationConfigValue === true ? { limit: 1 } : { ...selectedRelationConfigValue, limit: 1 } : selectedRelationConfigValue,
              tableAlias: relationTableAlias,
              joinOn: joinOn2,
              nestedQueryRelation: relation
            });
            const field = sql`${sql.identifier(relationTableAlias)}.${sql.identifier("data")}`.as(selectedRelationTsKey);
            joins.push({
              on: sql`true`,
              table: new Subquery(builtRelation.sql, {}, relationTableAlias),
              alias: relationTableAlias,
              joinType: "left",
              lateral: true
            });
            selection.push({
              dbKey: selectedRelationTsKey,
              tsKey: selectedRelationTsKey,
              field,
              relationTableTsKey: relationTableTsName,
              isJson: true,
              selection: builtRelation.selection
            });
          }
        }
        if (selection.length === 0) {
          throw new DrizzleError({ message: `No fields selected for table "${tableConfig.tsName}" ("${tableAlias}")` });
        }
        let result;
        where = and(joinOn, where);
        if (nestedQueryRelation) {
          let field = sql`json_array(${sql.join(
            selection.map(
              ({ field: field2, tsKey, isJson }) => isJson ? sql`${sql.identifier(`${tableAlias}_${tsKey}`)}.${sql.identifier("data")}` : is(field2, SQL.Aliased) ? field2.sql : field2
            ),
            sql`, `
          )})`;
          if (is(nestedQueryRelation, Many)) {
            field = sql`coalesce(json_arrayagg(${field}), json_array())`;
          }
          const nestedSelection = [{
            dbKey: "data",
            tsKey: "data",
            field: field.as("data"),
            isJson: true,
            relationTableTsKey: tableConfig.tsName,
            selection
          }];
          const needsSubquery = limit !== void 0 || offset !== void 0 || (orderBy?.length ?? 0) > 0;
          if (needsSubquery) {
            result = this.buildSelectQuery({
              table: aliasedTable(table4, tableAlias),
              fields: {},
              fieldsFlat: [
                {
                  path: [],
                  field: sql.raw("*")
                },
                ...(orderBy?.length ?? 0) > 0 ? [{
                  path: [],
                  field: sql`row_number() over (order by ${sql.join(orderBy, sql`, `)})`
                }] : []
              ],
              where,
              limit,
              offset,
              setOperators: []
            });
            where = void 0;
            limit = void 0;
            offset = void 0;
            orderBy = void 0;
          } else {
            result = aliasedTable(table4, tableAlias);
          }
          result = this.buildSelectQuery({
            table: is(result, MySqlTable) ? result : new Subquery(result, {}, tableAlias),
            fields: {},
            fieldsFlat: nestedSelection.map(({ field: field2 }) => ({
              path: [],
              field: is(field2, Column) ? aliasedTableColumn(field2, tableAlias) : field2
            })),
            joins,
            where,
            limit,
            offset,
            orderBy,
            setOperators: []
          });
        } else {
          result = this.buildSelectQuery({
            table: aliasedTable(table4, tableAlias),
            fields: {},
            fieldsFlat: selection.map(({ field }) => ({
              path: [],
              field: is(field, Column) ? aliasedTableColumn(field, tableAlias) : field
            })),
            joins,
            where,
            limit,
            offset,
            orderBy,
            setOperators: []
          });
        }
        return {
          tableTsKey: tableConfig.tsName,
          sql: result,
          selection
        };
      }
      buildRelationalQueryWithoutLateralSubqueries({
        fullSchema,
        schema: schema4,
        tableNamesMap,
        table: table4,
        tableConfig,
        queryConfig: config,
        tableAlias,
        nestedQueryRelation,
        joinOn
      }) {
        let selection = [];
        let limit, offset, orderBy = [], where;
        if (config === true) {
          const selectionEntries = Object.entries(tableConfig.columns);
          selection = selectionEntries.map(([key, value]) => ({
            dbKey: value.name,
            tsKey: key,
            field: aliasedTableColumn(value, tableAlias),
            relationTableTsKey: void 0,
            isJson: false,
            selection: []
          }));
        } else {
          const aliasedColumns = Object.fromEntries(
            Object.entries(tableConfig.columns).map(([key, value]) => [key, aliasedTableColumn(value, tableAlias)])
          );
          if (config.where) {
            const whereSql = typeof config.where === "function" ? config.where(aliasedColumns, getOperators()) : config.where;
            where = whereSql && mapColumnsInSQLToAlias(whereSql, tableAlias);
          }
          const fieldsSelection = [];
          let selectedColumns = [];
          if (config.columns) {
            let isIncludeMode = false;
            for (const [field, value] of Object.entries(config.columns)) {
              if (value === void 0) {
                continue;
              }
              if (field in tableConfig.columns) {
                if (!isIncludeMode && value === true) {
                  isIncludeMode = true;
                }
                selectedColumns.push(field);
              }
            }
            if (selectedColumns.length > 0) {
              selectedColumns = isIncludeMode ? selectedColumns.filter((c) => config.columns?.[c] === true) : Object.keys(tableConfig.columns).filter((key) => !selectedColumns.includes(key));
            }
          } else {
            selectedColumns = Object.keys(tableConfig.columns);
          }
          for (const field of selectedColumns) {
            const column4 = tableConfig.columns[field];
            fieldsSelection.push({ tsKey: field, value: column4 });
          }
          let selectedRelations = [];
          if (config.with) {
            selectedRelations = Object.entries(config.with).filter((entry) => !!entry[1]).map(([tsKey, queryConfig]) => ({ tsKey, queryConfig, relation: tableConfig.relations[tsKey] }));
          }
          let extras;
          if (config.extras) {
            extras = typeof config.extras === "function" ? config.extras(aliasedColumns, { sql }) : config.extras;
            for (const [tsKey, value] of Object.entries(extras)) {
              fieldsSelection.push({
                tsKey,
                value: mapColumnsInAliasedSQLToAlias(value, tableAlias)
              });
            }
          }
          for (const { tsKey, value } of fieldsSelection) {
            selection.push({
              dbKey: is(value, SQL.Aliased) ? value.fieldAlias : tableConfig.columns[tsKey].name,
              tsKey,
              field: is(value, Column) ? aliasedTableColumn(value, tableAlias) : value,
              relationTableTsKey: void 0,
              isJson: false,
              selection: []
            });
          }
          let orderByOrig = typeof config.orderBy === "function" ? config.orderBy(aliasedColumns, getOrderByOperators()) : config.orderBy ?? [];
          if (!Array.isArray(orderByOrig)) {
            orderByOrig = [orderByOrig];
          }
          orderBy = orderByOrig.map((orderByValue) => {
            if (is(orderByValue, Column)) {
              return aliasedTableColumn(orderByValue, tableAlias);
            }
            return mapColumnsInSQLToAlias(orderByValue, tableAlias);
          });
          limit = config.limit;
          offset = config.offset;
          for (const {
            tsKey: selectedRelationTsKey,
            queryConfig: selectedRelationConfigValue,
            relation
          } of selectedRelations) {
            const normalizedRelation = normalizeRelation(schema4, tableNamesMap, relation);
            const relationTableName = relation.referencedTable[Table.Symbol.Name];
            const relationTableTsName = tableNamesMap[relationTableName];
            const relationTableAlias = `${tableAlias}_${selectedRelationTsKey}`;
            const joinOn2 = and(
              ...normalizedRelation.fields.map(
                (field2, i) => eq(
                  aliasedTableColumn(normalizedRelation.references[i], relationTableAlias),
                  aliasedTableColumn(field2, tableAlias)
                )
              )
            );
            const builtRelation = this.buildRelationalQueryWithoutLateralSubqueries({
              fullSchema,
              schema: schema4,
              tableNamesMap,
              table: fullSchema[relationTableTsName],
              tableConfig: schema4[relationTableTsName],
              queryConfig: is(relation, One) ? selectedRelationConfigValue === true ? { limit: 1 } : { ...selectedRelationConfigValue, limit: 1 } : selectedRelationConfigValue,
              tableAlias: relationTableAlias,
              joinOn: joinOn2,
              nestedQueryRelation: relation
            });
            let fieldSql = sql`(${builtRelation.sql})`;
            if (is(relation, Many)) {
              fieldSql = sql`coalesce(${fieldSql}, json_array())`;
            }
            const field = fieldSql.as(selectedRelationTsKey);
            selection.push({
              dbKey: selectedRelationTsKey,
              tsKey: selectedRelationTsKey,
              field,
              relationTableTsKey: relationTableTsName,
              isJson: true,
              selection: builtRelation.selection
            });
          }
        }
        if (selection.length === 0) {
          throw new DrizzleError({
            message: `No fields selected for table "${tableConfig.tsName}" ("${tableAlias}"). You need to have at least one item in "columns", "with" or "extras". If you need to select all columns, omit the "columns" key or set it to undefined.`
          });
        }
        let result;
        where = and(joinOn, where);
        if (nestedQueryRelation) {
          let field = sql`json_array(${sql.join(
            selection.map(
              ({ field: field2 }) => is(field2, MySqlColumn) ? sql.identifier(field2.name) : is(field2, SQL.Aliased) ? field2.sql : field2
            ),
            sql`, `
          )})`;
          if (is(nestedQueryRelation, Many)) {
            field = sql`json_arrayagg(${field})`;
          }
          const nestedSelection = [{
            dbKey: "data",
            tsKey: "data",
            field,
            isJson: true,
            relationTableTsKey: tableConfig.tsName,
            selection
          }];
          const needsSubquery = limit !== void 0 || offset !== void 0 || orderBy.length > 0;
          if (needsSubquery) {
            result = this.buildSelectQuery({
              table: aliasedTable(table4, tableAlias),
              fields: {},
              fieldsFlat: [
                {
                  path: [],
                  field: sql.raw("*")
                },
                ...orderBy.length > 0 ? [{
                  path: [],
                  field: sql`row_number() over (order by ${sql.join(orderBy, sql`, `)})`
                }] : []
              ],
              where,
              limit,
              offset,
              setOperators: []
            });
            where = void 0;
            limit = void 0;
            offset = void 0;
            orderBy = void 0;
          } else {
            result = aliasedTable(table4, tableAlias);
          }
          result = this.buildSelectQuery({
            table: is(result, MySqlTable) ? result : new Subquery(result, {}, tableAlias),
            fields: {},
            fieldsFlat: nestedSelection.map(({ field: field2 }) => ({
              path: [],
              field: is(field2, Column) ? aliasedTableColumn(field2, tableAlias) : field2
            })),
            where,
            limit,
            offset,
            orderBy,
            setOperators: []
          });
        } else {
          result = this.buildSelectQuery({
            table: aliasedTable(table4, tableAlias),
            fields: {},
            fieldsFlat: selection.map(({ field }) => ({
              path: [],
              field: is(field, Column) ? aliasedTableColumn(field, tableAlias) : field
            })),
            where,
            limit,
            offset,
            orderBy,
            setOperators: []
          });
        }
        return {
          tableTsKey: tableConfig.tsName,
          sql: result,
          selection
        };
      }
    };
    _a273 = entityKind;
    __publicField(MySqlDialect, _a273, "MySqlDialect");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/query-builders/select.js
function createSetOperator3(type, isAll) {
  return (leftSelect, rightSelect, ...restSelects) => {
    const setOperators = [rightSelect, ...restSelects].map((select) => ({
      type,
      isAll,
      rightSelect: select
    }));
    for (const setOperator of setOperators) {
      if (!haveSameKeys(leftSelect.getSelectedFields(), setOperator.rightSelect.getSelectedFields())) {
        throw new Error(
          "Set operator error (union / intersect / except): selected fields are not the same or are in a different order"
        );
      }
    }
    return leftSelect.addSetOperators(setOperators);
  };
}
var _a274, MySqlSelectBuilder, _a275, MySqlSelectQueryBuilderBase, _a276, MySqlSelectBase, getMySqlSetOperators, union15, unionAll3, intersect3, intersectAll2, except3, exceptAll2;
var init_select4 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/query-builders/select.js"() {
    "use strict";
    init_entity();
    init_query_builder();
    init_query_promise();
    init_selection_proxy();
    init_sql();
    init_subquery();
    init_table();
    init_utils();
    init_utils();
    init_view_common();
    init_view_base3();
    MySqlSelectBuilder = class {
      constructor(config) {
        __publicField(this, "fields");
        __publicField(this, "session");
        __publicField(this, "dialect");
        __publicField(this, "withList", []);
        __publicField(this, "distinct");
        this.fields = config.fields;
        this.session = config.session;
        this.dialect = config.dialect;
        if (config.withList) {
          this.withList = config.withList;
        }
        this.distinct = config.distinct;
      }
      from(source) {
        const isPartialSelect = !!this.fields;
        let fields;
        if (this.fields) {
          fields = this.fields;
        } else if (is(source, Subquery)) {
          fields = Object.fromEntries(
            Object.keys(source._.selectedFields).map((key) => [key, source[key]])
          );
        } else if (is(source, MySqlViewBase)) {
          fields = source[ViewBaseConfig].selectedFields;
        } else if (is(source, SQL)) {
          fields = {};
        } else {
          fields = getTableColumns(source);
        }
        return new MySqlSelectBase(
          {
            table: source,
            fields,
            isPartialSelect,
            session: this.session,
            dialect: this.dialect,
            withList: this.withList,
            distinct: this.distinct
          }
        );
      }
    };
    _a274 = entityKind;
    __publicField(MySqlSelectBuilder, _a274, "MySqlSelectBuilder");
    MySqlSelectQueryBuilderBase = class extends TypedQueryBuilder {
      constructor({ table: table4, fields, isPartialSelect, session, dialect: dialect7, withList, distinct }) {
        super();
        __publicField(this, "_");
        __publicField(this, "config");
        __publicField(this, "joinsNotNullableMap");
        __publicField(this, "tableName");
        __publicField(this, "isPartialSelect");
        /** @internal */
        __publicField(this, "session");
        __publicField(this, "dialect");
        /**
         * Executes a `left join` operation by adding another table to the current query.
         *
         * Calling this method associates each row of the table with the corresponding row from the joined table, if a match is found. If no matching row exists, it sets all columns of the joined table to null.
         *
         * See docs: {@link https://orm.drizzle.team/docs/joins#left-join}
         *
         * @param table the table to join.
         * @param on the `on` clause.
         *
         * @example
         *
         * ```ts
         * // Select all users and their pets
         * const usersWithPets: { user: User; pets: Pet | null }[] = await db.select()
         *   .from(users)
         *   .leftJoin(pets, eq(users.id, pets.ownerId))
         *
         * // Select userId and petId
         * const usersIdsAndPetIds: { userId: number; petId: number | null }[] = await db.select({
         *   userId: users.id,
         *   petId: pets.id,
         * })
         *   .from(users)
         *   .leftJoin(pets, eq(users.id, pets.ownerId))
         * ```
         */
        __publicField(this, "leftJoin", this.createJoin("left"));
        /**
         * Executes a `right join` operation by adding another table to the current query.
         *
         * Calling this method associates each row of the joined table with the corresponding row from the main table, if a match is found. If no matching row exists, it sets all columns of the main table to null.
         *
         * See docs: {@link https://orm.drizzle.team/docs/joins#right-join}
         *
         * @param table the table to join.
         * @param on the `on` clause.
         *
         * @example
         *
         * ```ts
         * // Select all users and their pets
         * const usersWithPets: { user: User | null; pets: Pet }[] = await db.select()
         *   .from(users)
         *   .rightJoin(pets, eq(users.id, pets.ownerId))
         *
         * // Select userId and petId
         * const usersIdsAndPetIds: { userId: number | null; petId: number }[] = await db.select({
         *   userId: users.id,
         *   petId: pets.id,
         * })
         *   .from(users)
         *   .rightJoin(pets, eq(users.id, pets.ownerId))
         * ```
         */
        __publicField(this, "rightJoin", this.createJoin("right"));
        /**
         * Executes an `inner join` operation, creating a new table by combining rows from two tables that have matching values.
         *
         * Calling this method retrieves rows that have corresponding entries in both joined tables. Rows without matching entries in either table are excluded, resulting in a table that includes only matching pairs.
         *
         * See docs: {@link https://orm.drizzle.team/docs/joins#inner-join}
         *
         * @param table the table to join.
         * @param on the `on` clause.
         *
         * @example
         *
         * ```ts
         * // Select all users and their pets
         * const usersWithPets: { user: User; pets: Pet }[] = await db.select()
         *   .from(users)
         *   .innerJoin(pets, eq(users.id, pets.ownerId))
         *
         * // Select userId and petId
         * const usersIdsAndPetIds: { userId: number; petId: number }[] = await db.select({
         *   userId: users.id,
         *   petId: pets.id,
         * })
         *   .from(users)
         *   .innerJoin(pets, eq(users.id, pets.ownerId))
         * ```
         */
        __publicField(this, "innerJoin", this.createJoin("inner"));
        /**
         * Executes a `full join` operation by combining rows from two tables into a new table.
         *
         * Calling this method retrieves all rows from both main and joined tables, merging rows with matching values and filling in `null` for non-matching columns.
         *
         * See docs: {@link https://orm.drizzle.team/docs/joins#full-join}
         *
         * @param table the table to join.
         * @param on the `on` clause.
         *
         * @example
         *
         * ```ts
         * // Select all users and their pets
         * const usersWithPets: { user: User | null; pets: Pet | null }[] = await db.select()
         *   .from(users)
         *   .fullJoin(pets, eq(users.id, pets.ownerId))
         *
         * // Select userId and petId
         * const usersIdsAndPetIds: { userId: number | null; petId: number | null }[] = await db.select({
         *   userId: users.id,
         *   petId: pets.id,
         * })
         *   .from(users)
         *   .fullJoin(pets, eq(users.id, pets.ownerId))
         * ```
         */
        __publicField(this, "fullJoin", this.createJoin("full"));
        /**
         * Adds `union` set operator to the query.
         *
         * Calling this method will combine the result sets of the `select` statements and remove any duplicate rows that appear across them.
         *
         * See docs: {@link https://orm.drizzle.team/docs/set-operations#union}
         *
         * @example
         *
         * ```ts
         * // Select all unique names from customers and users tables
         * await db.select({ name: users.name })
         *   .from(users)
         *   .union(
         *     db.select({ name: customers.name }).from(customers)
         *   );
         * // or
         * import { union } from 'drizzle-orm/mysql-core'
         *
         * await union(
         *   db.select({ name: users.name }).from(users),
         *   db.select({ name: customers.name }).from(customers)
         * );
         * ```
         */
        __publicField(this, "union", this.createSetOperator("union", false));
        /**
         * Adds `union all` set operator to the query.
         *
         * Calling this method will combine the result-set of the `select` statements and keep all duplicate rows that appear across them.
         *
         * See docs: {@link https://orm.drizzle.team/docs/set-operations#union-all}
         *
         * @example
         *
         * ```ts
         * // Select all transaction ids from both online and in-store sales
         * await db.select({ transaction: onlineSales.transactionId })
         *   .from(onlineSales)
         *   .unionAll(
         *     db.select({ transaction: inStoreSales.transactionId }).from(inStoreSales)
         *   );
         * // or
         * import { unionAll } from 'drizzle-orm/mysql-core'
         *
         * await unionAll(
         *   db.select({ transaction: onlineSales.transactionId }).from(onlineSales),
         *   db.select({ transaction: inStoreSales.transactionId }).from(inStoreSales)
         * );
         * ```
         */
        __publicField(this, "unionAll", this.createSetOperator("union", true));
        /**
         * Adds `intersect` set operator to the query.
         *
         * Calling this method will retain only the rows that are present in both result sets and eliminate duplicates.
         *
         * See docs: {@link https://orm.drizzle.team/docs/set-operations#intersect}
         *
         * @example
         *
         * ```ts
         * // Select course names that are offered in both departments A and B
         * await db.select({ courseName: depA.courseName })
         *   .from(depA)
         *   .intersect(
         *     db.select({ courseName: depB.courseName }).from(depB)
         *   );
         * // or
         * import { intersect } from 'drizzle-orm/mysql-core'
         *
         * await intersect(
         *   db.select({ courseName: depA.courseName }).from(depA),
         *   db.select({ courseName: depB.courseName }).from(depB)
         * );
         * ```
         */
        __publicField(this, "intersect", this.createSetOperator("intersect", false));
        /**
         * Adds `intersect all` set operator to the query.
         *
         * Calling this method will retain only the rows that are present in both result sets including all duplicates.
         *
         * See docs: {@link https://orm.drizzle.team/docs/set-operations#intersect-all}
         *
         * @example
         *
         * ```ts
         * // Select all products and quantities that are ordered by both regular and VIP customers
         * await db.select({
         *   productId: regularCustomerOrders.productId,
         *   quantityOrdered: regularCustomerOrders.quantityOrdered
         * })
         * .from(regularCustomerOrders)
         * .intersectAll(
         *   db.select({
         *     productId: vipCustomerOrders.productId,
         *     quantityOrdered: vipCustomerOrders.quantityOrdered
         *   })
         *   .from(vipCustomerOrders)
         * );
         * // or
         * import { intersectAll } from 'drizzle-orm/mysql-core'
         *
         * await intersectAll(
         *   db.select({
         *     productId: regularCustomerOrders.productId,
         *     quantityOrdered: regularCustomerOrders.quantityOrdered
         *   })
         *   .from(regularCustomerOrders),
         *   db.select({
         *     productId: vipCustomerOrders.productId,
         *     quantityOrdered: vipCustomerOrders.quantityOrdered
         *   })
         *   .from(vipCustomerOrders)
         * );
         * ```
         */
        __publicField(this, "intersectAll", this.createSetOperator("intersect", true));
        /**
         * Adds `except` set operator to the query.
         *
         * Calling this method will retrieve all unique rows from the left query, except for the rows that are present in the result set of the right query.
         *
         * See docs: {@link https://orm.drizzle.team/docs/set-operations#except}
         *
         * @example
         *
         * ```ts
         * // Select all courses offered in department A but not in department B
         * await db.select({ courseName: depA.courseName })
         *   .from(depA)
         *   .except(
         *     db.select({ courseName: depB.courseName }).from(depB)
         *   );
         * // or
         * import { except } from 'drizzle-orm/mysql-core'
         *
         * await except(
         *   db.select({ courseName: depA.courseName }).from(depA),
         *   db.select({ courseName: depB.courseName }).from(depB)
         * );
         * ```
         */
        __publicField(this, "except", this.createSetOperator("except", false));
        /**
         * Adds `except all` set operator to the query.
         *
         * Calling this method will retrieve all rows from the left query, except for the rows that are present in the result set of the right query.
         *
         * See docs: {@link https://orm.drizzle.team/docs/set-operations#except-all}
         *
         * @example
         *
         * ```ts
         * // Select all products that are ordered by regular customers but not by VIP customers
         * await db.select({
         *   productId: regularCustomerOrders.productId,
         *   quantityOrdered: regularCustomerOrders.quantityOrdered,
         * })
         * .from(regularCustomerOrders)
         * .exceptAll(
         *   db.select({
         *     productId: vipCustomerOrders.productId,
         *     quantityOrdered: vipCustomerOrders.quantityOrdered,
         *   })
         *   .from(vipCustomerOrders)
         * );
         * // or
         * import { exceptAll } from 'drizzle-orm/mysql-core'
         *
         * await exceptAll(
         *   db.select({
         *     productId: regularCustomerOrders.productId,
         *     quantityOrdered: regularCustomerOrders.quantityOrdered
         *   })
         *   .from(regularCustomerOrders),
         *   db.select({
         *     productId: vipCustomerOrders.productId,
         *     quantityOrdered: vipCustomerOrders.quantityOrdered
         *   })
         *   .from(vipCustomerOrders)
         * );
         * ```
         */
        __publicField(this, "exceptAll", this.createSetOperator("except", true));
        this.config = {
          withList,
          table: table4,
          fields: { ...fields },
          distinct,
          setOperators: []
        };
        this.isPartialSelect = isPartialSelect;
        this.session = session;
        this.dialect = dialect7;
        this._ = {
          selectedFields: fields
        };
        this.tableName = getTableLikeName(table4);
        this.joinsNotNullableMap = typeof this.tableName === "string" ? { [this.tableName]: true } : {};
      }
      createJoin(joinType) {
        return (table4, on) => {
          const baseTableName = this.tableName;
          const tableName = getTableLikeName(table4);
          if (typeof tableName === "string" && this.config.joins?.some((join) => join.alias === tableName)) {
            throw new Error(`Alias "${tableName}" is already used in this query`);
          }
          if (!this.isPartialSelect) {
            if (Object.keys(this.joinsNotNullableMap).length === 1 && typeof baseTableName === "string") {
              this.config.fields = {
                [baseTableName]: this.config.fields
              };
            }
            if (typeof tableName === "string" && !is(table4, SQL)) {
              const selection = is(table4, Subquery) ? table4._.selectedFields : is(table4, View) ? table4[ViewBaseConfig].selectedFields : table4[Table.Symbol.Columns];
              this.config.fields[tableName] = selection;
            }
          }
          if (typeof on === "function") {
            on = on(
              new Proxy(
                this.config.fields,
                new SelectionProxyHandler({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })
              )
            );
          }
          if (!this.config.joins) {
            this.config.joins = [];
          }
          this.config.joins.push({ on, table: table4, joinType, alias: tableName });
          if (typeof tableName === "string") {
            switch (joinType) {
              case "left": {
                this.joinsNotNullableMap[tableName] = false;
                break;
              }
              case "right": {
                this.joinsNotNullableMap = Object.fromEntries(
                  Object.entries(this.joinsNotNullableMap).map(([key]) => [key, false])
                );
                this.joinsNotNullableMap[tableName] = true;
                break;
              }
              case "inner": {
                this.joinsNotNullableMap[tableName] = true;
                break;
              }
              case "full": {
                this.joinsNotNullableMap = Object.fromEntries(
                  Object.entries(this.joinsNotNullableMap).map(([key]) => [key, false])
                );
                this.joinsNotNullableMap[tableName] = false;
                break;
              }
            }
          }
          return this;
        };
      }
      createSetOperator(type, isAll) {
        return (rightSelection) => {
          const rightSelect = typeof rightSelection === "function" ? rightSelection(getMySqlSetOperators()) : rightSelection;
          if (!haveSameKeys(this.getSelectedFields(), rightSelect.getSelectedFields())) {
            throw new Error(
              "Set operator error (union / intersect / except): selected fields are not the same or are in a different order"
            );
          }
          this.config.setOperators.push({ type, isAll, rightSelect });
          return this;
        };
      }
      /** @internal */
      addSetOperators(setOperators) {
        this.config.setOperators.push(...setOperators);
        return this;
      }
      /**
       * Adds a `where` clause to the query.
       *
       * Calling this method will select only those rows that fulfill a specified condition.
       *
       * See docs: {@link https://orm.drizzle.team/docs/select#filtering}
       *
       * @param where the `where` clause.
       *
       * @example
       * You can use conditional operators and `sql function` to filter the rows to be selected.
       *
       * ```ts
       * // Select all cars with green color
       * await db.select().from(cars).where(eq(cars.color, 'green'));
       * // or
       * await db.select().from(cars).where(sql`${cars.color} = 'green'`)
       * ```
       *
       * You can logically combine conditional operators with `and()` and `or()` operators:
       *
       * ```ts
       * // Select all BMW cars with a green color
       * await db.select().from(cars).where(and(eq(cars.color, 'green'), eq(cars.brand, 'BMW')));
       *
       * // Select all cars with the green or blue color
       * await db.select().from(cars).where(or(eq(cars.color, 'green'), eq(cars.color, 'blue')));
       * ```
       */
      where(where) {
        if (typeof where === "function") {
          where = where(
            new Proxy(
              this.config.fields,
              new SelectionProxyHandler({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })
            )
          );
        }
        this.config.where = where;
        return this;
      }
      /**
       * Adds a `having` clause to the query.
       *
       * Calling this method will select only those rows that fulfill a specified condition. It is typically used with aggregate functions to filter the aggregated data based on a specified condition.
       *
       * See docs: {@link https://orm.drizzle.team/docs/select#aggregations}
       *
       * @param having the `having` clause.
       *
       * @example
       *
       * ```ts
       * // Select all brands with more than one car
       * await db.select({
       * 	brand: cars.brand,
       * 	count: sql<number>`cast(count(${cars.id}) as int)`,
       * })
       *   .from(cars)
       *   .groupBy(cars.brand)
       *   .having(({ count }) => gt(count, 1));
       * ```
       */
      having(having) {
        if (typeof having === "function") {
          having = having(
            new Proxy(
              this.config.fields,
              new SelectionProxyHandler({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })
            )
          );
        }
        this.config.having = having;
        return this;
      }
      groupBy(...columns) {
        if (typeof columns[0] === "function") {
          const groupBy = columns[0](
            new Proxy(
              this.config.fields,
              new SelectionProxyHandler({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" })
            )
          );
          this.config.groupBy = Array.isArray(groupBy) ? groupBy : [groupBy];
        } else {
          this.config.groupBy = columns;
        }
        return this;
      }
      orderBy(...columns) {
        if (typeof columns[0] === "function") {
          const orderBy = columns[0](
            new Proxy(
              this.config.fields,
              new SelectionProxyHandler({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" })
            )
          );
          const orderByArray = Array.isArray(orderBy) ? orderBy : [orderBy];
          if (this.config.setOperators.length > 0) {
            this.config.setOperators.at(-1).orderBy = orderByArray;
          } else {
            this.config.orderBy = orderByArray;
          }
        } else {
          const orderByArray = columns;
          if (this.config.setOperators.length > 0) {
            this.config.setOperators.at(-1).orderBy = orderByArray;
          } else {
            this.config.orderBy = orderByArray;
          }
        }
        return this;
      }
      /**
       * Adds a `limit` clause to the query.
       *
       * Calling this method will set the maximum number of rows that will be returned by this query.
       *
       * See docs: {@link https://orm.drizzle.team/docs/select#limit--offset}
       *
       * @param limit the `limit` clause.
       *
       * @example
       *
       * ```ts
       * // Get the first 10 people from this query.
       * await db.select().from(people).limit(10);
       * ```
       */
      limit(limit) {
        if (this.config.setOperators.length > 0) {
          this.config.setOperators.at(-1).limit = limit;
        } else {
          this.config.limit = limit;
        }
        return this;
      }
      /**
       * Adds an `offset` clause to the query.
       *
       * Calling this method will skip a number of rows when returning results from this query.
       *
       * See docs: {@link https://orm.drizzle.team/docs/select#limit--offset}
       *
       * @param offset the `offset` clause.
       *
       * @example
       *
       * ```ts
       * // Get the 10th-20th people from this query.
       * await db.select().from(people).offset(10).limit(10);
       * ```
       */
      offset(offset) {
        if (this.config.setOperators.length > 0) {
          this.config.setOperators.at(-1).offset = offset;
        } else {
          this.config.offset = offset;
        }
        return this;
      }
      /**
       * Adds a `for` clause to the query.
       *
       * Calling this method will specify a lock strength for this query that controls how strictly it acquires exclusive access to the rows being queried.
       *
       * See docs: {@link https://dev.mysql.com/doc/refman/8.0/en/innodb-locking-reads.html}
       *
       * @param strength the lock strength.
       * @param config the lock configuration.
       */
      for(strength, config = {}) {
        this.config.lockingClause = { strength, config };
        return this;
      }
      /** @internal */
      getSQL() {
        return this.dialect.buildSelectQuery(this.config);
      }
      toSQL() {
        const { typings: _typings, ...rest } = this.dialect.sqlToQuery(this.getSQL());
        return rest;
      }
      as(alias) {
        return new Proxy(
          new Subquery(this.getSQL(), this.config.fields, alias),
          new SelectionProxyHandler({ alias, sqlAliasedBehavior: "alias", sqlBehavior: "error" })
        );
      }
      /** @internal */
      getSelectedFields() {
        return new Proxy(
          this.config.fields,
          new SelectionProxyHandler({ alias: this.tableName, sqlAliasedBehavior: "alias", sqlBehavior: "error" })
        );
      }
      $dynamic() {
        return this;
      }
    };
    _a275 = entityKind;
    __publicField(MySqlSelectQueryBuilderBase, _a275, "MySqlSelectQueryBuilder");
    MySqlSelectBase = class extends MySqlSelectQueryBuilderBase {
      constructor() {
        super(...arguments);
        __publicField(this, "execute", (placeholderValues) => {
          return this.prepare().execute(placeholderValues);
        });
        __publicField(this, "createIterator", () => {
          const self = this;
          return async function* (placeholderValues) {
            yield* self.prepare().iterator(placeholderValues);
          };
        });
        __publicField(this, "iterator", this.createIterator());
      }
      prepare() {
        if (!this.session) {
          throw new Error("Cannot execute a query on a query builder. Please use a database instance instead.");
        }
        const fieldsList = orderSelectedFields(this.config.fields);
        const query = this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()), fieldsList);
        query.joinsNotNullableMap = this.joinsNotNullableMap;
        return query;
      }
    };
    _a276 = entityKind;
    __publicField(MySqlSelectBase, _a276, "MySqlSelect");
    applyMixins(MySqlSelectBase, [QueryPromise]);
    getMySqlSetOperators = () => ({
      union: union15,
      unionAll: unionAll3,
      intersect: intersect3,
      intersectAll: intersectAll2,
      except: except3,
      exceptAll: exceptAll2
    });
    union15 = createSetOperator3("union", false);
    unionAll3 = createSetOperator3("union", true);
    intersect3 = createSetOperator3("intersect", false);
    intersectAll2 = createSetOperator3("intersect", true);
    except3 = createSetOperator3("except", false);
    exceptAll2 = createSetOperator3("except", true);
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/query-builders/query-builder.js
var _a277, QueryBuilder3;
var init_query_builder4 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/query-builders/query-builder.js"() {
    "use strict";
    init_entity();
    init_dialect3();
    init_selection_proxy();
    init_subquery();
    init_select4();
    QueryBuilder3 = class {
      constructor() {
        __publicField(this, "dialect");
      }
      $with(alias) {
        const queryBuilder = this;
        return {
          as(qb) {
            if (typeof qb === "function") {
              qb = qb(queryBuilder);
            }
            return new Proxy(
              new WithSubquery(qb.getSQL(), qb.getSelectedFields(), alias, true),
              new SelectionProxyHandler({ alias, sqlAliasedBehavior: "alias", sqlBehavior: "error" })
            );
          }
        };
      }
      with(...queries) {
        const self = this;
        function select(fields) {
          return new MySqlSelectBuilder({
            fields: fields ?? void 0,
            session: void 0,
            dialect: self.getDialect(),
            withList: queries
          });
        }
        function selectDistinct(fields) {
          return new MySqlSelectBuilder({
            fields: fields ?? void 0,
            session: void 0,
            dialect: self.getDialect(),
            withList: queries,
            distinct: true
          });
        }
        return { select, selectDistinct };
      }
      select(fields) {
        return new MySqlSelectBuilder({ fields: fields ?? void 0, session: void 0, dialect: this.getDialect() });
      }
      selectDistinct(fields) {
        return new MySqlSelectBuilder({
          fields: fields ?? void 0,
          session: void 0,
          dialect: this.getDialect(),
          distinct: true
        });
      }
      // Lazy load dialect to avoid circular dependency
      getDialect() {
        if (!this.dialect) {
          this.dialect = new MySqlDialect();
        }
        return this.dialect;
      }
    };
    _a277 = entityKind;
    __publicField(QueryBuilder3, _a277, "MySqlQueryBuilder");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/query-builders/select.types.js
var init_select_types3 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/query-builders/select.types.js"() {
    "use strict";
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/query-builders/update.js
var _a278, MySqlUpdateBuilder, _a279, MySqlUpdateBase;
var init_update3 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/query-builders/update.js"() {
    "use strict";
    init_entity();
    init_query_promise();
    init_utils();
    MySqlUpdateBuilder = class {
      constructor(table4, session, dialect7, withList) {
        this.table = table4;
        this.session = session;
        this.dialect = dialect7;
        this.withList = withList;
      }
      set(values) {
        return new MySqlUpdateBase(this.table, mapUpdateSet(this.table, values), this.session, this.dialect, this.withList);
      }
    };
    _a278 = entityKind;
    __publicField(MySqlUpdateBuilder, _a278, "MySqlUpdateBuilder");
    MySqlUpdateBase = class extends QueryPromise {
      constructor(table4, set, session, dialect7, withList) {
        super();
        __publicField(this, "config");
        __publicField(this, "execute", (placeholderValues) => {
          return this.prepare().execute(placeholderValues);
        });
        __publicField(this, "createIterator", () => {
          const self = this;
          return async function* (placeholderValues) {
            yield* self.prepare().iterator(placeholderValues);
          };
        });
        __publicField(this, "iterator", this.createIterator());
        this.session = session;
        this.dialect = dialect7;
        this.config = { set, table: table4, withList };
      }
      /**
       * Adds a 'where' clause to the query.
       *
       * Calling this method will update only those rows that fulfill a specified condition.
       *
       * See docs: {@link https://orm.drizzle.team/docs/update}
       *
       * @param where the 'where' clause.
       *
       * @example
       * You can use conditional operators and `sql function` to filter the rows to be updated.
       *
       * ```ts
       * // Update all cars with green color
       * db.update(cars).set({ color: 'red' })
       *   .where(eq(cars.color, 'green'));
       * // or
       * db.update(cars).set({ color: 'red' })
       *   .where(sql`${cars.color} = 'green'`)
       * ```
       *
       * You can logically combine conditional operators with `and()` and `or()` operators:
       *
       * ```ts
       * // Update all BMW cars with a green color
       * db.update(cars).set({ color: 'red' })
       *   .where(and(eq(cars.color, 'green'), eq(cars.brand, 'BMW')));
       *
       * // Update all cars with the green or blue color
       * db.update(cars).set({ color: 'red' })
       *   .where(or(eq(cars.color, 'green'), eq(cars.color, 'blue')));
       * ```
       */
      where(where) {
        this.config.where = where;
        return this;
      }
      /** @internal */
      getSQL() {
        return this.dialect.buildUpdateQuery(this.config);
      }
      toSQL() {
        const { typings: _typings, ...rest } = this.dialect.sqlToQuery(this.getSQL());
        return rest;
      }
      prepare() {
        return this.session.prepareQuery(
          this.dialect.sqlToQuery(this.getSQL()),
          this.config.returning
        );
      }
      $dynamic() {
        return this;
      }
    };
    _a279 = entityKind;
    __publicField(MySqlUpdateBase, _a279, "MySqlUpdate");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/query-builders/index.js
var init_query_builders3 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/query-builders/index.js"() {
    "use strict";
    init_delete3();
    init_insert3();
    init_query_builder4();
    init_select4();
    init_select_types3();
    init_update3();
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/query-builders/query.js
var _a280, RelationalQueryBuilder3, _a281, MySqlRelationalQuery;
var init_query3 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/query-builders/query.js"() {
    "use strict";
    init_entity();
    init_query_promise();
    init_relations();
    RelationalQueryBuilder3 = class {
      constructor(fullSchema, schema4, tableNamesMap, table4, tableConfig, dialect7, session, mode) {
        this.fullSchema = fullSchema;
        this.schema = schema4;
        this.tableNamesMap = tableNamesMap;
        this.table = table4;
        this.tableConfig = tableConfig;
        this.dialect = dialect7;
        this.session = session;
        this.mode = mode;
      }
      findMany(config) {
        return new MySqlRelationalQuery(
          this.fullSchema,
          this.schema,
          this.tableNamesMap,
          this.table,
          this.tableConfig,
          this.dialect,
          this.session,
          config ? config : {},
          "many",
          this.mode
        );
      }
      findFirst(config) {
        return new MySqlRelationalQuery(
          this.fullSchema,
          this.schema,
          this.tableNamesMap,
          this.table,
          this.tableConfig,
          this.dialect,
          this.session,
          config ? { ...config, limit: 1 } : { limit: 1 },
          "first",
          this.mode
        );
      }
    };
    _a280 = entityKind;
    __publicField(RelationalQueryBuilder3, _a280, "MySqlRelationalQueryBuilder");
    MySqlRelationalQuery = class extends QueryPromise {
      constructor(fullSchema, schema4, tableNamesMap, table4, tableConfig, dialect7, session, config, queryMode, mode) {
        super();
        this.fullSchema = fullSchema;
        this.schema = schema4;
        this.tableNamesMap = tableNamesMap;
        this.table = table4;
        this.tableConfig = tableConfig;
        this.dialect = dialect7;
        this.session = session;
        this.config = config;
        this.queryMode = queryMode;
        this.mode = mode;
      }
      prepare() {
        const { query, builtQuery } = this._toSQL();
        return this.session.prepareQuery(
          builtQuery,
          void 0,
          (rawRows) => {
            const rows = rawRows.map((row) => mapRelationalRow(this.schema, this.tableConfig, row, query.selection));
            if (this.queryMode === "first") {
              return rows[0];
            }
            return rows;
          }
        );
      }
      _getQuery() {
        const query = this.mode === "planetscale" ? this.dialect.buildRelationalQueryWithoutLateralSubqueries({
          fullSchema: this.fullSchema,
          schema: this.schema,
          tableNamesMap: this.tableNamesMap,
          table: this.table,
          tableConfig: this.tableConfig,
          queryConfig: this.config,
          tableAlias: this.tableConfig.tsName
        }) : this.dialect.buildRelationalQuery({
          fullSchema: this.fullSchema,
          schema: this.schema,
          tableNamesMap: this.tableNamesMap,
          table: this.table,
          tableConfig: this.tableConfig,
          queryConfig: this.config,
          tableAlias: this.tableConfig.tsName
        });
        return query;
      }
      _toSQL() {
        const query = this._getQuery();
        const builtQuery = this.dialect.sqlToQuery(query.sql);
        return { builtQuery, query };
      }
      /** @internal */
      getSQL() {
        return this._getQuery().sql;
      }
      toSQL() {
        return this._toSQL().builtQuery;
      }
      execute() {
        return this.prepare().execute();
      }
    };
    _a281 = entityKind;
    __publicField(MySqlRelationalQuery, _a281, "MySqlRelationalQuery");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/db.js
var _a282, MySqlDatabase;
var init_db3 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/db.js"() {
    "use strict";
    init_entity();
    init_selection_proxy();
    init_subquery();
    init_query_builders3();
    init_query3();
    MySqlDatabase = class {
      constructor(dialect7, session, schema4, mode) {
        __publicField(this, "query");
        this.dialect = dialect7;
        this.session = session;
        this.mode = mode;
        this._ = schema4 ? {
          schema: schema4.schema,
          fullSchema: schema4.fullSchema,
          tableNamesMap: schema4.tableNamesMap
        } : {
          schema: void 0,
          fullSchema: {},
          tableNamesMap: {}
        };
        this.query = {};
        if (this._.schema) {
          for (const [tableName, columns] of Object.entries(this._.schema)) {
            this.query[tableName] = new RelationalQueryBuilder3(
              schema4.fullSchema,
              this._.schema,
              this._.tableNamesMap,
              schema4.fullSchema[tableName],
              columns,
              dialect7,
              session,
              this.mode
            );
          }
        }
      }
      /**
       * Creates a subquery that defines a temporary named result set as a CTE.
       *
       * It is useful for breaking down complex queries into simpler parts and for reusing the result set in subsequent parts of the query.
       *
       * See docs: {@link https://orm.drizzle.team/docs/select#with-clause}
       *
       * @param alias The alias for the subquery.
       *
       * Failure to provide an alias will result in a DrizzleTypeError, preventing the subquery from being referenced in other queries.
       *
       * @example
       *
       * ```ts
       * // Create a subquery with alias 'sq' and use it in the select query
       * const sq = db.$with('sq').as(db.select().from(users).where(eq(users.id, 42)));
       *
       * const result = await db.with(sq).select().from(sq);
       * ```
       *
       * To select arbitrary SQL values as fields in a CTE and reference them in other CTEs or in the main query, you need to add aliases to them:
       *
       * ```ts
       * // Select an arbitrary SQL value as a field in a CTE and reference it in the main query
       * const sq = db.$with('sq').as(db.select({
       *   name: sql<string>`upper(${users.name})`.as('name'),
       * })
       * .from(users));
       *
       * const result = await db.with(sq).select({ name: sq.name }).from(sq);
       * ```
       */
      $with(alias) {
        return {
          as(qb) {
            if (typeof qb === "function") {
              qb = qb(new QueryBuilder3());
            }
            return new Proxy(
              new WithSubquery(qb.getSQL(), qb.getSelectedFields(), alias, true),
              new SelectionProxyHandler({ alias, sqlAliasedBehavior: "alias", sqlBehavior: "error" })
            );
          }
        };
      }
      /**
       * Incorporates a previously defined CTE (using `$with`) into the main query.
       *
       * This method allows the main query to reference a temporary named result set.
       *
       * See docs: {@link https://orm.drizzle.team/docs/select#with-clause}
       *
       * @param queries The CTEs to incorporate into the main query.
       *
       * @example
       *
       * ```ts
       * // Define a subquery 'sq' as a CTE using $with
       * const sq = db.$with('sq').as(db.select().from(users).where(eq(users.id, 42)));
       *
       * // Incorporate the CTE 'sq' into the main query and select from it
       * const result = await db.with(sq).select().from(sq);
       * ```
       */
      with(...queries) {
        const self = this;
        function select(fields) {
          return new MySqlSelectBuilder({
            fields: fields ?? void 0,
            session: self.session,
            dialect: self.dialect,
            withList: queries
          });
        }
        function selectDistinct(fields) {
          return new MySqlSelectBuilder({
            fields: fields ?? void 0,
            session: self.session,
            dialect: self.dialect,
            withList: queries,
            distinct: true
          });
        }
        function update(table4) {
          return new MySqlUpdateBuilder(table4, self.session, self.dialect, queries);
        }
        function delete_(table4) {
          return new MySqlDeleteBase(table4, self.session, self.dialect, queries);
        }
        return { select, selectDistinct, update, delete: delete_ };
      }
      select(fields) {
        return new MySqlSelectBuilder({ fields: fields ?? void 0, session: this.session, dialect: this.dialect });
      }
      selectDistinct(fields) {
        return new MySqlSelectBuilder({
          fields: fields ?? void 0,
          session: this.session,
          dialect: this.dialect,
          distinct: true
        });
      }
      /**
       * Creates an update query.
       *
       * Calling this method without `.where()` clause will update all rows in a table. The `.where()` clause specifies which rows should be updated.
       *
       * Use `.set()` method to specify which values to update.
       *
       * See docs: {@link https://orm.drizzle.team/docs/update}
       *
       * @param table The table to update.
       *
       * @example
       *
       * ```ts
       * // Update all rows in the 'cars' table
       * await db.update(cars).set({ color: 'red' });
       *
       * // Update rows with filters and conditions
       * await db.update(cars).set({ color: 'red' }).where(eq(cars.brand, 'BMW'));
       * ```
       */
      update(table4) {
        return new MySqlUpdateBuilder(table4, this.session, this.dialect);
      }
      /**
       * Creates an insert query.
       *
       * Calling this method will create new rows in a table. Use `.values()` method to specify which values to insert.
       *
       * See docs: {@link https://orm.drizzle.team/docs/insert}
       *
       * @param table The table to insert into.
       *
       * @example
       *
       * ```ts
       * // Insert one row
       * await db.insert(cars).values({ brand: 'BMW' });
       *
       * // Insert multiple rows
       * await db.insert(cars).values([{ brand: 'BMW' }, { brand: 'Porsche' }]);
       * ```
       */
      insert(table4) {
        return new MySqlInsertBuilder(table4, this.session, this.dialect);
      }
      /**
       * Creates a delete query.
       *
       * Calling this method without `.where()` clause will delete all rows in a table. The `.where()` clause specifies which rows should be deleted.
       *
       * See docs: {@link https://orm.drizzle.team/docs/delete}
       *
       * @param table The table to delete from.
       *
       * @example
       *
       * ```ts
       * // Delete all rows in the 'cars' table
       * await db.delete(cars);
       *
       * // Delete rows with filters and conditions
       * await db.delete(cars).where(eq(cars.color, 'green'));
       * ```
       */
      delete(table4) {
        return new MySqlDeleteBase(table4, this.session, this.dialect);
      }
      execute(query) {
        return this.session.execute(query.getSQL());
      }
      transaction(transaction, config) {
        return this.session.transaction(transaction, config);
      }
    };
    _a282 = entityKind;
    __publicField(MySqlDatabase, _a282, "MySqlDatabase");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/indexes.js
var _a283, IndexBuilderOn3, _a284, IndexBuilder3, _a285, Index3;
var init_indexes3 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/indexes.js"() {
    "use strict";
    init_entity();
    IndexBuilderOn3 = class {
      constructor(name2, unique) {
        this.name = name2;
        this.unique = unique;
      }
      on(...columns) {
        return new IndexBuilder3(this.name, columns, this.unique);
      }
    };
    _a283 = entityKind;
    __publicField(IndexBuilderOn3, _a283, "MySqlIndexBuilderOn");
    IndexBuilder3 = class {
      constructor(name2, columns, unique) {
        /** @internal */
        __publicField(this, "config");
        this.config = {
          name: name2,
          columns,
          unique
        };
      }
      using(using) {
        this.config.using = using;
        return this;
      }
      algorythm(algorythm) {
        this.config.algorythm = algorythm;
        return this;
      }
      lock(lock) {
        this.config.lock = lock;
        return this;
      }
      /** @internal */
      build(table4) {
        return new Index3(this.config, table4);
      }
    };
    _a284 = entityKind;
    __publicField(IndexBuilder3, _a284, "MySqlIndexBuilder");
    Index3 = class {
      constructor(config, table4) {
        __publicField(this, "config");
        this.config = { ...config, table: table4 };
      }
    };
    _a285 = entityKind;
    __publicField(Index3, _a285, "MySqlIndex");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/primary-keys.js
var _a286, PrimaryKeyBuilder3, _a287, PrimaryKey3;
var init_primary_keys3 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/primary-keys.js"() {
    "use strict";
    init_entity();
    init_table4();
    PrimaryKeyBuilder3 = class {
      constructor(columns, name2) {
        /** @internal */
        __publicField(this, "columns");
        /** @internal */
        __publicField(this, "name");
        this.columns = columns;
        this.name = name2;
      }
      /** @internal */
      build(table4) {
        return new PrimaryKey3(table4, this.columns, this.name);
      }
    };
    _a286 = entityKind;
    __publicField(PrimaryKeyBuilder3, _a286, "MySqlPrimaryKeyBuilder");
    PrimaryKey3 = class {
      constructor(table4, columns, name2) {
        __publicField(this, "columns");
        __publicField(this, "name");
        this.table = table4;
        this.columns = columns;
        this.name = name2;
      }
      getName() {
        return this.name ?? `${this.table[MySqlTable.Symbol.Name]}_${this.columns.map((column4) => column4.name).join("_")}_pk`;
      }
    };
    _a287 = entityKind;
    __publicField(PrimaryKey3, _a287, "MySqlPrimaryKey");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/view-common.js
var MySqlViewConfig;
var init_view_common4 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/view-common.js"() {
    "use strict";
    MySqlViewConfig = Symbol.for("drizzle:MySqlViewConfig");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/view.js
function mysqlViewWithSchema(name2, selection, schema4) {
  if (selection) {
    return new ManualViewBuilder3(name2, selection, schema4);
  }
  return new ViewBuilder3(name2, schema4);
}
var _a288, ViewBuilderCore2, _a289, ViewBuilder3, _a290, ManualViewBuilder3, _a291, _b10, MySqlView;
var init_view3 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/view.js"() {
    "use strict";
    init_entity();
    init_selection_proxy();
    init_utils();
    init_query_builder4();
    init_table4();
    init_view_base3();
    init_view_common4();
    ViewBuilderCore2 = class {
      constructor(name2, schema4) {
        __publicField(this, "config", {});
        this.name = name2;
        this.schema = schema4;
      }
      algorithm(algorithm) {
        this.config.algorithm = algorithm;
        return this;
      }
      definer(definer) {
        this.config.definer = definer;
        return this;
      }
      sqlSecurity(sqlSecurity) {
        this.config.sqlSecurity = sqlSecurity;
        return this;
      }
      withCheckOption(withCheckOption) {
        this.config.withCheckOption = withCheckOption ?? "cascaded";
        return this;
      }
    };
    _a288 = entityKind;
    __publicField(ViewBuilderCore2, _a288, "MySqlViewBuilder");
    ViewBuilder3 = class extends ViewBuilderCore2 {
      as(qb) {
        if (typeof qb === "function") {
          qb = qb(new QueryBuilder3());
        }
        const selectionProxy = new SelectionProxyHandler({
          alias: this.name,
          sqlBehavior: "error",
          sqlAliasedBehavior: "alias",
          replaceOriginalName: true
        });
        const aliasedSelection = new Proxy(qb.getSelectedFields(), selectionProxy);
        return new Proxy(
          new MySqlView({
            mysqlConfig: this.config,
            config: {
              name: this.name,
              schema: this.schema,
              selectedFields: aliasedSelection,
              query: qb.getSQL().inlineParams()
            }
          }),
          selectionProxy
        );
      }
    };
    _a289 = entityKind;
    __publicField(ViewBuilder3, _a289, "MySqlViewBuilder");
    ManualViewBuilder3 = class extends ViewBuilderCore2 {
      constructor(name2, columns, schema4) {
        super(name2, schema4);
        __publicField(this, "columns");
        this.columns = getTableColumns(mysqlTable(name2, columns));
      }
      existing() {
        return new Proxy(
          new MySqlView({
            mysqlConfig: void 0,
            config: {
              name: this.name,
              schema: this.schema,
              selectedFields: this.columns,
              query: void 0
            }
          }),
          new SelectionProxyHandler({
            alias: this.name,
            sqlBehavior: "error",
            sqlAliasedBehavior: "alias",
            replaceOriginalName: true
          })
        );
      }
      as(query) {
        return new Proxy(
          new MySqlView({
            mysqlConfig: this.config,
            config: {
              name: this.name,
              schema: this.schema,
              selectedFields: this.columns,
              query: query.inlineParams()
            }
          }),
          new SelectionProxyHandler({
            alias: this.name,
            sqlBehavior: "error",
            sqlAliasedBehavior: "alias",
            replaceOriginalName: true
          })
        );
      }
    };
    _a290 = entityKind;
    __publicField(ManualViewBuilder3, _a290, "MySqlManualViewBuilder");
    MySqlView = class extends MySqlViewBase {
      constructor({ mysqlConfig, config }) {
        super(config);
        __publicField(this, _b10);
        this[MySqlViewConfig] = mysqlConfig;
      }
    };
    _a291 = entityKind, _b10 = MySqlViewConfig;
    __publicField(MySqlView, _a291, "MySqlView");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/schema.js
var _a292, MySqlSchema5;
var init_schema2 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/schema.js"() {
    "use strict";
    init_entity();
    init_table4();
    init_view3();
    MySqlSchema5 = class {
      constructor(schemaName) {
        __publicField(this, "table", (name2, columns, extraConfig) => {
          return mysqlTableWithSchema(name2, columns, extraConfig, this.schemaName);
        });
        __publicField(this, "view", (name2, columns) => {
          return mysqlViewWithSchema(name2, columns, this.schemaName);
        });
        this.schemaName = schemaName;
      }
    };
    _a292 = entityKind;
    __publicField(MySqlSchema5, _a292, "MySqlSchema");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/session.js
var _a293, PreparedQuery, _a294, MySqlSession, _a295, MySqlTransaction;
var init_session3 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/session.js"() {
    "use strict";
    init_entity();
    init_errors();
    init_sql();
    init_db3();
    PreparedQuery = class {
      constructor() {
        /** @internal */
        __publicField(this, "joinsNotNullableMap");
      }
    };
    _a293 = entityKind;
    __publicField(PreparedQuery, _a293, "MySqlPreparedQuery");
    MySqlSession = class {
      constructor(dialect7) {
        this.dialect = dialect7;
      }
      execute(query) {
        return this.prepareQuery(
          this.dialect.sqlToQuery(query),
          void 0
        ).execute();
      }
      getSetTransactionSQL(config) {
        const parts = [];
        if (config.isolationLevel) {
          parts.push(`isolation level ${config.isolationLevel}`);
        }
        return parts.length ? sql.join(["set transaction ", parts.join(" ")]) : void 0;
      }
      getStartTransactionSQL(config) {
        const parts = [];
        if (config.withConsistentSnapshot) {
          parts.push("with consistent snapshot");
        }
        if (config.accessMode) {
          parts.push(config.accessMode);
        }
        return parts.length ? sql.join(["start transaction ", parts.join(" ")]) : void 0;
      }
    };
    _a294 = entityKind;
    __publicField(MySqlSession, _a294, "MySqlSession");
    MySqlTransaction = class extends MySqlDatabase {
      constructor(dialect7, session, schema4, nestedIndex, mode) {
        super(dialect7, session, schema4, mode);
        this.schema = schema4;
        this.nestedIndex = nestedIndex;
      }
      rollback() {
        throw new TransactionRollbackError();
      }
    };
    _a295 = entityKind;
    __publicField(MySqlTransaction, _a295, "MySqlTransaction");
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/subquery.js
var init_subquery4 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/subquery.js"() {
    "use strict";
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/utils.js
function getTableConfig3(table4) {
  const columns = Object.values(table4[MySqlTable.Symbol.Columns]);
  const indexes = [];
  const checks = [];
  const primaryKeys = [];
  const uniqueConstraints = [];
  const foreignKeys = Object.values(table4[MySqlTable.Symbol.InlineForeignKeys]);
  const name2 = table4[Table.Symbol.Name];
  const schema4 = table4[Table.Symbol.Schema];
  const baseName = table4[Table.Symbol.BaseName];
  const extraConfigBuilder = table4[MySqlTable.Symbol.ExtraConfigBuilder];
  if (extraConfigBuilder !== void 0) {
    const extraConfig = extraConfigBuilder(table4[MySqlTable.Symbol.Columns]);
    for (const builder of Object.values(extraConfig)) {
      if (is(builder, IndexBuilder3)) {
        indexes.push(builder.build(table4));
      } else if (is(builder, CheckBuilder3)) {
        checks.push(builder.build(table4));
      } else if (is(builder, UniqueConstraintBuilder3)) {
        uniqueConstraints.push(builder.build(table4));
      } else if (is(builder, PrimaryKeyBuilder3)) {
        primaryKeys.push(builder.build(table4));
      } else if (is(builder, ForeignKeyBuilder3)) {
        foreignKeys.push(builder.build(table4));
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
    name: name2,
    schema: schema4,
    baseName
  };
}
var init_utils7 = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/utils.js"() {
    "use strict";
    init_entity();
    init_table();
    init_checks3();
    init_foreign_keys3();
    init_indexes3();
    init_primary_keys3();
    init_table4();
    init_unique_constraint3();
  }
});

// node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/index.js
var init_mysql_core = __esm({
  "node_modules/.pnpm/drizzle-orm@0.30.9-f9be0ab_@aws-sdk+client-rds-data@3.577.0_@cloudflare+workers-types@4.20240_pwzbkfemiw22ynhzr3uxh43oqm/node_modules/drizzle-orm/mysql-core/index.js"() {
    "use strict";
    init_alias4();
    init_checks3();
    init_columns3();
    init_db3();
    init_dialect3();
    init_foreign_keys3();
    init_indexes3();
    init_primary_keys3();
    init_query_builders3();
    init_schema2();
    init_session3();
    init_subquery4();
    init_table4();
    init_unique_constraint3();
    init_utils7();
    init_view_common4();
    init_view3();
  }
});

// src/serializer/mysqlSerializer.ts
function clearDefaults(defaultValue, collate) {
  if (typeof collate === "undefined" || collate === null) {
    collate = `utf8mb4`;
  }
  let resultDefault = defaultValue;
  collate = `_${collate}`;
  if (defaultValue.startsWith(collate)) {
    resultDefault = resultDefault.substring(collate.length, defaultValue.length).replace(/\\/g, "");
    if (resultDefault.startsWith("'") && resultDefault.endsWith("'")) {
      return `('${resultDefault.substring(1, resultDefault.length - 1)}')`;
    } else {
      return `'${resultDefault}'`;
    }
  } else {
    return `(${resultDefault})`;
  }
}
var dialect6, generateMySqlSnapshot, fromDatabase3;
var init_mysqlSerializer = __esm({
  "src/serializer/mysqlSerializer.ts"() {
    "use strict";
    init_mysql_core();
    init_drizzle_orm();
    init_mysql_core();
    init_drizzle_orm();
    init_serializer();
    init_outputs();
    init_source();
    dialect6 = new MySqlDialect();
    generateMySqlSnapshot = (tables) => {
      const result = {};
      for (const table4 of tables) {
        const {
          name: tableName,
          columns,
          indexes,
          foreignKeys,
          schema: schema4,
          primaryKeys,
          uniqueConstraints
        } = getTableConfig3(table4);
        const columnsObject = {};
        const indexesObject = {};
        const foreignKeysObject = {};
        const primaryKeysObject = {};
        const uniqueConstraintObject = {};
        columns.forEach((column4) => {
          const notNull = column4.notNull;
          const sqlTypeLowered = column4.getSQLType().toLowerCase();
          const autoIncrement = typeof column4.autoIncrement === "undefined" ? false : column4.autoIncrement;
          const columnToSet = {
            name: column4.name,
            type: column4.getSQLType(),
            primaryKey: false,
            // If field is autoincrement it's notNull by default
            // notNull: autoIncrement ? true : notNull,
            notNull,
            autoincrement: autoIncrement,
            onUpdate: column4.hasOnUpdateNow
          };
          if (column4.primary) {
            primaryKeysObject[`${tableName}_${column4.name}`] = {
              name: `${tableName}_${column4.name}`,
              columns: [column4.name]
            };
          }
          if (column4.isUnique) {
            const existingUnique = uniqueConstraintObject[column4.uniqueName];
            if (typeof existingUnique !== "undefined") {
              console.log(
                `
${withStyle.errorWarning(`We've found duplicated unique constraint names in ${source_default.underline.blue(
                  tableName
                )} table. 
          The unique constraint ${source_default.underline.blue(
                  column4.uniqueName
                )} on the ${source_default.underline.blue(
                  column4.name
                )} column is confilcting with a unique constraint name already defined for ${source_default.underline.blue(
                  existingUnique.columns.join(",")
                )} columns
`)}`
              );
              process.exit(1);
            }
            uniqueConstraintObject[column4.uniqueName] = {
              name: column4.uniqueName,
              columns: [columnToSet.name]
            };
          }
          if (column4.default !== void 0) {
            if (is(column4.default, SQL)) {
              columnToSet.default = sqlToStr(column4.default);
            } else {
              if (typeof column4.default === "string") {
                columnToSet.default = `'${column4.default}'`;
              } else {
                if (sqlTypeLowered === "json") {
                  columnToSet.default = `'${JSON.stringify(column4.default)}'`;
                } else if (column4.default instanceof Date) {
                  if (sqlTypeLowered === "date") {
                    columnToSet.default = `'${column4.default.toISOString().split("T")[0]}'`;
                  } else if (sqlTypeLowered.startsWith("datetime") || sqlTypeLowered.startsWith("timestamp")) {
                    columnToSet.default = `'${column4.default.toISOString().replace("T", " ").slice(0, 23)}'`;
                  }
                } else {
                  columnToSet.default = column4.default;
                }
              }
              if (["blob", "text", "json"].includes(column4.getSQLType())) {
                columnToSet.default = `(${columnToSet.default})`;
              }
            }
          }
          columnsObject[column4.name] = columnToSet;
        });
        primaryKeys.map((pk) => {
          const columnNames = pk.columns.map((c) => c.name);
          primaryKeysObject[pk.getName()] = {
            name: pk.getName(),
            columns: columnNames
          };
          for (const column4 of pk.columns) {
            columnsObject[column4.name].notNull = true;
          }
        });
        uniqueConstraints?.map((unq) => {
          const columnNames = unq.columns.map((c) => c.name);
          const name2 = unq.name ?? uniqueKeyName3(table4, columnNames);
          const existingUnique = uniqueConstraintObject[name2];
          if (typeof existingUnique !== "undefined") {
            console.log(
              `
${withStyle.errorWarning(
                `We've found duplicated unique constraint names in ${source_default.underline.blue(
                  tableName
                )} table. 
The unique constraint ${source_default.underline.blue(
                  name2
                )} on the ${source_default.underline.blue(
                  columnNames.join(",")
                )} columns is confilcting with a unique constraint name already defined for ${source_default.underline.blue(
                  existingUnique.columns.join(",")
                )} columns
`
              )}`
            );
            process.exit(1);
          }
          uniqueConstraintObject[name2] = {
            name: unq.name,
            columns: columnNames
          };
        });
        const fks = foreignKeys.map((fk4) => {
          const name2 = fk4.getName();
          const tableFrom = tableName;
          const onDelete = fk4.onDelete ?? "no action";
          const onUpdate = fk4.onUpdate ?? "no action";
          const reference = fk4.reference();
          const referenceFT = reference.foreignTable;
          const tableTo = getTableName(referenceFT);
          const columnsFrom = reference.columns.map((it) => it.name);
          const columnsTo = reference.foreignColumns.map((it) => it.name);
          return {
            name: name2,
            tableFrom,
            tableTo,
            columnsFrom,
            columnsTo,
            onDelete,
            onUpdate
          };
        });
        fks.forEach((it) => {
          foreignKeysObject[it.name] = it;
        });
        indexes.forEach((value) => {
          const columns2 = value.config.columns;
          const name2 = value.config.name;
          let indexColumns = columns2.map((it) => {
            if (is(it, SQL)) {
              return dialect6.sqlToQuery(it).sql;
            } else {
              return it.name;
            }
          });
          if (value.config.unique) {
            if (typeof uniqueConstraintObject[name2] !== "undefined") {
              console.log(
                `
${withStyle.errorWarning(
                  `We've found duplicated unique constraint names in ${source_default.underline.blue(
                    tableName
                  )} table. 
The unique index ${source_default.underline.blue(
                    name2
                  )} on the ${source_default.underline.blue(
                    indexColumns.join(",")
                  )} columns is confilcting with a unique constraint name already defined for ${source_default.underline.blue(
                    uniqueConstraintObject[name2].columns.join(",")
                  )} columns
`
                )}`
              );
              process.exit(1);
            }
          } else {
            if (typeof foreignKeysObject[name2] !== "undefined") {
              console.log(
                `
${withStyle.errorWarning(`In MySQL, when creating a foreign key, an index is automatically generated with the same name as the foreign key constraint.

We have encountered a collision between the index name on columns ${source_default.underline.blue(
                  indexColumns.join(",")
                )} and the foreign key on columns ${source_default.underline.blue(
                  foreignKeysObject[name2].columnsFrom.join(",")
                )}. Please change either the index name or the foreign key name. For more information, please refer to https://dev.mysql.com/doc/refman/8.0/en/constraint-foreign-key.html

            `)}`
              );
              process.exit(1);
            }
          }
          indexesObject[name2] = {
            name: name2,
            columns: indexColumns,
            isUnique: value.config.unique ?? false,
            using: value.config.using,
            algorithm: value.config.algorythm,
            lock: value.config.lock
          };
        });
        if (!schema4) {
          result[tableName] = {
            name: tableName,
            columns: columnsObject,
            indexes: indexesObject,
            foreignKeys: foreignKeysObject,
            compositePrimaryKeys: primaryKeysObject,
            uniqueConstraints: uniqueConstraintObject
          };
        }
      }
      return {
        version: "5",
        dialect: "mysql",
        tables: result,
        _meta: {
          tables: {},
          columns: {}
        }
      };
    };
    fromDatabase3 = async (db, inputSchema, tablesFilter = (table4) => true, progressCallback) => {
      const result = {};
      const internals = { tables: {} };
      const columns = await db.query(`select * from information_schema.columns
	where table_schema = '${inputSchema}' and table_name != '__drizzle_migrations'
	order by table_name, ordinal_position;`);
      const response = columns;
      const schemas = [];
      let columnsCount = 0;
      let tablesCount = /* @__PURE__ */ new Set();
      let indexesCount = 0;
      let foreignKeysCount = 0;
      const idxs = await db.query(
        `select * from INFORMATION_SCHEMA.STATISTICS
	WHERE INFORMATION_SCHEMA.STATISTICS.TABLE_SCHEMA = '${inputSchema}' and INFORMATION_SCHEMA.STATISTICS.INDEX_NAME != 'PRIMARY';`
      );
      const idxRows = idxs;
      for (const column4 of response) {
        if (!tablesFilter(column4["TABLE_NAME"]))
          continue;
        columnsCount += 1;
        if (progressCallback) {
          progressCallback("columns", columnsCount, "fetching");
        }
        const schema4 = column4["TABLE_SCHEMA"];
        const tableName = column4["TABLE_NAME"];
        tablesCount.add(`${schema4}.${tableName}`);
        if (progressCallback) {
          progressCallback("columns", tablesCount.size, "fetching");
        }
        const columnName = column4["COLUMN_NAME"];
        const isNullable = column4["IS_NULLABLE"] === "YES";
        const dataType = column4["DATA_TYPE"];
        const columnType = column4["COLUMN_TYPE"];
        const isPrimary = column4["COLUMN_KEY"] === "PRI";
        const columnDefault = column4["COLUMN_DEFAULT"];
        const collation = column4["CHARACTER_SET_NAME"];
        let columnExtra = column4["EXTRA"];
        let isAutoincrement = false;
        let isDefaultAnExpression = false;
        if (typeof column4["EXTRA"] !== "undefined") {
          columnExtra = column4["EXTRA"];
          isAutoincrement = column4["EXTRA"] === "auto_increment";
          isDefaultAnExpression = column4["EXTRA"].includes("DEFAULT_GENERATED");
        }
        if (schema4 !== inputSchema) {
          schemas.push(schema4);
        }
        const table4 = result[tableName];
        let changedType = columnType;
        if (columnType === "bigint unsigned" && !isNullable && isAutoincrement) {
          const uniqueIdx = idxRows.filter(
            (it) => it["COLUMN_NAME"] === columnName && it["TABLE_NAME"] === tableName && it["NON_UNIQUE"] === 0
          );
          if (uniqueIdx && uniqueIdx.length === 1) {
            changedType = columnType.replace("bigint unsigned", "serial");
          }
        }
        if (columnType.startsWith("tinyint")) {
          changedType = "tinyint";
        }
        let onUpdate = void 0;
        if (columnType.startsWith("timestamp") && typeof columnExtra !== "undefined" && columnExtra.includes("on update CURRENT_TIMESTAMP")) {
          onUpdate = true;
        }
        const newColumn = {
          default: columnDefault === null ? void 0 : /^-?[\d.]+(?:e-?\d+)?$/.test(columnDefault) && !columnType.startsWith("decimal") ? Number(columnDefault) : isDefaultAnExpression ? clearDefaults(columnDefault, collation) : `'${columnDefault}'`,
          autoincrement: isAutoincrement,
          name: columnName,
          type: changedType,
          primaryKey: false,
          notNull: !isNullable,
          onUpdate
        };
        if (isDefaultAnExpression) {
          if (typeof internals.tables[tableName] === "undefined") {
            internals.tables[tableName] = {
              columns: {
                [columnName]: {
                  isDefaultAnExpression: true
                }
              }
            };
          } else {
            if (typeof internals.tables[tableName].columns[columnName] === "undefined") {
              internals.tables[tableName].columns[columnName] = {
                isDefaultAnExpression: true
              };
            } else {
              internals.tables[tableName].columns[columnName].isDefaultAnExpression = true;
            }
          }
        }
        if (!table4) {
          result[tableName] = {
            name: tableName,
            columns: {
              [columnName]: newColumn
            },
            compositePrimaryKeys: {},
            indexes: {},
            foreignKeys: {},
            uniqueConstraints: {}
          };
        } else {
          result[tableName].columns[columnName] = newColumn;
        }
      }
      const tablePks = await db.query(
        `SELECT table_name, column_name, ordinal_position
  FROM information_schema.table_constraints t
  LEFT JOIN information_schema.key_column_usage k
  USING(constraint_name,table_schema,table_name)
  WHERE t.constraint_type='PRIMARY KEY'
      and table_name != '__drizzle_migrations'
      AND t.table_schema = '${inputSchema}'
      ORDER BY ordinal_position`
      );
      const tableToPk = {};
      const tableToPkRows = tablePks;
      for (const tableToPkRow of tableToPkRows) {
        const tableName = tableToPkRow["TABLE_NAME"];
        const columnName = tableToPkRow["COLUMN_NAME"];
        const position = tableToPkRow["ordinal_position"];
        if (typeof result[tableName] === "undefined") {
          continue;
        }
        if (typeof tableToPk[tableName] === "undefined") {
          tableToPk[tableName] = [columnName];
        } else {
          tableToPk[tableName].push(columnName);
        }
      }
      for (const [key, value] of Object.entries(tableToPk)) {
        result[key].compositePrimaryKeys = {
          [`${key}_${value.join("_")}`]: {
            name: `${key}_${value.join("_")}`,
            columns: value
          }
        };
      }
      if (progressCallback) {
        progressCallback("columns", columnsCount, "done");
        progressCallback("tables", tablesCount.size, "done");
      }
      try {
        const fks = await db.query(
          `SELECT 
      kcu.TABLE_SCHEMA,
      kcu.TABLE_NAME,
      kcu.CONSTRAINT_NAME,
      kcu.COLUMN_NAME,
      kcu.REFERENCED_TABLE_SCHEMA,
      kcu.REFERENCED_TABLE_NAME,
      kcu.REFERENCED_COLUMN_NAME,
      rc.UPDATE_RULE,
      rc.DELETE_RULE
  FROM 
      INFORMATION_SCHEMA.KEY_COLUMN_USAGE kcu
  LEFT JOIN 
      information_schema.referential_constraints rc 
      ON kcu.CONSTRAINT_NAME = rc.CONSTRAINT_NAME
  WHERE kcu.TABLE_SCHEMA = '${inputSchema}' AND kcu.CONSTRAINT_NAME != 'PRIMARY' 
      AND kcu.REFERENCED_TABLE_NAME IS NOT NULL;`
        );
        const fkRows = fks;
        for (const fkRow of fkRows) {
          foreignKeysCount += 1;
          if (progressCallback) {
            progressCallback("fks", foreignKeysCount, "fetching");
          }
          const tableSchema = fkRow["TABLE_SCHEMA"];
          const tableName = fkRow["TABLE_NAME"];
          const constraintName = fkRow["CONSTRAINT_NAME"];
          const columnName = fkRow["COLUMN_NAME"];
          const refTableSchema = fkRow["REFERENCED_TABLE_SCHEMA"];
          const refTableName = fkRow["REFERENCED_TABLE_NAME"];
          const refColumnName = fkRow["REFERENCED_COLUMN_NAME"];
          const updateRule = fkRow["UPDATE_RULE"];
          const deleteRule = fkRow["DELETE_RULE"];
          const tableInResult = result[tableName];
          if (typeof tableInResult === "undefined")
            continue;
          if (typeof tableInResult.foreignKeys[constraintName] !== "undefined") {
            tableInResult.foreignKeys[constraintName].columnsFrom.push(columnName);
            tableInResult.foreignKeys[constraintName].columnsTo.push(
              refColumnName
            );
          } else {
            tableInResult.foreignKeys[constraintName] = {
              name: constraintName,
              tableFrom: tableName,
              tableTo: refTableName,
              columnsFrom: [columnName],
              columnsTo: [refColumnName],
              onDelete: deleteRule?.toLowerCase(),
              onUpdate: updateRule?.toLowerCase()
            };
          }
          tableInResult.foreignKeys[constraintName].columnsFrom = [
            ...new Set(tableInResult.foreignKeys[constraintName].columnsFrom)
          ];
          tableInResult.foreignKeys[constraintName].columnsTo = [
            ...new Set(tableInResult.foreignKeys[constraintName].columnsTo)
          ];
        }
      } catch (e) {
      }
      if (progressCallback) {
        progressCallback("fks", foreignKeysCount, "done");
      }
      for (const idxRow of idxRows) {
        const tableSchema = idxRow["TABLE_SCHEMA"];
        const tableName = idxRow["TABLE_NAME"];
        const constraintName = idxRow["INDEX_NAME"];
        const columnName = idxRow["COLUMN_NAME"];
        const isUnique = idxRow["NON_UNIQUE"] === 0;
        const tableInResult = result[tableName];
        if (typeof tableInResult === "undefined")
          continue;
        indexesCount += 1;
        if (progressCallback) {
          progressCallback("indexes", indexesCount, "fetching");
        }
        if (isUnique) {
          if (typeof tableInResult.uniqueConstraints[constraintName] !== "undefined") {
            tableInResult.uniqueConstraints[constraintName].columns.push(
              columnName
            );
          } else {
            tableInResult.uniqueConstraints[constraintName] = {
              name: constraintName,
              columns: [columnName]
            };
          }
        } else {
          if (typeof tableInResult.foreignKeys[constraintName] === "undefined") {
            if (typeof tableInResult.indexes[constraintName] !== "undefined") {
              tableInResult.indexes[constraintName].columns.push(columnName);
            } else {
              tableInResult.indexes[constraintName] = {
                name: constraintName,
                columns: [columnName],
                isUnique
              };
            }
          }
        }
      }
      if (progressCallback) {
        progressCallback("indexes", indexesCount, "done");
        progressCallback("enums", 0, "done");
      }
      return {
        version: "5",
        dialect: "mysql",
        tables: result,
        _meta: {
          tables: {},
          columns: {}
        },
        internal: internals
      };
    };
  }
});

// src/serializer/sqliteImports.ts
var sqliteImports_exports = {};
__export(sqliteImports_exports, {
  prepareFromExports: () => prepareFromExports2,
  prepareFromSqliteImports: () => prepareFromSqliteImports
});
var prepareFromExports2, prepareFromSqliteImports;
var init_sqliteImports = __esm({
  "src/serializer/sqliteImports.ts"() {
    "use strict";
    init_sqlite_core();
    init_drizzle_orm();
    init_utils5();
    prepareFromExports2 = (exports) => {
      const tables = [];
      const i0values = Object.values(exports);
      i0values.forEach((t) => {
        if (is(t, SQLiteTable)) {
          tables.push(t);
        }
      });
      return { tables };
    };
    prepareFromSqliteImports = async (imports) => {
      const tables = [];
      const { unregister } = await safeRegister();
      for (let i = 0; i < imports.length; i++) {
        const it = imports[i];
        const i0 = __require(`${it}`);
        const prepared = prepareFromExports2(i0);
        tables.push(...prepared.tables);
      }
      unregister();
      return { tables: Array.from(new Set(tables)) };
    };
  }
});

// src/serializer/mysqlImports.ts
var mysqlImports_exports = {};
__export(mysqlImports_exports, {
  prepareFromExports: () => prepareFromExports3,
  prepareFromMySqlImports: () => prepareFromMySqlImports
});
var prepareFromExports3, prepareFromMySqlImports;
var init_mysqlImports = __esm({
  "src/serializer/mysqlImports.ts"() {
    "use strict";
    init_mysql_core();
    init_drizzle_orm();
    init_utils5();
    prepareFromExports3 = (exports) => {
      const tables = [];
      const i0values = Object.values(exports);
      i0values.forEach((t) => {
        if (is(t, MySqlTable)) {
          tables.push(t);
        }
      });
      return { tables };
    };
    prepareFromMySqlImports = async (imports) => {
      const tables = [];
      const { unregister } = await safeRegister();
      for (let i = 0; i < imports.length; i++) {
        const it = imports[i];
        const i0 = __require(`${it}`);
        const prepared = prepareFromExports3(i0);
        tables.push(...prepared.tables);
      }
      unregister();
      return { tables: Array.from(new Set(tables)) };
    };
  }
});

// src/cli/commands/mysqlPushUtils.ts
var mysqlPushUtils_exports = {};
__export(mysqlPushUtils_exports, {
  filterStatements: () => filterStatements,
  logSuggestionsAndReturn: () => logSuggestionsAndReturn2
});
import { render as render5 } from "hanji";
var filterStatements, logSuggestionsAndReturn2;
var init_mysqlPushUtils = __esm({
  "src/cli/commands/mysqlPushUtils.ts"() {
    "use strict";
    init_source();
    init_mysqlSchema();
    init_selector_ui();
    init_outputs();
    filterStatements = (statements, currentSchema, prevSchema) => {
      return statements.filter((statement) => {
        if (statement.type === "alter_table_alter_column_set_type") {
          if (statement.oldDataType.startsWith("tinyint") && statement.newDataType.startsWith("boolean")) {
            return false;
          }
          if (statement.oldDataType.startsWith("bigint unsigned") && statement.newDataType.startsWith("serial")) {
            return false;
          }
          if (statement.oldDataType.startsWith("serial") && statement.newDataType.startsWith("bigint unsigned")) {
            return false;
          }
        } else if (statement.type === "alter_table_alter_column_set_default") {
          if (statement.newDefaultValue === false && statement.oldDefaultValue === 0 && statement.newDataType === "boolean") {
            return false;
          }
          if (statement.newDefaultValue === true && statement.oldDefaultValue === 1 && statement.newDataType === "boolean") {
            return false;
          }
        } else if (statement.type === "delete_unique_constraint") {
          const unsquashed = MySqlSquasher.unsquashUnique(statement.data);
          if (unsquashed.columns.length === 1 && currentSchema.tables[statement.tableName].columns[unsquashed.columns[0]].type === "serial" && prevSchema.tables[statement.tableName].columns[unsquashed.columns[0]].type === "serial" && currentSchema.tables[statement.tableName].columns[unsquashed.columns[0]].name === unsquashed.columns[0]) {
            return false;
          }
        } else if (statement.type === "alter_table_alter_column_drop_notnull") {
          const serialStatement = statements.find(
            (it) => it.type === "alter_table_alter_column_set_type"
          );
          if (serialStatement?.oldDataType.startsWith("bigint unsigned") && serialStatement?.newDataType.startsWith("serial") && serialStatement.columnName === statement.columnName && serialStatement.tableName === statement.tableName) {
            return false;
          }
          if (statement.newDataType === "serial" && !statement.columnNotNull) {
            return false;
          }
          if (statement.columnAutoIncrement) {
            return false;
          }
        }
        return true;
      });
    };
    logSuggestionsAndReturn2 = async (db, statements, json2) => {
      let shouldAskForApprove = false;
      const statementsToExecute = [];
      const infoToPrint = [];
      const tablesToRemove = [];
      const columnsToRemove = [];
      const schemasToRemove = [];
      const tablesToTruncate = [];
      for (const statement of statements) {
        if (statement.type === "drop_table") {
          const res = await db.query(
            `select count(*) as count from \`${statement.tableName}\``
          );
          const count2 = Number(res[0].count);
          if (count2 > 0) {
            infoToPrint.push(
              `\xB7 You're about to delete ${source_default.underline(
                statement.tableName
              )} table with ${count2} items`
            );
            tablesToRemove.push(statement.tableName);
            shouldAskForApprove = true;
          }
        } else if (statement.type === "alter_table_drop_column") {
          const res = await db.query(
            `select count(*) as count from \`${statement.tableName}\``
          );
          const count2 = Number(res[0].count);
          if (count2 > 0) {
            infoToPrint.push(
              `\xB7 You're about to delete ${source_default.underline(
                statement.columnName
              )} column in ${statement.tableName} table with ${count2} items`
            );
            columnsToRemove.push(`${statement.tableName}_${statement.columnName}`);
            shouldAskForApprove = true;
          }
        } else if (statement.type === "drop_schema") {
          const res = await db.query(
            `select count(*) as count from information_schema.tables where table_schema = \`${statement.name}\`;`
          );
          const count2 = Number(res[0].count);
          if (count2 > 0) {
            infoToPrint.push(
              `\xB7 You're about to delete ${source_default.underline(
                statement.name
              )} schema with ${count2} tables`
            );
            schemasToRemove.push(statement.name);
            shouldAskForApprove = true;
          }
        } else if (statement.type === "alter_table_alter_column_set_type") {
          const res = await db.query(
            `select count(*) as count from \`${statement.tableName}\``
          );
          const count2 = Number(res[0].count);
          if (count2 > 0) {
            infoToPrint.push(
              `\xB7 You're about to change ${source_default.underline(
                statement.columnName
              )} column type from ${source_default.underline(
                statement.oldDataType
              )} to ${source_default.underline(statement.newDataType)} with ${count2} items`
            );
            statementsToExecute.push(`truncate table ${statement.tableName};`);
            tablesToTruncate.push(statement.tableName);
            shouldAskForApprove = true;
          }
        } else if (statement.type === "alter_table_alter_column_drop_default") {
          if (statement.columnNotNull) {
            const res = await db.query(
              `select count(*) as count from \`${statement.tableName}\``
            );
            const count2 = Number(res[0].count);
            if (count2 > 0) {
              infoToPrint.push(
                `\xB7 You're about to remove default value from ${source_default.underline(
                  statement.columnName
                )} not-null column with ${count2} items`
              );
              tablesToTruncate.push(statement.tableName);
              statementsToExecute.push(`truncate table ${statement.tableName};`);
              shouldAskForApprove = true;
            }
          }
        } else if (statement.type === "alter_table_alter_column_set_notnull") {
          if (typeof statement.columnDefault === "undefined") {
            const res = await db.query(
              `select count(*) as count from \`${statement.tableName}\``
            );
            const count2 = Number(res[0].count);
            if (count2 > 0) {
              infoToPrint.push(
                `\xB7 You're about to set not-null constraint to ${source_default.underline(
                  statement.columnName
                )} column without default, which contains ${count2} items`
              );
              tablesToTruncate.push(statement.tableName);
              statementsToExecute.push(`truncate table ${statement.tableName};`);
              shouldAskForApprove = true;
            }
          }
        } else if (statement.type === "alter_table_alter_column_drop_pk") {
          const res = await db.query(
            `select count(*) as count from \`${statement.tableName}\``
          );
          if (Object.values(json2.tables[statement.tableName].columns).filter(
            (column4) => column4.autoincrement
          ).length > 0) {
            console.log(
              `${withStyle.errorWarning(
                `You have removed the primary key from a ${statement.tableName} table without removing the auto-increment property from this table. As the database error states: 'there can be only one auto column, and it must be defined as a key. Make sure to remove autoincrement from ${statement.tableName} table`
              )}`
            );
            process.exit(1);
          }
          const count2 = Number(res[0].count);
          if (count2 > 0) {
            infoToPrint.push(
              `\xB7 You're about to change ${source_default.underline(
                statement.tableName
              )} primary key. This statements may fail and you table may left without primary key`
            );
            tablesToTruncate.push(statement.tableName);
            shouldAskForApprove = true;
          }
        } else if (statement.type === "delete_composite_pk") {
          if (Object.values(json2.tables[statement.tableName].columns).filter(
            (column4) => column4.autoincrement
          ).length > 0) {
            console.log(
              `${withStyle.errorWarning(
                `You have removed the primary key from a ${statement.tableName} table without removing the auto-increment property from this table. As the database error states: 'there can be only one auto column, and it must be defined as a key. Make sure to remove autoincrement from ${statement.tableName} table`
              )}`
            );
            process.exit(1);
          }
        } else if (statement.type === "alter_table_add_column") {
          if (statement.column.notNull && typeof statement.column.default === "undefined") {
            const res = await db.query(
              `select count(*) as count from \`${statement.tableName}\``
            );
            const count2 = Number(res[0].count);
            if (count2 > 0) {
              infoToPrint.push(
                `\xB7 You're about to add not-null ${source_default.underline(
                  statement.column.name
                )} column without default value, which contains ${count2} items`
              );
              tablesToTruncate.push(statement.tableName);
              statementsToExecute.push(`truncate table ${statement.tableName};`);
              shouldAskForApprove = true;
            }
          }
        } else if (statement.type === "create_unique_constraint") {
          const res = await db.query(
            `select count(*) as count from \`${statement.tableName}\``
          );
          const count2 = Number(res[0].count);
          if (count2 > 0) {
            const unsquashedUnique = MySqlSquasher.unsquashUnique(statement.data);
            console.log(
              `\xB7 You're about to add ${source_default.underline(
                unsquashedUnique.name
              )} unique constraint to the table, which contains ${count2} items. If this statement fails, you will receive an error from the database. Do you want to truncate ${source_default.underline(
                statement.tableName
              )} table?
`
            );
            const { status, data } = await render5(
              new Select([
                "No, add the constraint without truncating the table",
                `Yes, truncate the table`
              ])
            );
            if (data?.index === 1) {
              tablesToTruncate.push(statement.tableName);
              statementsToExecute.push(`truncate table ${statement.tableName};`);
              shouldAskForApprove = true;
            }
          }
        }
      }
      return {
        statementsToExecute,
        shouldAskForApprove,
        infoToPrint,
        columnsToRemove: [...new Set(columnsToRemove)],
        schemasToRemove: [...new Set(schemasToRemove)],
        tablesToTruncate: [...new Set(tablesToTruncate)],
        tablesToRemove: [...new Set(tablesToRemove)]
      };
    };
  }
});

// src/cli/commands/mysqlIntrospect.ts
var mysqlIntrospect_exports = {};
__export(mysqlIntrospect_exports, {
  mysqlPushIntrospect: () => mysqlPushIntrospect
});
import { renderWithTask as renderWithTask3 } from "hanji";
var mysqlPushIntrospect;
var init_mysqlIntrospect = __esm({
  "src/cli/commands/mysqlIntrospect.ts"() {
    "use strict";
    init_mysqlSerializer();
    init_global();
    init_mjs();
    init_views();
    mysqlPushIntrospect = async (db, databaseName, filters) => {
      const matchers = filters.map((it) => {
        return new Minimatch(it);
      });
      const filter2 = (tableName) => {
        if (matchers.length === 0)
          return true;
        for (let i = 0; i < matchers.length; i++) {
          const matcher = matchers[i];
          if (matcher.match(tableName))
            return true;
        }
        return false;
      };
      const progress = new ProgressView(
        "Pulling schema from database...",
        "Pulling schema from database..."
      );
      const res = await renderWithTask3(
        progress,
        fromDatabase3(db, databaseName, filter2)
      );
      const schema4 = { id: originUUID, prevId: "", ...res };
      const { internal, ...schemaWithoutInternals } = schema4;
      return { schema: schemaWithoutInternals };
    };
  }
});

// src/payload.ts
init_pgImports();
init_pgSerializer();
init_migrationPreparator();
init_pgSchema();
init_sqliteSchema();
init_mysqlSchema();
import { randomUUID } from "crypto";

// src/cli/commands/pgIntrospect.ts
init_pgSerializer();
init_global();
init_mjs();
init_views();
import { renderWithTask } from "hanji";
var pgPushIntrospect = async (db, filters, schemaFilters) => {
  const matchers = filters.map((it) => {
    return new Minimatch(it);
  });
  const filter2 = (tableName) => {
    if (matchers.length === 0)
      return true;
    for (let i = 0; i < matchers.length; i++) {
      const matcher = matchers[i];
      if (matcher.match(tableName))
        return true;
    }
    return false;
  };
  const progress = new ProgressView(
    "Pulling schema from database...",
    "Pulling schema from database..."
  );
  const res = await renderWithTask(
    progress,
    fromDatabase(db, filter2, schemaFilters)
  );
  const schema4 = { id: originUUID, prevId: "", ...res };
  const { internal, ...schemaWithoutInternals } = schema4;
  return { schema: schemaWithoutInternals };
};

// src/cli/commands/pgPushUtils.ts
init_source();
init_pgSchema();
init_sqlgenerator();
init_selector_ui();
import { render as render4 } from "hanji";
function concatSchemaAndTableName(schema4, table4) {
  return schema4 ? `"${schema4}"."${table4}"` : `"${table4}"`;
}
function tableNameWithSchemaFrom(schema4, tableName, renamedSchemas, renamedTables) {
  const newSchemaName = schema4 ? renamedSchemas[schema4] ? renamedSchemas[schema4] : schema4 : void 0;
  const newTableName = renamedTables[concatSchemaAndTableName(newSchemaName, tableName)] ? renamedTables[concatSchemaAndTableName(newSchemaName, tableName)] : tableName;
  return concatSchemaAndTableName(newSchemaName, newTableName);
}
var pgSuggestions = async (db, statements) => {
  let shouldAskForApprove = false;
  const statementsToExecute = [];
  const infoToPrint = [];
  const tablesToRemove = [];
  const columnsToRemove = [];
  const schemasToRemove = [];
  const tablesToTruncate = [];
  let renamedSchemas = {};
  let renamedTables = {};
  for (const statement of statements) {
    if (statement.type === "rename_schema") {
      renamedSchemas[statement.to] = statement.from;
    } else if (statement.type === "rename_table") {
      renamedTables[concatSchemaAndTableName(statement.toSchema, statement.tableNameTo)] = statement.tableNameFrom;
    } else if (statement.type === "drop_table") {
      const res = await db.query(
        `select count(*) as count from ${tableNameWithSchemaFrom(
          statement.schema,
          statement.tableName,
          renamedSchemas,
          renamedTables
        )}`
      );
      const count2 = Number(res[0].count);
      if (count2 > 0) {
        infoToPrint.push(
          `\xB7 You're about to delete ${source_default.underline(
            statement.tableName
          )} table with ${count2} items`
        );
        tablesToRemove.push(statement.tableName);
        shouldAskForApprove = true;
      }
    } else if (statement.type === "alter_table_drop_column") {
      const res = await db.query(
        `select count(*) as count from ${tableNameWithSchemaFrom(
          statement.schema,
          statement.tableName,
          renamedSchemas,
          renamedTables
        )}`
      );
      const count2 = Number(res[0].count);
      if (count2 > 0) {
        infoToPrint.push(
          `\xB7 You're about to delete ${source_default.underline(
            statement.columnName
          )} column in ${statement.tableName} table with ${count2} items`
        );
        columnsToRemove.push(`${statement.tableName}_${statement.columnName}`);
        shouldAskForApprove = true;
      }
    } else if (statement.type === "drop_schema") {
      const res = await db.query(
        `select count(*) as count from information_schema.tables where table_schema = '${statement.name}';`
      );
      const count2 = Number(res[0].count);
      if (count2 > 0) {
        infoToPrint.push(
          `\xB7 You're about to delete ${source_default.underline(
            statement.name
          )} schema with ${count2} tables`
        );
        schemasToRemove.push(statement.name);
        shouldAskForApprove = true;
      }
    } else if (statement.type === "alter_table_alter_column_set_type") {
      const res = await db.query(
        `select count(*) as count from ${tableNameWithSchemaFrom(
          statement.schema,
          statement.tableName,
          renamedSchemas,
          renamedTables
        )}`
      );
      const count2 = Number(res[0].count);
      if (count2 > 0) {
        infoToPrint.push(
          `\xB7 You're about to change ${source_default.underline(
            statement.columnName
          )} column type from ${source_default.underline(
            statement.oldDataType
          )} to ${source_default.underline(statement.newDataType)} with ${count2} items`
        );
        statementsToExecute.push(
          `truncate table ${tableNameWithSchemaFrom(
            statement.schema,
            statement.tableName,
            renamedSchemas,
            renamedTables
          )} cascade;`
        );
        tablesToTruncate.push(statement.tableName);
        shouldAskForApprove = true;
      }
    } else if (statement.type === "alter_table_alter_column_drop_default") {
      if (statement.columnNotNull) {
        const res = await db.query(
          `select count(*) as count from ${tableNameWithSchemaFrom(
            statement.schema,
            statement.tableName,
            renamedSchemas,
            renamedTables
          )}`
        );
        const count2 = Number(res[0].count);
        if (count2 > 0) {
          infoToPrint.push(
            `\xB7 You're about to remove default value from ${source_default.underline(
              statement.columnName
            )} not-null column with ${count2} items`
          );
          tablesToTruncate.push(statement.tableName);
          statementsToExecute.push(
            `truncate table ${tableNameWithSchemaFrom(
              statement.schema,
              statement.tableName,
              renamedSchemas,
              renamedTables
            )} cascade;`
          );
          shouldAskForApprove = true;
        }
      }
    } else if (statement.type === "alter_table_alter_column_set_notnull") {
      if (typeof statement.columnDefault === "undefined") {
        const res = await db.query(
          `select count(*) as count from ${tableNameWithSchemaFrom(
            statement.schema,
            statement.tableName,
            renamedSchemas,
            renamedTables
          )}`
        );
        const count2 = Number(res[0].count);
        if (count2 > 0) {
          infoToPrint.push(
            `\xB7 You're about to set not-null constraint to ${source_default.underline(
              statement.columnName
            )} column without default, which contains ${count2} items`
          );
          tablesToTruncate.push(statement.tableName);
          statementsToExecute.push(
            `truncate table ${tableNameWithSchemaFrom(
              statement.schema,
              statement.tableName,
              renamedSchemas,
              renamedTables
            )} cascade;`
          );
          shouldAskForApprove = true;
        }
      }
    } else if (statement.type === "alter_table_alter_column_drop_pk") {
      const res = await db.query(
        `select count(*) as count from ${tableNameWithSchemaFrom(
          statement.schema,
          statement.tableName,
          renamedSchemas,
          renamedTables
        )}`
      );
      const count2 = Number(res[0].count);
      if (count2 > 0) {
        infoToPrint.push(
          `\xB7 You're about to change ${source_default.underline(
            statement.tableName
          )} primary key. This statements may fail and you table may left without primary key`
        );
        tablesToTruncate.push(statement.tableName);
        shouldAskForApprove = true;
      }
      const tableNameWithSchema = tableNameWithSchemaFrom(
        statement.schema,
        statement.tableName,
        renamedSchemas,
        renamedTables
      );
      const pkNameResponse = await db.query(
        `SELECT constraint_name FROM information_schema.table_constraints
        WHERE table_schema = '${typeof statement.schema === "undefined" || statement.schema === "" ? "public" : statement.schema}'
            AND table_name = '${statement.tableName}'
            AND constraint_type = 'PRIMARY KEY';`
      );
      statementsToExecute.push(
        `ALTER TABLE ${tableNameWithSchema} DROP CONSTRAINT "${pkNameResponse[0].constraint_name}"`
      );
      continue;
    } else if (statement.type === "alter_table_add_column") {
      if (statement.column.notNull && typeof statement.column.default === "undefined") {
        const res = await db.query(
          `select count(*) as count from ${tableNameWithSchemaFrom(
            statement.schema,
            statement.tableName,
            renamedSchemas,
            renamedTables
          )}`
        );
        const count2 = Number(res[0].count);
        if (count2 > 0) {
          infoToPrint.push(
            `\xB7 You're about to add not-null ${source_default.underline(
              statement.column.name
            )} column without default value, which contains ${count2} items`
          );
          tablesToTruncate.push(statement.tableName);
          statementsToExecute.push(
            `truncate table ${tableNameWithSchemaFrom(
              statement.schema,
              statement.tableName,
              renamedSchemas,
              renamedTables
            )} cascade;`
          );
          shouldAskForApprove = true;
        }
      }
    } else if (statement.type === "create_unique_constraint") {
      const res = await db.query(
        `select count(*) as count from ${tableNameWithSchemaFrom(
          statement.schema,
          statement.tableName,
          renamedSchemas,
          renamedTables
        )}`
      );
      const count2 = Number(res[0].count);
      if (count2 > 0) {
        const unsquashedUnique = PgSquasher.unsquashUnique(statement.data);
        console.log(
          `\xB7 You're about to add ${source_default.underline(
            unsquashedUnique.name
          )} unique constraint to the table, which contains ${count2} items. If this statement fails, you will receive an error from the database. Do you want to truncate ${source_default.underline(
            statement.tableName
          )} table?
`
        );
        const { status, data } = await render4(
          new Select([
            "No, add the constraint without truncating the table",
            `Yes, truncate the table`
          ])
        );
        if (data?.index === 1) {
          tablesToTruncate.push(statement.tableName);
          statementsToExecute.push(
            `truncate table ${tableNameWithSchemaFrom(
              statement.schema,
              statement.tableName,
              renamedSchemas,
              renamedTables
            )} cascade;`
          );
          shouldAskForApprove = true;
        }
      }
    }
    const stmnt = fromJson([statement], "postgresql")[0];
    if (typeof stmnt !== "undefined") {
      if (statement.type === "drop_table") {
        statementsToExecute.push(
          `DROP TABLE ${concatSchemaAndTableName(
            statement.schema,
            statement.tableName
          )} CASCADE;`
        );
      } else {
        statementsToExecute.push(stmnt);
      }
    }
  }
  return {
    statementsToExecute,
    shouldAskForApprove,
    infoToPrint,
    columnsToRemove: [...new Set(columnsToRemove)],
    schemasToRemove: [...new Set(schemasToRemove)],
    tablesToTruncate: [...new Set(tablesToTruncate)],
    tablesToRemove: [...new Set(tablesToRemove)]
  };
};

// src/cli/commands/sqliteIntrospect.ts
init_views();
init_global();
init_sqliteSerializer();

// node_modules/.pnpm/camelcase@7.0.1/node_modules/camelcase/index.js
var UPPERCASE = /[\p{Lu}]/u;
var LOWERCASE = /[\p{Ll}]/u;
var LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
var IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
var SEPARATORS = /[_.\- ]+/;
var LEADING_SEPARATORS = new RegExp("^" + SEPARATORS.source);
var SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, "gu");
var NUMBERS_AND_IDENTIFIER = new RegExp("\\d+" + IDENTIFIER.source, "gu");
var preserveCamelCase = (string12, toLowerCase, toUpperCase, preserveConsecutiveUppercase2) => {
  let isLastCharLower = false;
  let isLastCharUpper = false;
  let isLastLastCharUpper = false;
  let isLastLastCharPreserved = false;
  for (let index4 = 0; index4 < string12.length; index4++) {
    const character = string12[index4];
    isLastLastCharPreserved = index4 > 2 ? string12[index4 - 3] === "-" : true;
    if (isLastCharLower && UPPERCASE.test(character)) {
      string12 = string12.slice(0, index4) + "-" + string12.slice(index4);
      isLastCharLower = false;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = true;
      index4++;
    } else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character) && (!isLastLastCharPreserved || preserveConsecutiveUppercase2)) {
      string12 = string12.slice(0, index4 - 1) + "-" + string12.slice(index4 - 1);
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = false;
      isLastCharLower = true;
    } else {
      isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
    }
  }
  return string12;
};
var preserveConsecutiveUppercase = (input, toLowerCase) => {
  LEADING_CAPITAL.lastIndex = 0;
  return input.replace(LEADING_CAPITAL, (m1) => toLowerCase(m1));
};
var postProcess = (input, toUpperCase) => {
  SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
  NUMBERS_AND_IDENTIFIER.lastIndex = 0;
  return input.replace(SEPARATORS_AND_IDENTIFIER, (_2, identifier) => toUpperCase(identifier)).replace(NUMBERS_AND_IDENTIFIER, (m) => toUpperCase(m));
};
function camelCase(input, options) {
  if (!(typeof input === "string" || Array.isArray(input))) {
    throw new TypeError("Expected the input to be `string | string[]`");
  }
  options = {
    pascalCase: false,
    preserveConsecutiveUppercase: false,
    ...options
  };
  if (Array.isArray(input)) {
    input = input.map((x) => x.trim()).filter((x) => x.length).join("-");
  } else {
    input = input.trim();
  }
  if (input.length === 0) {
    return "";
  }
  const toLowerCase = options.locale === false ? (string12) => string12.toLowerCase() : (string12) => string12.toLocaleLowerCase(options.locale);
  const toUpperCase = options.locale === false ? (string12) => string12.toUpperCase() : (string12) => string12.toLocaleUpperCase(options.locale);
  if (input.length === 1) {
    if (SEPARATORS.test(input)) {
      return "";
    }
    return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
  }
  const hasUpperCase = input !== toLowerCase(input);
  if (hasUpperCase) {
    input = preserveCamelCase(input, toLowerCase, toUpperCase, options.preserveConsecutiveUppercase);
  }
  input = input.replace(LEADING_SEPARATORS, "");
  input = options.preserveConsecutiveUppercase ? preserveConsecutiveUppercase(input, toLowerCase) : toLowerCase(input);
  if (options.pascalCase) {
    input = toUpperCase(input.charAt(0)) + input.slice(1);
  }
  return postProcess(input, toUpperCase);
}

// src/@types/utils.ts
String.prototype.trimChar = function(char) {
  let start = 0;
  let end = this.length;
  while (start < end && this[start] === char)
    ++start;
  while (end > start && this[end - 1] === char)
    --end;
  return start > 0 || end < this.length ? this.substring(start, end) : this.toString();
};
String.prototype.squashSpaces = function() {
  return this.replace(/  +/g, " ").trim();
};
String.prototype.camelCase = function() {
  return camelCase(String(this));
};
String.prototype.capitalise = function() {
  return this && this.length > 0 ? `${this[0].toUpperCase()}${this.slice(1)}` : String(this);
};
String.prototype.concatIf = function(it, condition) {
  return condition ? `${this}${it}` : String(this);
};
Array.prototype.random = function() {
  return this[~~(Math.random() * this.length)];
};

// src/cli/commands/sqliteIntrospect.ts
init_mjs();
import { renderWithTask as renderWithTask2 } from "hanji";
var sqlitePushIntrospect = async (db, filters) => {
  const matchers = filters.map((it) => {
    return new Minimatch(it);
  });
  const filter2 = (tableName) => {
    if (matchers.length === 0)
      return true;
    for (let i = 0; i < matchers.length; i++) {
      const matcher = matchers[i];
      if (matcher.match(tableName))
        return true;
    }
    return false;
  };
  const progress = new ProgressView(
    "Pulling schema from database...",
    "Pulling schema from database..."
  );
  const res = await renderWithTask2(
    progress,
    fromDatabase2(db, filter2)
  );
  const schema4 = { id: originUUID, prevId: "", ...res };
  return { schema: schema4 };
};

// src/payload.ts
init_sqliteSerializer();

// src/cli/commands/sqlitePushUtils.ts
init_source();
init_sqliteSchema();
init_sqlgenerator();
var _moveDataStatements = (tableName, json, dataLoss = false) => {
  const statements = [];
  statements.push(
    new SqliteRenameTableConvertor().convert({
      type: "rename_table",
      tableNameFrom: tableName,
      tableNameTo: `__old_push_${tableName}`,
      fromSchema: "",
      toSchema: ""
    })
  );
  const tableColumns = Object.values(json.tables[tableName].columns);
  const referenceData = Object.values(json.tables[tableName].foreignKeys);
  const compositePKs = Object.values(
    json.tables[tableName].compositePrimaryKeys
  ).map((it) => SQLiteSquasher.unsquashPK(it));
  statements.push(
    new SQLiteCreateTableConvertor().convert({
      type: "sqlite_create_table",
      tableName,
      columns: tableColumns,
      referenceData,
      compositePKs
    })
  );
  if (!dataLoss) {
    statements.push(
      `INSERT INTO "${tableName}" SELECT * FROM "__old_push_${tableName}";`
    );
  }
  statements.push(
    new SQLiteDropTableConvertor().convert({
      type: "drop_table",
      tableName: `__old_push_${tableName}`,
      schema: ""
    })
  );
  for (const idx of Object.values(json.tables[tableName].indexes)) {
    statements.push(
      new CreateSqliteIndexConvertor().convert({
        type: "create_index",
        tableName,
        schema: "",
        data: idx
      })
    );
  }
  return statements;
};
var getOldTableName = (tableName, meta) => {
  for (const key of Object.keys(meta.tables)) {
    const value = meta.tables[key];
    if (`"${tableName}"` === value) {
      return key.substring(1, key.length - 1);
    }
  }
  return tableName;
};
var getNewTableName = (tableName, meta) => {
  if (typeof meta.tables[`"${tableName}"`] !== "undefined") {
    return meta.tables[`"${tableName}"`].substring(
      1,
      meta.tables[`"${tableName}"`].length - 1
    );
  }
  return tableName;
};
var logSuggestionsAndReturn = async (connection, statements, json1, json2, meta) => {
  let shouldAskForApprove = false;
  const statementsToExecute = [];
  const infoToPrint = [];
  const tablesToRemove = [];
  const columnsToRemove = [];
  const schemasToRemove = [];
  const tablesToTruncate = [];
  const tablesContext = {};
  for (const statement of statements) {
    if (statement.type === "drop_table") {
      const res = await connection.query(
        `select count(*) as count from \`${statement.tableName}\``
      );
      const count2 = Number(res[0].count);
      if (count2 > 0) {
        infoToPrint.push(
          `\xB7 You're about to delete ${source_default.underline(
            statement.tableName
          )} table with ${count2} items`
        );
        tablesToRemove.push(statement.tableName);
        shouldAskForApprove = true;
      }
      const stmnt = fromJson([statement], "sqlite")[0];
      statementsToExecute.push(stmnt);
    } else if (statement.type === "alter_table_drop_column") {
      const newTableName = getOldTableName(statement.tableName, meta);
      const columnIsPartOfPk = Object.values(
        json1.tables[newTableName].compositePrimaryKeys
      ).find(
        (c) => SQLiteSquasher.unsquashPK(c).includes(statement.columnName)
      );
      const columnIsPartOfIndex = Object.values(
        json1.tables[newTableName].indexes
      ).find(
        (c) => SQLiteSquasher.unsquashIdx(c).columns.includes(statement.columnName)
      );
      const columnIsPk = json2.tables[newTableName].columns[statement.columnName].primaryKey;
      const columnIsPartOfFk = Object.values(
        json1.tables[newTableName].foreignKeys
      ).find(
        (t) => SQLiteSquasher.unsquashFK(t).columnsFrom.includes(statement.columnName)
      );
      const res = await connection.query(
        `select count(*) as count from \`${newTableName}\``
      );
      const count2 = Number(res[0].count);
      if (count2 > 0) {
        infoToPrint.push(
          `\xB7 You're about to delete ${source_default.underline(
            statement.columnName
          )} column in ${newTableName} table with ${count2} items`
        );
        columnsToRemove.push(`${newTableName}_${statement.columnName}`);
        shouldAskForApprove = true;
      }
      if (columnIsPk || columnIsPartOfPk || columnIsPartOfIndex || columnIsPartOfFk) {
        tablesContext[newTableName] = [
          ..._moveDataStatements(statement.tableName, json2, true)
        ];
        const tablesReferncingCurrent = [];
        for (const table4 of Object.values(json1.tables)) {
          const tablesRefs = Object.values(json1.tables[table4.name].foreignKeys).filter(
            (t) => SQLiteSquasher.unsquashFK(t).tableTo === newTableName
          ).map((t) => SQLiteSquasher.unsquashFK(t).tableFrom);
          tablesReferncingCurrent.push(...tablesRefs);
        }
        const uniqueTableRefs = [...new Set(tablesReferncingCurrent)];
        for (const table4 of uniqueTableRefs) {
          if (typeof tablesContext[table4] === "undefined") {
            tablesContext[table4] = [..._moveDataStatements(table4, json2)];
          }
        }
      } else {
        if (typeof tablesContext[newTableName] === "undefined") {
          const stmnt = fromJson([statement], "sqlite")[0];
          statementsToExecute.push(stmnt);
        }
      }
    } else if (statement.type === "sqlite_alter_table_add_column") {
      const newTableName = getOldTableName(statement.tableName, meta);
      if (statement.column.notNull && !statement.column.default) {
        const res = await connection.query(
          `select count(*) as count from \`${newTableName}\``
        );
        const count2 = Number(res[0].count);
        if (count2 > 0) {
          infoToPrint.push(
            `\xB7 You're about to add not-null ${source_default.underline(
              statement.column.name
            )} column without default value, which contains ${count2} items`
          );
          tablesToTruncate.push(newTableName);
          statementsToExecute.push(`delete from ${newTableName};`);
          shouldAskForApprove = true;
        }
      }
      if (statement.column.primaryKey) {
        tablesContext[newTableName] = [
          ..._moveDataStatements(statement.tableName, json2, true)
        ];
        const tablesReferncingCurrent = [];
        for (const table4 of Object.values(json1.tables)) {
          const tablesRefs = Object.values(json1.tables[table4.name].foreignKeys).filter(
            (t) => SQLiteSquasher.unsquashFK(t).tableTo === newTableName
          ).map((t) => SQLiteSquasher.unsquashFK(t).tableFrom);
          tablesReferncingCurrent.push(...tablesRefs);
        }
        const uniqueTableRefs = [...new Set(tablesReferncingCurrent)];
        for (const table4 of uniqueTableRefs) {
          if (typeof tablesContext[table4] === "undefined") {
            tablesContext[table4] = [..._moveDataStatements(table4, json2)];
          }
        }
      } else {
        if (typeof tablesContext[newTableName] === "undefined") {
          const stmnt = fromJson([statement], "sqlite")[0];
          statementsToExecute.push(stmnt);
        }
      }
    } else if (statement.type === "alter_table_alter_column_set_type" || statement.type === "alter_table_alter_column_set_default" || statement.type === "alter_table_alter_column_drop_default" || statement.type === "alter_table_alter_column_set_notnull" || statement.type === "alter_table_alter_column_drop_notnull" || statement.type === "alter_table_alter_column_drop_autoincrement" || statement.type === "alter_table_alter_column_set_autoincrement" || statement.type === "alter_table_alter_column_drop_pk" || statement.type === "alter_table_alter_column_set_pk") {
      if (!(statement.type === "alter_table_alter_column_set_notnull" && statement.columnPk)) {
        const newTableName = getOldTableName(statement.tableName, meta);
        if (statement.type === "alter_table_alter_column_set_notnull" && typeof statement.columnDefault === "undefined") {
          const res = await connection.query(
            `select count(*) as count from \`${newTableName}\``
          );
          const count2 = Number(res[0].count);
          if (count2 > 0) {
            infoToPrint.push(
              `\xB7 You're about to add not-null constraint to ${source_default.underline(
                statement.columnName
              )} column without default value, which contains ${count2} items`
            );
            tablesToTruncate.push(newTableName);
            shouldAskForApprove = true;
          }
          tablesContext[newTableName] = _moveDataStatements(
            statement.tableName,
            json2,
            true
          );
        } else {
          if (typeof tablesContext[newTableName] === "undefined") {
            tablesContext[newTableName] = _moveDataStatements(
              statement.tableName,
              json2
            );
          }
        }
        const tablesReferncingCurrent = [];
        for (const table4 of Object.values(json1.tables)) {
          const tablesRefs = Object.values(json1.tables[table4.name].foreignKeys).filter(
            (t) => SQLiteSquasher.unsquashFK(t).tableTo === newTableName
          ).map((t) => {
            return getNewTableName(
              SQLiteSquasher.unsquashFK(t).tableFrom,
              meta
            );
          });
          tablesReferncingCurrent.push(...tablesRefs);
        }
        const uniqueTableRefs = [...new Set(tablesReferncingCurrent)];
        for (const table4 of uniqueTableRefs) {
          if (typeof tablesContext[table4] === "undefined") {
            tablesContext[table4] = [..._moveDataStatements(table4, json2)];
          }
        }
      }
    } else if (statement.type === "create_reference" || statement.type === "delete_reference" || statement.type === "alter_reference") {
      const fk4 = SQLiteSquasher.unsquashFK(statement.data);
      if (typeof tablesContext[statement.tableName] === "undefined") {
        tablesContext[statement.tableName] = _moveDataStatements(
          statement.tableName,
          json2
        );
      }
    } else if (statement.type === "create_composite_pk" || statement.type === "alter_composite_pk" || statement.type === "delete_composite_pk" || statement.type === "create_unique_constraint" || statement.type === "delete_unique_constraint") {
      const newTableName = getOldTableName(statement.tableName, meta);
      if (typeof tablesContext[newTableName] === "undefined") {
        tablesContext[newTableName] = _moveDataStatements(
          statement.tableName,
          json2
        );
      }
    } else {
      const stmnt = fromJson([statement], "sqlite")[0];
      if (typeof stmnt !== "undefined") {
        statementsToExecute.push(stmnt);
      }
    }
  }
  for (const context of Object.values(tablesContext)) {
    statementsToExecute.push(...context);
  }
  return {
    statementsToExecute,
    shouldAskForApprove,
    infoToPrint,
    columnsToRemove: [...new Set(columnsToRemove)],
    schemasToRemove: [...new Set(schemasToRemove)],
    tablesToTruncate: [...new Set(tablesToTruncate)],
    tablesToRemove: [...new Set(tablesToRemove)]
  };
};

// src/payload.ts
init_mysqlSerializer();
init_global();
init_migrate();

// src/cli/commands/pgUp.ts
init_pgSchema();
init_utils4();
var updateUpToV6 = (json) => {
  const schema4 = pgSchemaV5.parse(json);
  const tables = Object.fromEntries(
    Object.entries(schema4.tables).map((it) => {
      const table4 = it[1];
      const schema5 = table4.schema || "public";
      return [`${schema5}.${table4.name}`, table4];
    })
  );
  const enums = Object.fromEntries(
    Object.entries(schema4.enums).map((it) => {
      const en = it[1];
      return [
        `public.${en.name}`,
        {
          name: en.name,
          schema: "public",
          values: Object.values(en.values)
        }
      ];
    })
  );
  return {
    ...schema4,
    version: "6",
    dialect: "postgresql",
    tables,
    enums
  };
};

// src/payload.ts
var generateDrizzleJson = (imports, prevId) => {
  const prepared = prepareFromExports(imports);
  const id = randomUUID();
  const snapshot = generatePgSnapshot(
    prepared.tables,
    prepared.enums,
    prepared.schemas
  );
  return fillPgSnapshot({
    serialized: snapshot,
    id,
    idPrev: prevId ?? originUUID
  });
};
var generateMigration = async (prev, cur) => {
  const { applyPgSnapshotsDiff: applyPgSnapshotsDiff2 } = await Promise.resolve().then(() => (init_snapshotsDiffer(), snapshotsDiffer_exports));
  const validatedPrev = pgSchema.parse(prev);
  const validatedCur = pgSchema.parse(cur);
  const squashedPrev = squashPgScheme(validatedPrev);
  const squashedCur = squashPgScheme(validatedCur);
  const { sqlStatements, _meta } = await applyPgSnapshotsDiff2(
    squashedPrev,
    squashedCur,
    schemasResolver,
    enumsResolver,
    tablesResolver,
    columnsResolver,
    validatedPrev,
    validatedCur
  );
  return sqlStatements;
};
var pushSchema = async (imports, drizzleInstance) => {
  const { applyPgSnapshotsDiff: applyPgSnapshotsDiff2 } = await Promise.resolve().then(() => (init_snapshotsDiffer(), snapshotsDiffer_exports));
  const { sql: sql2 } = await Promise.resolve().then(() => (init_drizzle_orm(), drizzle_orm_exports));
  const db = {
    query: async (query, params) => {
      const res = await drizzleInstance.execute(sql2.raw(query));
      return res.rows;
    }
  };
  const cur = generateDrizzleJson(imports);
  const { schema: prev } = await pgPushIntrospect(db, [], ["public"]);
  const validatedPrev = pgSchema.parse(prev);
  const validatedCur = pgSchema.parse(cur);
  const squashedPrev = squashPgScheme(validatedPrev);
  const squashedCur = squashPgScheme(validatedCur);
  const { statements } = await applyPgSnapshotsDiff2(
    squashedPrev,
    squashedCur,
    schemasResolver,
    enumsResolver,
    tablesResolver,
    columnsResolver,
    validatedPrev,
    validatedCur
  );
  const { shouldAskForApprove, statementsToExecute, infoToPrint } = await pgSuggestions(db, statements);
  return {
    hasDataLoss: shouldAskForApprove,
    warnings: infoToPrint,
    statementsToExecute,
    apply: async () => {
      for (const dStmnt of statementsToExecute) {
        await db.query(dStmnt);
      }
    }
  };
};
var generateSQLiteDrizzleJson = async (imports, prevId) => {
  const { prepareFromExports: prepareFromExports4 } = await Promise.resolve().then(() => (init_sqliteImports(), sqliteImports_exports));
  const prepared = prepareFromExports4(imports);
  const id = randomUUID();
  const snapshot = generateSqliteSnapshot(prepared.tables);
  return {
    ...snapshot,
    id,
    prevId: prevId ?? originUUID
  };
};
var generateSQLiteMigration = async (prev, cur) => {
  const { applySqliteSnapshotsDiff: applySqliteSnapshotsDiff2 } = await Promise.resolve().then(() => (init_snapshotsDiffer(), snapshotsDiffer_exports));
  const validatedPrev = sqliteSchema.parse(prev);
  const validatedCur = sqliteSchema.parse(cur);
  const squashedPrev = squashSqliteScheme(validatedPrev);
  const squashedCur = squashSqliteScheme(validatedCur);
  const { sqlStatements } = await applySqliteSnapshotsDiff2(
    squashedPrev,
    squashedCur,
    tablesResolver,
    columnsResolver
  );
  return sqlStatements;
};
var pushSQLiteSchema = async (imports, drizzleInstance) => {
  const { applySqliteSnapshotsDiff: applySqliteSnapshotsDiff2 } = await Promise.resolve().then(() => (init_snapshotsDiffer(), snapshotsDiffer_exports));
  const { sql: sql2 } = await Promise.resolve().then(() => (init_drizzle_orm(), drizzle_orm_exports));
  const db = {
    query: async (query, params) => {
      const res = drizzleInstance.all(sql2.raw(query));
      return res;
    },
    run: async (query) => {
      return Promise.resolve(drizzleInstance.run(sql2.raw(query))).then(
        () => {
        }
      );
    }
  };
  const cur = generateSQLiteDrizzleJson(imports);
  const { schema: prev } = await sqlitePushIntrospect(db, []);
  const validatedPrev = sqliteSchema.parse(prev);
  const validatedCur = sqliteSchema.parse(cur);
  const squashedPrev = squashSqliteScheme(validatedPrev);
  const squashedCur = squashSqliteScheme(validatedCur);
  const { statements, _meta } = await applySqliteSnapshotsDiff2(
    squashedPrev,
    squashedCur,
    tablesResolver,
    columnsResolver
  );
  const { shouldAskForApprove, statementsToExecute, infoToPrint } = await logSuggestionsAndReturn(
    db,
    statements,
    squashedPrev,
    squashedCur,
    _meta
  );
  return {
    hasDataLoss: shouldAskForApprove,
    warnings: infoToPrint,
    statementsToExecute,
    apply: async () => {
      for (const dStmnt of statementsToExecute) {
        await db.query(dStmnt);
      }
    }
  };
};
var generateMySQLDrizzleJson = async (imports, prevId) => {
  const { prepareFromExports: prepareFromExports4 } = await Promise.resolve().then(() => (init_mysqlImports(), mysqlImports_exports));
  const prepared = prepareFromExports4(imports);
  const id = randomUUID();
  const snapshot = generateMySqlSnapshot(prepared.tables);
  return {
    ...snapshot,
    id,
    prevId: prevId ?? originUUID
  };
};
var generateMySQLMigration = async (prev, cur) => {
  const { applyMysqlSnapshotsDiff: applyMysqlSnapshotsDiff2 } = await Promise.resolve().then(() => (init_snapshotsDiffer(), snapshotsDiffer_exports));
  const validatedPrev = mysqlSchema.parse(prev);
  const validatedCur = mysqlSchema.parse(cur);
  const squashedPrev = squashMysqlScheme(validatedPrev);
  const squashedCur = squashMysqlScheme(validatedCur);
  const { sqlStatements } = await applyMysqlSnapshotsDiff2(
    squashedPrev,
    squashedCur,
    tablesResolver,
    columnsResolver,
    validatedPrev,
    validatedCur
  );
  return sqlStatements;
};
var pushMySQLSchema = async (imports, drizzleInstance, databaseName) => {
  const { applyMysqlSnapshotsDiff: applyMysqlSnapshotsDiff2 } = await Promise.resolve().then(() => (init_snapshotsDiffer(), snapshotsDiffer_exports));
  const { logSuggestionsAndReturn: logSuggestionsAndReturn3 } = await Promise.resolve().then(() => (init_mysqlPushUtils(), mysqlPushUtils_exports));
  const { mysqlPushIntrospect: mysqlPushIntrospect2 } = await Promise.resolve().then(() => (init_mysqlIntrospect(), mysqlIntrospect_exports));
  const { sql: sql2 } = await Promise.resolve().then(() => (init_drizzle_orm(), drizzle_orm_exports));
  const db = {
    query: async (query, params) => {
      const res = await drizzleInstance.execute(sql2.raw(query));
      return res[0];
    }
  };
  const cur = generateMySQLDrizzleJson(imports);
  const { schema: prev } = await mysqlPushIntrospect2(db, databaseName, []);
  const validatedPrev = mysqlSchema.parse(prev);
  const validatedCur = mysqlSchema.parse(cur);
  const squashedPrev = squashMysqlScheme(validatedPrev);
  const squashedCur = squashMysqlScheme(validatedCur);
  const { statements } = await applyMysqlSnapshotsDiff2(
    squashedPrev,
    squashedCur,
    tablesResolver,
    columnsResolver,
    validatedPrev,
    validatedCur
  );
  const { shouldAskForApprove, statementsToExecute, infoToPrint } = await logSuggestionsAndReturn3(db, statements, validatedCur);
  return {
    hasDataLoss: shouldAskForApprove,
    warnings: infoToPrint,
    statementsToExecute,
    apply: async () => {
      for (const dStmnt of statementsToExecute) {
        await db.query(dStmnt);
      }
    }
  };
};
var upPgSnapshot = (snapshot) => {
  return updateUpToV6(snapshot);
};
export {
  generateDrizzleJson,
  generateMigration,
  generateMySQLDrizzleJson,
  generateMySQLMigration,
  generateSQLiteDrizzleJson,
  generateSQLiteMigration,
  pushMySQLSchema,
  pushSQLiteSchema,
  pushSchema,
  upPgSnapshot
};
