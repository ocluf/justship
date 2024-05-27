import { Kind } from '../symbols/index.mjs';
import { CloneType, CloneRest } from '../clone/type.mjs';
// ------------------------------------------------------------------
// TypeGuard
// ------------------------------------------------------------------
import { IsObject, IsSchema } from '../guard/kind.mjs';
// ------------------------------------------------------------------
// IntersectCreate
// ------------------------------------------------------------------
// prettier-ignore
export function IntersectCreate(T, options) {
    const allObjects = T.every((schema) => IsObject(schema));
    const clonedUnevaluatedProperties = IsSchema(options.unevaluatedProperties)
        ? { unevaluatedProperties: CloneType(options.unevaluatedProperties) }
        : {};
    return ((options.unevaluatedProperties === false || IsSchema(options.unevaluatedProperties) || allObjects
        ? { ...options, ...clonedUnevaluatedProperties, [Kind]: 'Intersect', type: 'object', allOf: CloneRest(T) }
        : { ...options, ...clonedUnevaluatedProperties, [Kind]: 'Intersect', allOf: CloneRest(T) }));
}
