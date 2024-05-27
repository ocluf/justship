import { Kind } from '../symbols/index.mjs';
// prettier-ignore
export function MappedKey(T) {
    return {
        [Kind]: 'MappedKey',
        keys: T
    };
}
