export class ECDSA {
    hash;
    curve;
    constructor(hash, curve) {
        this.hash = hash;
        this.curve = curve;
    }
    async sign(privateKey, data) {
        const cryptoKey = await crypto.subtle.importKey("pkcs8", privateKey, {
            name: "ECDSA",
            namedCurve: this.curve
        }, false, ["sign"]);
        const signature = await crypto.subtle.sign({
            name: "ECDSA",
            hash: this.hash
        }, cryptoKey, data);
        return signature;
    }
    async verify(publicKey, signature, data) {
        const cryptoKey = await crypto.subtle.importKey("spki", publicKey, {
            name: "ECDSA",
            namedCurve: this.curve
        }, false, ["verify"]);
        return await crypto.subtle.verify({
            name: "ECDSA",
            hash: this.hash
        }, cryptoKey, signature, data);
    }
    async generateKeyPair() {
        const cryptoKeyPair = await crypto.subtle.generateKey({
            name: "ECDSA",
            namedCurve: this.curve
        }, true, ["sign"]);
        const privateKey = await crypto.subtle.exportKey("pkcs8", cryptoKeyPair.privateKey);
        const publicKey = await crypto.subtle.exportKey("spki", cryptoKeyPair.publicKey);
        return {
            privateKey,
            publicKey
        };
    }
}
