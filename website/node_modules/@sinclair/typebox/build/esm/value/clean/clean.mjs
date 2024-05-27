import { KeyOfPropertyKeys } from '../../type/keyof/index.mjs';
import { Check } from '../check/index.mjs';
import { Clone } from '../clone/index.mjs';
import { Deref } from '../deref/index.mjs';
import { Kind } from '../../type/symbols/index.mjs';
// ------------------------------------------------------------------
// ValueGuard
// ------------------------------------------------------------------
// prettier-ignore
import { IsString, IsObject, IsArray, IsUndefined } from '../guard/index.mjs';
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
// prettier-ignore
import { IsSchema } from '../../type/guard/type.mjs';
// ------------------------------------------------------------------
// IsCheckable
// ------------------------------------------------------------------
function IsCheckable(schema) {
    return IsSchema(schema) && schema[Kind] !== 'Unsafe';
}
// ------------------------------------------------------------------
// Types
// ------------------------------------------------------------------
function FromArray(schema, references, value) {
    if (!IsArray(value))
        return value;
    return value.map((value) => Visit(schema.items, references, value));
}
function FromIntersect(schema, references, value) {
    const unevaluatedProperties = schema.unevaluatedProperties;
    const intersections = schema.allOf.map((schema) => Visit(schema, references, Clone(value)));
    const composite = intersections.reduce((acc, value) => (IsObject(value) ? { ...acc, ...value } : value), {});
    if (!IsObject(value) || !IsObject(composite) || !IsSchema(unevaluatedProperties))
        return composite;
    const knownkeys = KeyOfPropertyKeys(schema);
    for (const key of Object.getOwnPropertyNames(value)) {
        if (knownkeys.includes(key))
            continue;
        if (Check(unevaluatedProperties, references, value[key])) {
            composite[key] = Visit(unevaluatedProperties, references, value[key]);
        }
    }
    return composite;
}
function FromObject(schema, references, value) {
    if (!IsObject(value) || IsArray(value))
        return value; // Check IsArray for AllowArrayObject configuration
    const additionalProperties = schema.additionalProperties;
    for (const key of Object.getOwnPropertyNames(value)) {
        if (key in schema.properties) {
            value[key] = Visit(schema.properties[key], references, value[key]);
            continue;
        }
        if (IsSchema(additionalProperties) && Check(additionalProperties, references, value[key])) {
            value[key] = Visit(additionalProperties, references, value[key]);
            continue;
        }
        delete value[key];
    }
    return value;
}
function FromRecord(schema, references, value) {
    if (!IsObject(value))
        return value;
    const additionalProperties = schema.additionalProperties;
    const propertyKeys = Object.getOwnPropertyNames(value);
    const [propertyKey, propertySchema] = Object.entries(schema.patternProperties)[0];
    const propertyKeyTest = new RegExp(propertyKey);
    for (const key of propertyKeys) {
        if (propertyKeyTest.test(key)) {
            value[key] = Visit(propertySchema, references, value[key]);
            continue;
        }
        if (IsSchema(additionalProperties) && Check(additionalProperties, references, value[key])) {
            value[key] = Visit(additionalProperties, references, value[key]);
            continue;
        }
        delete value[key];
    }
    return value;
}
function FromRef(schema, references, value) {
    return Visit(Deref(schema, references), references, value);
}
function FromThis(schema, references, value) {
    return Visit(Deref(schema, references), references, value);
}
function FromTuple(schema, references, value) {
    if (!IsArray(value))
        return value;
    if (IsUndefined(schema.items))
        return [];
    const length = Math.min(value.length, schema.items.length);
    for (let i = 0; i < length; i++) {
        value[i] = Visit(schema.items[i], references, value[i]);
    }
    // prettier-ignore
    return value.length > length
        ? value.slice(0, length)
        : value;
}
function FromUnion(schema, references, value) {
    for (const inner of schema.anyOf) {
        if (IsCheckable(inner) && Check(inner, references, value)) {
            return Visit(inner, references, value);
        }
    }
    return value;
}
function Visit(schema, references, value) {
    const references_ = IsString(schema.$id) ? [...references, schema] : references;
    const schema_ = schema;
    switch (schema_[Kind]) {
        case 'Array':
            return FromArray(schema_, references_, value);
        case 'Intersect':
            return FromIntersect(schema_, references_, value);
        case 'Object':
            return FromObject(schema_, references_, value);
        case 'Record':
            return FromRecord(schema_, references_, value);
        case 'Ref':
            return FromRef(schema_, references_, value);
        case 'This':
            return FromThis(schema_, references_, value);
        case 'Tuple':
            return FromTuple(schema_, references_, value);
        case 'Union':
            return FromUnion(schema_, references_, value);
        default:
            return value;
    }
}
/** `[Mutable]` Removes excess properties from a value and returns the result. This function does not check the value and returns an unknown type. You should Check the result before use. Clean is a mutable operation. To avoid mutation, Clone the value first. */
export function Clean(...args) {
    return args.length === 3 ? Visit(args[0], args[1], args[2]) : Visit(args[0], [], args[1]);
}
