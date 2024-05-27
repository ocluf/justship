"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RegExp = void 0;
const value_1 = require("../guard/value");
const index_1 = require("../symbols/index");
/** `[JavaScript]` Creates a RegExp type */
function RegExp(unresolved, options = {}) {
    const expr = (0, value_1.IsString)(unresolved) ? new globalThis.RegExp(unresolved) : unresolved;
    return { ...options, [index_1.Kind]: 'RegExp', type: 'RegExp', source: expr.source, flags: expr.flags };
}
exports.RegExp = RegExp;
