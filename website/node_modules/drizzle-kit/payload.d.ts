import { PgDatabase } from 'drizzle-orm/pg-core';
import * as zod from 'zod';
import { TypeOf } from 'zod';
import { MySql2Database } from 'drizzle-orm/mysql2';
import { BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';

declare const pgSchema: zod.ZodObject<zod.objectUtil.extendShape<{
    version: zod.ZodLiteral<"6">;
    dialect: zod.ZodLiteral<"postgresql">;
    tables: zod.ZodRecord<zod.ZodString, zod.ZodObject<{
        name: zod.ZodString;
        schema: zod.ZodString;
        columns: zod.ZodRecord<zod.ZodString, zod.ZodObject<{
            name: zod.ZodString;
            type: zod.ZodString;
            typeSchema: zod.ZodOptional<zod.ZodString>;
            primaryKey: zod.ZodBoolean;
            notNull: zod.ZodBoolean;
            default: zod.ZodOptional<zod.ZodAny>;
            isUnique: zod.ZodOptional<zod.ZodAny>;
            uniqueName: zod.ZodOptional<zod.ZodString>;
            nullsNotDistinct: zod.ZodOptional<zod.ZodBoolean>;
        }, "strict", zod.ZodTypeAny, {
            type: string;
            name: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
        }, {
            type: string;
            name: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
        }>>;
        indexes: zod.ZodRecord<zod.ZodString, zod.ZodObject<{
            name: zod.ZodString;
            columns: zod.ZodArray<zod.ZodString, "many">;
            isUnique: zod.ZodBoolean;
        }, "strict", zod.ZodTypeAny, {
            name: string;
            columns: string[];
            isUnique: boolean;
        }, {
            name: string;
            columns: string[];
            isUnique: boolean;
        }>>;
        foreignKeys: zod.ZodRecord<zod.ZodString, zod.ZodObject<{
            name: zod.ZodString;
            tableFrom: zod.ZodString;
            columnsFrom: zod.ZodArray<zod.ZodString, "many">;
            tableTo: zod.ZodString;
            schemaTo: zod.ZodOptional<zod.ZodString>;
            columnsTo: zod.ZodArray<zod.ZodString, "many">;
            onUpdate: zod.ZodOptional<zod.ZodString>;
            onDelete: zod.ZodOptional<zod.ZodString>;
        }, "strict", zod.ZodTypeAny, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
            schemaTo?: string | undefined;
        }, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
            schemaTo?: string | undefined;
        }>>;
        compositePrimaryKeys: zod.ZodRecord<zod.ZodString, zod.ZodObject<{
            name: zod.ZodString;
            columns: zod.ZodArray<zod.ZodString, "many">;
        }, "strict", zod.ZodTypeAny, {
            name: string;
            columns: string[];
        }, {
            name: string;
            columns: string[];
        }>>;
        uniqueConstraints: zod.ZodDefault<zod.ZodRecord<zod.ZodString, zod.ZodObject<{
            name: zod.ZodString;
            columns: zod.ZodArray<zod.ZodString, "many">;
            nullsNotDistinct: zod.ZodBoolean;
        }, "strict", zod.ZodTypeAny, {
            name: string;
            columns: string[];
            nullsNotDistinct: boolean;
        }, {
            name: string;
            columns: string[];
            nullsNotDistinct: boolean;
        }>>>;
    }, "strict", zod.ZodTypeAny, {
        name: string;
        columns: Record<string, {
            type: string;
            name: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
        }>;
        indexes: Record<string, {
            name: string;
            columns: string[];
            isUnique: boolean;
        }>;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        schema: string;
        compositePrimaryKeys: Record<string, {
            name: string;
            columns: string[];
        }>;
        uniqueConstraints: Record<string, {
            name: string;
            columns: string[];
            nullsNotDistinct: boolean;
        }>;
    }, {
        name: string;
        columns: Record<string, {
            type: string;
            name: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
        }>;
        indexes: Record<string, {
            name: string;
            columns: string[];
            isUnique: boolean;
        }>;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        schema: string;
        compositePrimaryKeys: Record<string, {
            name: string;
            columns: string[];
        }>;
        uniqueConstraints?: Record<string, {
            name: string;
            columns: string[];
            nullsNotDistinct: boolean;
        }> | undefined;
    }>>;
    enums: zod.ZodRecord<zod.ZodString, zod.ZodObject<{
        name: zod.ZodString;
        schema: zod.ZodString;
        values: zod.ZodArray<zod.ZodString, "many">;
    }, "strict", zod.ZodTypeAny, {
        values: string[];
        name: string;
        schema: string;
    }, {
        values: string[];
        name: string;
        schema: string;
    }>>;
    schemas: zod.ZodRecord<zod.ZodString, zod.ZodString>;
    _meta: zod.ZodObject<{
        schemas: zod.ZodRecord<zod.ZodString, zod.ZodString>;
        tables: zod.ZodRecord<zod.ZodString, zod.ZodString>;
        columns: zod.ZodRecord<zod.ZodString, zod.ZodString>;
    }, "strip", zod.ZodTypeAny, {
        columns: Record<string, string>;
        tables: Record<string, string>;
        schemas: Record<string, string>;
    }, {
        columns: Record<string, string>;
        tables: Record<string, string>;
        schemas: Record<string, string>;
    }>;
    internal: zod.ZodOptional<zod.ZodObject<{
        tables: zod.ZodRecord<zod.ZodString, zod.ZodOptional<zod.ZodObject<{
            columns: zod.ZodRecord<zod.ZodString, zod.ZodOptional<zod.ZodObject<{
                isArray: zod.ZodOptional<zod.ZodBoolean>;
                dimensions: zod.ZodOptional<zod.ZodNumber>;
                rawType: zod.ZodOptional<zod.ZodString>;
            }, "strip", zod.ZodTypeAny, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
            }, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
            }>>>;
        }, "strip", zod.ZodTypeAny, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
            } | undefined>;
        }, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
            } | undefined>;
        }>>>;
    }, "strip", zod.ZodTypeAny, {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
            } | undefined>;
        } | undefined>;
    }, {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
            } | undefined>;
        } | undefined>;
    }>>;
}, {
    id: zod.ZodString;
    prevId: zod.ZodString;
}>, "strip", zod.ZodTypeAny, {
    tables: Record<string, {
        name: string;
        columns: Record<string, {
            type: string;
            name: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
        }>;
        indexes: Record<string, {
            name: string;
            columns: string[];
            isUnique: boolean;
        }>;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        schema: string;
        compositePrimaryKeys: Record<string, {
            name: string;
            columns: string[];
        }>;
        uniqueConstraints: Record<string, {
            name: string;
            columns: string[];
            nullsNotDistinct: boolean;
        }>;
    }>;
    id: string;
    prevId: string;
    version: "6";
    dialect: "postgresql";
    schemas: Record<string, string>;
    _meta: {
        columns: Record<string, string>;
        tables: Record<string, string>;
        schemas: Record<string, string>;
    };
    enums: Record<string, {
        values: string[];
        name: string;
        schema: string;
    }>;
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
}, {
    tables: Record<string, {
        name: string;
        columns: Record<string, {
            type: string;
            name: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
        }>;
        indexes: Record<string, {
            name: string;
            columns: string[];
            isUnique: boolean;
        }>;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        schema: string;
        compositePrimaryKeys: Record<string, {
            name: string;
            columns: string[];
        }>;
        uniqueConstraints?: Record<string, {
            name: string;
            columns: string[];
            nullsNotDistinct: boolean;
        }> | undefined;
    }>;
    id: string;
    prevId: string;
    version: "6";
    dialect: "postgresql";
    schemas: Record<string, string>;
    _meta: {
        columns: Record<string, string>;
        tables: Record<string, string>;
        schemas: Record<string, string>;
    };
    enums: Record<string, {
        values: string[];
        name: string;
        schema: string;
    }>;
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
}>;
type PgSchema = TypeOf<typeof pgSchema>;

