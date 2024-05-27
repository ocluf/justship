import type { OAuth2Provider } from "../index.js";
export declare class Atlassian implements OAuth2Provider {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string): Promise<AtlassianTokens>;
    refreshAccessToken(refreshToken: string): Promise<AtlassianTokens>;
}
export interface AtlassianTokens {
    accessToken: string;
    accessTokenExpiresAt: Date;
    refreshToken: string | null;
}
