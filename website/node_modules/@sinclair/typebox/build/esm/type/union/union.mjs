import { Never } from '../never/index.mjs';
import { CloneType } from '../clone/type.mjs';
import { UnionCreate } from './union-create.mjs';
/** `[Json]` Creates a Union type */
export function Union(T, options = {}) {
    // prettier-ignore
    return (T.length === 0 ? Never(options) :
        T.length === 1 ? CloneType(T[0], options) :
            UnionCreate(T, options));
}
