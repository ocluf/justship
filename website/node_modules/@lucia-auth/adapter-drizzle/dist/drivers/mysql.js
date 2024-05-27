import { eq, lte } from "drizzle-orm";
export class DrizzleMySQLAdapter {
    db;
    sessionTable;
    userTable;
    constructor(db, sessionTable, userTable) {
        this.db = db;
        this.sessionTable = sessionTable;
        this.userTable = userTable;
    }
    async deleteSession(sessionId) {
        await this.db.delete(this.sessionTable).where(eq(this.sessionTable.id, sessionId));
    }
    async deleteUserSessions(userId) {
        await this.db.delete(this.sessionTable).where(eq(this.sessionTable.userId, userId));
    }
    async getSessionAndUser(sessionId) {
        const result = await this.db
            .select({
            user: this.userTable,
            session: this.sessionTable
        })
            .from(this.sessionTable)
            .innerJoin(this.userTable, eq(this.sessionTable.userId, this.userTable.id))
            .where(eq(this.sessionTable.id, sessionId));
        if (result.length !== 1)
            return [null, null];
        return [
            transformIntoDatabaseSession(result[0].session),
            transformIntoDatabaseUser(result[0].user)
        ];
    }
    async getUserSessions(userId) {
        const result = await this.db
            .select()
            .from(this.sessionTable)
            .where(eq(this.sessionTable.userId, userId));
        return result.map((val) => {
            return transformIntoDatabaseSession(val);
        });
    }
    async setSession(session) {
        await this.db.insert(this.sessionTable).values({
            id: session.id,
            userId: session.userId,
            expiresAt: session.expiresAt,
            ...session.attributes
        });
    }
    async updateSessionExpiration(sessionId, expiresAt) {
        await this.db
            .update(this.sessionTable)
            .set({
            expiresAt
        })
            .where(eq(this.sessionTable.id, sessionId));
    }
    async deleteExpiredSessions() {
        await this.db.delete(this.sessionTable).where(lte(this.sessionTable.expiresAt, new Date()));
    }
}
function transformIntoDatabaseSession(raw) {
    const { id, userId, expiresAt, ...attributes } = raw;
    return {
        userId,
        id,
        expiresAt,
        attributes
    };
}
function transformIntoDatabaseUser(raw) {
    const { id, ...attributes } = raw;
    return {
        id,
        attributes
    };
}
