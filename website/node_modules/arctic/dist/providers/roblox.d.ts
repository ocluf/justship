import type { OAuth2ProviderWithPKCE } from "../index.js";
export declare class Roblox implements OAuth2ProviderWithPKCE {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string, codeVerifier: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string, codeVerifier: string): Promise<RobloxTokens>;
    refreshAccessToken(refreshToken: string): Promise<RobloxTokens>;
}
export interface RobloxTokens {
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresAt: Date;
    idToken: string;
}
