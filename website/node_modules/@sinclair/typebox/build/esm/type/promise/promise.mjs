import { CloneType } from '../clone/type.mjs';
import { Kind } from '../symbols/index.mjs';
/** `[JavaScript]` Creates a Promise type */
export function Promise(item, options = {}) {
    return {
        ...options,
        [Kind]: 'Promise',
        type: 'Promise',
        item: CloneType(item),
    };
}
