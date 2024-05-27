import type { TimeSpan, TypedArray } from "../index.js";
export declare function createTOTPKeyURI(issuer: string, accountName: string, secret: ArrayBuffer | TypedArray, options?: {
    digits?: number;
    period?: TimeSpan;
}): string;
export declare function createHOTPKeyURI(issuer: string, accountName: string, secret: ArrayBuffer | TypedArray, options?: {
    counter?: number;
    digits?: number;
}): string;
