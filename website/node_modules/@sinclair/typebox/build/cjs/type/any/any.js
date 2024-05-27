"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Any = void 0;
const index_1 = require("../symbols/index");
/** `[Json]` Creates an Any type */
function Any(options = {}) {
    return { ...options, [index_1.Kind]: 'Any' };
}
exports.Any = Any;
