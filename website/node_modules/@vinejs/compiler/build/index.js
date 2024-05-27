// src/compiler/buffer.ts
var CompilerBuffer = class _CompilerBuffer {
  #content = "";
  /**
   * The character used to create a new line
   */
  newLine = "\n";
  /**
   * Write statement ot the output
   */
  writeStatement(statement) {
    this.#content = `${this.#content}${this.newLine}${statement}`;
  }
  /**
   * Creates a child buffer
   */
  child() {
    return new _CompilerBuffer();
  }
  /**
   * Returns the buffer contents as string
   */
  toString() {
    return this.#content;
  }
  /**
   * Flush in-memory string
   */
  flush() {
    this.#content = "";
  }
};

// src/scripts/field/variables.ts
function defineFieldVariables({
  parseFnRefId,
  variableName,
  wildCardPath,
  isArrayMember,
  valueExpression,
  parentExpression,
  fieldNameExpression,
  parentValueExpression
}) {
  const inValueExpression = parseFnRefId ? `refs['${parseFnRefId}'](${valueExpression}, {
      data: root,
      meta: meta,
      parent: ${parentValueExpression}
    })` : valueExpression;
  let fieldPathOutputExpression = "";
  if (parentExpression === "root" || parentExpression === "root_item") {
    fieldPathOutputExpression = fieldNameExpression;
  } else if (fieldNameExpression !== "''") {
    fieldPathOutputExpression = `${parentExpression}.getFieldPath() + '.' + ${fieldNameExpression}`;
  }
  return `const ${variableName} = defineValue(${inValueExpression}, {
  data: root,
  meta: meta,
  name: ${fieldNameExpression},
  wildCardPath: '${wildCardPath}',
  getFieldPath() {
    return ${fieldPathOutputExpression};
  },
  mutate: defineValue,
  report: report,
  isValid: true,
  parent: ${parentValueExpression},
  isArrayMember: ${isArrayMember},
});`;
}

// src/compiler/nodes/base.ts
var BaseNode = class {
  #node;
  #parentField;
  field;
  constructor(node, compiler, parent, parentField) {
    this.#parentField = parentField;
    this.#node = node;
    if (this.#parentField) {
      this.field = this.#parentField;
    } else {
      compiler.variablesCounter++;
      this.field = compiler.createFieldFor(node, parent);
    }
  }
  defineField(buffer) {
    if (!this.#parentField) {
      buffer.writeStatement(
        defineFieldVariables({
          fieldNameExpression: this.field.fieldNameExpression,
          isArrayMember: this.field.isArrayMember,
          parentExpression: this.field.parentExpression,
          parentValueExpression: this.field.parentValueExpression,
          valueExpression: this.field.valueExpression,
          variableName: this.field.variableName,
          wildCardPath: this.field.wildCardPath,
          parseFnRefId: "parseFnId" in this.#node ? this.#node.parseFnId : void 0
        })
      );
    }
  }
};

// src/scripts/array/guard.ts
function defineArrayGuard({ variableName, guardedCodeSnippet }) {
  return `if (ensureIsArray(${variableName})) {
${guardedCodeSnippet}
}`;
}

// src/scripts/field/is_valid_guard.ts
function defineIsValidGuard({ variableName, bail, guardedCodeSnippet }) {
  if (!bail) {
    return guardedCodeSnippet;
  }
  return `if (${variableName}.isValid) {
${guardedCodeSnippet}
}`;
}

// src/scripts/field/null_output.ts
function defineFieldNullOutput({
  allowNull,
  conditional,
  variableName,
  outputExpression,
  transformFnRefId
}) {
  if (!allowNull) {
    return "";
  }
  return `${conditional || "if"}(${variableName}.value === null) {
  ${outputExpression} = ${transformFnRefId ? `refs['${transformFnRefId}'](null, ${variableName});` : "null;"}
}`;
}

