import { CloneType, CloneRest } from '../clone/type.mjs';
import { Kind } from '../symbols/index.mjs';
/** `[JavaScript]` Creates a Function type */
export function Function(parameters, returns, options) {
    return {
        ...options,
        [Kind]: 'Function',
        type: 'Function',
        parameters: CloneRest(parameters),
        returns: CloneType(returns),
    };
}
