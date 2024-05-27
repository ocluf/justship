import { Clone } from '../clone/index.mjs';
import { Check } from '../check/index.mjs';
import { Deref } from '../deref/index.mjs';
import { Kind } from '../../type/symbols/index.mjs';
// ------------------------------------------------------------------
// ValueGuard
// ------------------------------------------------------------------
import { IsArray, IsObject, IsDate, IsUndefined, IsString, IsNumber, IsBoolean, IsBigInt, IsSymbol, HasPropertyKey } from '../guard/index.mjs';
// ------------------------------------------------------------------
// Conversions
// ------------------------------------------------------------------
function IsStringNumeric(value) {
    return IsString(value) && !isNaN(value) && !isNaN(parseFloat(value));
}
function IsValueToString(value) {
    return IsBigInt(value) || IsBoolean(value) || IsNumber(value);
}
function IsValueTrue(value) {
    return value === true || (IsNumber(value) && value === 1) || (IsBigInt(value) && value === BigInt('1')) || (IsString(value) && (value.toLowerCase() === 'true' || value === '1'));
}
function IsValueFalse(value) {
    return value === false || (IsNumber(value) && (value === 0 || Object.is(value, -0))) || (IsBigInt(value) && value === BigInt('0')) || (IsString(value) && (value.toLowerCase() === 'false' || value === '0' || value === '-0'));
}
function IsTimeStringWithTimeZone(value) {
    return IsString(value) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test(value);
}
function IsTimeStringWithoutTimeZone(value) {
    return IsString(value) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test(value);
}
function IsDateTimeStringWithTimeZone(value) {
    return IsString(value) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test(value);
}
function IsDateTimeStringWithoutTimeZone(value) {
    return IsString(value) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test(value);
}
function IsDateString(value) {
    return IsString(value) && /^\d\d\d\d-[0-1]\d-[0-3]\d$/i.test(value);
}
// ------------------------------------------------------------------
// Convert
// ------------------------------------------------------------------
function TryConvertLiteralString(value, target) {
    const conversion = TryConvertString(value);
    return conversion === target ? conversion : value;
}
function TryConvertLiteralNumber(value, target) {
    const conversion = TryConvertNumber(value);
    return conversion === target ? conversion : value;
}
function TryConvertLiteralBoolean(value, target) {
    const conversion = TryConvertBoolean(value);
    return conversion === target ? conversion : value;
}
// prettier-ignore
function TryConvertLiteral(schema, value) {
    return (IsString(schema.const) ? TryConvertLiteralString(value, schema.const) :
        IsNumber(schema.const) ? TryConvertLiteralNumber(value, schema.const) :
            IsBoolean(schema.const) ? TryConvertLiteralBoolean(value, schema.const) :
                Clone(value));
}
function TryConvertBoolean(value) {
    return IsValueTrue(value) ? true : IsValueFalse(value) ? false : value;
}
function TryConvertBigInt(value) {
    return IsStringNumeric(value) ? BigInt(parseInt(value)) : IsNumber(value) ? BigInt(value | 0) : IsValueFalse(value) ? BigInt(0) : IsValueTrue(value) ? BigInt(1) : value;
}
function TryConvertString(value) {
    return IsValueToString(value) ? value.toString() : IsSymbol(value) && value.description !== undefined ? value.description.toString() : value;
}
function TryConvertNumber(value) {
    return IsStringNumeric(value) ? parseFloat(value) : IsValueTrue(value) ? 1 : IsValueFalse(value) ? 0 : value;
}
function TryConvertInteger(value) {
    return IsStringNumeric(value) ? parseInt(value) : IsNumber(value) ? value | 0 : IsValueTrue(value) ? 1 : IsValueFalse(value) ? 0 : value;
}
function TryConvertNull(value) {
    return IsString(value) && value.toLowerCase() === 'null' ? null : value;
}
function TryConvertUndefined(value) {
    return IsString(value) && value === 'undefined' ? undefined : value;
}
// ------------------------------------------------------------------
// note: this function may return an invalid dates for the regex
// tests above. Invalid dates will however be checked during the
// casting function and will return a epoch date if invalid.
// Consider better string parsing for the iso dates in future
// revisions.
// ------------------------------------------------------------------
// prettier-ignore
function TryConvertDate(value) {
    return (IsDate(value) ? value :
        IsNumber(value) ? new Date(value) :
            IsValueTrue(value) ? new Date(1) :
                IsValueFalse(value) ? new Date(0) :
                    IsStringNumeric(value) ? new Date(parseInt(value)) :
                        IsTimeStringWithoutTimeZone(value) ? new Date(`1970-01-01T${value}.000Z`) :
                            IsTimeStringWithTimeZone(value) ? new Date(`1970-01-01T${value}`) :
                                IsDateTimeStringWithoutTimeZone(value) ? new Date(`${value}.000Z`) :
                                    IsDateTimeStringWithTimeZone(value) ? new Date(value) :
                                        IsDateString(value) ? new Date(`${value}T00:00:00.000Z`) :
                                            value);
}
// ------------------------------------------------------------------
// Default
// ------------------------------------------------------------------
function Default(value) {
    return value;
}
// ------------------------------------------------------------------
// Convert
// ------------------------------------------------------------------
function FromArray(schema, references, value) {
    const elements = IsArray(value) ? value : [value];
    return elements.map((element) => Visit(schema.items, references, element));
}
function FromBigInt(schema, references, value) {
    return TryConvertBigInt(value);
}
function FromBoolean(schema, references, value) {
    return TryConvertBoolean(value);
}
function FromDate(schema, references, value) {
    return TryConvertDate(value);
}
function FromInteger(schema, references, value) {
    return TryConvertInteger(value);
}
function FromIntersect(schema, references, value) {
    return schema.allOf.reduce((value, schema) => Visit(schema, references, value), value);
}
function FromLiteral(schema, references, value) {
    return TryConvertLiteral(schema, value);
}
function FromNull(schema, references, value) {
    return TryConvertNull(value);
}
function FromNumber(schema, references, value) {
    return TryConvertNumber(value);
}
// prettier-ignore
function FromObject(schema, references, value) {
    const isConvertable = IsObject(value);
    if (!isConvertable)
        return value;
    const result = {};
    for (const key of Object.keys(value)) {
        result[key] = HasPropertyKey(schema.properties, key)
            ? Visit(schema.properties[key], references, value[key])
            : value[key];
    }
    return result;
}
function FromRecord(schema, references, value) {
    const propertyKey = Object.getOwnPropertyNames(schema.patternProperties)[0];
    const property = schema.patternProperties[propertyKey];
    const result = {};
    for (const [propKey, propValue] of Object.entries(value)) {
        result[propKey] = Visit(property, references, propValue);
    }
    return result;
}
function FromRef(schema, references, value) {
    return Visit(Deref(schema, references), references, value);
}
function FromString(schema, references, value) {
    return TryConvertString(value);
}
function FromSymbol(schema, references, value) {
    return IsString(value) || IsNumber(value) ? Symbol(value) : value;
}
function FromThis(schema, references, value) {
    return Visit(Deref(schema, references), references, value);
}
// prettier-ignore
function FromTuple(schema, references, value) {
    const isConvertable = IsArray(value) && !IsUndefined(schema.items);
    if (!isConvertable)
        return value;
    return value.map((value, index) => {
        return (index < schema.items.length)
            ? Visit(schema.items[index], references, value)
            : value;
    });
}
function FromUndefined(schema, references, value) {
    return TryConvertUndefined(value);
}
function FromUnion(schema, references, value) {
    for (const subschema of schema.anyOf) {
        const converted = Visit(subschema, references, value);
        if (!Check(subschema, references, converted))
            continue;
        return converted;
    }
    return value;
}
function Visit(schema, references, value) {
    const references_ = IsString(schema.$id) ? [...references, schema] : references;
    const schema_ = schema;
    switch (schema[Kind]) {
        case 'Array':
            return FromArray(schema_, references_, value);
        case 'BigInt':
            return FromBigInt(schema_, references_, value);
        case 'Boolean':
            return FromBoolean(schema_, references_, value);
        case 'Date':
            return FromDate(schema_, references_, value);
        case 'Integer':
            return FromInteger(schema_, references_, value);
        case 'Intersect':
            return FromIntersect(schema_, references_, value);
        case 'Literal':
            return FromLiteral(schema_, references_, value);
        case 'Null':
            return FromNull(schema_, references_, value);
        case 'Number':
            return FromNumber(schema_, references_, value);
        case 'Object':
            return FromObject(schema_, references_, value);
        case 'Record':
            return FromRecord(schema_, references_, value);
        case 'Ref':
            return FromRef(schema_, references_, value);
        case 'String':
            return FromString(schema_, references_, value);
        case 'Symbol':
            return FromSymbol(schema_, references_, value);
        case 'This':
            return FromThis(schema_, references_, value);
        case 'Tuple':
            return FromTuple(schema_, references_, value);
        case 'Undefined':
            return FromUndefined(schema_, references_, value);
        case 'Union':
            return FromUnion(schema_, references_, value);
        default:
            return Default(value);
    }
}
/** Converts any type mismatched values to their target type if a reasonable conversion is possible. */
// prettier-ignore
export function Convert(...args) {
    return args.length === 3
        ? Visit(args[0], args[1], args[2])
        : Visit(args[0], [], args[1]);
}
