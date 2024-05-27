"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Pick = void 0;
const index_1 = require("../intersect/index");
const index_2 = require("../union/index");
const index_3 = require("../object/index");
const index_4 = require("../indexed/index");
const index_5 = require("../discard/index");
const index_6 = require("../symbols/index");
const type_1 = require("../clone/type");
const pick_from_mapped_key_1 = require("./pick-from-mapped-key");
const pick_from_mapped_result_1 = require("./pick-from-mapped-result");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = require("../guard/kind");
function FromIntersect(T, K) {
    return T.map((T) => PickResolve(T, K));
}
// prettier-ignore
function FromUnion(T, K) {
    return T.map((T) => PickResolve(T, K));
}
// prettier-ignore
function FromProperties(T, K) {
    const Acc = {};
    for (const K2 of K)
        if (K2 in T)
            Acc[K2] = T[K2];
    return Acc;
}
// ------------------------------------------------------------------
// PickResolve
// ------------------------------------------------------------------
// prettier-ignore
function PickResolve(T, K) {
    return ((0, kind_1.IsIntersect)(T) ? (0, index_1.Intersect)(FromIntersect(T.allOf, K)) :
        (0, kind_1.IsUnion)(T) ? (0, index_2.Union)(FromUnion(T.anyOf, K)) :
            (0, kind_1.IsObject)(T) ? (0, index_3.Object)(FromProperties(T.properties, K)) :
                (0, index_3.Object)({}));
}
function Pick(T, K, options = {}) {
    // mapped
    if ((0, kind_1.IsMappedKey)(K))
        return (0, pick_from_mapped_key_1.PickFromMappedKey)(T, K, options);
    if ((0, kind_1.IsMappedResult)(T))
        return (0, pick_from_mapped_result_1.PickFromMappedResult)(T, K, options);
    // non-mapped
    const I = (0, kind_1.IsSchema)(K) ? (0, index_4.IndexPropertyKeys)(K) : K;
    const D = (0, index_5.Discard)(T, [index_6.TransformKind, '$id', 'required']);
    const R = (0, type_1.CloneType)(PickResolve(T, I), options);
    return { ...D, ...R };
}
exports.Pick = Pick;
