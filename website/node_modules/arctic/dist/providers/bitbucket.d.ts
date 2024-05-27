import type { OAuth2Provider } from "../index.js";
export declare class Bitbucket implements OAuth2Provider {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string): Promise<BitbucketTokens>;
    refreshAccessToken(refreshToken: string): Promise<BitbucketTokens>;
}
export interface BitbucketTokens {
    accessToken: string;
    accessTokenExpiresAt: Date;
    refreshToken: string;
}
