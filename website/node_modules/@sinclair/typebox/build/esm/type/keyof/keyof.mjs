import { Literal } from '../literal/index.mjs';
import { Number } from '../number/index.mjs';
import { KeyOfPropertyKeys } from './keyof-property-keys.mjs';
import { UnionEvaluated } from '../union/index.mjs';
import { CloneType } from '../clone/type.mjs';
import { KeyOfFromMappedResult } from './keyof-from-mapped-result.mjs';
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
import { IsMappedResult } from '../guard/kind.mjs';
// prettier-ignore
export function KeyOfPropertyKeysToRest(T) {
    return T.map(L => L === '[number]' ? Number() : Literal(L));
}
/** `[Json]` Creates a KeyOf type */
export function KeyOf(T, options = {}) {
    if (IsMappedResult(T)) {
        return KeyOfFromMappedResult(T, options);
    }
    else {
        const K = KeyOfPropertyKeys(T);
        const S = KeyOfPropertyKeysToRest(K);
        const U = UnionEvaluated(S);
        return CloneType(U, options);
    }
}
