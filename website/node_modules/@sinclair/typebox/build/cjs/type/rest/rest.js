"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Rest = void 0;
const type_1 = require("../clone/type");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = require("../guard/kind");
// prettier-ignore
function RestResolve(T) {
    return ((0, kind_1.IsIntersect)(T) ? (0, type_1.CloneRest)(T.allOf) :
        (0, kind_1.IsUnion)(T) ? (0, type_1.CloneRest)(T.anyOf) :
            (0, kind_1.IsTuple)(T) ? (0, type_1.CloneRest)(T.items ?? []) :
                []);
}
/** `[Json]` Extracts interior Rest elements from Tuple, Intersect and Union types */
function Rest(T) {
    return (0, type_1.CloneRest)(RestResolve(T));
}
exports.Rest = Rest;
