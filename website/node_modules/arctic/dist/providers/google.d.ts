import type { OAuth2ProviderWithPKCE } from "../index.js";
export declare class Google implements OAuth2ProviderWithPKCE {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string, codeVerifier: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string, codeVerifier: string): Promise<GoogleTokens>;
    refreshAccessToken(refreshToken: string): Promise<GoogleRefreshedTokens>;
}
export interface GoogleTokens {
    accessToken: string;
    refreshToken: string | null;
    accessTokenExpiresAt: Date;
    idToken: string;
}
export interface GoogleRefreshedTokens {
    accessToken: string;
    accessTokenExpiresAt: Date;
}
