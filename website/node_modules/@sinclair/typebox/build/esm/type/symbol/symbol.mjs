import { Kind } from '../symbols/index.mjs';
/** `[JavaScript]` Creates a Symbol type */
export function Symbol(options) {
    return { ...options, [Kind]: 'Symbol', type: 'symbol' };
}
