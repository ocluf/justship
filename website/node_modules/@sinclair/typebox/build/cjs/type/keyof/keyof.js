"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyOf = exports.KeyOfPropertyKeysToRest = void 0;
const index_1 = require("../literal/index");
const index_2 = require("../number/index");
const keyof_property_keys_1 = require("./keyof-property-keys");
const index_3 = require("../union/index");
const type_1 = require("../clone/type");
const keyof_from_mapped_result_1 = require("./keyof-from-mapped-result");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = require("../guard/kind");
// prettier-ignore
function KeyOfPropertyKeysToRest(T) {
    return T.map(L => L === '[number]' ? (0, index_2.Number)() : (0, index_1.Literal)(L));
}
exports.KeyOfPropertyKeysToRest = KeyOfPropertyKeysToRest;
/** `[Json]` Creates a KeyOf type */
function KeyOf(T, options = {}) {
    if ((0, kind_1.IsMappedResult)(T)) {
        return (0, keyof_from_mapped_result_1.KeyOfFromMappedResult)(T, options);
    }
    else {
        const K = (0, keyof_property_keys_1.KeyOfPropertyKeys)(T);
        const S = KeyOfPropertyKeysToRest(K);
        const U = (0, index_3.UnionEvaluated)(S);
        return (0, type_1.CloneType)(U, options);
    }
}
exports.KeyOf = KeyOf;
