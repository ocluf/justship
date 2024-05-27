import type { OAuth2ProviderWithPKCE } from "../index.js";
export declare class MyAnimeList implements OAuth2ProviderWithPKCE {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, options?: {
        redirectURI?: string;
    });
    createAuthorizationURL(state: string, codeVerifier: string): Promise<URL>;
    validateAuthorizationCode(code: string, codeVerifier: string): Promise<MyAnimeListTokens>;
    refreshAccessToken(refreshToken: string): Promise<MyAnimeListTokens>;
}
export interface MyAnimeListTokens {
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresAt: Date;
}
