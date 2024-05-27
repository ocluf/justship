import type { OAuth2Provider } from "../index.js";
export declare class AniList implements OAuth2Provider {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string): Promise<URL>;
    validateAuthorizationCode(code: string): Promise<AniListTokens>;
}
export interface AniListTokens {
    accessToken: string;
}
