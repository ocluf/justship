# @gcornut/valibot-json-schema

CLI and JS utility to convert valibot schemas to JSON schema (draft 07).

Some of the features of Valibot can't be converted to JSON schema. JS-specific types like `blob` or `nan` obviously
can't have an equivalent.  
[See supported features](#supported-features) for more info.

## Command Line Tool

This lib exports a CLI that can be used to quickly convert JS modules defining valibot schemas into a JSON schema.

```shell
# Convert valibot schemas to JSON schema
npx @gcornut/valibot-json-schema to-json-schema ./schemas.js
```

This outputs a conversion of the Valibot schemas into JSON schema. If the default export is a Valibot schemas, it is
used as
the root definition. Other exported Valibot schemas are converted in the JSON schema <code>definitions</code> section.

<details><summary><b>See detailed input and output:</b></summary>

_Input file `./schemas.js`_:

```js
import * as v from 'valibot';

export const AString = v.string();
const AnObject = v.object({ aString: AString });
export default AnObject;
```

_Output conversion_:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "definitions": {
    "AString": {
      "type": "string"
    }
  },
  "properties": {
    "aString": {
      "$ref": "#/definitions/AString"
    }
  },
  "required": [
    "aString"
  ],
  "type": "object"
}
```

`AnObject` is the default export in the source module, so it is converted as the root definition. `AString` is exported
separately, so it is exported to the `definitions` section.

</details>

### ESM and TypeScript input module

The `valibot-json-schema` CLI loads the input JS module using **standard NodeJS CommonJS require**. This means you will
have issues with **ESM or TypeScript modules**.

To remedy that, you will either have to preinstall `ebuild-runner` and `esbuild` (so that the program can use them) or
use a Node-compatible runtime that support these modules (ex: bun, replacing `npx` with `bunx`).

Example:

```shell
# Convert from TS/ESM module using bunx
bunx @gcornut/valibot-json-schema to-json-schema ./schemas.ts

# Convert from TS/ESM module with esbuild-runner preinstalled
npm install esbuild esbuild-runner
npx @gcornut/valibot-json-schema to-json-schema ./schemas.ts

# Convert from TS/ESM module using `yarn dlx` multi-package feature 
yarn dlx -p esbuild -p esbuild-runner -p @gcornut/valibot-json-schema valibot-json-schema to-json-schema ./schemas.ts
```

### CLI parameters

Use `-o <file>` option to output the JSON schema to a file instead of `stdout`.

Use `-t <type>` option to select the root definitions from the module exports (defaults to the "default" export).
Example: `-t foo.bar` will get the property `bar` on the `foo` export of the input JS module.

Use `-d <type>` option to select the definitions from the module exports (instead of using all non-default export).
Example: `-d foo.bar` will get the property `bar` on the `foo` export of the input JS module.

See [Advanced options](#advanded-options) for more options.

## Programmatic usage

Use the `toJSONSchema` function to convert a Valibot schema into JSON schema (v7):

```js
import { toJSONSchema } from '@gcornut/valibot-json-schema';
import { string } from 'valibot';

toJSONSchema({ schema: string() })
// {
//    $schema: 'http://json-schema.org/draft-07/schema#',
//    type: 'string',
// }
```

If you have many named schemas to convert, you can use the `definitions` option schema to list as a plain object so that
both the schema names (object keys) and schema definitions (object values) are exported to JSON schema.

```js
import { toJSONSchema } from '@gcornut/valibot-json-schema';
import { number } from 'valibot';

