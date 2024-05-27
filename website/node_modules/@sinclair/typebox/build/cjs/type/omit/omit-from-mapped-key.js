"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OmitFromMappedKey = void 0;
const index_1 = require("../mapped/index");
const omit_1 = require("./omit");
// prettier-ignore
function FromPropertyKey(T, K, options) {
    return {
        [K]: (0, omit_1.Omit)(T, [K], options)
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
function OmitFromMappedKey(T, K, options) {
    const P = FromMappedKey(T, K, options);
    return (0, index_1.MappedResult)(P);
}
exports.OmitFromMappedKey = OmitFromMappedKey;
