import type { OAuth2ProviderWithPKCE } from "../index.js";
export declare class Okta implements OAuth2ProviderWithPKCE {
    private client;
    private clientSecret;
    constructor(oktaDomain: string, clientId: string, clientSecret: string, redirectURI: string, options?: {
        authorizationServerId?: string;
    });
    createAuthorizationURL(state: string, codeVerifier: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string, codeVerifier: string): Promise<OktaTokens>;
    refreshAccessToken(refreshToken: string, options?: {
        scopes?: string[];
    }): Promise<OktaTokens>;
}
export interface OktaTokens {
    idToken: string;
    accessToken: string;
    accessTokenExpiresAt: Date;
    refreshToken: string | null;
    deviceSecret: string | null;
}
