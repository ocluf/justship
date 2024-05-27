import stringConverter from './string.js';
import numberConverter from './number.js';
import booleanConverter from './boolean.js';
import dateConverter from './date.js';
import arrayConverter from './array.js';
import objectConverter from './object.js';
import tupleConverter from './tuple.js';
import mixedConverter from './mixed.js';
import lazyConverter from './lazy.js';
export function convertSchema(yupSchema, options) {
    const { converters, ...resolveOptions } = options || {};
    const allConverters = {
        string: stringConverter,
        number: numberConverter,
        boolean: booleanConverter,
        date: dateConverter,
        array: arrayConverter,
        object: objectConverter,
        tuple: tupleConverter,
        mixed: mixedConverter,
        lazy: lazyConverter,
        ...converters
    };
    const description = yupSchema.describe(resolveOptions);
    const converter = allConverters[description.type];
    return converter(description, allConverters);
}
