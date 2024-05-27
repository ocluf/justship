"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InstanceType = void 0;
const type_1 = require("../clone/type");
/** `[JavaScript]` Extracts the InstanceType from the given Constructor type */
function InstanceType(schema, options = {}) {
    return (0, type_1.CloneType)(schema.returns, options);
}
exports.InstanceType = InstanceType;
