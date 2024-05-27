import { CloneType } from '../clone/type.mjs';
import { IsUndefined } from '../guard/value.mjs';
import { Kind, Hint } from '../symbols/index.mjs';
// Auto Tracked For Recursive Types without ID's
let Ordinal = 0;
/** `[Json]` Creates a Recursive type */
export function Recursive(callback, options = {}) {
    if (IsUndefined(options.$id))
        options.$id = `T${Ordinal++}`;
    const thisType = callback({ [Kind]: 'This', $ref: `${options.$id}` });
    thisType.$id = options.$id;
    // prettier-ignore
    return CloneType({ ...options, [Hint]: 'Recursive', ...thisType });
}
