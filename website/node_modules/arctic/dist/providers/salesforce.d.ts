import type { OAuth2ProviderWithPKCE } from "../index.js";
export declare class Salesforce implements OAuth2ProviderWithPKCE {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string, codeVerifier: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string, codeVerifier: string): Promise<SalesforceTokens>;
    refreshAccessToken(refreshToken: string): Promise<SalesforceTokens>;
}
export interface SalesforceTokens {
    accessToken: string;
    idToken: string;
    refreshToken: string | null;
}