// src/scripts/field/validations.ts
function wrapInConditional(conditions, wrappingCode) {
  const [first, second] = conditions;
  if (first && second) {
    return `if (${first} && ${second}) {
  ${wrappingCode}
}`;
  }
  if (first) {
    return `if (${first}) {
  ${wrappingCode}
}`;
  }
  if (second) {
    return `if (${second}) {
  ${wrappingCode}
}`;
  }
  return wrappingCode;
}
function emitValidationSnippet({ isAsync, implicit, ruleFnId }, variableName, bail, dropMissingCheck) {
  const rule = `refs['${ruleFnId}']`;
  const callable = `${rule}.validator(${variableName}.value, ${rule}.options, ${variableName});`;
  const bailCondition = bail ? `${variableName}.isValid` : "";
  const implicitCondition = implicit || dropMissingCheck ? "" : `${variableName}.isDefined`;
  return wrapInConditional(
    [bailCondition, implicitCondition],
    isAsync ? `await ${callable}` : `${callable}`
  );
}
function defineFieldValidations({
  bail,
  validations,
  variableName,
  dropMissingCheck
}) {
  return `${validations.map((one) => emitValidationSnippet(one, variableName, bail, dropMissingCheck)).join("\n")}`;
}

// src/scripts/array/initial_output.ts
function defineArrayInitialOutput({
  variableName,
  outputExpression,
  outputValueExpression
}) {
  return `const ${variableName}_out = ${outputValueExpression};
${outputExpression} = ${variableName}_out;`;
}

// src/scripts/field/existence_validations.ts
function defineFieldExistenceValidations({
  allowNull,
  isOptional,
  variableName
}) {
  if (isOptional === false) {
    if (allowNull === false) {
      return `ensureExists(${variableName});`;
    } else {
      return `ensureIsDefined(${variableName});`;
    }
  }
  return "";
}

// src/compiler/nodes/tuple.ts
var TupleNodeCompiler = class extends BaseNode {
  #node;
  #buffer;
  #compiler;
  constructor(node, buffer, compiler, parent, parentField) {
    super(node, compiler, parent, parentField);
    this.#node = node;
    this.#buffer = buffer;
    this.#compiler = compiler;
  }
  /**
   * Compiles the tuple children to a JS fragment
   */
  #compileTupleChildren() {
    const buffer = this.#buffer.child();
    const parent = {
      type: "tuple",
      fieldPathExpression: this.field.fieldPathExpression,
      outputExpression: this.field.outputExpression,
      variableName: this.field.variableName,
      wildCardPath: this.field.wildCardPath
    };
    this.#node.properties.forEach((child) => {
      this.#compiler.compileNode(child, buffer, parent);
    });
    return buffer.toString();
  }
  compile() {
    this.defineField(this.#buffer);
    this.#buffer.writeStatement(
      defineFieldExistenceValidations({
        allowNull: this.#node.allowNull,
        isOptional: this.#node.isOptional,
        variableName: this.field.variableName
      })
    );
    const isArrayValidBlock = defineIsValidGuard({
      variableName: this.field.variableName,
      bail: this.#node.bail,
      guardedCodeSnippet: `${defineArrayInitialOutput({
        variableName: this.field.variableName,
        outputExpression: this.field.outputExpression,
        outputValueExpression: this.#node.allowUnknownProperties ? `copyProperties(${this.field.variableName}.value)` : `[]`
      })}${this.#compileTupleChildren()}`
    });
    const isValueAnArrayBlock = defineArrayGuard({
      variableName: this.field.variableName,
      guardedCodeSnippet: `${defineFieldValidations({
        variableName: this.field.variableName,
        validations: this.#node.validations,
        bail: this.#node.bail,
        dropMissingCheck: true
      })}${this.#buffer.newLine}${isArrayValidBlock}`
    });
    this.#buffer.writeStatement(
      `${isValueAnArrayBlock}${this.#buffer.newLine}${defineFieldNullOutput({
        allowNull: this.#node.allowNull,
        outputExpression: this.field.outputExpression,
        variableName: this.field.variableName,
        conditional: "else if"
      })}`
    );
  }
};

// src/scripts/array/loop.ts
function defineArrayLoop({
  variableName,
  loopCodeSnippet,
  startingIndex
}) {
  startingIndex = startingIndex || 0;
  return `const ${variableName}_items_size = ${variableName}.value.length;
for (let ${variableName}_i = ${startingIndex}; ${variableName}_i < ${variableName}_items_size; ${variableName}_i++) {
${loopCodeSnippet}
}`;
}

