/* eslint-disable no-irregular-whitespace */
import { SMTPClient } from 'emailjs';
import { POSTMARK_SERVER_TOKEN } from '$env/static/private';
import { dev } from '$app/environment';
import { inline } from '@css-inline/css-inline';
import layout from './layout.html?raw';
import login from './login-email.html?raw';
import postmark from 'postmark';

const localClient = new SMTPClient({
	host: 'localhost',
	port: 1025,
	ssl: false
});

type LayoutEmailVariables = {
	product_url: string;
	product_name: string;
};

type LoginEmailVariables = LayoutEmailVariables & {
	action_url: string;
};

// NOTE: I included this initial authentication email template so that you can get started right away.
// It was created with the Postmark template editor. It is better to create your emails there and than send emails with
// postmarkClient.sendEmailWithTemlate()

export const loginEmailHtmlTemplate = (variables: LoginEmailVariables) => {
	return inline(
		layout
			.replaceAll('{{{ @content }}}', login)
			.replaceAll('{{ product_url }}', variables.product_url)
			.replaceAll('{{ product_name }}', variables.product_name)
			.replaceAll('{{ action_url }}', variables.action_url)
	);
};

const sendTestEmail = async (options: {
	from: string;
	to: string;
	subject: string;
	html: string;
}) => {
	try {
		await localClient.sendAsync({
			text: options.subject,
			from: options.from,
			to: options.to,
			subject: options.subject,
			attachment: [{ data: options.html, alternative: true }]
		});
		console.log(`Test email sent to ${options.to}`);
	} catch (e) {
		console.error(e);
	}
};

export const sendEmail = async (options: {
	from: string;
	to: string;
	subject: string;
	html: string;
	headers?: Record<string, string>;
}) => {
	try {
		if (dev) {
			return await sendTestEmail(options);
		}
		const postmarkClient = new postmark.ServerClient(POSTMARK_SERVER_TOKEN);
		const result = await postmarkClient.sendEmail({
			From: options.from,
			To: options.to,
			Subject: options.subject,
			HtmlBody: options.html
		});
		console.log(result);
	} catch (e) {
		console.error(e);
	}
};
