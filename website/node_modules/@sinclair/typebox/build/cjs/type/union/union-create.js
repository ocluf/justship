"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UnionCreate = void 0;
const type_1 = require("../clone/type");
const index_1 = require("../symbols/index");
function UnionCreate(T, options) {
    return { ...options, [index_1.Kind]: 'Union', anyOf: (0, type_1.CloneRest)(T) };
}
exports.UnionCreate = UnionCreate;
