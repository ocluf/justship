import { db } from './database/db';
import { Google } from 'arctic';
import { Lucia } from 'lucia';

import { DrizzleSQLiteAdapter } from '@lucia-auth/adapter-drizzle';
import { dev } from '$app/environment';
import { sessionTable, userTable } from './database/schema';
import { GOOGLE_CLIENT_SECRET, GOOGLE_CLIENT_ID } from '$env/static/private';
import { PUBLIC_ORIGIN } from '$env/static/public';

const adapter = new DrizzleSQLiteAdapter(db, sessionTable, userTable);

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			// set to `true` when using HTTPS
			secure: !dev
		}
	},
	getUserAttributes: (attributes) => {
		return {
			emailVerified: attributes.email_verified,
			email: attributes.email
		};
	}
});

declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: {
			email: string;
			email_verified: boolean;
		};
	}
}

const redirect_url = dev
	? 'http://localhost:5173/login/google/callback'
	: `${PUBLIC_ORIGIN}/login/google/callback`;

export const google = new Google(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, redirect_url);

if (!dev && (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET)) {
	throw new Error('GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET are not set');
}