declare const schema$1: zod.ZodObject<zod.objectUtil.extendShape<{
    version: zod.ZodLiteral<"6">;
    dialect: zod.ZodEnum<["sqlite"]>;
    tables: zod.ZodRecord<zod.ZodString, zod.ZodObject<{
        name: zod.ZodString;
        columns: zod.ZodRecord<zod.ZodString, zod.ZodObject<{
            name: zod.ZodString;
            type: zod.ZodString;
            primaryKey: zod.ZodBoolean;
            notNull: zod.ZodBoolean;
            autoincrement: zod.ZodOptional<zod.ZodBoolean>;
            default: zod.ZodOptional<zod.ZodAny>;
        }, "strict", zod.ZodTypeAny, {
            type: string;
            name: string;
            primaryKey: boolean;
            notNull: boolean;
            default?: any;
            autoincrement?: boolean | undefined;
        }, {
            type: string;
            name: string;
            primaryKey: boolean;
            notNull: boolean;
            default?: any;
            autoincrement?: boolean | undefined;
        }>>;
        indexes: zod.ZodRecord<zod.ZodString, zod.ZodObject<{
            name: zod.ZodString;
            columns: zod.ZodArray<zod.ZodString, "many">;
            where: zod.ZodOptional<zod.ZodString>;
            isUnique: zod.ZodBoolean;
        }, "strict", zod.ZodTypeAny, {
            name: string;
            columns: string[];
            isUnique: boolean;
            where?: string | undefined;
        }, {
            name: string;
            columns: string[];
            isUnique: boolean;
            where?: string | undefined;
        }>>;
        foreignKeys: zod.ZodRecord<zod.ZodString, zod.ZodObject<{
            name: zod.ZodString;
            tableFrom: zod.ZodString;
            columnsFrom: zod.ZodArray<zod.ZodString, "many">;
            tableTo: zod.ZodString;
            columnsTo: zod.ZodArray<zod.ZodString, "many">;
            onUpdate: zod.ZodOptional<zod.ZodString>;
            onDelete: zod.ZodOptional<zod.ZodString>;
        }, "strict", zod.ZodTypeAny, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
        }, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
        }>>;
        compositePrimaryKeys: zod.ZodRecord<zod.ZodString, zod.ZodObject<{
            columns: zod.ZodArray<zod.ZodString, "many">;
            name: zod.ZodOptional<zod.ZodString>;
        }, "strict", zod.ZodTypeAny, {
            columns: string[];
            name?: string | undefined;
        }, {
            columns: string[];
            name?: string | undefined;
        }>>;
        uniqueConstraints: zod.ZodDefault<zod.ZodRecord<zod.ZodString, zod.ZodObject<{
            name: zod.ZodString;
            columns: zod.ZodArray<zod.ZodString, "many">;
        }, "strict", zod.ZodTypeAny, {
            name: string;
            columns: string[];
        }, {
            name: string;
            columns: string[];
        }>>>;
    }, "strict", zod.ZodTypeAny, {
        name: string;
        columns: Record<string, {
            type: string;
            name: string;
            primaryKey: boolean;
            notNull: boolean;
            default?: any;
            autoincrement?: boolean | undefined;
        }>;
        indexes: Record<string, {
            name: string;
            columns: string[];
            isUnique: boolean;
            where?: string | undefined;
        }>;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name?: string | undefined;
        }>;
        uniqueConstraints: Record<string, {
            name: string;
            columns: string[];
        }>;
    }, {
        name: string;
        columns: Record<string, {
            type: string;
            name: string;
            primaryKey: boolean;
            notNull: boolean;
            default?: any;
            autoincrement?: boolean | undefined;
        }>;
        indexes: Record<string, {
            name: string;
            columns: string[];
            isUnique: boolean;
            where?: string | undefined;
        }>;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name?: string | undefined;
        }>;
        uniqueConstraints?: Record<string, {
            name: string;
            columns: string[];
        }> | undefined;
    }>>;
    enums: zod.ZodObject<{}, "strip", zod.ZodTypeAny, {}, {}>;
    _meta: zod.ZodObject<{
        tables: zod.ZodRecord<zod.ZodString, zod.ZodString>;
        columns: zod.ZodRecord<zod.ZodString, zod.ZodString>;
    }, "strip", zod.ZodTypeAny, {
        columns: Record<string, string>;
        tables: Record<string, string>;
    }, {
        columns: Record<string, string>;
        tables: Record<string, string>;
    }>;
}, {
    id: zod.ZodString;
    prevId: zod.ZodString;
}>, "strict", zod.ZodTypeAny, {
    tables: Record<string, {
        name: string;
        columns: Record<string, {
            type: string;
            name: string;
            primaryKey: boolean;
            notNull: boolean;
            default?: any;
            autoincrement?: boolean | undefined;
        }>;
        indexes: Record<string, {
            name: string;
            columns: string[];
            isUnique: boolean;
            where?: string | undefined;
        }>;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name?: string | undefined;
        }>;
        uniqueConstraints: Record<string, {
            name: string;
            columns: string[];
        }>;
    }>;
    id: string;
    prevId: string;
    version: "6";
    dialect: "sqlite";
    _meta: {
        columns: Record<string, string>;
        tables: Record<string, string>;
    };
    enums: {};
}, {
    tables: Record<string, {
        name: string;
        columns: Record<string, {
            type: string;
            name: string;
            primaryKey: boolean;
            notNull: boolean;
            default?: any;
            autoincrement?: boolean | undefined;
        }>;
        indexes: Record<string, {
            name: string;
            columns: string[];
            isUnique: boolean;
            where?: string | undefined;
        }>;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name?: string | undefined;
        }>;
        uniqueConstraints?: Record<string, {
            name: string;
            columns: string[];
        }> | undefined;
    }>;
    id: string;
    prevId: string;
    version: "6";
    dialect: "sqlite";
    _meta: {
        columns: Record<string, string>;
        tables: Record<string, string>;
    };
    enums: {};
}>;
type SQLiteSchema = TypeOf<typeof schema$1>;

