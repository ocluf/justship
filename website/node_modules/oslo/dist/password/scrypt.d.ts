import type { PasswordHashingAlgorithm } from "./index.js";
export declare class Scrypt implements PasswordHashingAlgorithm {
    constructor(options?: {
        N?: number;
        r?: number;
        p?: number;
        dkLen?: number;
    });
    private N;
    private r;
    private p;
    private dkLen;
    hash(password: string): Promise<string>;
    verify(hash: string, password: string): Promise<boolean>;
    private generateKey;
}
