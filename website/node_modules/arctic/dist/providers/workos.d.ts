import type { OAuth2Provider } from "../index.js";
export declare class WorkOS implements OAuth2Provider {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string): Promise<URL>;
    validateAuthorizationCode(code: string): Promise<WorkOSTokens>;
}
export interface WorkOSTokens {
    accessToken: string;
}
