import { Kind } from '../symbols/index.mjs';
/** `[Json]` Creates a Number type */
export function Number(options = {}) {
    return {
        ...options,
        [Kind]: 'Number',
        type: 'number',
    };
}
