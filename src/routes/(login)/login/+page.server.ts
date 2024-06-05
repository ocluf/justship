import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { error, fail, redirect } from '@sveltejs/kit';
import { createNewUser, getUserByEmail } from '$lib/server/database/user.model.js';
import { generateId } from 'lucia';
import {
	createEmailVerificationToken,
	deleteAllEmailTokensForUser
} from '$lib/server/database/emailtoken.model.js';
import { loginEmailHtmlTemplate, sendEmail } from '$lib/server/email/email.js';
import { env } from '$env/dynamic/private';
import { env as public_env } from '$env/dynamic/public';
import { lucia } from '$lib/server/auth';
import { PUBLIC_ORIGIN } from '$env/static/public';

// Name has a default value just to display something in the form.
const schema = z.object({
	email: z.string().email()
});

export const load = async (e) => {
	const form = await superValidate(zod(schema));

	return { form, user: e.locals.user };
};

export const actions = {
	login_with_email: async ({ request }) => {
		const form = await superValidate(request, zod(schema));

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
				throw error(500, 'Failed to create new user');
			}
		}

		await deleteAllEmailTokensForUser(user.id);
		const verification_token = await createEmailVerificationToken(user.id, user.email);
		const origin = new URL(request.url).origin;
		const verificationLink =
			origin + '/login/email-verification?verification_token=' + verification_token;

		await sendEmail({
			from: `${public_env.PUBLIC_PROJECT_NAME} <${env.RESEND_EMAIL}>`,
			to: user.email,
			subject: `Your activation link for ${public_env.PUBLIC_PROJECT_NAME}`,
			html: loginEmailHtmlTemplate({
				product_url: PUBLIC_ORIGIN,
				product_name: public_env.PUBLIC_PROJECT_NAME,
				action_url: verificationLink
			}),
			headers: {
				'X-Entity-Ref-ID': generateId(20)
			}
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
