import { Kind } from '../symbols/index.mjs';
/** `[Json]` Creates a Never type */
export function Never(options = {}) {
    return {
        ...options,
        [Kind]: 'Never',
        not: {},
    };
}
