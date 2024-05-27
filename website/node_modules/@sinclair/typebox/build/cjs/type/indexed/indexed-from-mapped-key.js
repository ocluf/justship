"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexFromMappedKey = void 0;
const indexed_1 = require("./indexed");
const index_1 = require("../mapped/index");
// prettier-ignore
function MappedIndexPropertyKey(T, K, options) {
    return { [K]: (0, indexed_1.Index)(T, [K], options) };
}
// prettier-ignore
function MappedIndexPropertyKeys(T, K, options) {
    return K.reduce((Acc, L) => {
        return { ...Acc, ...MappedIndexPropertyKey(T, L, options) };
    }, {});
}
// prettier-ignore
function MappedIndexProperties(T, K, options) {
    return MappedIndexPropertyKeys(T, K.keys, options);
}
// prettier-ignore
function IndexFromMappedKey(T, K, options) {
    const P = MappedIndexProperties(T, K, options);
    return (0, index_1.MappedResult)(P);
}
exports.IndexFromMappedKey = IndexFromMappedKey;
