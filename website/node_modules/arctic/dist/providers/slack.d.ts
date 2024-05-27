import type { OAuth2Provider } from "../index.js";
export declare class Slack implements OAuth2Provider {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string): Promise<SlackTokens>;
}
export interface SlackTokens {
    accessToken: string;
    idToken: string;
}
