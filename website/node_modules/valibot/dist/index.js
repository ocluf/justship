// src/error/flatten/flatten.ts
function flatten(arg1) {
  return (Array.isArray(arg1) ? arg1 : arg1.issues).reduce(
    (flatErrors, issue) => {
      if (issue.path) {
        if (issue.path.every(
          ({ key }) => typeof key === "string" || typeof key === "number"
        )) {
          const path = issue.path.map(({ key }) => key).join(".");
          if (flatErrors.nested[path]) {
            flatErrors.nested[path].push(issue.message);
          } else {
            flatErrors.nested[path] = [issue.message];
          }
        }
      } else {
        if (flatErrors.root) {
          flatErrors.root.push(issue.message);
        } else {
          flatErrors.root = [issue.message];
        }
      }
      return flatErrors;
    },
    { nested: {} }
  );
}

// src/error/ValiError/ValiError.ts
var ValiError = class extends Error {
  issues;
  /**
   * Creates a Valibot error with useful information.
   *
   * @param issues The error issues.
   */
  constructor(issues) {
    super(issues[0].message);
    this.name = "ValiError";
    this.issues = issues;
  }
};

// src/methods/brand/brand.ts
var BrandSymbol = Symbol("brand");
function brand(schema, name) {
  return schema;
}

// src/methods/coerce/coerce.ts
function coerce(schema, action) {
  return {
    ...schema,
    _parse(input, config) {
      return schema._parse(action(input), config);
    }
  };
}

// src/methods/coerce/coerceAsync.ts
function coerceAsync(schema, action) {
  return {
    ...schema,
    async _parse(input, config) {
      return schema._parse(await action(input), config);
    }
  };
}

// src/utils/actionIssue/actionIssue.ts
function actionIssue(context, reference, input, label, received) {
  return {
    issues: [{ context, reference, input, label, received }]
  };
}

// src/utils/actionOutput/actionOutput.ts
function actionOutput(output) {
  return { output };
}

// src/utils/defaultArgs/defaultArgs.ts
function defaultArgs(arg1, arg2) {
  return Array.isArray(arg1) ? [void 0, arg1] : [arg1, arg2];
}

// src/storages/globalConfig/globalConfig.ts
var store;
function setGlobalConfig(config) {
  store = { ...store, ...config };
}
function getGlobalConfig(config) {
  return {
    lang: config?.lang ?? store?.lang,
    message: config?.message,
    abortEarly: config?.abortEarly ?? store?.abortEarly,
    abortPipeEarly: config?.abortPipeEarly ?? store?.abortPipeEarly,
    skipPipe: config?.skipPipe ?? store?.skipPipe
  };
}
function deleteGlobalConfig() {
  store = void 0;
}

// src/storages/globalMessage/globalMessage.ts
var store2;
function setGlobalMessage(message, lang) {
  if (!store2)
    store2 = /* @__PURE__ */ new Map();
  store2.set(lang, message);
}
function getGlobalMessage(lang) {
  return store2?.get(lang);
}
function deleteGlobalMessage(lang) {
  store2?.delete(lang);
}

// src/storages/schemaMessage/schemaMessage.ts
var store3;
function setSchemaMessage(message, lang) {
  if (!store3)
    store3 = /* @__PURE__ */ new Map();
  store3.set(lang, message);
}
function getSchemaMessage(lang) {
  return store3?.get(lang);
}
function deleteSchemaMessage(lang) {
  store3?.delete(lang);
}

// src/storages/specificMessage/specificMessage.ts
var store4;
function setSpecificMessage(reference, message, lang) {
  if (!store4)
    store4 = /* @__PURE__ */ new Map();
  if (!store4.get(reference))
    store4.set(reference, /* @__PURE__ */ new Map());
  store4.get(reference).set(lang, message);
}
function getSpecificMessage(reference, lang) {
  return store4?.get(reference)?.get(lang);
}
function deleteSpecificMessage(reference, lang) {
  store4?.get(reference)?.delete(lang);
}

// src/utils/i18n/i18n.ts
function i18n(schema, context, reference, config, issue) {
  const message = context.message ?? getSpecificMessage(reference, issue.lang) ?? (schema ? getSchemaMessage(issue.lang) : null) ?? config?.message ?? getGlobalMessage(issue.lang) ?? issue.message;
  return typeof message === "function" ? message(issue) : message;
}

// src/utils/isLuhnAlgo/isLuhnAlgo.ts
var NON_DIGIT_REGEX = /\D/gu;
function isLuhnAlgo(input) {
  const number2 = input.replace(NON_DIGIT_REGEX, "");
  let length2 = number2.length;
  let bit = 1;
  let sum = 0;
  while (length2) {
    const value2 = +number2[--length2];
    bit ^= 1;
    sum += bit ? [0, 2, 4, 6, 8, 1, 3, 5, 7, 9][value2] : value2;
  }
  return sum % 10 === 0;
}

// src/utils/isOfType/isOfType.ts
function isOfType(type, object2) {
  return object2.type === type;
}

// src/utils/schemaResult/schemaResult.ts
function schemaResult(typed, output, issues) {
  return { typed, output, issues };
}

// src/utils/stringify/stringify.ts
function stringify(input) {
  let type = typeof input;
  if (type === "object") {
    type = input ? Object.getPrototypeOf(input).constructor.name : "null";
  }
  return type === "string" ? `"${input}"` : type === "number" || type === "bigint" || type === "boolean" ? `${input}` : type;
}

// src/utils/pipeResult/utils/pipeIssue/pipeIssue.ts
function pipeIssue(context, config, issue) {
  const received = issue.received ?? stringify(issue.input);
  const schemaIssue2 = {
    reason: context.type,
    context: issue.context.type,
    expected: issue.context.expects,
    received,
    message: `Invalid ${issue.label}: ${issue.context.expects ? `Expected ${issue.context.expects} but r` : "R"}eceived ${received}`,
    input: issue.input,
    requirement: issue.context.requirement,
    path: issue.path,
    lang: config?.lang,
    abortEarly: config?.abortEarly,
    abortPipeEarly: config?.abortPipeEarly,
    skipPipe: config?.skipPipe
  };
  schemaIssue2.message = i18n(
    false,
    issue.context,
    issue.reference,
    config,
    schemaIssue2
  );
  return schemaIssue2;
}

// src/utils/pipeResult/pipeResult.ts
function pipeResult(context, input, config, issues) {
  if (context.pipe && !config?.skipPipe) {
    for (const action of context.pipe) {
      const result = action._parse(input);
      if (result.issues) {
        for (const actionIssue2 of result.issues) {
          const schemaIssue2 = pipeIssue(context, config, actionIssue2);
          issues ? issues.push(schemaIssue2) : issues = [schemaIssue2];
        }
        if (config?.abortEarly || config?.abortPipeEarly) {
          break;
        }
      } else {
        input = result.output;
      }
    }
  }
  return schemaResult(true, input, issues);
}

// src/utils/pipeResult/pipeResultAsync.ts
async function pipeResultAsync(context, input, config, issues) {
  if (context.pipe && !config?.skipPipe) {
    for (const action of context.pipe) {
      const result = await action._parse(input);
      if (result.issues) {
        for (const actionIssue2 of result.issues) {
          const schemaIssue2 = pipeIssue(context, config, actionIssue2);
          issues ? issues.push(schemaIssue2) : issues = [schemaIssue2];
        }
        if (config?.abortEarly || config?.abortPipeEarly) {
          break;
        }
      } else {
        input = result.output;
      }
    }
  }
  return schemaResult(true, input, issues);
}

// src/utils/restAndDefaultArgs/restAndDefaultArgs.ts
function restAndDefaultArgs(arg1, arg2, arg3) {
  if (!arg1 || typeof arg1 === "object" && !Array.isArray(arg1)) {
    const [error2, pipe2] = defaultArgs(arg2, arg3);
    return [arg1, error2, pipe2];
  }
  const [error, pipe] = defaultArgs(
    arg1,
    arg2
  );
  return [void 0, error, pipe];
}

// src/utils/schemaIssue/schemaIssue.ts
function schemaIssue(context, reference, input, config, other) {
  const received = stringify(input);
  const expected = other?.expected ?? context.expects;
  const issue = {
    reason: other?.reason ?? "type",
    context: context.type,
    expected,
    received,
    message: `Invalid type: Expected ${expected} but received ${received}`,
    input,
    path: other?.path,
    issues: other?.issues,
    lang: config?.lang,
    abortEarly: config?.abortEarly,
    abortPipeEarly: config?.abortPipeEarly,
    skipPipe: config?.skipPipe
  };
  issue.message = i18n(true, context, reference, config, issue);
  return { typed: false, output: input, issues: [issue] };
}

// src/methods/getFallback/getFallback.ts
function getFallback(schema, info) {
  return typeof schema.fallback === "function" ? schema.fallback(info) : schema.fallback;
}

// src/methods/getFallback/getFallbackAsync.ts
async function getFallbackAsync(schema, info) {
  return typeof schema.fallback === "function" ? await schema.fallback(info) : schema.fallback;
}

// src/methods/fallback/fallback.ts
function fallback(schema, fallback2) {
  return {
    ...schema,
    fallback: fallback2,
    _parse(input, config) {
      const result = schema._parse(input, config);
      return result.issues ? schemaResult(
        true,
        getFallback(this, { input, issues: result.issues })
      ) : result;
    }
  };
}

// src/methods/fallback/fallbackAsync.ts
function fallbackAsync(schema, fallback2) {
  return {
    ...schema,
    fallback: fallback2,
    async _parse(input, config) {
      const result = await schema._parse(input, config);
      return result.issues ? schemaResult(
        true,
        await getFallbackAsync(this, { input, issues: result.issues })
      ) : result;
    }
  };
}

// src/methods/forward/forward.ts
function forward(validation, pathList) {
  return {
    ...validation,
    _parse(input) {
      const result = validation._parse(input);
      if (result.issues) {
        for (const issue of result.issues) {
          let pathInput = input;
          for (const key of pathList) {
            const pathValue = pathInput[key];
            issue.input = pathValue;
            const pathItem = {
              type: "unknown",
              origin: "value",
              input: pathInput,
              key,
              value: pathValue
            };
            issue.path ? issue.path.push(pathItem) : issue.path = [pathItem];
            if (!pathValue) {
              break;
            }
            pathInput = pathValue;
          }
        }
      }
      return result;
    }
  };
}

// src/methods/forward/forwardAsync.ts
function forwardAsync(validation, pathList) {
  return {
    ...validation,
    async _parse(input) {
      const result = await validation._parse(input);
      if (result.issues) {
        for (const issue of result.issues) {
          let pathInput = input;
          for (const key of pathList) {
            const pathValue = pathInput[key];
            issue.input = pathValue;
            const pathItem = {
              type: "unknown",
              origin: "value",
              input: pathInput,
              key,
              value: pathValue
            };
            issue.path ? issue.path.push(pathItem) : issue.path = [pathItem];
            if (!pathValue) {
              break;
            }
            pathInput = pathValue;
          }
        }
      }
      return result;
    }
  };
}

// src/methods/getDefault/getDefault.ts
function getDefault(schema) {
  return typeof schema.default === "function" ? schema.default() : schema.default;
}

// src/methods/getDefault/getDefaultAsync.ts
async function getDefaultAsync(schema) {
  return typeof schema.default === "function" ? await schema.default() : schema.default;
}

// src/methods/getDefaults/getDefaults.ts
function getDefaults(schema) {
  if (schema.default !== void 0) {
    return getDefault(schema);
  }
  if (isOfType("object", schema)) {
    return Object.fromEntries(
      Object.entries(schema.entries).map(([key, value2]) => [
        key,
        getDefaults(value2)
      ])
    );
  }
  if (isOfType("tuple", schema)) {
    return schema.items.map(getDefaults);
  }
  return void 0;
}

// src/methods/getDefaults/getDefaultsAsync.ts
async function getDefaultsAsync(schema) {
  if (schema.default !== void 0) {
    return getDefaultAsync(schema);
  }
  if (isOfType("object", schema)) {
    return Object.fromEntries(
      await Promise.all(
        Object.entries(schema.entries).map(async ([key, value2]) => [
          key,
          await getDefaultsAsync(value2)
        ])
      )
    );
  }
  if (isOfType("tuple", schema)) {
    return Promise.all(
      schema.items.map(getDefaultsAsync)
    );
  }
  return void 0;
}

// src/methods/getFallbacks/getFallbacks.ts
function getFallbacks(schema) {
  if (schema.fallback !== void 0) {
    return getFallback(schema);
  }
  if (isOfType("object", schema)) {
    return Object.fromEntries(
      Object.entries(schema.entries).map(([key, value2]) => [
        key,
        getFallbacks(value2)
      ])
    );
  }
  if (isOfType("tuple", schema)) {
    return schema.items.map(getFallbacks);
  }
  return void 0;
}

// src/methods/getFallbacks/getFallbacksAsync.ts
async function getFallbacksAsync(schema) {
  if (schema.fallback !== void 0) {
    return getFallbackAsync(schema);
  }
  if (isOfType("object", schema)) {
    return Object.fromEntries(
      await Promise.all(
        Object.entries(schema.entries).map(async ([key, value2]) => [
          key,
          await getFallbacksAsync(value2)
        ])
      )
    );
  }
  if (isOfType("tuple", schema)) {
    return Promise.all(
      schema.items.map(getFallbacksAsync)
    );
  }
  return void 0;
}

