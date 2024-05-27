import { encodeHex, decodeHex, base32 } from "oslo/encoding";
import { constantTimeEqual, generateRandomString, alphabet } from "oslo/crypto";
import { scrypt } from "./scrypt/index.js";
async function generateScryptKey(data, salt, blockSize = 16) {
    const encodedData = new TextEncoder().encode(data);
    const encodedSalt = new TextEncoder().encode(salt);
    const keyUint8Array = await scrypt(encodedData, encodedSalt, {
        N: 16384,
        r: blockSize,
        p: 1,
        dkLen: 64
    });
    return keyUint8Array;
}
export function generateId(length) {
    return generateRandomString(length, alphabet("0-9", "a-z"));
}
export function generateIdFromEntropySize(size) {
    const buffer = crypto.getRandomValues(new Uint8Array(size));
    return base32
        .encode(buffer, {
        includePadding: false
    })
        .toLowerCase();
}
export class Scrypt {
    async hash(password) {
        const salt = encodeHex(crypto.getRandomValues(new Uint8Array(16)));
        const key = await generateScryptKey(password.normalize("NFKC"), salt);
        return `${salt}:${encodeHex(key)}`;
    }
    async verify(hash, password) {
        const parts = hash.split(":");
        if (parts.length !== 2)
            return false;
        const [salt, key] = parts;
        const targetKey = await generateScryptKey(password.normalize("NFKC"), salt);
        return constantTimeEqual(targetKey, decodeHex(key));
    }
}
export class LegacyScrypt {
    async hash(password) {
        const salt = encodeHex(crypto.getRandomValues(new Uint8Array(16)));
        const key = await generateScryptKey(password.normalize("NFKC"), salt);
        return `s2:${salt}:${encodeHex(key)}`;
    }
    async verify(hash, password) {
        const parts = hash.split(":");
        if (parts.length === 2) {
            const [salt, key] = parts;
            const targetKey = await generateScryptKey(password.normalize("NFKC"), salt, 8);
            const result = constantTimeEqual(targetKey, decodeHex(key));
            return result;
        }
        if (parts.length !== 3)
            return false;
        const [version, salt, key] = parts;
        if (version === "s2") {
            const targetKey = await generateScryptKey(password.normalize("NFKC"), salt);
            return constantTimeEqual(targetKey, decodeHex(key));
        }
        return false;
    }
}
