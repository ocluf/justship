import type { OAuth2Provider } from "../index.js";
export declare class Linear implements OAuth2Provider {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string): Promise<LinearTokens>;
}
export interface LinearTokens {
    accessToken: string;
    accessTokenExpiresAt: Date;
}
