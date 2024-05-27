import type { TypedArray } from "./index.js";
export declare function byteToBinary(byte: number): string;
export declare function bytesToBinary(bytes: Uint8Array): string;
export declare function binaryToInteger(bits: string): number;
export declare function bytesToInteger(bytes: Uint8Array): number;
export declare function compareBytes(buffer1: ArrayBuffer | TypedArray, buffer2: ArrayBuffer | TypedArray): boolean;
