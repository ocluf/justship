"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Object = void 0;
const type_1 = require("../clone/type");
const index_1 = require("../symbols/index");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = require("../guard/kind");
/** `[Json]` Creates an Object type */
function _Object(properties, options = {}) {
    const propertyKeys = globalThis.Object.getOwnPropertyNames(properties);
    const optionalKeys = propertyKeys.filter((key) => (0, kind_1.IsOptional)(properties[key]));
    const requiredKeys = propertyKeys.filter((name) => !optionalKeys.includes(name));
    const clonedAdditionalProperties = (0, kind_1.IsSchema)(options.additionalProperties) ? { additionalProperties: (0, type_1.CloneType)(options.additionalProperties) } : {};
    const clonedProperties = {};
    for (const key of propertyKeys)
        clonedProperties[key] = (0, type_1.CloneType)(properties[key]);
    return (requiredKeys.length > 0
        ? { ...options, ...clonedAdditionalProperties, [index_1.Kind]: 'Object', type: 'object', properties: clonedProperties, required: requiredKeys }
        : { ...options, ...clonedAdditionalProperties, [index_1.Kind]: 'Object', type: 'object', properties: clonedProperties });
}
/** `[Json]` Creates an Object type */
exports.Object = _Object;
