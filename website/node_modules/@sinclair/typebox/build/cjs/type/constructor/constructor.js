"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Constructor = void 0;
const type_1 = require("../clone/type");
const index_1 = require("../symbols/index");
/** `[JavaScript]` Creates a Constructor type */
function Constructor(parameters, returns, options) {
    return {
        ...options,
        [index_1.Kind]: 'Constructor',
        type: 'Constructor',
        parameters: (0, type_1.CloneRest)(parameters),
        returns: (0, type_1.CloneType)(returns),
    };
}
exports.Constructor = Constructor;
