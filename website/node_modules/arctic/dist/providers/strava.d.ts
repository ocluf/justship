import type { OAuth2Provider } from "../index.js";
export declare class Strava implements OAuth2Provider {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string): Promise<StravaTokens>;
    refreshAccessToken(refreshToken: string): Promise<StravaTokens>;
}
export interface StravaTokens {
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresAt: Date;
}
