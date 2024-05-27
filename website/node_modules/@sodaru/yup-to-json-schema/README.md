# yup-to-json-schema

> [Yup](https://github.com/jquense/yup) is a library to validate the JSON input

> [JSON-Schema](https://json-schema.org/) is a schema specification for JSON

> NOTE : Upgraded to support Yup Version 1
> Version Maping
> | Yup Major Version | This Library Major Version | Branch in this Library |
> | ----- | ------ | -----|
> | 1 | 2 | main |
> | 0 | 1 | yup_v0 |

This library converts `Yup` schema to `JSON-Schema`

## Installation

```
npm i @sodaru/yup-to-json-schema
```

## Usage

### Convert YUP to JSON-SCHEMA

```js
import { object, string, array, tuple, date, boolean, number } from 'yup';
import { convertSchema } from '@sodaru/yup-to-json-schema';

const schema = object({
  name: string().label('Name').required(),
  address: tuple([string(), string()]).label('Address'),
  hobbies: array(string()).min(1).label('Hobbies'),
  birthdate: date().label('Birthdate'),
  admin: boolean().label('Admin'),
  rank: number().integer().positive().label('Rank')
});

const jsonSchema = convertSchema(schema);

assert(jsonSchema).toEqual({
  type: 'object',
  required: ['name']
  properties: {
    name: {
      type: 'string',
      title: 'Name'
    },
    address: {
      type: 'array',
      title: 'Address',
      minItems: 2,
      maxItems: 2,
      items: [
        {
          type: 'string'
        },
        {
          type: 'string'
        }
      ]
    },
    hobbies: {
      type: 'array',
      title: 'Hobbies',
      items: {
        type: 'string'
      },
      minItems: 1
    },
    birthdate: {
      type: 'string',
      title: 'Birthdate',
      format: 'date-time'
    },
    admin: {
      type: 'boolean',
      title: 'Admin'
    },
    rank: {
      type: 'integer',
      title: 'Rank',
      exclusiveMinimum: 0
    }
  }
});
```

### Provide additional Schema as meta property in Yup

Add additional JSON Schema information to the `jsonSchema` property via the `meta()` method. This will be shallow merged with the result of the conversion.

```js
const schema = object({ ... }).meta({
  jsonSchema: {
    $id: '...'
    description: '...'
  }
});
```

### extend the schema

You can also use the `extendSchema` to add helpful methods to all of your yup schemas. Use the `example`, `examples`, `description`, and `jsonSchema` methods to add common proprties to your JSON Schemas.

```js
import {
  object,
  string,
  array,
  tuple,
  date,
  boolean,
  number,
  addMethod,
  Schema
} from 'yup';
import { extendSchema, convertSchema } from '@sodaru/yup-to-json-schema';

extendSchema({ addMethod, Schema });

const schema = object({
  name: string()
    .label('Name')
    .description('Your first name')
    .example('Johnny Cash')
    .required(),
  address: tuple([string(), string()])
    .label('Address')
    .description('Your Address')
    .example(['Nashville', 'TN']),
  hobbies: array(string())
    .label('Hobbies')
    .min(1)
    .description('Your hobbies')
    .example(['Guitar', 'Singing']),
  birthdate: date()
    .label('Birthdate')
    .description('Your birthdate')
    .example(new Date('February 26, 1932')),
  admin: boolean()
    .label('Admin')
    .description('Use is an admin')
    .example(true),
  rank: number()
    .label('Rank')
    .description('Your rank')
    .jsonSchema((jsonSchema) => {
      return {
        ...jsonSchema,
        testProp: true
      };
    })
    .example(27)
    .integer()
    .positive()
});

const jsonSchema = convertSchema(schema);

jsonSchema = {
  type: 'object',
  required: ['name']
  properties: {
    name: {
      type: 'string',
      title: 'Name',
      description: 'Your first name',
      example: 'Johnny Cash'
    },
    address: {
      type: 'array',
      title: 'Address',
      description: 'Your Address',
      example: ['Nashville', 'TN'],
      minItems: 2,
      maxItems: 2,
      items: [
        {
          type: 'string'
        },
        {
          type: 'string'
        }
      ]
    },
    hobbies: {
      type: 'array',
      title: 'Hobbies',
      items: {
        type: 'string'
      },
      minItems: 1,
      description: 'Your hobbies',
      example: ['Guitar', 'Singing']
    },
    birthdate: {
      type: 'string',
      title: 'Birthdate',
      format: 'date-time',
      description: 'Your birthdate',
      example: '1932-02-26T06:00:00.000Z'
    },
    admin: {
      type: 'boolean',
      title: 'Admin',
      description: 'User is an admin',
      example: true
    },
    rank: {
      type: 'integer',
      title: 'Rank',
      exclusiveMinimum: 0,
      description: 'Your rank',
      testProp: true,
      example: 27
    }
  }
};
```

### Provide the data using the ResolveOptions for `when` and `lazy`

Use the second argument `ResolveOptions` to pass context to allow for better `when` and `lazy` methods. This argument is passed to the underlying `describe(options)`

```js
import { object, number } from "yup";
import { convertSchema } from "@sodaru/yup-to-json-schema";

const schema = object({
  rank: number().when(["name"], ([name], schema) => {
    return name === "Johnny Cash" ? schema.min(100) : schema.min(0);
  })
});

const schema = object({
  rank: lazy(({ name }) => {
    return name === "Johnny Cash" ? number().min(100) : number().min(0);
  })
});

const jsonSchema = convertSchema(schema, {
  value: { name: "Johnny Cash", rank: 100 }
});

jsonSchema = {
  type: "object",
  properties: {
    rank: {
      type: "number",
      minimum: 100
    }
  }
};
```

## Contribution

Fork the repo and send the Pull Requests to `develop` branch

`develop` is merged to the `main` branch periodically to make a release

## Support

This project is a part of the Open Source Initiative from Sodaru Technologies

Write an email to opensource@sodaru.com for queries on this project
