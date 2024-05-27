"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Union = void 0;
const index_1 = require("../never/index");
const type_1 = require("../clone/type");
const union_create_1 = require("./union-create");
/** `[Json]` Creates a Union type */
function Union(T, options = {}) {
    // prettier-ignore
    return (T.length === 0 ? (0, index_1.Never)(options) :
        T.length === 1 ? (0, type_1.CloneType)(T[0], options) :
            (0, union_create_1.UnionCreate)(T, options));
}
exports.Union = Union;
