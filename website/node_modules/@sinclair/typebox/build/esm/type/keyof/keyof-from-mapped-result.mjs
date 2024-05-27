import { MappedResult } from '../mapped/index.mjs';
import { KeyOf } from './keyof.mjs';
// prettier-ignore
function FromProperties(K, options) {
    const Acc = {};
    for (const K2 of globalThis.Object.getOwnPropertyNames(K))
        Acc[K2] = KeyOf(K[K2], options);
    return Acc;
}
// prettier-ignore
function FromMappedResult(R, options) {
    return FromProperties(R.properties, options);
}
// prettier-ignore
export function KeyOfFromMappedResult(R, options) {
    const P = FromMappedResult(R, options);
    return MappedResult(P);
}
