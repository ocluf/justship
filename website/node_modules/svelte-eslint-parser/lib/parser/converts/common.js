"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWithLoc = exports.lastIndexOf = exports.indexOf = void 0;
/** indexOf */
function indexOf(str, search, start, end) {
    const endIndex = end !== null && end !== void 0 ? end : str.length;
    for (let index = start; index < endIndex; index++) {
        const c = str[index];
        if (search(c, index)) {
            return index;
        }
    }
    return -1;
}
exports.indexOf = indexOf;
/** lastIndexOf */
function lastIndexOf(str, search, end) {
    for (let index = end; index >= 0; index--) {
        const c = str[index];
        if (search(c, index)) {
            return index;
        }
    }
    return -1;
}
exports.lastIndexOf = lastIndexOf;
/** Get node with location */
function getWithLoc(node) {
    return node;
}
exports.getWithLoc = getWithLoc;
