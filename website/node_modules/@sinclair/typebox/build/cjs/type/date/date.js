"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Date = void 0;
const index_1 = require("../symbols/index");
/** `[JavaScript]` Creates a Date type */
function Date(options = {}) {
    return {
        ...options,
        [index_1.Kind]: 'Date',
        type: 'Date',
    };
}
exports.Date = Date;
