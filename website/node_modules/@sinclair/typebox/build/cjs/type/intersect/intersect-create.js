"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.IntersectCreate = void 0;
const index_1 = require("../symbols/index");
const type_1 = require("../clone/type");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = require("../guard/kind");
// ------------------------------------------------------------------
// IntersectCreate
// ------------------------------------------------------------------
// prettier-ignore
function IntersectCreate(T, options) {
    const allObjects = T.every((schema) => (0, kind_1.IsObject)(schema));
    const clonedUnevaluatedProperties = (0, kind_1.IsSchema)(options.unevaluatedProperties)
        ? { unevaluatedProperties: (0, type_1.CloneType)(options.unevaluatedProperties) }
        : {};
    return ((options.unevaluatedProperties === false || (0, kind_1.IsSchema)(options.unevaluatedProperties) || allObjects
        ? { ...options, ...clonedUnevaluatedProperties, [index_1.Kind]: 'Intersect', type: 'object', allOf: (0, type_1.CloneRest)(T) }
        : { ...options, ...clonedUnevaluatedProperties, [index_1.Kind]: 'Intersect', allOf: (0, type_1.CloneRest)(T) }));
}
exports.IntersectCreate = IntersectCreate;
