import type { OAuth2Provider } from "../index.js";
export declare class Reddit implements OAuth2Provider {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string): Promise<RedditTokens>;
    refreshAccessToken(refreshToken: string): Promise<RedditTokens>;
}
export interface RedditTokens {
    accessToken: string;
    refreshToken: string | null;
    accessTokenExpiresAt: Date;
}
