export class RSASSAPKCS1v1_5 {
    hash;
    constructor(hash) {
        this.hash = hash;
    }
    async verify(publicKey, signature, data) {
        const cryptoKey = await crypto.subtle.importKey("spki", publicKey, {
            name: "RSASSA-PKCS1-v1_5",
            hash: this.hash
        }, false, ["verify"]);
        return await crypto.subtle.verify("RSASSA-PKCS1-v1_5", cryptoKey, signature, data);
    }
    async sign(privateKey, data) {
        const cryptoKey = await crypto.subtle.importKey("pkcs8", privateKey, {
            name: "RSASSA-PKCS1-v1_5",
            hash: this.hash
        }, false, ["sign"]);
        const signature = await crypto.subtle.sign("RSASSA-PKCS1-v1_5", cryptoKey, data);
        return signature;
    }
    async generateKeyPair(modulusLength) {
        const cryptoKeyPair = await crypto.subtle.generateKey({
            name: "RSASSA-PKCS1-v1_5",
            hash: this.hash,
            modulusLength: modulusLength ?? 2048,
            publicExponent: new Uint8Array([0x01, 0x00, 0x01])
        }, true, ["sign"]);
        const privateKey = await crypto.subtle.exportKey("pkcs8", cryptoKeyPair.privateKey);
        const publicKey = await crypto.subtle.exportKey("spki", cryptoKeyPair.publicKey);
        return {
            privateKey,
            publicKey
        };
    }
}
export class RSASSAPSS {
    hash;
    saltLength;
    constructor(hash) {
        this.hash = hash;
        if (hash === "SHA-1") {
            this.saltLength = 20;
        }
        else if (hash === "SHA-256") {
            this.saltLength = 32;
        }
        else if (hash === "SHA-384") {
            this.saltLength = 48;
        }
        else {
            this.saltLength = 64;
        }
    }
    async verify(publicKey, signature, data) {
        const cryptoKey = await crypto.subtle.importKey("spki", publicKey, {
            name: "RSA-PSS",
            hash: this.hash
        }, false, ["verify"]);
        return await crypto.subtle.verify({
            name: "RSA-PSS",
            saltLength: this.saltLength
        }, cryptoKey, signature, data);
    }
    async sign(privateKey, data) {
        const cryptoKey = await crypto.subtle.importKey("pkcs8", privateKey, {
            name: "RSA-PSS",
            hash: this.hash
        }, false, ["sign"]);
        const signature = await crypto.subtle.sign({
            name: "RSA-PSS",
            saltLength: this.saltLength
        }, cryptoKey, data);
        return signature;
    }
    async generateKeyPair(modulusLength) {
        const cryptoKeyPair = await crypto.subtle.generateKey({
            name: "RSA-PSS",
            hash: this.hash,
            modulusLength: modulusLength ?? 2048,
            publicExponent: new Uint8Array([0x01, 0x00, 0x01])
        }, true, ["sign"]);
        const privateKey = await crypto.subtle.exportKey("pkcs8", cryptoKeyPair.privateKey);
        const publicKey = await crypto.subtle.exportKey("spki", cryptoKeyPair.publicKey);
        return {
            privateKey,
            publicKey
        };
    }
}
