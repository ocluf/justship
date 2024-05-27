import { TimeSpan, createDate, isWithinExpirationDate } from "oslo";
import { CookieController } from "oslo/cookie";
import { generateIdFromEntropySize } from "./crypto.js";
export class Lucia {
    adapter;
    sessionExpiresIn;
    sessionCookieController;
    getSessionAttributes;
    getUserAttributes;
    sessionCookieName;
    constructor(adapter, options) {
        this.adapter = adapter;
        // we have to use `any` here since TS can't do conditional return types
        this.getUserAttributes = (databaseUserAttributes) => {
            if (options && options.getUserAttributes) {
                return options.getUserAttributes(databaseUserAttributes);
            }
            return {};
        };
        this.getSessionAttributes = (databaseSessionAttributes) => {
            if (options && options.getSessionAttributes) {
                return options.getSessionAttributes(databaseSessionAttributes);
            }
            return {};
        };
        this.sessionExpiresIn = options?.sessionExpiresIn ?? new TimeSpan(30, "d");
        this.sessionCookieName = options?.sessionCookie?.name ?? "auth_session";
        let sessionCookieExpiresIn = this.sessionExpiresIn;
        if (options?.sessionCookie?.expires === false) {
            sessionCookieExpiresIn = new TimeSpan(365 * 2, "d");
        }
        const baseSessionCookieAttributes = {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            path: "/",
            ...options?.sessionCookie?.attributes
        };
        this.sessionCookieController = new CookieController(this.sessionCookieName, baseSessionCookieAttributes, {
            expiresIn: sessionCookieExpiresIn
        });
    }
    async getUserSessions(userId) {
        const databaseSessions = await this.adapter.getUserSessions(userId);
        const sessions = [];
        for (const databaseSession of databaseSessions) {
            if (!isWithinExpirationDate(databaseSession.expiresAt)) {
                continue;
            }
            sessions.push({
                id: databaseSession.id,
                expiresAt: databaseSession.expiresAt,
                userId: databaseSession.userId,
                fresh: false,
                ...this.getSessionAttributes(databaseSession.attributes)
            });
        }
        return sessions;
    }
    async validateSession(sessionId) {
        const [databaseSession, databaseUser] = await this.adapter.getSessionAndUser(sessionId);
        if (!databaseSession) {
            return { session: null, user: null };
        }
        if (!databaseUser) {
            await this.adapter.deleteSession(databaseSession.id);
            return { session: null, user: null };
        }
        if (!isWithinExpirationDate(databaseSession.expiresAt)) {
            await this.adapter.deleteSession(databaseSession.id);
            return { session: null, user: null };
        }
        const activePeriodExpirationDate = new Date(databaseSession.expiresAt.getTime() - this.sessionExpiresIn.milliseconds() / 2);
        const session = {
            ...this.getSessionAttributes(databaseSession.attributes),
            id: databaseSession.id,
            userId: databaseSession.userId,
            fresh: false,
            expiresAt: databaseSession.expiresAt
        };
        if (!isWithinExpirationDate(activePeriodExpirationDate)) {
            session.fresh = true;
            session.expiresAt = createDate(this.sessionExpiresIn);
            await this.adapter.updateSessionExpiration(databaseSession.id, session.expiresAt);
        }
        const user = {
            ...this.getUserAttributes(databaseUser.attributes),
            id: databaseUser.id
        };
        return { user, session };
    }
    async createSession(userId, attributes, options) {
        const sessionId = options?.sessionId ?? generateIdFromEntropySize(25);
        const sessionExpiresAt = createDate(this.sessionExpiresIn);
        await this.adapter.setSession({
            id: sessionId,
            userId,
            expiresAt: sessionExpiresAt,
            attributes
        });
        const session = {
            id: sessionId,
            userId,
            fresh: true,
            expiresAt: sessionExpiresAt,
            ...this.getSessionAttributes(attributes)
        };
        return session;
    }
    async invalidateSession(sessionId) {
        await this.adapter.deleteSession(sessionId);
    }
    async invalidateUserSessions(userId) {
        await this.adapter.deleteUserSessions(userId);
    }
    async deleteExpiredSessions() {
        await this.adapter.deleteExpiredSessions();
    }
    readSessionCookie(cookieHeader) {
        const sessionId = this.sessionCookieController.parse(cookieHeader);
        return sessionId;
    }
    readBearerToken(authorizationHeader) {
        const [authScheme, token] = authorizationHeader.split(" ");
        if (authScheme !== "Bearer") {
            return null;
        }
        return token ?? null;
    }
    createSessionCookie(sessionId) {
        return this.sessionCookieController.createCookie(sessionId);
    }
    createBlankSessionCookie() {
        return this.sessionCookieController.createBlankCookie();
    }
}
