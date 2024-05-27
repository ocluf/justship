import type { OAuth2ProviderWithPKCE } from "../index.js";
export declare class MicrosoftEntraId implements OAuth2ProviderWithPKCE {
    private client;
    private clientSecret;
    constructor(tenant: string, clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string, codeVerifier: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string, codeVerifier: string): Promise<MicrosoftEntraIdTokens>;
    refreshAccessToken(refreshToken: string): Promise<MicrosoftEntraIdTokens>;
}
export interface MicrosoftEntraIdTokens {
    idToken: string;
    accessToken: string;
    accessTokenExpiresAt: Date;
    refreshToken: string | null;
}
