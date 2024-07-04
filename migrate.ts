import { createClient } from "@libsql/client";
import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";
import { migrate } from "drizzle-orm/libsql/migrator";
import * as schema from './src/lib/server/db/schema';

try {
	dotenv.config();

	if (!process.env.TURSO_DB_URL) {
		throw new Error("Database URL was not provided");
	}

	const dbClient = createClient({
		url: process.env.TURSO_DB_URL!,
		authToken: process.env.TURSO_DB_AUTH_TOKEN!,
	});

	const drizzleClient = drizzle(client, { schema });

	await migrate(drizzleClient, {
		migrationsFolder: "./drizzle",
	});

  client.close();

	console.log("Migrated successfully");
	process.exit(0);
} catch (e) {
	console.error(`An error has occurred while migrating schema changes: ${e}`);
	process.exit(1);
}
