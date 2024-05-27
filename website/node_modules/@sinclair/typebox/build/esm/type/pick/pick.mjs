import { Intersect } from '../intersect/index.mjs';
import { Union } from '../union/index.mjs';
import { Object } from '../object/index.mjs';
import { IndexPropertyKeys } from '../indexed/index.mjs';
import { Discard } from '../discard/index.mjs';
import { TransformKind } from '../symbols/index.mjs';
import { CloneType } from '../clone/type.mjs';
import { PickFromMappedKey } from './pick-from-mapped-key.mjs';
import { PickFromMappedResult } from './pick-from-mapped-result.mjs';
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
import { IsMappedKey, IsMappedResult, IsIntersect, IsUnion, IsObject, IsSchema } from '../guard/kind.mjs';
function FromIntersect(T, K) {
    return T.map((T) => PickResolve(T, K));
}
// prettier-ignore
function FromUnion(T, K) {
    return T.map((T) => PickResolve(T, K));
}
// prettier-ignore
function FromProperties(T, K) {
    const Acc = {};
    for (const K2 of K)
        if (K2 in T)
            Acc[K2] = T[K2];
    return Acc;
}
// ------------------------------------------------------------------
// PickResolve
// ------------------------------------------------------------------
// prettier-ignore
function PickResolve(T, K) {
    return (IsIntersect(T) ? Intersect(FromIntersect(T.allOf, K)) :
        IsUnion(T) ? Union(FromUnion(T.anyOf, K)) :
            IsObject(T) ? Object(FromProperties(T.properties, K)) :
                Object({}));
}
export function Pick(T, K, options = {}) {
    // mapped
    if (IsMappedKey(K))
        return PickFromMappedKey(T, K, options);
    if (IsMappedResult(T))
        return PickFromMappedResult(T, K, options);
    // non-mapped
    const I = IsSchema(K) ? IndexPropertyKeys(K) : K;
    const D = Discard(T, [TransformKind, '$id', 'required']);
    const R = CloneType(PickResolve(T, I), options);
    return { ...D, ...R };
}
