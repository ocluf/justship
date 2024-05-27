import { Tuple } from '../tuple/index.mjs';
import { CloneRest } from '../clone/type.mjs';
/** `[JavaScript]` Extracts the ConstructorParameters from the given Constructor type */
export function ConstructorParameters(schema, options = {}) {
    return Tuple(CloneRest(schema.parameters), { ...options });
}
