"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Discard = void 0;
function DiscardKey(value, key) {
    const { [key]: _, ...rest } = value;
    return rest;
}
function Discard(value, keys) {
    return keys.reduce((acc, key) => DiscardKey(acc, key), value);
}
exports.Discard = Discard;
