import { Kind } from '../symbols/index.mjs';
/** `[Json]` Creates a String type */
export function String(options = {}) {
    return { ...options, [Kind]: 'String', type: 'string' };
}
