import { Never } from '../never/index.mjs';
import { IntersectEvaluated } from '../intersect/index.mjs';
import { UnionEvaluated } from '../union/index.mjs';
import { CloneType } from '../clone/type.mjs';
import { IndexPropertyKeys } from './indexed-property-keys.mjs';
import { IndexFromMappedKey } from './indexed-from-mapped-key.mjs';
import { IndexFromMappedResult } from './indexed-from-mapped-result.mjs';
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
import { IsArray, IsIntersect, IsObject, IsMappedKey, IsMappedResult, IsNever, IsSchema, IsTuple, IsUnion } from '../guard/kind.mjs';
// prettier-ignore
function FromRest(T, K) {
    return T.map(L => IndexFromPropertyKey(L, K));
}
// prettier-ignore
function FromIntersectRest(T) {
    return T.filter(L => !IsNever(L));
}
// prettier-ignore
function FromIntersect(T, K) {
    return (IntersectEvaluated(FromIntersectRest(FromRest(T, K))));
}
// prettier-ignore
function FromUnionRest(T) {
    return (T.some(L => IsNever(L))
        ? []
        : T);
}
// prettier-ignore
function FromUnion(T, K) {
    return (UnionEvaluated(FromUnionRest(FromRest(T, K))));
}
// prettier-ignore
function FromTuple(T, K) {
    return (K in T ? T[K] :
        K === '[number]' ? UnionEvaluated(T) :
            Never());
}
// prettier-ignore
function FromArray(T, K) {
    return (K === '[number]'
        ? T
        : Never());
}
// prettier-ignore
function FromProperty(T, K) {
    return (K in T ? T[K] : Never());
}
// prettier-ignore
export function IndexFromPropertyKey(T, K) {
    return (IsIntersect(T) ? FromIntersect(T.allOf, K) :
        IsUnion(T) ? FromUnion(T.anyOf, K) :
            IsTuple(T) ? FromTuple(T.items ?? [], K) :
                IsArray(T) ? FromArray(T.items, K) :
                    IsObject(T) ? FromProperty(T.properties, K) :
                        Never());
}
// prettier-ignore
export function IndexFromPropertyKeys(T, K) {
    return K.map(L => IndexFromPropertyKey(T, L));
}
// prettier-ignore
function FromSchema(T, K) {
    return (UnionEvaluated(IndexFromPropertyKeys(T, K)));
}
/** `[Json]` Returns an Indexed property type for the given keys */
export function Index(T, K, options = {}) {
    // prettier-ignore
    return (IsMappedResult(K) ? CloneType(IndexFromMappedResult(T, K, options)) :
        IsMappedKey(K) ? CloneType(IndexFromMappedKey(T, K, options)) :
            IsSchema(K) ? CloneType(FromSchema(T, IndexPropertyKeys(K)), options) :
                CloneType(FromSchema(T, K), options));
}
