import type { OAuth2ProviderWithPKCE } from "../index.js";
export declare class Authentik implements OAuth2ProviderWithPKCE {
    private client;
    private clientSecret;
    constructor(realmURL: string, clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string, codeVerifier: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string, codeVerifier: string): Promise<AuthentikTokens>;
    refreshAccessToken(refreshToken: string): Promise<AuthentikTokens>;
}
export interface AuthentikTokens {
    accessToken: string;
    accessTokenExpiresAt: Date;
    refreshToken: string | null;
    idToken: string;
}
