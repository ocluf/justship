import type { OAuth2Provider } from "../index.js";
export declare class Osu implements OAuth2Provider {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, options?: {
        redirectURI?: string;
    });
    createAuthorizationURL(state: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string): Promise<OsuTokens>;
    refreshAccessToken(refreshToken: string): Promise<OsuTokens>;
}
export interface OsuTokens {
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresAt: Date;
}
