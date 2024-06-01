import { createClient } from "@libsql/client";
import * as dotenv from "dotenv";
import { drizzle } from "drizzle-orm/libsql";
import { migrate } from "drizzle-orm/libsql/migrator";

// Load environment variables from .env file
dotenv.config();

// Get the command-line arguments
const args = process.argv.slice(2);
const isProd = args.includes("--prod");

// Determine the database URL based on the argument
const dbUrl = isProd ? process.env.TURSO_DB_URL : "file:local.db";

if (!dbUrl) {
  throw new Error("Database URL not provided");
}

// Create the database client
const dbClient = createClient({
  url: dbUrl,
  authToken: process.env.TURSO_DB_AUTH_TOKEN as string,
});

// Create the drizzle client
const drizzleClient = drizzle(dbClient);

// Run the migration
migrate(drizzleClient, {
  migrationsFolder: "./drizzle",
})
  .then(() => {
    console.log("Migrations completed");
    process.exit(0);
  })
  .catch((err) => {
    throw err;
  });
