"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyOfPattern = exports.KeyOfPropertyKeys = void 0;
const index_1 = require("../sets/index");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = require("../guard/kind");
// prettier-ignore
function FromRest(T) {
    const Acc = [];
    for (const L of T)
        Acc.push(KeyOfPropertyKeys(L));
    return Acc;
}
// prettier-ignore
function FromIntersect(T) {
    const C = FromRest(T);
    const R = (0, index_1.SetUnionMany)(C);
    return R;
}
// prettier-ignore
function FromUnion(T) {
    const C = FromRest(T);
    const R = (0, index_1.SetIntersectMany)(C);
    return R;
}
// prettier-ignore
function FromTuple(T) {
    return T.map((_, I) => I.toString());
}
// prettier-ignore
function FromArray(_) {
    return (['[number]']);
}
// prettier-ignore
function FromProperties(T) {
    return (globalThis.Object.getOwnPropertyNames(T));
}
// ------------------------------------------------------------------
// FromPatternProperties
// ------------------------------------------------------------------
// prettier-ignore
function FromPatternProperties(patternProperties) {
    if (!includePatternProperties)
        return [];
    const patternPropertyKeys = globalThis.Object.getOwnPropertyNames(patternProperties);
    return patternPropertyKeys.map(key => {
        return (key[0] === '^' && key[key.length - 1] === '$')
            ? key.slice(1, key.length - 1)
            : key;
    });
}
/** Returns a tuple of PropertyKeys derived from the given TSchema. */
// prettier-ignore
function KeyOfPropertyKeys(T) {
    return ((0, kind_1.IsIntersect)(T) ? FromIntersect(T.allOf) :
        (0, kind_1.IsUnion)(T) ? FromUnion(T.anyOf) :
            (0, kind_1.IsTuple)(T) ? FromTuple(T.items ?? []) :
                (0, kind_1.IsArray)(T) ? FromArray(T.items) :
                    (0, kind_1.IsObject)(T) ? FromProperties(T.properties) :
                        (0, kind_1.IsRecord)(T) ? FromPatternProperties(T.patternProperties) :
                            []);
}
exports.KeyOfPropertyKeys = KeyOfPropertyKeys;
// ----------------------------------------------------------------
// KeyOfPattern
// ----------------------------------------------------------------
let includePatternProperties = false;
/** Returns a regular expression pattern derived from the given TSchema */
function KeyOfPattern(schema) {
    includePatternProperties = true;
    const keys = KeyOfPropertyKeys(schema);
    includePatternProperties = false;
    const pattern = keys.map((key) => `(${key})`);
    return `^(${pattern.join('|')})$`;
}
exports.KeyOfPattern = KeyOfPattern;
