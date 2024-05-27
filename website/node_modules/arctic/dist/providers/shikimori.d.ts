import type { OAuth2Provider } from "../index.js";
export declare class Shikimori implements OAuth2Provider {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string, scopes?: string[]): Promise<URL>;
    validateAuthorizationCode(code: string): Promise<ShikimoriTokens>;
    refreshAccessToken(refreshToken: string): Promise<ShikimoriTokens>;
}
export interface ShikimoriTokens {
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresAt: Date;
}
