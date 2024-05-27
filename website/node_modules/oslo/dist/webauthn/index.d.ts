import type { TypedArray } from "../index.js";
export interface AttestationResponse {
    clientDataJSON: ArrayBuffer | TypedArray;
    authenticatorData: ArrayBuffer | TypedArray;
}
export interface AssertionResponse {
    clientDataJSON: ArrayBuffer | TypedArray;
    authenticatorData: ArrayBuffer | TypedArray;
    signature: ArrayBuffer | TypedArray;
}
export declare class WebAuthnController {
    private originURL;
    constructor(origin: string);
    validateAttestationResponse(response: AttestationResponse, challenge: ArrayBuffer | TypedArray): Promise<void>;
    validateAssertionResponse(algorithm: "ES256" | "RS256", publicKey: ArrayBuffer | TypedArray, response: AssertionResponse, challenge: ArrayBuffer | TypedArray): Promise<void>;
    private verifyClientDataJSON;
    private verifyAuthenticatorData;
}
