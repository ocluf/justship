import justClone from 'just-clone';
import { SchemaError } from './errors.js';
export function clone(data) {
    return data && typeof data === 'object' ? justClone(data) : data;
}
export function assertSchema(schema, path) {
    if (typeof schema === 'boolean') {
        throw new SchemaError('Schema property cannot be defined as boolean.', path);
    }
}
