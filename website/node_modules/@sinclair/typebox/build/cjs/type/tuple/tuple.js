"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tuple = void 0;
const type_1 = require("../clone/type");
const index_1 = require("../symbols/index");
/** `[Json]` Creates a Tuple type */
function Tuple(items, options = {}) {
    // return TupleResolver.Resolve(T)
    const [additionalItems, minItems, maxItems] = [false, items.length, items.length];
    // prettier-ignore
    return (items.length > 0 ?
        { ...options, [index_1.Kind]: 'Tuple', type: 'array', items: (0, type_1.CloneRest)(items), additionalItems, minItems, maxItems } :
        { ...options, [index_1.Kind]: 'Tuple', type: 'array', minItems, maxItems });
}
exports.Tuple = Tuple;
