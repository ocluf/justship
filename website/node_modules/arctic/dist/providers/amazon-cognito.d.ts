import type { OAuth2ProviderWithPKCE } from "../index.js";
export declare class AmazonCognito implements OAuth2ProviderWithPKCE {
    private client;
    private clientSecret;
    constructor(userPoolDomain: string, clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string, codeVerifier: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string, codeVerifier: string): Promise<AmazonCognitoTokens>;
    refreshAccessToken(refreshToken: string): Promise<AmazonCognitoRefreshedTokens>;
}
export interface AmazonCognitoTokens {
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresAt: Date;
    idToken: string;
}
export interface AmazonCognitoRefreshedTokens {
    accessToken: string;
    accessTokenExpiresAt: Date;
    idToken: string;
}
