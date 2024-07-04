import { drizzle } from 'drizzle-orm/libsql';
import { dev } from '$app/environment';
import { createClient } from '@libsql/client';
import { env } from '$env/dynamic/private';
import * as schema from '$lib/server/database/schema'

const url = dev ? 'file:local.db' : env.TURSO_DB_URL;

if (!url) {
	throw new Error('TURSO_DB_URL is not set');
}
if (!dev && !env.TURSO_DB_AUTH_TOKEN) {
	throw new Error('TURSO_DB_AUTH_TOKEN is not set');
}

const libsql = createClient({ url, authToken: env.TURSO_DB_AUTH_TOKEN });
export const db = drizzle(libsql, { schema });
