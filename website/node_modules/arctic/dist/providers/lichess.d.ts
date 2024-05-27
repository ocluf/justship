import type { OAuth2ProviderWithPKCE } from "../index.js";
export declare class Lichess implements OAuth2ProviderWithPKCE {
    private client;
    constructor(clientId: string, redirectURI: string);
    createAuthorizationURL(state: string, codeVerifier: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string, codeVerifier: string): Promise<LichessTokens>;
}
export interface LichessTokens {
    accessToken: string;
}
