import type { Adapter, DatabaseSession, DatabaseUser, UserId } from "lucia";
import type { PgColumn, PgDatabase, PgTableWithColumns } from "drizzle-orm/pg-core";
export declare class DrizzlePostgreSQLAdapter implements Adapter {
    private db;
    private sessionTable;
    private userTable;
    constructor(db: PgDatabase<any, any, any>, sessionTable: PostgreSQLSessionTable, userTable: PostgreSQLUserTable);
    deleteSession(sessionId: string): Promise<void>;
    deleteUserSessions(userId: UserId): Promise<void>;
    getSessionAndUser(sessionId: string): Promise<[session: DatabaseSession | null, user: DatabaseUser | null]>;
    getUserSessions(userId: UserId): Promise<DatabaseSession[]>;
    setSession(session: DatabaseSession): Promise<void>;
    updateSessionExpiration(sessionId: string, expiresAt: Date): Promise<void>;
    deleteExpiredSessions(): Promise<void>;
}
export type PostgreSQLUserTable = PgTableWithColumns<{
    dialect: "pg";
    columns: {
        id: PgColumn<{
            name: any;
            tableName: any;
            dataType: any;
            columnType: any;
            data: UserId;
            driverParam: any;
            notNull: true;
            hasDefault: boolean;
            enumValues: any;
            baseColumn: any;
        }, object>;
    };
    schema: any;
    name: any;
}>;
export type PostgreSQLSessionTable = PgTableWithColumns<{
    dialect: "pg";
    columns: {
        id: PgColumn<{
            dataType: any;
            notNull: true;
            enumValues: any;
            tableName: any;
            columnType: any;
            data: string;
            driverParam: any;
            hasDefault: false;
            name: any;
        }, object>;
        expiresAt: PgColumn<{
            dataType: any;
            notNull: true;
            enumValues: any;
            tableName: any;
            columnType: any;
            data: Date;
            driverParam: any;
            hasDefault: false;
            name: any;
        }, object>;
        userId: PgColumn<{
            dataType: any;
            notNull: true;
            enumValues: any;
            tableName: any;
            columnType: any;
            data: UserId;
            driverParam: any;
            hasDefault: false;
            name: any;
        }, object>;
    };
    schema: any;
    name: any;
}>;
