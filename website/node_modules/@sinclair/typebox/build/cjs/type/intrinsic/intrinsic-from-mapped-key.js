"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.IntrinsicFromMappedKey = void 0;
const index_1 = require("../mapped/index");
const intrinsic_1 = require("./intrinsic");
const index_2 = require("../literal/index");
// prettier-ignore
function MappedIntrinsicPropertyKey(K, M, options) {
    return {
        [K]: (0, intrinsic_1.Intrinsic)((0, index_2.Literal)(K), M, options)
    };
}
// prettier-ignore
function MappedIntrinsicPropertyKeys(K, M, options) {
    return K.reduce((Acc, L) => {
        return { ...Acc, ...MappedIntrinsicPropertyKey(L, M, options) };
    }, {});
}
// prettier-ignore
function MappedIntrinsicProperties(T, M, options) {
    return MappedIntrinsicPropertyKeys(T['keys'], M, options);
}
// prettier-ignore
function IntrinsicFromMappedKey(T, M, options) {
    const P = MappedIntrinsicProperties(T, M, options);
    return (0, index_1.MappedResult)(P);
}
exports.IntrinsicFromMappedKey = IntrinsicFromMappedKey;