// src/compiler/nodes/array.ts
var ArrayNodeCompiler = class extends BaseNode {
  #node;
  #buffer;
  #compiler;
  constructor(node, buffer, compiler, parent, parentField) {
    super(node, compiler, parent, parentField);
    this.#node = node;
    this.#buffer = buffer;
    this.#compiler = compiler;
  }
  /**
   * Compiles the array elements to a JS fragment
   */
  #compileArrayElements() {
    const arrayElementsBuffer = this.#buffer.child();
    this.#compiler.compileNode(this.#node.each, arrayElementsBuffer, {
      type: "array",
      fieldPathExpression: this.field.fieldPathExpression,
      outputExpression: this.field.outputExpression,
      variableName: this.field.variableName,
      wildCardPath: this.field.wildCardPath
    });
    const buffer = this.#buffer.child();
    buffer.writeStatement(
      defineArrayLoop({
        variableName: this.field.variableName,
        startingIndex: 0,
        loopCodeSnippet: arrayElementsBuffer.toString()
      })
    );
    arrayElementsBuffer.flush();
    return buffer.toString();
  }
  compile() {
    this.defineField(this.#buffer);
    this.#buffer.writeStatement(
      defineFieldExistenceValidations({
        allowNull: this.#node.allowNull,
        isOptional: this.#node.isOptional,
        variableName: this.field.variableName
      })
    );
    const isArrayValidBlock = defineIsValidGuard({
      variableName: this.field.variableName,
      bail: this.#node.bail,
      guardedCodeSnippet: `${defineArrayInitialOutput({
        variableName: this.field.variableName,
        outputExpression: this.field.outputExpression,
        outputValueExpression: `[]`
      })}${this.#buffer.newLine}${this.#compileArrayElements()}`
    });
    const isValueAnArrayBlock = defineArrayGuard({
      variableName: this.field.variableName,
      guardedCodeSnippet: `${defineFieldValidations({
        variableName: this.field.variableName,
        validations: this.#node.validations,
        bail: this.#node.bail,
        dropMissingCheck: true
      })}${this.#buffer.newLine}${isArrayValidBlock}`
    });
    this.#buffer.writeStatement(
      `${isValueAnArrayBlock}${this.#buffer.newLine}${defineFieldNullOutput({
        allowNull: this.#node.allowNull,
        outputExpression: this.field.outputExpression,
        variableName: this.field.variableName,
        conditional: "else if"
      })}`
    );
  }
};

// src/scripts/union/parse.ts
function callParseFunction({ parseFnRefId, variableName }) {
  if (parseFnRefId) {
    return `${variableName}.value = refs['${parseFnRefId}'](${variableName}.value);`;
  }
  return "";
}

// src/scripts/define_else_conditon.ts
function defineElseCondition({ variableName, conditionalFnRefId }) {
  return `else {
refs['${conditionalFnRefId}'](${variableName}.value, ${variableName});
}`;
}

// src/scripts/define_conditional_guard.ts
function defineConditionalGuard({
  conditional,
  variableName,
  conditionalFnRefId,
  guardedCodeSnippet
}) {
  return `${conditional}(refs['${conditionalFnRefId}'](${variableName}.value, ${variableName})) {
${guardedCodeSnippet}
}`;
}

