"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PickFromMappedResult = void 0;
const index_1 = require("../mapped/index");
const pick_1 = require("./pick");
// prettier-ignore
function FromProperties(P, K, options) {
    const Acc = {};
    for (const K2 of globalThis.Object.getOwnPropertyNames(P))
        Acc[K2] = (0, pick_1.Pick)(P[K2], K, options);
    return Acc;
}
// prettier-ignore
function FromMappedResult(R, K, options) {
    return FromProperties(R.properties, K, options);
}
// prettier-ignore
function PickFromMappedResult(R, K, options) {
    const P = FromMappedResult(R, K, options);
    return (0, index_1.MappedResult)(P);
}
exports.PickFromMappedResult = PickFromMappedResult;
