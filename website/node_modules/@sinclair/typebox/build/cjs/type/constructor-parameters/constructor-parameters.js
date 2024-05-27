"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstructorParameters = void 0;
const index_1 = require("../tuple/index");
const type_1 = require("../clone/type");
/** `[JavaScript]` Extracts the ConstructorParameters from the given Constructor type */
function ConstructorParameters(schema, options = {}) {
    return (0, index_1.Tuple)((0, type_1.CloneRest)(schema.parameters), { ...options });
}
exports.ConstructorParameters = ConstructorParameters;
