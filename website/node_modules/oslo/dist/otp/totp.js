import { TimeSpan } from "../index.js";
import { generateHOTP } from "./hotp.js";
export class TOTPController {
    digits;
    period;
    constructor(options) {
        this.digits = options?.digits ?? 6;
        this.period = options?.period ?? new TimeSpan(30, "s");
    }
    async generate(secret) {
        const counter = Math.floor(Date.now() / this.period.milliseconds());
        return await generateHOTP(secret, counter, this.digits);
    }
    async verify(totp, secret) {
        const expectedTOTP = await this.generate(secret);
        return totp === expectedTOTP;
    }
}