// src/methods/is/is.ts
function is(schema, input, config) {
  return !schema._parse(input, {
    abortEarly: true,
    skipPipe: getGlobalConfig(config)?.skipPipe
  }).issues;
}

// src/schemas/any/any.ts
function any(pipe) {
  return {
    type: "any",
    expects: "any",
    async: false,
    pipe,
    _parse(input, config) {
      return pipeResult(this, input, config);
    }
  };
}

// src/schemas/any/anyAsync.ts
function anyAsync(pipe) {
  return {
    type: "any",
    expects: "any",
    async: true,
    pipe,
    async _parse(input, config) {
      return pipeResultAsync(this, input, config);
    }
  };
}

// src/schemas/array/array.ts
function array(item, arg2, arg3) {
  const [message, pipe] = defaultArgs(arg2, arg3);
  return {
    type: "array",
    expects: "Array",
    async: false,
    item,
    message,
    pipe,
    _parse(input, config) {
      if (Array.isArray(input)) {
        let typed = true;
        let issues;
        const output = [];
        for (let key = 0; key < input.length; key++) {
          const value2 = input[key];
          const result = this.item._parse(value2, config);
          if (result.issues) {
            const pathItem = {
              type: "array",
              origin: "value",
              input,
              key,
              value: value2
            };
            for (const issue of result.issues) {
              if (issue.path) {
                issue.path.unshift(pathItem);
              } else {
                issue.path = [pathItem];
              }
              issues?.push(issue);
            }
            if (!issues) {
              issues = result.issues;
            }
            if (config?.abortEarly) {
              typed = false;
              break;
            }
          }
          if (!result.typed) {
            typed = false;
          }
          output.push(result.output);
        }
        if (typed) {
          return pipeResult(this, output, config, issues);
        }
        return schemaResult(false, output, issues);
      }
      return schemaIssue(this, array, input, config);
    }
  };
}

// src/schemas/array/arrayAsync.ts
function arrayAsync(item, arg2, arg3) {
  const [message, pipe] = defaultArgs(arg2, arg3);
  return {
    type: "array",
    expects: "Array",
    async: true,
    item,
    message,
    pipe,
    async _parse(input, config) {
      if (Array.isArray(input)) {
        let typed = true;
        let issues;
        const output = [];
        await Promise.all(
          input.map(async (value2, key) => {
            if (!(config?.abortEarly && issues)) {
              const result = await this.item._parse(value2, config);
              if (!(config?.abortEarly && issues)) {
                if (result.issues) {
                  const pathItem = {
                    type: "array",
                    origin: "value",
                    input,
                    key,
                    value: value2
                  };
                  for (const issue of result.issues) {
                    if (issue.path) {
                      issue.path.unshift(pathItem);
                    } else {
                      issue.path = [pathItem];
                    }
                    issues?.push(issue);
                  }
                  if (!issues) {
                    issues = result.issues;
                  }
                  if (config?.abortEarly) {
                    typed = false;
                    throw null;
                  }
                }
                if (!result.typed) {
                  typed = false;
                }
                output[key] = result.output;
              }
            }
          })
        ).catch(() => null);
        if (typed) {
          return pipeResultAsync(
            this,
            output,
            config,
            issues
          );
        }
        return schemaResult(false, output, issues);
      }
      return schemaIssue(this, arrayAsync, input, config);
    }
  };
}

// src/schemas/bigint/bigint.ts
function bigint(arg1, arg2) {
  const [message, pipe] = defaultArgs(arg1, arg2);
  return {
    type: "bigint",
    expects: "bigint",
    async: false,
    message,
    pipe,
    _parse(input, config) {
      if (typeof input === "bigint") {
        return pipeResult(this, input, config);
      }
      return schemaIssue(this, bigint, input, config);
    }
  };
}

// src/schemas/bigint/bigintAsync.ts
function bigintAsync(arg1, arg2) {
  const [message, pipe] = defaultArgs(arg1, arg2);
  return {
    type: "bigint",
    expects: "bigint",
    async: true,
    message,
    pipe,
    async _parse(input, config) {
      if (typeof input === "bigint") {
        return pipeResultAsync(this, input, config);
      }
      return schemaIssue(this, bigintAsync, input, config);
    }
  };
}

// src/schemas/blob/blob.ts
function blob(arg1, arg2) {
  const [message, pipe] = defaultArgs(arg1, arg2);
  return {
    type: "blob",
    expects: "Blob",
    async: false,
    message,
    pipe,
    _parse(input, config) {
      if (input instanceof Blob) {
        return pipeResult(this, input, config);
      }
      return schemaIssue(this, blob, input, config);
    }
  };
}

// src/schemas/blob/blobAsync.ts
function blobAsync(arg1, arg2) {
  const [message, pipe] = defaultArgs(arg1, arg2);
  return {
    type: "blob",
    expects: "Blob",
    async: true,
    message,
    pipe,
    async _parse(input, config) {
      if (input instanceof Blob) {
        return pipeResultAsync(this, input, config);
      }
      return schemaIssue(this, blobAsync, input, config);
    }
  };
}

// src/schemas/boolean/boolean.ts
function boolean(arg1, arg2) {
  const [message, pipe] = defaultArgs(arg1, arg2);
  return {
    type: "boolean",
    expects: "boolean",
    async: false,
    message,
    pipe,
    _parse(input, config) {
      if (typeof input === "boolean") {
        return pipeResult(this, input, config);
      }
      return schemaIssue(this, boolean, input, config);
    }
  };
}

// src/schemas/boolean/booleanAsync.ts
function booleanAsync(arg1, arg2) {
  const [message, pipe] = defaultArgs(arg1, arg2);
  return {
    type: "boolean",
    expects: "boolean",
    async: true,
    message,
    pipe,
    async _parse(input, config) {
      if (typeof input === "boolean") {
        return pipeResultAsync(this, input, config);
      }
      return schemaIssue(this, booleanAsync, input, config);
    }
  };
}

// src/schemas/date/date.ts
function date(arg1, arg2) {
  const [message, pipe] = defaultArgs(arg1, arg2);
  return {
    type: "date",
    expects: "Date",
    async: false,
    message,
    pipe,
    _parse(input, config) {
      if (input instanceof Date && !isNaN(input.getTime())) {
        return pipeResult(this, input, config);
      }
      return schemaIssue(this, date, input, config);
    }
  };
}

// src/schemas/date/dateAsync.ts
function dateAsync(arg1, arg2) {
  const [message, pipe] = defaultArgs(arg1, arg2);
  return {
    type: "date",
    expects: "Date",
    async: true,
    message,
    pipe,
    async _parse(input, config) {
      if (input instanceof Date && !isNaN(input.getTime())) {
        return pipeResultAsync(this, input, config);
      }
      return schemaIssue(this, dateAsync, input, config);
    }
  };
}

// src/schemas/enum/enum.ts
function enum_(enum__, message) {
  const values = Object.values(enum__);
  return {
    type: "enum",
    expects: values.map(stringify).join(" | "),
    async: false,
    enum: enum__,
    message,
    _parse(input, config) {
      if (values.includes(input)) {
        return schemaResult(true, input);
      }
      return schemaIssue(this, enum_, input, config);
    }
  };
}

// src/schemas/enum/enumAsync.ts
function enumAsync(enum_2, message) {
  const values = Object.values(enum_2);
  return {
    type: "enum",
    expects: values.map(stringify).join(" | "),
    async: true,
    enum: enum_2,
    message,
    async _parse(input, config) {
      if (values.includes(input)) {
        return schemaResult(true, input);
      }
      return schemaIssue(this, enumAsync, input, config);
    }
  };
}

// src/schemas/instance/instance.ts
function instance(class_, arg2, arg3) {
  const [message, pipe] = defaultArgs(arg2, arg3);
  return {
    type: "instance",
    expects: class_.name,
    async: false,
    class: class_,
    message,
    pipe,
    _parse(input, config) {
      if (input instanceof this.class) {
        return pipeResult(this, input, config);
      }
      return schemaIssue(this, instance, input, config);
    }
  };
}

// src/schemas/instance/instanceAsync.ts
function instanceAsync(class_, arg2, arg3) {
  const [message, pipe] = defaultArgs(arg2, arg3);
  return {
    type: "instance",
    expects: class_.name,
    async: true,
    class: class_,
    message,
    pipe,
    async _parse(input, config) {
      if (input instanceof this.class) {
        return pipeResultAsync(this, input, config);
      }
      return schemaIssue(this, instanceAsync, input, config);
    }
  };
}

// src/schemas/intersect/utils/mergeOutputs/mergeOutputs.ts
function mergeOutputs(output1, output2) {
  if (typeof output1 === typeof output2) {
    if (output1 === output2 || output1 instanceof Date && output2 instanceof Date && +output1 === +output2) {
      return { output: output1 };
    }
    if (Array.isArray(output1) && Array.isArray(output2)) {
      if (output1.length === output2.length) {
        const array2 = [];
        for (let index = 0; index < output1.length; index++) {
          const result = mergeOutputs(output1[index], output2[index]);
          if (result.invalid) {
            return result;
          }
          array2.push(result.output);
        }
        return { output: array2 };
      }
      return { invalid: true };
    }
    if (output1 && output2 && output1.constructor === Object && output2.constructor === Object) {
      const object2 = { ...output1, ...output2 };
      for (const key in output1) {
        if (key in output2) {
          const result = mergeOutputs(output1[key], output2[key]);
          if (result.invalid) {
            return result;
          }
          object2[key] = result.output;
        }
      }
      return { output: object2 };
    }
  }
  return { invalid: true };
}

// src/schemas/intersect/intersect.ts
function intersect(options, arg2, arg3) {
  const [message, pipe] = defaultArgs(arg2, arg3);
  return {
    type: "intersect",
    expects: [...new Set(options.map((option) => option.expects))].join(" & "),
    async: false,
    options,
    message,
    pipe,
    _parse(input, config) {
      let typed = true;
      let issues;
      let output;
      const outputs = [];
      for (const schema of this.options) {
        const result = schema._parse(input, config);
        if (result.issues) {
          if (issues) {
            for (const issue of result.issues) {
              issues.push(issue);
            }
          } else {
            issues = result.issues;
          }
          if (config?.abortEarly) {
            typed = false;
            break;
          }
        }
        if (!result.typed) {
          typed = false;
        }
        outputs.push(result.output);
      }
      if (typed) {
        output = outputs[0];
        for (let index = 1; index < outputs.length; index++) {
          const result = mergeOutputs(output, outputs[index]);
          if (result.invalid) {
            return schemaIssue(this, intersect, input, config);
          }
          output = result.output;
        }
        return pipeResult(this, output, config, issues);
      }
      return schemaResult(false, output, issues);
    }
  };
}

// src/schemas/intersect/intersectAsync.ts
function intersectAsync(options, arg2, arg3) {
  const [message, pipe] = defaultArgs(arg2, arg3);
  return {
    type: "intersect",
    expects: [...new Set(options.map((option) => option.expects))].join(" & "),
    async: true,
    options,
    message,
    pipe,
    async _parse(input, config) {
      let typed = true;
      let issues;
      let output;
      const outputs = [];
      await Promise.all(
        this.options.map(async (schema) => {
          if (!(config?.abortEarly && issues)) {
            const result = await schema._parse(input, config);
            if (!(config?.abortEarly && issues)) {
              if (result.issues) {
                if (issues) {
                  for (const issue of result.issues) {
                    issues.push(issue);
                  }
                } else {
                  issues = result.issues;
                }
                if (config?.abortEarly) {
                  typed = false;
                  throw null;
                }
              }
              if (!result.typed) {
                typed = false;
              }
              outputs.push(result.output);
            }
          }
        })
      ).catch(() => null);
      if (typed) {
        output = outputs[0];
        for (let index = 1; index < outputs.length; index++) {
          const result = mergeOutputs(output, outputs[index]);
          if (result.invalid) {
            return schemaIssue(this, intersectAsync, input, config);
          }
          output = result.output;
        }
        return pipeResultAsync(this, output, config, issues);
      }
      return schemaResult(false, output, issues);
    }
  };
}

// src/schemas/lazy/lazy.ts
function lazy(getter) {
  return {
    type: "lazy",
    expects: "unknown",
    async: false,
    getter,
    _parse(input, config) {
      return this.getter(input)._parse(input, config);
    }
  };
}

// src/schemas/lazy/lazyAsync.ts
function lazyAsync(getter) {
  return {
    type: "lazy",
    expects: "unknown",
    async: true,
    getter,
    async _parse(input, config) {
      return (await this.getter(input))._parse(input, config);
    }
  };
}

// src/schemas/literal/literal.ts
function literal(literal_, message) {
  return {
    type: "literal",
    expects: stringify(literal_),
    async: false,
    literal: literal_,
    message,
    _parse(input, config) {
      if (input === this.literal) {
        return schemaResult(true, input);
      }
      return schemaIssue(this, literal, input, config);
    }
  };
}

