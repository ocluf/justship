import {
  fields,
  messages
} from "./chunk-LKAXJ6BU.js";
import {
  SimpleErrorReporter,
  SimpleMessagesProvider,
  helpers
} from "./chunk-TVEIURSI.js";
import {
  __export
} from "./chunk-CSAU5B4Q.js";

// src/vine/create_rule.ts
function createRule(validator, metaData) {
  const rule = {
    validator,
    isAsync: metaData?.isAsync || validator.constructor.name === "AsyncFunction",
    implicit: metaData?.implicit ?? false
  };
  return function(...options) {
    return {
      rule,
      options: options[0]
    };
  };
}

// src/schema/builder.ts
import Macroable3 from "@poppinss/macroable";

// src/schema/base/literal.ts
import camelcase from "camelcase";
import Macroable from "@poppinss/macroable";

// src/symbols.ts
var symbols_exports = {};
__export(symbols_exports, {
  COTYPE: () => COTYPE,
  IS_OF_TYPE: () => IS_OF_TYPE,
  OTYPE: () => OTYPE,
  PARSE: () => PARSE,
  UNIQUE_NAME: () => UNIQUE_NAME,
  VALIDATION: () => VALIDATION
});
var UNIQUE_NAME = Symbol.for("schema_name");
var IS_OF_TYPE = Symbol.for("is_of_type");
var PARSE = Symbol.for("parse");
var OTYPE = Symbol.for("opaque_type");
var COTYPE = Symbol.for("camelcase_opaque_type");
var VALIDATION = Symbol.for("to_validation");

// src/schema/base/rules.ts
var requiredWhen = createRule(
  (_, checker, field) => {
    const shouldBeRequired = checker(field);
    if (!field.isDefined && shouldBeRequired) {
      field.report(messages.required, "required", field);
    }
  },
  {
    implicit: true
  }
);

