import type { signinTable } from './server/database/schema';

export type Signin = typeof signinTable.$inferInsert;
