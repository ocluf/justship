import type { TimeSpan } from "../index.js";
export interface CookieAttributes {
    secure?: boolean;
    path?: string;
    domain?: string;
    sameSite?: "lax" | "strict" | "none";
    httpOnly?: boolean;
    maxAge?: number;
    expires?: Date;
}
export declare function serializeCookie(name: string, value: string, attributes: CookieAttributes): string;
export declare function parseCookies(header: string): Map<string, string>;
export declare class CookieController {
    constructor(cookieName: string, baseCookieAttributes: CookieAttributes, cookieOptions?: {
        expiresIn?: TimeSpan;
    });
    cookieName: string;
    private cookieExpiresIn;
    private baseCookieAttributes;
    createCookie(value: string): Cookie;
    createBlankCookie(): Cookie;
    parse(header: string): string | null;
}
export declare class Cookie {
    constructor(name: string, value: string, attributes: CookieAttributes);
    name: string;
    value: string;
    attributes: CookieAttributes;
    serialize(): string;
}
