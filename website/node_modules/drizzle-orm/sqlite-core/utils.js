import { is } from "../entity.js";
import { Table } from "../table.js";
import { ViewBaseConfig } from "../view-common.js";
import { CheckBuilder } from "./checks.js";
import { ForeignKeyBuilder } from "./foreign-keys.js";
import { IndexBuilder } from "./indexes.js";
import { PrimaryKeyBuilder } from "./primary-keys.js";
import { SQLiteTable } from "./table.js";
import { UniqueConstraintBuilder } from "./unique-constraint.js";
import { SQLiteViewConfig } from "./view-common.js";
function getTableConfig(table) {
  const columns = Object.values(table[SQLiteTable.Symbol.Columns]);
  const indexes = [];
  const checks = [];
  const primaryKeys = [];
  const uniqueConstraints = [];
  const foreignKeys = Object.values(table[SQLiteTable.Symbol.InlineForeignKeys]);
  const name = table[Table.Symbol.Name];
  const extraConfigBuilder = table[SQLiteTable.Symbol.ExtraConfigBuilder];
  if (extraConfigBuilder !== void 0) {
    const extraConfig = extraConfigBuilder(table[SQLiteTable.Symbol.Columns]);
    for (const builder of Object.values(extraConfig)) {
      if (is(builder, IndexBuilder)) {
        indexes.push(builder.build(table));
      } else if (is(builder, CheckBuilder)) {
        checks.push(builder.build(table));
      } else if (is(builder, UniqueConstraintBuilder)) {
        uniqueConstraints.push(builder.build(table));
      } else if (is(builder, PrimaryKeyBuilder)) {
        primaryKeys.push(builder.build(table));
      } else if (is(builder, ForeignKeyBuilder)) {
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
    ...view[ViewBaseConfig],
    ...view[SQLiteViewConfig]
  };
}
export {
  getTableConfig,
  getViewConfig
};
//# sourceMappingURL=utils.js.map