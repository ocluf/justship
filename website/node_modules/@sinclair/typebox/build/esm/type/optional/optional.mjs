import { OptionalKind } from '../symbols/index.mjs';
import { CloneType } from '../clone/type.mjs';
import { Discard } from '../discard/index.mjs';
import { OptionalFromMappedResult } from './optional-from-mapped-result.mjs';
import { IsMappedResult } from '../guard/kind.mjs';
function RemoveOptional(schema) {
    return Discard(CloneType(schema), [OptionalKind]);
}
function AddOptional(schema) {
    return { ...CloneType(schema), [OptionalKind]: 'Optional' };
}
// prettier-ignore
function OptionalWithFlag(schema, F) {
    return (F === false
        ? RemoveOptional(schema)
        : AddOptional(schema));
}
/** `[Json]` Creates a Optional property */
export function Optional(schema, enable) {
    const F = enable ?? true;
    return IsMappedResult(schema) ? OptionalFromMappedResult(schema, F) : OptionalWithFlag(schema, F);
}
