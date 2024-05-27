"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UnionEvaluated = void 0;
const index_1 = require("../symbols/index");
const type_1 = require("../clone/type");
const index_2 = require("../discard/index");
const index_3 = require("../never/index");
const index_4 = require("../optional/index");
const union_create_1 = require("./union-create");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = require("../guard/kind");
// prettier-ignore
function IsUnionOptional(T) {
    return T.some(L => (0, kind_1.IsOptional)(L));
}
// prettier-ignore
function RemoveOptionalFromRest(T) {
    return T.map(L => (0, kind_1.IsOptional)(L) ? RemoveOptionalFromType(L) : L);
}
// prettier-ignore
function RemoveOptionalFromType(T) {
    return ((0, index_2.Discard)(T, [index_1.OptionalKind]));
}
// prettier-ignore
function ResolveUnion(T, options) {
    return (IsUnionOptional(T)
        ? (0, index_4.Optional)((0, union_create_1.UnionCreate)(RemoveOptionalFromRest(T), options))
        : (0, union_create_1.UnionCreate)(RemoveOptionalFromRest(T), options));
}
/** `[Json]` Creates an evaluated Union type */
function UnionEvaluated(T, options = {}) {
    // prettier-ignore
    return (T.length === 0 ? (0, index_3.Never)(options) :
        T.length === 1 ? (0, type_1.CloneType)(T[0], options) :
            ResolveUnion(T, options));
}
exports.UnionEvaluated = UnionEvaluated;
