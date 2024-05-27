declare const memoize: <T extends unknown[], U>(fn: (...args: T) => U) => (...args: T) => U;
export { memoize };
