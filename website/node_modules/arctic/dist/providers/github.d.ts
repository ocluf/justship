import type { OAuth2Provider } from "../index.js";
export declare class GitHub implements OAuth2Provider {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, options?: {
        redirectURI?: string;
        enterpriseDomain?: string;
    });
    createAuthorizationURL(state: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string): Promise<GitHubTokens>;
}
export interface GitHubTokens {
    accessToken: string;
}
