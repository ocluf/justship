import { Kind } from '../symbols/index.mjs';
/** `[JavaScript]` Creates a Void type */
export function Void(options = {}) {
    return {
        ...options,
        [Kind]: 'Void',
        type: 'void',
    };
}