// src/schema/base/literal.ts
var BaseModifiersType = class extends Macroable {
  /**
   * Mark the field under validation as optional. An optional
   * field allows both null and undefined values.
   */
  optional(validations) {
    return new OptionalModifier(this, validations);
  }
  /**
   * Mark the field under validation to be null. The null value will
   * be written to the output as well.
   *
   * If `optional` and `nullable` are used together, then both undefined
   * and null values will be allowed.
   */
  nullable() {
    return new NullableModifier(this);
  }
  /**
   * Apply transform on the final validated value. The transform method may
   * convert the value to any new datatype.
   */
  transform(transformer) {
    return new TransformModifier(transformer, this);
  }
};
var NullableModifier = class _NullableModifier extends BaseModifiersType {
  #parent;
  constructor(parent) {
    super();
    this.#parent = parent;
  }
  /**
   * Creates a fresh instance of the underlying schema type
   * and wraps it inside the nullable modifier
   */
  clone() {
    return new _NullableModifier(this.#parent.clone());
  }
  /**
   * Compiles to compiler node
   */
  [PARSE](propertyName, refs, options) {
    const output = this.#parent[PARSE](propertyName, refs, options);
    output.allowNull = true;
    return output;
  }
};
var OptionalModifier = class _OptionalModifier extends BaseModifiersType {
  #parent;
  /**
   * Optional modifier validations list
   */
  validations;
  constructor(parent, validations) {
    super();
    this.#parent = parent;
    this.validations = validations || [];
  }
  /**
   * Shallow clones the validations. Since, there are no API's to mutate
   * the validation options, we can safely copy them by reference.
   */
  cloneValidations() {
    return this.validations.map((validation) => {
      return {
        options: validation.options,
        rule: validation.rule
      };
    });
  }
  /**
   * Compiles validations
   */
  compileValidations(refs) {
    return this.validations.map((validation) => {
      return {
        ruleFnId: refs.track({
          validator: validation.rule.validator,
          options: validation.options
        }),
        implicit: validation.rule.implicit,
        isAsync: validation.rule.isAsync
      };
    });
  }
  /**
   * Push a validation to the validations chain.
   */
  use(validation) {
    this.validations.push(VALIDATION in validation ? validation[VALIDATION]() : validation);
    return this;
  }
  requiredWhen(otherField, operator, expectedValue) {
    if (typeof otherField === "function") {
      return this.use(requiredWhen(otherField));
    }
    let checker;
    switch (operator) {
      case "=":
        checker = (value) => value === expectedValue;
        break;
      case "!=":
        checker = (value) => value !== expectedValue;
        break;
      case "in":
        checker = (value) => expectedValue.includes(value);
        break;
      case "notIn":
        checker = (value) => !expectedValue.includes(value);
        break;
      case ">":
        checker = (value) => value > expectedValue;
        break;
      case "<":
        checker = (value) => value < expectedValue;
        break;
      case ">=":
        checker = (value) => value >= expectedValue;
        break;
      case "<=":
        checker = (value) => value <= expectedValue;
    }
    return this.use(
      requiredWhen((field) => {
        const otherFieldValue = helpers.getNestedValue(otherField, field);
        return checker(otherFieldValue);
      })
    );
  }
  /**
   * Mark the field under validation as required when all
   * the other fields are present with value other
   * than `undefined` or `null`.
   */
  requiredIfExists(fields2) {
    const fieldsToExist = Array.isArray(fields2) ? fields2 : [fields2];
    return this.use(
      requiredWhen((field) => {
        return fieldsToExist.every(
          (otherField) => helpers.exists(helpers.getNestedValue(otherField, field))
        );
      })
    );
  }
  /**
   * Mark the field under validation as required when any
   * one of the other fields are present with non-nullable
   * value.
   */
  requiredIfAnyExists(fields2) {
    return this.use(
      requiredWhen((field) => {
        return fields2.some(
          (otherField) => helpers.exists(helpers.getNestedValue(otherField, field))
        );
      })
    );
  }
  /**
   * Mark the field under validation as required when all
   * the other fields are missing or their value is
   * `undefined` or `null`.
   */
  requiredIfMissing(fields2) {
    const fieldsToExist = Array.isArray(fields2) ? fields2 : [fields2];
    return this.use(
      requiredWhen((field) => {
        return fieldsToExist.every(
          (otherField) => helpers.isMissing(helpers.getNestedValue(otherField, field))
        );
      })
    );
  }
  /**
   * Mark the field under validation as required when any
   * one of the other fields are missing.
   */
  requiredIfAnyMissing(fields2) {
    return this.use(
      requiredWhen((field) => {
        return fields2.some(
          (otherField) => helpers.isMissing(helpers.getNestedValue(otherField, field))
        );
      })
    );
  }
  /**
   * Creates a fresh instance of the underlying schema type
   * and wraps it inside the optional modifier
   */
  clone() {
    return new _OptionalModifier(this.#parent.clone(), this.cloneValidations());
  }
  /**
   * Compiles to compiler node
   */
  [PARSE](propertyName, refs, options) {
    const output = this.#parent[PARSE](propertyName, refs, options);
    output.isOptional = true;
    output.validations = output.validations.concat(this.compileValidations(refs));
    return output;
  }
};
var TransformModifier = class _TransformModifier extends BaseModifiersType {
  #parent;
  #transform;
  constructor(transform, parent) {
    super();
    this.#transform = transform;
    this.#parent = parent;
  }
  /**
   * Creates a fresh instance of the underlying schema type
   * and wraps it inside the transform modifier.
   */
  clone() {
    return new _TransformModifier(this.#transform, this.#parent.clone());
  }
  /**
   * Compiles to compiler node
   */
  [PARSE](propertyName, refs, options) {
    const output = this.#parent[PARSE](propertyName, refs, options);
    output.transformFnId = refs.trackTransformer(this.#transform);
    return output;
  }
};
var BaseLiteralType = class extends BaseModifiersType {
  /**
   * Field options
   */
  options;
  /**
   * Set of validations to run
   */
  validations;
  constructor(options, validations) {
    super();
    this.options = {
      bail: true,
      allowNull: false,
      isOptional: false,
      ...options
    };
    this.validations = validations || [];
  }
  /**
   * Shallow clones the validations. Since, there are no API's to mutate
   * the validation options, we can safely copy them by reference.
   */
  cloneValidations() {
    return this.validations.map((validation) => {
      return {
        options: validation.options,
        rule: validation.rule
      };
    });
  }
  /**
   * Shallow clones the options
   */
  cloneOptions() {
    return { ...this.options };
  }
  /**
   * Compiles validations
   */
  compileValidations(refs) {
    return this.validations.map((validation) => {
      return {
        ruleFnId: refs.track({
          validator: validation.rule.validator,
          options: validation.options
        }),
        implicit: validation.rule.implicit,
        isAsync: validation.rule.isAsync
      };
    });
  }
  /**
   * Define a method to parse the input value. The method
   * is invoked before any validation and hence you must
   * perform type-checking to know the value you are
   * working it.
   */
  parse(callback) {
    this.options.parse = callback;
    return this;
  }
  /**
   * Push a validation to the validations chain.
   */
  use(validation) {
    this.validations.push(VALIDATION in validation ? validation[VALIDATION]() : validation);
    return this;
  }
  /**
   * Enable/disable the bail mode. In bail mode, the field validations
   * are stopped after the first error.
   */
  bail(state) {
    this.options.bail = state;
    return this;
  }
  /**
   * Compiles the schema type to a compiler node
   */
  [PARSE](propertyName, refs, options) {
    return {
      type: "literal",
      fieldName: propertyName,
      propertyName: options.toCamelCase ? camelcase(propertyName) : propertyName,
      bail: this.options.bail,
      allowNull: this.options.allowNull,
      isOptional: this.options.isOptional,
      parseFnId: this.options.parse ? refs.trackParser(this.options.parse) : void 0,
      validations: this.compileValidations(refs)
    };
  }
};

// src/schema/any/main.ts
var VineAny = class _VineAny extends BaseLiteralType {
  constructor(options, validations) {
    super(options, validations);
  }
  /**
   * Clones the VineAny schema type. The applied options
   * and validations are copied to the new instance
   */
  clone() {
    return new _VineAny(this.cloneOptions(), this.cloneValidations());
  }
};

// src/schema/enum/rules.ts
var enumRule = createRule((value, options, field) => {
  const choices = typeof options.choices === "function" ? options.choices(field) : options.choices;
  if (!choices.includes(value)) {
    field.report(messages.enum, "enum", field, { choices });
  }
});

// src/schema/enum/main.ts
var VineEnum = class _VineEnum extends BaseLiteralType {
  /**
   * Default collection of enum rules
   */
  static rules = {
    enum: enumRule
  };
  #values;
  /**
   * Returns the enum choices
   */
  getChoices() {
    return this.#values;
  }
  constructor(values, options, validations) {
    super(options, validations || [enumRule({ choices: values })]);
    this.#values = values;
  }
  /**
   * Clones the VineEnum schema type. The applied options
   * and validations are copied to the new instance
   */
  clone() {
    return new _VineEnum(this.#values, this.cloneOptions(), this.cloneValidations());
  }
};

// src/schema/union/main.ts
import camelcase2 from "camelcase";
var VineUnion = class _VineUnion {
  #conditionals;
  #otherwiseCallback = (_, field) => {
    field.report(messages.union, "union", field);
  };
  constructor(conditionals) {
    this.#conditionals = conditionals;
  }
  /**
   * Define a fallback method to invoke when all of the union conditions
   * fail. You may use this method to report an error.
   */
  otherwise(callback) {
    this.#otherwiseCallback = callback;
    return this;
  }
  /**
   * Clones the VineUnion schema type.
   */
  clone() {
    const cloned = new _VineUnion(this.#conditionals);
    cloned.otherwise(this.#otherwiseCallback);
    return cloned;
  }
  /**
   * Compiles to a union
   */
  [PARSE](propertyName, refs, options) {
    return {
      type: "union",
      fieldName: propertyName,
      propertyName: options.toCamelCase ? camelcase2(propertyName) : propertyName,
      elseConditionalFnRefId: refs.trackConditional(this.#otherwiseCallback),
      conditions: this.#conditionals.map(
        (conditional) => conditional[PARSE](propertyName, refs, options)
      )
    };
  }
};

// src/schema/union/conditional.ts
var UnionConditional = class {
  /**
   * Properties to merge when conditonal is true
   */
  #schema;
  /**
   * Conditional to evaluate
   */
  #conditional;
  constructor(conditional, schema) {
    this.#schema = schema;
    this.#conditional = conditional;
  }
  /**
   * Compiles to a union conditional
   */
  [PARSE](propertyName, refs, options) {
    return {
      conditionalFnRefId: refs.trackConditional(this.#conditional),
      schema: this.#schema[PARSE](propertyName, refs, options)
    };
  }
};

// src/schema/union/builder.ts
function union(conditionals) {
  return new VineUnion(conditionals);
}
union.if = function unionIf(conditon, schema) {
  return new UnionConditional(conditon, schema);
};
union.else = function unionElse(schema) {
  return new UnionConditional(() => true, schema);
};

// src/schema/tuple/main.ts
import camelcase3 from "camelcase";

// src/schema/base/main.ts
import Macroable2 from "@poppinss/macroable";
var BaseModifiersType2 = class extends Macroable2 {
  /**
   * Mark the field under validation as optional. An optional
   * field allows both null and undefined values.
   */
  optional() {
    return new OptionalModifier2(this);
  }
  /**
   * Mark the field under validation to be null. The null value will
   * be written to the output as well.
   *
   * If `optional` and `nullable` are used together, then both undefined
   * and null values will be allowed.
   */
  nullable() {
    return new NullableModifier2(this);
  }
};
var NullableModifier2 = class _NullableModifier extends BaseModifiersType2 {
  #parent;
  constructor(parent) {
    super();
    this.#parent = parent;
  }
  /**
   * Creates a fresh instance of the underlying schema type
   * and wraps it inside the nullable modifier
   */
  clone() {
    return new _NullableModifier(this.#parent.clone());
  }
  /**
   * Compiles to compiler node
   */
  [PARSE](propertyName, refs, options) {
    const output = this.#parent[PARSE](propertyName, refs, options);
    if (output.type !== "union") {
      output.allowNull = true;
    }
    return output;
  }
};
var OptionalModifier2 = class _OptionalModifier extends BaseModifiersType2 {
  #parent;
  constructor(parent) {
    super();
    this.#parent = parent;
  }
  /**
   * Creates a fresh instance of the underlying schema type
   * and wraps it inside the optional modifier
   */
  clone() {
    return new _OptionalModifier(this.#parent.clone());
  }
  /**
   * Compiles to compiler node
   */
  [PARSE](propertyName, refs, options) {
    const output = this.#parent[PARSE](propertyName, refs, options);
    if (output.type !== "union") {
      output.isOptional = true;
    }
    return output;
  }
};
var BaseType = class extends BaseModifiersType2 {
  /**
   * Field options
   */
  options;
  /**
   * Set of validations to run
   */
  validations;
  constructor(options, validations) {
    super();
    this.options = options || {
      bail: true,
      allowNull: false,
      isOptional: false
    };
    this.validations = validations || [];
  }
  /**
   * Shallow clones the validations. Since, there are no API's to mutate
   * the validation options, we can safely copy them by reference.
   */
  cloneValidations() {
    return this.validations.map((validation) => {
      return {
        options: validation.options,
        rule: validation.rule
      };
    });
  }
  /**
   * Shallow clones the options
   */
  cloneOptions() {
    return { ...this.options };
  }
  /**
   * Compiles validations
   */
  compileValidations(refs) {
    return this.validations.map((validation) => {
      return {
        ruleFnId: refs.track({
          validator: validation.rule.validator,
          options: validation.options
        }),
        implicit: validation.rule.implicit,
        isAsync: validation.rule.isAsync
      };
    });
  }
  /**
   * Define a method to parse the input value. The method
   * is invoked before any validation and hence you must
   * perform type-checking to know the value you are
   * working it.
   */
  parse(callback) {
    this.options.parse = callback;
    return this;
  }
  /**
   * Push a validation to the validations chain.
   */
  use(validation) {
    this.validations.push(VALIDATION in validation ? validation[VALIDATION]() : validation);
    return this;
  }
  /**
   * Enable/disable the bail mode. In bail mode, the field validations
   * are stopped after the first error.
   */
  bail(state) {
    this.options.bail = state;
    return this;
  }
};

// src/schema/tuple/main.ts
var VineTuple = class _VineTuple extends BaseType {
  #schemas;
  /**
   * Whether or not to allow unknown properties
   */
  #allowUnknownProperties = false;
  /**
   * The property must be implemented for "unionOfTypes"
   */
  [UNIQUE_NAME] = "vine.array";
  /**
   * Checks if the value is of array type. The method must be
   * implemented for "unionOfTypes"
   */
  [IS_OF_TYPE] = (value) => {
    return Array.isArray(value);
  };
  constructor(schemas, options, validations) {
    super(options, validations);
    this.#schemas = schemas;
  }
  /**
   * Copy unknown properties to the final output.
   */
  allowUnknownProperties() {
    this.#allowUnknownProperties = true;
    return this;
  }
  /**
   * Clone object
   */
  clone() {
    const cloned = new _VineTuple(
      this.#schemas.map((schema) => schema.clone()),
      this.cloneOptions(),
      this.cloneValidations()
    );
    if (this.#allowUnknownProperties) {
      cloned.allowUnknownProperties();
    }
    return cloned;
  }
  /**
   * Compiles to array data type
   */
  [PARSE](propertyName, refs, options) {
    return {
      type: "tuple",
      fieldName: propertyName,
      propertyName: options.toCamelCase ? camelcase3(propertyName) : propertyName,
      bail: this.options.bail,
      allowNull: this.options.allowNull,
      isOptional: this.options.isOptional,
      allowUnknownProperties: this.#allowUnknownProperties,
      parseFnId: this.options.parse ? refs.trackParser(this.options.parse) : void 0,
      validations: this.compileValidations(refs),
      properties: this.#schemas.map((schema, index) => schema[PARSE](String(index), refs, options))
    };
  }
};

// src/schema/array/main.ts
import camelcase4 from "camelcase";

// src/schema/array/rules.ts
var minLengthRule = createRule((value, options, field) => {
  if (!field.isValid) {
    return;
  }
  if (value.length < options.min) {
    field.report(messages["array.minLength"], "array.minLength", field, options);
  }
});
var maxLengthRule = createRule((value, options, field) => {
  if (!field.isValid) {
    return;
  }
  if (value.length > options.max) {
    field.report(messages["array.maxLength"], "array.maxLength", field, options);
  }
});
var fixedLengthRule = createRule((value, options, field) => {
  if (!field.isValid) {
    return;
  }
  if (value.length !== options.size) {
    field.report(messages["array.fixedLength"], "array.fixedLength", field, options);
  }
});
var notEmptyRule = createRule((value, _, field) => {
  if (!field.isValid) {
    return;
  }
  if (value.length <= 0) {
    field.report(messages.notEmpty, "notEmpty", field);
  }
});
var distinctRule = createRule((value, options, field) => {
  if (!field.isValid) {
    return;
  }
  if (!helpers.isDistinct(value, options.fields)) {
    field.report(messages.distinct, "distinct", field, options);
  }
});
var compactRule = createRule((value, _, field) => {
  if (!field.isValid) {
    return;
  }
  field.mutate(
    value.filter((item) => helpers.exists(item) && item !== ""),
    field
  );
});

// src/schema/array/main.ts
var VineArray = class _VineArray extends BaseType {
  /**
   * Default collection of array rules
   */
  static rules = {
    compact: compactRule,
    notEmpty: notEmptyRule,
    distinct: distinctRule,
    minLength: minLengthRule,
    maxLength: maxLengthRule,
    fixedLength: fixedLengthRule
  };
  #schema;
  /**
   * The property must be implemented for "unionOfTypes"
   */
  [UNIQUE_NAME] = "vine.array";
  /**
   * Checks if the value is of array type. The method must be
   * implemented for "unionOfTypes"
   */
  [IS_OF_TYPE] = (value) => {
    return Array.isArray(value);
  };
  constructor(schema, options, validations) {
    super(options, validations);
    this.#schema = schema;
  }
  /**
   * Enforce a minimum length on an array field
   */
  minLength(expectedLength) {
    return this.use(minLengthRule({ min: expectedLength }));
  }
  /**
   * Enforce a maximum length on an array field
   */
  maxLength(expectedLength) {
    return this.use(maxLengthRule({ max: expectedLength }));
  }
  /**
   * Enforce a fixed length on an array field
   */
  fixedLength(expectedLength) {
    return this.use(fixedLengthRule({ size: expectedLength }));
  }
  /**
   * Ensure the array is not empty
   */
  notEmpty() {
    return this.use(notEmptyRule());
  }
  /**
   * Ensure array elements are distinct/unique
   */
  distinct(fields2) {
    return this.use(distinctRule({ fields: fields2 }));
  }
  /**
   * Removes empty strings, null and undefined values from the array
   */
  compact() {
    return this.use(compactRule());
  }
  /**
   * Clones the VineArray schema type. The applied options
   * and validations are copied to the new instance
   */
  clone() {
    return new _VineArray(this.#schema.clone(), this.cloneOptions(), this.cloneValidations());
  }
  /**
   * Compiles to array data type
   */
  [PARSE](propertyName, refs, options) {
    return {
      type: "array",
      fieldName: propertyName,
      propertyName: options.toCamelCase ? camelcase4(propertyName) : propertyName,
      bail: this.options.bail,
      allowNull: this.options.allowNull,
      isOptional: this.options.isOptional,
      each: this.#schema[PARSE]("*", refs, options),
      parseFnId: this.options.parse ? refs.trackParser(this.options.parse) : void 0,
      validations: this.compileValidations(refs)
    };
  }
};

// src/schema/object/main.ts
import camelcase5 from "camelcase";
var VineCamelCaseObject = class _VineCamelCaseObject extends BaseModifiersType2 {
  #schema;
  /**
   * The property must be implemented for "unionOfTypes"
   */
  [UNIQUE_NAME] = "types.object";
  /**
   * Checks if the value is of object type. The method must be
   * implemented for "unionOfTypes"
   */
  [IS_OF_TYPE] = (value) => {
    return value !== null && typeof value === "object" && !Array.isArray(value);
  };
  constructor(schema) {
    super();
    this.#schema = schema;
  }
  /**
   * Clone object
   */
  clone() {
    return new _VineCamelCaseObject(this.#schema.clone());
  }
  /**
   * Compiles the schema type to a compiler node
   */
  [PARSE](propertyName, refs, options) {
    options.toCamelCase = true;
    return this.#schema[PARSE](propertyName, refs, options);
  }
};
var VineObject = class _VineObject extends BaseType {
  /**
   * Object properties
   */
  #properties;
  /**
   * Object groups to merge based on conditionals
   */
  #groups = [];
  /**
   * Whether or not to allow unknown properties
   */
  #allowUnknownProperties = false;
  /**
   * The property must be implemented for "unionOfTypes"
   */
  [UNIQUE_NAME] = "vine.object";
  /**
   * Checks if the value is of object type. The method must be
   * implemented for "unionOfTypes"
   */
  [IS_OF_TYPE] = (value) => {
    return value !== null && typeof value === "object" && !Array.isArray(value);
  };
  constructor(properties, options, validations) {
    super(options, validations);
    this.#properties = properties;
  }
  /**
   * Returns a clone copy of the object properties. The object groups
   * are not copied to keep the implementations simple and easy to
   * reason about.
   */
  getProperties() {
    return Object.keys(this.#properties).reduce((result, key) => {
      result[key] = this.#properties[key].clone();
      return result;
    }, {});
  }
  /**
   * Copy unknown properties to the final output.
   */
  allowUnknownProperties() {
    this.#allowUnknownProperties = true;
    return this;
  }
  /**
   * Merge a union to the object groups. The union can be a "vine.union"
   * with objects, or a "vine.object.union" with properties.
   */
  merge(group2) {
    this.#groups.push(group2);
    return this;
  }
  /**
   * Clone object
   */
  clone() {
    const cloned = new _VineObject(
      this.getProperties(),
      this.cloneOptions(),
      this.cloneValidations()
    );
    this.#groups.forEach((group2) => cloned.merge(group2));
    if (this.#allowUnknownProperties) {
      cloned.allowUnknownProperties();
    }
    return cloned;
  }
  /**
   * Applies camelcase transform
   */
  toCamelCase() {
    return new VineCamelCaseObject(this);
  }
  /**
   * Compiles the schema type to a compiler node
   */
  [PARSE](propertyName, refs, options) {
    return {
      type: "object",
      fieldName: propertyName,
      propertyName: options.toCamelCase ? camelcase5(propertyName) : propertyName,
      bail: this.options.bail,
      allowNull: this.options.allowNull,
      isOptional: this.options.isOptional,
      parseFnId: this.options.parse ? refs.trackParser(this.options.parse) : void 0,
      allowUnknownProperties: this.#allowUnknownProperties,
      validations: this.compileValidations(refs),
      properties: Object.keys(this.#properties).map((property) => {
        return this.#properties[property][PARSE](property, refs, options);
      }),
      groups: this.#groups.map((group2) => {
        return group2[PARSE](refs, options);
      })
    };
  }
};

// src/schema/record/main.ts
import camelcase6 from "camelcase";

// src/schema/record/rules.ts
var minLengthRule2 = createRule((value, options, field) => {
  if (!field.isValid) {
    return;
  }
  if (Object.keys(value).length < options.min) {
    field.report(messages["record.minLength"], "record.minLength", field, options);
  }
});
var maxLengthRule2 = createRule((value, options, field) => {
  if (!field.isValid) {
    return;
  }
  if (Object.keys(value).length > options.max) {
    field.report(messages["record.maxLength"], "record.maxLength", field, options);
  }
});
var fixedLengthRule2 = createRule((value, options, field) => {
  if (!field.isValid) {
    return;
  }
  if (Object.keys(value).length !== options.size) {
    field.report(messages["record.fixedLength"], "record.fixedLength", field, options);
  }
});
var validateKeysRule = createRule(
  (value, callback, field) => {
    if (!field.isValid) {
      return;
    }
    callback(Object.keys(value), field);
  }
);

// src/schema/record/main.ts
var VineRecord = class _VineRecord extends BaseType {
  /**
   * Default collection of record rules
   */
  static rules = {
    maxLength: maxLengthRule2,
    minLength: minLengthRule2,
    fixedLength: fixedLengthRule2,
    validateKeys: validateKeysRule
  };
  #schema;
  /**
   * The property must be implemented for "unionOfTypes"
   */
  [UNIQUE_NAME] = "vine.object";
  /**
   * Checks if the value is of object type. The method must be
   * implemented for "unionOfTypes"
   */
  [IS_OF_TYPE] = (value) => {
    return value !== null && typeof value === "object" && !Array.isArray(value);
  };
  constructor(schema, options, validations) {
    super(options, validations);
    this.#schema = schema;
  }
  /**
   * Enforce a minimum length on an object field
   */
  minLength(expectedLength) {
    return this.use(minLengthRule2({ min: expectedLength }));
  }
  /**
   * Enforce a maximum length on an object field
   */
  maxLength(expectedLength) {
    return this.use(maxLengthRule2({ max: expectedLength }));
  }
  /**
   * Enforce a fixed length on an object field
   */
  fixedLength(expectedLength) {
    return this.use(fixedLengthRule2({ size: expectedLength }));
  }
  /**
   * Register a callback to validate the object keys
   */
  validateKeys(...args) {
    return this.use(validateKeysRule(...args));
  }
  /**
   * Clones the VineRecord schema type. The applied options
   * and validations are copied to the new instance
   */
  clone() {
    return new _VineRecord(
      this.#schema.clone(),
      this.cloneOptions(),
      this.cloneValidations()
    );
  }
  /**
   * Compiles to record data type
   */
  [PARSE](propertyName, refs, options) {
    return {
      type: "record",
      fieldName: propertyName,
      propertyName: options.toCamelCase ? camelcase6(propertyName) : propertyName,
      bail: this.options.bail,
      allowNull: this.options.allowNull,
      isOptional: this.options.isOptional,
      each: this.#schema[PARSE]("*", refs, options),
      parseFnId: this.options.parse ? refs.trackParser(this.options.parse) : void 0,
      validations: this.compileValidations(refs)
    };
  }
};

// src/schema/string/rules.ts
import camelcase7 from "camelcase";
import normalizeUrl from "normalize-url";
import escape from "validator/lib/escape.js";
import normalizeEmail from "validator/lib/normalizeEmail.js";
var stringRule = createRule((value, _, field) => {
  if (typeof value !== "string") {
    field.report(messages.string, "string", field);
  }
});
var emailRule = createRule((value, options, field) => {
  if (!field.isValid) {
    return;
  }
  if (!helpers.isEmail(value, options)) {
    field.report(messages.email, "email", field);
  }
});
var mobileRule = createRule((value, options, field) => {
  if (!field.isValid) {
    return;
  }
  const normalizedOptions = options && typeof options === "function" ? options(field) : options;
  const locales = normalizedOptions?.locale || "any";
  if (!helpers.isMobilePhone(value, locales, normalizedOptions)) {
    field.report(messages.mobile, "mobile", field);
  }
});
var ipAddressRule = createRule((value, options, field) => {
  if (!field.isValid) {
    return;
  }
  if (!helpers.isIP(value, options?.version)) {
    field.report(messages.ipAddress, "ipAddress", field);
  }
});
var regexRule = createRule((value, expression, field) => {
  if (!field.isValid) {
    return;
  }
  if (!expression.test(value)) {
    field.report(messages.regex, "regex", field);
  }
});
var hexCodeRule = createRule((value, _, field) => {
  if (!field.isValid) {
    return;
  }
  if (!helpers.isHexColor(value)) {
    field.report(messages.hexCode, "hexCode", field);
  }
});
var urlRule = createRule((value, options, field) => {
  if (!field.isValid) {
    return;
  }
  if (!helpers.isURL(value, options)) {
    field.report(messages.url, "url", field);
  }
});
var activeUrlRule = createRule(async (value, _, field) => {
  if (!field.isValid) {
    return;
  }
  if (!await helpers.isActiveURL(value)) {
    field.report(messages.activeUrl, "activeUrl", field);
  }
});
var alphaRule = createRule((value, options, field) => {
  if (!field.isValid) {
    return;
  }
  let characterSet = "a-zA-Z";
  if (options) {
    if (options.allowSpaces) {
      characterSet += "\\s";
    }
    if (options.allowDashes) {
      characterSet += "-";
    }
    if (options.allowUnderscores) {
      characterSet += "_";
    }
  }
  const expression = new RegExp(`^[${characterSet}]+$`);
  if (!expression.test(value)) {
    field.report(messages.alpha, "alpha", field);
  }
});
var alphaNumericRule = createRule(
  (value, options, field) => {
    if (!field.isValid) {
      return;
    }
    let characterSet = "a-zA-Z0-9";
    if (options) {
      if (options.allowSpaces) {
        characterSet += "\\s";
      }
      if (options.allowDashes) {
        characterSet += "-";
      }
      if (options.allowUnderscores) {
        characterSet += "_";
      }
    }
    const expression = new RegExp(`^[${characterSet}]+$`);
    if (!expression.test(value)) {
      field.report(messages.alphaNumeric, "alphaNumeric", field);
    }
  }
);
var minLengthRule3 = createRule((value, options, field) => {
  if (!field.isValid) {
    return;
  }
  if (value.length < options.min) {
    field.report(messages.minLength, "minLength", field, options);
  }
});
var maxLengthRule3 = createRule((value, options, field) => {
  if (!field.isValid) {
    return;
  }
  if (value.length > options.max) {
    field.report(messages.maxLength, "maxLength", field, options);
  }
});
var fixedLengthRule3 = createRule((value, options, field) => {
  if (!field.isValid) {
    return;
  }
  if (value.length !== options.size) {
    field.report(messages.fixedLength, "fixedLength", field, options);
  }
});
var endsWithRule = createRule((value, options, field) => {
  if (!field.isValid) {
    return;
  }
  if (!value.endsWith(options.substring)) {
    field.report(messages.endsWith, "endsWith", field, options);
  }
});
var startsWithRule = createRule((value, options, field) => {
  if (!field.isValid) {
    return;
  }
  if (!value.startsWith(options.substring)) {
    field.report(messages.startsWith, "startsWith", field, options);
  }
});
var sameAsRule = createRule((value, options, field) => {
  if (!field.isValid) {
    return;
  }
  const input = helpers.getNestedValue(options.otherField, field);
  if (input !== value) {
    field.report(messages.sameAs, "sameAs", field, options);
    return;
  }
});
var notSameAsRule = createRule((value, options, field) => {
  if (!field.isValid) {
    return;
  }
  const input = helpers.getNestedValue(options.otherField, field);
  if (input === value) {
    field.report(messages.notSameAs, "notSameAs", field, options);
    return;
  }
});
var confirmedRule = createRule(
  (value, options, field) => {
    if (!field.isValid) {
      return;
    }
    const otherField = options?.confirmationField || `${field.name}_confirmation`;
    const input = field.parent[otherField];
    if (input !== value) {
      field.report(messages.confirmed, "confirmed", field, { otherField });
      return;
    }
  }
);
var trimRule = createRule((value, _, field) => {
  if (!field.isValid) {
    return;
  }
  field.mutate(value.trim(), field);
});
var normalizeEmailRule = createRule(
  (value, options, field) => {
    if (!field.isValid) {
      return;
    }
    field.mutate(normalizeEmail.default(value, options), field);
  }
);
var toUpperCaseRule = createRule(
  (value, locales, field) => {
    if (!field.isValid) {
      return;
    }
    field.mutate(value.toLocaleUpperCase(locales), field);
  }
);
var toLowerCaseRule = createRule(
  (value, locales, field) => {
    if (!field.isValid) {
      return;
    }
    field.mutate(value.toLocaleLowerCase(locales), field);
  }
);
var toCamelCaseRule = createRule((value, _, field) => {
  if (!field.isValid) {
    return;
  }
  field.mutate(camelcase7(value), field);
});
var escapeRule = createRule((value, _, field) => {
  if (!field.isValid) {
    return;
  }
  field.mutate(escape.default(value), field);
});
var normalizeUrlRule = createRule(
  (value, options, field) => {
    if (!field.isValid) {
      return;
    }
    field.mutate(normalizeUrl(value, options), field);
  }
);
var inRule = createRule(
  (value, options, field) => {
    if (!field.isValid) {
      return;
    }
    const choices = typeof options.choices === "function" ? options.choices(field) : options.choices;
    if (!choices.includes(value)) {
      field.report(messages.in, "in", field, options);
      return;
    }
  }
);
var notInRule = createRule(
  (value, options, field) => {
    if (!field.isValid) {
      return;
    }
    const list = typeof options.list === "function" ? options.list(field) : options.list;
    if (list.includes(value)) {
      field.report(messages.notIn, "notIn", field, options);
      return;
    }
  }
);
var creditCardRule = createRule((value, options, field) => {
  if (!field.isValid) {
    return;
  }
  const providers = options ? typeof options === "function" ? options(field)?.provider || [] : options.provider : [];
  if (!providers.length) {
    if (!helpers.isCreditCard(value)) {
      field.report(messages.creditCard, "creditCard", field, {
        providersList: "credit"
      });
    }
  } else {
    const matchesAnyProvider = providers.find(
      (provider) => helpers.isCreditCard(value, { provider })
    );
    if (!matchesAnyProvider) {
      field.report(messages.creditCard, "creditCard", field, {
        providers,
        providersList: providers.join("/")
      });
    }
  }
});
var passportRule = createRule((value, options, field) => {
  if (!field.isValid) {
    return;
  }
  const countryCodes = typeof options === "function" ? options(field).countryCode : options.countryCode;
  const matchesAnyCountryCode = countryCodes.find(
    (countryCode) => helpers.isPassportNumber(value, countryCode)
  );
  if (!matchesAnyCountryCode) {
    field.report(messages.passport, "passport", field, { countryCodes });
  }
});
var postalCodeRule = createRule((value, options, field) => {
  if (!field.isValid) {
    return;
  }
  const countryCodes = options ? typeof options === "function" ? options(field)?.countryCode || [] : options.countryCode : [];
  if (!countryCodes.length) {
    if (!helpers.isPostalCode(value, "any")) {
      field.report(messages.postalCode, "postalCode", field);
    }
  } else {
    const matchesAnyCountryCode = countryCodes.find(
      (countryCode) => helpers.isPostalCode(value, countryCode)
    );
    if (!matchesAnyCountryCode) {
      field.report(messages.postalCode, "postalCode", field, { countryCodes });
    }
  }
});
var uuidRule = createRule(
  (value, options, field) => {
    if (!field.isValid) {
      return;
    }
    if (!options || !options.version) {
      if (!helpers.isUUID(value)) {
        field.report(messages.uuid, "uuid", field);
      }
    } else {
      const matchesAnyVersion = options.version.find(
        (version) => helpers.isUUID(value, version)
      );
      if (!matchesAnyVersion) {
        field.report(messages.uuid, "uuid", field, options);
      }
    }
  }
);
var asciiRule = createRule((value, _, field) => {
  if (!field.isValid) {
    return;
  }
  if (!helpers.isAscii(value)) {
    field.report(messages.ascii, "ascii", field);
  }
});
var ibanRule = createRule((value, _, field) => {
  if (!field.isValid) {
    return;
  }
  if (!helpers.isIBAN(value)) {
    field.report(messages.iban, "iban", field);
  }
});
var jwtRule = createRule((value, _, field) => {
  if (!field.isValid) {
    return;
  }
  if (!helpers.isJWT(value)) {
    field.report(messages.jwt, "jwt", field);
  }
});
var coordinatesRule = createRule((value, _, field) => {
  if (!field.isValid) {
    return;
  }
  if (!helpers.isLatLong(value)) {
    field.report(messages.coordinates, "coordinates", field);
  }
});

// src/schema/string/main.ts
var VineString = class _VineString extends BaseLiteralType {
  static rules = {
    in: inRule,
    jwt: jwtRule,
    url: urlRule,
    iban: ibanRule,
    uuid: uuidRule,
    trim: trimRule,
    email: emailRule,
    alpha: alphaRule,
    ascii: asciiRule,
    notIn: notInRule,
    regex: regexRule,
    escape: escapeRule,
    sameAs: sameAsRule,
    mobile: mobileRule,
    string: stringRule,
    hexCode: hexCodeRule,
    passport: passportRule,
    endsWith: endsWithRule,
    confirmed: confirmedRule,
    activeUrl: activeUrlRule,
    minLength: minLengthRule3,
    notSameAs: notSameAsRule,
    maxLength: maxLengthRule3,
    ipAddress: ipAddressRule,
    creditCard: creditCardRule,
    postalCode: postalCodeRule,
    startsWith: startsWithRule,
    toUpperCase: toUpperCaseRule,
    toLowerCase: toLowerCaseRule,
    toCamelCase: toCamelCaseRule,
    fixedLength: fixedLengthRule3,
    coordinates: coordinatesRule,
    normalizeUrl: normalizeUrlRule,
    alphaNumeric: alphaNumericRule,
    normalizeEmail: normalizeEmailRule
  };
  /**
   * The property must be implemented for "unionOfTypes"
   */
  [UNIQUE_NAME] = "vine.string";
  /**
   * Checks if the value is of string type. The method must be
   * implemented for "unionOfTypes"
   */
  [IS_OF_TYPE] = (value) => {
    return typeof value === "string";
  };
  constructor(options, validations) {
    super(options, validations || [stringRule()]);
  }
  /**
   * Validates the value to be a valid URL
   */
  url(...args) {
    return this.use(urlRule(...args));
  }
  /**
   * Validates the value to be an active URL
   */
  activeUrl() {
    return this.use(activeUrlRule());
  }
  /**
   * Validates the value to be a valid email address
   */
  email(...args) {
    return this.use(emailRule(...args));
  }
  /**
   * Validates the value to be a valid mobile number
   */
  mobile(...args) {
    return this.use(mobileRule(...args));
  }
  /**
   * Validates the value to be a valid IP address.
   */
  ipAddress(version) {
    return this.use(ipAddressRule(version ? { version } : void 0));
  }
  /**
   * Validates the value to be a valid hex color code
   */
  hexCode() {
    return this.use(hexCodeRule());
  }
  /**
   * Validates the value to be an active URL
   */
  regex(expression) {
    return this.use(regexRule(expression));
  }
  /**
   * Validates the value to contain only letters
   */
  alpha(options) {
    return this.use(alphaRule(options));
  }
  /**
   * Validates the value to contain only letters and
   * numbers
   */
  alphaNumeric(options) {
    return this.use(alphaNumericRule(options));
  }
  /**
   * Enforce a minimum length on a string field
   */
  minLength(expectedLength) {
    return this.use(minLengthRule3({ min: expectedLength }));
  }
  /**
   * Enforce a maximum length on a string field
   */
  maxLength(expectedLength) {
    return this.use(maxLengthRule3({ max: expectedLength }));
  }
  /**
   * Enforce a fixed length on a string field
   */
  fixedLength(expectedLength) {
    return this.use(fixedLengthRule3({ size: expectedLength }));
  }
  /**
   * Ensure the field under validation is confirmed by
   * having another field with the same name.
   */
  confirmed(options) {
    return this.use(confirmedRule(options));
  }
  /**
   * Trims whitespaces around the string value
   */
  trim() {
    return this.use(trimRule());
  }
  /**
   * Normalizes the email address
   */
  normalizeEmail(options) {
    return this.use(normalizeEmailRule(options));
  }
  /**
   * Converts the field value to UPPERCASE.
   */
  toUpperCase() {
    return this.use(toUpperCaseRule());
  }
  /**
   * Converts the field value to lowercase.
   */
  toLowerCase() {
    return this.use(toLowerCaseRule());
  }
  /**
   * Converts the field value to camelCase.
   */
  toCamelCase() {
    return this.use(toCamelCaseRule());
  }
  /**
   * Escape string for HTML entities
   */
  escape() {
    return this.use(escapeRule());
  }
  /**
   * Normalize a URL
   */
  normalizeUrl(...args) {
    return this.use(normalizeUrlRule(...args));
  }
  /**
   * Ensure the value starts with the pre-defined substring
   */
  startsWith(substring) {
    return this.use(startsWithRule({ substring }));
  }
  /**
   * Ensure the value ends with the pre-defined substring
   */
  endsWith(substring) {
    return this.use(endsWithRule({ substring }));
  }
  /**
   * Ensure the value ends with the pre-defined substring
   */
  sameAs(otherField) {
    return this.use(sameAsRule({ otherField }));
  }
  /**
   * Ensure the value ends with the pre-defined substring
   */
  notSameAs(otherField) {
    return this.use(notSameAsRule({ otherField }));
  }
  /**
   * Ensure the field's value under validation is a subset of the pre-defined list.
   */
  in(choices) {
    return this.use(inRule({ choices }));
  }
  /**
   * Ensure the field's value under validation is not inside the pre-defined list.
   */
  notIn(list) {
    return this.use(notInRule({ list }));
  }
  /**
   * Validates the value to be a valid credit card number
   */
  creditCard(...args) {
    return this.use(creditCardRule(...args));
  }
  /**
   * Validates the value to be a valid passport number
   */
  passport(...args) {
    return this.use(passportRule(...args));
  }
  /**
   * Validates the value to be a valid postal code
   */
  postalCode(...args) {
    return this.use(postalCodeRule(...args));
  }
  /**
   * Validates the value to be a valid UUID
   */
  uuid(...args) {
    return this.use(uuidRule(...args));
  }
  /**
   * Validates the value contains ASCII characters only
   */
  ascii() {
    return this.use(asciiRule());
  }
  /**
   * Validates the value to be a valid IBAN number
   */
  iban() {
    return this.use(ibanRule());
  }
  /**
   * Validates the value to be a valid JWT token
   */
  jwt() {
    return this.use(jwtRule());
  }
  /**
   * Ensure the value is a string with latitude and longitude coordinates
   */
  coordinates() {
    return this.use(coordinatesRule());
  }
  /**
   * Clones the VineString schema type. The applied options
   * and validations are copied to the new instance
   */
  clone() {
    return new _VineString(this.cloneOptions(), this.cloneValidations());
  }
};

// src/schema/number/rules.ts
var numberRule = createRule((value, options, field) => {
  const valueAsNumber = options.strict ? value : helpers.asNumber(value);
  if (typeof valueAsNumber !== "number" || Number.isNaN(valueAsNumber) || valueAsNumber === Number.POSITIVE_INFINITY || valueAsNumber === Number.NEGATIVE_INFINITY) {
    field.report(messages.number, "number", field);
    return;
  }
  field.mutate(valueAsNumber, field);
});
var minRule = createRule((value, options, field) => {
  if (!field.isValid) {
    return;
  }
  if (value < options.min) {
    field.report(messages.min, "min", field, options);
  }
});
var maxRule = createRule((value, options, field) => {
  if (!field.isValid) {
    return;
  }
  if (value > options.max) {
    field.report(messages.max, "max", field, options);
  }
});
var rangeRule = createRule((value, options, field) => {
  if (!field.isValid) {
    return;
  }
  if (value < options.min || value > options.max) {
    field.report(messages.range, "range", field, options);
  }
});
var positiveRule = createRule((value, _, field) => {
  if (!field.isValid) {
    return;
  }
  if (value < 0) {
    field.report(messages.positive, "positive", field);
  }
});
var negativeRule = createRule((value, _, field) => {
  if (!field.isValid) {
    return;
  }
  if (value >= 0) {
    field.report(messages.negative, "negative", field);
  }
});
var decimalRule = createRule((value, options, field) => {
  if (!field.isValid) {
    return;
  }
  if (!helpers.isDecimal(String(value), {
    force_decimal: options.range[0] !== 0,
    decimal_digits: options.range.join(",")
  })) {
    field.report(messages.decimal, "decimal", field, { digits: options.range.join("-") });
  }
});
var withoutDecimalsRule = createRule((value, _, field) => {
  if (!field.isValid) {
    return;
  }
  if (!Number.isInteger(value)) {
    field.report(messages.withoutDecimals, "withoutDecimals", field);
  }
});

// src/schema/number/main.ts
var VineNumber = class _VineNumber extends BaseLiteralType {
  /**
   * Default collection of number rules
   */
  static rules = {
    max: maxRule,
    min: minRule,
    range: rangeRule,
    number: numberRule,
    decimal: decimalRule,
    negative: negativeRule,
    positive: positiveRule,
    withoutDecimals: withoutDecimalsRule
  };
  /**
   * The property must be implemented for "unionOfTypes"
   */
  [UNIQUE_NAME] = "vine.number";
  /**
   * Checks if the value is of number type. The method must be
   * implemented for "unionOfTypes"
   */
  [IS_OF_TYPE] = (value) => {
    const valueAsNumber = helpers.asNumber(value);
    return !Number.isNaN(valueAsNumber);
  };
  constructor(options, validations) {
    super(options, validations || [numberRule(options || {})]);
  }
  /**
   * Enforce a minimum value for the number input
   */
  min(value) {
    return this.use(minRule({ min: value }));
  }
  /**
   * Enforce a maximum value for the number input
   */
  max(value) {
    return this.use(maxRule({ max: value }));
  }
  /**
   * Enforce value to be within the range of minimum and maximum output.
   */
  range(value) {
    return this.use(rangeRule({ min: value[0], max: value[1] }));
  }
  /**
   * Enforce the value be a positive number
   */
  positive() {
    return this.use(positiveRule());
  }
  /**
   * Enforce the value be a negative number
   */
  negative() {
    return this.use(negativeRule());
  }
  /**
   * Enforce the value to have fixed or range
   * of decimal places
   */
  decimal(range) {
    return this.use(decimalRule({ range: Array.isArray(range) ? range : [range] }));
  }
  /**
   * Enforce the value to be an integer (aka without decimals)
   */
  withoutDecimals() {
    return this.use(withoutDecimalsRule());
  }
  /**
   * Clones the VineNumber schema type. The applied options
   * and validations are copied to the new instance
   */
  clone() {
    return new _VineNumber(this.cloneOptions(), this.cloneValidations());
  }
};

// src/schema/boolean/rules.ts
var booleanRule = createRule((value, options, field) => {
  const valueAsBoolean = options.strict === true ? value : helpers.asBoolean(value);
  if (typeof valueAsBoolean !== "boolean") {
    field.report(messages.boolean, "boolean", field);
    return;
  }
  field.mutate(valueAsBoolean, field);
});

// src/schema/boolean/main.ts
var VineBoolean = class _VineBoolean extends BaseLiteralType {
  /**
   * Default collection of boolean rules
   */
  static rules = {
    boolean: booleanRule
  };
  /**
   * The property must be implemented for "unionOfTypes"
   */
  [UNIQUE_NAME] = "vine.boolean";
  /**
   * Checks if the value is of boolean type. The method must be
   * implemented for "unionOfTypes"
   */
  [IS_OF_TYPE] = (value) => {
    const valueAsBoolean = this.options.strict === true ? value : helpers.asBoolean(value);
    return typeof valueAsBoolean === "boolean";
  };
  constructor(options, validations) {
    super(options, validations || [booleanRule(options || {})]);
  }
  /**
   * Clones the VineBoolean schema type. The applied options
   * and validations are copied to the new instance
   */
  clone() {
    return new _VineBoolean(this.cloneOptions(), this.cloneValidations());
  }
};

// src/schema/literal/rules.ts
var equalsRule = createRule((value, options, field) => {
  let input = value;
  if (typeof options.expectedValue === "boolean") {
    input = helpers.asBoolean(value);
  } else if (typeof options.expectedValue === "number") {
    input = helpers.asNumber(value);
  }
  if (input !== options.expectedValue) {
    field.report(messages.literal, "literal", field, options);
    return;
  }
  field.mutate(input, field);
});

// src/schema/literal/main.ts
var VineLiteral = class _VineLiteral extends BaseLiteralType {
  /**
   * Default collection of literal rules
   */
  static rules = {
    equals: equalsRule
  };
  #value;
  constructor(value, options, validations) {
    super(options, validations || [equalsRule({ expectedValue: value })]);
    this.#value = value;
  }
  /**
   * Clones the VineLiteral schema type. The applied options
   * and validations are copied to the new instance
   */
  clone() {
    return new _VineLiteral(this.#value, this.cloneOptions(), this.cloneValidations());
  }
};

// src/schema/accepted/rules.ts
var ACCEPTED_VALUES = ["on", "1", "yes", "true", true, 1];
var acceptedRule = createRule((value, _, field) => {
  if (!ACCEPTED_VALUES.includes(value)) {
    field.report(messages.accepted, "accepted", field);
  }
});

// src/schema/accepted/main.ts
var VineAccepted = class _VineAccepted extends BaseLiteralType {
  /**
   * Default collection of accepted rules
   */
  static rules = {
    accepted: acceptedRule
  };
  constructor(options, validations) {
    super(options, validations || [acceptedRule()]);
  }
  /**
   * Clones the VineAccepted schema type. The applied options
   * and validations are copied to the new instance
   */
  clone() {
    return new _VineAccepted(this.cloneOptions(), this.cloneValidations());
  }
};

// src/schema/object/group.ts
var ObjectGroup = class _ObjectGroup {
  #conditionals;
  #otherwiseCallback = (_, field) => {
    field.report(messages.unionGroup, "unionGroup", field);
  };
  constructor(conditionals) {
    this.#conditionals = conditionals;
  }
  /**
   * Clones the ObjectGroup schema type.
   */
  clone() {
    const cloned = new _ObjectGroup(this.#conditionals);
    cloned.otherwise(this.#otherwiseCallback);
    return cloned;
  }
  /**
   * Define a fallback method to invoke when all of the group conditions
   * fail. You may use this method to report an error.
   */
  otherwise(callback) {
    this.#otherwiseCallback = callback;
    return this;
  }
  /**
   * Compiles the group
   */
  [PARSE](refs, options) {
    return {
      type: "group",
      elseConditionalFnRefId: refs.trackConditional(this.#otherwiseCallback),
      conditions: this.#conditionals.map((conditional) => conditional[PARSE](refs, options))
    };
  }
};

// src/schema/object/conditional.ts
var GroupConditional = class {
  /**
   * Properties to merge when conditonal is true
   */
  #properties;
  /**
   * Conditional to evaluate
   */
  #conditional;
  constructor(conditional, properties) {
    this.#properties = properties;
    this.#conditional = conditional;
  }
  /**
   * Compiles to a union conditional
   */
  [PARSE](refs, options) {
    return {
      schema: {
        type: "sub_object",
        properties: Object.keys(this.#properties).map((property) => {
          return this.#properties[property][PARSE](property, refs, options);
        }),
        groups: []
        // Compiler allows nested groups, but we are not implementing it
      },
      conditionalFnRefId: refs.trackConditional(this.#conditional)
    };
  }
};

// src/schema/object/group_builder.ts
function group(conditionals) {
  return new ObjectGroup(conditionals);
}
group.if = function groupIf(conditon, properties) {
  return new GroupConditional(conditon, properties);
};
group.else = function groupElse(properties) {
  return new GroupConditional(() => true, properties);
};

// src/schema/enum/native_enum.ts
var VineNativeEnum = class _VineNativeEnum extends BaseLiteralType {
  /**
   * Default collection of enum rules
   */
  static rules = {
    enum: enumRule
  };
  #values;
  constructor(values, options, validations) {
    super(options, validations || [enumRule({ choices: Object.values(values) })]);
    this.#values = values;
  }
  /**
   * Clones the VineNativeEnum schema type. The applied options
   * and validations are copied to the new instance
   */
  clone() {
    return new _VineNativeEnum(this.#values, this.cloneOptions(), this.cloneValidations());
  }
};

// src/schema/union_of_types/main.ts
import camelcase8 from "camelcase";
var VineUnionOfTypes = class _VineUnionOfTypes {
  #schemas;
  #otherwiseCallback = (_, field) => {
    field.report(messages.unionOfTypes, "unionOfTypes", field);
  };
  constructor(schemas) {
    this.#schemas = schemas;
  }
  /**
   * Define a fallback method to invoke when all of the union conditions
   * fail. You may use this method to report an error.
   */
  otherwise(callback) {
    this.#otherwiseCallback = callback;
    return this;
  }
  /**
   * Clones the VineUnionOfTypes schema type.
   */
  clone() {
    const cloned = new _VineUnionOfTypes(this.#schemas);
    cloned.otherwise(this.#otherwiseCallback);
    return cloned;
  }
  /**
   * Compiles to a union
   */
  [PARSE](propertyName, refs, options) {
    return {
      type: "union",
      fieldName: propertyName,
      propertyName: options.toCamelCase ? camelcase8(propertyName) : propertyName,
      elseConditionalFnRefId: refs.trackConditional(this.#otherwiseCallback),
      conditions: this.#schemas.map((schema) => {
        return {
          conditionalFnRefId: refs.trackConditional((value, field) => {
            return schema[IS_OF_TYPE](value, field);
          }),
          schema: schema[PARSE](propertyName, refs, options)
        };
      })
    };
  }
};

// src/schema/date/main.ts
import dayjs2 from "dayjs";

// src/schema/date/rules.ts
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter.js";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore.js";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
var DEFAULT_DATE_FORMATS = ["YYYY-MM-DD", "YYYY-MM-DD HH:mm:ss"];
dayjs.extend(customParseFormat);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
var dateRule = createRule((value, options, field) => {
  if (typeof value !== "string" && typeof value !== "number") {
    field.report(messages.date, "date", field);
    return;
  }
  let isTimestampAllowed = false;
  let formats = options.formats || DEFAULT_DATE_FORMATS;
  if (Array.isArray(formats)) {
    formats = [...formats];
    isTimestampAllowed = formats.includes("x");
  } else if (typeof formats !== "string") {
    formats = { ...formats };
    isTimestampAllowed = formats.format === "x";
  }
  const valueAsNumber = isTimestampAllowed ? helpers.asNumber(value) : value;
  const dateTime = isTimestampAllowed && !Number.isNaN(valueAsNumber) ? dayjs(valueAsNumber) : dayjs(value, formats, true);
  if (!dateTime.isValid()) {
    field.report(messages.date, "date", field);
    return;
  }
  field.meta.$value = dateTime;
  field.meta.$formats = formats;
  field.mutate(dateTime.toDate(), field);
});
var equalsRule2 = createRule((_, options, field) => {
  if (!field.meta.$value) {
    return;
  }
  const compare = options.compare || "day";
  const format = options.format || DEFAULT_DATE_FORMATS;
  const dateTime = field.meta.$value;
  const expectedValue = typeof options.expectedValue === "function" ? options.expectedValue(field) : options.expectedValue;
  const expectedDateTime = dayjs(expectedValue, format, true);
  if (!expectedDateTime.isValid()) {
    throw new Error(`Invalid datetime value "${expectedValue}" value provided to the equals rule`);
  }
  if (!dateTime.isSame(expectedDateTime, compare)) {
    field.report(messages["date.equals"], "date.equals", field, {
      expectedValue,
      compare
    });
  }
});
var afterRule = createRule((_, options, field) => {
  if (!field.meta.$value) {
    return;
  }
  const compare = options.compare || "day";
  const format = options.format || DEFAULT_DATE_FORMATS;
  const dateTime = field.meta.$value;
  const expectedValue = typeof options.expectedValue === "function" ? options.expectedValue(field) : options.expectedValue;
  const expectedDateTime = expectedValue === "today" ? dayjs() : expectedValue === "tomorrow" ? dayjs().add(1, "day") : dayjs(expectedValue, format, true);
  if (!expectedDateTime.isValid()) {
    throw new Error(`Invalid datetime value "${expectedValue}" value provided to the after rule`);
  }
  if (!dateTime.isAfter(expectedDateTime, compare)) {
    field.report(messages["date.after"], "date.after", field, {
      expectedValue,
      compare
    });
  }
});
var afterOrEqualRule = createRule((_, options, field) => {
  if (!field.meta.$value) {
    return;
  }
  const compare = options.compare || "day";
  const format = options.format || DEFAULT_DATE_FORMATS;
  const dateTime = field.meta.$value;
  const expectedValue = typeof options.expectedValue === "function" ? options.expectedValue(field) : options.expectedValue;
  const expectedDateTime = expectedValue === "today" ? dayjs() : expectedValue === "tomorrow" ? dayjs().add(1, "day") : dayjs(expectedValue, format, true);
  if (!expectedDateTime.isValid()) {
    throw new Error(
      `Invalid datetime value "${expectedValue}" value provided to the afterOrEqual rule`
    );
  }
  if (!dateTime.isSameOrAfter(expectedDateTime, compare)) {
    field.report(messages["date.afterOrEqual"], "date.afterOrEqual", field, {
      expectedValue,
      compare
    });
  }
});
var beforeRule = createRule((_, options, field) => {
  if (!field.meta.$value) {
    return;
  }
  const compare = options.compare || "day";
  const format = options.format || DEFAULT_DATE_FORMATS;
  const dateTime = field.meta.$value;
  const expectedValue = typeof options.expectedValue === "function" ? options.expectedValue(field) : options.expectedValue;
  const expectedDateTime = expectedValue === "today" ? dayjs() : expectedValue === "yesterday" ? dayjs().subtract(1, "day") : dayjs(expectedValue, format, true);
  if (!expectedDateTime.isValid()) {
    throw new Error(`Invalid datetime value "${expectedValue}" value provided to the before rule`);
  }
  if (!dateTime.isBefore(expectedDateTime, compare)) {
    field.report(messages["date.before"], "date.before", field, {
      expectedValue,
      compare
    });
  }
});
var beforeOrEqualRule = createRule((_, options, field) => {
  if (!field.meta.$value) {
    return;
  }
  const compare = options.compare || "day";
  const format = options.format || DEFAULT_DATE_FORMATS;
  const dateTime = field.meta.$value;
  const expectedValue = typeof options.expectedValue === "function" ? options.expectedValue(field) : options.expectedValue;
  const expectedDateTime = expectedValue === "today" ? dayjs() : expectedValue === "yesterday" ? dayjs().subtract(1, "day") : dayjs(expectedValue, format, true);
  if (!expectedDateTime.isValid()) {
    throw new Error(
      `Invalid datetime value "${expectedValue}" value provided to the beforeOrEqual rule`
    );
  }
  if (!dateTime.isSameOrBefore(expectedDateTime, compare)) {
    field.report(messages["date.beforeOrEqual"], "date.beforeOrEqual", field, {
      expectedValue,
      compare
    });
  }
});
var sameAsRule2 = createRule((_, options, field) => {
  if (!field.meta.$value) {
    return;
  }
  const compare = options.compare || "day";
  const dateTime = field.meta.$value;
  const format = options.format || field.meta.$formats;
  const expectedValue = helpers.getNestedValue(options.otherField, field);
  const expectedDateTime = dayjs(expectedValue, format, true);
  if (!expectedDateTime.isValid()) {
    return;
  }
  if (!dateTime.isSame(expectedDateTime, compare)) {
    field.report(messages["date.sameAs"], "date.sameAs", field, {
      otherField: options.otherField,
      expectedValue,
      compare
    });
  }
});
var notSameAsRule2 = createRule((_, options, field) => {
  if (!field.meta.$value) {
    return;
  }
  const compare = options.compare || "day";
  const dateTime = field.meta.$value;
  const format = options.format || field.meta.$formats;
  const expectedValue = helpers.getNestedValue(options.otherField, field);
  const expectedDateTime = dayjs(expectedValue, format, true);
  if (!expectedDateTime.isValid()) {
    return;
  }
  if (dateTime.isSame(expectedDateTime, compare)) {
    field.report(messages["date.notSameAs"], "date.notSameAs", field, {
      otherField: options.otherField,
      expectedValue,
      compare
    });
  }
});
var afterFieldRule = createRule((_, options, field) => {
  if (!field.meta.$value) {
    return;
  }
  const compare = options.compare || "day";
  const dateTime = field.meta.$value;
  const format = options.format || field.meta.$formats;
  const expectedValue = helpers.getNestedValue(options.otherField, field);
  const expectedDateTime = dayjs(expectedValue, format, true);
  if (!expectedDateTime.isValid()) {
    return;
  }
  if (!dateTime.isAfter(expectedDateTime, compare)) {
    field.report(messages["date.afterField"], "date.afterField", field, {
      otherField: options.otherField,
      expectedValue,
      compare
    });
  }
});
var afterOrSameAsRule = createRule((_, options, field) => {
  if (!field.meta.$value) {
    return;
  }
  const compare = options.compare || "day";
  const dateTime = field.meta.$value;
  const format = options.format || field.meta.$formats;
  const expectedValue = helpers.getNestedValue(options.otherField, field);
  const expectedDateTime = dayjs(expectedValue, format, true);
  if (!expectedDateTime.isValid()) {
    return;
  }
  if (!dateTime.isSameOrAfter(expectedDateTime, compare)) {
    field.report(messages["date.afterOrSameAs"], "date.afterOrSameAs", field, {
      otherField: options.otherField,
      expectedValue,
      compare
    });
  }
});
var beforeFieldRule = createRule((_, options, field) => {
  if (!field.meta.$value) {
    return;
  }
  const compare = options.compare || "day";
  const dateTime = field.meta.$value;
  const format = options.format || field.meta.$formats;
  const expectedValue = helpers.getNestedValue(options.otherField, field);
  const expectedDateTime = dayjs(expectedValue, format, true);
  if (!expectedDateTime.isValid()) {
    return;
  }
  if (!dateTime.isBefore(expectedDateTime, compare)) {
    field.report(messages["date.beforeField"], "date.beforeField", field, {
      otherField: options.otherField,
      expectedValue,
      compare
    });
  }
});
var beforeOrSameAsRule = createRule((_, options, field) => {
  if (!field.meta.$value) {
    return;
  }
  const compare = options.compare || "day";
  const dateTime = field.meta.$value;
  const format = options.format || field.meta.$formats;
  const expectedValue = helpers.getNestedValue(options.otherField, field);
  const expectedDateTime = dayjs(expectedValue, format, true);
  if (!expectedDateTime.isValid()) {
    return;
  }
  if (!dateTime.isSameOrBefore(expectedDateTime, compare)) {
    field.report(messages["date.beforeOrSameAs"], "date.beforeOrSameAs", field, {
      otherField: options.otherField,
      expectedValue,
      compare
    });
  }
});
var weekendRule = createRule((_, __, field) => {
  if (!field.meta.$value) {
    return;
  }
  const dateTime = field.meta.$value;
  const day = dateTime.day();
  if (day !== 0 && day !== 6) {
    field.report(messages["date.weekend"], "date.weekend", field);
  }
});
var weekdayRule = createRule((_, __, field) => {
  if (!field.meta.$value) {
    return;
  }
  const dateTime = field.meta.$value;
  const day = dateTime.day();
  if (day === 0 || day === 6) {
    field.report(messages["date.weekday"], "date.weekday", field);
  }
});

// src/schema/date/main.ts
var VineDate = class _VineDate extends BaseLiteralType {
  /**
   * Available VineDate rules
   */
  static rules = {
    equals: equalsRule2,
    after: afterRule,
    afterOrEqual: afterOrEqualRule,
    before: beforeRule,
    beforeOrEqual: beforeOrEqualRule,
    sameAs: sameAsRule2,
    notSameAs: notSameAsRule2,
    afterField: afterFieldRule,
    afterOrSameAs: afterOrSameAsRule,
    beforeField: beforeFieldRule,
    beforeOrSameAs: beforeOrSameAsRule,
    weekend: weekendRule,
    weekday: weekdayRule
  };
  /**
   * The property must be implemented for "unionOfTypes"
   */
  [UNIQUE_NAME] = "vine.date";
  /**
   * Checks if the value is of date type. The method must be
   * implemented for "unionOfTypes"
   */
  [IS_OF_TYPE] = (value) => {
    if (typeof value !== "string") {
      return false;
    }
    return dayjs2(value, this.options.formats || DEFAULT_DATE_FORMATS, true).isValid();
  };
  constructor(options, validations) {
    super(options, validations || [dateRule(options || {})]);
  }
  /**
   * The equals rule compares the input value to be same
   * as the expected value.
   *
   * By default, the comparions of day, month and years are performed.
   */
  equals(expectedValue, options) {
    return this.use(equalsRule2({ expectedValue, ...options }));
  }
  /**
   * The after rule compares the input value to be after
   * the expected value.
   *
   * By default, the comparions of day, month and years are performed.
   */
  after(expectedValue, options) {
    return this.use(afterRule({ expectedValue, ...options }));
  }
  /**
   * The after or equal rule compares the input value to be
   * after or equal to the expected value.
   *
   * By default, the comparions of day, month and years are performed.
   */
  afterOrEqual(expectedValue, options) {
    return this.use(afterOrEqualRule({ expectedValue, ...options }));
  }
  /**
   * The before rule compares the input value to be before
   * the expected value.
   *
   * By default, the comparions of day, month and years are performed.
   */
  before(expectedValue, options) {
    return this.use(beforeRule({ expectedValue, ...options }));
  }
  /**
   * The before rule compares the input value to be before
   * the expected value.
   *
   * By default, the comparions of day, month and years are performed.
   */
  beforeOrEqual(expectedValue, options) {
    return this.use(beforeOrEqualRule({ expectedValue, ...options }));
  }
  /**
   * The sameAs rule expects the input value to be same
   * as the value of the other field.
   *
   * By default, the comparions of day, month and years are performed
   */
  sameAs(otherField, options) {
    return this.use(sameAsRule2({ otherField, ...options }));
  }
  /**
   * The notSameAs rule expects the input value to be different
   * from the other field's value
   *
   * By default, the comparions of day, month and years are performed
   */
  notSameAs(otherField, options) {
    return this.use(notSameAsRule2({ otherField, ...options }));
  }
  /**
   * The afterField rule expects the input value to be after
   * the other field's value.
   *
   * By default, the comparions of day, month and years are performed
   */
  afterField(otherField, options) {
    return this.use(afterFieldRule({ otherField, ...options }));
  }
  /**
   * The afterOrSameAs rule expects the input value to be after
   * or equal to the other field's value.
   *
   * By default, the comparions of day, month and years are performed
   */
  afterOrSameAs(otherField, options) {
    return this.use(afterOrSameAsRule({ otherField, ...options }));
  }
  /**
   * The beforeField rule expects the input value to be before
   * the other field's value.
   *
   * By default, the comparions of day, month and years are performed
   */
  beforeField(otherField, options) {
    return this.use(beforeFieldRule({ otherField, ...options }));
  }
  /**
   * The beforeOrSameAs rule expects the input value to be before
   * or same as the other field's value.
   *
   * By default, the comparions of day, month and years are performed
   */
  beforeOrSameAs(otherField, options) {
    return this.use(beforeOrSameAsRule({ otherField, ...options }));
  }
  /**
   * The weekend rule ensures the date falls on a weekend
   */
  weekend() {
    return this.use(weekendRule());
  }
  /**
   * The weekday rule ensures the date falls on a weekday
   */
  weekday() {
    return this.use(weekdayRule());
  }
  /**
   * Clones the VineDate schema type. The applied options
   * and validations are copied to the new instance
   */
  clone() {
    return new _VineDate(this.cloneOptions(), this.cloneValidations());
  }
};

// src/schema/builder.ts
var SchemaBuilder = class extends Macroable3 {
  /**
   * Define a sub-object as a union
   */
  group = group;
  /**
   * Define a union value
   */
  union = union;
  /**
   * Define a string value
   */
  string() {
    return new VineString();
  }
  /**
   * Define a boolean value
   */
  boolean(options) {
    return new VineBoolean(options);
  }
  /**
   * Validate a checkbox to be checked
   */
  accepted() {
    return new VineAccepted();
  }
  /**
   * Define a number value
   */
  number(options) {
    return new VineNumber(options);
  }
  /**
   * Define a datetime value
   */
  date(options) {
    return new VineDate(options);
  }
  /**
   * Define a schema type in which the input value
   * matches the pre-defined value
   */
  literal(value) {
    return new VineLiteral(value);
  }
  /**
   * Define an object with known properties. You may call "allowUnknownProperties"
   * to merge unknown properties.
   */
  object(properties) {
    return new VineObject(properties);
  }
  /**
   * Define an array field and validate its children elements.
   */
  array(schema) {
    return new VineArray(schema);
  }
  /**
   * Define an array field with known length and each children
   * element may have its own schema.
   */
  tuple(schemas) {
    return new VineTuple(schemas);
  }
  /**
   * Define an object field with key-value pair. The keys in
   * a record are unknown and values can be of a specific
   * schema type.
   */
  record(schema) {
    return new VineRecord(schema);
  }
  enum(values) {
    if (Array.isArray(values) || typeof values === "function") {
      return new VineEnum(values);
    }
    return new VineNativeEnum(values);
  }
  /**
   * Allow the field value to be anything
   */
  any() {
    return new VineAny();
  }
  /**
   * Define a union of unique schema types.
   */
  unionOfTypes(schemas) {
    const schemasInUse = /* @__PURE__ */ new Set();
    schemas.forEach((schema) => {
      if (!schema[IS_OF_TYPE] || !schema[UNIQUE_NAME]) {
        throw new Error(
          `Cannot use "${schema.constructor.name}". The schema type is not compatible for use with "vine.unionOfTypes"`
        );
      }
      if (schemasInUse.has(schema[UNIQUE_NAME])) {
        throw new Error(
          `Cannot use duplicate schema "${schema[UNIQUE_NAME]}". "vine.unionOfTypes" needs distinct schema types only`
        );
      }
      schemasInUse.add(schema[UNIQUE_NAME]);
    });
    schemasInUse.clear();
    return new VineUnionOfTypes(schemas);
  }
};

// src/vine/validator.ts
import { Compiler, refsBuilder } from "@vinejs/compiler";
var COMPILER_ERROR_MESSAGES = {
  required: messages.required,
  array: messages.array,
  object: messages.object
};
var VineValidator = class {
  /**
   * Messages provider to use on the validator
   */
  messagesProvider;
  /**
   * Error reporter to use on the validator
   */
  errorReporter;
  /**
   * Parses schema to compiler nodes.
   */
  #parse(schema) {
    const refs = refsBuilder();
    return {
      compilerNode: {
        type: "root",
        schema: schema[PARSE]("", refs, { toCamelCase: false })
      },
      refs: refs.toJSON()
    };
  }
  constructor(schema, options) {
    const { compilerNode, refs } = this.#parse(schema);
    const metaDataValidator = options.metaDataValidator;
    const validateFn = new Compiler(compilerNode, {
      convertEmptyStringsToNull: options.convertEmptyStringsToNull,
      messages: COMPILER_ERROR_MESSAGES
    }).compile();
    this.errorReporter = options.errorReporter;
    this.messagesProvider = options.messagesProvider;
    if (metaDataValidator) {
      this.validate = (data, validateOptions) => {
        let normalizedOptions = validateOptions ?? {};
        const meta = normalizedOptions.meta ?? {};
        const errorReporter = normalizedOptions.errorReporter ?? this.errorReporter;
        const messagesProvider = normalizedOptions.messagesProvider ?? this.messagesProvider;
        metaDataValidator(meta);
        return validateFn(data, meta, refs, messagesProvider, errorReporter());
      };
    } else {
      this.validate = (data, validateOptions) => {
        let normalizedOptions = validateOptions ?? {};
        const meta = normalizedOptions.meta ?? {};
        const errorReporter = normalizedOptions.errorReporter ?? this.errorReporter;
        const messagesProvider = normalizedOptions.messagesProvider ?? this.messagesProvider;
        return validateFn(data, meta, refs, messagesProvider, errorReporter());
      };
    }
  }
};

// src/vine/main.ts
var Vine = class extends SchemaBuilder {
  /**
   * Messages provider to use on the validator
   */
  messagesProvider = new SimpleMessagesProvider(messages, fields);
  /**
   * Error reporter to use on the validator
   */
  errorReporter = () => new SimpleErrorReporter();
  /**
   * Control whether or not to convert empty strings to null
   */
  convertEmptyStringsToNull = false;
  /**
   * Helpers to perform type-checking or cast types keeping
   * HTML forms serialization behavior in mind.
   */
  helpers = helpers;
  /**
   * Convert a validation function to a Vine schema rule
   */
  createRule = createRule;
  /**
   * Pre-compiles a schema into a validation function.
   *
   * ```ts
   * const validate = vine.compile(schema)
   * await validate({ data })
   * ```
   */
  compile(schema) {
    return new VineValidator(schema, {
      convertEmptyStringsToNull: this.convertEmptyStringsToNull,
      messagesProvider: this.messagesProvider,
      errorReporter: this.errorReporter
    });
  }
  /**
   * Define a callback to validate the metadata given to the validator
   * at runtime
   */
  withMetaData(callback) {
    return {
      compile: (schema) => {
        return new VineValidator(schema, {
          convertEmptyStringsToNull: this.convertEmptyStringsToNull,
          messagesProvider: this.messagesProvider,
          errorReporter: this.errorReporter,
          metaDataValidator: callback
        });
      }
    };
  }
  /**
   * Validate data against a schema. Optionally, you can define
   * error messages, fields, a custom messages provider,
   * or an error reporter.
   *
   * ```ts
   * await vine.validate({ schema, data })
   * await vine.validate({ schema, data, messages, fields })
   *
   * await vine.validate({ schema, data, messages, fields }, {
   *   errorReporter
   * })
   * ```
   */
  validate(options) {
    const validator = this.compile(options.schema);
    return validator.validate(options.data, options);
  }
};

// index.ts
var vine = new Vine();
var vine_default = vine;

export {
  symbols_exports,
  BaseLiteralType,
  VineAny,
  VineEnum,
  VineUnion,
  BaseModifiersType2 as BaseModifiersType,
  BaseType,
  VineTuple,
  VineArray,
  VineObject,
  VineRecord,
  VineString,
  VineNumber,
  VineBoolean,
  VineLiteral,
  VineAccepted,
  VineDate,
  VineValidator,
  Vine,
  vine_default
};
//# sourceMappingURL=chunk-YC5YDPDW.js.map