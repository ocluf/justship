import { Kind } from '../symbols/index.mjs';
/** `[Json]` Creates a Literal type */
export function Literal(value, options = {}) {
    return {
        ...options,
        [Kind]: 'Literal',
        const: value,
        type: typeof value,
    };
}