// src/schemas/literal/literalAsync.ts
function literalAsync(literal2, message) {
  return {
    type: "literal",
    expects: stringify(literal2),
    async: true,
    literal: literal2,
    message,
    async _parse(input, config) {
      if (input === this.literal) {
        return schemaResult(true, input);
      }
      return schemaIssue(this, literalAsync, input, config);
    }
  };
}

// src/schemas/map/map.ts
function map(key, value2, arg3, arg4) {
  const [message, pipe] = defaultArgs(arg3, arg4);
  return {
    type: "map",
    expects: "Map",
    async: false,
    key,
    value: value2,
    message,
    pipe,
    _parse(input, config) {
      if (input instanceof Map) {
        let typed = true;
        let issues;
        const output = /* @__PURE__ */ new Map();
        for (const [inputKey, inputValue] of input.entries()) {
          let pathItem;
          const keyResult = this.key._parse(inputKey, config);
          if (keyResult.issues) {
            pathItem = {
              type: "map",
              origin: "key",
              input,
              key: inputKey,
              value: inputValue
            };
            for (const issue of keyResult.issues) {
              if (issue.path) {
                issue.path.unshift(pathItem);
              } else {
                issue.path = [pathItem];
              }
              issues?.push(issue);
            }
            if (!issues) {
              issues = keyResult.issues;
            }
            if (config?.abortEarly) {
              typed = false;
              break;
            }
          }
          const valueResult = this.value._parse(inputValue, config);
          if (valueResult.issues) {
            pathItem = pathItem ?? {
              type: "map",
              origin: "value",
              input,
              key: inputKey,
              value: inputValue
            };
            for (const issue of valueResult.issues) {
              if (issue.path) {
                issue.path.unshift(pathItem);
              } else {
                issue.path = [pathItem];
              }
              issues?.push(issue);
            }
            if (!issues) {
              issues = valueResult.issues;
            }
            if (config?.abortEarly) {
              typed = false;
              break;
            }
          }
          if (!keyResult.typed || !valueResult.typed) {
            typed = false;
          }
          output.set(keyResult.output, valueResult.output);
        }
        if (typed) {
          return pipeResult(this, output, config, issues);
        }
        return schemaResult(false, output, issues);
      }
      return schemaIssue(this, map, input, config);
    }
  };
}

// src/schemas/map/mapAsync.ts
function mapAsync(key, value2, arg3, arg4) {
  const [message, pipe] = defaultArgs(arg3, arg4);
  return {
    type: "map",
    expects: "Map",
    async: true,
    key,
    value: value2,
    message,
    pipe,
    async _parse(input, config) {
      if (input instanceof Map) {
        let typed = true;
        let issues;
        const output = /* @__PURE__ */ new Map();
        await Promise.all(
          Array.from(input.entries()).map(async ([inputKey, inputValue]) => {
            let pathItem;
            const [keyResult, valueResult] = await Promise.all(
              [
                { schema: this.key, value: inputKey, origin: "key" },
                { schema: this.value, value: inputValue, origin: "value" }
              ].map(async ({ schema, value: value3, origin }) => {
                if (!(config?.abortEarly && issues)) {
                  const result = await schema._parse(value3, config);
                  if (!(config?.abortEarly && issues)) {
                    if (result.issues) {
                      pathItem = pathItem ?? {
                        type: "map",
                        origin,
                        input,
                        key: inputKey,
                        value: inputValue
                      };
                      for (const issue of result.issues) {
                        if (issue.path) {
                          issue.path.unshift(pathItem);
                        } else {
                          issue.path = [pathItem];
                        }
                        issues?.push(issue);
                      }
                      if (!issues) {
                        issues = result.issues;
                      }
                      if (config?.abortEarly) {
                        throw null;
                      }
                    }
                    return result;
                  }
                }
              })
            ).catch(() => []);
            if (!keyResult?.typed || !valueResult?.typed) {
              typed = false;
            }
            if (keyResult && valueResult) {
              output.set(keyResult.output, valueResult.output);
            }
          })
        );
        if (typed) {
          return pipeResultAsync(this, output, config, issues);
        }
        return schemaResult(false, output, issues);
      }
      return schemaIssue(this, mapAsync, input, config);
    }
  };
}

// src/schemas/nan/nan.ts
function nan(message) {
  return {
    type: "nan",
    expects: "NaN",
    async: false,
    message,
    _parse(input, config) {
      if (Number.isNaN(input)) {
        return schemaResult(true, input);
      }
      return schemaIssue(this, nan, input, config);
    }
  };
}

// src/schemas/nan/nanAsync.ts
function nanAsync(message) {
  return {
    type: "nan",
    expects: "NaN",
    async: true,
    message,
    async _parse(input, config) {
      if (Number.isNaN(input)) {
        return schemaResult(true, input);
      }
      return schemaIssue(this, nanAsync, input, config);
    }
  };
}

// src/schemas/never/never.ts
function never(message) {
  return {
    type: "never",
    expects: "never",
    async: false,
    message,
    _parse(input, config) {
      return schemaIssue(this, never, input, config);
    }
  };
}

// src/schemas/never/neverAsync.ts
function neverAsync(message) {
  return {
    type: "never",
    expects: "never",
    async: true,
    message,
    async _parse(input, config) {
      return schemaIssue(this, neverAsync, input, config);
    }
  };
}

// src/schemas/nonNullable/nonNullable.ts
function nonNullable(wrapped, message) {
  return {
    type: "non_nullable",
    expects: "!null",
    async: false,
    wrapped,
    message,
    _parse(input, config) {
      if (input === null) {
        return schemaIssue(this, nonNullable, input, config);
      }
      return this.wrapped._parse(input, config);
    }
  };
}

// src/schemas/nonNullable/nonNullableAsync.ts
function nonNullableAsync(wrapped, message) {
  return {
    type: "non_nullable",
    expects: "!null",
    async: true,
    wrapped,
    message,
    async _parse(input, config) {
      if (input === null) {
        return schemaIssue(this, nonNullableAsync, input, config);
      }
      return this.wrapped._parse(input, config);
    }
  };
}

// src/schemas/nonNullish/nonNullish.ts
function nonNullish(wrapped, message) {
  return {
    type: "non_nullish",
    expects: "!null & !undefined",
    async: false,
    wrapped,
    message,
    _parse(input, config) {
      if (input === null || input === void 0) {
        return schemaIssue(this, nonNullish, input, config);
      }
      return this.wrapped._parse(input, config);
    }
  };
}

// src/schemas/nonNullish/nonNullishAsync.ts
function nonNullishAsync(wrapped, message) {
  return {
    type: "non_nullish",
    expects: "!null & !undefined",
    async: true,
    wrapped,
    message,
    async _parse(input, config) {
      if (input === null || input === void 0) {
        return schemaIssue(this, nonNullishAsync, input, config);
      }
      return this.wrapped._parse(input, config);
    }
  };
}

// src/schemas/nonOptional/nonOptional.ts
function nonOptional(wrapped, message) {
  return {
    type: "non_optional",
    expects: "!undefined",
    async: false,
    wrapped,
    message,
    _parse(input, config) {
      if (input === void 0) {
        return schemaIssue(this, nonOptional, input, config);
      }
      return this.wrapped._parse(input, config);
    }
  };
}

// src/schemas/nonOptional/nonOptionalAsync.ts
function nonOptionalAsync(wrapped, message) {
  return {
    type: "non_optional",
    expects: "!undefined",
    async: true,
    wrapped,
    message,
    async _parse(input, config) {
      if (input === void 0) {
        return schemaIssue(this, nonOptionalAsync, input, config);
      }
      return this.wrapped._parse(input, config);
    }
  };
}

// src/schemas/nullable/nullable.ts
function nullable(wrapped, default_) {
  return {
    type: "nullable",
    expects: `${wrapped.expects} | null`,
    async: false,
    wrapped,
    default: default_,
    _parse(input, config) {
      if (input === null) {
        const override = getDefault(this);
        if (override === void 0) {
          return schemaResult(true, input);
        }
        input = override;
      }
      return this.wrapped._parse(input, config);
    }
  };
}

// src/schemas/nullable/nullableAsync.ts
function nullableAsync(wrapped, default_) {
  return {
    type: "nullable",
    expects: `${wrapped.expects} | null`,
    async: true,
    wrapped,
    default: default_,
    async _parse(input, config) {
      if (input === null) {
        const override = await getDefaultAsync(this);
        if (override === void 0) {
          return schemaResult(true, input);
        }
        input = override;
      }
      return this.wrapped._parse(input, config);
    }
  };
}

// src/schemas/nullish/nullish.ts
function nullish(wrapped, default_) {
  return {
    type: "nullish",
    expects: `${wrapped.expects} | null | undefined`,
    async: false,
    wrapped,
    default: default_,
    _parse(input, config) {
      if (input === null || input === void 0) {
        const override = getDefault(this);
        if (override === void 0) {
          return schemaResult(true, input);
        }
        input = override;
      }
      return this.wrapped._parse(input, config);
    }
  };
}

// src/schemas/nullish/nullishAsync.ts
function nullishAsync(wrapped, default_) {
  return {
    type: "nullish",
    expects: `${wrapped.expects} | null | undefined`,
    async: true,
    wrapped,
    default: default_,
    async _parse(input, config) {
      if (input === null || input === void 0) {
        const override = await getDefaultAsync(this);
        if (override === void 0) {
          return schemaResult(true, input);
        }
        input = override;
      }
      return this.wrapped._parse(input, config);
    }
  };
}

// src/schemas/null/null.ts
function null_(message) {
  return {
    type: "null",
    expects: "null",
    async: false,
    message,
    _parse(input, config) {
      if (input === null) {
        return schemaResult(true, input);
      }
      return schemaIssue(this, null_, input, config);
    }
  };
}

// src/schemas/null/nullAsync.ts
function nullAsync(message) {
  return {
    type: "null",
    expects: "null",
    async: true,
    message,
    async _parse(input, config) {
      if (input === null) {
        return schemaResult(true, input);
      }
      return schemaIssue(this, nullAsync, input, config);
    }
  };
}

// src/schemas/number/number.ts
function number(arg1, arg2) {
  const [message, pipe] = defaultArgs(arg1, arg2);
  return {
    type: "number",
    expects: "number",
    async: false,
    message,
    pipe,
    _parse(input, config) {
      if (typeof input === "number" && !isNaN(input)) {
        return pipeResult(this, input, config);
      }
      return schemaIssue(this, number, input, config);
    }
  };
}

// src/schemas/number/numberAsync.ts
function numberAsync(arg1, arg2) {
  const [message, pipe] = defaultArgs(arg1, arg2);
  return {
    type: "number",
    expects: "number",
    async: true,
    message,
    pipe,
    async _parse(input, config) {
      if (typeof input === "number" && !isNaN(input)) {
        return pipeResultAsync(this, input, config);
      }
      return schemaIssue(this, numberAsync, input, config);
    }
  };
}

// src/schemas/object/object.ts
function object(entries, arg2, arg3, arg4) {
  const [rest, message, pipe] = restAndDefaultArgs(arg2, arg3, arg4);
  let cachedEntries;
  return {
    type: "object",
    expects: "Object",
    async: false,
    entries,
    rest,
    message,
    pipe,
    _parse(input, config) {
      if (input && typeof input === "object") {
        cachedEntries = cachedEntries ?? Object.entries(this.entries);
        let typed = true;
        let issues;
        const output = {};
        for (const [key, schema] of cachedEntries) {
          const value2 = input[key];
          const result = schema._parse(value2, config);
          if (result.issues) {
            const pathItem = {
              type: "object",
              origin: "value",
              input,
              key,
              value: value2
            };
            for (const issue of result.issues) {
              if (issue.path) {
                issue.path.unshift(pathItem);
              } else {
                issue.path = [pathItem];
              }
              issues?.push(issue);
            }
            if (!issues) {
              issues = result.issues;
            }
            if (config?.abortEarly) {
              typed = false;
              break;
            }
          }
          if (!result.typed) {
            typed = false;
          }
          if (result.output !== void 0 || key in input) {
            output[key] = result.output;
          }
        }
        if (this.rest && !(config?.abortEarly && issues)) {
          for (const key in input) {
            if (!(key in this.entries)) {
              const value2 = input[key];
              const result = this.rest._parse(value2, config);
              if (result.issues) {
                const pathItem = {
                  type: "object",
                  origin: "value",
                  input,
                  key,
                  value: value2
                };
                for (const issue of result.issues) {
                  if (issue.path) {
                    issue.path.unshift(pathItem);
                  } else {
                    issue.path = [pathItem];
                  }
                  issues?.push(issue);
                }
                if (!issues) {
                  issues = result.issues;
                }
                if (config?.abortEarly) {
                  typed = false;
                  break;
                }
              }
              if (!result.typed) {
                typed = false;
              }
              output[key] = result.output;
            }
          }
        }
        if (typed) {
          return pipeResult(
            this,
            output,
            config,
            issues
          );
        }
        return schemaResult(false, output, issues);
      }
      return schemaIssue(this, object, input, config);
    }
  };
}

