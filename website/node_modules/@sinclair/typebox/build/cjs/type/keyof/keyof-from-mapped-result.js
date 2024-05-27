"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyOfFromMappedResult = void 0;
const index_1 = require("../mapped/index");
const keyof_1 = require("./keyof");
// prettier-ignore
function FromProperties(K, options) {
    const Acc = {};
    for (const K2 of globalThis.Object.getOwnPropertyNames(K))
        Acc[K2] = (0, keyof_1.KeyOf)(K[K2], options);
    return Acc;
}
// prettier-ignore
function FromMappedResult(R, options) {
    return FromProperties(R.properties, options);
}
// prettier-ignore
function KeyOfFromMappedResult(R, options) {
    const P = FromMappedResult(R, options);
    return (0, index_1.MappedResult)(P);
}
exports.KeyOfFromMappedResult = KeyOfFromMappedResult;