// src/compiler/nodes/union.ts
var UnionNodeCompiler = class extends BaseNode {
  #compiler;
  #node;
  #buffer;
  #parent;
  constructor(node, buffer, compiler, parent, parentField) {
    super(node, compiler, parent, parentField);
    this.#node = node;
    this.#buffer = buffer;
    this.#parent = parent;
    this.#compiler = compiler;
  }
  /**
   * Compiles union children by wrapping each conditon inside a conditional
   * guard block
   */
  #compileUnionChildren() {
    const childrenBuffer = this.#buffer.child();
    this.#node.conditions.forEach((child, index) => {
      const conditionalBuffer = this.#buffer.child();
      if ("parseFnId" in child.schema) {
        conditionalBuffer.writeStatement(
          callParseFunction({
            parseFnRefId: child.schema.parseFnId,
            variableName: this.field.variableName
          })
        );
      }
      this.#compiler.compileNode(child.schema, conditionalBuffer, this.#parent, this.field);
      childrenBuffer.writeStatement(
        defineConditionalGuard({
          conditional: index === 0 ? "if" : "else if",
          variableName: this.field.variableName,
          conditionalFnRefId: child.conditionalFnRefId,
          guardedCodeSnippet: conditionalBuffer.toString()
        })
      );
      conditionalBuffer.flush();
    });
    if (this.#node.elseConditionalFnRefId && this.#node.conditions.length) {
      childrenBuffer.writeStatement(
        defineElseCondition({
          variableName: this.field.variableName,
          conditionalFnRefId: this.#node.elseConditionalFnRefId
        })
      );
    }
    return childrenBuffer.toString();
  }
  compile() {
    this.defineField(this.#buffer);
    this.#buffer.writeStatement(this.#compileUnionChildren());
  }
};

// src/scripts/record/loop.ts
function defineRecordLoop({ variableName, loopCodeSnippet }) {
  return `const ${variableName}_keys = Object.keys(${variableName}.value);
const ${variableName}_keys_size = ${variableName}_keys.length;
for (let ${variableName}_key_i = 0; ${variableName}_key_i < ${variableName}_keys_size; ${variableName}_key_i++) {
const ${variableName}_i = ${variableName}_keys[${variableName}_key_i];
${loopCodeSnippet}
}`;
}

// src/scripts/object/guard.ts
function defineObjectGuard({ variableName, guardedCodeSnippet }) {
  return `if (ensureIsObject(${variableName})) {
${guardedCodeSnippet}
}`;
}

// src/scripts/object/initial_output.ts
function defineObjectInitialOutput({
  variableName,
  outputExpression,
  outputValueExpression
}) {
  return `const ${variableName}_out = ${outputValueExpression};
${outputExpression} = ${variableName}_out;`;
}

// src/compiler/nodes/record.ts
var RecordNodeCompiler = class extends BaseNode {
  #node;
  #buffer;
  #compiler;
  constructor(node, buffer, compiler, parent, parentField) {
    super(node, compiler, parent, parentField);
    this.#node = node;
    this.#buffer = buffer;
    this.#compiler = compiler;
  }
  /**
   * Compiles the record elements to a JS fragment
   */
  #compileRecordElements() {
    const buffer = this.#buffer.child();
    const recordElementsBuffer = this.#buffer.child();
    this.#compiler.compileNode(this.#node.each, recordElementsBuffer, {
      type: "record",
      fieldPathExpression: this.field.fieldPathExpression,
      outputExpression: this.field.outputExpression,
      variableName: this.field.variableName,
      wildCardPath: this.field.wildCardPath
    });
    buffer.writeStatement(
      defineRecordLoop({
        variableName: this.field.variableName,
        loopCodeSnippet: recordElementsBuffer.toString()
      })
    );
    recordElementsBuffer.flush();
    return buffer.toString();
  }
  compile() {
    this.defineField(this.#buffer);
    this.#buffer.writeStatement(
      defineFieldExistenceValidations({
        allowNull: this.#node.allowNull,
        isOptional: this.#node.isOptional,
        variableName: this.field.variableName
      })
    );
    const isObjectValidBlock = defineIsValidGuard({
      variableName: this.field.variableName,
      bail: this.#node.bail,
      guardedCodeSnippet: `${defineObjectInitialOutput({
        variableName: this.field.variableName,
        outputExpression: this.field.outputExpression,
        outputValueExpression: `{}`
      })}${this.#compileRecordElements()}`
    });
    const isValueAnObjectBlock = defineObjectGuard({
      variableName: this.field.variableName,
      guardedCodeSnippet: `${defineFieldValidations({
        variableName: this.field.variableName,
        validations: this.#node.validations,
        bail: this.#node.bail,
        dropMissingCheck: true
      })}${this.#buffer.newLine}${isObjectValidBlock}`
    });
    this.#buffer.writeStatement(
      `${isValueAnObjectBlock}${this.#buffer.newLine}${defineFieldNullOutput({
        allowNull: this.#node.allowNull,
        outputExpression: this.field.outputExpression,
        variableName: this.field.variableName,
        conditional: "else if"
      })}`
    );
  }
};

