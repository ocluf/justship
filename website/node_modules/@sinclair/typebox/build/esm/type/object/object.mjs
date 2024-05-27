import { CloneType } from '../clone/type.mjs';
import { Kind } from '../symbols/index.mjs';
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
import { IsOptional, IsSchema } from '../guard/kind.mjs';
/** `[Json]` Creates an Object type */
function _Object(properties, options = {}) {
    const propertyKeys = globalThis.Object.getOwnPropertyNames(properties);
    const optionalKeys = propertyKeys.filter((key) => IsOptional(properties[key]));
    const requiredKeys = propertyKeys.filter((name) => !optionalKeys.includes(name));
    const clonedAdditionalProperties = IsSchema(options.additionalProperties) ? { additionalProperties: CloneType(options.additionalProperties) } : {};
    const clonedProperties = {};
    for (const key of propertyKeys)
        clonedProperties[key] = CloneType(properties[key]);
    return (requiredKeys.length > 0
        ? { ...options, ...clonedAdditionalProperties, [Kind]: 'Object', type: 'object', properties: clonedProperties, required: requiredKeys }
        : { ...options, ...clonedAdditionalProperties, [Kind]: 'Object', type: 'object', properties: clonedProperties });
}
/** `[Json]` Creates an Object type */
export const Object = _Object;
