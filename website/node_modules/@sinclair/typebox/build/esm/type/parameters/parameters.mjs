import { Tuple } from '../tuple/index.mjs';
import { CloneRest } from '../clone/type.mjs';
/** `[JavaScript]` Extracts the Parameters from the given Function type */
export function Parameters(schema, options = {}) {
    return Tuple(CloneRest(schema.parameters), { ...options });
}
