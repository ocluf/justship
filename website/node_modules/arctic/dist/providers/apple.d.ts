import type { OAuth2Provider } from "../index.js";
export declare class Apple implements OAuth2Provider {
    private client;
    private credentials;
    constructor(credentials: AppleCredentials, redirectURI: string);
    createAuthorizationURL(state: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string): Promise<AppleTokens>;
    refreshAccessToken(refreshToken: string): Promise<AppleRefreshedTokens>;
    private createClientSecret;
}
export interface AppleTokens {
    accessToken: string;
    refreshToken: string | null;
    accessTokenExpiresAt: Date;
    idToken: string;
}
export interface AppleRefreshedTokens {
    accessToken: string;
    accessTokenExpiresAt: Date;
    idToken: string;
}
export interface AppleCredentials {
    clientId: string;
    teamId: string;
    keyId: string;
    certificate: string;
}
