import type { OAuth2Provider } from "../index.js";
export declare class Kakao implements OAuth2Provider {
    private client;
    private clientSecret;
    constructor(clientId: string, clientSecret: string, redirectURI: string);
    createAuthorizationURL(state: string, options?: {
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode(code: string): Promise<KakaoTokens>;
    refreshAccessToken(refreshToken: string): Promise<KakaoTokens>;
}
export interface KakaoTokens {
    accessToken: string;
    accessTokenExpiresAt: Date;
    refreshToken: string;
    refreshTokenExpiresAt: Date;
}
