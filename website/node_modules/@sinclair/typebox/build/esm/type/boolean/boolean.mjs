import { Kind } from '../symbols/index.mjs';
/** `[Json]` Creates a Boolean type */
export function Boolean(options = {}) {
    return {
        ...options,
        [Kind]: 'Boolean',
        type: 'boolean',
    };
}
