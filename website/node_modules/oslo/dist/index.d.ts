export type TimeSpanUnit = "ms" | "s" | "m" | "h" | "d" | "w";
export declare class TimeSpan {
    constructor(value: number, unit: TimeSpanUnit);
    value: number;
    unit: TimeSpanUnit;
    milliseconds(): number;
    seconds(): number;
    transform(x: number): TimeSpan;
}
export declare function isWithinExpirationDate(date: Date): boolean;
export declare function createDate(timeSpan: TimeSpan): Date;
export type TypedArray = Uint8Array | Int8Array | Uint16Array | Int16Array | Uint32Array | Int32Array | Float32Array | Float64Array | BigInt64Array | BigUint64Array;
