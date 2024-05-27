"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Uncapitalize = void 0;
const intrinsic_1 = require("./intrinsic");
/** `[Json]` Intrinsic function to Uncapitalize LiteralString types */
function Uncapitalize(T, options = {}) {
    return (0, intrinsic_1.Intrinsic)(T, 'Uncapitalize', options);
}
exports.Uncapitalize = Uncapitalize;
