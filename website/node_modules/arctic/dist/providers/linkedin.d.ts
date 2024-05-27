import type { OAuth2Provider } from "../index.js";
export declare class LinkedIn implements OAuth2Provider {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string): Promise<LinkedInTokens>;
    refreshAccessToken(accessToken: string): Promise<LinkedInRefreshedTokens>;
}
export interface LinkedInTokens {
    idToken: string;
    accessToken: string;
    accessTokenExpiresAt: Date;
    refreshToken: string | null;
    refreshTokenExpiresAt: Date | null;
}
export interface LinkedInRefreshedTokens {
    accessToken: string;
    accessTokenExpiresAt: Date;
    refreshToken: string;
    refreshTokenExpiresAt: Date;
}
