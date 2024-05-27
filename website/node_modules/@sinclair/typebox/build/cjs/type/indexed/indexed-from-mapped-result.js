"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexFromMappedResult = void 0;
const index_1 = require("../mapped/index");
const indexed_property_keys_1 = require("./indexed-property-keys");
const index_2 = require("./index");
// prettier-ignore
function FromProperties(T, P, options) {
    const Acc = {};
    for (const K2 of Object.getOwnPropertyNames(P)) {
        Acc[K2] = (0, index_2.Index)(T, (0, indexed_property_keys_1.IndexPropertyKeys)(P[K2]), options);
    }
    return Acc;
}
// prettier-ignore
function FromMappedResult(T, R, options) {
    return FromProperties(T, R.properties, options);
}
// prettier-ignore
function IndexFromMappedResult(T, R, options) {
    const P = FromMappedResult(T, R, options);
    return (0, index_1.MappedResult)(P);
}
exports.IndexFromMappedResult = IndexFromMappedResult;
