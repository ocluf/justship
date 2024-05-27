import { CloneType, CloneRest } from '../clone/type.mjs';
import { Kind } from '../symbols/index.mjs';
/** `[JavaScript]` Creates a Constructor type */
export function Constructor(parameters, returns, options) {
    return {
        ...options,
        [Kind]: 'Constructor',
        type: 'Constructor',
        parameters: CloneRest(parameters),
        returns: CloneType(returns),
    };
}
