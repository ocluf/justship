import { SchemaError } from '../errors.js';
import { schemaInfo } from './schemaInfo.js';
import { assertSchema } from '../utils.js';
export function schemaShape(schema, path = []) {
    const output = _schemaShape(schema, path);
    if (!output)
        throw new SchemaError('No shape could be created for schema.', path);
    return output;
}
function _schemaShape(schema, path) {
    assertSchema(schema, path);
    const info = schemaInfo(schema, false, path);
    if (info.array || info.union) {
        const arr = info.array || [];
        const union = info.union || [];
        return arr.concat(union).reduce((shape, next) => {
            const nextShape = _schemaShape(next, path);
            if (nextShape)
                shape = { ...(shape ?? {}), ...nextShape };
            return shape;
        }, arr.length ? {} : undefined);
    }
    if (info.properties) {
        const output = {};
        for (const [key, prop] of Object.entries(info.properties)) {
            const shape = _schemaShape(prop, [...path, key]);
            if (shape)
                output[key] = shape;
        }
        return output;
    }
    return info.types.includes('array') || info.types.includes('object') ? {} : undefined;
}
export function shapeFromObject(obj) {
    let output = {};
    const isArray = Array.isArray(obj);
    for (const [key, value] of Object.entries(obj)) {
        if (!value || typeof value !== 'object')
            continue;
        if (isArray)
            output = { ...output, ...shapeFromObject(value) };
        else
            output[key] = shapeFromObject(value);
    }
    return output;
}
