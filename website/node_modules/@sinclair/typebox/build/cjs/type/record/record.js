"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Record = void 0;
const index_1 = require("../object/index");
const index_2 = require("../never/index");
const index_3 = require("../union/index");
const index_4 = require("../template-literal/index");
const index_5 = require("../patterns/index");
const index_6 = require("../indexed/index");
const index_7 = require("../symbols/index");
const type_1 = require("../clone/type");
// ------------------------------------------------------------------
// ValueGuard
// ------------------------------------------------------------------
const value_1 = require("../guard/value");
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
const kind_1 = require("../guard/kind");
// ------------------------------------------------------------------
// RecordCreateFromPattern
// ------------------------------------------------------------------
// prettier-ignore
function RecordCreateFromPattern(pattern, T, options) {
    return {
        ...options,
        [index_7.Kind]: 'Record',
        type: 'object',
        patternProperties: { [pattern]: (0, type_1.CloneType)(T) }
    };
}
// ------------------------------------------------------------------
// RecordCreateFromKeys
// ------------------------------------------------------------------
// prettier-ignore
function RecordCreateFromKeys(K, T, options) {
    const Acc = {};
    for (const K2 of K)
        Acc[K2] = (0, type_1.CloneType)(T);
    return (0, index_1.Object)(Acc, { ...options, [index_7.Hint]: 'Record' });
}
// prettier-ignore
function FromTemplateLiteralKey(K, T, options) {
    return ((0, index_4.IsTemplateLiteralFinite)(K)
        ? RecordCreateFromKeys((0, index_6.IndexPropertyKeys)(K), T, options)
        : RecordCreateFromPattern(K.pattern, T, options));
}
// prettier-ignore
function FromUnionKey(K, T, options) {
    return RecordCreateFromKeys((0, index_6.IndexPropertyKeys)((0, index_3.Union)(K)), T, options);
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
    const pattern = (0, value_1.IsUndefined)(K.pattern) ? index_5.PatternStringExact : K.pattern;
    return RecordCreateFromPattern(pattern, T, options);
}
// prettier-ignore
function FromIntegerKey(_, T, options) {
    return RecordCreateFromPattern(index_5.PatternNumberExact, T, options);
}
// prettier-ignore
function FromNumberKey(_, T, options) {
    return RecordCreateFromPattern(index_5.PatternNumberExact, T, options);
}
// ------------------------------------------------------------------
// TRecordOrObject
// ------------------------------------------------------------------
/** `[Json]` Creates a Record type */
function Record(K, T, options = {}) {
    // prettier-ignore
    return ((0, kind_1.IsUnion)(K) ? FromUnionKey(K.anyOf, T, options) :
        (0, kind_1.IsTemplateLiteral)(K) ? FromTemplateLiteralKey(K, T, options) :
            (0, kind_1.IsLiteral)(K) ? FromLiteralKey(K.const, T, options) :
                (0, kind_1.IsInteger)(K) ? FromIntegerKey(K, T, options) :
                    (0, kind_1.IsNumber)(K) ? FromNumberKey(K, T, options) :
                        (0, kind_1.IsRegExp)(K) ? FromRegExpKey(K, T, options) :
                            (0, kind_1.IsString)(K) ? FromStringKey(K, T, options) :
                                (0, index_2.Never)(options));
}
exports.Record = Record;
