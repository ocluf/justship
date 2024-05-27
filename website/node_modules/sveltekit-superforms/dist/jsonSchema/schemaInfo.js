import { assertSchema } from '../utils.js';
import { merge } from 'ts-deepmerge';
const conversionFormatTypes = ['unix-time', 'bigint', 'any', 'symbol', 'set'];
/**
 * Normalizes the different kind of schema variations (anyOf, union, const null, etc)
 * to figure out the field type, optional, nullable, etc.
 */
export function schemaInfo(schema, isOptional, path) {
    assertSchema(schema, path);
    if (schema.allOf && schema.allOf.length) {
        return {
            ...merge.withOptions({ allowUndefinedOverrides: false }, ...schema.allOf.map((s) => schemaInfo(s, false, []))),
            schema
        };
    }
    const types = schemaTypes(schema, path);
    const array = schema.items && types.includes('array')
        ? (Array.isArray(schema.items) ? schema.items : [schema.items]).filter((s) => typeof s !== 'boolean')
        : undefined;
    const additionalProperties = schema.additionalProperties &&
        typeof schema.additionalProperties === 'object' &&
        types.includes('object')
        ? Object.fromEntries(Object.entries(schema.additionalProperties).filter(([, value]) => typeof value !== 'boolean'))
        : undefined;
    const properties = schema.properties && types.includes('object')
        ? Object.fromEntries(Object.entries(schema.properties).filter(([, value]) => typeof value !== 'boolean'))
        : undefined;
    const union = unionInfo(schema)?.filter((u) => u.type !== 'null' && u.const !== null);
    return {
        types: types.filter((s) => s !== 'null'),
        isOptional,
        isNullable: types.includes('null'),
        schema,
        union: union?.length ? union : undefined,
        array,
        properties,
        additionalProperties,
        required: schema.required
    };
}
function schemaTypes(schema, path) {
    assertSchema(schema, path);
    let types = schema.const === null ? ['null'] : [];
    if (schema.type) {
        types = Array.isArray(schema.type) ? schema.type : [schema.type];
    }
    if (schema.anyOf) {
        types = schema.anyOf.flatMap((s) => schemaTypes(s, path));
    }
    if (types.includes('array') && schema.uniqueItems) {
        const i = types.findIndex((t) => t != 'array');
        types[i] = 'set';
    }
    else if (schema.format && conversionFormatTypes.includes(schema.format)) {
        types.unshift(schema.format);
        if (schema.format == 'unix-time') {
            const i = types.findIndex((t) => t == 'integer');
            types.splice(i, 1);
        }
    }
    if (schema.const && schema.const !== null && typeof schema.const !== 'function') {
        types.push(typeof schema.const);
    }
    return Array.from(new Set(types));
}
function unionInfo(schema) {
    if (!schema.anyOf || !schema.anyOf.length)
        return undefined;
    return schema.anyOf.filter((s) => typeof s !== 'boolean');
}
