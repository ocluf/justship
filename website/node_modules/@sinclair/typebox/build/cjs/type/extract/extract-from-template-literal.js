"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtractFromTemplateLiteral = void 0;
const extract_1 = require("./extract");
const index_1 = require("../template-literal/index");
function ExtractFromTemplateLiteral(L, R) {
    return (0, extract_1.Extract)((0, index_1.TemplateLiteralToUnion)(L), R);
}
exports.ExtractFromTemplateLiteral = ExtractFromTemplateLiteral;
