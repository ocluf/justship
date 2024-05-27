import { Kind } from '../symbols/index.mjs';
/** `[Json]` Creates an Any type */
export function Any(options = {}) {
    return { ...options, [Kind]: 'Any' };
}
