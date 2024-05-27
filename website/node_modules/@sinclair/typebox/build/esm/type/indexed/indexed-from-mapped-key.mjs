import { Index } from './indexed.mjs';
import { MappedResult } from '../mapped/index.mjs';
// prettier-ignore
function MappedIndexPropertyKey(T, K, options) {
    return { [K]: Index(T, [K], options) };
}
// prettier-ignore
function MappedIndexPropertyKeys(T, K, options) {
    return K.reduce((Acc, L) => {
        return { ...Acc, ...MappedIndexPropertyKey(T, L, options) };
    }, {});
}
// prettier-ignore
function MappedIndexProperties(T, K, options) {
    return MappedIndexPropertyKeys(T, K.keys, options);
}
// prettier-ignore
export function IndexFromMappedKey(T, K, options) {
    const P = MappedIndexProperties(T, K, options);
    return MappedResult(P);
}
