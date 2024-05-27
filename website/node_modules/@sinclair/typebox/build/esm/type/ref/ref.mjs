import { Kind } from '../symbols/index.mjs';
// ------------------------------------------------------------------
// ValueGuard
// ------------------------------------------------------------------
import { IsString, IsUndefined } from '../guard/value.mjs';
/** `[Json]` Creates a Ref type. */
export function Ref(unresolved, options = {}) {
    if (IsString(unresolved))
        return { ...options, [Kind]: 'Ref', $ref: unresolved };
    if (IsUndefined(unresolved.$id))
        throw new Error('Reference target type must specify an $id');
    return {
        ...options,
        [Kind]: 'Ref',
        $ref: unresolved.$id,
    };
}