// src/schemas/object/objectAsync.ts
function objectAsync(entries, arg2, arg3, arg4) {
  const [rest, message, pipe] = restAndDefaultArgs(arg2, arg3, arg4);
  let cachedEntries;
  return {
    type: "object",
    expects: "Object",
    async: true,
    entries,
    rest,
    message,
    pipe,
    async _parse(input, config) {
      if (input && typeof input === "object") {
        cachedEntries = cachedEntries ?? Object.entries(this.entries);
        let typed = true;
        let issues;
        const output = {};
        await Promise.all([
          Promise.all(
            cachedEntries.map(async ([key, schema]) => {
              if (!(config?.abortEarly && issues)) {
                const value2 = input[key];
                const result = await schema._parse(value2, config);
                if (!(config?.abortEarly && issues)) {
                  if (result.issues) {
                    const pathItem = {
                      type: "object",
                      origin: "value",
                      input,
                      key,
                      value: value2
                    };
                    for (const issue of result.issues) {
                      if (issue.path) {
                        issue.path.unshift(pathItem);
                      } else {
                        issue.path = [pathItem];
                      }
                      issues?.push(issue);
                    }
                    if (!issues) {
                      issues = result.issues;
                    }
                    if (config?.abortEarly) {
                      typed = false;
                      throw null;
                    }
                  }
                  if (!result.typed) {
                    typed = false;
                  }
                  if (result.output !== void 0 || key in input) {
                    output[key] = result.output;
                  }
                }
              }
            })
          ),
          this.rest && Promise.all(
            Object.entries(input).map(async ([key, value2]) => {
              if (!(config?.abortEarly && issues)) {
                if (!(key in this.entries)) {
                  const result = await this.rest._parse(value2, config);
                  if (!(config?.abortEarly && issues)) {
                    if (result.issues) {
                      const pathItem = {
                        type: "object",
                        origin: "value",
                        input,
                        key,
                        value: value2
                      };
                      for (const issue of result.issues) {
                        if (issue.path) {
                          issue.path.unshift(pathItem);
                        } else {
                          issue.path = [pathItem];
                        }
                        issues?.push(issue);
                      }
                      if (!issues) {
                        issues = result.issues;
                      }
                      if (config?.abortEarly) {
                        typed = false;
                        throw null;
                      }
                    }
                    if (!result.typed) {
                      typed = false;
                    }
                    output[key] = result.output;
                  }
                }
              }
            })
          )
        ]).catch(() => null);
        if (typed) {
          return pipeResultAsync(
            this,
            output,
            config,
            issues
          );
        }
        return schemaResult(false, output, issues);
      }
      return schemaIssue(this, objectAsync, input, config);
    }
  };
}

// src/schemas/optional/optional.ts
function optional(wrapped, default_) {
  return {
    type: "optional",
    expects: `${wrapped.expects} | undefined`,
    async: false,
    wrapped,
    default: default_,
    _parse(input, config) {
      if (input === void 0) {
        const override = getDefault(this);
        if (override === void 0) {
          return schemaResult(true, input);
        }
        input = override;
      }
      return this.wrapped._parse(input, config);
    }
  };
}

// src/schemas/optional/optionalAsync.ts
function optionalAsync(wrapped, default_) {
  return {
    type: "optional",
    expects: `${wrapped.expects} | undefined`,
    async: true,
    wrapped,
    default: default_,
    async _parse(input, config) {
      if (input === void 0) {
        const override = await getDefaultAsync(this);
        if (override === void 0) {
          return schemaResult(true, input);
        }
        input = override;
      }
      return this.wrapped._parse(input, config);
    }
  };
}

// src/schemas/picklist/picklist.ts
function picklist(options, message) {
  return {
    type: "picklist",
    expects: options.map(stringify).join(" | "),
    async: false,
    options,
    message,
    _parse(input, config) {
      if (this.options.includes(input)) {
        return schemaResult(true, input);
      }
      return schemaIssue(this, picklist, input, config);
    }
  };
}

// src/schemas/picklist/picklistAsync.ts
function picklistAsync(options, message) {
  return {
    type: "picklist",
    expects: options.map(stringify).join(" | "),
    async: true,
    options,
    message,
    async _parse(input, config) {
      if (this.options.includes(input)) {
        return schemaResult(true, input);
      }
      return schemaIssue(this, picklistAsync, input, config);
    }
  };
}

// src/schemas/string/string.ts
function string(arg1, arg2) {
  const [message, pipe] = defaultArgs(arg1, arg2);
  return {
    type: "string",
    expects: "string",
    async: false,
    message,
    pipe,
    _parse(input, config) {
      if (typeof input === "string") {
        return pipeResult(this, input, config);
      }
      return schemaIssue(this, string, input, config);
    }
  };
}

// src/schemas/string/stringAsync.ts
function stringAsync(arg1, arg2) {
  const [message, pipe] = defaultArgs(arg1, arg2);
  return {
    type: "string",
    expects: "string",
    async: true,
    message,
    pipe,
    async _parse(input, config) {
      if (typeof input === "string") {
        return pipeResultAsync(this, input, config);
      }
      return schemaIssue(this, stringAsync, input, config);
    }
  };
}

// src/schemas/record/utils/recordArgs/recordArgs.ts
function recordArgs(arg1, arg2, arg3, arg4) {
  if (typeof arg2 === "object" && !Array.isArray(arg2)) {
    const [message2, pipe2] = defaultArgs(arg3, arg4);
    return [arg1, arg2, message2, pipe2];
  }
  const [message, pipe] = defaultArgs(
    arg2,
    arg3
  );
  return [string(), arg1, message, pipe];
}

// src/schemas/record/values.ts
var BLOCKED_KEYS = ["__proto__", "prototype", "constructor"];

// src/schemas/record/record.ts
function record(arg1, arg2, arg3, arg4) {
  const [key, value2, message, pipe] = recordArgs(arg1, arg2, arg3, arg4);
  return {
    type: "record",
    expects: "Object",
    async: false,
    key,
    value: value2,
    message,
    pipe,
    _parse(input, config) {
      if (input && typeof input === "object") {
        let typed = true;
        let issues;
        const output = {};
        for (const [inputKey, inputValue] of Object.entries(input)) {
          if (!BLOCKED_KEYS.includes(inputKey)) {
            let pathItem;
            const keyResult = this.key._parse(inputKey, config);
            if (keyResult.issues) {
              pathItem = {
                type: "record",
                origin: "key",
                input,
                key: inputKey,
                value: inputValue
              };
              for (const issue of keyResult.issues) {
                issue.path = [pathItem];
                issues?.push(issue);
              }
              if (!issues) {
                issues = keyResult.issues;
              }
              if (config?.abortEarly) {
                typed = false;
                break;
              }
            }
            const valueResult = this.value._parse(inputValue, config);
            if (valueResult.issues) {
              pathItem = pathItem ?? {
                type: "record",
                origin: "value",
                input,
                key: inputKey,
                value: inputValue
              };
              for (const issue of valueResult.issues) {
                if (issue.path) {
                  issue.path.unshift(pathItem);
                } else {
                  issue.path = [pathItem];
                }
                issues?.push(issue);
              }
              if (!issues) {
                issues = valueResult.issues;
              }
              if (config?.abortEarly) {
                typed = false;
                break;
              }
            }
            if (!keyResult.typed || !valueResult.typed) {
              typed = false;
            }
            if (keyResult.typed) {
              output[keyResult.output] = valueResult.output;
            }
          }
        }
        if (typed) {
          return pipeResult(
            this,
            output,
            config,
            issues
          );
        }
        return schemaResult(false, output, issues);
      }
      return schemaIssue(this, record, input, config);
    }
  };
}

// src/schemas/record/recordAsync.ts
function recordAsync(arg1, arg2, arg3, arg4) {
  const [key, value2, message, pipe] = recordArgs(arg1, arg2, arg3, arg4);
  return {
    type: "record",
    expects: "Object",
    async: true,
    key,
    value: value2,
    message,
    pipe,
    async _parse(input, config) {
      if (input && typeof input === "object") {
        let typed = true;
        let issues;
        const output = {};
        await Promise.all(
          // Note: `Object.entries(...)` converts each key to a string
          Object.entries(input).map(async ([inputKey, inputValue]) => {
            if (!BLOCKED_KEYS.includes(inputKey)) {
              let pathItem;
              const [keyResult, valueResult] = await Promise.all(
                [
                  { schema: this.key, value: inputKey, origin: "key" },
                  { schema: this.value, value: inputValue, origin: "value" }
                ].map(async ({ schema, value: value3, origin }) => {
                  if (!(config?.abortEarly && issues)) {
                    const result = await schema._parse(value3, config);
                    if (!(config?.abortEarly && issues)) {
                      if (result.issues) {
                        pathItem = pathItem ?? {
                          type: "record",
                          origin,
                          input,
                          key: inputKey,
                          value: inputValue
                        };
                        for (const issue of result.issues) {
                          if (issue.path) {
                            issue.path.unshift(pathItem);
                          } else {
                            issue.path = [pathItem];
                          }
                          issues?.push(issue);
                        }
                        if (!issues) {
                          issues = result.issues;
                        }
                        if (config?.abortEarly) {
                          throw null;
                        }
                      }
                      return result;
                    }
                  }
                })
              ).catch(() => []);
              if (!keyResult?.typed || !valueResult?.typed) {
                typed = false;
              }
              if (keyResult?.typed && valueResult) {
                output[keyResult.output] = valueResult.output;
              }
            }
          })
        );
        if (typed) {
          return pipeResultAsync(
            this,
            output,
            config,
            issues
          );
        }
        return schemaResult(false, output, issues);
      }
      return schemaIssue(this, recordAsync, input, config);
    }
  };
}

// src/schemas/set/set.ts
function set(value2, arg2, arg3) {
  const [message, pipe] = defaultArgs(arg2, arg3);
  return {
    type: "set",
    expects: "Set",
    async: false,
    value: value2,
    message,
    pipe,
    _parse(input, config) {
      if (input instanceof Set) {
        let key = 0;
        let typed = true;
        let issues;
        const output = /* @__PURE__ */ new Set();
        for (const inputValue of input) {
          const result = this.value._parse(inputValue, config);
          if (result.issues) {
            const pathItem = {
              type: "set",
              origin: "value",
              input,
              key,
              value: inputValue
            };
            for (const issue of result.issues) {
              if (issue.path) {
                issue.path.unshift(pathItem);
              } else {
                issue.path = [pathItem];
              }
              issues?.push(issue);
            }
            if (!issues) {
              issues = result.issues;
            }
            if (config?.abortEarly) {
              typed = false;
              break;
            }
          }
          if (!result.typed) {
            typed = false;
          }
          output.add(result.output);
          key++;
        }
        if (typed) {
          return pipeResult(this, output, config, issues);
        }
        return schemaResult(false, output, issues);
      }
      return schemaIssue(this, set, input, config);
    }
  };
}

// src/schemas/set/setAsync.ts
function setAsync(value2, arg2, arg3) {
  const [message, pipe] = defaultArgs(arg2, arg3);
  return {
    type: "set",
    expects: "Set",
    async: true,
    value: value2,
    message,
    pipe,
    async _parse(input, config) {
      if (input instanceof Set) {
        let typed = true;
        let issues;
        const output = /* @__PURE__ */ new Set();
        await Promise.all(
          Array.from(input.values()).map(async (inputValue, key) => {
            if (!(config?.abortEarly && issues)) {
              const result = await this.value._parse(inputValue, config);
              if (!(config?.abortEarly && issues)) {
                if (result.issues) {
                  const pathItem = {
                    type: "set",
                    origin: "value",
                    input,
                    key,
                    value: inputValue
                  };
                  for (const issue of result.issues) {
                    if (issue.path) {
                      issue.path.unshift(pathItem);
                    } else {
                      issue.path = [pathItem];
                    }
                    issues?.push(issue);
                  }
                  if (!issues) {
                    issues = result.issues;
                  }
                  if (config?.abortEarly) {
                    typed = false;
                    throw null;
                  }
                }
                if (!result.typed) {
                  typed = false;
                }
                output.add(result.output);
              }
            }
          })
        ).catch(() => null);
        if (typed) {
          return pipeResultAsync(this, output, config, issues);
        }
        return schemaResult(false, output, issues);
      }
      return schemaIssue(this, setAsync, input, config);
    }
  };
}

// src/schemas/special/special.ts
function special(check, arg2, arg3) {
  const [message, pipe] = defaultArgs(arg2, arg3);
  return {
    type: "special",
    expects: "unknown",
    async: false,
    check,
    message,
    pipe,
    _parse(input, config) {
      if (this.check(input)) {
        return pipeResult(this, input, config);
      }
      return schemaIssue(this, special, input, config);
    }
  };
}

// src/schemas/special/specialAsync.ts
function specialAsync(check, arg2, arg3) {
  const [message, pipe] = defaultArgs(arg2, arg3);
  return {
    type: "special",
    expects: "unknown",
    async: true,
    check,
    message,
    pipe,
    async _parse(input, config) {
      if (await this.check(input)) {
        return pipeResultAsync(this, input, config);
      }
      return schemaIssue(this, specialAsync, input, config);
    }
  };
}

// src/schemas/symbol/symbol.ts
function symbol(message) {
  return {
    type: "symbol",
    expects: "symbol",
    async: false,
    message,
    _parse(input, config) {
      if (typeof input === "symbol") {
        return schemaResult(true, input);
      }
      return schemaIssue(this, symbol, input, config);
    }
  };
}

