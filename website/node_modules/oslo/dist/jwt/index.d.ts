import type { TimeSpan, TypedArray } from "../index.js";
export type JWTAlgorithm = "HS256" | "HS384" | "HS512" | "RS256" | "RS384" | "RS512" | "ES256" | "ES384" | "ES512" | "PS256" | "PS384" | "PS512";
export declare function createJWT(algorithm: JWTAlgorithm, key: ArrayBuffer | TypedArray, payloadClaims: Record<any, any>, options?: {
    headers?: Record<any, any>;
    expiresIn?: TimeSpan;
    issuer?: string;
    subject?: string;
    audiences?: string[];
    notBefore?: Date;
    includeIssuedTimestamp?: boolean;
    jwtId?: string;
}): Promise<string>;
export declare function validateJWT(algorithm: JWTAlgorithm, key: ArrayBuffer | TypedArray, jwt: string): Promise<JWT>;
export declare function parseJWT(jwt: string): JWT | null;
interface JWTProperties {
    algorithm: JWTAlgorithm;
    expiresAt: Date | null;
    issuer: string | null;
    subject: string | null;
    audiences: string[] | null;
    notBefore: Date | null;
    issuedAt: Date | null;
    jwtId: string | null;
}
export interface JWT extends JWTProperties {
    value: string;
    header: object;
    payload: object;
    parts: [header: string, payload: string, signature: string];
}
export {};
