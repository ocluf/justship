import { Object } from '../object/index.mjs';
import { Never } from '../never/index.mjs';
import { Union } from '../union/index.mjs';
import { IsTemplateLiteralFinite } from '../template-literal/index.mjs';
import { PatternStringExact, PatternNumberExact } from '../patterns/index.mjs';
import { IndexPropertyKeys } from '../indexed/index.mjs';
import { Kind, Hint } from '../symbols/index.mjs';
import { CloneType } from '../clone/type.mjs';
// ------------------------------------------------------------------
// ValueGuard
// ------------------------------------------------------------------
import { IsUndefined } from '../guard/value.mjs';
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
import { IsInteger, IsLiteral, IsNumber, IsString, IsRegExp, IsTemplateLiteral, IsUnion } from '../guard/kind.mjs';
// ------------------------------------------------------------------
// RecordCreateFromPattern
// ------------------------------------------------------------------
// prettier-ignore
function RecordCreateFromPattern(pattern, T, options) {
    return {
        ...options,
        [Kind]: 'Record',
        type: 'object',
        patternProperties: { [pattern]: CloneType(T) }
    };
}
// ------------------------------------------------------------------
// RecordCreateFromKeys
// ------------------------------------------------------------------
// prettier-ignore
function RecordCreateFromKeys(K, T, options) {
    const Acc = {};
    for (const K2 of K)
        Acc[K2] = CloneType(T);
    return Object(Acc, { ...options, [Hint]: 'Record' });
}
// prettier-ignore
function FromTemplateLiteralKey(K, T, options) {
    return (IsTemplateLiteralFinite(K)
        ? RecordCreateFromKeys(IndexPropertyKeys(K), T, options)
        : RecordCreateFromPattern(K.pattern, T, options));
}
// prettier-ignore
function FromUnionKey(K, T, options) {
    return RecordCreateFromKeys(IndexPropertyKeys(Union(K)), T, options);
}
// prettier-ignore
function FromLiteralKey(K, T, options) {
    return RecordCreateFromKeys([K.toString()], T, options);
}
// prettier-ignore
function FromRegExpKey(K, T, options) {
    return RecordCreateFromPattern(K.source, T, options);
}
// prettier-ignore
function FromStringKey(K, T, options) {
    const pattern = IsUndefined(K.pattern) ? PatternStringExact : K.pattern;
    return RecordCreateFromPattern(pattern, T, options);
}
// prettier-ignore
function FromIntegerKey(_, T, options) {
    return RecordCreateFromPattern(PatternNumberExact, T, options);
}
// prettier-ignore
function FromNumberKey(_, T, options) {
    return RecordCreateFromPattern(PatternNumberExact, T, options);
}
// ------------------------------------------------------------------
// TRecordOrObject
// ------------------------------------------------------------------
/** `[Json]` Creates a Record type */
export function Record(K, T, options = {}) {
    // prettier-ignore
    return (IsUnion(K) ? FromUnionKey(K.anyOf, T, options) :
        IsTemplateLiteral(K) ? FromTemplateLiteralKey(K, T, options) :
            IsLiteral(K) ? FromLiteralKey(K.const, T, options) :
                IsInteger(K) ? FromIntegerKey(K, T, options) :
                    IsNumber(K) ? FromNumberKey(K, T, options) :
                        IsRegExp(K) ? FromRegExpKey(K, T, options) :
                            IsString(K) ? FromStringKey(K, T, options) :
                                Never(options));
}