// src/schemas/symbol/symbolAsync.ts
function symbolAsync(message) {
  return {
    type: "symbol",
    expects: "symbol",
    async: true,
    message,
    async _parse(input, config) {
      if (typeof input === "symbol") {
        return schemaResult(true, input);
      }
      return schemaIssue(this, symbolAsync, input, config);
    }
  };
}

// src/schemas/tuple/tuple.ts
function tuple(items, arg2, arg3, arg4) {
  const [rest, message, pipe] = restAndDefaultArgs(arg2, arg3, arg4);
  return {
    type: "tuple",
    expects: "Array",
    async: false,
    items,
    rest,
    message,
    pipe,
    _parse(input, config) {
      if (Array.isArray(input)) {
        let typed = true;
        let issues;
        const output = [];
        for (let key = 0; key < this.items.length; key++) {
          const value2 = input[key];
          const result = this.items[key]._parse(value2, config);
          if (result.issues) {
            const pathItem = {
              type: "tuple",
              origin: "value",
              input,
              key,
              value: value2
            };
            for (const issue of result.issues) {
              if (issue.path) {
                issue.path.unshift(pathItem);
              } else {
                issue.path = [pathItem];
              }
              issues?.push(issue);
            }
            if (!issues) {
              issues = result.issues;
            }
            if (config?.abortEarly) {
              typed = false;
              break;
            }
          }
          if (!result.typed) {
            typed = false;
          }
          output[key] = result.output;
        }
        if (this.rest && !(config?.abortEarly && issues)) {
          for (let key = this.items.length; key < input.length; key++) {
            const value2 = input[key];
            const result = this.rest._parse(value2, config);
            if (result.issues) {
              const pathItem = {
                type: "tuple",
                origin: "value",
                input,
                key,
                value: value2
              };
              for (const issue of result.issues) {
                if (issue.path) {
                  issue.path.unshift(pathItem);
                } else {
                  issue.path = [pathItem];
                }
                issues?.push(issue);
              }
              if (!issues) {
                issues = result.issues;
              }
              if (config?.abortEarly) {
                typed = false;
                break;
              }
            }
            if (!result.typed) {
              typed = false;
            }
            output[key] = result.output;
          }
        }
        if (typed) {
          return pipeResult(
            this,
            output,
            config,
            issues
          );
        }
        return schemaResult(false, output, issues);
      }
      return schemaIssue(this, tuple, input, config);
    }
  };
}

// src/schemas/tuple/tupleAsync.ts
function tupleAsync(items, arg2, arg3, arg4) {
  const [rest, message, pipe] = restAndDefaultArgs(arg2, arg3, arg4);
  return {
    type: "tuple",
    expects: "Array",
    async: true,
    items,
    rest,
    message,
    pipe,
    async _parse(input, config) {
      if (Array.isArray(input)) {
        let typed = true;
        let issues;
        const output = [];
        await Promise.all([
          // Parse schema of each tuple item
          Promise.all(
            this.items.map(async (schema, key) => {
              if (!(config?.abortEarly && issues)) {
                const value2 = input[key];
                const result = await schema._parse(value2, config);
                if (!(config?.abortEarly && issues)) {
                  if (result.issues) {
                    const pathItem = {
                      type: "tuple",
                      origin: "value",
                      input,
                      key,
                      value: value2
                    };
                    for (const issue of result.issues) {
                      if (issue.path) {
                        issue.path.unshift(pathItem);
                      } else {
                        issue.path = [pathItem];
                      }
                      issues?.push(issue);
                    }
                    if (!issues) {
                      issues = result.issues;
                    }
                    if (config?.abortEarly) {
                      typed = false;
                      throw null;
                    }
                  }
                  if (!result.typed) {
                    typed = false;
                  }
                  output[key] = result.output;
                }
              }
            })
          ),
          // If necessary parse schema of each rest item
          this.rest && Promise.all(
            input.slice(this.items.length).map(async (value2, index) => {
              if (!(config?.abortEarly && issues)) {
                const key = this.items.length + index;
                const result = await this.rest._parse(value2, config);
                if (!(config?.abortEarly && issues)) {
                  if (result.issues) {
                    const pathItem = {
                      type: "tuple",
                      origin: "value",
                      input,
                      key,
                      value: value2
                    };
                    for (const issue of result.issues) {
                      if (issue.path) {
                        issue.path.unshift(pathItem);
                      } else {
                        issue.path = [pathItem];
                      }
                      issues?.push(issue);
                    }
                    if (!issues) {
                      issues = result.issues;
                    }
                    if (config?.abortEarly) {
                      typed = false;
                      throw null;
                    }
                  }
                  if (!result.typed) {
                    typed = false;
                  }
                  output[key] = result.output;
                }
              }
            })
          )
        ]).catch(() => null);
        if (typed) {
          return pipeResultAsync(
            this,
            output,
            config,
            issues
          );
        }
        return schemaResult(false, output, issues);
      }
      return schemaIssue(this, tupleAsync, input, config);
    }
  };
}

// src/schemas/undefined/undefined.ts
function undefined_(message) {
  return {
    type: "undefined",
    expects: "undefined",
    async: false,
    message,
    _parse(input, config) {
      if (input === void 0) {
        return schemaResult(true, input);
      }
      return schemaIssue(this, undefined_, input, config);
    }
  };
}

// src/schemas/undefined/undefinedAsync.ts
function undefinedAsync(message) {
  return {
    type: "undefined",
    expects: "undefined",
    async: true,
    message,
    async _parse(input, config) {
      if (input === void 0) {
        return schemaResult(true, input);
      }
      return schemaIssue(this, undefinedAsync, input, config);
    }
  };
}

// src/schemas/union/utils/subissues/subissues.ts
function subissues(results) {
  let issues;
  if (results) {
    for (const result of results) {
      if (issues) {
        for (const issue of result.issues) {
          issues.push(issue);
        }
      } else {
        issues = result.issues;
      }
    }
  }
  return issues;
}

// src/schemas/union/union.ts
function union(options, arg2, arg3) {
  const [message, pipe] = defaultArgs(arg2, arg3);
  return {
    type: "union",
    expects: [...new Set(options.map((option) => option.expects))].join(" | "),
    async: false,
    options,
    message,
    pipe,
    _parse(input, config) {
      let validResult;
      let untypedResults;
      let typedResults;
      for (const schema of this.options) {
        const result = schema._parse(input, config);
        if (result.typed) {
          if (!result.issues) {
            validResult = result;
            break;
          } else {
            typedResults ? typedResults.push(result) : typedResults = [result];
          }
        } else {
          untypedResults ? untypedResults.push(result) : untypedResults = [result];
        }
      }
      if (validResult) {
        return pipeResult(this, validResult.output, config);
      }
      if (typedResults?.length) {
        const firstResult = typedResults[0];
        return pipeResult(
          this,
          firstResult.output,
          config,
          // Hint: If there is more than one typed result, we use a general
          // union issue with subissues because the issues could contradict
          // each other.
          typedResults.length === 1 ? firstResult.issues : schemaIssue(this, union, input, config, {
            reason: "union",
            issues: subissues(typedResults)
          }).issues
        );
      }
      if (untypedResults?.length === 1) {
        return untypedResults[0];
      }
      return schemaIssue(this, union, input, config, {
        issues: subissues(untypedResults)
      });
    }
  };
}

// src/schemas/union/unionAsync.ts
function unionAsync(options, arg2, arg3) {
  const [message, pipe] = defaultArgs(arg2, arg3);
  return {
    type: "union",
    expects: [...new Set(options.map((option) => option.expects))].join(" | "),
    async: true,
    options,
    message,
    pipe,
    async _parse(input, config) {
      let validResult;
      let untypedResults;
      let typedResults;
      for (const schema of this.options) {
        const result = await schema._parse(input, config);
        if (result.typed) {
          if (!result.issues) {
            validResult = result;
            break;
          } else {
            typedResults ? typedResults.push(result) : typedResults = [result];
          }
        } else {
          untypedResults ? untypedResults.push(result) : untypedResults = [result];
        }
      }
      if (validResult) {
        return pipeResultAsync(this, validResult.output, config);
      }
      if (typedResults?.length) {
        const firstResult = typedResults[0];
        return pipeResultAsync(
          this,
          firstResult.output,
          config,
          // Hint: If there is more than one typed result, we use a general
          // union issue with subissues because the issues could contradict
          // each other.
          typedResults.length === 1 ? firstResult.issues : schemaIssue(this, unionAsync, input, config, {
            reason: "union",
            issues: subissues(typedResults)
          }).issues
        );
      }
      if (untypedResults?.length === 1) {
        return untypedResults[0];
      }
      return schemaIssue(this, unionAsync, input, config, {
        issues: subissues(untypedResults)
      });
    }
  };
}

// src/schemas/unknown/unknown.ts
function unknown(pipe) {
  return {
    type: "unknown",
    expects: "unknown",
    async: false,
    pipe,
    _parse(input, config) {
      return pipeResult(this, input, config);
    }
  };
}

// src/schemas/unknown/unknownAsync.ts
function unknownAsync(pipe) {
  return {
    type: "unknown",
    expects: "unknown",
    async: true,
    pipe,
    async _parse(input, config) {
      return pipeResultAsync(this, input, config);
    }
  };
}

// src/schemas/variant/variant.ts
function variant(key, options, arg3, arg4) {
  const [message, pipe] = defaultArgs(arg3, arg4);
  let cachedExpectedKey;
  return {
    type: "variant",
    expects: "Object",
    async: false,
    key,
    options,
    message,
    pipe,
    _parse(input, config) {
      if (input && typeof input === "object") {
        if (this.key in input || !cachedExpectedKey) {
          let expectedKey;
          let variantResult;
          const parseOptions = (options2) => {
            for (const schema of options2) {
              if (schema.type === "object") {
                const keySchema = schema.entries[this.key];
                const keyResult = keySchema._parse(
                  input[this.key],
                  config
                );
                if (!cachedExpectedKey) {
                  expectedKey ? expectedKey.push(keySchema.expects) : expectedKey = [keySchema.expects];
                }
                if (!keyResult.issues) {
                  const dataResult = schema._parse(input, config);
                  if (!dataResult.issues) {
                    variantResult = dataResult;
                    break;
                  }
                  if (!variantResult || !variantResult.typed && dataResult.typed) {
                    variantResult = dataResult;
                  }
                }
              } else if (schema.type === "variant") {
                parseOptions(schema.options);
                if (variantResult && !variantResult.issues) {
                  break;
                }
              }
            }
          };
          parseOptions(this.options);
          cachedExpectedKey = cachedExpectedKey || [...new Set(expectedKey)].join(" | ");
          if (variantResult) {
            if (variantResult.typed) {
              return pipeResult(
                this,
                variantResult.output,
                config,
                variantResult.issues
              );
            }
            return variantResult;
          }
        }
        const value2 = input[this.key];
        return schemaIssue(this, variant, value2, config, {
          expected: cachedExpectedKey,
          path: [
            {
              type: "object",
              origin: "value",
              input,
              key: this.key,
              value: value2
            }
          ]
        });
      }
      return schemaIssue(this, variant, input, config);
    }
  };
}

// src/schemas/variant/variantAsync.ts
function variantAsync(key, options, arg3, arg4) {
  const [message, pipe] = defaultArgs(arg3, arg4);
  let cachedExpectedKey;
  return {
    type: "variant",
    expects: "Object",
    async: true,
    key,
    options,
    message,
    pipe,
    async _parse(input, config) {
      if (input && typeof input === "object") {
        if (this.key in input || !cachedExpectedKey) {
          let expectedKey;
          let variantResult;
          const parseOptions = async (options2) => {
            for (const schema of options2) {
              if (schema.type === "object") {
                const keySchema = schema.entries[this.key];
                const keyResult = await keySchema._parse(
                  input[this.key],
                  config
                );
                if (!cachedExpectedKey) {
                  expectedKey ? expectedKey.push(keySchema.expects) : expectedKey = [keySchema.expects];
                }
                if (!keyResult.issues) {
                  const dataResult = await schema._parse(input, config);
                  if (!dataResult.issues) {
                    variantResult = dataResult;
                    break;
                  }
                  if (!variantResult || !variantResult.typed && dataResult.typed) {
                    variantResult = dataResult;
                  }
                }
              } else if (schema.type === "variant") {
                await parseOptions(schema.options);
                if (variantResult && !variantResult.issues) {
                  break;
                }
              }
            }
          };
          await parseOptions(this.options);
          cachedExpectedKey = cachedExpectedKey || [...new Set(expectedKey)].join(" | ");
          if (variantResult) {
            if (variantResult.typed) {
              return pipeResultAsync(
                this,
                variantResult.output,
                config,
                variantResult.issues
              );
            }
            return variantResult;
          }
        }
        const value2 = input[this.key];
        return schemaIssue(this, variantAsync, value2, config, {
          expected: cachedExpectedKey,
          path: [
            {
              type: "object",
              origin: "value",
              input,
              key: this.key,
              value: value2
            }
          ]
        });
      }
      return schemaIssue(this, variantAsync, input, config);
    }
  };
}

