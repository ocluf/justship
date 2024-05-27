"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Function = void 0;
const type_1 = require("../clone/type");
const index_1 = require("../symbols/index");
/** `[JavaScript]` Creates a Function type */
function Function(parameters, returns, options) {
    return {
        ...options,
        [index_1.Kind]: 'Function',
        type: 'Function',
        parameters: (0, type_1.CloneRest)(parameters),
        returns: (0, type_1.CloneType)(returns),
    };
}
exports.Function = Function;