// src/scripts/object/move_unknown_properties.ts
function arrayToString(arr) {
  return `[${arr.map((str) => `"${str}"`).join(", ")}]`;
}
function defineMoveProperties({
  variableName,
  fieldsToIgnore,
  allowUnknownProperties
}) {
  if (!allowUnknownProperties) {
    return "";
  }
  const serializedFieldsToIgnore = arrayToString(fieldsToIgnore);
  return `moveProperties(${variableName}.value, ${variableName}_out, ${serializedFieldsToIgnore});`;
}

// src/compiler/nodes/object.ts
var ObjectNodeCompiler = class extends BaseNode {
  #node;
  #buffer;
  #compiler;
  constructor(node, buffer, compiler, parent, parentField) {
    super(node, compiler, parent, parentField);
    this.#node = node;
    this.#buffer = buffer;
    this.#compiler = compiler;
  }
  /**
   * Returns known field names for the object
   */
  #getFieldNames(node) {
    let fieldNames = node.properties.map((child) => child.fieldName);
    const groupsFieldNames = node.groups.flatMap((group) => this.#getGroupFieldNames(group));
    return fieldNames.concat(groupsFieldNames);
  }
  /**
   * Returns field names of a group.
   */
  #getGroupFieldNames(group) {
    return group.conditions.flatMap((condition) => {
      return this.#getFieldNames(condition.schema);
    });
  }
  /**
   * Compiles object children to JS output
   */
  #compileObjectChildren() {
    const buffer = this.#buffer.child();
    const parent = {
      type: "object",
      fieldPathExpression: this.field.fieldPathExpression,
      outputExpression: this.field.outputExpression,
      variableName: this.field.variableName,
      wildCardPath: this.field.wildCardPath
    };
    this.#node.properties.forEach((child) => this.#compiler.compileNode(child, buffer, parent));
    return buffer.toString();
  }
  /**
   * Compiles object groups with conditions to JS output.
   */
  #compileObjectGroups() {
    const buffer = this.#buffer.child();
    const parent = {
      type: "object",
      fieldPathExpression: this.field.fieldPathExpression,
      outputExpression: this.field.outputExpression,
      variableName: this.field.variableName,
      wildCardPath: this.field.wildCardPath
    };
    this.#node.groups.forEach((group) => this.#compileObjectGroup(group, buffer, parent));
    return buffer.toString();
  }
  /**
   * Compiles an object groups recursively
   */
  #compileObjectGroup(group, buffer, parent) {
    group.conditions.forEach((condition, index) => {
      const guardBuffer = buffer.child();
      condition.schema.properties.forEach((child) => {
        this.#compiler.compileNode(child, guardBuffer, parent);
      });
      condition.schema.groups.forEach((child) => {
        this.#compileObjectGroup(child, guardBuffer, parent);
      });
      buffer.writeStatement(
        defineConditionalGuard({
          variableName: this.field.variableName,
          conditional: index === 0 ? "if" : "else if",
          conditionalFnRefId: condition.conditionalFnRefId,
          guardedCodeSnippet: guardBuffer.toString()
        })
      );
    });
    if (group.elseConditionalFnRefId && group.conditions.length) {
      buffer.writeStatement(
        defineElseCondition({
          variableName: this.field.variableName,
          conditionalFnRefId: group.elseConditionalFnRefId
        })
      );
    }
  }
  compile() {
    this.defineField(this.#buffer);
    this.#buffer.writeStatement(
      defineFieldExistenceValidations({
        allowNull: this.#node.allowNull,
        isOptional: this.#node.isOptional,
        variableName: this.field.variableName
      })
    );
    const isObjectValidBlock = defineIsValidGuard({
      variableName: this.field.variableName,
      bail: this.#node.bail,
      guardedCodeSnippet: `${defineObjectInitialOutput({
        variableName: this.field.variableName,
        outputExpression: this.field.outputExpression,
        outputValueExpression: "{}"
      })}${this.#buffer.newLine}${this.#compileObjectChildren()}${this.#buffer.newLine}${this.#compileObjectGroups()}${this.#buffer.newLine}${defineMoveProperties({
        variableName: this.field.variableName,
        allowUnknownProperties: this.#node.allowUnknownProperties,
        fieldsToIgnore: this.#node.allowUnknownProperties ? this.#getFieldNames(this.#node) : []
      })}`
    });
    const isValueAnObject = defineObjectGuard({
      variableName: this.field.variableName,
      guardedCodeSnippet: `${defineFieldValidations({
        variableName: this.field.variableName,
        validations: this.#node.validations,
        bail: this.#node.bail,
        dropMissingCheck: true
      })}${isObjectValidBlock}`
    });
    this.#buffer.writeStatement(
      `${isValueAnObject}${this.#buffer.newLine}${defineFieldNullOutput({
        variableName: this.field.variableName,
        allowNull: this.#node.allowNull,
        outputExpression: this.field.outputExpression,
        conditional: "else if"
      })}`
    );
  }
};

