/* eslint-disable @typescript-eslint/no-explicit-any */
export function splitPath(path) {
    return path
        .toString()
        .split(/[[\].]+/)
        .filter((p) => p);
}
export function mergePath(path) {
    return path.reduce((acc, next) => {
        const key = String(next);
        if (typeof next === 'number' || /^\d+$/.test(key))
            acc += `[${key}]`;
        else if (!acc)
            acc += key;
        else
            acc += `.${key}`;
        return acc;
    }, '');
}
