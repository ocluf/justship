import type { PasswordHashingAlgorithm } from "./index.js";
export declare class Bcrypt implements PasswordHashingAlgorithm {
    constructor(options?: {
        cost?: number;
    });
    private cost;
    hash(password: string): Promise<string>;
    verify(hash: string, password: string): Promise<boolean>;
}
