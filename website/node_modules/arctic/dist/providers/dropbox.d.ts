import type { OAuth2Provider } from "../index.js";
export declare class Dropbox implements OAuth2Provider {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string): Promise<DropboxTokens>;
    refreshAccessToken(refreshToken: string): Promise<DropboxRefreshedTokens>;
}
export interface DropboxTokens {
    accessToken: string;
    accessTokenExpiresAt: Date;
    refreshToken: string | null;
    idToken: string;
}
export interface DropboxRefreshedTokens {
    accessToken: string;
    accessTokenExpiresAt: Date;
}
