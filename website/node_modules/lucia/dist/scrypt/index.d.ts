export declare function scrypt(password: Uint8Array, salt: Uint8Array, options: {
    N: number;
    r: number;
    p: number;
    dkLen?: number;
    maxmem?: number;
}): Promise<Uint8Array>;
