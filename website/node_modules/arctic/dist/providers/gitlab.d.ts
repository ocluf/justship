import type { OAuth2Provider } from "../index.js";
export declare class GitLab implements OAuth2Provider {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, redirectURI: string, options?: {
        domain?: string;
    });
    createAuthorizationURL(state: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string): Promise<GitLabTokens>;
    refreshAccessToken(refreshToken: string): Promise<GitLabTokens>;
}
export interface GitLabTokens {
    accessToken: string;
    accessTokenExpiresAt: Date;
    refreshToken: string;
}
