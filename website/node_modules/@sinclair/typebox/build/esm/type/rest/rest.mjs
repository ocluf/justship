import { CloneRest } from '../clone/type.mjs';
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
import { IsIntersect, IsUnion, IsTuple } from '../guard/kind.mjs';
// prettier-ignore
function RestResolve(T) {
    return (IsIntersect(T) ? CloneRest(T.allOf) :
        IsUnion(T) ? CloneRest(T.anyOf) :
            IsTuple(T) ? CloneRest(T.items ?? []) :
                []);
}
/** `[Json]` Extracts interior Rest elements from Tuple, Intersect and Union types */
export function Rest(T) {
    return CloneRest(RestResolve(T));
}
