import type { OAuth2Provider } from "../index.js";
export declare class Dribbble implements OAuth2Provider {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string): Promise<DribbbleTokens>;
}
export interface DribbbleTokens {
    accessToken: string;
}
