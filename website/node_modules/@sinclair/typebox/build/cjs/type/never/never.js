"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Never = void 0;
const index_1 = require("../symbols/index");
/** `[Json]` Creates a Never type */
function Never(options = {}) {
    return {
        ...options,
        [index_1.Kind]: 'Never',
        not: {},
    };
}
exports.Never = Never;
