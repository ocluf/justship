import type { OAuth2Provider } from "../index.js";
export declare class Yandex implements OAuth2Provider {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, options?: {
        redirectURI: string;
    });
    createAuthorizationURL(state: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string): Promise<YandexTokens>;
    refreshAccessToken(refreshToken: string): Promise<YandexTokens>;
}
export interface YandexTokens {
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresAt: Date;
}
