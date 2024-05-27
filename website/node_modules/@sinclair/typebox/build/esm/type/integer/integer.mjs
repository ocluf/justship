import { Kind } from '../symbols/index.mjs';
/** `[Json]` Creates an Integer type */
export function Integer(options = {}) {
    return {
        ...options,
        [Kind]: 'Integer',
        type: 'integer',
    };
}
