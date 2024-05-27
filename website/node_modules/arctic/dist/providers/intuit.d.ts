import type { OAuth2Provider } from "../index.js";
export declare class Intuit implements OAuth2Provider {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string): Promise<IntuitTokens>;
    refreshAccessToken(accessToken: string): Promise<IntuitTokens>;
}
export interface IntuitTokens {
    accessToken: string;
    accessTokenExpiresAt: Date;
    refreshToken: string;
    refreshTokenExpiresAt: Date;
    idToken: string;
}
