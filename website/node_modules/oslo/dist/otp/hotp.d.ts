import type { TypedArray } from "../index.js";
export declare function generateHOTP(key: ArrayBuffer | TypedArray, counter: number, digits?: number): Promise<string>;
