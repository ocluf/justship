import type { TypedArray } from "../index.js";
import type { KeyPair } from "./index.js";
import type { SHAHash } from "./sha.js";
export declare class RSASSAPKCS1v1_5 {
    private hash;
    constructor(hash: SHAHash);
    verify(publicKey: ArrayBuffer | TypedArray, signature: ArrayBuffer | TypedArray, data: ArrayBuffer | TypedArray): Promise<boolean>;
    sign(privateKey: ArrayBuffer | TypedArray, data: ArrayBuffer | TypedArray): Promise<ArrayBuffer>;
    generateKeyPair(modulusLength?: 2048 | 4096): Promise<KeyPair>;
}
export declare class RSASSAPSS {
    private hash;
    private saltLength;
    constructor(hash: SHAHash);
    verify(publicKey: ArrayBuffer | TypedArray, signature: ArrayBuffer | TypedArray, data: ArrayBuffer | TypedArray): Promise<boolean>;
    sign(privateKey: ArrayBuffer | TypedArray, data: ArrayBuffer | TypedArray): Promise<ArrayBuffer>;
    generateKeyPair(modulusLength?: 2048 | 4096): Promise<KeyPair>;
}
