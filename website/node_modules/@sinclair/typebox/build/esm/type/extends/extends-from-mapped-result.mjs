import { MappedResult } from '../mapped/index.mjs';
import { Extends } from './extends.mjs';
// prettier-ignore
function FromProperties(P, Right, True, False, options) {
    const Acc = {};
    for (const K2 of globalThis.Object.getOwnPropertyNames(P))
        Acc[K2] = Extends(P[K2], Right, True, False, options);
    return Acc;
}
// prettier-ignore
function FromMappedResult(Left, Right, True, False, options) {
    return FromProperties(Left.properties, Right, True, False, options);
}
// prettier-ignore
export function ExtendsFromMappedResult(Left, Right, True, False, options) {
    const P = FromMappedResult(Left, Right, True, False, options);
    return MappedResult(P);
}
