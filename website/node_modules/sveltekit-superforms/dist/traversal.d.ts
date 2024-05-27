export type PathData = {
    parent: any;
    key: string;
    value: any;
    path: (string | number | symbol)[];
    isLeaf: boolean;
    set: (value: any) => 'skip';
};
export declare function pathExists<T extends object>(obj: T, path: (string | number | symbol)[], options?: {
    value?: (value: unknown) => boolean;
    modifier?: (data: PathData) => undefined | unknown | void;
}): PathData | undefined;
export declare function traversePath<T extends object>(obj: T, realPath: (string | number | symbol)[], modifier?: (data: PathData) => undefined | unknown | void): PathData | undefined;
type TraverseStatus = 'abort' | 'skip' | unknown | void;
export declare function traversePaths<T extends object>(parent: T, modifier: (data: PathData) => TraverseStatus, path?: (string | number | symbol)[]): TraverseStatus;
/**
 * Compare two objects and return the differences as paths.
 */
export declare function comparePaths(newObj: unknown, oldObj: unknown): (string | number | symbol)[][];
export declare function setPaths(obj: Record<string, unknown>, paths: (string | number | symbol)[][], value: NonNullable<unknown> | ((path: (string | number | symbol)[], data: PathData) => unknown) | null | undefined): void;
export {};
