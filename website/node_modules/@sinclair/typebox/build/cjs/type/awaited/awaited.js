"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Awaited = void 0;
const index_1 = require("../intersect/index");
const index_2 = require("../union/index");
const type_1 = require("../clone/type");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = require("../guard/kind");
// prettier-ignore
function FromRest(T) {
    return T.map(L => AwaitedResolve(L));
}
// prettier-ignore
function FromIntersect(T) {
    return (0, index_1.Intersect)(FromRest(T));
}
// prettier-ignore
function FromUnion(T) {
    return (0, index_2.Union)(FromRest(T));
}
// prettier-ignore
function FromPromise(T) {
    return AwaitedResolve(T);
}
// ----------------------------------------------------------------
// AwaitedResolve
// ----------------------------------------------------------------
// prettier-ignore
function AwaitedResolve(T) {
    return ((0, kind_1.IsIntersect)(T) ? FromIntersect(T.allOf) :
        (0, kind_1.IsUnion)(T) ? FromUnion(T.anyOf) :
            (0, kind_1.IsPromise)(T) ? FromPromise(T.item) :
                T);
}
/** `[JavaScript]` Constructs a type by recursively unwrapping Promise types */
function Awaited(T, options = {}) {
    return (0, type_1.CloneType)(AwaitedResolve(T), options);
}
exports.Awaited = Awaited;
