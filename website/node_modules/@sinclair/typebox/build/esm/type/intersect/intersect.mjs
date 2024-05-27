import { CloneType } from '../clone/type.mjs';
import { Never } from '../never/index.mjs';
import { IntersectCreate } from './intersect-create.mjs';
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
import { IsTransform } from '../guard/kind.mjs';
/** `[Json]` Creates an evaluated Intersect type */
export function Intersect(T, options = {}) {
    if (T.length === 0)
        return Never(options);
    if (T.length === 1)
        return CloneType(T[0], options);
    if (T.some((schema) => IsTransform(schema)))
        throw new Error('Cannot intersect transform types');
    return IntersectCreate(T, options);
}
