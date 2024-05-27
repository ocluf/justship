import type { TypedArray } from "../index.js";
export declare function sha1(data: ArrayBuffer | TypedArray): Promise<ArrayBuffer>;
export declare function sha256(data: ArrayBuffer | TypedArray): Promise<ArrayBuffer>;
export declare function sha384(data: ArrayBuffer | TypedArray): Promise<ArrayBuffer>;
export declare function sha512(data: ArrayBuffer | TypedArray): Promise<ArrayBuffer>;
export type SHAHash = "SHA-1" | "SHA-256" | "SHA-384" | "SHA-512";
