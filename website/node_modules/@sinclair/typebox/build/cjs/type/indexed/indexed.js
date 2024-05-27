"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Index = exports.IndexFromPropertyKeys = exports.IndexFromPropertyKey = void 0;
const index_1 = require("../never/index");
const index_2 = require("../intersect/index");
const index_3 = require("../union/index");
const type_1 = require("../clone/type");
const indexed_property_keys_1 = require("./indexed-property-keys");
const indexed_from_mapped_key_1 = require("./indexed-from-mapped-key");
const indexed_from_mapped_result_1 = require("./indexed-from-mapped-result");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = require("../guard/kind");
// prettier-ignore
function FromRest(T, K) {
    return T.map(L => IndexFromPropertyKey(L, K));
}
// prettier-ignore
function FromIntersectRest(T) {
    return T.filter(L => !(0, kind_1.IsNever)(L));
}
// prettier-ignore
function FromIntersect(T, K) {
    return ((0, index_2.IntersectEvaluated)(FromIntersectRest(FromRest(T, K))));
}
// prettier-ignore
function FromUnionRest(T) {
    return (T.some(L => (0, kind_1.IsNever)(L))
        ? []
        : T);
}
// prettier-ignore
function FromUnion(T, K) {
    return ((0, index_3.UnionEvaluated)(FromUnionRest(FromRest(T, K))));
}
// prettier-ignore
function FromTuple(T, K) {
    return (K in T ? T[K] :
        K === '[number]' ? (0, index_3.UnionEvaluated)(T) :
            (0, index_1.Never)());
}
// prettier-ignore
function FromArray(T, K) {
    return (K === '[number]'
        ? T
        : (0, index_1.Never)());
}
// prettier-ignore
function FromProperty(T, K) {
    return (K in T ? T[K] : (0, index_1.Never)());
}
// prettier-ignore
function IndexFromPropertyKey(T, K) {
    return ((0, kind_1.IsIntersect)(T) ? FromIntersect(T.allOf, K) :
        (0, kind_1.IsUnion)(T) ? FromUnion(T.anyOf, K) :
            (0, kind_1.IsTuple)(T) ? FromTuple(T.items ?? [], K) :
                (0, kind_1.IsArray)(T) ? FromArray(T.items, K) :
                    (0, kind_1.IsObject)(T) ? FromProperty(T.properties, K) :
                        (0, index_1.Never)());
}
exports.IndexFromPropertyKey = IndexFromPropertyKey;
// prettier-ignore
function IndexFromPropertyKeys(T, K) {
    return K.map(L => IndexFromPropertyKey(T, L));
}
exports.IndexFromPropertyKeys = IndexFromPropertyKeys;
// prettier-ignore
function FromSchema(T, K) {
    return ((0, index_3.UnionEvaluated)(IndexFromPropertyKeys(T, K)));
}
/** `[Json]` Returns an Indexed property type for the given keys */
function Index(T, K, options = {}) {
    // prettier-ignore
    return ((0, kind_1.IsMappedResult)(K) ? (0, type_1.CloneType)((0, indexed_from_mapped_result_1.IndexFromMappedResult)(T, K, options)) :
        (0, kind_1.IsMappedKey)(K) ? (0, type_1.CloneType)((0, indexed_from_mapped_key_1.IndexFromMappedKey)(T, K, options)) :
            (0, kind_1.IsSchema)(K) ? (0, type_1.CloneType)(FromSchema(T, (0, indexed_property_keys_1.IndexPropertyKeys)(K)), options) :
                (0, type_1.CloneType)(FromSchema(T, K), options));
}
exports.Index = Index;
