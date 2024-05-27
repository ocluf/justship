"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Parameters = void 0;
const index_1 = require("../tuple/index");
const type_1 = require("../clone/type");
/** `[JavaScript]` Extracts the Parameters from the given Function type */
function Parameters(schema, options = {}) {
    return (0, index_1.Tuple)((0, type_1.CloneRest)(schema.parameters), { ...options });
}
exports.Parameters = Parameters;
