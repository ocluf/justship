import type { TypedArray } from "../index.js";
import type { Encoding } from "./index.js";
export declare class Base64Encoding implements Encoding {
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
export declare const base64: Base64Encoding;
export declare const base64url: Base64Encoding;
/** @deprecated Use `base64.encode()` instead */
export declare function encodeBase64(data: ArrayBuffer | TypedArray, options?: {
    padding?: boolean;
}): string;
/** @deprecated Use `base64.decode()` instead */
export declare function decodeBase64(data: string): Uint8Array;
/** @deprecated Use `base64url.encode()` instead */
export declare function encodeBase64url(data: ArrayBuffer | TypedArray): string;
/** @deprecated Use `base64url.decode()` instead */
export declare function decodeBase64url(data: string): Uint8Array;
