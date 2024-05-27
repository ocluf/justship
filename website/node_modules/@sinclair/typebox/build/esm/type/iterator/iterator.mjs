import { CloneType } from '../clone/type.mjs';
import { Kind } from '../symbols/index.mjs';
/** `[JavaScript]` Creates an Iterator type */
export function Iterator(items, options = {}) {
    return {
        ...options,
        [Kind]: 'Iterator',
        type: 'Iterator',
        items: CloneType(items),
    };
}
