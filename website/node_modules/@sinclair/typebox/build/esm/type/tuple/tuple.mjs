import { CloneRest } from '../clone/type.mjs';
import { Kind } from '../symbols/index.mjs';
/** `[Json]` Creates a Tuple type */
export function Tuple(items, options = {}) {
    // return TupleResolver.Resolve(T)
    const [additionalItems, minItems, maxItems] = [false, items.length, items.length];
    // prettier-ignore
    return (items.length > 0 ?
        { ...options, [Kind]: 'Tuple', type: 'array', items: CloneRest(items), additionalItems, minItems, maxItems } :
        { ...options, [Kind]: 'Tuple', type: 'array', minItems, maxItems });
}
