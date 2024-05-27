"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Literal = void 0;
const index_1 = require("../symbols/index");
/** `[Json]` Creates a Literal type */
function Literal(value, options = {}) {
    return {
        ...options,
        [index_1.Kind]: 'Literal',
        const: value,
        type: typeof value,
    };
}
exports.Literal = Literal;