// src/schemas/void/void.ts
function void_(message) {
  return {
    type: "void",
    expects: "void",
    async: false,
    message,
    _parse(input, config) {
      if (input === void 0) {
        return schemaResult(true, input);
      }
      return schemaIssue(this, void_, input, config);
    }
  };
}

// src/schemas/void/voidAsync.ts
function voidAsync(message) {
  return {
    type: "void",
    expects: "void",
    async: true,
    message,
    async _parse(input, config) {
      if (input === void 0) {
        return schemaResult(true, input);
      }
      return schemaIssue(this, voidAsync, input, config);
    }
  };
}

// src/methods/keyof/keyof.ts
function keyof(schema) {
  return picklist(
    Object.keys(schema.entries)
  );
}

// src/methods/merge/merge.ts
function merge(schemas, arg2, arg3, arg4) {
  const [rest, message, pipe] = restAndDefaultArgs(arg2, arg3, arg4);
  return object(
    schemas.reduce(
      (entries, schema) => ({ ...entries, ...schema.entries }),
      {}
    ),
    rest,
    message,
    pipe
  );
}

// src/methods/merge/mergeAsync.ts
function mergeAsync(schemas, arg2, arg3, arg4) {
  const [rest, message, pipe] = restAndDefaultArgs(arg2, arg3, arg4);
  return objectAsync(
    schemas.reduce(
      (entries, schema) => ({ ...entries, ...schema.entries }),
      {}
    ),
    rest,
    message,
    pipe
  );
}

// src/methods/omit/omit.ts
function omit(schema, keys, arg3, arg4, arg5) {
  const [rest, message, pipe] = restAndDefaultArgs(arg3, arg4, arg5);
  return object(
    Object.entries(schema.entries).reduce(
      (entries, [key, schema2]) => keys.includes(key) ? entries : { ...entries, [key]: schema2 },
      {}
    ),
    rest,
    message,
    pipe
  );
}

// src/methods/omit/omitAsync.ts
function omitAsync(schema, keys, arg3, arg4, arg5) {
  const [rest, message, pipe] = restAndDefaultArgs(arg3, arg4, arg5);
  return objectAsync(
    Object.entries(schema.entries).reduce(
      (entries, [key, schema2]) => keys.includes(key) ? entries : { ...entries, [key]: schema2 },
      {}
    ),
    rest,
    message,
    pipe
  );
}

// src/methods/parse/parse.ts
function parse(schema, input, config) {
  const result = schema._parse(input, getGlobalConfig(config));
  if (result.issues) {
    throw new ValiError(result.issues);
  }
  return result.output;
}

// src/methods/parse/parseAsync.ts
async function parseAsync(schema, input, config) {
  const result = await schema._parse(input, getGlobalConfig(config));
  if (result.issues) {
    throw new ValiError(result.issues);
  }
  return result.output;
}

// src/methods/partial/partial.ts
function partial(schema, arg2, arg3, arg4) {
  const [rest, message, pipe] = restAndDefaultArgs(arg2, arg3, arg4);
  return object(
    Object.entries(schema.entries).reduce(
      (entries, [key, schema2]) => ({
        ...entries,
        [key]: optional(schema2)
      }),
      {}
    ),
    rest,
    message,
    pipe
  );
}

// src/methods/partial/partialAsync.ts
function partialAsync(schema, arg2, arg3, arg4) {
  const [rest, message, pipe] = restAndDefaultArgs(arg2, arg3, arg4);
  return objectAsync(
    Object.entries(schema.entries).reduce(
      (entries, [key, schema2]) => ({
        ...entries,
        [key]: optionalAsync(schema2)
      }),
      {}
    ),
    rest,
    message,
    pipe
  );
}

// src/methods/pick/pick.ts
function pick(schema, keys, arg3, arg4, arg5) {
  const [rest, message, pipe] = restAndDefaultArgs(arg3, arg4, arg5);
  return object(
    Object.entries(schema.entries).reduce(
      (entries, [key, schema2]) => keys.includes(key) ? { ...entries, [key]: schema2 } : entries,
      {}
    ),
    rest,
    message,
    pipe
  );
}

// src/methods/pick/pickAsync.ts
function pickAsync(schema, keys, arg3, arg4, arg5) {
  const [rest, message, pipe] = restAndDefaultArgs(arg3, arg4, arg5);
  return objectAsync(
    Object.entries(schema.entries).reduce(
      (entries, [key, schema2]) => keys.includes(key) ? { ...entries, [key]: schema2 } : entries,
      {}
    ),
    rest,
    message,
    pipe
  );
}

// src/methods/required/required.ts
function required(schema, arg2, arg3, arg4) {
  const [rest, message, pipe] = restAndDefaultArgs(arg2, arg3, arg4);
  return object(
    Object.entries(schema.entries).reduce(
      (entries, [key, schema2]) => ({
        ...entries,
        [key]: nonOptional(schema2)
      }),
      {}
    ),
    rest,
    message,
    pipe
  );
}

// src/methods/required/requiredAsync.ts
function requiredAsync(schema, arg2, arg3, arg4) {
  const [rest, message, pipe] = restAndDefaultArgs(arg2, arg3, arg4);
  return objectAsync(
    Object.entries(schema.entries).reduce(
      (entries, [key, schema2]) => ({
        ...entries,
        [key]: nonOptionalAsync(schema2)
      }),
      {}
    ),
    rest,
    message,
    pipe
  );
}

// src/methods/safeParse/safeParse.ts
function safeParse(schema, input, config) {
  const result = schema._parse(input, getGlobalConfig(config));
  return {
    typed: result.typed,
    success: !result.issues,
    output: result.output,
    issues: result.issues
  };
}

// src/methods/safeParse/safeParseAsync.ts
async function safeParseAsync(schema, input, config) {
  const result = await schema._parse(input, getGlobalConfig(config));
  return {
    typed: result.typed,
    success: !result.issues,
    output: result.output,
    issues: result.issues
  };
}

// src/methods/transform/transform.ts
function transform(schema, action, arg1) {
  return {
    ...schema,
    _parse(input, config) {
      const result = schema._parse(input, config);
      if (result.issues) {
        result.typed = false;
      } else {
        result.output = action(result.output, { issues: result.issues });
        if (arg1) {
          if (Array.isArray(arg1)) {
            return pipeResult(
              { type: typeof result.output, pipe: arg1 },
              result.output,
              config
            );
          }
          return arg1._parse(result.output, config);
        }
      }
      return result;
    }
  };
}

// src/methods/transform/transformAsync.ts
function transformAsync(schema, action, arg1) {
  return {
    ...schema,
    async: true,
    async _parse(input, config) {
      const result = await schema._parse(input, config);
      if (result.issues) {
        result.typed = false;
      } else {
        result.output = await action(result.output, { issues: result.issues });
        if (arg1) {
          if (Array.isArray(arg1)) {
            return pipeResultAsync(
              { type: typeof result.output, pipe: arg1 },
              result.output,
              config
            );
          }
          return arg1._parse(result.output, config);
        }
      }
      return result;
    }
  };
}

// src/methods/unwrap/unwrap.ts
function unwrap(schema) {
  return schema.wrapped;
}

// src/regex.ts
var BIC_REGEX = /^[A-Z]{6}(?!00)[A-Z\d]{2}(?:[A-Z\d]{3})?$/u;
var CUID2_REGEX = /^[a-z][\da-z]*$/u;
var DECIMAL_REGEX = /^\d+$/u;
var EMAIL_REGEX = /^[\w+-]+(?:\.[\w+-]+)*@[\da-z]+(?:[.-][\da-z]+)*\.[a-z]{2,}$/iu;
var EMOJI_REGEX = /^[\p{Extended_Pictographic}\p{Emoji_Component}]+$/u;
var HEXADECIMAL_REGEX = /^(0h|0x)?[\da-f]+$/iu;
var HEX_COLOR_REGEX = /^#([\da-f]{3}|[\da-f]{4}|[\da-f]{6}|[\da-f]{8})$/iu;
var IMEI_REGEX = /^\d{2}(?:[ /|-]?\d{6}){2}[ /|-]?\d$/u;
var IPV4_REGEX = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive
  /^(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])(?:\.(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])){3}$/u
);
var IPV6_REGEX = /^(?:(?:[\da-f]{1,4}:){7}[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,7}:|(?:[\da-f]{1,4}:){1,6}:[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,5}(?::[\da-f]{1,4}){1,2}|(?:[\da-f]{1,4}:){1,4}(?::[\da-f]{1,4}){1,3}|(?:[\da-f]{1,4}:){1,3}(?::[\da-f]{1,4}){1,4}|(?:[\da-f]{1,4}:){1,2}(?::[\da-f]{1,4}){1,5}|[\da-f]{1,4}:(?::[\da-f]{1,4}){1,6}|:(?:(?::[\da-f]{1,4}){1,7}|:)|fe80:(?::[\da-f]{0,4}){0,4}%[\da-z]+|::(?:f{4}(?::0{1,4})?:)?(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d)|(?:[\da-f]{1,4}:){1,4}:(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d))$/iu;
var ISO_DATE_REGEX = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])$/u;
var ISO_DATE_TIME_REGEX = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])T(?:0\d|1\d|2[0-3]):[0-5]\d$/u;
var ISO_TIME_REGEX = /^(?:0\d|1\d|2[0-3]):[0-5]\d$/u;
var ISO_TIME_SECOND_REGEX = /^(?:0\d|1\d|2[0-3])(?::[0-5]\d){2}$/u;
var ISO_TIMESTAMP_REGEX = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])T(?:0\d|1\d|2[0-3])(?::[0-5]\d){2}(?:\.\d{1,9})?Z$/u;
var ISO_WEEK_REGEX = /^\d{4}-W(?:0[1-9]|[1-4]\d|5[0-3])$/u;
var MAC48_REGEX = /^(?:[\da-f]{2}:){5}[\da-f]{2}$|^(?:[\da-f]{2}-){5}[\da-f]{2}$|^(?:[\da-f]{4}\.){2}[\da-f]{4}$/iu;
var MAC64_REGEX = /^(?:[\da-f]{2}:){7}[\da-f]{2}$|^(?:[\da-f]{2}-){7}[\da-f]{2}$|^(?:[\da-f]{4}\.){3}[\da-f]{4}$|^(?:[\da-f]{4}:){3}[\da-f]{4}$/iu;
var OCTAL_REGEX = /^(0o)?[0-7]+$/iu;
var ULID_REGEX = /^[\da-hjkmnp-tv-z]{26}$/iu;
var UUID_REGEX = /^[\da-f]{8}(?:-[\da-f]{4}){3}-[\da-f]{12}$/iu;

// src/transformations/toCustom/toCustom.ts
function toCustom(action) {
  return {
    type: "to_custom",
    async: false,
    _parse(input) {
      return actionOutput(action(input));
    }
  };
}

// src/transformations/toCustom/toCustomAsync.ts
function toCustomAsync(action) {
  return {
    type: "to_custom",
    async: true,
    async _parse(input) {
      return actionOutput(await action(input));
    }
  };
}

// src/transformations/toLowerCase/toLowerCase.ts
function toLowerCase() {
  return {
    type: "to_lower_case",
    async: false,
    _parse(input) {
      return actionOutput(input.toLocaleLowerCase());
    }
  };
}

// src/transformations/toMaxValue/toMaxValue.ts
function toMaxValue(requirement) {
  return {
    type: "to_max_value",
    async: false,
    requirement,
    _parse(input) {
      return actionOutput(input > this.requirement ? this.requirement : input);
    }
  };
}

// src/transformations/toMinValue/toMinValue.ts
function toMinValue(requirement) {
  return {
    type: "to_min_value",
    async: false,
    requirement,
    _parse(input) {
      return actionOutput(input < this.requirement ? this.requirement : input);
    }
  };
}

// src/transformations/toTrimmed/toTrimmed.ts
function toTrimmed() {
  return {
    type: "to_trimmed",
    async: false,
    _parse(input) {
      return actionOutput(input.trim());
    }
  };
}

// src/transformations/toTrimmedEnd/toTrimmedEnd.ts
function toTrimmedEnd() {
  return {
    type: "to_trimmed_end",
    async: false,
    _parse(input) {
      return actionOutput(input.trimEnd());
    }
  };
}

// src/transformations/toTrimmedStart/toTrimmedStart.ts
function toTrimmedStart() {
  return {
    type: "to_trimmed_start",
    async: false,
    _parse(input) {
      return actionOutput(input.trimStart());
    }
  };
}

// src/transformations/toUpperCase/toUpperCase.ts
function toUpperCase() {
  return {
    type: "to_upper_case",
    async: false,
    _parse(input) {
      return actionOutput(input.toUpperCase());
    }
  };
}

// src/validations/bic/bic.ts
function bic(message) {
  return {
    type: "bic",
    expects: null,
    async: false,
    message,
    requirement: BIC_REGEX,
    _parse(input) {
      if (this.requirement.test(input)) {
        return actionOutput(input);
      }
      return actionIssue(this, bic, input, "BIC");
    }
  };
}

// src/validations/bytes/bytes.ts
function bytes(requirement, message) {
  return {
    type: "bytes",
    expects: `${requirement}`,
    async: false,
    message,
    requirement,
    _parse(input) {
      const length2 = new TextEncoder().encode(input).length;
      if (length2 === this.requirement) {
        return actionOutput(input);
      }
      return actionIssue(this, bytes, input, "bytes", `${length2}`);
    }
  };
}

