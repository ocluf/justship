"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Extends = void 0;
const index_1 = require("../union/index");
const extends_check_1 = require("./extends-check");
const type_1 = require("../clone/type");
const extends_from_mapped_key_1 = require("./extends-from-mapped-key");
const extends_from_mapped_result_1 = require("./extends-from-mapped-result");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = require("../guard/kind");
// prettier-ignore
function ExtendsResolve(left, right, trueType, falseType) {
    const R = (0, extends_check_1.ExtendsCheck)(left, right);
    return (R === extends_check_1.ExtendsResult.Union ? (0, index_1.Union)([trueType, falseType]) :
        R === extends_check_1.ExtendsResult.True ? trueType :
            falseType);
}
/** `[Json]` Creates a Conditional type */
function Extends(L, R, T, F, options = {}) {
    // prettier-ignore
    return ((0, kind_1.IsMappedResult)(L) ? (0, extends_from_mapped_result_1.ExtendsFromMappedResult)(L, R, T, F, options) :
        (0, kind_1.IsMappedKey)(L) ? (0, type_1.CloneType)((0, extends_from_mapped_key_1.ExtendsFromMappedKey)(L, R, T, F, options)) :
            (0, type_1.CloneType)(ExtendsResolve(L, R, T, F), options));
}
exports.Extends = Extends;
