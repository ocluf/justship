import type { Adapter, DatabaseSession, DatabaseUser, UserId } from "lucia";
import type { MySqlColumn, MySqlDatabase, MySqlTableWithColumns } from "drizzle-orm/mysql-core";
export declare class DrizzleMySQLAdapter implements Adapter {
    private db;
    private sessionTable;
    private userTable;
    constructor(db: MySqlDatabase<any, any, any>, sessionTable: MySQLSessionTable, userTable: MySQLUserTable);
    deleteSession(sessionId: string): Promise<void>;
    deleteUserSessions(userId: UserId): Promise<void>;
    getSessionAndUser(sessionId: string): Promise<[session: DatabaseSession | null, user: DatabaseUser | null]>;
    getUserSessions(userId: UserId): Promise<DatabaseSession[]>;
    setSession(session: DatabaseSession): Promise<void>;
    updateSessionExpiration(sessionId: string, expiresAt: Date): Promise<void>;
    deleteExpiredSessions(): Promise<void>;
}
export type MySQLUserTable = MySqlTableWithColumns<{
    dialect: "mysql";
    columns: {
        id: MySqlColumn<{
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
export type MySQLSessionTable = MySqlTableWithColumns<{
    dialect: "mysql";
    columns: {
        id: MySqlColumn<{
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
        expiresAt: MySqlColumn<{
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
        userId: MySqlColumn<{
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
