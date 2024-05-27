"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.IsSchema = exports.IsKind = exports.IsVoid = exports.IsUnsafe = exports.IsUnknown = exports.IsUint8Array = exports.IsUnion = exports.IsUndefined = exports.IsTuple = exports.IsTransform = exports.IsThis = exports.IsTemplateLiteral = exports.IsSymbol = exports.IsString = exports.IsRegExp = exports.IsRef = exports.IsRecursive = exports.IsRecord = exports.IsPromise = exports.IsObject = exports.IsNumber = exports.IsNull = exports.IsNot = exports.IsNever = exports.IsMappedResult = exports.IsMappedKey = exports.IsLiteral = exports.IsLiteralBoolean = exports.IsLiteralNumber = exports.IsLiteralString = exports.IsKindOf = exports.IsIterator = exports.IsIntersect = exports.IsProperties = exports.IsInteger = exports.IsFunction = exports.IsDate = exports.IsConstructor = exports.IsBoolean = exports.IsBigInt = exports.IsAsyncIterator = exports.IsArray = exports.IsAny = exports.IsOptional = exports.IsReadonly = void 0;
const ValueGuard = require("./value");
const index_1 = require("../symbols/index");
/** `[Kind-Only]` Returns true if this value has a Readonly symbol */
function IsReadonly(value) {
    return ValueGuard.IsObject(value) && value[index_1.ReadonlyKind] === 'Readonly';
}
exports.IsReadonly = IsReadonly;
/** `[Kind-Only]` Returns true if this value has a Optional symbol */
function IsOptional(value) {
    return ValueGuard.IsObject(value) && value[index_1.OptionalKind] === 'Optional';
}
exports.IsOptional = IsOptional;
/** `[Kind-Only]` Returns true if the given value is TAny */
function IsAny(value) {
    return IsKindOf(value, 'Any');
}
exports.IsAny = IsAny;
/** `[Kind-Only]` Returns true if the given value is TArray */
function IsArray(value) {
    return IsKindOf(value, 'Array');
}
exports.IsArray = IsArray;
/** `[Kind-Only]` Returns true if the given value is TAsyncIterator */
function IsAsyncIterator(value) {
    return IsKindOf(value, 'AsyncIterator');
}
exports.IsAsyncIterator = IsAsyncIterator;
/** `[Kind-Only]` Returns true if the given value is TBigInt */
function IsBigInt(value) {
    return IsKindOf(value, 'BigInt');
}
exports.IsBigInt = IsBigInt;
/** `[Kind-Only]` Returns true if the given value is TBoolean */
function IsBoolean(value) {
    return IsKindOf(value, 'Boolean');
}
exports.IsBoolean = IsBoolean;
/** `[Kind-Only]` Returns true if the given value is TConstructor */
function IsConstructor(value) {
    return IsKindOf(value, 'Constructor');
}
exports.IsConstructor = IsConstructor;
/** `[Kind-Only]` Returns true if the given value is TDate */
function IsDate(value) {
    return IsKindOf(value, 'Date');
}
exports.IsDate = IsDate;
/** `[Kind-Only]` Returns true if the given value is TFunction */
function IsFunction(value) {
    return IsKindOf(value, 'Function');
}
exports.IsFunction = IsFunction;
/** `[Kind-Only]` Returns true if the given value is TInteger */
function IsInteger(value) {
    return IsKindOf(value, 'Integer');
}
exports.IsInteger = IsInteger;
/** `[Kind-Only]` Returns true if the given schema is TProperties */
function IsProperties(value) {
    return ValueGuard.IsObject(value);
}
exports.IsProperties = IsProperties;
/** `[Kind-Only]` Returns true if the given value is TIntersect */
function IsIntersect(value) {
    return IsKindOf(value, 'Intersect');
}
exports.IsIntersect = IsIntersect;
/** `[Kind-Only]` Returns true if the given value is TIterator */
function IsIterator(value) {
    return IsKindOf(value, 'Iterator');
}
exports.IsIterator = IsIterator;
/** `[Kind-Only]` Returns true if the given value is a TKind with the given name. */
function IsKindOf(value, kind) {
    return ValueGuard.IsObject(value) && index_1.Kind in value && value[index_1.Kind] === kind;
}
exports.IsKindOf = IsKindOf;
/** `[Kind-Only]` Returns true if the given value is TLiteral<string> */
function IsLiteralString(value) {
    return IsLiteral(value) && ValueGuard.IsString(value.const);
}
exports.IsLiteralString = IsLiteralString;
/** `[Kind-Only]` Returns true if the given value is TLiteral<number> */
function IsLiteralNumber(value) {
    return IsLiteral(value) && ValueGuard.IsNumber(value.const);
}
exports.IsLiteralNumber = IsLiteralNumber;
/** `[Kind-Only]` Returns true if the given value is TLiteral<boolean> */
function IsLiteralBoolean(value) {
    return IsLiteral(value) && ValueGuard.IsBoolean(value.const);
}
exports.IsLiteralBoolean = IsLiteralBoolean;
/** `[Kind-Only]` Returns true if the given value is TLiteral */
function IsLiteral(value) {
    return IsKindOf(value, 'Literal');
}
exports.IsLiteral = IsLiteral;
/** `[Kind-Only]` Returns true if the given value is a TMappedKey */
function IsMappedKey(value) {
    return IsKindOf(value, 'MappedKey');
}
exports.IsMappedKey = IsMappedKey;
/** `[Kind-Only]` Returns true if the given value is TMappedResult */
function IsMappedResult(value) {
    return IsKindOf(value, 'MappedResult');
}
exports.IsMappedResult = IsMappedResult;
/** `[Kind-Only]` Returns true if the given value is TNever */
function IsNever(value) {
    return IsKindOf(value, 'Never');
}
exports.IsNever = IsNever;
/** `[Kind-Only]` Returns true if the given value is TNot */
function IsNot(value) {
    return IsKindOf(value, 'Not');
}
exports.IsNot = IsNot;
/** `[Kind-Only]` Returns true if the given value is TNull */
function IsNull(value) {
    return IsKindOf(value, 'Null');
}
exports.IsNull = IsNull;
/** `[Kind-Only]` Returns true if the given value is TNumber */
function IsNumber(value) {
    return IsKindOf(value, 'Number');
}
exports.IsNumber = IsNumber;
/** `[Kind-Only]` Returns true if the given value is TObject */
function IsObject(value) {
    return IsKindOf(value, 'Object');
}
exports.IsObject = IsObject;
/** `[Kind-Only]` Returns true if the given value is TPromise */
function IsPromise(value) {
    return IsKindOf(value, 'Promise');
}
exports.IsPromise = IsPromise;
/** `[Kind-Only]` Returns true if the given value is TRecord */
function IsRecord(value) {
    return IsKindOf(value, 'Record');
}
exports.IsRecord = IsRecord;
/** `[Kind-Only]` Returns true if this value is TRecursive */
function IsRecursive(value) {
    return ValueGuard.IsObject(value) && index_1.Hint in value && value[index_1.Hint] === 'Recursive';
}
exports.IsRecursive = IsRecursive;
/** `[Kind-Only]` Returns true if the given value is TRef */
function IsRef(value) {
    return IsKindOf(value, 'Ref');
}
exports.IsRef = IsRef;
/** `[Kind-Only]` Returns true if the given value is TRegExp */
function IsRegExp(value) {
    return IsKindOf(value, 'RegExp');
}
exports.IsRegExp = IsRegExp;
/** `[Kind-Only]` Returns true if the given value is TString */
function IsString(value) {
    return IsKindOf(value, 'String');
}
exports.IsString = IsString;
/** `[Kind-Only]` Returns true if the given value is TSymbol */
function IsSymbol(value) {
    return IsKindOf(value, 'Symbol');
}
exports.IsSymbol = IsSymbol;
/** `[Kind-Only]` Returns true if the given value is TTemplateLiteral */
function IsTemplateLiteral(value) {
    return IsKindOf(value, 'TemplateLiteral');
}
exports.IsTemplateLiteral = IsTemplateLiteral;
/** `[Kind-Only]` Returns true if the given value is TThis */
function IsThis(value) {
    return IsKindOf(value, 'This');
}
exports.IsThis = IsThis;
/** `[Kind-Only]` Returns true of this value is TTransform */
function IsTransform(value) {
    return ValueGuard.IsObject(value) && index_1.TransformKind in value;
}
exports.IsTransform = IsTransform;
/** `[Kind-Only]` Returns true if the given value is TTuple */
function IsTuple(value) {
    return IsKindOf(value, 'Tuple');
}
exports.IsTuple = IsTuple;
/** `[Kind-Only]` Returns true if the given value is TUndefined */
function IsUndefined(value) {
    return IsKindOf(value, 'Undefined');
}
exports.IsUndefined = IsUndefined;
/** `[Kind-Only]` Returns true if the given value is TUnion */
function IsUnion(value) {
    return IsKindOf(value, 'Union');
}
exports.IsUnion = IsUnion;
/** `[Kind-Only]` Returns true if the given value is TUint8Array */
function IsUint8Array(value) {
    return IsKindOf(value, 'Uint8Array');
}
exports.IsUint8Array = IsUint8Array;
/** `[Kind-Only]` Returns true if the given value is TUnknown */
function IsUnknown(value) {
    return IsKindOf(value, 'Unknown');
}
exports.IsUnknown = IsUnknown;
/** `[Kind-Only]` Returns true if the given value is a raw TUnsafe */
function IsUnsafe(value) {
    return IsKindOf(value, 'Unsafe');
}
exports.IsUnsafe = IsUnsafe;
/** `[Kind-Only]` Returns true if the given value is TVoid */
function IsVoid(value) {
    return IsKindOf(value, 'Void');
}
exports.IsVoid = IsVoid;
/** `[Kind-Only]` Returns true if the given value is TKind */
function IsKind(value) {
    return ValueGuard.IsObject(value) && index_1.Kind in value && ValueGuard.IsString(value[index_1.Kind]);
}
exports.IsKind = IsKind;
/** `[Kind-Only]` Returns true if the given value is TSchema */
function IsSchema(value) {
    // prettier-ignore
    return (IsAny(value) ||
        IsArray(value) ||
        IsBoolean(value) ||
        IsBigInt(value) ||
        IsAsyncIterator(value) ||
        IsConstructor(value) ||
        IsDate(value) ||
        IsFunction(value) ||
        IsInteger(value) ||
        IsIntersect(value) ||
        IsIterator(value) ||
        IsLiteral(value) ||
        IsMappedKey(value) ||
        IsMappedResult(value) ||
        IsNever(value) ||
        IsNot(value) ||
        IsNull(value) ||
        IsNumber(value) ||
        IsObject(value) ||
        IsPromise(value) ||
        IsRecord(value) ||
        IsRef(value) ||
        IsRegExp(value) ||
        IsString(value) ||
        IsSymbol(value) ||
        IsTemplateLiteral(value) ||
        IsThis(value) ||
        IsTuple(value) ||
        IsUndefined(value) ||
        IsUnion(value) ||
        IsUint8Array(value) ||
        IsUnknown(value) ||
        IsUnsafe(value) ||
        IsVoid(value) ||
        IsKind(value));
}
exports.IsSchema = IsSchema;
