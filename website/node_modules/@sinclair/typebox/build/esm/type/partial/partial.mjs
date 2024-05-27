import { Optional } from '../optional/index.mjs';
import { Object } from '../object/index.mjs';
import { Intersect } from '../intersect/index.mjs';
import { Union } from '../union/index.mjs';
import { Discard } from '../discard/index.mjs';
import { TransformKind } from '../symbols/index.mjs';
import { CloneType } from '../clone/type.mjs';
import { PartialFromMappedResult } from './partial-from-mapped-result.mjs';
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
import { IsMappedResult, IsIntersect, IsUnion, IsObject } from '../guard/kind.mjs';
// prettier-ignore
function FromRest(T) {
    return T.map(L => PartialResolve(L));
}
// prettier-ignore
function FromProperties(T) {
    const Acc = {};
    for (const K of globalThis.Object.getOwnPropertyNames(T))
        Acc[K] = Optional(T[K]);
    return Acc;
}
// ------------------------------------------------------------------
// PartialResolve
// ------------------------------------------------------------------
// prettier-ignore
function PartialResolve(T) {
    return (IsIntersect(T) ? Intersect(FromRest(T.allOf)) :
        IsUnion(T) ? Union(FromRest(T.anyOf)) :
            IsObject(T) ? Object(FromProperties(T.properties)) :
                Object({}));
}
/** `[Json]` Constructs a type where all properties are optional */
export function Partial(T, options = {}) {
    if (IsMappedResult(T))
        return PartialFromMappedResult(T, options);
    const D = Discard(T, [TransformKind, '$id', 'required']);
    const R = CloneType(PartialResolve(T), options);
    return { ...D, ...R };
}
