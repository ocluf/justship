"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MappedResult = void 0;
const index_1 = require("../symbols/index");
// prettier-ignore
function MappedResult(properties) {
    return {
        [index_1.Kind]: 'MappedResult',
        properties
    };
}
exports.MappedResult = MappedResult;
