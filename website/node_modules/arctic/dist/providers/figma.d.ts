import type { OAuth2Provider } from "../index.js";
export declare class Figma implements OAuth2Provider {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string): Promise<FigmaTokens>;
    refreshAccessToken(refreshToken: string): Promise<FigmaRefreshedTokens>;
}
export interface FigmaTokens {
    userId: string;
    accessToken: string;
    refreshToken: string | null;
    accessTokenExpiresAt: Date;
}
export interface FigmaRefreshedTokens {
    accessToken: string;
    accessTokenExpiresAt: Date;
}