// src/compiler/fields/root_field.ts
function createRootField(parent) {
  return {
    parentExpression: parent.variableName,
    parentValueExpression: parent.variableName,
    fieldNameExpression: `''`,
    fieldPathExpression: `''`,
    wildCardPath: "",
    variableName: `${parent.variableName}_item`,
    valueExpression: "root",
    outputExpression: parent.outputExpression,
    isArrayMember: false
  };
}

// src/scripts/field/value_output.ts
function defineFieldValueOutput({
  variableName,
  outputExpression,
  transformFnRefId
}) {
  const outputValueExpression = transformFnRefId ? `refs['${transformFnRefId}'](${variableName}.value, ${variableName})` : `${variableName}.value`;
  return `if (${variableName}.isDefined && ${variableName}.isValid) {
  ${outputExpression} = ${outputValueExpression};
}`;
}

// src/compiler/nodes/literal.ts
var LiteralNodeCompiler = class extends BaseNode {
  #node;
  #buffer;
  constructor(node, buffer, compiler, parent, parentField) {
    super(node, compiler, parent, parentField);
    this.#node = node;
    this.#buffer = buffer;
  }
  compile() {
    this.defineField(this.#buffer);
    this.#buffer.writeStatement(
      defineFieldExistenceValidations({
        allowNull: this.#node.allowNull,
        isOptional: this.#node.isOptional,
        variableName: this.field.variableName
      })
    );
    this.#buffer.writeStatement(
      defineFieldValidations({
        variableName: this.field.variableName,
        validations: this.#node.validations,
        bail: this.#node.bail,
        dropMissingCheck: false
      })
    );
    this.#buffer.writeStatement(
      `${defineFieldValueOutput({
        variableName: this.field.variableName,
        outputExpression: this.field.outputExpression,
        transformFnRefId: this.#node.transformFnId
      })}${this.#buffer.newLine}${defineFieldNullOutput({
        variableName: this.field.variableName,
        allowNull: this.#node.allowNull,
        outputExpression: this.field.outputExpression,
        transformFnRefId: this.#node.transformFnId,
        conditional: "else if"
      })}`
    );
  }
};

// src/compiler/fields/array_field.ts
function createArrayField(parent) {
  const wildCardPath = parent.wildCardPath !== "" ? `${parent.wildCardPath}.*` : `*`;
  return {
    parentExpression: parent.variableName,
    parentValueExpression: `${parent.variableName}.value`,
    fieldNameExpression: `${parent.variableName}_i`,
    fieldPathExpression: wildCardPath,
    wildCardPath,
    variableName: `${parent.variableName}_item`,
    valueExpression: `${parent.variableName}.value[${parent.variableName}_i]`,
    outputExpression: `${parent.variableName}_out[${parent.variableName}_i]`,
    isArrayMember: true
  };
}

// src/compiler/fields/tuple_field.ts
function createTupleField(node, parent) {
  const wildCardPath = parent.wildCardPath !== "" ? `${parent.wildCardPath}.${node.fieldName}` : node.fieldName;
  return {
    parentExpression: parent.variableName,
    parentValueExpression: `${parent.variableName}.value`,
    fieldNameExpression: `${node.fieldName}`,
    fieldPathExpression: wildCardPath,
    wildCardPath,
    variableName: `${parent.variableName}_item_${node.fieldName}`,
    valueExpression: `${parent.variableName}.value[${node.fieldName}]`,
    outputExpression: `${parent.variableName}_out[${node.propertyName}]`,
    isArrayMember: true
  };
}

