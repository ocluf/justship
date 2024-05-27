"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Uint8Array = void 0;
const index_1 = require("../symbols/index");
/** `[JavaScript]` Creates a Uint8Array type */
function Uint8Array(options = {}) {
    return { ...options, [index_1.Kind]: 'Uint8Array', type: 'Uint8Array' };
}
exports.Uint8Array = Uint8Array;
