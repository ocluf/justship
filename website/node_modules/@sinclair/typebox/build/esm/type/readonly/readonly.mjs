import { ReadonlyKind } from '../symbols/index.mjs';
import { CloneType } from '../clone/type.mjs';
import { Discard } from '../discard/index.mjs';
import { ReadonlyFromMappedResult } from './readonly-from-mapped-result.mjs';
import { IsMappedResult } from '../guard/kind.mjs';
function RemoveReadonly(schema) {
    return Discard(CloneType(schema), [ReadonlyKind]);
}
function AddReadonly(schema) {
    return { ...CloneType(schema), [ReadonlyKind]: 'Readonly' };
}
// prettier-ignore
function ReadonlyWithFlag(schema, F) {
    return (F === false
        ? RemoveReadonly(schema)
        : AddReadonly(schema));
}
/** `[Json]` Creates a Readonly property */
export function Readonly(schema, enable) {
    const F = enable ?? true;
    return IsMappedResult(schema) ? ReadonlyFromMappedResult(schema, F) : ReadonlyWithFlag(schema, F);
}