// src/validations/creditCard/creditCard.ts
var SANITIZE_REGEX = /[- ]+/gu;
var PROVIDER_REGEX_LIST = [
  // American Express
  /^3[47]\d{13}$/u,
  // Diners Club
  /^3(?:0[0-5]|[68]\d)\d{11}$/u,
  // Discover
  /^6(?:011|5\d{2})\d{12,15}$/u,
  // JCB
  /^(?:2131|1800|35\d{3})\d{11}$/u,
  // Mastercard
  /^5[1-5]\d{2}|(222\d|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)\d{12}$/u,
  // UnionPay
  /^(6[27]\d{14}|81\d{14,17})$/u,
  // Visa
  /^4\d{12}(?:\d{3,6})?$/u
];
function creditCard(message) {
  return {
    type: "credit_card",
    expects: null,
    async: false,
    message,
    requirement: (input) => {
      const sanitized = input.replace(SANITIZE_REGEX, "");
      return PROVIDER_REGEX_LIST.some((regex2) => regex2.test(sanitized)) && isLuhnAlgo(sanitized);
    },
    _parse(input) {
      if (this.requirement(input)) {
        return actionOutput(input);
      }
      return actionIssue(this, creditCard, input, "credit card");
    }
  };
}

// src/validations/cuid2/cuid2.ts
function cuid2(message) {
  return {
    type: "cuid2",
    expects: null,
    async: false,
    message,
    requirement: CUID2_REGEX,
    _parse(input) {
      if (this.requirement.test(input)) {
        return actionOutput(input);
      }
      return actionIssue(this, cuid2, input, "Cuid2");
    }
  };
}

// src/validations/custom/custom.ts
function custom(requirement, message) {
  return {
    type: "custom",
    expects: null,
    async: false,
    message,
    requirement,
    _parse(input) {
      if (this.requirement(input)) {
        return actionOutput(input);
      }
      return actionIssue(this, custom, input, "input");
    }
  };
}

// src/validations/custom/customAsync.ts
function customAsync(requirement, message) {
  return {
    type: "custom",
    expects: null,
    async: true,
    message,
    requirement,
    async _parse(input) {
      if (await this.requirement(input)) {
        return actionOutput(input);
      }
      return actionIssue(this, customAsync, input, "input");
    }
  };
}

// src/validations/decimal/decimal.ts
function decimal(message) {
  return {
    type: "decimal",
    expects: null,
    async: false,
    message,
    requirement: DECIMAL_REGEX,
    _parse(input) {
      if (this.requirement.test(input)) {
        return actionOutput(input);
      }
      return actionIssue(this, decimal, input, "decimal");
    }
  };
}

// src/validations/email/email.ts
function email(message) {
  return {
    type: "email",
    expects: null,
    async: false,
    message,
    requirement: EMAIL_REGEX,
    _parse(input) {
      if (this.requirement.test(input)) {
        return actionOutput(input);
      }
      return actionIssue(this, email, input, "email");
    }
  };
}

// src/validations/emoji/emoji.ts
function emoji(message) {
  return {
    type: "emoji",
    expects: null,
    async: false,
    message,
    requirement: EMOJI_REGEX,
    _parse(input) {
      if (this.requirement.test(input)) {
        return actionOutput(input);
      }
      return actionIssue(this, emoji, input, "emoji");
    }
  };
}

// src/validations/endsWith/endsWith.ts
function endsWith(requirement, message) {
  return {
    type: "ends_with",
    expects: `"${requirement}"`,
    async: false,
    message,
    requirement,
    _parse(input) {
      if (input.endsWith(this.requirement)) {
        return actionOutput(input);
      }
      return actionIssue(
        this,
        endsWith,
        input,
        "end",
        `"${input.slice(-this.requirement.length)}"`
      );
    }
  };
}

// src/validations/every/every.ts
function every(requirement, message) {
  return {
    type: "every",
    expects: null,
    async: false,
    message,
    requirement,
    _parse(input) {
      if (input.every(this.requirement)) {
        return actionOutput(input);
      }
      return actionIssue(this, every, input, "input");
    }
  };
}

// src/validations/excludes/excludes.ts
function excludes(requirement, message) {
  const received = stringify(requirement);
  return {
    type: "excludes",
    expects: `!${received}`,
    async: false,
    message,
    requirement,
    _parse(input) {
      if (!input.includes(this.requirement)) {
        return actionOutput(input);
      }
      return actionIssue(this, excludes, input, "content", received);
    }
  };
}

// src/validations/finite/finite.ts
function finite(message) {
  return {
    type: "finite",
    expects: null,
    async: false,
    message,
    requirement: Number.isFinite,
    _parse(input) {
      if (this.requirement(input)) {
        return actionOutput(input);
      }
      return actionIssue(this, finite, input, "finite");
    }
  };
}

// src/validations/hash/hash.ts
var HASH_LENGTHS = {
  md4: 32,
  md5: 32,
  sha1: 40,
  sha256: 64,
  sha384: 96,
  sha512: 128,
  ripemd128: 32,
  ripemd160: 40,
  tiger128: 32,
  tiger160: 40,
  tiger192: 48,
  crc32: 8,
  crc32b: 8,
  adler32: 8
};
function hash(types, message) {
  return {
    type: "hash",
    expects: null,
    async: false,
    message,
    requirement: RegExp(
      types.map((type) => `^[a-f0-9]{${HASH_LENGTHS[type]}}$`).join("|"),
      "iu"
    ),
    _parse(input) {
      if (this.requirement.test(input)) {
        return actionOutput(input);
      }
      return actionIssue(this, hash, input, "hash");
    }
  };
}

// src/validations/hexadecimal/hexadecimal.ts
function hexadecimal(message) {
  return {
    type: "hexadecimal",
    expects: null,
    async: false,
    message,
    requirement: HEXADECIMAL_REGEX,
    _parse(input) {
      if (this.requirement.test(input)) {
        return actionOutput(input);
      }
      return actionIssue(this, hexadecimal, input, "hexadecimal");
    }
  };
}

// src/validations/hexColor/hexColor.ts
function hexColor(message) {
  return {
    type: "hex_color",
    expects: null,
    async: false,
    message,
    requirement: HEX_COLOR_REGEX,
    _parse(input) {
      if (this.requirement.test(input)) {
        return actionOutput(input);
      }
      return actionIssue(this, hexColor, input, "hex color");
    }
  };
}

// src/validations/imei/imei.ts
function imei(message) {
  return {
    type: "imei",
    expects: null,
    async: false,
    message,
    requirement: [IMEI_REGEX, isLuhnAlgo],
    _parse(input) {
      if (this.requirement[0].test(input) && this.requirement[1](input)) {
        return actionOutput(input);
      }
      return actionIssue(this, imei, input, "IMEI");
    }
  };
}

// src/validations/includes/includes.ts
function includes(requirement, message) {
  const expects = stringify(requirement);
  return {
    type: "includes",
    expects,
    async: false,
    message,
    requirement,
    _parse(input) {
      if (input.includes(this.requirement)) {
        return actionOutput(input);
      }
      return actionIssue(this, includes, input, "content", `!${expects}`);
    }
  };
}

// src/validations/integer/integer.ts
function integer(message) {
  return {
    type: "integer",
    expects: null,
    async: false,
    message,
    requirement: Number.isInteger,
    _parse(input) {
      if (this.requirement(input)) {
        return actionOutput(input);
      }
      return actionIssue(this, integer, input, "integer");
    }
  };
}

// src/validations/ip/ip.ts
function ip(message) {
  return {
    type: "ip",
    expects: null,
    async: false,
    message,
    // TODO: It is strange that we have an OR relationship between requirements
    requirement: [IPV4_REGEX, IPV6_REGEX],
    _parse(input) {
      if (this.requirement[0].test(input) || this.requirement[1].test(input)) {
        return actionOutput(input);
      }
      return actionIssue(this, ip, input, "IP");
    }
  };
}

// src/validations/ipv4/ipv4.ts
function ipv4(message) {
  return {
    type: "ipv4",
    expects: null,
    async: false,
    message,
    requirement: IPV4_REGEX,
    _parse(input) {
      if (this.requirement.test(input)) {
        return actionOutput(input);
      }
      return actionIssue(this, ipv4, input, "IPv4");
    }
  };
}

// src/validations/ipv6/ipv6.ts
function ipv6(message) {
  return {
    type: "ipv6",
    expects: null,
    async: false,
    message,
    requirement: IPV6_REGEX,
    _parse(input) {
      if (this.requirement.test(input)) {
        return actionOutput(input);
      }
      return actionIssue(this, ipv6, input, "IPv6");
    }
  };
}

// src/validations/isoDate/isoDate.ts
function isoDate(message) {
  return {
    type: "iso_date",
    expects: null,
    async: false,
    message,
    requirement: ISO_DATE_REGEX,
    _parse(input) {
      if (this.requirement.test(input)) {
        return actionOutput(input);
      }
      return actionIssue(this, isoDate, input, "date");
    }
  };
}

// src/validations/isoDateTime/isoDateTime.ts
function isoDateTime(message) {
  return {
    type: "iso_date_time",
    expects: null,
    async: false,
    message,
    requirement: ISO_DATE_TIME_REGEX,
    _parse(input) {
      if (this.requirement.test(input)) {
        return actionOutput(input);
      }
      return actionIssue(this, isoDateTime, input, "date-time");
    }
  };
}

// src/validations/isoTime/isoTime.ts
function isoTime(message) {
  return {
    type: "iso_time",
    expects: null,
    async: false,
    message,
    requirement: ISO_TIME_REGEX,
    _parse(input) {
      if (this.requirement.test(input)) {
        return actionOutput(input);
      }
      return actionIssue(this, isoTime, input, "time");
    }
  };
}

// src/validations/isoTimeSecond/isoTimeSecond.ts
function isoTimeSecond(message) {
  return {
    type: "iso_time_second",
    expects: null,
    async: false,
    message,
    requirement: ISO_TIME_SECOND_REGEX,
    _parse(input) {
      if (this.requirement.test(input)) {
        return actionOutput(input);
      }
      return actionIssue(this, isoTimeSecond, input, "time second");
    }
  };
}

// src/validations/isoTimestamp/isoTimestamp.ts
function isoTimestamp(message) {
  return {
    type: "iso_timestamp",
    expects: null,
    async: false,
    message,
    requirement: ISO_TIMESTAMP_REGEX,
    _parse(input) {
      if (this.requirement.test(input)) {
        return actionOutput(input);
      }
      return actionIssue(this, isoTimestamp, input, "timestamp");
    }
  };
}

// src/validations/isoWeek/isoWeek.ts
function isoWeek(message) {
  return {
    type: "iso_week",
    expects: null,
    async: false,
    message,
    requirement: ISO_WEEK_REGEX,
    _parse(input) {
      if (this.requirement.test(input)) {
        return actionOutput(input);
      }
      return actionIssue(this, isoWeek, input, "week");
    }
  };
}

// src/validations/length/length.ts
function length(requirement, message) {
  return {
    type: "length",
    expects: `${requirement}`,
    async: false,
    message,
    requirement,
    _parse(input) {
      if (input.length === this.requirement) {
        return actionOutput(input);
      }
      return actionIssue(this, length, input, "length", `${input.length}`);
    }
  };
}

// src/validations/mac/mac.ts
function mac(message) {
  return {
    type: "mac",
    expects: null,
    async: false,
    message,
    // TODO: It is strange that we have an OR relationship between requirements
    requirement: [MAC48_REGEX, MAC64_REGEX],
    _parse(input) {
      if (this.requirement[0].test(input) || this.requirement[1].test(input)) {
        return actionOutput(input);
      }
      return actionIssue(this, mac, input, "MAC");
    }
  };
}

// src/validations/mac48/mac48.ts
function mac48(message) {
  return {
    type: "mac48",
    expects: null,
    async: false,
    message,
    requirement: MAC48_REGEX,
    _parse(input) {
      if (this.requirement.test(input)) {
        return actionOutput(input);
      }
      return actionIssue(this, mac48, input, "48-bit MAC");
    }
  };
}

// src/validations/mac64/mac64.ts
function mac64(message) {
  return {
    type: "mac64",
    expects: null,
    async: false,
    message,
    requirement: MAC64_REGEX,
    _parse(input) {
      if (this.requirement.test(input)) {
        return actionOutput(input);
      }
      return actionIssue(this, mac64, input, "64-bit MAC");
    }
  };
}

// src/validations/maxBytes/maxBytes.ts
function maxBytes(requirement, message) {
  return {
    type: "max_bytes",
    expects: `<=${requirement}`,
    async: false,
    message,
    requirement,
    _parse(input) {
      const length2 = new TextEncoder().encode(input).length;
      if (length2 <= this.requirement) {
        return actionOutput(input);
      }
      return actionIssue(this, maxBytes, input, "bytes", `${length2}`);
    }
  };
}

