// @ts-expect-error No type information exists
import baseMemoize from 'memoize-weak';
const wrap = (fn) => {
    return (...args) => fn(...args);
};
const memoize = baseMemoize;
export { memoize };
