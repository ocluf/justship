"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PickFromMappedKey = void 0;
const index_1 = require("../mapped/index");
const pick_1 = require("./pick");
// prettier-ignore
function FromPropertyKey(T, K, options) {
    return {
        [K]: (0, pick_1.Pick)(T, [K], options)
    };
}
// prettier-ignore
function FromPropertyKeys(T, K, options) {
    return K.reduce((Acc, LK) => {
        return { ...Acc, ...FromPropertyKey(T, LK, options) };
    }, {});
}
// prettier-ignore
function FromMappedKey(T, K, options) {
    return FromPropertyKeys(T, K.keys, options);
}
// prettier-ignore
function PickFromMappedKey(T, K, options) {
    const P = FromMappedKey(T, K, options);
    return (0, index_1.MappedResult)(P);
}
exports.PickFromMappedKey = PickFromMappedKey;
