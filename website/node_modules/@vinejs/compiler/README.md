# @vinejs/compiler

[![gh-workflow-image]][gh-workflow-url] [![npm-image]][npm-url] ![][typescript-image] [![license-image]][license-url]

The compiler is used to convert an array of schema nodes to a function with imperative JavaScript code that can be executed to validate a data object. The compiler operates at the low-level and does not offer any JavaScript API for creating the schema (see vinejs for user-land APIs).

## Benchmarks

Ajv performs better in some instances because Ajv holds a reference to the input data object and does not create a new output object. Though Ajv behavior results in slightly better performance, it comes at the cost of sharing the same pointers between the input and output objects, and hence mutating one will mutate the other as well.

![](./vinejs_benchmarks.png)

## Schema

Schema refers to an object or an array of objects that the compiler takes as an input to generate JavaScript output. Following is an example of an `object` schema node with `username` property.

```ts
{
  type: 'root',
  schema: {
    type: 'object',
    fieldName: '',
    propertyName: '',
    bail: true,
    allowNull: false,
    isOptional: false,
    allowUnknownProperties: false,
    properties: [
      {
        type: 'literal',
        fieldName: 'username',
        propertyName: 'userName',
        transformFnId: 'ref://1',
        parseFnId: 'ref://2',
        bail: true,
        allowNull: false,
        isOptional: false,
        validations: [
          {
            ruleFnId: 'ref://3',
            isAsync: false,
            implicit: false,
          }
        ]
      }
    ],
    groups: [],
  }
}
```

## What is `ref://x`?

Since, we pre-compile the schema to a string, we cannot serialize certain JavaScript datatypes like functions or complex objects. Therefore, we use a `refs` system, which works as follows.

- When you define a function or a complex data type inside your schema, we will generate a unique ref id for it.
- The compiler will receive the ref id (starting with `ref://`).
- At the time of validations, we will pass the refs key-value pair. The key will be ref id and the value will be the complex data type and the compiled output will lookup the ref value based upon the ref id.

Consider the following simplified flow of using refs.

![](./compiler_parsing_flow.png)

## Schema types

Following is the list of supported schema types.

- `literal`: Literal refers to any value that does not have children schema nodes. For example: `number`, `string`, `boolean`, `dates`, and so on. Custom data types like `file` can be a literal schema type.
- `object`: Object refers to a JavaScript Object data type. An object may have children schema nodes as well.
- `array`: Array refers to a JavaScript Array data type. An array may also define the schema node for the array elements.
- `tuple`: Tuple refers to a JavaScript Array data type. A tuple can define a separate schema for each array element.
- `union`: A union is a collection of conditions + schema. If the condition is `true` at runtime, the associated schema will validate the field.
- `record`: Record refers to a JavaScript Object data type with unknown keys. Each element of a record must have the same type.

## Schema moving parts

There are moving parts inside the schema nodes. These moving parts generate different outputs based on their state.

### Standalone moving parts

Standalone moving parts refers to conditions that act individually and does not get impacted if other moving parts are enabled or disabled.

- `parseFnId`: A function to convert the input value before the validation lifecycle of the input begins. The function receives the exact value of the input, so consider the value as `unknown`.

- `transformFnId`: A function to convert the output value after all the validations of the input field are over.

  - The function can only be defined for the `literal` schema type.
  - The function is invoked only when the value is written to the output. Any conditions that do not write value to the output will also skip calling the transform function.

- `allowUnknownProperties`: When enabled, the flag will keep all the properties of an object or an array. The children properties with schema are still validated and replaced, but other properties are deeply copied from the source to the output.

- `bail`: When enabled, the flag will stop validating the field after the first error. In the case of `arrays` and `objects`, the validation of children nodes will also be skipped.

### Dependent flags (optional and null)

Flags that behave differently when used together.

- `isOptional`: Mark the field under validation as optional. It means the field value can be `undefined` or `null`.

- `allowNull`: Mark the field under validation to be `null`, but not undefined. However, when both `isOptional` and `allowNull` flags are used, the undefined values will also be allowed.

  The `null` values are written to the output when `allowNull` flag is enabled.

## Validations behavior

The validations are functions executed one after the other in the same sequence as they are registered in the schema. Following is the default behavior of validations.

- Validation functions are not executed if the value is `null` or `undefined` even when the field is marked as optional.
- You may use the `implicit` flag on the validation rule to make the validation run for `null` or `undefined` values as well.
- When the `bail` mode is enabled for the field, the next validation will not run if the previous one fails. There is no way for rules to bypass this behavior.

## Implicit rules

The validation rules are not executed by default when the field's value is `null` or `undefined`. However, the implicit rules can bypass this check by enabling the `implicit` flag inside the schema object.

## Writing value to the output

If the value of a field is `null` or `undefined` it will not be written to the output. However, the `null` values are written to the output when `allowNull` flag is enabled.

[gh-workflow-image]: https://img.shields.io/github/actions/workflow/status/vinejs/compiler/checks.yml?style=for-the-badge
[gh-workflow-url]: https://github.com/vinejs/compiler/actions/workflows/test.yml 'Github action'
[npm-image]: https://img.shields.io/npm/v/@vinejs/compiler/latest.svg?style=for-the-badge&logo=npm
[npm-url]: https://www.npmjs.com/package/@vinejs/compiler/v/latest 'npm'
[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[license-url]: LICENSE.md
[license-image]: https://img.shields.io/github/license/vinejs/compiler?style=for-the-badge
