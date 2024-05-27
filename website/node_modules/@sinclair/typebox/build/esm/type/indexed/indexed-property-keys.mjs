import { TemplateLiteralGenerate } from '../template-literal/index.mjs';
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
import { IsTemplateLiteral, IsUnion, IsLiteral, IsNumber, IsInteger } from '../guard/kind.mjs';
// prettier-ignore
function FromTemplateLiteral(T) {
    const R = TemplateLiteralGenerate(T);
    return R.map(S => S.toString());
}
// prettier-ignore
function FromUnion(T) {
    const Acc = [];
    for (const L of T)
        Acc.push(...IndexPropertyKeys(L));
    return Acc;
}
// prettier-ignore
function FromLiteral(T) {
    return ([T.toString()] // TS 5.4 observes TLiteralValue as not having a toString()
    );
}
/** Returns a tuple of PropertyKeys derived from the given TSchema */
// prettier-ignore
export function IndexPropertyKeys(T) {
    return [...new Set((IsTemplateLiteral(T) ? FromTemplateLiteral(T) :
            IsUnion(T) ? FromUnion(T.anyOf) :
                IsLiteral(T) ? FromLiteral(T.const) :
                    IsNumber(T) ? ['[number]'] :
                        IsInteger(T) ? ['[number]'] :
                            []))];
}
