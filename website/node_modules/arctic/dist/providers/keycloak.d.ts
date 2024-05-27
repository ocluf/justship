import type { OAuth2ProviderWithPKCE } from "../index.js";
export declare class Keycloak implements OAuth2ProviderWithPKCE {
    private client;
    private realmURL;
    private clientSecret;
    constructor(realmURL: string, clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string, codeVerifier: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string, codeVerifier: string): Promise<KeycloakTokens>;
    refreshAccessToken(refreshToken: string): Promise<KeycloakTokens>;
}
export interface KeycloakTokens {
    accessToken: string;
    accessTokenExpiresAt: Date;
    refreshToken: string | null;
    refreshTokenExpiresAt: Date | null;
    idToken: string;
}
