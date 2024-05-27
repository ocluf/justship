import { Kind } from '../symbols/index.mjs';
/** `[JavaScript]` Creates a Date type */
export function Date(options = {}) {
    return {
        ...options,
        [Kind]: 'Date',
        type: 'Date',
    };
}
