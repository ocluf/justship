import type { OAuth2Provider } from "../index.js";
export declare class Discord implements OAuth2Provider {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string): Promise<DiscordTokens>;
    refreshAccessToken(refreshToken: string): Promise<DiscordTokens>;
}
export interface DiscordTokens {
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresAt: Date;
}
