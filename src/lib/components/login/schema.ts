import { z } from 'zod';

export const loginFormSchema = z.object({
	email: z.string().email()
});

export type LoginFormSchema = typeof loginFormSchema;