// src/scripts/report_errors.ts
function reportErrors() {
  return `if(errorReporter.hasErrors) {
  throw errorReporter.createError();
}`;
}

// src/compiler/fields/object_field.ts
function createObjectField(node, variablesCounter, parent) {
  const wildCardPath = parent.wildCardPath !== "" ? `${parent.wildCardPath}.${node.fieldName}` : node.fieldName;
  return {
    parentExpression: parent.variableName,
    parentValueExpression: `${parent.variableName}.value`,
    fieldNameExpression: `'${node.fieldName}'`,
    fieldPathExpression: wildCardPath,
    wildCardPath,
    variableName: `${node.propertyName}_${variablesCounter}`,
    valueExpression: `${parent.variableName}.value['${node.fieldName}']`,
    outputExpression: `${parent.variableName}_out['${node.propertyName}']`,
    isArrayMember: false
  };
}

// src/compiler/fields/record_field.ts
function createRecordField(parent) {
  const wildCardPath = parent.wildCardPath !== "" ? `${parent.wildCardPath}.*` : `*`;
  return {
    parentExpression: parent.variableName,
    parentValueExpression: `${parent.variableName}.value`,
    fieldNameExpression: `${parent.variableName}_i`,
    fieldPathExpression: wildCardPath,
    wildCardPath,
    variableName: `${parent.variableName}_item`,
    valueExpression: `${parent.variableName}.value[${parent.variableName}_i]`,
    outputExpression: `${parent.variableName}_out[${parent.variableName}_i]`,
    isArrayMember: false
  };
}

// src/scripts/define_inline_functions.ts
function defineInlineFunctions(options) {
  return `function report(message, rule, field, args) {
  field.isValid = false;
  errorReporter.report(messagesProvider.getMessage(message, rule, field, args), rule, field, args);
};
function defineValue(value, field) {
  ${options.convertEmptyStringsToNull ? `if (value === '') { value = null; }` : ""}
  field.value = value;
  field.isDefined = value !== undefined && value !== null;
  return field;
};
function ensureExists(field) {
  if (field.value === undefined || field.value === null) {
    field.report(REQUIRED, 'required', field);
    return false;
  }
  return true;
};
function ensureIsDefined(field) {
  if (field.value === undefined) {
    field.report(REQUIRED, 'required', field);
    return false;
  }
  return true;
};
function ensureIsObject(field) {
  if (!field.isDefined) {
    return false;
  }
  if (typeof field.value == 'object' && !Array.isArray(field.value)) {
    return true;
  }
  field.report(NOT_AN_OBJECT, 'object', field);
  return false;
};
function ensureIsArray(field) {
  if (!field.isDefined) {
    return false;
  }
  if (Array.isArray(field.value)) {
    return true;
  }
  field.report(NOT_AN_ARRAY, 'array', field);
  return false;
};
function copyProperties(val) {
  let k, out, tmp;

  if (Array.isArray(val)) {
    out = Array((k = val.length))
    while (k--) out[k] = (tmp = val[k]) && typeof tmp == 'object' ? copyProperties(tmp) : tmp
    return out
  }

  if (Object.prototype.toString.call(val) === '[object Object]') {
    out = {} // null
    for (k in val) {
      out[k] = (tmp = val[k]) && typeof tmp == 'object' ? copyProperties(tmp) : tmp
    }
    return out
  }
  return val
};
function moveProperties(source, destination, ignoreKeys) {
  for (let key in source) {
    if (!ignoreKeys.includes(key)) {
      const value = source[key]
      destination[key] = copyProperties(value)
    }
  }
};`;
}

// src/scripts/define_error_messages.ts
function defineInlineErrorMessages(messages) {
  return `const REQUIRED = '${messages.required}';
const NOT_AN_OBJECT = '${messages.object}';
const NOT_AN_ARRAY = '${messages.array}';`;
}

