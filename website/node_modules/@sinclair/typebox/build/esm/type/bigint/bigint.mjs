import { Kind } from '../symbols/index.mjs';
/** `[JavaScript]` Creates a BigInt type */
export function BigInt(options = {}) {
    return {
        ...options,
        [Kind]: 'BigInt',
        type: 'bigint',
    };
}
