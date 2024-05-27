import { CloneType } from '../clone/type.mjs';
/** `[JavaScript]` Extracts the ReturnType from the given Function type */
export function ReturnType(schema, options = {}) {
    return CloneType(schema.returns, options);
}
