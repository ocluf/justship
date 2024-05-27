import type { PasswordHashingAlgorithm } from "./index.js";
import type { TypedArray } from "../index.js";
export declare class Argon2id implements PasswordHashingAlgorithm {
    constructor(options?: {
        memorySize?: number;
        iterations?: number;
        tagLength?: number;
        parallelism?: number;
        secret?: ArrayBuffer | TypedArray;
    });
    private memorySize?;
    private iterations?;
    private tagLength?;
    private parallelism?;
    private secret;
    hash(password: string): Promise<string>;
    verify(hash: string, password: string): Promise<boolean>;
}
