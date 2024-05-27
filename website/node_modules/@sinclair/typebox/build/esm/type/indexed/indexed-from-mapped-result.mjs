import { MappedResult } from '../mapped/index.mjs';
import { IndexPropertyKeys } from './indexed-property-keys.mjs';
import { Index } from './index.mjs';
// prettier-ignore
function FromProperties(T, P, options) {
    const Acc = {};
    for (const K2 of Object.getOwnPropertyNames(P)) {
        Acc[K2] = Index(T, IndexPropertyKeys(P[K2]), options);
    }
    return Acc;
}
// prettier-ignore
function FromMappedResult(T, R, options) {
    return FromProperties(T, R.properties, options);
}
// prettier-ignore
export function IndexFromMappedResult(T, R, options) {
    const P = FromMappedResult(T, R, options);
    return MappedResult(P);
}