declare const schema: zod.ZodObject<zod.objectUtil.extendShape<{
    version: zod.ZodLiteral<"5">;
    dialect: zod.ZodLiteral<"mysql">;
    tables: zod.ZodRecord<zod.ZodString, zod.ZodObject<{
        name: zod.ZodString;
        columns: zod.ZodRecord<zod.ZodString, zod.ZodObject<{
            name: zod.ZodString;
            type: zod.ZodString;
            primaryKey: zod.ZodBoolean;
            notNull: zod.ZodBoolean;
            autoincrement: zod.ZodOptional<zod.ZodBoolean>;
            default: zod.ZodOptional<zod.ZodAny>;
            onUpdate: zod.ZodOptional<zod.ZodAny>;
        }, "strict", zod.ZodTypeAny, {
            type: string;
            name: string;
            primaryKey: boolean;
            notNull: boolean;
            default?: any;
            onUpdate?: any;
            autoincrement?: boolean | undefined;
        }, {
            type: string;
            name: string;
            primaryKey: boolean;
            notNull: boolean;
            default?: any;
            onUpdate?: any;
            autoincrement?: boolean | undefined;
        }>>;
        indexes: zod.ZodRecord<zod.ZodString, zod.ZodObject<{
            name: zod.ZodString;
            columns: zod.ZodArray<zod.ZodString, "many">;
            isUnique: zod.ZodBoolean;
            using: zod.ZodOptional<zod.ZodEnum<["btree", "hash"]>>;
            algorithm: zod.ZodOptional<zod.ZodEnum<["default", "inplace", "copy"]>>;
            lock: zod.ZodOptional<zod.ZodEnum<["default", "none", "shared", "exclusive"]>>;
        }, "strict", zod.ZodTypeAny, {
            name: string;
            columns: string[];
            isUnique: boolean;
            using?: "btree" | "hash" | undefined;
            algorithm?: "default" | "inplace" | "copy" | undefined;
            lock?: "default" | "none" | "shared" | "exclusive" | undefined;
        }, {
            name: string;
            columns: string[];
            isUnique: boolean;
            using?: "btree" | "hash" | undefined;
            algorithm?: "default" | "inplace" | "copy" | undefined;
            lock?: "default" | "none" | "shared" | "exclusive" | undefined;
        }>>;
        foreignKeys: zod.ZodRecord<zod.ZodString, zod.ZodObject<{
            name: zod.ZodString;
            tableFrom: zod.ZodString;
            columnsFrom: zod.ZodArray<zod.ZodString, "many">;
            tableTo: zod.ZodString;
            columnsTo: zod.ZodArray<zod.ZodString, "many">;
            onUpdate: zod.ZodOptional<zod.ZodString>;
            onDelete: zod.ZodOptional<zod.ZodString>;
        }, "strict", zod.ZodTypeAny, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
        }, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
        }>>;
        compositePrimaryKeys: zod.ZodRecord<zod.ZodString, zod.ZodObject<{
            name: zod.ZodString;
            columns: zod.ZodArray<zod.ZodString, "many">;
        }, "strict", zod.ZodTypeAny, {
            name: string;
            columns: string[];
        }, {
            name: string;
            columns: string[];
        }>>;
        uniqueConstraints: zod.ZodDefault<zod.ZodRecord<zod.ZodString, zod.ZodObject<{
            name: zod.ZodString;
            columns: zod.ZodArray<zod.ZodString, "many">;
        }, "strict", zod.ZodTypeAny, {
            name: string;
            columns: string[];
        }, {
            name: string;
            columns: string[];
        }>>>;
    }, "strict", zod.ZodTypeAny, {
        name: string;
        columns: Record<string, {
            type: string;
            name: string;
            primaryKey: boolean;
            notNull: boolean;
            default?: any;
            onUpdate?: any;
            autoincrement?: boolean | undefined;
        }>;
        indexes: Record<string, {
            name: string;
            columns: string[];
            isUnique: boolean;
            using?: "btree" | "hash" | undefined;
            algorithm?: "default" | "inplace" | "copy" | undefined;
            lock?: "default" | "none" | "shared" | "exclusive" | undefined;
        }>;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            name: string;
            columns: string[];
        }>;
        uniqueConstraints: Record<string, {
            name: string;
            columns: string[];
        }>;
    }, {
        name: string;
        columns: Record<string, {
            type: string;
            name: string;
            primaryKey: boolean;
            notNull: boolean;
            default?: any;
            onUpdate?: any;
            autoincrement?: boolean | undefined;
        }>;
        indexes: Record<string, {
            name: string;
            columns: string[];
            isUnique: boolean;
            using?: "btree" | "hash" | undefined;
            algorithm?: "default" | "inplace" | "copy" | undefined;
            lock?: "default" | "none" | "shared" | "exclusive" | undefined;
        }>;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            name: string;
            columns: string[];
        }>;
        uniqueConstraints?: Record<string, {
            name: string;
            columns: string[];
        }> | undefined;
    }>>;
    _meta: zod.ZodObject<{
        tables: zod.ZodRecord<zod.ZodString, zod.ZodString>;
        columns: zod.ZodRecord<zod.ZodString, zod.ZodString>;
    }, "strip", zod.ZodTypeAny, {
        columns: Record<string, string>;
        tables: Record<string, string>;
    }, {
        columns: Record<string, string>;
        tables: Record<string, string>;
    }>;
    internal: zod.ZodOptional<zod.ZodObject<{
        tables: zod.ZodRecord<zod.ZodString, zod.ZodOptional<zod.ZodObject<{
            columns: zod.ZodRecord<zod.ZodString, zod.ZodOptional<zod.ZodObject<{
                isDefaultAnExpression: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                isDefaultAnExpression?: boolean | undefined;
            }, {
                isDefaultAnExpression?: boolean | undefined;
            }>>>;
        }, "strip", zod.ZodTypeAny, {
            columns: Record<string, {
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        }, {
            columns: Record<string, {
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        }>>>;
    }, "strip", zod.ZodTypeAny, {
        tables: Record<string, {
            columns: Record<string, {
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    }, {
        tables: Record<string, {
            columns: Record<string, {
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    }>>;
}, {
    id: zod.ZodString;
    prevId: zod.ZodString;
}>, "strip", zod.ZodTypeAny, {
    tables: Record<string, {
        name: string;
        columns: Record<string, {
            type: string;
            name: string;
            primaryKey: boolean;
            notNull: boolean;
            default?: any;
            onUpdate?: any;
            autoincrement?: boolean | undefined;
        }>;
        indexes: Record<string, {
            name: string;
            columns: string[];
            isUnique: boolean;
            using?: "btree" | "hash" | undefined;
            algorithm?: "default" | "inplace" | "copy" | undefined;
            lock?: "default" | "none" | "shared" | "exclusive" | undefined;
        }>;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            name: string;
            columns: string[];
        }>;
        uniqueConstraints: Record<string, {
            name: string;
            columns: string[];
        }>;
    }>;
    id: string;
    prevId: string;
    version: "5";
    dialect: "mysql";
    _meta: {
        columns: Record<string, string>;
        tables: Record<string, string>;
    };
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
}, {
    tables: Record<string, {
        name: string;
        columns: Record<string, {
            type: string;
            name: string;
            primaryKey: boolean;
            notNull: boolean;
            default?: any;
            onUpdate?: any;
            autoincrement?: boolean | undefined;
        }>;
        indexes: Record<string, {
            name: string;
            columns: string[];
            isUnique: boolean;
            using?: "btree" | "hash" | undefined;
            algorithm?: "default" | "inplace" | "copy" | undefined;
            lock?: "default" | "none" | "shared" | "exclusive" | undefined;
        }>;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            name: string;
            columns: string[];
        }>;
        uniqueConstraints?: Record<string, {
            name: string;
            columns: string[];
        }> | undefined;
    }>;
    id: string;
    prevId: string;
    version: "5";
    dialect: "mysql";
    _meta: {
        columns: Record<string, string>;
        tables: Record<string, string>;
    };
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
}>;
type MySqlSchema = TypeOf<typeof schema>;

type DrizzleSnapshotJSON = PgSchema;
type DrizzleSQLiteSnapshotJSON = SQLiteSchema;
type DrizzleMySQLSnapshotJSON = MySqlSchema;
declare const generateDrizzleJson: (imports: Record<string, unknown>, prevId?: string) => PgSchema;
declare const generateMigration: (prev: DrizzleSnapshotJSON, cur: DrizzleSnapshotJSON) => Promise<string[]>;
declare const pushSchema: (imports: Record<string, unknown>, drizzleInstance: PgDatabase<any>) => Promise<{
    hasDataLoss: boolean;
    warnings: string[];
    statementsToExecute: string[];
    apply: () => Promise<void>;
}>;
declare const generateSQLiteDrizzleJson: (imports: Record<string, unknown>, prevId?: string) => Promise<SQLiteSchema>;
declare const generateSQLiteMigration: (prev: DrizzleSQLiteSnapshotJSON, cur: DrizzleSQLiteSnapshotJSON) => Promise<string[]>;
declare const pushSQLiteSchema: (imports: Record<string, unknown>, drizzleInstance: BetterSQLite3Database<any>) => Promise<{
    hasDataLoss: boolean;
    warnings: string[];
    statementsToExecute: string[];
    apply: () => Promise<void>;
}>;
declare const generateMySQLDrizzleJson: (imports: Record<string, unknown>, prevId?: string) => Promise<MySqlSchema>;
declare const generateMySQLMigration: (prev: DrizzleMySQLSnapshotJSON, cur: DrizzleMySQLSnapshotJSON) => Promise<string[]>;
declare const pushMySQLSchema: (imports: Record<string, unknown>, drizzleInstance: MySql2Database<any>, databaseName: string) => Promise<{
    hasDataLoss: boolean;
    warnings: string[];
    statementsToExecute: string[];
    apply: () => Promise<void>;
}>;
declare const upPgSnapshot: (snapshot: Record<string, unknown>) => {
    version: "6";
    dialect: "postgresql";
    tables: Record<string, {
        name: string;
        schema: string;
        columns: Record<string, {
            type: string;
            name: string;
            primaryKey: boolean;
            notNull: boolean;
            typeSchema?: string | undefined;
            default?: any;
            isUnique?: any;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
        }>;
        indexes: Record<string, {
            name: string;
            columns: string[];
            isUnique: boolean;
        }>;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            schemaTo?: string | undefined;
            onUpdate?: string | undefined;
            onDelete?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            name: string;
            columns: string[];
        }>;
        uniqueConstraints: Record<string, {
            name: string;
            columns: string[];
            nullsNotDistinct: boolean;
        }>;
    }>;
    enums: Record<string, {
        values: string[];
        name: string;
        schema: string;
    }>;
    schemas: Record<string, string>;
    _meta: {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    };
    id: string;
    prevId: string;
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
};

export { type DrizzleMySQLSnapshotJSON, type DrizzleSQLiteSnapshotJSON, type DrizzleSnapshotJSON, generateDrizzleJson, generateMigration, generateMySQLDrizzleJson, generateMySQLMigration, generateSQLiteDrizzleJson, generateSQLiteMigration, pushMySQLSchema, pushSQLiteSchema, pushSchema, upPgSnapshot };
