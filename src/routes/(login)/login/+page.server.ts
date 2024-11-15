import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { error, fail, redirect } from '@sveltejs/kit';
import { createNewUser, getUserByEmail } from '$lib/server/database/user.model.js';
import { generateId } from 'lucia';
import {
	createEmailVerificationToken,
	deleteAllEmailTokensForUser
} from '$lib/server/database/emailtoken.model.js';
import { loginEmailHtmlTemplate, sendEmail } from '$lib/server/email/email';
import { env } from '$env/dynamic/private';
import { env as public_env } from '$env/dynamic/public';
import { lucia } from '$lib/server/auth';
import { PUBLIC_ORIGIN } from '$env/static/public';
import { createSignin, getSignins } from '$lib/server/database/signin.model';
import { dev } from '$app/environment';
import { loginFormSchema } from '$lib/components/login/schema';
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

export const load = async (e) => {
	const form = await superValidate(zod(loginFormSchema));
	return { form, user: e.locals.user };
};

export const actions = {
	login_with_email: async ({ request, getClientAddress }) => {
		const form = await superValidate(request, zod(loginFormSchema));
		if (!form.valid) {
			return fail(400, { form });
		}

		let user = await getUserByEmail(form.data.email);

		if (!user) {
			user = await createNewUser({
				id: generateId(15),
				email: form.data.email,
				email_verified: false
			});
			if (!user) {
				error(500, 'Failed to create new user');
			}
		}

		const ip_address = getClientAddress();

		const signins = await getSignins({
			email: form.data.email,
			ip_address
		});

		const ratelimit = env.SIGNIN_IP_RATELIMIT ? parseInt(env.SIGNIN_IP_RATELIMIT) : 20;

		if (signins.length > ratelimit) {
			form.errors.email = [
				'Too many signins from this IP address in the last hour, please try again later'
			];
			return fail(429, { form });
		}

		await createSignin({
			email: form.data.email,
			ip_address,
			logged_in_at: new Date()
		});

		await deleteAllEmailTokensForUser(user.id);
		const verification_token = await createEmailVerificationToken(user.id, user.email);
		const origin = new URL(request.url).origin;
		const verificationLink =
			origin + '/login/email-verification?verification_token=' + verification_token;

		if (dev) {
			// log verification link so you can log in locally
			console.log('Verification Link:', verificationLink);
		}

		if (process.env.NODE_ENV === 'test') {
			// Write verification link to file for test to read
			const testResultsDir = join(process.cwd(), 'test-results');
			mkdirSync(testResultsDir, { recursive: true });
			writeFileSync(join(testResultsDir, 'verification-link.txt'), verificationLink);
		}

		await sendEmail({
			from: `${public_env.PUBLIC_PROJECT_NAME} <${env.FROM_EMAIL}>`,
			to: user.email,
			subject: `Your activation link for ${public_env.PUBLIC_PROJECT_NAME}`,
			htmlBody: loginEmailHtmlTemplate({
				product_url: PUBLIC_ORIGIN,
				product_name: public_env.PUBLIC_PROJECT_NAME,
				action_url: verificationLink
			})
		});

		return { form };
	},

	signout: async (e) => {
		if (!e.locals.session) {
			return fail(401);
		}
		await lucia.invalidateSession(e.locals.session.id);
		const sessionCookie = lucia.createBlankSessionCookie();
		e.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});
		redirect(302, '/login');
	}
};