const Number = number();
toJSONSchema({ definitions: { Number } });
// {
//    $schema: 'http://json-schema.org/draft-07/schema#',
//    definitions: { Number: { type: 'number' } },
// }
```

See [Advanced options](#advanded-options) for more options.

## Advanced options

### Strict object types

Using the `strictObjectTypes` option (`--strictObjectTypes` in the CLI), you can force all object type block unknown
keys (`additionalProperties: false`).

### Ignore unknown validation

You might want to have advanced validation in your valibot schema that JSON schema can't support (
like [custom()](https://valibot.dev/api/custom/)). By default, `toJSONSchema()` will throw an error to let you know
these can't be converted to JSON schema.

Using the `ignoreUnknownValidation` option (`--ignoreUnknownValidation` in the CLI), you can ignore unsupported valibot
validations.

### Common type strategies

Many JS types don't have a direct equivalent in JSON and `toJSONSchema()` will throw an error when encountering any of
those. However, some of these types have common strategies to convert them.

Using the `dateStrategy` option (`--dateStrategy` in the CLI), you can choose to convert JS Date objects into a string (
with the `date-time` format) or into an integer (with the `unix-time` format).

Using the `undefinedStrategy` option (`--undefinedStrategy` in the CLI), you can choose to convert `undefined` to the "
any" schema (no validation) or to the `null` type.

Using the `bigintStrategy` option (`--bigintStrategy` in the CLI), you can choose to convert JS BigInt values to an
integer (with the `int64` format) or into a string.

### Custom schema conversion

In some cases, you might want to provide custom schema conversion to override standard schema conversion or to add 
conversion of unsupported schemas.

Using the `customSchemaConversion` option, you can provide a custom schema converted for any valibot schema type.

**Example**: converting JS Set schema into an array schema

```ts
import { SetSchema } from 'valibot';

toJSONSchema({
    schema: set(string()),
    customSchemaConversion: {
        // Treat set type like an array
        set: (schema, converter) => converter(array((schema as SetSchema<any>).value))
    },
})
// => { type: 'array', items: { type: 'string' } }
```

## Supported features

Some converted schema might have slightly different behavior in a JSON schema validator, especially on string
formats (`email`, `ipv4`, `date`, etc.) since their implementation is different from valibot implementation.

Here is the list of supported Valibot features (some have partial support):

| feature                                      | status                                                                                           |
|----------------------------------------------|--------------------------------------------------------------------------------------------------|
| `any` schema                                 | ✅ supported                                                                                      |
| `null` schema                                | ✅ supported                                                                                      |
| `number` schema                              | ✅ supported                                                                                      |
| `bigint` schema                              | ⚠️ with `bigintStrategy` option provided                                                         |
| `string` schema                              | ✅ supported                                                                                      |
| `boolean` schema                             | ✅ supported                                                                                      |
| `literal` schema                             | ⚠️ partial: only JSON-compatible literal are supported                                           |
| `nullable` schema                            | ✅ supported                                                                                      |
| `nullish` schema                             | ✅ supported                                                                                      |
| `optional` schema                            | ✅ supported                                                                                      |
| `never` schema                               | ⚠️ partial: only inside `object` rest or `tuple` rest params                                     |
| `picklist` schema                            | ⚠️ partial: only JSON-compatible literal are supported                                           |
| `enum_` schema                               | ✅ supported                                                                                      |
| `union` schema                               | ✅ supported                                                                                      |
| `variant` schema                             | ⚠️ partial: converted just like an `union`                                                       |
| `intersect` schema                           | ✅ supported                                                                                      |
| `array` schema                               | ✅ supported                                                                                      |
| `tuple` schema                               | ✅ supported                                                                                      |
| `object` schema                              | ✅ supported                                                                                      |
| `record` schema                              | ⚠️ partial: only string key are allowed, applicable to plain object only, not arrays             |
| `lazy` schema (previously named `recursive`) | ⚠️ partial: only if the schema inside [is referenced in `definitions`](#json-schema-definitions) |
| `date` schema                                | ⚠️ with `dateStrategy` option provided                                                           |
| `length` validation                          | ✅ supported                                                                                      |
| `maxLength` validation                       | ✅ supported                                                                                      |
| `minLength` validation                       | ✅ supported                                                                                      |
| `regex` validation                           | ⚠️ partial: only on RegExp features supported by JSON schema                                     |
| `value` validation                           | ⚠️ partial: only on `string`, `number` and `boolean`                                             |
| `minValue` validation                        | ⚠️ partial: only on `number`                                                                     |
| `maxValue` validation                        | ⚠️ partial: only on `number`                                                                     |
| `multipleOf` validation                      | ✅ supported                                                                                      |
| `integer` validation                         | ✅ supported                                                                                      |
| `email` validation                           | ✅ supported (JSON schema format)                                                                 |
| `isoDate` validation                         | ✅ supported (JSON schema format)                                                                 |
| `isoTimestamp` validation                    | ✅ supported (JSON schema format)                                                                 |
| `ipv4` validation                            | ✅ supported (JSON schema format)                                                                 |
| `ipv6` validation                            | ✅ supported (JSON schema format)                                                                 |
| `uuid` validation                            | ✅ supported (JSON schema format)                                                                 |
