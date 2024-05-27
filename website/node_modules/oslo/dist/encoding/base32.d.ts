import type { TypedArray } from "../index.js";
import type { Encoding } from "./index.js";
export declare class Base32Encoding implements Encoding {
    alphabet: string;
    padding: string;
    private decodeMap;
    constructor(alphabet: string, options?: {
        padding?: string;
    });
    encode(data: Uint8Array, options?: {
        includePadding?: boolean;
    }): string;
    decode(data: string, options?: {
        strict?: boolean;
    }): Uint8Array;
}
export declare const base32: Base32Encoding;
export declare const base32hex: Base32Encoding;
/** @deprecated Use `base32.encode()` instead */
export declare function encodeBase32(data: ArrayBuffer | TypedArray, options?: {
    padding?: boolean;
}): string;
/** @deprecated Use `base32.decode()` instead */
export declare function decodeBase32(data: string): Uint8Array;
