import { Kind } from '../symbols/index.mjs';
/** `[JavaScript]` Creates a Undefined type */
export function Undefined(options = {}) {
    return { ...options, [Kind]: 'Undefined', type: 'undefined' };
}
