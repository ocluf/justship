import { Kind } from '../symbols/index.mjs';
// prettier-ignore
export function MappedResult(properties) {
    return {
        [Kind]: 'MappedResult',
        properties
    };
}
