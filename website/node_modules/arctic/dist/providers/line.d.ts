import type { OAuth2ProviderWithPKCE } from "../index.js";
export declare class Line implements OAuth2ProviderWithPKCE {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string, codeVerifier: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string, codeVerifier: string): Promise<LineTokens>;
    refreshAccessToken(refreshToken: string): Promise<LineRefreshedTokens>;
}
export interface LineRefreshedTokens {
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresAt: Date;
}
export interface LineTokens {
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresAt: Date;
    idToken: string;
}
