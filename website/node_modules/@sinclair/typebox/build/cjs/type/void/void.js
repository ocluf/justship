"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Void = void 0;
const index_1 = require("../symbols/index");
/** `[JavaScript]` Creates a Void type */
function Void(options = {}) {
    return {
        ...options,
        [index_1.Kind]: 'Void',
        type: 'void',
    };
}
exports.Void = Void;
