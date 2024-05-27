import type { OAuth2ProviderWithPKCE } from "../index.js";
export declare class Zoom implements OAuth2ProviderWithPKCE {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string, codeVerifier: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string, codeVerifier: string): Promise<ZoomTokens>;
    refreshAccessToken(refreshToken: string): Promise<ZoomTokens>;
}
export interface ZoomTokens {
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresAt: Date;
}
