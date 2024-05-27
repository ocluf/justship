import type { OAuth2Provider } from "../index.js";
export declare class Spotify implements OAuth2Provider {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string): Promise<SpotifyTokens>;
    refreshAccessToken(refreshToken: string): Promise<SpotifyTokens>;
}
export interface SpotifyTokens {
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresAt: Date;
}
