import { CloneType } from '../clone/type.mjs';
import { Kind } from '../symbols/index.mjs';
/** `[Json]` Creates an Array type */
export function Array(schema, options = {}) {
    return {
        ...options,
        [Kind]: 'Array',
        type: 'array',
        items: CloneType(schema),
    };
}