// src/compiler/main.ts
var AsyncFunction = Object.getPrototypeOf(async function() {
}).constructor;
var Compiler = class {
  /**
   * Variables counter is used to generate unique variable
   * names with a counter suffix.
   */
  variablesCounter = 0;
  /**
   * An array of nodes to process
   */
  #rootNode;
  /**
   * Options to configure the compiler behavior
   */
  #options;
  /**
   * Buffer for collection the JS output string
   */
  #buffer = new CompilerBuffer();
  constructor(rootNode, options) {
    this.#rootNode = rootNode;
    this.#options = options || { convertEmptyStringsToNull: false };
  }
  /**
   * Initiates the JS output
   */
  #initiateJSOutput() {
    this.#buffer.writeStatement(
      defineInlineErrorMessages({
        required: "value is required",
        object: "value is not a valid object",
        array: "value is not a valid array",
        ...this.#options.messages
      })
    );
    this.#buffer.writeStatement(defineInlineFunctions(this.#options));
    this.#buffer.writeStatement("let out;");
  }
  /**
   * Finished the JS output
   */
  #finishJSOutput() {
    this.#buffer.writeStatement(reportErrors());
    this.#buffer.writeStatement("return out;");
  }
  /**
   * Compiles all the nodes
   */
  #compileNodes() {
    this.compileNode(this.#rootNode.schema, this.#buffer, {
      type: "root",
      variableName: "root",
      outputExpression: "out",
      fieldPathExpression: "out",
      wildCardPath: ""
    });
  }
  /**
   * Returns compiled output as a function
   */
  #toAsyncFunction() {
    return new AsyncFunction(
      "root",
      "meta",
      "refs",
      "messagesProvider",
      "errorReporter",
      this.#buffer.toString()
    );
  }
  /**
   * Converts a node to a field. Optionally accepts a parent node to create
   * a field for a specific parent type.
   */
  createFieldFor(node, parent) {
    switch (parent.type) {
      case "array":
        return createArrayField(parent);
      case "root":
        return createRootField(parent);
      case "object":
        return createObjectField(node, this.variablesCounter, parent);
      case "tuple":
        return createTupleField(node, parent);
      case "record":
        return createRecordField(parent);
    }
  }
  /**
   * Compiles a given compiler node
   */
  compileNode(node, buffer, parent, parentField) {
    switch (node.type) {
      case "literal":
        return new LiteralNodeCompiler(node, buffer, this, parent, parentField).compile();
      case "array":
        return new ArrayNodeCompiler(node, buffer, this, parent, parentField).compile();
      case "record":
        return new RecordNodeCompiler(node, buffer, this, parent, parentField).compile();
      case "object":
        return new ObjectNodeCompiler(node, buffer, this, parent, parentField).compile();
      case "tuple":
        return new TupleNodeCompiler(node, buffer, this, parent, parentField).compile();
      case "union":
        return new UnionNodeCompiler(node, buffer, this, parent, parentField).compile();
    }
  }
  /**
   * Compile schema nodes to an async function
   */
  compile() {
    this.#initiateJSOutput();
    this.#compileNodes();
    this.#finishJSOutput();
    const outputFunction = this.#toAsyncFunction();
    this.variablesCounter = 0;
    this.#buffer.flush();
    return outputFunction;
  }
};

// src/refs_builder.ts
function refsBuilder() {
  let counter = 0;
  const refs = {};
  return {
    toJSON() {
      return refs;
    },
    /**
     * Track a value inside refs
     */
    track(value) {
      counter++;
      const ref = `ref://${counter}`;
      refs[ref] = value;
      return ref;
    },
    /**
     * Track a validation inside refs
     */
    trackValidation(validation) {
      return this.track(validation);
    },
    /**
     * Track input value parser inside refs
     */
    trackParser(fn) {
      return this.track(fn);
    },
    /**
     * Track output value transformer inside refs
     */
    trackTransformer(fn) {
      return this.track(fn);
    },
    /**
     * Track a conditional inside refs
     */
    trackConditional(fn) {
      return this.track(fn);
    }
  };
}
export {
  Compiler,
  refsBuilder
};
//# sourceMappingURL=index.js.map