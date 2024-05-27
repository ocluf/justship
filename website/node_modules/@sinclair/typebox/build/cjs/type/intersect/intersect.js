"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Intersect = void 0;
const type_1 = require("../clone/type");
const index_1 = require("../never/index");
const intersect_create_1 = require("./intersect-create");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = require("../guard/kind");
/** `[Json]` Creates an evaluated Intersect type */
function Intersect(T, options = {}) {
    if (T.length === 0)
        return (0, index_1.Never)(options);
    if (T.length === 1)
        return (0, type_1.CloneType)(T[0], options);
    if (T.some((schema) => (0, kind_1.IsTransform)(schema)))
        throw new Error('Cannot intersect transform types');
    return (0, intersect_create_1.IntersectCreate)(T, options);
}
exports.Intersect = Intersect;
