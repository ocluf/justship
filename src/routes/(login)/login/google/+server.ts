import { google } from '$lib/server/auth';
import { generateState, generateCodeVerifier } from 'arctic';
import { redirect } from '@sveltejs/kit';

import type { RequestEvent } from '@sveltejs/kit';
import { dev } from '$app/environment';

export async function GET(event: RequestEvent): Promise<Response> {
	const state = generateState();
	const codeVerifier = generateCodeVerifier();
	const url = await google.createAuthorizationURL(state, codeVerifier, {
		scopes: ['https://www.googleapis.com/auth/userinfo.email', 'openid']
	});
	event.cookies.set('code_verifier', codeVerifier, {
		secure: !dev, // set to false in localhost
		path: '/',
		httpOnly: true,
		maxAge: 60 * 10 // 10 min
	});

	event.cookies.set('google_oauth_state', state, {
		path: '/',
		secure: !dev,
		httpOnly: true,
		maxAge: 60 * 10,
		sameSite: 'lax'
	});

	redirect(302, url.toString());
}
