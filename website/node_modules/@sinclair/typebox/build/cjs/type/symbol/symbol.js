"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Symbol = void 0;
const index_1 = require("../symbols/index");
/** `[JavaScript]` Creates a Symbol type */
function Symbol(options) {
    return { ...options, [index_1.Kind]: 'Symbol', type: 'symbol' };
}
exports.Symbol = Symbol;
