export function serializeCookie(name, value, attributes) {
    const keyValueEntries = [];
    keyValueEntries.push([encodeURIComponent(name), encodeURIComponent(value)]);
    if (attributes?.domain !== undefined) {
        keyValueEntries.push(["Domain", attributes.domain]);
    }
    if (attributes?.expires !== undefined) {
        keyValueEntries.push(["Expires", attributes.expires.toUTCString()]);
    }
    if (attributes?.httpOnly) {
        keyValueEntries.push(["HttpOnly"]);
    }
    if (attributes?.maxAge !== undefined) {
        keyValueEntries.push(["Max-Age", attributes.maxAge.toString()]);
    }
    if (attributes?.path !== undefined) {
        keyValueEntries.push(["Path", attributes.path]);
    }
    if (attributes?.sameSite === "lax") {
        keyValueEntries.push(["SameSite", "Lax"]);
    }
    if (attributes?.sameSite === "none") {
        keyValueEntries.push(["SameSite", "None"]);
    }
    if (attributes?.sameSite === "strict") {
        keyValueEntries.push(["SameSite", "Strict"]);
    }
    if (attributes?.secure) {
        keyValueEntries.push(["Secure"]);
    }
    return keyValueEntries.map((pair) => pair.join("=")).join("; ");
}
export function parseCookies(header) {
    const cookies = new Map();
    const items = header.split("; ");
    for (const item of items) {
        const pair = item.split("=");
        const rawKey = pair[0];
        const rawValue = pair[1] ?? "";
        if (!rawKey)
            continue;
        cookies.set(decodeURIComponent(rawKey), decodeURIComponent(rawValue));
    }
    return cookies;
}
export class CookieController {
    constructor(cookieName, baseCookieAttributes, cookieOptions) {
        this.cookieName = cookieName;
        this.cookieExpiresIn = cookieOptions?.expiresIn ?? null;
        this.baseCookieAttributes = baseCookieAttributes;
    }
    cookieName;
    cookieExpiresIn;
    baseCookieAttributes;
    createCookie(value) {
        return new Cookie(this.cookieName, value, {
            ...this.baseCookieAttributes,
            maxAge: this.cookieExpiresIn?.seconds()
        });
    }
    createBlankCookie() {
        return new Cookie(this.cookieName, "", {
            ...this.baseCookieAttributes,
            maxAge: 0
        });
    }
    parse(header) {
        const cookies = parseCookies(header);
        return cookies.get(this.cookieName) ?? null;
    }
}
export class Cookie {
    constructor(name, value, attributes) {
        this.name = name;
        this.value = value;
        this.attributes = attributes;
    }
    name;
    value;
    attributes;
    serialize() {
        return serializeCookie(this.name, this.value, this.attributes);
    }
}
