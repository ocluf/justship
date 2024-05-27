import type { OAuth2ProviderWithPKCE } from "../index.js";
export declare class Twitter implements OAuth2ProviderWithPKCE {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string, codeVerifier: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string, codeVerifier: string): Promise<TwitterTokens>;
    refreshAccessToken(refreshToken: string): Promise<TwitterTokens>;
}
export interface TwitterTokens {
    accessToken: string;
    refreshToken: string | null;
}
