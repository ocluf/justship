# memoize-weak
[![npm version](https://img.shields.io/npm/v/memoize-weak.svg)](https://www.npmjs.com/package/memoize-weak)
![Stability](https://img.shields.io/badge/stability-stable-brightgreen.svg)
[![Build Status](https://travis-ci.org/timkendrick/memoize-weak.svg?branch=master)](https://travis-ci.org/timkendrick/memoize-weak)

> Garbage-collected memoizer for variadic functions

## Installation

```bash
npm install memoize-weak
```

## Example

```js
import memoize from 'memoize-weak';

let foo = { foo: true };
let bar = { bar: true };
let baz = { baz: true };

const fn = memoize((...args) => args); // Create a memoized function

fn(foo, bar, baz); // Returns [{ foo: true }, { bar: true }, { baz: true }]
fn(foo, bar, baz); // Returns cached result

foo = bar = baz = undefined; // Original foo, bar and baz are now eligible for garbage collection
```

## Features

- Memoizes multiple arguments of any type
- Previous arguments are automatically garbage-collected when no longer referenced elsewhere
- No external dependencies
- Compatible with ES5 and up

## How does `memoize-weak` differ from other memoize implementations?

Memoize functions cache the return value of a function, so that it can be used again without having to recalculate the value.

They do this by maintaining a cache of arguments that the function has previously been called with, in order to return results that correspond to an earlier set of arguments.

Usually this argument cache is retained indefinitely, or for a predefined duration after the original function call. This means that any objects passed as arguments are not eligible for garbage collection, even if all other references to these objects have been removed.

`memoize-weak` uses "weak references" to the argument values, so that once all the references to the arguments have been removed elsewehere in the application, the arguments will become eligible for cleanup (along with any cached return values that correspond to those arguments).

This allows you to use memoized functions with impunity, without having to worry about potential memory leaks.

## Using `memoize-weak` in ES5 applications

`memoize-weak` requires that `Map` and `WeakMap` are globally available. This means that these will have to be polyfilled for use in an ES5 environment.

Some examples of `Map` and `WeakMap` polyfills for ES5:

- [Babel Polyfill](https://babeljs.io/docs/usage/polyfill/)
- [CoreJS](https://github.com/zloirock/core-js)
- [`es6-map`](https://www.npmjs.com/package/es6-map) and [`es6-weak-map`](https://www.npmjs.com/package/es6-weak-map)
