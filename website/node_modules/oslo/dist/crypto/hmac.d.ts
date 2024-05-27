import type { TypedArray } from "../index.js";
import type { SHAHash } from "./sha.js";
export declare class HMAC {
    private hash;
    constructor(hash: SHAHash);
    verify(key: ArrayBuffer | TypedArray, signature: ArrayBuffer | TypedArray, data: ArrayBuffer | TypedArray): Promise<boolean>;
    sign(key: ArrayBuffer | TypedArray, data: ArrayBuffer | TypedArray): Promise<ArrayBuffer>;
    generateKey(): Promise<ArrayBuffer>;
}
