import { Kind } from '../symbols/index.mjs';
/** `[Json]` Creates an Unknown type */
export function Unknown(options = {}) {
    return {
        ...options,
        [Kind]: 'Unknown',
    };
}
