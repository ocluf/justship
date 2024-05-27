import { SetUnionMany, SetIntersectMany } from '../sets/index.mjs';
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
import { IsIntersect, IsUnion, IsTuple, IsArray, IsObject, IsRecord } from '../guard/kind.mjs';
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
    const R = SetUnionMany(C);
    return R;
}
// prettier-ignore
function FromUnion(T) {
    const C = FromRest(T);
    const R = SetIntersectMany(C);
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
export function KeyOfPropertyKeys(T) {
    return (IsIntersect(T) ? FromIntersect(T.allOf) :
        IsUnion(T) ? FromUnion(T.anyOf) :
            IsTuple(T) ? FromTuple(T.items ?? []) :
                IsArray(T) ? FromArray(T.items) :
                    IsObject(T) ? FromProperties(T.properties) :
                        IsRecord(T) ? FromPatternProperties(T.patternProperties) :
                            []);
}
// ----------------------------------------------------------------
// KeyOfPattern
// ----------------------------------------------------------------
let includePatternProperties = false;
/** Returns a regular expression pattern derived from the given TSchema */
export function KeyOfPattern(schema) {
    includePatternProperties = true;
    const keys = KeyOfPropertyKeys(schema);
    includePatternProperties = false;
    const pattern = keys.map((key) => `(${key})`);
    return `^(${pattern.join('|')})$`;
}
