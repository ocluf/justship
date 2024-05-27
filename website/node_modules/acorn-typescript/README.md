# acorn-typescript
[![npm version](https://img.shields.io/npm/v/acorn-typescript.svg?style=flat)](https://www.npmjs.com/package/acorn-typescript)[![Coverage Status](https://codecov.io/gh/TyrealHu/acorn-typescript/branch/master/graph/badge.svg)](https://codecov.io/gh/TyrealHu/acorn-typescript)
---

This is plugin for [Acorn](http://marijnhaverbeke.nl/acorn/) - a tiny, fast JavaScript parser, written completely in JavaScript.

It was created as an experimental alternative, faster [TypeScript](https://www.typescriptlang.org/) parser. It will help you to parse
typescript script into typeScript AST.

## Usage

Requiring this module provides you with an Acorn plugin that you can use like this:

```typescript
import * as acorn from 'acorn'
import tsPlugin from 'acorn-typescript'

/*
*
* */
const node = acorn.Parser.extend(tsPlugin()).parse(`
const a = 1
type A = number
export {
  a,
  type A as B
}
`, {
  sourceType: 'module',
  ecmaVersion: 'latest',
  locations: true
})
```

If you want to enable parsing within a TypeScript ambient context, where certain syntax have different rules (like .d.ts files and inside [declare module blocks](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)).
```typescript
import * as acorn from 'acorn'
import tsPlugin from 'acorn-typescript'

/*
*
* */
const node = acorn.Parser.extend(tsPlugin({ dts: true })).parse(`
const a = 1
type A = number
export {
  a,
  type A as B
}
`, {
  sourceType: 'module',
  ecmaVersion: 'latest',
  locations: true
})
```

## Notice
- You have to enable options.locations while using acorn-typescript
```ts
acorn.parse(input, {
    sourceType: 'module',
    ecmaVersion: 'latest',
    // here
    locations: true
  })
```

## SUPPORTED
- Typescript normal syntax
- Support to parse TypeScript [Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)
- Support to parse JSX & TSX

## CHANGELOG

[click](./CHANGELOG.md)

## RoadMap
- support import-assertions

## License
[MIT](https://couto.mit-license.org/)
