import type { OAuth2Provider } from "../index.js";
export declare class Auth0 implements OAuth2Provider {
    private client;
    private appDomain;
    private clientSecret;
    constructor(appDomain: string, clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string): Promise<Auth0Tokens>;
    refreshAccessToken(refreshToken: string): Promise<Auth0Tokens>;
}
export interface Auth0Tokens {
    accessToken: string;
    refreshToken: string;
    idToken: string;
}
