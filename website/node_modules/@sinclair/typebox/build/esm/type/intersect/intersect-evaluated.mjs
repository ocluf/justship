import { OptionalKind } from '../symbols/index.mjs';
import { CloneType } from '../clone/type.mjs';
import { Discard } from '../discard/index.mjs';
import { Never } from '../never/index.mjs';
import { Optional } from '../optional/index.mjs';
import { IntersectCreate } from './intersect-create.mjs';
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
import { IsOptional, IsTransform } from '../guard/kind.mjs';
// prettier-ignore
function IsIntersectOptional(T) {
    return T.every(L => IsOptional(L));
}
// prettier-ignore
function RemoveOptionalFromType(T) {
    return (Discard(T, [OptionalKind]));
}
// prettier-ignore
function RemoveOptionalFromRest(T) {
    return T.map(L => IsOptional(L) ? RemoveOptionalFromType(L) : L);
}
// prettier-ignore
function ResolveIntersect(T, options) {
    return (IsIntersectOptional(T)
        ? Optional(IntersectCreate(RemoveOptionalFromRest(T), options))
        : IntersectCreate(RemoveOptionalFromRest(T), options));
}
/** `[Json]` Creates an evaluated Intersect type */
export function IntersectEvaluated(T, options = {}) {
    if (T.length === 0)
        return Never(options);
    if (T.length === 1)
        return CloneType(T[0], options);
    if (T.some((schema) => IsTransform(schema)))
        throw new Error('Cannot intersect transform types');
    return ResolveIntersect(T, options);
}
