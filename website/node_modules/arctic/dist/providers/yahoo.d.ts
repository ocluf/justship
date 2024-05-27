import type { OAuth2Provider } from "../index.js";
export declare class Yahoo implements OAuth2Provider {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string): Promise<YahooTokens>;
    refreshAccessToken(refreshToken: string): Promise<YahooTokens>;
}
export interface YahooTokens {
    accessToken: string;
    accessTokenExpiresAt: Date;
    refreshToken: string | null;
    idToken: string;
}
