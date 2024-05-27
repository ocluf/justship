import type { OAuth2Provider } from "../index.js";
export declare class VK implements OAuth2Provider {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string): Promise<VKTokens>;
}
export interface VKTokens {
    accessToken: string;
    accessTokenExpiresAt: Date;
    userId: string;
    email: string | null;
}
