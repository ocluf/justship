import { Kind } from '../symbols/index.mjs';
/** `[JavaScript]` Creates a Uint8Array type */
export function Uint8Array(options = {}) {
    return { ...options, [Kind]: 'Uint8Array', type: 'Uint8Array' };
}
