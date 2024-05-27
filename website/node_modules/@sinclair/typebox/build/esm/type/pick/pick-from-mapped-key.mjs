import { MappedResult } from '../mapped/index.mjs';
import { Pick } from './pick.mjs';
// prettier-ignore
function FromPropertyKey(T, K, options) {
    return {
        [K]: Pick(T, [K], options)
    };
}
// prettier-ignore
function FromPropertyKeys(T, K, options) {
    return K.reduce((Acc, LK) => {
        return { ...Acc, ...FromPropertyKey(T, LK, options) };
    }, {});
}
// prettier-ignore
function FromMappedKey(T, K, options) {
    return FromPropertyKeys(T, K.keys, options);
}
// prettier-ignore
export function PickFromMappedKey(T, K, options) {
    const P = FromMappedKey(T, K, options);
    return MappedResult(P);
}
