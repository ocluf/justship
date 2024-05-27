import { Intersect } from '../intersect/index.mjs';
import { Union } from '../union/index.mjs';
import { Object } from '../object/index.mjs';
import { OptionalKind, TransformKind } from '../symbols/index.mjs';
import { CloneType } from '../clone/type.mjs';
import { Discard } from '../discard/index.mjs';
import { RequiredFromMappedResult } from './required-from-mapped-result.mjs';
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
import { IsMappedResult, IsIntersect, IsUnion, IsObject } from '../guard/kind.mjs';
// prettier-ignore
function FromRest(T) {
    return T.map(L => RequiredResolve(L));
}
// prettier-ignore
function FromProperties(T) {
    const Acc = {};
    for (const K of globalThis.Object.getOwnPropertyNames(T))
        Acc[K] = Discard(T[K], [OptionalKind]);
    return Acc;
}
// ------------------------------------------------------------------
// RequiredResolve
// ------------------------------------------------------------------
// prettier-ignore
function RequiredResolve(T) {
    return (IsIntersect(T) ? Intersect(FromRest(T.allOf)) :
        IsUnion(T) ? Union(FromRest(T.anyOf)) :
            IsObject(T) ? Object(FromProperties(T.properties)) :
                Object({}));
}
/** `[Json]` Constructs a type where all properties are required */
export function Required(T, options = {}) {
    if (IsMappedResult(T)) {
        return RequiredFromMappedResult(T, options);
    }
    else {
        const D = Discard(T, [TransformKind, '$id', 'required']);
        const R = CloneType(RequiredResolve(T), options);
        return { ...D, ...R };
    }
}
