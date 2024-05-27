"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.IntersectEvaluated = void 0;
const index_1 = require("../symbols/index");
const type_1 = require("../clone/type");
const index_2 = require("../discard/index");
const index_3 = require("../never/index");
const index_4 = require("../optional/index");
const intersect_create_1 = require("./intersect-create");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = require("../guard/kind");
// prettier-ignore
function IsIntersectOptional(T) {
    return T.every(L => (0, kind_1.IsOptional)(L));
}
// prettier-ignore
function RemoveOptionalFromType(T) {
    return ((0, index_2.Discard)(T, [index_1.OptionalKind]));
}
// prettier-ignore
function RemoveOptionalFromRest(T) {
    return T.map(L => (0, kind_1.IsOptional)(L) ? RemoveOptionalFromType(L) : L);
}
// prettier-ignore
function ResolveIntersect(T, options) {
    return (IsIntersectOptional(T)
        ? (0, index_4.Optional)((0, intersect_create_1.IntersectCreate)(RemoveOptionalFromRest(T), options))
        : (0, intersect_create_1.IntersectCreate)(RemoveOptionalFromRest(T), options));
}
/** `[Json]` Creates an evaluated Intersect type */
function IntersectEvaluated(T, options = {}) {
    if (T.length === 0)
        return (0, index_3.Never)(options);
    if (T.length === 1)
        return (0, type_1.CloneType)(T[0], options);
    if (T.some((schema) => (0, kind_1.IsTransform)(schema)))
        throw new Error('Cannot intersect transform types');
    return ResolveIntersect(T, options);
}
exports.IntersectEvaluated = IntersectEvaluated;
