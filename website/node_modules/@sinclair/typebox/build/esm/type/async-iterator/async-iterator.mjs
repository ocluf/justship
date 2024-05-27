import { Kind } from '../symbols/index.mjs';
import { CloneType } from '../clone/type.mjs';
/** `[JavaScript]` Creates a AsyncIterator type */
export function AsyncIterator(items, options = {}) {
    return {
        ...options,
        [Kind]: 'AsyncIterator',
        type: 'AsyncIterator',
        items: CloneType(items),
    };
}