// src/validations/maxLength/maxLength.ts
function maxLength(requirement, message) {
  return {
    type: "max_length",
    expects: `<=${requirement}`,
    async: false,
    message,
    requirement,
    _parse(input) {
      if (input.length <= this.requirement) {
        return actionOutput(input);
      }
      return actionIssue(this, maxLength, input, "length", `${input.length}`);
    }
  };
}

// src/validations/maxSize/maxSize.ts
function maxSize(requirement, message) {
  return {
    type: "max_size",
    expects: `<=${requirement}`,
    async: false,
    message,
    requirement,
    _parse(input) {
      if (input.size <= this.requirement) {
        return actionOutput(input);
      }
      return actionIssue(this, maxSize, input, "size", `${input.size}`);
    }
  };
}

// src/validations/maxValue/maxValue.ts
function maxValue(requirement, message) {
  return {
    type: "max_value",
    expects: `<=${requirement instanceof Date ? requirement.toJSON() : stringify(requirement)}`,
    async: false,
    message,
    requirement,
    _parse(input) {
      if (input <= this.requirement) {
        return actionOutput(input);
      }
      return actionIssue(
        this,
        maxValue,
        input,
        "value",
        input instanceof Date ? input.toJSON() : stringify(input)
      );
    }
  };
}

// src/validations/minBytes/minBytes.ts
function minBytes(requirement, message) {
  return {
    type: "min_bytes",
    expects: `>=${requirement}`,
    async: false,
    message,
    requirement,
    _parse(input) {
      const length2 = new TextEncoder().encode(input).length;
      if (length2 >= this.requirement) {
        return actionOutput(input);
      }
      return actionIssue(this, minBytes, input, "bytes", `${length2}`);
    }
  };
}

// src/validations/mimeType/mimeType.ts
function mimeType(requirement, message) {
  return {
    type: "mime_type",
    expects: requirement.map((option) => `"${option}"`).join(" | "),
    async: false,
    message,
    requirement,
    _parse(input) {
      if (this.requirement.includes(input.type)) {
        return actionOutput(input);
      }
      return actionIssue(this, mimeType, input, "MIME type");
    }
  };
}

// src/validations/minLength/minLength.ts
function minLength(requirement, message) {
  return {
    type: "min_length",
    expects: `>=${requirement}`,
    async: false,
    message,
    requirement,
    _parse(input) {
      if (input.length >= this.requirement) {
        return actionOutput(input);
      }
      return actionIssue(this, minLength, input, "length", `${input.length}`);
    }
  };
}

// src/validations/minSize/minSize.ts
function minSize(requirement, message) {
  return {
    type: "min_size",
    expects: `>=${requirement}`,
    async: false,
    message,
    requirement,
    _parse(input) {
      if (input.size >= this.requirement) {
        return actionOutput(input);
      }
      return actionIssue(this, minSize, input, "size", `${input.size}`);
    }
  };
}

// src/validations/minValue/minValue.ts
function minValue(requirement, message) {
  return {
    type: "min_value",
    expects: `>=${requirement instanceof Date ? requirement.toJSON() : stringify(requirement)}`,
    async: false,
    message,
    requirement,
    _parse(input) {
      if (input >= this.requirement) {
        return actionOutput(input);
      }
      return actionIssue(
        this,
        minValue,
        input,
        "value",
        input instanceof Date ? input.toJSON() : stringify(input)
      );
    }
  };
}

// src/validations/multipleOf/multipleOf.ts
function multipleOf(requirement, message) {
  return {
    type: "multiple_of",
    expects: `%${requirement}`,
    async: false,
    message,
    requirement,
    _parse(input) {
      if (input % this.requirement === 0) {
        return actionOutput(input);
      }
      return actionIssue(this, multipleOf, input, "multiple", `${input}`);
    }
  };
}

// src/validations/notBytes/notBytes.ts
function notBytes(requirement, message) {
  return {
    type: "not_bytes",
    expects: `!${requirement}`,
    async: false,
    message,
    requirement,
    _parse(input) {
      const length2 = new TextEncoder().encode(input).length;
      if (length2 !== this.requirement) {
        return actionOutput(input);
      }
      return actionIssue(this, notBytes, input, "bytes", `${length2}`);
    }
  };
}

// src/validations/notLength/notLength.ts
function notLength(requirement, message) {
  return {
    type: "not_length",
    expects: `!${requirement}`,
    async: false,
    message,
    requirement,
    _parse(input) {
      if (input.length !== this.requirement) {
        return actionOutput(input);
      }
      return actionIssue(this, notLength, input, "length", `${input.length}`);
    }
  };
}

// src/validations/notSize/notSize.ts
function notSize(requirement, message) {
  return {
    type: "not_size",
    expects: `!${requirement}`,
    async: false,
    message,
    requirement,
    _parse(input) {
      if (input.size !== this.requirement) {
        return actionOutput(input);
      }
      return actionIssue(this, notSize, input, "size", `${input.size}`);
    }
  };
}

// src/validations/notValue/notValue.ts
function notValue(requirement, message) {
  return {
    type: "not_value",
    expects: `!${requirement instanceof Date ? requirement.toJSON() : stringify(requirement)}`,
    async: false,
    message,
    requirement,
    _parse(input) {
      if (input < this.requirement || input > this.requirement) {
        return actionOutput(input);
      }
      return actionIssue(
        this,
        notValue,
        input,
        "value",
        input instanceof Date ? input.toJSON() : stringify(input)
      );
    }
  };
}

// src/validations/octal/octal.ts
function octal(message) {
  return {
    type: "octal",
    expects: null,
    async: false,
    message,
    requirement: OCTAL_REGEX,
    _parse(input) {
      if (this.requirement.test(input)) {
        return actionOutput(input);
      }
      return actionIssue(this, octal, input, "octal");
    }
  };
}

// src/validations/regex/regex.ts
function regex(requirement, message) {
  return {
    type: "regex",
    expects: `${requirement}`,
    async: false,
    message,
    requirement,
    _parse(input) {
      if (this.requirement.test(input)) {
        return actionOutput(input);
      }
      return actionIssue(this, regex, input, "format");
    }
  };
}

// src/validations/safeInteger/safeInteger.ts
function safeInteger(message) {
  return {
    type: "safe_integer",
    expects: null,
    async: false,
    message,
    requirement: Number.isSafeInteger,
    _parse(input) {
      if (this.requirement(input)) {
        return actionOutput(input);
      }
      return actionIssue(this, safeInteger, input, "safe integer");
    }
  };
}

// src/validations/size/size.ts
function size(requirement, message) {
  return {
    type: "size",
    expects: `${requirement}`,
    async: false,
    message,
    requirement,
    _parse(input) {
      if (input.size === this.requirement) {
        return actionOutput(input);
      }
      return actionIssue(this, size, input, "size", `${input.size}`);
    }
  };
}

// src/validations/some/some.ts
function some(requirement, message) {
  return {
    type: "some",
    expects: null,
    async: false,
    message,
    requirement,
    _parse(input) {
      if (input.some(this.requirement)) {
        return actionOutput(input);
      }
      return actionIssue(this, some, input, "input");
    }
  };
}

// src/validations/startsWith/startsWith.ts
function startsWith(requirement, message) {
  return {
    type: "starts_with",
    expects: `"${requirement}"`,
    async: false,
    message,
    requirement,
    _parse(input) {
      if (input.startsWith(this.requirement)) {
        return actionOutput(input);
      }
      return actionIssue(
        this,
        startsWith,
        input,
        "start",
        `"${input.slice(0, this.requirement.length)}"`
      );
    }
  };
}

// src/validations/ulid/ulid.ts
function ulid(message) {
  return {
    type: "ulid",
    expects: null,
    async: false,
    message,
    requirement: ULID_REGEX,
    _parse(input) {
      if (this.requirement.test(input)) {
        return actionOutput(input);
      }
      return actionIssue(this, ulid, input, "ULID");
    }
  };
}

// src/validations/url/url.ts
function url(message) {
  return {
    type: "url",
    expects: null,
    async: false,
    message,
    requirement(input) {
      try {
        new URL(input);
        return true;
      } catch {
        return false;
      }
    },
    _parse(input) {
      if (this.requirement(input)) {
        return actionOutput(input);
      }
      return actionIssue(this, url, input, "URL");
    }
  };
}

// src/validations/uuid/uuid.ts
function uuid(message) {
  return {
    type: "uuid",
    expects: null,
    async: false,
    message,
    requirement: UUID_REGEX,
    _parse(input) {
      if (this.requirement.test(input)) {
        return actionOutput(input);
      }
      return actionIssue(this, uuid, input, "UUID");
    }
  };
}

// src/validations/value/value.ts
function value(requirement, message) {
  return {
    type: "value",
    expects: `${requirement instanceof Date ? requirement.toJSON() : stringify(requirement)}`,
    async: false,
    message,
    requirement,
    _parse(input) {
      if (input <= this.requirement && input >= this.requirement) {
        return actionOutput(input);
      }
      return actionIssue(
        this,
        value,
        input,
        "value",
        input instanceof Date ? input.toJSON() : stringify(input)
      );
    }
  };
}
export {
  BIC_REGEX,
  BrandSymbol,
  CUID2_REGEX,
  DECIMAL_REGEX,
  EMAIL_REGEX,
  EMOJI_REGEX,
  HEXADECIMAL_REGEX,
  HEX_COLOR_REGEX,
  IMEI_REGEX,
  IPV4_REGEX,
  IPV6_REGEX,
  ISO_DATE_REGEX,
  ISO_DATE_TIME_REGEX,
  ISO_TIMESTAMP_REGEX,
  ISO_TIME_REGEX,
  ISO_TIME_SECOND_REGEX,
  ISO_WEEK_REGEX,
  MAC48_REGEX,
  MAC64_REGEX,
  OCTAL_REGEX,
  ULID_REGEX,
  UUID_REGEX,
  ValiError,
  actionIssue,
  actionOutput,
  any,
  anyAsync,
  array,
  arrayAsync,
  bic,
  bigint,
  bigintAsync,
  blob,
  blobAsync,
  boolean,
  booleanAsync,
  brand,
  bytes,
  coerce,
  coerceAsync,
  creditCard,
  cuid2,
  custom,
  customAsync,
  date,
  dateAsync,
  decimal,
  defaultArgs,
  deleteGlobalConfig,
  deleteGlobalMessage,
  deleteSchemaMessage,
  deleteSpecificMessage,
  email,
  emoji,
  endsWith,
  enumAsync,
  enum_,
  every,
  excludes,
  fallback,
  fallbackAsync,
  finite,
  flatten,
  forward,
  forwardAsync,
  getDefault,
  getDefaultAsync,
  getDefaults,
  getDefaultsAsync,
  getFallback,
  getFallbackAsync,
  getFallbacks,
  getFallbacksAsync,
  getGlobalConfig,
  getGlobalMessage,
  getSchemaMessage,
  getSpecificMessage,
  hash,
  hexColor,
  hexadecimal,
  i18n,
  imei,
  includes,
  instance,
  instanceAsync,
  integer,
  intersect,
  intersectAsync,
  ip,
  ipv4,
  ipv6,
  is,
  isLuhnAlgo,
  isOfType,
  isoDate,
  isoDateTime,
  isoTime,
  isoTimeSecond,
  isoTimestamp,
  isoWeek,
  keyof,
  lazy,
  lazyAsync,
  length,
  literal,
  literalAsync,
  mac,
  mac48,
  mac64,
  map,
  mapAsync,
  maxBytes,
  maxLength,
  maxSize,
  maxValue,
  merge,
  mergeAsync,
  mimeType,
  minBytes,
  minLength,
  minSize,
  minValue,
  multipleOf,
  nan,
  nanAsync,
  never,
  neverAsync,
  nonNullable,
  nonNullableAsync,
  nonNullish,
  nonNullishAsync,
  nonOptional,
  nonOptionalAsync,
  notBytes,
  notLength,
  notSize,
  notValue,
  nullAsync,
  null_,
  nullable,
  nullableAsync,
  nullish,
  nullishAsync,
  number,
  numberAsync,
  object,
  objectAsync,
  octal,
  omit,
  omitAsync,
  optional,
  optionalAsync,
  parse,
  parseAsync,
  partial,
  partialAsync,
  pick,
  pickAsync,
  picklist,
  picklistAsync,
  pipeResult,
  pipeResultAsync,
  record,
  recordAsync,
  regex,
  required,
  requiredAsync,
  restAndDefaultArgs,
  safeInteger,
  safeParse,
  safeParseAsync,
  schemaIssue,
  schemaResult,
  set,
  setAsync,
  setGlobalConfig,
  setGlobalMessage,
  setSchemaMessage,
  setSpecificMessage,
  size,
  some,
  special,
  specialAsync,
  startsWith,
  string,
  stringAsync,
  stringify,
  symbol,
  symbolAsync,
  toCustom,
  toCustomAsync,
  toLowerCase,
  toMaxValue,
  toMinValue,
  toTrimmed,
  toTrimmedEnd,
  toTrimmedStart,
  toUpperCase,
  transform,
  transformAsync,
  tuple,
  tupleAsync,
  ulid,
  undefinedAsync,
  undefined_,
  union,
  unionAsync,
  unknown,
  unknownAsync,
  unwrap,
  url,
  uuid,
  value,
  variant,
  variantAsync,
  voidAsync,
  void_
};
