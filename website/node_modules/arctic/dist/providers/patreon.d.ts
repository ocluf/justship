import type { OAuth2Provider } from "../index.js";
export declare class Patreon implements OAuth2Provider {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string): Promise<PatreonTokens>;
    refreshAccessToken(refreshToken: string): Promise<PatreonTokens>;
}
export interface PatreonTokens {
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresAt: Date;
}
