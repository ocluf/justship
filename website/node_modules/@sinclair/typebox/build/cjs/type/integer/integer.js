"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Integer = void 0;
const index_1 = require("../symbols/index");
/** `[Json]` Creates an Integer type */
function Integer(options = {}) {
    return {
        ...options,
        [index_1.Kind]: 'Integer',
        type: 'integer',
    };
}
exports.Integer = Integer;
