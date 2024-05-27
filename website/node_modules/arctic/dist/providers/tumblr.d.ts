import type { OAuth2Provider } from "../index.js";
export declare class Tumblr implements OAuth2Provider {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, options?: {
        redirectURI?: string;
    });
    createAuthorizationURL(state: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string): Promise<TumblrTokens>;
    refreshAccessToken(refreshToken: string): Promise<TumblrTokens>;
}
export interface TumblrTokens {
    accessToken: string;
    accessTokenExpiresAt: Date;
    refreshToken: string;
}
