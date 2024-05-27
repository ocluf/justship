function DiscardKey(value, key) {
    const { [key]: _, ...rest } = value;
    return rest;
}
export function Discard(value, keys) {
    return keys.reduce((acc, key) => DiscardKey(acc, key), value);
}
