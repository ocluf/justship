import type { signinTable } from './server/database/schema';

export type Link = {
	name: string;
	href: string;
};

export type Faq = {
	question: string;
	answer: string; // HTML
};

export type Signin = typeof signinTable.$inferInsert;
