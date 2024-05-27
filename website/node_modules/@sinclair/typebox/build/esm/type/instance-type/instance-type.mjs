import { CloneType } from '../clone/type.mjs';
/** `[JavaScript]` Extracts the InstanceType from the given Constructor type */
export function InstanceType(schema, options = {}) {
    return CloneType(schema.returns, options);
}
