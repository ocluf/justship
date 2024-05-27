import { hash, verify } from "@node-rs/bcrypt";
export class Bcrypt {
    constructor(options) {
        this.cost = options?.cost ?? 10;
    }
    cost;
    async hash(password) {
        return await hash(password.normalize("NFKC"), this.cost);
    }
    async verify(hash, password) {
        return await verify(password.normalize("NFKC"), hash);
    }
}
