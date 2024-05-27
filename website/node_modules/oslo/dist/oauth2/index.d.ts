export declare class OAuth2Client {
    clientId: string;
    private authorizeEndpoint;
    private tokenEndpoint;
    private redirectURI;
    constructor(clientId: string, authorizeEndpoint: string, tokenEndpoint: string, options?: {
        redirectURI?: string;
    });
    createAuthorizationURL(options?: {
        state?: string;
        codeVerifier?: string;
        codeChallengeMethod?: "S256" | "plain";
        scopes?: string[];
    }): Promise<URL>;
    validateAuthorizationCode<_TokenResponseBody extends TokenResponseBody>(authorizationCode: string, options?: {
        codeVerifier?: string;
        credentials?: string;
        authenticateWith?: "http_basic_auth" | "request_body";
    }): Promise<_TokenResponseBody>;
    refreshAccessToken<_TokenResponseBody extends TokenResponseBody>(refreshToken: string, options?: {
        credentials?: string;
        authenticateWith?: "http_basic_auth" | "request_body";
        scopes?: string[];
    }): Promise<_TokenResponseBody>;
    private sendTokenRequest;
}
export declare function generateCodeVerifier(): string;
export declare function generateState(): string;
export declare class OAuth2RequestError extends Error {
    request: Request;
    description: string | null;
    constructor(request: Request, body: Partial<TokenErrorResponseBody>);
}
interface TokenErrorResponseBody {
    error: string;
    error_description?: string;
}
export interface TokenResponseBody {
    access_token: string;
    token_type?: string;
    expires_in?: number;
    refresh_token?: string;
    scope?: string;
}
export {};
