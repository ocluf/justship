import { CloneRest } from '../clone/type.mjs';
import { Kind } from '../symbols/index.mjs';
export function UnionCreate(T, options) {
    return { ...options, [Kind]: 'Union', anyOf: CloneRest(T) };
}
