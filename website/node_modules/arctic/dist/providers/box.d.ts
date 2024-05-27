import type { OAuth2Provider } from "../index.js";
export declare class Box implements OAuth2Provider {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string): Promise<URL>;
    validateAuthorizationCode(code: string): Promise<BoxTokens>;
}
export interface BoxTokens {
    accessToken: string;
}
