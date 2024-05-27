import type { PasswordHashingAlgorithm } from "oslo/password";
export type { PasswordHashingAlgorithm } from "oslo/password";
export declare function generateId(length: number): string;
export declare function generateIdFromEntropySize(size: number): string;
export declare class Scrypt implements PasswordHashingAlgorithm {
    hash(password: string): Promise<string>;
    verify(hash: string, password: string): Promise<boolean>;
}
export declare class LegacyScrypt implements PasswordHashingAlgorithm {
    hash(password: string): Promise<string>;
    verify(hash: string, password: string): Promise<boolean>;
}
