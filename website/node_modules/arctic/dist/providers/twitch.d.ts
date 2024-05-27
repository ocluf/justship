import type { OAuth2Provider } from "../index.js";
export declare class Twitch implements OAuth2Provider {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string): Promise<TwitchTokens>;
    refreshAccessToken(refreshToken: string): Promise<TwitchTokens>;
}
export interface TwitchTokens {
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresAt: Date;
}
