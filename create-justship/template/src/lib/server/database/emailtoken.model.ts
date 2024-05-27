import { eq } from 'drizzle-orm';
import { db } from './db';
import { emailVerificationTokenTable } from './schema';
import { generateId } from 'lucia';
import { TimeSpan, createDate } from 'oslo';

export const deleteAllEmailTokensForUser = async (userId: string) => {
	await db
		.delete(emailVerificationTokenTable)
		.where(eq(emailVerificationTokenTable.user_id, userId));
};

export const createEmailVerificationToken = async (
	userId: string,
	email: string
): Promise<string> => {
	const tokenId = generateId(40);
	await db.insert(emailVerificationTokenTable).values({
		id: tokenId,
		user_id: userId,
		email,
		expires_at: createDate(new TimeSpan(2, 'h'))
	});
	return tokenId;
};

export const deleteEmailToken = async (tokenId: string) => {
	await db.delete(emailVerificationTokenTable).where(eq(emailVerificationTokenTable.id, tokenId));
};

export const getEmailToken = async (tokenId: string) => {
	const token = await db
		.select()
		.from(emailVerificationTokenTable)
		.where(eq(emailVerificationTokenTable.id, tokenId));
	if (token.length === 0) {
		return null;
	} else {
		return token[0];
	}
};
