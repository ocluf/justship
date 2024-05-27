"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Boolean = void 0;
const index_1 = require("../symbols/index");
/** `[Json]` Creates a Boolean type */
function Boolean(options = {}) {
    return {
        ...options,
        [index_1.Kind]: 'Boolean',
        type: 'boolean',
    };
}
exports.Boolean = Boolean;
