import { entityKind } from "../../entity.js";
import { MySqlColumn, MySqlColumnBuilder } from "./common.js";
class MySqlCustomColumnBuilder extends MySqlColumnBuilder {
  static [entityKind] = "MySqlCustomColumnBuilder";
  constructor(name, fieldConfig, customTypeParams) {
    super(name, "custom", "MySqlCustomColumn");
    this.config.fieldConfig = fieldConfig;
    this.config.customTypeParams = customTypeParams;
  }
  /** @internal */
  build(table) {
    return new MySqlCustomColumn(
      table,
      this.config
    );
  }
}
class MySqlCustomColumn extends MySqlColumn {
  static [entityKind] = "MySqlCustomColumn";
  sqlName;
  mapTo;
  mapFrom;
  constructor(table, config) {
    super(table, config);
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
}
function customType(customTypeParams) {
  return (dbName, fieldConfig) => {
    return new MySqlCustomColumnBuilder(dbName, fieldConfig, customTypeParams);
  };
}
export {
  MySqlCustomColumn,
  MySqlCustomColumnBuilder,
  customType
};
//# sourceMappingURL=custom.js.map