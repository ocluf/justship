import { OptionalKind } from '../symbols/index.mjs';
import { CloneType } from '../clone/type.mjs';
import { Discard } from '../discard/index.mjs';
import { Never } from '../never/index.mjs';
import { Optional } from '../optional/index.mjs';
import { UnionCreate } from './union-create.mjs';
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
import { IsOptional } from '../guard/kind.mjs';
// prettier-ignore
function IsUnionOptional(T) {
    return T.some(L => IsOptional(L));
}
// prettier-ignore
function RemoveOptionalFromRest(T) {
    return T.map(L => IsOptional(L) ? RemoveOptionalFromType(L) : L);
}
// prettier-ignore
function RemoveOptionalFromType(T) {
    return (Discard(T, [OptionalKind]));
}
// prettier-ignore
function ResolveUnion(T, options) {
    return (IsUnionOptional(T)
        ? Optional(UnionCreate(RemoveOptionalFromRest(T), options))
        : UnionCreate(RemoveOptionalFromRest(T), options));
}
/** `[Json]` Creates an evaluated Union type */
export function UnionEvaluated(T, options = {}) {
    // prettier-ignore
    return (T.length === 0 ? Never(options) :
        T.length === 1 ? CloneType(T[0], options) :
            ResolveUnion(T, options));
}
