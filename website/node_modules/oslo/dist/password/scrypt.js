import { scrypt } from "node:crypto";
import { decodeHex, encodeHex } from "../encoding/index.js";
import { constantTimeEqual } from "../crypto/index.js";
export class Scrypt {
    constructor(options) {
        this.N = options?.N ?? 16384;
        this.r = options?.r ?? 16;
        this.p = options?.p ?? 1;
        this.dkLen = options?.dkLen ?? 64;
    }
    N;
    r;
    p;
    dkLen;
    async hash(password) {
        const salt = encodeHex(crypto.getRandomValues(new Uint8Array(16)));
        const key = await this.generateKey(password, salt);
        return `${salt}:${encodeHex(key)}`;
    }
    async verify(hash, password) {
        const [salt, key] = hash.split(":");
        const targetKey = await this.generateKey(password, salt);
        return constantTimeEqual(targetKey, decodeHex(key));
    }
    async generateKey(password, salt) {
        return await new Promise((resolve, reject) => {
            scrypt(password.normalize("NFKC"), salt, this.dkLen, {
                N: this.N,
                p: this.p,
                r: this.r,
                // errors when 128 * N * r > `maxmem` (approximately)
                maxmem: 128 * this.N * this.r * 2
            }, (err, buff) => {
                if (err)
                    return reject(err);
                return resolve(buff);
            });
        });
    }
}
