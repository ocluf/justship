import { Kind } from '../symbols/index.mjs';
/** `[Json]` Creates a Null type */
export function Null(options = {}) {
    return {
        ...options,
        [Kind]: 'Null',
        type: 'null',
    };
}
