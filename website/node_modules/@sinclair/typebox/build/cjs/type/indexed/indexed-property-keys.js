"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexPropertyKeys = void 0;
const index_1 = require("../template-literal/index");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = require("../guard/kind");
// prettier-ignore
function FromTemplateLiteral(T) {
    const R = (0, index_1.TemplateLiteralGenerate)(T);
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
function IndexPropertyKeys(T) {
    return [...new Set(((0, kind_1.IsTemplateLiteral)(T) ? FromTemplateLiteral(T) :
            (0, kind_1.IsUnion)(T) ? FromUnion(T.anyOf) :
                (0, kind_1.IsLiteral)(T) ? FromLiteral(T.const) :
                    (0, kind_1.IsNumber)(T) ? ['[number]'] :
                        (0, kind_1.IsInteger)(T) ? ['[number]'] :
                            []))];
}
exports.IndexPropertyKeys = IndexPropertyKeys;
