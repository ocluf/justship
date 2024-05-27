import { TimeSpan } from "../index.js";
import type { TypedArray } from "../index.js";
export declare class TOTPController {
    private digits;
    private period;
    constructor(options?: {
        digits?: number;
        period?: TimeSpan;
    });
    generate(secret: ArrayBuffer | TypedArray): Promise<string>;
    verify(totp: string, secret: ArrayBuffer | TypedArray): Promise<boolean>;
}
