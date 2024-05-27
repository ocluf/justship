// ------------------------------------------------------------------
// ValueGuard
// ------------------------------------------------------------------
import { IsArray, IsDate, IsStandardObject, IsTypedArray, IsValueType } from '../guard/index.mjs';
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
export function Clone(value) {
    if (IsArray(value))
        return ArrayType(value);
    if (IsDate(value))
        return DateType(value);
    if (IsStandardObject(value))
        return ObjectType(value);
    if (IsTypedArray(value))
        return TypedArrayType(value);
    if (IsValueType(value))
        return ValueType(value);
    throw new Error('ValueClone: Unable to clone value');
}
