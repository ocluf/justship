"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Unsafe = void 0;
const index_1 = require("../symbols/index");
/** `[Json]` Creates a Unsafe type that will infers as the generic argument T */
function Unsafe(options = {}) {
    return {
        ...options,
        [index_1.Kind]: options[index_1.Kind] ?? 'Unsafe',
    };
}
exports.Unsafe = Unsafe;
