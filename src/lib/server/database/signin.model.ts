import { eq, or } from 'drizzle-orm';
import { db } from './db';
import { signinTable } from './schema';
import { TimeSpan, createDate } from 'oslo';

export const getSignins = async (signin: { email: string; ip_address: string }) => {
	// 0. delete all signins that are older than 1 hour
	// 1. return all signins from this ip_address in the past hours
	const batchResult = await db.batch([
		db.delete(signinTable).where(eq(signinTable.logged_in_at, createDate(new TimeSpan(-1, 'h')))),
		db
			.select()
			.from(signinTable)
			.where(or(eq(signinTable.email, signin.email), eq(signinTable.ip_address, signin.ip_address)))
	]);
	return batchResult[1];
};

export const createSignin = async (signin: typeof signinTable.$inferInsert) => {
	await db.insert(signinTable).values(signin);
};
