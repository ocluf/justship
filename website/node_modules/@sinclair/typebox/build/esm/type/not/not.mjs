import { CloneType } from '../clone/type.mjs';
import { Kind } from '../symbols/index.mjs';
/** `[Json]` Creates a Not type */
export function Not(schema, options) {
    return {
        ...options,
        [Kind]: 'Not',
        not: CloneType(schema),
    };
}
