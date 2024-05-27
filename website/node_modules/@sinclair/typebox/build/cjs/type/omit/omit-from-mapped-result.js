"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OmitFromMappedResult = void 0;
const index_1 = require("../mapped/index");
const omit_1 = require("./omit");
// prettier-ignore
function FromProperties(P, K, options) {
    const Acc = {};
    for (const K2 of globalThis.Object.getOwnPropertyNames(P))
        Acc[K2] = (0, omit_1.Omit)(P[K2], K, options);
    return Acc;
}
// prettier-ignore
function FromMappedResult(R, K, options) {
    return FromProperties(R.properties, K, options);
}
// prettier-ignore
function OmitFromMappedResult(R, K, options) {
    const P = FromMappedResult(R, K, options);
    return (0, index_1.MappedResult)(P);
}
exports.OmitFromMappedResult = OmitFromMappedResult;
