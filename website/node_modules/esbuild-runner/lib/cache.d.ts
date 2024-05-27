declare function clear(): void;
declare function get(filename: string, transpiler: () => string): string;
declare const _default: {
    get: typeof get;
    clear: typeof clear;
    tmpPath: string;
};
export default _default;
