import { entityKind, is } from "../entity.js";
import { pgEnumWithSchema } from "./columns/enum.js";
import { pgTableWithSchema } from "./table.js";
import { pgMaterializedViewWithSchema, pgViewWithSchema } from "./view.js";
class PgSchema {
  constructor(schemaName) {
    this.schemaName = schemaName;
  }
  static [entityKind] = "PgSchema";
  table = (name, columns, extraConfig) => {
    return pgTableWithSchema(name, columns, extraConfig, this.schemaName);
  };
  view = (name, columns) => {
    return pgViewWithSchema(name, columns, this.schemaName);
  };
  materializedView = (name, columns) => {
    return pgMaterializedViewWithSchema(name, columns, this.schemaName);
  };
  enum = (name, values) => {
    return pgEnumWithSchema(name, values, this.schemaName);
  };
}
function isPgSchema(obj) {
  return is(obj, PgSchema);
}
function pgSchema(name) {
  if (name === "public") {
    throw new Error(
      `You can't specify 'public' as schema name. Postgres is using public schema by default. If you want to use 'public' schema, just use pgTable() instead of creating a schema`
    );
  }
  return new PgSchema(name);
}
export {
  PgSchema,
  isPgSchema,
  pgSchema
};
//# sourceMappingURL=schema.js.map