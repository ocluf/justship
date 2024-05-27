import type { OAuth2Provider } from "../index.js";
export declare class Tiltify implements OAuth2Provider {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string): Promise<TiltifyTokens>;
    refreshAccessToken(refreshToken: string): Promise<TiltifyTokens>;
}
export interface TiltifyTokens {
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresAt: Date;
}
