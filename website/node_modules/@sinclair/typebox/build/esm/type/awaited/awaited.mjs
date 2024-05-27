import { Intersect } from '../intersect/index.mjs';
import { Union } from '../union/index.mjs';
import { CloneType } from '../clone/type.mjs';
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
import { IsIntersect, IsUnion, IsPromise } from '../guard/kind.mjs';
// prettier-ignore
function FromRest(T) {
    return T.map(L => AwaitedResolve(L));
}
// prettier-ignore
function FromIntersect(T) {
    return Intersect(FromRest(T));
}
// prettier-ignore
function FromUnion(T) {
    return Union(FromRest(T));
}
// prettier-ignore
function FromPromise(T) {
    return AwaitedResolve(T);
}
// ----------------------------------------------------------------
// AwaitedResolve
// ----------------------------------------------------------------
// prettier-ignore
function AwaitedResolve(T) {
    return (IsIntersect(T) ? FromIntersect(T.allOf) :
        IsUnion(T) ? FromUnion(T.anyOf) :
            IsPromise(T) ? FromPromise(T.item) :
                T);
}
/** `[JavaScript]` Constructs a type by recursively unwrapping Promise types */
export function Awaited(T, options = {}) {
    return CloneType(AwaitedResolve(T), options);
}
