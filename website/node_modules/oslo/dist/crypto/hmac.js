export class HMAC {
    hash;
    constructor(hash) {
        this.hash = hash;
    }
    async verify(key, signature, data) {
        const cryptoKey = await crypto.subtle.importKey("raw", key, {
            name: "HMAC",
            hash: this.hash
        }, false, ["verify"]);
        return await crypto.subtle.verify("HMAC", cryptoKey, signature, data);
    }
    async sign(key, data) {
        const cryptoKey = await crypto.subtle.importKey("raw", key, {
            name: "HMAC",
            hash: this.hash
        }, false, ["sign"]);
        const signature = await crypto.subtle.sign("HMAC", cryptoKey, data);
        return signature;
    }
    async generateKey() {
        const cryptoKey = await crypto.subtle.generateKey({
            name: "HMAC",
            hash: this.hash
        }, true, ["sign"]);
        const key = await crypto.subtle.exportKey("raw", cryptoKey);
        return key;
    }
}
