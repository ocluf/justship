"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Clone = void 0;
// ------------------------------------------------------------------
// ValueGuard
// ------------------------------------------------------------------
const index_1 = require("../guard/index");
// ------------------------------------------------------------------
// Clonable
// ------------------------------------------------------------------
function ObjectType(value) {
    const Acc = {};
    for (const key of Object.getOwnPropertyNames(value)) {
        Acc[key] = Clone(value[key]);
    }
    for (const key of Object.getOwnPropertySymbols(value)) {
        Acc[key] = Clone(value[key]);
    }
    return Acc;
}
function ArrayType(value) {
    return value.map((element) => Clone(element));
}
function TypedArrayType(value) {
    return value.slice();
}
function DateType(value) {
    return new Date(value.toISOString());
}
function ValueType(value) {
    return value;
}
// ------------------------------------------------------------------
// Clone
// ------------------------------------------------------------------
/** Returns a clone of the given value */
function Clone(value) {
    if ((0, index_1.IsArray)(value))
        return ArrayType(value);
    if ((0, index_1.IsDate)(value))
        return DateType(value);
    if ((0, index_1.IsStandardObject)(value))
        return ObjectType(value);
    if ((0, index_1.IsTypedArray)(value))
        return TypedArrayType(value);
    if ((0, index_1.IsValueType)(value))
        return ValueType(value);
    throw new Error('ValueClone: Unable to clone value');
}
exports.Clone = Clone;
