import type { TypedArray } from "../index.js";
import type { KeyPair } from "./index.js";
import type { SHAHash } from "./sha.js";
export type ECDSACurve = "P-256" | "P-384" | "P-521";
export declare class ECDSA {
    private hash;
    private curve;
    constructor(hash: SHAHash, curve: ECDSACurve);
    sign(privateKey: ArrayBuffer | TypedArray, data: ArrayBuffer | TypedArray): Promise<ArrayBuffer>;
    verify(publicKey: ArrayBuffer | TypedArray, signature: ArrayBuffer | TypedArray, data: ArrayBuffer | TypedArray): Promise<boolean>;
    generateKeyPair(): Promise<KeyPair>;
}
